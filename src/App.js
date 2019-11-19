import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';  
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'; 
import { selectCurrentUser } from './redux/user/user.selectors';

const   GaneshPage = () => (
<div>
  <h1> GANESH KITSt </h1>
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
    <h1>Shiva rathri pooja special with linga archana</h1>
    <h3> shiva related rudraksha and lingas</h3>
  </div>
);




class App extends React.Component {
unsubscribeFromAuth = null

 componentDidMount() {

  const {setCurrentUser} =  this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
         setCurrentUser({
             id: snapShot.id, 
             ...snapShot.data()
         });         
       });       
     }
     setCurrentUser( userAuth );
   });
 }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }


  render(){
  return (
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/ganesh' component={GaneshPage} />
         <Route path = '/lakshmi' component = {LakshmiPage} />
         <Route path = '/satyanarayana' component = {SatyanarayanaPage} />
         <Route path = '/saibaba' component ={SaibabaPage} />
         <Route path = '/shiva' component = {ShivaPage} />
         <Route path = '/shop' component = {ShopPage} />
         <Route exact path = '/signin' render= {() => this.props.currentUser ? (<Redirect to= '/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser
 })

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
