import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // border: 1px solid ${({theme}) => theme.color.black};
    transition: all .5s ease-in-out;
    @media screen and (min-width: 767px) {
        display: none;
    }
`;

const ToggleBurger = styled.div`
    width: 30px;
    height: 4px;
    background-color: ${({theme}) => theme.color.black};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
    transition: all .5s ease-in-out;

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        background-color: ${({theme}) => theme.color.black};
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
    }

    &:before {
        transform: translateY(-12px);
    }

    &:after {
        transform: translateY(12px);
    }

    &.nav-menu{
        transform: translateX(-30px);
        background-color: transparent;
        box-shadow: none;

        &:before {
            transform: rotate(45deg) translate(21.5px, -21.5px);
        }

        &:after {
            transform: rotate(-45deg) translate(21.5px, 21.5px);
        }
    }
`;

function Toggle () {
    const [toggle, setToggle] = useState(false);
    const menu = useRef(null);
    const handleToggle = () => {
        setToggle(!toggle);
        menu.current?.classList.toggle("nav-menu");
    }
    return (
        <ToggleBtn onClick={handleToggle}>
            <ToggleBurger ref={menu}/>
        </ToggleBtn>
    );
}

export default Toggle;