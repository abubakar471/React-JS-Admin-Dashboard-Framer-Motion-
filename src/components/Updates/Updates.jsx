import { UpdateCardsData } from "../../Data/Data"
import "./Updates.css"
import React from 'react'

const Updates = () => {
    return (
        <div className="Updates">
            {
                UpdateCardsData.map((update, index) => (
                    <div key={index} className="update">
                        <img src={update.img} alt={update.name} />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{update.name}</span> &nbsp;
                                <span>{update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Updates
