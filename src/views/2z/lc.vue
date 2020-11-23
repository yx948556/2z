<template>
  <div>
    <header class="header">
      <div class="fd">
        <img src="@/assets/imgs/logo.png" alt class="log" />
      </div>
      <div class="lxlc fd">装修流程</div>
      <div class="fd gd">
        <div class="fd">
          <div class="iconfont icon-user wd hs to"></div>
          <p class="jz hd me">我的</p>
        </div>

        <div class="fd mz">
          <div class="iconfont icon-nav dh hs to"></div>
          <p class="jz hd me">导航</p>
        </div>
      </div>
    </header>
    <!-- //红彤彤的图 -->
    <div class="bghear"></div>
    <!-- 接下来的图 -->
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bg3"></div>
    <div class="hsd"></div>
    <p class="zt">
      房先森互联网家装有别于传统装修公司与其他装修中
      介平台， 以自营模式整合设计师与项目经理， 杜绝项目转
      包外包， 利用互联网将工地进行在线全景直播， 通过去中
      间环节， 提供装修套餐+ 个性化定制服务。
    </p>
    <div class="hsd"></div>
    <div class="bg4"></div>
  </div>
</template>

<script>
import rem from "@/assets/rem";
import  "../../assets/iconfont/iconfont.css"
export default {
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
};
</script>

<style>
html {
  height: 100%;
}
*p {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
body {
  height: 100%;
  margin: 0px;
  font-size: 0.16rem;
}
.lxlc {
  font-size: 0.36rem;
  color: #000;
  width: 2.33rem;
  margin-left: 0.74rem;
  margin-right: 0.44rem;
}
.wd {
  font-size: 0.43rem;
}
.dh {
  font-size: 0.43rem;
}
.hs {
  color: #999999;
}
.fd {
  float: left;
}
.jz {
  text-align: center;
}
.me {
  font-size: 0.2rem;
}
.log {
  width: 2.33rem;
}
p{
    margin: 0;
}
.gd {
  width: 1.5rem;
}
.mz {
  margin-left: 0.38rem;
}
.bghear {
  background: url("../../assets/imgs/process1.jpg");
  width: 100%;
  height: 2.46rem;
  background-size: 100% 100%;
}
.bg1 {
  background: url("../../assets/imgs/process2.jpg");
  width: 100%;
  height: 8.55rem;
  background-size: 100% 100%;
}
.bg2 {
  background: url("../../assets/imgs/process3.png");
  width: 100%;
  height: 8.89rem;
  background-size: 100% 100%;
}
.bg3 {
  background: url("../../assets/imgs/process4.jpg");
  width: 100%;
  height: 9.49rem;
  background-size: 100% 100%;
}
.bg4 {
  background: url("../../assets/imgs/process5.jpg");
  width: 100%;
  height: 2.73rem;
  background-size: 100% 100%;
}
.header {
  height: 1rem;
}
.hsd {
  height: 0.19rem;
  background: #eaeaea;
}
.zt {
  font-size: 0.26px;
  text-indent: 0.52em;
}
.to{
    margin-top: 5px;
}
</style>