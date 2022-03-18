<template>
  <div id="app">
    <button v-on:click="toggle = 'character-viewer'">
      View all characters
    </button>
    <button v-on:click="toggle = 'character-creator'">
      Create a character
    </button>
    <CharacterViewer v-show="toggle === 'character-viewer'" />
    <CharacterCreator v-show="toggle === 'character-creator'" />
  </div>
</template>

<script>
import CharacterViewer from "./components/CharacterViewer.vue";
import CharacterCreator from "./components/CharacterCreator.vue";

export default {
  name: "App",
  components: {
    CharacterViewer,
    CharacterCreator,
  },
  data: function () {
    return {
      toggle: "character-viewer",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
