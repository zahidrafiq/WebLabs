
var data = [{"RollNum":"BCSF15M001","StdName":"Zahid","Semester":8,"Image":"img1.jpg",
			"Courses":[
			{"CourseName":"Web Engineering","CreditHours":3,"Grade":"A","Teacher":"Mr. Ali"},
			{"CourseName":"Web Engineering Lab","CreditHours":1,"Grade":"B+","Teacher":"Mr. Ali"},
			{"CourseName":"OOP","CreditHours":2,"Grade":"B+","Teacher":"Mr. Ahmad"},
			{"CourseName":"COAL","CreditHours":3,"Grade":"A-","Teacher":"Mr. Bilal"}]},

			{"RollNum":"BCSF15M002","StdName":"Noman","Semester":6,"Image":"img2.jpg",
			"Courses":[
			{"CourseName":"EAD","CreditHours":3,"Grade":"B+","Teacher":"Mr. Bilal"},
			{"CourseName":"Wrirting Workshop","CreditHours":2,"Grade":"A-","Teacher":"Mr. Noman"},
			{"CourseName":"EAD Lab","CreditHours":1,"Grade":"A-","Teacher":"Mr. Bilal"},
			{"CourseName":"DSA","CreditHours":3,"Grade":"A","Teacher":"Mr. Waheed"},
			{"CourseName":"COAL","CreditHours":2,"Grade":"A-","Teacher":"Mr. Bilal"}]},

			{"RollNum":"BCSF15M003","StdName":"Azam","Semester":7,"Image":"img3.jpg",
			"Courses":[
			{"CourseName":"Web Engineering","CreditHours":3,"Grade":"A","Teacher":"Mr. Ali"},
			{"CourseName":"OS","CreditHours":3,"Grade":"B+","Teacher":"Mr. Atif"},
			{"CourseName":"TBW","CreditHours":2,"Grade":"A-","Teacher":"Mr. Aslam"},
			{"CourseName":"COAL Lab","CreditHours":1,"Grade":"B+","Teacher":"Mr. Bilal"},
			{"CourseName":"COAL","CreditHours":3,"Grade":"A-","Teacher":"Mr. Ali"}]}			
		];
		
		var grades = {A: 4.0,"A-": 3.7,"B+": 3.3,B: 3.0,"B-": 2.7,"C":2.3,"C-":2.0};
//////////////////////////////////////////////////////////////////////////////////////
		
$(document).ready(function(){
		
		FillDropBox();
		
		$("#SUname").change(function(){
			getStudentRecord($(this).val());

		});
	
 });

	function getStudentRecord(RollNum)
	{
		//Write code here
	}
	
 function ShowDetails(stdudent)
 {
	 //Write Code here
 }
 
 function calculateGPA(stdudent)
 {
	//Write code here
 }
 
	function FillDropBox()
	{
		//Write code here
    }
 }
 
 