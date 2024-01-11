import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Header({ count }) {
  return (
    <div>
      <nav className='navbar navbar-light bg-light '>
        <a className='navbar-brand' >
          <Link to='/' style={{ color: 'black', textDecoration: 'none', paddingLeft: '30px' }}>Restaurant</Link></a>
        <button className='btn btn-primary'>
          <Link to='/Orders' style={{ color: 'white', textDecoration: 'none' }}>Orders</Link>&nbsp;
          <span className='badge bg-danger'>{count}</span>
        </button>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.OrderReducer.length
})

export default connect(mapStateToProps)(Header)
