<template>
  <div id="app">
    <li class="col-lg-3" v-for="item in caseData" v-show="item.push">
      <div class="thumbnail font-case">
          <a v-bind:href="item.link" target="_blank">
            <img v-bind:src="imgSrc+item.imgUrl" alt="">
            <div class="font-case-cont">
              <h4>{{item.title}}</h4>
              <p>{{item.cont}}</p>
            </div>
          </a>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        imgSrc: 'http://www.clubweb80.com/img/casesImg/'
      }
    },
    props: ['caseData']
  }
</script>

<style>
</style>
