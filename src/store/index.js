import { createStore } from 'vuex'
import router from '../router'
import { auth } from './db'
import {
    creatUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from './db/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default createStore({
    state:{
        user: null
    },
    mutation: {
        SET_USER(state, user){
            state.user = user
        },
        CLEAR_USER(state){
            state.user = null
        }
    },
    action: {
        //async login({commit}, details){

        //},
        async register({commit}, details){
            const {email, password} = details

            try{
                await createUserWithEmailAndPassword(auth, email,password)
            }catch (error){
                consolele.log(error)
               
            }
            commit('SET_USER', auth.currentUser)

            router.push('/')

        },
        //async logout({commit}){

        //},
    }
})