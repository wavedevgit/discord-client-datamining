// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun3060: for (var _fun3060_ip = 0;;) switch (_fun3060_ip) {
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
                _fun3060_ip = 74;
                continue _fun3060;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
        var3 = function(arg0, arg1) { // Original name: CloseEvent, environment: var5
            _fun3064: for (var _fun3064_ip = 0;;) switch (_fun3064_ip) {
                case 0:
                    var2 = arg1;
                    var3 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var3, var1);
                    var9 = new Array(2);
                    var0 = arg0;
                    var9[0] = var0;
                    var9[1] = var2;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var4)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun3064_ip = 80;
                        continue _fun3064
                    }
                case 67:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var9);
                    _fun3064_ip = 114;
                    continue _fun3064;
                case 80:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var4)(var3);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 114:
                    var0 = var1.bind(var4)(var3, var0);
                    var3 = global;
                    var6 = var3.Boolean;
                    var5 = null;
                    var7 = var5 == var2;
                    var1 = undefined;
                    if (var7) {
                        _fun3064_ip = 145;
                        continue _fun3064
                    }
                case 139:
                    var1 = var2.wasClean;
                case 145:
                    var1 = var6.bind(var4)(var1);
                    var0._wasClean = var1;
                    var6 = var3.Number;
                    var7 = var5 == var2;
                    var1 = undefined;
                    if (var7) {
                        _fun3064_ip = 176;
                        continue _fun3064
                    }
                case 171:
                    var1 = var2.code;
                case 176:
                    var1 = var6.bind(var4)(var1);
                    if (var1) {
                        _fun3064_ip = 186;
                        continue _fun3064
                    }
                case 184:
                    var1 = 0;
                case 186:
                    var0._code = var1;
                    var6 = var5 == var2;
                    var1 = undefined;
                    if (var6) {
                        _fun3064_ip = 207;
                        continue _fun3064
                    }
                case 201:
                    var1 = var2.reason;
                case 207:
                    var5 = var5 != var1;
                    var1 = '';
                    if (!var5) {
                        _fun3064_ip = 235;
                        continue _fun3064
                    }
                case 218:
                    var3 = var3.String;
                    var2 = var2.reason;
                    var1 = var3.bind(var4)(var2);
                case 235:
                    var0._reason = var1;
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
        var0 = 'wasClean';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            var0 = this;
            var0 = var0._wasClean;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'code';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = this;
            var0 = var0._code;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'reason';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = this;
            var0 = var0._reason;
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