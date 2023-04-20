// 扁平数据转树结构---暂不支持多级
export function arrToTree({
  list = [],
  id = '_id',
  pid = 'parentId',
  children = 'children',
}: {
  list: any[]
  id?: string
  pid?: string
  children?: string
}) {
  // 定义最终需要返回的树形结构数据
  let treeData: any[] = []
  // 对传入的数组进行遍历
  list.forEach((item) => {
    // 如果pid没有值,那就是顶级对象,直接添加进数组
    if (!item[pid]) {
      treeData.push(item)
    }
    // 理解为二次遍历 ：每个对象都找一遍自己的孩子添加到children
    let objList = list.filter((data) => data[pid] === item[id])
    if (objList.length) {
      item[children] = objList
    }
  })
  return treeData
}

// 版本号大小对比
export function compareVersion(v1: string = '0', v2: string = '0'): number {
  let v1Arr = v1.split('.')
  let v2Arr = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1Arr.length < len) {
    v1Arr.push('0')
  }
  while (v2Arr.length < len) {
    v2Arr.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1Arr[i])
    const num2 = parseInt(v2Arr[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
