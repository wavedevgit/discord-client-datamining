// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = undefined;
    var1.default = var0;
    var2 = function arg0, arg1() {
        _fun22946: for (var _fun22946_ip = 0;;) switch (_fun22946_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = 'P';
                if (!(var0 !== var1)) {
                    _fun22946_ip = 103;
                    continue _fun22946
                }
            case 14:
                var0 = 'PP';
                if (!(var0 !== var1)) {
                    _fun22946_ip = 80;
                    continue _fun22946
                }
            case 24:
                var0 = 'PPP';
                if (!(var0 !== var1)) {
                    _fun22946_ip = 57;
                    continue _fun22946
                }
            case 34:
                var1 = var2.date;
                var0 = {};
                var3 = 'full';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 57:
                var1 = var2.date;
                var0 = {};
                var3 = 'long';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 80:
                var1 = var2.date;
                var0 = {};
                var3 = 'medium';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 103:
                var1 = var2.date;
                var0 = {};
                var3 = 'short';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var4 = function arg0, arg1() {
        _fun22947: for (var _fun22947_ip = 0;;) switch (_fun22947_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = 'p';
                if (!(var0 !== var1)) {
                    _fun22947_ip = 103;
                    continue _fun22947
                }
            case 14:
                var0 = 'pp';
                if (!(var0 !== var1)) {
                    _fun22947_ip = 80;
                    continue _fun22947
                }
            case 24:
                var0 = 'ppp';
                if (!(var0 !== var1)) {
                    _fun22947_ip = 57;
                    continue _fun22947
                }
            case 34:
                var1 = var2.time;
                var0 = {};
                var3 = 'full';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 57:
                var1 = var2.time;
                var0 = {};
                var3 = 'long';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 80:
                var1 = var2.time;
                var0 = {};
                var3 = 'medium';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 103:
                var1 = var2.time;
                var0 = {};
                var3 = 'short';
                var0.width = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot1 = var4;
    var2 = {};
    var2.p = var4;
    var3 = function arg0, arg1() {
        _fun22948: for (var _fun22948_ip = 0;;) switch (_fun22948_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = var2.match;
                var0 = /(P+)(p+)?/;
                var1 = var1.bind(var2)(var0);
                if (var1) {
                    _fun22948_ip = 38;
                    continue _fun22948
                }
            case 34:
                var1 = new Array(0);
            case 38:
                var0 = 1;
                var3 = var1[var0];
                var0 = 2;
                var4 = var1[var0];
                if (var4) {
                    _fun22948_ip = 72;
                    continue _fun22948
                }
            case 55:
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2, var5);
                return var0;
            case 72:
                var0 = 'P';
                if (!(var0 !== var3)) {
                    _fun22948_ip = 169;
                    continue _fun22948
                }
            case 80:
                var0 = 'PP';
                if (!(var0 !== var3)) {
                    _fun22948_ip = 146;
                    continue _fun22948
                }
            case 90:
                var0 = 'PPP';
                if (!(var0 !== var3)) {
                    _fun22948_ip = 123;
                    continue _fun22948
                }
            case 100:
                var1 = var5.dateTime;
                var0 = {};
                var2 = 'full';
                var0.width = var2;
                var7 = var1.bind(var5)(var0);
                _fun22948_ip = 190;
                continue _fun22948;
            case 123:
                var1 = var5.dateTime;
                var0 = {};
                var2 = 'long';
                var0.width = var2;
                var7 = var1.bind(var5)(var0);
                _fun22948_ip = 190;
                continue _fun22948;
            case 146:
                var1 = var5.dateTime;
                var0 = {};
                var2 = 'medium';
                var0.width = var2;
                var7 = var1.bind(var5)(var0);
                _fun22948_ip = 190;
                continue _fun22948;
            case 169:
                var1 = var5.dateTime;
                var0 = {};
                var2 = 'short';
                var0.width = var2;
                var7 = var1.bind(var5)(var0);
            case 190:
                var6 = var7.replace;
                var2 = _closure1_slot0;
                var1 = undefined;
                var3 = var2.bind(var1)(var3, var5);
                var2 = '{{date}}';
                var3 = var6.bind(var7)(var2, var3);
                var2 = var3.replace;
                var0 = _closure1_slot1;
                var1 = var0.bind(var1)(var4, var5);
                var0 = '{{time}}';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.P = var3;
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);