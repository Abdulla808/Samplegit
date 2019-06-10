@registration
Feature: Validate the new features on registration page of tnstc website
Background:
Given login your DB
Scenario Outline: Validate Registration page with valid data
Given open browser as <BROWSER>
Then Enter URL as <URL>
Then Enter Username as <USERNAME>
And Enter Password as <PWD>
Then Enter Streetname as <STREET>
And Enter state as <STATE>
When Enter zipcode as <ZIP>
Then Enter faxno as <FAX>
But don't click book button
Examples:
|BOWSER|URL|USERNAME|PWD|STREET|STATE|ZIP|FAX|
|firefox|https://www.tnstc.in/TNSTCOnline/preUserRegistration.do|VmetryA|123|LBroad|TN|600088|4487767|
|firefox|https://www.tnstc.in/TNSTCOnline/preUserRegistration.do|VmetryB|123|LBroad|TN|600088|4487767|
|firefox|https://www.tnstc.in/TNSTCOnline/preUserRegistration.do|VmetryC|123|LBroad|TN|600088|4487767|
|firefox|https://www.tnstc.in/TNSTCOnline/preUserRegistration.do|VmetryD|123|LBroad|TN|600088|4487767|

