describe("This test", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should fail', function() { expect(true).to.be.false; });
});

describe('myFunc()', function () {
  'use strict';

  it('exists', function () {
    expect(myFunc).to.be.a('function');

  });

  it('Should return bananas', function() { 
    expect(myFunc()).to.equal('bananas'); 
  });

});