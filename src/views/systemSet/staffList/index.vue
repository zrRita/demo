<template>
    <div>
      <div class="list-normal">
        <el-form label-position="right" label-width="110px" >
          <el-row>
            <el-col :span="6">
              <el-form-item label="员工姓名：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="员工工号：">
                <el-input placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="员工角色：">
                <el-select v-model="jiaose" style="width: 100% !important;" placeholder="全部">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="admin" value="1"></el-option>
                  <el-option label="煎药员" value="2"></el-option>
                  <el-option label="浸泡员" value="2"></el-option>
                  <el-option label="包装员" value="2"></el-option>
                  <el-option label="审方员" value="2"></el-option>
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
            prop="staffName"
            label="员工姓名"
          >
          </el-table-column>
          <el-table-column
            prop="staffNo"
            label="员工工号"
          >
          </el-table-column>
          <el-table-column
            prop="role"
            label="员工角色">
          </el-table-column>
          <el-table-column
            prop="isOp"
            label="是否为操作员">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="电话">
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
        staffName: '张三',
        staffNo: '987631',
        role: '煎药员',
        isOp: '是',
        tel: '',
        isOpen: '启用'
      }, {
        staffName: '李四',
        staffNo: '987639',
        role: 'admin',
        isOp: '是',
        tel: '123',
        isOpen: '启用'
      }, {
        staffName: '王二',
        staffNo: '987637',
        role: '超级管理员',
        isOp: '是',
        tel: '1245678',
        isOpen: '启用'
      }, {
        staffName: '王二',
        staffNo: '987637',
        role: '审方员',
        isOp: '是',
        tel: '',
        isOpen: '启用'
      }, {
        staffName: '王二',
        staffNo: '987637',
        role: '超级管理员',
        isOp: '是',
        tel: '',
        isOpen: '启用'
      }, {
        staffName: '小飞',
        staffNo: '987625',
        role: '煎药员',
        isOp: '是',
        tel: '15896453210',
        isOpen: '启用'

      }],
      multipleSelection: []
    }
  }
}
</script>

<style scoped>

</style>
