using Microsoft.EntityFrameworkCore;
using ocas.models;

namespace ocas.DAL
{


    public class ParticipantContext : DbContext
    {

        public ParticipantContext(DbContextOptions<ParticipantContext> options) : base(options)
        { }

        public DbSet<Participant> participant { get; set; }
    }

}
