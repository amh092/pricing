import React,{useState} from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
position: relative;
width: 56px;
height: 32px;
border-radius: 32px;
background: linear-gradient(#A2A7F0,#696EDD);



span {
    position: absolute;
    display: block;
    background: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    color: white;
    top: 4px;
    left: 4px;
    transition: 200ms ease-in;
    cursor: pointer;
}
span.monthly {
    left: 27px;
    transition: 200ms ease-in;
}
`
const SwitchButton = (props) => {
    
    const [packagePeriod, setPackagePeriod] = useState('annually')

    const switchHandler = () => {
        if (packagePeriod == "monthly"){
        
            setPackagePeriod("annually")
        }
        
        else if (packagePeriod == "annually") {
            setPackagePeriod('monthly')
        }
        
    }
    props.onPeriodChange(packagePeriod)
    return (
        <div>
        <StyledButton>
            <div><span className={packagePeriod === "annually" ? 'annually':'monthly'} onClick={switchHandler}>.</span></div>
        </StyledButton>
        </div>
    )
}

export default SwitchButton
