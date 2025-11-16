"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Globe, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-background-primary text-brand-text-light py-10 border-t border-brand-background-secondary/50">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Business Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tricore Solutions</h3>
          <p className="text-sm text-muted-foreground mb-2">© 2025 Tricore Solutions. All Rights Reserved.</p>
          <p className="text-sm text-muted-foreground">South Africa</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-primary-color transition-colors">
              <Mail size={16} />
              <a href="mailto:info@tricore.solutions.co.za">info@tricore.solutions.co.za</a>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-primary-color transition-colors">
              <Globe size={16} />
              <a href="https://tricore-solutions.vercel.app/" target="_blank" rel="noopener noreferrer">tricore.solutions.co.za</a>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-primary-color transition-colors">
              <Phone size={16} />
              <a href="tel:0795174640">079 517 4640</a>
            </li>
          </ul>
        </div>

        {/* Social Media & Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-muted-foreground hover:text-brand-primary-color transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-primary-color transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-primary-color transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-sm text-muted-foreground hover:text-brand-primary-color transition-colors">Services</a></li>
            <li><a href="#about" className="text-sm text-muted-foreground hover:text-brand-primary-color transition-colors">About</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;