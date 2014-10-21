describe('USER', function() {
    var goodUrl;
	before(function(){
		goodUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/authUser';
		var userUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/addUser';
		superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
		.send({email: "auser1@test.com", password: "auser1", age: 20, state: "NY"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser2@test.com", password: "auser2", age: 18, state: "CA"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser3@test.com", password: "auser3", age: 7, state: "NY"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser4@test.com", password: "auser4", age: 12, state: "CA"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser5@test.com", password: "auser5", age: 25, state: "NY"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
      	});
	});
    describe('First Test', function() {
        it('GET should not handle /authUser, returns: 404', function(){    
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
    	it('POST should handle /authUser, returns: 200', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
			.send({ email: 'auser1@email.com', password: 'auser1' })
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
      		});   
    	});
    	it('POST should handle /authUser, good username, bad password, returns: 401', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
			.send({ email: 'auser1@email.com', password: 'auser2' })
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(401);
      		});   
    	});
    	it('POST should handle /authUser, bad user name, good password, returns: 401', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
			.send({ email: 'auser2@email.com', password: 'auser1' })
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(401);
      		});   
    	});
    	it('POST should handle /authUser, bad username and password, returns: 404', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
			.send({ email: 'auser9@email.com', password: 'auser9' })
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
      		});   
    	});
    });
    describe('Third Test', function() {
    	it('PUT should not handle /authUser, returns: 404', function(){    
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
    	it('PATCH should not handle /authUser, returns: 404', function(){    
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
    	it('DELETE should not handle /authUser, returns: 404', function(){    
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