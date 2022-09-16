import React, { useEffect, useRef, useState } from 'react'
import {
    AiOutlineVerticalRight,
    AiOutlineVerticalLeft
} from 'react-icons/ai'

const slides = [
    "/images/slide-1.jpg",
    "/images/slide-2.jpg",
    "/images/slide-3.jpg",
    "/images/slide-4.jpg",
    "/images/slide-5.jpg",
    "/images/slide-6.jpg"
]

let count = 0, slideInterval
const size = slides.length

const Slides = () => {
    const [index, setIndex] = useState(0)
    const slideRef = useRef()

    // Automatic Slider
    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleNextClick()
        }, 3000)
    }
    const pauseSlider = () => {
        clearInterval(slideInterval)
    }
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-animation")
    }
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        slideRef.current.addEventListener('mouseenter', pauseSlider)
        slideRef.current.addEventListener('mouseleave', startSlider)

        startSlider()

        // cleanup function 
        return () => {
            pauseSlider()
        }
    }, [])

    const handlePreviousClick = () => {
        count = (index + size - 1) % size
        setIndex(count)
        slideRef.current.classList.add('fade-animation')
    }
    const handleNextClick = () => {
        count = (count + 1) % size
        setIndex(count)
        slideRef.current.classList.add('fade-animation')
    }

    return (
        <div ref={slideRef} className='w-[52vw]  select-none relative'>
            <img
                className='rounded-3xl'
                src={slides[index]}
                alt="slide" />
            <div
                className='absolute w-full top-1/2 transform 
                -translate-y-1/2 px-3 
                flex justify-between items-center'
            >
                <button
                    className='bg-black p-1 text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
                    onClick={handlePreviousClick}>
                    <AiOutlineVerticalRight size={30} />
                </button>
                <button
                    className='bg-black p-1 text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
                    onClick={handleNextClick}>
                    <AiOutlineVerticalLeft size={30} />
                </button>
            </div>
        </div>
    )
}

export default Slides