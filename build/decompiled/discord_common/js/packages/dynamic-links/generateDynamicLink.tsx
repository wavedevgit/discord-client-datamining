// ../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun92669: for (var _fun92669_ip = 0;;) switch (_fun92669_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92669_ip = 46;
                    continue _fun92669
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92669_ip = 55;
                    continue _fun92669
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92669_ip = 345;
                    continue _fun92669
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92669_ip = 323;
                    continue _fun92669
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92669_ip = 283;
                    continue _fun92669
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92669_ip = 270;
                    continue _fun92669
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
                    _fun92669_ip = 163;
                    continue _fun92669
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92669_ip = 179;
                    continue _fun92669
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92669_ip = 249;
                    continue _fun92669
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92669_ip = 249;
                    continue _fun92669
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92669_ip = 234;
                    continue _fun92669
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92669_ip = 247;
                    continue _fun92669
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92669_ip = 265;
                continue _fun92669;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92669_ip = 283;
                continue _fun92669;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92669_ip = 323;
                    continue _fun92669
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
                    _fun92669_ip = 330;
                    continue _fun92669
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92670: for (var _fun92670_ip = 0;;) switch (_fun92670_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92670_ip = 56;
                                continue _fun92670
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
                            _fun92670_ip = 67;
                            continue _fun92670;
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
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun92671: for (var _fun92671_ip = 0;;) switch (_fun92671_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92671_ip = 23;
                    continue _fun92671
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92671_ip = 33;
                    continue _fun92671
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
                    _fun92671_ip = 70;
                    continue _fun92671
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92671_ip = 55;
                    continue _fun92671
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = ['utmSource', 'androidFallbackLink', 'iosFallbackLink'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: generateDynamicLink, environment: var1
        _fun92672: for (var _fun92672_ip = 0;;) switch (_fun92672_ip) {
            case 0:
                var6 = arg1;
                var16 = var6.utmSource;
                var4 = var6.androidFallbackLink;
                var5 = var6.iosFallbackLink;
                var3 = _closure1_slot4;
                var1 = _closure1_slot3;
                var2 = undefined;
                var12 = var3.bind(var2)(var6, var1);
                var1 = global;
                var7 = var1.URL;
                var3 = var7.prototype;
                var6 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var28 = arg0;
                var29 = var6;
                var3 = new var29[var7](var28, var27);
                var8 = var3 instanceof Object ? var3 : var6;
                var10 = var12;
                var3 = null;
                for (var6 in var10)
                    case 86: {
                        case 95: var17 = var6;
                        var15 = var12[var17];
                        if (var3 == var15) {
                            _fun92672_ip = 86;
                            continue _fun92672
                        }
                        case 106: var14 = var8.searchParams;
                        var13 = var14.set;
                        var13 = var13.bind(var14)(var17, var15);
                        _fun92672_ip = 86;
                        continue _fun92672;
                    }
            case 125:
                var7 = var1.encodeURIComponent;
                var6 = var8.toString;
                var6 = var6.bind(var8)();
                var15 = var7.bind(var2)(var6);
                var7 = var1.encodeURIComponent;
                var6 = var8.toString;
                var9 = var6.bind(var8)();
                var6 = var1.HermesInternal;
                var8 = var6.concat;
                var6 = 'discord://app/open#';
                var6 = var8.bind(var6)(var9);
                var14 = var7.bind(var2)(var6);
                var9 = var1.encodeURIComponent;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var8 = 4;
                var8 = var6[var8];
                var8 = var7.bind(var2)(var8);
                var8 = var8.bind(var2)();
                var13 = var9.bind(var2)(var8);
                var11 = var1.RegExp;
                var10 = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'];
                var9 = var10.join;
                var8 = '|';
                var12 = var9.bind(var10)(var8);
                var8 = var1.HermesInternal;
                var10 = var8.concat;
                var9 = '(';
                var8 = ')';
                var28 = var10.bind(var9)(var12, var8);
                var8 = var11.prototype;
                var9 = Object.create(var8, {
                    constructor: {
                        value: var11
                    }
                });
                var27 = 'ig';
                var29 = var9;
                var8 = new var29[var11](var28, var27, var26);
                var10 = var8 instanceof Object ? var8 : var9;
                var9 = 2;
                var6 = var6[var9];
                var6 = var7.bind(var2)(var6);
                var7 = var3 == var6;
                var6 = undefined;
                if (var7) {
                    _fun92672_ip = 365;
                    continue _fun92672
                }
            case 322:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var2)(var7);
                var8 = var7.ua;
                var7 = var3 == var8;
                var6 = undefined;
                if (var7) {
                    _fun92672_ip = 365;
                    continue _fun92672
                }
            case 354:
                var7 = var8.match;
                var6 = var7.bind(var8)(var10);
            case 365:
                var7 = var3 != var6;
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var8.bind(var2)(var6);
                var6 = var3 == var6;
                var8 = undefined;
                if (var6) {
                    _fun92672_ip = 417;
                    continue _fun92672
                }
            case 395:
                var10 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var10.bind(var2)(var6);
                var8 = var6.name;
            case 417:
                var6 = 'Safari';
                var6 = var6 === var8;
                if (!var6) {
                    _fun92672_ip = 433;
                    continue _fun92672
                }
            case 430:
                var6 = !var7;
            case 433:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var2)(var7);
                var8 = var3 == var7;
                var7 = undefined;
                if (var8) {
                    _fun92672_ip = 497;
                    continue _fun92672
                }
            case 459:
                var8 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var8.bind(var2)(var0);
                var0 = var0.os;
                var8 = var3 == var0;
                var7 = undefined;
                if (var8) {
                    _fun92672_ip = 497;
                    continue _fun92672
                }
            case 491:
                var7 = var0.family;
            case 497:
                var0 = 'iOS';
                var0 = var0 !== var7;
                if (var0) {
                    _fun92672_ip = 513;
                    continue _fun92672
                }
            case 510:
                var0 = var6;
            case 513:
                var12 = 'false';
                if (!var0) {
                    _fun92672_ip = 524;
                    continue _fun92672
                }
            case 520:
                var12 = 'true';
            case 524:
                var0 = var3 != var4;
                var7 = null;
                if (!var0) {
                    _fun92672_ip = 544;
                    continue _fun92672
                }
            case 533:
                var0 = var1.encodeURIComponent;
                var7 = var0.bind(var2)(var4);
            case 544:
                var0 = var3 != var5;
                var4 = null;
                if (!var0) {
                    _fun92672_ip = 564;
                    continue _fun92672
                }
            case 553:
                var0 = var1.encodeURIComponent;
                var4 = var0.bind(var2)(var5);
            case 564:
                var0 = var1.HermesInternal;
                var11 = var0.concat;
                var29 = '';
                var28 = 'https://discordapp.onelink.me';
                var27 = '/Hs5r/?deep_link_value=';
                var25 = '&pid=';
                var23 = '&af_force_deeplink=';
                var21 = '&af_og_description=';
                var19 = '&af_dp=';
                var26 = var15;
                var24 = var16;
                var22 = var12;
                var20 = var13;
                var18 = var14;
                var5 = var29[var11](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                var2 = var5;
                if (!(var3 != var7)) {
                    _fun92672_ip = 667;
                    continue _fun92672
                }
            case 641:
                var0 = var1.HermesInternal;
                var6 = var0.concat;
                var0 = '&af_android_url=';
                var0 = var6.bind(var0)(var7);
                var2 = var5 + var0;
            case 667:
                var0 = var2;
                if (!(var3 != var4)) {
                    _fun92672_ip = 700;
                    continue _fun92672
                }
            case 674:
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '&af_ios_url=';
                var1 = var3.bind(var1)(var4);
                var0 = var2 + var1;
            case 700:
                return var0;
        }
    };
    var2.default = var3;
    var3 = function() { // Original name: generateAttemptId, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.v4;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.generateAttemptId = var3;
    var1 = function(arg0) { // Original name: parseDynamicLink, environment: var1
        _fun92674: for (var _fun92674_ip = 0;;) switch (_fun92674_ip) {
            case 0:
                var11 = arg0;
                var0 = var11;
                var7 = undefined;
                var3 = undefined;
                var6 = undefined;
                var8 = undefined;
                var2 = undefined;
                var5 = undefined;
                var1 = undefined;
                var9 = undefined;
                var10 = var11.startsWith;
                var4 = 'https://discordapp.onelink.me';
                var4 = var10.bind(var11)(var4);
                if (var4) {
                    _fun92674_ip = 46;
                    continue _fun92674
                }
            case 42:
                var4 = null;
                return var4;
            case 46: // try_start_0
                var4 = global;
                var11 = var4.URL;
                var13 = var0;
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var14 = var10;
                var0 = new var14[var11](var13, var12);
                var0 = var0 instanceof Object ? var0 : var10;
                var11 = var0.searchParams;
                var3 = var11;
                var10 = var11.get;
                var0 = 'deep_link_value';
                var10 = var10.bind(var11)(var0);
                var6 = var10;
                var0 = null;
                if (!(var0 != var10)) {
                    _fun92674_ip = 303;
                    continue _fun92674
                }
            case 114:
                var10 = var4.decodeURIComponent;
                var13 = var10.bind(var7)(var6);
                var4 = var4.URL;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var14 = var6;
                var4 = new var14[var4](var13, var12);
                var4 = var4 instanceof Object ? var4 : var6;
                var2 = var4.searchParams;
                var6 = var3;
                var4 = var6.get;
                var3 = 'pid';
                var4 = var4.bind(var6)(var3);
                var5 = var4;
                var3 = {};
                var6 = var0 != var4;
                var4 = undefined;
                if (!var6) {
                    _fun92674_ip = 191;
                    continue _fun92674
                }
            case 188:
                var4 = var5;
            case 191:
                var3.utmSource = var4;
                var1 = var3;
                var3 = _closure1_slot6;
                var4 = var2;
                var2 = var4.entries;
                var2 = var2.bind(var4)();
                var2 = var3.bind(var7)(var2);
                var9 = var2;
                var2 = var2.bind(var7)();
                var8 = var2;
                var2 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var2) {
                    _fun92674_ip = 301;
                    continue _fun92674
                }
            case 250:
                var2 = var8;
                var10 = var2.value;
                var2 = _closure1_slot5;
                var2 = var2.bind(var7)(var10, var5);
                var11 = var2[var4];
                var10 = var2[var3];
                var2 = var1;
                var2[var11] = var10;
                var2 = var9;
                var2 = var2.bind(var7)();
                var8 = var2;
                var2 = var2.done;
                if (!var2) {
                    _fun92674_ip = 250;
                    continue _fun92674
                }
            case 301: // try_end0
                return var1;
            case 303:
                return var0;
            case 305: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var2.parseDynamicLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 654, 491, 12080, 2]);