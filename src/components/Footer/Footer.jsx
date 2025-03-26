import React from "react";
import logo from "../../assets/assets/logo.png";
import facebook from "../../assets/assets/fb-thumb.png";
import github from "../../assets/assets/github-thumb.png";
import youtube from "../../assets/assets/youtube-thumb.png";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 flex justify-around items-center mt-10">
      <aside>
        <img className="w-50 h-50 fill-current" src={logo} alt="" />
        <p>
           English Learning with Abdullah all Mojahid (B.Sc in English) from DU.
          <br />
          Providing reliable tech since 1752...
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://web.facebook.com/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="bg-white" src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://github.com/mojahidmamu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="bg-white" src={github} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="bg-white" src={youtube} alt="Facebook" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
