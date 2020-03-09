<template>
    <div :class="[btnClass,cname]">
        <slot />
    </div>
</template>

<script>
export default {
    props: { // 父传值子-样式名
        cname: String,
        default: "",
    },
    data() {
        return {
            btnClass: "btn", // 默认样式
        }
    },
};
</script>

<style lang="scss">
	@import "../../css/element.scss";

	.btn {
		@include btn
	}
</style>
