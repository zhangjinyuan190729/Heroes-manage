<template>
  <div>
    <h2 class="sub-header">武器管理</h2>
    <router-link class="btn btn-success" to="/weapon/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>拥有者</th>
            <th>武器</th>
            <th>绝招</th>
            <th>必杀技</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.wq}}</td>
            <td>{{item.jz}}</td>
            <td>{{item.bsj}}</td>
            <td>
              <a @click="editItem(item.id)">编辑</a> &nbsp;&nbsp;
              <a @click="Delitem(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    loadData() {
      this.$http({
        url: "/weapon"
      }).then(retult => {
        this.list = retult.data;
      });
    },
    Delitem(id) {
      if (confirm("您确定不要我了吗？呜呜呜 ~ ~ ~！！")) {
        this.$http({
          url: `/weapon/${id}`,
          method: "delete"
        }).then(retult => {
          this.loadData();
        });
      }
    },
    editItem(id) {
      this.$router.push(`weapon/edit/${id}`);
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>