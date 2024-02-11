import CustomerReview from "../CustomerReview/CustomerReview"
import Updates from "../Updates/Updates"
import "./RightSidebar.css"
import React from 'react'

const RightSidebar = () => {
    return (
        <div className="RightSidebar">
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>

            <div>
                <h3>Customer Review</h3>
                <CustomerReview />
            </div>
        </div>
    )
}

export default RightSidebar
