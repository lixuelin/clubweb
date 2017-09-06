<template>
  <div id="app">
    <ul class="notes-class">
      <li>{{classData.className}}：</li>
      <li v-for="item in classData.classList"><a href="">{{item}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['classData']
  }
</script>

<style>
</style>
