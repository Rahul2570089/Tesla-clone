import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import '../index.css';

function Section(props) {
    return (
        <Wrap bgimage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade> 
                <DowmArrow src="/images/down-arrow.svg"></DowmArrow>
            </Button>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgimage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.85;
    font-size: 15px;
    cursor: pointer;
    margin: 12px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DowmArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Button = styled.div`

`