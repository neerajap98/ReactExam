import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import UpArrow from '../../assets/arrowup.svg';
import DownArrow from '../../assets/downarrow.svg';
import Right from '../../assets/right.svg';
import White from '../../assets/white.svg';
import Block from '../../assets/block.svg';
import Clock from '../../assets/clock.svg';
// import Swal from 'sweetalert2';
import swal from 'sweetalert';


function Ongoing() {
    const alert = () => {
        swal({
            title: "Heyy!",
            text: "You are Back on Track!",
            icon: "success"
        })
    }
    
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
                    <PlayButton  onClick={alert}>
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
                    <PlayButton className='blue' onClick={alert}>
                        <PlayIcon ></PlayIcon>
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
                    <PlayButton className='royal' onClick={alert}>
                        <PlayIcon ></PlayIcon>
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
                        <RightArrow className='white' >
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
                        <RightArrow className='white'>
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
    @media all and (max-width:640px) {
        width: 100%;
    }
    @media all and (max-width:480px) {
        width: 100%;
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:  baseline;
    margin-bottom: 15px;
    @media all and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

const UxContainer = styled.div`
    width: 31.5%;
    height: 230px;
    border-radius: 8px;
    background: #6e60e7;
    padding:5px 15px;

    @media all and (max-width:980px) {
        height: 210px;
        padding: 4px 12px;
    }
    @media all and (max-width: 480px) {
        width: 100%;
        margin-bottom: 10px;
        height: 260px;
    }
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
    @media all and (max-width:980px) {
        width: 30px;
    }
    @media all and (max-width: 480px) {
        width: 40px;
    }
    
`;

const Title = styled.h3`
    font-size: 16px;
    color: #fff;
    margin-left: 2px;
    @media all and (max-width: 480px) {
        margin-top: 20px;
    }
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
    @media all and (max-width:980px) {
        margin-top: 20px;
    }
    @media all and (max-width:480px) {
        margin-top:35px;
    }
    
    &.blue {
        margin-top: 25px;
        @media all and (max-width:980px) {
            margin-top: 15px; 
        }
        @media all and (max-width:480px) {
        margin-top:35px;
    }
    }
    &.royal {
        margin-top: 25px;
        @media all and (max-width:980px) {
            margin-top: 15px;
        }
        @media all and (max-width:480px) {
        margin-top:35px;
    }
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
    @media all and (max-width:640px) {
        width: 45px;
        height: 45px;
    }
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
    @media all and (max-width:1180px) {
            height: 200px;
            padding: 4px 12px;
    }   
    @media all and (max-width:980px) {
            height: 200px;
            padding: 4px 12px;
        }  
    @media all and (max-width: 480px) {
        width: 100%;
        margin-bottom: 10px;
        height: 250px;
    }  

    
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
    @media all and (max-width:980px) {
        padding: 0 20px;
    }
    @media all and (max-width:768px) {
        padding: 0 40px;
        justify-content: space-between;
    }
    @media all and (max-width:480px) {
        padding: 0 2px;
        justify-content: space-between;
    }
`;

const LeftContainer = styled.div`
    background: #f6f7fb;
    width: 80px;
    height: 565px;
    padding: 5px;
    margin-right: 15px;
    @media all and (max-width:1180px) {
        margin-right: 10px;
    }
    @media all and (max-width:480px) {
        width: 50px;
    }
    @media all and (max-width:360px) {
        width: 30px;
    }
`;

const Time = styled.ul``;

const TimeSchedules = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #a0a4a7;
    @media all and (max-width:360px) {
        font-size: 12px;
    }
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
    @media all and (max-width:480px) {
        width: 20px;
    }
    @media all and (max-width:360px) {
        width: 10px;
    }
`;

const Light = styled.div`
    width: 60px;
    height: 1px;
    background: #bec0f3;
    border-top-left-radius: 15px;
    @media all and (max-width:480px) {
        width: 30px;
    }
`;

const Medium = styled.div`
    width: 60px;
    height: 1px;
    background: #6366e7;
    @media all and (max-width:480px) {
        width: 30px;
    }
`;

const Dark = styled.div`
    width: 60px;
    height: 1px;
    background: #9a9cef;
    border-bottom-left-radius: 15px;
    @media all and (max-width:480px) {
        width: 30px;
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media all and (max-width:768px) {
        width: 85%;
    }
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
    @media all and (max-width:1180px) {
        padding: 25px;
    }
    @media all and (max-width:768px) {
        padding: 15px;
    }
    @media all and (max-width:480px) {
        padding: 10px;
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
    @media all and (max-width:980px) {
        width: 80px;
    }
    @media all and (max-width:768px) {
        width: 110px;
    }
    @media all and (max-width:480px) {
        margin-right: 10px;
    }
    @media all and (max-width: 360px) {
    display: none;    
    }
`;

const BusinessContainer = styled.div`
    width: 50%;
    margin: auto 0;
    @media all and (max-width:480px) {
        width: 60%;
    }
    @media all and (max-width:360px) {
        width: 70%;
        text-align: center;
    }
`;

const TimePer = styled.small`
    font-size: 12px;
    font-weight: 500;
    color: #6467ea;
    @media all and (max-width:980px) {
        font-size: 10px;
    }
    @media all and (max-width:768px) {
        font-size: 12px;
    }
    @media all and (max-width:360px) {
        font-size: 10px;
    }
    &.white {
        color: #fff;
    }
`;

const Sub = styled.h3`
    font-size: 16px;
    color: #6467ea;
    font-weight: bold;
    margin: 10px 0;
    @media all and (max-width:980px) {
        font-size: 13px;
    }
    @media all and (max-width:980px) {
        font-size: 16px;
    }
    @media all and (max-width:360px) {
        font-size: 14px;
    }
    &.white {
        color: #fff;
        line-height: 1.3em;
    }
`;

const Detail = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #6467ea;
    @media all and (max-width:980px) {
        font-size: 11px;
    }
    @media all and (max-width:980px) {
        font-size: 12px;
    }
    @media all and (max-width:480px) {
        display: none;
    }
    &.white {
        color: #fff;
    }
`;

const RightDiv = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width:360px) {
        justify-content: center;
        align-items: center;
    }
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
    @media all and (max-width:980px) {
        font-size: 14px;
        padding: 12px 20px;
        
    }
    @media all and (max-width:360px) {
        display: none;
    }


`;

const RightArrow = styled.div`
    margin: 0 0 20px 20px;
    @media all and (max-width:360px) {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        &.white {
            background:#000;
        }
    }

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




















