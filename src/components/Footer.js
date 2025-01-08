import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";



// Footer Container
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// Footer Top Section
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

// Footer Column
const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Social Media Icons
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

  a {
    color: #fff;
    &:hover {
      color: #4ecca3;
    }
  }
`;

// Newsletter Form
const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem;
    background-color: #4ecca3;
    color: #333;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
  }
`;

// Footer Bottom
const FooterBottom = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        {/* About Us */}
        <FooterColumn>
          <h4>About Us</h4>
          <p>Discover the best Pandits on our platform, where spirutality meets soul.</p>
        </FooterColumn>

        {/* Quick Links */}
        <FooterColumn>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </FooterColumn>

        {/* Contact Us */}
        <FooterColumn>
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@panditpro.com</li>
            <li>Phone: +91 7021655368</li>
            <li>Address: Ghansoli, Navi Mumbai, India</li>
          </ul>
        </FooterColumn>

        {/* Newsletter */}
        {/* <FooterColumn>
          <h4>Newsletter</h4>
          <p>Subscribe on our website to get the latest offers/updates.</p>
          <NewsletterForm>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </NewsletterForm>
        </FooterColumn> */}
      </FooterTop>

      {/* Social Media */}
      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
      </SocialIcons>

      {/* Footer Bottom */}
      <FooterBottom>
        © {new Date().getFullYear()} PanditPro. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
