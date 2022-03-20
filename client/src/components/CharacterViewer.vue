<template>
  <div class="character-viewer">
    <h1>Character Viewer</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CharacterViewer",
  data: function () {
    return {
      characters: null
    }
},
  methods: {
    getCharacters: () => {
      axios
      .get('http://localhost:3000/characters')
      .then(response => (this.characters = response.data))
    }
  },
  mounted: () => {
    this.getCharacters();
  }
};
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
</style>
