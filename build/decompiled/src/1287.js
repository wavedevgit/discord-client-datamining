// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun13928: for (var _fun13928_ip = 0;;) switch (_fun13928_ip) {
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
                _fun13928_ip = 74;
                continue _fun13928;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: createReactBuilder, environment: var4
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var1 = var1.FormatBuilder;
        var0 = function(arg0) { // Environment: var0
            var3 = function() { // Original name: _class, environment: var5
                _fun13933: for (var _fun13933_ip = 0;;) switch (_fun13933_ip) {
                    case 0:
                        var3 = this;
                        var2 = undefined;
                        var4 = undefined;
                        var0 = _closure1_slot2;
                        var1 = _closure3_slot0;
                        var0 = var0.bind(var2)(var3, var1);
                        var0 = _closure1_slot5;
                        var8 = var0.bind(var2)(var1);
                        var1 = _closure1_slot4;
                        var0 = _closure1_slot9;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun13933_ip = 69;
                            continue _fun13933
                        }
                    case 51:
                        var6 = var8.apply;
                        var4 = arguments;
                        var0 = var4;
                        var0 = var6.bind(var8)(var3, var0);
                        _fun13933_ip = 105;
                        continue _fun13933;
                    case 69:
                        var6 = global;
                        var7 = var6.Reflect;
                        var6 = var7.construct;
                        var5 = _closure1_slot5;
                        var5 = var5.bind(var2)(var3);
                        var5 = var5.constructor;
                        var4 = arguments;
                        var0 = var6.bind(var7)(var8, var4, var5);
                    case 105:
                        var0 = var1.bind(var2)(var3, var0);
                        var1 = 0;
                        var0._nodeKey = var1;
                        var1 = new Array(0);
                        var0.result = var1;
                        return var0;
                }
            };
            var _closure3_slot0 = var3;
            var4 = _closure1_slot6;
            var2 = undefined;
            var1 = arg0;
            var1 = var4.bind(var2)(var3, var1);
            var1 = _closure1_slot3;
            var4 = {};
            var0 = 'pushRichTextTag';
            var4.key = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: pushRichTextTag, environment: var5
                var3 = this;
                var2 = var3.result;
                var1 = var2.push;
                var6 = _closure2_slot0;
                var0 = arg0;
                var5 = var6[var0];
                var0 = var3.context;
                var8 = var0.keyPrefix;
                var0 = var3._nodeKey;
                var7 = parseFloat(var0);
                var0 = var7 + 1;
                var3._nodeKey = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '';
                var0 = '.tag-';
                var4 = var4.bind(var3)(var8, var0, var7);
                var3 = arg1;
                var0 = arg2;
                var0 = var5.bind(var6)(var3, var4, var0);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var4.value = var0;
            var0 = new Array(4);
            var0[0] = var4;
            var4 = {};
            var6 = 'pushLiteralText';
            var4.key = var6;
            var6 = function(arg0) { // Original name: pushLiteralText, environment: var5
                _fun13935: for (var _fun13935_ip = 0;;) switch (_fun13935_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = this;
                        var4 = var0.result;
                        var1 = var0.result;
                        var2 = var1.length;
                        var1 = 1;
                        var2 = var2 - var1;
                        var2 = var4[var2];
                        var4 = 'string';
                        var2 = typeof var2;
                        if (!(var4 !== var2)) {
                            _fun13935_ip = 63;
                            continue _fun13935
                        }
                    case 45:
                        var4 = var0.result;
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var3);
                        _fun13935_ip = 96;
                        continue _fun13935;
                    case 63:
                        var2 = var0.result;
                        var0 = var0.result;
                        var0 = var0.length;
                        var1 = var0 - var1;
                        var0 = var2[var1];
                        var0 = var0 + var3;
                        var2[var1] = var0;
                    case 96:
                        var0 = undefined;
                        return var0;
                }
            };
            var4.value = var6;
            var0[1] = var4;
            var4 = {};
            var6 = 'pushObject';
            var4.key = var6;
            var6 = function(arg0) { // Original name: pushObject, environment: var5
                var0 = this;
                var2 = var0.result;
                var1 = var2.push;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var4.value = var6;
            var0[2] = var4;
            var4 = {};
            var6 = 'finish';
            var4.key = var6;
            var5 = function() { // Original name: finish, environment: var5
                var0 = this;
                var0 = var0.result;
                return var0;
            };
            var4.value = var5;
            var0[3] = var4;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var0 = var0.bind(var2)(var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var1 = function(arg0, arg1, arg2) { // Original name: formatReact, environment: var4
        _fun13938: for (var _fun13938_ip = 0;;) switch (_fun13938_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var2 = 'string';
                var1 = typeof var5;
                var0 = var5;
                if (!(var2 !== var1)) {
                    _fun13938_ip = 39;
                    continue _fun13938
                }
            case 20:
                var3 = var4.bindFormatValues;
                var2 = arg2;
                var1 = arg1;
                var0 = var3.bind(var4)(var2, var5, var1);
            case 39:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var3 = function(arg0) { // Original name: makeReactFormatter, environment: var4
        var0 = {};
        var2 = _closure1_slot11;
        var0.format = var2;
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0.builder = var1;
        return var0;
    };
    var0 = 0;
    var7 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8.value = var7;
    var7 = '__esModule';
    var7 = var9.bind(var10)(var2, var7, var8);
    var2.DEFAULT_REACT_RICH_TEXT_ELEMENTS = var0;
    var2.reactFormatter = var0;
    var2.formatReact = var1;
    var2.makeReactFormatter = var3;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.createElement;
    var _closure1_slot8 = var1;
    var1 = {};
    var5 = function(arg0, arg1) { // Original name: $b, environment: var4
        var4 = _closure1_slot8;
        var3 = {};
        var0 = arg1;
        var3.key = var0;
        var2 = undefined;
        var1 = 'strong';
        var0 = arg0;
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var1.$b = var5;
    var5 = function(arg0, arg1) { // Original name: $i, environment: var4
        var4 = _closure1_slot8;
        var3 = {};
        var0 = arg1;
        var3.key = var0;
        var2 = undefined;
        var1 = 'em';
        var0 = arg0;
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var1.$i = var5;
    var5 = function(arg0, arg1) { // Original name: $del, environment: var4
        var4 = _closure1_slot8;
        var3 = {};
        var0 = arg1;
        var3.key = var0;
        var2 = undefined;
        var1 = 'del';
        var0 = arg0;
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var1.$del = var5;
    var5 = function(arg0, arg1) { // Original name: $code, environment: var4
        var4 = _closure1_slot8;
        var3 = {};
        var0 = arg1;
        var3.key = var0;
        var2 = undefined;
        var1 = 'code';
        var0 = arg0;
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var1.$code = var5;
    var5 = function(arg0, arg1, arg2) { // Original name: $link, environment: var4
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg2;
        var0 = 1;
        var2 = var3.bind(var4)(var2, var0);
        var0 = 0;
        var0 = var2[var0];
        var3 = _closure1_slot8;
        var2 = {};
        var2.href = var0;
        var0 = arg1;
        var2.key = var0;
        var1 = 'a';
        var0 = arg0;
        var0 = var3.bind(var4)(var1, var2, var0);
        return var0;
    };
    var1.$link = var5;
    var4 = function(arg0, arg1) { // Original name: $p, environment: var4
        var4 = _closure1_slot8;
        var3 = {};
        var0 = arg1;
        var3.key = var0;
        var2 = undefined;
        var1 = 'p';
        var0 = arg0;
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var1.$p = var4;
    var2.DEFAULT_REACT_RICH_TEXT_ELEMENTS = var1;
    var1 = var2.DEFAULT_REACT_RICH_TEXT_ELEMENTS;
    var1 = var3.bind(var0)(var1);
    var2.reactFormatter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 31, 1276]);