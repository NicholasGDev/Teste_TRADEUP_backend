
<template>
    <navBar-app></navBar-app>

    <div style="
        margin-top: 7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;"
    >

        <div style="padding-left: 2em; padding-top: 1em; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <h1 style="color:#737373">Teste de consumo de API via CEP</h1>
            <p style="color:#8c8c8c">
                Sistema de pesquisa de CEPs, experimente já clicando no botão abaixo e experimente.
            </p>
            
            <a style="text-decoration: none;" href="http://127.0.0.1:8000/search" target="_self" rel="noopener noreferrer">
                <div class="button-with-arrow" style="display: flex;">
                    <span style="text-decoration: none;">Avançar</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Teste',
    data() {
        return {
            mensagem: 'Bem-vindo ao Vue no Laravel!',
            contador: 0,
        };
    },
    methods: {
        exibirAlerta() {
            alert('Você clicou no botão!');
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

    .button-with-arrow .arrow {
        width: 8px;
        height: 8px;
        border-left: 2px solid white; /* Borda para a seta apontar à esquerda */
        border-top: 2px solid white; /* Borda para completar a seta */
        transform: rotate(-45deg); /* Rotação para a esquerda */
        margin-right: 8px; /* Espaço entre a seta e o texto */
        transition: margin-right 0.3s ease;
    }

    .button-with-arrow:hover .arrow {
        margin-right: 12px; /* Efeito ao passar o mouse */
    }

    /* Estilo do link no botão */
    .button-with-arrow a {
        text-decoration: none; /* Remove sublinhado */
        color: white; /* Garante o texto branco */
    }

    .button-with-arrow a:visited {
        text-decoration: none;
        color: white;
    }

    .button-with-arrow a:hover {
        text-decoration: none;
        color: white;
    }
</style>