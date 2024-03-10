using Microsoft.EntityFrameworkCore;
using EventsManager14725.Data;
using EventsManager14725.Models;



namespace EventsManager14725.Repositories
{
    // WIUT STUDENT ID: 00014725

    public class EventRepository : IRepository<EventModel>
    {
        private readonly ApplicationDbContext _context;

        public EventRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<EventModel>> GetAllAsync()
        {
            return await _context.Events.ToListAsync();
        }
        public async Task<EventModel> GetByIDAsync(int id)
        {
            return await _context.Events.FindAsync(id);
        }

        public async Task AddAsync(EventModel entity)
        {
            await _context.Events.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(EventModel entity)
        {
            _context.Events.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Events.FindAsync(id);
            if (entity != null)
            {
                _context.Events.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
