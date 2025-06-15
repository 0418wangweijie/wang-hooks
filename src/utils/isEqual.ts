/*
* 深度比较两个值是否相等
* 支持基本类型、对象、数组、递归比较所有属性
* */

const isEqual = <T>(objA: T, objB: T): boolean => {
    //  基本数据类型，包括NAN
    if (Object.is(objA, objB)) return true

    //  处理null和非对象类型
    if (objA === null || typeof objA !== 'object' || objB === null || typeof objB !== 'object') return false

    //  处理数组
    if (Array.isArray(objA) && Array.isArray(objB)) {
        if (objA.length !== objB.length) return false

        for (let i = 0; i < objA.length; i++) {
            if (!isEqual(objA[i], objB[i])) return false
        }

        return true
    }

    //  处理日期对象
    if (objA instanceof Date && objB instanceof Date) return objA.getTime() === objB.getTime()

    //  处理正则表达式对象
    if (objA instanceof RegExp && objB instanceof RegExp) return objA.source === objB.source && objA.flags === objB.flags

    // 处理普通对象
    const keysA: string[] = Object.keys(objA)
    const keysB: string[] = Object.keys(objB)
    if (keysA.length !== keysB.length) return false

    for (const key of keysA) {
        if (Object.prototype.hasOwnProperty.call(objB, key) || !isEqual(objA[key as keyof T], objB[key as keyof T])) return false
    }

    return true
}

export default isEqual