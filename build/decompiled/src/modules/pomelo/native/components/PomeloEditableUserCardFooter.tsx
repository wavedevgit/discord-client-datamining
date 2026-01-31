// modules/pomelo/native/components/PomeloEditableUserCardFooter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 18;
    var8.minHeight = var11;
    var3.container = var8;
    var8 = {};
    var8.flex = var9;
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_FEEDBACK_CRITICAL;
    var8.color = var11;
    var3.errorMessage = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_FEEDBACK_POSITIVE;
    var8.color = var11;
    var3.iconPositive = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_FEEDBACK_WARNING;
    var8.color = var9;
    var3.iconWarning = var8;
    var8 = {
        'marginRight': 6,
        'alignSelf': 'center'
    };
    var3.icon = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.footer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = function(arg0) { // Original name: FooterMessage, environment: var1
        _fun80947: for (var _fun80947_ip = 0;;) switch (_fun80947_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.validation;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot6;
                var4 = undefined;
                var13 = var0.bind(var4)();
                var _closure2_slot1 = var13;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun80947_ip = 398;
                    continue _fun80947
                }
            case 41:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 5;
                var3 = var8[var3];
                var6 = var7.bind(var4)(var3);
                var3 = var6.match;
                var2 = var2.type;
                var10 = var3.bind(var6)(var2);
                var9 = var10.with;
                var2 = 6;
                var3 = var8[var2];
                var3 = var7.bind(var4)(var3);
                var3 = var3.NameValidationState;
                var6 = var3.AVAILABLE;
                var3 = function() { // Environment: var1
                    var0 = {};
                    var7 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 7;
                    var1 = var6[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var4 = var1.Text;
                    var1 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-feedback-positive'
                    };
                    var2 = {};
                    var8 = 1;
                    var2.flex = var8;
                    var1.style = var2;
                    var8 = _closure2_slot0;
                    var8 = var8.message;
                    var1.children = var8;
                    var1 = var7.bind(var5)(var4, var1);
                    var0.textComponent = var1;
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = 8;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var1.source = var3;
                    var2 = _closure2_slot1;
                    var2 = var2.iconPositive;
                    var2 = var2.color;
                    var1.color = var2;
                    var0.icon = var1;
                    return var0;
                };
                var10 = var9.bind(var10)(var6, var3);
                var9 = var10.with;
                var3 = var8[var2];
                var3 = var7.bind(var4)(var3);
                var3 = var3.NameValidationState;
                var6 = var3.ERROR;
                var3 = function() { // Environment: var1
                    var0 = {};
                    var7 = _closure1_slot4;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var1 = var6[var1];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var1);
                    var1 = {};
                    var2 = _closure2_slot1;
                    var9 = var2.errorMessage;
                    var1.style = var9;
                    var8 = _closure2_slot0;
                    var8 = var8.message;
                    var1.children = var8;
                    var1 = var7.bind(var4)(var3, var1);
                    var0.textComponent = var1;
                    var1 = {};
                    var3 = 10;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var1.source = var3;
                    var2 = var2.errorMessage;
                    var2 = var2.color;
                    var1.color = var2;
                    var0.icon = var1;
                    return var0;
                };
                var10 = var9.bind(var10)(var6, var3);
                var9 = var10.with;
                var3 = var8[var2];
                var3 = var7.bind(var4)(var3);
                var3 = var3.NameValidationState;
                var6 = var3.RATE_LIMIT;
                var3 = function() { // Environment: var1
                    var0 = {};
                    var7 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 7;
                    var1 = var6[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var4 = var1.Text;
                    var1 = {};
                    var2 = 'text-sm/medium';
                    var1.variant = var2;
                    var8 = _closure2_slot0;
                    var8 = var8.message;
                    var1.children = var8;
                    var1 = var7.bind(var5)(var4, var1);
                    var0.textComponent = var1;
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = 10;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var1.source = var3;
                    var2 = _closure2_slot1;
                    var2 = var2.iconWarning;
                    var2 = var2.color;
                    var1.color = var2;
                    var0.icon = var1;
                    return var0;
                };
                var6 = var9.bind(var10)(var6, var3);
                var3 = var6.with;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.NameValidationState;
                var2 = var2.INTERNAL_ERROR;
                var1 = function() { // Environment: var1
                    var0 = null;
                    return var0;
                };
                var2 = var3.bind(var6)(var2, var1);
                var1 = var2.exhaustive;
                var6 = var1.bind(var2)();
                if (!(var0 != var6)) {
                    _fun80947_ip = 396;
                    continue _fun80947
                }
            case 257:
                var9 = var6.icon;
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var13.footer;
                var1.style = var7;
                var8 = _closure1_slot4;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 11;
                var5 = var12[var10];
                var7 = var11.bind(var4)(var5);
                var5 = {};
                var13 = var13.icon;
                var5.style = var13;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.Sizes;
                var10 = var10.EXTRA_SMALL_10;
                var5.size = var10;
                var10 = var9.color;
                var5.color = var10;
                var9 = var9.source;
                var5.source = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.textComponent;
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 396:
                return var0;
            case 398:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloEditableUserCardFooter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PomeloEditableUserCardFooter, environment: var1
        var0 = arg0;
        var7 = var0.style;
        var8 = var0.validation;
        var10 = var0.message;
        var2 = _closure1_slot6;
        var3 = undefined;
        var6 = var2.bind(var3)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var9 = 5;
        var2 = var13[var9];
        var5 = var12.bind(var3)(var2);
        var4 = var5.match;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var8;
        var8 = var4.bind(var5)(var2);
        var5 = var8.with;
        var2 = var13[var9];
        var2 = var12.bind(var3)(var2);
        var2 = var2.P;
        var2 = var2.string;
        var4 = new Array(2);
        var4[0] = var2;
        var2 = var13[var9];
        var2 = var12.bind(var3)(var2);
        var2 = var2.P;
        var2 = var2._;
        var4[1] = var2;
        var2 = function(arg0) { // Environment: var1
            _fun80953: for (var _fun80953_ip = 0;;) switch (_fun80953_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1[Symbol.iterator];
                    var1 = var0().next;
                    var2 = var1().value;
                    var1 = var0;
                    var3 = undefined;
                    var1 = var1 === var3;
                    var4 = undefined;
                    if (var1) {
                        _fun80953_ip = 27;
                        continue _fun80953
                    }
                case 24:
                    var4 = var2;
                case 27:
                    if (var1) {
                        _fun80953_ip = 33;
                        continue _fun80953
                    }
                case 30:
                    var0.return();
                case 33:
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var0 = var5[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var8 = var5.bind(var8)(var4, var2);
        var5 = var8.with;
        var2 = var13[var9];
        var2 = var12.bind(var3)(var2);
        var2 = var2.P;
        var2 = var2.nullish;
        var4 = new Array(2);
        var4[0] = var2;
        var2 = {};
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var14 = var10.P;
        var11 = var14.not;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var10 = var10.P;
        var10 = var10.nullish;
        var10 = var11.bind(var14)(var10);
        var2.username = var10;
        var4[1] = var2;
        var2 = function(arg0) { // Environment: var1
            _fun80954: for (var _fun80954_ip = 0;;) switch (_fun80954_ip) {
                case 0:
                    var4 = arg0;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var6 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var5 = var4().value;
                    var8 = var1;
                    var8 = var8 === var6;
                    var2 = var8;
                    if (var8) {
                        _fun80954_ip = 32;
                        continue _fun80954
                    }
                case 29:
                    var3 = var5;
                case 32:
                    var3 = undefined;
                    var5 = var2;
                    if (var5) {
                        _fun80954_ip = 60;
                        continue _fun80954
                    }
                case 40:
                    var4 = var4().value;
                    var5 = var1;
                    var5 = var5 === var6;
                    var2 = var5;
                    if (var5) {
                        _fun80954_ip = 60;
                        continue _fun80954
                    }
                case 57:
                    var3 = var4;
                case 60: // try_start_0
                    var7 = var3.username;
                case 65: // try_end0
                    var3 = var2;
                    if (var3) {
                        _fun80954_ip = 74;
                        continue _fun80954
                    }
                case 71:
                    var1.return();
                case 74:
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var3.validation = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    return var3;
                case 100: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    _fun80954_ip = 110;
                    continue _fun80954;
                case 104:
                    CatchBlockStart(arg_register = 0);
                    _fun80954_ip = 110;
                    continue _fun80954;
                case 108:
                    CatchBlockStart(arg_register = 0);
                case 110:
                    if (var2) {
                        _fun80954_ip = 116;
                        continue _fun80954
                    }
                case 113:
                    var1.return();
                case 116:
                    throw var0;
            }
        };
        var8 = var5.bind(var8)(var4, var2);
        var5 = var8.with;
        var2 = var13[var9];
        var2 = var12.bind(var3)(var2);
        var2 = var2.P;
        var2 = var2.nullish;
        var4 = new Array(2);
        var4[0] = var2;
        var2 = {};
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.P;
        var10 = var11.not;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.P;
        var9 = var9.nullish;
        var9 = var10.bind(var11)(var9);
        var2.displayName = var9;
        var4[1] = var2;
        var2 = function(arg0) { // Environment: var1
            _fun80955: for (var _fun80955_ip = 0;;) switch (_fun80955_ip) {
                case 0:
                    var4 = arg0;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var6 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var5 = var4().value;
                    var8 = var1;
                    var8 = var8 === var6;
                    var2 = var8;
                    if (var8) {
                        _fun80955_ip = 32;
                        continue _fun80955
                    }
                case 29:
                    var3 = var5;
                case 32:
                    var3 = undefined;
                    var5 = var2;
                    if (var5) {
                        _fun80955_ip = 60;
                        continue _fun80955
                    }
                case 40:
                    var4 = var4().value;
                    var5 = var1;
                    var5 = var5 === var6;
                    var2 = var5;
                    if (var5) {
                        _fun80955_ip = 60;
                        continue _fun80955
                    }
                case 57:
                    var3 = var4;
                case 60: // try_start_0
                    var7 = var3.displayName;
                case 65: // try_end0
                    var3 = var2;
                    if (var3) {
                        _fun80955_ip = 74;
                        continue _fun80955
                    }
                case 71:
                    var1.return();
                case 74:
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var3.validation = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    return var3;
                case 100: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    _fun80955_ip = 110;
                    continue _fun80955;
                case 104:
                    CatchBlockStart(arg_register = 0);
                    _fun80955_ip = 110;
                    continue _fun80955;
                case 108:
                    CatchBlockStart(arg_register = 0);
                case 110:
                    if (var2) {
                        _fun80955_ip = 116;
                        continue _fun80955
                    }
                case 113:
                    var1.return();
                case 116:
                    throw var0;
            }
        };
        var4 = var5.bind(var8)(var4, var2);
        var2 = var4.otherwise;
        var1 = function() { // Environment: var1
            var0 = null;
            return var0;
        };
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var6.container;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3418, 10258, 3900, 7424, 5848, 5847, 4045, 2]);