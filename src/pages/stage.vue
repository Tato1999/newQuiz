<template>
  <div class="timerDiv">
    <div>Correct: {{correct}}</div>
    <div>Timer: {{timer}}</div>
  </div>
  <div v-if="timeOn">
    <div class="question">{{this.DataQuest[this.QuestNum].Quest}}</div>
    <div class="answer" id="first" @click="checkAns1()">{{this.DataQuest[this.QuestNum].ANS1}}</div>
    <div class="answer" id="second" @click="checkAns2()">{{this.DataQuest[this.QuestNum].ANS2}}</div>
    <div class="answer" id="third" @click="checkAns3()">{{this.DataQuest[this.QuestNum].ANS3}}</div>
    <div class="answer" @click="help()">{{DataQuest[0].ANS4}}</div>
    <router-link to="/physic">
    <div class="back">Back</div>
    </router-link>
  </div>
  <div v-else>
    <div style="width: 100%; height:40vh; 
    background: linear-gradient(white,gray, rgb(199, 199, 199), rgb(230, 230, 230), white);
     position:relative; 
    top: 5vh">
    
    <h1 style="color:gold;">Congretulation!</h1>
    <h3>You Have {{correct}} Answer</h3>
    <h2>spin to earn Coins</h2>
    <wheel/>
    <router-link to="/physic">
     <div class="back2" @click="collect">Collect</div>
     </router-link>
    </div>
  </div>
</template>

<script>

import Header from '../component/heade.vue'
import quest from '../Question.json'
import Wheel from '../component/wheel.vue'
import firebase from 'firebase'
export default {
 components:{
    Header,
    Wheel
 },
 data(){
  return {
    DataQuest: quest,
    QuestNum: 0,
    Quest: '',
    Ans1: '',
    Ans2: '',
    Ans3: '',
    correct1: false,
    correct2: false,
    correct3: false,
    correct: 0,
    timer: 150,
    timeOn: true,
    giftValue: sessionStorage.getItem('gift')*1,
    point: 0,
    transferPoint: localStorage.getItem('point')*1,
    correctTransfer: 0,
    clickBool: true,
    helpData: ["ANS1", "ANS2", "ANS3"],
    randomForHelp: 0
  }
 },
 computed:{
  db(){
      return firebase.firestore()
    }
 },
 methods:{
  changeQuestNum(){
      this.QuestNum+=1
    console.log(this.QuestNum) 
 },
 defaultColor(){
  document.getElementById('first').style.backgroundColor = 'white'
  document.getElementById('second').style.backgroundColor = 'white'
  document.getElementById('third').style.backgroundColor = 'white'
 },
 checkAns1(){
   if("ANS1" === this.DataQuest[this.QuestNum].correctAnw){
    console.log('correct')
     document.getElementById('first').style.backgroundColor = 'green'
     this.correct1 = true
   }else{
    console.log('wrong')
    document.getElementById('first').style.backgroundColor = 'red'
    this.correct1 = false
   }

   this.changeQuestNum()
   this.countAns()
   this.endQuestion()
   this.clickBool = true

   setTimeout(this.defaultColor,100)
 },
 checkAns2(){
  if("ANS2" === this.DataQuest[this.QuestNum].correctAnw){
    console.log('correct')
    document.getElementById('second').style.backgroundColor = 'green'
    this.correct2 = true
   }else{
    console.log('wrong')
    document.getElementById('second').style.backgroundColor = 'red'
    this.correct2 = false
   }

   this.changeQuestNum()
   this.countAns()
   this.endQuestion()
   this.clickBool = true

   setTimeout(this.defaultColor,100)
 },
 checkAns3(){
  if("ANS3" === this.DataQuest[this.QuestNum].correctAnw){
    console.log('correct')
    document.getElementById('third').style.backgroundColor = 'green'
    this.correct3 = true
   }else{
    console.log('wrong')
    document.getElementById('third').style.backgroundColor = 'red'

    this.correct3 = false
   }

   this.changeQuestNum()
   this.countAns()
   this.endQuestion()
   this.clickBool = true
   
   setTimeout(this.defaultColor,100)

 },
 countAns(){
  if(this.correct1 || this.correct2 || this.correct3){
    this.correct++
  }
 },
 timerMinus(){
  this.timer--
 },
 downTimer(){
  if(this.timer>0){
    setTimeout(() => {
      this.timerMinus()
      this.downTimer()
    }, 1000)
    if(this.timer<=1){
      this.loseAlert();
      this.timeOn = false;
      
    }
  }
 },
 loseAlert(){
  console.log('time Over')
  
 },
 collect(){
  this.giftValue = sessionStorage.getItem('gift')*1
  this.transferPoint = localStorage.getItem('point')*1

  if(this.correct > 0 && this.clickBool){
    this.correctTransfer = (this.correct*1) * this.giftValue
    console.log(this.correctTransfer)
  if(localStorage.getItem('point') === null || localStorage.getItem('point') === "NaN"){
    localStorage.setItem('point', (this.correctTransfer))
  }else{
    this.transferPoint += (this.correctTransfer)
    localStorage.setItem('point', this.transferPoint)
  }
    this.updateDb()
    this.clickBool = false
 }
 },
 help(){
  this.randomForHelp = Math.floor(Math.random()*2)
  this.defaultColor()
  if(this.transferPoint >= 10 && this.clickBool){
    this.helpFunction();
    this.transferPoint -= 10
    localStorage.setItem('point', this.transferPoint)
    this.clickBool = false
  }
  console.log(Math.floor(Math.random()*2))
  this.db.collection('user').doc(localStorage.getItem('id')).update({
    point: localStorage.getItem('point')*1 - 10
  })
  .then((point) => {
    console.log(point)
    console.log('done')
  })
  .catch((error) => {
    console.log(error)
  })
 },
 helpFunction(){
  if(this.DataQuest[this.QuestNum].correctAnw === "ANS1"){
    console.log('ttttaaattt')
    if(this.randomForHelp == 0){
      document.getElementById('second').style.backgroundColor = 'red'
      
    }else if(this.randomForHelp == 1){
      document.getElementById('third').style.backgroundColor = 'red'
      
    }
  }
  if(this.DataQuest[this.QuestNum].correctAnw === "ANS2"){
    console.log('ttttaaaa')
     if(this.randomForHelp == 0){
      console.log('wtf')
      document.getElementById('first').style.backgroundColor = 'red'
    }else if(this.randomForHelp == 1){
      document.getElementById('third').style.backgroundColor = 'red'
    }
    
  }
  if(this.DataQuest[this.QuestNum].correctAnw === "ANS3"){
    console.log('tttt')
   if(this.randomForHelp == 0){
      document.getElementById('first').style.backgroundColor = 'red'
    }else if(this.randomForHelp == 1){
      document.getElementById('second').style.backgroundColor = 'red'
    }
  }
 },
 endQuestion(){
  if(quest.length < this.QuestNum +1){
    this.timeOn = false

   
  }
 },
 updateDb(){
    return this.db.collection('user').doc(localStorage.getItem('id')).update({
    point: localStorage.getItem('point')*1
})
.then((data) => {
  console.log(data)
  console.log('changed')
})
.catch((error) => {
  console.log(error.code)
})
}

},
mounted(){
  this.downTimer(),
  console.log(this.correctTransfer)
  
  console.log(this.clickBool)
 
}
}
</script>

<style>
.timerDiv div{
  display: inline-block;
  margin-top: 20px;
}
.timerDiv{
  justify-content: space-between;
  display: flex;
  height: 15vh;
  background: linear-gradient(gray, rgb(199, 199, 199), rgb(230, 230, 230), white);
  border-radius: 25px 25px 0px 0px;
}
  .question{
    margin-top: 1vh;
    height: 130px;
    border-radius: 15px;
    border: 1px solid rgb(165, 162, 162);
  }
  .answer{
    margin-top: .5vh;
    height: 50px;
    border-radius: 15px;
    border: 1px solid rgb(165, 162, 162);
    line-height: 50px;
    padding: auto;
  }
  .back{
    margin-top: .5vh;
    height: 50px;
    border-radius: 15px;
    border: 1px solid rgb(165, 162, 162);
    line-height: 50px;
    padding: auto;
  }
  .back2{
    position: relative;
    top: -2vh;
    height: 50px;
    border-radius: 15px;
    background: yellow;
    z-index: 1;
    border: 1px solid black;
    line-height: 50px;
    padding: auto;
  }
</style>