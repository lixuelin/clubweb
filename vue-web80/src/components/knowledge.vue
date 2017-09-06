<template>
<div id="app">
  <li class="font-box mt20" v-for="item in knowledgeData" v-show="item.push==true">
  	<div class="font-img  pull-left"><img v-bind:src="imgSrc+item.imgUrl" /></div>
  	<div class="font-cont">
  		<div class="font-cont-head mt10">
  			<a target="_blank"><h4 class="font-cont-head-title">{{item.title}}</h4></a>
  			<div class="font-cont-auther">
  				<span>作者：<span>{{item.author}}</span></span>
  				<time>日期：<span >{{item.time}}</span></time>
  			</div>
  		</div>
  		<div class="font-cont-bewrite">
  			<p>{{item.cont}}</p>
  		</div>
  		<div class="font-foot text-right">
  			<a class="btn btn-primary btn-xs" href="">阅读全文</a>
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
  props: ['knowledgeData']
}
</script>

<style>
</style>
