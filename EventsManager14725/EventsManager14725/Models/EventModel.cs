using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EventsManager14725.Models
{
    public class EventModel
    {
        // WIUT STUDENT ID: 00014725

        [Key]
        public int EventId { get; set; }

        [Required(ErrorMessage = "Event name is required !")]
        public string EventName { get; set; }

        [Required(ErrorMessage = "The date is required")]
        public DateTime EventDate { get; set; }

        [Required(ErrorMessage = "Location is required")]
        public string Location { get; set; }
        public decimal Cost { get; set; }
        public string Language { get; set; }
    }
}
