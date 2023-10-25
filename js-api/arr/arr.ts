/**
 * Flattens an array to a specified depth.
 *
 * @param {any[]} arr - The array to be flattened.
 * @param {number} depth - The depth to which the array should be flattened (default: 1).
 * @return {any[]} The flattened array.
 */
export function myFlatArr(arr: any[], depth = 1): any[] {
    const flatArr: any[] = [];
    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            flatArr.push(...myFlatArr(item, depth - 1));
        } else {
            flatArr.push(item);
        }
    }
    return flatArr;
}

export function myFlatArrReduce(arr: any[], depth = 1) {
    return arr.reduce((acc, next) => acc.concat(Array.isArray(next) && depth > 0 ? myFlatArr(next, depth - 1) : next), [])
}

/**
 * 数组/对象数组去重
 * @param { Array } arr 待去重的数组
 * @param { String } key 如果是对象数组，为要过滤的依据 key
 * @returns { Array }
 */
export function uniqueArr(arr: any[], key = ''): any[] {
    if(arr[0] instanceof Object && !key) {
        throw new Error('Object array, please offer the key that needs to be unique')
    }
    const hash = new Map()
    return arr.reduce((acc, next) => {
        let value = next
        if(next instanceof Object && next.hasOwnProperty(key)) {
            value = next[key]
        }
        if(!hash.has(value)) {
            acc.push(next)
            hash.set(value, true)
        }
        return acc
    }, [])
}
