import React from 'react'

export const MoviesList = (props) => {

    const FavouriteComponent =props.favouriteComponents
  return (
    <>
        {props.movies.map((movie,index)=>
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie' />
                <div 
                    onClick={()=>props.handlefavouriteClick(movie)} 
                    className="overlay d-flex align-items-center justify-content-center">
                        kkkkk
                   
                    <FavouriteComponent />
                </div>
            </div>)}
    </>
  )
}
