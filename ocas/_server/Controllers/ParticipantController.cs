using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ocas.DAL;
using ocas.models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ocas.Controllers
{
   
    public class ParticipantController : BaseController
    {
        private readonly ParticipantContext _context;

        public ParticipantController(ParticipantContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Participant>>> Getparticipant()
        {
            return await _context.participant.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Participant>> GetParticipant(int id)
        {
            var participant = await _context.participant.FindAsync(id);

            if (participant == null)
            {
                return NotFound();
            }

            return participant;
        }

       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParticipant(int id, Participant participant)
        {
            if (id != participant.ParticipantId)
            {
                return BadRequest();
            }

            _context.Entry(participant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParticipantExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Participant>> PostParticipant(Participant participant)
        {
            _context.participant.Add(participant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParticipant", new { id = participant.ParticipantId }, participant);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Participant>> DeleteParticipant(int id)
        {
            var participant = await _context.participant.FindAsync(id);
            if (participant == null)
            {
                return NotFound();
            }

            _context.participant.Remove(participant);
            await _context.SaveChangesAsync();

            return participant;
        }

        private bool ParticipantExists(int id)
        {
            return _context.participant.Any(e => e.ParticipantId == id);
        }
    }
}
