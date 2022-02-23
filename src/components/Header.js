import styled from 'styled-components'
import Container from './UI general/Container'
const StyledH1 = styled.div`
  text-align: center;
  text-transform: capitalize;
  color #6E728E;
  font-family : Montserrat;
  font-size: 1em;
  line-height: 1.6em;
  margin-top: 3em;
 `;

const Header = (props) => {

return (


  <div>
   <Container>
      <StyledH1>
        <h1>our pricing</h1>
      </StyledH1>
   </Container>
  </div>

)

}

export default Header 