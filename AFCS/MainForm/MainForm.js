var MainTable;
$(document).ready(function () {
    GetStudents();
});

$("#btn_add").on("click", function () {
    alert('yes');
    AddStudent();
});

function GetStudents(callback) {
    $.ajax({
        url: "MainForm.aspx/GetStudents",
        type: "post",
        data: "{}",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (e) {
            var d = JSON.parse(e.d);
            if (callback !== undefined) {
                callback(d);
            }
            var btn_edit = '<button type="button" class="btn btn-sm btn-primary btn-update-row" title="Update"><i class="fas fa-edit"></i></button>';
            var btn_delete = '<button type="button" class="btn btn-sm btn-danger btn-delete-row" title="Delete"><i class="fas fa-trash"></i></button>';
            if (MainTable !== undefined && MainTable !== null) {
                MainTable.clear().destroy();
            }
            MainTable = $("#tbl_students").DataTable({
                paging: true,
                lengthChange: true,
                ordering: true,
                info: true,
                autoWidth: true,
                data: d,
                columns: [
                    { data: "student_id", title: 'ID' },
                    { data: "student_name", title: 'Name' },
                    { data: "student_level", title: 'Grade' },
                    { data: "school_year", title: 'School Year' },
                    {
                        data: "student_id", title: 'Edit', render: function (e) {
                            return btn_edit;
                        }
                    },
                    {
                        data: "student_id", title: 'Delete', render: function (e) {
                            return btn_delete;
                        }
                    },
                ],
            });
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
        data: JSON.stringify({ s: Student }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (e) {
            var d = JSON.parse(e.d);
            console.log(d);
            if (callback !== undefined) {
                callback(d);
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
};