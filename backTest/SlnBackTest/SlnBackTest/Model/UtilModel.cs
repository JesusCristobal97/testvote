namespace SlnBackTest.Model
{
    public class UtilModel { }

    public class UserGeneral
    {
        
        public string Name { get; set; }
        public string Email { get; set; }
        
        public string Login { get; set; }
        public string Password { get; set; }
        public int TypeUser { get; set; }   

    }
    public class ResponseGeneral
    {
        public bool isSuccess { get; set; }
        public dynamic body { get; set;} 
    }

    
}
