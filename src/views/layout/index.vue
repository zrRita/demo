<template>
  <div class="layout-container">
    <el-container>
      <el-header>
        <el-row >
          <el-col :span="12">
            <div class="logo">
              <img src="./imgs/logo.png" alt="">
              煎药管理系统
            </div>
          </el-col>
          <el-col :span="12" style="text-align: right" class="header-right">
            <div class="user-info">
              <img src="./imgs/user.png" alt="">
              <span class="user-name">admin</span>
            </div>
            <div class="passward-change">
              <img src="./imgs/change.png" alt="">
              <span >修改密码</span>
            </div>
            <div class="login-out">
              <img src="./imgs/login-out.png" alt="">
              <span>退出</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="container">
        <el-aside width="210px" height="100%">
          <el-row>
            <el-col :span="24">
              <el-menu
                :default-active="$route.meta.index"
                class="el-menu-vertical-demo drug-aside-menu"
                style="text-align: left"
                :unique-opened="isOnly"
              >
                <el-submenu index="1">
                  <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{order.name}}</span>
                  </template>
                  <el-menu-item v-for="item in order.routeList " :key="item.$index" :index="item.index" :class="[$route.path == item.path ? 'is-active' : '']" @click="menuSwitchRouter(item.path, item.name)">{{item.name}}</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{base.name}}</span>
                  </template>
                  <el-menu-item v-for="item in base.routeList " :key="item.$index" :index="item.index" :class="[$route.path == item.path ? 'is-active' : '']" @click="menuSwitchRouter(item.path, item.name)">{{item.name}}</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location-outline"></i>
                    <span>{{storage.name}}</span>
                  </template>
                  <el-menu-item v-for="item in storage.routeList " :key="item.$index" :index="item.index" :class="[$route.path == item.path ? 'is-active' : '']" @click="menuSwitchRouter(item.path, item.name)">{{item.name}}</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-news"></i>
                    <span>{{finance.name}}</span>
                  </template>
                  <el-menu-item v-for="item in finance.routeList " :key="item.$index" :index="item.index" :class="[$route.path == item.path ? 'is-active' : '']" @click="menuSwitchRouter(item.path, item.name)">{{item.name}}</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>{{set.name}}</span>
                  </template>
                  <el-menu-item v-for="item in set.routeList " :key="item.$index" :index="item.index" :class="[$route.path == item.path ? 'is-active' : '']" @click="menuSwitchRouter(item.path, item.name)">{{item.name}}</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <div class="router-title">
            <span>
              首页
            </span>
            <span v-for="(item, index) in routeList" :key="item.id" :class="[$route.path == item.path ? 'active' : ''] " @click="switchRouter(item.path)">
              {{item.name}}
              <i class="el-icon-close" @click.stop="routeDelete(index)"></i>
            </span>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default{
  data () {
    return {
      isOnly: true,
      routerCount: 1,
      hasRoute: false,
      self: this,
      order: {
        id: 1,
        name: '业务模块',
        routeList: [
          {id: 1, index: '1-1', name: '订单列表', path: '/orderList'},
          {id: 2, index: '1-2', name: '审方列表', path: '/orderCheck'},
          {id: 3, index: '1-3', name: '处方列表', path: '/chufangList'},
          {id: 4, index: '1-4', name: '异常列表', path: '/orderErr'},
          {id: 5, index: '1-5', name: '配送列表', path: '/distributionList'}
        ]
      },
      base: {
        id: 2,
        name: '基础模块',
        routeList: [
          {id: 1, index: '2-1', name: '药品库', path: '/drugStock'},
          {id: 2, index: '2-2', name: '配伍禁忌', path: '/drugTaboo'},
          {id: 3, index: '2-3', name: '药品关联', path: '/drugAssociation'},
          {id: 4, index: '2-4', name: '医院管理', path: '/hospitalManage'},
          {id: 5, index: '2-5', name: '设备管理', path: '/deviceManage'}
        ]
      },
      storage: {
        id: 3,
        name: '仓储模块',
        routeList: [
          {id: 1, index: '3-1', name: '库存查询', path: '/stockSearch'},
          {id: 2, index: '3-2', name: '仓库设置', path: '/stockSet'},
          {id: 3, index: '3-3', name: '药库药房', path: '/drugStorage'},
          {id: 4, index: '3-4', name: '库存调拨', path: '/stockAllot'},
          {id: 5, index: '3-5', name: '仓储盘点', path: '/stockCheck'}
        ]
      },
      finance: {
        id: 4,
        name: '财务模块',
        routeList: [
          {id: 1, index: '4-1', name: '结算方管理', path: '/balanceManage'},
          {id: 2, index: '4-2', name: '药品价格', path: '/balanceManage'},
          {id: 3, index: '4-3', name: '用药统计', path: '/pharmacyCount'},
          {id: 4, index: '4-4', name: '对账结算', path: '/settleAccount'}
        ]
      },
      set: {
        id: 5,
        name: '系统设置',
        routeList: [
          {id: 1, index: '5-1', name: '员工列表', path: '/staffList'},
          {id: 2, index: '5-2', name: '权限设置', path: '/permissionsSet'},
          {id: 3, index: '5-3', name: '系统日志', path: '/pharmacyCount'}
        ]
      },
      routeList: [
        {id: 0, name: '订单列表', path: '/orderList'}
      ]
    }
  },
  created () {
    console.log(this.$router)
  },
  methods: {
    switchRouter (path) {
      this.$router.push(path)
    },
    menuSwitchRouter (path, name) {
      this.$router.push(path)
      this.routeList.forEach(function (item, i) {
        self.hasRoute = (item.path === path) || self.hasRoute
      })
      if (!self.hasRoute) {
        let obj = {}
        obj.id = this.routerCount
        obj.name = name
        obj.path = path
        this.routeList.push(obj)
        this.routerCount++
      }
      self.hasRoute = false
    },
    routeDelete (index) {
      if (index > 1) {
        this.routeList.splice(index, 1)
        let routeIndex = index - 1
        this.$router.push(this.routeList[routeIndex].path)
      }
    }
  }
}
</script>

<style src="./index.css"></style>
