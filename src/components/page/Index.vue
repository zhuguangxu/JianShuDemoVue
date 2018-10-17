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
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/61/0__15815600_401_00.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/30/IMG_2226.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/38/android.graphics.Bitmap_f3edcb1.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="xx">
            <b-img rounded width="75" height="75" src="https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>
          <router-link to="/more_topic">
            <b-img rounded width="75" height="75" src="../../static/img/more_topic.png?imageMogr2/auto-orient/strip|imageView2/1/w/75/h/75"  alt="img" class="m-1" />
          </router-link>

        </div>
        <!--文章列表区-->
        <v-article-list></v-article-list>
      </b-col>
      <!--首页右侧-->
      <b-col >
        <div>
          <b-img src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" fluid alt="Responsive image" />
        </div>
        <div>
          <b-img src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" fluid alt="Responsive image" />
        </div>
        <div>
          <b-img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" fluid alt="Responsive image" />
        </div>
        <div>
          <b-img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" fluid alt="Responsive image" />
        </div>
        <div>
          <b-img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" fluid alt="Responsive image" />
        </div>
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
          <span left>推荐作者</span>
          <router-link to="xx">
            <span style="float: right;padding-left:20px;background: left center url('../../../static/img/flush.png') no-repeat;color: black">换一批</span>
          </router-link>
        </div>
        <ul class="list-unstyled">
          <b-media tag="li" class="my-4">
            <b-img slot="aside"rounded="circle" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="56" width="56" alt="placeholder" />
            <router-link to="xx">
              <h5 class="mt-0 mb-1" style="color: darkgrey">List-based</h5>
            </router-link>
            <p>写了<i>111</i>字，<i>235</i>人喜欢</p>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" rounded="circle" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="56" width="56" alt="placeholder" />
            <h5 class="mt-0 mb-1">List-based</h5>
            <p>写了<i>111</i>字，<i>235</i>人喜欢</p>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" rounded="circle" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="56" width="56" alt="placeholder" />
            <h5 class="mt-0 mb-1">List-based</h5>
            <p>写了<i>111</i>字，<i>235</i>人喜欢</p>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside"rounded="circle" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="56" width="56" alt="placeholder" />
            <h5 class="mt-0 mb-1">List-based</h5>
            <p>写了<i>111</i>字，<i>235</i>人喜欢</p>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" rounded="circle" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="56" width="56" alt="placeholder" />
            <h5 class="mt-0 mb-1">List-based</h5>
            <p>写了<i>111</i>字，<i>235</i>人喜欢</p>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" rounded="circle" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="56" width="56" alt="placeholder" />
            <h5 class="mt-0 mb-1">List-based</h5>
            <p>写了<i>111</i>字，<i>235</i>人喜欢</p>
          </b-media>
        </ul>
        <br>
        <b-list-group>
          <router-link to="xx">
            <b-list-group-item variant="light" style="text-align: center">查看更多</b-list-group-item>
          </router-link>
        </b-list-group>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import vCarousel from '../common/Carousel'
  import vArticleList from '../common/ArticleList'
  export default {
    name: "Index",
    components:{
      vCarousel,
      vArticleList
    }
  }
</script>

<style scoped>

</style>
