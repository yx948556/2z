<template>
  <div class="gwh_box">
    <!-- 头部内容 -->
    <header>
      <van-nav-bar title="欧美文化的抽象美感" left-arrow>
        <template #right>
          <van-icon name="wap-nav" size="25" />
          <p>导航</p>
        </template>
      </van-nav-bar>
    </header>
    <!-- 主要内容 -->
    <main>
      <div class="gwh_img">
        <p>
          <img src="@/assets/imgs/case1.jpg" alt />
        </p>
        <van-steps>
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
        <section>设计诠释:less is more 不需要过多的装饰,简单的墙面背景与简洁的家具即可组成一个温暖的家</section>
        <div
          class="gwh_font"
        >房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。</div>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/imgs/case.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/imgs/banner1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/imgs/banner2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/imgs/banner3.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </main>
    <!-- 尾部内容 -->
    <footer>
      <van-icon name="filter-o" size="30" />
      <h4>预约免费设计</h4>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
};
</script>

<style scoped lang='scss'>
.gwh_box {
  width: 100%;
  height: 100%;
  position: relative;
  //头部内容
  header {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    .van-icon,
    p {
      color: #ccc;
    }
  }
  //主要内容
  main {
    width: 100%;
    height: 100%;
    background: #ddd;
    .gwh_img {
      width: 100%;
      height: 738px;
      background: #202020;
      overflow: hidden;
      p {
        width: 100%;
        margin-top: 100px;
        img {
          width: 100%;
          height: 300px;
        }
      }
      .van-steps {
        margin: 10px 0;
        background: #202020;
      }
      section {
        // padding: 20px;
        width: 100%;
        color: #fff;
        font-size: 16px;
      }
    }
    .gwh_font {
      width: 100%;
      height: 136px;
      background: #fff;
      margin-top: 10%;
      text-indent: 30px;
      font-size: 16px;
      letter-spacing: 6px;
    }
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
      img {
        width: 100%;
      }
    }
  }
  //尾部内容
  footer {
    width: 100%;
    height: 70px;
    background: #e24e55;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-icon {
      color: #fff;
    }
    h4 {
      font-weight: normal;
      font-size: 22px;
      margin-left: 1%;
      color: #fff;
    }
  }
}
</style>
