using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers
{
  [EnableCors("SiteCorsPolicy")]
  [Produces("application/json")]
  [Route("scientists")]
  public class ScientistsController : Controller
  {

    private readonly DatabaseContext _context;

    public ScientistsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: Scientists
    [HttpGet]
    public IEnumerable<Scientist> GetScientist()
    {
      return _context.Scientist;
    }

    // GET: Scientists/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetScientist([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var scientist = await _context.Scientist.SingleOrDefaultAsync(m => m.Id == id);

      if (scientist == null)
      {
        return NotFound();
      }

      return Ok(scientist);
    }

    // PUT: Scientists/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutScientist([FromRoute] int id, [FromBody] Scientist scientist)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != scientist.Id)
      {
        return BadRequest();
      }

      _context.Entry(scientist).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ScientistExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: Scientists
    [HttpPost]
    public async Task<IActionResult> PostScientist([FromBody] Scientist scientist)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Scientist.Add(scientist);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetScientist", new { id = scientist.Id }, scientist);
    }

    // DELETE: Scientists/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteScientist([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var scientist = await _context.Scientist.SingleOrDefaultAsync(m => m.Id == id);
      if (scientist == null)
      {
        return NotFound();
      }

      _context.Scientist.Remove(scientist);
      await _context.SaveChangesAsync();

      return Ok(scientist);
    }

    private bool ScientistExists(int id)
    {
      return _context.Scientist.Any(e => e.Id == id);
    }
  }
}
