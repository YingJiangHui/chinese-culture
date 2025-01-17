"use client"
import { useRouter,usePathname } from 'next/navigation'

export const Nav = ()=>{
    const router = useRouter()
    console.log(router,"router",usePathname())
    return <>1</>
}