import './intro.scss'
import template from './intro.html'

export default {
  template,
  state () {
    return {
      printObject: {
        user_dithering: false,
        scale_to_paper_width: true
      }
    }
  }
}
