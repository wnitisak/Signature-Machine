import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.sessionStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})


export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    imageDetial: {
      "Name" : 'file Selected',
      "UrlJPEG" : null,
      "UrlSVG" : null,
      "uploadStatus" : '',
      "timeStamp" : '',
      "uploadFolder" : ''
    }
  },
  getters: {
    getImageName: state => {
      return state.imageDetial.Name
    },
    getImageUrlJPEG: state => {
      return state.imageDetial.UrlJPEG
    },
    getImageUrlSVG: state => {
      return state.imageDetial.UrlSVG
    },
    getImageUploadStatus: state => {
      return state.imageDetial.uploadStatus
    },
    getImageTimeStamp: state => {
      return state.imageDetial.timeStamp
    },
    getImageUploadFolder: state => {
      return state.imageDetial.uploadFolder
    }
    
  },
  mutations: {
    putImageName (state, payload) {
      state.imageDetial.Name = payload
    },
    putImageUrlJPEG (state, payload) {
      state.imageDetial.UrlJPEG = payload
    },
    putImageUrlSVG (state, payload) {
      state.imageDetial.UrlSVG = payload
    },
    putImageUploadStatus (state, payload) {
      state.imageDetial.uploadStatus = payload
    },
    putImageTimeStamp (state, payload) {
      state.imageDetial.timeStamp = payload
    },
    putImageUploadFolder (state, payload) {
      state.imageDetial.uploadFolder = payload
    }
  },
  actions: {
    putImageName (context, payload) {
      context.commit('putImageName', payload)
    },
    putImageUrlJPEG (context, payload) {
      context.commit('putImageUrlJPEG', payload)
    },
    putImageUrlSVG (context, payload) {
      context.commit('putImageUrlSVG', payload)
    },
    putImageUploadStatus (context, payload) {
      context.commit('putImageUploadStatus', payload)
    },
    putImageTimeStamp (context, payload) {
      context.commit('putImageTimeStamp', payload)
    },
    putImageUploadFolder (context, payload) {
      context.commit('putImageUploadFolder', payload)
    }
  },
  modules: {
  }
})
