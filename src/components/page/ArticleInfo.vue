<template>
  <b-container class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <h1>{{articleInfo.article.articleTitle}}</h1>
        <br>
        <b-media>
          <b-img rounded="circle" slot="aside"  width="45" height="45" :src="articleInfo.authorAvatar" alt="placeholder" />
          <h6 class="mt-sm-0">{{articleInfo.authorNickname}}</h6>
          <p><i>{{articleInfo.article.articlePublishTime}}</i>，字数<i>{{articleInfo.article.articleWordsCount}}</i>，阅读<i>{{articleInfo.article.articleReadCount}}</i>，评论<i>{{articleInfo.article.articleCommentCount}}</i>，喜欢<i>{{articleInfo.article.articleLikeCount}}</i></p>
        </b-media>
        <br>
        <div id="article-info-container">
          <p>
            其实程序员这个职业的门槛还是挺高的，首先必须懂最基础的计算机语言，而就这个要求，
            已经把大部人人挡在外面了。而他们的具体工作，简单来说，就是我们在手机上所用的任何软件，
            都是程序员在背后辛苦编程而来的，就是我们所说的软件开发和维护之类的工作。
          </p>
          <div class="article-info-container-img">
            <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
          </div>
          <p>
            最近有工作3年的程序员晒出自己9月份的工资条，并直言加班太累了，网友评论炸锅了。

            从工资条上可以看到，这个收入确实还是不低，才3年时间，月工资就已经到了一万二了，这个工资已经可以击败绝大多数行业了。要知道即使在很多大城市，平均工资也就六千左右而已。而程序员才3年就基本达到平均工资的2倍收入，真是让人有点吃惊。

            不过一万二只是税前工资，等扣完税以及各种必须缴纳的费用后，实际到手是9000多元，也还算是不错。看到上面总共被扣了3500多元费用后，有人发表感慨，每次发工资，好像自己又弄丢了一辆车一样，心疼不已，估计很多人都有同样的感觉吧。
          </p>
          <div class="article-info-container-img">
            <b-img src="https://upload-images.jianshu.io/upload_images/5275417-98404ceff8175355"/>
          </div>
          <p>
            我们再来看看网友都是如何说的：

            网友一、这个收入真心不错了，我大学是学建筑的，毕业3年了，工资才9千多，扣完税，实际到手才7千多。而且像我们学建筑的，基本上天天在工地上，日晒雨淋，辛苦程度上不比程序员差吧，至少你们还可以舒服的吹着空调。看来选对行业还是很重要的，行业的平均工资决定着个人的工资，一点都不假。

            网友二、一万多工资啊，很多人做一辈子也不一定能达到这个水平，而程序员才用3年时间。我能说什么呢？如果是我，只要能拿这么多钱，天天加班都愿意。
          </p>
          <div class="article-info-container-img">
            <b-img src="https://upload-images.jianshu.io/upload_images/5275417-3b8e2dda718238f3"/>
          </div>
          <p>
            网友三、我认为没必要羡慕，毕竟他能拿这么高的工资，背后付出的肯定会比一般人多。而很多程序员因为用脑过度，头发都少了就是最好的证明。
            其实这个还算是一般的，如果在华为，阿里这样的公司，我相信做了3年，年薪应该是25万左右吧。
          </p>
        </div>
        <br>
        <div>
          <h4>评论</h4>
          <div>
            <hr>
            <b-media>
              <b-img rounded="circle" slot="aside"  width="40" height="40" src="../../static/img/hear.jpg" alt="placeholder" />
              <h6 class="mt-sm-0">Java高级架构</h6>
              <p><i>2018.10.17 17:07</i></p>
            </b-media>
            <p>网友三说的才是比较中肯。确实如此。</p>
            <p><span class="article-info-comment-zan">123</span><span class="article-info-comment-huifu">2434</span></p>
          </div>
          <div>
            <hr>
            <b-media>
              <b-img rounded="circle" slot="aside"  width="40" height="40" src="../../static/img/hear.jpg" alt="placeholder" />
              <h6 class="mt-sm-0">Java高级架构</h6>
              <p><i>2018.10.17 17:07</i></p>
            </b-media>
            <p>网友三说的才是比较中肯。确实如此。</p>
            <p><span class="article-info-comment-zan"><i>人赞</i></span><span class="article-info-comment-huifu">回复</span></p>
          </div>
        </div>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "ArticleInfo",
    data(){
      return{
        articleId:null,
        articleInfo:{}
      }
    },
    activated(){
      var that = this;
      this.articleId = this.$route.params.articleId;
      this.$http
        .post('http://localhost:8080/article/oneArticleDetails',{"articleId":this.articleId})
        .then(function (response) {
          that.articleInfo = response.data.data
        })
    }
  }
</script>

<style scoped>
  #article-info-container .article-info-container-img{
    text-align: center;
  }
  .article-info-comment-zan{
    padding-left: 20px;
    background: left center url("../../../static/img/comment_zan.png") no-repeat;
    margin-right: 10px;
  }
  .article-info-comment-huifu{
    padding-left: 20px;
    background: left center url("../../../static/img/comment_huifu.png") no-repeat;
    margin-right: 10px;
  }
</style>
