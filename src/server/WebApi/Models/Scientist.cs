using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Scientist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
