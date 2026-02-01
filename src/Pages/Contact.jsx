import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    emailjs
      .sendForm(
        'service_nhe7ig2', // ✅ Replace with your actual service ID
        'template_9gauuz3', // ✅ Replace with your actual template ID
        formRef.current,
        'R-GjJ9md5bSQP3o9Q' // ✅ Replace with your public key (EmailJS user/public key)
      )
      .then(() => {
        setSuccess(true);
        formRef.current.reset();
      })
      .catch((err) => {
        alert('Something went wrong. Please try again.');
        console.error(err);
      });
  };

  return (
    <section id="contact" className="bg-[#0e1121] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-500 text-center mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#1c1f3a] p-8 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-transparent border border-pink-500 rounded-lg text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-transparent border border-pink-500 rounded-lg text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 bg-transparent border border-pink-500 rounded-lg text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-400 text-center pt-2">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Right: Contact Info */}
          <div className="bg-[#1c1f3a] p-8 rounded-xl shadow-md flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4 text-lg">
              <FaEnvelope className="text-pink-500" />
              <a href="mailto:sobanahmed9801@gmail.com" className="hover:underline">
                ks4823584@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaPhoneAlt className="text-pink-500" />
              <a href="tel:+923150236925" className="hover:underline">
                +92 3352404462
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaLinkedin className="text-pink-500" />
              <a
                href="https://www.linkedin.com/in/muhammad-maaz-434628350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/muhammad-maaz-434628350
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaGithub className="text-pink-500" />
              <a
                href="https://github.com/maazkhalid96"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/maazkhalid96
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
