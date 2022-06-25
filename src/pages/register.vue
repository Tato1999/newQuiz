<template>
<div>
    <Header/>
    <div class="form-div">
        <form class="form-style" @submit.prevent="register"> 
            <label for="username">Username: </label>
            <input type="email" placeholder="Enter UserName..." v-model="email"/>
            <div style="margin: 15px">
            <label for="password">Password: </label>
            <input type="password" placeholder="password" v-model="password"
            />
            <div style="margin: 15px; margin-left: 40px">
            <label for="password">Repeat:</label>
            <input type="password" placeholder="password"/>
            </div>
            </div>
            <input type="submit" value="Register" />
             <p>If u have Account going <router-link to="/login">Login</router-link></p>
        </form>
    </div>
    
</div>

  
</template>

<script>
import Header from '../component/heade.vue'
import {ref} from 'vue';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from 'vue-router'

export default {
  components: {
        Header
    },
    setup(){
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const register = () => {
            createUserWithEmailAndPassword(getAuth(), email.value, password.value)
             .then((data) => {
                console.log("yes Done!!!!")
                router.push('/')
             })
             .catch((error) =>{
                console.log(error.code)
             })
        };

        return{
            email,
            password,
            register
        }
    },
    mounted(){
        
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