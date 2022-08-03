using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using AFCS.constructors;

namespace AFCS
{
    public class MainFormFunctions

    {
        private readonly string AFCS;
        readonly SqlConnection conn;

        public MainFormFunctions()
        {
            this.AFCS = System.Configuration.ConfigurationManager.AppSettings["AFCS"];
            conn = new SqlConnection(AFCS);
        }

        public string GetStudents()
        {
            SqlCommand cmd = new SqlCommand("sp_get_students", conn);

            cmd.CommandTimeout = 300;

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            try
            {
                if (conn.State == ConnectionState.Open)
                {
                    da.Fill(dt);
                }
                else
                {
                    conn.Open();
                    da.Fill(dt);
                }
            }
            catch (SqlException sqlex)
            {
                return sqlex.Message.ToString();
            }
            finally
            {
                conn.Close();
            }
            return JsonConvert.SerializeObject(dt);
        }

        public void AddStudent(Student s)
        {
            SqlCommand cmd = new SqlCommand("sp_add_student", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@student_name", s.Name);
            cmd.Parameters.AddWithValue("@student_level", s.Level);
            cmd.Parameters.AddWithValue("@school_year", s.School_Year);

            cmd.CommandTimeout = 300;

            try
            {
                if (conn.State == ConnectionState.Open)
                {
                    cmd.ExecuteNonQuery();
                }
                else
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (SqlException sqlex)
            {
                sqlex.Message.ToString();
            }
            finally
            {
                conn.Close();
            }
        }
    }
}