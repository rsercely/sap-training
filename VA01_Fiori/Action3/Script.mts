' if "running on any browser, assumes we have navigated to Fiori home page
'if IE - note - may or may not appear
if Browser("This site isn’t secure").Page("This site isn’t secure").Link("More information").Exist (10) then @@ hightlight id_;_Browser("This site isn’t secure").Page("This site isn’t secure").Link("More information")_;_script infofile_;_ZIP::ssf1.xml_;_
	Browser("This site isn’t secure").Page("This site isn’t secure").Link("More information").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("This site isn’t secure").Link("More information")_;_script infofile_;_ZIP::ssf1.xml_;_
	Browser("This site isn’t secure").Page("This site isn’t secure").Link("Go on to the webpage (not").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("This site isn’t secure").Link("Go on to the webpage (not")_;_script infofile_;_ZIP::ssf2.xml_;_
End If

'if Chrome
' there are security warnings to accept the first replay since a reboot
Browser("This site isn’t secure").Page("Logon").WebEdit("sap-user").Set "s4h_sd_dem" @@ hightlight id_;_Browser("This site isn’t secure").Page("Logon").WebEdit("sap-user")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("This site isn’t secure").Page("Logon").WebEdit("sap-password").SetSecure "61eb2bd7fb72c0c141eed90eb420ea19c394682fb01e" @@ hightlight id_;_Browser("This site isn’t secure").Page("Logon").WebEdit("sap-password")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("This site isn’t secure").Page("Logon").WebButton("Log On").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Logon").WebButton("Log On")_;_script infofile_;_ZIP::ssf5.xml_;_
