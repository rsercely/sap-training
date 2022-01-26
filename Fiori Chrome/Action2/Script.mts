Browser("Home").Page("Home").SAPUIButton("Search").WaitProperty "visible", True, 20000 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home").Page("Home").SAPUIButton("Search").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home").Page("Home").SAPUITextEdit("Search").Set "VA01" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home").Page("Home").SAPUIButton("Search_2").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home").Page("Home").SAPUIList("SAPUIList").Select "#1" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home").Page("Home").SAPFrame("Create Sales Documents").SAPEdit("Order Type").Set "or" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home").Page("Home").SAPFrame("Create Sales Documents").SAPEdit("Distribution Channel").Set "10" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home").Page("Home").SAPFrame("Create Sales Documents").SAPEdit("Division").Set "0" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home").Page("Home").SAPFrame("Create Sales Documents").WebElement("M0:46:::4:0_rl").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Home").Page("Home").SAPFrame("Create Sales Documents").SAPButton("Continue").Click @@ script infofile_;_ZIP::ssf10.xml_;_
 @@ script infofile_;_ZIP::ssf19.xml_;_
