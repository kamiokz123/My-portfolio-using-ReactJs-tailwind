import React from 'react'

function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
    {/* Copyright */}
    <div className="footer-copyright">
      <p>&copy; {new Date().getFullYear()} Kamran Haider. All rights reserved.</p>
    </div>
</footer>
  )
}

export default FooterComponent;
