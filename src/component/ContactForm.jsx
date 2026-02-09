import React, { useState } from "react";
import emailjs from "emailjs-com";
import { section } from "framer-motion/client";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t7toszl", // Your EmailJS Service ID
        "template_k8b4wj3", // Your EmailJS Template ID
        formData,
        "xrD3CoYr43OP9gInv", // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg mx-auto p-6"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-all"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="p-4 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
        />

        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-500 transition-all shadow-xl"
        >
          Send Message
        </button>

        {sent && (
          <p className="text-green-400 font-semibold text-center mt-2">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}
