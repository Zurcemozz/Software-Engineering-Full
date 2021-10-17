import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../imgs/logo.png';

const Container = styled.div` 
    height: 70px;
`
const Wrapper =  styled.div`
    padding: 20px 20px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Logo = styled.img`
height: 40px;
width: 40px;


`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
font-size: 16px;
cursor: pointer;
margin: 0 10px;
`

const Input = styled.input`
border: none;
margin-left: 5px;
border-bottom: solid 1px #000;
padding: 2px 3px;
font-size: 16px;
    &:focus {
        outline: none;
        
    }

`


const Navbar = () => {
    return (
        <Container>
              <Wrapper> 
                    <Left>
                        <SearchIcon />
                        <Input placeholder="Search Item..." />
                    </Left>


                    <Center> <Logo  src={LogoSrc} /> </Center>
                    <Right>
                        <MenuItem>Shop</MenuItem>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
        </Container>
    )
}

export default Navbar
