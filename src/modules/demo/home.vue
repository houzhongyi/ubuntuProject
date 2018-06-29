<template>
  <div>
   <div id="menu" class="big">
      <div style="margin-top: 10%">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>

      </div>
    </div>
    <div id="table" class="big">
      <div>
        <h1>列表详情</h1>
      </div>
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="deleteData(scope)" type="text" size="small">删除</el-button>
              <el-button type="text" size="small" @click="editUser(scope)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!--对话框-->
        <el-dialog
          :title="title"
          :visible.sync="editDialog"
          :close-on-press-escape="false"
          :before-close="clearData" :close-on-click-modal="false"
        >
          <el-form :model="tempData" ref="tempData" :rules="rulesValidate">
            <el-form-item label="日期" :label-width="formLabelWidth" prop="date">
              <el-input v-model="tempData.date"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
              <el-input v-model="tempData.name"></el-input>
            </el-form-item>
            <el-form-item label="省份" :label-width="formLabelWidth" prop="province">
              <el-input v-model="tempData.province"></el-input>
            </el-form-item>
            <el-form-item label="城市" :label-width="formLabelWidth" prop="city">
              <el-input v-model="tempData.city"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
              <el-input v-model="tempData.address"></el-input>
            </el-form-item>
            <el-form-item label="邮编" :label-width="formLabelWidth" prop="zip">
              <el-input v-model="tempData.zip"></el-input>
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
</template>

<script>
    export default {
      name: "home",
      methods: {
        deleteData(scope) {
          this.tableData.splice(scope.row, 1);
          console.log(this.tableData)
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        //弹出框回显
        editUser(scope) {
          let _this = this;
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
        }
      },

      data() {
        return {
          editDialog:false,
          index: '',
          title: '',
          tempData: {
            date: '',
            name: '',
            province: '',
            city: '',
            address: '',
            zip: ''
          },
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }],
          rulesValidate : {

          },
          formLabelWidth : '80px',
        }
      },
    }
</script>

<style scoped>
  #menu {
    width: 23%;
    /*height: 100%;*/
    /*overflow: hidden;*/
    /*position: relative;*/
  }
  #table {
    width: 77%;
    /*height: 100%;*/
    margin-top: 5%;
    margin-left: 0px;
    background: white;
  }
  .big {
    float: left
  }
  .tac {
    width: auto;
  }
</style>
