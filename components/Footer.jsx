"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-8 sticky">
      <div className="container mx-auto px-4 text-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          © {new Date().getFullYear()} Jaswinder Singh. All rights reserved.
        </p>
        {/* Add social media links or other footer content here */}
      </div>
    </footer>
  );
};

export default Footer;
