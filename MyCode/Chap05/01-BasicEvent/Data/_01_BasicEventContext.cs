using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using _01_BasicEvent.Models;

namespace _01_BasicEvent.Data
{
    public class _01_BasicEventContext : DbContext
    {
        public _01_BasicEventContext (DbContextOptions<_01_BasicEventContext> options)
            : base(options)
        {
        }

        public DbSet<_01_BasicEvent.Models.Movie> Movie { get; set; }
    }
}
