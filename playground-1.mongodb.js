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
db.employee.find({designation:{$in:['web Developer','IT Consultant']}});