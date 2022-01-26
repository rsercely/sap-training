Browser("Create Sales Documents").Page("Create Sales Documents").SAPUIButton("Shirley Sales").Click @@ hightlight id_;_Browser("Create Sales Documents").Page("Create Sales Documents").SAPUIButton("Shirley Sales")_;_script infofile_;_ZIP::ssf1.xml_;_
if Browser("Create Sales Documents").Dialog("Message from webpage").WinButton("OK").Exist (10) then @@ hightlight id_;_3278884_;_script infofile_;_ZIP::ssf5.xml_;_
	Browser("Create Sales Documents").Dialog("Message from webpage").WinButton("OK").Click @@ hightlight id_;_3278884_;_script infofile_;_ZIP::ssf5.xml_;_
end if
Browser("Create Sales Documents").Page("Create Sales Documents").SAPUIList("Shirley Sales").Select "Sign Out" @@ hightlight id_;_Browser("Create Sales Documents").Page("Create Sales Documents").SAPUIList("Shirley Sales")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Create Sales Documents").Page("Create Sales Documents").SAPUIButton("OK").Click @@ hightlight id_;_Browser("Create Sales Documents").Page("Create Sales Documents").SAPUIButton("OK")_;_script infofile_;_ZIP::ssf3.xml_;_
if Browser("Create Sales Documents").Dialog("Windows Internet Explorer").WinButton("Leave this page").Exist (30) then @@ hightlight id_;_724182_;_script infofile_;_ZIP::ssf4.xml_;_
	Browser("Create Sales Documents").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click @@ hightlight id_;_724182_;_script infofile_;_ZIP::ssf4.xml_;_
end if 


