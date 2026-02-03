// modules/search/native/message_parsers/MessageSearchResultParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun105981: for (var _fun105981_ip = 0;;) switch (_fun105981_ip) {
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
            case 72: // try_end0
                _fun105981_ip = 76;
                continue _fun105981;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CachedSearchResultParser;
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0, arg1() {
            _fun105985: for (var _fun105985_ip = 0;;) switch (_fun105985_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var5, var4);
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var2)(var4);
                    var4 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun105985_ip = 64;
                        continue _fun105985
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var2);
                    _fun105985_ip = 102;
                    continue _fun105985;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var2)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var4.bind(var2)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun105986: for (var _fun105986_ip = 0;;) switch (_fun105986_ip) {
                            case 0:
                                var5 = arg0;
                                var8 = arguments[2];
                                var7 = undefined;
                                if (!(var8 === var7)) {
                                    _fun105986_ip = 17;
                                    continue _fun105986
                                }
                            case 14:
                                var8 = 1;
                            case 17:
                                var _closure4_slot0 = var7;
                                var0 = null;
                                if (!(var0 != var5)) {
                                    _fun105986_ip = 332;
                                    continue _fun105986
                                }
                            case 30:
                                var4 = var5.replace;
                                var3 = /(\r\n|\n|\r)/gm;
                                var1 = ' ';
                                var6 = var4.bind(var5)(var3, var1);
                                var1 = global;
                                var5 = var1.Set;
                                var4 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var3 = 6;
                                var3 = var9[var3];
                                var7 = var4.bind(var7)(var3);
                                var4 = var7.analyze;
                                var3 = arg1;
                                var11 = var4.bind(var7)(var3);
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var12 = var4;
                                var3 = new var12[var5](var11, var10);
                                var3 = var3 instanceof Object ? var3 : var4;
                                _closure4_slot0 = var3;
                                var4 = var6.split;
                                var3 = /(\W+)/g;
                                var4 = var4.bind(var6)(var3);
                                var3 = var4.find;
                                var2 = function(arg0) { // Environment: var2
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 6;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.shouldHighlight;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                if (!(var0 != var2)) {
                                    _fun105986_ip = 330;
                                    continue _fun105986
                                }
                            case 178:
                                var5 = var1.RegExp;
                                var7 = '\\b';
                                var3 = var7 + var2;
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var11 = var3 + var7;
                                var12 = var4;
                                var3 = new var12[var5](var11, var10);
                                var4 = var3 instanceof Object ? var3 : var4;
                                var3 = var6.search;
                                var3 = var3.bind(var6)(var4);
                                var4 = -1;
                                if (!(var4 !== var3)) {
                                    _fun105986_ip = 328;
                                    continue _fun105986
                                }
                            case 239:
                                var7 = var2.length;
                                var5 = var1.Math;
                                var4 = var5.max;
                                var2 = 30;
                                var2 = var2 * var8;
                                var2 = var2 - var7;
                                var3 = var3 - var2;
                                var2 = 0;
                                var5 = var4.bind(var5)(var2, var3);
                                var2 = var5 > var2;
                                var4 = '';
                                var3 = var4;
                                if (!var2) {
                                    _fun105986_ip = 298;
                                    continue _fun105986
                                }
                            case 292:
                                var3 = '...';
                            case 298:
                                var2 = var6.substring;
                                var2 = var2.bind(var6)(var5);
                                var1 = var1.HermesInternal;
                                var1 = var1.concat;
                                var1 = var1.bind(var4)(var3, var2);
                                return var1;
                            case 328:
                                return var0;
                            case 330:
                                return var0;
                            case 332:
                                return var0;
                        }
                    };
                    var0.truncateMessage = var4;
                    var3 = function(arg0) { // Environment: var3
                        _fun105988: for (var _fun105988_ip = 0;;) switch (_fun105988_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot0;
                                var2 = var2.tokenizedQueryContent;
                                var4 = null;
                                if (!(var4 != var2)) {
                                    _fun105988_ip = 253;
                                    continue _fun105988
                                }
                            case 27:
                                var2 = _closure3_slot0;
                                var5 = var2.tokenizedQueryContent;
                                var2 = '';
                                if (!(var2 !== var5)) {
                                    _fun105988_ip = 253;
                                    continue _fun105988
                                }
                            case 48:
                                var7 = _closure3_slot0;
                                var6 = var7.truncateMessage;
                                var5 = var0.content;
                                var2 = var7.tokenizedQueryContent;
                                var1 = var7.lineClamp;
                                var2 = var6.bind(var7)(var5, var2, var1);
                                if (!(var4 == var2)) {
                                    _fun105988_ip = 215;
                                    continue _fun105988
                                }
                            case 89:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var5 = 7;
                                var6 = var6[var5];
                                var5 = undefined;
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.chain;
                                var5 = var0.embeds;
                                var7 = var6.bind(var7)(var5);
                                var6 = var7.map;
                                var5 = function(arg0) { // Environment: var3
                                    _fun105989: for (var _fun105989_ip = 0;;) switch (_fun105989_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var6 = _closure3_slot0;
                                            var5 = var6.truncateMessage;
                                            var4 = var1.rawTitle;
                                            var3 = var6.tokenizedQueryContent;
                                            var0 = var6.lineClamp;
                                            var0 = var5.bind(var6)(var4, var3, var0);
                                            var3 = null;
                                            if (!(var3 == var0)) {
                                                _fun105989_ip = 82;
                                                continue _fun105989
                                            }
                                        case 47:
                                            var5 = _closure3_slot0;
                                            var4 = var5.truncateMessage;
                                            var3 = var1.rawDescription;
                                            var2 = var5.tokenizedQueryContent;
                                            var1 = var5.lineClamp;
                                            var0 = var4.bind(var5)(var3, var2, var1);
                                        case 82:
                                            return var0;
                                    }
                                };
                                var6 = var6.bind(var7)(var5);
                                var5 = var6.find;
                                var3 = function(arg0) { // Environment: var3
                                    var1 = null;
                                    var0 = arg0;
                                    var0 = var1 != var0;
                                    return var0;
                                };
                                var5 = var5.bind(var6)(var3);
                                var3 = var5.value;
                                var3 = var3.bind(var5)();
                                if (!(var4 == var3)) {
                                    _fun105988_ip = 180;
                                    continue _fun105988
                                }
                            case 178:
                                return var0;
                            case 180:
                                var1 = _closure1_slot7;
                                var4 = var1.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var11 = var4;
                                var10 = var0;
                                var1 = new var11[var1](var10, var9);
                                var1 = var1 instanceof Object ? var1 : var4;
                                var1.content = var3;
                                return var1;
                            case 215:
                                var1 = _closure1_slot7;
                                var3 = var1.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var11 = var3;
                                var10 = var0;
                                var1 = new var11[var1](var10, var9);
                                var1 = var1 instanceof Object ? var1 : var3;
                                var1.content = var2;
                                return var1;
                            case 253:
                                return var0;
                        }
                    };
                    var0.getSearchResults = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 8;
                    var4 = var5[var1];
                    var7 = var3.bind(var2)(var4);
                    var6 = var7.tokenizeQuery;
                    var4 = arg0;
                    var7 = var6.bind(var7)(var4);
                    var4 = var5[var1];
                    var6 = var3.bind(var2)(var4);
                    var4 = var6.getSearchQueryFromTokens;
                    var4 = var4.bind(var6)(var7);
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.getQueryContentString;
                    var4 = var1.bind(var3)(var4);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun105985_ip = 233;
                        continue _fun105985
                    }
                case 223:
                    var3 = var4.trim;
                    var2 = var3.bind(var4)();
                case 233:
                    var3 = var1 != var2;
                    var1 = '';
                    if (!var3) {
                        _fun105985_ip = 247;
                        continue _fun105985
                    }
                case 244:
                    var1 = var2;
                case 247:
                    var0.tokenizedQueryContent = var1;
                    var1 = arg1;
                    var0.lineClamp = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/message_parsers/MessageSearchResultParser.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 3101, 13810, 22, 8980, 13814, 2]);