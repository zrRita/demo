<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="医院名称：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="医院编号：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
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
            <el-col :span="6">
              <el-form-item label="启用状态：">
                <el-select v-model="isOpen" style="width: 100% !important;" placeholder="启用">
                  <el-option label="启用" value="1"></el-option>
                  <el-option label="停用" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <div class="list-normal-btn-group">
            <el-row>
              <el-col :span="24" >
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
                    <el-button disabled>
                      <i class="el-icon-check"></i>
                      启用
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button disabled>
                      <i class="el-icon-close"></i>
                      停用
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
          >
          </el-table-column>
          <el-table-column
            prop="hospitalName"
            label="医院名称"
          >
          </el-table-column>
          <el-table-column
            prop="eHospitalName"
            label="医院简称"
          >
          </el-table-column>
          <el-table-column
            prop="hospitalCode"
            label="医院编号">
          </el-table-column>
          <el-table-column
            prop="balance"
            label="结算方">
          </el-table-column>
          <el-table-column
            prop="priceType"
            label="价格类型">
          </el-table-column>
          <el-table-column
            prop="isOpen"
            label="启用状态">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: '启用',
      balance: '全部',
      tableData3: [{
        hospitalName: '熊猫医院',
        eHospitalName: '熊猫',
        hospitalCode: '5346547657',
        balance: '结算方1',
        priceType: '价格1',
        isOpen: '启用'
      }, {
        hospitalName: '南京第一人民医院',
        eHospitalName: '南京第一人民',
        hospitalCode: '534456123',
        balance: '结算方2',
        priceType: '价格2',
        isOpen: '启用'
      }, {
        hospitalName: '杭州第一医院',
        eHospitalName: '杭州一',
        hospitalCode: '5346547657',
        balance: '结算方3',
        priceType: '价格1',
        isOpen: '启用'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style scoped>

</style>
