var locales = ["en_LU", "en_AT", "en_CZ", "en_FI", "en_HU", "en_NL", "en_SI",
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

document.addEventListener("DOMContentLoaded", function(event) {

	function j_fnc() {
	
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) { //CALLBACK HELL
	
		var tablink = tabs[0].url; // tablink
		var tabid = tabs[0].id;
		
		function update(a1) {
				var newurl = "__SORRY!__";
	
				for(var i=0;i<56;i++){
					if(tablink.indexOf( locales[i])>1 ){ newurl = tablink.replace(locales[i], a1); }
				}
				
				chrome.tabs.update(tabid, {url: newurl});
			
		}
		
		
		document.getElementById("en_LU").addEventListener('click', function() { update("en_LU");});
		document.getElementById("en_AT").addEventListener('click', function() { update("en_AT");});
		document.getElementById("en_CZ").addEventListener('click', function() { update("en_CZ");});
		document.getElementById("en_FI").addEventListener('click', function() { update("en_FI");});
		document.getElementById("en_HU").addEventListener('click', function() { update("en_HU");});
		document.getElementById("en_NL").addEventListener('click', function() { update("en_NL");});
		document.getElementById("en_SI").addEventListener('click', function() { update("en_SI");});
		document.getElementById("en_BE").addEventListener('click', function() { update("en_BE");});
		document.getElementById("en_DK").addEventListener('click', function() { update("en_DK");});
		document.getElementById("en_GB").addEventListener('click', function() { update("en_GB");});
		document.getElementById("en_IE").addEventListener('click', function() { update("en_IE");});
		document.getElementById("en_PT").addEventListener('click', function() { update("en_PT");});
		document.getElementById("en_SE").addEventListener('click', function() { update("en_SE");});
		document.getElementById("en_AU").addEventListener('click', function() { update("en_AU");});
		document.getElementById("en_CA").addEventListener('click', function() { update("en_CA");});
		document.getElementById("en_IN").addEventListener('click', function() { update("en_IN");});
		document.getElementById("en_IL").addEventListener('click', function() { update("en_IL");});
		document.getElementById("en_ID").addEventListener('click', function() { update("en_ID");});
		document.getElementById("en_MY").addEventListener('click', function() { update("en_MY");});
		document.getElementById("en_NZ").addEventListener('click', function() { update("en_NZ");});
		document.getElementById("en_NO").addEventListener('click', function() { update("en_NO");});
		document.getElementById("en_PH").addEventListener('click', function() { update("en_PH");});
		document.getElementById("en_SG").addEventListener('click', function() { update("en_SG");});
		document.getElementById("en_CH").addEventListener('click', function() { update("en_CH");});
		document.getElementById("en_HK").addEventListener('click', function() { update("en_HK");});
		document.getElementById("en_XF").addEventListener('click', function() { update("en_XF");});
		document.getElementById("en_XM").addEventListener('click', function() { update("en_XM");});
		document.getElementById("zh_CN").addEventListener('click', function() { update("zh_CN");});
		document.getElementById("nl_BE").addEventListener('click', function() { update("nl_BE");});
		document.getElementById("nl_NL").addEventListener('click', function() { update("nl_NL");});
		document.getElementById("fr_LU").addEventListener('click', function() { update("fr_LU");});
		document.getElementById("fr_BE").addEventListener('click', function() { update("fr_BE");});
		document.getElementById("fr_FR").addEventListener('click', function() { update("fr_FR");});
		document.getElementById("fr_CA").addEventListener('click', function() { update("fr_CA");});
		document.getElementById("fr_CH").addEventListener('click', function() { update("fr_CH");});
		document.getElementById("de_LU").addEventListener('click', function() { update("de_LU");});
		document.getElementById("de_AT").addEventListener('click', function() { update("de_AT");});
		document.getElementById("de_BE").addEventListener('click', function() { update("de_BE");});
		document.getElementById("de_DE").addEventListener('click', function() { update("de_DE");});
		document.getElementById("de_CH").addEventListener('click', function() { update("de_CH");});
		document.getElementById("it_IT").addEventListener('click', function() { update("it_IT");});
		document.getElementById("it_CH").addEventListener('click', function() { update("it_CH");});
		document.getElementById("es_MX").addEventListener('click', function() { update("es_MX");});
		document.getElementById("es_CL").addEventListener('click', function() { update("es_CL");});
		document.getElementById("es_XL").addEventListener('click', function() { update("es_XL");});
		document.getElementById("es_UY").addEventListener('click', function() { update("es_UY");});
		document.getElementById("es_AR").addEventListener('click', function() { update("es_AR");});
		document.getElementById("en_US").addEventListener('click', function() { update("en_US");});
		document.getElementById("el_GR").addEventListener('click', function() { update("el_GR");});
		document.getElementById("pl_PL").addEventListener('click', function() { update("pl_PL");});
		document.getElementById("ca_ES").addEventListener('click', function() { update("ca_ES");});
		document.getElementById("es_ES").addEventListener('click', function() { update("es_ES");});
		document.getElementById("tr_TR").addEventListener('click', function() { update("tr_TR");});
		document.getElementById("zh_TW").addEventListener('click', function() { update("zh_TW");});
		document.getElementById("ja_JP").addEventListener('click', function() { update("ja_JP");});
		document.getElementById("ru_RU").addEventListener('click', function() { update("ru_RU");});
		document.getElementById("th_TH").addEventListener('click', function() { update("th_TH");});
		
	});	
	}
	
	j_fnc();
	
});