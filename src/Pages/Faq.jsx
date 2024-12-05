import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();

  const faqData = [
    {
      category: "SHIPPING",
      questions: [
        {
          question: "What Shipping Methods Are Available?",
          answer:
            "Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.",
        },
        {
          question: "Do You Ship Internationally?",
          answer:
            "Hoodie tote bag mixtape tofu. Typewriter jean shorts wolf quinoa, messenger bag organic freegan cray.",
        },
        {
          question: "How Long Will It Take To Get My Package?",
          answer:
            "Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over.",
        },
      ],
    },
    {
      category: "PAYMENT",
      questions: [
        {
          question: "What Payment Methods Are Accepted?",
          answer:
            "Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level semiotics gentrify yr.",
        },
        {
          question: "Is Buying On-Line Safe?",
          answer:
            "Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth.",
        },
      ],
    },
    {
      category: "ORDER & RETURNS",
      questions: [
        {
          question: "How do I place an Order?",
          answer:
            "Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard.",
        },
        {
          question: "How Can I Cancel Or Change My Order?",
          answer:
            "Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred.",
        },
        {
          question: "Do I need an account to place an order?",
          answer:
            "Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.",
        },
        {
          question: "How Do I Track My Order?",
          answer:
            "Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb @Odd Future seitan normcore.",
        },
        {
          question: "How Can I Return a Product?",
          answer:
            "Kale chips Truffaut Williamsburg, hashtag fixie Pinterest raw denim c hambray drinking vinegar Carles street art Bushwick gastropub.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="bg-gray-200 p-4 flex items-center gap-1 absolute w-full top-[64px] md:top-[64px] lg:top-[120px] z-[990]">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight className="text-xl" />{" "}
        <p className="text-pink-500">FAQ</p>
      </div>
      <div className="min-h-[80vh] w-full p-6 bg-gray-100 mt-7 md:mt-0 lg:mt-10">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Frequently Asked Questions
        </h2>
        {faqData.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.category}
            </h3>
            <div className="space-y-4">
              {section.questions.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white shadow-md rounded-lg p-4 group"
                >
                  <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer">
                    {faq.question}
                    <FaChevronDown className="text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
