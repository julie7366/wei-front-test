<template>
<div class="main-contenter">
    <layout></layout>
</div>
</template>

<script>
export default {
    name: 'App',
    components:{
        layout: () => import("@/view/layout/index.vue")
    },
    created(){
    	
    }
}
</script>
<style>
body{
	margin: 0px;
	padding: 0px;
}
ul li{
	list-style: none;
}
</style>