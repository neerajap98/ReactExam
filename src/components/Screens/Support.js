import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Support1 from '../../assets/supportgrey.svg'

function Support() {
  return (
    <>
      <Helmet>
        <title>Support</title>
      </Helmet>

      <SupportDiv>
        <Image 
          src = {Support1}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </SupportDiv>
    </>
  )
}

export default Support;

const SupportDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 150px;
  @media all and (max-width:768px) {
    justify-content: center;
    width: 100%;
    height: calc(100vh - 120px);
    margin: auto;

  }
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
