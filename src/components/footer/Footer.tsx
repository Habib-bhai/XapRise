import Link from "next/link"
import { Phone, MapPin, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a1118] text-gray-300">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            <span className="text-2xl font-bold text-white">
              XAP<span className="text-emerald-500">RISE</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-500">
            <Phone className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-400">Call Any Time</p>
              <p className="text-lg">+92 3343295024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <MapPin className="w-6 h-6 text-emerald-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-gray-400">Karachi, Sindh Pakistan</p>

              </div>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Send className="w-5 h-5 text-emerald-500" />
                Say Hello
              </h3>
              <p className="text-gray-400">habib.dev.2006@gmail.com</p>
              <p className="text-gray-400">xaprise.solutions@gmail.com</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">See Our New updates</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email here..."
                  className="bg-gray-800 px-4 py-2 rounded-l outline-none flex-1"
                />
                <button className="bg-emerald-500 p-2 rounded-r">
                  <Send className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-3">
              {[
                "Autonomous AI Agents Development",
                "Custom Web Development",
                "Headless CMS Integration",
                "Enterprise Application Development",
                "E-Commerce Solutions",
                "API Development And Integration",
              ].map((item) => (
                <li key={item}>
                  <Link  href={`/service/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
                <li>
                  <Link href={"/about"} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={"/casestudy"} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href={"/about"} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href={"/project"} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    Our Portfolio
                  </Link>
                </li>
                <li>
                  <Link href={"/service"} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} className="text-gray-400 hover:text-emerald-500 transition-colors">
                    Contact
                  </Link>
                </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

