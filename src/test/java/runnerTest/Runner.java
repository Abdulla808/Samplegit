package runnerTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags={"@registration"},format={"pretty","html:reports"},features={"C:\\NewWorkspace\\BddScreenshotTest\\src\\test\\resources\\Feature"},glue={"testcases"},monochrome= true, dryRun=false)
public class Runner {

}
