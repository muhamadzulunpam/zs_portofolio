"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { PhoneIcon, MapPinIcon, ClockIcon, SendIcon } from "lucide-react";
import Link from "next/link";

interface ContactProps {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

export function Contact({ 
  email, 
  phone, 
  address, 
  github, 
  linkedin, 
  instagram, 
  twitter 
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Pesan Portfolio dari ${formData.name}`;

    const body = `Nama: ${formData.name}
  Email: ${formData.email}

  Pesan:
  ${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };
  return (
    <section id="contact" className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
      <h2 className="font-bold text-3xl md:text-5xl mb-12">Hubungi Saya</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-4">
          {/* Email */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <EnvelopeClosedIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Email</CardTitle>
                <CardDescription className="text-xs break-all">{email}</CardDescription>
              </div>
            </CardHeader>
          </Card>

          {/* Phone */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <PhoneIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Telepon</CardTitle>
                <CardDescription className="text-xs">{phone}</CardDescription>
              </div>
            </CardHeader>
          </Card>

          {/* Address */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <MapPinIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Alamat</CardTitle>
                <CardDescription className="text-xs">{address}</CardDescription>
              </div>
            </CardHeader>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
                <ClockIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Ketersediaan</CardTitle>
                <CardDescription className="text-xs">
                  WFO (Tangerang/Jakarta) atau WFH/Hybrid
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Media Sosial</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 pt-0">
              <Link href={github} target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <GitHubLogoIcon />
                </Button>
              </Link>
              <Link href={linkedin} target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <LinkedInLogoIcon/>
                </Button>
              </Link>
              <Link href={instagram} target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <InstagramLogoIcon/>
                </Button>
              </Link>
              <Link href={twitter} target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <TwitterLogoIcon/>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
              <CardDescription>
                Isi formulir di bawah ini untuk mengirim pesan langsung ke email saya.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="emailForm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="emailForm"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Masukkan email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <SendIcon className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}