describe('USER', function() {
    var goodUrl;
	before(function(){
		goodUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/users';
		var userUrl = 'http://' + config.server.api.host + ':' + config.server.api.port + '/addUser';
		superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
		.send({email: "auser11@test.com", password: "auser1", age: 20, state: "NY"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
        	done();
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser12@test.com", password: "auser2", age: 18, state: "CA"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
        	done();
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser13@test.com", password: "auser3", age: 7, state: "NY"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
        	done();
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser14@test.com", password: "auser4", age: 12, state: "CA"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
        	done();
      	}); 
      	superagent.post(userUrl).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Accept-Charset', 'UTF-8')
      	.send({email: "auser15@test.com", password: "auser5", age: 25, state: "NY"})
      	.end(function(e, res){
        	expect(e).to.eql(null);
        	done();
      	});
	})
    describe('First Test', function() {
        it('GET should handle /users, returns: 200', function(){    
			superagent
			.get(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		done();
      		});   
    	});
    	it('GET should handle /users?limit=3, returns: 200', function(){ 
     		var aUrl = goodUrl + '/?limit=3';   
			superagent
			.get(aUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		expect(res.body.length).to.eq(3);
        		done();
      		});   
    	});
    	it('GET should handle /users?page=2, returns: 200', function(){ 
     		var aUrl = goodUrl + '/?page=2';   
			superagent
			.get(aUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		done();
      		});   
    	});
    	it('GET should handle /users/?page=2&limit=3, returns: 200', function(){ 
     		var aUrl = goodUrl + '/?page=2&limit=3';   
			superagent
			.get(aUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		done();
      		});   
    	});
    	it('GET should handle /users/?state=CA, returns: 200', function(){ 
     		var aUrl = goodUrl + '/?state=CA';   
			superagent
			.get(aUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		done();
      		});   
    	});
    	it('GET should handle /users/?ageLessThan=20, returns: 200', function(){ 
     		var aUrl = goodUrl + '/?ageLessThan=20';   
			superagent
			.get(aUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		done();
      		});   
    	});
    	it('GET should handle /users/?ageMoreThan=20, returns: 200', function(){ 
     		var aUrl = goodUrl + '/?ageMoreThan=20';   
			superagent
			.get(aUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(200);
        		done();
      		});   
    	});
    });
    describe('Second Test', function() {
    	it('POST should not handle /users, returns: 404', function(){    
			superagent
			.post(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
        		done();
      		});   
    	});
    });
    describe('Third Test', function() {
    	it('PUT should not handle /users, returns: 404', function(){    
			superagent
			.put(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
        		done();
      		});   
    	});
    });
    describe('Fourth Test', function() {
    	it('PATCH should not handle /users, returns: 404', function(){    
			superagent
			.patch(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
        		done();
      		});   
    	});
    });
    describe('Fifth Test', function() {
    	it('DELETE should not handle /users, returns: 404', function(){    
			superagent
			.del(goodUrl)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Accept-Charset', 'UTF-8')
      		.end(function(e, res){
        		expect(e).to.eql(null);
        		expect(res.status).to.eql(404);
        		done();
      		});   
    	});
    });
});