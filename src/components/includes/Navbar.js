import React, {useState} from 'react';
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
import File from '../../assets/file.svg';
import ham from '../../assets/hamburger.png'
import { NavLink } from 'react-router-dom';

function Navbar() {

const [isMobile, setIsMobile] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen);
};

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
            <ItemContainer className={isMobile ? "mobile-menu" : ""}>
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="profile">
                        <ItemImage src= {Profile1} 
                            alt='profile' 
                            width='20px'
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
                        Profile
                    </NavLink>
                </Items> 
                <Items> 
                    <NavLink 
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="/">
                        <ItemImage 
                            src= {Dashboard1} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}       
                            />
                        Dashboard
                    </NavLink>
                </Items>  
                <Items> 
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="statistics">
                        <ItemImage 
                            src= {Statistics} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
                        Statistics
                    </NavLink>
                </Items>
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="payment">
                        <ItemImage 
                            src= {Payment} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
                        Payment
                    </NavLink>
                </Items> 
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="transaction">
                        <ItemImage 
                            src= {Transaction} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
                       Transaction
                    </NavLink>
                </Items> 
                <Items>
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="settings">
                        <ItemImage 
                            src= {Settings} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
                        Settings
                    </NavLink>
                </Items> 
                <Items> 
                    <NavLink
                        className={({ isActive}) => 
                        isActive ? "active" : ""
                    }
                        to="support">
                        <ItemImage 
                            src= {Support} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
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
                        <ItemImage 
                            src= {Logout} 
                            alt='profile' 
                            width='20px' 
                            onClick={() => {
                                setIsMobile(false)
                            }}
                            />
                        Logout
                    </NavLink>
                </Items>
            </ItemContainer>
            <ItemContainer className="ham">
                <Items className='ham'>
                    <ItemImage
                        src={ham}
                        alt="profile"
                        width="20px"
                        onClick={() => {
                            setIsMobile(!isMobile);
                        }}
                    />
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
    @media all and (max-width:768px) {
        width: 100px;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    @media all and (max-width:680px) {
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    @media all and (max-width:480px) {
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
`;

const ProfileContainer = styled.div`
    width: 75px;
    margin: 0 auto;
    margin-bottom: 15px;
    @media all and (max-width:768px) {
        margin-left: -20px;
        width: 70px;
        margin-top: -30px;
    }
    @media all and (max-width: 480px) {
        margin: 0 0;
        width: 40px;
        align-items: center;
        margin-bottom: 15px;
    }
`;

const Profile = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
    margin-left: 20px;
    @media all and (max-width: 480px) {
        margin: 0 0;
    }
`;

const NameContainer = styled.div`
    @media all and (max-width:768px) {
        display: none;
    }
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
    @media all and (max-width:768px) {
        display: none;
    }
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
    @media all and (max-width:980px) {
        width: 95%;
    }
    @media all and (max-width:768px) {
       display: none;
    }
`;
const HorseImage = styled.img`
    display: inline-block;
    margin-right: 5px;
    @media all and (max-width:980px) {
        margin-right: 3px;
    }
`;

const ButtonTitle = styled.small`
    color: #fff;
    font-size: 12px;
    @media all and (max-width:980px) {
        font-size: 10px;
    }
`;

const ItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: 10px;
    &.ham {
        display: none;
    }
    
    &.mobile-menu {
        position: fixed;
        top: 0;
        right: -900px;
        background: #fff;
        padding: 30px;
        height: 100vh;
        z-index: 2;
        transition: transform 0.3s ease-out; 
        transform: translateX(-200px);
    }
    @media all and (max-width:768px) {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
       height: 70%;
       margin-top: -200px;
    }
    @media all and (max-width:640px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: -15px ;
        margin-left: 300px;
    }
    @media all and (max-width:480px) {
        display: none;
        &.ham {
            display: block;
            margin-left: 0px;
            margin-bottom: -90px;
        }
        &.mobile-menu {
            display: block;
            position: fixed;
            top: 0px;
            right: 0px;
            background: linear-gradient(to top, #8dadff, #fff);
            padding: 30px;
            height: 100vh;
            z-index: 2;
            transition: all 0.4s ease-in;
            transition: transform 0.3s ease-out; 
            transform: translateX(0px);
        }
    }
`;

const Items = styled.li`
    display: flex;
    flex-direction: column;
    @media all and (max-width:768px) {
       margin-top: -50px;
    }
    @media all and (max-width:480px) {
       margin-top: 40px;
       &:first-child {
            margin-top: 200px;
       }
       margin-right: -10px;
       &.ham {
        margin-top: 100px;
       }
       
    }
`;

const ItemImage = styled.img`
    display: block;
    margin-right: 20px;
    @media all and (max-width:768px) {
        margin-right: 10px;
    }
    @media all and (max-width:480px) {
       margin-right: 20px;
       margin-top: -155px;
    }
`;

const StorageContainer = styled.div`
    width: 140px;
    height: 140px;
    box-shadow: 4px 4px 10px #c3c3c3;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    @media all and (max-width:980px) {
        width: 120px;
        height: 120px;
    } 
    @media all and (max-width:768px) {
       display: none;
    }  

`;

const FolderImage = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    @media all and (max-width:980px) {
        width: 30px;
    }  
`;

const Storage = styled.span`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
    @media all and (max-width:980px) {
        font-size: 10px;
    }  
`;

const BuyButton = styled.button`
    padding: 5px 7px;
    background-color: #6368ea;
    font-size: 12px;
    width: 60%;
    margin: 0 auto;
    color: #fff;
    border-radius: 5px;
    @media all and (max-width:980px) {
        font-size: 11px;
    } 
`;

