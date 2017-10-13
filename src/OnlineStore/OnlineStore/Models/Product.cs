using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Models
{
    public enum ProductType : int
    {
        Phone = 0,
        Notebook = 1,
        Camera = 2,
        Watch = 3,
        Acessorizy = 4
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ProductType Type { get; set; }
        public string Description { get; set; }
        public float Cost { get; set; }
    }
}