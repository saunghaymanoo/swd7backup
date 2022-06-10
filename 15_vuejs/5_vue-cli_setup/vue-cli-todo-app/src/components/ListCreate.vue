<template>
  <div class="form-row mb-3">
    <div class="col-10">
      <input type="text" v-model="newMessage" @keyup.enter="create()" class="form-control form-control-lg" placeholder="Say Something">
    </div>
    <div class="col-2">
      <button class="btn btn-primary btn-lg w-100" @click="create()">
        <i class="fas fa-plus-circle"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
name: "ListCreate",
  data() {
    return {
      newMessage: " "
    }
  },
  methods: {
    create() {
      this.$emit("create",this.newMessage)
      this.newMessage=""
    }
  },
}
</script>

<style scoped>

</style>