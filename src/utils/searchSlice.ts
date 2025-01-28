import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState : {
        isSearchVisisble: false,
        movieRecommendations: null,
        movieLists: null
    },
    reducers : {
        toggleSearchView(state){
            state.isSearchVisisble = !state.isSearchVisisble;
        },
        addMovieRecommendations(state, action) {
            state.movieRecommendations = action.payload.movieRecommendations;
            state.movieLists = action.payload.movieLists;
        }
    }
})

export const {toggleSearchView, addMovieRecommendations} = searchSlice.actions;
export default searchSlice.reducer;