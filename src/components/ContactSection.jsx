import React, { useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm(
      "service_hpc9jn8",    // Your EmailJS service ID
      "template_4cdfmin",   // Your EmailJS template ID
      formRef.current,
      "hSuejZfutQakuoPgV"   // Your EmailJS public key
    ).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setShowPopup(true);
        formRef.current.reset();
        setSubmitting(false);
      },
      (error) => {
        console.error("Email failed to send:", error.text);
        alert("Failed to send message. Please try again later.");
        setSubmitting(false);
      }
    );
  };

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Get In <span className="text-primary text-glow">Touch</span>
        </h2>

        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 transition-transform hover:scale-110 duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:sanathkumarsunny33@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    sanathkumarsunny33@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 transition-transform hover:scale-110 duration-300">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+919515437522"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +91 9515437522
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sanath-kumar-gampa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-300 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/sanathkumargampa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-300 transform"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/gampasanathkumar?igsh=MWVycmJpZWU5Ymd0NQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-300 transform"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="name"
                />
              </div>

              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="abc@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all duration-300"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300",
                  submitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-background border border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
              <Send size={32} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};