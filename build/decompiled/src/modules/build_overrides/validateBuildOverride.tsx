// modules/build_overrides/validateBuildOverride.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun92443: for (var _fun92443_ip = 0;;) switch (_fun92443_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92443_ip = 46;
                    continue _fun92443
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92443_ip = 55;
                    continue _fun92443
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92443_ip = 345;
                    continue _fun92443
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92443_ip = 323;
                    continue _fun92443
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92443_ip = 283;
                    continue _fun92443
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92443_ip = 270;
                    continue _fun92443
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun92443_ip = 163;
                    continue _fun92443
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92443_ip = 179;
                    continue _fun92443
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92443_ip = 249;
                    continue _fun92443
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92443_ip = 249;
                    continue _fun92443
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92443_ip = 234;
                    continue _fun92443
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92443_ip = 247;
                    continue _fun92443
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92443_ip = 265;
                continue _fun92443;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92443_ip = 283;
                continue _fun92443;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92443_ip = 323;
                    continue _fun92443
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun92443_ip = 330;
                    continue _fun92443
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92444: for (var _fun92444_ip = 0;;) switch (_fun92444_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92444_ip = 56;
                                continue _fun92444
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun92444_ip = 67;
                            continue _fun92444;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun92445: for (var _fun92445_ip = 0;;) switch (_fun92445_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92445_ip = 23;
                    continue _fun92445
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92445_ip = 33;
                    continue _fun92445
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun92445_ip = 70;
                    continue _fun92445
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92445_ip = 55;
                    continue _fun92445
                }
            case 70:
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BUILD_OVERRIDE_TARGET_NAMES;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PublicReleaseChannels;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/build_overrides/validateBuildOverride.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun92446: for (var _fun92446_ip = 0;;) switch (_fun92446_ip) {
            case 0:
                var0 = arg0;
                var9 = arg1;
                var12 = arg2;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun92446_ip = 959;
                    continue _fun92446
                }
            case 18:
                if (!(var3 != var9)) {
                    _fun92446_ip = 959;
                    continue _fun92446
                }
            case 25:
                var2 = var0.releaseChannel;
                var11 = var0.expiresAt;
                var8 = var0.validForUserIds;
                var16 = var0.allowedVersions;
                var5 = var0.targetBuildOverride;
                var0 = global;
                var4 = var0.Object;
                var1 = var4.keys;
                var7 = var1.bind(var4)(var5);
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 5;
                var4 = var5[var4];
                var5 = undefined;
                var6 = var6.bind(var5)(var4);
                var4 = var6.intersection;
                var4 = var4.bind(var6)(var7, var9);
                var6 = var4.length;
                var4 = 0;
                if (!(var4 !== var6)) {
                    _fun92446_ip = 841;
                    continue _fun92446
                }
            case 126:
                if (!(var3 != var2)) {
                    _fun92446_ip = 155;
                    continue _fun92446
                }
            case 130:
                var6 = var0.window;
                var6 = var6.GLOBAL_ENV;
                var6 = var6.RELEASE_CHANNEL;
                if (!(var2 === var6)) {
                    _fun92446_ip = 681;
                    continue _fun92446
                }
            case 155:
                if (!(var3 != var16)) {
                    _fun92446_ip = 408;
                    continue _fun92446
                }
            case 162:
                var10 = var3 == var12;
                var9 = false;
                var6 = false;
                if (var10) {
                    _fun92446_ip = 312;
                    continue _fun92446
                }
            case 176:
                var10 = var16.includes;
                var10 = var10.bind(var16)(var12);
                var6 = true;
                if (var10) {
                    _fun92446_ip = 312;
                    continue _fun92446
                }
            case 191:
                var10 = var12.split;
                var19 = '.';
                var12 = var10.bind(var12)(var19);
                var10 = _closure1_slot3;
                var18 = 1;
                var10 = var10.bind(var5)(var12, var18);
                var17 = var10[var4];
                var10 = _closure1_slot7;
                var15 = var10.bind(var5)(var16);
                var12 = var15.bind(var5)();
                var10 = var12.done;
                var14 = 2;
                var13 = '*';
                var6 = false;
                if (var10) {
                    _fun92446_ip = 312;
                    continue _fun92446
                }
            case 252:
                var21 = var12.value;
                var10 = var21.split;
                var21 = var10.bind(var21)(var19);
                var10 = _closure1_slot3;
                var21 = var10.bind(var5)(var21, var14);
                var10 = var21[var4];
                var21 = var21[var18];
                if (!(var13 === var21)) {
                    _fun92446_ip = 295;
                    continue _fun92446
                }
            case 289:
                var6 = true;
                if (!(var17 !== var10)) {
                    _fun92446_ip = 312;
                    continue _fun92446
                }
            case 295:
                var21 = var15.bind(var5)();
                var10 = var21.done;
                var12 = var21;
                var6 = false;
                if (!var10) {
                    _fun92446_ip = 252;
                    continue _fun92446
                }
            case 312:
                if (var6) {
                    _fun92446_ip = 408;
                    continue _fun92446
                }
            case 315:
                var6 = {};
                var6.valid = var9;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 4;
                var12 = var14[var9];
                var12 = var10.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var9 = var14[var9];
                var9 = var10.bind(var5)(var9);
                var9 = var9.t;
                var10 = var9.GOEF0C;
                var9 = {};
                var15 = var16.join;
                var14 = ', ';
                var14 = var15.bind(var16)(var14);
                var9.releaseChannel = var14;
                var9 = var12.bind(var13)(var10, var9);
                var6.reason = var9;
                return var6;
            case 408:
                var9 = var3 != var11;
                var6 = null;
                if (!var9) {
                    _fun92446_ip = 456;
                    continue _fun92446
                }
            case 417:
                var9 = var0.Date;
                var10 = var9.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var9
                    }
                });
                var24 = var10;
                var23 = var11;
                var9 = new var24[var9](var23, var22);
                var10 = var9 instanceof Object ? var9 : var10;
                var9 = var10.getTime;
                var6 = var9.bind(var10)();
            case 456:
                if (!(var3 != var6)) {
                    _fun92446_ip = 482;
                    continue _fun92446
                }
            case 460:
                var9 = var0.Date;
                var3 = var9.now;
                var3 = var3.bind(var9)();
                if (!(!(var6 < var3))) {
                    _fun92446_ip = 605;
                    continue _fun92446
                }
            case 482:
                var3 = var8.length;
                if (!(var3 > var4)) {
                    _fun92446_ip = 591;
                    continue _fun92446
                }
            case 491:
                var6 = var8.includes;
                var9 = _closure1_slot4;
                var3 = var9.getId;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var8)(var3);
                if (var3) {
                    _fun92446_ip = 591;
                    continue _fun92446
                }
            case 518:
                var3 = {};
                var6 = false;
                var3.valid = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 4;
                var8 = var11[var6];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.qZgV0a;
                var6 = var8.bind(var9)(var6);
                var3.reason = var6;
                _fun92446_ip = 603;
                continue _fun92446;
            case 591:
                var6 = {};
                var8 = true;
                var6.valid = var8;
                var3 = var6;
            case 603:
                _fun92446_ip = 679;
                continue _fun92446;
            case 605:
                var6 = {};
                var8 = false;
                var6.valid = var8;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 4;
                var9 = var12[var8];
                var9 = var11.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8["8eRE6S"];
                var8 = var9.bind(var10)(var8);
                var6.reason = var8;
                var3 = var6;
            case 679:
                return var3;
            case 681:
                var3 = _closure1_slot6;
                var3 = var3.PTB;
                if (!(var2 !== var3)) {
                    _fun92446_ip = 752;
                    continue _fun92446
                }
            case 695:
                var3 = var2.charAt;
                var4 = var3.bind(var2)(var4);
                var3 = var4.toUpperCase;
                var6 = var3.bind(var4)();
                var4 = var2.slice;
                var3 = 1;
                var4 = var4.bind(var2)(var3);
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = '';
                var8 = var3.bind(var0)(var6, var4);
                _fun92446_ip = 762;
                continue _fun92446;
            case 752:
                var0 = var2.toUpperCase;
                var8 = var0.bind(var2)();
            case 762:
                var0 = {};
                var2 = false;
                var0.valid = var2;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var4 = var9[var2];
                var4 = var3.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.GOEF0C;
                var2 = {};
                var2.releaseChannel = var8;
                var2 = var4.bind(var6)(var3, var2);
                var0.reason = var2;
                return var0;
            case 841:
                var0 = {};
                var2 = false;
                var0.valid = var2;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var3 = var6[var1];
                var3 = var2.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.wySUzv;
                var1 = {};
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    _fun92447: for (var _fun92447_ip = 0;;) switch (_fun92447_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = arg0;
                            var1 = var1[var0];
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = 'unknown';
                            if (!var2) {
                                _fun92447_ip = 30;
                                continue _fun92447
                            }
                        case 27:
                            var0 = var1;
                        case 30:
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var5);
                var6 = var7.join;
                var5 = ', ';
                var5 = var6.bind(var7)(var5);
                var1.requestedTargets = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0.reason = var1;
                return var0;
            case 959:
                var0 = {};
                var1 = false;
                var0.valid = var1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.d34xi4;
                var1 = var2.bind(var3)(var1);
                var0.reason = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1216, 1593, 660, 1234, 22, 2]);