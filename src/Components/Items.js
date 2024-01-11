import React, { useState } from 'react'
import { connect } from 'react-redux'
import {  setitems,resetitems } from './Actions'

const Items = ({ setitems, resetitems }) => {
    const Products = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"]
    const [items, setItems] = useState("All Items")
    return (
        <div>
            <center className='mt-3'>
                <span className='h4 m-2'>Items :</span>
                <select name='items' className='p-1' onChange={(e) => setitems(e.target.value)}>
                    {Products.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))
                    }
                </select>
            </center>
        </div>
    )
}

const mapStateToProps = state => ({
    items_name: state.ItemsReducer.items_name
})

export default connect(mapStateToProps, { setitems, resetitems })(Items)
