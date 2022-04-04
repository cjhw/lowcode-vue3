
import common from './common';

export default {
  ...common,
  props: {
    label: '多选框',
    value: [],
    size: 'default',
    placeholder: '请输入',
    required: false,
    disabled: false,
  },
  layouts: {
    formItem:{
      name: 'checkbox',
      label: '多选框',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
    }
  },
  mock: {
    defaultValue: '',
    defaultList: [
      {
        value: '梓',
        label: '梓'
      },
      {
        value: '安',
        label: '安'
      }
    ],
  },
  styles:{
    width: '100%'
  },
  setters: [
    {
      label: '标签',
      type: 'basic-input',
      props: {
        label: '标签',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        value: '输入框',
        defaultValue: '输入框',
      },
      styles: {

      }
    },
    {
      label: '数据字段',
      type: 'basic-input',
      props: {
        label: '数据字段',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      label: '输入框类型',
      type: 'basic-input',
      props: {
        label: '输入框类型',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      label: '占位内容',
      type: 'basic-input',
      props: {
        label: '占位内容',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      label: '宽度',
      type: 'basic-input',
      props: {
        label: '宽度',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      },
      styles: {
        width: '100%'
      }
    },
    {
      label: '默认值',
      type: 'basic-input',
      props: {
        label: '默认值',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      label: '操作属性',
      type: 'basic-checkbox',
      props: {
        label: '操作属性',
        value: [],
        size: 'default',
        placeholder: '请输入',
        required: false,
      },
      mock: {
        defaultValue: '',
        defaultList: [
          {
            label: '隐藏',
            value: 0
          },
          {
            label: '禁用',
            value: 1
          },
          {
            label: '可清除',
            value: 2
          }
        ]
      }
    },
    {
      label: '是否必填',
      type: 'basic-radio',
      props: {
        label: '是否必填',
        value: '',
        size: 'default',
        buttonStyle: 'outline',
        optionType: 'default',
        required: false,
      },
      mock: {
        defaultValue: 0,
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
  ],
}