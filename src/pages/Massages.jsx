import React from 'react'
import massages from '../data/Massages.json'

import massage2 from "../assets/images/massage2.jpg"
import massage3 from "../assets/images/massage3.jpg"
import massage4 from '../assets/images/massage4.jpg'
import fm1 from '../assets/images/fm1.jpg'
import fm2 from '../assets/images/fm2.jpg'
import fm3 from '../assets/images/fm3.jpg'
import fm4 from '../assets/images/fm4.png'
// import massage5 from "../assets/images/massage5.jpg"
// import massage6 from "../assets/images/massage6.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import CardMassage from './CardMassage'
export default function Massages() {
  // const massages = [
  //   {
  //     "type": "المساج السويدي",
  //     "description": "يعد المساج السويدي من أكثر أنواع التدليك شهرة واستخدامًا. يركز على تحسين الدورة الدموية وتخفيف التوتر باستخدام حركات طويلة ودائرية وضغط خفيف إلى متوسط.",
  //     "benefits": "الاسترخاء العام، تحسين الدورة الدموية، تخفيف التوتر العضلي.",
  //     "image": massage2
      
  //   },
  //   {
  //     "type": "مساج الأنسجة العميقة",
  //     "description": "يستخدم ضغطًا أقوى مقارنة بالمساج السويدي ويستهدف الأنسجة العميقة والعضلات. مثالي للأشخاص الذين يعانون من توتر عضلي أو إصابات.",
  //     "benefits": "تخفيف الألم العضلي المزمن، معالجة الإصابات العضلية، تحسين مرونة العضلات."
  //     ,"image": fm1
    
  //   },
  //   {
  //     "type": "مساج الحجر الساخن",
  //     "description": "يستخدم الحجارة الساخنة مع تقنيات المساج التقليدية. يتم وضع الحجارة على نقاط معينة من الجسم لتحسين الدورة الدموية وتخفيف التوتر.",
  //     "benefits": "تحسين الاسترخاء العميق، تخفيف الآلام والتوتر، تعزيز الاسترخاء العضلي."
  //     ,"image": fm2
    
  //   },
  //   {
  //     "type": "مساج تايلندي",
  //     "description": "يعتمد على تقنيات الضغط والتمدد لتحريك الجسم بشكل متوازن، ويجمع بين المساج والمواقف اليوغا لتعزيز الراحة العامة.",
  //     "benefits": "زيادة مرونة الجسم، تحسين الطاقة والتوازن، تخفيف التوتر."
  //     ,"image": fm3
    
  //   },
  //   {
  //     "type": "مساج الرياضي",
  //     "description": "مصمم خصيصًا للرياضيين والأشخاص النشطين بدنيًا. يركز على تحسين الأداء الرياضي وتقليل الإجهاد الناتج عن التمارين.",
  //     "benefits": "تسريع التعافي بعد التمرين، تحسين المرونة ومنع الإصابات، تخفيف الآلام العضلية."
  //     ,"image": fm4
    
  //   },
  //   {
  //     "type": "المساج العلاجي",
  //     "description": "يتم استخدامه لعلاج بعض الحالات الطبية مثل آلام الظهر المزمنة أو الإصابات الجسدية. يتم التركيز على المناطق المصابة بالتنسيق مع احتياجات العميل.",
  //     "benefits": "تخفيف الألم المزمن، معالجة الإصابات، تحسين الحركة والمرونة."
  //     ,"image": fm1
    
  //   },
  //   {
  //     "type": "مساج الأروماثيرابي (العلاج بالروائح)",
  //     "description": "يجمع بين تقنيات المساج واستخدام الزيوت العطرية المهدئة لتعزيز الاسترخاء وتحسين الحالة النفسية.",
  //     "benefits": "تحسين الاسترخاء النفسي والجسدي، تخفيف التوتر، تحسين المزاج."
  //     ,"image": fm2
    
  //   },
  //   {
  //     "type": "مساج شياتسو (الضغط الياباني)",
  //     "description": "نوع من المساج الياباني يعتمد على الضغط بالإصبع على نقاط معينة في الجسم لتحسين تدفق الطاقة (كي) وتخفيف التوتر.",
  //     "benefits": "تحسين توازن الطاقة، تخفيف التوتر، تعزيز الصحة العامة."
  //     ,"image": fm3
    
  //   },
  //   {
  //     "type": "مساج الرفلكسولوجي (تدليك القدمين)",
  //     "description": "يعتمد على تدليك نقاط محددة في القدمين واليدين التي ترتبط بأعضاء الجسم المختلفة. يهدف لتحسين الصحة العامة من خلال هذه النقاط.",
  //     "benefits": "تحسين صحة الجسم العامة، تخفيف الآلام والتوتر، تعزيز الاسترخاء."
  //     ,"image": fm4
    
  //   },
  //   {
  //     "type": "المساج الليمفاوي",
  //     "description": "يستهدف تنشيط الجهاز الليمفاوي لتصريف السوائل الزائدة والسموم من الجسم. يتم استخدام حركات خفيفة ولطيفة.",
  //     "benefits": "تحسين الدورة الليمفاوية، تخفيف التورم، تعزيز جهاز المناعة."
  //     ,"image": massage2
    
  //   }
  // ]
  const massages = [
    {
      "service": "مساج VIP",
      "price": 500,
      "description": "تجربة فاخرة توفر لك أعلى مستويات الاسترخاء، يتم استخدام تقنيات مميزة لتخفيف التوتر وتنشيط الجسم، مثالية لمن يبحث عن جلسة علاجية راقية."
      ,"image": fm1
    },
    {
      "service": "مساج عادي",
      "price": 400,
      "description": "مساج تقليدي يركز على تخفيف التوتر العضلي وتحسين الدورة الدموية باستخدام حركات لطيفة ومريحة تناسب الجميع."
      ,"image": fm1
    
    },
    {
      "service": "حمام ملكي",
      "price": 500,
      "description": "تجربة ملوكية مميزة، تجمع بين تنظيف عميق للجسم وتدليك مريح لتعزيز الشعور بالنظافة والنقاء مع الراحة التامة."
      ,"image": fm1
    
    },
    {
      "service": "حمام مغربي",
      "price": 450,
      "description": "تقليد شرقي قديم يستخدم الصابون الأسود المغربي والليفة التقليدية لتنقية البشرة وتجديدها، يخلص الجسم من السموم ويعزز الشعور بالانتعاش."
      ,"image": fm1
    
    },
    {
      "service": "إزالة الشعر بالخيط",
      "price": 400,
      "description": "تقنية فعّالة ولطيفة لإزالة الشعر غير المرغوب فيه باستخدام الخيط، مثالية للمناطق الحساسة وتضمن الحصول على بشرة ناعمة ونظيفة."
      ,"image": fm1
    
    },
    {
      "service": "إزالة الشعر بالشمع (واكس)",
      "price": 400,
      "description": "طريقة فعالة وسريعة لإزالة الشعر، تزيل الشعر من الجذور وتترك البشرة ناعمة لأطول فترة ممكنة، مناسبة لجميع أنواع البشرة."
      ,"image": fm1
    
    },
    {
      "service": "باديكير",
      "price": null,
      "description": "جلسة عناية شاملة للقدمين، تشمل تنظيف وترطيب الأظافر وإزالة الجلد الميت، لضمان قدمين ناعمتين وأظافر صحية وجذابة."
      ,"image": fm1
    
    }
  ]
  
  return (
    <div id='khadamtona' className='w-full max-sm:mt-8 mt-16 flex flex-col justify-center items-center'>
            <p className='text-4xl mb-5 underline text-blue-700 font-semibold'>خدماتنا</p>
    <Carousel className="w-[30rem] lg:w-full   max-sm:w-80  max-w-4xl">
          <CarouselContent className="-ml-1">
            {
              massages.map((massage) => (
                <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <CardMassage type={massage.service} price={massage.price} description={massage.description} image={massage.image} />
                </div>
                </CarouselItem>
              ))
            }
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}
