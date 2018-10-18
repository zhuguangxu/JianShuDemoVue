<template>
  <div>
    <br>
    <div class="container">
      <div class="row" >
        <div class="col-md-4" v-for="list in lists" :key="list.id">
          <div  class="frame">
            <img style="margin-top: -50px;width: 100px;height: 100px;" :src="list.url">
            <p style="margin-top: 10px;font-size: 25px;font-weight: bold">{{list.title}}</p>
            <p>{{list.content}}</p>
            <button class="button">+ 关注</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Collection",
      data(){
          return{
            lists:[
              {
                "id":1,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":2,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":3,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":4,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":5,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":6,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":7,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":8,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":9,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
            ]


          }
      }
    }
</script>

<style scoped>
  .button{
    width: 100px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid white;
    background-color: limegreen;
    color: white;
  }
  .frame{
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    margin: 60px 10px 20px 20px;
    text-align: center;
    /*margin-top: 100px;*/
  }
</style>
