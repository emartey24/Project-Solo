import React from 'react'
import Layout from './Layout'
import donate from '../Images/donate.jpg'

function Payment() {
  return (
    <>
  <Layout />
    <div className='money'>
    <a href="https://buy.stripe.com/test_aEUcO3eso2Ce5fGdQQ"> DONATION </a>
     </div>
     <div>
     <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={donate}
            alt="First slide"
          />
    </div>
    </>
  )
}

export default Payment