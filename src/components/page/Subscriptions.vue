<template>
  <b-conatiner class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="4">
        <div class="clearfix">
          <router-link to="xx">
            <span id="to-subscription-all" style="padding-right:20px;background: right center url('../../../static/img/flush.png') no-repeat;color: black">全部关注</span>
          </router-link>
          <router-link to="xx">
            <span id="subscription-another-batch" style="float: right;padding-left:20px;background: left center url('../../../static/img/flush.png') no-repeat;color: black">换一批</span>
          </router-link>
        </div>
        <div>
          <div v-for="topic in topicList" :key="topic.topicId">
            <br/>
            <b-media>
              <b-img slot="aside" rounded id="subscription-topicAvatar"  :src="topic.topicAvatar" alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">{{topic.topicSubscriptionCount}}</span>
              <router-link to="">
                <h6 class="mt-sm-3" id="subscription-h6">{{topic.topicTitle}}</h6>
              </router-link>
            </b-media>
          </div>
        </div>
      </b-col>
      <b-col cols="8">
        <br>
        <v-article-list></v-article-list>
      </b-col>
    </b-row>
  </b-conatiner>
</template>

<script>
  import vArticleList from '../common/ArticleList'
  export default {
    name: "Subscriptions",
    data(){
      return {
        topicList:[
          {
            topicId:1,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
          {
            topicId:2,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
          {
            topicId:3,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
          {
            topicId:4,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
          {
            topicId:5,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
          {
            topicId:6,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
          {
            topicId:7,
            topicTitle:'Nested Media',
            topicSubscriptionCount:111,
            topicAvatar:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png'
          },
        ]
      }
    },
    components:{
      vArticleList
    }
  }
</script>

<style scoped>
  #subscription-topicAvatar{
    width: 45px;
    height: 45px;
  }
  #subscription-h6{
    color: black;
    text-decoration: none;
  }
</style>
