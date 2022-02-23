import React,{useState} from 'react'
import styled from 'styled-components'
import SwitchButton from './SwitchButton'


const StyledSwitch = styled.div`
color: #6E728E;
text-transform: capitalize;
display: flex;
flex-flow : row wrap;
justify-content: space-evenly;
margin: 0 auto;
width:14.9375em;

h1 {
    font-size : .9em;
    opacity: .6
}
`
const SwitchPackage = (props) => {
    const [period, setPeriod] = useState("monthly");

    const setPeriodHandler = (period) => {
      setPeriod(() => {
        return period;
      });
    };
    props.onPeriodChange(period)
    return (
        <div>
            <StyledSwitch>
            <h1> 
            annually
            </h1>
            <SwitchButton onPeriodChange={setPeriodHandler}/>
            <h1>
            monthly
            </h1>
            </StyledSwitch>
        </div>
    )
}

export default SwitchPackage
