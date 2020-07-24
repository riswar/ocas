using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ocas.models
{

  public class Participant
  {
    [Key]
    public int ParticipantId { get; set; }

    [Required]
    [Column(TypeName = "varchar(100)")]
    public string FirstName { get; set; }

    [Required]
    [Column(TypeName = "varchar(100)")]
    public string LastName { get; set; }

    [Required]
    [Column(TypeName = "varchar(100)")]
    public string EmailAddress { get; set; }

    [Required]
    [Column(TypeName = "varchar(100)")]
    public string Activity { get; set; }

    [Column(TypeName = "varchar(2000)")]
    public string Comments { get; set; }
  }
}

