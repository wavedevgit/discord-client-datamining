// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = function(arg0, arg1) { // Original name: getRootStateForNavigate, environment: var1
        _fun17547: for (var _fun17547_ip = 0;;) switch (_fun17547_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = var2.getParent;
                var3 = var1.bind(var2)();
                if (var3) {
                    _fun17547_ip = 21;
                    continue _fun17547
                }
            case 19:
                return var0;
            case 21:
                var1 = var3.getState;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var1 = {};
                var5 = 0;
                var1.index = var5;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.assign;
                var5 = var4.routes;
                var4 = var4.index;
                var5 = var5[var4];
                var4 = {};
                var4.state = var0;
                var0 = {};
                var4 = var6.bind(var7)(var0, var5, var4);
                var0 = new Array(1);
                var0[0] = var4;
                var1.routes = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var1 = function() { // Original name: useLinkBuilder, environment: var1
        var3 = _closure1_slot3;
        var4 = var3.useContext;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 1;
        var2 = var7[var2];
        var6 = undefined;
        var2 = var5.bind(var6)(var2);
        var2 = var2.NavigationHelpersContext;
        var4 = var4.bind(var3)(var2);
        var _closure2_slot0 = var4;
        var2 = var3.useContext;
        var5 = _closure1_slot1;
        var1 = 2;
        var1 = var7[var1];
        var1 = var5.bind(var6)(var1);
        var5 = var2.bind(var3)(var1);
        var _closure2_slot1 = var5;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun17549: for (var _fun17549_ip = 0;;) switch (_fun17549_ip) {
                case 0:
                    var9 = arg0;
                    var7 = arg1;
                    var1 = _closure2_slot1;
                    var4 = var1.options;
                    var5 = null;
                    var2 = var5 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun17549_ip = 36;
                        continue _fun17549
                    }
                case 31:
                    var3 = var4.enabled;
                case 36:
                    var2 = false;
                    if (!(var2 === var3)) {
                        _fun17549_ip = 44;
                        continue _fun17549
                    }
                case 42:
                    return var1;
                case 44:
                    var2 = _closure2_slot0;
                    var6 = {};
                    var8 = 0;
                    if (var2) {
                        _fun17549_ip = 88;
                        continue _fun17549
                    }
                case 55:
                    var6.index = var8;
                    var3 = {};
                    var3.name = var9;
                    var3.params = var7;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var6.routes = var2;
                    var3 = var6;
                    _fun17549_ip = 133;
                    continue _fun17549;
                case 88:
                    var2 = _closure1_slot4;
                    var0 = _closure2_slot0;
                    var6.index = var8;
                    var8 = {};
                    var8.name = var9;
                    var8.params = var7;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var6.routes = var7;
                    var3 = var2.bind(var1)(var0, var6);
                case 133:
                    if (!(var5 != var4)) {
                        _fun17549_ip = 146;
                        continue _fun17549
                    }
                case 137:
                    var0 = var4.getPathFromState;
                    if (var0) {
                        _fun17549_ip = 197;
                        continue _fun17549
                    }
                case 146:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 1;
                    var0 = var6[var0];
                    var6 = var2.bind(var1)(var0);
                    var2 = var6.getPathFromState;
                    var7 = var5 == var4;
                    var0 = undefined;
                    if (var7) {
                        _fun17549_ip = 189;
                        continue _fun17549
                    }
                case 184:
                    var0 = var4.config;
                case 189:
                    var0 = var2.bind(var6)(var3, var0);
                    _fun17549_ip = 223;
                    continue _fun17549;
                case 197:
                    var2 = var4.getPathFromState;
                    var5 = var5 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun17549_ip = 217;
                        continue _fun17549
                    }
                case 212:
                    var1 = var4.config;
                case 217:
                    var0 = var2.bind(var4)(var3, var1);
                case 223:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1472, 1547]);