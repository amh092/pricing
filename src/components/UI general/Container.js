import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`

    width: 375px;
    margin: 0 auto; 
    overflow: hidden;
@media screen and (min-width : 1200px ){
    width: 1440px;
}

`


const Container = (props) => {
    return (
        <div>
         <StyledContainer>
            {props.children}
         </StyledContainer>
        </div>
    )
}

export default Container
