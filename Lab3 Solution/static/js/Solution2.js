var gradesJSONString = `{"A":85,"A_minus":80,"B_plus":75,"B":70,"B_minus":65,"C_plus":61,"C":58,"C_minus":55,"D":50,"F":0}`;
var studentListJSONString = `
[
    {"Name":"Jone Doe","Course":"CS201","CreditHours":2,"Teacher":"Mr. X","TotalMarks":100,"ObtainedMarks":74},
    {"Name":"Jone Doe","Course":"CS101","CreditHours":3,"Teacher":"Mr. Y","TotalMarks":100,"ObtainedMarks":90},
    {"Name":"Jone Doe","Course":"CS401","CreditHours":1,"Teacher":"Mr. Z","TotalMarks":120,"ObtainedMarks":44},
    
    {"Name":"Bob J","Course":"CS201","CreditHours":2,"Teacher":"Mr. X","TotalMarks":100,"ObtainedMarks":89},
    {"Name":"Bob J","Course":"CS101","CreditHours":3,"Teacher":"Mr. Y","TotalMarks":100,"ObtainedMarks":90},
    {"Name":"Bob J","Course":"CS401","CreditHours":1,"Teacher":"Mr. Z","TotalMarks":120,"ObtainedMarks":70},
    
    {"Name":"Ainz Ooal Gown","Course":"CS201","CreditHours":2,"Teacher":"Mr. X","TotalMarks":100,"ObtainedMarks":100},
    {"Name":"Ainz Ooal Gown","Course":"CS101","CreditHours":3,"Teacher":"Mr. Y","TotalMarks":100,"ObtainedMarks":100},
    {"Name":"Ainz Ooal Gown","Course":"CS401","CreditHours":1,"Teacher":"Mr. Z","TotalMarks":120,"ObtainedMarks":120}
]`;

$(function () {
debugger
    var gradesList = {};
    var studentsData = [];

    gradesList = JSON.parse(gradesJSONString);
    studentsData = JSON.parse(studentListJSONString);

    populateDropdownList();

    $(".studentLoginItem").click(loginStudent);

    function populateDropdownList()
    {debugger
        let distinctStudents = [];

        for(let x=0; x<studentsData.length; x++)
        {
            if(distinctStudents.indexOf(studentsData[x].Name)===-1) {
                distinctStudents.push(studentsData[x].Name);
            }
        }

        distinctStudents.sort();

        let dropdownMenu = $("#studentLoginDropdownMenu");
        dropdownMenu.empty();

        for(let x=0; x<distinctStudents.length; x++)
        {debugger
            dropdownMenu.append(`<a href="#" class="dropdown-item studentLoginItem">${distinctStudents[x]}</a>`);
        }
    }

    function loginStudent(eventData)
    {debugger
        let studentInfoTableBody = $("#studentInfoTableBody");
        studentInfoTableBody.empty();

        let totalCredHrs = 0,
            totalGradePoints = 0;
        for(let x=0; x<studentsData.length; x++)
        {
            if(studentsData[x].Name === eventData.target.text) {
                let grade = calculateGrade(studentsData[x].TotalMarks,studentsData[x].ObtainedMarks);
                studentInfoTableBody.append(`
                <tr>
                    <td>${studentsData[x].Name}</td>
                    <td>${studentsData[x].Course}</td>
                    <td>${studentsData[x].CreditHours}</td>
                    <td>${studentsData[x].Teacher}</td>
                    <td>${studentsData[x].TotalMarks}</td>
                    <td>${studentsData[x].ObtainedMarks}</td>
                    <td>${grade}</td>
                </tr>
                `);

                totalCredHrs += studentsData[x].CreditHours;
                totalGradePoints += calculateGradePoints(grade) * studentsData[x].CreditHours;
            }
        }

        $("#studentName").text(eventData.target.text);
        $("#dropdownMenuButton").text(eventData.target.text);
        $("#studentTotalCreditHours").text(totalCredHrs);
        $("#studentCGPA").text((totalGradePoints/totalCredHrs).toPrecision(2));
    }

    function calculateGrade(totalMarks, obtainedMarks)
    {debugger
        console.log(gradesList);
        let percentMarks = (obtainedMarks/totalMarks)*100;
        console.log(percentMarks);
        if(percentMarks>=gradesList.A)
            return "A";
        if(percentMarks>=gradesList.A_minus)
            return "A-";
        if(percentMarks>=gradesList.B_plus)
            return "B+";
        if(percentMarks>=gradesList.B)
            return "B";
        if(percentMarks>=gradesList.B_minus)
            return "B-";
        if(percentMarks>=gradesList.C)
            return "C";
        if(percentMarks>=gradesList.C_minus)
            return "C-";
        if(percentMarks>=gradesList.D)
            return "D";
        if(percentMarks>=gradesList.D)
            return "E";
        return "F";
    }

    function calculateGradePoints(grade)
    {debugger
        let gradePoints = 0;
        switch (grade) {
            case "A":
                gradePoints = 4.0;
                break;
            case "A-":
                gradePoints = 3.7;
                break;
            case "B+":
                gradePoints = 3.3;
                break;
            case "B":
                gradePoints = 3.0;
                break;
            case "B-":
                gradePoints = 2.7;
                break;
            case "C+":
                gradePoints = 2.3;
                break;
            case "C":
                gradePoints = 2.0;
                break;
            case "C-":
                gradePoints = 1.7;
                break;
            case "D":
                gradePoints = 1.0;
                break;
            case "F":
                gradePoints = 0.0;
                break;

        }
        return gradePoints;
    }
});



