import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Payment1 from '../../assets/paymentgrey.svg'

function Payment() {
  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>

      <PaymentDiv>
        <Image 
          src = {Payment1}
          alt = 'graph'
          width='120px'
        />
        <ImgTitle>Coming Soon...</ImgTitle>
      </PaymentDiv>
    </>
  )
}

export default Payment;

const PaymentDiv = styled.div`
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
