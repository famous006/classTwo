import React from 'react'

const Card = ({ hnn, par, but, Image, title }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <img src={Image} alt={hnn} width={'100%'} />
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{par}</p>
                <button className='btn btn-danger'>{but}</button>
            </div>
        </div>
    )
}

export default Card
