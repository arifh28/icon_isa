/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'IMM-Setengah-Abad\'">' + entity + '</span>' + html;
	}
	var icons = {
		'isa-isa': '&#xe900;',
		'isa-immawati1': '&#xe901;',
		'isa-immawan1': '&#xe902;',
		'isa-wanwati': '&#xe903;',
		'isa-immawati': '&#xe904;',
		'isa-immawan': '&#xe905;',
		'isa-strugle': '&#xe906;',
		'isa-wallmuh': '&#xe907;',
		'isa-ipm': '&#xe908;',
		'isa-pemuda': '&#xe909;',
		'isa-tspm': '&#xe90a;',
		'isa-aisyiyah': '&#xe90b;',
		'isa-muhammadiyah': '&#xe90c;',
		'isa-lazismu': '&#xe90d;',
		'isa-hw': '&#xe90e;',
		'isa-na': '&#xe90f;',
		'isa-muktamar47': '&#xe910;',
		'isa-mentari-news': '&#xe911;',
		'isa-sang-pencerah': '&#xe912;',
		'isa-kufi-ipm': '&#xe913;',
		'isa-kufi-imm': '&#xe914;',
		'isa-kufi-na': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/isa-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
