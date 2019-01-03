import { arrayUtils } from './arrayUtils'
import chai from 'chai'

let expect = chai.expect

let test = [1, 2, 3]

describe('基本数据处理 - 数组工具封装测试', function () {
  it('添加测试', function () {
    expect(arrayUtils.append(test, 5, 6).length).to.be.equal(5)
    expect(test).to.include(5)
    expect(test).to.include(6)
  })
  it('前部添加测试', function () {
    expect(arrayUtils.prepped(test, -1, 0).length).to.be.equal(7)
    expect(test).to.include(-1)
    expect(test).to.include(0)
    expect(test.indexOf(-1)).to.be.equal(0)
  })
  it('中间添加测试', function () {
    expect(arrayUtils.insert(test, 2, 11, 12).length).to.be.equal(9)
    expect(test.indexOf(11)).to.be.equal(2)
    expect(test.indexOf(12)).to.be.equal(3)
  })
  it('删除测试', function () {
    expect(arrayUtils.remove(test, 2).length).to.be.equal(8)
    expect(test.indexOf(11)).to.be.equal(-1)
  })
})
