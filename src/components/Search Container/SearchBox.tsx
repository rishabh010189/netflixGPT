import { FormEvent, useRef } from "react";
import client from '../../utils/openAi';
import axiosInstanceOpenAi from "../../utils/axiosInstanceOpenAi";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addMovieRecommendations } from "../../utils/searchSlice";
import MovieList from "../Shared/MovieList";


const SearchBox = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const gptMovies = useSelector((state:any) => state.search);
  const searchResultsToShow = gptMovies?.movieLists?.flat();

  const searchMovieOnTmdb = async (movie:string) => {
    try{
      const res = await axiosInstance.get(
        "3/search/movie?query="+movie);
      return res.data.results;
      }
      catch(err){
        console.error(err);
      }
  }

  const submitHandler = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let searchText = searchRef.current?.value;

    const response = await axiosInstanceOpenAi.get('/gpt', {params : {q: searchText}});
    const suggestedMovies = response.data.res.split(',');
    if(suggestedMovies?.length){
      console.log(suggestedMovies);
      const promiseArr = suggestedMovies.map((movie:any) => searchMovieOnTmdb(movie.trim()));
      const response = await Promise.all(promiseArr);
      dispatch(addMovieRecommendations({movieRecommendations: suggestedMovies, movieLists:response}));
    }

  }
  return (
    <div>
      <form className="text-center" onSubmit={submitHandler}>
        <input ref={searchRef} type="text" className="h-12 w-80 bg-slate-200 text-slate-800 rounded-md px-3" placeholder="What do you want to binge today?"/>
        <button type="submit" className="h-12 rounded-md px-3 bg-red-600 ml-2">Search</button>
      </form>
      <div className="w-[calc(100vw-100px)]">
        {
          gptMovies?.movieRecommendations?.length && <MovieList title="" movieList={searchResultsToShow}/>
        }
      </div>
    </div>
  )
}

export default SearchBox