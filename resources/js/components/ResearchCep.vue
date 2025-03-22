<template>
  <navBar-app></navBar-app>
  <div 
    style="display: flex;
    margin-top: 7rem; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
  >
    <h1 style="color:#737373;">Pesquise o CEP</h1>

    <!-- Input arredondado -->
    <div style="padding-top: 1rem; width: 100%; max-width: 500px;">
      <input 
        v-model="cep" 
        type="text" 
        name="searchCep" 
        id="searchCep" 
        placeholder="Digite o CEP..." 
        maxlength="8" 
        style="width: 120%; 
        padding: 10px; 
        border-radius: 25px; 
        border: 1px solid #737373; 
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
        font-size: 16px;" 
      />

      <!-- Botão arredondado azul claro -->
      <button 
          style="margin-top: 1rem;"
          @click="searchCep" 
          class="button-with-arrow" 
      >
        Buscar
      </button>
    </div>

    <!-- Espaço reservado para Tabela -->
    <div style="margin-top: 3vh; text-align: center; width: 80%; height: auto; min-height: 300px; overflow-y: auto;">
      <div v-if="result">
        <TableComponent :tableData="result" />
      </div>
    </div>

    <!-- Mensagem de erro -->
    <div v-if="error" style="margin-top: 20px; text-align: center; color: red;">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TableComponent from './TableComponent.vue';

export default {
  name: 'ResearchCep',
  components: {
    TableComponent
  },
  data() {
    return {
      cep: '', // Armazena o valor do input
      result: null, // Resultado da API
      error: null, // Mensagens de erro
    };
  },
  methods: {
    async searchCep() {
      this.error = null; // Limpa erros anteriores
      this.result = null; // Limpa resultados anteriores

      // Validação do CEP
      if (!/^[0-9]{8}$/.test(this.cep)) {
        this.error = 'Por favor, insira um CEP válido com 8 dígitos.';
        return;
      }

      try {
        // Chamada à API Laravel
        const response = await axios.get(`/api/cep/${this.cep}`);
        this.result = response.data; // Armazena os dados retornados
      } catch (err) {
        if (err.response && err.response.status === 404) {
          this.error = 'CEP não encontrado.';
        } else {
          this.error = 'Ocorreu um erro ao buscar o CEP.';
        }
      }
    },
  },
};
</script>
<style>
    .button-with-arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #174394; /* Cor do botão */
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 25px; /* Bordas arredondadas */
        font-size: 16px;
        font-family: Arial, sans-serif;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
        width: 40%;
        text-align: center;
    }

    .button-with-arrow:hover {
        background-color: #1c50b0; /* Cor do botão ao passar o mouse */
    }
</style>