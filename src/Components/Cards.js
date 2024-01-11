import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addorder, resetitems, resettablenumber } from './Actions'

function Cards({items_name,addorder,table_number}) {
    const [data, setData] = useState([])
    const [cloneData, setCloneData] = useState([])
    useEffect(() => {
        fetch("https://658154513dfdd1b11c42fa6a.mockapi.io/items").then(
            response => response.json()).then(
                json => {
                    setData(json);
                    setCloneData(json);
                })
    }, [])
    useEffect(() => {
        if (items_name != "All Items") {
            let specificData = cloneData.filter(item=>item.category===items_name)
            setData(specificData)
        } else {
            setData(cloneData)
        }
    }, [items_name])
    const Handler=  (id,name,price,url)=>{
      if(table_number != null){
         addorder(id,name,price,table_number,url)
         resetitems()
         resettablenumber()
         alert("Order Placed Successfully...")
      }
      else{
        alert("Please Select The Table Number Before You Order the Item...")
      }
    }
    return (
        <div>
            <center>
                {data.length > 0 ?
                    <div className='container'>
                        <div className='row'>
                            {data.map((item) => (
                                <div className='col-md-4' style={{ padding: '5px' }} key={item.id}>
                                    <div className='card' style={{ width: '18rem', padding: '3px' }}>
                                        <img src={item.url} className='card-image-top' />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.name}</h5>
                                            <div className='card-text'>Rs.{item.price}</div>
                                            <button className='btn btn-primary'
                                             onClick={()=>Handler(item.id,item.name,item.price,item.url)}>Order</button>
                                        </div>
                                    </div>
                                </div>)
                            )}
                        </div>
                    </div>
                    :
                    <div className='spinner-border text-primary'></div>
                }
            </center>
        </div>
    )
}

const mapStateToProps = state => ({
    items_name: state.ItemsReducer.items_name,
    table_number:state.TableReducer.table_number
})

export default connect(mapStateToProps,{addorder})(Cards)
