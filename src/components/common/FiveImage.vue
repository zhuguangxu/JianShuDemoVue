<template>
  <div>
    <div v-for="img in imgList" :key="img.id">
      <b-img :src="img.url" fluid alt="Responsive image" />
    </div>
  </div>
</template>
<script>
  export default {
    name: "FiveImage",
    data(){
      return {
        imgList: [
          {
            id:1,
            url:'//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
          },
          {
            id:2,
            url:'//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
          },
          {
            id:3,
            url:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
          },
          {
            id:4,
            url:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
          },
          {
            id:5,
            url:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
