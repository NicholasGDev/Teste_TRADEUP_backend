<template>
  <div class="navbar-fixed">
    <div class="navbar-content">
      <a href="http://127.0.0.1:8000/" target="_self" rel="noopener noreferrer">
        <img src="/public/images/tradeup.png" alt="Logo" style="width: 12.5em;">
      </a>
      <a href="https://www.tradeupgroup.com/" target="_blank" rel="noopener noreferrer">
        Site institucional
      </a>
    </div>
  </div>
</template>

<style scoped>
.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em 2em;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo com transparência */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Garante que o navbar fique acima de outros elementos */
  transition: background-color 0.3s ease; /* Transição suave */
}

.navbar-content {
  display: flex; /* Ativa o Flexbox */
  align-items: center; /* Centraliza os itens verticalmente */
  justify-content: space-between; /* Distribui os itens ao longo da linha */
  width: 100%;
}

.navbar-fixed:hover {
  background-color: rgba(255, 255, 255, 1); /* Fundo sólido ao passar o mouse */
}

body {
  margin: 0;
  padding-top: 6em; /* Adiciona espaço no topo para evitar sobreposição do conteúdo */
}

a {
  text-decoration: none; /* Remove o sublinhado dos links */
  color: #000; /* Define cor do texto */
  font-size: 1em; /* Tamanho da fonte */
}

img {
  margin-right: 2em; /* Espaço entre o logo e os links */
}
</style>