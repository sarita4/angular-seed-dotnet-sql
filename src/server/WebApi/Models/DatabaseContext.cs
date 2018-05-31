using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApi.Models
{
  public partial class DatabaseContext : DbContext
  {
    public virtual DbSet<Scientist> Scientist { get; set; }

    // restore this after using Scaffolding to replace OnConfiguring stuff
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
    : base(options)
    { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Scientist>(entity =>
      {
        entity.Property(e => e.DateAdded)
                  .HasColumnType("datetime")
                  .HasDefaultValueSql("(getutcdate())");

        entity.Property(e => e.Name)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);
      });
    }
  }
}
