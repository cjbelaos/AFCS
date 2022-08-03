using System;
using System.Web.Services;
using AFCS.constructors;

namespace AFCS
{
    public partial class MainForm : System.Web.UI.Page
    {
        private static readonly MainFormFunctions mainForm = new MainFormFunctions();
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string GetStudents()
        {
            return mainForm.GetStudents();
        }

        [WebMethod]
        public static void AddStudent(Student s)
        {
            mainForm.AddStudent(s);
        }
    }
}