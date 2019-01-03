// 词频统计就是数据处理领域的Hello World
// 而从语言角度，HELLO、hello 和 Hello 都是一样的，所以我们需要先完成以下预处理任务：
//  - 去除文本中的标点符号、数字
//  - 将所有大写字母转换为小写字母

// 去除标点符号
export function filterApostrophe (oriText) {
  let res = ''

  for (let i = 0; i < oriText.length; i++) {
    const letter = oriText[i]
    const asciiCode = letter.charCodeAt()

    if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122) || (asciiCode === 32)) {
      res += letter
    }
  }

  return res
}

// 去除标点符号正则表达式版本
export function filterApostropheWithReg (oriText) {
  const res = oriText.toLocaleLowerCase().match(/\w+/g)

  return res
}

// 完成标点去除和大小写转换后，就可以进行文本数据的分割了
export function splitText (text) {
  let res = filterApostrophe(text).toLocaleLowerCase()

  return res.split(' ')
}
