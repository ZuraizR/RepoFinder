import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-3 bg-gray-700 text-white footer-center'>
      <div className='flex'>
        <FaGithub className='text-3xl mr-3' />
        <p>Copyright &copy; {footerYear} - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
