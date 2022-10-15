import emailjs from '@emailjs/browser';

const sendMail = (data) => {
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data, import.meta.env.VITE_PUBLIC_KEY);
}

export default sendMail;