CREATE TABLE [dbo].[participant] (
    [ParticipantId] INT            IDENTITY (1, 1) NOT NULL,
    [FirstName]     VARCHAR (100)  NOT NULL,
    [LastName]      VARCHAR (100)  NOT NULL,
    [EmailAddress]  VARCHAR (100)  NOT NULL,
    [Activity]      VARCHAR (100)  NOT NULL,
    [Comments]      VARCHAR (2000) NULL,
    CONSTRAINT [PK_participant] PRIMARY KEY CLUSTERED ([ParticipantId] ASC)
);

