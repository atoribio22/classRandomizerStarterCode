$(document).ready(function(){
    var students = ["Brittany", "Jeanette", "Wilder", "Julio", "Ashley"];
    var teachers = ["Justin", "Aaron", "Zack", "Julia"];

   


    $("#studentButton").click( function(){
        var random_st = Math.floor(Math.random()*students.length);
        $("#studentDisplay").append(students[random_st]);
    });

    $("#teacherButton").click( function(){
        var random_te = Math.floor(Math.random()*teachers.length);
        $("#teacherDisplay").append(teachers[random_te]);
    });
});
