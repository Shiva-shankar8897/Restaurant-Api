import React from 'react'
import Header from './Header'

function PageNotFound() {
    return (
        <div>
            <Header />
            <center>
                <h4 className='mt-3 text-danger'>Error 404 Page Not Found...</h4>
            </center>
        </div>
    )
}

export default PageNotFound
   