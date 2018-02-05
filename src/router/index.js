import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/index'
// 业务模块
import OrderList from '@/views/orderManage/orderList/index'
import OrderErr from '@/views/orderManage/orderErr/index'
import OrderCheck from '@/views/orderManage/orderCheck/index'
import ChufangList from '@/views/orderManage/chufangList/index'
import DistributionList from '@/views/orderManage/distributionList/index'
// 基础模块
import DrugStock from '@/views/baseModular/drugStock/index'
import DrugTaboo from '@/views/baseModular/drugTaboo/index'
import DrugAssociation from '@/views/baseModular/drugAssociation/index'
import HospitalManage from '@/views/baseModular/hospitalManage/index'
import DeviceManage from '@/views/baseModular/deviceManage/index'
// 仓储模块
import StockSearch from '@/views/storageModular/stockSearch/index'
import StockSet from '@/views/storageModular/stockSet/index'
import DrugStorage from '@/views/storageModular/drugStorage/index'
import StockAllot from '@/views/storageModular/stockAllot/index'
import StockCheck from '@/views/storageModular/stockCheck/index'
// 财务模块
import BalanceManage from '@/views/financeModular/balanaceManage/index'
import DrugPrice from '@/views/financeModular/drugPrice/index'
import PharmacyCount from '@/views/financeModular/pharmacyCount/index'
import SettleAccount from '@/views/financeModular/settleAccount/index'
// 系统设置
import StaffList from '@/views/systemSet/staffList/index'
import PermissionsSet from '@/views/systemSet/permissionsSet/index'
import SystemLog from '@/views/systemSet/systemLog/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/orderList',
      children: [
        {
          path: '/orderList',
          name: 'OrderList',
          component: OrderList,
          meta: {
            index: '1-1'
          }
        },
        {
          path: '/orderErr',
          name: 'OrderErr',
          component: OrderErr,
          meta: {
            index: '1-4'
          }
        },
        {
          path: '/orderCheck',
          name: 'OrderCheck',
          component: OrderCheck,
          meta: {
            index: '1-2'
          }
        },
        {
          path: '/chufangList',
          name: 'ChufangList',
          component: ChufangList,
          meta: {
            index: '1-3'
          }
        },
        {
          path: '/distributionList',
          name: 'DistributionList',
          component: DistributionList,
          meta: {
            index: '1-5'
          }
        },
        {
          path: '/drugStock',
          name: 'DrugStock,',
          component: DrugStock,
          meta: {
            index: '2-1'
          }
        },
        {
          path: '/drugTaboo',
          name: 'DrugTaboo,',
          component: DrugTaboo,
          meta: {
            index: '2-2'
          }
        },
        {
          path: '/drugAssociation',
          name: 'DrugAssociation,',
          component: DrugAssociation,
          meta: {
            index: '2-3'
          }
        },
        {
          path: '/hospitalManage',
          name: 'HospitalManage,',
          component: HospitalManage,
          meta: {
            index: '2-4'
          }
        },
        {
          path: '/deviceManage',
          name: 'DeviceManage,',
          component: DeviceManage,
          meta: {
            index: '2-5'
          }
        },
        {
          path: '/stockSearch',
          name: 'StockSearch,',
          component: StockSearch,
          meta: {
            index: '3-1'
          }
        },
        {
          path: '/stockSet',
          name: 'StockSet,',
          component: StockSet,
          meta: {
            index: '3-2'
          }
        },
        {
          path: '/drugStorage',
          name: 'DrugStorage,',
          component: DrugStorage,
          meta: {
            index: '3-3'
          }
        },
        {
          path: '/stockAllot',
          name: 'StockAllot,',
          component: StockAllot,
          meta: {
            index: '3-4'
          }
        },
        {
          path: '/stockCheck',
          name: 'StockCheck,',
          component: StockCheck,
          meta: {
            index: '3-5'
          }
        },
        {
          path: '/balanceManage',
          name: 'BalanceManage,',
          component: BalanceManage,
          meta: {
            index: '4-1'
          }
        },
        {
          path: '/drugPrice',
          name: 'DrugPrice,',
          component: DrugPrice,
          meta: {
            index: '4-2'
          }
        },
        {
          path: '/pharmacyCount',
          name: 'PharmacyCount,',
          component: PharmacyCount,
          meta: {
            index: '4-3'
          }
        },
        {
          path: '/settleAccount',
          name: 'SettleAccount,',
          component: SettleAccount,
          meta: {
            index: '4-4'
          }
        },
        {
          path: '/staffList',
          name: 'StaffList,',
          component: StaffList,
          meta: {
            index: '5-1'
          }
        },
        {
          path: '/permissionsSet',
          name: 'PermissionsSet,',
          component: PermissionsSet,
          meta: {
            index: '5-2'
          }
        },
        {
          path: '/systemLog',
          name: 'SystemLog,',
          component: SystemLog,
          meta: {
            index: '5-3'
          }
        }
      ]
    }
  ]
})
