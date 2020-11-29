using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smart_heaters_API.Dtos
{
    public class ReadingsDto
    {
        public String Date { get; set; }
        public List<ReadingDto> Readings{ get; set; }
        public float AverageTemp { get; set; }
    
    }
}