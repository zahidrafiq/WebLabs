angular.module('student-info', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
var studentApp = angular.module('student-info')

studentApp.controller("studentCtrl", function ($scope) {

    let studentVM = new StudentViewModel();
    $scope.sNames = studentVM.getDistinctNames();

    // $scope.status = {
    //     isopen: false
    // };
    //
    // $scope.toggled = function (open) {
    //     // alert('Dropdown is now: '+open);
    // };
    //
    // $scope.toggleDropdown = function ($event) {
    //     $event.preventDefault();
    //     $event.stopPropagation();
    //     $scope.status.isopen = !$scope.status.isopen;
    // };
    $scope.itemClicked = function (aElem) {
        // alert(aElem.name)
        $scope.studentName = aElem.name;
        // studentVM.setStudentName($scope.studentName);

        $scope.studentData = studentVM.getStudentData($scope.studentName);
        $scope.totalCH = studentVM.totalCreditHours();
        $scope.cgpa = studentVM.calculateCGPA();
        // alert("clicked");
    }

})

var StudentViewModel = function () {
    let me = this;
    me.name = null;
    me.studentData = [];
    me.setStudentName = function (name){
        me.name = name;
    }
    me.getDistinctNames = function () {
        let sNames = [];
        for (var i in studentsData) {
            let name = studentsData[i].Name;
            if (sNames.indexOf(name) == -1) {
                sNames.push(name)
            }
        }
        return sNames
    }
    me.getStudentData = function (name) {
        me.studentData= [];
        for (var i in studentsData) {
            if (studentsData[i].Name === name) {
                //cloning object
                var dataObj = Object.assign({}, studentsData[i]);
                dataObj["Grade"] = me.calculateGrade(dataObj.TotalMarks, dataObj.ObtainedMarks);
                me.studentData.push(dataObj)
            }
        }
        return me.studentData;
    }
    me.calculateGrade = function (totalMarks, obtainedMarks) {
        // console.log(gradesList);
        let percentMarks = (obtainedMarks / totalMarks) * 100;

        for (var index in gradesList) {
            if (gradesList[index].minMarks < percentMarks) {
                return gradesList[index].grade;
            }
        }
    }

    me.calculateGradePoints = function (grade) {
        for (var index in gradesList) {
            if (gradesList[index].grade == grade)
                return gradesList[index].gradePoints
        }

    }

    me.totalCreditHours = function () {
        let totalCreditHours = 0;
        for (var i in me.studentData) {
            totalCreditHours += studentsData[i].CreditHours;
        }
        return totalCreditHours;
    }

    me.calculateCGPA = function () {
        let totalCreditHours = 0;
        let sumCHGP = 0;
        for (var i in me.studentData) {
            var GP = me.calculateGradePoints(me.studentData[i].Grade);
            sumCHGP += parseFloat(me.studentData[i].CreditHours) * parseFloat(GP);
            totalCreditHours += studentsData[i].CreditHours;
        }
        return (sumCHGP / totalCreditHours).toFixed(3);
    }
}

