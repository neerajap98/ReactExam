import React from 'react';
import styled from 'styled-components';
import Horse from '../../assets/horse white.svg';
import Profile1 from '../../assets/profileactive.svg';
import Dashboard1 from '../../assets/dashboard.svg';
import Statistics from '../../assets/graphactive.svg';
import Payment from '../../assets/paymentactive.svg';
import Transaction from '../../assets/transactionactive.svg';
import Settings from '../../assets/settingsactive.svg';
import Support from '../../assets/supportactive.svg';
import Logout from '../../assets/logoutactive.svg';
import File from '../../assets/file.svg'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <MainContainer>
            <ProfileContainer>
                <Profile src={require("../../assets/Profile.png")}
                         alt = "Image"
                         width = "100px"/>
            </ProfileContainer>
            <NameContainer>
                <PersonName>Melissa Brown</PersonName>
                <Qualification>Sr.Visual Designer</Qualification>
            </NameContainer>
            <ButtonContainer>
                <HorseImage src={ Horse} 
                    alt='Horse-Image' 
                    width={"15px"}/>
                <ButtonTitle>Become a pro</ButtonTitle>
            </ButtonContainer>
            <ItemContainer>
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="profile">
                        <ItemImage src= {Profile1} 
                            alt='profile' 
                            width='20px' />
                        Profile
                    </NavLink>
                </Items> 
                <Items> 
                    <NavLink 
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="/">
                        <ItemImage src= {Dashboard1} 
                            alt='profile' 
                            width='20px' />
                        Dashboard
                    </NavLink>
                </Items>  
                <Items> 
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="statistics">
                        <ItemImage src= {Statistics} 
                            alt='profile' 
                            width='20px' />
                        Statistics
                    </NavLink>
                </Items>
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="payment">
                        <ItemImage src= {Payment} 
                            alt='profile' 
                            width='20px' />
                        Payment
                    </NavLink>
                </Items> 
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="transaction">
                        <ItemImage src= {Transaction} 
                            alt='profile' 
                            width='20px' />
                       Transaction
                    </NavLink>
                </Items> 
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="settings">
                        <ItemImage src= {Settings} 
                            alt='profile' 
                            width='20px' />
                        Settings
                    </NavLink>
                </Items> 
                <Items> 
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="support">
                        <ItemImage src= {Support} 
                            alt='profile' 
                            width='20px' />
                        Support
                    </NavLink>
                </Items>
                <Items> 
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="logout"
                        >
                        <ItemImage src= {Logout} 
                            alt='profile' 
                            width='20px' />
                        Logout
                    </NavLink>
                </Items>
            </ItemContainer>
            <StorageContainer>
                <FolderImage 
                src= {File} 
                alt='file'
                width={"50px"}/>
                <Storage>Buy More Storage</Storage>
                <BuyButton>Buy Now</BuyButton>
            </StorageContainer>
        </MainContainer>           
    )
}

export default Navbar;

const MainContainer = styled.div`
    padding: 50px 20px;
    text-align: center;

`;

const ProfileContainer = styled.div`
    width: 75px;
    margin: 0 auto;
    margin-bottom: 15px;
`;

const Profile = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;

const NameContainer = styled.div`

`;

const PersonName = styled.h6`
    font-size: 14px;
    font-weight: 700;
    color: #000;
    margin-bottom: 5px;

`;

const Qualification = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #c3c3c3;
    
`;

const ButtonContainer = styled.div`
    background-color: #6368ea;
    width: 85%;
    margin: 0 auto;
    margin-top: 35px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 30px;
`;
const HorseImage = styled.img`
    display: block;
    margin-right: 5px;
`;
const ButtonTitle = styled.small`
    color: #fff;
    font-size: 12px;
`;

const ItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: 10px;
`;

const Items = styled.li`
    display: flex;
    flex-direction: column;
   
`;


const ItemImage = styled.img`
    display: block;
    margin-right: 20px;
    
`;

const StorageContainer = styled.div`
    width: 140px;
    height: 140px;
    box-shadow: 4px 4px 10px #c3c3c3;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
`;

const FolderImage = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const Storage = styled.span`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
`;

const BuyButton = styled.button`
    padding: 5px 7px;
    background-color: #6368ea;
    font-size: 12px;
    width: 60%;
    margin: 0 auto;
    color: #fff;
    border-radius: 5px;
`;
