using Smart_heaters_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smart_heaters_API.Dtos
{
    public class HeaterReadingDto
    {
        public int Id { get; set; }

        public int HeaterId { get; set; }
        public float Temperature { get; set; }
        public Heater Heater { get; set; }
        public DateTime ReadingTimestamp { get; set; }
    }
}