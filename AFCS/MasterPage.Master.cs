using System;

namespace AFCS
{
    public partial class MasterPage : System.Web.UI.MasterPage
    {
        public string _PageName;
        public string _FormMenuOpen = "";
        public string _FormActive = "";
        public string _students = "";
        public string _balances = "";
        public string _payments = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            _PageName = System.Web.VirtualPathUtility.GetFileName(System.Web.HttpContext.Current.Request.Url.AbsolutePath);
            if (_PageName == "MainForm.aspx")
            {
                _FormMenuOpen = "menu-open";
                _FormActive = "active";
                _students = "active";
            }
        }
    }
}