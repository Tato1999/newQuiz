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

import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useRouter} from 'vue-router'
export default {
    data(){
        return{
            test: false,
            User:{}
        }
    },
  components: {
        Header
    },
    setup(){
        const email = ref("");
        const password = ref("");
        const router = useRouter();

        const login = () => {
         signInWithEmailAndPassword(getAuth(), email.value, password.value)
             .then((data) => {
                console.log("yes Done!!!!")
                router.push('/login')
            
          
             })
             .catch((error) =>{
                console.log(error.code)
             })
        };

        return{
            email,
            password,
            login,
            
        }
    }
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