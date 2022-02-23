import React from 'react'
import styled from 'styled-components'
import backgroundImageTop from '../images/bg-top.svg'
import backgroundImageBottom from '../images/bg-bottom.svg'

const StyledBackTop = styled.div`

position: absolute;
top: -4%;
left: 51%;
background: url(${backgroundImageTop}) no-repeat;
min-height: 840px;
width: 187px;
z-index: -1;


@media screen  and (min-width: 1200px) {
    top: 0%;
    left: 80%;
    background: url(${backgroundImageTop}) no-repeat;
    min-height: 840px;
    width: 1440px;
&.bottom {
    background: url(${backgroundImageBottom}) no-repeat;
    top: 70%;
    left: 0%;
}
}
`

const Background = () => {
    return (
        <div>
        <StyledBackTop/>
        <StyledBackTop className="bottom"/>
        </div>

    )
}

export default Background
