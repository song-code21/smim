import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router';

const NavContainer = styled.nav`
    width: 100vw;
    height: 10vh;
    position: fixed;
    top: 0%;
    left: 0%;
`;

const NavBox = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLogo = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const NavTitle = styled(Link)`
    font-size: 28px;
    color: ${({theme}) => theme.color.yellow};
    text-decoration: none;
`;

const NavLists = styled.ul`
    width: 70%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, 13%);
    grid-gap: 1.5%;
    align-items: center;
`;

const NavList = styled.li`
    height: 50%;
    display: flex;
    align-items: center;
    &:last-child {
        font-weight: bold;
    };
`;

const ListLink = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: ${({theme}) => theme.color.gray};
    &:hover {
        font-weight: bold;
    }
    padding-bottom: 5px;
    border-bottom: 2px solid ${({current, theme}) => current ? `${theme.color.lightGray}` : "transparent"};
`;

const SignLink = styled(ListLink)`
    color: ${({theme}) => theme.color.black};
`;

function NavBar () {
    const {pathname} = useLocation(null);
    return (
        <NavContainer>
            <NavBox>
                <NavLogo>
                    <NavTitle to="/"> 스며들다 </NavTitle>
                </NavLogo>
                <NavLists>
                    <NavList>
                        <ListLink to="/10generation"current={pathname === "/10generation"}> 10대에게 </ListLink>
                    </NavList>
                    <NavList>
                        <ListLink to="/20generation" current={pathname === "/20generation"}> 20대에게 </ListLink>
                    </NavList>
                    <NavList>
                        <ListLink to="/30generation" current={pathname === "/30generation"}> 30대에게 </ListLink>
                    </NavList>
                    <NavList>
                        <ListLink to="/40generation" current={pathname === "/40generation"}> 40대에게 </ListLink>
                    </NavList>
                    <NavList>
                        <ListLink to="/50generation" current={pathname === "/50generation"}> 50대에게 </ListLink>
                    </NavList>
                    <NavList>
                        <ListLink to="/60generation" current={pathname === "/60generation"}> 60대에게 </ListLink>
                    </NavList>
                    <NavList>
                        <SignLink to="/"> 로그인/회원가입 </SignLink>
                    </NavList>
                </NavLists>
            </NavBox>
        </NavContainer>
    );
}

export default NavBar;