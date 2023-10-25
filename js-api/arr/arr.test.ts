import {test, expect, describe} from 'vitest';
import {myFlatArr, myFlatArrReduce, uniqueArr} from './arr'

describe('test demo', () => {
    test('test `+` operator', () => {
        expect(1 + 1).toBe(2);
    });
})


describe('test myFlatArr', () => {
    test('test myFlatArr([1, 2])', () => {
        expect(myFlatArr([1, 2])).toStrictEqual([1, 2]);
    });

    test('test myFlatArr([1, 2, [3, 4]])', () => {
        expect(myFlatArr([1, 2, [3, 4]])).toStrictEqual([1, 2, 3, 4]);
    });

    test('test myFlatArr([1, 2, [3, 4], 2)', () => {
        expect(myFlatArr([1, 2, [3, 4]], 2)).toStrictEqual([1, 2, 3, 4]);
    });

    test('test myFlatArr([1, 2, [3, 4, [5, 6]]], 2)', () => {
        expect(myFlatArr([1, 2, [3, 4, [5, 6]]], 2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test('test myFlatArr([1, 2, [3, 4, [5, 6]]], 1)', () => {
        expect(myFlatArr([1, 2, [3, 4, [5, 6]]], 1)).toStrictEqual([1, 2, 3, 4, [5, 6]]);
    });

    test('test myFlatArr([1, 2, [3, 4, [5, 6]]], Infinity)', () => {
        expect(myFlatArr([1, 2, [3, 4, [5, 6]]], Infinity)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test('test myFlatArr([1, [2, 3, 4], [5, 6, [7]]], 1)', () => {
        expect(myFlatArr([1, [2, 3, 4], [5, 6, [7]]], 1)).toStrictEqual([1, 2, 3, 4, 5, 6, [7]]);
    });

})

describe('test myFlatArrReduce', () => {
    test('test myFlatArrReduce([1, 2])', () => {
        expect(myFlatArrReduce([1, 2])).toStrictEqual([1, 2]);
    });

    test('test myFlatArrReduce([1, 2, [3, 4]])', () => {
        expect(myFlatArrReduce([1, 2, [3, 4]])).toStrictEqual([1, 2, 3, 4]);
    });

    test('test myFlatArrReduce myFlatArrReduce([1, 2, [3, 4]], 2)', () => {
        expect(myFlatArrReduce([1, 2, [3, 4]], 2)).toStrictEqual([1, 2, 3, 4]);
    });

    test('test myFlatArrReduce([1, 2, [3, 4, [5, 6]]], 2)', () => {
        expect(myFlatArrReduce([1, 2, [3, 4, [5, 6]]], 2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test('test myFlatArrReduce([1, 2, [3, 4, [5, 6]]], 1)', () => {
        expect(myFlatArrReduce([1, 2, [3, 4, [5, 6]]], 1)).toStrictEqual([1, 2, 3, 4, [5, 6]]);
    });

    test('test myFlatArrReduce([1, 2, [3, 4, [5, 6]]], Infinity)', () => {
        expect(myFlatArrReduce([1, 2, [3, 4, [5, 6]]], Infinity)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test('test myFlatArrReduce([1, [2, 3, 4], [5, 6, [7]]], 1)', () => {
        expect(myFlatArrReduce([1, [2, 3, 4], [5, 6, [7]]], 1)).toStrictEqual([1, 2, 3, 4, 5, 6, [7]]);
    });
})

describe('test uniqueArr', () => {
    test('test uniqueArr([1, 2, 2, 3, \'3\', 4])', () => {
        expect(uniqueArr([1, 2, 2, 3, '3', 4])).toStrictEqual([1, 2, 3, '3', 4])
    })

    test('test uniqueArr([{ a: 1 }, { b: 2 }, { b: 2 }])', () => {
        expect(() => uniqueArr([{ a: 1 }, { b: 2 }, { b: 2 }])).toThrowError(new Error('Object array, please offer the key that needs to be unique'))
    })

    test('test uniqueArr([{ a: 1 }, { b: 2 }, { b: 2 }], \'a\')', () => {
        expect(uniqueArr([{ a: 1 }, { b: 2 }, { b: 2 }], 'a')).toStrictEqual([{ a: 1 }, { b: 2 }, { b: 2 }])
    })


    test('test uniqueArr([{ a: 1 }, { b: 2 }, { b: 2 }], \'a\')', () => {
        expect(uniqueArr([{ a: 1 }, { b: 2 }, { b: 2 }], 'b')).toStrictEqual([{ a: 1 }, { b: 2 }])
    })

    test('test uniqueArr([{ a: 1 }, { b: 2 }, { b: \'2\' }], \'b\')', () => {
        expect(uniqueArr([{ a: 1 }, { b: 2 }, { b: '2' }], 'b')).toStrictEqual([{ a: 1 }, { b: 2 }, { b: '2'}])
    })

    test('test uniqueArr([{ a: 1 }, { b: null }, { b: null }], \'b\')', () => {
        expect(uniqueArr([{ a: 1 }, { b: null }, { b: null }], 'b')).toStrictEqual([{ a: 1 }, { b: null }])
    })

    test('test uniqueArr([{ a: 1 }, { b: null }, { b: undefined }], \'b\')', () => {
        expect(uniqueArr([{ a: 1 }, { b: null }, { b: undefined }], 'b')).toStrictEqual([{ a: 1 }, { b: null }, { b: undefined }])
    })
})
