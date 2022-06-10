
<template>
  <div>

    <i class="fas fa-home"></i>
    
    <h3>{{title}}</h3>
    <p>List Total = {{total}}</p>
    <p class="my-color">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in fugit consectetur architecto eligendi commodi aspernatur voluptatem quisquam totam aperiam magni iusto id perspiciatis quod hic accusantium ut minus animi?
    </p>
    <input type="text" v-model="newList" @keyup.enter="addList()">
    <ul>
      <li v-for="list in lists" :key="list">{{list}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
 
    name:"App",
    data() {
      return {
        title: "vue cli test",
        newList:"",
        lists:[],
      }
    },
   methods: {
     addList() {
       this.lists.push(this.newList);
       this.newList="";
     }
   },
   computed: {
     total() {
       return this.lists.length 
     }
   },
  }
</script>

<style>

</style>