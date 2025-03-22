import './bootstrap';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import Teste from './components/Teste.vue';
import Search from './components/ResearchCep.vue';
import NavBar from './components/NavBar.vue';
import TableComponent from './components/TableComponent.vue';
import router from './router';



// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

const app = createApp(App);
app.component('teste-app', Teste);
app.component('search-app', Search);
app.component('navBar-app', NavBar);
app.component('tableComponent-app', TableComponent);
app.use(store);
app.use(router);
app.mount('#app');