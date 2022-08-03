<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="MainForm.aspx.cs" Inherits="AFCS.MainForm" %>

<asp:Content ID="Content1" ContentPlaceHolderID="maincontent" runat="server">
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Dashboard v2</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard v2</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <section class="content">
        <div class="content-fluid">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">List of Students</h3>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal_add">Add</button>
                    <table id="tbl_students" class="table table-bordered table-striped">
                    </table>
                </div>
                <div class="card-footer">
                </div>
            </div>
        </div>
    </section>

    <div class="modal fade" id="modal_add" data-backdrop="static">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Student</h5>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 mb-2">
                            <div class="form-group-sm">
                                <label class="col-form-label-sm">Name</label>
                                <input type="text" id="txt_name" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 mb-2">
                            <div class="form-group-sm">
                                <label class="col-form-label-sm">Level</label>
                                <input type="text" id="txt_level" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 mb-2">
                            <div class="form-group-sm">
                                <label class="col-form-label-sm">S.Y.</label>
                                <input type="text" id="txt_year" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" id="btn_add" class="btn btn-primary btn-sm">Save</button>
                    <button type="button" id="btn_close" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="script" runat="server">
    <script src="MainForm.js"></script>
</asp:Content>
