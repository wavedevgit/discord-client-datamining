// ../discord_common/js/packages/apex/BaseApexExperimentStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun13230: for (var _fun13230_ip = 0;;) switch (_fun13230_ip) {
        case 0:
            var4 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun13231: for (var _fun13231_ip = 0;;) switch (_fun13231_ip) {
                    case 0:
                        var6 = arg0;
                        var3 = 'object';
                        var0 = typeof var6;
                        var1 = var6;
                        if (!(var3 === var0)) {
                            _fun13231_ip = 119;
                            continue _fun13231
                        }
                    case 17:
                        var1 = var6;
                        if (!var1) {
                            _fun13231_ip = 119;
                            continue _fun13231
                        }
                    case 23:
                        var0 = global;
                        var2 = var0.Symbol;
                        var2 = var2.toPrimitive;
                        var5 = var6[var2];
                        var4 = undefined;
                        if (!(var4 === var5)) {
                            _fun13231_ip = 60;
                            continue _fun13231
                        }
                    case 47:
                        var2 = var0.String;
                        var1 = var2.bind(var4)(var6);
                        _fun13231_ip = 119;
                        continue _fun13231;
                    case 60:
                        var4 = var5.call;
                        var2 = 'string';
                        var4 = var4.bind(var5)(var6, var2);
                        var2 = typeof var4;
                        var1 = var4;
                        if (!(var3 === var2)) {
                            _fun13231_ip = 119;
                            continue _fun13231
                        }
                    case 85:
                        var3 = var0.TypeError;
                        var0 = var3.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = '@@toPrimitive must return a primitive value.';
                        var9 = var2;
                        var0 = new var9[var3](var8, var7);
                        var0 = var0 instanceof Object ? var0 : var2;
                        throw var0;
                    case 119:
                        var3 = 'symbol';
                        var2 = typeof var1;
                        var0 = var1;
                        if (!(var3 !== var2)) {
                            _fun13231_ip = 136;
                            continue _fun13231
                        }
                    case 133:
                        var0 = '' + var1;
                    case 136:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function arg0, arg1() {
                _fun13232: for (var _fun13232_ip = 0;;) switch (_fun13232_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun13232_ip = 46;
                            continue _fun13232
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun13232_ip = 55;
                            continue _fun13232
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun13232_ip = 343;
                            continue _fun13232
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun13232_ip = 323;
                            continue _fun13232
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun13232_ip = 283;
                            continue _fun13232
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun13232_ip = 270;
                            continue _fun13232
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
                            _fun13232_ip = 163;
                            continue _fun13232
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun13232_ip = 179;
                            continue _fun13232
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun13232_ip = 249;
                            continue _fun13232
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun13232_ip = 249;
                            continue _fun13232
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun13232_ip = 234;
                            continue _fun13232
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun13232_ip = 247;
                            continue _fun13232
                        }
                    case 234:
                        var8 = _closure1_slot27;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun13232_ip = 265;
                        continue _fun13232;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun13232_ip = 283;
                        continue _fun13232;
                    case 270:
                        var6 = _closure1_slot27;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun13232_ip = 323;
                            continue _fun13232
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
                            _fun13232_ip = 330;
                            continue _fun13232
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun13233: for (var _fun13233_ip = 0;;) switch (_fun13233_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun13233_ip = 56;
                                        continue _fun13233
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
                                    _fun13233_ip = 67;
                                    continue _fun13233;
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
                    case 343:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function arg0, arg1() {
                _fun13234: for (var _fun13234_ip = 0;;) switch (_fun13234_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun13234_ip = 23;
                            continue _fun13234
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun13234_ip = 33;
                            continue _fun13234
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
                            _fun13234_ip = 70;
                            continue _fun13234
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun13234_ip = 55;
                            continue _fun13234
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var0 = function() {
                _fun13235: for (var _fun13235_ip = 0;;) switch (_fun13235_ip) {
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
                    case 70: // try_end0
                        _fun13235_ip = 74;
                        continue _fun13235;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot28 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = function arg0() {
                _fun13238: for (var _fun13238_ip = 0;;) switch (_fun13238_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot24;
                        var0 = var0[var3];
                        var1 = null;
                        if (!(var1 == var0)) {
                            _fun13238_ip = 64;
                            continue _fun13238
                        }
                    case 20:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 11;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var1 = var4.v3;
                        var1 = var1.bind(var4)(var3);
                        var2 = _closure1_slot24;
                        var2[var3] = var1;
                        var0 = var1;
                    case 64:
                        return var0;
                }
            };
            var _closure1_slot29 = var0;
            var6 = global;
            var9 = var6.Object;
            var8 = var9.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var7.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.WebAnalyticsEvents;
            var _closure1_slot10 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var8 = var3.Logger;
            var3 = var8.prototype;
            var9 = Object.create(var3, {
                constructor: {
                    value: var8
                }
            });
            var3 = 'ApexExperimentStore';
            var14 = var9;
            var13 = var3;
            var8 = new var14[var8](var13, var12);
            var8 = var8 instanceof Object ? var8 : var9;
            var _closure1_slot11 = var8;
            var8 = var6.window;
            var8 = var8.TextEncoder;
            var10 = null;
            var8 = var10 != var8;
            if (!var8) {
                _fun13230_ip = 326;
                continue _fun13230
            }
        case 310:
            var9 = var6.window;
            var9 = var9.TextDecoder;
            var8 = var10 != var9;
        case 326:
            if (var8) {
                _fun13230_ip = 341;
                continue _fun13230
            }
        case 329:
            var8 = 9;
            var8 = var5[var8];
            var8 = var4.bind(var0)(var8);
        case 341:
            var9 = 10;
            var8 = var5[var9];
            var8 = var4.bind(var0)(var8);
            var8 = var8.UnitType;
            var10 = var8.User;
            var8 = new Array(2);
            var8[0] = var10;
            var9 = var5[var9];
            var9 = var4.bind(var0)(var9);
            var9 = var9.UnitType;
            var9 = var9.Installation;
            var8[1] = var9;
            var _closure1_slot12 = var8;
            var8 = {};
            var9 = {};
            var8.user = var9;
            var9 = {};
            var8.guild = var9;
            var9 = {};
            var8.installation = var9;
            var _closure1_slot13 = var8;
            var8 = {};
            var _closure1_slot14 = var8;
            var8 = {};
            var _closure1_slot15 = var8;
            var8 = {};
            var _closure1_slot16 = var8;
            var8 = {};
            var _closure1_slot17 = var8;
            var8 = {};
            var _closure1_slot18 = var8;
            var8 = var6.Set;
            var9 = var8.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var8
                }
            });
            var14 = var9;
            var8 = new var14[var8](var13);
            var8 = var8 instanceof Object ? var8 : var9;
            var _closure1_slot19 = var8;
            var6 = var6.Set;
            var8 = var6.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var6
                }
            });
            var14 = var8;
            var6 = new var14[var6](var13);
            var6 = var6 instanceof Object ? var6 : var8;
            var _closure1_slot20 = var6;
            var6 = 'apexTrackedExposures';
            var _closure1_slot21 = var6;
            var6 = 604800000;
            var _closure1_slot22 = var6;
            var6 = {};
            var _closure1_slot23 = var6;
            var6 = {};
            var _closure1_slot24 = var6;
            var6 = 13;
            var6 = var5[var6];
            var6 = var7.bind(var0)(var6);
            var6 = var6.PersistedStore;
            var1 = function(arg0) { // Environment: var1
                var3 = function arg0() {
                    _fun13240: for (var _fun13240_ip = 0;;) switch (_fun13240_ip) {
                        case 0:
                            var3 = this;
                            var11 = 0;
                            var0 = copyRestArgs(var11);
                            var6 = _closure1_slot5;
                            var1 = _closure2_slot0;
                            var2 = undefined;
                            var6 = var6.bind(var2)(var3, var1);
                            var8 = new Array(0);
                            var11 = var8;
                            var10 = var0;
                            var9 = 0;
                            var0 = arraySpread(var11, var10, var9);
                            var0 = _closure1_slot8;
                            var7 = var0.bind(var2)(var1);
                            var1 = _closure1_slot7;
                            var0 = _closure1_slot28;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun13240_ip = 84;
                                continue _fun13240
                            }
                        case 71:
                            var0 = var7.apply;
                            var0 = var0.bind(var7)(var3, var8);
                            _fun13240_ip = 118;
                            continue _fun13240;
                        case 84:
                            var5 = global;
                            var6 = var5.Reflect;
                            var5 = var6.construct;
                            var4 = _closure1_slot8;
                            var4 = var4.bind(var2)(var3);
                            var4 = var4.constructor;
                            var0 = var5.bind(var6)(var7, var8, var4);
                        case 118:
                            var0 = var1.bind(var2)(var3, var0);
                            var1 = function() { // Environment: var1
                                var0 = global;
                                var1 = var0.Promise;
                                var0 = var1.resolve;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0.track = var1;
                            var1 = 'unset';
                            var0.surface = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot6;
                var4 = {};
                var0 = 'loadStoredState';
                var4.key = var0;
                var0 = function arg0, arg1() {
                    _fun13242: for (var _fun13242_ip = 0;;) switch (_fun13242_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = arg1;
                            var3 = this;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun13242_ip = 28;
                                continue _fun13242
                            }
                        case 15:
                            var4 = var0.version;
                            var2 = 3;
                            if (!(var2 !== var4)) {
                                _fun13242_ip = 96;
                                continue _fun13242
                            }
                        case 28:
                            var1 = var1 != var0;
                            if (!var1) {
                                _fun13242_ip = 48;
                                continue _fun13242
                            }
                        case 35:
                            var4 = var0.version;
                            var2 = 2;
                            var1 = var2 === var4;
                        case 48:
                            if (!var1) {
                                _fun13242_ip = 119;
                                continue _fun13242
                            }
                        case 51:
                            var1 = var0.clientOverrides;
                            _closure1_slot15 = var1;
                            var1 = {};
                            var16 = var0.evaluatedExperiments;
                            var17 = var1;
                            var4 = copyDataProperties(var17, var16);
                            var5 = {};
                            var4 = 'installation';
                            var1[var4] = var5;
                            _closure1_slot13 = var1;
                            _fun13242_ip = 119;
                            continue _fun13242;
                        case 96:
                            var2 = var0.clientOverrides;
                            _closure1_slot15 = var2;
                            var0 = var0.evaluatedExperiments;
                            _closure1_slot13 = var0;
                        case 119:
                            var0 = {};
                            _closure1_slot17 = var0;
                            var8 = var10;
                            var0 = undefined;
                            var4 = true;
                            var1 = false;
                            for (var5 in var8)
                                case 145: {
                                    case 154: var13 = var5;
                                    var11 = _closure1_slot29;
                                    var15 = var11.bind(var0)(var13);
                                    var14 = var10[var13];
                                    var12 = _closure1_slot17;
                                    var11 = {};
                                    var11.hashedName = var15;
                                    var11.variantId = var14;
                                    var11.isOverride = var4;
                                    var11.exposureTrackingEnabled = var1;
                                    var12[var13] = var11;
                                    _fun13242_ip = 145;
                                    continue _fun13242;
                                }
                        case 202:
                            var1 = var3.loadTrackedExposures;
                            var1 = var1.bind(var3)();
                            _closure1_slot23 = var1;
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(41);
                var0[0] = var4;
                var4 = {};
                var6 = 'getState';
                var4.key = var6;
                var6 = function() {
                    var0 = {};
                    var1 = 3;
                    var0.version = var1;
                    var2 = _closure1_slot13;
                    var0.evaluatedExperiments = var2;
                    var1 = _closure1_slot15;
                    var0.clientOverrides = var1;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'setExperimentAssignments';
                var4.key = var6;
                var6 = function arg0() {
                    _fun13244: for (var _fun13244_ip = 0;;) switch (_fun13244_ip) {
                        case 0:
                            var25 = arg0;
                            var1 = this;
                            var24 = null;
                            if (!(var24 != var25)) {
                                _fun13244_ip = 718;
                                continue _fun13244
                            }
                        case 15:
                            var0 = var1.clearSessionOverrides;
                            var0 = var0.bind(var1)();
                            var22 = _closure1_slot12;
                            var0 = var22.length;
                            var21 = 0;
                            var0 = var21 < var0;
                            var20 = undefined;
                            var19 = 10;
                            var18 = 5;
                            var17 = 1;
                            var16 = 2;
                            var15 = 3;
                            var14 = 4;
                            var13 = 0;
                            var12 = undefined;
                            var11 = undefined;
                            var10 = undefined;
                            var9 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var4 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            var1 = undefined;
                            if (!var0) {
                                _fun13244_ip = 714;
                                continue _fun13244
                            }
                        case 95:
                            var26 = var22[var13];
                            var27 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var19];
                            var0 = var27.bind(var20)(var0);
                            var0 = var0.UnitTypeToKind;
                            var38 = var0[var26];
                            var0 = var25.assignments;
                            var61 = var0[var26];
                            var37 = var12;
                            var36 = var11;
                            var35 = var10;
                            var34 = var9;
                            var33 = var8;
                            var32 = var7;
                            var31 = var6;
                            var30 = var5;
                            var29 = var4;
                            var28 = var3;
                            var27 = var2;
                            var26 = var1;
                            if (!(var24 != var61)) {
                                _fun13244_ip = 663;
                                continue _fun13244
                            }
                        case 179:
                            var37 = var12;
                            var36 = var11;
                            var35 = var10;
                            var34 = var9;
                            var33 = var8;
                            var32 = var7;
                            var31 = var6;
                            var30 = var5;
                            var29 = var4;
                            var28 = var3;
                            var27 = var2;
                            var26 = var1;
                            if (!(var24 != var38)) {
                                _fun13244_ip = 663;
                                continue _fun13244
                            }
                        case 222:
                            var0 = _closure1_slot13;
                            var60 = var0[var38];
                            var58 = var61;
                            var54 = var11;
                            var53 = var10;
                            var52 = var9;
                            var51 = var8;
                            var50 = var7;
                            var49 = var6;
                            var48 = var5;
                            var47 = var4;
                            var46 = var3;
                            var45 = var2;
                            var44 = var1;
                            var37 = var60;
                            var36 = var54;
                            var35 = var53;
                            var34 = var52;
                            var33 = var51;
                            var32 = var50;
                            var31 = var49;
                            var30 = var48;
                            var29 = var47;
                            var28 = var46;
                            var27 = var45;
                            var26 = var44;
                            for (var55 in var58)
                                case 313: {
                                    var36 = var54;
                                    var35 = var53;
                                    var34 = var52;
                                    var33 = var51;
                                    var32 = var50;
                                    var31 = var49;
                                    var37 = var60;
                                    var30 = var48;
                                    var29 = var47;
                                    var28 = var46;
                                    var27 = var45;
                                    var26 = var44;
                                    case 361: var43 = var55;
                                    var38 = _closure1_slot20;
                                    var0 = var38.add;
                                    var0 = var0.bind(var38)(var43);
                                    var0 = var61[var43];
                                    var42 = var0.evaluation_id;
                                    var41 = var0.assignments;
                                    var40 = {};
                                    var38 = var24 != var42;
                                    var0 = undefined;
                                    if (!var38) {
                                        _fun13244_ip = 408;
                                        continue _fun13244
                                    }
                                    case 405: var0 = var42;
                                    case 408: var40.evaluationId = var0;
                                    var0 = {};
                                    var40.assignments = var0;
                                    var60[var43] = var40;
                                    var0 = _closure1_slot26;
                                    var39 = var0.bind(var20)(var41);
                                    var38 = var39.bind(var20)();
                                    var0 = var38.done;
                                    var54 = var43;
                                    var53 = var42;
                                    var52 = var41;
                                    var51 = var40;
                                    var50 = var38;
                                    var49 = var39;
                                    var38 = var50;
                                    if (var0) {
                                        _fun13244_ip = 313;
                                        continue _fun13244
                                    }
                                    case 469: var62 = var38.value;
                                    var0 = _closure1_slot4;
                                    var0 = var0.bind(var20)(var62, var18);
                                    var48 = var0[var21];
                                    var47 = var0[var17];
                                    var46 = var0[var16];
                                    var45 = var0[var15];
                                    var44 = var0[var14];
                                    if (!(var46 == var24)) {
                                        _fun13244_ip = 510;
                                        continue _fun13244
                                    }
                                    case 508: var46 = 0;
                                    case 510: var62 = var40.assignments;
                                    var0 = {};
                                    var0.hashedName = var48;
                                    var0.variantId = var47;
                                    var0.trackedVariantId = var44;
                                    var64 = _closure1_slot0;
                                    var63 = _closure1_slot2;
                                    var65 = var63[var19];
                                    var65 = var64.bind(var20)(var65);
                                    var65 = var65.ExperimentFlags;
                                    var65 = var65.IsOverride;
                                    var65 = var46 & var65;
                                    var65 = !var65;
                                    var65 = !var65;
                                    var0.isOverride = var65;
                                    var0.revision = var45;
                                    var63 = var63[var19];
                                    var63 = var64.bind(var20)(var63);
                                    var63 = var63.ExperimentFlags;
                                    var63 = var63.ExposureTrackingEnabled;
                                    var63 = var46 & var63;
                                    var63 = !var63;
                                    var63 = !var63;
                                    var0.exposureTrackingEnabled = var63;
                                    var62[var48] = var0;
                                    var62 = var39.bind(var20)();
                                    var0 = var62.done;
                                    var54 = var43;
                                    var53 = var42;
                                    var52 = var41;
                                    var51 = var40;
                                    var50 = var62;
                                    var49 = var39;
                                    var38 = var50;
                                    if (var0) {
                                        _fun13244_ip = 313;
                                        continue _fun13244
                                    }
                                    case 658: _fun13244_ip = 469;
                                    continue _fun13244;
                                }
                        case 663:
                            var13 = var13 + 1;
                            var0 = var22.length;
                            var12 = var37;
                            var11 = var36;
                            var10 = var35;
                            var9 = var34;
                            var8 = var33;
                            var7 = var32;
                            var6 = var31;
                            var5 = var30;
                            var4 = var29;
                            var3 = var28;
                            var2 = var27;
                            var1 = var26;
                            if (var13 < var0) {
                                _fun13244_ip = 95;
                                continue _fun13244
                            }
                        case 714:
                            var0 = true;
                            return var0;
                        case 718:
                            var0 = false;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'createOverride';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var4 = arg0;
                    var3 = this;
                    var2 = {};
                    var7 = _closure1_slot15;
                    var8 = var2;
                    var0 = copyDataProperties(var8, var7);
                    var5 = {};
                    var6 = _closure1_slot29;
                    var0 = undefined;
                    var6 = var6.bind(var0)(var4);
                    var5.hashedName = var6;
                    var6 = arg1;
                    var5.variantId = var6;
                    var6 = true;
                    var5.isOverride = var6;
                    var6 = false;
                    var5.exposureTrackingEnabled = var6;
                    var2[var4] = var5;
                    _closure1_slot15 = var2;
                    var2 = var3.trackExposureSuppression;
                    var1 = 'client_override';
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'deleteOverride';
                var4.key = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var4 = _closure1_slot15;
                    var1 = var4[var0];
                    var3 = _closure1_slot3;
                    var5 = new Array(1);
                    var5[0] = var0;
                    var1 = var5.map;
                    var0 = _closure1_slot25;
                    var1 = var1.bind(var5)(var0);
                    var0 = undefined;
                    var1 = var3.bind(var0)(var4, var1);
                    _closure1_slot15 = var1;
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'createSessionOverride';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var4 = arg0;
                    var2 = {};
                    var6 = _closure1_slot16;
                    var7 = var2;
                    var0 = copyDataProperties(var7, var6);
                    var3 = {};
                    var5 = _closure1_slot29;
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var3.hashedName = var5;
                    var5 = arg1;
                    var3.variantId = var5;
                    var5 = true;
                    var3.isOverride = var5;
                    var5 = false;
                    var3.exposureTrackingEnabled = var5;
                    var2[var4] = var3;
                    _closure1_slot16 = var2;
                    return var0;
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'deleteSessionOverride';
                var4.key = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var4 = _closure1_slot16;
                    var1 = var4[var0];
                    var3 = _closure1_slot3;
                    var5 = new Array(1);
                    var5[0] = var0;
                    var1 = var5.map;
                    var0 = _closure1_slot25;
                    var1 = var1.bind(var5)(var0);
                    var0 = undefined;
                    var1 = var3.bind(var0)(var4, var1);
                    _closure1_slot16 = var1;
                    return var0;
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'setExperimentsMetadata';
                var4.key = var6;
                var6 = function arg0() {
                    var6 = arg0;
                    var1 = {};
                    var7 = _closure1_slot18;
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.fromEntries;
                    var5 = var6.map;
                    var2 = function(arg0) { // Environment: var2
                        var1 = arg0;
                        var2 = var1.name;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var2 = var5.bind(var6)(var2);
                    var7 = var3.bind(var4)(var2);
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    _closure1_slot18 = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'getExperimentsMetadata';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot18;
                    return var0;
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'getClientOverrides';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot15;
                    return var0;
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'getSessionOverrides';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot16;
                    return var0;
                };
                var4.value = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'getExperimentClientOverride';
                var4.key = var6;
                var6 = function arg0() {
                    var1 = _closure1_slot15;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'getExperimentSessionOverride';
                var4.key = var6;
                var6 = function arg0() {
                    var1 = _closure1_slot16;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[12] = var4;
                var4 = {};
                var6 = 'handleLogout';
                var4.key = var6;
                var6 = function arg0() {
                    _fun13256: for (var _fun13256_ip = 0;;) switch (_fun13256_ip) {
                        case 0:
                            var2 = this;
                            var0 = arg0;
                            if (var0) {
                                _fun13256_ip = 29;
                                continue _fun13256
                            }
                        case 9:
                            var0 = var2.clearUserServerAssignments;
                            var0 = var0.bind(var2)();
                            var0 = var2.clearSessionOverrides;
                            var0 = var0.bind(var2)();
                        case 29:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 12;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var4 = var3.Storage;
                            var3 = var4.remove;
                            var1 = _closure1_slot21;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.clearAllTrackedExposures;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var4.value = var6;
                var0[13] = var4;
                var4 = {};
                var6 = 'registerExperiment';
                var4.key = var6;
                var6 = function arg0() {
                    _fun13257: for (var _fun13257_ip = 0;;) switch (_fun13257_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = this;
                            var4 = _closure1_slot14;
                            var2 = var0.name;
                            var4[var2] = var0;
                            var2 = _closure1_slot17;
                            var1 = var0.name;
                            var2 = var2[var1];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun13257_ip = 64;
                                continue _fun13257
                            }
                        case 41:
                            var2 = var3.trackExposureSuppression;
                            var1 = var0.name;
                            var0 = 'cookie_override';
                            var0 = var2.bind(var3)(var1, var0);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[14] = var4;
                var4 = {};
                var6 = 'getRegisteredExperiments';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot14;
                    return var0;
                };
                var4.value = var6;
                var0[15] = var4;
                var4 = {};
                var6 = 'getAssignment';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun13259: for (var _fun13259_ip = 0;;) switch (_fun13259_ip) {
                        case 0:
                            var5 = arg2;
                            var4 = this;
                            var0 = var4.getOverride;
                            var0 = var0.bind(var4)(var5);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun13259_ip = 42;
                                continue _fun13259
                            }
                        case 23:
                            var3 = var4.getServerAssignment;
                            var2 = arg0;
                            var1 = arg1;
                            var0 = var3.bind(var4)(var2, var1, var5);
                        case 42:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[16] = var4;
                var4 = {};
                var6 = 'getServerAssignment';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun13260: for (var _fun13260_ip = 0;;) switch (_fun13260_ip) {
                        case 0:
                            var3 = _closure1_slot29;
                            var2 = undefined;
                            var1 = arg2;
                            var1 = var3.bind(var2)(var1);
                            var3 = _closure1_slot13;
                            var0 = arg0;
                            var3 = var3[var0];
                            var0 = arg1;
                            var0 = var3[var0];
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun13260_ip = 43;
                                continue _fun13260
                            }
                        case 41:
                            return var2;
                        case 43:
                            var0 = var0.assignments;
                            var0 = var0[var1];
                            return var0;
                    }
                };
                var4.value = var6;
                var0[17] = var4;
                var4 = {};
                var6 = 'getEvaluation';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun13261: for (var _fun13261_ip = 0;;) switch (_fun13261_ip) {
                        case 0:
                            var1 = _closure1_slot13;
                            var0 = arg0;
                            var1 = var1[var0];
                            var0 = arg1;
                            var1 = var1[var0];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun13261_ip = 38;
                                continue _fun13261
                            }
                        case 32:
                            var0 = var1.evaluationId;
                        case 38:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[18] = var4;
                var4 = {};
                var6 = 'getEvaluationAndAssignment';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun13262: for (var _fun13262_ip = 0;;) switch (_fun13262_ip) {
                        case 0:
                            var5 = arg2;
                            var1 = this;
                            var0 = var1.getOverride;
                            var1 = var0.bind(var1)(var5);
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun13262_ip = 108;
                                continue _fun13262
                            }
                        case 23:
                            var4 = _closure1_slot13;
                            var3 = arg0;
                            var4 = var4[var3];
                            var3 = arg1;
                            var3 = var4[var3];
                            if (!(var0 != var3)) {
                                _fun13262_ip = 89;
                                continue _fun13262
                            }
                        case 48:
                            var4 = var3.evaluationId;
                            var0 = new Array(2);
                            var0[0] = var4;
                            var3 = var3.assignments;
                            var4 = _closure1_slot29;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var5);
                            var2 = var3[var2];
                            var0[1] = var2;
                            _fun13262_ip = 106;
                            continue _fun13262;
                        case 89:
                            var2 = new Array(2);
                            var3 = undefined;
                            var2[0] = var3;
                            var2[1] = var3;
                            var0 = var2;
                        case 106:
                            return var0;
                        case 108:
                            var0 = new Array(2);
                            var2 = undefined;
                            var0[0] = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[19] = var4;
                var4 = {};
                var6 = 'trackExperimentExposure';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
                    _fun13263: for (var _fun13263_ip = 0;;) switch (_fun13263_ip) {
                        case 0:
                            var12 = arg0;
                            var11 = arg1;
                            var10 = arg2;
                            var9 = arg3;
                            var4 = arg5;
                            var3 = this;
                            var6 = _closure1_slot29;
                            var2 = global;
                            var0 = var2.HermesInternal;
                            var8 = var0.concat;
                            var22 = '';
                            var5 = '|';
                            var19 = arg4;
                            var21 = var11;
                            var20 = var5;
                            var18 = var5;
                            var17 = var4;
                            var16 = var5;
                            var15 = var10;
                            var5 = var22[var8](var21, var20, var19, var18, var17, var16, var15, var14);
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var6 = var3.shouldTrackExposure;
                            var6 = var6.bind(var3)(var5);
                            if (!var6) {
                                _fun13263_ip = 278;
                                continue _fun13263
                            }
                        case 95:
                            var6 = 'user';
                            if (!(var6 !== var9)) {
                                _fun13263_ip = 182;
                                continue _fun13263
                            }
                        case 103:
                            var6 = 'installation';
                            if (!(var6 === var9)) {
                                _fun13263_ip = 240;
                                continue _fun13263
                            }
                        case 114:
                            var13 = var3.track;
                            var6 = _closure1_slot10;
                            var8 = var6.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED;
                            var7 = {};
                            var7.evaluation_id = var12;
                            var6 = arg6;
                            var7.installation_id = var6;
                            var7.experiment = var11;
                            var7.exposure_location = var10;
                            var7.unit_type = var9;
                            var7.tracked_variation_id = var4;
                            var6 = {};
                            var14 = true;
                            var6.flush = var14;
                            var6 = var13.bind(var3)(var8, var7, var6);
                            _fun13263_ip = 240;
                            continue _fun13263;
                        case 182:
                            var8 = var3.track;
                            var6 = _closure1_slot10;
                            var7 = var6.EXPERIMENT_USER_EVALUATION_EXPOSED;
                            var6 = {};
                            var6.evaluation_id = var12;
                            var6.experiment = var11;
                            var6.exposure_location = var10;
                            var6.unit_type = var9;
                            var6.tracked_variation_id = var4;
                            var4 = {};
                            var9 = true;
                            var4.flush = var9;
                            var4 = var8.bind(var3)(var7, var6, var4);
                        case 240:
                            var4 = _closure1_slot23;
                            var6 = var2.Date;
                            var2 = var6.now;
                            var2 = var2.bind(var6)();
                            var4[var5] = var2;
                            var2 = var3.saveTrackedExposures;
                            var1 = _closure1_slot23;
                            var1 = var2.bind(var3)(var1);
                        case 278:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[20] = var4;
                var4 = {};
                var6 = 'trackCommonTriggerPointExposures';
                var4.key = var6;
                var6 = function arg0() {
                    _fun13264: for (var _fun13264_ip = 0;;) switch (_fun13264_ip) {
                        case 0:
                            var14 = arg0;
                            var13 = this;
                            var2 = _closure1_slot26;
                            var0 = undefined;
                            var1 = ['user', 'installation'];
                            var11 = var2.bind(var0)(var1);
                            var2 = var11.bind(var0)();
                            var1 = var2.done;
                            var10 = global;
                            var9 = true;
                            var8 = 'user';
                            var7 = '';
                            var6 = '|';
                            var5 = var2;
                            var4 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun13264_ip = 357;
                                continue _fun13264
                            }
                        case 70:
                            var17 = var5.value;
                            var15 = _closure1_slot26;
                            var1 = var13.evaluationsWithUnitIds;
                            var1 = var1.bind(var13)(var17);
                            var16 = var15.bind(var0)(var1);
                            var15 = var16.bind(var0)();
                            var1 = var15.done;
                            if (var1) {
                                _fun13264_ip = 339;
                                continue _fun13264
                            }
                        case 110:
                            var1 = var15.value;
                            var20 = var1.evaluationId;
                            var19 = var1.unitId;
                            var18 = _closure1_slot29;
                            var1 = var10.HermesInternal;
                            var1 = var1.concat;
                            var1 = var1.bind(var7)(var20, var6, var14);
                            var18 = var18.bind(var0)(var1);
                            var1 = var13.shouldTrackExposure;
                            var1 = var1.bind(var13)(var18);
                            if (!var1) {
                                _fun13264_ip = 312;
                                continue _fun13264
                            }
                        case 171:
                            if (!(var8 !== var17)) {
                                _fun13264_ip = 228;
                                continue _fun13264
                            }
                        case 175:
                            var23 = var13.track;
                            var1 = _closure1_slot10;
                            var22 = var1.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED;
                            var21 = {};
                            var21.evaluation_id = var20;
                            var21.exposure_location = var14;
                            var21.unit_type = var17;
                            var21.installation_id = var19;
                            var1 = {};
                            var1.flush = var9;
                            var1 = var23.bind(var13)(var22, var21, var1);
                            _fun13264_ip = 274;
                            continue _fun13264;
                        case 228:
                            var23 = var13.track;
                            var1 = _closure1_slot10;
                            var22 = var1.EXPERIMENT_USER_EVALUATION_EXPOSED;
                            var21 = {};
                            var21.evaluation_id = var20;
                            var21.exposure_location = var14;
                            var21.unit_type = var17;
                            var1 = {};
                            var1.flush = var9;
                            var1 = var23.bind(var13)(var22, var21, var1);
                        case 274:
                            var21 = _closure1_slot23;
                            var22 = var10.Date;
                            var1 = var22.now;
                            var1 = var1.bind(var22)();
                            var21[var18] = var1;
                            var21 = var13.saveTrackedExposures;
                            var1 = _closure1_slot23;
                            var1 = var21.bind(var13)(var1);
                        case 312:
                            var21 = var16.bind(var0)();
                            var1 = var21.done;
                            var15 = var21;
                            var4 = var20;
                            var3 = var19;
                            var2 = var18;
                            if (!var1) {
                                _fun13264_ip = 110;
                                continue _fun13264
                            }
                        case 339:
                            var15 = var11.bind(var0)();
                            var1 = var15.done;
                            var5 = var15;
                            if (!var1) {
                                _fun13264_ip = 70;
                                continue _fun13264
                            }
                        case 357:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[21] = var4;
                var4 = {};
                var6 = 'trackExposureSuppression';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun13265: for (var _fun13265_ip = 0;;) switch (_fun13265_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = arg1;
                            var4 = this;
                            var2 = _closure1_slot14;
                            var5 = var2[var6];
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun13265_ip = 209;
                                continue _fun13265
                            }
                        case 29:
                            var7 = var5.kind;
                            var2 = 'user';
                            if (!(var2 !== var7)) {
                                _fun13265_ip = 156;
                                continue _fun13265
                            }
                        case 42:
                            var7 = var5.kind;
                            var2 = 'installation';
                            if (!(var2 === var7)) {
                                _fun13265_ip = 209;
                                continue _fun13265
                            }
                        case 58:
                            var2 = global;
                            var8 = var2.Object;
                            var7 = var8.keys;
                            var2 = _closure1_slot13;
                            var2 = var2.installation;
                            var7 = var7.bind(var8)(var2);
                            var2 = 0;
                            var2 = var7[var2];
                            if (!(var3 != var2)) {
                                _fun13265_ip = 209;
                                continue _fun13265
                            }
                        case 96:
                            var8 = var4.track;
                            var3 = _closure1_slot10;
                            var7 = var3.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED;
                            var3 = {};
                            var3.experiment = var6;
                            var9 = var5.kind;
                            var3.unit_type = var9;
                            var3.suppression_source = var0;
                            var3.installation_id = var2;
                            var2 = {};
                            var9 = true;
                            var2.flush = var9;
                            var2 = var8.bind(var4)(var7, var3, var2);
                            _fun13265_ip = 209;
                            continue _fun13265;
                        case 156:
                            var3 = var4.track;
                            var1 = _closure1_slot10;
                            var2 = var1.EXPERIMENT_USER_EXPOSURE_SUPPRESSED;
                            var1 = {};
                            var1.experiment = var6;
                            var5 = var5.kind;
                            var1.unit_type = var5;
                            var1.suppression_source = var0;
                            var0 = {};
                            var5 = true;
                            var0.flush = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 209:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[22] = var4;
                var4 = {};
                var6 = 'evaluationIds';
                var4.key = var6;
                var6 = function arg0() {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var4 = _closure1_slot13;
                    var1 = arg0;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.evaluationId;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[23] = var4;
                var4 = {};
                var6 = 'evaluationsWithUnitIds';
                var4.key = var6;
                var6 = function arg0() {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var4 = _closure1_slot13;
                    var1 = arg0;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun13270: for (var _fun13270_ip = 0;;) switch (_fun13270_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var0 = var3().value;
                                var0 = var1;
                                var5 = undefined;
                                var2 = var0 === var5;
                                var0 = undefined;
                                if (var2) {
                                    _fun13270_ip = 49;
                                    continue _fun13270
                                }
                            case 24:
                                var4 = var3().value;
                                var3 = var1;
                                var3 = var3 === var5;
                                var0 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun13270_ip = 49;
                                    continue _fun13270
                                }
                            case 43:
                                var0 = var4;
                                var2 = var3;
                            case 49:
                                if (var2) {
                                    _fun13270_ip = 55;
                                    continue _fun13270
                                }
                            case 52:
                                var1.return();
                            case 55:
                                var1 = var0.evaluationId;
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun13271: for (var _fun13271_ip = 0;;) switch (_fun13271_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = var4[Symbol.iterator];
                                var4 = var0().next;
                                var2 = var4().value;
                                var1 = var0;
                                var6 = undefined;
                                var3 = var1 === var6;
                                var1 = undefined;
                                if (var3) {
                                    _fun13271_ip = 27;
                                    continue _fun13271
                                }
                            case 24:
                                var1 = var2;
                            case 27:
                                var2 = undefined;
                                if (var3) {
                                    _fun13271_ip = 57;
                                    continue _fun13271
                                }
                            case 32:
                                var5 = var4().value;
                                var4 = var0;
                                var4 = var4 === var6;
                                var2 = undefined;
                                var3 = var4;
                                if (var4) {
                                    _fun13271_ip = 57;
                                    continue _fun13271
                                }
                            case 51:
                                var2 = var5;
                                var3 = var4;
                            case 57:
                                if (var3) {
                                    _fun13271_ip = 63;
                                    continue _fun13271
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var0 = {};
                                var2 = var2.evaluationId;
                                var0.evaluationId = var2;
                                var0.unitId = var1;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[24] = var4;
                var4 = {};
                var6 = 'shouldTrackExposure';
                var4.key = var6;
                var6 = function arg0() {
                    _fun13272: for (var _fun13272_ip = 0;;) switch (_fun13272_ip) {
                        case 0:
                            var2 = _closure1_slot23;
                            var0 = arg0;
                            var3 = var2[var0];
                            var0 = null;
                            var0 = var0 == var3;
                            if (var0) {
                                _fun13272_ip = 52;
                                continue _fun13272
                            }
                        case 23:
                            var2 = global;
                            var4 = var2.Date;
                            var2 = var4.now;
                            var2 = var2.bind(var4)();
                            var2 = var2 - var3;
                            var1 = _closure1_slot22;
                            var0 = var2 > var1;
                        case 52:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[25] = var4;
                var4 = {};
                var6 = 'loadTrackedExposures';
                var4.key = var6;
                var6 = function() {
                    _fun13273: for (var _fun13273_ip = 0;;) switch (_fun13273_ip) {
                        case 0:
                            var2 = this;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                            var3 = var0.Storage;
                            var1 = var3.get;
                            var0 = _closure1_slot21;
                            var0 = var1.bind(var3)(var0);
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun13273_ip = 160;
                                continue _fun13273
                            }
                        case 54:
                            var3 = var0.version;
                            var1 = 2;
                            if (!(var1 === var3)) {
                                _fun13273_ip = 160;
                                continue _fun13273
                            }
                        case 67:
                            var0 = var0.exposures;
                            var1 = global;
                            var3 = var1.Date;
                            var1 = var3.now;
                            var10 = var1.bind(var3)();
                            var8 = var0;
                            var3 = false;
                            var1 = false;
                            for (var5 in var8)
                                case 105: {
                                    var1 = var3;
                                    case 117: var12 = var5;
                                    var13 = var0[var12];
                                    var14 = var10 - var13;
                                    var13 = _closure1_slot22;
                                    if (!(var14 > var13)) {
                                        _fun13273_ip = 105;
                                        continue _fun13273
                                    }
                                    case 136: var12 = delete var0[var12];
                                    var3 = true;
                                    _fun13273_ip = 105;
                                    continue _fun13273;
                                }
                        case 144:
                            if (!var1) {
                                _fun13273_ip = 158;
                                continue _fun13273
                            }
                        case 147:
                            var1 = var2.saveTrackedExposures;
                            var1 = var1.bind(var2)(var0);
                        case 158:
                            return var0;
                        case 160:
                            var0 = {};
                            return var0;
                    }
                };
                var4.value = var6;
                var0[26] = var4;
                var4 = {};
                var6 = 'saveTrackedExposures';
                var4.key = var6;
                var6 = function arg0() {
                    _fun13274: for (var _fun13274_ip = 0;;) switch (_fun13274_ip) {
                        case 0:
                            var4 = this;
                            var5 = arg0;
                        case 6: // try_start_0
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.Storage;
                            var2 = var3.set;
                            var1 = _closure1_slot21;
                            var0 = {};
                            var6 = 2;
                            var0.version = var6;
                            var0.exposures = var5;
                            var0 = var2.bind(var3)(var1, var0);
                        case 67: // try_end0
                            _fun13274_ip = 149;
                            continue _fun13274;
                        case 69: // catch_target0
                            CatchBlockStart(arg_register = 5);
                            var3 = _closure1_slot11;
                            var2 = var3.error;
                            var1 = 'Error saving tracked exposures';
                            var1 = var2.bind(var3)(var1, var5);
                            var3 = var4.track;
                            var0 = _closure1_slot10;
                            var2 = var0.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                            var1 = {};
                            var0 = var4.surface;
                            var1.module = var0;
                            var0 = 'ApexExperimentStore.saveTrackedExposures';
                            var1.call = var0;
                            var0 = {};
                            var5 = true;
                            var0.flush = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 149:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[27] = var4;
                var4 = {};
                var6 = 'clearForTests';
                var4.key = var6;
                var6 = function() {
                    var1 = this;
                    var0 = var1.clearAllServerAssignments;
                    var0 = var0.bind(var1)();
                    var0 = var1.clearAllOverrides;
                    var0 = var0.bind(var1)();
                    var0 = var1.clearAllTrackedExposures;
                    var0 = var0.bind(var1)();
                    var2 = _closure1_slot19;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    var1 = _closure1_slot20;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[28] = var4;
                var4 = {};
                var6 = 'clearAllServerAssignments';
                var4.key = var6;
                var6 = function() {
                    var1 = {};
                    var0 = {};
                    var1.user = var0;
                    var0 = {};
                    var1.guild = var0;
                    var0 = {};
                    var1.installation = var0;
                    _closure1_slot13 = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[29] = var4;
                var4 = {};
                var6 = 'clearUserServerAssignments';
                var4.key = var6;
                var6 = function() {
                    var1 = {};
                    var0 = {};
                    var1.user = var0;
                    var0 = {};
                    var1.guild = var0;
                    var2 = _closure1_slot13;
                    var2 = var2.installation;
                    var1.installation = var2;
                    _closure1_slot13 = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[30] = var4;
                var4 = {};
                var6 = 'clearAllOverrides';
                var4.key = var6;
                var6 = function() {
                    var0 = {};
                    _closure1_slot15 = var0;
                    var0 = {};
                    _closure1_slot16 = var0;
                    var0 = {};
                    _closure1_slot17 = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[31] = var4;
                var4 = {};
                var6 = 'clearSessionOverrides';
                var4.key = var6;
                var6 = function() {
                    var0 = {};
                    _closure1_slot16 = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[32] = var4;
                var4 = {};
                var6 = 'clearAllTrackedExposures';
                var4.key = var6;
                var6 = function() {
                    var0 = {};
                    _closure1_slot23 = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[33] = var4;
                var4 = {};
                var6 = 'getHash';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot29;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[34] = var4;
                var4 = {};
                var6 = 'handleFetchStart';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot19;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[35] = var4;
                var4 = {};
                var6 = 'handleFetchSuccess';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var3 = arg0;
                    var2 = this;
                    var4 = _closure1_slot19;
                    var1 = var4.delete;
                    var1 = var1.bind(var4)(var3);
                    var1 = _closure1_slot20;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var3);
                    var1 = var2.setExperimentAssignments;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[36] = var4;
                var4 = {};
                var6 = 'handleFetchFailure';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = arg0;
                    var3 = _closure1_slot19;
                    var1 = var3.delete;
                    var1 = var1.bind(var3)(var2);
                    var1 = _closure1_slot20;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[37] = var4;
                var4 = {};
                var6 = 'isFetching';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot19;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[38] = var4;
                var4 = {};
                var6 = 'hasLoaded';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot20;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[39] = var4;
                var4 = {};
                var6 = 'getOverride';
                var4.key = var6;
                var5 = function arg0() {
                    _fun13287: for (var _fun13287_ip = 0;;) switch (_fun13287_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot16;
                            var0 = var0[var2];
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun13287_ip = 28;
                                continue _fun13287
                            }
                        case 20:
                            var4 = _closure1_slot15;
                            var0 = var4[var2];
                        case 28:
                            if (!(var3 == var0)) {
                                _fun13287_ip = 40;
                                continue _fun13287
                            }
                        case 32:
                            var1 = _closure1_slot17;
                            var0 = var1[var2];
                        case 40:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[40] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var6);
            var1.displayName = var3;
            var1.persistKey = var3;
            var3 = 14;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = '../discord_common/js/packages/apex/BaseApexExperimentStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 6, 7, 15, 17, 18, 483, 4, 1213, 1214, 1215, 587, 566, 2]);