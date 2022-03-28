
import common from './common';

export default {
  ...common,
  props: {
    value: '',
    allowClear: true,
  },
  mock: {
    defaultValue: '',
    defaultList: [
      {
        value: 1,
        label: '是'
      },
      {
        value: 0,
        label: '否'
      }
    ]
  }
}