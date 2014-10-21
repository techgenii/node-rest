describe('STATUS', function() {
    var goodUrl;
	before(function(){
		goodUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/status';
	});
    describe('First Test', function() {
        it('GET should not handle /status, returns: 404', function(){    
			superagent
			.get(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
      		});   
    	});
    });
    describe('Second Test', function() {
    	it('POST should handle /status, mongodb up and packages all installed, returns: 200', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		expect(res.body.status.mongo).to.eql(connected);
      		});   
    	});
    });
    describe('Third Test', function() {
    	it('PUT should not handle /status, returns: 404', function(){    
			superagent
			.put(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
      		});   
    	});
    });
    describe('Fourth Test', function() {
    	it('PATCH should not handle /status, returns: 404', function(){    
			superagent
			.patch(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
      		});   
    	});
    });
    describe('Fifth Test', function() {
    	it('DELETE should not handle /status, returns: 404', function(){    
			superagent
			.del(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
      		});   
    	});
    });
});