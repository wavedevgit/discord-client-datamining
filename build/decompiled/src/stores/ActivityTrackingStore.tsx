// stores/ActivityTrackingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96487: for (var _fun96487_ip = 0;;) switch (_fun96487_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var5;
            var0 = function() {
                _fun96488: for (var _fun96488_ip = 0;;) switch (_fun96488_ip) {
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
                        _fun96488_ip = 76;
                        continue _fun96488;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot22 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function arg0, arg1() {
                _fun96491: for (var _fun96491_ip = 0;;) switch (_fun96491_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun96491_ip = 46;
                            continue _fun96491
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun96491_ip = 55;
                            continue _fun96491
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun96491_ip = 345;
                            continue _fun96491
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun96491_ip = 323;
                            continue _fun96491
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun96491_ip = 283;
                            continue _fun96491
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun96491_ip = 270;
                            continue _fun96491
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
                            _fun96491_ip = 163;
                            continue _fun96491
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun96491_ip = 179;
                            continue _fun96491
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun96491_ip = 249;
                            continue _fun96491
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun96491_ip = 249;
                            continue _fun96491
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun96491_ip = 234;
                            continue _fun96491
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun96491_ip = 247;
                            continue _fun96491
                        }
                    case 234:
                        var8 = _closure1_slot24;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun96491_ip = 265;
                        continue _fun96491;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun96491_ip = 283;
                        continue _fun96491;
                    case 270:
                        var6 = _closure1_slot24;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun96491_ip = 323;
                            continue _fun96491
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
                            _fun96491_ip = 330;
                            continue _fun96491
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun96492: for (var _fun96492_ip = 0;;) switch (_fun96492_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun96492_ip = 56;
                                        continue _fun96492
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
                                    _fun96492_ip = 67;
                                    continue _fun96492;
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
            var _closure1_slot23 = var0;
            var0 = function arg0, arg1() {
                _fun96493: for (var _fun96493_ip = 0;;) switch (_fun96493_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun96493_ip = 23;
                            continue _fun96493
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun96493_ip = 33;
                            continue _fun96493
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
                            _fun96493_ip = 70;
                            continue _fun96493
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun96493_ip = 55;
                            continue _fun96493
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function arg0() {
                _fun96494: for (var _fun96494_ip = 0;;) switch (_fun96494_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arguments[1];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun96494_ip = 14;
                            continue _fun96494
                        }
                    case 12:
                        var1 = true;
                    case 14:
                        if (!var1) {
                            _fun96494_ip = 32;
                            continue _fun96494
                        }
                    case 17:
                        var3 = _closure1_slot26;
                        var1 = true;
                        var1 = var3.bind(var0)(var2, var1);
                    case 32:
                        var4 = _closure1_slot20;
                        var3 = var2.applicationId;
                        var4 = var4[var3];
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun96494_ip = 77;
                            continue _fun96494
                        }
                    case 54:
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        var4 = _closure1_slot20;
                        var3 = var2.applicationId;
                        var3 = delete var4[var3];
                    case 77:
                        var3 = _closure1_slot19;
                        var2 = var2.applicationId;
                        var2 = delete var3[var2];
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var2 = var4[var2];
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = _closure1_slot16;
                        var1 = _closure1_slot19;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function arg0() {
                _fun96495: for (var _fun96495_ip = 0;;) switch (_fun96495_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = arguments[1];
                        var _closure2_slot0 = var4;
                        var0 = undefined;
                        if (!(var2 === var0)) {
                            _fun96495_ip = 20;
                            continue _fun96495
                        }
                    case 18:
                        var2 = false;
                    case 20:
                        var13 = global;
                        var5 = var13.Date;
                        var1 = var5.now;
                        var5 = var1.bind(var5)();
                        var1 = var4.updatedAt;
                        var6 = null;
                        var1 = var6 != var1;
                        var16 = 0;
                        if (!var1) {
                            _fun96495_ip = 64;
                            continue _fun96495
                        }
                    case 54:
                        var1 = var4.updatedAt;
                        var16 = var5 - var1;
                    case 64:
                        var9 = _closure1_slot17;
                        var8 = _closure1_slot18;
                        var8 = var9 + var8;
                        if (!(var16 > var8)) {
                            _fun96495_ip = 85;
                            continue _fun96495
                        }
                    case 83:
                        var16 = 0;
                    case 85:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 15;
                        var7 = var9[var7];
                        var11 = var8.bind(var0)(var7);
                        var10 = var11.shouldShareApplicationActivity;
                        var8 = var4.applicationId;
                        var7 = _closure1_slot12;
                        var14 = var10.bind(var11)(var8, var7);
                        var8 = _closure1_slot14;
                        var7 = var8.getVoiceChannelId;
                        var12 = var7.bind(var8)();
                        var8 = _closure1_slot10;
                        var7 = var8.getSessionId;
                        var11 = var7.bind(var8)();
                        var8 = _closure1_slot13;
                        var7 = var8.getMediaSessionId;
                        var10 = var7.bind(var8)();
                        var8 = _closure1_slot1;
                        var7 = 16;
                        var7 = var9[var7];
                        var9 = var8.bind(var0)(var7);
                        var8 = var9.updateActivity;
                        var7 = {};
                        var15 = var4.applicationId;
                        var7.applicationId = var15;
                        var15 = var4.isDiscordApplication;
                        if (var15) {
                            _fun96495_ip = 218;
                            continue _fun96495
                        }
                    case 210:
                        var15 = var4.distributor;
                        _fun96495_ip = 228;
                        continue _fun96495;
                    case 218:
                        var17 = _closure1_slot15;
                        var15 = var17.DISCORD;
                    case 228:
                        var7.distributor = var15;
                        var7.shareActivity = var14;
                        var14 = var4.token;
                        var7.token = var14;
                        var15 = var13.Math;
                        var14 = var15.floor;
                        var13 = 1000;
                        var13 = var16 / var13;
                        var13 = var14.bind(var15)(var13);
                        var7.duration = var13;
                        var7.closed = var2;
                        var13 = var4.exePath;
                        var7.exePath = var13;
                        var7.voiceChannelId = var12;
                        var7.sessionId = var11;
                        var7.mediaSessionId = var10;
                        var7 = var8.bind(var9)(var7);
                        var4.updatedAt = var5;
                        var7 = _closure1_slot20;
                        var5 = var4.applicationId;
                        var5 = var7[var5];
                        if (!(var6 == var5)) {
                            _fun96495_ip = 420;
                            continue _fun96495
                        }
                    case 339:
                        var6 = _closure1_slot20;
                        var5 = var4.applicationId;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 17;
                        var7 = var9[var7];
                        var7 = var8.bind(var0)(var7);
                        var7 = var7.Interval;
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var20 = var8;
                        var7 = new var20[var7](var19);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var6[var5] = var7;
                        var6 = var7.start;
                        var5 = _closure1_slot17;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot26;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var3);
                    case 420:
                        if (var2) {
                            _fun96495_ip = 481;
                            continue _fun96495
                        }
                    case 423:
                        var3 = _closure1_slot19;
                        var2 = var4.applicationId;
                        var3[var2] = var4;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var2 = var4[var2];
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = _closure1_slot16;
                        var1 = _closure1_slot19;
                        var1 = var3.bind(var4)(var2, var1);
                    case 481:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function() {
                _fun96497: for (var _fun96497_ip = 0;;) switch (_fun96497_ip) {
                    case 0:
                        var6 = arguments[0];
                        var0 = undefined;
                        if (!(var6 === var0)) {
                            _fun96497_ip = 11;
                            continue _fun96497
                        }
                    case 9:
                        var6 = true;
                    case 11:
                        var2 = _closure1_slot8;
                        var1 = var2.getVisibleRunningGames;
                        var3 = var1.bind(var2)();
                        var1 = global;
                        var2 = var1.Set;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = var4;
                        var2 = new var19[var2](var18);
                        var4 = var2 instanceof Object ? var2 : var4;
                        var2 = _closure1_slot23;
                        var10 = var2.bind(var0)(var3);
                        var3 = var10.bind(var0)();
                        var2 = var3.done;
                        var9 = 18;
                        var8 = null;
                        var7 = '';
                        if (var2) {
                            _fun96497_ip = 275;
                            continue _fun96497
                        }
                    case 91:
                        var2 = var3.value;
                        var13 = var2.name;
                        var12 = var2.distributor;
                        var15 = var2.exePath;
                        var11 = _closure1_slot11;
                        var2 = var11.getGameByName;
                        var13 = var2.bind(var11)(var13);
                        if (!(var8 != var13)) {
                            _fun96497_ip = 257;
                            continue _fun96497
                        }
                    case 135:
                        var11 = var4.add;
                        var2 = var13.id;
                        var2 = var11.bind(var4)(var2);
                        var11 = var13.id;
                        var2 = _closure1_slot19;
                        var2 = var11 in var2;
                        if (var2) {
                            _fun96497_ip = 257;
                            continue _fun96497
                        }
                    case 166:
                        var11 = _closure1_slot26;
                        var2 = {};
                        var13 = var13.id;
                        var2.applicationId = var13;
                        var14 = var1.Date;
                        var13 = var14.now;
                        var13 = var13.bind(var14)();
                        var2.updatedAt = var13;
                        var2.distributor = var12;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var9];
                        var14 = var13.bind(var0)(var12);
                        var13 = var14.removeExecutablePathPrefix;
                        var16 = var8 != var15;
                        var12 = var7;
                        if (!var16) {
                            _fun96497_ip = 242;
                            continue _fun96497
                        }
                    case 239:
                        var12 = var15;
                    case 242:
                        var12 = var13.bind(var14)(var12);
                        var2.exePath = var12;
                        var2 = var11.bind(var0)(var2);
                    case 257:
                        var11 = var10.bind(var0)();
                        var2 = var11.done;
                        var3 = var11;
                        if (!var2) {
                            _fun96497_ip = 91;
                            continue _fun96497
                        }
                    case 275:
                        var3 = var1.Object;
                        var2 = var3.keys;
                        var1 = _closure1_slot19;
                        var3 = var2.bind(var3)(var1);
                        var1 = var3.length;
                        var2 = 0;
                        var1 = var2 < var1;
                        if (!var1) {
                            _fun96497_ip = 356;
                            continue _fun96497
                        }
                    case 309:
                        var8 = var3[var2];
                        var1 = var4.has;
                        var1 = var1.bind(var4)(var8);
                        if (var1) {
                            _fun96497_ip = 344;
                            continue _fun96497
                        }
                    case 326:
                        var7 = _closure1_slot25;
                        var1 = _closure1_slot19;
                        var1 = var1[var8];
                        var1 = var7.bind(var0)(var1, var6);
                    case 344:
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if (var2 < var1) {
                            _fun96497_ip = 309;
                            continue _fun96497
                        }
                    case 356:
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var8 = function() {
                _fun96498: for (var _fun96498_ip = 0;;) switch (_fun96498_ip) {
                    case 0:
                        var0 = global;
                        var3 = var0.Object;
                        var1 = var3.keys;
                        var0 = _closure1_slot19;
                        var4 = var1.bind(var3)(var0);
                        var0 = var4.length;
                        var3 = 0;
                        var1 = var3 < var0;
                        var0 = undefined;
                        if (!var1) {
                            _fun96498_ip = 74;
                            continue _fun96498
                        }
                    case 41:
                        var6 = var4[var3];
                        var5 = _closure1_slot25;
                        var1 = _closure1_slot19;
                        var1 = var1[var6];
                        var1 = var5.bind(var0)(var1);
                        var3 = var3 + 1;
                        var1 = var4.length;
                        if (var3 < var1) {
                            _fun96498_ip = 41;
                            continue _fun96498
                        }
                    case 74:
                        var1 = false;
                        _closure1_slot21 = var1;
                        return var0;
                }
            };
            var _closure1_slot28 = var8;
            var0 = global;
            var9 = var0.Object;
            var7 = var9.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var9)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 4;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var9 = 5;
            var1 = var5[var9];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 6;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot9 = var1;
            var1 = 7;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot10 = var1;
            var1 = 8;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot11 = var1;
            var1 = 9;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot12 = var1;
            var1 = 10;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot13 = var1;
            var1 = 11;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot14 = var1;
            var1 = 12;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.Distributors;
            var _closure1_slot15 = var1;
            var1 = 'ActivityTrackingStore';
            var _closure1_slot16 = var1;
            var7 = 13;
            var10 = var5[var7];
            var10 = var6.bind(var0)(var10);
            var10 = var10.Millis;
            var11 = var10.MINUTE;
            var10 = 30;
            var10 = var10 * var11;
            var _closure1_slot17 = var10;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var7 = var7.Millis;
            var7 = var7.MINUTE;
            var7 = var9 * var7;
            var _closure1_slot18 = var7;
            var7 = 14;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var9 = var7.Storage;
            var7 = var9.get;
            var7 = var7.bind(var9)(var1);
            var9 = null;
            if (!(var9 == var7)) {
                _fun96487_ip = 460;
                continue _fun96487
            }
        case 458:
            var7 = {};
        case 460:
            var _closure1_slot19 = var7;
            var7 = {};
            var _closure1_slot20 = var7;
            var7 = false;
            var _closure1_slot21 = var7;
            var7 = 19;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var9 = var7.Store;
            var7 = function(arg0) { // Environment: var3
                var3 = function() {
                    _fun96500: for (var _fun96500_ip = 0;;) switch (_fun96500_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot3;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot6;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot5;
                            var0 = _closure1_slot22;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun96500_ip = 69;
                                continue _fun96500
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun96500_ip = 105;
                            continue _fun96500;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var2)(var3);
                            var5 = var5.constructor;
                            var4 = arguments;
                            var0 = var6.bind(var7)(var8, var4, var5);
                        case 105:
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot7;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot4;
                var4 = {};
                var0 = 'initialize';
                var4.key = var0;
                var0 = function() {
                    var3 = this;
                    var9 = var3.waitFor;
                    var16 = _closure1_slot10;
                    var15 = _closure1_slot11;
                    var14 = _closure1_slot12;
                    var13 = _closure1_slot13;
                    var12 = _closure1_slot8;
                    var11 = _closure1_slot14;
                    var4 = _closure1_slot9;
                    var17 = var3;
                    var10 = var4;
                    var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
                    var2 = var3.syncWith;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot27;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(2);
                var0[0] = var4;
                var4 = {};
                var6 = 'getActivities';
                var4.key = var6;
                var5 = function() {
                    var0 = _closure1_slot19;
                    return var0;
                };
                var4.value = var5;
                var0[1] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var7.bind(var0)(var9);
            var7.displayName = var1;
            var1 = 20;
            var1 = var5[var1];
            var14 = var6.bind(var0)(var1);
            var1 = {};
            var9 = function() {
                var1 = _closure1_slot27;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1.RUNNING_GAMES_CHANGE = var9;
            var9 = function() {
                _fun96504: for (var _fun96504_ip = 0;;) switch (_fun96504_ip) {
                    case 0:
                        var0 = _closure1_slot21;
                        if (var0) {
                            _fun96504_ip = 100;
                            continue _fun96504
                        }
                    case 10:
                        var0 = global;
                        var3 = var0.Object;
                        var1 = var3.keys;
                        var0 = _closure1_slot19;
                        var4 = var1.bind(var3)(var0);
                        var0 = var4.length;
                        var3 = 0;
                        var1 = var3 < var0;
                        var0 = undefined;
                        if (!var1) {
                            _fun96504_ip = 81;
                            continue _fun96504
                        }
                    case 48:
                        var6 = var4[var3];
                        var5 = _closure1_slot26;
                        var1 = _closure1_slot19;
                        var1 = var1[var6];
                        var1 = var5.bind(var0)(var1);
                        var3 = var3 + 1;
                        var1 = var4.length;
                        if (var3 < var1) {
                            _fun96504_ip = 48;
                            continue _fun96504
                        }
                    case 81:
                        var3 = _closure1_slot27;
                        var1 = false;
                        var1 = var3.bind(var0)(var1);
                        var1 = true;
                        _closure1_slot21 = var1;
                        return var0;
                    case 100:
                        var0 = false;
                        return var0;
                }
            };
            var1.CONNECTION_OPEN = var9;
            var9 = function arg0() {
                _fun96505: for (var _fun96505_ip = 0;;) switch (_fun96505_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.code;
                        var0 = 4004;
                        if (!(var0 === var1)) {
                            _fun96505_ip = 31;
                            continue _fun96505
                        }
                    case 18:
                        var1 = _closure1_slot28;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 31:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.CONNECTION_CLOSED = var9;
            var1.LOGOUT = var8;
            var8 = function arg0() {
                _fun96506: for (var _fun96506_ip = 0;;) switch (_fun96506_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.applicationId;
                        var2 = var0.token;
                        var0 = _closure1_slot19;
                        var0 = var0[var3];
                        var3 = null;
                        if (!(var3 != var0)) {
                            _fun96506_ip = 86;
                            continue _fun96506
                        }
                    case 31:
                        var0.token = var2;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = _closure1_slot16;
                        var1 = _closure1_slot19;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    case 86:
                        var0 = false;
                        return var0;
                }
            };
            var1.ACTIVITY_UPDATE_SUCCESS = var8;
            var3 = function arg0() {
                _fun96507: for (var _fun96507_ip = 0;;) switch (_fun96507_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.applicationId;
                        var0 = _closure1_slot19;
                        var2 = var0[var2];
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun96507_ip = 86;
                            continue _fun96507
                        }
                    case 25:
                        var2.token = var0;
                        var2.updatedAt = var0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = _closure1_slot16;
                        var1 = _closure1_slot19;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    case 86:
                        var0 = false;
                        return var0;
                }
            };
            var1.ACTIVITY_UPDATE_FAIL = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var15 = var3;
            var13 = var1;
            var1 = new var15[var7](var14, var13, var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 21;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/ActivityTrackingStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3484, 1310, 1216, 3485, 3490, 3519, 1672, 660, 667, 587, 3499, 9931, 3631, 3711, 566, 806, 2]);