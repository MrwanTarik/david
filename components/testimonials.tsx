"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    text: "As a Computer Science student, he continuously expands his knowledge to stay ahead in the ever-evolving tech world. His goal is to create impactful digital experiences that blend creativity with technology.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5
  },
  {
    id: 2,
    text: "As a Computer Science student, he continuously expands his knowledge to stay ahead in the ever-evolving tech world. His goal is to create impactful digital experiences that blend creativity with technology.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5
  },
  {
    id: 3,
    text: "The platform has been instrumental in my trading journey. The funding options are flexible and the evaluation process is straightforward. I appreciate the transparency and support.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5
  },
  {
    id: 4,
    text: "I've tried several prop firms, but this one stands out with its fair rules and excellent customer service. The scaling opportunities are great for growing your account over time.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleItems, setVisibleItems] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => {
      const newIndex = prev === 0 ? testimonials.length - visibleItems : prev - 1
      return Math.max(0, Math.min(newIndex, testimonials.length - visibleItems))
    })
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => {
      const newIndex = prev === testimonials.length - visibleItems ? 0 : prev + 1
      return Math.max(0, Math.min(newIndex, testimonials.length - visibleItems))
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#2e3b7d] mb-4 sm:mb-0">
          Testimonials
        </h2>
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#e1e8f7] flex items-center justify-center text-[#6cb6ff] hover:bg-[#d7e0f4] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#e1e8f7] flex items-center justify-center text-[#6cb6ff] hover:bg-[#d7e0f4] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex gap-4 md:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / (visibleItems + 1))}%)`,
            width: `${(testimonials.length + 1) * (100 / (visibleItems))}%`
          }}
        >
          {/* Excellent Card */}
          <div className="min-w-[calc(100%/3)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-[#39b4ff] rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-white flex flex-col justify-center">
            <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-4">Excellent</h3>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 fill-white text-white mr-1" />
              ))}
            </div>
            <p className="text-[16px] md:text-[18px]">Based on 1400 reviews</p>
          </div>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-[calc(100%/3)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-[24px] md:rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 relative"
            >
              <div className="absolute top-6 md:top-8 right-6 md:right-8">
                <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar || "/placeholder.svg"} 
                    alt="Avatar" 
                    width={60} 
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#6cb6ff] text-[#6cb6ff] mr-1" />
                ))}
              </div>
              <p className="text-[16px] md:text-[18px] text-[#2e3b7d] pr-16">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}