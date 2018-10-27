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
                @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide
        v-for="img in imgList" :key="img.id"
        :img-src="img.url">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
  export default {
    name: "Carousel",
    data () {
      return {
        slide: 0,
        sliding: null,
        carouselImgList:[]
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    },
    created(){
      var that = this;
      this.$http
        .get('http://localhost:8080/carousel/allImg')
        .then(function (response) {
          that.carouselImgList = response.data.data
        })
    }
  }
</script>

<style scoped>

</style>
