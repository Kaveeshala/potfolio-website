import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Name and Icons Section */}
      <div className="flex items-center gap-4">
       
        {/* Social Icons */}
        <div className="flex items-center gap-3 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
          <FaInstagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
