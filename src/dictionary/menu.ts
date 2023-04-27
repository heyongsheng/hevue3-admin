// 菜单类型
export const menuTypeDic: defaultType = {
  '1': '菜单',
  '2': '页面',
  '3': '按钮',
  default: '1',
}
Object.defineProperty(menuTypeDic, 'default', {
  enumerable: false,
})

export const menuTestDic: object = {
  '1': '菜单',
  '2': '页面',
  '3': '按钮',
}

// 菜单是否隐藏
export const menuHideDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '0',
}
Object.defineProperty(menuHideDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuHideDic, 'default', {
  enumerable: false,
})

// 菜单是缓存
export const menuCacheDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '0',
}
Object.defineProperty(menuCacheDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuCacheDic, 'default', {
  enumerable: false,
})

// 菜单是否固定到标签栏
export const menuAffixDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '0',
}

Object.defineProperty(menuAffixDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuAffixDic, 'default', {
  enumerable: false,
})

// 是否常显菜单栏
export const menuAlwaysShowDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '1',
}
Object.defineProperty(menuAlwaysShowDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuAlwaysShowDic, 'default', {
  enumerable: false,
})
// 此处后期可研究一下原型的应用
