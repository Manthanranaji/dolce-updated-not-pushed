'use client';
import { useEffect , useRef } from "react";

export default function useReveal(){
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    entry.target.classList.add('animate-fade-up')
                    observer.unobserve(entry.target)
                }

            },
            {threshold: 0.3}
        )
        if (ref.current) observer.observe(ref.current)
            return () => observer.disconnect()
        
    }, [])
    return ref
}