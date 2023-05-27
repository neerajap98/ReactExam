import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import UpArrow from '../../assets/arrowup.svg';
import DownArrow from '../../assets/downarrow.svg';
import Right from '../../assets/right.svg';
import White from '../../assets/white.svg';
import Block from '../../assets/block.svg';
import Clock from '../../assets/clock.svg';


function Ongoing() {

    
  return (
    <>
        <Helmet>
            <title>Ongoing</title>
        </Helmet>
    
    <MainContainer>
        <TopContainer>
            <UxContainer>
                <ImageContainer>
                    <Image 
                        src = {require("../../assets/image1.png")}
                        alt = "image"
                        width ='50px'
                    />
                </ImageContainer>
                <Title>UI/UX Design</Title>
                <Classes>03 Classes</Classes>
                <BaseContainer> 
                    <StudContainer>
                        <StudList>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/michael.png")}
                                    alt = "michael"
                                    width ='25px'
                                />
                            </ListItem>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/monika.png")}
                                    alt = "monika"
                                    width ='25px'
                                />
                            </ListItem>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/joey.png")}
                                    alt = "joey"
                                    width ='25px'
                                />
                            </ListItem>
                        </StudList>
                    </StudContainer>
                    <PlayButton>
                        <PlayIcon></PlayIcon>
                    </PlayButton>
                </BaseContainer>
            </UxContainer>

            <DerivationContainer>
            <ImageContainer className='blue'>
                <Image 
                    src = {require("../../assets/image2.png")}
                    alt = "image"
                    width ='50px'
                />
                </ImageContainer>
                <Title>Derivation</Title>
                <Classes className='blue'>03 Classes</Classes>
                <BaseContainer className='blue'> 
                    <StudContainer>
                        <StudList>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/michael.png")}
                                    alt = "michael"
                                    width ='25px'
                                />
                            </ListItem>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/monika.png")}
                                    alt = "monika"
                                    width ='25px'
                                />
                            </ListItem>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/joey.png")}
                                    alt = "joey"
                                    width ='25px'
                                />
                            </ListItem>
                        </StudList>
                    </StudContainer>
                    <PlayButton className='blue'>
                        <PlayIcon></PlayIcon>
                    </PlayButton>
                </BaseContainer>
            </DerivationContainer>

            <DerivationContainer className='bg'>
            <ImageContainer className='royal'>
                    <Image 
                        src = {require("../../assets/image3.png")}
                        alt = "image"
                        width ='50px'
                    />
                </ImageContainer>
                <Title>Photoshop Course</Title>
                <Classes className='royal'>03 Classes</Classes>
                <BaseContainer className='royal'> 
                    <StudContainer>
                        <StudList>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/michael.png")}
                                    alt = "michael"
                                    width ='25px'
                                />
                            </ListItem>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/monika.png")}
                                    alt = "monika"
                                    width ='25px'
                                />
                            </ListItem>
                            <ListItem>
                                <ListImage 
                                    src = {require("../../assets/joey.png")}
                                    alt = "joey"
                                    width ='25px'
                                />
                            </ListItem>
                        </StudList>
                    </StudContainer>
                    <PlayButton className='royal'>
                        <PlayIcon></PlayIcon>
                    </PlayButton>
                </BaseContainer>
            </DerivationContainer>
        </TopContainer>

        <DateContainer>
            <Day>Monday</Day>
            <Date>31 Aug</Date>
            <ArrowDiv>
                <TopArrow 
                    src = {UpArrow}
                    alt ='arrowup'
                    width = '15px'
                />
                <BottomArrow 
                    src = {DownArrow}
                    alt ='arrowup'
                    width = '15px'
                />
            </ArrowDiv>
        </DateContainer>

        <SubContainer>
            <LeftContainer>
                <Time>
                    <TimeSchedules>08:00</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules className='bar'>
                        <Circle></Circle>
                        <Horizontal>
                            <Light></Light>
                            <Medium></Medium>
                            <Dark></Dark>
                        </Horizontal>
                    </TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules>08:00</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules>--</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules>08:00</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules>08:00</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules>--</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                    <TimeSchedules>--</TimeSchedules>
                    <TimeSchedules>-</TimeSchedules>
                </Time>
            </LeftContainer>
            <RightContainer>
                <TopDiv>
                    <LeftDiv></LeftDiv>
                        <ImgContainer>
                            <ImgTag 
                                src = {require('../../assets/graphbar.png')}
                                alt = 'graph'
                                width='150px'
                        />
                    </ImgContainer>
                    <BusinessContainer>
                        <TimePer>08:00 - 09:30</TimePer>
                        <Sub>Business</Sub>
                        <Detail>Bring A Business Mind To Design,Transform Your Career</Detail>
                    </BusinessContainer>
                    <RightDiv>
                        <Percent>75</Percent>
                        <RightArrow>
                            <RightArrowImg 
                                src = {Right}
                                alt = 'right'
                                width = '15px'
                            />
                        </RightArrow>
                    </RightDiv>
                </TopDiv>

                <MeetingContainer>
                    <ClockDiv>
                        <ClockImg 
                            src= {Clock}
                            alt='clock'
                            width={'20px'}
                        />
                        <MeetTime>08:00 - 09:30</MeetTime>
                    </ClockDiv>
                    <MeetTitle>Project Team Meeting</MeetTitle>
                    <BlockImg>
                        <ImageBlock 
                            src = {Block}
                            alt = 'block'
                            width ='20px'
                        />
                    </BlockImg>
                </MeetingContainer>

                <TopDiv className='bg'>
                    <LeftDiv className='white'></LeftDiv>
                        <ImgContainer>
                            <ImgTag 
                                src = {require('../../assets/laptop.png')}
                                alt = 'graph'
                                width='120px'
                        />
                    </ImgContainer>
                    <BusinessContainer>
                        <TimePer className='white'>08:00 - 09:30</TimePer>
                        <Sub className='white'>The Design Presentation Process For Newbies</Sub>
                        <Detail className='white'>Bring A Business Mind To Design,Transform Your Career</Detail>
                    </BusinessContainer>
                    <RightDiv>
                        <Percent>65</Percent>
                        <RightArrow>
                            <RightArrowImg 
                                src = {White}
                                alt = 'right'
                                width = '15px'
                            />
                        </RightArrow>
                    </RightDiv>
                </TopDiv>

                <TopDiv className='bg'>
                    <LeftDiv className='white'></LeftDiv>
                        <ImgContainer>
                            <ImgTag 
                                src = {require('../../assets/laptop.png')}
                                alt = 'graph'
                                width='120px'
                        />
                    </ImgContainer>
                    <BusinessContainer>
                        <TimePer className='white'>08:00 - 09:30</TimePer>
                        <Sub className='white'>The Design Presentation Process For Newbies</Sub>
                        <Detail className='white'>Bring A Business Mind To Design,Transform Your Career</Detail>
                    </BusinessContainer>
                    <RightDiv>
                        <Percent>65</Percent>
                        <RightArrow>
                            <RightArrowImg 
                                src = {White}
                                alt = 'right'
                                width = '15px'
                            />
                        </RightArrow>
                    </RightDiv>
                </TopDiv>
            </RightContainer>
        </SubContainer>

        
    </MainContainer>

    </>
  )
}

export default Ongoing;

const MainContainer = styled.div`
    
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:  baseline;
    margin-bottom: 15px;
`;

const UxContainer = styled.div`
    width: 31.5%;
    height: 230px;
    border-radius: 8px;
    background: #6e60e7;
    padding:5px 15px;

`;

const ImageContainer = styled.div`
    background: #8dadff;
    width: 100%;
    height:35%;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    &.blue {
        background: #8cf9fc;
    }
    &.royal {
        background: #8dd6ff;
    }
`;

const Image = styled.img`
    display: block;
`;

const Title = styled.h3`
    font-size: 16px;
    color: #fff;
    margin-left: 2px;
`;

const Classes = styled.span`
    font-size: 12px;
    color: #8dadff;
    &.blue {
        color: #8cf9fc;
    }
    &.royal {
        color: #8dd6ff;
    }
`;

const BaseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    &.blue {
        margin-top: 25px;
    }
    &.royal {
        margin-top: 25px;
    }
`;

const StudContainer = styled.div`
    
`;

const StudList = styled.ul`
    display: flex;
    
`;

const ListItem = styled.li`
    display: flex;
    margin-left: -5px;
    &:first-child {
        margin-left: 5px;
    }
`;

const ListImage = styled.img`
    border-radius: 50%;
    border: 1px solid #fff;
`;

const PlayButton = styled.div`
    width: 50px;
    height: 50px;
    background-color: #8dadff; 
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    &.blue {
        background-color: #8cf9fc; 
    }
    &.royal {
        background-color: #8dd6ff; 
    }
`;

const PlayIcon = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent #fff; 
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
`;

const DerivationContainer = styled.div`
    width: 31.5%;
    height: 220px;
    border-radius: 8px;
    background: #62d0e9;
    padding:5px 15px;
    &.bg {
        background: #63b0e8;
    }
`;

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Day = styled.h5`
    margin-right: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;

const Date = styled.small`
    margin-right: 12px;
    font-size: 12px;
    font-weight: bold;
    color: #000;
`;

const ArrowDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
`;

const TopArrow = styled.img`
    display: block;
`;

const BottomArrow = styled.img`
    display: block;
`;

const SubContainer = styled.div`
    padding: 0 40px;
    display: flex;
`;

const LeftContainer = styled.div`
    background: #f6f7fb;
    width: 80px;
    height: 565px;
    padding: 5px;
    margin-right: 15px;

`;

const Time = styled.ul``;

const TimeSchedules = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #a0a4a7;
    &.bar {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
    }
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    background: #6366e7;
    border-radius: 50%;
`;

const Horizontal = styled.div`
    width: 60px;
    height: 3px;
    border-radius: 15px;
    margin-left: -1px;
`;

const Light = styled.div`
    width: 60px;
    height: 1px;
    background: #bec0f3;
    border-top-left-radius: 15px;
`;

const Medium = styled.div`
    width: 60px;
    height: 1px;
    background: #6366e7;
    
`;

const Dark = styled.div`
    width: 60px;
    height: 1px;
    background: #9a9cef;
    border-bottom-left-radius: 15px;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopDiv = styled.div`
    width: 100%;
    background: #f1eeff;
    height: 150px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 10px;
    &.bg {
        background: #6368ea;
    }
`;

const LeftDiv = styled.div`
    width:5px;
    height: 98%;
    background: #6368ea;
    border-radius: 20px;
    &.white {
        background: #fff;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const ImgTag = styled.img`
    display: block;
    
`;

const BusinessContainer = styled.div`
    width: 50%;
    margin: auto 0;
`;

const TimePer = styled.small`
    font-size: 12px;
    font-weight: 500;
    color: #6467ea;
    &.white {
        color: #fff;
    }
`;

const Sub = styled.h3`
    font-size: 16px;
    color: #6467ea;
    font-weight: bold;
    margin: 10px 0;
    &.white {
        color: #fff;
        line-height: 1.3em;
    }
`;

const Detail = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #6467ea;
    &.white {
        color: #fff;
    }
`;

const RightDiv = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Percent = styled.h6`
    padding: 15px 25px;
    border-radius: 30px;
    background: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#fff,#fff) padding-box, linear-gradient(to left, #4363de, #fff) border-box;
    border: 3px solid transparent;
`;

const RightArrow = styled.div`
    margin: 0 0 20px 20px;

`;

const RightArrowImg = styled.img`
    display: block;
`;

const MeetingContainer = styled.div`
    width: 100%;
    background: #edf6ff;
    height: 60px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
`;

const ClockDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ClockImg = styled.img`
    margin-right: 15px;
`;

const MeetTime = styled.small`
    font-size: 12px;
    font-weight: bold;
    color:#2f4fc0;
`;

const MeetTitle = styled.h3`
    font-size: 12px;
    font-weight: bold;
    color: #2f4fc0;
`;

const BlockImg = styled.div``;

const ImageBlock = styled.img`
    display: block;
`;




















