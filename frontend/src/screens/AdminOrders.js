import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { listOrders } from '../actions/orderActions'
import axios from 'axios'
import { payOrder, deliverOrder } from '../actions/orderActions'
import ClearIcon from '@material-ui/icons/Clear'
import { ao } from "../Utils/translateLibrary/adminorders";
const AdminOrders = ({ history }) => {
const settings = useSelector((state) => state.settings);
const { language, currency } = settings;
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInformation: userInfo } = userLogin
  const orderList = useSelector((state) => state.orderList)
  const { loading, orders, error } = orderList
  const orderDeliver = useSelector((state) => state.orderDeliver)
  const {
    loading: loadingDeliver,
    success: successDeliver,
    error: errorDeliver,
  } = orderDeliver
  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay
  useEffect(() => {
    !userInfo && history.push('/')
    dispatch(listOrders())
  }, [userInfo, history, successPay, successDeliver])
  const deliverHandler = (id) => {
    dispatch(deliverOrder(id))
  }
  const payHandler = (id) => {
    dispatch(payOrder(id))
  }
  const detailHandler = async (id) => {
    history.push(`/orderDetails/${id}`)
  }
  return (
    <div className='adminOrdersouter'>
      {/* <CheckIcon/> */}
      {loading ? (
        <Loading />
      ) : (
        <div className='adminOrder-inner'>
          {loadingDeliver || (loadingPay && <Loading />)}
          {errorDeliver ||
            (errorPay && (
              <Message message={errorPay || errorDeliver} color='black' />
            ))}
          {orders && orders.length > 0 ? (
            <table>
              <tr>
                <th>{ao.o[language]}</th>
                <th>{ao.d[language]}</th>

                <th>{ao.u[language]}</th>
                <th>{ao.t[language]}</th>
                <th>{ao.i[language]}</th>
                <th>{ao.p[language]}</th>
                <th style={{ textAlign: 'center' }}>
                  <i className='fas fa-info'></i>
                </th>
              </tr>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.updatedAt}</td>
                  <td>{order.user}</td>

                  <td>Rs. {order.totalPrice}</td>
                  <td
                    style={{ textAlign: 'center' }}
                    onClick={() => deliverHandler(order._id)}
                  >
                    {order.isDelivered ? (
                      <i
                        className='fas fa-check'
                        style={{
                          color: 'green',
                          cursor: 'pointer',
                          fontSize: '20px',
                        }}
                      ></i>
                    ) : (
                      <ClearIcon style={{ color: 'red', cursor: 'pointer' }} />
                    )}
                  </td>
                  <td
                    style={{ textAlign: 'center' }}
                    onClick={() => payHandler(order._id)}
                  >
                    {' '}
                    {order.isPaid ? (
                      <i
                        className='fas fa-check'
                        style={{
                          color: 'green',
                          cursor: 'pointer',
                          fontSize: '20px',
                        }}
                      ></i>
                    ) : (
                      <ClearIcon style={{ color: 'red', cursor: 'pointer' }} />
                    )}
                  </td>
                  <td
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => detailHandler(order._id)}
                  >
                    Details{' '}
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <Message message={error} color='red' />
          )}
        </div>
      )}
    </div>
  )
}

export default AdminOrders
