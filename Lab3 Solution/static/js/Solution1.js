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

 //====================================================//
	function getStudentRecord(RollNum)
	{
		for(var i=0;i<data.length;i++)
		{
			var Student = data[i];
			if(Student.RollNum==RollNum)
			{
				$("#name").text(Student.StdName);
				$("#rollnum").text(Student.RollNum);
				$("#semester").text(Student.Semester);
				$("#image").attr("src","static/img/"+Student.Image);
				ShowDetails(Student);
				calculateGPA(Student)
			}
		} 
	}
	
 //====================================================//
 function ShowDetails(std)
 {
	 debugger;
	 var course= std.Courses;
	  var tBody=$("#tblBody");
	  tBody.html('');
	 for(var i=0;i<course.length;i++)
	 {
		var cName=$("<td>").text(course[i].CourseName);
		var cHrs=$("<td>").text(course[i].CreditHours);
		var grade=$("<td>").text(course[i].Grade);
		var teacher=$("<td>").text(course[i].Teacher);
		var tr=$("<tr>");
		tr.append([cName,teacher,cHrs,grade]);
		
		tBody.append(tr);
	 
	 }
 }
 
 //====================================================//
 function calculateGPA(std)
 {
	var courseList = std.Courses;
	var totalM =0,totalCreditHrs=0;
	for(var i=0;i<courseList.length;i++)
	{
		var grad = courseList[i].Grade;
		var creditHrs = courseList[i].CreditHours;
		var marks = grades[grad];
		totalM  =totalM+ (marks*creditHrs);
		totalCreditHrs = totalCreditHrs + creditHrs;
	}		
	
	var GPA = totalM/totalCreditHrs;
	GPA=parseFloat((GPA).toFixed(2));
	$("#gpa").text(GPA);
 }
 
 //====================================================//
	function FillDropBox()
	{
		$("#SUname").html('');
		var opt = "<option value= 0> -- Select -- </option>";
		$("#SUname").append(opt);
		for(var i=0;i<data.length;i++)
		{
			var Student = data[i];
			opt = "<option value='" + Student.RollNum + "'>" + Student.StdName + "</option>"
			$("#SUname").append(opt);
		 // var newSelect = document.createElement('option');
        //selectHTML = "<option value='" + B[i] + "'>" + B[i] + "</option>";
        //newSelect.innerHTML = selectHTML;
        //document.getElementById('category').add(newSelect);
    }
 }
 
 