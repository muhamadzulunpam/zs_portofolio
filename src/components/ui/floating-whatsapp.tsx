"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  statusMessage?: string;
}

export function FloatingWhatsApp({
  phoneNumber,
  message = "Halo! Saya ingin konsultasi dengan Anda.",
  statusMessage = "Online",
}: FloatingWhatsAppProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">

        {/* Tooltip saat hover */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 bg-gray-900 dark:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
            Chat via WhatsApp

            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45" />
          </div>
        )}
        {/* Tombol WhatsApp */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="block group"
        >
            <div className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95">
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
            </div>
        </Link>

      </div>
    </div>
  );
}