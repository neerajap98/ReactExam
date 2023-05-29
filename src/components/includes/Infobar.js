import React , { useState } from 'react';
import { styled } from 'styled-components';

import Flag from '../../assets/flagicon.svg';
import Bell from '../../assets/bellicon.svg';
import MasterCardImage from '../../assets/mastercard.svg';
import ArrowDown from '../../assets/downarrow.svg';
import ToggleOff from '../../assets/toggle-off.svg';
import ToggleOn from '../../assets/toggle-on.svg';

function Infobar() {

    const [isToggledOne, setIsToggledOne] = useState(false);
    const [isToggledTwo, setIsToggledTwo] = useState(false);
    const [isToggledThree, setIsToggledThree] = useState(false);

    const [ selectedIds , setSelectedIds ] = useState([]);
    

    const handleButtonClick = (id) => {
        if(selectedIds.includes(id)) {
            setSelectedIds(
                selectedIds.filter((selectedId) => selectedId !==id)
            );
        } else {
            setSelectedIds([...selectedIds,id])
        }
      };

      
    
    const People = [
        {
            id : 1,
        },
        {
            id : 2,
        },
        {
            id : 3,
        },
        {
            id : 4,
        },
        {
            id : 5,
        },
    ]

    return (
        <MainContainer>
            <TopBar>
                <FlagContainer>
                    <FlagImage 
                        src={Flag}
                        alt='flag icon'
                        width={'20px'}
                    />
                    <BellIcon 
                        src={Bell}
                        alt='bell icon'
                        width={'20px'}
                    />
                </FlagContainer>
                <MasterCard>
                    <MasterCardIcon 
                        src={MasterCardImage}
                        alt='mastercard icon'
                        width={'20px'}
                    />
                    <CardNumber>123***23</CardNumber>
                    <Balance>$3456.20</Balance>
                    <DownArrow 
                        src={ArrowDown}
                        alt='arrowdown icon'
                        width={'12px'}
                    />
                </MasterCard>
            </TopBar>
            <LectureContainer>
                <Headline>Today's Lectures</Headline>
                <ItemContainer>
                    <BookContainer>
                        <IconContainer className='violet'><BookIcon 
                            src= {require('../../assets/books.png')}
                            alt='books'
                            width= '40px'
                        /></IconContainer >
                    </BookContainer>
                    <SubjectContainer>
                        <Subject>Maths</Subject>
                        <Status className='vio'>Running...</Status>
                    </SubjectContainer>
                        <StatusBar>
                            <Completed></Completed>
                        </StatusBar>
                        <ToggleContainer onClick={() => setIsToggledOne(!isToggledOne)}>
                            <ToggleIcon 
                                src={isToggledOne ? `${ToggleOff}` : `${ToggleOn}`}
                                alt='toggle icon'
                                width={'30px'}
                        /></ToggleContainer>
                </ItemContainer>
                <ItemContainer>
                    <BookContainer>
                        <IconContainer className='blue'>
                            <HistoIcon 
                            src= {require('../../assets/histo.png')}
                            alt='histo'
                            width= '40px'
                        />
                        </IconContainer>
                    </BookContainer>
                    <SubjectContainer>
                        <Subject>History</Subject>
                        <Status>Finished</Status>
                    </SubjectContainer>
                        <StatusBarGreen></StatusBarGreen>
                        <ToggleContainer onClick={() => setIsToggledTwo(!isToggledTwo)}>
                            <ToggleIcon
                                src={isToggledTwo ? `${ToggleOff}` : `${ToggleOn}`}
                                alt='toggle icon'
                                width={'30px'}
                        /></ToggleContainer>
                    
                </ItemContainer>
                <ItemContainer>
                    <BookContainer>
                        <IconContainer>
                            <BioIcon 
                                src= {require('../../assets/bio.png')}
                                alt='bio'
                                width= '40px'
                            />
                        </IconContainer>
                    </BookContainer>
                    <SubjectContainer>
                        <Subject>Biology</Subject>
                        <Status>Finished</Status>
                    </SubjectContainer>
                        <StatusBarGreen></StatusBarGreen>
                        <ToggleContainer onClick={() => setIsToggledThree(!isToggledThree)}>
                            <ToggleIcon 
                                src={isToggledThree ? `${ToggleOff}` : `${ToggleOn}`}
                                alt='toggle icon'
                                width={'30px'}
                        /></ToggleContainer>
                </ItemContainer>
            </LectureContainer>
            <ClassContainer>
                <Headline>Your Classmates</Headline>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/ariana.png")}
                            alt = 'ariana'
                            width={"40px"}
                        />
                        <StudentName>Ariana Black</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/nicki.png")}
                            alt = 'nicki'
                            width={"40px"}
                        />
                        <StudentName>Nicki Johns</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/michael.png")}
                            alt = 'michael'
                            width={"40px"}
                        />
                        <StudentName>Michael Joe</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/joey.png")}
                            alt = 'joey'
                            width={"40px"}
                        />
                        <StudentName>Joey Fred</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/boby.png")}
                            alt = 'boby'
                            width={"40px"}
                        />
                        <StudentName>Boby</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/monika.png")}
                            alt = 'monika'
                            width={"40px"}
                        />
                        <StudentName>Monika</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
                <Classmates>
                    <StudentImage>
                        <Image 
                            src= {require("../../assets/Profile.png")}
                            alt = 'Profile'
                            width={"40px"}
                        />
                        <StudentName>Phoebe</StudentName>
                    </StudentImage>
                    <StudentCredit>25 Credits</StudentCredit>
                    <StudentDob>05-11-2020</StudentDob>
                </Classmates>
            </ClassContainer>
            <BottomContainer>
                {People.map((item) => (
                    <BottomBox key={item.id}>
                    <BuyerList>
                        <Buyers>
                            <List>
                                <ListItem>
                                    <ListImage 
                                        src = {require("../../assets/boby.png")}
                                        alt = "boby"
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
                                <ListItem>
                                    <ListImage 
                                         src = {require("../../assets/monika.png")}
                                         alt = "monika"
                                         width ='25px'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListImage 
                                         src = {require("../../assets/michael.png")}
                                         alt = "michael"
                                         width ='25px'
                                    />
                                </ListItem>
                            </List>
                        </Buyers>
                        <ListDetail>7+More</ListDetail>
                    </BuyerList>
                    <Button onClick={() => {
                        handleButtonClick(item.id);
                        console.log(item.id)
                    }}
                    >
                        <ButtonBuy 
                            className={selectedIds.includes(item.id)
                                ? "active"
                                : ""}
                        >
                            {selectedIds.includes(item.id)
                            ? "Purchased"
                            : "Buy Now"}
                            </ButtonBuy>
                    </Button>
                </BottomBox>
                ))}
                
            </BottomContainer>
        </MainContainer>
    )
}

export default Infobar;

const MainContainer = styled.div`
    background: #fff;
    padding: 30px 20px;
    @media all and (max-width:980px) {
        padding: 20px 10px;
    }
    @media all and (max-width:768px) {
        width: 100%;
        padding: 50px 30px;
        flex-wrap: wrap;
        display: flex;
    }
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 10px;
    @media all and (max-width:980px) {
        width: 100%;  
        margin-right: 25px;  
        }
    @media all and (max-width:768px) {
        width: 100%;    
        }
    @media all and (max-width:480px) {
        width: 100%;  
        margin-right: 5px;  
        }
`;

const FlagContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FlagImage = styled.img`
    display: block;
    margin-right: 10px;
`;

const BellIcon = styled.img`
    display: block;
`;

const MasterCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #c3c3c3;
    border-radius: 5px;
    padding: 5px;
`;

const MasterCardIcon = styled.img`
    display: block;
    margin-right: 10px;
`;

const CardNumber = styled.span`
    color:#727488;
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;

`;

const Balance = styled.small`
    font-weight: 700;
    font-size: 13px;
    color: #000;
    margin-right: 10px;
`;

const DownArrow = styled.img`
    display: block;
`;

const LectureContainer =styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media all and (max-width:768px) {
        width: 100%;    
        }
`;

const Headline =styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #000;
`;

const ItemContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const BookContainer =styled.div`
    
`;

const BookIcon =styled.img`
    display: block;
`;

const HistoIcon =styled.img`
    display: block;
`;

const BioIcon =styled.img`
    display: block;
`;

const SubjectContainer =styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 10px;
    @media all and (max-width:768px) {
        margin-left: -50px;
    }
    @media all and (max-width:768px) {
        margin-left: 0px;
    }
`;

const Subject =styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
`;

const Status =styled.small`
    font-size: 10px;
    font-weight: bold;
    color: #3ecd7b;
    &.vio {
        color: #6368ea;
    }
`;

const StatusBar =styled.div`
    width: 45%;
    height: 8px;
    border-radius: 50px;
    background:#d9e5fd;
    position:relative;
    margin-right: 10px;
`;

const Completed =styled.div`
    width: 60%;
    height: 8px;
    border-radius: 50px;
    background:#6368ea;
    position: absolute;
    top: 0;
    left: 0;
`;

const StatusBarGreen =styled.div`
    width: 45%;
    height: 8px;
    border-radius: 50px;
    background:#3ecd7b;
    margin-right: 10px;

`;

const ToggleIcon =styled.img`
`;

const IconContainer =styled.div`
    width: 55px;
    height:45px;
    border-radius: 8px;
    background: #63b0e8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    &.blue {
        background: #62d0e9;
    }
    &.violet {
        background: #6368ea;
    }
`;

const ToggleContainer =styled.div``;

const ClassContainer =styled.div`
    border-bottom: 1px solid #c3c3c3;
    @media all and (max-width:768px) {
        width: 100%;
        border-bottom: none;
        margin:0 auto;
        
    }
    @media all and (max-width:640px) {
        margin-left: 5px;
    }
`;

const Classmates =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    @media all and (max-width:768px) {
        width: 100%;
    }
`;

const StudentImage =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 30px;
    width: 40%;
    @media all and (max-width:980px) {
        width: 50%;
    }
    @media all and (max-width:768px) {
        margin-right: 10px;
        width: 35%;
    }

`;

const Image =styled.img`
    border-radius:50%;
    margin-right: 15px;
`;

const StudentName =styled.h5`
    font-size: 12px;
    font-weight: bold;
    color: #000;
    @media all and (max-width:980px) {
        font-size: 10px;
    }
`;

const StudentCredit =styled.small`
    margin-right: 30px;
    color: #000;
    font-size: 12px;
`;

const StudentDob =styled.small`
    color: #000;
    font-size: 12px;
    @media all and (max-width:980px) {
        display: none;
    }
    @media all and (max-width:768px) {
        display: flex;
    }
`;

const BottomContainer =styled.div`
    padding: 30px 20px;
    @media all and (max-width:768px) {
        display: none;
    }
`;

const BottomBox =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const BuyerList =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Buyers =styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const List =styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    

`;

const ListItem =styled.div`
    margin-left: -10px;
`;

const ListImage =styled.img`
    border-radius: 50%;
`;
const ListDetail =styled.small`
    font-size: 12px;
    font-weight: bold;
`;

const Button = styled.div``;

const ButtonBuy =styled.button`
    background: #6368ea;
    font-size: 12px;font-weight: bold;
    color: #fff;
    padding: 8px 12px;
    border-radius: 5px;
    &.active{
        color: #6368ea;
        background: #fff;
        border:1px solid #6368ea;

    }
`;

