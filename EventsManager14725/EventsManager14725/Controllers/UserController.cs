using EventsManager14725.Data;
using Microsoft.AspNetCore.Mvc;
using EventsManager14725.Models;
using EventsManager14725.Repositories;

namespace EventsManager14725.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private readonly IRepository<UserModel> _userRepository;

        public UserController(IRepository<UserModel> userRepository)
        {
            _userRepository = userRepository;
        }

        // get: 
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userRepository.GetAllAsync();
            return Ok(users);
        }

        //gerById
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userRepository.GetByIDAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // post:
        [HttpPost]
        public async Task<IActionResult> CreateUser(UserModel userModel)
        {
            await _userRepository.AddAsync(userModel);
            return CreatedAtAction(nameof(GetUserById), new { id = userModel.UserId }, userModel);
        }

        // put: 
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserModel userModel)
        {
            if (id != userModel.UserId)
            {
                return BadRequest();
            }

            await _userRepository.UpdateAsync(userModel);
            return NoContent();
        }

        // delete: 
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _userRepository.DeleteAsync(id);
            return NoContent();
        }

    }
}
