import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color:black;
  color:white;
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  bottom:0;
  width:100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Ermias © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
