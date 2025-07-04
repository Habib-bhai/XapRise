"use client"
import { useEffect, useState } from "react"
import Header from "@/components/header/Header"
import NavigationOverlay from "@/components/navigation-overlay/NavigationOverlay"
import ValuesCulture from "@/components/values-and-culture/ValuesCulture"
import { useLoadingDelay } from "@/hooks/use-loading-delay"
import LoadingScreen from "@/components/loading-screen/LoadingScreen"
import ProcessSection from "@/components/the-process/Process"
import CreativeBanner from "@/components/Banner/CreativeBanner"
import SuccessStories from "@/components/successStories/SuccessStories"
import ContactUs from "@/components/contact/Contactus"
import OurExperts from "@/components/team/OurExperts"
import ServicesComponent from "../components/servicesxyz/Service"
import PremiumHero from "@/components/hero/PremiumHeroSection"
import Footer from "@/components/footer/Footer"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoading = useLoadingDelay(1000) // 4 seconds minimum loading time
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null


  const dummyStories = [
    {
      title: "The School",
      description: "Product Designed to Fill the Gap Between Schools, Students, Parents and Teachers",
      imageUrl: "/images/theschool.png",
      metrics: "Increased Efficiency in Manangement",
      link: "https://school-management-system-bro.vercel.app/",
    },
    {
      title: "Custom E-Commerce",
      description: "Implemented a fully custom solution, created everything according to client's imagination.",
      imageUrl: "/images/ecomer.png",
      metrics: "User base grew by 25%",
      link: "https://milestone-3-ecommerce-website-ebon.vercel.app/",
    },
    {
      title: "Askary Institute",
      description: "A language and IELTS institute website, helping them in their branding, students aquiring and conducting TESTS",
      imageUrl: "/images/aksari.png",
      metrics: "Increase in business, and testing process",
      link: "https://askary-institute-web.vercel.app/",
    },
    {
      title: "Lucky Mart",
      description: "A frontend for an online Mart!",
      imageUrl: "/images/LUCKY_MART.png",
      metrics: "Operational costs reduced by 30%",
      link: "https://milestone-3-ecommerce-lemon.vercel.app/",
      
    },
    {
      title: "Project Epsilon",
      description: "Launched a new e-commerce platform that tripled sales.",
      imageUrl: "/images/cloudinovation.jpg",
      metrics: "Sales increased by 200%",
      link: "#",
    },
  ];


  return (
    <>
      {isLoading ? <LoadingScreen /> :
        <div className="w-screen bg-black text-white overflow-x-hidden">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <NavigationOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <PremiumHero />
          <ValuesCulture />
          <ServicesComponent />
          <ProcessSection />
          <CreativeBanner />
          <SuccessStories stories={dummyStories} />
          <ContactUs />
          <OurExperts />
          <Footer />


        </div>

      }
    </>
  )

}