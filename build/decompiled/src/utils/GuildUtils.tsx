// utils/GuildUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1, arg2() {
        _fun49600: for (var _fun49600_ip = 0;;) switch (_fun49600_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var3 = _closure1_slot4;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun49600_ip = 55;
                    continue _fun49600
                }
            case 36:
                var0 = global;
                var4 = var0.clearTimeout;
                var3 = _closure1_slot4;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
            case 55:
                var0 = global;
                var4 = var0.setTimeout;
                var0 = undefined;
                var3 = function() { // Environment: var1
                    _fun49601: for (var _fun49601_ip = 0;;) switch (_fun49601_ip) {
                        case 0:
                            var4 = new Array(0);
                            var _closure3_slot0 = var4;
                            var5 = function arg0() {
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = arg0;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var _closure3_slot1 = var5;
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun49601_ip = 112;
                                continue _fun49601
                            }
                        case 32:
                            var3 = global;
                            var7 = var3.Array;
                            var6 = var7.isArray;
                            var3 = _closure2_slot0;
                            var3 = var6.bind(var7)(var3);
                            if (var3) {
                                _fun49601_ip = 91;
                                continue _fun49601
                            }
                        case 57:
                            var7 = _closure1_slot5;
                            var6 = var7.getGuild;
                            var3 = _closure2_slot0;
                            var3 = var6.bind(var7)(var3);
                            if (!(var2 != var3)) {
                                _fun49601_ip = 160;
                                continue _fun49601
                            }
                        case 82:
                            var2 = undefined;
                            var2 = var5.bind(var2)(var3);
                            _fun49601_ip = 160;
                            continue _fun49601;
                        case 91:
                            var3 = _closure2_slot0;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun49603: for (var _fun49603_ip = 0;;) switch (_fun49603_ip) {
                                    case 0:
                                        var2 = _closure1_slot5;
                                        var1 = var2.getGuild;
                                        var0 = arg0;
                                        var2 = var1.bind(var2)(var0);
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun49603_ip = 40;
                                            continue _fun49603
                                        }
                                    case 26:
                                        var1 = _closure3_slot1;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 40:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            _fun49601_ip = 160;
                            continue _fun49601;
                        case 112:
                            var2 = var4.push;
                            var3 = _closure1_slot5;
                            var1 = var3.getGuildIds;
                            var9 = var1.bind(var3)();
                            var1 = new Array(0);
                            var8 = 0;
                            var10 = var1;
                            var3 = arraySpread(var10, var9, var8);
                            var10 = var2;
                            var9 = var1;
                            var8 = var4;
                            var1 = apply(var10, var9, var8);
                        case 160:
                            var2 = var4.length;
                            var1 = 0;
                            if (!(var2 > var1)) {
                                _fun49601_ip = 227;
                                continue _fun49601
                            }
                        case 171:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.requestMembers;
                            var5 = _closure2_slot1;
                            var1 = var5.toLocaleLowerCase;
                            var1 = var1.bind(var5)();
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 227:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = 200;
                var1 = var4.bind(var0)(var3, var1);
                var _closure1_slot4 = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun49604: for (var _fun49604_ip = 0;;) switch (_fun49604_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                var1 = var2 != var0;
                var5 = '';
                var4 = var5;
                if (!var1) {
                    _fun49604_ip = 22;
                    continue _fun49604
                }
            case 19:
                var4 = var0;
            case 22:
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var1 = ':';
                var0 = arg1;
                var4 = var3.bind(var5)(var4, var1, var0);
                var3 = _closure1_slot7;
                var0 = var3.get;
                var0 = var0.bind(var3)(var4);
                if (!(var2 == var0)) {
                    _fun49604_ip = 91;
                    continue _fun49604
                }
            case 70:
                var3 = _closure1_slot7;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var1 = function arg0() {
        _fun49605: for (var _fun49605_ip = 0;;) switch (_fun49605_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot6;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = _closure1_slot2;
                var4 = _closure1_slot3;
                var0 = 5;
                var0 = var4[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.getName;
                var9 = var0.bind(var2)(var3);
                var7 = null;
                var2 = var7 == var9;
                var3 = '';
                var0 = var3;
                if (var2) {
                    _fun49605_ip = 179;
                    continue _fun49605
                }
            case 68:
                var2 = var9.length;
                var8 = 0;
                var0 = var3;
                if (!(var8 !== var2)) {
                    _fun49605_ip = 179;
                    continue _fun49605
                }
            case 82:
                var2 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 6;
                var3 = var10[var1];
                var3 = var2.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var10[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.Y6Qfju;
                var1 = {};
                var5 = var9;
                if (!(var7 != var6)) {
                    _fun49605_ip = 169;
                    continue _fun49605
                }
            case 143:
                var6 = var6.truncateUsername;
                var5 = var9;
                if (!var6) {
                    _fun49605_ip = 169;
                    continue _fun49605
                }
            case 155:
                var7 = var9.slice;
                var6 = 20;
                var5 = var7.bind(var9)(var8, var6);
            case 169:
                var1.username = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 179:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var9 = 1;
    var3 = var6[var9];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var6[var3];
    var8 = var10.bind(var0)(var3);
    var3 = {};
    var7 = 3;
    var7 = var6[var7];
    var7 = var10.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var9 * var7;
    var3.maxAge = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var14 = var7;
    var13 = var3;
    var3 = new var14[var8](var13, var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot7 = var3;
    var3 = {};
    var3.getGuildNameSuggestion = var1;
    var4 = function arg0, arg1() {
        _fun49606: for (var _fun49606_ip = 0;;) switch (_fun49606_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arguments[2];
                var _closure2_slot0 = var4;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun49606_ip = 24;
                    continue _fun49606
                }
            case 21:
                var3 = 10;
            case 24:
                var _closure2_slot1 = var0;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var6 = var1.bind(var2)(var5);
                var2 = new Array(0);
                _closure2_slot1 = var2;
                if (var6) {
                    _fun49606_ip = 85;
                    continue _fun49606
                }
            case 57:
                var1 = _closure1_slot9;
                var8 = var1.bind(var0)(var5, var4);
                var1 = null;
                var8 = var1 == var8;
                var1 = false;
                if (!var8) {
                    _fun49606_ip = 102;
                    continue _fun49606
                }
            case 81:
                var1 = true;
                _fun49606_ip = 102;
                continue _fun49606;
            case 85:
                var8 = var5.forEach;
                var7 = function(arg0) { // Environment: var7
                    _fun49607: for (var _fun49607_ip = 0;;) switch (_fun49607_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot9;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3, var2);
                            var2 = null;
                            if (!(var2 == var4)) {
                                _fun49607_ip = 45;
                                continue _fun49607
                            }
                        case 31:
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 45:
                            return var0;
                    }
                };
                var7 = var8.bind(var5)(var7);
                var1 = false;
            case 102:
                var8 = var2.length;
                var7 = 0;
                if (!(var8 > var7)) {
                    _fun49606_ip = 116;
                    continue _fun49606
                }
            case 113:
                if (var6) {
                    _fun49606_ip = 135;
                    continue _fun49606
                }
            case 116:
                if (!var1) {
                    _fun49606_ip = 149;
                    continue _fun49606
                }
            case 119:
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var5, var4, var3);
                _fun49606_ip = 149;
                continue _fun49606;
            case 135:
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var2, var4, var3);
            case 149:
                return var0;
        }
    };
    var3.requestMembers = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/GuildUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getGuildNameSuggestion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1613, 1386, 667, 4674, 3227, 1234, 2]);