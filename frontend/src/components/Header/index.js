import React from 'react';
import {Logo, HeaderContainer} from './styles';
import Icone from '../../assets/icon.png';

function Header(props) {
    return(
    <>
        <HeaderContainer>
            <Logo src={Icone} alt='Micro = Encurtador de URL' />
            <h1>Micro</h1>
            <p>{props.children}</p>
        </HeaderContainer>
    </>
    )
}

export default Header;