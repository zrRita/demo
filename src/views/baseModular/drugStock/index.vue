<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="药品名称：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="药品编码：">
                <el-input placeholder="请输入"></el-input>
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
                      打印条码
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
          >
          </el-table-column>
          <el-table-column
            prop="drugName"
            label="药品名称"
          >
          </el-table-column>
          <el-table-column
            prop="eCode"
            label="助记码"
          >
          </el-table-column>
          <el-table-column
            prop="drugCode"
            label="药品编码">
          </el-table-column>
          <el-table-column
            prop="count"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="unit"
            label="单位">
          </el-table-column>
          <el-table-column
            prop="specialDecoction"
            label="特煎方式">
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
      tableData3: [{
        drugName: '山姜',
        eCode: '123',
        drugCode: '012354122',
        count: '300',
        unit: '公斤',
        specialDecoction: '',
        isOpen: '启用'
      }, {
        drugName: '金银花',
        eCode: '4334',
        drugCode: '5346547657',
        count: '500',
        unit: '公斤',
        specialDecoction: '',
        isOpen: '启用'
      }, {
        drugName: '山药',
        eCode: '23423',
        drugCode: '43655465',
        count: '350',
        unit: '公斤',
        specialDecoction: '',
        isOpen: '启用'
      }, {
        drugName: '薄荷',
        eCode: '31232',
        drugCode: '56565767',
        count: '500',
        unit: '公斤',
        specialDecoction: '',
        isOpen: '启用'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style scoped>

</style>
