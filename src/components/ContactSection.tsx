import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gw4p4yo", // Replace with your EmailJS service ID
        "template_1pmfz9n", // Replace with your EmailJS template ID
        {
          from_email: email,
          message: message,
        },
        "I19DsyAJcvR7ZAlXa" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section className="py-20 bg-sciFiBackground text-white" id="contact">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-10">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-sciFiCard p-8 rounded-lg shadow-lg space-y-6"
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="w-full py-3 bg-sciFiAccent text-black font-semibold rounded-md hover:bg-sciFiAccent/80 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
