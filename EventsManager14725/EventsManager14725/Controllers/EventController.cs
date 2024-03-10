using EventsManager14725.Data;
using Microsoft.AspNetCore.Mvc;
using EventsManager14725.Models;
using EventsManager14725.Repositories;

namespace EventsManager14725.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class EventController : ControllerBase
    {
        private readonly IRepository<EventModel> _eventRepository;

        public EventController(IRepository<EventModel> eventRepository)
        {
            _eventRepository = eventRepository;
        }

        // get:
        [HttpGet]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventRepository.GetAllAsync();
            return Ok(events);
        }

        // get:
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEventById(int id)
        {
            var eventItem = await _eventRepository.GetByIDAsync(id);
            if (eventItem == null)
            {
                return NotFound();
            }

            return Ok(eventItem);
        }

        // post:
        [HttpPost]
        public async Task<IActionResult> CreateEvent(EventModel eventModel)
        {
            await _eventRepository.AddAsync(eventModel);
            return CreatedAtAction(nameof(GetEventById), new { id = eventModel.EventId }, eventModel);
        }

        // put: 
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvent(int id, EventModel eventModel)
        {
            if (id != eventModel.EventId)
            {
                return BadRequest();
            }

            await _eventRepository.UpdateAsync(eventModel);
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
