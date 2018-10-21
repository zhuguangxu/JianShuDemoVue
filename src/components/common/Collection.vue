<template>
    <div>
      <br>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="8">
            <b-media>
              <b-img rounded slot="aside" id="collection-topic-avatar" src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg" alt="placeholder" />
              <div id="collection-followed-btn">
                <b-button>已关注</b-button>
              </div>
              <div id="collection-submission-btn">
                <b-button variant="outline-success">投稿</b-button>
              </div>
              <h4 class="mt-0">@IT·互联网</h4>
              <p>收录了<i>222</i>文章，<i>235</i>人关注</p>
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
              <div v-for="article in articleList" :key="article.id">
                <hr>
                <b-media right-align vertical-align="center">
                  <b-img slot="aside" fluid id="collection-articleAvatar"  :src="article.articleImgUrl" alt="placeholder" />
                  <router-link to="xx">
                    <h5 class="mt-0 mb-1" id="collection-articleTitle">{{article.articleTitle}}</h5>
                  </router-link>
                  <p>{{article.articleInfo}}</p>
                  <b-media>
                    <div>
                      <router-link to="xx">
                        <h6 class="mt-sm-1" id="collection-article-userNickname">{{article.userNickname}}</h6>
                      </router-link>
                      <p id="articleList-like"><i>{{article.articleLike}}</i></p>
                      <p id="articleList-message"><i>{{article.articleMessage}}</i></p>
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
                <div id="collection-fanslist-list" v-for="fans in fansList" :key="fans.authorId">
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
            id:this.$route.params.id,
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
                userNickname:'二十多苏 ',
                articleTitle:'这才是应该装在你手机上的“必备款”APP （我爱读书！',
                articleInfo:'在电脑“全家桶”软件专题后 咱们再来个手机版的 很多应用商店 都会有个必备版块推荐 无非是些QQ微信等日常应用 这次的必备专题 想由大家决定 直...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg',
                articleLike:1224,
                articleMessage:1235
              },
              {
                id:3,
                userNickname:'仰望天空45°',
                articleTitle:'10款良心APP，你值得拥有',
                articleInfo:'手机在现代已经成为了不可或缺的工具，在衣食住行上，它给我们提供了极大地便利。甚至不用出门，就能在家与全国的牛人进行一场知识的头脑风暴。手机APP...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/77120350.jpg',
                articleLike:1234,
                articleMessage:2375
              },
              {
                id:4,
                userNickname:'超能良 ',
                articleTitle:'10款必备效率工具，提升了我90%的效率',
                articleInfo:'人与动物最大的区别是什么？ 人懂得思考，懂得运用工具；工具找的好，运用的好的话，办事效率就会事倍功半。工具更多的像倚天剑一样，而我们的思维类似武...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg\n',
                articleLike:1249,
                articleMessage:2935
              },
              {
                id:5,
                userNickname:'迅捷CAD  ',
                articleTitle:'清华大神强烈推荐五个黑科技自学网站，学会保准不吃亏，get起来',
                articleInfo:'初入职场自身能力不够能么办？下面是清华大神强烈推荐的五个黑科技自学网站，学会保准不吃亏，一年省下几十万不是问题？ 1.超星读书馆 超星读书馆是一..',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg',
                articleLike:1024,
                articleMessage:5235
              },
              {
                id:6,
                userNickname:'超逗的二哈少爷 ',
                articleTitle:'6个黑科技十足的网站，每一个都强大到你无法想象！',
                articleInfo:'今天为大家精选6个黑科技十足的网站，每一个都强大到你无法想象，每一个网站都能顶一百个同类网站使用！ 音乐搜索器 喜欢音乐的小伙伴千万不要错过 这...',
                articleImgUrl:'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg',
                articleLike:7124,
                articleMessage:8235
              }
            ],
            fansList:[
              {
                authorId:1,
                authorAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg'
              },
              {
                authorId:2,
                authorAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/77120350.jpg'
              },
              {
                authorId:3,
                authorAvatar: 'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg'
              },
              {
                authorId:4,
                authorAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg'
              },
              {
                authorId:5,
                authorAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg'
              },
              {
                authorId:6,
                authorAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg'
              },
            ]
          }
      },
      activated(){
        this.id = this.$route.params.id;

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
