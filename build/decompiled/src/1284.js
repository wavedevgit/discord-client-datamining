// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun13887: for (var _fun13887_ip = 0;;) switch (_fun13887_ip) {
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
                _fun13887_ip = 74;
                continue _fun13887;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function(arg0, arg1) { // Original name: formatToAst, environment: var1
        _fun13890: for (var _fun13890_ip = 0;;) switch (_fun13890_ip) {
            case 0:
                var1 = arg0;
                var4 = this;
                var2 = 'string';
                var0 = typeof var1;
                if (!(var2 !== var0)) {
                    _fun13890_ip = 42;
                    continue _fun13890
                }
            case 17:
                var3 = var4.bindFormatValues;
                var2 = _closure1_slot9;
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var1, var0);
                _fun13890_ip = 75;
                continue _fun13890;
            case 42:
                var2 = {};
                var3 = _closure1_slot0;
                var3 = var3.Text;
                var2.type = var3;
                var2.content = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var3 = true;
    var7.value = var3;
    var3 = '__esModule';
    var3 = var8.bind(var9)(var2, var3, var7);
    var2.RichTextNodeType = var0;
    var2.astFormatter = var0;
    var2.formatToAst = var4;
    var7 = {};
    var _closure1_slot0 = var7;
    var2.RichTextNodeType = var7;
    var3 = 'text';
    var7.Text = var3;
    var3 = 'strong';
    var7.Strong = var3;
    var3 = 'em';
    var7.Emphasis = var3;
    var3 = 's';
    var7.Strikethrough = var3;
    var3 = 'inlineCode';
    var7.Code = var3;
    var3 = 'link';
    var7.Link = var3;
    var3 = 'paragraph';
    var7.Paragraph = var3;
    var3 = {};
    var7 = function(arg0) { // Original name: $b, environment: var1
        var0 = {};
        var1 = _closure1_slot0;
        var1 = var1.Strong;
        var0.type = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var3.$b = var7;
    var7 = function(arg0) { // Original name: $i, environment: var1
        var0 = {};
        var1 = _closure1_slot0;
        var1 = var1.Emphasis;
        var0.type = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var3.$i = var7;
    var7 = function(arg0) { // Original name: $del, environment: var1
        var0 = {};
        var1 = _closure1_slot0;
        var1 = var1.Strikethrough;
        var0.type = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var3.$del = var7;
    var7 = function(arg0) { // Original name: $code, environment: var1
        var0 = {};
        var1 = _closure1_slot0;
        var1 = var1.Code;
        var0.type = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var3.$code = var7;
    var7 = function(arg0, arg1, arg2) { // Original name: $link, environment: var1
        var4 = _closure1_slot7;
        var3 = undefined;
        var1 = arg2;
        var0 = 1;
        var1 = var4.bind(var3)(var1, var0);
        var0 = 0;
        var1 = var1[var0];
        var0 = {};
        var2 = _closure1_slot0;
        var2 = var2.Link;
        var0.type = var2;
        var0.target = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var3.$link = var7;
    var7 = function(arg0) { // Original name: $p, environment: var1
        var0 = {};
        var1 = _closure1_slot0;
        var1 = var1.Paragraph;
        var0.type = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var3.$p = var7;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var5 = var3.FormatBuilder;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: AstBuilder, environment: var5
            _fun13898: for (var _fun13898_ip = 0;;) switch (_fun13898_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun13898_ip = 69;
                        continue _fun13898
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun13898_ip = 105;
                    continue _fun13898;
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
                    var1 = new Array(0);
                    var0.result = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'pushRichTextTag';
        var4.key = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: pushRichTextTag, environment: var5
            _fun13899: for (var _fun13899_ip = 0;;) switch (_fun13899_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot8;
                    var2 = var1 in var2;
                    if (var2) {
                        _fun13899_ip = 48;
                        continue _fun13899
                    }
                case 17:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ' is not a known rich text formatting tag';
                    var2 = var4.bind(var3)(var1, var2);
                    throw var2;
                case 48:
                    var5 = _closure1_slot8;
                    var4 = var5[var1];
                    var3 = arg1;
                    var2 = '';
                    var1 = arg2;
                    var5 = var4.bind(var5)(var3, var2, var1);
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var1 = var1.bind(var2)(var5);
                    var2 = this;
                    var3 = var2.result;
                    var2 = var3.push;
                    if (var1) {
                        _fun13899_ip = 115;
                        continue _fun13899
                    }
                case 108:
                    var1 = var2.bind(var3)(var5);
                    _fun13899_ip = 137;
                    continue _fun13899;
                case 115:
                    var1 = var2.apply;
                    var4 = _closure1_slot1;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var5);
                    var0 = var1.bind(var2)(var3, var0);
                case 137:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'pushLiteralText';
        var4.key = var6;
        var6 = function(arg0) { // Original name: pushLiteralText, environment: var5
            _fun13900: for (var _fun13900_ip = 0;;) switch (_fun13900_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.result;
                    var1 = var0.result;
                    var4 = var1.length;
                    var1 = 1;
                    var1 = var4 - var1;
                    var1 = var3[var1];
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun13900_ip = 61;
                        continue _fun13900
                    }
                case 40:
                    var4 = var1.type;
                    var3 = _closure1_slot0;
                    var3 = var3.Text;
                    if (!(var4 !== var3)) {
                        _fun13900_ip = 101;
                        continue _fun13900
                    }
                case 61:
                    var4 = var0.result;
                    var3 = var4.push;
                    var0 = {};
                    var5 = _closure1_slot0;
                    var5 = var5.Text;
                    var0.type = var5;
                    var0.content = var2;
                    var0 = var3.bind(var4)(var0);
                    _fun13900_ip = 116;
                    continue _fun13900;
                case 101:
                    var0 = var1.content;
                    var0 = var0 + var2;
                    var1.content = var0;
                case 116:
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
    var3 = var3.bind(var0)(var5);
    var _closure1_slot9 = var3;
    var1 = {};
    var1.format = var4;
    var1.builder = var3;
    var2.astFormatter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 15, 17, 18, 57, 1276]);