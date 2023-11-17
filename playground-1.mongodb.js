//ASSIGNMENT NO 1

use('company')

db.createCollection('Abhishek')
db.collections()


//inserting into employee collection
db.employee.insertOne({"eid":1,"ename":"Shahrukh khan","designation":"Actor","hiredate":"2015/12/2","salary":3000000000,"hobbies":"dancing","department":"creative"})

//inserting 10 employees into employee collection
db.employee.insertOne({ "eid": 0, "ename": "John Doe", "designation": "Software Engineer", "hiredate": "2023/11/16", "salary": 45000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 2, "ename": "Jane Smith", "designation": "Data Analyst", "hiredate": "2023/11/16", "salary": 38000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 3, "ename": "Robert Johnson", "designation": "Network Administrator", "hiredate": "2023/11/16", "salary": 52000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 4, "ename": "Emily Brown", "designation": "System Architect", "hiredate": "2023/11/16", "salary": 49000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 5, "ename": "Michael Wilson", "designation": "IT Consultant", "hiredate": "2023/11/16", "salary": 43000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 6, "ename": "Sophia Garcia", "designation": "Web Developer", "hiredate": "2023/11/16", "salary": 46000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 7, "ename": "William Martinez", "designation": "Database Administrator", "hiredate": "2023/11/16", "salary": 50000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 8, "ename": "Olivia Miller", "designation": "Cybersecurity Analyst", "hiredate": "2023/11/16", "salary": 41000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 9, "ename": "Ethan Thompson", "designation": "UI/UX Designer", "hiredate": "2023/11/16", "salary": 48000, "hobbies": "IT related hobbies", "department": "IT" });

db.employee.insertOne({ "eid": 10, "ename": "Ava Davis", "designation": "IT Project Manager", "hiredate": "2023/11/16", "salary": 47000, "hobbies": "IT related hobbies", "department": "IT" });


//1. List the Names of Analysts and Salesman
db.employee.find({designation:{$in:['web Developer','IT Consultant']}},{ename:1,_id:0});

//2. List the eid,ename and salary from employee collection.
db.employee.find({},{ename:1,eid:1,salary:1,_id:0});

//3.List names of employees who are not managers.
db.employee.find({"designation":{$ne:"Web Developer"}},{ename:1,_id:0});

//4. List the names of employees whose employee numbers are 1,3,7,9.
db.employee.find({eid:{$in:[1,3,7,9]}},{ename:1,_id:0});

//5.List the names of all employees those having reading as a secound hobby.

//6.who have joined between 30 June and 31 Dec 2015.
    // use $gte for greater than and $lte for less than
    db.employee.find({"hiredate":{$gte:ISODate("2015-06-01"),$lte:ISODate("2015-06-05")}});

//7. List the different designations in the company.
db.employee.distinct("designation");

//8.List the eid,ename,salary of all employees whose salary is less than 10000.
db.employee.find({"salary":{$lte:1000}},{ename:1,eid:1,salary:1,_id:0});

//9.List the name and designation of the employee who works in production department.
db.employee.find({"department":{$eq:"IT"}},{ename:1,designation:1,_id:0});

//10.List the all employees whose name start with "A" letter.
//Study about using Regular Expression in MongoDB

//14. List the number of employees working in sales department.
db.employee.countDocuments();

//15.List the number of designations available in the EMP collections.
db.employee.countDocuments({"designation":"Web Developer"});

// 16.  List the eid,ename,salary of all employees whose salary in between 10000 to 20000.

db.employee.find({"salary":{$gt:1000,$lt:20000}},{eid:1,ename:1,salary:1,_id:0});

//17. List the eid,ename of all employees whose salary is gretter than or equal to 15000.
db.employee.find({"salary":{$gte:15000}},{ename:1,salary:1,eid:1,_id:0});

//18.List details of employees whose department is Sales and salary is 10000.
db.employee.find({"department":"IT","salary":38000},{ename:1,_id:0});



//19. List the names of employees those having reading and painting hobbies.
db.employee.find({"hobbies":{$in:['reading','painting']}});

//20.List the first hobby of all employees from the employee collection.

//21. List the names of all employees those having three different hobbies.

//ASSIGNMENT NO 2A 

// Problem Statement
// Implement aggregation with customer collection using MongoDB. Customer collection consist of
// following data
// > db.customer.find();
// { "_id" : ObjectId("54265694517b30434f6a2bdc"), "custID" : "A123", "Amount" : 500, "status" :
// "A" }
// { "_id" : ObjectId("542656eb517b30434f6a2bdd"), "custID" : "A123", "Amount" : 250, "status" :
// "A" }
// { "_id" : ObjectId("54265726517b30434f6a2bde"), "custID" : "B212", "Amount" : 200, "status" :
// "A" }
// { "_id" : ObjectId("54265757517b30434f6a2bdf"), "custID" : "A123", "Amount" : 300, "status" :
// "D" }

//create a new collection
db.createCollection('customer');

//inserting Data into collection

db.customer.insertOne({"custID" : "A123", "Amount" : 500, "status" :
"A" });

db.customer.insertOne({"custID" : "A123", "Amount" : 250, "status" :
"A" });

db.customer.insertOne({"custID" : "B212", "Amount" : 200, "status" :
"A" });

db.customer.insertOne({"custID" : "A123", "Amount" : 300, "status" :
"D" });

//PART A 

//1. Find the total amount of each customer.
db.customer.aggregate([{$group:{_id:"$custID",totalAmount:{$sum:"$Amount"}}}]);

//2. Find the total amount of each customer whose status is A

db.customer.aggregate([{$match:{"status":"A"}},{$group:{_id:"$custID",totalAmount:{$sum:"$Amount"}}}]);

//3. Find the minimum amount of each customer whose status is A
db.customer.aggregate([{$match:{"status":"A"}},{$group:{_id:"$custID",MinAmount:{$min:"$Amount"}}}]);

//4. Find the maximum amount of each customer whose status is A
db.customer.aggregate([{$match:{"status":"A"}},{$group:{_id:"$custID",MinAmount:{$max:"$Amount"}}}]);

//5. Find the Average amount of each customer whose status is A
db.customer.aggregate([{$match:{"status":"A"}},{$group:{_id:"$custID",MinAmount:{$avg:"$Amount"}}}]);

// PART B 

//create an Index on CustID


//get index 
db.customer.getindexes();

//drop index
db.customer.dropIndex('custID_1');





