<template>
  <div id="app">
    <div class="container-fluid">
      <div class="col-lg-10 col-lg-offset-1">
          <div class="notes-list">
            <class-list v-bind:classData='caseClass'></class-list>
          </div>
        </div>
      <section class="container-fluid padd0">
        <div class="col-lg-10 col-lg-offset-1">
          <column v-bind:columnName="columnCase"></column>
        </div>
        <ul class="col-lg-10 col-lg-offset-1" data-ng-controller="case">
          <case-list v-bind:caseData="caseList" v-show="true"></case-list>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import classList from '../components/class'
  import column from '../components/column'
  import Case from '../components/case'
  export default {
    name: 'app',
    data () {
      return {
        columnCase: '前端案例',
        caseClass: {
          className: '案例分类',
          classList: ['html5/css3', 'react', 'angular', 'less', 'node', 'other']
        },
        caseList: []
      }
    },
    components: {
      'class-list': classList,
      'column': column,
      'case-list': Case
    },
    mounted () {
      this.getCases()
    },
    methods: {
      getCases: function () {
        this.$http.get('../static/json/cases.json').then(function (res) {
          this.caseList = res.body.cases
        }, function (res) {
          console.log(res.status)
        })
      }
    }
  }
</script>

<style>
</style>
