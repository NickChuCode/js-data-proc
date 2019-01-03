import { meanAge, meanByAge } from './basicStat'
import chai from 'chai'

let expect = chai.expect

const crew = [
  {
    name: 'Peter',
    gender: 'male',
    level: 'Product Manager',
    age: 32
  },
  {
    name: 'Ben',
    gender: 'male',
    level: 'Senior Developer',
    age: 28
  },
  {
    name: 'Jean',
    gender: 'female',
    level: 'Senior Developer',
    age: 26
  },
  {
    name: 'Chang',
    gender: 'male',
    level: 'Developer',
    age: 23
  },
  {
    name: 'Siva',
    gender: 'female',
    level: 'Quality Assurance',
    age: 25
  }
]

describe('基本数据处理 - 基本统计测试', function () {
  it('均值测试', function () {
    expect(meanAge(crew)).to.be.equal(26.8)
  })
  it('meanBy均值测试', function () {
    expect(meanByAge(crew)).to.be.equal(26.8)
  })
})
