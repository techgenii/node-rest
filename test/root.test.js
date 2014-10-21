describe('ROOT', function() {
    var goodUrl;
	before(function(){
		goodUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/';
	});
    describe('First Test', function() {
        it('GET should handle /, returns: 200', function(){    
			superagent
			.get(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		expect(res.body.message).to.eql('Hello, world!');
      		});   
    	});
    });
    describe('Second Test', function() {
    	it('POST should not handle /, returns: 404', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
      		});   
    	});
    });
    describe('Third Test', function() {
    	it('PUT should not handle /, returns: 404', function(){    
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
    	it('PATCH should not handle /, returns: 404', function(){    
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
    	it('DELETE should not handle /, returns: 404', function(){    
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