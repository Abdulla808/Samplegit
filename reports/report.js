$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Validate the new features on registration page of tnstc website",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Registration page with valid data",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Password as \u003cPWD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Streetname as \u003cSTREET\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter state as \u003cSTATE\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter zipcode as \u003cZIP\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter faxno as \u003cFAX\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "don\u0027t click book button",
  "keyword": "But "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;",
  "rows": [
    {
      "cells": [
        "BOWSER",
        "URL",
        "USERNAME",
        "PWD",
        "STREET",
        "STATE",
        "ZIP",
        "FAX"
      ],
      "line": 16,
      "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;1"
    },
    {
      "cells": [
        "firefox",
        "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
        "VmetryA",
        "123",
        "LBroad",
        "TN",
        "600088",
        "4487767"
      ],
      "line": 17,
      "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;2"
    },
    {
      "cells": [
        "firefox",
        "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
        "VmetryB",
        "123",
        "LBroad",
        "TN",
        "600088",
        "4487767"
      ],
      "line": 18,
      "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;3"
    },
    {
      "cells": [
        "firefox",
        "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
        "VmetryC",
        "123",
        "LBroad",
        "TN",
        "600088",
        "4487767"
      ],
      "line": 19,
      "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;4"
    },
    {
      "cells": [
        "firefox",
        "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
        "VmetryD",
        "123",
        "LBroad",
        "TN",
        "600088",
        "4487767"
      ],
      "line": 20,
      "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "login your DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationPageTest.login()"
});
formatter.result({
  "duration": 376611622,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Registration page with valid data",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryA",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Password as 123",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Streetname as LBroad",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter state as TN",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter zipcode as 600088",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter faxno as 4487767",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBROWSER\u003e",
      "offset": 16
    }
  ],
  "location": "RegistrationPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 14932879771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
      "offset": 13
    }
  ],
  "location": "RegistrationPageTest.EnterURL(String)"
});
formatter.result({
  "duration": 11423413528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryA",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 341961874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterPassword(String)"
});
formatter.result({
  "duration": 533472858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LBroad",
      "offset": 20
    }
  ],
  "location": "RegistrationPageTest.Address(String)"
});
formatter.result({
  "duration": 240396349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TN",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.State(String)"
});
formatter.result({
  "duration": 111697525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600088",
      "offset": 17
    }
  ],
  "location": "RegistrationPageTest.zipcode(String)"
});
formatter.result({
  "duration": 137355166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4487767",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.fax(String)"
});
formatter.result({
  "duration": 1172400,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testcases.RegistrationPageTest.fax(RegistrationPageTest.java:83)\r\n\tat ✽.Then Enter faxno as 4487767(Registration.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationPageTest.book()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded0.jpg");
formatter.after({
  "duration": 437975071,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "login your DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationPageTest.login()"
});
formatter.result({
  "duration": 6972381,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Registration page with valid data",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryB",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Password as 123",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Streetname as LBroad",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter state as TN",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter zipcode as 600088",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter faxno as 4487767",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBROWSER\u003e",
      "offset": 16
    }
  ],
  "location": "RegistrationPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 134734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
      "offset": 13
    }
  ],
  "location": "RegistrationPageTest.EnterURL(String)"
});
formatter.result({
  "duration": 355578995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryB",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 144387428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterPassword(String)"
});
formatter.result({
  "duration": 89637497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LBroad",
      "offset": 20
    }
  ],
  "location": "RegistrationPageTest.Address(String)"
});
formatter.result({
  "duration": 107859101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TN",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.State(String)"
});
formatter.result({
  "duration": 85923542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600088",
      "offset": 17
    }
  ],
  "location": "RegistrationPageTest.zipcode(String)"
});
formatter.result({
  "duration": 103396624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4487767",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.fax(String)"
});
formatter.result({
  "duration": 542358,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testcases.RegistrationPageTest.fax(RegistrationPageTest.java:83)\r\n\tat ✽.Then Enter faxno as 4487767(Registration.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationPageTest.book()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded1.jpg");
formatter.after({
  "duration": 384117806,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "login your DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationPageTest.login()"
});
formatter.result({
  "duration": 125324,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate Registration page with valid data",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryC",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Password as 123",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Streetname as LBroad",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter state as TN",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter zipcode as 600088",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter faxno as 4487767",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBROWSER\u003e",
      "offset": 16
    }
  ],
  "location": "RegistrationPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 105221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
      "offset": 13
    }
  ],
  "location": "RegistrationPageTest.EnterURL(String)"
});
formatter.result({
  "duration": 378041087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryC",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 143305279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterPassword(String)"
});
formatter.result({
  "duration": 85156627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LBroad",
      "offset": 20
    }
  ],
  "location": "RegistrationPageTest.Address(String)"
});
formatter.result({
  "duration": 110819401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TN",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.State(String)"
});
formatter.result({
  "duration": 100653610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600088",
      "offset": 17
    }
  ],
  "location": "RegistrationPageTest.zipcode(String)"
});
formatter.result({
  "duration": 105279051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4487767",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.fax(String)"
});
formatter.result({
  "duration": 1984226,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testcases.RegistrationPageTest.fax(RegistrationPageTest.java:83)\r\n\tat ✽.Then Enter faxno as 4487767(Registration.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationPageTest.book()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded2.jpg");
formatter.after({
  "duration": 309358798,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "login your DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationPageTest.login()"
});
formatter.result({
  "duration": 89823,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate Registration page with valid data",
  "description": "",
  "id": "validate-the-new-features-on-registration-page-of-tnstc-website;validate-registration-page-with-valid-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryD",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Password as 123",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Streetname as LBroad",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter state as TN",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter zipcode as 600088",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter faxno as 4487767",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBROWSER\u003e",
      "offset": 16
    }
  ],
  "location": "RegistrationPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 149705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.tnstc.in/TNSTCOnline/preUserRegistration.do",
      "offset": 13
    }
  ],
  "location": "RegistrationPageTest.EnterURL(String)"
});
formatter.result({
  "duration": 333563023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryD",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 285486918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 18
    }
  ],
  "location": "RegistrationPageTest.EnterPassword(String)"
});
formatter.result({
  "duration": 128392144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LBroad",
      "offset": 20
    }
  ],
  "location": "RegistrationPageTest.Address(String)"
});
formatter.result({
  "duration": 148438432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TN",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.State(String)"
});
formatter.result({
  "duration": 126882694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600088",
      "offset": 17
    }
  ],
  "location": "RegistrationPageTest.zipcode(String)"
});
formatter.result({
  "duration": 151909866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4487767",
      "offset": 15
    }
  ],
  "location": "RegistrationPageTest.fax(String)"
});
formatter.result({
  "duration": 622771,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testcases.RegistrationPageTest.fax(RegistrationPageTest.java:83)\r\n\tat ✽.Then Enter faxno as 4487767(Registration.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationPageTest.book()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded3.jpg");
formatter.after({
  "duration": 295062018,
  "status": "passed"
});
});