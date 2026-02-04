// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24643: for (var _fun24643_ip = 0;;) switch (_fun24643_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var1 = {
                    1: '१',
                    2: '२',
                    3: '३',
                    4: '४',
                    5: '५',
                    6: '६',
                    7: '७',
                    8: '८',
                    9: '९',
                    0: '०'
                };
                var _closure2_slot0 = var1;
                var1 = {
                    '१': '1',
                    '२': '2',
                    '३': '3',
                    '४': '4',
                    '५': '5',
                    '६': '6',
                    '७': '7',
                    '८': '8',
                    '९': '9',
                    '०': '0'
                };
                var _closure2_slot1 = var1;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.months = var4;
                var5 = 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var4 = true;
                var1.monthsParseExact = var4;
                var5 = 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = 'र_सो_मं_बु_गु_शु_श';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'A h:mm बजे',
                    'LTS': 'A h:mm:ss बजे',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY, A h:mm बजे',
                    'LLLL': 'dddd, D MMMM YYYY, A h:mm बजे'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[आज] LT',
                    'nextDay': '[कल] LT',
                    'nextWeek': 'dddd, LT',
                    'lastDay': '[कल] LT',
                    'lastWeek': '[पिछले] dddd, LT',
                    'sameElse': 'L'
                };
                var1.calendar = var4;
                var4 = {
                    'future': '%s में',
                    'past': '%s पहले',
                    's': 'कुछ ही क्षण',
                    'ss': '%d सेकंड',
                    'm': 'एक मिनट',
                    'mm': '%d मिनट',
                    'h': 'एक घंटा',
                    'hh': '%d घंटे',
                    'd': 'एक दिन',
                    'dd': '%d दिन',
                    'M': 'एक महीने',
                    'MM': '%d महीने',
                    'y': 'एक वर्ष',
                    'yy': '%d वर्ष'
                };
                var1.relativeTime = var4;
                var4 = function arg0() {
                    var3 = arg0;
                    var2 = var3.replace;
                    var1 = /[१२३४५६७८९०]/g;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot1;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1.preparse = var4;
                var4 = function arg0() {
                    var3 = arg0;
                    var2 = var3.replace;
                    var1 = /\d/g;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot0;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1.postformat = var4;
                var4 = /रात|सुबह|दोपहर|शाम/;
                var1.meridiemParse = var4;
                var4 = function arg0, arg1() {
                    _fun24649: for (var _fun24649_ip = 0;;) switch (_fun24649_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = arg1;
                            var2 = 12;
                            if (!(var2 === var3)) {
                                _fun24649_ip = 15;
                                continue _fun24649
                            }
                        case 13:
                            var3 = 0;
                        case 15:
                            var0 = 'रात';
                            if (!(var0 !== var5)) {
                                _fun24649_ip = 88;
                                continue _fun24649
                            }
                        case 25:
                            var1 = 'सुबह';
                            var0 = var3;
                            if (!(var1 !== var5)) {
                                _fun24649_ip = 86;
                                continue _fun24649
                            }
                        case 38:
                            var1 = 'दोपहर';
                            if (!(var1 !== var5)) {
                                _fun24649_ip = 66;
                                continue _fun24649
                            }
                        case 48:
                            var4 = 'शाम';
                            var1 = undefined;
                            if (!(var4 === var5)) {
                                _fun24649_ip = 64;
                                continue _fun24649
                            }
                        case 60:
                            var1 = var3 + var2;
                        case 64:
                            _fun24649_ip = 83;
                            continue _fun24649;
                        case 66:
                            var5 = 10;
                            var4 = var3;
                            if (!(!(var3 >= var5))) {
                                _fun24649_ip = 80;
                                continue _fun24649
                            }
                        case 76:
                            var4 = var3 + var2;
                        case 80:
                            var1 = var4;
                        case 83:
                            var0 = var1;
                        case 86:
                            _fun24649_ip = 105;
                            continue _fun24649;
                        case 88:
                            var4 = 4;
                            var1 = var3;
                            if (!(!(var1 < var4))) {
                                _fun24649_ip = 102;
                                continue _fun24649
                            }
                        case 98:
                            var1 = var3 + var2;
                        case 102:
                            var0 = var1;
                        case 105:
                            return var0;
                    }
                };
                var1.meridiemHour = var4;
                var0 = function arg0, arg1, arg2() {
                    _fun24650: for (var _fun24650_ip = 0;;) switch (_fun24650_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = 4;
                            var1 = var5 < var0;
                            var3 = 'रात';
                            var0 = var3;
                            if (var1) {
                                _fun24650_ip = 79;
                                continue _fun24650
                            }
                        case 22:
                            var1 = 10;
                            var2 = var5 < var1;
                            var1 = 'सुबह';
                            if (var2) {
                                _fun24650_ip = 76;
                                continue _fun24650
                            }
                        case 38:
                            var2 = 17;
                            var4 = var5 < var2;
                            var2 = 'दोपहर';
                            if (var4) {
                                _fun24650_ip = 73;
                                continue _fun24650
                            }
                        case 54:
                            var4 = 20;
                            var4 = var5 < var4;
                            if (!var4) {
                                _fun24650_ip = 70;
                                continue _fun24650
                            }
                        case 64:
                            var3 = 'शाम';
                        case 70:
                            var2 = var3;
                        case 73:
                            var1 = var2;
                        case 76:
                            var0 = var1;
                        case 79:
                            return var0;
                    }
                };
                var1.meridiem = var0;
                var0 = {
                    'dow': 0,
                    'doy': 6
                };
                var1.week = var0;
                var0 = 'hi';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24643_ip = 44;
                continue _fun24643
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24643_ip = 44;
                continue _fun24643
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24643_ip = 121;
                continue _fun24643
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24643_ip = 78;
                continue _fun24643
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24643_ip = 95;
                continue _fun24643
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24643_ip = 140;
            continue _fun24643;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24643_ip = 140;
            continue _fun24643;
        case 121:
            var4 = arg6;
            var0 = 0;
            var0 = var4[var0];
            var0 = var3.bind(var1)(var0);
            var0 = var2.bind(var1)(var0);
        case 140:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3045]);