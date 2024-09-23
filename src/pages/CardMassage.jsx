import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { MessageCircleCode, Phone } from 'lucide-react'
export default function CardMassage({type,description,image,price}) {
  return (
    <>
        <Card dir='rtl'  className="shadow dark:text-white text-black " >
            <CardHeader>
                <CardTitle>{type}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex aspect-square items-center justify-center ">
                <img className='w-full' src={`${image}`} alt="" />
            </CardContent>
            <CardFooter className={'flex justify-between items-center p-4 border-t-2'}>
                <div className=''>
                  <p className='text-slate-300 font-bold  line-through'>{price + 100}</p>
                  <p className='text-red-500 font-bold font-mono'> {price} ر.س</p>
                </div>
                <div className='flex'>
                  <a href='https://wa.me/12345954' >
                    <MessageCircleCode className='bg-green-500 text-white w-9 h-9 p-1 hover:bg-green-600 hover:scale-125 rounded-sm mx-4'/>
                  </a>
                  <a href='tel:342424453'>
                    <Phone className='bg-blue-500 w-9 h-9 p-1  text-white hover:bg-blue-300 hover:scale-125 rounded-sm '/>
                  </a>
                </div>
            </CardFooter>
        </Card>
    </>
  )
}
