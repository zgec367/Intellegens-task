using Smart_heaters_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Smart_heaters_API.Dtos
{
    public class AllReadingsDto
    {

        public List<ReadingsDto> ReadingsByDay { get; set; }
        public List<HeaterReading> AllReadings { get; set; }
    }
}