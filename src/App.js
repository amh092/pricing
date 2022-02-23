import './App.css';
import normalize from 'normalize.css'
import styled from 'styled-components'
import Header from './components/Header';
import Background from './components/Background'
import SwitchPackage from './components/SwitchPackage/SwitchPackage';
import PackageCard from './components/PackageCards/PackageCards';
import {useState} from 'react'
const StyledContainer = styled.div`

@media screen and (min-width: 1200px){
  width: 1050px;
  margin: 0 auto;
display:flex;

flex-flow: row wrap ;
justify-content: center;

}

`
//completed
function App() {
  const [period, setPeriod] = useState("monthly");

  const setPeriodHandler = (period) => {
    setPeriod(() => {
      return period;
    });
  };

  return (
    <div>
    <Background/>
     <Header/>
     <SwitchPackage onPeriodChange={setPeriodHandler}/>
     <StyledContainer>
      {period === "annually" ? (<PackageCard packType={'basic'} price={'199.99'} storage={'500 GB Storage'} usersAllowed={'2 Users Allowed'}
       sendGb={' Send up to 3 GB'} packStyle={'basic'} />):(<PackageCard packType={'basic'} price={'19.99'} storage={'500 GB Storage'} usersAllowed={'2 Users Allowed'}
       sendGb={' Send up to 3 GB'} packStyle={'basic'} />)}

      {period === "annually" ? (<PackageCard packType={'professional'} price={'249.99'} storage={'1 TB Storage'} usersAllowed={'5 Users Allowed'}
       sendGb={' Send up to 10 GB'} packStyle={'professional'}/>):(<PackageCard packType={'professional'} price={'24.99'} storage={'1 TB Storage'} usersAllowed={'5 Users Allowed'}
       sendGb={' Send up to 10 GB'} packStyle={'professional'}/>)}
      {period === "annually" ? (<PackageCard packType={'master'} price={'399.99'} storage={'2 TB Storage'} usersAllowed={'10 Users Allowed'} sendGb={' Send up to 20 GB'} packStyle={'master'}/>):
      (<PackageCard packType={'master'} price={'39.99'} storage={'2 TB Storage'} usersAllowed={'10 Users Allowed'} sendGb={' Send up to 20 GB'} packStyle={'master'}/>)}
      
     </StyledContainer>
     </div>
     
  );
}

export default App;
