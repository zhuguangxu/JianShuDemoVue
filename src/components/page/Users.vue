<template>
  <div>
    <br>
    <div>
      <b-img rounded src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" fluid alt="Responsive image" />
    </div>
    <br>
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4" v-for="user in usersList" :key="user.authorId">
            <div id="users-card-list">
              <div id="users-card-userAvatar">
                <b-img rounded="circle" width="75" height="75" :src="user.authorAvatar" alt="img" class="m-1" />
              </div>
              <div id="users-card-contain">
                <div id="user-card-contain-h3">
                  <h3>{{user.authorNickname}}</h3>
                </div>
                <div id="user-card-contain-p">
                  <p>{{user.authorInfo}}</p>
                </div>
                <div>
                  <b-button variant="success">关注</b-button>
                </div>
                <hr>
                <!--<p>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;最近更新-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
                <p>{{user.authorNew1}}</p>
                <p>{{user.authorNew2}}</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Users",
    data(){
      return {
        usersList:[
          {
            authorId:1,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:2,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:3,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:4,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:5,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:6,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:7,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:8,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
          {
            authorId:9,
            authorAvatar:'//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            authorNickname:'格列柯南',
            authorInfo:'业内在用户统一身份认证及授权管理领域..',
            authorNew1:'更新1',
            authorNew2:'更新2'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #users-card-list{
    height: 400px;
    padding-top: 41px;
    position: relative;
  }
  #users-card-userAvatar{
    position: absolute;
    left: 126.5px;
    top: 0;
  }
  #users-card-contain{
    height: 359px;
    padding-top: 60px;
    background-color: #F7F7F7;
    text-align: center;
  }
  #user-card-contain-h3{
    margin: 4px 0px;
  }
</style>
