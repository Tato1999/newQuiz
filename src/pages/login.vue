<template>
<div>
    <Header/>
    <div class="form-div" @submit.prevent="login">
        <form class="form-style">
            <label for="username">Username</label>
            <input type="text" placeholder="Enter UserName..." v-model="email"/>
            <div style="margin: 15px">
            <label for="password">Password</label>
            <input type="password" placeholder="password" v-model="password"/>
            </div>
            <input type="submit" value="Login" />
            <p>U dont have account yet? <br>
            <router-link to="/register"> Register </router-link>Now for Free</p>
        </form>
    </div>
    
</div>

  
</template>

<script>
import Header from '../component/heade.vue'
import{ref} from "vue"

import firebase from 'firebase'
import {useRouter} from 'vue-router'
export default {
    data(){
        return{
            name: ''
        }
    },
  components: {
        Header
    },
    setup(){
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const User = [];
        const Uid = '';

        const login = () => {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
             .then((data) => {
                User.push(data)
                const Uid = User[0].user.uid
                localStorage.setItem('id',Uid)
                router.push('/profile')
                console.log(data)
                
            })
            .catch((error) =>{
              console.log(error.code)
            })
             /*if(localStorage.getItem('user') === null){
                setInterval(() => {
                    console.log('test')
                    localStorage.setItem('user', Uid)
                }, 1000)
            }*/
        };

        return{
            email,
            password,
            login,
            User,
            Uid
        }
    },
  
}
</script>

<style scoped>
.form-div{
    position: absolute;
    display: inline-flex;
    margin: auto;
    justify-content: center;
}
.form-style{
    display: inline-block;
    position: absolute;
    margin: 45px;
}
p{
    position: relative;
    display: block;
    margin: 70px;
    width: 55vw;
}

</style>