<template>
  <b-conatiner class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="4">
        <div class="clearfix">
          <router-link to="xx">
            <span style="padding-right:20px;background: right center url('../../../static/img/flush.png') no-repeat;color: black">全部关注</span>
          </router-link>
          <router-link to="xx">
            <span style="float: right;padding-left:20px;background: left center url('../../../static/img/flush.png') no-repeat;color: black">换一批</span>
          </router-link>
        </div>
        <div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
          <div>
            <br/>
            <b-media>
              <b-img slot="aside" rounded width="45" height="45" src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/45/h/45"  alt="img" class="m-1" />
              <span style="float: right;margin-top: 12px">111</span>
              <h6 class="mt-sm-3">Nested Media</h6>
            </b-media>
          </div>
        </div>
      </b-col>
      <b-col cols="8">
        <br>
        <v-article-list></v-article-list>
      </b-col>
    </b-row>
  </b-conatiner>
</template>

<script>
  import vArticleList from '../common/ArticleList'
  export default {
    name: "Subscriptions",
    components:{
      vArticleList
    }
  }
</script>

<style scoped>

</style>
