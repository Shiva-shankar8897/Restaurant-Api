import React from 'react'
import { connect, } from 'react-redux'
import Header from './Header'

function OrdersPage({ list }) {
  return (
    <div>
      <Header />
      <center>
        {list.length > 0 ?
          <div className='container'>
            <div className='row'>
              {list.map((item) => (
                <div className='col-md-4' style={{ padding: '5px' }} key={item.id}>
                  <div className='card' style={{ width: '18rem', padding: '3px' }}>
                    <img src={item.url} className='card-image-top' />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-text'>Billing Amount is : Rs.{item.price}</div>
                      <p>Table Number is : {item.table_number}</p>
                    </div>
                  </div>
                </div>)
              )}
            </div>
          </div> :
          <div className='h4 pt-5'>
            <i> No Order Is Placed Yet...</i>
          </div>
        }
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.OrderReducer
})

export default connect(mapStateToProps)(OrdersPage)
