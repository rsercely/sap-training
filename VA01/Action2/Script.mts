With SAPGuiSession("Session")
	With .SAPGuiWindow("SAP Easy Access")
		.SAPGuiOKCode("OKCode").Set "VA02" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
	End With
	With .SAPGuiWindow("Change Sales Documents")
		.SAPGuiEdit("Order").Set DataTable("StatusBar_item2_out", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
	End With
	With .SAPGuiWindow("Change Standard Order")
		.SAPGuiTable("All Items").Output CheckPoint("All Items") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
		.SAPGuiTable("All Items").SetCellData 1,"Order Quantity", DataTable.value("Orign QTY") +1 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
		.SAPGuiTable("All Items").SelectCell 1,"Un" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
		.SendKey F11 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf7.xml_;_
	End With
	With	.SAPGuiWindow("Change Sales Documents")
		.SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
		.SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
		.SAPGuiOKCode("OKCode").Set "/n" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf10.xml_;_
		.SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf10.xml_;_
	End With
End With
