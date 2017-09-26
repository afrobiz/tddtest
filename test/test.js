const assert = require('chai').assert;
 const myapp = require('../src/main.js');  
  describe('ArithGeo', function() { 

      describe('Input empty value', () => {
      	it('should  return 0 for []', () => { 
      		assert.equal(myapp.ArithGeo([]), 0);
           });      
    });
     describe('Handle single input', () => {  
     it('should  return -1 for [1]', () => { 
      assert.equal(myapp.ArithGeo([1]), -1 );
               });
             }); 
            describe('Handle Arithmetic  input', () => {   
         it('should  return Arithmetic for [1,2,3,4,5]', () => {
           assert.equal(myapp.ArithGeo([1, 2, 3, 4, 5]), 'Arithmetic'); 
             });
             
    it('should  return Arithmetic for [5,10,15,20,25]', () => { 
          assert.equal(app.ArithGeo([15,10,15,20,25]), 'Arithmetic');
             });
     it('should  return Arithmetic for [20,17,14,11,8,5,3,0]', () => {
     assert.equal(app.aritGeo([20, 17, 14, 11, 8, 5, 3 0]), 'Arithmetic');
             });
       });
     describe('Handle Geometric  input', () => {
      it('should  return Geometric for [200,100,50]', () => { 
          assert.equal(app.aritGeo([200, 100, 50]), 'Geometric');
         });

            it('should  return Geometric for [3, 9, 27, 81]', () => {
          assert.equal(app.aritGeo([3, 9, 27, 81]), 'Geometric');
              });
          it('should  return Geometric for [1,0.5,0.25,0.125]', () => { 
            assert.equal(app.aritGeo([1, 0.5, 0.25, 0.125]), 'Geometric'); 
             });
             });      
      describe('Handle Non geometric or arithmetic  input', () => {
            it('should  return -1 for [1,3,3,54,9]', () => { 
            assert.equal(app.aritGeo([1, 3, 3, 54, 9]), -1);
              });
             it('should  return -1 for [1,1,1,4,9]', () => {
             assert.equal(app.aritGeo([1, 1, 1, 4, 9]), -1); 
              }); 
             it('should  return -1 for ["a",4, 9]', () => { 
             assert.equal(app.aritGeo(['a', 4, 9]), -1);
              }); 
             it('should  return -1 for ["",1,4,9]', () => {
             assert.equal(app.aritGeo(['', 1, 4, 9]), -1);
      		 });      
           });
        })