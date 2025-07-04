import React from 'react'
import TeamMember from './TeamMemberCard';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
function OurExperts() {
     const dummyExperts = [
        
        {
            name: "Muhammad Anees",
            title: "Founder, CTO",
            imageUrl: "/images/anees.png",
            socialLinks: [
                { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61576950210343" },
                { Icon: Twitter, url: "https://x.com/xapriseSolution" },
                { Icon: Instagram, url: "https://www.instagram.com/xap_rise/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/posts/xaprise_xaprise-voiceai-customerexperience-activity-7345165887664021505-Ea-0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETfzR4BJO94XGe3PUjQGHlNJO6EiTi-Iug" },
            ],
        },
        {
            name: "Habib Ullah",
            title: "Founder, CEO",
            imageUrl: "/images/habib.jpg",
            socialLinks: [
                { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61576950210343" },
                { Icon: Twitter, url: "https://x.com/xapriseSolution" },
                { Icon: Instagram, url: "https://www.instagram.com/xap_rise/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/posts/xaprise_xaprise-voiceai-customerexperience-activity-7345165887664021505-Ea-0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETfzR4BJO94XGe3PUjQGHlNJO6EiTi-Iug" },
            ],
        },
        {
            name: "Nirma Qureshi",
            title: "Designing Head",
            imageUrl: "/images/na.jpg",
            socialLinks: [
                { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61576950210343" },
                { Icon: Twitter, url: "https://x.com/xapriseSolution" },
                { Icon: Instagram, url: "https://www.instagram.com/xap_rise/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/posts/xaprise_xaprise-voiceai-customerexperience-activity-7345165887664021505-Ea-0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETfzR4BJO94XGe3PUjQGHlNJO6EiTi-Iug" },
            ],
        },
        {
            name: "Parizah Shaikh",
            title: "Business Development Executive",
            imageUrl: "/images/parizah.png",
            socialLinks: [
                { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61576950210343" },
                { Icon: Twitter, url: "https://x.com/xapriseSolution" },
                { Icon: Instagram, url: "https://www.instagram.com/xap_rise/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/posts/xaprise_xaprise-voiceai-customerexperience-activity-7345165887664021505-Ea-0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETfzR4BJO94XGe3PUjQGHlNJO6EiTi-Iug" },
            ],
        },

    ];
    return (
        <section className="my-24 w-full bg-black py-12 flex justify-center items-center flex-col">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <div className="inline-flex items-center border border-emerald-500 rounded-sm px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                    <span className="text-gray-300 tracking-wider text-sm font-medium">OUR EXPERTS</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 ml-3"></div>
                </div>
            </motion.div>

            <div className="w-full mx-auto px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
                {dummyExperts.map((expert, index) => (
                    <TeamMember key={index} {...expert} />
                ))}
            </div>
        </section>
    );
}

export default OurExperts