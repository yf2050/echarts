import * as echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

const width = document.documentElement.clientWidth
main.style.width = `${width}px`
main.style.height = `${width * 1.2}px`
let n = 0, m = 0

function createKey() {
  n += 1
  return `2020-01-${n}`
}

function createValue() {
  m += 1
  return m
}

let xData = [createKey(), createKey(), createKey(), createKey()]
let values = [createValue(), createValue(), createValue(), createValue()]
// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(main, 'Light') //init初始化

// 指定图表的配置项和数据
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  baseOption: {
    title: {
      text: '喻峰的手册',
      show: true,
      backgroundColor: 'yellow',
      right: 20
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
        borderWidth: 100,
      },
      name: 'bug数',
      data: values,
      type: 'line',
    }]
  },
  media: [{
    query: {
      maxWidth: 500
    },
    option: {
      series: [{
        itemStyle: { //点
          color: 'red'
        },
      }]
    }
  }]
})

let isLoading = false
loadMoreButton.addEventListener('click', () => {
  if (isLoading === true) {return}
  myChart.showLoading() //显示Loading，在setTimeout之前
  isLoading = true
  setTimeout(
    () => {
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
      myChart.hideLoading() //隐藏Loading,在setTimeout上
      isLoading = false
    }, 0
  )
})


//
myChart.on('click', (e) => {
  console.log(e)
  console.log(e.name)
  console.log(e.dataIndex)
  console.log(e.data)
  window.open(`http://www.baidu.com/?time=${e.name}`)
})
