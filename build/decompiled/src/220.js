// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun3051: for (var _fun3051_ip = 0;;) switch (_fun3051_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun3051_ip = 74;
                continue _fun3051;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1() {
            _fun3055: for (var _fun3055_ip = 0;;) switch (_fun3055_ip) {
                case 0:
                    var6 = arg1;
                    var2 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var2, var1);
                    var9 = new Array(2);
                    var0 = arg0;
                    var9[0] = var0;
                    var9[1] = var6;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun3055_ip = 80;
                        continue _fun3055
                    }
                case 67:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var2, var9);
                    _fun3055_ip = 114;
                    continue _fun3055;
                case 80:
                    var5 = global;
                    var7 = var5.Reflect;
                    var5 = var7.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var3)(var2);
                    var4 = var4.constructor;
                    var0 = var5.bind(var7)(var8, var9, var4);
                case 114:
                    var0 = var1.bind(var3)(var2, var0);
                    var5 = null;
                    var2 = var5 == var6;
                    var1 = undefined;
                    if (var2) {
                        _fun3055_ip = 136;
                        continue _fun3055
                    }
                case 131:
                    var1 = var6.data;
                case 136:
                    var0._data = var1;
                    var1 = global;
                    var7 = var1.String;
                    var2 = var5 == var6;
                    var8 = undefined;
                    if (var2) {
                        _fun3055_ip = 165;
                        continue _fun3055
                    }
                case 159:
                    var8 = var6.origin;
                case 165:
                    var9 = var5 != var8;
                    var2 = '';
                    var4 = var2;
                    if (!var9) {
                        _fun3055_ip = 182;
                        continue _fun3055
                    }
                case 179:
                    var4 = var8;
                case 182:
                    var4 = var7.bind(var3)(var4);
                    var0._origin = var4;
                    var1 = var1.String;
                    var7 = var5 == var6;
                    var4 = undefined;
                    if (var7) {
                        _fun3055_ip = 214;
                        continue _fun3055
                    }
                case 208:
                    var4 = var6.lastEventId;
                case 214:
                    var5 = var5 != var4;
                    if (!var5) {
                        _fun3055_ip = 224;
                        continue _fun3055
                    }
                case 221:
                    var2 = var4;
                case 224:
                    var1 = var1.bind(var3)(var2);
                    var0._lastEventId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'data';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0._data;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'origin';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._origin;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'lastEventId';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var0 = var0._lastEventId;
            return var0;
        };
        var4.get = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 201]);