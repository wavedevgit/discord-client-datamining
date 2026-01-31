// ../discord_common/js/packages/markup/native/MarkupParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun44226: for (var _fun44226_ip = 0;;) switch (_fun44226_ip) {
            case 0:
                var8 = arguments[3];
                var7 = arguments[4];
                var5 = arg0;
                var6 = arg1;
                var1 = arg2;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun44226_ip = 23;
                    continue _fun44226
                }
            case 21:
                var8 = null;
            case 23:
                var2 = var8;
                if (!(var7 === var4)) {
                    _fun44226_ip = 32;
                    continue _fun44226
                }
            case 30:
                var7 = true;
            case 32:
                var3 = var7;
                var0 = undefined;
            case 37: // try_start_0
                var7 = var3;
                if (!var7) {
                    _fun44226_ip = 56;
                    continue _fun44226
                }
            case 43:
                var8 = var6;
                var7 = '\n\n';
                var6 = var8 + var7;
            case 56:
                var7 = var5;
                var9 = var1;
                var12 = var7.bind(var4)(var6, var9);
                var0 = var12;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 0;
                var8 = var10[var6];
                var11 = var7.bind(var4)(var8);
                var8 = var11.constrainAst;
                var8 = var8.bind(var11)(var12);
                var0 = var8;
                var6 = var10[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.flattenAst;
                var0 = var6.bind(var7)(var9, var8);
            case 128: // try_end0
                _fun44226_ip = 157;
                continue _fun44226;
            case 130: // catch_target0
                CatchBlockStart(arg_register = 6);
                var6 = var5;
                var5 = '';
                if (!var3) {
                    _fun44226_ip = 148;
                    continue _fun44226
                }
            case 142:
                var5 = '\n\n';
            case 148:
                var3 = var1;
                var0 = var6.bind(var4)(var5, var3);
            case 157:
                var3 = var2;
                if (!var3) {
                    _fun44226_ip = 181;
                    continue _fun44226
                }
            case 163:
                var3 = var2;
                var2 = var0;
                var1 = var1.inline;
                var0 = var3.bind(var4)(var2, var1);
            case 181:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5.value = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var2, var1, var5);
    var1 = {};
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.parserFor;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun44228: for (var _fun44228_ip = 0;;) switch (_fun44228_ip) {
                case 0:
                    var6 = arguments[0];
                    var0 = arguments[1];
                    var7 = arguments[2];
                    var5 = arguments[3];
                    var4 = undefined;
                    if (!(var6 === var4)) {
                        _fun44228_ip = 22;
                        continue _fun44228
                    }
                case 18:
                    var6 = '';
                case 22:
                    if (!(var7 === var4)) {
                        _fun44228_ip = 28;
                        continue _fun44228
                    }
                case 26:
                    var7 = {};
                case 28:
                    if (!(var5 === var4)) {
                        _fun44228_ip = 34;
                        continue _fun44228
                    }
                case 32:
                    var5 = null;
                case 34:
                    var3 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1.inline = var0;
                    var13 = var1;
                    var12 = var7;
                    var7 = copyDataProperties(var13, var12);
                    var9 = !var0;
                    var14 = undefined;
                    var13 = var2;
                    var12 = var6;
                    var11 = var1;
                    var10 = var5;
                    var0 = var14[var3](var13, var12, var11, var10, var9, var8);
                    return var0;
            }
        };
        return var0;
    };
    var1.astParserFor = var5;
    var0 = function arg0() {
        var6 = arg0;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 1;
        var2 = var7[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var2);
        var2 = var3.parserFor;
        var2 = var2.bind(var3)(var6);
        var _closure2_slot0 = var2;
        var2 = var7[var1];
        var3 = var5.bind(var4)(var2);
        var2 = var3.reactFor;
        var1 = var7[var1];
        var5 = var5.bind(var4)(var1);
        var4 = var5.ruleOutput;
        var1 = 'react';
        var1 = var4.bind(var5)(var6, var1);
        var1 = var2.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var0 = function() { // Environment: var0
            _fun44230: for (var _fun44230_ip = 0;;) switch (_fun44230_ip) {
                case 0:
                    var8 = arguments[0];
                    var0 = arguments[1];
                    var1 = arguments[2];
                    var5 = arguments[3];
                    var3 = undefined;
                    if (!(var8 === var3)) {
                        _fun44230_ip = 22;
                        continue _fun44230
                    }
                case 18:
                    var8 = '';
                case 22:
                    if (!(var0 === var3)) {
                        _fun44230_ip = 28;
                        continue _fun44230
                    }
                case 26:
                    var0 = true;
                case 28:
                    if (!(var1 === var3)) {
                        _fun44230_ip = 34;
                        continue _fun44230
                    }
                case 32:
                    var1 = {};
                case 34:
                    if (!(var5 === var3)) {
                        _fun44230_ip = 40;
                        continue _fun44230
                    }
                case 38:
                    var5 = null;
                case 40:
                    var2 = var8.trim;
                    var2 = var2.bind(var8)();
                    if (var2) {
                        _fun44230_ip = 57;
                        continue _fun44230
                    }
                case 53:
                    var2 = null;
                    return var2;
                case 57:
                    var7 = {};
                    var7.inline = var0;
                    var13 = var7;
                    var12 = var1;
                    var1 = copyDataProperties(var13, var12);
                    var4 = _closure1_slot3;
                    var13 = _closure2_slot0;
                    var9 = !var0;
                    var14 = undefined;
                    var12 = var8;
                    var11 = var7;
                    var10 = var5;
                    var8 = var14[var4](var13, var12, var11, var10, var9, var8);
                    var0 = var8;
                    var5 = var7;
                    var4 = undefined;
                case 114: // try_start_0
                    var7 = _closure2_slot1;
                    var6 = var0;
                    var5 = var7.bind(var3)(var6, var5);
                case 127: // try_end0
                    return var5;
                case 129: // catch_target0
                    CatchBlockStart(arg_register = 5);
                    var2 = var5;
                    var6 = var5.message;
                    var4 = var6;
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun44230_ip = 170;
                        continue _fun44230
                    }
                case 148:
                    var6 = var4;
                    var5 = var6.includes;
                    var4 = 'Cannot convert undefined';
                    var4 = var5.bind(var6)(var4);
                    if (var4) {
                        _fun44230_ip = 172;
                        continue _fun44230
                    }
                case 170:
                    throw var2;
                case 172:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 0;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.MarkupParserNodeTypeError;
                    var13 = var0;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var1;
                    var0 = new var14[var2](var13, var12);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        return var0;
    };
    var1.reactParserFor = var0;
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/markup/native/MarkupParser.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4830, 3105, 2]);