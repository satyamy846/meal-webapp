import axiosClient from "../utils/axiosClient"

export const searchMeals = async ({commit}, searchKey)=>{
    await axiosClient.get(`search.php?s=${searchKey}`)
    .then(({ data })=>{
        debugger
        commit('setSearchedMeals', data.meals)
    })
    .catch((err)=>{
        console.log("Error: ", err);
    })
}

export const searchMealsByLetter =  async ({ commit }, letter)=>{
    await axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) =>{
        // console.log('data meals1 == ', data.meals);
        debugger;
        commit('setSearchedMealsByletter', data.meals)
        // console.log('data meals == ', data.meals);
    })
    .catch((err)=>{
        console.log("Error: ", err);
    })
}