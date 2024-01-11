import React, { useState } from 'react'
import { connect } from 'react-redux'
import { settablenumber } from './Actions'

const Tables = ({ table_number, settablenumber }) => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const InActiveBtn = 'btn btn-outline-primary m-2'
  const ActiveBtn = 'btn btn-outline-primary m-2 active'
  const [table, setTable] = useState()
  return (
    <div>
      <center className='mt-2'>
        <i><h4>Please select your table number :{settablenumber}</h4></i>
        {tables.map((tabs, index) => (
          <div style={{ display: 'inline' }} key={index}>
            <button className={table_number === tabs ? ActiveBtn : InActiveBtn} onClick={() => settablenumber(tabs)}>
              {tabs}
            </button>
          </div>
        ))}
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  table_number: state.TableReducer.table_number
})

export default connect(mapStateToProps, { settablenumber })(Tables);
