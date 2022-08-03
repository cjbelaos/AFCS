var MainTable;
$(document).ready(function () {
    GetStudents(function (e) {
        if (MainTable !== undefined && MainTable !== null) {
            MainTable.clear().destroy();
        }
        MainTable = $("#tbl_students").DataTable({
            data: e,
            columns: [
                { data: "student_id", title: 'ID' },
                { data: "student_name", title: 'Name' },
                { data: "student_level", title: 'Grade' },
                { data: "school_year", title: 'School Year' },
            ], 
        });
    });

    $("#btn_add").on("click", function () {

    });
    
    function GetStudents(callback) {
        $.ajax({
            url: "MainForm.aspx/GetStudents",
            type: "post",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (e) {
                var d = JSON.parse(e.d);
                if (callback != + undefined) {
                    callback(d);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    };

    function AddStudent(callback) {
        var Student = {};
        Student.Name = $("#txt_name").val();
        Student.Level = $("#txt_level").val();
        Student.School_Year = $("#txt_year").val();
        $.ajax({
            url: "MainForm.aspx/AddStudent",
            type: "post",
            data: JSON.stringify"{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (e) {
                var d = JSON.parse(e.d);
                if (callback != + undefined) {
                    callback(d);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
});