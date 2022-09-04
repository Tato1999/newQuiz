<template>
<Header/>
  
</template>

<script>

import Header from '../component/heade.vue'
import{ref} from "vue"

import firebase from 'firebase'
import {useRouter} from 'vue-router'


export default {
    components: {
        Header
    },
computed:{
  db(){
      return firebase.firestore()
    }
 },
 methods:{
 pushFunction(){
        this.docDataBoth.push(this.pointTop,this.idTop)
        this.docDataTop.push(this.docDataBoth)
        this.docDataBoth = []
        
    },
 sortDaraTop(){
    for(var i = 0; i<this.docDataTop.length; i++){
      this.test.push(this.docDataTop[i][0])
      this.test.sort(function(a, b){return b-a})
    

      if(i == this.docDataTop.length-1){
        for(let j = 0; j<this.docDataTop.length; j++){
            for(let c = 0; c<this.docDataTop.length; c++){
                if(this.test[j] === this.docDataTop[c][0]){
                    this.test2.push(this.test[j],this.docDataTop[c][1])
                       
                        this.test3 = true
                        
                }
                
                //console.log(this.test[j])
                if(c == this.docDataTop.length-1){
                    console.log(this.test2)
                    //console.log(this.test)
                  
                }
            }
            }
            
        }
    }
 }
 },
 data(){
    return {
      docLenght: null,
      pointTop: '',
      idTop: '',
      docDataBoth:[],
      docDataTop: [],
      test:[],
      test2:[],
      test3: false,
      t: 0
    }
  },
  mounted(){

    
    this.db.collection('user').get()
    .then((data) => {
      this.docLenght = data._delegate._snapshot.docChanges.length
      console.log(this.docLenght)
      for(let j = 0; j < this.docLenght; j++){
         this.idTop = data._delegate._snapshot.docChanges[j].doc.data.partialValue.mapValue.fields.id.stringValue
         this.pointTop = data._delegate._snapshot.docChanges[j].doc.data.partialValue.mapValue.fields.point.integerValue*1
         
          this.pushFunction()
          
         
      }
       this.sortDaraTop()
       
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>