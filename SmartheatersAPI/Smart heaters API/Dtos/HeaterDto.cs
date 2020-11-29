using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smart_heaters_API.Dtos
{
    public class HeaterDto
    {
        public int Id { get; set; }
        public string Client { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
    }
}