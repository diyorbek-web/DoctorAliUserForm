import React, { useState } from "react";
import Header from "./Header";
import SendMessage from "./SendMessage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const User = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    status: "",
    phoneNumber: "",
    additionalPhoneNumber: "",
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
    const { firstName, lastName, phoneNumber } = formData;
    if (!firstName || !lastName || !phoneNumber) {
      setMessage("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    const message = `Yangi foydalanuvchi ma'lumotlari:\n\nIsm: ${firstName}\nFamilya: ${lastName}\nTelefon: ${phoneNumber}`;
    try {
      await SendMessage(message);
      setMessage("Ma'lumotlar muvaffaqiyatli yuborildi!");
      setFormData({
        firstName: "",
        lastName: "",
        birthDate: "",
        address: "",
        status: "",
        phoneNumber: "",
        additionalPhoneNumber: "",
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Ikona 3 soniya davomida ko'rinadi
    } catch (error) {
      setMessage("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-[#498E84]">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="bg-[#006051] p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <h1 className="text-[20px] md:mt-0 mt-[-20px] font-semibold text-white mb-6 text-center">
          Ma’lumotlaringizni tekshirib qoldiring, o’zimiz aloqaga chiqamiz!
        </h1>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Ism *(majburiy)
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
            placeholder="Ismingizni kiriting"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Familya *(majburiy)
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
            placeholder="Familyangizni kiriting"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Tugilgan sana
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Yashash manzili
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
            placeholder="Yashash manzilingizni kiriting"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Hozirgi holati
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
          >
            <option value="">Holatni tanlang</option>
            <option value="o'qiyman">O'qiyapman</option>
            <option value="ishlayman">Ishlayapman</option>
            <option value="ishsizman">Ishsizman</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Bog'lanish uchun telefon raqam *(majburiy)
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
            placeholder="Telefon raqamingizni kiriting"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Qo'shimcha telefon raqam
          </label>
          <input
            type="tel"
            name="additionalPhoneNumber"
            value={formData.additionalPhoneNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-900"
            placeholder="Qo'shimcha telefon raqam (ixtiyoriy)"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-md w-full hover:bg-teal-700 transition"
        >
          Yuborish
        </button>
        {message && <p className="mt-4 text-white text-center">{message}</p>}
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
