import './confirm.scss'
import template from './confirm.html'
import { Util } from 'mamba-websdk'

export default {
  template,
  onMount () {

    let inputValueTotal = this.$refs['inputValueTotal'].el
    let botao = this.$refs['inputBotao'].el
    let inputDate = this.$refs['inputDate'].el
    let inputCartao = this.$refs['numCartaoValue'].el
    let inputSaldo = this.$refs['inputSaldo'].el


    botao.onclick = _ => this._print()


    let totalValueCents = this.$router.totalValueCents
    let Saldo = this.$router.totalValueCents
    let numCartao = this.$router.numCartaoValue


    let totalValue = Util.Money.formatCurrency('R$', totalValueCents)

    let date = new Date()
    date = dateFormat (date)

    // "jogar" valor para html
    inputCartao.value = numCartao
    inputValueTotal.value = totalValue
    inputSaldo.value = totalValue
    inputDate.value = date
    },

  methods: {
      _reset () {
        this.$refs['num-cartao'].value = ''
        this.$refs['bnt-continuar-submit'].el.disabled = true
      },
      _print(){
          this.$refs['print-area'].print(this.printObject, err => {
              if (err === undefined) {
                this.$router.push('/')
              } else {
                this.$router.push('/printingError')
              }
            })
          },
      _submit (e, inputEl, totalValueCents) {
            e.preventDefault()
            this.$router.push('/payment1')
        }
    },
  }

function dateFormat (date) {

  var day = date.getDate() + "";
  var month = (date.getMonth() + 1) + "";
  var year = date.getFullYear() + "";
  var hour = date.getHours() + "";
  var minutes = date.getMinutes() + "";
  var seconds = date.getSeconds() + "";

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  date = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds

  return date
}

function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}
