import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LogOut1 from '../../assets/logoutgrey.svg'

function LogOut() {
  return (
    <>
      <Helmet>
        <title>LogOut</title>
      </Helmet>

      <LogOutDiv>
        <Image 
          src = {LogOut1}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </LogOutDiv>
    </>
  )
}

export default LogOut;

const LogOutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 150px;
`;

const Image = styled.img`
  display: block;
  margin-bottom: 20px;
`;

const ImgTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #C3C3C3;
`;
