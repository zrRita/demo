<template>
  <div class="order-check">
    <div class="list-normal">
      <el-form label-position="right" label-width="110px" >
        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间：">
              <el-date-picker
                v-model="startTime"
                type="datetime"
                placeholder="选择开始时间" style="width:100%!important;" format="yyyy-MM-dd HH:mm">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="医院：">
              <el-select v-model="hospital" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="熊猫医院" value="1"></el-option>
                <el-option label="仁和医院" value="2"></el-option>
                <el-option label="南京第一人民医院" value="3"></el-option>
                <el-option label="杭州第一医院" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="医生：">
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
            <el-form-item label="系统处方号：">
              <el-input placeholder="请输入"></el-input>
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
          </el-col>
          <el-col :span="6">
            <el-form-item label="审方状态：">
              <el-select v-model="prescriptionCheck" style="width: 100% !important;" placeholder="请输入">
                <el-option label="未审方" value="1"></el-option>
                <el-option label="已审方" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="医院处方号:">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="预审方状态：">
              <el-select v-model="prePrescriptionCheck" style="width: 100% !important;">
                <el-option label="全部" value="0"></el-option>
                <el-option label="正常" value="1"></el-option>
                <el-option label="配伍禁忌" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="姓名：">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="list-normal-btn-group">
          <el-row>
            <el-col :span="12" :offset="12">
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
                    <i class="el-icon-check"></i>
                    审方
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
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="chufangNo"
          label="系统处方号">
        </el-table-column>
        <el-table-column
          label="开单时间">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="prescriptionCheck"
          label="审方状态">
        </el-table-column>
        <el-table-column
          prop="prePrescriptionCheck"
          label="预审方状态">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="hospital"
          label="医院"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="hospitalNo"
          label="医院处方号">
        </el-table-column>
        <el-table-column
          prop="drName"
          label="医生">
        </el-table-column>
        <el-table-column
          prop="decoctingStyle"
          label="煎药方式">
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
      prescriptionCheck: '未审方',
      prePrescriptionCheck: '全部',
      tableData3: [{
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        prescriptionCheck: '已审方',
        prePrescriptionCheck: '正常',
        name: '王小虎',
        hospital: '熊猫医院',
        hospitalNo: '056423101',
        drName: '王医生',
        decoctingStyle: '代煎',
        tip: ''
      }],
      multipleSelection: []
    }
  }
}
</script>
<style scoped>

</style>
