using EventsManager14725.Models;
using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;


namespace EventsManager14725.Data
{
    // WIUT STUDENT ID: 00014725

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<EventModel> Events { get; set; }
        public DbSet<UserModel> Users { get; set; }
    }
}
