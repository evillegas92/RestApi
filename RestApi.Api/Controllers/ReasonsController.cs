using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using RestApi.DataAccess.Brokers;
using RestApi.DataAccess.Entities;

namespace RestApi.Api.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class ReasonsController : ApiController
    {
        private readonly IReasonsBroker _reasonsBroker;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="reasonsBroker"></param>
        public ReasonsController(IReasonsBroker reasonsBroker)
        {
            _reasonsBroker = reasonsBroker;
        }

        /// <summary>
        /// Get all reasons.
        /// </summary>
        /// <returns>IEnumerable of Reason</returns>
        public async Task<IHttpActionResult> Get()
        {
            IEnumerable<Reason> reasons = await _reasonsBroker.GetReasons();

            if (!reasons.Any())
                return StatusCode(HttpStatusCode.NoContent);

            return Ok(reasons);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
