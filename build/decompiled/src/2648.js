// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22076: for (var _fun22076_ip = 0;;) switch (_fun22076_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var1, var0, var2);
            var0 = undefined;
            var1.default = var0;
            var3 = dependencyMap;
            var2 = 0;
            var3 = var3[var2];
            var2 = require;
            var4 = var2.bind(var0)(var3);
            if (!var4) {
                _fun22076_ip = 77;
                continue _fun22076
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22076_ip = 86;
                continue _fun22076
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                var0 = global;
                var2 = var0.String;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['Î', 'D'];
            var5.narrow = var8;
            var8 = ['Î.d.C.', 'D.C.'];
            var5.abbreviated = var8;
            var8 = ['Înainte de Cristos', 'După Cristos'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['1', '2', '3', '4'];
            var8.narrow = var9;
            var9 = ['T1', 'T2', 'T3', 'T4'];
            var8.abbreviated = var9;
            var9 = ['primul trimestru', 'al doilea trimestru', 'al treilea trimestru', 'al patrulea trimestru'];
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
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'];
            var7.narrow = var8;
            var8 = ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec'];
            var7.abbreviated = var8;
            var8 = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['d', 'l', 'm', 'm', 'j', 'v', 's'];
            var7.narrow = var8;
            var8 = ['du', 'lu', 'ma', 'mi', 'jo', 'vi', 'sâ'];
            var7.short = var8;
            var8 = ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sâm'];
            var7.abbreviated = var8;
            var8 = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'mn',
                'noon': 'ami',
                'morning': 'dim',
                'afternoon': 'da',
                'evening': 's',
                'night': 'n'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'miezul nopții',
                'noon': 'amiază',
                'morning': 'dimineață',
                'afternoon': 'după-amiază',
                'evening': 'seară',
                'night': 'noapte'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'miezul nopții',
                'noon': 'amiază',
                'morning': 'dimineață',
                'afternoon': 'după-amiază',
                'evening': 'seară',
                'night': 'noapte'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'mn',
                'noon': 'amiază',
                'morning': 'dimineață',
                'afternoon': 'după-amiază',
                'evening': 'seară',
                'night': 'noapte'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'miezul nopții',
                'noon': 'amiază',
                'morning': 'dimineață',
                'afternoon': 'după-amiază',
                'evening': 'seară',
                'night': 'noapte'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'miezul nopții',
                'noon': 'amiază',
                'morning': 'dimineață',
                'afternoon': 'după-amiază',
                'evening': 'seară',
                'night': 'noapte'
            };
            var6.wide = var7;
            var3.formattingValues = var6;
            var3.defaultFormattingWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dayPeriod = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);