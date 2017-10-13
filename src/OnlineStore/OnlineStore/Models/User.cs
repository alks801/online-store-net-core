using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Models
{
    public enum UserRole : Int16
    {
        Customer = 0,
        Manager = 1,
        Admin = 2
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Family { get; set; }
        [StringLength(11)]
        public string PhoneNumber { get; set; }
        public virtual Order Order { get; set; }
    }
}