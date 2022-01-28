Browser("Home").Page("Home").WebList("Group Navigation").Select "Sales Orders" @@ hightlight id_;_Browser("Home").Page("Home").WebList("Group Navigation")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Home").Page("Home").Link("Change Sales OrdersVA02").Click
Browser("Home").Page("Change Sales Documents").SAPFrame("Change Sales Documents").SAPEdit("Order").Set DataTable("New Order No", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Change Sales Documents").SAPFrame("Change Sales Documents").SAPEdit("Order")_;_script infofile_;_ZIP::ssf3.xml_;_

Browser("Home").Page("Change Sales Documents_2").SAPFrame("Change Sales Documents").SAPButton("Continue").Click @@ hightlight id_;_Browser("Home").Page("Change Sales Documents 2").SAPFrame("Change Sales Documents").SAPButton("Continue")_;_script infofile_;_ZIP::ssf18.xml_;_
nItems = Browser("Home").Page("Change Sales Documents").SAPFrame("Change Standard Order").SAPTable("All Items").GetCellData (2,5) @@ hightlight id_;_Browser("Home").Page("Change Sales Documents").SAPFrame("Change Standard Order").SAPTable("All Items")_;_script infofile_;_ZIP::ssf4.xml_;_
nItems = nItems + 1
Browser("Home").Page("Change Sales Documents").SAPFrame("Change Standard Order").SAPTable("All Items").SetCellData 2,5, nItems @@ hightlight id_;_Browser("Home").Page("Change Sales Documents").SAPFrame("Change Standard Order").SAPTable("All Items")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Home").Page("Change Sales Documents_2").SAPFrame("Change Standard Order").SAPButton("Save").Click @@ hightlight id_;_Browser("Home").Page("Change Sales Documents 2").SAPFrame("Change Standard Order").SAPButton("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Home").Page("Change Sales Documents").Frame("itshtmlvwrfn101").SAPUIButton("Apply").Click
Browser("Home").Page("Change Sales Documents").SAPFrame("Change Sales Documents").WebElement("Status Bar").WaitProperty "visible", True, 10000 @@ hightlight id_;_Browser("Home").Page("Change Sales Documents").SAPFrame("Change Sales Documents").WebElement("wnd[0]/sbar msg-txt")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Home").Page("Change Sales Documents").SAPFrame("Change Sales Documents").SAPButton("Continue").Click @@ hightlight id_;_Browser("Home").Page("Change Sales Documents").SAPFrame("Change Sales Documents").SAPButton("Continue")_;_script infofile_;_ZIP::ssf9.xml_;_
newVal =Browser("Home").Page("Change Sales Documents").SAPFrame("Change Standard Order").SAPTable("All Items").GetCellData (2,5) @@ hightlight id_;_Browser("Home").Page("Change Sales Documents").SAPFrame("Display Standard Order").SAPTable("All Items")_;_script infofile_;_ZIP::ssf14.xml_;_

If nItems = cint(newVal) Then
	reporter.ReportEvent micPass, "nValue Check", "Values updated sucessfully"
else
	reporter.ReportEvent micFail, "nValue Check", "Values failed! Expected: " &nitems& " and found: " &newVal
End If


Browser("Home").Page("Change Sales Documents").Image("Company Logo").Click

