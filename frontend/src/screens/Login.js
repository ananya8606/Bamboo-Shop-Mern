import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import { login } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { USER_LOGIN_CLEAR } from '../constants/userConstants'
import firebase from 'firebase/app'
import { register } from '../actions/userActions'
import { l } from "../Utils/translateLibrary/login";
const Login = ({ history, location }) => {
const settings = useSelector((state) => state.settings);
const { language } = settings;
// import firebaseConfig from '../Firebase'
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  console.log('fbbase', process.env.REACT_APP_PROJECTID)
  var provider = new firebase.auth.GoogleAuthProvider()
  const signInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let credential = result.credential
        let token = credential.accessToken
        const user = result.user
        dispatch(register(user.displayName, user.email, 'jpt', 'googlesignin'))
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        let email = error.email
        let credential = error.credential
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInformation } = userLogin
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = location.search && location.search.split('=')[1]

  useEffect(() => {
    if (error) {
      dispatch({
        type: USER_LOGIN_CLEAR,
      })
    }
    userInformation && redirect
      ? history.push(redirect)
      : userInformation && window.history.back()
  }, [history, userInformation])
  return (
    <div className='form-outer'>
      <div className='form-outermost'>
        <span>{l.si[language]}</span>
        {}
        {loading && <Loading />}
        {error && <Message message={error} color='red' />}
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={l.eye[language]}
            />
          </div>

          <div className='form-control'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={l.eyp[language]}
            />
          </div>
          <button type='submit'>{l.si[language]}</button>
        </form>
        <span>{l.ol[language]}</span>
       <button className='google-btn' onClick={signInGoogle} >
      <img src='https://www.polymtl.ca/calendrier/sites/calendrier.amigow2020.polymtl.ca/files/googlelogo.jpg' alt='' />
      <span className='g-text'>{l.google[language]}</span>
      </button>

        <span>{l.nr[language]}</span>
        <Link to={`/register?redirect=${redirect}`}>{l.rg[language]}</Link>
      </div>
    </div>
  )
}

export default Login
