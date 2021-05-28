export const deepCopy = (cloneObj) => {
  if (typeof cloneObj !== 'object') {
    return cloneObj
  }

  // typeof null -> Object
  if (cloneObj === null) {
    return cloneObj
  }

  // Array instanceof Object -> true
  let copyObj = cloneObj instanceof Array ? [] : {}

  Object.keys(cloneObj).forEach(key => {
    let _obj = cloneObj[key]

    switch (typeof _obj) {
      case 'object':
        copyObj[key] = deepCopy(_obj)
        break
      case 'function':
        copyObj[key] = _obj.bind(copyObj)
        break
      default:
        copyObj[key] = _obj
        break
    }
  })

  // for (let key in cloneObj) {
  //   let _obj = cloneObj[key]

  //   switch (typeof _obj) {
  //     case 'object':
  //       copyObj[key] = deepCopy(_obj)
  //       break
  //     case 'function':
  //       copyObj[key] = _obj.bind(copyObj)
  //       break
  //     default:
  //       copyObj[key] = _obj
  //       break
  //   }
  // }
  return copyObj
}

export const getNodeIdList = (nodeList = []) => {
  const idList = []
  nodeList.forEach(node => {
    node.vData && idList.push(node.id)
  })
  return idList
}