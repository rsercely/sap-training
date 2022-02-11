'if IE - note - may or may not appear
With Browser("SAP Fiori")
	if .Page("This site isn’t secure").Link("More information").Exist (3) then
		.Page("This site isn’t secure").Link("More information").Click
		.Page("This site isn’t secure").Link("Go on to the webpage (not").Click
	End If

	.Page("Create Sales Documents").SAPUIButton("Search").WaitProperty "visible", True, 20000 @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPUIButton("Search")_;_script infofile_;_ZIP::ssf35.xml_;_
	.Page("Logon").SAPUIButton("Search").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Logon").SAPUIButton("Search")_;_script infofile_;_ZIP::ssf32.xml_;_
	wait 5
	.Page("Logon").SAPUITextEdit("Search").Set "va01" @@ hightlight id_;_2756382_;_script infofile_;_ZIP::ssf63.xml_;_
	wait 2
	.Page("Logon").SAPUIButton("Search with Value in EditField").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Logon").SAPUIButton("Search 2")_;_script infofile_;_ZIP::ssf66.xml_;_
	if .Page("Logon").WebButton("Create Sales OrdersVA01").Exist (30) then
		wait 2
	end if

	For xxx = 1 To 5 Step 1 ' I seem to need this to reliably replay. You may not
		if not .Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Order Type").Exist (1) then @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Order Type")_;_script infofile_;_ZIP::ssf37.xml_;_
			wait 3
		End If
		If .Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Order Type").Exist (2)  Then
			Exit for
		End If
		.Page("Logon").WebButton("Create Sales OrdersVA01").Click
		wait xxx
	Next

	.Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Order Type").Set "or" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Order Type")_;_script infofile_;_ZIP::ssf37.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Sales Organization").Set "1710" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Sales Organization")_;_script infofile_;_ZIP::ssf38.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Distribution Channel").Set "10" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Distribution Channel")_;_script infofile_;_ZIP::ssf39.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Division").Set "00" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPEdit("Division")_;_script infofile_;_ZIP::ssf40.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPButton("Continue").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Sales Documents").SAPButton("Continue")_;_script infofile_;_ZIP::ssf41.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Sold-To Party").Set "EWM17-CU02" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Sold-To Party")_;_script infofile_;_ZIP::ssf42.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Ship-To Party").Set "EWM17-CU02"
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Cust. Reference").Set "450000019998" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Cust. Reference")_;_script infofile_;_ZIP::ssf43.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Cust. Ref. Date").Set "11/02/2021" @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPEdit("Cust. Ref. Date")_;_script infofile_;_ZIP::ssf44.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2,2,"10" ' item @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items")_;_script infofile_;_ZIP::ssf50.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2,3,"EWMS4-01" ' material @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items")_;_script infofile_;_ZIP::ssf50.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2,5,"1" ' quantity @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items 3")_;_script infofile_;_ZIP::ssf55.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2,6,"PC" 'unit @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPTable("All Items 3")_;_script infofile_;_ZIP::ssf51.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPButton("Save").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPButton("Save")_;_script infofile_;_ZIP::ssf56.xml_;_

	if .Page("Create Sales Documents").Frame("Frame").WebElement("ContentBlocked").Exist(5) then
		.Page("Create Sales Documents").SAPUIButton("Back").Click @@ hightlight id_;_Browser("SAP Fiori").Page("Create Sales Documents").SAPUIButton("Back")_;_script infofile_;_ZIP::ssf81.xml_;_
	end if


	if .Page("Review Availability Check").Frame("itshtmlvwrfn101").SAPUIButton("Apply").Exist (5) then @@ hightlight id_;_Browser("SAP Fiori").Page("Review Availability Check").Frame("itshtmlvwrfn101").SAPUIButton("Apply")_;_script infofile_;_ZIP::ssf84.xml_;_
		.Page("Review Availability Check").Frame("itshtmlvwrfn101").SAPUIButton("Apply").Click @@ hightlight id_;_Browser("SAP Fiori").Page("Review Availability Check").Frame("itshtmlvwrfn101").SAPUIButton("Apply")_;_script infofile_;_ZIP::ssf84.xml_;_
	end if
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").WebElement("wnd[0]/sbar_msg-txt").WaitProperty "visible", True, 10000 @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Create Standard Order:").WebElement("wnd[0]/sbar msg-txt")_;_script infofile_;_ZIP::ssf68.xml_;_
	.Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPButton("Display").Click @@ hightlight id_;_Browser("SAP Fiori").Page("Create Sales Documents").SAPFrame("Create Standard Order:").SAPButton("Display")_;_script infofile_;_ZIP::ssf82.xml_;_
	.Page("Create Sales Documents").SAPFrame("Display Standard Order").SAPEdit("Standard Order").Output CheckPoint("Standard Order") @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").SAPFrame("Display Standard Order").SAPEdit("Standard Order")_;_script infofile_;_ZIP::ssf76.xml_;_
	.Page("Create Sales Documents").Image("Company Logo").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Create Sales Documents").Image("Company Logo")_;_script infofile_;_ZIP::ssf78.xml_;_
	.Dialog("Message from webpage").WinButton("OK").Click @@ hightlight id_;_16191070_;_script infofile_;_ZIP::ssf79.xml_;_
End With

 
foo = 1 ' just to be able to set a breakpoint


