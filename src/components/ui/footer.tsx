import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  AwardIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 mt-12 border-t border-gray-200 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand / About */}
          <div>
            <Image
                        src="/assets/logo1.jpeg"
                        height={60}
                        width={60}
                        alt={"devfolio logo"}
                        className="mb-3"
                      />
            <p className="text-sm text-gray-600 leading-relaxed">
              Full-Stack Web Developer. Membangun aplikasi web modern dan responsif 
              menggunakan Laravel, PHP, React.js, dan MySQL.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm uppercase tracking-wider mb-4">
              NAVIGASI
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/#certificate" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                  Certificate
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm uppercase tracking-wider mb-4">
              KONTAK
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <PhoneIcon className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span>0851-1130-9091</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <MailIcon className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <a 
                  href="mailto:zulmuhamad2022@gmail.com" 
                  className="hover:text-gray-900 transition-colors hover:underline"
                >
                  zulmuhamad2022@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPinIcon className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                <span>Pamulang, Tangerang Selatan</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm uppercase tracking-wider mb-4">
              MEDIA SOSIAL
            </h3>
            <div className="flex gap-3 flex-wrap">
              <Link 
                href="https://github.com/muhamadzul"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-gray-800 p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </Link>
              <Link 
                href="https://linkedin.com/in/muhamadzul"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-[#0a66c2] p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </Link>
              <Link 
                href="https://instagram.com/zulubahad09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </Link>
              
              <Link 
                href="mailto:zulmuhamad2022@gmail.com"
                className="bg-gray-200 hover:bg-red-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </Link>
            </div>

            
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()}
            <Link href="https://github.com/muhamadzulunpam" target="_blank" className="ml-1 text-gray-700 hover:text-gray-900 hover:underline">
              Muhamad Zul Sa&apos;ban
            </Link>
            , All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}