using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using RestApi.DataAccess.Entities;

namespace RestApi.DataAccess.Brokers
{
    public interface IReasonsBroker
    {
        Task<IEnumerable<Reason>> GetReasons();
    }

    public class ReasonsBroker : IReasonsBroker
    {
        private readonly string _connectionString;

        private const string getReasonsQuery = "SELECT * FROM Reasons";

        public ReasonsBroker(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<Reason>> GetReasons()
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                IEnumerable<Reason> reasons = await connection.QueryAsync<Reason>(getReasonsQuery);
                return reasons;
            }
        }
    }
}
