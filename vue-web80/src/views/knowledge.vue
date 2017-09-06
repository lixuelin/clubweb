<template>
  <div id="app">
    <div class="container-fluid">
      <div class="col-lg-10 col-lg-offset-1">
          <div class="notes-list">
            <class-list v-bind:classData='caseClass'></class-list>
            <class-list v-bind:classData='noteClass'></class-list>
            <class-list v-bind:classData='notesClass'></class-list>
          </div>
        </div>
      <section class="container-fluid padd0">
        <div class="col-lg-10 col-lg-offset-1">
          <column v-bind:columnName="columnCase"></column>
        </div>
        <ul class="col-lg-10 col-lg-offset-1" data-ng-controller="case">
          <knowledge-list v-bind:knowledgeData="knowledgeList"></knowledge-list>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import classList from '../components/class'
  import column from '../components/column'
  import Knowledge from '../components/knowledge'
  export default {
    name: 'app',
    data () {
      return {
        columnCase: '前端知识',
        caseClass: {
          className: '技术类别',
          classList: ['Javascript', 'Html/Css', 'Angular', 'vue', 'node', 'other']
        },
        noteClass: {
          className: '推荐知识',
          classList: ['IE6下如何解决hack技术', 'JavaScript的作用域原理', 'JavaScript的原型链', 'Node的http三次握手']
        },
        notesClass: {
          className: '推荐书籍',
          classList: ['Javascript高级程序设计', 'Html5/Css3权威指南', 'Angular2.0权威指南', 'Node']
        },
        knowledgeList: []
      }
    },
    components: {
      'class-list': classList,
      'column': column,
      'knowledge-list': Knowledge
    },
    mounted () {
      this.getKnowledge()
    },
    methods: {
      getKnowledge: function () {
        this.$http.get('../static/json/knowledge.json').then(function (res) {
          this.knowledgeList = res.body.knowledges
          console.log(res.body)
        }, function (res) {
          console.log(res.status)
        })
      }
    }
  }
</script>

<style>
</style>
