'use client';

import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-100 p-4 mt-10 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} StayFinder. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
