using Microsoft.AspNetCore.Mvc;
using SlnBackTest.Model;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SlnBackTest.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class UserSystemApiController : ControllerBase
    {

        [HttpPost]
        public ResponseGeneral Login(UserGeneral model)
        {
            var listUsers = new List<UserGeneral>
            {
                new UserGeneral() { Email = "hoa@customvote.es", Login = "admin", Name = "jefe", Password = "123456", TypeUser = 1 },
                new UserGeneral() { Email = "user@customvote.es", Login = "user", Name = "jefe", Password = "123456", TypeUser = 2 }
            };

            var user = listUsers.Where(x => x.Login == model.Login && x.Password == model.Password).FirstOrDefault();

            var response = new ResponseGeneral() { 
                isSuccess = (user != null),
                body = user
            };

            return response;
        }
    }
}
