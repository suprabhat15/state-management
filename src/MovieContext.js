import React, { useState, createContext } from 'react'
export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] =  useState([
        {
            name:'Harry Porter',
            price: '$10',
            id:1234
        },
        {
            name:'Game Of Thrones',
            price:'$10',
            id:1235
        },{
            name:'Inception',
            price: '$10',
            id:1236
        }
    ])
    return <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>
}