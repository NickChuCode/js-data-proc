import * as _ from 'lodash'

export function meanAge (crew) {
  const ages = _.map(crew, function (person) {
    return person.age
  })
  return _.mean(ages)
}

// Lodash还提供了更方便的meanBy函数
export function meanByAge (crew) {
  return _.meanBy(crew, 'age')
}

// 词频统计，一般来对数组中的各种可能性进行频次统计，是先创建一个用于记录频次的对象，
// 然后通过遍历数组中的每一个元素，并将其一个一个放入到前面创建的对象中以记录频次。
// 但是自从我们学会了使用 Map 和 Reduce 开始我们就可以使用更直观的方式进行统计。
// 首先把每一个词使用变换函数将其变成一个以单词为第一元素，以 1 为第二元素的数组，
// 我们可以将其称为 Tuple，相当于对象中的一个键值对。
//   "hello" -> [ "hello", 1 ]
// 既然我们将单词转换成了多个 Tuple 键值对的键，那么我们是不是可以使用这个特性更方便地进行 Reduce 呢？
// 是的，我们可以将其称为 reduceByKey。在一般情况下的 Reduce 函数是用于遍历整个数组的，而 reduceByKey
// 则是根据 Tuple 集中的键首先进行一次分类组合，将具有相同键的值进行组合，然后对每一个组合集进行单独遍历。
// 不幸的是，无论是原生 JavaScript 中还是 Lodash 中并没有这样的 API。
// 但是我们却可以使用 Lodash 的函数进行组合，对 Lodash 进行拓展。
export function reduceByKey (tuples, reduceCallback) {
  const grouped = _.groupBy(tuples, function (tuple) {
    return tuple[0]
  })

  return _.toPairs(_.mapValues(grouped, function (tuples) {
    return _.chain(tuples)
      .map(function (tuple) {
        return tuple[1]
      })
      .reduce(reduceCallback)
      .value()
  }))
}
