import './saldo.scss'
import template from './saldo.html'
import MyComponent from '../../components/my-component'
import { Util } from 'mamba-websdk'

export default {
  template,
  onMount () {

    let inputValueTotal = this.$refs['inputValueTotal'].el

    let totalValueCents = this.$router.totalValueCents

    console.log(totalValueCents)

    let totalValue = Util.Money.formatCurrency('R$', totalValueCents)

    // "jogar" valor para html
    inputValueTotal.value = totalValue
    },
}
