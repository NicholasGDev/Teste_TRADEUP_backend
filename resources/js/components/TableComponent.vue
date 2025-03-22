<template>
    <div class="container mt-4">
      <h3 class="text-center">Tabela de Resultados</h3>
      <table class="table table-striped table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th>Propriedade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in tableData" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
    export default {
        name: 'TableComponent',
        props: {
        tableData: {
            type: Object,
            required: true,
        },
        },
    };
</script>
  
<style scoped>
    .container {
        overflow: visible; /* Garante que o container não tenha limite de overflow */
    }

    .table {
        width: 100rem; /* Ajusta a largura da tabela para ocupar o espaço disponível */
        max-width: 100%; /* Evita que a tabela exceda os limites */
        height: auto; /* Altura automática */
        overflow: visible; /* Remove barras de rolagem */
    }

    td {
        word-wrap: break-word; /* Ajusta texto longo para quebrar dentro da célula */
    }
</style>