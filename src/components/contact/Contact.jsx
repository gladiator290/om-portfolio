import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="text-center mb-16">
        <span className="text-indigo-600 font-semibold">CONTACT</span>

        <h2 className="text-5xl font-bold text-slate-900 mt-4">
          Let's Work Together
        </h2>

        <p className="text-slate-600 mt-5">
          Open for Software Engineering, Full Stack Development and Internship
          Opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
  bg-white
  border
  border-slate-200
  rounded-[36px]
  p-10
  shadow-sm
  hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
  transition-all
"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <FiMail size={24} className="text-indigo-600" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Email</h3>

              <a
                href="mailto:ombhalla29@gmail.com"
                className="text-slate-600 hover:text-indigo-600"
              >
                ombhalla29@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <FiPhone size={24} className="text-indigo-600" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Phone</h3>

              <a
                href="tel:+917651971774"
                className="text-slate-600 hover:text-indigo-600"
              >
                +91 7651971774
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <FiMapPin size={24} className="text-indigo-600" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Location</h3>

              <p className="text-slate-600">Uttar Pradesh, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
  bg-white
  border
  border-slate-200
  rounded-[36px]
  p-10
  shadow-sm
  hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
  transition-all
"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              required
              className="
              w-full
              h-14
              px-5
              rounded-2xl
              border
              border-slate-200
              outline-none
              focus:border-indigo-500
            "
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
              className="
              w-full
              h-14
              px-5
              rounded-2xl
              border
              border-slate-200
              outline-none
              focus:border-indigo-500
            "
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              required
              className="
              w-full
              p-5
              rounded-2xl
              border
              border-slate-200
              outline-none
              resize-none
              focus:border-indigo-500
            "
            />

            <button
              type="submit"
              className="
              h-14
              px-8
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              flex
              items-center
              gap-2
              font-medium
              hover:scale-[1.02]
              transition-all
            "
            >
              Send Message
              <FiSend />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
