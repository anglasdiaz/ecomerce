import { createStore } from 'vuex'
import firebase from 'firebase';
import {db} from '../main'
import { customRef } from '@vue/reactivity';

export default createStore({
  state: {
    listItems:[],
    postulante:{},
    shopCart:[],
    total:'',
    facturaTotal:'',
  },
  mutations: {
    getDataFirebase(state,newData){
      state.listItems = newData;
    },
    setDataPostulante(state,dataPostulante){
      state.postulante = dataPostulante;
    },
    // setDataShopCart(state,dataShopCart){
    //   state.shopCart.push(dataShopCart);
    // },
    addItemCart(state,item){
      state.shopCart.push(item)
    },
    removeItemCart(state,index){
      state.shopCart.splice(index,1)
    },
    cleanCart(state){
      state.shopCart = []
    },
    setFacturaTotal(state,total){
      state.facturaTotal=total
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
     },
      setDataPostulanteAction({commit},dataPostulante){
        dataPostulante={
          name:dataPostulante.name,
          email:dataPostulante.email,
          telefono:dataPostulante.telefono,
          program:dataPostulante.programa,
        }
        commit('setDataPostulante',dataPostulante);
      },
      setDataShopCartAction({commit},dataShopCart){
        dataShopCart={
          courseName:dataShopCart.name,
          price:dataShopCart.price,
        }
        commit('setDataShopCart',dataShopCart);
      },
      addItemCartAction({commit}, item){
        commit("addItemCart",item)
      },
      removeItemCartAction({commit},index){
        commit("removeItemCart", index)
      },
      cleanCartAction({commit}){
        commit('cleanCart')
      },
      setFacturaTotalAction({commit},total){
        commit('setFacturaTotal',total)
      }
      
  },
  getters:{
    totalPrice(state){
      return state.total= state.shopCart.reduce(function (prev,cur){
        return prev + cur.price;
      },0);
    }
  },
  modules: {
  },
})
