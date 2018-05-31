using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors.Infrastructure;

using Microsoft.EntityFrameworkCore;
using WebApi.Models;


namespace WebApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }


    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // setup database connection
      services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultDB")));
      services.AddOptions();
      services.Configure<ConnectionStringList>(Configuration.GetSection("ConnectionStrings"));

      // setup framework services
      services.AddMvc()
            .AddJsonOptions(options =>
              options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
              );

      // setup CORS
      var corsBuilder = new CorsPolicyBuilder();
      corsBuilder.AllowAnyHeader();
      corsBuilder.AllowAnyMethod();
      corsBuilder.AllowAnyOrigin(); // For anyone access.
                                    // corsBuilder.WithOrigins("http://localhost:56573"); // for a specific url. Don't add a forward slash on the end!
                                    // should be set as a SlowCheetah transformed variable so it can be different for DEV vs PROD
      corsBuilder.AllowCredentials();

      services.AddCors(opt => opt.AddPolicy("SiteCorsPolicy", corsBuilder.Build()));
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseMvc();
      app.UseCors("SiteCorsPolicy");
    }
  }

  public class ConnectionStringList
  {
    public string DefaultDB { get; set; }
  }

}
