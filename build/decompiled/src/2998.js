// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun23967: for (var _fun23967_ip = 0;;) switch (_fun23967_ip) {
        case 0:
            var2 = exports;
            var1 = function arg0() {
                var1 = arg0;
                var0 = var1.toString;
                var3 = var0.bind(var1)();
                var2 = var3.replace;
                var1 = /\d/g;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot0;
                    var1 = var0.locale;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot1 = var1;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.default = var0;
            var3 = function arg0() {
                var1 = arg0;
                var0 = var1.toString;
                var3 = var0.bind(var1)();
                var2 = var3.replace;
                var1 = /[१२३४५६७८९०]/g;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot0;
                    var1 = var0.number;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var2 = var2.bind(var3)(var1, var0);
                var0 = global;
                var1 = var0.Number;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var2.localeToNumber = var3;
            var2.numberToLocale = var1;
            var3 = arg6;
            var1 = 0;
            var3 = var3[var1];
            var1 = arg1;
            var4 = var1.bind(var0)(var3);
            if (!var4) {
                _fun23967_ip = 103;
                continue _fun23967
            }
        case 91:
            var1 = var4.__esModule;
            var3 = var4;
            if (var1) {
                _fun23967_ip = 112;
                continue _fun23967
            }
        case 103:
            var1 = {};
            var1.default = var4;
            var3 = var1;
        case 112:
            var1 = {};
            var4 = {
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
            var1.locale = var4;
            var4 = {
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
            var1.number = var4;
            var _closure1_slot0 = var1;
            var1 = {};
            var4 = function arg0, arg1() {
                var2 = _closure1_slot1;
                var0 = global;
                var3 = var0.Number;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['ईसा-पूर्व', 'ईस्वी'];
            var5.narrow = var8;
            var8 = ['ईसा-पूर्व', 'ईस्वी'];
            var5.abbreviated = var8;
            var8 = ['ईसा-पूर्व', 'ईसवी सन'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var1.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['1', '2', '3', '4'];
            var8.narrow = var9;
            var9 = ['ति1', 'ति2', 'ति3', 'ति4'];
            var8.abbreviated = var9;
            var9 = ['पहली तिमाही', 'दूसरी तिमाही', 'तीसरी तिमाही', 'चौथी तिमाही'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var7 = function arg0() {
                var1 = arg0;
                var0 = 1;
                var0 = var1 - var0;
                return var0;
            };
            var4.argumentCallback = var7;
            var4 = var6.bind(var0)(var4);
            var1.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['ज', 'फ़', 'मा', 'अ', 'मई', 'जू', 'जु', 'अग', 'सि', 'अक्टू', 'न', 'दि'];
            var7.narrow = var8;
            var8 = ['जन', 'फ़र', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुल', 'अग', 'सित', 'अक्टू', 'नव', 'दिस'];
            var7.abbreviated = var8;
            var8 = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var1.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'];
            var7.narrow = var8;
            var8 = ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'];
            var7.short = var8;
            var8 = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
            var7.abbreviated = var8;
            var8 = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var1.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'पूर्वाह्न',
                'pm': 'अपराह्न',
                'midnight': 'मध्यरात्रि',
                'noon': 'दोपहर',
                'morning': 'सुबह',
                'afternoon': 'दोपहर',
                'evening': 'शाम',
                'night': 'रात'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'पूर्वाह्न',
                'pm': 'अपराह्न',
                'midnight': 'मध्यरात्रि',
                'noon': 'दोपहर',
                'morning': 'सुबह',
                'afternoon': 'दोपहर',
                'evening': 'शाम',
                'night': 'रात'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'पूर्वाह्न',
                'pm': 'अपराह्न',
                'midnight': 'मध्यरात्रि',
                'noon': 'दोपहर',
                'morning': 'सुबह',
                'afternoon': 'दोपहर',
                'evening': 'शाम',
                'night': 'रात'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'पूर्वाह्न',
                'pm': 'अपराह्न',
                'midnight': 'मध्यरात्रि',
                'noon': 'दोपहर',
                'morning': 'सुबह',
                'afternoon': 'दोपहर',
                'evening': 'शाम',
                'night': 'रात'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'पूर्वाह्न',
                'pm': 'अपराह्न',
                'midnight': 'मध्यरात्रि',
                'noon': 'दोपहर',
                'morning': 'सुबह',
                'afternoon': 'दोपहर',
                'evening': 'शाम',
                'night': 'रात'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'पूर्वाह्न',
                'pm': 'अपराह्न',
                'midnight': 'मध्यरात्रि',
                'noon': 'दोपहर',
                'morning': 'सुबह',
                'afternoon': 'दोपहर',
                'evening': 'शाम',
                'night': 'रात'
            };
            var6.wide = var7;
            var3.formattingValues = var6;
            var3.defaultFormattingWidth = var5;
            var3 = var4.bind(var0)(var3);
            var1.dayPeriod = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);