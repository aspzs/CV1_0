import React from "react";
import "./style.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a target="_blank" href={socialprofils.github} >
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a target="_blank" href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.whatsapp && (
          <li>
            <a target="_blank" href={socialprofils.whatsapp}>
              <FaWhatsapp />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target="_blank" href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        
      </ul>
      <p>Sígueme aquí</p>
    </div>
  );
};
