using OnlineStore.Models;
using System.Linq;

namespace OnlineStore.Helpers
{
    public static class DataInitiator
    {
        public static void Initialize(OnlineStoreDbContext context)
        {
            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product
                    {
                        Name = "iPhone 6S",
                        Type = ProductType.Phone,
                        Description = "A phone Apple's company.",
                        Cost = 600
                    },
                    new Product
                    {
                        Name = "Lenovo IdeaPad",
                        Type = ProductType.Notebook,
                        Description = "Good notebook for working and learning",
                        Cost = 1550
                    },
                    new Product
                    {
                        Name = "Nikon D5",
                        Type = ProductType.Camera,
                        Description = "Professioanl camera.",
                        Cost = 2050
                    }
                );
                context.SaveChanges();
            }
        }
    }
}