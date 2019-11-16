import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';  
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const   GaneshPage = () => (
<div>
  <h1> GANESH KITS </h1>
  <h2> ganesh related samaan </h2>
</div>
);

const LakshmiPage = () => (
  <div>
   <h1>Lakshmi Kit</h1>
   <h3>lakshmi devi related samaan</h3>
  </div>
);

const SatyanarayanaPage = () => (
  <div>
   <h1>Satyanarayana Swami</h1>
   <h3>Satyanarayana swami related kit for gruha prevesham</h3>
  </div>
);

const SaibabaPage = () => (
  <div>
    <h1>Sai baba related pooja saman</h1>
    <h3> sai baba photos and idols</h3>
  </div>
);

const ShivaPage = () => (
  <div>
    <h1>Shiva rathri pooja special</h1>
    <h3> shiva related rudraksha and lingas</h3>
  </div>
);



class App extends React.Component {
 constructor(props){
   super(props);

   this.state = {
     currentUser: null
   };
 }
  
   unsubscribeFromAuth = null

 componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id, 
             ...snapShot.data()
           }
         });
           console.log(this.state);

       });
       
     }
     this.setState({currentUser: userAuth});
   });
 }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }


  render(){
  return (
    <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/ganesh' component={GaneshPage} />
         <Route path = '/lakshmi' component = {LakshmiPage} />
         <Route path = '/satyanarayana' component = {SatyanarayanaPage} />
         <Route path = '/saibaba' component ={SaibabaPage} />
         <Route path = '/shiva' component = {ShivaPage} />
         <Route path = '/shop' component = {ShopPage} />
         <Route path = '/signin' component = {SignInAndSignUpPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
