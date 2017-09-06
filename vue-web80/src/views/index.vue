<template>
  <div id="app">
  	<div class="container-fluid">
  		<div class="col-lg-10 col-lg-offset-1">
  			<ul class="banner-list">
  				<li>
  					<a href="" title=""><img src="../assets/images/b1.jpg" alt=""/></a>
  				</li>
  			</ul>
  		</div>
  	</div>
  	<section class="container-fluid">
      <div class="col-lg-10 col-lg-offset-1">
        <column v-bind:columnName="columnKnowledge"></column>
        <div class="container-fluid padd0">
          <ul class="col-lg-9" >
            <knowledge-list v-bind:knowledgeData="knowledgeList"></knowledge-list>
          </ul>
          <div class="col-lg-3">
            <div class="font-knowledge">
              <div class="panel panel-default font-knowledge-panel">
                <div class="panel-heading  font-knowledge-panel-head">
                    <h4 class="panel-title">推荐笔记</h4>
                </div>
                <div class="panel-body font-knowledge-panel-body">
                  <ul class="knowledge-class">
                    <commed v-bind:datalist="knowledgeList"></commed>
                  </ul>
                </div>
              </div>
            </div>
            <div class="font-knowledge">
              <div class="panel panel-default font-knowledge-panel">
                <div class="panel-heading  font-knowledge-panel-head">
                    <h4 class="panel-title">书籍推荐</h4>
                </div>
                <div class="panel-body font-knowledge-panel-body">
                  <ul class="knowledge-class">
                    <commed v-bind:datalist="bookList"></commed>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="col-lg-10 col-lg-offset-1">
        <column v-bind:columnName="columnCases"></column>
      </div>
      <ul class="col-lg-10 col-lg-offset-1">
        <case-list v-bind:caseData="caseList"></case-list>
      </ul>
    </section>
    <section class="container-fluid">
      <div class="col-lg-10 col-lg-offset-1">
        <column v-bind:columnName="columnBooks"></column>
      </div>
      <ul class="col-lg-10 col-lg-offset-1">
        <book-list v-bind:bookData="bookList"></book-list>
      </ul>
    </section>
  </div>
</template>

<script>
import Column from '../components/column'
import Commed from '../components/commed'
import Knowledge from '../components/knowledge'
import Case from '../components/case'
import Book from '../components/book'

export default {
  name: 'app',
  data () {
    return {
      columnKnowledge: '前端知识',
      columnCases: '前端案例',
      columnBooks: '前端书籍',
      knowledgeList: [],
      bookList: [],
      caseList: []
    }
  },
  components: {
    'column': Column,
    'commed': Commed,
    'knowledge-list': Knowledge,
    'case-list': Case,
    'book-list': Book
  },
  mounted () {
    this.getKnowledge()
    this.getBooks()
    this.getCases()
  },
  methods: {
    getKnowledge: function () {
      this.$http.get('../static/json/knowledge.json').then(function (res) {
        this.knowledgeList = res.body.knowledges
      }, function (res) {
        console.log(res.status)
      })
    },
    getBooks: function () {
      this.$http.get('../static/json/books.json').then(function (res) {
        this.bookList = res.body.books
      }, function (res) {
        console.log(res.status)
      })
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
