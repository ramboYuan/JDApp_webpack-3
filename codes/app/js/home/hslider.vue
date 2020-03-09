<template>
	<article class="">
		<Slider :items="items" :cname="$style.slider"/>
		<section :class="$style.list">
			<div :class="$style.navlist" v-for="item in enters" :key="item.img">
				<router-link :to="item.href">
					<img :src="item.img" alt="item.title">
					<h4>{{ item.title }}</h4>
				</router-link>
			</div>
		</section>
	</article>
</template>

<script>
	import Slider from '../core/slider.vue'
	export default{
		components:{
			Slider
		},
		data(){
			return{
				items:[{
					href:"home",
					src:"//gw.alicdn.com/imgextra/i1/1450847/O1CN01OdGhTq1I7y3OhekV4_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp",
					title:"休闲女鞋"
				},{
					href:"home",
					src:"//gw.alicdn.com/tps/i4/TB1iKLBtYH1gK0jSZFwSuw7aXXa.jpg_790x10000Q75.jpg_.webp",
					title:"美容仪"
				},{
					href:"home",
					src:"//gw.alicdn.com/imgextra/i2/1450893/O1CN01B5tNq41IT2Gmjxpzb_!!1450893-0-lubanu.jpg_790x10000Q75.jpg_.webp",
					title:"女王带娃计"
				},{
					href:"home",
					src:"//gw.alicdn.com/tfs/TB17emto4n1gK0jSZKPXXXvUXXa-1035-390.png_790x10000.jpg_.webp",
					title:"私房红包"
				}],
				enters:[{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png",
					title:"优惠券"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png",
					title:"领钢镚"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png",
					title:"白条提额"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/105209/4/9857/12579/5e11d770E4e458bc7/fbbbec1918b041e3.png",
					title:"领京豆"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/95010/16/9777/10019/5e11d791E1d2871b3/66a53d1849c687e7.png",
					title:"工资理财"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/101963/37/9857/11372/5e11d7a7E05793a8e/f9371aee1e18ae9a.png",
					title:"京东众筹"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/110353/31/6597/13152/5e4f4579Ecefc0163/bf2e3ec63adfa15c.png",
					title:"1元扭蛋机"
				},{
					href:"home",
					img:"//img20.360buyimg.com/mcpageview/jfs/t1/85137/14/9816/10770/5e11d7ddE2805969c/9f4f3cdcfeb204e5.png",
					title:"免息红包"
				}]
			}
		}
	}
</script>

<style lang="scss" module>
	// css模块化:
	// 1.module
	// 2.:class  $style.
	@import "../../css/element.scss";
	.slider{
		margin-top: 120px;
		img{
			width: 100%;
		}
	}
	.list{
		@include list(row);
		background-color: #fff;
		margin-top: 20px;
		padding-bottom: 20px;
		justify-content: space-around;
		a{
			text-decoration: none;
		}
		.navlist{
			width: 25%;
			text-align: center;
			margin-top: 20px;
			img{
				display: block;
				width: 90px;
				height: 90px;
				margin: 0 auto;
			}
			h4{
				font-size: 26px;
				margin-top: 12px;
				color: #666;
			}
		}
	}
</style>
