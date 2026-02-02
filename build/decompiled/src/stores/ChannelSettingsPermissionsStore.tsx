// stores/ChannelSettingsPermissionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun108973: for (var _fun108973_ip = 0;;) switch (_fun108973_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var0 = metroImportAll;
            var _closure1_slot2 = var0;
            var _closure1_slot3 = var5;
            var0 = function() {
                _fun108974: for (var _fun108974_ip = 0;;) switch (_fun108974_ip) {
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
                        _fun108974_ip = 76;
                        continue _fun108974;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot26 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function arg0, arg1() {
                _fun108977: for (var _fun108977_ip = 0;;) switch (_fun108977_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun108977_ip = 46;
                            continue _fun108977
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun108977_ip = 55;
                            continue _fun108977
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun108977_ip = 345;
                            continue _fun108977
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun108977_ip = 323;
                            continue _fun108977
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun108977_ip = 283;
                            continue _fun108977
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun108977_ip = 270;
                            continue _fun108977
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
                            _fun108977_ip = 163;
                            continue _fun108977
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun108977_ip = 179;
                            continue _fun108977
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun108977_ip = 249;
                            continue _fun108977
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun108977_ip = 249;
                            continue _fun108977
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun108977_ip = 234;
                            continue _fun108977
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun108977_ip = 247;
                            continue _fun108977
                        }
                    case 234:
                        var8 = _closure1_slot28;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun108977_ip = 265;
                        continue _fun108977;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun108977_ip = 283;
                        continue _fun108977;
                    case 270:
                        var6 = _closure1_slot28;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun108977_ip = 323;
                            continue _fun108977
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
                            _fun108977_ip = 330;
                            continue _fun108977
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun108978: for (var _fun108978_ip = 0;;) switch (_fun108978_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun108978_ip = 56;
                                        continue _fun108978
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
                                    _fun108978_ip = 67;
                                    continue _fun108978;
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
            var _closure1_slot27 = var0;
            var0 = function arg0, arg1() {
                _fun108979: for (var _fun108979_ip = 0;;) switch (_fun108979_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun108979_ip = 23;
                            continue _fun108979
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun108979_ip = 33;
                            continue _fun108979
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
                            _fun108979_ip = 70;
                            continue _fun108979
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun108979_ip = 55;
                            continue _fun108979
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = function arg0() {
                _fun108980: for (var _fun108980_ip = 0;;) switch (_fun108980_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.getGuildId;
                        var2 = var0.bind(var1)();
                        var0 = {};
                        var5 = var1.permissionOverwrites;
                        var6 = var0;
                        var1 = copyDataProperties(var6, var5);
                        var4 = null;
                        var1 = var4 != var2;
                        if (!var1) {
                            _fun108980_ip = 45;
                            continue _fun108980
                        }
                    case 37:
                        var3 = var0[var2];
                        var1 = var4 == var3;
                    case 45:
                        if (!var1) {
                            _fun108980_ip = 88;
                            continue _fun108980
                        }
                    case 48:
                        var4 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.makeEveryoneOverwrite;
                        var1 = var1.bind(var3)(var2);
                        var0[var2] = var1;
                    case 88:
                        return var0;
                }
            };
            var _closure1_slot29 = var0;
            var8 = function() {
                _fun108981: for (var _fun108981_ip = 0;;) switch (_fun108981_ip) {
                    case 0:
                        var2 = _closure1_slot9;
                        var0 = var2.getChannel;
                        var0 = var0.bind(var2)();
                        _closure1_slot21 = var0;
                        var2 = _closure1_slot9;
                        var0 = var2.getCategory;
                        var0 = var0.bind(var2)();
                        _closure1_slot22 = var0;
                        var0 = _closure1_slot21;
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun108981_ip = 200;
                            continue _fun108981
                        }
                    case 51:
                        var3 = _closure1_slot21;
                        var0 = var3.getGuildId;
                        var3 = var0.bind(var3)();
                        var5 = _closure1_slot29;
                        var4 = _closure1_slot21;
                        var0 = undefined;
                        var5 = var5.bind(var0)(var4);
                        _closure1_slot19 = var5;
                        _closure1_slot20 = var5;
                        var4 = _closure1_slot23;
                        var4 = var5[var4];
                        if (!(var2 == var4)) {
                            _fun108981_ip = 104;
                            continue _fun108981
                        }
                    case 100:
                        _closure1_slot23 = var3;
                    case 104:
                        var3 = _closure1_slot22;
                        var3 = var2 != var3;
                        var _closure1_slot15 = var3;
                        var4 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var3 = 10;
                        var3 = var5[var3];
                        var6 = var4.bind(var0)(var3);
                        var5 = var6.areChannelsLocked;
                        var4 = _closure1_slot21;
                        var3 = _closure1_slot22;
                        var3 = var5.bind(var6)(var4, var3);
                        var _closure1_slot14 = var3;
                        _closure1_slot24 = var2;
                        var2 = false;
                        _closure1_slot18 = var2;
                        var2 = _closure1_slot12;
                        var2 = var2.CLOSED;
                        _closure1_slot17 = var2;
                        var2 = _closure1_slot16;
                        var1 = var2.clear;
                        var1 = var1.bind(var2)();
                        return var0;
                    case 200:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot30 = var8;
            var0 = function arg0() {
                _fun108982: for (var _fun108982_ip = 0;;) switch (_fun108982_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot21;
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun108982_ip = 363;
                            continue _fun108982
                        }
                    case 21:
                        var0 = _closure1_slot21;
                        var0 = var0.id;
                        if (!(var0 === var4)) {
                            _fun108982_ip = 363;
                            continue _fun108982
                        }
                    case 37:
                        var3 = _closure1_slot10;
                        var0 = var3.getChannel;
                        var0 = var0.bind(var3)(var4);
                        _closure1_slot21 = var0;
                        if (!(var2 != var0)) {
                            _fun108982_ip = 359;
                            continue _fun108982
                        }
                    case 62:
                        var3 = _closure1_slot9;
                        var0 = var3.getCategory;
                        var0 = var0.bind(var3)();
                        _closure1_slot22 = var0;
                        var3 = _closure1_slot21;
                        var0 = var3.getGuildId;
                        var0 = var0.bind(var3)();
                        if (!(var2 != var0)) {
                            _fun108982_ip = 355;
                            continue _fun108982
                        }
                    case 101:
                        var6 = _closure1_slot29;
                        var4 = _closure1_slot21;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        _closure1_slot20 = var4;
                        var4 = {};
                        var _closure2_slot0 = var4;
                        var7 = _closure1_slot16;
                        var6 = var7.forEach;
                        var5 = function(arg0) { // Environment: var5
                            _fun108983: for (var _fun108983_ip = 0;;) switch (_fun108983_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure1_slot19;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun108983_ip = 35;
                                        continue _fun108983
                                    }
                                case 16:
                                    var1 = _closure2_slot0;
                                    var0 = _closure1_slot19;
                                    var0 = var0[var2];
                                    var1[var2] = var0;
                                case 35:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var6.bind(var7)(var5);
                        var5 = var4[var0];
                        var5 = var2 == var5;
                        if (!var5) {
                            _fun108982_ip = 176;
                            continue _fun108982
                        }
                    case 158:
                        var6 = _closure1_slot21;
                        var6 = var6.permissionOverwrites;
                        var6 = var6[var0];
                        var5 = var2 == var6;
                    case 176:
                        if (!var5) {
                            _fun108982_ip = 214;
                            continue _fun108982
                        }
                    case 179:
                        var6 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var5 = 10;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.makeEveryoneOverwrite;
                        var5 = var5.bind(var6)(var0);
                        var4[var0] = var5;
                    case 214:
                        var5 = {};
                        var6 = _closure1_slot21;
                        var8 = var6.permissionOverwrites;
                        var9 = var5;
                        var6 = copyDataProperties(var9, var8);
                        var9 = var5;
                        var8 = var4;
                        var4 = copyDataProperties(var9, var8);
                        _closure1_slot19 = var5;
                        var4 = _closure1_slot23;
                        var4 = var5[var4];
                        if (!(var2 != var4)) {
                            _fun108982_ip = 303;
                            continue _fun108982
                        }
                    case 259:
                        var4 = _closure1_slot24;
                        var4 = var2 != var4;
                        if (!var4) {
                            _fun108982_ip = 286;
                            continue _fun108982
                        }
                    case 270:
                        var6 = _closure1_slot19;
                        var5 = _closure1_slot24;
                        var5 = var6[var5];
                        var4 = var2 != var5;
                    case 286:
                        if (!var4) {
                            _fun108982_ip = 307;
                            continue _fun108982
                        }
                    case 289:
                        var4 = _closure1_slot24;
                        _closure1_slot23 = var4;
                        _closure1_slot24 = var2;
                        _fun108982_ip = 307;
                        continue _fun108982;
                    case 303:
                        _closure1_slot23 = var0;
                    case 307:
                        var2 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var0 = 10;
                        var0 = var4[var0];
                        var4 = var2.bind(var3)(var0);
                        var3 = var4.areChannelsLocked;
                        var2 = _closure1_slot21;
                        var0 = _closure1_slot22;
                        var0 = var3.bind(var4)(var2, var0);
                        _closure1_slot14 = var0;
                        var0 = true;
                        return var0;
                    case 355:
                        var0 = false;
                        return var0;
                    case 359:
                        var0 = false;
                        return var0;
                    case 363:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot31 = var0;
            var7 = global;
            var10 = var7.Object;
            var9 = var10.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 4;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 5;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot9 = var1;
            var1 = 6;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot10 = var1;
            var1 = 7;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var9 = var1.ChannelSettingsSections;
            var _closure1_slot11 = var9;
            var1 = var1.FormStates;
            var _closure1_slot12 = var1;
            var9 = 8;
            var9 = var5[var9];
            var9 = var4.bind(var0)(var9);
            var10 = var9.ADVANCED_MODE_ON_KEY;
            var _closure1_slot13 = var10;
            var7 = var7.Set;
            var9 = var7.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var7
                }
            });
            var14 = var9;
            var7 = new var14[var7](var13);
            var7 = var7 instanceof Object ? var7 : var9;
            var _closure1_slot16 = var7;
            var1 = var1.CLOSED;
            var _closure1_slot17 = var1;
            var7 = false;
            var _closure1_slot18 = var7;
            var1 = null;
            var _closure1_slot19 = var1;
            var _closure1_slot20 = var1;
            var _closure1_slot21 = var1;
            var _closure1_slot22 = var1;
            var _closure1_slot23 = var1;
            var _closure1_slot24 = var1;
            var1 = 9;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var9 = var1.Storage;
            var1 = var9.get;
            var1 = var1.bind(var9)(var10);
            if (var1) {
                _fun108973_ip = 403;
                continue _fun108973
            }
        case 401:
            var1 = false;
        case 403:
            var _closure1_slot25 = var1;
            var1 = 12;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var7 = var1.Store;
            var1 = function(arg0) { // Environment: var3
                var3 = function() {
                    _fun108985: for (var _fun108985_ip = 0;;) switch (_fun108985_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot4;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot7;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot6;
                            var0 = _closure1_slot26;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun108985_ip = 69;
                                continue _fun108985
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun108985_ip = 105;
                            continue _fun108985;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot7;
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
                var4 = _closure1_slot8;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot5;
                var4 = {};
                var0 = 'initialize';
                var4.key = var0;
                var0 = function() {
                    var3 = this;
                    var2 = var3.waitFor;
                    var1 = _closure1_slot9;
                    var0 = _closure1_slot10;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(13);
                var0[0] = var4;
                var4 = {};
                var6 = 'hasChanges';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot18;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'showNotice';
                var4.key = var6;
                var6 = function() {
                    var1 = this;
                    var0 = var1.hasChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'getPermissionOverwrite';
                var4.key = var6;
                var6 = function arg0() {
                    _fun108989: for (var _fun108989_ip = 0;;) switch (_fun108989_ip) {
                        case 0:
                            var2 = _closure1_slot19;
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun108989_ip = 25;
                                continue _fun108989
                            }
                        case 18:
                            var1 = arg0;
                            var0 = var2[var1];
                        case 25:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'editedPermissionIds';
                var4.key = var6;
                var6 = function() {
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var0 = _closure1_slot16;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.get = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'permissionOverwrites';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot19;
                    return var0;
                };
                var4.get = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'selectedOverwriteId';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot23;
                    return var0;
                };
                var4.get = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'formState';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot17;
                    return var0;
                };
                var4.get = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'isLockable';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot15;
                    return var0;
                };
                var4.get = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'locked';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot14;
                    return var0;
                };
                var4.get = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'channel';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot21;
                    return var0;
                };
                var4.get = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'category';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot22;
                    return var0;
                };
                var4.get = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'advancedMode';
                var4.key = var6;
                var5 = function() {
                    var0 = _closure1_slot25;
                    return var0;
                };
                var4.get = var5;
                var0[12] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var1.bind(var0)(var7);
            var1 = 'ChannelSettingsPermissionsStore';
            var7.displayName = var1;
            var1 = 13;
            var1 = var5[var1];
            var13 = var6.bind(var0)(var1);
            var1 = {};
            var9 = function arg0() {
                _fun108999: for (var _fun108999_ip = 0;;) switch (_fun108999_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.section;
                        var3 = _closure1_slot21;
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun108999_ip = 47;
                            continue _fun108999
                        }
                    case 21:
                        var1 = _closure1_slot11;
                        var1 = var1.PERMISSIONS;
                        if (!(var2 === var1)) {
                            _fun108999_ip = 47;
                            continue _fun108999
                        }
                    case 35:
                        var1 = _closure1_slot30;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    case 47:
                        var0 = false;
                        return var0;
                }
            };
            var1.CHANNEL_SETTINGS_SET_SECTION = var9;
            var1.CHANNEL_SETTINGS_PERMISSIONS_INIT = var8;
            var8 = function arg0() {
                _fun109000: for (var _fun109000_ip = 0;;) switch (_fun109000_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.id;
                        var6 = var0.allow;
                        var5 = var0.deny;
                        var3 = _closure1_slot19;
                        var7 = null;
                        var8 = var7 == var3;
                        var0 = undefined;
                        var1 = undefined;
                        if (var8) {
                            _fun109000_ip = 44;
                            continue _fun109000
                        }
                    case 40:
                        var1 = var3[var4];
                    case 44:
                        if (!(var7 != var1)) {
                            _fun109000_ip = 231;
                            continue _fun109000
                        }
                    case 51:
                        var3 = _closure1_slot21;
                        if (!(var7 != var3)) {
                            _fun109000_ip = 231;
                            continue _fun109000
                        }
                    case 62:
                        var3 = {};
                        var10 = var3;
                        var9 = var1;
                        var1 = copyDataProperties(var10, var9);
                        var1 = 'allow';
                        var3[var1] = var6;
                        var1 = 'deny';
                        var3[var1] = var5;
                        var1 = {};
                        var9 = _closure1_slot19;
                        var10 = var1;
                        var5 = copyDataProperties(var10, var9);
                        var1[var4] = var3;
                        _closure1_slot19 = var1;
                        var3 = _closure1_slot16;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var4);
                        var1 = _closure1_slot12;
                        var1 = var1.OPEN;
                        _closure1_slot17 = var1;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 11;
                        var1 = var4[var1];
                        var6 = var3.bind(var0)(var1);
                        var5 = var6.isEqual;
                        var3 = _closure1_slot19;
                        var1 = _closure1_slot20;
                        var1 = var5.bind(var6)(var3, var1);
                        var1 = !var1;
                        _closure1_slot18 = var1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var4[var1];
                        var5 = var3.bind(var0)(var1);
                        var4 = var5.areChannelsLocked;
                        var3 = _closure1_slot21;
                        var1 = _closure1_slot22;
                        var1 = var4.bind(var5)(var3, var1);
                        _closure1_slot14 = var1;
                        return var0;
                    case 231:
                        var0 = false;
                        return var0;
                }
            };
            var1.CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION = var8;
            var8 = function arg0() {
                _fun109001: for (var _fun109001_ip = 0;;) switch (_fun109001_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.id;
                        var2 = _closure1_slot19;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun109001_ip = 33;
                            continue _fun109001
                        }
                    case 21:
                        var2 = _closure1_slot19;
                        var2 = var2[var1];
                        if (!(var3 == var2)) {
                            _fun109001_ip = 51;
                            continue _fun109001
                        }
                    case 33:
                        var2 = _closure1_slot21;
                        if (!(var3 != var2)) {
                            _fun109001_ip = 47;
                            continue _fun109001
                        }
                    case 41:
                        _closure1_slot24 = var1;
                        _fun109001_ip = 55;
                        continue _fun109001;
                    case 47:
                        var2 = false;
                        return var2;
                    case 51:
                        _closure1_slot23 = var1;
                    case 55:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION = var8;
            var8 = function() {
                _fun109002: for (var _fun109002_ip = 0;;) switch (_fun109002_ip) {
                    case 0:
                        var2 = _closure1_slot9;
                        var1 = var2.getSection;
                        var2 = var1.bind(var2)();
                        var1 = _closure1_slot11;
                        var1 = var1.PERMISSIONS;
                        if (!(var2 === var1)) {
                            _fun109002_ip = 41;
                            continue _fun109002
                        }
                    case 31:
                        var1 = _closure1_slot30;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 41:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.CHANNEL_SETTINGS_INIT = var8;
            var8 = function() {
                var0 = _closure1_slot12;
                var0 = var0.CLOSED;
                _closure1_slot17 = var0;
                var0 = null;
                _closure1_slot19 = var0;
                _closure1_slot20 = var0;
                _closure1_slot21 = var0;
                _closure1_slot22 = var0;
                var2 = false;
                _closure1_slot18 = var2;
                var3 = _closure1_slot16;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                _closure1_slot23 = var0;
                _closure1_slot24 = var0;
                var0 = undefined;
                return var0;
            };
            var1.CHANNEL_SETTINGS_CLOSE = var8;
            var8 = function arg0() {
                _fun109004: for (var _fun109004_ip = 0;;) switch (_fun109004_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.channels;
                        var2 = _closure1_slot21;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun109004_ip = 99;
                            continue _fun109004
                        }
                    case 22:
                        var0 = _closure1_slot27;
                        var7 = undefined;
                        var6 = var0.bind(var7)(var1);
                        var0 = var6.bind(var7)();
                        var1 = var0.done;
                        var5 = false;
                        var3 = var0;
                        var2 = false;
                        var0 = false;
                        if (var1) {
                            _fun109004_ip = 97;
                            continue _fun109004
                        }
                    case 54:
                        var9 = _closure1_slot31;
                        var1 = var3.value;
                        var1 = var1.id;
                        var1 = var9.bind(var7)(var1);
                        if (!(var5 !== var1)) {
                            _fun109004_ip = 79;
                            continue _fun109004
                        }
                    case 77:
                        var2 = true;
                    case 79:
                        var10 = var6.bind(var7)();
                        var1 = var10.done;
                        var3 = var10;
                        var0 = var2;
                        if (!var1) {
                            _fun109004_ip = 54;
                            continue _fun109004
                        }
                    case 97:
                        return var0;
                    case 99:
                        var0 = false;
                        return var0;
                }
            };
            var1.CHANNEL_UPDATES = var8;
            var8 = function() {
                var0 = _closure1_slot12;
                var0 = var0.SUBMITTING;
                _closure1_slot17 = var0;
                var0 = undefined;
                return var0;
            };
            var1.CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING = var8;
            var8 = function arg0() {
                _fun109006: for (var _fun109006_ip = 0;;) switch (_fun109006_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.silent;
                        var0 = _closure1_slot12;
                        if (var2) {
                            _fun109006_ip = 41;
                            continue _fun109006
                        }
                    case 19:
                        var2 = var0.CLOSED;
                        _closure1_slot17 = var2;
                        var3 = _closure1_slot30;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        _fun109006_ip = 51;
                        continue _fun109006;
                    case 41:
                        var0 = var0.OPEN;
                        _closure1_slot17 = var0;
                    case 51:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS = var8;
            var3 = function arg0() {
                var0 = arg0;
                var4 = var0.advancedMode;
                _closure1_slot25 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.Storage;
                var2 = var3.set;
                var1 = _closure1_slot13;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            };
            var1.CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var14 = var3;
            var12 = var1;
            var1 = new var14[var7](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 14;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/ChannelSettingsPermissionsStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6430, 1372, 660, 5883, 587, 3057, 22, 566, 806, 2]);