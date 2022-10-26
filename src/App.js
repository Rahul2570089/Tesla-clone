import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from './features/Car/Slice';
import { selectMenuitem } from './features/Car/Slice';
import { useSelector } from 'react-redux';
import Section from './components/Section';

function App() {
  const cars = useSelector(selectCars);
  const menuitem = useSelector(selectMenuitem);
  let [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  }

  return (
      <div className="App">
        <Container blur={toggle}>
          <a href='/'>
            <img src="/images/logo.svg" alt="" />
          </a>
          <Menu>
            {cars && cars.map((car, index) => (
              <a key={index} href="/">{car}</a>
            ))}
          </Menu>
          <RightMenu>
            <a href="/">Shop</a>
            <a href="/">Account</a>
            <div onClick={onClick}>Menu</div>
          </RightMenu>
        </Container>
        <Menuitem show={toggle}>
          <CustomClose>
            <Closeicon onClick={onClick} />
          </CustomClose>
          {menuitem && menuitem.map((menu, index) => (
            <li><a key={index} href="/">{menu}</a></li>
          ))}
          <li><a href="/"><img src="/images/globe.jpeg" height='20px' width='20px' alt="" /> <h3>India</h3><h4>English</h4> </a></li>
        </Menuitem>
        <Container2 c={toggle}>
          <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            rightBtnText=""
          />
        </Container2>
      </div>
  );
}

export default App;

const Container = styled.div`
    min-height: 60px;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 1;
    filter: ${props => props.blur ? 'blur(5px)' : 'blur(0px)'};
`

const Menu = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex: 1;
    justify-content: center;
    padding-left: 55px;
    a{
        font-weight: 600;
        height: 30px;
        align-items: center;
        display: flex;
        padding: 0 20px;
        flex-wrap: nowrap;
        &:hover {
            background-color: #c2c6ce;
        }
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a, div{
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
        margin-right: 5px;
        cursor: pointer;
        height: 30px;
        align-items: center;
        display: flex;
        &:hover {
            background-color: #c2c6ce;
        }
    }
`

const Menuitem = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    text-align: start;
    font-size: 14.5px;
    transition : all 0.4s ease;
    backdrop-filter: blur(5px);
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li {
        cursor: pointer;
        padding: 10px 25px;
        a {
            font-weight: 600;
        }
        h4 {
            font-size: 12px;
            font-weight: 400;
            padding-top: 5px;
            padding-left: 25px;
        }
        h3 {
            padding-left: 25px;
        }
        img {
            position: absolute;
        }
    }

    div {
        text-align: end;
    }
`

const Closeicon = styled(CloseIcon)`
    cursor: pointer;
`

const CustomClose = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Container2 = styled.div`
    height: 100vh;
    filter: ${props => props.c ? "blur(5px)" : "blur(0px)"};
`