using System.Collections.Generic;
using System.Threading.Tasks;

namespace EventsManager14725.Repositories
{
    // WIUT STUDENT ID: 00014725
    public interface IRepository <T>
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIDAsync(int id);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(int id);
    }
}
