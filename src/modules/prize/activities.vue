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
              <el-form>
                <el-item><span>活动状态：</span></el-item>
                <el-select v-model="value" placeholder="请选择活动状态">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-button type="primary" size="small">搜索</el-button>
                <el-button size="small">重置</el-button>
              </el-form>
              <br>
              <el-button type="primary" @click="addActivities">
                添加活动
              </el-button>
            </div>
            <br>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="name"
                label="活动名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="startDate"
                label="开始日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="endDate"
                label="结束日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="status"
                label="结束状态"
                width="120">
              </el-table-column>
              <el-table-column
                prop="condition"
                label="抽奖条件"
                width="120">
              </el-table-column>
              <el-table-column
                prop="score"
                label="签到送积分"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作">
                <template slot-scope="scope">
                  <el-button @click="show(scope)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small" @click="editUser(scope)">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>

            <!--添加活动-->
            <el-dialog
              :title="title"
              :visible.sync="editDialog"
              :close-on-press-escape="false"
              :before-close="clearData" :close-on-click-modal="false"
            >
              <el-form :model="tempData" ref="tempData" :rules="rulesValidate">
                <el-form-item label="活动名称：" :label-width="formLabelWidth" prop="name" style="text-align: left">
                  <el-input v-model="tempData.name" style="width: 520px"></el-input>
                </el-form-item>
                <el-form-item label="活动日期：" :label-width="formLabelWidth" prop="date" style="text-align: left">
                  <el-date-picker
                    v-model="tempData.date"
                    type="daterange"
                    style="width: 520px"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="抽奖条件：" :label-width="formLabelWidth" prop="condition" style="text-align: left">
                  <span>累计签到大于等于</span>
                  <el-input-number v-model="tempData.condition" @change="handleChange" :min="1"  label="描述文字"></el-input-number>
                  <span>天</span>
                </el-form-item>
                <el-form-item label="签到积分：" :label-width="formLabelWidth" prop="type" style="text-align: left">
                  <span>最小值：</span>
                  <el-input-number v-model="tempData.score" @change="handleChange" :min="1"  label="描述文字"></el-input-number>
                  &#12288;&#12288;
                  <span>最大值：</span>
                  <el-input-number v-model="tempData.score" @change="handleChange" :min="1"  label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="描述：" :label-width="formLabelWidth" prop="description" style="text-align: left">

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
      addActivities() {
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
        options : [
          {
            value: '选项1',
            label: '未开始'
          },
          {
            value: '选项2',
            label: '进行中'
          },
          {
            value: '选项3',
            label: '已结束奖品已入库'
          },
          {
            value: '选项4',
            label: '已结束奖品未入库'
          },
          {
            value: '选项5',
            label: '已删除'
          }
        ],
        tableData : [
          {
            name:'a',
            startDate:'2018-6-25',
            endDate:'2018-6-25',
            status:'已删除',
            condition: '累计签到10天',
            score: '2-5',
            description: ''
          },
          {
            name:'a',
            startDate:'2018-6-25',
            endDate:'2018-6-25',
            status:'已删除',
            condition: '累计签到10天',
            score: '2-5',
            description: ''
          },
          {
            name:'a',
            startDate:'2018-6-25',
            endDate:'2018-6-25',
            status:'已删除',
            condition: '累计签到10天',
            score: '2-5',
            description: ''
          },
          {
            name:'a',
            startDate:'2018-6-25',
            endDate:'2018-6-25',
            status:'已删除',
            condition: '累计签到10天',
            score: '2-5',
            description: ''
          },
          {
            name:'a',
            startDate:'2018-6-25',
            endDate:'2018-6-25',
            status:'已删除',
            condition: '累计签到10天',
            score: '2-5',
            description: ''
          },
          {
            name:'a',
            startDate:'2018-6-25',
            endDate:'2018-6-25',
            status:'已删除',
            condition: '累计签到10天',
            score: '2-5',
            description: ''
          },
        ],
        formLabelWidth : '100px',
        rulesValidate : {

        },
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
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

