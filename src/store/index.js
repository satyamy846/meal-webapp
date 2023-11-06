import {createStore} from 'vuex';
import state from './state'
import {searchMeals, searchMealsByLetter} from './actions'
import getters from './getters'
import {setSearchedMeals, setSearchedMealsByletter} from './mutations'
const store = createStore({
    state,
    actions:{
        searchMeals,
        searchMealsByLetter
    },
    mutations:{
        setSearchedMeals,
        setSearchedMealsByletter
    },
    getters
})

export default store;