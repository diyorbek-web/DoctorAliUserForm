import axios from "axios";

// Token va chat ID ni o'zgartiring
const token = "7409721677:AAFWLTjkNfRkNJ1ypwsP5DqXDjq88-hrsek";
const chatId = "1488177635"; // Foydalanuvchi yoki guruh chat ID sini o'zgartiring

// Xabar yuborish
const sendMessage = async (message) => {
  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
    console.log("Xabar yuborildi!");
  } catch (error) {
    console.error("Xabar yuborishda xato:", error);
  }
};

// Xabar yuboring
sendMessage("Salom, bu botdan xabar!");
export default sendMessage;
