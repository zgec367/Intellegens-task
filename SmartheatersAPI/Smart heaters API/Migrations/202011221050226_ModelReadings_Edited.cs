namespace Smart_heaters_API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModelReadings_Edited : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.HeaterReadings", "Temperature", c => c.Single(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.HeaterReadings", "Temperature");
        }
    }
}
