<template>
 <h2>
     {{title}}
    <span class="badge badge-danger badge-pill">{{ badgeTitle}}</span>
 </h2>
</template>

<script>
export default {
name: "ListTitle",
props:["title","badgeTitle"]
}
</script>

<style scoped>

</style>