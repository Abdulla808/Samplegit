package screenShotTest;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;

public class ScreenShotGenerator {
public static void generateScreenshot(Scenario s, WebDriver wd) throws IOException
{
	if(s.isFailed()){
		//s.embed(arg0, arg1);
	//System.err.println("current scenario is failed:"+s.getId());
	//System.err.println("current scenario name is:"+s.getName());
	//System.err.println("current scenario status is:"+s.getStatus());
	File src = ((TakesScreenshot)wd).getScreenshotAs(OutputType.FILE);
	InputStream stream = new FileInputStream(src);
	s.embed(IOUtils.toByteArray(stream), "image/jpeg");
}
}
}