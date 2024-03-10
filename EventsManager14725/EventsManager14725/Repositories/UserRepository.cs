using EventsManager14725.Data;
using EventsManager14725.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsManager14725.Repositories
{
    // WIUT STUDENT ID: 00014725

    public class UserRepository : IRepository<UserModel>
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UserModel>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<UserModel> GetByIDAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task AddAsync(UserModel entity)
        {
            await _context.Users.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(UserModel entity)
        {
            _context.Users.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Users.FindAsync(id);
            if (entity != null)
            {
                _context.Users.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
