import React, {useEffect} from "react";
import './style/Footer.css';
import feather from 'feather-icons'; 
export function Footer() {
    useEffect(() => {
        feather.replace();
    }, []);
  return (
    <footer className="text-white text-center py-3">
      <div className="socials">
        <Links
          href={"https://www.instagram.com/mchael.86?igsh=ODA1NTc5OTg5Nw=="}
          icon={"instagram"}
        />
        <Links
          href={
            "https://www.linkedin.com/in/achmad-michael-2b84b928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          icon={"linkedin"}
        />
        <Links href={"https://github.com/achmichael"} icon={"github"} />
      </div>
      <div className="links">
        <Links href="#home" label={"Beranda"} />
        <Links href="#about" label={"Bantuan"} />
        <Links href="pages/login" label={"Sign In"} />
        <Links href="pages/register" label={"Sign Up"} />
      </div>
      <div className="credit">
        <p>
          Credit by <a href="">Achmad Michael Mushoharoin</a> | &copy; 2024
        </p>
      </div>
    </footer>
  );
}

function Links({ href, icon, label }) {
  return (
    <a href={href}>
      {icon && <i data-feather={icon}></i>}
      {label && <span>{label}</span>}
    </a>
  );
}
