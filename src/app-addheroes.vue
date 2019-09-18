<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入姓名"
          v-model="formData.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入性别"
          v-model="formData.sex"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">年龄：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入年龄"
          v-model="formData.age"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">别名：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入别名"
          v-model="formData.spec"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">属国：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入属国"
          v-model="formData.form"
        />
      </div>
      <button type="submit" class="btn btn-success" @click="addItem">添加</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        age: "",
        sex: "",
        spec: "",
        form: ""
      }
    };
  },
  methods: {
    addItem() {
      if (
        this.formData.name &&
        this.formData.age &&
        this.formData.sex &&
        this.formData.spec &&
        this.formData.form
      ) {
        this.$http({
          url: "/heroes",
          method: "post",
          data: this.formData
        }).then(returl => {
          this.$router.push("/heroes");
        });
      } else {
        alert("胖虎，你可长点心吧！！");
      }
    }
  }
};
</script>

<style>
</style>