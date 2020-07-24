using Microsoft.AspNetCore.Mvc;

namespace ocas.Controllers
{
    /// <summary>
    /// This class is created for performing the common functionalities such as 
    /// 1. Authorization validation for request headers  
    /// 2. Logging Enabling 
    /// 3. Routing 
    /// These activities will be implemented as part of second phase
    /// This class cannot be used directly and it must be implemetned
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController : ControllerBase
    {

        public BaseController()
        {
            
        }
    }
}
