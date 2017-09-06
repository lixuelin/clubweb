<template>
  <div id="app">
    <li  class="font-books-list" v-for="item in bookData" v-show="item.push">
      <div class="thumbnail font-book">
        <a v-bind:href="item.link" title=""><img src="../assets/images/boodsImg/javascript_spring.png" alt=""></a>
        <div class="font-book-cont" >
          <a href="" title=""><h4>{{item.title}}</h4></a>
          <p>{{item.detail}}</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['bookData']
  }
</script>

<style>
</style>
