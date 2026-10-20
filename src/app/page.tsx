/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
  InstagramLogoIcon,
  CalendarIcon,
  ClockIcon,
  CheckIcon,  
  IdCardIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import Avatar3D from "@/components/ui/Avatar3D";
import Image from "next/image";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Contact } from "@/components/ui/contact";

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Avatar */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="scale-90 sm:scale-100 lg:scale-110">
              <Avatar3D
                src="/assets/photo.png"
                alt={data.personalInfo.name}
                size={280}
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 space-y-4">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Hey 👋, I&apos;m {data.personalInfo.name}
              </h3>

              <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
                {data.personalInfo.title}
              </p>
            </div>

            <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
              <Button
                asChild
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/CV Muhamad Zul Saban.pdf" download>
                  📄 Download CV
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="#projects">
                  🖥️ View Project
                </Link>
              </Button>
            </div>

            {/* Social */}
            <div className="flex justify-center sm:justify-start gap-4">
              <Link href={data.contactInfo.github} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={data.contactInfo.instagram} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <InstagramLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={data.contactInfo.twitter} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={data.contactInfo.linkedin} prefetch={false}>
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-2 flex items-center">
                <Image
                  src={project.cover}
                  alt="Project 1"
                  height={200}
                  width={300}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="w-full lg:w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link
                      href={project.live_url}
                      prefetch={false}
                    >
                      <Button size="sm">
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* certifications SECTION */}
      <section
        id="certificate"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Sertifikat</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.certifications && data.certifications.length > 0 ? (
            data.certifications.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="flex flex-col">
                  {/* Foto Sertifikat */}
                  {cert.image && (
                    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <CardDescription>{cert.institution}</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                        <CheckIcon className="w-3 h-3 mr-1" />
                        {cert.status || "Kompeten"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Tahun: {cert.year}</span>
                      </div>
                      {cert.validUntil && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <ClockIcon className="w-4 h-4" />
                          <span>Berlaku hingga: {cert.validUntil}</span>
                        </div>
                      )}
                      {cert.credentialId && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            ID: {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  
                  {/* Tombol Lihat Sertifikat - Pojok Kanan Bawah */}
                  {cert.link && (
                    <CardFooter className="pt-0 flex justify-end">
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                        >
                          Lihat Sertifikat
                        </Button>
                      </Link>
                    </CardFooter>
                  )}
                </div>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12 col-span-2">
              <CardContent>
                <div className="text-6xl mx-auto mb-4">📜</div>
                <CardTitle className="text-xl">Belum Ada Sertifikat</CardTitle>
                <CardDescription>
                  Sertifikasi akan segera ditambahkan.
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Contact
        email={data.contactInfo.email}
        phone={data.contactInfo.phone}
        address={data.contactInfo.address}
        github={data.contactInfo.github}
        linkedin={data.contactInfo.linkedin}
        instagram={data.contactInfo.instagram}
        twitter={data.contactInfo.twitter}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        phoneNumber="6281258977482"
        message="Halo! Saya ingin konsultasi dengan Anda."
      />
    </main>
  );
}
