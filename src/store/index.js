import { createStore } from 'vuex'
import firebase from 'firebase';
import {db} from '../main'

export default createStore({
  state: {
    listItems:[],
    shopCart:[
    {
      src:'https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png',
      courseName:'Gestion de envases, envases y embalajes',
      price:250,
      discount:25
    },
    {
      src:'https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png',
      courseName:'Gestion de envases, envases y embalajes',
      price:250,
      discount:25
    },
    {
      src:'https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png',
      courseName:'Gestion de envases, envases y embalajes',
      price:250,
      discount:25
    }]
  },
  mutations: {
    getDataFirebase(state,newData){
      state.listItems = newData;
    }
  },
  actions: {
    async getDataFirebaseAction({commit}){
      const data = await db.collection('courses').get()
      let arrdata=[]
      data.forEach(result=>{
        arrdata.push(result.data())
      })
      commit('getDataFirebase', arrdata)
     }
      
    
  },
  modules: {
  }
})
