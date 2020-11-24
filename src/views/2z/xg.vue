<template>
	<div class="fc_page4">
		<div class="fc_header">
			<img src="../../assets/imgs/icon_logo.png" alt="" style="width: 2.66em; margin-top: 0.5em;margin-left: 0.5em;" />
			<span class="fc_span1" style="font-size: 1.5em; margin-left: 4.5em;">效果图</span>
			<span style="color: #999">
				<span style="margin-left: 2em">我的</span>
				<span style="margin-left: 1em">导航</span>
			</span>
		</div>
		<van-tabs v-model="active">
			<van-tab title="户型 V">
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
			</van-tab>
			<van-tab title="区域 V">
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
			</van-tab>
			<van-tab title="风格 V">
				<dl style="width: 10.38em; height: 11.89em">
					<dt style="width: 10.38em; height: 8.29em"><img style="width: 10.38em; height: 8.29em" src="../../assets/imgs/71.gif" alt="" /></dt>
					<dd>
						<p>欧美文化的抽象美感</p>
						<p>混搭 三室 m2/1100</p>
					</dd>
				</dl>
			</van-tab>
		</van-tabs>
		<van-pagination  :page-count="12" mode="simple" style="width: 100%" />
		<p style="color: #000">拥有智慧才能建造出心目的房子，房先生与您一起提升与房子相关的智慧。</p>
		<p style="text-align: center; color: #000000; margin-top: 0.5em">热线服务：400-9977-658</p>
		<p class="fc_p">
			<span style="color: #39c894">触屏版</span>
			<span>电脑版</span>
			<span>关于我们</span>
			<span>联系我们</span>
		</p>
		<img src="@/assets/imgs/fc.jpg" style="width: 100%" alt="" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 2
		};
	}
};
</script>

<style scoped="">
* {
	padding: 0;
	margin: 0;
}
.fc_p {
	margin-top: 0.5em;
}
.fc_p span {
	margin-left: 1.5em;
}
.fc_page4 {
	width: 100%;
	height: 100%;
	/* background: #000; */
	color: #0000ff;
}
.fc_header {
	width: 100%;
	height: 3.56em;
	/* background: #000; */
	color: #000;
}
dl {
	float: left;
	margin-left: 0.6em;
	color: #000000;
}
</style>
