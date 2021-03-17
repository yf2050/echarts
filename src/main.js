import * as echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')
let n = 0, m = 0

function createKey() {
  n += 1
  return `2020-01- ${n}`
}

function createValue() {
  m += 1
  return m
}

let xData = [createKey(), createKey(), createKey(), createKey()]
let values = [createValue(), createValue(), createValue(), createValue()]
// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(main, 'Light')

// 指定图表的配置项和数据
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(
  {
    title: {
      text: '喻峰的手册',
      show: true,
      backgroundColor: 'yellow',
      right: 0
    },
    tooltip: { //表示固定说明
      show: true,
    },
    legend: {
      data: ['bug数']
    },
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      lineStyle: { //线
        color: 'red'
      },
      itemStyle: { //点
        color: 'yellow'
      },
      name: 'bug数',
      data: values,
      type: 'line',
    }]
  })


loadMoreButton.addEventListener('click', () => {
  let key = createKey()
  let value = createValue()
  xData = [...xData, key]
  values = [...values, value]
  myChart.setOption({
    xAxis: {
      data: xData
    },
    series: [{
      data: values
    }
    ]
  })
})
