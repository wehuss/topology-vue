const tools = [
  {
    key: 'vue',
    name: '自定义组件',
    children: [
      {
        name: 'button',
        key: 'VButton',
        data: {
          // autoRect: true,
          // 隐藏边框
          strokeStyle: 'rgba(0,0,0,0)',
          text: '',
          name: 'VButton',
          rect: {
            width: 200,
            height: 80
          },
          vData: {
            text: '这是button'
          }
        }
      },
      {
        name: '图表1',
        key: 'VGradientStackedAreaChart',
        data: {
          // autoRect: true,
          strokeStyle: 'rgba(0,0,0,0)',
          text: '',
          name: 'VGradientStackedAreaChart',
          rect: {
            width: 500,
            height: 300
          },
          vData: {
            title: null,
            legendColor: null
          }
        }
      },
      {
        name: '属性文本',
        key: 'VAttributeText',
        data: {
          // autoRect: true,
          strokeStyle: 'rgba(0,0,0,0)',
          text: '',
          name: 'VAttributeText',
          rect: {
            width: 220,
            height: 30
          },
          vData: {
            attributeName: '',
            attributeKey: '',
            attributeUnit: '',
          }
        }
      },
      {
        name: '属性表格',
        key: 'VAttributeTable',
        data: {
          // autoRect: true,
          strokeStyle: 'rgba(0,0,0,0)',
          text: '',
          name: 'VAttributeTable',
          rect: {
            width: 500,
            height: 200
          },
          vData: {
            tableData:[]
          }
        }
      },
      // {
      //   name: 'test',
      //   key: 'test',
      //   data: {
      //     text: '',
      //     strokeStyle: 'rgba(0,0,0,0)',
      //     name: 'test',
      //     rect: {
      //       width: 200,
      //       height: 80
      //     }
      //   }
      // }
    ]
  },
  {
    key: 'flow-diagram',
    name: '流程图',
    children: [
      {
        name: 'flowData',
        key: 'flowData',
        data: {
          text: 'flowData',
          name: 'flowData',
          rect: {
            width: 100,
            height: 100
          }
        }
      }
    ]
  },
]


export default tools