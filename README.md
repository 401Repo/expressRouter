# LAB: API Server

### Dynamic API Phase 4: Completing work on the API server


Further dry your project by using one router and midleware to route all your request dinamically between producst and categories. Provide a UML, do testing for your crud and paths using super goose, make suer your server connects to your index and starts via export fucntion, and the use the storefront in the lab 9 lab to test your data reachin your api and saving to mongoose.

### UML

![UML](https://github.com/401Repo/expressRouter/blob/main/UML.jpg?raw=true)

My UML shows a high logic view of how a request must hit my middleware and successfully save or come back with an error. This is outside of the testing going on in the __test__ files.

### TDD

#####  tests the product controller and data layer
  
  Testing using Supergoose atm:
  
-    ✓ should return a new product "Candy" on POST /product (41 ms)
-    ✓ should return 1 product by id (13 ms)
-    ✓ should update a new product "Candy" to "Cookies" on Put /product (8 ms)
-    ✓ should return a new category "Electronics" on POST /category (4 ms)
-    ✓ should return 1 category by id (3 ms)
-    ✓ should be able 404 err message (2 ms)
-    ✓ Testing 500 error (1 ms)
-    ✓ should update a new category "Electronics" to "Coputers" 
-    ✓ should delete 1 category by id (5 ms)
-    ✓ should delete 1 product by id (4 ms)




