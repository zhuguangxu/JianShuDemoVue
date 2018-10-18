<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide v-for="image in imageList" :key="image.id"
                        :img-src="image.url">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: [
          {
            "id": 1,
            "url": "http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 2,
            "url": "http://pgdsprys8.bkt.clouddn.com/18-10-18/77120350.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 3,
            "url": "https://upload-images.jianshu.io/upload_images/12759292-47141f493ea961ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 4,
            "url": "http://pgdsprys8.bkt.clouddn.com/18-10-18/42833863.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 5,
            "url": "http://pgdsprys8.bkt.clouddn.com/18-10-18/45898241.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
