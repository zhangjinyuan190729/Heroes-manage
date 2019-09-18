<template>
  <div>
    <h2 class="sub-header">装备管理</h2>
    <router-link class="btn btn-success" to="/gear/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>装备名称</th>
            <th>属性</th>
            <th>附加</th>
            <th>获取等级</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.pro}}</td>
            <td>{{item.sub}}</td>
            <td>{{item.asl}}</td>
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
        url: "/gear"
      }).then(retult => {
        this.list = retult.data;
      });
    },
    Delitem(id) {
      if (confirm("您确定不要我了吗？呜呜呜 ~ ~ ~！！")) {
        this.$http({
          url: `/gear/${id}`,
          method: "delete"
        }).then(retult => {
          this.loadData();
        });
      }
    },
    editItem(id) {
      this.$router.push(`gear/edit/${id}`);
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>