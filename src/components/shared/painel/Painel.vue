<!-- alurapic/src/components/shared/painel/Painel.vue -->

<template>

  <div class="painel">

    <h2 class="painel-titulo" @dblclick = "visivel = !visivel">{{ titulo }}</h2> <!-- @ é o mesmo que v-on, só que mais elegante -->
    <transition name="painel-fade"> <!-- transition só pode ter 1 elemento filho. Ele adiciona classes no elemento. As classes levam em cosideração o "name". São elas (geradas automaticamente pelo Vue.js): "name"-enter, "name"-enter-active e "name"-leave-active -->
    <div  class="painel-conteudo" v-show="visivel"> <!-- v-show dá display:none se for false e mostra o conteúdo se for true. V-SHOW NÃO PODE SER USADO DIRETAMENTE NO SLOT. COLOQUE UMA DIV EM TORNO DELE! -->
      <slot>
        <!--A tag slot aceita que, em App.vue, eu coloque conteúdo dentro do Painel-->
      </slot>
    </div>
    </transition>
  </div>

</template>

<script>

export default {
   props: ['titulo'],

   data() {
     
     return {

       visivel: true

     }

   }
}
</script>

<style scoped>  /*scoped coloca os estilos somente no componente, é uma boa prática usar*/
 .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }


  *{
    box-shadow: 5px 5px 5px black;
  }


  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity 0.4s;
  }

</style>