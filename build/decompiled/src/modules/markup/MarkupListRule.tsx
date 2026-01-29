// modules/markup/MarkupListRule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5.value = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var2, var1, var5);
    var1 = /\n{2,}$/;
    var _closure1_slot2 = var1;
    var1 = /(?:^|\n)( *)$/;
    var _closure1_slot3 = var1;
    var7 = var0.RegExp;
    var9 = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +';
    var8 = var9.replace;
    var5 = '%INDENT_CAPTURE_PATTERN%';
    var1 = ' *';
    var5 = var8.bind(var9)(var5, var1);
    var1 = '^';
    var12 = var1 + var5;
    var5 = var7.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var13 = var5;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var5;
    var _closure1_slot4 = var1;
    var1 = / *\n$/;
    var _closure1_slot5 = var1;
    var5 = var0.RegExp;
    var0 = var5.prototype;
    var1 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var12 = '^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)';
    var13 = var1;
    var0 = new var13[var5](var12, var11);
    var0 = var0 instanceof Object ? var0 : var1;
    var _closure1_slot6 = var0;
    var0 = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
    var _closure1_slot7 = var0;
    var1 = {};
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.defaultRules;
    var11 = var5.list;
    var12 = var1;
    var5 = copyDataProperties(var12, var11);
    var7 = ' *-0123456789';
    var6 = var7.split;
    var5 = '';
    var6 = var6.bind(var7)(var5);
    var5 = 'requiredFirstCharacters';
    var1[var5] = var6;
    var6 = function(arg0, arg1) { // Original name: match, environment: var3
        _fun44032: for (var _fun44032_ip = 0;;) switch (_fun44032_ip) {
            case 0:
                var0 = arg1;
                var1 = var0.allowList;
                if (var1) {
                    _fun44032_ip = 16;
                    continue _fun44032
                }
            case 12:
                var1 = null;
                return var1;
            case 16:
                var2 = var0._listLevel;
                var1 = 11;
                if (!(!(var2 >= var1))) {
                    _fun44032_ip = 132;
                    continue _fun44032
                }
            case 29:
                var1 = var0.prevCapture;
                var3 = null;
                var1 = var3 == var1;
                var4 = '';
                if (var1) {
                    _fun44032_ip = 60;
                    continue _fun44032
                }
            case 48:
                var1 = var0.prevCapture;
                var0 = 0;
                var4 = var1[var0];
            case 60:
                var2 = _closure1_slot3;
                var0 = var2.exec;
                var6 = var0.bind(var2)(var4);
                var2 = var3 == var6;
                var0 = null;
                if (var2) {
                    _fun44032_ip = 130;
                    continue _fun44032
                }
            case 87:
                var5 = _closure1_slot7;
                var4 = var5.test;
                var2 = 0;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var0 = null;
                if (var2) {
                    _fun44032_ip = 130;
                    continue _fun44032
                }
            case 112:
                var3 = _closure1_slot6;
                var2 = var3.exec;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 130:
                return var0;
            case 132:
                var0 = null;
                return var0;
        }
    };
    var5 = 'match';
    var1[var5] = var6;
    var5 = function(arg0, arg1, arg2) { // Original name: parse, environment: var3
        _fun44033: for (var _fun44033_ip = 0;;) switch (_fun44033_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = arg2;
                var _closure2_slot1 = var2;
                var2 = 2;
                var3 = var0[var2];
                var2 = var3.length;
                var8 = 1;
                var4 = var2 > var8;
                var7 = undefined;
                var2 = undefined;
                if (!var4) {
                    _fun44033_ip = 90;
                    continue _fun44033
                }
            case 45:
                var5 = global;
                var9 = var5.Math;
                var6 = var9.min;
                var10 = var5.Math;
                var5 = var10.max;
                var3 = var3 - 0;
                var5 = var5.bind(var10)(var8, var3);
                var3 = 1000000000;
                var2 = var6.bind(var9)(var3, var5);
            case 90:
                var17 = 0;
                var9 = var0[var17];
                var6 = var9.replace;
                var3 = _closure1_slot2;
                var0 = '\n';
                var9 = var6.bind(var9)(var3, var0);
                var3 = _closure1_slot4;
                var0 = var3.exec;
                var3 = var0.bind(var3)(var9);
                var0 = null;
                var6 = var0 != var3;
                var10 = 0;
                if (!var6) {
                    _fun44033_ip = 153;
                    continue _fun44033
                }
            case 144:
                var6 = var3[var17];
                var10 = var6.length;
            case 153:
                var6 = var0 != var3;
                var17 = 0;
                if (!var6) {
                    _fun44033_ip = 171;
                    continue _fun44033
                }
            case 162:
                var3 = var3[var8];
                var17 = var3.length;
            case 171:
                var14 = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)';
                var12 = var14.replaceAll;
                var19 = var17 + var8;
                var3 = global;
                var6 = var3.HermesInternal;
                var15 = var6.concat;
                var22 = ' {';
                var20 = ',';
                var13 = '}';
                var21 = var17;
                var18 = var13;
                var11 = var22[var15](var21, var20, var19, var18, var17);
                var6 = '%INDENT_CAPTURE_PATTERN%';
                var21 = var12.bind(var14)(var6, var11);
                var6 = var3.RegExp;
                var11 = var6.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'gm';
                var22 = var11;
                var20 = var12;
                var6 = new var22[var6](var21, var20, var19);
                var6 = var6 instanceof Object ? var6 : var11;
                var11 = var3.RegExp;
                var3 = '^ {1,';
                var3 = var3 + var10;
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var21 = var3 + var13;
                var22 = var10;
                var3 = new var22[var11](var21, var20, var19);
                var3 = var3 instanceof Object ? var3 : var10;
                var _closure2_slot2 = var3;
                var3 = var9.match;
                var3 = var3.bind(var9)(var6);
                var _closure2_slot3 = var3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var0 != var3;
                var0 = 'markup list items can not be parsed.';
                var0 = var6.bind(var7)(var5, var0);
                var0 = false;
                var _closure2_slot4 = var0;
                var0 = {};
                var0.ordered = var4;
                var0.start = var2;
                var2 = var3.map;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun44034: for (var _fun44034_ip = 0;;) switch (_fun44034_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.replace;
                            var0 = _closure1_slot4;
                            var10 = '';
                            var4 = var2.bind(var3)(var0, var10);
                            var3 = var4.replace;
                            var2 = _closure2_slot2;
                            var8 = var3.bind(var4)(var2, var10);
                            var2 = _closure2_slot3;
                            var2 = var2.length;
                            var12 = 1;
                            var3 = var2 - var12;
                            var2 = arg1;
                            var2 = var2 === var3;
                            var3 = var8.indexOf;
                            var6 = '\n\n';
                            var4 = var3.bind(var8)(var6);
                            var3 = -1;
                            var7 = var3 !== var4;
                            if (var7) {
                                _fun44034_ip = 106;
                                continue _fun44034
                            }
                        case 96:
                            if (!var2) {
                                _fun44034_ip = 103;
                                continue _fun44034
                            }
                        case 99:
                            var2 = _closure2_slot4;
                        case 103:
                            var7 = var2;
                        case 106:
                            _closure2_slot4 = var7;
                            var11 = _closure2_slot1;
                            var4 = var11.inline;
                            var3 = var11._list;
                            var2 = var11._listLevel;
                            var5 = true;
                            var11._list = var5;
                            var9 = null;
                            var13 = var9 != var2;
                            var9 = 0;
                            if (!var13) {
                                _fun44034_ip = 154;
                                continue _fun44034
                            }
                        case 151:
                            var9 = var2;
                        case 154:
                            var9 = var9 + var12;
                            var11._listLevel = var9;
                            var9 = _closure2_slot1;
                            if (var7) {
                                _fun44034_ip = 194;
                                continue _fun44034
                            }
                        case 171:
                            var9.inline = var5;
                            var7 = var8.replace;
                            var5 = _closure1_slot5;
                            var7 = var7.bind(var8)(var5, var10);
                            _fun44034_ip = 217;
                            continue _fun44034;
                        case 194:
                            var5 = false;
                            var9.inline = var5;
                            var5 = var8.replace;
                            var1 = _closure1_slot5;
                            var7 = var5.bind(var8)(var1, var6);
                        case 217:
                            var6 = _closure2_slot0;
                            var5 = {};
                            var1 = _closure2_slot1;
                            var15 = var5;
                            var14 = var1;
                            var0 = copyDataProperties(var15, var14);
                            var8 = false;
                            var0 = 'allowHeading';
                            var5[var0] = var8;
                            var0 = undefined;
                            var6 = var6.bind(var0)(var7, var5);
                            var5 = var6.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun44035: for (var _fun44035_ip = 0;;) switch (_fun44035_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.type;
                                        var1 = 'text';
                                        var1 = var1 === var2;
                                        if (!var1) {
                                            _fun44035_ip = 30;
                                            continue _fun44035
                                        }
                                    case 19:
                                        var3 = var0.content;
                                        var2 = null;
                                        var1 = var2 != var3;
                                    case 30:
                                        if (!var1) {
                                            _fun44035_ip = 73;
                                            continue _fun44035
                                        }
                                    case 33:
                                        var4 = var0.content;
                                        var3 = var4.replace;
                                        var2 = /\n+\s*$/;
                                        var1 = '';
                                        var1 = var3.bind(var4)(var2, var1);
                                        var0.content = var1;
                                    case 73:
                                        return var0;
                                }
                            };
                            var0 = var5.bind(var6)(var0);
                            var1.inline = var4;
                            var1._list = var3;
                            var1._listLevel = var2;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0.items = var1;
                return var0;
        }
    };
    var3 = 'parse';
    var1[var3] = var5;
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/MarkupListRule.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3105, 44, 2]);