import {sum} from '../../src/sample';

describe('sample', () => {
    it('整数', () => {
        expect(sum(1, 1)).toEqual(2);
    });

    it('小数', () => {
        expect(sum(1.5, 2)).toEqual(3.5);
    })
})
