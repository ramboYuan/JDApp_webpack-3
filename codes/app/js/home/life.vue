<template>
	<Panel title="生活服务" :class="$style.panel">
		<ul :class="$style.content">
			<li :class="$style.item" v-for="(life,idx) in lifes" :key="idx">
				<img :src="life.src" alt="">
				<p>{{ life.inof1 }}</p>
				<p v-show="life.inof2.length">{{ life.inof2 }}</p>
			</li>
		</ul>
	</Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
	components: {
		Panel
	},
	data(){
		return{
			lifes:[{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135",
				inof1:"惠加油",
				inof2:""
			},{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132",
				inof1:"小白信用",
				inof2:"全新升级"
			},{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135",
				inof1:"信用卡还款",
				inof2:""
			},{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135",
				inof1:"卡转让",
				inof2:""
			},{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135",
				inof1:"定期还款",
				inof2:""
			}]
		}
	}
};
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
	@include panel;
	.content {
		@include flex(row);
		box-sizing: border-box;
		padding-bottom: 40px;
		.item{
		  width: 20%;
		  text-align: center;
		  img{
		    width: 90px;
		    height: 90px;
		  }
		  p{
		    font-size: 26px;
		    color: #666;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		    margin-top: 12px; 
		    &:nth-child(3){
		      color: #FF801A;
		    }
		  }
		}
	}
}
</style>
