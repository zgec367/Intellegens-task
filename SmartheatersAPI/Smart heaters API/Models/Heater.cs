using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smart_heaters_API.Models
{
    public class Heater
    {
        public int Id { get; set; }
        public string Client { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
    }
}