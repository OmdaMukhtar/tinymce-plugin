<template>
  <div id="app">
    <editor-app  />
  </div>
</template>

<script>
import editorApp from './components/editor/tinymce'

export default {
  name: 'app',
  components: {
    editorApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
