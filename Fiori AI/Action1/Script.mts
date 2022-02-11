while Browser("CreationTime:=0").Exist(0)							'Loop to close all open browsers
	Browser("CreationTime:=0").Close 
Wend
SystemUtil.Run  "chrome.exe","","","",3						'launch the browser specified in the data table
Set AppContext=Browser("CreationTime:=0")						'Set the variable for what application (in this case the browser) we are acting upon
wait 5
URL = "https://sap-hana.mfdemoportal.com:44300/sap/bc/ui2/flp?sap-client=100&sap-language=EN#Shell-home"
AppContext.ClearCache												'Clear the browser cache to ensure you're getting the latest forms from the application
AppContext.Navigate URL											'Navigate to the application URL
AppContext.Maximize												'Maximize the application to give the best chance that the fields will be visible on the screen
AppContext.Sync													'Wait for the browser to stop spinning
AIUtil.SetContext AppContext										'Tell the AI engine to point at the application

if AIUtil.FindTextBlock("More information").Exist then ' occurs sometimes because of unsigned certificate
	AIUtil.FindTextBlock("More information").Click
	AIUtil.FindTextBlock("Go on to the webpage (not recommended)").Click
	wait 5 ' if the certificate warning appears, a hard wait after dismissing it seems to be necessary
End If

AIUtil("text_box", "User").Type "s4h_sd_dem"
AIUtil("text_box", "Password").Type "Welcome1"
AIUtil("text_box", "100").Type "100"
AIUtil.FindTextBlock("Log On").Click

For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("search").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next

AIUtil("search").Search "va01" ' note - this does not seem to work with IE, but does indeed work fine with Chrome
If AIUtil.FindTextBlock("Apps").Exist (120) then ' you have to sync on the Apps text in the left pane - not on the actual Create Sales Order
		'using .exist insteach of checkExists so that I can specify a wait larger than the global timeout value
End If
AIUtil.FindTextBlock("Create Sales Orders").Click

AIUtil.FindTextBlock("Create Sales Documents").CheckExists True ' wait for the nex page to come up
' BTW - note that this is "Create Sales Documents", but the .click above is on "Create Sales Orders"

AIUtil("text_box", "Order Type:").CheckExists True ' and, even though our eyes can see the Order Type, without this sync, the setting of the value fails
AIUtil("text_box", "Order Type:").Type "or"
AIUtil("text_box", "Division:").Type "00"	' to replay correctly, seem to need to input data from bottom to top
AIUtil("text_box", "Distribution Channe:").Type "10"
AIUtil("text_box", "Sales Organization:").Type "1710"
AIUtil("button", "Continue").Click

AIUtil("text_box", "Cust. Reference:").CheckExists True ' wait for the nex page to appear
AIUtil("text_box", "Cust. Ref. Date:").Type "02/02/2022" ' seems to need to be a few days or maybe a month in the past
AIUtil("text_box", "Cust. Reference:").Type "450000019998"
AIUtil("text_box", "Ship-To Party:").Type "ewm17-cu02"
AIUtil("text_box", "Sold-To Party:").Type "ewm17-cu02"

AIUtil("button", "Save").Click
AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save")).CheckExists True
StatusBarText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save"))).GetText
StatusBarArray = Split(StatusBarText," ")
print  "The Order number is " & StatusBarArray(2)
AIUtil.FindTextBlock("Exit").click
AIUtil("left_triangle").Click


