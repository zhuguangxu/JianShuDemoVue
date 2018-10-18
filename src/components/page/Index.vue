<template>
  <b-container class="bv-example-row">
    <br>
    <b-row>
      <!--首页左侧-->
      <b-col cols="8">
        <!--轮播图区域-->
        <v-carousel></v-carousel>
        <br>
        <!--热门专题区域-->
        <div>
          <v-more-topic></v-more-topic>
        </div>
        <!--文章列表区-->
        <v-article-list></v-article-list>
      </b-col>
      <!--首页右侧-->
      <b-col >
        <v-five-image></v-five-image>
        <br>
        <b-card>
          <b-media>
            <b-img slot="aside"src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="64" width="64" alt="placeholder" />
            <h6 class="mt-0">下载简书手机APP</h6>
            <span>随时随地发现和创作内容</span>
          </b-media>
        </b-card>
        <br>
        <div class="clearfix">
          <span>推荐作者</span>
          <router-link to="xx">
            <span id="another-batch" style="">换一批</span>
          </router-link>
        </div>
        <div>
          <v-recommend-user></v-recommend-user>
        </div>
        <br>
        <b-list-group>
          <router-link to="/users">
            <b-list-group-item variant="light" id="look-more-user" >查看更多</b-list-group-item>
          </router-link>
        </b-list-group>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import vCarousel from '../common/Carousel'
  import vArticleList from '../common/ArticleList'
  import vMoreTopic from '../common/MoreTopic'
  import vRecommendUser from '../common/RecommendUser'
  import vFiveImage from '../common/FiveImage'
  export default {
    name: "Index",
    components:{
      vCarousel,
      vArticleList,
      vFiveImage,
      vMoreTopic,
      vRecommendUser
    }
  }
</script>

<style scoped>
  #look-more-user {
    text-align: center;
  }
  #another-batch {
    float: right;
    padding-left:20px;
    background: left center url('../../../static/img/flush.png') no-repeat;
    color: black
  }
</style>
