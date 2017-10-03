import './payment1.scss'
import template from './payment1.html'
import { Util } from 'mamba-websdk'

export default {
  template,
  onCreate () {
    let inputEl = this.$refs['valor-de-compra'].el
    let submitBtnEl = this.$refs['btn-pay-submit'].el

    inputEl.onfocus = (e) => Keyboard.setKeyboardAsNumeric()
    inputEl.onkeydown = (e) => this._btnEnableAndMask(e, inputEl)
    submitBtnEl.onclick = (e) => this._submit(e, inputEl)
  },
  onMount () {
    this._reset()
  },
  onUnmount () {
    this._reset()
  },
  methods: {
    _reset () {
      this.$refs['valor-de-compra'].value = ''
      this.$refs['btn-pay-submit'].el.disabled = true
    },
    _btnEnableAndMask(e, inputEl){
          this.$refs['btn-pay-submit'].el.disabled = false
          moneyMask(e, inputEl)
          let valueCents = Number(inputEl.value.replace(/[^0-9\.]+/g,""))
          this.$router.totalValueCents = valueCents
          console.log("this.$router.totalValueCents"+this.$router.totalValueCents)
        },
    _submit (e, inputEl, totalValueCents) {
          e.preventDefault()
          this.$router.push('/payment')
      }
    }
}

function moneyMask (e, field) {
  e.preventDefault()
  let char = String.fromCharCode(e.keyCode || e.charCode)
  let val = field.value
  if (val) {
    val = val.match(/\d/g).join('')
  } else {
    val = ''
  }
  switch (e.keyCode) {
    case 8:
      // BACKSPACE
      val = val.slice(0, -1)
      field.value = Util.Money.formatCurrency('R$', val)
      break
    case 27:
      // CLOSE
      if (window.App) window.App.close()
      window.alert('close prompt')
      break
    default:
      if (Util.Num.isNumeric(char)) {
        val = Number(val + char)
        field.value = Util.Money.formatCurrency('R$', val)
      }
      break
  }
}
