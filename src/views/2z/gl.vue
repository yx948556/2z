<template>
  <div class="yx_box">
    <!-- 头部 -->
    <header>
      <div class="yx_em">
        <img src="@/assets/imgs/1.jpg" alt />
      </div>
      <div class="yx_inp">
        <p>
          <img src="@/assets/imgs/关注.png" alt />
        </p>
        <div>
          <span>关注方先森官方微信公众号</span>
          <span class="yx_VX">sirfang_com</span>
        </div>
      </div>
      <div class="yx_x">
        <van-icon name="cross" />
      </div>
    </header>
    <!--头部下面的搜索框 -->
    <div class="yx_search">
      <input type="text" />
      <button>搜索</button>
    </div>
    <!--头部下面的搜索框下的导航栏 -->
    <div class="yx_nav">
      <ul>
        <li>装修前</li>
        <li>装修中</li>
        <li>装修后</li>
      </ul>
    </div>
    <!-- 收房验房 -->
    <div class="yx_home">
      <ul>
        <li>
          <div>
            <i class="iconfont icon-taiji" style="font-size:40px"></i>
          </div>
          <p>收房验房</p>
        </li>
        <li>
          <div>
            <i class="iconfont icon-taiji" style="font-size:40px"></i>
          </div>
          <p>装修预算</p>
        </li>
        <li>
          <div>
            <i class="iconfont icon-taiji" style="font-size:40px"></i>
          </div>
          <p>装修风水</p>
        </li>
        <li>
          <div>
            <i class="iconfont icon-taiji" style="font-size:40px"></i>
          </div>
          <p>装修设计</p>
        </li>
      </ul>
    </div>
    <!-- 装修流程/推荐 -->
    <div class="yx_text">了解装修流程</div>
    <div class="yx_text2">为您推荐</div>
    <!-- 图文列表区域 -->
    <div class="yx_img">
      <ul>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>
        <li>
          <div class="yx_img-img">
            <img src="@/assets/imgs/case1.jpg" alt />
          </div>
          <div class="yx_img-text">
            <p>开发商延期交房，业主该如何维权</p>
            <p>2016-07-07</p>
          </div>
        </li>

        <div class="yx_text3">换一换</div>
      </ul>
    </div>
    <!-- 底部的布局 -->
    <footer>
      <div class="yx_text4">
        <p>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，
          以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网
          将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务
        </p>
      </div>
      <div class="yx_foot">
        <p>服务热线:400-9977-658</p>
        <ul>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
        <img src="@/assets/imgs/banner.jpg" alt />
      </div>
    </footer>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
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

<style lang="scss" scoped>
// 整体大盒子的布局
.yx_box {
  width: 100%;
  box-sizing: border-box;
  //   头部布局
  header {
    width: 100%;
    height: 122px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: #39c894;
    .yx_em {
      box-sizing: border-box;
      width: 25%;
      height: 100%;
      padding: 10px;
      img {
        width: 80%;
        // float: right;
        // margin-top: 10px;
        // margin-right: 10px;
      }
    }
    .yx_inp {
      width: 65%;
      height: 100%;
      p {
        margin: 0;
        width: 100%;
        height: 50px;
        img {
          width: 80%;
          margin-top: 20px;
        }
      }
      div {
        height: 40px;
        width: 100%;
        font-size: 12px;
        text-align: center;
        line-height: 40px;
        background: #2bb281;
        border-radius: 50px;
        .yx_VX {
          color: #eed215;
        }
      }
    }
    .yx_x {
      width: 10%;
      font-size: 24px;
      padding: 5px;
      box-sizing: border-box;
    }
  }
  // 头部下的搜索框布局
  .yx_search {
    width: 100%;
    height: 80px;
    padding: 20px 20px;
    box-sizing: border-box;
    input {
      height: 20px;
      border: 2px solid #39c894;
      width: 80%;
      height: 30px;
    }
    button {
      background: #39c894;
      color: #fff;
      padding: 6px 8PX 9PX;
      font-size: 16px;
      border:none;
      border-bottom: 5px;
    }
  }
  // 头部下的搜索框布局下的导航栏
  .yx_nav {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    ul {
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    li {
      width: 33%;
      text-align: center;
    }
  }
  // 头部下的搜索框布局下的导航栏下的布局
  .yx_home {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    ul {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100px;
      display: flex;
     justify-content: space-around;
     box-sizing: border-box;
      li {
        width: 19%;
        // text-align: center;
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        // text-align: center;
        div {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid #39c894;
          text-align: center;
          line-height: 60px;
          color: #39c894;
        }
        p{
            font-size: 14px;
        }
      }
    }
  }
// 了解装修流程
  .yx_text {
    width: 100%;
    height: 50px;
    border: 1px solid #39c894;
    box-sizing: border-box;
    text-align: center;
    line-height: 50px;
    color: #39c894;
  }
  .yx_text2 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }
//   图文列表
  .yx_img {
    width: 100%;
    ul {
      width: 100%;
      box-sizing: border-box;
      .yx_text3 {
        width: 100%;
        color: #39c894;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 1px solid #999999;
        box-sizing: border-box;
      }
      li {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        .yx_img-img {
          width: 40%;
          img {
            width: 100%;
          }
        }
        .yx_img-text {
          width: 60%;
          padding: 0 10px;
          p {
            margin: 0;
            color: #666666;
          }
        }
      }
    }
  }
//   底部布局
  footer {
    width: 100%;
    .yx_text4 {
      width: 100%;
      background: #eaeaea;
      padding: 5px 0;
      box-sizing: border-box;
      p {
        background: #fff;
      }
    }
    .yx_foot {
      width: 100%;
      p {
        text-align: center;
      }
      ul {
        padding: 0;
        width: 100%;
        display: flex;
        li {
          width: 25%;
          text-align: center;
        }
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
