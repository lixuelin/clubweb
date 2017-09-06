<template>
  <div id="app">
    <div class="container-fluid">
      <div class="col-lg-10 col-lg-offset-1">
        <div class="font-my-pohots">
          <img src="../assets/images/me.jpg" />
        </div>
        <column v-bind:columnName="columnAbout"></column>
        <div class="container-fluid padd0">
          <div class="col-lg-12">
            <div class="col-lg-6 text-right">
              <ul>
                <li>
                  <h4>个人信息</h4>
                </li>
                <li>
                  <p>姓名：李学麟</p>
                </li>
                <li>
                  <p>出生：88年12月21日</p>
                </li>
                <li>
                  <p>职位：前端工程师</p>
                </li>
                <li>
                  <p>兴趣：看书、徒步、登山、跑步、电影</p>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li>
                  <h4>自我简介</h4>
                </li>
                <li>
                  <p>良好的沟通和理解能力，准确把握真实需求</p>
                  <p>Perfect ability of communicating & understanding the real demands</p>
                </li>
                <li>
                  <p>擅长新锐、创意、清新、大胆的视觉表达形式</p>
                  <p>Good at new fresh creative visual expressions</p>
                </li>
                <li>
                  <p>出色的整体规划能力、色彩和细节把控能力</p>
                  <p>Excellent ability of planning,coloring & detail controllings</p>
                </li>
                <li>
                  <p>洞悉用户心理和交互规范，有效规避无效设计</p>
                  <p>Avoid invalid design by understanding of user psychology and interaction specification</p>
                </li>
                <li>
                  <p>多平台产品设计经验(Web/IOS/Android/TV)</p>
                  <p>Cross-platform experience in product designning(Web/IOS/Android/TV included)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <column v-bind:columnName="columnWork"></column>
        <div class="container-fluid padd0">
          <div class="col-lg-12">
            <ul class="font-works-list">
              <work-list v-bind:workData="workList"></work-list>
            </ul>
          </div>
        </div>
        <column v-bind:columnName="columnSkill"></column>
        <ul class="container-fluid padd0">
          <skill-list v-bind:skillData="skillList"></skill-list>
        </ul>
        <column v-bind:columnName="columnCase"></column>
        <ul class="container-fluid padd0">
          <li class="col-lg-3">
            <div class="thumbnail font-case">
              <a href=""><img src="../assets/images/casesImg/c_01.jpg" alt="css">
                <div class="font-case-cont">
                  <h4>Thumbnail label</h4>
                  <p>...</p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-lg-3">
            <div class="thumbnail font-case">
              <a href=""><img src="../assets/images/casesImg/c_02.jpg" alt="css">
                <div class="font-case-cont">
                  <h4>Thumbnail label</h4>
                  <p>...</p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-lg-3">
            <div class="thumbnail font-case">
              <a href=""><img src="../assets/images/casesImg/c_03.jpg" alt="css">
                <div class="font-case-cont">
                  <h4>Thumbnail label</h4>
                  <p>...</p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-lg-3">
            <div class="thumbnail font-case">
              <a href=""><img src="../assets/images/casesImg/c_04.jpg" alt="css">
                <div class="font-case-cont">
                  <h4>Thumbnail label</h4>
                  <p>...</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import column from '../components/column'
  import work from '../components/work'
  import skill from '../components/skill'
  export default {
    name: 'app',
    data () {
      return {
        columnAbout: '关于我',
        columnWork: '工作经验',
        columnSkill: '工作技能',
        columnCase: '工作案例',
        workList: [],
        skillList: []
      }
    },
    components: {
      'column': column,
      'work-list': work,
      'skill-list': skill
    },
    mounted () {
      this.getKnowledge()
    },
    methods: {
      getKnowledge: function () {
        this.$http.get('../static/json/msg.json').then(function (res) {
          this.workList = res.body.works
          this.skillList = res.body.skill
          console.log(res.body)
        }, function (res) {
          console.log(res.status)
        })
      }
    }
  }
</script>

<style scoped="">
  @import '../assets/css/forMe.css' 
</style>
