import Logo from "./../../assets/images/logo3.png";
import React, { useContext } from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-gray-800 text-white px-5 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img
                src={Logo}
                alt="Trips Travels Logo"
                className="h-20 md:mr-12"
              />
              <div className="flex flex-col mt-8 text-center md:text-left">
                <p className="mb-2">Address: Coimbatore</p>
                <p className="mb-2">Phone: +91 9944894722</p>
                <p className="mb-2">Email: chandrub11062004@gmail.com</p>
                <p>&copy; 2025 Developed By Chandru</p>
              </div>
            </div>

            <Newsletter />

            {/* Social Media Icons */}
            <div className="flex md:flex-col gap-4 mt-4 md:mt-0 text-2xl">
              {/* Gmail */}
              <a
                href="mailto:chandrub11062004@gmail.com"
                className="text-white hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/chandrub1128/"
                className="text-white hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/chandru-1104"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              {/* Call */}
              <a
                href="tel:+91 9944894722"
                className="text-white hover:text-green-400"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
