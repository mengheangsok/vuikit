import { mergeData } from '@vuikit/core/utils/vue'

export default {
  functional: true,
  render (h, { data }) {
    return h('input', mergeData(data, {
      class: 'uk-radio',
      attrs: {
        type: 'radio'
      }
    }))
  }
}