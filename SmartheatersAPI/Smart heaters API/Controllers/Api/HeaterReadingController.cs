using Smart_heaters_API.Dtos;
using Smart_heaters_API.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Smart_heaters_API.Controllers.Api
{
    public class HeaterReadingController : ApiController
    {
        private ApplicationDbContext _context;
        public HeaterReadingController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult getReadings(int id)
        {
            var readingsByDay = _context.HeaterReadings.Where(r => r.HeaterId == id && r.ReadingTimestamp.Month == DateTime.Now.Month).GroupBy(r=>r.ReadingTimestamp.Day).ToList();
            var temperatureReadings = _context.HeaterReadings.Where(r => r.HeaterId == id).ToList();
            List<ReadingsDto> listOfReadings = new List<ReadingsDto>();
            AllReadingsDto allReadings = new AllReadingsDto();
            if (readingsByDay.Count == 0)
            {
                return BadRequest("No readings for this heater");
            }
            foreach(var reading in readingsByDay)
            { 
                ReadingsDto readingDto = new ReadingsDto
                {
                    Date = "",
                    Readings= new List<ReadingDto>(),   
                    AverageTemp = 0
                };       
                foreach (var item in reading)
                {
                    readingDto.Date = item.ReadingTimestamp.ToString("d MMMM yyyy", CultureInfo.CreateSpecificCulture("en-US"));
                    
                    var time = new ReadingDto {
                        Temperature = item.Temperature,
                        Time = item.ReadingTimestamp.ToString("hh:mm:ss")                        
                    };
                    readingDto.Readings.Add(time);
                    readingDto.AverageTemp += item.Temperature;
                }
                readingDto.AverageTemp = readingDto.AverageTemp / readingDto.Readings.Count();
                listOfReadings.Add(readingDto);
            }
            allReadings.AllReadings = temperatureReadings;
            allReadings.ReadingsByDay = listOfReadings;

            return Ok(allReadings);
        }

        [HttpPost]
        public IHttpActionResult AddReading(HeaterReadingDto heaterReadingDto)
        {

            var heaterExist = _context.Heaters.SingleOrDefault(h => h.Id == heaterReadingDto.HeaterId);

            if(heaterExist == null)
            {
                return BadRequest("Invalid ID");
            }

            if (heaterReadingDto == null)
            {
                return BadRequest("Data is empty");
            }

            HeaterReading heaterReading = new HeaterReading
            {
                HeaterId = heaterReadingDto.HeaterId,
                ReadingTimestamp = DateTime.Now,
                Temperature = heaterReadingDto.Temperature
            };

            _context.HeaterReadings.Add(heaterReading);
            _context.SaveChanges();
            
            return Ok(heaterReading);
        }

    }
}
