<template>
  <div class="recommend-collection">
    <a class="collection" target="_blank" v-for="topic in indexHotTopicList" :key="topic.topicId">
      <router-link :to="'/c/'+ topic.topicId">
        <img :src="topic.topicAvatar">
        <div class="name">{{topic.topicTitle}}</div>
      </router-link>
    </a>
    <router-link to="/more_topic">
      <p class="more">更多热门专题</p>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: "MoreTopic",
    data(){
      return {
        indexHotTopicList:[]
      }
    },
    created(){
      var that = this;
      this.$http
        .get('http://localhost:8080/topic/indexHotTopic')
        .then(function (response) {
          that.indexHotTopicList = response.data.data
        })
    }
  }
</script>

<style scoped>
  .recommend-collection{
    margin-top: 30px;
    margin-left: 10px;
  }
  .collection{
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .collection img{
    width: 32px;
    height: 32px;
  }
  a{
    cursor: pointer;
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
  .name{
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
  .more{
    margin-left: 42%;margin-top: -7%;color: grey
  }
</style>
