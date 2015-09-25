import { expect } from 'chai';
import { humanNumber, debounce } from '../utils';

describe('Utils', () => {
    it('has a number formatting function', () => {
        expect(humanNumber).to.be.a('function');
        expect(humanNumber(5)).to.be.a('string');
    });

    it('number formatting makes the numbers look nicer', () => {
        expect(humanNumber(0)).to.be.equal('0');
        expect(humanNumber(5000)).to.be.equal('5,000');
        expect(humanNumber(5000000)).to.be.equal('5,000,000');
        expect(humanNumber(-5000)).to.be.equal('-5,000');
        expect(humanNumber(-5000000)).to.be.equal('-5,000,000');
        expect(humanNumber(5000.5000)).to.be.equal('5,000.5');
        expect(humanNumber(0.3333333)).to.be.equal('0.3333333');
    });

    it('has a debounce function', () => {
        expect(debounce).to.be.a('function');
    });
});