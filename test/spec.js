const {expect}= require("chai");

describe("first test",()=>{
    it("should pass",async ()=>{
        const foo= "tried"
        expect(foo).to.be.a('string');
    })
})