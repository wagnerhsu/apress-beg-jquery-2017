using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using _01_BasicEvent.Data;
using _01_BasicEvent.Models;

namespace _01_BasicEvent.Pages.Movies
{
    public class IndexModel : PageModel
    {
        private readonly _01_BasicEvent.Data._01_BasicEventContext _context;

        public IndexModel(_01_BasicEvent.Data._01_BasicEventContext context)
        {
            _context = context;
        }

        public IList<Movie> Movie { get;set; }

        public async Task OnGetAsync()
        {
            Movie = await _context.Movie.ToListAsync();
        }
    }
}
