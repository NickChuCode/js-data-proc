import add from './add'
import chai from 'chai'

let expect = chai.expect

describe('加法函数的ES6测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2)
  })
})
