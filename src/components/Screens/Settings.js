import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Settings1 from '../../assets/settingsgrey.svg'

function Settings() {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>

      <SettingsDiv>
        <Image 
          src = {Settings1}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </SettingsDiv>
    </>
  )
}

export default Settings;

const SettingsDiv = styled.div`
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
