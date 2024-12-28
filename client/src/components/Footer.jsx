// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white mt-8">
      <div className="container mx-auto flex flex-col items-center py-6 px-6">
        <p className="text-sm">© 2024 Shortly. All rights reserved.</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.84v-3.622h2.979V8.413c0-2.949 1.796-4.556 4.415-4.556 1.254 0 2.335.093 2.65.135v3.073h-1.819c-1.427 0-1.702.678-1.702 1.67v2.19h3.406l-.444 3.622h-2.962V24h5.798c.73 0 1.325-.593 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.827 9.827 0 01-2.828.775 4.927 4.927 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.916 4.916 0 00-8.385 4.482 13.944 13.944 0 01-10.126-5.144 4.902 4.902 0 001.523 6.56A4.904 4.904 0 01.964 9.67v.062a4.917 4.917 0 003.946 4.827 4.952 4.952 0 01-2.212.084 4.917 4.917 0 004.588 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.058 0 14.01-7.504 14.01-14.01 0-.213-.004-.425-.013-.637A10.012 10.012 0 0024 4.557z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
