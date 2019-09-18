<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改装备</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">装备名称：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="修改装备名称"
          v-model="formData.name"
        />
        <!-- 做到这里了 -->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">属性：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改属性"
          v-model="formData.pro"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">附加：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改附加属性"
          v-model="formData.sub"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">获取等级：</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="修改获取等级"
          v-model="formData.asl"
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
        pro: "",
        sub: "",
        asl: ""
      }
    };
  },
  created() {
    this.$http({
      url: `/gear/${this.$route.params.id}`
    }).then(retult => {
      this.formData = retult.data;
    });
  },
  methods: {
    Edit() {
      this.$http({
        url: `/gear/${this.$route.params.id}`,
        method: "put",
        data: this.formData
      }).then(result => {
        this.$router.push("/gear");
      });
    }
  }
};
</script>

<style>
</style>