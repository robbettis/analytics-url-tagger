    $(function () {
		//has default value in quickset, initial value is false
		var hasDefault = false;
		//get active tab
		chrome.tabs.query({ active:true}, function callback(tabs) {
			//set first input to url of active tab
			document.forms[0].elements[0].value = tabs[0].url;
			//check if default value in quickset exists in case tabs.query handler has executed after the whole code in popup.js
			if (hasDefault) {
				$('#savedCombinations').change();
			}
		});