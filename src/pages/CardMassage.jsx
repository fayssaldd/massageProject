import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function CardMassage({type,description,image,benefits}) {
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
            <CardFooter>
                <div>
                  <p className='font-bold underline'>فوائد</p>
                  <p> {benefits} </p>
                </div>
            </CardFooter>
        </Card>
    </>
  )
}
