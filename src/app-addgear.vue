<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加装备</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">装备名称：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入装备名称"
          v-model="formData.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">属性：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入属性"
          v-model="formData.pro"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">附加属性：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入附加属性"
          v-model="formData.sub"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">获取等级：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入获取等级"
          v-model="formData.asl"
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
        pro: "",
        sub: "",
        asl: ""
      }
    };
  },
  methods: {
    addItem() {
      if (
        this.formData.name &&
        this.formData.pro &&
        this.formData.sub &&
        this.formData.asl
      ) {
        this.$http({
          url: "/gear",
          method: "post",
          data: this.formData
        }).then(returl => {
          this.$router.push("/gear");
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