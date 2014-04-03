var data = '';
$().SPServices({
	operation: "GetListItems",
	async: false,
	listName: "ListName",
	webURL: "https://sharepoint.com/sharepoint",
	CAMLViewFields: "<ViewFields>" +
				"<FieldRef Name='Title' ></FieldRef>" +
				"<FieldRef Name='Software' ></FieldRef>" +
				"<FieldRef Name='Cost' ></FieldRef>" +
			"</ViewFields>",
	completefunc: function (xData, Status) {
		$(xData.responseXML).SPFilterNode('z:row').each(function() {
			data += "<tr>" +
				"<td>" + $(this).attr("ows_Title") + "</td>" +
				"<td>" + $(this).attr("ows__Software") + "</td>" +
				"<td>" + $(this).attr("ows_Cost") + "</td>" +
			"</tr>";
			
		})
		
		
		$("#example tbody").append(data);
		
		
	}
	
});
