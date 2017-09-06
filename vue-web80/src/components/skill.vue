<template>
  <div id="app">
    <li class="col-lg-2" v-for="item in skillData">
      <div class="thumbnail font-case">
        <img v-bind:src="imgSrc+item.imgUrl" alt="css">
        <div class="caption">
          <h4>{{item.title}}</h4>
          <p>{{item.how}}</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        imgSrc: 'http://www.clubweb80.com/img/'
      }
    },
    props: ['skillData']
  }
</script>

<style>
</style>
