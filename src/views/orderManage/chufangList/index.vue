<template>
  <div class="chufang-list">
    <div class="list-normal">
      <el-form label-position="right" label-width="110px" >
        <el-row>
          <el-col :span="6">
            <el-form-item label="时间类型：">
              <el-select v-model="timeType" style="width: 100% !important;" >
                <el-option label="开单时间" value="0"></el-option>
                <el-option label="受理时间" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="门诊/住院：">
              <el-select v-model="treatmentType" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="门诊" value="1"></el-option>
                <el-option label="住院" value="2"></el-option>
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
            <el-form-item label="审核状态：">
              <el-select v-model="checkState" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="已审核" value="1"></el-option>
                <el-option label="未审核" value="2"></el-option>
              </el-select>
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
            <el-form-item label="流程状态：">
              <el-select v-model="flowState" style="width: 100% !important;">
                <el-option label="全部" value="0"></el-option>
                <el-option label="已结束煎煮" value="1"></el-option>
                <el-option label="已结束包装" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="配方录入状态：">
              <el-select v-model="inputState" style="width: 100% !important;">
                <el-option label="全部" value="0"></el-option>
                <el-option label="已录入" value="1"></el-option>
                <el-option label="未录入" value="2"></el-option>
              </el-select>
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
            <el-form-item label="结算方：">
              <el-select v-model="balance" style="width: 100% !important;" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="结算方1" value="1"></el-option>
                <el-option label="结算方2" value="2"></el-option>
                <el-option label="结算方3" value="3"></el-option>
                <el-option label="结算方4" value="4"></el-option>
              </el-select>
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
                  <el-select v-model="planePrint" style="width: 120px!important;">
                    <el-option label="打印面单明细" value="1"></el-option>
                    <el-option label="打印面单送货单" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-select v-model="gaofangPrint" style="width: 120px!important;">
                    <el-option label="打印膏方加工单" value="1"></el-option>
                    <el-option label="打印膏方明细" value="2"></el-option>
                    <el-option label="打印膏方送货单" value="3"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="list-normal-btn-right" style="text-align: right">
                <el-form-item>
                  <el-button >
                    查询
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button >
                    重置
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button >
                    新增
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button disabled>
                    审核
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-button disabled>
                    反审核
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-select v-model="chufangList" style="width: 120px!important;">
                    <el-option label="处方1" value="1"></el-option>
                    <el-option label="处方2" value="2"></el-option>
                    <el-option label="处方3" value="3"></el-option>
                  </el-select>
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
          width="40">
        </el-table-column>
        <el-table-column
          prop="chufangNo"
          label="系统处方号"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="hospitalNo"
          label="医院处方号"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="开单时间"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          label="受理时间"

          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.dealDate }}</template>
        </el-table-column>
        <el-table-column
          prop="hospital"
          label="医院"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="count"
          label="贴数"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="decoctingStyle"
          label="煎药方式"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="shipping"
          label="配送方式"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="oddNo"
          label="物流单号"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="flowState"
          label="流程状态"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="checkState"
          label="审核状态"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="printState"
          label="打印状态"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="otherPack"
          label="另包"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="invoiceNo"
          label="发票号"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="outpatientNo"
          label="门诊号"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="total"
          label="总包数"

          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="checkName"
          label="审方人"
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
      timeType: '开单时间',
      treatmentType: '全部',
      shippingCo: '全部',
      checkState: '全部',
      startTime: '',
      endTime: '',
      flowState: '全部',
      inputState: '全部',
      hospital: '全部',
      decocting: '全部',
      balance: '全部',
      gaofangPrint: '膏方打印',
      planePrint: '面单打印',
      chufangPrint: '处方打印',
      chufangList: '处方清单',
      tableData3: [{
        chufangNo: '00000001',
        hospitalNo: '05123654',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        hospital: '南京第一人民医院',
        name: '张三',
        count: 4,
        decoctingStyle: '代煎',
        shipping: '到医院',
        oddNo: '',
        flowState: '已结束煎煮',
        checkState: '已审核',
        printState: '未打印',
        otherPack: 0,
        invoiceNo: '',
        outpatientNo: '',
        total: 17,
        checkName: '李医生'
      }, {
        chufangNo: '00000001',
        hospitalNo: '05123654',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        hospital: '南京第一人民医院',
        name: '张三',
        count: 4,
        decoctingStyle: '代煎',
        shipping: '顺丰',
        oddNo: '123456789',
        flowState: '已结束煎煮',
        checkState: '已审核',
        printState: '未打印',
        otherPack: 0,
        invoiceNo: '',
        outpatientNo: '',
        total: 17,
        checkName: '李医生'
      }, {
        chufangNo: '00000001',
        hospitalNo: '05123654',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        hospital: '南京第一人民医院',
        name: '张三',
        count: 4,
        decoctingStyle: '代煎',
        shipping: '到医院',
        oddNo: '',
        flowState: '已结束煎煮',
        checkState: '已审核',
        printState: '未打印',
        otherPack: 0,
        invoiceNo: '',
        outpatientNo: '',
        total: 17,
        checkName: '李医生'
      }, {
        chufangNo: '00000001',
        hospitalNo: '05123654',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        hospital: '南京第一人民医院',
        name: '张三',
        count: 4,
        decoctingStyle: '代煎',
        shipping: '到医院',
        oddNo: '',
        flowState: '已结束煎煮',
        checkState: '已审核',
        printState: '未打印',
        otherPack: 0,
        invoiceNo: '',
        outpatientNo: '',
        total: 17,
        checkName: '李医生'
      }, {
        chufangNo: '00000001',
        hospitalNo: '05123654',
        date: '2017-05-03',
        dealDate: '2017-05-04',
        hospital: '南京第一人民医院',
        name: '张三',
        count: 4,
        decoctingStyle: '代煎',
        shipping: '到医院',
        oddNo: '',
        flowState: '已结束煎煮',
        checkState: '已审核',
        printState: '未打印',
        otherPack: 0,
        invoiceNo: '',
        outpatientNo: '',
        total: 17,
        checkName: '李医生'
      }],
      multipleSelection: []
    }
  }
}
</script>
<style scoped>

</style>
