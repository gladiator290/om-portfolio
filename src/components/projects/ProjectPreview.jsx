import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const VIRTUAL_VIEWPORTS = {
  desktop: { width: 1440, height: 900, fit: "width" },
  mobile: { width: 390, height: 844, fit: "contain" },
};

/**
 * Renders `children` at a fixed "virtual" pixel size, then measures the
 * real container (ResizeObserver) and visually scales that box down to
 * fit — so an iframe can be given a real desktop/mobile viewport width
 * (for correct responsive layout) while only ever occupying the small
 * card preview area. Desktop ("width" fit) pins to the top-left corner
 * so more of the page reads as a browser thumbnail; mobile ("contain"
 * fit) centers the whole device so it's never clipped.
 */
const ScaledViewport = ({ width, height, fit, children }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width: containerWidth, height: containerHeight } = entry.contentRect;
      const widthScale = containerWidth / width;
      const nextScale =
        fit === "contain"
          ? Math.min(widthScale, containerHeight / height)
          : widthScale;
      setScale(nextScale > 0 ? nextScale : 0);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [width, height, fit]);

  const centered = fit === "contain";

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div
        style={{
          position: "absolute",
          top: centered ? "50%" : 0,
          left: centered ? "50%" : 0,
          width: `${width}px`,
          height: `${height}px`,
          transform: centered
            ? `translate(-50%, -50%) scale(${scale})`
            : `scale(${scale})`,
          transformOrigin: centered ? "center" : "top left",
          opacity: scale === 0 ? 0 : 1,
          transition: "opacity 150ms ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Some production sites block iframe embedding via X-Frame-Options /
 * CSP frame-ancestors. There is no reliable cross-browser way to detect
 * that from JS (the browser silently blocks rendering), so this uses a
 * best-effort timeout: if the iframe hasn't fired `load` shortly after
 * mounting, we assume it's unavailable and show a fallback instead of a
 * blank/broken frame.
 */
const LiveIframePreview = ({ src, title, previewType }) => {
  const [status, setStatus] = useState("loading");
  const { width, height, fit } = VIRTUAL_VIEWPORTS[previewType] ?? VIRTUAL_VIEWPORTS.desktop;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "unavailable" : current));
    }, 4000);

    return () => clearTimeout(timer);
  }, [src]);

  if (status === "unavailable") {
    return (
      <div
        className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        gap-3
        bg-slate-50
        px-6
        text-center
      "
      >
        <p className="text-sm text-slate-500">
          Live preview unavailable — open the project to view it.
        </p>

        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-xl
          bg-gradient-to-r
          from-indigo-600
          to-violet-600
          text-white
          text-sm
          font-medium
        "
        >
          Open Project
          <FiExternalLink />
        </a>
      </div>
    );
  }

  return (
    <ScaledViewport width={width} height={height} fit={fit}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setStatus("loaded")}
        className="w-full h-full"
      />
    </ScaledViewport>
  );
};

const MobileScreenshotFrame = ({ image, title }) => (
  <div className="w-full h-full flex items-center justify-center bg-slate-100">
    <div
      className="
      relative
      h-[92%]
      max-h-[240px]
      aspect-[9/19.5]
      max-w-[80%]
      rounded-[26px]
      border-[6px]
      border-slate-900
      bg-slate-900
      shadow-[0_15px_40px_rgba(15,23,42,0.12)]
      overflow-hidden
    "
    >
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-1/3
        h-[8px]
        bg-slate-900
        rounded-b-lg
        z-10
      "
      />

      <img
        src={image}
        alt={`${title} mobile screenshot`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain bg-white"
      />
    </div>
  </div>
);

const ScreenshotPreview = ({ image, title, previewType }) => {
  if (previewType === "mobile") {
    return <MobileScreenshotFrame image={image} title={title} />;
  }

  return (
    <img
      src={image}
      alt={`${title} project preview`}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-contain"
    />
  );
};

const ProjectPreview = ({ image, liveUrl, title, previewType = "desktop" }) => {
  if (image) {
    return (
      <ScreenshotPreview image={image} title={title} previewType={previewType} />
    );
  }

  return (
    <LiveIframePreview
      src={liveUrl}
      title={`${title} live preview`}
      previewType={previewType}
    />
  );
};

export default ProjectPreview;
