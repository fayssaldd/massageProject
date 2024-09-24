import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import React from 'react';
function Footer() {
  return (
    <footer  dir='rtl'  className="bg-gray-800 p-4 flex max-sm:flex-col justify-center items-center w-full text-white ">
      

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-4">
        <p className='mb-3'>طريق عثمان بن عفان الفرعي، الازدهار، الرياض</p>
        <p>© 2024 جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
