<template>
    <div>
      <ul class="list-unstyled">
        <b-media tag="li" class="my-4" v-for="author in indexAuthorList" :key="author.authorId">
          <b-img slot="aside" rounded="circle" :src="author.authorAvatar" height="56" width="56" alt="placeholder" />
          <router-link to="xx">
            <span id="index-recommend-user">关注</span>
          </router-link>
          <router-link to="xx">
            <h5 class="mt-0 mb-1" style="color: darkgrey">{{author.authorNickname}}</h5>
          </router-link>
          <p>写了<i>{{author.wordCount}}</i>字，<i>{{author.fansCount}}</i>人喜欢</p>
        </b-media>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "RecommendUser",
      data(){
          return {
            indexAuthorList: [
              {
                authorId:1,
                authorNickname:'仰望天空45°',
                authorAvatar: 'http://pgdsprys8.bkt.clouddn.com/18-10-18/77120350.jpg',
                wordCount:1124,
                fansCount:234
              },
              {
                authorId:2,
                authorNickname:'二十多苏',
                authorAvatar: 'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg',
                wordCount:1424,
                fansCount:2346
              },
              {
                authorId:3,
                authorNickname:'超能良',
                authorAvatar: 'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg',
                wordCount:1249,
                fansCount:1234
              },
              {
                authorId:4,
                authorNickname:'独角的犀牛',
                authorAvatar: 'https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg',
                wordCount:1904,
                fansCount:2054
              },
              {
                authorId:5,
                authorNickname:'超逗的二哈少爷',
                authorAvatar: 'http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg',
                wordCount:2394,
                fansCount:34
              },
              {
                authorId:6,
                authorNickname:'迅捷CAD',
                authorAvatar: 'http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg',
                wordCount:2784,
                fansCount:2347
              },
            ]
          }
      }
    }
</script>

<style scoped>
#index-recommend-user {
  float: right;
  margin-top: 12px;
  color: green
}
</style>
