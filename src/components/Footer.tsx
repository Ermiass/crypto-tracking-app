import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color:black;
  // background-color:#0d264f;
  color:gold;
  padding: .3rem 0;
  text-align: center;
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
