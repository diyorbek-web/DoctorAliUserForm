import React, { useState } from "react";
import Header from "./Header";
import SendMessage from "./SendMessage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const User = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    address: "",
    addressTwo: "",
  });
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, phoneNumber, addressTwo } = formData;
    if (!firstName || !phoneNumber || !addressTwo) {
      setMessage("Iltimos, majburiy maydonlarni to'ldiring.");
      return;
    }
    const message = `Yangi foydalanuvchi ma'lumotlari:\n\nIsm: ${firstName}\nTelefon: ${phoneNumber}\nYashash manzili: ${addressTwo}`;
    try {
      await SendMessage(message); // SendMessage funksiyasi to'g'ri ishlashini tekshiring
      setMessage("Ma'lumotlar muvaffaqiyatli yuborildi!");
      setFormData({
        firstName: "",
        phoneNumber: "",
        addressTwo: "",
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Ikona 3 soniya davomida ko'rinadi
    } catch (error) {
      setMessage("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  return (
    <div className="w-full h-screen mx-auto p-6 bg-[#035D56]">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-[17px] max-w-[26rem] mx-auto"
      >
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-2 w-full text-gray-900"
            placeholder="Ism familyangiz..."
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-2 w-full text-gray-900"
            placeholder="Telefon raqamingiz..."
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="addressTwo"
            value={formData.addressTwo}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-2 w-full text-gray-900"
            placeholder="Yashash manzilingiz..."
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-md w-full hover:bg-teal-700 transition"
        >
          Yuborish
        </button>
      </form>

      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center flex-col">
            <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" />
            <p className="text-2xl font-semibold text-gray-800">Bajarildi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
