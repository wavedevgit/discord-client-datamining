// modules/app_launcher/utils/AppLauncherSearchUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var24 = require;
    var27 = metroImportDefault;
    var26 = metroImportAll;
    var2 = exports;
    var25 = dependencyMap;
    var _closure1_slot0 = var24;
    var _closure1_slot1 = var27;
    var _closure1_slot2 = var26;
    var _closure1_slot3 = var25;
    var0 = function arg0, arg1() {
        _fun107429: for (var _fun107429_ip = 0;;) switch (_fun107429_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun107429_ip = 46;
                    continue _fun107429
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun107429_ip = 55;
                    continue _fun107429
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun107429_ip = 345;
                    continue _fun107429
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun107429_ip = 323;
                    continue _fun107429
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun107429_ip = 283;
                    continue _fun107429
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun107429_ip = 270;
                    continue _fun107429
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
                    _fun107429_ip = 163;
                    continue _fun107429
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun107429_ip = 179;
                    continue _fun107429
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun107429_ip = 249;
                    continue _fun107429
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun107429_ip = 249;
                    continue _fun107429
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun107429_ip = 234;
                    continue _fun107429
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun107429_ip = 247;
                    continue _fun107429
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun107429_ip = 265;
                continue _fun107429;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun107429_ip = 283;
                continue _fun107429;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun107429_ip = 323;
                    continue _fun107429
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
                    _fun107429_ip = 330;
                    continue _fun107429
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun107430: for (var _fun107430_ip = 0;;) switch (_fun107430_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun107430_ip = 56;
                                continue _fun107430
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
                            _fun107430_ip = 67;
                            continue _fun107430;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun107431: for (var _fun107431_ip = 0;;) switch (_fun107431_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun107431_ip = 23;
                    continue _fun107431
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun107431_ip = 33;
                    continue _fun107431
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
                    _fun107431_ip = 70;
                    continue _fun107431
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun107431_ip = 55;
                    continue _fun107431
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var22 = function arg0() {
        _fun107432: for (var _fun107432_ip = 0;;) switch (_fun107432_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.context;
                var10 = var0.onlyWithCommands;
                var _closure2_slot0 = var10;
                var7 = var0.includeBuiltIn;
                var8 = var0.allowFetch;
                var2 = undefined;
                if (!(var8 === var2)) {
                    _fun107432_ip = 40;
                    continue _fun107432
                }
            case 38:
                var8 = true;
            case 40:
                var11 = var0.includeEmbeddedApps;
                var _closure2_slot1 = var11;
                var6 = var0.includeNonEmbeddedApps;
                var _closure2_slot2 = var6;
                var3 = var4.type;
                var0 = 'channel';
                var12 = undefined;
                if (!(var0 === var3)) {
                    _fun107432_ip = 80;
                    continue _fun107432
                }
            case 75:
                var12 = var4.channel;
            case 80:
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var3 = 8;
                var3 = var14[var3];
                var9 = var13.bind(var2)(var3);
                var5 = var9.usePermissionContext;
                var3 = 9;
                var3 = var14[var3];
                var3 = var13.bind(var2)(var3);
                var3 = var3.ApplicationCommandType;
                var13 = var3.CHAT;
                var3 = new Array(1);
                var3[0] = var13;
                var3 = var5.bind(var9)(var12, var3);
                var5 = var3.hasBaseAccessPermissions;
                var3 = _closure1_slot9;
                var3 = var3.bind(var2)(var4, var5, var8);
                var4 = _closure1_slot10;
                var4 = var4.bind(var2)(var5, var8);
                var9 = _closure1_slot5;
                var8 = var9.useCallback;
                var5 = new Array(3);
                var5[0] = var11;
                var5[1] = var6;
                var5[2] = var10;
                var1 = function(arg0) { // Environment: var1
                    _fun107433: for (var _fun107433_ip = 0;;) switch (_fun107433_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.descriptor;
                            var7 = var0.application;
                            var2 = null;
                            var0 = var2 != var7;
                            if (!var0) {
                                _fun107433_ip = 194;
                                continue _fun107433
                            }
                        case 26:
                            var1 = _closure2_slot1;
                            var5 = !var1;
                            if (var5) {
                                _fun107433_ip = 78;
                                continue _fun107433
                            }
                        case 39:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 10;
                            var6 = var6[var1];
                            var1 = undefined;
                            var6 = var8.bind(var1)(var6);
                            var1 = var6.isEmbeddedApp;
                            var1 = var1.bind(var6)(var7);
                            var5 = !var1;
                        case 78:
                            var1 = !var5;
                            if (!var5) {
                                _fun107433_ip = 191;
                                continue _fun107433
                            }
                        case 84:
                            var2 = var2 != var7;
                            if (!var2) {
                                _fun107433_ip = 95;
                                continue _fun107433
                            }
                        case 91:
                            var2 = _closure2_slot2;
                        case 95:
                            if (!var2) {
                                _fun107433_ip = 137;
                                continue _fun107433
                            }
                        case 98:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var5 = 10;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var8.bind(var5)(var6);
                            var5 = var6.isEmbeddedApp;
                            var5 = var5.bind(var6)(var7);
                            var2 = !var5;
                        case 137:
                            if (!var2) {
                                _fun107433_ip = 188;
                                continue _fun107433
                            }
                        case 140:
                            var3 = _closure2_slot0;
                            var3 = !var3;
                            if (var3) {
                                _fun107433_ip = 185;
                                continue _fun107433
                            }
                        case 150:
                            var5 = global;
                            var6 = var5.Object;
                            var5 = var6.keys;
                            var4 = var4.commands;
                            var4 = var5.bind(var6)(var4);
                            var5 = var4.length;
                            var4 = 0;
                            var3 = var5 > var4;
                        case 185:
                            var2 = var3;
                        case 188:
                            var1 = var2;
                        case 191:
                            var0 = var1;
                        case 194:
                            return var0;
                    }
                };
                var12 = var8.bind(var9)(var1, var5);
                var1 = new Array(0);
                var8 = global;
                var5 = var8.Set;
                var9 = var5.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var5
                    }
                });
                var20 = var9;
                var5 = new var20[var5](var19);
                var11 = var5 instanceof Object ? var5 : var9;
                var9 = var3.result;
                var5 = null;
                if (!(var5 != var9)) {
                    _fun107432_ip = 365;
                    continue _fun107432
                }
            case 256:
                var13 = var8.Object;
                var10 = var13.values;
                var9 = var3.result;
                var9 = var9.sections;
                var13 = var10.bind(var13)(var9);
                var9 = var13.length;
                var10 = 0;
                var9 = var10 < var9;
                if (!var9) {
                    _fun107432_ip = 365;
                    continue _fun107432
                }
            case 298:
                var15 = var13[var10];
                var9 = var15.descriptor;
                var9 = var9.application;
                var14 = var5 != var9;
                if (!var14) {
                    _fun107432_ip = 325;
                    continue _fun107432
                }
            case 320:
                var14 = var12.bind(var2)(var15);
            case 325:
                if (!var14) {
                    _fun107432_ip = 353;
                    continue _fun107432
                }
            case 328:
                var14 = var1.push;
                var14 = var14.bind(var1)(var9);
                var14 = var11.add;
                var9 = var9.id;
                var9 = var14.bind(var11)(var9);
            case 353:
                var10 = var10 + 1;
                var9 = var13.length;
                if (var10 < var9) {
                    _fun107432_ip = 298;
                    continue _fun107432
                }
            case 365:
                var9 = var4.result;
                if (!(var5 != var9)) {
                    _fun107432_ip = 490;
                    continue _fun107432
                }
            case 375:
                var10 = var8.Object;
                var9 = var10.values;
                var8 = var4.result;
                var8 = var8.sections;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var9 = 0;
                var8 = var9 < var8;
                if (!var8) {
                    _fun107432_ip = 490;
                    continue _fun107432
                }
            case 417:
                var14 = var10[var9];
                var8 = var14.descriptor;
                var13 = var8.application;
                var8 = var5 != var13;
                if (!var8) {
                    _fun107432_ip = 457;
                    continue _fun107432
                }
            case 439:
                var16 = var11.has;
                var15 = var13.id;
                var15 = var16.bind(var11)(var15);
                var8 = !var15;
            case 457:
                if (!var8) {
                    _fun107432_ip = 465;
                    continue _fun107432
                }
            case 460:
                var8 = var12.bind(var2)(var14);
            case 465:
                if (!var8) {
                    _fun107432_ip = 478;
                    continue _fun107432
                }
            case 468:
                var8 = var1.push;
                var8 = var8.bind(var1)(var13);
            case 478:
                var9 = var9 + 1;
                var8 = var10.length;
                if (var9 < var8) {
                    _fun107432_ip = 417;
                    continue _fun107432
                }
            case 490:
                if (!var6) {
                    _fun107432_ip = 496;
                    continue _fun107432
                }
            case 493:
                var6 = var7;
            case 496:
                if (!var6) {
                    _fun107432_ip = 535;
                    continue _fun107432
                }
            case 499:
                var6 = var1.push;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 10;
                var0 = var8[var0];
                var0 = var7.bind(var2)(var0);
                var0 = var0.FAKE_BUILT_IN_APP;
                var0 = var6.bind(var1)(var0);
            case 535:
                var0 = {};
                var0.apps = var1;
                var6 = var5 == var3;
                var1 = undefined;
                if (var6) {
                    _fun107432_ip = 563;
                    continue _fun107432
                }
            case 551:
                var3 = var3.fetchState;
                var1 = var3.fetching;
            case 563:
                var3 = true;
                var1 = var3 === var1;
                if (var1) {
                    _fun107432_ip = 597;
                    continue _fun107432
                }
            case 572:
                var5 = var5 == var4;
                var2 = undefined;
                if (var5) {
                    _fun107432_ip = 593;
                    continue _fun107432
                }
            case 581:
                var4 = var4.fetchState;
                var2 = var4.fetching;
            case 593:
                var1 = var3 === var2;
            case 597:
                var0.loading = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var22;
    var21 = function arg0() {
        _fun107434: for (var _fun107434_ip = 0;;) switch (_fun107434_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.context;
                var _closure2_slot0 = var8;
                var7 = var1.includeBuiltIn;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun107434_ip = 28;
                    continue _fun107434
                }
            case 26:
                var7 = true;
            case 28:
                var _closure2_slot1 = var7;
                var5 = var1.allowFetch;
                if (!(var5 === var4)) {
                    _fun107434_ip = 44;
                    continue _fun107434
                }
            case 42:
                var5 = true;
            case 44:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var2 = _closure1_slot9;
                var3 = true;
                var6 = var2.bind(var4)(var8, var3, var5);
                _closure2_slot2 = var6;
                var2 = _closure1_slot10;
                var5 = var2.bind(var4)(var3, var5);
                _closure2_slot3 = var5;
                var3 = _closure1_slot5;
                var2 = var3.useMemo;
                var1 = new Array(6);
                var1[0] = var8;
                var1[1] = var7;
                var7 = var6.fetchState;
                var7 = var7.fetching;
                var1[2] = var7;
                var8 = var6.result;
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun107434_ip = 146;
                    continue _fun107434
                }
            case 140:
                var7 = var8.sections;
            case 146:
                var1[3] = var7;
                var7 = var5.fetchState;
                var7 = var7.fetching;
                var1[4] = var7;
                var5 = var5.result;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun107434_ip = 187;
                    continue _fun107434
                }
            case 181:
                var4 = var5.sections;
            case 187:
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    _fun107435: for (var _fun107435_ip = 0;;) switch (_fun107435_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.result;
                            var0 = null;
                            var3 = var0 == var1;
                            var7 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun107435_ip = 34;
                                continue _fun107435
                            }
                        case 28:
                            var4 = var1.sections;
                        case 34:
                            if (!(var0 == var4)) {
                                _fun107435_ip = 40;
                                continue _fun107435
                            }
                        case 38:
                            var4 = {};
                        case 40:
                            var _closure3_slot0 = var4;
                            var1 = _closure2_slot3;
                            var1 = var1.result;
                            var3 = var0 == var1;
                            var5 = undefined;
                            if (var3) {
                                _fun107435_ip = 69;
                                continue _fun107435
                            }
                        case 63:
                            var5 = var1.sections;
                        case 69:
                            if (!(var0 == var5)) {
                                _fun107435_ip = 75;
                                continue _fun107435
                            }
                        case 73:
                            var5 = {};
                        case 75:
                            var0 = global;
                            var3 = var0.Object;
                            var1 = var3.keys;
                            var10 = var1.bind(var3)(var4);
                            var6 = new Array(0);
                            var4 = 0;
                            var11 = var6;
                            var9 = 0;
                            var9 = arraySpread(var11, var10, var9);
                            var3 = var0.Object;
                            var0 = var3.keys;
                            var5 = var0.bind(var3)(var5);
                            var3 = var5.filter;
                            var0 = function(arg0) { // Environment: var8
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var0 in var1;
                                var0 = !var0;
                                return var0;
                            };
                            var10 = var3.bind(var5)(var0);
                            var11 = var6;
                            var0 = arraySpread(var11, var10, var9);
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun107435_ip = 178;
                                continue _fun107435
                            }
                        case 155:
                            var1 = var6.push;
                            var0 = _closure1_slot14;
                            var0 = var0.BUILT_IN;
                            var0 = var1.bind(var6)(var0);
                        case 178:
                            var3 = new Array(0);
                            var _closure3_slot1 = var3;
                            var1 = {};
                            var _closure3_slot2 = var1;
                            var5 = function() {
                                _fun107437: for (var _fun107437_ip = 0;;) switch (_fun107437_ip) {
                                    case 0:
                                        var5 = _closure1_slot8;
                                        var4 = _closure2_slot0;
                                        var3 = _closure3_slot3;
                                        var0 = undefined;
                                        var3 = var5.bind(var0)(var4, var3);
                                        var _closure4_slot0 = var3;
                                        var3 = var3.sectionCommands;
                                        var4 = null;
                                        if (!(var4 == var3)) {
                                            _fun107437_ip = 51;
                                            continue _fun107437
                                        }
                                    case 47:
                                        var3 = new Array(0);
                                    case 51:
                                        var5 = _closure3_slot1;
                                        var4 = var5.push;
                                        var2 = new Array(0);
                                        var7 = 0;
                                        var9 = var2;
                                        var8 = var3;
                                        var6 = arraySpread(var9, var8, var7);
                                        var9 = var4;
                                        var8 = var2;
                                        var7 = var5;
                                        var2 = apply(var9, var8, var7);
                                        var2 = var3.forEach;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun107438: for (var _fun107438_ip = 0;;) switch (_fun107438_ip) {
                                                case 0:
                                                    var1 = _closure4_slot0;
                                                    var2 = var1.descriptor;
                                                    var1 = null;
                                                    if (!(var1 != var2)) {
                                                        _fun107438_ip = 48;
                                                        continue _fun107438
                                                    }
                                                case 19:
                                                    var2 = _closure3_slot2;
                                                    var1 = arg0;
                                                    var1 = var1.id;
                                                    var0 = _closure4_slot0;
                                                    var0 = var0.descriptor;
                                                    var2[var1] = var0;
                                                case 48:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var0 = var6.length;
                            var0 = var4 < var0;
                            var4 = 0;
                            if (!var0) {
                                _fun107435_ip = 237;
                                continue _fun107435
                            }
                        case 213:
                            var0 = var6[var4];
                            var _closure3_slot3 = var0;
                            var0 = var5.bind(var7)();
                            var4 = var4 + 1;
                            var0 = var6.length;
                            if (var4 < var0) {
                                _fun107435_ip = 213;
                                continue _fun107435
                            }
                        case 237:
                            var0 = {};
                            var0.commands = var3;
                            var0.commandSectionMap = var1;
                            var1 = _closure2_slot2;
                            var1 = var1.fetchState;
                            var1 = var1.fetching;
                            var3 = true;
                            var1 = var3 === var1;
                            if (var1) {
                                _fun107435_ip = 294;
                                continue _fun107435
                            }
                        case 274:
                            var2 = _closure2_slot3;
                            var2 = var2.fetchState;
                            var2 = var2.fetching;
                            var1 = var3 === var2;
                        case 294:
                            var0.loading = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot19 = var21;
    var20 = function arg0() {
        _fun107439: for (var _fun107439_ip = 0;;) switch (_fun107439_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 8;
                var2 = var4[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.buildPermissionContext;
                var8 = var5.type;
                var6 = 'channel';
                var2 = undefined;
                if (!(var6 === var8)) {
                    _fun107439_ip = 60;
                    continue _fun107439
                }
            case 55:
                var2 = var5.channel;
            case 60:
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 9;
                var1 = var8[var5];
                var1 = var6.bind(var7)(var1);
                var1 = var1.ApplicationCommandType;
                var9 = var1.CHAT;
                var1 = new Array(2);
                var1[0] = var9;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.ApplicationCommandType;
                var5 = var5.PRIMARY_ENTRY_POINT;
                var1[1] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var _closure2_slot1 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun107440: for (var _fun107440_ip = 0;;) switch (_fun107440_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var8 = var2.context;
                            var2 = _closure2_slot1;
                            var14 = var2.userId;
                            var2 = _closure2_slot1;
                            var13 = var2.roleIds;
                            var2 = _closure2_slot1;
                            var12 = var2.isImpersonating;
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var0.id;
                            var5 = undefined;
                            var0 = var3.bind(var5)(var2, var0);
                            var4 = var0.descriptor;
                            var _closure3_slot0 = var4;
                            var3 = var0.sectionCommands;
                            var2 = var0.isGuildInstalled;
                            var _closure3_slot1 = var2;
                            var0 = var0.isUserInstalled;
                            var _closure3_slot2 = var0;
                            var0 = null;
                            var7 = var0 == var8;
                            var2 = undefined;
                            if (var7) {
                                _fun107440_ip = 122;
                                continue _fun107440
                            }
                        case 117:
                            var2 = var8.guild_id;
                        case 122:
                            var7 = var0 != var2;
                            var2 = null;
                            if (!var7) {
                                _fun107440_ip = 196;
                                continue _fun107440
                            }
                        case 131:
                            var9 = _closure1_slot2;
                            var10 = _closure1_slot3;
                            var7 = 11;
                            var7 = var10[var7];
                            var11 = var9.bind(var5)(var7);
                            var10 = var11.computeAllowedForUser;
                            var7 = var0 == var4;
                            var9 = undefined;
                            if (var7) {
                                _fun107440_ip = 172;
                                continue _fun107440
                            }
                        case 166:
                            var9 = var4.permissions;
                        case 172:
                            var18 = var8.guild_id;
                            var20 = var11;
                            var19 = var9;
                            var17 = var14;
                            var16 = var13;
                            var15 = var12;
                            var2 = var20[var10](var19, var18, var17, var16, var15, var14);
                        case 196:
                            var _closure3_slot3 = var2;
                            var7 = var0 == var8;
                            var2 = undefined;
                            if (var7) {
                                _fun107440_ip = 214;
                                continue _fun107440
                            }
                        case 209:
                            var2 = var8.guild_id;
                        case 214:
                            var7 = var0 != var2;
                            var2 = null;
                            if (!var7) {
                                _fun107440_ip = 276;
                                continue _fun107440
                            }
                        case 223:
                            var7 = _closure1_slot2;
                            var9 = _closure1_slot3;
                            var6 = 11;
                            var6 = var9[var6];
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.computeAllowedForChannel;
                            var9 = var0 == var4;
                            var5 = undefined;
                            if (var9) {
                                _fun107440_ip = 264;
                                continue _fun107440
                            }
                        case 258:
                            var5 = var4.permissions;
                        case 264:
                            var4 = var8.guild_id;
                            var2 = var6.bind(var7)(var5, var8, var4);
                        case 276:
                            var _closure3_slot4 = var2;
                            var2 = var0 != var3;
                            if (!var2) {
                                _fun107440_ip = 298;
                                continue _fun107440
                            }
                        case 287:
                            var4 = var3.length;
                            var0 = 0;
                            var2 = var4 > var0;
                        case 298:
                            var0 = !var2;
                            if (!var2) {
                                _fun107440_ip = 322;
                                continue _fun107440
                            }
                        case 304:
                            var2 = var3.some;
                            var1 = function(arg0) { // Environment: var1
                                _fun107441: for (var _fun107441_ip = 0;;) switch (_fun107441_ip) {
                                    case 0:
                                        var2 = _closure1_slot2;
                                        var1 = _closure1_slot3;
                                        var4 = 11;
                                        var1 = var1[var4];
                                        var3 = undefined;
                                        var7 = var2.bind(var3)(var1);
                                        var6 = var7.hasAccess;
                                        var5 = _closure2_slot1;
                                        var2 = {};
                                        var8 = _closure3_slot3;
                                        var2.applicationAllowedForUser = var8;
                                        var8 = _closure3_slot4;
                                        var2.applicationAllowedForChannel = var8;
                                        var9 = _closure3_slot0;
                                        var8 = null;
                                        var9 = var8 == var9;
                                        var8 = undefined;
                                        if (var9) {
                                            _fun107441_ip = 86;
                                            continue _fun107441
                                        }
                                    case 76:
                                        var9 = _closure3_slot0;
                                        var8 = var9.botId;
                                    case 86:
                                        var2.commandBotId = var8;
                                        var8 = _closure3_slot1;
                                        var2.isGuildInstalled = var8;
                                        var1 = _closure3_slot2;
                                        var2.isUserInstalled = var1;
                                        var1 = arg0;
                                        var1 = var6.bind(var7)(var1, var5, var2);
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot3;
                                        var0 = var0[var4];
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.HasAccessResult;
                                        var0 = var0.ALLOWED;
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 322:
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot20 = var20;
    var19 = function arg0() {
        var3 = arg0;
        var0 = _closure1_slot22;
        var2 = undefined;
        var4 = var0.bind(var2)(var3);
        var0 = new Array(4);
        var0[0] = var4;
        var4 = _closure1_slot23;
        var4 = var4.bind(var2)(var3);
        var0[1] = var4;
        var4 = _closure1_slot24;
        var4 = var4.bind(var2)(var3);
        var0[2] = var4;
        var1 = _closure1_slot25;
        var1 = var1.bind(var2)(var3);
        var0[3] = var1;
        return var0;
    };
    var _closure1_slot21 = var19;
    var18 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getSectionName;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = var1.toLocaleLowerCase;
            var2 = var0.bind(var1)();
            var1 = var2.startsWith;
            var3 = _closure2_slot0;
            var0 = var3.toLocaleLowerCase;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot22 = var18;
    var17 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getSectionName;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = var1.toLocaleLowerCase;
            var2 = var0.bind(var1)();
            var1 = var2.includes;
            var3 = _closure2_slot0;
            var0 = var3.toLocaleLowerCase;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot23 = var17;
    var16 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107448: for (var _fun107448_ip = 0;;) switch (_fun107448_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.getSectionDescription;
                    var0 = arg0;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var4 = undefined;
                    if (var2) {
                        _fun107448_ip = 60;
                        continue _fun107448
                    }
                case 50:
                    var2 = var3.toLocaleLowerCase;
                    var4 = var2.bind(var3)();
                case 60:
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun107448_ip = 97;
                        continue _fun107448
                    }
                case 69:
                    var3 = var4.startsWith;
                    var5 = _closure2_slot0;
                    var2 = var5.toLocaleLowerCase;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
                case 97:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun107448_ip = 107;
                        continue _fun107448
                    }
                case 104:
                    var0 = var1;
                case 107:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot24 = var16;
    var15 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107450: for (var _fun107450_ip = 0;;) switch (_fun107450_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.getSectionDescription;
                    var0 = arg0;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var4 = undefined;
                    if (var2) {
                        _fun107450_ip = 60;
                        continue _fun107450
                    }
                case 50:
                    var2 = var3.toLocaleLowerCase;
                    var4 = var2.bind(var3)();
                case 60:
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun107450_ip = 96;
                        continue _fun107450
                    }
                case 69:
                    var3 = var4.includes;
                    var5 = _closure2_slot0;
                    var2 = var5.toLocaleLowerCase;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
                case 96:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun107450_ip = 106;
                        continue _fun107450
                    }
                case 103:
                    var0 = var1;
                case 106:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot25 = var15;
    var14 = function arg0, arg1() {
        var3 = _closure1_slot11;
        var2 = var3.getScoreWithoutLoadingLatest;
        var1 = arg0;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot11;
        var2 = var3.getScoreWithoutLoadingLatest;
        var0 = arg1;
        var0 = var0.id;
        var0 = var2.bind(var3)(var0);
        var0 = var0 - var1;
        return var0;
    };
    var _closure1_slot26 = var14;
    var13 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 10;
        var2 = var5[var1];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.getSectionName;
        var2 = arg0;
        var2 = var6.bind(var7)(var2);
        var1 = var5[var1];
        var5 = var4.bind(var3)(var1);
        var4 = var5.getSectionName;
        var1 = arg1;
        var1 = var4.bind(var5)(var1);
        var0 = _closure1_slot7;
        var0 = var0.bind(var3)(var2, var1);
        return var0;
    };
    var _closure1_slot27 = var13;
    var12 = function arg0() {
        _fun107453: for (var _fun107453_ip = 0;;) switch (_fun107453_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 8;
                var2 = var4[var2];
                var6 = undefined;
                var4 = var3.bind(var6)(var2);
                var3 = var4.buildPermissionContext;
                var8 = var5.type;
                var7 = 'channel';
                var2 = undefined;
                if (!(var7 === var8)) {
                    _fun107453_ip = 60;
                    continue _fun107453
                }
            case 55:
                var2 = var5.channel;
            case 60:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 9;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ApplicationCommandType;
                var5 = var1.CHAT;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var _closure2_slot1 = var1;
                var1 = {};
                var _closure2_slot2 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun107454: for (var _fun107454_ip = 0;;) switch (_fun107454_ip) {
                        case 0:
                            var7 = arg0;
                            var0 = _closure2_slot1;
                            var11 = var0.context;
                            var0 = _closure2_slot1;
                            var16 = var0.userId;
                            var0 = _closure2_slot1;
                            var15 = var0.roleIds;
                            var0 = _closure2_slot1;
                            var14 = var0.isImpersonating;
                            var2 = var7.applicationId;
                            var0 = _closure2_slot2;
                            var0 = var2 in var0;
                            if (var0) {
                                _fun107454_ip = 311;
                                continue _fun107454
                            }
                        case 63:
                            var5 = _closure1_slot8;
                            var4 = _closure2_slot0;
                            var0 = var7.applicationId;
                            var2 = undefined;
                            var0 = var5.bind(var2)(var4, var0);
                            var9 = var0.descriptor;
                            var5 = var0.isGuildInstalled;
                            var4 = var0.isUserInstalled;
                            var0 = null;
                            var8 = var0 == var11;
                            var6 = undefined;
                            if (var8) {
                                _fun107454_ip = 121;
                                continue _fun107454
                            }
                        case 116:
                            var6 = var11.guild_id;
                        case 121:
                            var6 = var0 != var6;
                            var8 = null;
                            if (!var6) {
                                _fun107454_ip = 195;
                                continue _fun107454
                            }
                        case 130:
                            var10 = _closure1_slot2;
                            var12 = _closure1_slot3;
                            var6 = 11;
                            var6 = var12[var6];
                            var13 = var10.bind(var2)(var6);
                            var12 = var13.computeAllowedForUser;
                            var6 = var0 == var9;
                            var10 = undefined;
                            if (var6) {
                                _fun107454_ip = 171;
                                continue _fun107454
                            }
                        case 165:
                            var10 = var9.permissions;
                        case 171:
                            var20 = var11.guild_id;
                            var22 = var13;
                            var21 = var10;
                            var19 = var16;
                            var18 = var15;
                            var17 = var14;
                            var8 = var22[var12](var21, var20, var19, var18, var17, var16);
                        case 195:
                            var10 = var0 == var11;
                            var6 = undefined;
                            if (var10) {
                                _fun107454_ip = 209;
                                continue _fun107454
                            }
                        case 204:
                            var6 = var11.guild_id;
                        case 209:
                            var10 = var0 != var6;
                            var6 = null;
                            if (!var10) {
                                _fun107454_ip = 271;
                                continue _fun107454
                            }
                        case 218:
                            var10 = _closure1_slot2;
                            var12 = _closure1_slot3;
                            var3 = 11;
                            var3 = var12[var3];
                            var10 = var10.bind(var2)(var3);
                            var3 = var10.computeAllowedForChannel;
                            var0 = var0 == var9;
                            var2 = undefined;
                            if (var0) {
                                _fun107454_ip = 259;
                                continue _fun107454
                            }
                        case 253:
                            var2 = var9.permissions;
                        case 259:
                            var0 = var11.guild_id;
                            var6 = var3.bind(var10)(var2, var11, var0);
                        case 271:
                            var3 = _closure2_slot2;
                            var2 = var7.applicationId;
                            var0 = {};
                            var0.descriptor = var9;
                            var0.applicationAllowedForUser = var8;
                            var0.applicationAllowedForChannel = var6;
                            var0.isGuildInstalled = var5;
                            var0.isUserInstalled = var4;
                            var3[var2] = var0;
                        case 311:
                            var2 = _closure2_slot2;
                            var0 = var7.applicationId;
                            var0 = var2[var0];
                            var11 = var0.descriptor;
                            var10 = var0.applicationAllowedForChannel;
                            var12 = var0.applicationAllowedForUser;
                            var9 = var0.isGuildInstalled;
                            var8 = var0.isUserInstalled;
                            var5 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var4 = 11;
                            var2 = var2[var4];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.hasAccess;
                            var2 = _closure2_slot1;
                            var1 = {};
                            var1.applicationAllowedForUser = var12;
                            var1.applicationAllowedForChannel = var10;
                            var10 = null;
                            var12 = var10 == var11;
                            var10 = undefined;
                            if (var12) {
                                _fun107454_ip = 418;
                                continue _fun107454
                            }
                        case 412:
                            var10 = var11.botId;
                        case 418:
                            var1.commandBotId = var10;
                            var1.isGuildInstalled = var9;
                            var1.isUserInstalled = var8;
                            var1 = var5.bind(var6)(var7, var2, var1);
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var0 = var0[var4];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.HasAccessResult;
                            var0 = var0.ALLOWED;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot28 = var12;
    var11 = function arg0() {
        var3 = arg0;
        var0 = _closure1_slot30;
        var2 = undefined;
        var4 = var0.bind(var2)(var3);
        var0 = new Array(5);
        var0[0] = var4;
        var4 = _closure1_slot31;
        var4 = var4.bind(var2)(var3);
        var0[1] = var4;
        var4 = _closure1_slot32;
        var4 = var4.bind(var2)(var3);
        var0[2] = var4;
        var4 = _closure1_slot33;
        var4 = var4.bind(var2)(var3);
        var0[3] = var4;
        var1 = _closure1_slot34;
        var1 = var1.bind(var2)(var3);
        var0[4] = var1;
        return var0;
    };
    var _closure1_slot29 = var11;
    var10 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107457: for (var _fun107457_ip = 0;;) switch (_fun107457_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.untranslatedName;
                    var3 = var0.displayName;
                    var2 = var4.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun107457_ip = 50;
                        continue _fun107457
                    }
                case 35:
                    var2 = var3.startsWith;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 50:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot30 = var10;
    var9 = function arg0() {
        _fun107458: for (var _fun107458_ip = 0;;) switch (_fun107458_ip) {
            case 0:
                var4 = arg0;
                var1 = null;
                var1 = var1 == var4;
                var3 = undefined;
                if (var1) {
                    _fun107458_ip = 32;
                    continue _fun107458
                }
            case 16:
                var2 = var4.split;
                var1 = ' ';
                var3 = var2.bind(var4)(var1);
            case 32:
                var1 = 0;
                var1 = var3[var1];
                var _closure2_slot0 = var1;
                var2 = var3.slice;
                var1 = 1;
                var3 = var2.bind(var3)(var1);
                var2 = var3.join;
                var1 = ' ';
                var1 = var2.bind(var3)(var1);
                var _closure2_slot1 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun107459: for (var _fun107459_ip = 0;;) switch (_fun107459_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.untranslatedName;
                            var2 = var0.displayName;
                            var4 = var3.startsWith;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var3)(var1);
                            if (!var1) {
                                _fun107459_ip = 92;
                                continue _fun107459
                            }
                        case 35:
                            var1 = var3.split;
                            var4 = ' ';
                            var5 = var1.bind(var3)(var4);
                            var3 = var5.slice;
                            var1 = 1;
                            var3 = var3.bind(var5)(var1);
                            var1 = var3.join;
                            var4 = var1.bind(var3)(var4);
                            var3 = var4.startsWith;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun107459_ip = 175;
                                continue _fun107459
                            }
                        case 92:
                            var3 = var2.startsWith;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var2)(var1);
                            if (!var1) {
                                _fun107459_ip = 167;
                                continue _fun107459
                            }
                        case 110:
                            var1 = var2.split;
                            var3 = ' ';
                            var4 = var1.bind(var2)(var3);
                            var2 = var4.slice;
                            var1 = 1;
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.join;
                            var2 = var1.bind(var2)(var3);
                            var1 = var2.startsWith;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun107459_ip = 171;
                                continue _fun107459
                            }
                        case 167:
                            var0 = false;
                            return var0;
                        case 171:
                            var0 = true;
                            return var0;
                        case 175:
                            var0 = true;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot31 = var9;
    var8 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107461: for (var _fun107461_ip = 0;;) switch (_fun107461_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.untranslatedName;
                    var3 = var0.displayName;
                    var2 = var4.includes;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun107461_ip = 48;
                        continue _fun107461
                    }
                case 34:
                    var2 = var3.includes;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 48:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot32 = var8;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107463: for (var _fun107463_ip = 0;;) switch (_fun107463_ip) {
                case 0:
                    var9 = arg0;
                    var1 = _closure1_slot16;
                    var0 = var9.options;
                    var8 = null;
                    if (!(var8 == var0)) {
                        _fun107463_ip = 25;
                        continue _fun107463
                    }
                case 21:
                    var0 = new Array(0);
                case 25:
                    var7 = undefined;
                    var6 = var1.bind(var7)(var0);
                    var1 = var6.bind(var7)();
                    var0 = var1.done;
                    var5 = global;
                    var4 = '';
                    var3 = ' ';
                    if (var0) {
                        _fun107463_ip = 339;
                        continue _fun107463
                    }
                case 62:
                    var0 = var1.value;
                    var12 = var0.name;
                    var11 = var0.serverLocalizedName;
                    var10 = var12.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var10.bind(var12)(var0);
                    if (var0) {
                        _fun107463_ip = 335;
                        continue _fun107463
                    }
                case 99:
                    var10 = var9.untranslatedName;
                    var0 = var5.HermesInternal;
                    var0 = var0.concat;
                    var13 = var0.bind(var4)(var10, var3, var12);
                    var10 = var13.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var10.bind(var13)(var0);
                    if (var0) {
                        _fun107463_ip = 335;
                        continue _fun107463
                    }
                case 144:
                    var0 = var9.displayName;
                    if (!(var8 != var0)) {
                        _fun107463_ip = 197;
                        continue _fun107463
                    }
                case 153:
                    var10 = var9.displayName;
                    var0 = var5.HermesInternal;
                    var0 = var0.concat;
                    var12 = var0.bind(var4)(var10, var3, var12);
                    var10 = var12.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var10.bind(var12)(var0);
                    if (var0) {
                        _fun107463_ip = 335;
                        continue _fun107463
                    }
                case 197:
                    if (!(var8 != var11)) {
                        _fun107463_ip = 311;
                        continue _fun107463
                    }
                case 201:
                    var10 = var11.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var10.bind(var11)(var0);
                    if (var0) {
                        _fun107463_ip = 331;
                        continue _fun107463
                    }
                case 219:
                    var10 = var9.untranslatedName;
                    var0 = var5.HermesInternal;
                    var0 = var0.concat;
                    var12 = var0.bind(var4)(var10, var3, var11);
                    var10 = var12.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var10.bind(var12)(var0);
                    if (var0) {
                        _fun107463_ip = 331;
                        continue _fun107463
                    }
                case 261:
                    var0 = var9.displayName;
                    if (!(var8 != var0)) {
                        _fun107463_ip = 311;
                        continue _fun107463
                    }
                case 270:
                    var10 = var9.displayName;
                    var0 = var5.HermesInternal;
                    var0 = var0.concat;
                    var11 = var0.bind(var4)(var10, var3, var11);
                    var10 = var11.startsWith;
                    var0 = _closure2_slot0;
                    var0 = var10.bind(var11)(var0);
                    if (var0) {
                        _fun107463_ip = 331;
                        continue _fun107463
                    }
                case 311:
                    var10 = var6.bind(var7)();
                    var0 = var10.done;
                    var1 = var10;
                    if (var0) {
                        _fun107463_ip = 339;
                        continue _fun107463
                    }
                case 326:
                    _fun107463_ip = 62;
                    continue _fun107463;
                case 331:
                    var0 = true;
                    return var0;
                case 335:
                    var0 = true;
                    return var0;
                case 339:
                    var0 = false;
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot33 = var7;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107465: for (var _fun107465_ip = 0;;) switch (_fun107465_ip) {
                case 0:
                    var1 = _closure1_slot16;
                    var0 = arg0;
                    var0 = var0.options;
                    var5 = null;
                    if (!(var5 == var0)) {
                        _fun107465_ip = 25;
                        continue _fun107465
                    }
                case 21:
                    var0 = new Array(0);
                case 25:
                    var4 = undefined;
                    var3 = var1.bind(var4)(var0);
                    var1 = var3.bind(var4)();
                    var0 = var1.done;
                    if (var0) {
                        _fun107465_ip = 122;
                        continue _fun107465
                    }
                case 47:
                    var0 = var1.value;
                    var8 = var0.name;
                    var7 = var0.serverLocalizedName;
                    var6 = var8.includes;
                    var0 = _closure2_slot0;
                    var0 = var6.bind(var8)(var0);
                    if (var0) {
                        _fun107465_ip = 118;
                        continue _fun107465
                    }
                case 80:
                    if (!(var5 != var7)) {
                        _fun107465_ip = 101;
                        continue _fun107465
                    }
                case 84:
                    var6 = var7.includes;
                    var0 = _closure2_slot0;
                    var0 = var6.bind(var7)(var0);
                    if (var0) {
                        _fun107465_ip = 118;
                        continue _fun107465
                    }
                case 101:
                    var6 = var3.bind(var4)();
                    var0 = var6.done;
                    var1 = var6;
                    if (var0) {
                        _fun107465_ip = 122;
                        continue _fun107465
                    }
                case 116:
                    _fun107465_ip = 47;
                    continue _fun107465;
                case 118:
                    var0 = true;
                    return var0;
                case 122:
                    var0 = false;
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot34 = var6;
    var5 = function arg0() {
        var3 = _closure1_slot36;
        var2 = undefined;
        var0 = arg0;
        var2 = var3.bind(var2)(var0);
        var0 = new Array(2);
        var0[0] = var2;
        var1 = _closure1_slot37;
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot35 = var5;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot6;
            var2 = var3.getScoreWithoutLoadingLatest;
            var4 = _closure2_slot0;
            var1 = arg0;
            var1 = var2.bind(var3)(var4, var1);
            var3 = _closure1_slot6;
            var2 = var3.getScoreWithoutLoadingLatest;
            var0 = arg1;
            var0 = var2.bind(var3)(var4, var0);
            var0 = var0 - var1;
            return var0;
        };
        return var0;
    };
    var _closure1_slot36 = var4;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot7;
        var0 = arg0;
        var2 = var0.displayName;
        var0 = arg1;
        var1 = var0.displayName;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot37 = var3;
    var0 = global;
    var29 = var0.Object;
    var28 = var29.defineProperty;
    var23 = {};
    var0 = true;
    var23.value = var0;
    var0 = '__esModule';
    var0 = var28.bind(var29)(var2, var0, var23);
    var0 = 0;
    var23 = var25[var0];
    var0 = undefined;
    var23 = var27.bind(var0)(var23);
    var _closure1_slot4 = var23;
    var23 = 1;
    var23 = var25[var23];
    var23 = var26.bind(var0)(var23);
    var _closure1_slot5 = var23;
    var23 = 2;
    var23 = var25[var23];
    var23 = var27.bind(var0)(var23);
    var _closure1_slot6 = var23;
    var23 = 3;
    var23 = var25[var23];
    var23 = var24.bind(var0)(var23);
    var26 = var23.appLauncherOnlyCompareNames;
    var _closure1_slot7 = var26;
    var26 = var23.getSection;
    var _closure1_slot8 = var26;
    var26 = var23.useContextIndexState;
    var _closure1_slot9 = var26;
    var23 = var23.useUserIndexState;
    var _closure1_slot10 = var23;
    var23 = 4;
    var23 = var25[var23];
    var23 = var27.bind(var0)(var23);
    var _closure1_slot11 = var23;
    var23 = 5;
    var26 = var25[var23];
    var26 = var27.bind(var0)(var26);
    var _closure1_slot12 = var26;
    var23 = var25[var23];
    var23 = var24.bind(var0)(var23);
    var23 = var23.FetchState;
    var _closure1_slot13 = var23;
    var23 = 6;
    var23 = var25[var23];
    var23 = var24.bind(var0)(var23);
    var23 = var23.BuiltInSectionId;
    var _closure1_slot14 = var23;
    var23 = 7;
    var23 = var25[var23];
    var23 = var24.bind(var0)(var23);
    var23 = var23.COMMAND_SENTINEL;
    var _closure1_slot15 = var23;
    var23 = 20;
    var23 = var25[var23];
    var25 = var24.bind(var0)(var23);
    var24 = var25.fileFinishedImporting;
    var23 = 'modules/app_launcher/utils/AppLauncherSearchUtils.tsx';
    var23 = var24.bind(var25)(var23);
    var2.useApplicationsInContext = var22;
    var2.useApplicationCommandsInContext = var21;
    var2.filterApplicationAllowed = var20;
    var2.defaultApplicationBucketing = var19;
    var2.bucketApplicationNameStartsWith = var18;
    var2.bucketApplicationNameContains = var17;
    var2.bucketApplicationDescriptionStartsWith = var16;
    var2.bucketApplicationDescriptionContains = var15;
    var2.sortApplicationFreceny = var14;
    var2.sortApplicationAlpha = var13;
    var2.filterCommandAllowed = var12;
    var2.defaultCommandBucketing = var11;
    var2.bucketRootCommandNameStartsWith = var10;
    var2.bucketFullCommandNameStartsWith = var9;
    var2.bucketCommandNameContains = var8;
    var2.bucketOptionNameStartsWithOrCommandAndOptionStartsWith = var7;
    var2.bucketCommandOptionNameContains = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = {};
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107471: for (var _fun107471_ip = 0;;) switch (_fun107471_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = var0.applicationId;
                    var3 = _closure2_slot2;
                    var3 = var4 in var3;
                    if (var3) {
                        _fun107471_ip = 167;
                        continue _fun107471
                    }
                case 31:
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var0.applicationId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 10;
                    var3 = var3[var8];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getSectionName;
                    var6 = null;
                    if (!(var6 == var2)) {
                        _fun107471_ip = 112;
                        continue _fun107471
                    }
                case 89:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var2 = var5.FAKE_BUILT_IN_APP;
                case 112:
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.toLocaleLowerCase;
                    var4 = var2.bind(var3)();
                    var3 = var4.startsWith;
                    var5 = _closure2_slot1;
                    var2 = var5.toLocaleLowerCase;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot2;
                    var3 = var0.applicationId;
                    var4[var3] = var2;
                    return var2;
                case 167:
                    var1 = _closure2_slot2;
                    var0 = var0.applicationId;
                    var0 = var1[var0];
                    return var0;
            }
        };
        return var0;
    };
    var2.bucketCommandSectionNameStartsWith = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = {};
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun107474: for (var _fun107474_ip = 0;;) switch (_fun107474_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = var0.applicationId;
                    var3 = _closure2_slot2;
                    var3 = var4 in var3;
                    if (var3) {
                        _fun107474_ip = 166;
                        continue _fun107474
                    }
                case 31:
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var0.applicationId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 10;
                    var3 = var3[var8];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getSectionName;
                    var6 = null;
                    if (!(var6 == var2)) {
                        _fun107474_ip = 112;
                        continue _fun107474
                    }
                case 89:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var2 = var5.FAKE_BUILT_IN_APP;
                case 112:
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.toLocaleLowerCase;
                    var4 = var2.bind(var3)();
                    var3 = var4.includes;
                    var5 = _closure2_slot1;
                    var2 = var5.toLocaleLowerCase;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot2;
                    var3 = var0.applicationId;
                    var4[var3] = var2;
                    return var2;
                case 166:
                    var1 = _closure2_slot2;
                    var0 = var0.applicationId;
                    var0 = var1[var0];
                    return var0;
            }
        };
        return var0;
    };
    var2.bucketCommandSectionNameContains = var6;
    var2.defaultCommandsSort = var5;
    var2.sortCommandsByFreceny = var4;
    var2.sortCommandsAlpha = var3;
    var3 = function arg0() {
        _fun107476: for (var _fun107476_ip = 0;;) switch (_fun107476_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.context;
                var _closure2_slot0 = var10;
                var6 = var1.query;
                var _closure2_slot1 = var6;
                var5 = var1.commandLimit;
                var _closure2_slot2 = var5;
                var11 = var1.applicationLimit;
                var _closure2_slot3 = var11;
                var2 = var1.searchesCommands;
                var14 = undefined;
                if (!(var2 === var14)) {
                    _fun107476_ip = 58;
                    continue _fun107476
                }
            case 56:
                var2 = true;
            case 58:
                var _closure2_slot4 = var2;
                var13 = var1.searchesBots;
                if (!(var13 === var14)) {
                    _fun107476_ip = 74;
                    continue _fun107476
                }
            case 72:
                var13 = true;
            case 74:
                var _closure2_slot5 = var13;
                var12 = var1.searchesActivities;
                if (!(var12 === var14)) {
                    _fun107476_ip = 90;
                    continue _fun107476
                }
            case 88:
                var12 = true;
            case 90:
                var _closure2_slot6 = var12;
                var _closure2_slot7 = var14;
                var _closure2_slot8 = var14;
                var _closure2_slot9 = var14;
                var _closure2_slot10 = var14;
                var _closure2_slot11 = var14;
                var4 = var6.startsWith;
                var8 = _closure1_slot15;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var1 = '';
                var1 = var7.bind(var1)(var8);
                var1 = var4.bind(var6)(var1);
                var9 = var6;
                if (!var1) {
                    _fun107476_ip = 181;
                    continue _fun107476
                }
            case 160:
                var4 = var6.substring;
                var1 = 1;
                var1 = var4.bind(var6)(var1);
                _closure2_slot1 = var1;
                var9 = var1;
            case 181:
                var4 = _closure1_slot19;
                var1 = {};
                var1.context = var10;
                var6 = true;
                var1.includeBuiltIn = var6;
                var1 = var4.bind(var14)(var1);
                var16 = var1.commands;
                _closure2_slot7 = var16;
                var4 = var1.commandSectionMap;
                _closure2_slot8 = var4;
                var1 = var1.loading;
                var7 = _closure1_slot18;
                var6 = {
                    'context': null,
                    'onlyWithCommands': true,
                    'includeBuiltIn': true
                };
                var6.context = var10;
                var6.includeEmbeddedApps = var12;
                var6.includeNonEmbeddedApps = var13;
                var6 = var7.bind(var14)(var6);
                var8 = var6.apps;
                _closure2_slot9 = var8;
                var7 = _closure1_slot1;
                var15 = _closure1_slot3;
                var6 = 12;
                var6 = var15[var6];
                var7 = var7.bind(var14)(var6);
                var6 = {};
                var18 = var10.type;
                var17 = 'channel';
                var15 = null;
                if (!(var17 === var18)) {
                    _fun107476_ip = 325;
                    continue _fun107476
                }
            case 315:
                var17 = var10.channel;
                var15 = var17.guild_id;
            case 325:
                var6.guildId = var15;
                var7 = var7.bind(var14)(var6);
                _closure2_slot10 = var7;
                var15 = _closure1_slot5;
                var14 = var15.useMemo;
                var6 = new Array(5);
                var6[0] = var2;
                var6[1] = var16;
                var6[2] = var5;
                var6[3] = var10;
                var6[4] = var9;
                var5 = function() { // Environment: var0
                    _fun107477: for (var _fun107477_ip = 0;;) switch (_fun107477_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun107477_ip = 19;
                                continue _fun107477
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun107477_ip = 158;
                            continue _fun107477;
                        case 19:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 13;
                            var1 = var3[var1];
                            var7 = undefined;
                            var4 = var2.bind(var7)(var1);
                            var3 = var4.queryData;
                            var2 = _closure2_slot7;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.limit = var6;
                            var6 = _closure1_slot28;
                            var8 = _closure2_slot0;
                            var10 = var6.bind(var7)(var8);
                            var6 = new Array(1);
                            var6[0] = var10;
                            var1.filterPredicates = var6;
                            var10 = _closure1_slot29;
                            var6 = _closure2_slot1;
                            var6 = var10.bind(var7)(var6);
                            var1.bucketPredicates = var6;
                            var6 = _closure1_slot35;
                            var5 = {};
                            var11 = var8.type;
                            var10 = 'channel';
                            var8 = undefined;
                            if (!(var10 === var11)) {
                                _fun107477_ip = 138;
                                continue _fun107477
                            }
                        case 129:
                            var9 = _closure2_slot0;
                            var8 = var9.channel;
                        case 138:
                            var5.channel = var8;
                            var5 = var6.bind(var7)(var5);
                            var1.sortComparers = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 158:
                            return var0;
                    }
                };
                var15 = var14.bind(var15)(var5, var6);
                _closure2_slot11 = var15;
                var14 = _closure1_slot5;
                var6 = var14.useMemo;
                var5 = new Array(3);
                var5[0] = var8;
                var5[1] = var15;
                var5[2] = var4;
                var4 = function() { // Environment: var0
                    _fun107478: for (var _fun107478_ip = 0;;) switch (_fun107478_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun107478_ip = 132;
                                continue _fun107478
                            }
                        case 20:
                            var1 = global;
                            var4 = var1.Map;
                            var5 = _closure2_slot9;
                            var2 = var5.map;
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var2 = var1.id;
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                            };
                            var6 = var2.bind(var5)(var1);
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var7 = var2;
                            var1 = new var7[var4](var6, var5);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var _closure3_slot0 = var1;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.compact;
                            var4 = _closure2_slot11;
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun107480: for (var _fun107480_ip = 0;;) switch (_fun107480_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure3_slot0;
                                        var1 = var2.get;
                                        var0 = var3.applicationId;
                                        var4 = var1.bind(var2)(var0);
                                        var2 = null;
                                        var1 = var2 == var4;
                                        var0 = null;
                                        if (var1) {
                                            _fun107480_ip = 82;
                                            continue _fun107480
                                        }
                                    case 36:
                                        var1 = {};
                                        var1.command = var3;
                                        var1.application = var4;
                                        var4 = _closure2_slot8;
                                        var3 = var3.id;
                                        var3 = var4[var3];
                                        var4 = var2 != var3;
                                        var2 = null;
                                        if (!var4) {
                                            _fun107480_ip = 75;
                                            continue _fun107480
                                        }
                                    case 72:
                                        var2 = var3;
                                    case 75:
                                        var1.section = var2;
                                        var0 = var1;
                                    case 82:
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 132:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var6 = var6.bind(var14)(var4, var5);
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var3 = new Array(7);
                var3[0] = var13;
                var3[1] = var12;
                var3[2] = var11;
                var3[3] = var10;
                var3[4] = var9;
                var3[5] = var8;
                var3[6] = var7;
                var0 = function() { // Environment: var0
                    _fun107481: for (var _fun107481_ip = 0;;) switch (_fun107481_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure2_slot6;
                            if (var2) {
                                _fun107481_ip = 38;
                                continue _fun107481
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var3 = var0;
                            if (!var2) {
                                _fun107481_ip = 198;
                                continue _fun107481
                            }
                        case 29:
                            var3 = _closure2_slot9;
                            _fun107481_ip = 198;
                            continue _fun107481;
                        case 38:
                            var2 = global;
                            var6 = var2.Set;
                            var7 = _closure2_slot9;
                            var5 = var7.map;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var11 = var5.bind(var7)(var2);
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var12 = var5;
                            var2 = new var12[var6](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var _closure3_slot0 = var2;
                            var5 = var0.push;
                            var10 = _closure2_slot9;
                            var2 = new Array(0);
                            var11 = var2;
                            var9 = 0;
                            var7 = arraySpread(var11, var10, var9);
                            var11 = var5;
                            var10 = var2;
                            var9 = var0;
                            var2 = apply(var11, var10, var9);
                            var2 = var0.push;
                            var8 = _closure2_slot10;
                            var7 = var8.filter;
                            var5 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.application;
                                var2 = var0.id;
                                var1 = _closure3_slot0;
                                var0 = var1.has;
                                var0 = var0.bind(var1)(var2);
                                var0 = !var0;
                                return var0;
                            };
                            var7 = var7.bind(var8)(var5);
                            var5 = var7.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.application;
                                return var0;
                            };
                            var10 = var5.bind(var7)(var1);
                            var1 = new Array(0);
                            var11 = var1;
                            var9 = 0;
                            var5 = arraySpread(var11, var10, var9);
                            var11 = var2;
                            var10 = var1;
                            var9 = var0;
                            var1 = apply(var11, var10, var9);
                            var3 = var0;
                        case 198:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 13;
                            var0 = var2[var0];
                            var7 = undefined;
                            var2 = var1.bind(var7)(var0);
                            var1 = var2.queryData;
                            var0 = {};
                            var6 = _closure2_slot3;
                            var0.limit = var6;
                            var8 = _closure1_slot20;
                            var6 = _closure2_slot0;
                            var8 = var8.bind(var7)(var6);
                            var6 = new Array(1);
                            var6[0] = var8;
                            var0.filterPredicates = var6;
                            var6 = _closure1_slot21;
                            var4 = _closure2_slot1;
                            var4 = var6.bind(var7)(var4);
                            var0.bucketPredicates = var4;
                            var6 = _closure1_slot26;
                            var4 = new Array(2);
                            var4[0] = var6;
                            var5 = _closure1_slot27;
                            var4[1] = var5;
                            var0.sortComparers = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var0, var3);
                var0 = var6.length;
                var4 = 0;
                var5 = var0 > var4;
                var0 = var3.length;
                var4 = var0 > var4;
                var0 = {};
                var0.commandResults = var6;
                var0.hasCommandResults = var5;
                var0.applicationResults = var3;
                var0.hasApplicationResults = var4;
                var3 = !var5;
                if (var5) {
                    _fun107476_ip = 535;
                    continue _fun107476
                }
            case 532:
                var3 = !var4;
            case 535:
                var0.isEmptyState = var3;
                if (!var1) {
                    _fun107476_ip = 548;
                    continue _fun107476
                }
            case 545:
                var1 = var2;
            case 548:
                var0.loading = var1;
                return var0;
        }
    };
    var2.useLocalSearchResults = var3;
    var1 = function arg0() {
        _fun107485: for (var _fun107485_ip = 0;;) switch (_fun107485_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.context;
                var9 = var2.query;
                var _closure2_slot0 = var9;
                var5 = var2.fetches;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun107485_ip = 34;
                    continue _fun107485
                }
            case 32:
                var5 = true;
            case 34:
                var _closure2_slot1 = var5;
                var13 = var2.pageLimit;
                if (!(var13 === var3)) {
                    _fun107485_ip = 60;
                    continue _fun107485
                }
            case 50:
                var13 = inf;
            case 60:
                var _closure2_slot2 = var13;
                var6 = var2.entrypoint;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var7 = var9.startsWith;
                var10 = _closure1_slot15;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var2 = '';
                var2 = var8.bind(var2)(var10);
                var2 = var7.bind(var9)(var2);
                var7 = var9;
                if (!var2) {
                    _fun107485_ip = 173;
                    continue _fun107485
                }
            case 152:
                var8 = var9.substring;
                var2 = 1;
                var2 = var8.bind(var9)(var2);
                _closure2_slot0 = var2;
                var7 = var2;
            case 173:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 15;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.AppLauncherEntrypoint;
                var2 = var2.VOICE;
                var6 = var6 === var2;
                _closure2_slot3 = var6;
                var9 = var1.type;
                var2 = 'channel';
                var8 = undefined;
                if (!(var2 === var9)) {
                    _fun107485_ip = 238;
                    continue _fun107485
                }
            case 228:
                var1 = var1.channel;
                var8 = var1.guild_id;
            case 238:
                _closure2_slot4 = var8;
                var9 = _closure1_slot5;
                var1 = var9.useState;
                var2 = 1;
                var10 = var1.bind(var9)(var2);
                var9 = _closure1_slot4;
                var1 = 2;
                var1 = var9.bind(var3)(var10, var1);
                var9 = 0;
                var11 = var1[var9];
                _closure2_slot5 = var11;
                var1 = var1[var2];
                _closure2_slot6 = var1;
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var1 = var1.bind(var2)(var11);
                _closure2_slot7 = var1;
                var1.current = var11;
                var2 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 16;
                var1 = var9[var1];
                var10 = var2.bind(var3)(var1);
                var9 = var10.useStateFromStoresObject;
                var1 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = new Array(4);
                var2[0] = var7;
                var2[1] = var8;
                var2[2] = var11;
                var2[3] = var6;
                var1 = function() { // Environment: var0
                    _fun107486: for (var _fun107486_ip = 0;;) switch (_fun107486_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot12;
                            var3 = var4.getFetchState;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.query = var5;
                            var5 = _closure2_slot4;
                            var1.guildId = var5;
                            var5 = _closure2_slot5;
                            var1.page = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var11 = 17;
                            var5 = var7[var11];
                            var2 = undefined;
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.ApplicationIntegrationType;
                            var5 = var5.USER_INSTALL;
                            var1.integrationType = var5;
                            var10 = 1;
                            var1.minUserInstallCommandCount = var10;
                            var8 = true;
                            var1.excludeAppsWithCustomInstallUrl = var8;
                            var5 = _closure2_slot3;
                            var1.excludeNonEmbeddedApps = var5;
                            var1.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var8;
                            var5 = 18;
                            var12 = var7[var5];
                            var12 = var6.bind(var2)(var12);
                            var12 = var12.SearchAppsRequestSource;
                            var12 = var12.APP_LAUNCHER;
                            var1.source = var12;
                            var1 = var3.bind(var4)(var1);
                            var0.fetchState = var1;
                            var3 = var4.getSearchResults;
                            var1 = {};
                            var12 = _closure2_slot0;
                            var1.query = var12;
                            var12 = _closure2_slot4;
                            var1.guildId = var12;
                            var12 = _closure2_slot5;
                            var1.page = var12;
                            var11 = var7[var11];
                            var11 = var6.bind(var2)(var11);
                            var11 = var11.ApplicationIntegrationType;
                            var11 = var11.USER_INSTALL;
                            var1.integrationType = var11;
                            var1.minUserInstallCommandCount = var10;
                            var1.excludeAppsWithCustomInstallUrl = var8;
                            var9 = _closure2_slot3;
                            var1.excludeNonEmbeddedApps = var9;
                            var1.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var8;
                            var5 = var7[var5];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.SearchAppsRequestSource;
                            var5 = var5.APP_LAUNCHER;
                            var1.source = var5;
                            var3 = var3.bind(var4)(var1);
                            var1 = null;
                            var4 = var1 == var3;
                            if (var4) {
                                _fun107486_ip = 281;
                                continue _fun107486
                            }
                        case 275:
                            var2 = var3.totalPages;
                        case 281:
                            var3 = var1 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun107486_ip = 293;
                                continue _fun107486
                            }
                        case 290:
                            var1 = var2;
                        case 293:
                            var0.totalPages = var1;
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var3, var1, var2);
                var2 = var1.fetchState;
                _closure2_slot8 = var2;
                var1 = var1.totalPages;
                _closure2_slot9 = var1;
                var12 = _closure1_slot5;
                var10 = var12.useMemo;
                var9 = new Array(5);
                var9[0] = var2;
                var9[1] = var8;
                var9[2] = var7;
                var9[3] = var11;
                var9[4] = var6;
                var3 = function() { // Environment: var0
                    _fun107487: for (var _fun107487_ip = 0;;) switch (_fun107487_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Array;
                            var2 = var3.from;
                            var1 = {};
                            var6 = _closure2_slot8;
                            var5 = _closure1_slot13;
                            var5 = var5.FETCHED;
                            if (!(var6 !== var5)) {
                                _fun107487_ip = 70;
                                continue _fun107487
                            }
                        case 39:
                            var5 = _closure2_slot8;
                            var0 = _closure1_slot13;
                            var0 = var0.ERROR;
                            if (!(var5 !== var0)) {
                                _fun107487_ip = 70;
                                continue _fun107487
                            }
                        case 57:
                            var5 = _closure2_slot5;
                            var0 = 1;
                            var0 = var5 - var0;
                            _fun107487_ip = 74;
                            continue _fun107487;
                        case 70:
                            var0 = _closure2_slot5;
                        case 74:
                            var1.length = var0;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun107488: for (var _fun107488_ip = 0;;) switch (_fun107488_ip) {
                                    case 0:
                                        var3 = _closure1_slot12;
                                        var2 = var3.getSearchResults;
                                        var1 = {};
                                        var4 = _closure2_slot0;
                                        var1.query = var4;
                                        var4 = _closure2_slot4;
                                        var1.guildId = var4;
                                        var5 = arg1;
                                        var4 = 1;
                                        var5 = var5 + var4;
                                        var1.page = var5;
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var0 = 17;
                                        var8 = var6[var0];
                                        var0 = undefined;
                                        var8 = var5.bind(var0)(var8);
                                        var8 = var8.ApplicationIntegrationType;
                                        var8 = var8.USER_INSTALL;
                                        var1.integrationType = var8;
                                        var1.minUserInstallCommandCount = var4;
                                        var4 = true;
                                        var1.excludeAppsWithCustomInstallUrl = var4;
                                        var7 = _closure2_slot3;
                                        var1.excludeNonEmbeddedApps = var7;
                                        var1.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var4;
                                        var4 = 18;
                                        var4 = var6[var4];
                                        var4 = var5.bind(var0)(var4);
                                        var4 = var4.SearchAppsRequestSource;
                                        var4 = var4.APP_LAUNCHER;
                                        var1.source = var4;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        var3 = var1 == var2;
                                        if (var3) {
                                            _fun107488_ip = 163;
                                            continue _fun107488
                                        }
                                    case 157:
                                        var0 = var2.results;
                                    case 163:
                                        if (!(var1 == var0)) {
                                            _fun107488_ip = 171;
                                            continue _fun107488
                                        }
                                    case 167:
                                        var0 = new Array(0);
                                    case 171:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var3 = var10.bind(var12)(var3, var9);
                _closure2_slot10 = var3;
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var9 = new Array(4);
                var9[0] = var2;
                var9[1] = var13;
                var9[2] = var3;
                var9[3] = var1;
                var1 = function() { // Environment: var0
                    _fun107489: for (var _fun107489_ip = 0;;) switch (_fun107489_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            var4 = var1.length;
                            var2 = _closure2_slot8;
                            var1 = _closure1_slot13;
                            var1 = var1.FETCHED;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun107489_ip = 49;
                                continue _fun107489
                            }
                        case 36:
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var1 = var4 === var2;
                        case 49:
                            if (!var1) {
                                _fun107489_ip = 58;
                                continue _fun107489
                            }
                        case 52:
                            var2 = 0;
                            var1 = var4 > var2;
                        case 58:
                            if (!var1) {
                                _fun107489_ip = 69;
                                continue _fun107489
                            }
                        case 61:
                            var2 = _closure2_slot9;
                            var1 = var4 < var2;
                        case 69:
                            if (!var1) {
                                _fun107489_ip = 80;
                                continue _fun107489
                            }
                        case 72:
                            var2 = _closure2_slot2;
                            var1 = var4 < var2;
                        case 80:
                            if (!var1) {
                                _fun107489_ip = 109;
                                continue _fun107489
                            }
                        case 83:
                            var3 = _closure2_slot10;
                            var2 = 1;
                            var2 = var4 - var2;
                            var2 = var3[var2];
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 109:
                            if (!var1) {
                                _fun107489_ip = 150;
                                continue _fun107489
                            }
                        case 112:
                            var2 = _closure2_slot7;
                            var1 = var2.current;
                            var1 = var1 + 1;
                            var2.current = var1;
                            var2 = _closure2_slot6;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = 1;
                                var0 = var1 + var0;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 150:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var10.bind(var12)(var1, var9);
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var8 = var0.query;
                    var6 = var0.page;
                    var4 = var0.guildId;
                    var2 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var0 = 19;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.search;
                    var1 = {};
                    var1.query = var8;
                    var1.guildId = var4;
                    var4 = {
                        'page': null,
                        'integrationType': null,
                        'minUserInstallCommandCount': 1,
                        'excludeAppsWithCustomInstallUrl': true,
                        'excludeNonEmbeddedApps': null,
                        'excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand': true
                    };
                    var4.page = var6;
                    var6 = _closure1_slot0;
                    var5 = 17;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.ApplicationIntegrationType;
                    var5 = var5.USER_INSTALL;
                    var4.integrationType = var5;
                    var5 = _closure2_slot3;
                    var4.excludeNonEmbeddedApps = var5;
                    var5 = 18;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.SearchAppsRequestSource;
                    var5 = var5.APP_LAUNCHER;
                    var4.source = var5;
                    var1.options = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = var10.bind(var12)(var6, var9);
                _closure2_slot11 = var12;
                var10 = _closure1_slot5;
                var9 = var10.useEffect;
                var6 = new Array(5);
                var6[0] = var7;
                var6[1] = var8;
                var6[2] = var12;
                var6[3] = var11;
                var6[4] = var5;
                var5 = function() { // Environment: var0
                    _fun107492: for (var _fun107492_ip = 0;;) switch (_fun107492_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun107492_ip = 49;
                                continue _fun107492
                            }
                        case 10:
                            var2 = _closure2_slot11;
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.query = var3;
                            var3 = _closure2_slot5;
                            var1.page = var3;
                            var0 = _closure2_slot4;
                            var1.guildId = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var5, var6);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = 1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.fetchState = var2;
                var2 = var3.flat;
                var2 = var2.bind(var3)();
                var0.applicationResults = var2;
                var0.fetchNextPage = var1;
                return var0;
        }
    };
    var2.useGlobalSearchResults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4676, 4674, 4675, 13895, 4545, 6743, 7975, 1645, 4673, 12214, 11755, 13897, 22, 7756, 566, 5354, 13896, 13898, 2]);