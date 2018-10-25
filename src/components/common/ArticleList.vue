<template>
  <div>
    <div v-for="article in hotArticleList" :key="article.articleId">
      <hr>
      <b-media right-align vertical-align="center">
        <b-img class="articleList-articleAvatar" slot="aside" fluid  :src="article.articleThumbnail" alt="placeholder" />
        <router-link :to="'/a/'+ article.articleId">
          <h5 class="mt-0 mb-1 articleList-articleTitle" >{{article.articleTitle}}</h5>
        </router-link>
        <p>{{article.articleSummary}}</p>
        <b-media>
          <div>
            <router-link :to="'/other_user/'+ article.authorId">
              <h6 class="mt-sm-1 articleList-articleUserNickname" >{{article.authorNickname}}</h6>
            </router-link>
            <p class="articleList-like"><i>{{article.articleLikeCount}}</i></p>
            <p class="articleList-message"><i>{{article.articleCommentCount}}</i></p>
          </div>
        </b-media>
      </b-media>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleList",
    data(){
      return {
        hotArticleList:[]
      }
    },
    created(){
      var that = this;
      this.$http
        .get('http://localhost:8080/article/hotArticles')
        .then(function (response) {
          that.hotArticleList = response.data.data
        })
    }
  }
</script>

<style scoped>
  .articleList-like{
    float: left;
    padding-left: 20px;
    margin: 0 10px;
    background: left center url('../../../static/img/like.png') no-repeat
  }
  .articleList-message{
    float: left;
    padding-left: 20px;
    margin: 0 10px;
    background: left center url('../../../static/img/message.png') no-repeat
  }
  .articleList-articleAvatar{
    width: 300px;
    height: 150px;
  }

  .articleList-articleTitle{
    color: black;
    text-decoration: none;
  }
  .articleList-articleUserNickname{
    color: black;
    text-decoration: none;
    float: left
  }
</style>
