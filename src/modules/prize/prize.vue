<template>
    <div>
      <div id="menu">
        <div style="display: flex;height: 100vh; background-color: lightgoldenrodyellow">
          <el-menu :default-active="$route.path" :router="true"
                   style="min-width: 180px; background-color: antiquewhite"
                    class="el-menu-vertical-demo">
            <el-menu-item index="/prize/prize">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">奖品管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/prize/activities">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">活动管理</span>
              </template>
            </el-menu-item>
          </el-menu>
          <div class="content-left">
            <router-view class="content-view"></router-view>
          </div>
          <!--列表展示-->
          <div id="table" class="big">
            <div>
              <div style="text-align: left; margin-top: 20px">
                <el-button type="primary" @click="addPrize">
                  添加奖品
                </el-button>
              </div>
              <br>
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="icon"
                  label="奖品图标"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="奖品名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="库存"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="奖品类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="deleteData(scope)" type="text" size="small">删除</el-button>
                    <el-button type="text" size="small" @click="editUser(scope)">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>

              <!--修改奖品对话框-->
              <el-dialog
                :title="title1"
                :visible.sync="editDialog"
                :close-on-press-escape="false"
                :before-close="clearData" :close-on-click-modal="false"
              >
                <el-form :model="tempData" ref="tempData" :rules="rulesValidate">
                  <el-form-item label="图标" :label-width="formLabelWidth" prop="icon">
                    <el-input v-model="tempData.icon"></el-input>
                  </el-form-item>
                  <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="tempData.name"></el-input>
                  </el-form-item>
                  <el-form-item label="库存" :label-width="formLabelWidth" prop="count">
                    <el-input v-model="tempData.count"></el-input>
                  </el-form-item>
                  <el-form-item label="奖品类型" :label-width="formLabelWidth" prop="type">
                    <el-input v-model="tempData.type"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer">
                  <el-button @click="clearData">取 消</el-button>
                  <el-button type="primary" @click="clickSure">确 定</el-button>
                </div>
              </el-dialog>
              <!--添加奖品-->
              <el-dialog
                :title="title2"
                :visible.sync="editDialog"
                :close-on-press-escape="false"
                :before-close="clearData" :close-on-click-modal="false"
              >
                <el-form :model="tempData" ref="tempData" :rules="rulesValidate">
                  <el-form-item label="图标" :label-width="formLabelWidth" prop="icon">
                    <el-input v-model="tempData.icon"></el-input>
                  </el-form-item>
                  <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="tempData.name"></el-input>
                  </el-form-item>
                  <el-form-item label="库存" :label-width="formLabelWidth" prop="count">
                    <el-input v-model="tempData.count"></el-input>
                  </el-form-item>
                  <el-form-item label="奖品类型" :label-width="formLabelWidth" prop="type">
                    <el-input v-model="tempData.type"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer">
                  <el-button @click="clearData">取 消</el-button>
                  <el-button type="primary" @click="clickSure">确 定</el-button>
                </div>
              </el-dialog>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "prize",
        methods : {
          deleteData(scope) {
            this.tableData.splice(scope.$index, 1);
            console.log(this.tableData)
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          //弹出框回显
          editUser(scope) {
            let _this = this;
            console.log(scope.$index)
            _this.tempData = scope.row;
            _this.editDialog = true;
          },

          //确定修改
          clickSure(scope) {
            let _this = this;
            _this.tableData[scope.$index] = _this.tempData
            _this.editDialog = false
          },
          clearData() {
            this.editDialog = false
          },
          addPrize() {
            this.editDialog = true;
          }
        },
        data() {
          return {
            editDialog: false,
            title1: '修改奖品',
            title2: '添加奖品',
            tempData: {
              icon : '',
              name : '',
              count : '',
              type : '',
            },
            tableData : [
              {
                icon:'a',
                name:'iphone x',
                count:'20',
                type:'商品',
              },
              {
                icon:'b',
                name:'奔驰S600',
                count:'30',
                type:'商品',
              },
              {
                icon:'c',
                name:'surface book 2T',
                count:'200',
                type:'商品',
              },
              {
                icon:'d',
                name:'百达翡丽手表',
                count:'20',
                type:'商品',
              },
              {
                icon:'e',
                name:'宾利轿车',
                count:'30',
                type:'商品',
              },
              {
                icon:'f',
                name:'劳斯莱斯幻影',
                count:'20',
                type:'商品',
              }
            ],
            formLabelWidth : '80px',
            rulesValidate : {

            }
          }
        }
    }
</script>

<style scoped>
  /*#menu {*/
    /*width: 23%;*/
  /*}*/
  #table {
    width: 90%;
    margin-left: 10px;
  }
</style>
