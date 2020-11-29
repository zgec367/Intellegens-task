using Smart_heaters_API.Dtos;
using Smart_heaters_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Smart_heaters_API.Controllers.Api
{
    public class HeaterController : ApiController
    {
        private ApplicationDbContext _context;
        public HeaterController()
        {
            _context = new ApplicationDbContext();
        }


        [HttpGet]
        public IHttpActionResult getSoldHeaters()
        {
            var HeatersDb = _context.Heaters.ToList();
            if (HeatersDb.Count == 0)
            {
                return BadRequest("There is no sold heaters yet");
            }
            return Ok(HeatersDb);
        }
        [HttpPost]
        public IHttpActionResult AddSoldHeater(HeaterDto heaterDto)
        {
            if (heaterDto == null)
            {
                return BadRequest("Dto is null");
            }
            Heater heater = new Heater
            {
                Client= heaterDto.Client,
                Address = heaterDto.Address,
                Image = heaterDto.Image,
            };          
            _context.Heaters.Add(heater);
            _context.SaveChanges();
            return Ok();
        }
        [HttpPut]
        public IHttpActionResult UpdateHeater(HeaterDto heaterDto)
        {
            if (heaterDto == null)
            {
                return BadRequest("dto is null");
            }

            var heaterDb = _context.Heaters.SingleOrDefault(a => a.Id == heaterDto.Id);

            if (heaterDb == null)
            {
                return BadRequest("Record not found");
            }

            heaterDb.Client = heaterDto.Client;
            heaterDb.Address = heaterDto.Address;
            heaterDb.Image = heaterDto.Image;

            _context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IHttpActionResult DeleteHeater(int id)
        {

            var heatersDb = _context.Heaters.SingleOrDefault(a => a.Id == id);
            if (heatersDb == null)
            {
                return BadRequest("Record not found");
            }
            _context.Heaters.Remove(heatersDb);
            _context.SaveChanges();

            return Ok();
        }

    }
}
