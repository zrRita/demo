<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="设备编号：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="运行状态：">
                <el-select v-model="working" style="width: 100% !important;" placeholder="全部">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="正常" value="1"></el-option>
                  <el-option label="使用中" value="2"></el-option>
                  <el-option label="维修中" value="3"></el-option>
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
                    <el-button disabled>
                      <i class="el-icon-document"></i>
                      打印条码
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
            prop="deviceNo"
            label="设备编号"
          >
          </el-table-column>
          <el-table-column
            prop="deviceType"
            label="设备类型"
          >
          </el-table-column>
          <el-table-column
            prop="workingState"
            label="运行状态">
          </el-table-column>
          <el-table-column
            prop="healthState"
            label="卫生状态">
          </el-table-column>
          <el-table-column
            prop="disinfectState"
            label="消毒状态">
          </el-table-column>
          <el-table-column
            label="最后巡检时间"
            show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.checkDate }}</template>
          </el-table-column>
          <el-table-column
            prop="checkPerson"
            label="巡检员">
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
      working: '全部',
      tableData3: [{
        deviceNo: '156423561',
        deviceType: '煎药机1',
        workingState: '正常',
        healthState: '合格',
        disinfectState: '合格',
        checkDate: '2017- 05- 06',
        checkPerson: '李四',
        isOpen: '启用'
      }, {
        deviceNo: '156456478',
        deviceType: '煎药机2',
        workingState: '使用中',
        healthState: '合格',
        disinfectState: '合格',
        checkDate: '2017- 05- 06',
        checkPerson: '李四',
        isOpen: '启用'
      }, {
        deviceNo: '1564245785',
        deviceType: '煎药机3',
        workingState: '维修中',
        healthState: '合格',
        disinfectState: '合格',
        checkDate: '2017- 05- 06',
        checkPerson: '李四',
        isOpen: '启用'
      }]
    }
  }
}
</script>

<style scoped>

</style>
