const chai = require('chai');
const expect = chai.expect;

describe('chai test', () => {
    it('should compare some values', () => {
        expect(1).to.equal(1);
    });

    it('do some other stuff', () => {
        expect({name:"Adebayo"}).to.deep.equal({name:"Adebayo"});
        expect({name:"Ajibola"}).to.have.property('name').to.equal('Ajibola');
        expect(6 > 9).to.be.false;
        expect({}).to.be.a('object');
        expect('Jboi').to.be.a('string');
        expect(9).to.be.a('number');
        expect('Ridwan').to.be.a('string').with.lengthOf('6');
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    })
})