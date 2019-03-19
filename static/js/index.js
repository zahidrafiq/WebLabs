//Understand and use following JSON object To display student Records.


var data = [{"RollNum":"BCSF15M001","StdName":"Zahid","Semester":8,"Image":"img1.jpg",
			"Courses":[
			{"CourseName":"Web Engineering","CreditHours":3,"Grade":"A"},
			{"CourseName":"Web Engineering Lab","CreditHours":1,"Grade":"B+"},
			{"CourseName":"OOP","CreditHours":2,"Grade":"B+"},
			{"CourseName":"COAL","CreditHours":3,"Grade":"A-"}]},

			{"RollNum":"BCSF15M002","StdName":"Noman","Semester":6,"Image":"img2.jpg",
			"Courses":[
			{"CourseName":"EAD","CreditHours":3,"Grade":"B+"},
			{"CourseName":"Wrirting Workshop","CreditHours":2,"Grade":"A-"},
			{"CourseName":"EAD Lab","CreditHours":1,"Grade":"A-"},
			{"CourseName":"DSA","CreditHours":3,"Grade":"A"},
			{"CourseName":"COAL","CreditHours":2,"Grade":"A-"}]},

			{"RollNum":"BCSF15M003","StdName":"Azam","Semester":7,"Image":"img3.jpg",
			"Courses":[
			{"CourseName":"Web Engineering","CreditHours":3,"Grade":"A"},
			{"CourseName":"OS","CreditHours":3,"Grade":"B+"},
			{"CourseName":"TBW","CreditHours":2,"Grade":"A-"},
			{"CourseName":"COAL Lab","CreditHours":1,"Grade":"B+"},
			{"CourseName":"COAL","CreditHours":3,"Grade":"A-"}]}			
		];

//=====================================		
		var grades = {A: 4.0,"A-": 3.7,"B+": 3.3,B: 3.0,"B-": 2.7,"C":2.3,"C-":2.0};

