"use client"
import React from 'react'
import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Link from 'next/link'
import { contactFormSchema } from '@/schema/contact'
import { toast } from 'sonner'



const socialLinks = [
    {
        Icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=61576950210343"
    },
    {
        Icon: Twitter,
        href: "https://twitter.com/yourprofile"
    },
    {
        Icon: Instagram,
        href: "https://www.instagram.com/xap_rise?igsh=YzljYTk1ODg3Zg=="
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        service: "",
        company: "",
        email: "",
        phone: "",
        query: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const validatedData = await contactFormSchema.safeParseAsync(formData)
        if (!validatedData.success) {
            const errorMessage = validatedData.error.errors[0]?.message || "Validation failed";
            console.log(errorMessage)
            return
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(validatedData.data)
            })

            const responseJson = await response.json()

            if (!response.ok) {
                toast.error(responseJson.error)
                return
            }

            toast.success("Message Sent.")
        }
        // eslint-disable-next-line
        catch (error: any) {
            toast.error(error.message)
        }
    }


    return (
        <div className='bg-black min-w-screen min-h-screen'>
            <HeroBannerWithRouteName tagline='For Any Query' pageName='Contact Us' />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-5 bg-black text-white p-6">
                {/* text content */}
                <div className="space-y-6 w-full max-w-md">
                    <div className="space-y-2">
                        <p className="text-emerald-500 uppercase font-medium text-sm">CONTACT WITH US</p>
                        <h2 className="text-4xl font-bold tracking-tight">LET&apos;S WORK TOGETHER?</h2>
                        <p className="text-gray-400 mt-4">
                            Your Win is Our Success. Let&apos;s connect to discuss your project, and build a relation that gives your business new sky-high limits.
                        </p>
                    </div>

                    <div className="space-y-4 mt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-gray-300">Karachi, Sindh, Pakistan</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-gray-300">+92 334-295024</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-gray-300">xaprise.solutions@gmail.com</p>
                                <p className="text-gray-300">habib.dev.2006@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mt-8">
                        <h3 className="font-bold text-xl">Follow Us</h3>
                        <p className="text-gray-400">Follow us on Social Network</p>
                        <div className="flex gap-2 mt-2">
                            {socialLinks.map((socialhandle, index) => (
                                <Link
                                    key={index}
                                    href={socialhandle.href}
                                    className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                                >
                                    <socialhandle.Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 p-8 rounded-md">
                    <h3 className="text-xl font-bold mb-6 text-center">Make a Free Consulting</h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm mb-1">
                            Company/Organization
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="service" className="block text-sm mb-1">
                            Select Service <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                            <option value="" disabled>Select a service</option>
                            <option value="Autonomous AI Agents Development">Autonomous AI Agents Development</option>
                            <option value="AI Voice Agents & Automated Workflows">AI Voice Agents & Automated Workflows</option>
                            <option value="Enterprise Application Development">Enterprise Application Development</option>
                            <option value="Custom Web Development">Custom Web Development</option>
                            <option value="API Development And Integration">API Development And Integration</option>
                            <option value="Headless CMS Integration">Headless CMS Integration (JamStack)</option>
                            <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                            <option value="Single Page Applications">Single Page Applications</option>
                            <option value="Migration And Upgradation">Migration And Upgradation</option>
                            <option value="Consulting">Consulting</option>
                            {/* Add more services as needed */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="query" className="block text-sm mb-1">
                            Query
                        </label>
                        <textarea
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
