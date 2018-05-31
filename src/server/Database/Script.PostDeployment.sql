/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/


-- seeded scientists
MERGE INTO dbo.Scientist AS Target 
USING (VALUES 
  ('Ada Lovelace')
 ,('Donald Knuth')
 ,('Alan Turing')
 ,('Grace Hopper') 
 ,('Edsger Dijkstra') 
) 
AS Source ([Name]) ON Target.[Name] = Source.[Name] 
-- update matched rows 
WHEN MATCHED THEN UPDATE SET [Name] = Source.[Name] 
-- insert new rows 
WHEN NOT MATCHED BY TARGET THEN INSERT ([Name]) VALUES ([Name])
-- delete rows that are in the target but not the source (reset list)
WHEN NOT MATCHED BY SOURCE THEN DELETE;

