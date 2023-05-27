import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function Completed() {
  return (
    <>
      <Helmet>
        <title>Completed</title>
      </Helmet>

      <CompletedDiv>
        <Image 
          src = {require('../../assets/laptop.png')}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </CompletedDiv>
    </>
  )
}

export default Completed;

const CompletedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px;
`;

const Image = styled.img`
  display: block;
  margin-bottom: 20px;
`;

const ImgTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #8dadff;
`;
