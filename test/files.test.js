describe('FILES', function() {
    var goodUrl, badUrl, filesUrl;
	before(function(){
		goodUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/files/lib';
		badUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/files/lib1';
		filesUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/files';
	});
    describe('First Test', function() {
        it('GET should handle /files/lib, returns: 200', function(){    
			superagent
			.get(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		expect(res.body.length).to.be.above(0);
        		expect(res.body).to.include.keys('files');
        		expect(res.body).to.contain('helper.js');
      		});   
    	});
    	it('GET should not handle invalid directory /files/lib1, returns: 404', function(){    
			superagent
			.get(badUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(res.body.status);
      		});   
    	});
    	it('GET should not handle no directory name /files, returns: 404', function(){    
			superagent
			.get(filesUrl)
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
    	it('POST should not handle /files/{dirname}, returns: 404', function(){    
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
    	it('PUT should not handle /files/{dirname}, returns: 404', function(){    
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
    	it('PATCH should not handle /files/{dirname}, returns: 404', function(){    
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
    	it('DELETE should not handle /files/{dirname}, returns: 404', function(){    
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