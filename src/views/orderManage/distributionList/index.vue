<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="医院名称：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="医院编号：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="姓名：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="物流单号：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="配送公司：">
                <el-select v-model="shippingCo" style="width: 100% !important;" placeholder="全部">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="顺丰" value="1"></el-option>
                  <el-option label="邮政" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="配送状态：">
                <el-select v-model="shippingState" style="width: 100% !important;">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label='已配送' value="1"></el-option>
                  <el-option label="待配送" value="2"></el-option>
                  <el-option label="配送中" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>

          <div class="list-normal-btn-group">
            <el-row>
              <el-col :span="24">
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
                      新增
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
            prop="shippingCo"
            label="配送公司"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="oddNo"
            label="物流单号"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="shippingState"
            label="配送状态"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="shippingTip"
            label="物流信息"
            show-overflow-tooltip>
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
      shippingState: '全部',
      shippingCo: '全部',
      tableData3: [{
        chufangNo: '00000001',
        hospitalNo: '05123654',
        hospital: '南京第一人民医院',
        name: '张三',
        count: 4,
        shippingCo: '顺丰',
        oddNo: '1524635210',
        shippingState: '已配送',
        shippingTip: '已送达',
        tip: ''
      }, {
        chufangNo: '00000001',
        hospitalNo: '05123654',
        hospital: '熊猫医院',
        name: '李四',
        count: 13,
        shippingCo: '邮政',
        oddNo: '1524635210',
        shippingState: '配送中',
        shippingTip: '发往南京',
        tip: ''
      }, {
        chufangNo: '00000001',
        hospitalNo: '05123654',
        hospital: '杭州第一医院',
        name: '王二',
        count: 6,
        shippingCo: '顺丰',
        oddNo: '1524635210',
        shippingState: '已配送',
        shippingTip: '已送达',
        tip: ''
      }]
    }
  }
}
</script>

<style scoped>

</style>
