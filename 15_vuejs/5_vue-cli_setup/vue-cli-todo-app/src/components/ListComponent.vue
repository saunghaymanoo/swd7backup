<template>
  <li  @dblclick="isEdit=true" :class="['created list-group-item d-flex justify-content-between align-items-center',{'deleted':list.isDelete}]">
    <input v-if="isEdit" type="text" :v-model="list.message" @keyup.enter="isEdit = false" class="form-control form-control-lg" placeholder="Say Something">

    <div v-else class="custom-control custom-checkbox">
      <input :v-model="list.isDone" type="checkbox" :key="list.id" class="custom-control-input" :id="'customCheck'+list.id">
      <label :class="['custom-control-label',{'done':list.isDone}]" :for="'customCheck'+list.id">{{list.message}}</label>
    </div>
    <i class="fas fa-trash-alt text-primary" @click="[isDelete=true,deleteMessage(list.id)]"></i>
  </li>
</template>

<script>
export default {
  name: "ListComponent",
  props : {
    list:{
      type : Object,
      required :true
    }
  },
data() {
  return {
    isEdit:false,
    isDelete:false,
  }
},
  methods: {
    deleteMessage(x) {
      this.$emit("del",x)
    }
  },
}
</script>

<style scoped>

</style>