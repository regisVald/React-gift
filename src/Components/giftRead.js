import React from 'react'
import { GiftGridItem } from './GiftGridItem';
import { useFetchGifts } from '../Hooks/UseFetchGifts';

export const Giftgrid = ({ category }) => {

    const {data, loading} = useFetchGifts(category);


    return (
        <>
           <h2>{category}</h2>
         {loading && <p>loading</p>}
        <div className='card-grid'>
              {
                data.map(img => (
                    <GiftGridItem 
                        key={img.id}
                        {...img}
                        />
                ))
            }
        </div>
    </>
    )
}