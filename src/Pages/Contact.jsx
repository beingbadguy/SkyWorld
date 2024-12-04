import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="min-h-[80vh] w-full">
      <div className="bg-gray-200 p-4 flex items-center gap-1 absolute w-full top-[64px] md:top-[170px] lg:top-[120px] z-[990]">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight className="text-xl" />{" "}
        <p className="text-pink-500">Login</p>
      </div>

      <div className="w-full  mt-[300px]">
        <div className="mt-20  h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7123.799844720538!2d83.20271936362208!3d26.77945985651873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733281421369!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-[400px] mt-20"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full p-6 bg-gray-50 text-gray-700 relative ">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Contact Us For Any Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Directly */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Directly
            </h3>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              sunilgupta1577.skg@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-pink-500" />
              +91 9236727253
            </p>
          </div>

          {/* Headquarters */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Headquarters
            </h3>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-pink-500" />
              Semra SAHJANWA GORAKHPUR, UTTAR PRADESH 273209
            </p>
          </div>

          {/* Work With Us */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Work With Us
            </h3>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              Send your CV: sunilgupta1577.skg@gmail.com
            </p>
          </div>

          {/* Customer Service */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Customer Service
            </h3>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              sunilgupta1577.skg@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-pink-500" />
              +91 9236727253
            </p>
          </div>

          {/* Media Relations */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Media Relations
            </h3>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              sunilgupta1577.skg@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-pink-500" />
              +91 9236727253
            </p>
          </div>

          {/* Vendor Support */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Vendor Support
            </h3>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              sunilgupta1577.skg@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-pink-500" />
              +91 9236727253
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center  py-8 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white  rounded-lg p-6 space-y-4"
        >
          <div className="flex w-full items-center justify-between">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your Phone Number"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
