<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="结算方名称：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="价格类型：">
                <el-select v-model="priceType" style="width: 100% !important;" placeholder="全部">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="价格1" value="1"></el-option>
                  <el-option label="价格2" value="2"></el-option>
                  <el-option label="价格3" value="2"></el-option>
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
                      历史记录
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button disabled>
                      启用
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button disabled>
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
            prop="balanceName"
            label="结算方名称"
          >
          </el-table-column>
          <el-table-column
            prop="priceType"
            label="价格类型"
          >
          </el-table-column>
          <el-table-column
            prop="priceDiscount"
            label="价格扣率">
          </el-table-column>
          <el-table-column
            prop="priceOp"
            label="加工费">
          </el-table-column>
          <el-table-column
            prop="opDiscount"
            label="加工费扣率">
          </el-table-column>
          <el-table-column
            prop="isOpen"
            label="启用状态">
          </el-table-column>
          <el-table-column
            prop="tip"
            label="备注">
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
      tableData3: [{
        balanceName: '结算方1',
        priceType: '价格1',
        priceDiscount: '5',
        priceOp: '100',
        opDiscount: '10',
        isOpen: '启用',
        tip: ''
      }, {
        balanceName: '结算方2',
        priceType: '价格2',
        priceDiscount: '5',
        priceOp: '100',
        opDiscount: '10',
        isOpen: '启用',
        tip: ''
      }, {
        balanceName: '结算方3',
        priceType: '价格3',
        priceDiscount: '5',
        priceOp: '100',
        opDiscount: '10',
        isOpen: '启用',
        tip: ''
      }, {
        balanceName: '结算方4',
        priceType: '价格1',
        priceDiscount: '5',
        priceOp: '100',
        opDiscount: '10',
        isOpen: '启用',
        tip: ''
      }, {
        balanceName: '结算方5',
        priceType: '价格2',
        priceDiscount: '5',
        priceOp: '100',
        opDiscount: '10',
        isOpen: '启用',
        tip: ''
      }]
    }
  }
}
</script>

<style scoped>

</style>
