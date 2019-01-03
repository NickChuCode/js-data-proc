import { meanAge, meanByAge, reduceByKey } from './basicStat'
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

const testText = `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
const words = testText.toLowerCase().match(/\w+/g)
const tuples = words.map(function (word) {
  return [ word, 1 ]
})

describe('基本数据处理 - 基本统计测试', function () {
  it('均值测试', function () {
    expect(meanAge(crew)).to.be.equal(26.8)
  })
  it('meanBy均值测试', function () {
    expect(meanByAge(crew)).to.be.equal(26.8)
  })
  it('词频统计测试', function () {
    expect(reduceByKey(tuples, function (left, right) {
      return left + right
    })).to.be.an('array')
    expect(reduceByKey(tuples, function (left, right) {
      return left + right
    }).sort(function (left, right) {
      return right[1] - left[1]
    })[0][0]).to.be.equal('the')
  })
})
