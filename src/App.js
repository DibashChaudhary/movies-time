import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { MOviesListHeading } from './components/MOviesListHeading';
import { SearchBox } from './components/SearchBox';
import { AddFavourites } from './components/AddFavourites';
import { RemoveFavourites } from './components/RemoveFavourites';

function App() {

  const [movies, setMovies]=useState([])
  const [searchValue, setSearchValue]=useState("")
  const [favourite, setFavourite]=useState([])

  const getMoviesRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b4ca3b00 ` 
    const response = await fetch(url);
    const responseJson =await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search)
    }
    
  }

  useEffect(()=>{
    getMoviesRequest(searchValue);
  }, [searchValue])

  // useEffect(()=>{
  //   const movieFavourites =JSON.parse(
  //     localStorage.getItem('react-movie-app-favourites')
  //   )
  //   setFavourite(movieFavourites)
  // },[])

  // const saveLocalStorage =(items)=>{
  //   localStorage.setItem('react-movie-app-favourites', JSON.stringify(items)
  //   );
  // }

  const addFavouriteMovie = (movie)=>{
    const newFavouriteList =[...favourite, movie]
    setFavourite(newFavouriteList)
    // saveLocalStorage(newFavouriteList)
  }
  const removeFavouriteMovie = (movie)=>{
    const newFavouriteList =favourite.filter((favourite) => favourite.imdbID !==movie.imdbID
    );
    setFavourite(newFavouriteList)
    // saveLocalStorage(newFavouriteList)
  }

  
  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MOviesListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MoviesList 
          movies={movies} 
          handlefavouriteClick={addFavouriteMovie} 
          favouriteComponents={AddFavourites}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MOviesListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MoviesList 
          movies={favourite} 
          handlefavouriteClick={removeFavouriteMovie} 
          favouriteComponents={RemoveFavourites}/>
      </div>
    </div>
  );
}

export default App;
