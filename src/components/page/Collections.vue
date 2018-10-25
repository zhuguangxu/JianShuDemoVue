<template>
  <div>
    <br>
    <div>
      <b-img rounded src="//cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png" fluid alt="Responsive image" />
    </div>
    <br>
    <div>
      <b-nav tabs>
        <b-nav-item active>推荐</b-nav-item>
        <b-nav-item>热门</b-nav-item>
        <b-nav-item>城市</b-nav-item>
        <b-nav-item>校园</b-nav-item>
      </b-nav>
    </div>
    <br>
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4" v-for="topicCard in allTopicList" :key="topicCard.topicId">
            <div class="topic-card-list">
              <div class="topic-card-topicAvatar">
                <router-link :to="'/c/'+ topicCard.topicId">
                  <b-img rounded width="75" height="75" :src="topicCard.topicAvatar" alt="img" class="m-1" />
                </router-link>
              </div>
              <div class="topic-card-contain">
                <router-link :to="'/c/'+ topicCard.topicId">
                  <h3 class="topic-card-h3">{{topicCard.topicTitle}}</h3>
                </router-link>
                <br>
                <p class="topic-card-p">
                  {{topicCard.topicSummary}}
                </p>
                <div>
                  <b-button>关注</b-button>
                </div>
                <hr>
                <p><i>{{topicCard.topicArticlesCount}}</i>篇文章<i>{{topicCard.topicFollowCount}}</i>人关注</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Collections",
    data(){
      return {
        allTopicList:[]
      }
    },
    activated(){
      var that = this;
      this.$http
        .get('http://localhost:8080/topic/allTopics')
        .then(function (response) {
          that.allTopicList = response.data.data
        })
    }
  }
</script>

<style scoped>
  .topic-card-list{
    padding-top: 25%;
    margin-bottom: 10%;
    position: relative;
  }
  .topic-card-topicAvatar {
    text-align: center;
    position: absolute;
    top: 13%;
    left: 37%;
  }
  .topic-card-contain {
    height: 75%;
    padding-top: 15%;
    margin: 0 5% 5% 5%;
    background-color: #f7f7f7;
    text-align: center;
  }

  .topic-card-h3 {
    color: black;
    text-decoration-line: none;
  }
  .topic-card-p{
    font-size: 14px;
  }
</style>
