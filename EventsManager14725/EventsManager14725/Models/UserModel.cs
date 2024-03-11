using System.ComponentModel.DataAnnotations;

namespace EventsManager14725.Models
{
    public class UserModel
    {
        // WIUT STUDENT ID: 00014725

        [Key]
        public int UserId { get; set; }
        [Required]
        public string UserName { get; set; }
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
    }
}
