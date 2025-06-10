'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#2C3A50] text-white px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <div className="w-12 h-12 bg-white flex items-center justify-center font-bold text-[#2C3A50] text-xl mb-4">EM</div>
          <p className="text-sm text-gray-300">The fastest and most reliable event management platform for organizers and attendees.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Organizer Guides</a></li>
            <li><a href="#" className="hover:underline">API Documentation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">Contact</h4>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <FiMail className="text-xl" /> info@evently.com
          </div>
          <div className="flex items-center gap-2 mb-4 text-sm">
            <FiPhone className="text-xl" /> +122552255555
          </div>
          <div className="flex gap-4 text-xl text-white">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 Evently. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
