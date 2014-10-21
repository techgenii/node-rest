describe('HELPER Unit Tests', function() {
    var Helper;
	before(function(){
		Helper = require('../lib/helper');
	})
    describe('isSet()', function() {
        it('should return false with variable declared, no assignment', function(){
            var temp;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to null', function(){
    	    var temp = null;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to NaN', function(){
    	    var temp = NaN;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to undefined', function(){
    	    var temp = undefined;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to empty string', function(){
    	    var temp = "";    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to false', function(){
    	    var temp = false;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to 0', function(){
    	    var temp = 0;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(false);
    	});
    	it('should return true with variable set to "a valid value"', function(){
    	    var temp = "a valid value";    
			var result = Helper.isSet(temp);
			expect(result).to.eql(true);
    	});
    	it('should return true with variable set to 100', function(){
    	    var temp = 100;    
			var result = Helper.isSet(temp);
			expect(result).to.eql(true);
    	});
    });
    describe('isUndefined()', function() {
        it('should return true with variable declared, no assignment', function(){
            var temp;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(true);
    	});
    	it('should return false with variable set to null', function(){
    	    var temp = null;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to NaN', function(){
    	    var temp = NaN;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    	it('should return true with variable set to undefined', function(){
    	    var temp = undefined;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(true);
    	});
    	it('should return false with variable set to empty string', function(){
    	    var temp = "";    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to false', function(){
    	    var temp = false;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to 0', function(){
    	    var temp = 0;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to "a valid value"', function(){
    	    var temp = "a valid value";    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    	it('should return false with variable set to 100', function(){
    	    var temp = 100;    
			var result = Helper.isUndefined(temp);
			expect(result).to.eql(false);
    	});
    });
});