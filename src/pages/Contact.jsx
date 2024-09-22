import { MessageCircle } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion"
import whatsappImage from "../assets/images/whatsapp.png"
export default function Contact() {
  return (
    <>
    <div  id='contact' dir='rtl' className='p-5'
    >
        <p className='text-4xl mb-7 text-center underline text-blue-700 font-semibold'>تواصل معنا </p>
        <p className='text-center mb-7'>
            "هل لديك أي استفسارات أو تحتاج إلى مساعدة سريعة؟ نحن هنا لخدمتك! تواصل معنا عبر واتساب مباشرة للحصول على استجابة فورية ومساعدة مخصصة. لا تتردد، نحن جاهزون للرد على جميع أسئلتك!"
        </p>
        <motion.a 
            initial={{y:-5,scale:1}}
            animate={{y:0,scale: 1.2}}
            transition={{ repeat: Infinity, duration: 2 }}
            // transition={{duration:2}}
            // transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            href="https://wa.me/1234567890" // Remplace par ton numéro WhatsApp
            target="_blank"
            className='flex flex-row-reverse items-center justify-center text-3xl'
            >
            <img className='w-20' src={whatsappImage} alt="" />
            004345545353
        </motion.a> 
    </div>
    </>
  )
}
