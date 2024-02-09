import React from 'react'

export const GiftGridItem = ({url, id , title}) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

