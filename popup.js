
var locales = ["en_LU", "en_AT", "en_CZ", "en_FI", "en_HU", "en_NL", "en_SL",
			   "en_BE", "en_DK", "en_GB", "en_IE", "en_PT", "en_SE",
			   "en_AU", "en_CA", "en_IN", "en_IL", "en_ID", "en_MY", "en_NZ", "en_NO", "en_PH", "en_SG", "en_CH",
			   "en_HK", "en_XF", "en_XM", "zh_CN", 
			   "nl_BE", "nl_NL",
			   "fr_LU", "fr_BE", "fr_FR", "fr_CA", "fr_CH",
			   "de_LU", "de_AT", "de_BE", "de_DE", "de_CH",
			   "it_IT", "it_CH",
			   "es_MX", "es_CL", "es_XL",
			   "es_UY", "es_AR",
			   "en_US", "el_GR", "pl_PL", "ca_ES", "es_ES", "tr_TR",
			   "zh_TW", "ja_JP", "ru_RU", "th_TH"
				]; // 57 locales
//document.addEventListener('DOMContentLoaded', function() {
			
	function j_fnc(a1) {
	
	chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    var tabid = tab.id;
	var newurl = "S O R R Y !";
	
		for(var i=0;i<56;i++){
			if(tablink.indexOf(locales[i])>1){newurl = tablink.replace(locales[i], a1);}
		}
	
		
	chrome.tabs.update(tabid, {url: newurl});
	});
	

	}
	j_fnc("en_AT");
	document.getElementById("en_LU").addEventListener('click', function() { j_fnc("en_US"); });

//	});
	