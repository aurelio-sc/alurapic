<template>
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do filto"> <!-- "v-on:input" no envento input executa o código: pega o valor (value) de quem disparou o evento (target, que é o input) -->
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.id">
       
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo"> <!-- Inserida dentro da tag slot, presente em Painel.vue -->
        </meu-painel>
        
      </li>
    </ul>

  </div>

</template>

<script>

import Painel from './components/shared/painel/Painel.vue'; //Importa o componente Painel.

export default {

  components: {
    'meu-painel' : Painel //para utilizar Painel, que foi importado acima, precisa cirar uma chave pra ele em components.
  },

  data () {
    return {
      titulo: 'Alurapic',
      fotos:[],
      filtro: ''

    }
  },

  computed:{ /* as computed properties são métodos que são acessados como propriedades na vue*/

    fotosComFiltro(){
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i'); /* Cria uma expressão regular com o que você digitou no filtro. O "i" é insensitive, para não importar se a busca é em maiúsculo ou minúsculo */
        return this.fotos.filter(foto => exp.test(foto.titulo)); /* .filter é uma função do JS que filtra a lista. foto é o nome dado ao item iterado. exp.test vai testar se foto.titulo tem o que foi digitado */
      } else {
        return this.fotos;
      }
    }

  },

  created() { //essa função é executada assim que a página carrega. É o início do ciclo de vida do componente.
    let promise = this.$http.get('http://localhost:3000/v1/fotos'); //Só é possível utilizar $http porque o módulo VueResource foi importado.
    
    promise
    .then(res => res.json()) //pega oresultado da chamada promise e lê como json...
    .then(fotos => this.fotos=fotos, err => console.log(err)); //...pega os arquivos do json (chamamos de fotos) e coloca em this.fotos, que é o array definido dentro da função data.
  }                                                            //Esse err, é a função que vai ser chamada se der erro ao imortar.
}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .imagem-responsiva{
    width: 100%;
  }

  .filtro{
    display: block;
    width: 100%;
  }

</style>

