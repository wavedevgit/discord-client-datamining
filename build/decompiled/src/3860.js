// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun34855: for (var _fun34855_ip = 0;;) switch (_fun34855_ip) {
            case 0:
                var0 = _closure1_slot2;
                var2 = var0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
                var3 = null;
                var5 = var3 == var2;
                var0 = undefined;
                if (var5) {
                    _fun34855_ip = 64;
                    continue _fun34855
                }
            case 24:
                var5 = var2.A;
                var2 = var3 == var5;
                var0 = undefined;
                if (var2) {
                    _fun34855_ip = 64;
                    continue _fun34855
                }
            case 39:
                var2 = var5.getOwner;
                var2 = var3 == var2;
                var0 = undefined;
                if (var2) {
                    _fun34855_ip = 64;
                    continue _fun34855
                }
            case 54:
                var2 = var5.getOwner;
                var0 = var2.bind(var5)();
            case 64:
                if (var0) {
                    _fun34855_ip = 111;
                    continue _fun34855
                }
            case 67:
                var2 = _closure1_slot2;
                var5 = var2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun34855_ip = 108;
                    continue _fun34855
                }
            case 88:
                var5 = var5.ReactCurrentOwner;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun34855_ip = 108;
                    continue _fun34855
                }
            case 103:
                var2 = var5.current;
            case 108:
                var0 = var2;
            case 111:
                if (var0) {
                    _fun34855_ip = 158;
                    continue _fun34855
                }
            case 114:
                var1 = _closure1_slot2;
                var2 = var1.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun34855_ip = 155;
                    continue _fun34855
                }
            case 135:
                var2 = var2.ReactCurrentOwner;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun34855_ip = 155;
                    continue _fun34855
                }
            case 150:
                var1 = var2.current;
            case 155:
                var0 = var1;
            case 158:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = ['ref'];
    var _closure1_slot0 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 1;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.forwardRef;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.isReact19;
    var3 = var3.bind(var4)();
    var _closure1_slot4 = var3;
    var3 = function() {
        var1 = _closure1_slot5;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.isReactRendering = var3;
    var3 = function() {
        _fun34857: for (var _fun34857_ip = 0;;) switch (_fun34857_ip) {
            case 0:
                var1 = _closure1_slot5;
                var0 = undefined;
                var2 = var1.bind(var0)();
                var0 = var2;
                if (!var0) {
                    _fun34857_ip = 37;
                    continue _fun34857
                }
            case 19:
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun34857_ip = 34;
                    continue _fun34857
                }
            case 28:
                var1 = var2.alternate;
            case 34:
                var0 = !var1;
            case 37:
                return var0;
        }
    };
    var2.isFirstReactRender = var3;
    var1 = function arg0() {
        _fun34858: for (var _fun34858_ip = 0;;) switch (_fun34858_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot4;
                if (var2) {
                    _fun34858_ip = 32;
                    continue _fun34858
                }
            case 19:
                var2 = _closure1_slot3;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                _fun34858_ip = 37;
                continue _fun34858;
            case 32:
                var0 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var3 = var4.ref;
                    var1 = _closure1_slot1;
                    var0 = _closure1_slot0;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var4, var0);
                    var0 = _closure2_slot0;
                    var0 = var0.bind(var2)(var1, var3);
                    return var0;
                };
            case 37:
                return var0;
        }
    };
    var2.componentWithRef = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 3724]);