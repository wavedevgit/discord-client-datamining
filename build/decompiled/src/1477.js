// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function(arg0, arg1) { // Original name: getStateForAction, environment: var2
        _fun16969: for (var _fun16969_ip = 0;;) switch (_fun16969_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var0;
                var3 = var0.type;
                var2 = 'SET_PARAMS';
                if (!(var2 !== var3)) {
                    _fun16969_ip = 232;
                    continue _fun16969
                }
            case 34:
                var2 = 'RESET';
                if (!(var2 !== var3)) {
                    _fun16969_ip = 46;
                    continue _fun16969
                }
            case 42:
                var2 = null;
                return var2;
            case 46:
                var10 = var0.payload;
                var2 = var10.routes;
                var4 = var2.length;
                var3 = 0;
                var2 = null;
                if (!(var3 !== var4)) {
                    _fun16969_ip = 230;
                    continue _fun16969
                }
            case 74:
                var6 = var10.routes;
                var4 = var6.some;
                var3 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.routeNames;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.name;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var3 = var4.bind(var6)(var3);
                var2 = null;
                if (var3) {
                    _fun16969_ip = 230;
                    continue _fun16969
                }
            case 104:
                var6 = var10.stale;
                var4 = false;
                var3 = var10;
                if (!(var4 === var6)) {
                    _fun16969_ip = 227;
                    continue _fun16969
                }
            case 119:
                var4 = var5.routeNames;
                var8 = var4.length;
                var4 = var10.routeNames;
                var6 = var4.length;
                var4 = null;
                if (!(var8 === var6)) {
                    _fun16969_ip = 224;
                    continue _fun16969
                }
            case 147:
                var9 = var10.routeNames;
                var8 = var9.some;
                var6 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.routeNames;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var6 = var8.bind(var9)(var6);
                var4 = null;
                if (var6) {
                    _fun16969_ip = 224;
                    continue _fun16969
                }
            case 174:
                var6 = global;
                var9 = var6.Object;
                var8 = var9.assign;
                var7 = {};
                var12 = var10.routes;
                var11 = var12.map;
                var6 = function(arg0) { // Environment: var1
                    _fun16974: for (var _fun16974_ip = 0;;) switch (_fun16974_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.key;
                            var0 = var5;
                            if (var1) {
                                _fun16974_ip = 107;
                                continue _fun16974
                            }
                        case 14:
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var9 = var5.name;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var6 = 0;
                            var7 = var7[var6];
                            var6 = undefined;
                            var7 = var8.bind(var6)(var7);
                            var6 = var7.nanoid;
                            var8 = var6.bind(var7)();
                            var1 = var1.HermesInternal;
                            var7 = var1.concat;
                            var6 = '';
                            var1 = '-';
                            var1 = var7.bind(var6)(var9, var1, var8);
                            var2.key = var1;
                            var1 = {};
                            var0 = var3.bind(var4)(var1, var5, var2);
                        case 107:
                            return var0;
                    }
                };
                var6 = var11.bind(var12)(var6);
                var7.routes = var6;
                var6 = {};
                var4 = var8.bind(var9)(var6, var10, var7);
            case 224:
                var3 = var4;
            case 227:
                var2 = var3;
            case 230:
                return var2;
            case 232:
                var0 = var0.source;
                if (var0) {
                    _fun16969_ip = 247;
                    continue _fun16969
                }
            case 240:
                var3 = var5.index;
                _fun16969_ip = 269;
                continue _fun16969;
            case 247:
                var4 = var5.routes;
                var2 = var4.findIndex;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot1;
                    var0 = var0.source;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var4)(var0);
            case 269:
                var _closure2_slot2 = var3;
                var2 = -1;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun16969_ip = 335;
                    continue _fun16969
                }
            case 285:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var2 = {};
                var7 = var5.routes;
                var6 = var7.map;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun16971: for (var _fun16971_ip = 0;;) switch (_fun16971_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = _closure2_slot2;
                            var2 = arg1;
                            var0 = var5;
                            if (!(var2 === var3)) {
                                _fun16971_ip = 91;
                                continue _fun16971
                            }
                        case 20:
                            var6 = global;
                            var4 = var6.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var9 = var6.Object;
                            var8 = var9.assign;
                            var7 = var5.params;
                            var1 = _closure2_slot1;
                            var1 = var1.payload;
                            var6 = var1.params;
                            var1 = {};
                            var1 = var8.bind(var9)(var1, var7, var6);
                            var2.params = var1;
                            var1 = {};
                            var0 = var3.bind(var4)(var1, var5, var2);
                        case 91:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1);
                var2.routes = var1;
                var1 = {};
                var0 = var3.bind(var4)(var1, var5, var2);
            case 335:
                return var0;
        }
    };
    var0.getStateForAction = var3;
    var2 = function(arg0) { // Original name: shouldActionChangeFocus, environment: var2
        var0 = arg0;
        var1 = var0.type;
        var0 = 'NAVIGATE';
        var0 = var0 === var1;
        return var0;
    };
    var0.shouldActionChangeFocus = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1478]);