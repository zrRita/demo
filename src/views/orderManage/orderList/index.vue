<template>
  <div class="order-list">
    <div class="list-normal">
      <el-form label-position="right" label-width="100px" >
        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间：">
              <el-date-picker
                v-model="startTime"
                type="datetime"
                placeholder="选择开始时间" style="width:100%!important;" format="yyyy-MM-dd HH:mm">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="姓名：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="医院处方号：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="病区：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="结束时间：">
              <el-date-picker
                v-model="endTime"
                type="datetime"
                placeholder="选择结束时间" style="width:100%!important;" format="yyyy-MM-dd HH:mm">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="接收状态：">
              <el-select v-model="acceptState" style="width: 100% !important;">
                <el-option label="全部" value="0"></el-option>
                <el-option label="未接收" value="1"></el-option>
                <el-option label="已接收" value="2"></el-option>
                <el-option label="待接收" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="序号：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="医院：">
              <el-select v-model="hospital" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="熊猫医院" value="1"></el-option>
                <el-option label="仁和医院" value="2"></el-option>
                <el-option label="南京第一人民医院" value="3"></el-option>
                <el-option label="杭州第一医院" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="煎药方式：">
              <el-select v-model="decocting" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="自煎" value="1"></el-option>
                <el-option label="代煎" value="2"></el-option>
                <el-option label="膏方自煎" value="3"></el-option>
                <el-option label="膏方代煎" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="配送公司：">
              <el-select v-model="shippingCo" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="顺丰" value="1"></el-option>
                <el-option label="邮政" value="2"></el-option>
                <el-option label="到医院" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="医院编号：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="打印状态：">
              <el-select v-model="printState" style="width: 100% !important;">
                <el-option label="全部" value="0"></el-option>
                <el-option label="已打印" value="1"></el-option>
                <el-option label="待打印" value="2"></el-option>
                <el-option label="打印中" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="配送点：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="list-normal-btn-group">
          <el-row>
            <el-col :span="12">
              <div class="list-normal-btn-left" style="text-align: left">
                <el-form-item>
                  <el-select v-model="chufangPrint" style="width: 120px!important;">
                    <el-option label="打印处方" value="1"></el-option>
                    <el-option label="打印标签" value="2"></el-option>
                    <el-option label="打印流程单" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-select v-model="gaofangPrint" style="width: 120px!important;">
                    <el-option label="打印膏方加工单" value="1"></el-option>
                    <el-option label="打印膏方明细" value="2"></el-option>
                    <el-option label="打印膏方送货单" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button >组合打印</el-button>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="list-normal-btn-right" style="text-align: right">
                <el-form-item>
                  <el-button >
                    <i class="el-icon-search"></i>
                    查询
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button >
                    <i class="el-icon-refresh"></i>
                    重置
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button disabled>
                    批量接收
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button disabled>
                    <i class="el-icon-delete"></i>
                    作废
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button >
                    <i class="el-icon-news"></i>
                    导入
                  </el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>

    <div class="order-list" style="text-align: left">
      <el-table
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          prop="chufangNo"
          label="处方号">
        </el-table-column>
        <el-table-column
          label="接收时间">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="count"
          label="贴数">
        </el-table-column>
        <el-table-column
          prop="drName"
          label="医生姓名">
        </el-table-column>
        <el-table-column
          prop="decoctingStyle"
          label="煎药方式">
        </el-table-column>
        <el-table-column
          prop="shipping"
          label="配送公司">
        </el-table-column>
        <el-table-column
          prop="tip"
          label="备注"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      acceptState: '未接收',
      hospital: '全部',
      decocting: '全部',
      shippingCo: '全部',
      printState: '全部',
      chufangPrint: '打印处方',
      gaofangPrint: '膏方打印',
      tableData3: [{
        date: '2017-05-03',
        chufangNo: '00000001',
        name: '王小虎',
        count: 30,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-05-02',
        chufangNo: '00000002',
        name: '张三',
        count: 20,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-05-04',
        chufangNo: '00000003',
        name: '李四',
        count: 15,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-05-01',
        chufangNo: '00000004',
        name: '王五',
        count: 13,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-05-08',
        chufangNo: '00000005',
        name: '王小天',
        count: 23,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-05-06',
        chufangNo: '00000006',
        name: '王小飞',
        count: 32,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-05-07',
        chufangNo: '00000007',
        name: '文小虎',
        count: 13,
        drName: '王医生',
        decoctingStyle: '代煎',
        shipping: '顺丰',
        tip: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style scoped>

</style>
