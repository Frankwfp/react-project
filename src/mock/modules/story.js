const dataList = []
//用于接受生成数据的数组
for (let i = 0; i < 82; i++) {
  // 可自定义生成的个数
  const template = {
    id: i + 1,
    name: 'tom' + i,
    age: '13' + i,
    email: 'tom@qq.com' + i,
    phone: '11111' + i
  }
  dataList.push(template)
}

function list(res) {
  // res是一个请求对象，包含: url, type, body
  const { page, pageSize } = JSON.parse(res.body)

  const arr = dataList.slice((page - 1) * pageSize, page * pageSize)

  return {
    code: 200,
    message: '请求成功',
    total: 100,
    list: arr
  }
}

export default { list }
