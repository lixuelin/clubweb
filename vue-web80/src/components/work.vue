<template>
  <div id="app">
    <li class="col-lg-6" v-for="(item,index) in workData" v-bind:class="index%2==0?'col-lg-offset-6 font-works-list-left':'font-works-list-right'">
      <div class="font-works">
        <time class="font-works-time">{{item.time}}</time>
        <h4 class="font-works-name">{{item.company}}</h4>
        <p class="font-works-cont">{{item.work}}</p>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['workData']
  }
</script>

<style>
</style>
