// ../discord_common/js/packages/i18n/parse.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var3 = function(arg0) { // Original name: setUpdateRules, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 6;
        var6 = var5[var3];
        var0 = undefined;
        var6 = var4.bind(var0)(var6);
        var8 = var6.rules;
        var7 = function(arg0, arg1) { // Original name: parserFor, environment: var1
            var6 = arg0;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 5;
            var2 = var7[var1];
            var4 = undefined;
            var8 = var5.bind(var4)(var2);
            var3 = var8.parserFor;
            var2 = arg1;
            var2 = var2.bind(var4)(var6);
            var2 = var3.bind(var8)(var2);
            var _closure3_slot0 = var2;
            var2 = var7[var1];
            var3 = var5.bind(var4)(var2);
            var2 = var3.reactFor;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var4 = var5.ruleOutput;
            var1 = 'react';
            var1 = var4.bind(var5)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var _closure3_slot1 = var1;
            var0 = function(arg0, arg1, arg2) { // Environment: var0
                _fun112907: for (var _fun112907_ip = 0;;) switch (_fun112907_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.includes;
                        var0 = '\n\n';
                        var1 = var1.bind(var2)(var0);
                        var1 = !var1;
                        var4 = var2;
                        if (var1) {
                            _fun112907_ip = 32;
                            continue _fun112907
                        }
                    case 28:
                        var4 = var2 + var0;
                    case 32:
                        var2 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var0 = {};
                        var0.inline = var1;
                        var1 = arg1;
                        var0.context = var1;
                        var1 = arg2;
                        var0.unsafeContext = var1;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var4, var0);
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            return var0;
        };
        var6 = arg0;
        var6 = var7.bind(var0)(var8, var6);
        var _closure1_slot3 = var6;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var3 = var3.rules;
        var1 = function(arg0) { // Original name: parserForNonReact, environment: var1
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.parserFor;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            var _closure3_slot0 = var1;
            var0 = function(arg0, arg1, arg2) { // Environment: var0
                var3 = _closure3_slot0;
                var1 = arg0;
                var0 = '\n\n';
                var2 = var1 + var0;
                var1 = {};
                var0 = false;
                var1.inline = var0;
                var0 = arg1;
                var1.context = var0;
                var0 = arg2;
                var1.unsafeContext = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            return var0;
        };
        var1 = var1.bind(var0)(var3);
        var _closure1_slot4 = var1;
        return var0;
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.FORMAT_RE;
    var _closure1_slot8 = var5;
    var5 = var4.MARKDOWN_RE;
    var _closure1_slot9 = var5;
    var5 = var4.UNSAFE_RE;
    var _closure1_slot10 = var5;
    var4 = var4.UNSAFE_RE_ALL;
    var _closure1_slot11 = var4;
    var4 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function(arg0, arg1, arg2) { // Original name: FormattedMessage, environment: var4
            _fun112911: for (var _fun112911_ip = 0;;) switch (_fun112911_ip) {
                case 0:
                    var8 = arg0;
                    var3 = arg2;
                    var2 = this;
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = var8;
                    if (var3) {
                        _fun112911_ip = 56;
                        continue _fun112911
                    }
                case 37:
                    var7 = var8.replace;
                    var6 = _closure1_slot11;
                    var5 = '';
                    var4 = var7.bind(var8)(var6, var5);
                case 56:
                    var2.message = var4;
                    var2.hasMarkdown = var3;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var1 = var4[var1];
                    var5 = var3.bind(var0)(var1);
                    var10 = var2.message;
                    var1 = var5.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = arg1;
                    var11 = var3;
                    var1 = new var11[var5](var10, var9, var8);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.intlMessage = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'format';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun112912: for (var _fun112912_ip = 0;;) switch (_fun112912_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.hasMarkdown;
                    if (var1) {
                        _fun112912_ip = 33;
                        continue _fun112912
                    }
                case 15:
                    var3 = var0.intlMessage;
                    var1 = var3.format;
                    var1 = var1.bind(var3)(var2);
                    return var1;
                case 33:
                    var1 = var0.getContext;
                    var5 = var1.bind(var0)(var2);
                    var3 = _closure1_slot5;
                    var4 = undefined;
                    var2 = 2;
                    var5 = var3.bind(var4)(var5, var2);
                    var2 = 0;
                    var3 = var5[var2];
                    var2 = 1;
                    var2 = var5[var2];
                    var1 = _closure1_slot3;
                    var5 = var0.intlMessage;
                    var0 = var5.format;
                    var0 = var0.bind(var5)(var3);
                    var0 = var1.bind(var4)(var0, var3, var2);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'astFormat';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.getContext;
            var1 = arg0;
            var5 = var2.bind(var0)(var1);
            var3 = _closure1_slot5;
            var4 = undefined;
            var2 = 2;
            var5 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var3 = var5[var2];
            var2 = 1;
            var2 = var5[var2];
            var1 = _closure1_slot4;
            var5 = var0.intlMessage;
            var0 = var5.format;
            var0 = var0.bind(var5)(var3);
            var0 = var1.bind(var4)(var0, var3, var2);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'plainFormat';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.intlMessage;
            var1 = var2.format;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getContext';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun112915: for (var _fun112915_ip = 0;;) switch (_fun112915_ip) {
                case 0:
                    var2 = arg0;
                    var14 = this;
                    var1 = {};
                    var4 = _closure1_slot10;
                    var3 = var4.test;
                    var0 = var14.message;
                    var0 = var3.bind(var4)(var0);
                    if (!var0) {
                        _fun112915_ip = 182;
                        continue _fun112915
                    }
                case 36:
                    var12 = global;
                    var3 = var12.Object;
                    var0 = var3.entries;
                    var11 = var0.bind(var3)(var2);
                    var0 = var11.length;
                    var10 = 0;
                    var0 = var10 < var0;
                    var9 = undefined;
                    var8 = 2;
                    var7 = 1;
                    var6 = '!!{';
                    var5 = '}!!';
                    var4 = 0;
                    var3 = 0;
                    if (!var0) {
                        _fun112915_ip = 182;
                        continue _fun112915
                    }
                case 93:
                    var15 = var11[var3];
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var9)(var15, var8);
                    var16 = var0[var10];
                    var17 = var0[var7];
                    var18 = var14.message;
                    var15 = var18.includes;
                    var0 = var12.HermesInternal;
                    var0 = var0.concat;
                    var0 = var0.bind(var6)(var16, var5);
                    var0 = var15.bind(var18)(var0);
                    var15 = var4;
                    if (!var0) {
                        _fun112915_ip = 167;
                        continue _fun112915
                    }
                case 153:
                    var0 = var4 + 1;
                    var1[var0] = var17;
                    var2[var16] = var0;
                    var15 = var0;
                case 167:
                    var3 = var3 + 1;
                    var0 = var11.length;
                    var4 = var15;
                    if (var3 < var0) {
                        _fun112915_ip = 93;
                        continue _fun112915
                    }
                case 182:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot12 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/i18n/parse.tsx';
    var5 = var6.bind(var7)(var5);
    var2.FormattedMessage = var4;
    var2.setUpdateRules = var3;
    var1 = function(arg0, arg1) { // Original name: getMessage, environment: var1
        _fun112916: for (var _fun112916_ip = 0;;) switch (_fun112916_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun112916_ip = 160;
                    continue _fun112916
                }
            case 12:
                var0 = _closure1_slot3;
                if (!(var2 == var0)) {
                    _fun112916_ip = 59;
                    continue _fun112916
                }
            case 23:
                var3 = _closure1_slot13;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.default;
                var0 = var3.bind(var2)(var0);
            case 59:
                var3 = var4.replace;
                var2 = /^\n+|\n+$/g;
                var0 = '';
                var5 = var3.bind(var4)(var2, var0);
                var2 = _closure1_slot8;
                var0 = var2.test;
                var0 = var0.bind(var2)(var5);
                var3 = _closure1_slot9;
                var2 = var3.test;
                var4 = var2.bind(var3)(var5);
                if (var0) {
                    _fun112916_ip = 125;
                    continue _fun112916
                }
            case 119:
                var0 = var5;
                if (!var4) {
                    _fun112916_ip = 158;
                    continue _fun112916
                }
            case 125:
                var3 = _closure1_slot12;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = arg1;
                var9 = var2;
                var8 = var5;
                var6 = var4;
                var1 = new var9[var3](var8, var7, var6, var5);
                var0 = var1 instanceof Object ? var1 : var2;
            case 158:
                return var0;
            case 160:
                var0 = '';
                return var0;
        }
    };
    var2.getMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 14458, 14416, 3105, 14459, 14460, 2]);