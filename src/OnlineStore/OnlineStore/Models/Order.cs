using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Models
{
    public enum OrderStatus : Int16
    {
        IsCart = 0,
        Created = 1,
        Purshased = 2,
        Canceled = 3
    }

    public class Order
    {
        public virtual List<Product> Products { get; set; }
        public virtual User User { get; set; }
        public OrderStatus Status { get; set; } = 0;
        float _price = -1;
        public float TotalPrice
        {
            get
            {
                if (_price != -1)
                    return _price;
                return Products.Sum(p => p.Cost);
            }
        }
    }
}