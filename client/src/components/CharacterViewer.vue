<template>
  <div class="character-viewer">
    <h1>Character Viewer</h1>
    <p
        v-for="(character, index) in characters"
        v-bind:key="index">
      {{ character.name }} is a {{ character.profession}}
    </p>
  </div>
</template>

<script>
export default {
  name: "CharacterViewer",
   props: {
    characters: Array
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
