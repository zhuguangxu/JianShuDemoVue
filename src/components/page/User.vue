<template>
  <div>
    <br>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="8">
          <b-media>
            <b-img rounded="circle" slot="aside"  width="65" height="65" :src="authorDetails.author.authorAvatar" alt="placeholder" />
            <h5 class="mt-0">{{authorDetails.author.authorNickname}}</h5>
            <p>关注<i>{{authorDetails.author.authorFollowCount}}</i>，粉丝<i>{{authorDetails.author.authorFansCount}}</i>，文章<i>{{authorDetails.author.authorArticleCount}}</i>，字数<i>{{authorDetails.author.authorWordsCount}}</i>， 收获喜欢<i>{{authorDetails.author.authorFavoriteCount}}</i></p>
          </b-media>
          <br>
          <div>
            <b-nav tabs>
              <b-nav-item active>文章</b-nav-item>
              <b-nav-item>动态</b-nav-item>
              <b-nav-item>最新评论</b-nav-item>
              <b-nav-item>热门</b-nav-item>
            </b-nav>
          </div>
          <br>
          <div>
            <div v-for="article in authorDetails.authorDetailsArticleListVOList" :key="article.articleId">
              <hr>
              <b-media right-align vertical-align="center">
                <b-img class="articleList-articleAvatar" slot="aside" fluid  :src="article.articleThumbnail" alt="placeholder" />
                <router-link :to="'/a/'+ article.articleId">
                  <h5 class="mt-0 mb-1 articleList-articleTitle" >{{article.articleTitle}}</h5>
                </router-link>
                <p>{{article.articleSummary}}</p>
                <b-media>
                  <div>
                    <!--<router-link to="xx">-->
                    <!--<h6 class="mt-sm-1 articleList-articleUserNickname" >fdgsfdgsdf</h6>-->
                    <!--</router-link>-->
                    <p class="articleList-like"><i>{{article.articleCommentCount}}</i></p>
                    <p class="articleList-message"><i>{{article.articleLikeCount}}</i></p>
                  </div>
                </b-media>
              </b-media>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="clearfix">
            <span>个人介绍</span>
            <router-link to="xx">
              <span style="float: right;padding-left:20px;background: left center url('../../../static/img/bianji.png') no-repeat;color: black">编辑</span>
            </router-link>
            <p>{{authorDetails.author.authorDescription}}</p>
          </div>
          <hr>
          <div>
            <p style="padding-left: 50px;background: left center url('../../../static/img/wenji.png') no-repeat">他关注的专题/文集/连载</p>
            <p style="padding-left: 50px;background: left center url('../../../static/img/person_like.png') no-repeat">他喜欢的文章</p>
          </div>
          <hr>
          <div>
            <span>他创建的专题</span>
            <ul class="list-unstyled">
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
            </ul>
          </div>
          <hr>
          <div>
            <span>他的文集</span>
            <ul class="list-unstyled">
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/person_article.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/person_article.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/person_article.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/person_article.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/person_article.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/person_article.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "User",
    data(){
      return {
        authorId:null,
        authorDetails:{}
      }
    },
    activated(){
      var that = this;
      this.authorId = this.$route.params.authorId;
      this.$http
        .post('http://localhost:8080/author/oneAuthor',{"authorId":this.authorId})
        .then(function (response) {
          that.authorDetails = response.data.data
          console.log(that.authorDetails)
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
