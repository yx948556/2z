<template>
	<div class="fc_sjslb">
		<div class="fc_header">
			<img src="../../assets/imgs/icon_logo.png" alt="" style="width: 7.66em; margin-top: 0.5em;margin-left: 0.5em;" />
			<span class="fc_span1" style="font-size: 1.5em; margin-left: 1.5em;">效果图</span>
			<span style="color: #999">
				<span style="margin-left: 2em">我的</span>
				<span style="margin-left: 1em">导航</span>
			</span>
		</div>
		<div class="fc_main">
			<ul>
			  <li>
			    筛选
			    <van-icon name="arrow-down" />
			  </li>
			  <li>
			    风格
			    <van-icon name="arrow-down" />
			  </li>
			  <li>
			    排序
			    <van-icon name="arrow-down" />
			  </li>
			  <li>
			    <van-icon name="search" color="green" style="font-weight: bold;"/>
			  </li>
			</ul>
		</div>
		<div class="fc_content">
			<van-popover v-model="showPopover" :actions="actions" @select="onSelect">
			  <template #reference>
				  <p>级别</p>
			    <van-button type="primary" @click="showPopover = true">
			      不限
			    </van-button>
				<van-button type="primary" @click="showPopover = true">
				  总监
				</van-button>
				<van-button type="primary" @click="showPopover = true">
				  主任
				</van-button>
				<van-button type="primary" @click="showPopover = true">
					优秀	
				</van-button>
			  </template>
			</van-popover>
			<br>
			<van-popover v-model="showPopover" :actions="actions" @select="onSelect">
			  <template #reference>
				  <p>收费</p>
			    <van-button type="primary" @click="showPopover = true">
			      不限
			    </van-button>
				<van-button type="primary" @click="showPopover = true">
				  0-50元/㎡
				</van-button>
				<van-button type="primary" @click="showPopover = true">
				   50-100元/㎡
				</van-button>
				<van-button type="primary" @click="showPopover = true">
					 100-150元/㎡
				</van-button>
				<van-button type="primary" @click="showPopover = true">
					 200元/㎡以上
				</van-button>
			  </template>
			</van-popover>
			
			<van-button type="primary" block style="width: 100%;background-color: lightgreen;margin-top: 48px;">确认</van-button>
		</div>
		<div class="fc_footer"><img src="../../assets/imgs/fc001.jpg" alt="" /></div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		// 调用自动调节
		this.fc_height();
	},
	methods: {
		// 获取屏幕宽高自动调节
		fc_height() {
			let html = document.documentElement || document.body;
			let height = html.clientHeight - 60;
			let aside = document.querySelector('.el-aside');
			aside.style.height = height + 'px';
		}
	}
};
</script>

<style scoped="">
	.van-button{
		background-color: #F0F0F0;
		color: #000000;
	}
	.fc_content{
		width: 100%;
		height: 100%;
	}
	.fc_main{
		width: 100%;
		height: 50px;
		/* background: #000FFF; */
		margin-top: 56px;
		line-height: 50px;
	}
	.fc_main ul li{
		float: left;
		margin-left: 38px;
	}
.fc_sjslb {
	width: 360px;
}
.fc_header {
	width: 100%;
	position: absolute;
	top:0;
	height: 103px;
}
.fc_footer {
	position: absolute;
	bottom: 0;
}
img{
	width: 100%;
}

</style>
