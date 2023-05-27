import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function Remaining() {
  return (
    <>
      <Helmet>
        <title>Remaining</title>
      </Helmet>

      <RemainingDiv>
        <Image 
          src = {require('../../assets/graphbar.png')}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </RemainingDiv>
    </>
  )
}

export default Remaining;

const RemainingDiv = styled.div`
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
  color: #6368ea;
`;
