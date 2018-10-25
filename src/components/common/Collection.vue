<template>
  <div>
    <br>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="8">
          <b-media>
            <b-img rounded slot="aside" id="collection-topic-avatar" :src="topicDetais.topic.topicAvatar" alt="placeholder" />
            <div id="collection-followed-btn">
              <b-button>已关注</b-button>
            </div>
            <div id="collection-submission-btn">
              <b-button variant="outline-success">投稿</b-button>
            </div>
            <h4 class="mt-0">{{topicDetais.topic.topicTitle}}</h4>
            <p>收录了<i>{{topicDetais.topic.topicArticlesCount}}</i>文章，<i>{{topicDetais.topic.topicFollowCount}}</i>人关注</p>
          </b-media>
          <br>
          <div>
            <b-nav tabs>
              <b-nav-item active>最新评论</b-nav-item>
              <b-nav-item>最新收录</b-nav-item>
              <b-nav-item>热门</b-nav-item>
            </b-nav>
          </div>
          <div>
            <div v-for="article in topicDetais.articleListVOList" :key="article.articleId">
              <hr>
              <b-media right-align vertical-align="center">
                <b-img slot="aside" fluid id="collection-articleAvatar"  :src="article.articleThumbnail" alt="placeholder" />
                <router-link to="xx">
                  <h5 class="mt-0 mb-1" id="collection-articleTitle">{{article.articleTitle}}</h5>
                </router-link>
                <p>{{article.articleSummary}}</p>
                <b-media>
                  <div>
                    <router-link to="xx">
                      <h6 class="mt-sm-1" id="collection-article-userNickname">{{article.authorNickname}}</h6>
                    </router-link>
                    <p id="articleList-like"><i>{{article.articleLikeCount}}</i></p>
                    <p id="articleList-message"><i>{{article.articleCommentCount}}</i></p>
                  </div>
                </b-media>
              </b-media>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="clearfix">
            <span>专题公告</span>
            <p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。
              Hi，很高兴在@IT·互联网专题遇见你。
              收录范围：收录IT&互联网行业观察与思考，数码产品极客体验分析等类型文章
              投稿须知：https://www.jianshu.com/p/4edc76104c27
              专题主编：@若锦 https://www.jianshu.com/u/e4c63b354a77
              官...</p>
          </div>
          <hr>
          <div>
            <span>关注的人</span>
            <div>
              <div id="collection-fanslist-list" v-for="fans in topicDetais.authorListVOList" :key="fans.authorId">
                <router-link to="xx" >
                  <b-img id="collection-fanslist-img" rounded="circle"
                         :src="fans.authorAvatar"
                         alt="img" class="m-1" />
                </router-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Collection",
    data(){
      return {
        topicId:this.$route.params.topicId,
        topic:{},
        articleList:[
          {
            id:1,
            userNickname:'独角的犀牛',
            articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
            articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
            articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg',
            articleLike:124,
            articleMessage:235
          },
          {
            id:2,
            userNickname:'独角的犀牛',
            articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
            articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
            articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg',
            articleLike:124,
            articleMessage:235
          },
          {
            id:3,
            userNickname:'独角的犀牛',
            articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
            articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
            articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg',
            articleLike:124,
            articleMessage:235
          },
          {
            id:4,
            userNickname:'独角的犀牛',
            articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
            articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
            articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg',
            articleLike:124,
            articleMessage:235
          },
          {
            id:1,
            userNickname:'独角的犀牛',
            articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
            articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
            articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg',
            articleLike:124,
            articleMessage:235
          },
          {
            id:5,
            userNickname:'独角的犀牛',
            articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
            articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
            articleImgUrl:'https://upload.jianshu.io/admin_banners/web_images/4500/e20f8255334b480222e199011779eb8d0cdabd0e.png',
            articleLike:124,
            articleMessage:235
          }
        ],
        fansList:[
          {
            authorId:1,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/14505844/81e05ee0-520c-4946-92e7-529941eda5d8.jpg'
          },
          {
            authorId:2,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/14505844/81e05ee0-520c-4946-92e7-529941eda5d8.jpg'
          },
          {
            authorId:3,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/14505844/81e05ee0-520c-4946-92e7-529941eda5d8.jpg'
          },
          {
            authorId:4,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/14505844/81e05ee0-520c-4946-92e7-529941eda5d8.jpg'
          },
          {
            authorId:5,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/14505844/81e05ee0-520c-4946-92e7-529941eda5d8.jpg'
          },
          {
            authorId:6,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/14505844/81e05ee0-520c-4946-92e7-529941eda5d8.jpg'
          },
        ],
        topicDetais:{}
      }
    },
    activated(){
      var that = this;
      this.topicId = this.$route.params.topicId;
      this.$http
        .post('http://localhost:8080/topic/oneTopicDetails',{"topicId":this.topicId})
        .then(function (response) {
          that.topicDetais = response.data.data
          console.log(that.topicDetais)
        })
    }
  }
</script>

<style scoped>
  #collection-topic-avatar{
    width: 65px;
    height: 65px;
  }
  #collection-followed-btn{
    float: right;
    margin-top: 12px;
  }
  #collection-submission-btn{
    float: right;
    margin-top: 12px;
    margin-right: 30px
  }
  #articleList-like{
    float: left;
    padding-left: 20px;
    margin: 0 10px;
    background: left center url('../../../static/img/like.png') no-repeat
  }
  #articleList-message{
    float: left;
    padding-left: 20px;
    margin: 0 10px;
    background: left center url('../../../static/img/message.png') no-repeat
  }
  #collection-fanslist-img {
    width: 32px;
    height: 32px;
  }
  #collection-fanslist-list{
    float: left;
  }
  #collection-articleAvatar{
    width: 300px;
    height: 150px;
  }
  #collection-articleTitle{
    color: black;
    text-decoration: none;
  }
  #collection-article-userNickname{
    color: black;
    text-decoration: none;
    float: left;
  }
</style>
