'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    useEffect(()=>{
        const router = useRouter();
        router.push('/defaulter');
    })
  return (
    <div>page</div>
  )
}

export default page