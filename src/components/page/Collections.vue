<template>
  <div>
    <br>
    <div>
      <b-img rounded src="//cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png" fluid alt="Responsive image" />
    </div>
    <br>
    <div>
      <b-nav tabs>
        <b-nav-item active>推荐</b-nav-item>
        <b-nav-item>热门</b-nav-item>
        <b-nav-item>城市</b-nav-item>
        <b-nav-item>校园</b-nav-item>
      </b-nav>
    </div>
    <br>
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4" v-for="topicCard in moreTopicList" :key="topicCard.topicId">
            <div id="topic-card-list">
              <div id="topic-card-topicAvatar">
                <router-link :to="'/c/'+ topicCard.topicId">
                  <b-img rounded width="75" height="75" :src="topicCard.topicAvatar" alt="img" class="m-1" />
                </router-link>
              </div>
              <div id="topic-card-contain">
                <router-link :to="'/c/'+ topicCard.topicId">
                  <h3 id="topic-card-h3">{{topicCard.topicTitle}}</h3>
                </router-link>
                <br>
                <p id="topic-card-p">
                  {{topicCard.topicInfo}}
                </p>
                <div>
                  <b-button>关注</b-button>
                </div>
                <hr>
                <p><i>{{topicCard.articlesCount}}</i>篇文章<i>{{topicCard.followCount}}</i>K人关注</p>
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
    name: "Collections",
    data(){
      return {
        moreTopicList:[
          {
            topicId:1,
            topicTitle:'@IT·互联网',
            topicAvatar:'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg',
            topicInfo:'欢迎关注公众号简宝玉（公众号ID：jianbaoyu4321)后台...',
            articlesCount:222,
            followCount:235
          },
          {
            topicId:2,
            topicTitle:'摄影',
            topicAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/47015260.jpg',
            topicInfo:'欢迎关注公众号简宝玉（公众号ID：jianbaoyu4321)后台...',
            articlesCount:212,
            followCount:35
          },
          {
            topicId:3,
            topicTitle:'读书',
            topicAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/63414710.jpg',
            topicInfo:'投稿须知：读书专题仅仅收录与读书有关得书品和笔记...',
            articlesCount:22,
            followCount:25
          },
          {
            topicId:4,
            topicTitle:'故事',
            topicAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/59293229.jpg',
            topicInfo:'故事专题，不管是旅行生活中得亲身经历还是真实故事...',
            articlesCount:12,
            followCount:35
          },
          {
            topicId:5,
            topicTitle:'手绘',
            topicAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/12843003.jpg',
            topicInfo:'欢迎关注公众号简宝玉（公众号ID：jianbaoyu4321)后台...',
            articlesCount:236,
            followCount:235
          },
          {
            topicId:6,
            topicTitle:'旅行',
            topicAvatar:'http://pgdsprys8.bkt.clouddn.com/18-10-18/38863370.jpg',
            topicInfo:'邂逅一个国家，讲述一座城市，这里又等待得诗和远方...',
            articlesCount:962,
            followCount:586
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #topic-card-list{
    padding-top: 25%;
    margin-bottom: 10%;
    position: relative;
  }
  #topic-card-topicAvatar {
    text-align: center;
    position: absolute;
    top: 13%;
    left: 37%;
  }
  #topic-card-contain {
    height: 75%;
    padding-top: 15%;
    margin: 0 5% 5% 5%;
    background-color: #f7f7f7;
    text-align: center;
  }

  #topic-card-h3 {
    color: black;
    text-decoration-line: none;
  }
  #topic-card-p{
    font-size: 14px;
  }
</style>

