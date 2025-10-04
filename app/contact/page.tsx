"use client";
import Group from "@/sections/Group";
import LogoWithContact from "@/components/SVGs/LogoWithContact";
import TheStudio from "@/sections/TheStudio";
import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import News from "@/sections/News";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { sendContactEmail, ContactFormData } from "@/utils/simpleEmailService";

export default function ContactPage() {
  const setNavTheme = useSetNavTheme();
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    return () => setNavTheme("dark");
  }, [setNavTheme]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const result = await sendContactEmail(formData);
      setSubmitMessage(result.message);
      
      if (result.success) {
        // Reset form on success
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch {
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Group Logo={LogoWithContact} showHighlights={false} showProjects={false} compact={true} />

      {/* Contact Section */}
      <section className="relative z-30 overflow-x-clip bg-[#f8f8f8] py-[6vh] px-2 text-[#0b0b0b] lg:py-[10vh] lg:px-[0.46296vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[6vh] lg:grid-cols-3 lg:gap-[3vw]"
        >
          <div className="lg:col-span-2">
            <h1 className="mb-[2vh] text-[28px] font-bold leading-[1.1] text-[#0b0b0b] lg:mb-[1.2vw] lg:text-[3.2vw]">
              Let’s build something together
            </h1>
            <p className="mb-[4vh] max-w-[80ch] text-[14px] leading-[1.7] text-[#0b0b0b]/75 lg:mb-[2vw] lg:text-[0.95vw]">
              Reach out for new projects, collaborations, or general enquiries. We typically respond within 24–48 hours.
            </p>
            <div className="flex flex-col gap-[1.8vh] lg:gap-[0.9vw]">
              <a href="mailto:hello@reviverstudio.com" className="group flex items-center gap-2 text-[20px] font-semibold text-[#0b0b0b] transition-all duration-300 hover:text-[#ff0000] hover:text-[22px] lg:text-[1.5vw] lg:hover:text-[1.6vw]">
                hello@reviverstudio.com
                <svg className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse lg:h-[0.8vw] lg:w-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:nitin@reviverstudio.com" className="group flex items-center gap-2 text-[20px] font-semibold text-[#0b0b0b] transition-all duration-300 hover:text-[#ff0000] hover:text-[22px] lg:text-[1.5vw] lg:hover:text-[1.6vw]">
                nitin@reviverstudio.com
                <svg className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse lg:h-[0.8vw] lg:w-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:ritu@reviverstudio.com" className="group flex items-center gap-2 text-[20px] font-semibold text-[#0b0b0b] transition-all duration-300 hover:text-[#ff0000] hover:text-[22px] lg:text-[1.5vw] lg:hover:text-[1.6vw]">
                ritu@reviverstudio.com
                <svg className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse lg:h-[0.8vw] lg:w-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="tel:+917985665746" className="group flex items-center gap-2 text-[18px] font-semibold text-[#0b0b0b] transition-all duration-300 hover:text-[#0b0b0b] hover:text-[20px] lg:text-[1.15vw] lg:hover:text-[1.25vw]">
                +917985665746
                <svg className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse lg:h-[0.8vw] lg:w-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="https://wa.me/+917985665746" className="group flex items-center gap-2 text-[18px] font-semibold text-[#0b0b0b] transition-all duration-300 hover:text-[#0b0b0b] hover:text-[20px] hover:underline lg:text-[1.15vw] lg:hover:text-[1.25vw]">
                WhatsApp
                <svg className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse lg:h-[0.8vw] lg:w-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="text-[16px] text-[#0b0b0b]/60 lg:text-[1.0vw]">Delhi, India</div>
              <div className="text-[16px] font-semibold text-[#0b0b0b] lg:text-[1.0vw]">Founded by Ritu Saxena</div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="rounded-[12px] border border-[#0b0b0b]/10 bg-white p-4 shadow-sm lg:p-[1.2vw]">
              <div className="mb-[1.6vh] text-[18px] font-bold lg:mb-[0.8vw] lg:text-[1.3vw]">Start a project</div>
              <div className="grid grid-cols-1 gap-[1.6vh] lg:gap-[0.8vw]">
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="rounded-md border border-[#0b0b0b]/20 bg-white p-3 text-[#0b0b0b] placeholder-[#0b0b0b]/40 outline-none focus:border-[#ff0000]" 
                  placeholder="Name" 
                />
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="rounded-md border border-[#0b0b0b]/20 bg-white p-3 text-[#0b0b0b] placeholder-[#0b0b0b]/40 outline-none focus:border-[#ff0000]" 
                  placeholder="Email" 
                />
                <input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="rounded-md border border-[#0b0b0b]/20 bg-white p-3 text-[#0b0b0b] placeholder-[#0b0b0b]/40 outline-none focus:border-[#ff0000]" 
                  placeholder="Company (optional)" 
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5} 
                  className="rounded-md border border-[#0b0b0b]/20 bg-white p-3 text-[#0b0b0b] placeholder-[#0b0b0b]/40 outline-none focus:border-[#ff0000]" 
                  placeholder="Tell us about your project" 
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-[#0b0b0b] px-5 py-3 text-[#f8f8f8] transition-colors duration-300 hover:bg-[#ff0000] hover:text-[#f8f8f8] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
              {submitMessage && (
                <div className={`mt-3 text-sm ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      <TheStudio />
      <ClientsPlusPartners />
      <div className="relative overflow-clip bg-flare-red">
        <News />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
