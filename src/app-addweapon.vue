<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加武器</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">拥有者：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入拥有者"
          v-model="formData.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">武器：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入武器"
          v-model="formData.wq"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">绝招：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入绝招"
          v-model="formData.jz"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">必杀技：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入必杀技"
          v-model="formData.bsj"
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
        wq: "",
        jz: "",
        bsj: ""
      }
    };
  },
  methods: {
    addItem() {
      if (
        this.formData.name &&
        this.formData.wq &&
        this.formData.jz &&
        this.formData.bsj
      ) {
        this.$http({
          url: "/weapon",
          method: "post",
          data: this.formData
        }).then(returl => {
          this.$router.push("/weapon");
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