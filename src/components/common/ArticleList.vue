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
                userNickname:'迅捷CAD',
                articleTitle:'清华大神强烈推荐五个黑科技自学网站，学会保准不吃亏，get起来',
                articleInfo:'初入职场自身能力不够能么办？下面是清华大神强烈推荐的五个黑科技自学网站，学会保准不吃亏，一年省下几十万不是问题？ 1.超星读书馆 超星读书馆是一...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-10/51463268.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:2,
                userNickname:'超逗的二哈少爷',
                articleTitle:'6个黑科技十足的网站，每一个都强大到你无法想象！',
                articleInfo:'今天为大家精选6个黑科技十足的网站，每一个都强大到你无法想象，每一个网站都能顶一百个同类网站使用！ 音乐搜索器 喜欢音乐的小伙伴千万不要错过 这...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
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
                userNickname:'超能良',
                articleTitle:'10款必备效率工具，提升了我90%的效率',
                articleInfo:'人与动物最大的区别是什么？ 人懂得思考，懂得运用工具；工具找的好，运用的好的话，办事效率就会事倍功半。工具更多的像倚天剑一样，而我们的思维类似武...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:5,
                userNickname:'二十多苏',
                articleTitle:'这才是应该装在你手机上的“必备款”APP （我爱读书！',
                articleInfo:'在电脑“全家桶”软件专题后 咱们再来个手机版的 很多应用商店 都会有个必备版块推荐 无非是些QQ微信等日常应用 这次的必备专题 想由大家决定 直...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
              {
                id:6,
                userNickname:'仰望天空45°',
                articleTitle:'10款良心APP，你值得拥有',
                articleInfo:'手机在现代已经成为了不可或缺的工具，在衣食住行上，它给我们提供了极大地便利。甚至不用出门，就能在家与全国的牛人进行一场知识的头脑风暴。手机APP...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/77120350.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/150'
              },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
