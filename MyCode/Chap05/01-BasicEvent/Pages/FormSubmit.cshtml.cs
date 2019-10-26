using _01_BasicEvent.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace _01_BasicEvent.Pages
{
    public class FormSubmitModel : PageModel
    {
        private ILogger<FormSubmitModel> _logger;

        public FormSubmitModel(ILogger<FormSubmitModel> logger)
        {
            _logger = logger;
        }

        [BindProperty]
        public Product Product { get; set; }

        public void OnGet()
        {
            _logger.LogInformation("OnGet");
        }

        public void OnPost()
        {
            _logger.LogInformation("OnPost");
            _logger.LogInformation(JsonConvert.SerializeObject(Product, Formatting.Indented));
        }
    }
}