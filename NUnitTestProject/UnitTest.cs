using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace NUnitTestProject
{

    /// <summary>
    /// This code was not tested 
    /// </summary>
    public class Tests
    {
        IWebDriver driver;
        private string url = "http://localhost:58867/signup";
        [SetUp]
        public void Setup()
        {
            driver = new ChromeDriver(@"C:\Program Files (x86)\Google\Chrome\Application");
        }

        [Test]
        public void TestURL()
        {
            driver.Url = url;
        }

        [TearDown]
        public void closeBrowser()
        {
            driver.Close();
        }


        [Test]
        public void RegisterUser()
        {

            driver.Manage().Window.Maximize();
            // Store locator values of email text box and sign up button				
            IWebElement firstName = driver.FindElement(By.CssSelector("input[id=FirstName]"));
            IWebElement lastName = driver.FindElement(By.CssSelector("input[id=LastName]"));
            IWebElement Email = driver.FindElement(By.CssSelector("input[id=Email]"));
            IWebElement Acivity = driver.FindElement(By.CssSelector("input[id=Activity]"));
            IWebElement Comments = driver.FindElement(By.CssSelector("input[id=Comments]"));
            IWebElement button = driver.FindElement(By.CssSelector("input[id=btnSubmit]"));

            firstName.SendKeys("Eswaran");
            firstName.SendKeys("Rathinasamy");
            firstName.SendKeys("test123@gmail.com");
            firstName.SendKeys("Go to Gym");
            
            button.Click();

        }
    }
}