<template lang="html">
	<section :class="cname">
		<swiper :options="options" :not-next-tick="options.notNextTick">
    	<swiper-slide v-for="(item,idx) in items" :key="idx">
    		<router-link :to="{name:item.href}">
    			<img :src="item.src" alt="item.title">
    		</router-link>
    	</swiper-slide>
    	<div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
  	</swiper>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	props:{
		cname:{
			type:String,
			default:""
		},
		options:{
			type:Object,
			default(){
				return{
					autoplay:true,
					loop:true,
					pagination:{
						el:".swiper-pagination"
					},
					notNextTick:false
				}
			}
		},
		items:{ // 父传值子，参数名必须与父相同
			type:Array,
			default(){
				return []
			}
		}
	},
	components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="css">
  @import "~swiper/dist/css/swiper.css";
</style>
