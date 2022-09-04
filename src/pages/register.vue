<template>
<div>
    <Header/>
    <div class="form-div">
        <form class="form-style" @submit.prevent="register" >
           <input type="text" placeholder="Enter Name..." v-model="name"/>
           <br>
           <br>
            <input type="text" placeholder="Enter Second Name..." v-model="secondName"/>
            <br>
            <br>
            <input type="email" placeholder="Enter UserName..." v-model="email"/>
            <div style="margin: 15px">
            <input type="password" placeholder="password" v-model="password" />
            <div style="margin: 15px; margin-left: 40px">
            </div>
            </div>
            <input type="submit" value="Register"/>
             <p>If u have Account going <router-link to="/login">Login</router-link></p>
        </form>
    </div>
    
</div>

  
</template>

<script>
import Header from '../component/heade.vue'
import {ref} from 'vue';
import firebase from 'firebase'
import {useRouter} from 'vue-router'

export default {
  components: {
        Header
    },
    setup(){
        const email = ref("");
        const password = ref("");
        const name = ref("");
        const secondName = ref("");
        const lvl = 1;
        const point = 0;
        const router = useRouter();
        const User = [];
        const Uid = '';
        const register = () => {
           firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
             .then((data) => {
                console.log(data)
                User.push(data)
                return firebase.firestore().collection("user").doc(User[0].user.uid).set({
                    id: User[0].user.uid,
                    name: name.value,
                    secondName: secondName.value,
                    level: lvl,
                    point: point
                }),
                router.push('/login')
             })
             .catch((error) =>{
                console.log(error.code)
             })
        };

        return{
            email,
            password,
            register,
            Uid,
            name,
            secondName,
            lvl,
            point
        }
    },
    methods:{
    },
    computed:{
    db(){
      return firebase.firestore()
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