import { MbRouter } from 'mamba-websdk'

import Welcome from '../pages/welcome'
import Intro from '../pages/intro'
import OtherPage from '../pages/other'
import Payment from '../pages/payment'
import Payment1 from '../pages/payment1'
import Password from '../pages/password'
import Remove from '../pages/remove'
import Confirm from '../pages/confirm'
import End from '../pages/end'
import OtherPage2 from '../pages/other2'
import Saldo from '../pages/saldo'

export default new MbRouter({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/intro',
      component: Intro
    },
    {
      path: '/other-cool-feature',
      component: OtherPage
    },
    {
      path: '/payment',
      component: Payment
    },
    {
      path: '/payment1',
      component: Payment1
    },
    {
      path: '/password',
      component: Password
    },
    {
      path: '/remove',
      component: Remove
    },
    {
      path: '/confirm',
      component: Confirm
    },
    {
      path: '/end',
      component: End
    },
    {
      path: '/other2',
      component: OtherPage2
    },
    {
      path: '/saldo',
      component: Saldo
    }
  ]
})
