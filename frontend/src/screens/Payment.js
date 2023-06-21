import React, { useState, useEffect } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { pay } from "../Utils/translateLibrary/paymentMethod";
const Payment = ({ history }) => {
const settings = useSelector((state) => state.settings);
  const { language } = settings;
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const [paymentMethod, setPaymentMethod] = useState('Pay On Delivery')
  const [check, setChecked] = useState(false)
  const [check1, setChecked1] = useState(false)
  const dispatch = useDispatch()
  const onChangeHandler = (e, id) => {
    console.log('value of id', id)
    setPaymentMethod(null)
    if (id == 1) {
      setChecked(!check)
      setChecked1(false)
      !check && setPaymentMethod(e.target.value)
    } else {
      setChecked1(!check1)
      setChecked(false)
      !check1 && setPaymentMethod(e.target.value)
    }
    // setPaymentMethod(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }
  if (!shippingAddress.address) {
    history.push('/shipping')
  }
  const userLogin = useSelector((state) => state.userLogin)
  const { userInformation: userInfo } = userLogin
  useEffect(() => {
    !userInfo && history.push('/')
  }, [userInfo])
  return (
    <div className='payment-outer'>
      <CheckoutSteps step1 step2 step3 />
      <div className='form-control-payment'>
        <span style={{ textAlign: 'center' }}>{pay.pa[language]}</span>
        <div className='pay'>
          {' '}
        <div className='pay-control'>
        <input
              type='checkbox'
              name='Pay on Delivery'
              value='Pay on Delivery'
              id='1'
              checked={check}
              onChange={(e) => onChangeHandler(e, 1)}
            />
          <span>{pay.can[language]}</span>
        </div>
        <div className='pay-control'>
            <input
              type='checkbox'
              name='Paytm'
              value='Paytm'
              id='2'
              checked={check1}
              onChange={(e) => onChangeHandler(e, 2)}
            />
            <span>Paytm</span>
          </div>
          {console.log(paymentMethod)}
          {/* <span>You can pay us on your order delivery for now</span> */}
          </div>
        <button onClick={submitHandler} className='payButton'>
          {pay.continue[language]}
        </button>
      </div>
    </div>
  )
}

export default Payment
