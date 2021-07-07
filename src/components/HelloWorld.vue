<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="abonnes == 0">aucun abonnés pour le moment ^^'</p>
    <p v-else-if="abonnes == 1">une personne s'est abonnée</p>
    <p v-else>{{abonnes}} personnes se sont abonnées</p>
    <button class="button" v-on:click="subscribe()">S'abonner !</button>
    <h2>Espace Commentaires</h2>
    <div class="comment" v-for="(comment, index) in comments" v-bind:key="index">
      <h3>{{comment.nom}}</h3>
      <p> {{comment.commentaire}}</p>
      <div class="iconstore" v-if="comment.note > 1">
        <p class="icon" v-for="i in comment.note" v-bind:key="i">🍍</p>
      </div>
      <p class="icon" v-else>💩</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function () {
    return {
      abonnes: 0,
      comments: [{
        nom: 'Jean Michel',
        commentaire: "trop bien !",
        note: 2,
      },{ // plusieurs commentaire stocké dans un array
        nom: 'Marceline',
        commentaire: "Pas ouf !",
        note: 5,
      },{
        nom: 'aigriMan',
        commentaire: "éclatax",
        note: 1,
      }],
    }
  },
  methods: {
    subscribe: function () {
      this.abonnes++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-size: 24px;
}
.icon {
  font-size: 18px;
}
.iconstore {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.button {
  background-color: red;
  border-radius: 6px;
  color: aliceblue;
  bottom: 1px;
}
.comment {
  margin: 0 auto;
  margin-top: 28px;
  width: 300px; 
  box-shadow: 8px 8px 8px aqua;
  border: 1px solid aquamarine;
}
</style>
