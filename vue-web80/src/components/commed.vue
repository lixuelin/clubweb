<template>
<div>
  <li v-for="item in datalist" v-show="item.push==true"><a href="" title="">{{item.title}}</a></li>
</div>
</template>

<script>
export default {
  props: ['datalist']
}
</script>

<style>
</style>
