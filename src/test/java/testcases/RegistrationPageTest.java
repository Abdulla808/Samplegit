package testcases;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import screenShotTest.ScreenShotGenerator;

public class RegistrationPageTest 
{
	public static WebDriver wd=null;
	@Given("^login your DB$")
	public void login()
	{
		System.err.println();
	}
	@Given("^open browser as (.*)$")
	public void openBrowser(String browser)
	{
		//System.out.println(browser+ "Browser Open Successfully");
		if(wd==null)
		{
		wd = new FirefoxDriver();
		wd.manage().window().maximize();}
	}
	@Then("^Enter URL as (.*)$")
	public void EnterURL(String URL)
	{
		
		//System.out.println(URL+ "Entered URL Successfully");
		wd.get(URL);
	}
	
	@Then("^Enter Username as (.*)$")
	public void EnterUsername(String Username)
	{
		//System.out.println(Username+ "Entered Username Successfully");
		wd.findElement(By.name("txtUserLoginID")).sendKeys(Username);;
	}
	@And("^Enter Password as (.*)$")
	public void EnterPassword(String pwd)
	{
		//System.out.println(pwd + "Entered Password Successfully");
		wd.findElement(By.name("txtPassword")).sendKeys(pwd);
	}
	@Then("^Enter Streetname as (.*)$")
	public void Address(String Streetname)
	{
		//System.out.println(Streetname + "Entered Streetname Successfully");
		wd.findElement(By.name("txtStreetAddress")).sendKeys(Streetname);
	}
	@And ("^Enter state as (.*)$")
	public void State(String State)
	{
		//System.out.println(State+ "Entered State Successfully");
		wd.findElement(By.name("txtState")).sendKeys(State);
	}
	@When("^Enter zipcode as (.*)$")
	public void zipcode(String zipcode)
	{
		//int i=1/0; 
		//System.out.println(zipcode+ "Entered zipcode Successfully");
		wd.findElement(By.name("txtZipOrPostalCode")).sendKeys(zipcode);
	}
	@Then("^Enter faxno as (.*)$")
	public void fax(String fax)
	{
		int i=1/0;
		//System.out.println(fax + "Entered fax number Successfully");
		wd.findElement(By.name("txtFaxNo")).sendKeys(fax);
	}
	@But("^don't click book button$")
	public void book()
	{
		System.out.println("Not clicked on book button");
	}
	@After
	public void teardown(Scenario s) throws IOException
	{
		ScreenShotGenerator.generateScreenshot(s, wd);
		}
}
