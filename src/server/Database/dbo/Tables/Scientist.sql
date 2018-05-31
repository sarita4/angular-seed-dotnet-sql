CREATE TABLE [dbo].[Scientist] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [Name]      VARCHAR (50) NOT NULL,
    [DateAdded] DATETIME     CONSTRAINT [DF_Scientist_DateAdded] DEFAULT (getutcdate()) NOT NULL,
    CONSTRAINT [PK_Scientist] PRIMARY KEY CLUSTERED ([Id] ASC)
);



