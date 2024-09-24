import React from 'react'
import massage4 from '../assets/images/massage4.jpg'
import Massages from './Massages'
import { MessageCircleCode, Phone } from 'lucide-react'
export default function Home() {


  return (
    <>
     
      <div id='raisia' 
      // style={{ backgroundImage: `url(${massage4})` }} 
      className={`flex bg-secondary w-full lg:grid-cols-4 md:grid-cols-2  items-center  bg-cover lg:gap-8 gap-4 h-screen max-sm:h-[85vh] p-3`}>

        <div className="backdrop-brightness-50 backdrop-blur-sm p-7 w-full max-md:order-1 max-sm:mt-9 items-center flex flex-col justify-center lg:col-span-2  md:rounded-br-xl lg:p-12">
          <div dir='rtl' className="text-6xl pb-8 font-semibold inline-flex italic items-center text-black dark:text-white ">
            <span className=" border-b-4 border-black [text-shadow:_0_4px_8px_#00BCD4] text-[white] font-mono italic ">
            مساج 
            </span>{" "}
            <span className="[text-shadow:_0_4px_8px_#00BCD4] text-[white] ms-2 font-mono italic border-b-4 border-black dark:border-white">
              {" "}
              منزلي
            </span>
           
          </div>
          <div dir='rtl' className='text-white mb-4'>
          <b className='[text-shadow:_0_4px_8px_#00BCD4] text-xl text-[#10c3da] border-b-2 border-black text-shadow'> تجربة فاخرة لجسمك وراحتك</b> <br /> دلل نفسك بتجربة مساج مريحة وأنت في منزلك. فريقنا من الأخصائيين يوفر جلسات مساج تعالج التوتر وتمنحك راحة فورية. اختر نوع المساج المناسب لك واستمتع بالتجربة التي تستحقها.
          </div>
          <div className='flex'>
            <a className="flex bg-green-500 text-white hover:bg-green-700 items-center justify-center p-3 rounded-sm" href='https://wa.me/12345954' >
              <span className='mr-2'>حجز الآن</span>
              <MessageCircleCode/>
            </a>
            <a className="flex mx-4 bg-blue-500 text-white hover:bg-blue-600 items-center justify-center p-3 rounded-sm" href='tel:342424453'>
              <span className='mr-2'>اتصال</span>
              <Phone />
            </a>
          </div>
          {/* <div dir='rtl' className='font-semibold text-lg text-white italic'>
                <b className='[text-shadow:_0_4px_8px_#00BCD4] text-xl text-[#10c3da] border-b-2 border-black text-sha text-blue-500'>"مساج منزلي – تجربة فاخرة لجسمك وراحتك"</b> دلل نفسك بتجربة مساج مريحة وأنت في منزلك. فريقنا من الأخصائيين يوفر جلسات مساج تعالج التوتر وتمنحك راحة فورية. اختر نوع المساج المناسب لك واستمتع بالتجربة التي تستحقها.
                <br /><br />
                <b className='[text-shadow:_0_4px_8px_#00BCD4] border-b-2 text-[#10c3da]  border-black text-xl '>"استمتع بالاسترخاء في منزلك مع خدمات المساج المنزلي الفاخرة"</b> تبحث عن الاسترخاء والتخلص من التوتر؟ نقدم لك تجربة مساج احترافية في راحة منزلك. احجز جلستك الآن ودعنا نعتني بجسمك وعقلك من خلال تقنيات تدليك مميزة تساعد على تنشيط الدورة الدموية وتخفيف التوتر.  
          </div> */}
        </div>
        {/* <div className="max-md:order-1 items-center flex flex-col justify-center lg:col-span-2 md:h-screen w-full md:rounded-br-xl lg:p-12 p-8">
          <img
            src={massage4}
            className="lg:w-[100%] rounded-3xl object-contain block mx-auto"
          />

        </div> */}
      </div>
    </>
  )
}
