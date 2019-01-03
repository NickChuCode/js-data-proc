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
