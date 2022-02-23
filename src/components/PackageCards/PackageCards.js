import styled from 'styled-components'

const StyledPack = styled.div`


width: 327px;
height: 453px;

border-radius: 12px;

margin: 80px auto;
display:flex;
flex-flow: column wrap;
justify-content: flex-start;
align-items: center;
align-content: stretch;
padding: 24px;

text-transform: capitalize;
font-family: Montserrat;
color:#6E728E;
font-size: .5em;

background:#FFFFFF;
hr {
    width: 100%;
    margin-top: .9em;
    opacity: .7;
}

h1:nth-of-type(2) {
    margin: 28px 0 0 0 ;
    font-size: 6em;

}

span {
    font-size: 40px;
    vertical-align: top;
}
&.basic .learn-more {
    width: 269px;
    height:44px;
    margin-top: 2em;
    background: linear-gradient(#A2A7F0,#696EDD);
    color: white;
    border-radius: 12px;
    vertical-align: center;
    cursor: pointer;
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: center

}
&.master .learn-more {
    width: 269px;
    height:44px;
    margin-top: 2em;
    background: linear-gradient(#A2A7F0,#696EDD);
    color: white;
    border-radius: 12px;
    vertical-align: center;
    cursor: pointer;
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: center
}
&.professional .learn-more {
    width: 269px;
    height:44px;
    margin-top: 2em;
    background: white;
    color: #A2A7F0;
    border-radius: 12px;
    vertical-align: center;
    cursor: pointer;
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: center
}


h1:last-of-type {
    text-transform: uppercase;
    text-align: center;
    font-size:13px;

}

&.professional {
   height:500px;
   color: white;
   justify-self: center;
   background:linear-gradient(#A2A7F0,#696EDD);
   position: relative;
   top: -20px;
}

`

const PackageCard = (props) => {


    return (
        <div>
        
            <StyledPack className={props.packStyle}>
                <h1>{props.packType}</h1>
                <h1><span>$ </span>{props.price}</h1>
                <hr/>
                <h1>{props.storage}</h1>
                <hr/>
                <h1>{props.usersAllowed}</h1>
                <hr/>
                <h1>{props.sendGb}</h1>
                <hr/>
                <div className={'learn-more'}>
                <h1>
                Learn more
                </h1>
                </div>

            </StyledPack>

        </div>
    )
}


export default PackageCard