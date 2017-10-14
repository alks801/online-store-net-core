using OnlineStore.Models;
using System.Linq;

namespace OnlineStore.Helpers
{
    public static class DataInitiator
    {
        public static void Initialize(OnlineStoreDbContext context)
        {
            context.SaveChanges();
            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product
                    {
                        Name = "iPhone 6S",
                        ImgSrc = "http://brain-images.cdn.dixons.com/5/8/10151585/u_10151585.jpg",
                        Type = ProductType.Phone,
                        Description = "A phone Apple's company.",
                        Cost = 600
                    },
                    new Product
                    {
                        Name = "Lenovo IdeaPad",
                        ImgSrc = "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/SL14I100SS_lenovo_ideapad_100_14_celeron_laptop_100_14iby.jpg",
                        Type = ProductType.Notebook,
                        Description = "Good notebook for working and learning",
                        Cost = 1550
                    },
                    new Product
                    {
                        Name = "Nikon D5",
                        ImgSrc = "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8go_p7JUL6JpQMwSj_xzTyyQ==/Views/1557_D5_front.png",
                        Type = ProductType.Camera,
                        Description = "Professional camera.",
                        Cost = 2050
                    }
                );
                context.SaveChanges();
            }
        }
    }
}