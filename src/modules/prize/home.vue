<template>
  <div id="menu">
    <div style="display: flex;height: 100vh; background-color: lightgoldenrodyellow">
      <el-menu :default-active="$route.path" :router="true"
               style="min-width: 180px; background-color: antiquewhite"
               :collapse="isCollapse" class="el-menu-vertical-demo">
        <el-menu-item index="/prize/prize">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">奖品管理</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/activities">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">活动管理</span>
          </template>
        </el-menu-item>
      </el-menu>
      <div class="content-left">
        <router-view class="content-view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
