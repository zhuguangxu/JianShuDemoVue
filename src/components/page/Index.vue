<template>
  <div id="container">
    <b-row>
      <b-col cols="8">
        <v-carousel></v-carousel>
        <h1 style="height: 30px"></h1>
        <div class="recommend-collection" style="min-height: 32px;margin-bottom: 18px;margin-right: 18px;margin-top: 0px;margin-left: 0px">
          <a class="collection" target="_blank" href=""style="height: 15px">
            <img src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
            <h>读书</h>
          </a>
        </div>
      </b-col>

      <b-col cols="4">
          <div class="container-right-top">
            <img style="height: 52px" src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png">
            <h2 style="height: 7px"></h2>
            <img style="height: 52px" src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" >
            <h2 style="height: 7px"></h2>
            <img style="height: 52px" src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" >
            <h2 style="height: 7px"></h2>
            <img style="height: 52px" src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png">
            <h2 style="height: 7px"></h2>
            <img style="height: 52px" src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png">
            <h2 style="height: 7px"></h2>
            <a>
              <img class="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png">
              <div class="info">
                <div class="title">下载简书手机App<i class="iconfont ic-link"></i></div>
                <div class="description">随时随地发现和创作内容</div>
              </div>
            </a>
          </div>
      </b-col>
    </b-row>

  </div>

</template>

<script>
  import vCarousel from '../common/Carousel';

  export default {
    name: "Index",
    components: {
      vCarousel
    }
  }
</script>
