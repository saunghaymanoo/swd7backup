<template>
  <div class="p-3">
    <ListTitle title="Fruit List" badge-title="new"></ListTitle>
    <ul class="list-group">
      <ListItem v-for="(fruit,index) in fruits" :key="index" :list-text="fruit" :current-index="index" @toParent="run"></ListItem>
      <!-- <ListItem list-text="orange" @toParent="run"></ListItem>
      <ListItem list-text="mango" @toParent="run"></ListItem> -->
    </ul>
  </div>
</template>

<script>
  import ListTitle from "@/components/ListTitle";
  import ListItem from "@/components/ListItem";

  export default {
    name : "App",
    components: {ListItem, ListTitle},
    data() {
      return {
        fruits: ["apple","orange","mango"]
      }
    },
    methods:{
      run(x){
        this.fruits.splice(x,1);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>