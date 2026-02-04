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
        _fun44379: for (var _fun44379_ip = 0;;) switch (_fun44379_ip) {
            case 0:
                var9 = arguments[3];
                var8 = arguments[4];
                var6 = arg0;
                var7 = arg1;
                var2 = arg2;
                var5 = undefined;
                if (!(var9 === var5)) {
                    _fun44379_ip = 23;
                    continue _fun44379
                }
            case 21:
                var9 = null;
            case 23:
                var3 = var9;
                if (!(var8 === var5)) {
                    _fun44379_ip = 32;
                    continue _fun44379
                }
            case 30:
                var8 = true;
            case 32:
                var4 = var8;
                var0 = undefined;
                var1 = undefined;
            case 39: // try_start_0
                var8 = var4;
                if (!var8) {
                    _fun44379_ip = 58;
                    continue _fun44379
                }
            case 45:
                var9 = var7;
                var8 = '\n\n';
                var7 = var9 + var8;
            case 58:
                var8 = var6;
                var10 = var2;
                var13 = var8.bind(var5)(var7, var10);
                var0 = var13;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 0;
                var9 = var11[var7];
                var12 = var8.bind(var5)(var9);
                var9 = var12.constrainAst;
                var9 = var9.bind(var12)(var13);
                var1 = var9.hasBailedAst;
                var9 = var9.ast;
                var0 = var9;
                var7 = var11[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.flattenAst;
                var0 = var7.bind(var8)(var10, var9);
            case 142: // try_end0
                _fun44379_ip = 173;
                continue _fun44379;
            case 144: // catch_target0
                CatchBlockStart(arg_register = 7);
                var7 = var6;
                var6 = '';
                if (!var4) {
                    _fun44379_ip = 162;
                    continue _fun44379
                }
            case 156:
                var6 = '\n\n';
            case 162:
                var4 = var2;
                var0 = var7.bind(var5)(var6, var4);
                var1 = false;
            case 173:
                var4 = var3;
                if (!var4) {
                    _fun44379_ip = 198;
                    continue _fun44379
                }
            case 179:
                var4 = var3;
                var3 = var0;
                var2 = var2.inline;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 198:
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
            _fun44381: for (var _fun44381_ip = 0;;) switch (_fun44381_ip) {
                case 0:
                    var6 = arguments[0];
                    var0 = arguments[1];
                    var7 = arguments[2];
                    var5 = arguments[3];
                    var4 = undefined;
                    if (!(var6 === var4)) {
                        _fun44381_ip = 22;
                        continue _fun44381
                    }
                case 18:
                    var6 = '';
                case 22:
                    if (!(var7 === var4)) {
                        _fun44381_ip = 28;
                        continue _fun44381
                    }
                case 26:
                    var7 = {};
                case 28:
                    if (!(var5 === var4)) {
                        _fun44381_ip = 34;
                        continue _fun44381
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
            _fun44383: for (var _fun44383_ip = 0;;) switch (_fun44383_ip) {
                case 0:
                    var8 = arguments[0];
                    var0 = arguments[1];
                    var1 = arguments[2];
                    var5 = arguments[3];
                    var3 = undefined;
                    if (!(var8 === var3)) {
                        _fun44383_ip = 22;
                        continue _fun44383
                    }
                case 18:
                    var8 = '';
                case 22:
                    if (!(var0 === var3)) {
                        _fun44383_ip = 28;
                        continue _fun44383
                    }
                case 26:
                    var0 = true;
                case 28:
                    if (!(var1 === var3)) {
                        _fun44383_ip = 34;
                        continue _fun44383
                    }
                case 32:
                    var1 = {};
                case 34:
                    if (!(var5 === var3)) {
                        _fun44383_ip = 40;
                        continue _fun44383
                    }
                case 38:
                    var5 = null;
                case 40:
                    var2 = var8.trim;
                    var2 = var2.bind(var8)();
                    if (var2) {
                        _fun44383_ip = 57;
                        continue _fun44383
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
                        _fun44383_ip = 170;
                        continue _fun44383
                    }
                case 148:
                    var6 = var4;
                    var5 = var6.includes;
                    var4 = 'Cannot convert undefined';
                    var4 = var5.bind(var6)(var4);
                    if (var4) {
                        _fun44383_ip = 172;
                        continue _fun44383
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [4867, 3146, 2]);