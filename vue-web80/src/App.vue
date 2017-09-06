<template>
  <div id="app">
  	<header>
			<nav class="font-head navbar-default navbar-fixed-top" role="navigation">
				<div class="container-fluid">
					<div class="col-lg-10 col-lg-offset-1">
						<div class="col-lg-3 font-logo">
							<img src="./assets/images/logo.png" />
						</div>
						<div class="col-lg-9 font-nav">
							<ul id="nav" class="nav nav-pills nav-justified" role="tablist">
								<li v-bind:class="{active: now==0}" v-on:click="now=0"><router-link to="/">首页</router-link></li>
								<li v-bind:class="{active: now==1}" v-on:click="now=1"><router-link to="/knowledge">前端知识</router-link></li>
								<li v-bind:class="{active: now==2}" v-on:click="now=2"><router-link to="/cases">前端案例</router-link></li>
								<li v-bind:class="{active: now==3}" v-on:click="now=3"><router-link to="/about">关于我</router-link></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<article class="main">
    	<router-view></router-view>
    </article>
    <footer class="font-footer">
			<address class="container-fluid">
				<div class="col-lg-10 col-lg-offset-1">
					<div class="font-addresss ">
						<p class="text-center">(c) Copyright 2016 asus. All Rights Reserved. contact Email:<span>lixuelin1@ultrapower.com.cn</span></p>
					</div>
				</div>
			</address>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      now: 0
    }
  }
}
</script>

<style>

</style>
