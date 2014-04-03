var data = '';
$().SPServices({
	operation: "GetListItems",
	async: false,
	listName: "Name of calendar enabled list",
	webURL: "https://sharepoint2010.sharepoint.com",
	CAMLViewFields: "<ViewFields>" +
				"<FieldRef Name='Title' ></FieldRef>" +
				"<FieldRef Name='Location' ></FieldRef>" +
				"<FieldRef Name='EventDate' ></FieldRef>" +
				"<FieldRef Name='EndDate' ></FieldRef>" +
				
			"</ViewFields>",
	completefunc: function (xData, Status) {
		$(xData.responseXML).SPFilterNode('z:row').each(function() {
			var month =  Date.parse($(this).attr("ows_EventDate"));
			var m = (month.toString('MMMM'));
			var day = Date.parse($(this).attr("ows_EventDate"));
			var d = (day.toString('dd'));
			var time = Date.parse($(this).attr("ows_EventDate"));
			var t = (time.toString('h:mm tt'));
			var today = Date.today();
			var event = Date.parse($(this).attr("ows_EventDate"));
			data += "<div id='holder'><div class='addthisevent'>" +
				"<div class='date'>" +
				"<span class='mon'>" + m + "</span>" +
				"<span class='day'>" + d + "</span>" +
				"</div>" +
				"<div class='desc'>" +
				"<p>" +
				"<strong class='hed'>" + $(this).attr("ows_Title") + "</strong>" +
				"<span class='des'>" + $(this).attr("ows_Location") + "</span>" +
				"</p>" +
				"</div>" +
				"<span class='_summary'>" + $(this).attr("ows_Title") + "</span>" +
				"<span class='_location'>" + $(this).attr("ows_Location") + "</span>" +
				"<span class='_start'>" + $(this).attr("ows_EventDate") + "</span>" +
				"<span class='_end'>" + $(this).attr("ows_EndDate") + "</span>" +
				
			"</div>" + "</div>";
			//alert(event);
		})
		
		
		$("#example").append(data);
		
		
	}
	
});