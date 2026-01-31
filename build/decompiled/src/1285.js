// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun13906: for (var _fun13906_ip = 0;;) switch (_fun13906_ip) {
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
                _fun13906_ip = 74;
                continue _fun13906;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var4 = function(arg0, arg1) { // Original name: formatToMarkdownString, environment: var1
        _fun13909: for (var _fun13909_ip = 0;;) switch (_fun13909_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 2;
                if (!(var2 > var0)) {
                    _fun13909_ip = 28;
                    continue _fun13909
                }
            case 20:
                var2 = arguments[var0];
                if (!(var3 === var2)) {
                    _fun13909_ip = 37;
                    continue _fun13909
                }
            case 28:
                var3 = _closure1_slot7;
                _fun13909_ip = 41;
                continue _fun13909;
            case 37:
                var3 = arguments[var0];
            case 41:
                var2 = 'string';
                var1 = typeof var5;
                var0 = var5;
                if (!(var2 !== var1)) {
                    _fun13909_ip = 77;
                    continue _fun13909
                }
            case 55:
                var2 = var4.bindFormatValues;
                var1 = arg1;
                var2 = var2.bind(var4)(var3, var5, var1);
                var1 = 0;
                var0 = var2[var1];
            case 77:
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
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var3 = true;
    var7.value = var3;
    var3 = '__esModule';
    var3 = var8.bind(var9)(var2, var3, var7);
    var2.markdownFormatter = var0;
    var2.formatToMarkdownString = var4;
    var3 = {};
    var7 = function(arg0) { // Original name: $b, environment: var1
        var2 = arg0;
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        var1 = '**';
        var0 = var1 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var3.$b = var7;
    var7 = function(arg0) { // Original name: $i, environment: var1
        var2 = arg0;
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        var1 = '*';
        var0 = var1 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var3.$i = var7;
    var7 = function(arg0) { // Original name: $del, environment: var1
        var2 = arg0;
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        var1 = '~~';
        var0 = var1 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var3.$del = var7;
    var7 = function(arg0) { // Original name: $code, environment: var1
        var2 = arg0;
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        var1 = '`';
        var0 = var1 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var3.$code = var7;
    var7 = function(arg0, arg1, arg2) { // Original name: $link, environment: var1
        var3 = arg0;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg2;
        var0 = 1;
        var1 = var4.bind(var2)(var1, var0);
        var0 = 0;
        var1 = var1[var0];
        var2 = var3.join;
        var0 = '';
        var2 = var2.bind(var3)(var0);
        var0 = '[';
        var2 = var0 + var2;
        var0 = '](';
        var0 = var2 + var0;
        var1 = var0 + var1;
        var0 = ')';
        var0 = var1 + var0;
        return var0;
    };
    var3.$link = var7;
    var7 = function(arg0) { // Original name: $p, environment: var1
        var2 = arg0;
        var1 = var2.join;
        var0 = '';
        var1 = var1.bind(var2)(var0);
        var0 = '\n\n';
        var0 = var1 + var0;
        return var0;
    };
    var3.$p = var7;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var5 = var3.StringBuilder;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: MarkdownBuilder, environment: var0
            _fun13917: for (var _fun13917_ip = 0;;) switch (_fun13917_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun13917_ip = 69;
                        continue _fun13917
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun13917_ip = 105;
                    continue _fun13917;
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
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'pushRichTextTag';
        var4.key = var5;
        var0 = function(arg0, arg1, arg2) { // Original name: pushRichTextTag, environment: var0
            var1 = this;
            var2 = var1.result;
            var6 = _closure1_slot6;
            var0 = arg0;
            var5 = var6[var0];
            var4 = arg1;
            var3 = '';
            var0 = arg2;
            var0 = var5.bind(var6)(var4, var3, var0);
            var0 = var2 + var0;
            var1.result = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var _closure1_slot7 = var3;
    var1 = {};
    var1.format = var4;
    var1.builder = var3;
    var2.markdownFormatter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1286]);