<template>
  <div class="order-err">
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
          </el-col>
          <el-col :span="6">
            <el-form-item label="结束时间：">
              <el-date-picker
                v-model="endTime"
                type="datetime"
                placeholder="选择结束时间" style="width:100%!important;" format="yyyy-MM-dd HH:mm">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="异常类型：">
              <el-select v-model="errorType" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="配药" value="1"></el-option>
                <el-option label="复核" value="2"></el-option>
                <el-option label="浸泡" value="3"></el-option>
                <el-option label="煎煮" value="4"></el-option>
                <el-option label="包装" value="5"></el-option>
                <el-option label="配送" value="6"></el-option>
                <el-option label="其他" value="7"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="处理状态：">
              <el-select v-model="dealState" style="width: 100% !important;">
                <el-option label="全部" value="0"></el-option>
                <el-option label="已处理" value="1"></el-option>
                <el-option label="未处理" value="2"></el-option>
              </el-select>
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
                  <el-button >
                    <i class="el-icon-plus"></i>
                    添加异常
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button disabled>
                    <i class="el-icon-edit-outline"></i>
                    处理异常
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button >
                    导出
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
          label="创建时间">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="chufangNo"
          label="系统处方号">
        </el-table-column>
        <el-table-column
          prop="createName"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="errorType"
          label="异常类型">
        </el-table-column>
        <el-table-column
          prop="errorDesc"
          label="异常描述"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="liable"
          label="责任人">
        </el-table-column>
        <el-table-column
          label="处理时间">
          <template slot-scope="scope">{{ scope.row.dealDate }}</template>
        </el-table-column>
        <el-table-column
          prop="dealState"
          label="处理状态">
        </el-table-column>
        <el-table-column
          prop="dealName"
          label="处理人">
        </el-table-column>
        <el-table-column
          prop="dealResult"
          label="处理结果">
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
      errorType: '全部',
      dealState: '全部',
      tableData3: [{
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }, {
        chufangNo: '00000001',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        errorType: '包装',
        dealState: '已处理',
        dealResult: '处理完成',
        createName: '王小虎',
        dealName: '王医生',
        liable: '李医生',
        errorDesc: '123'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style scoped>

</style>
