import * as echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')
const xData = ['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01']
const values = [1, 2, 3, 4]
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
  const key = '2020-05-01'
  const value = '5'
  myChart.setOption({
    xAxis: {
      data: [...xData, key]
    },
    series: [{
      data: [...values, value]
    }
    ]
  })
})
