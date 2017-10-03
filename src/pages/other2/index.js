// import { Native } from 'mamba-websdk'
import template from './other.html'
import './other.scss'
import { Util } from 'mamba-websdk'

export default {
  template,
  onCreate () {
    let inputEl = this.$refs['num-cartao'].el
    let submitBtnEl = this.$refs['bnt-continuar-submit'].el

    inputEl.onfocus = (e) => Keyboard.setKeyboardAsNumeric()
    inputEl.onkeydown = (e) => this._btnEnable(e, inputEl)
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
      this.$refs['num-cartao'].value = ''
      this.$refs['bnt-continuar-submit'].el.disabled = true
    },
    _btnEnable(e, inputEl){
          this.$refs['bnt-continuar-submit'].el.disabled = false
          let numCartao = inputEl.value
          this.$router.numCartaoValue = numCartao
          console.log("this.$router.numCartaoValue"+this.$router.numCartaoValue)
        },
    _submit (e, inputEl, numCartaoValue) {
          e.preventDefault()
          this.$router.push('/saldo')
      }
  }
}
