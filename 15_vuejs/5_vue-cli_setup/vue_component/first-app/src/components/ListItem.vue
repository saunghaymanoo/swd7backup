<template>
 <li class="list-group-item">
   {{ listText}}
  <button @click="toRun()" class="btn btn-primary">Del</button>
 </li>
</template>

<script>
export default {
  name: "ListItem",
  props:["listText","currentIndex"],
  methods: {
    toRun() {
      this.$emit("toParent",this.currentIndex)
    }
  },
}
</script>

<style scoped>

</style>