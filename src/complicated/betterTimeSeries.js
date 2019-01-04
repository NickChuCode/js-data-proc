import moment from 'moment'
import * as _ from 'lodash'

// 上面的方法还是比较麻烦，我们将他们封装起来，封装成一个工具方便我们使用时间序列
function createTimeSeries (timeSeriesArray) {
  const timeSeriesObj = {
    array: timeSeriesArray.map(function (data) {
      data.moment = moment(data.timestamp)

      return data
    }),

    groupByFormat (formatPattern) {
      return _.groupBy(timeSeriesObj.array, function (data) {
        return data.moment.format(formatPattern)
      })
    },

    groupByDate () {
      return timeSeriesObj.groupByFormat('YYYY-MM-DD')
    },

    groupByWeek () {
      return timeSeriesObj.groupByFormat('YYYY-WW')
    },

    groupByMonth () {
      return timeSeriesObj.groupByFormat('YYYY-MM')
    },

    groupByYear () {
      return timeSeriesObj.groupByFormat('YYYY')
    },
    dates () {
      return timeSeriesObj.groupByDate().dates()
    },

    weeks () {
      return timeSeriesObj.groupByWeek().weeks()
    },

    months () {
      return timeSeriesObj.groupByMonth().months()
    },

    years () {
      return timeSeriesObj.groupByYear().years()
    },

    sum (unit, point) {
      switch (unit) {
        case 'date':
          return timeSeriesObj.groupByDate().sum(point)

        case 'week':
          return timeSeriesObj.groupByWeek().sum(point)

        case 'month':
          return timeSeriesObj.groupByMonth().sum(point)

        case 'year':
          return timeSeriesObj.groupByYear().sum(point)
      }
    },

    average (unit, point) {
      switch (unit) {
        case 'week':
          return timeSeriesObj.groupByWeek().average(point)

        case 'month':
          return timeSeriesObj.groupByMonth().average(point)

        case 'year':
          return timeSeriesObj.groupByYear().average(point)
      }
    }
  }
  return timeSeriesObj
}

// 封装性更好，并封装了常用的操作
const timeSeries = createTimeSeries(transactions)
console.log(timeSeries.sum('month', '2018-03')) //= > 192.75
console.log(timeSeries.average('month', '2018-03')) //= > 96.375
