"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Removed SheetClose import
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn for conditional class merging

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial state in case the page loads scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Explicitly close the mobile menu when a link is clicked
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-brand-accent-color/30 text-brand-text-light shadow-lg transition-all duration-300",
        scrolled ? "bg-brand-background-primary/90 backdrop-blur-sm" : "bg-brand-background-secondary"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="Tricore Solutions Logo"
            className="max-h-12 h-auto w-auto rounded-full opacity-90"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          <span className="text-2xl font-bold text-brand-text-light hover:text-brand-primary-color transition-colors">
            Tricore Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text-light hover:text-brand-primary-color transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="ml-4 bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-base px-6 py-3 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
            <a href="#contact">Login</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="bg-brand-background-secondary text-brand-text-light hover:bg-brand-background-secondary/80 border-brand-accent-color/50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-background-primary text-brand-text-light border-l-brand-accent-color/30">
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavLinkClick} {/* Added onClick to close menu */}
                  className="text-lg font-medium text-brand-text-light hover:text-brand-primary-color transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-base px-6 py-3 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
                <a href="#contact" onClick={handleNavLinkClick}>Login</a> {/* Also close for Login button */}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;