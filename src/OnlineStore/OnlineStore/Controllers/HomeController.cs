using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnlineStore.Models;

namespace OnlineStore.Controllers
{
    public class HomeController : Controller
    {
        OnlineStoreDbContext db;
        public HomeController(OnlineStoreDbContext context)
        {
            db = context;
        }

        [Route("")]
        [Route("main")]
        public IActionResult Index()
        {
            return View(db.Products.ToList());
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
