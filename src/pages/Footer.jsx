import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import React from 'react';
function Footer() {
  return (
    <footer  dir='rtl'  className="bg-gray-800 flex justify-center items-center text-white py-7">
      <div className="flex flex-col mt-[16px] justify-between items-center ">
        {/* Informations générales */}
        <div className="mb-6 md:mb-0">
          {/* <h2 className="text-2xl font-semibold">تواصل معنا</h2> */}
          <p className="text-gray-400">تابعنا على مواقع التواصل الاجتماعي</p>
        </div>

        {/* Liens vers les réseaux sociaux */}
        <div className="flex space-x-6 justify-between w-full mr-4 items-center">
          {/* Lien Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Instagram size={36} strokeWidth={1.75} />
          </a>

          {/* Lien Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
           <Facebook size={36} strokeWidth={1.75} />
          </a>

          {/* Lien WhatsApp */}
          <a
            href="https://wa.me/1234567890" // Remplace par ton numéro WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
           <MessageCircle size={36} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mr-12 text-gray-400 mt-4">
        <p className='mb-3'>طريق عثمان بن عفان الفرعي، الازدهار، الرياض</p>
        <p>© 2024 جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
