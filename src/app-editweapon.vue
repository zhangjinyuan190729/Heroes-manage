<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改武器</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">拥有者：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="修改拥有者"
          v-model="formData.name"
        />
        <!-- 做到这里了 -->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">武器：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改武器"
          v-model="formData.wq"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">绝招：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改绝招"
          v-model="formData.jz"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">必杀技：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改必杀技"
          v-model="formData.bsj"
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
        wq: "",
        jz: "",
        bsj: ""
      }
    };
  },
  created() {
    this.$http({
      url: `/weapon/${this.$route.params.id}`
    }).then(retult => {
      this.formData = retult.data;
    });
  },
  methods: {
    Edit() {
      this.$http({
        url: `/weapon/${this.$route.params.id}`,
        method: "put",
        data: this.formData
      }).then(result => {
        this.$router.push("/weapon");
      });
    }
  }
};
</script>

<style>
</style>