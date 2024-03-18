using EventsManager14725.Data;
using Microsoft.AspNetCore.Mvc;
using EventsManager14725.Models;
using EventsManager14725.Repositories;
using System.Collections;

namespace EventsManager14725.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    // WIUT STUDENT ID: 00014725

    public class UserController : ControllerBase
    {
        private readonly IRepository<UserModel> _userRepository;

        public UserController(IRepository<UserModel> userRepository)
        {
            _userRepository = userRepository;
        }

        // get: 
        [HttpGet]
        public async Task<IEnumerable> GetAllUsers()
        {
            var users = await _userRepository.GetAllAsync();
            return users;
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
        public async Task<IActionResult> CreateUser(UserModel users)
        {
            await _userRepository.AddAsync(users);
            return CreatedAtAction(nameof(GetUserById), new { id = users.UserId }, users);
        }

        // put: 
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(UserModel users)
        {
            await _userRepository.UpdateAsync(users);
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
