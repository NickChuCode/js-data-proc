import moment from 'moment'
import * as _ from 'lodash'

// 对数据按天分组
// export function transactionsGroupedByDate (transactions) {
//   _.groupBy(transactions, function (transaction) {
//     return transaction.moment.format('YYYY-MM-DD')
//   })
// }

// 对数据按月分组
// export function transactionsGroupedByMonth (transactions) {
//   _.groupBy(transactions, function (transaction) {
//     return transaction.moment.format('YYYY-MM')
//   })
// }

// 对数据按周分组
// export function transactionsGroupedByWeek (transactions) {
//   _.groupBy(transactions, function (transaction) {
//     return transaction.moment.format('YYYY-WW')
//   })
// }

// 对数据按年分组
// export function transactionsGroupedByYear (transactions) {
//   _.groupBy(transactions, function (transaction) {
//     return transaction.moment.format('YYYY')
//   })
// }

let transactions = [
  {
    timestamp: 1519864292535,
    category: '餐饮',
    price: 6.00
  },
  {
    timestamp: 1519874872261,
    category: '餐饮',
    price: 12.00
  },
  {
    timestamp: 1519899849526,
    category: '餐饮',
    price: 52.50
  },
  {
    timestamp: 1519953249020,
    category: '餐饮',
    price: 4.50
  },
  {
    timestamp: 1519963102270,
    category: '餐饮',
    price: 13.50
  },
  {
    timestamp: 1519999849526,
    category: '餐饮',
    price: 104.25
  }
]

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
    }
  }
  return timeSeriesObj
}

const timeSeries = createTimeSeries(transactions)
console.log(timeSeries.groupByMonth)
