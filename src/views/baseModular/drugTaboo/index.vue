<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="药物名称：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="禁忌类别：">
                <el-select v-model="tabooType" style="width: 100% !important;" placeholder="全部">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="十八反" value="1"></el-option>
                  <el-option label="十九畏" value="2"></el-option>
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
                      <i class="el-icon-delete"></i>
                      删除
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
            prop="tabooName"
            label="禁忌药品名称"
            >
          </el-table-column>
          <el-table-column
            prop="tabooType"
            label="禁忌类别">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tabooType: '全部',
      tableData3: [{
        drugName: '山姜',
        tabooName: '山楂炭渣',
        tabooType: '十八反'
      }, {
        drugName: '山药',
        tabooName: '三七',
        tabooType: '十八反'
      }, {
        drugName: '三七',
        tabooName: '大黄',
        tabooType: '十八反'
      }, {
        drugName: '丁香花',
        tabooName: '三七12',
        tabooType: '十九畏'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style scoped>

</style>
