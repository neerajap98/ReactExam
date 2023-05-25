import React from 'react';
import { Helmet } from 'react-helmet';
import  styled  from 'styled-components/';
import Book from '../../assets/book.svg';
import ArrowLeft from '../../assets/leftarrow.svg'

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <MainContainer>
                <TopContainer>
                    <HeadContainer>
                        <Heading>Schedule</Heading>
                        <SubContainer>
                            <SubHeading>Hey Samantha, Let's Get Ready For Next Class</SubHeading>
                            <HeadLogo>
                                <BookIcon 
                                    src={Book}
                                    alt='book'
                                    width={"30px"}
                                />
                            </HeadLogo>
                        </SubContainer>
                    </HeadContainer>
                    <ArrowContainer>
                        <LeftArrow 
                            src={ArrowLeft}
                            alt='arrowl'
                            width={"20px"}
                        />
                    </ArrowContainer>
                </TopContainer>
            </MainContainer>
        </>
        
    )
}

export default Dashboard;

const MainContainer = styled.div`
    background: #fff;
`;

const TopContainer = styled.div`
    padding: 20px 30px;
    background: #f6f7fb;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const Heading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SubHeading = styled.h3`
    font-size: 15px;
    font-weight: 600;
    color: #bababc;
    margin-right: 12px;
`;

const HeadLogo = styled.div`
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
`;

const BookIcon = styled.img`
    display: block;
`;

const ArrowContainer = styled.div`
    border: 1px solid #bababc;
    display: flex;
    align-items: center;
    border-radius: 5px;
`;

const LeftArrow = styled.img`
    display: block;
`;