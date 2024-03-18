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

    public class EventController : ControllerBase
    {
        private readonly IRepository<EventModel> _eventRepository;

        public EventController(IRepository<EventModel> eventRepository)
        {
            _eventRepository = eventRepository;
        }

        // get:
        [HttpGet]
        public async Task<IEnumerable> GetAllEvents() => await _eventRepository.GetAllAsync();
      

        // get:
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEventById(int id)
        {
            var eventItem = await _eventRepository.GetByIDAsync(id);
            return eventItem == null ? NotFound() : Ok(eventItem);
            
        }

        // post:
        [HttpPost]
        public async Task<IActionResult> CreateEvent(EventModel events)
        {
            await _eventRepository.AddAsync(events);
            return Ok(events);
        }

        // put: 
        [HttpPut]
        public async Task<IActionResult> UpdateEvent(EventModel events)
        {
            await _eventRepository.UpdateAsync(events);
            return NoContent();
        }

        // delete:
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            await _eventRepository.DeleteAsync(id);
            return NoContent();
        }

    }
}
