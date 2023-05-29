import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Profile1 from '../../assets/profile1.svg'

function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <ProfileDiv>
        <Image 
          src = {Profile1}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </ProfileDiv>
    </>
  )
}

export default Profile;

const ProfileDiv = styled.div`
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
  color: #c3c3c3;
`;
