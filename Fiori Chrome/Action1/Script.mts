Browser("Browser").Page("Logon").WebEdit("sap-user").Set "s4h_sd_dem" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Logon").WebEdit("sap-password").SetSecure "61f17e65852dfc127c94017447b0adefccfb1446fa73" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Logon").WebButton("Log On").Click @@ script infofile_;_ZIP::ssf4.xml_;_
