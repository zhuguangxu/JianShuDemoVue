<template>
    <div>
      <div v-for="article in articleList" :key="article.id">
        <hr>
        <b-media right-align vertical-align="center">
          <b-img slot="aside" fluid  :src="article.articleImgUrl" alt="placeholder" />
          <h5 class="mt-0 mb-1">{{article.articleTitle}}</h5>
          <p>{{article.articleInfo}}</p>
          <b-media>
            <div>
              <h6 class="mt-sm-1" style="float: left">{{article.userNickname}}</h6>
              <!--<b-img class="mt-sm-1" style="float: left" src="../../static/img/like.png"/>-->
              <!--<b-img class="mt-sm-1" style="float: left" src="../../static/img/message.png"/>-->
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
            articleList: [
              {
                id:1,
                userNickname:'独角的犀牛',
                articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
                articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:2,
                userNickname:'独角的犀牛',
                articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
                articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:3,
                userNickname:'独角的犀牛',
                articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
                articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:4,
                userNickname:'独角的犀牛',
                articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
                articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:1,
                userNickname:'独角的犀牛',
                articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
                articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:5,
                userNickname:'独角的犀牛',
                articleTitle:'手把手教你配置最漂亮的PyCharm界面，Python程序员必备！',
                articleInfo:'高逼格超美的IDE界面，是每个程序员的梦想！ 随着人工智能/机器学习的兴起，Python作为一门“漂亮的语言”，再次获得广大程序员的关注。而Je...',
                articleImgUrl:'https://upload.jianshu.io/admin_banners/web_images/4500/e20f8255334b480222e199011779eb8d0cdabd0e.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
