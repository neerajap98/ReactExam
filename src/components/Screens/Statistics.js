import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Statistics1 from '../../assets/graphgrey.svg'

function Statistics() {
  return (
    <>
      <Helmet>
        <title>Statistics</title>
      </Helmet>

      <StatisticsDiv>
        <Image 
          src = {Statistics1}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </StatisticsDiv>
    </>
  )
}

export default Statistics;

const StatisticsDiv = styled.div`
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
  color: #c3c3c3;
`;
