import { filterApostrophe } from './helloWorld'
import chai from 'chai'

let expect = chai.expect

describe('基本数据处理 - 字符串与数字', function () {
  it('去除标点符号测试', function () {
    expect(filterApostrophe('Hey dude, how is it going?')).to.be.equal('Hey dude how is it goings')
  })
})
