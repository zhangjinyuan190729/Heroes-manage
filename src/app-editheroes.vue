<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="修改姓名"
          v-model="formData.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改性别"
          v-model="formData.sex"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">年龄：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改年龄"
          v-model="formData.age"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">别名：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改别名"
          v-model="formData.spec"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">属国：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改属国"
          v-model="formData.form"
        />
      </div>
      <button type="submit" class="btn btn-success" @click="Edit">修改</button>
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
  created() {
    this.$http({
      url: `/heroes/${this.$route.params.id}`
    }).then(retult => {
      this.formData = retult.data;
    });
  },
  methods: {
    Edit() {
      this.$http({
        url: `/heroes/${this.$route.params.id}`,
        method: "put",
        data: this.formData
      }).then(result => {
        this.$router.push("/heroes");
      });
    }
  }
};
</script>

<style>
</style>