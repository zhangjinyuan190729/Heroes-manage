<template>
  <div>
    <h2 class="sub-header">英雄管理</h2>
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>别名</th>
            <th>属国</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>{{item.spec}}</td>
            <td>{{item.form}}</td>
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
        url: "/heroes"
      }).then(retult => {
        this.list = retult.data;
      });
    },
    Delitem(id) {
      if (confirm("您确定不要我了吗？呜呜呜 ~ ~ ~！！")) {
        this.$http({
          url: `/heroes/${id}`,
          method: "delete"
        }).then(retult => {
          this.loadData();
        });
      }
    },
    editItem(id) {
      this.$router.push(`heroes/edit/${id}`);
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>