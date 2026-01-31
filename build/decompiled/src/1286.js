// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun13920: for (var _fun13920_ip = 0;;) switch (_fun13920_ip) {
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
                _fun13920_ip = 74;
                continue _fun13920;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var4 = function arg0, arg1() {
        _fun13923: for (var _fun13923_ip = 0;;) switch (_fun13923_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var2 = 'string';
                var1 = typeof var5;
                var0 = var5;
                if (!(var2 !== var1)) {
                    _fun13923_ip = 49;
                    continue _fun13923
                }
            case 20:
                var3 = var4.bindFormatValues;
                var2 = _closure1_slot5;
                var1 = arg1;
                var2 = var3.bind(var4)(var2, var5, var1);
                var1 = 0;
                var0 = var2[var1];
            case 49:
                return var0;
        }
    };
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var3 = true;
    var7.value = var3;
    var3 = '__esModule';
    var3 = var8.bind(var9)(var2, var3, var7);
    var2.StringBuilder = var0;
    var2.stringFormatter = var0;
    var2.formatToPlainString = var4;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var5 = var3.FormatBuilder;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun13925: for (var _fun13925_ip = 0;;) switch (_fun13925_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun13925_ip = 69;
                        continue _fun13925
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun13925_ip = 105;
                    continue _fun13925;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = '';
                    var0.result = var1;
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
        var0 = 'pushRichTextTag';
        var4.key = var0;
        var0 = function arg0, arg1, arg2() {
            _fun13926: for (var _fun13926_ip = 0;;) switch (_fun13926_ip) {
                case 0:
                    var3 = this;
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var0 = undefined;
                case 11:
                    var5 = var1().value;
                    var4 = var2;
                    if (!(var4 !== var0)) {
                        _fun13926_ip = 47;
                        continue _fun13926
                    }
                case 22: // try_start_0
                    var4 = var3.result;
                    var4 = var4 + var5;
                    var3.result = var4;
                case 38: // try_end0
                    _fun13926_ip = 11;
                    continue _fun13926;
                case 40: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'pushLiteralText';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var2 = var1.result;
            var0 = arg0;
            var0 = var2 + var0;
            var1.result = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'pushObject';
        var4.key = var6;
        var6 = function arg0() {
            _fun13928: for (var _fun13928_ip = 0;;) switch (_fun13928_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun13928_ip = 23;
                        continue _fun13928
                    }
                case 15:
                    var2 = 'toString';
                    var0 = var2 in var3;
                case 23:
                    if (!var0) {
                        _fun13928_ip = 51;
                        continue _fun13928
                    }
                case 26:
                    var2 = var1.result;
                    var0 = var3.toString;
                    var0 = var0.bind(var3)();
                    var0 = var2 + var0;
                    var1.result = var0;
                case 51:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'finish';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var1 = var0.result;
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var _closure1_slot5 = var3;
    var2.StringBuilder = var3;
    var1 = {};
    var1.format = var4;
    var1.builder = var3;
    var2.stringFormatter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1276]);