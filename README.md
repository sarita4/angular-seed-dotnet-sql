# Angular Seed with C# .NET Web API and SQL Server Database

![](https://skender.visualstudio.com/_apis/public/build/definitions/bd376022-0c94-4afc-bbbc-ff44a4faca8e/11/badge)
![](https://travis-ci.org/DaveSkender/angular-seed-dotnet-sql.svg?branch=master)

Credits where credit is due.  The vast majority of work on this project is from the original source [angular-seed](https://github.com/mgechev/angular-seed) hosted by [Minko Gechev](https://github.com/mgechev).  We'll periodically pull from his original seed to update the Angular website parts in this Fork.  We've only added the Microsoft [.NET Core REST API](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api) (C#) with [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/get-started/aspnetcore/existing-db) and SQL Server database for full database inter-play.  We'll keep those up-to-date with relevant version updates as well.

We've also provided additional instruction on how to build and deploy to Azure with Microsoft Visual Studio Team Services (VSTS) Build and Release Management.

Live site sample, build setup instructions, Azure deploy setup instructions are here:
[https://angularseeddotnetsql.azurewebsites.net](https://angularseeddotnetsql.azurewebsites.net)


## Getting started with Local development

We recommend you use [Visual Studio Code](https://code.visualstudio.com/download) for Angular website development and [Visual Studio Community Edition](https://www.visualstudio.com/downloads) or better for .NET backend development.  You may need to also [install the .NET Core Windows Server Hosting bundle](https://docs.microsoft.com/en-us/aspnet/core/publishing/iis#install-the-net-core-windows-server-hosting-bundle).  For API debugging, we also recommend [PostMan](https://www.getpostman.com/).

For Visual Studio, we're also using these Extensions:

- [Markdown Editor](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor)

**Clone the repo**:

```git clone --depth=1 https://github.com/DaveSkender/angular-seed-dotnet-sql.git```

```cd angular-seed-dotnet-sql```

**Deploy local database**:

- open the .src/server/BackEnd.sln file in Visual Studio, and Rebuild the whole solution (CTRL+SHIFT+B)
- select Database project (it should be bold font when selected)
- start the deploy CTRL+F5 (watch our Output window for results)
- PostDeployment

**Note**: the Debug Properties of the Database project set the deployment target location.
You may need to reset this to point to an existing SQL Server instance.  Default setting is *(localdb)\ProjectsV13*.

**Start the Web API service**:

- open the .src/server/BackEnd.sln file in Visual Studio.
- select WebApi project (it should be bold font when selected)
- start the service CTRL+F5 (your default browser will popup, leave it open)

**Start the Website**: follow the instructions from the original seed [README](https://github.com/mgechev/angular-seed/blob/master/README.md) to launch website.
The original README also has instructions for website production build.  The basics:

- install the project's dependencies

    ```npm install```

- watches your files and uses livereload by default

    ```npm start```


## Directory structure (modifications)

Please refer to the original seed [README](https://github.com/mgechev/angular-seed/blob/master/README.md) for the full directory stucture.  We've only listed changes here.

```
.
├── .docker                     <- THIS WAS REMOVED.  We're using Microsoft Azure targets.
└── src                         <- source code of the application
    ├── client
    │   └── app
    │       ├── build           <- Instructions page on how to build in Visual Studio Team Services (VSTS)
    │       ├── deploy          <- Instructions page on how to setup Azure and deploy with VSTS Release Management to Azure
    │       └── (misc)          <- Misc minor file updates to support new pages (e.g. app.module)
    └── server
        └── BackEnd.sln         <- Solution containing .NET projects
            ├── Database.csproj <- SQL Server database project (SSDT)
            └── WebApi.csproj   <- .NET Core Web API (C#) with Entity Framework (Core)
```

## Extending

If you want to reverse engineer the database to generate new POCO classes, use the Nuget Package Manager console and run:

```Scaffold-DbContext "Server=(localdb)\ProjectsV13;Database=AngularSeedDB;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir NewModels```


## Create a Pull Request to contribute your changes

If you would like to contribute to this project, create your own Fork and submit a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) from your own topic branch back into the master branch of this project.  Make sure your PRs point to this project and not the original seed.
