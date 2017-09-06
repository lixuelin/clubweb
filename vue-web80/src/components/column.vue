<template>
  <div class="column" id="app">
	  <hr class="column-hr" />
	  <span class="column-name">{{columnName}}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['columnName']
}
</script>

<style>
</style>
