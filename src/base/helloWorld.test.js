import { filterApostrophe, filterApostropheWithReg, splitText } from './helloWorld'
import chai from 'chai'

let expect = chai.expect

const testText = `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`

describe('基本数据处理 - 字符串与数字', function () {
  it('去除标点符号测试', function () {
    expect(filterApostrophe('Hey dude, how is it going?')).to.be.equal('Hey dude how is it going')
  })
  it('去除标点符号正则表达式版本', function () {
    expect(filterApostropheWithReg('Hey dude, how is it going?')).to.be.an('array')
    expect(filterApostropheWithReg('Hey dude, how is it going?').length).to.be.equal(6)
  })
  it('分割文本数据测试', function () {
    expect(splitText(testText)).to.be.an('array')
    expect(splitText(testText).length).to.be.equal(160) // 长度是160，不是163，之前有误
  })
})
