// stores/DetectableGameStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun30725: for (var _fun30725_ip = 0;;) switch (_fun30725_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function() {
                _fun30726: for (var _fun30726_ip = 0;;) switch (_fun30726_ip) {
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
                        _fun30726_ip = 74;
                        continue _fun30726;
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
            var0 = function arg0, arg1() {
                _fun30729: for (var _fun30729_ip = 0;;) switch (_fun30729_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun30729_ip = 46;
                            continue _fun30729
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun30729_ip = 55;
                            continue _fun30729
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun30729_ip = 343;
                            continue _fun30729
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun30729_ip = 323;
                            continue _fun30729
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun30729_ip = 283;
                            continue _fun30729
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun30729_ip = 270;
                            continue _fun30729
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
                            _fun30729_ip = 163;
                            continue _fun30729
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun30729_ip = 179;
                            continue _fun30729
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun30729_ip = 249;
                            continue _fun30729
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun30729_ip = 249;
                            continue _fun30729
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun30729_ip = 234;
                            continue _fun30729
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun30729_ip = 247;
                            continue _fun30729
                        }
                    case 234:
                        var8 = _closure1_slot30;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun30729_ip = 265;
                        continue _fun30729;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun30729_ip = 283;
                        continue _fun30729;
                    case 270:
                        var6 = _closure1_slot30;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun30729_ip = 323;
                            continue _fun30729
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
                            _fun30729_ip = 330;
                            continue _fun30729
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun30730: for (var _fun30730_ip = 0;;) switch (_fun30730_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun30730_ip = 56;
                                        continue _fun30730
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
                                    _fun30730_ip = 67;
                                    continue _fun30730;
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
            var _closure1_slot29 = var0;
            var0 = function arg0, arg1() {
                _fun30731: for (var _fun30731_ip = 0;;) switch (_fun30731_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun30731_ip = 23;
                            continue _fun30731
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun30731_ip = 33;
                            continue _fun30731
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
                            _fun30731_ip = 70;
                            continue _fun30731
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun30731_ip = 55;
                            continue _fun30731
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot30 = var0;
            var1 = function arg0() {
                _fun30732: for (var _fun30732_ip = 0;;) switch (_fun30732_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var1 = var2.id;
                        var0.id = var1;
                        var1 = var2.name;
                        var0.name = var1;
                        var6 = var2.executables;
                        var3 = null;
                        if (!(var3 == var6)) {
                            _fun30732_ip = 39;
                            continue _fun30732
                        }
                    case 35:
                        var6 = new Array(0);
                    case 39:
                        var5 = var6.map;
                        var4 = _closure1_slot9;
                        var4 = var5.bind(var6)(var4);
                        var0.executables = var4;
                        var5 = var2.overlay;
                        var4 = var3 != var5;
                        if (!var4) {
                            _fun30732_ip = 77;
                            continue _fun30732
                        }
                    case 74:
                        var4 = var5;
                    case 77:
                        var0.overlay = var4;
                        var5 = var2.overlay_warn;
                        var4 = var3 != var5;
                        if (!var4) {
                            _fun30732_ip = 98;
                            continue _fun30732
                        }
                    case 95:
                        var4 = var5;
                    case 98:
                        var0.overlayWarn = var4;
                        var5 = var2.overlay_compatibility_hook;
                        var4 = var3 != var5;
                        if (!var4) {
                            _fun30732_ip = 119;
                            continue _fun30732
                        }
                    case 116:
                        var4 = var5;
                    case 119:
                        var0.overlayCompatibilityHook = var4;
                        var5 = var2.hook;
                        var4 = var3 == var5;
                        if (var4) {
                            _fun30732_ip = 140;
                            continue _fun30732
                        }
                    case 137:
                        var4 = var5;
                    case 140:
                        var0.hook = var4;
                        var4 = var2.aliases;
                        if (!(var3 == var4)) {
                            _fun30732_ip = 159;
                            continue _fun30732
                        }
                    case 155:
                        var4 = new Array(0);
                    case 159:
                        var0.aliases = var4;
                        var5 = _closure1_slot8;
                        var4 = var5.supportsOutOfProcessOverlay;
                        var1 = var2.overlay_methods;
                        var1 = var4.bind(var5)(var1);
                        var0.supportsOutOfProcessOverlay = var1;
                        var1 = var2.themes;
                        if (!(var3 == var1)) {
                            _fun30732_ip = 204;
                            continue _fun30732
                        }
                    case 200:
                        var1 = new Array(0);
                    case 204:
                        var0.themes = var1;
                        var5 = var2.icon_hash;
                        var6 = var3 != var5;
                        var4 = undefined;
                        if (!var6) {
                            _fun30732_ip = 227;
                            continue _fun30732
                        }
                    case 224:
                        var4 = var5;
                    case 227:
                        var0.icon = var4;
                        var4 = var2.third_party_skus;
                        if (!(var3 == var4)) {
                            _fun30732_ip = 245;
                            continue _fun30732
                        }
                    case 241:
                        var4 = new Array(0);
                    case 245:
                        var0.thirdPartySkus = var4;
                        var2 = var2.cover_image_hash;
                        var3 = var3 != var2;
                        var1 = undefined;
                        if (!var3) {
                            _fun30732_ip = 268;
                            continue _fun30732
                        }
                    case 265:
                        var1 = var2;
                    case 268:
                        var0.cover_image_hash = var1;
                        return var0;
                }
            };
            var _closure1_slot31 = var1;
            var0 = function arg0() {
                _fun30733: for (var _fun30733_ip = 0;;) switch (_fun30733_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var1 = var2.id;
                        var0.id = var1;
                        var1 = var2.name;
                        var0.name = var1;
                        var1 = var2.executables;
                        var0.executables = var1;
                        var1 = var2.overlayWarn;
                        var0.overlayWarn = var1;
                        var1 = var2.overlayCompatibilityHook;
                        var0.overlayCompatibilityHook = var1;
                        var1 = var2.overlay;
                        var0.overlay = var1;
                        var1 = var2.hook;
                        var0.hook = var1;
                        var1 = var2.aliases;
                        var0.aliases = var1;
                        var1 = var2.supportsOutOfProcessOverlay;
                        var0.supportsOutOfProcessOverlay = var1;
                        var3 = var2.themes;
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun30733_ip = 116;
                            continue _fun30733
                        }
                    case 112:
                        var3 = new Array(0);
                    case 116:
                        var0.themes = var3;
                        var3 = var2.icon;
                        var0.icon = var3;
                        var3 = var2.thirdPartySkus;
                        if (!(var1 == var3)) {
                            _fun30733_ip = 144;
                            continue _fun30733
                        }
                    case 140:
                        var3 = new Array(0);
                    case 144:
                        var0.thirdPartySkus = var3;
                        var2 = var2.cover_image_hash;
                        var3 = var1 != var2;
                        var1 = undefined;
                        if (!var3) {
                            _fun30733_ip = 167;
                            continue _fun30733
                        }
                    case 164:
                        var1 = var2;
                    case 167:
                        var0.cover_image_hash = var1;
                        return var0;
                }
            };
            var _closure1_slot32 = var0;
            var0 = function arg0() {
                _fun30734: for (var _fun30734_ip = 0;;) switch (_fun30734_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 11;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var1 instanceof var2;
                        var4 = var1;
                        if (!var2) {
                            _fun30734_ip = 47;
                            continue _fun30734
                        }
                    case 38:
                        var2 = _closure1_slot32;
                        var4 = var2.bind(var0)(var1);
                    case 47:
                        var6 = _closure1_slot13;
                        var3 = var6.set;
                        var2 = var1.id;
                        var2 = var3.bind(var6)(var2, var4);
                        var3 = _closure1_slot14;
                        var6 = var1.name;
                        var2 = var6.toLowerCase;
                        var2 = var2.bind(var6)();
                        var3[var2] = var4;
                        var3 = _closure1_slot29;
                        var2 = var1.aliases;
                        var6 = var3.bind(var0)(var2);
                        var3 = var6.bind(var0)();
                        var2 = var3.done;
                        if (var2) {
                            _fun30734_ip = 155;
                            continue _fun30734
                        }
                    case 117:
                        var8 = var3.value;
                        var7 = _closure1_slot14;
                        var2 = var8.toLowerCase;
                        var2 = var2.bind(var8)();
                        var7[var2] = var4;
                        var7 = var6.bind(var0)();
                        var2 = var7.done;
                        var3 = var7;
                        if (!var2) {
                            _fun30734_ip = 117;
                            continue _fun30734
                        }
                    case 155:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isDesktop;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun30734_ip = 248;
                            continue _fun30734
                        }
                    case 188:
                        var2 = _closure1_slot29;
                        var1 = var1.executables;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun30734_ip = 248;
                            continue _fun30734
                        }
                    case 215:
                        var1 = var2.value;
                        var6 = _closure1_slot15;
                        var1 = var1.name;
                        var6[var1] = var4;
                        var6 = var3.bind(var0)();
                        var1 = var6.done;
                        var2 = var6;
                        if (!var1) {
                            _fun30734_ip = 215;
                            continue _fun30734
                        }
                    case 248:
                        return var0;
                }
            };
            var _closure1_slot33 = var0;
            var8 = global;
            var10 = var8.Object;
            var9 = var10.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var3);
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var3 = var7.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var9 = var6[var3];
            var9 = var7.bind(var0)(var9);
            var _closure1_slot8 = var9;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.createExecutable;
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.AnalyticEvents;
            var _closure1_slot10 = var3;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.ApplicationTypes;
            var _closure1_slot11 = var3;
            var3 = 8;
            var9 = var6[var3];
            var9 = var7.bind(var0)(var9);
            var9 = var9.Millis;
            var9 = var9.DAY;
            var _closure1_slot12 = var9;
            var9 = 9;
            var9 = var6[var9];
            var9 = var7.bind(var0)(var9);
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var16 = var10;
            var9 = new var16[var9](var15);
            var9 = var9 instanceof Object ? var9 : var10;
            var _closure1_slot13 = var9;
            var9 = {};
            var _closure1_slot14 = var9;
            var9 = {};
            var _closure1_slot15 = var9;
            var9 = 10;
            var9 = var6[var9];
            var9 = var5.bind(var0)(var9);
            var11 = var9.Storage;
            var10 = var11.get;
            var9 = 'GameStoreReportedGames';
            var9 = var10.bind(var11)(var9);
            var11 = null;
            if (!(var11 == var9)) {
                _fun30725_ip = 389;
                continue _fun30725
            }
        case 387:
            var9 = {};
        case 389:
            var _closure1_slot16 = var9;
            var9 = '';
            var _closure1_slot17 = var9;
            var _closure1_slot18 = var0;
            var _closure1_slot19 = var11;
            var10 = false;
            var _closure1_slot20 = var10;
            var _closure1_slot21 = var11;
            var _closure1_slot22 = var10;
            var _closure1_slot23 = var9;
            var9 = new Array(0);
            var _closure1_slot24 = var9;
            var9 = new Array(0);
            var _closure1_slot25 = var9;
            var8 = var8.Map;
            var9 = var8.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var8
                }
            });
            var16 = var9;
            var8 = new var16[var8](var15);
            var8 = var8 instanceof Object ? var8 : var9;
            var _closure1_slot26 = var8;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var3.Millis;
            var3 = var3.HOUR;
            var _closure1_slot27 = var3;
            var3 = 18;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var8 = var3.PersistedStore;
            var3 = function(arg0) { // Environment: var4
                var3 = function() {
                    _fun30736: for (var _fun30736_ip = 0;;) switch (_fun30736_ip) {
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
                            var0 = _closure1_slot28;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun30736_ip = 69;
                                continue _fun30736
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun30736_ip = 105;
                            continue _fun30736;
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
                var0 = function arg0() {
                    _fun30737: for (var _fun30737_ip = 0;;) switch (_fun30737_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun30737_ip = 146;
                                continue _fun30737
                            }
                        case 14:
                            var3 = var2.detectableGamesEtag;
                            if (!(var1 != var3)) {
                                _fun30737_ip = 37;
                                continue _fun30737
                            }
                        case 24:
                            var4 = var2.detectableGamesEtag;
                            _closure1_slot17 = var4;
                        case 37:
                            var3 = var2.blocklistEtag;
                            if (!(var1 != var3)) {
                                _fun30737_ip = 60;
                                continue _fun30737
                            }
                        case 47:
                            var4 = var2.blocklistEtag;
                            _closure1_slot23 = var4;
                        case 60:
                            var3 = var2.blocklistExecutables;
                            if (!(var1 != var3)) {
                                _fun30737_ip = 83;
                                continue _fun30737
                            }
                        case 70:
                            var4 = var2.blocklistExecutables;
                            _closure1_slot24 = var4;
                        case 83:
                            var3 = var2.blocklistPatterns;
                            if (!(var1 != var3)) {
                                _fun30737_ip = 121;
                                continue _fun30737
                            }
                        case 93:
                            var5 = var2.blocklistPatterns;
                            var4 = var5.map;
                            var3 = function(arg0) { // Environment: var0
                                var0 = global;
                                var3 = var0.RegExp;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var5 = arg0;
                                var4 = 'i';
                                var6 = var1;
                                var0 = new var6[var3](var5, var4, var3);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var4 = var4.bind(var5)(var3);
                            _closure1_slot25 = var4;
                        case 121:
                            var2 = var2.detectableGames;
                            if (!(var1 != var2)) {
                                _fun30737_ip = 146;
                                continue _fun30737
                            }
                        case 131:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot33;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 146:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(22);
                var0[0] = var4;
                var4 = {};
                var6 = 'getState';
                var4.key = var6;
                var6 = function() {
                    _fun30740: for (var _fun30740_ip = 0;;) switch (_fun30740_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.isDesktop;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun30740_ip = 82;
                                continue _fun30740
                            }
                        case 38:
                            var0 = {
                                'detectableGamesEtag': '',
                                'detectableGames': null,
                                'blocklistEtag': ''
                            };
                            var1 = new Array(0);
                            var0.detectableGames = var1;
                            var1 = new Array(0);
                            var0.blocklistExecutables = var1;
                            var1 = new Array(0);
                            var0.blocklistPatterns = var1;
                            _fun30740_ip = 158;
                            continue _fun30740;
                        case 82:
                            var1 = {};
                            var3 = _closure1_slot17;
                            var1.detectableGamesEtag = var3;
                            var4 = _closure1_slot13;
                            var3 = var4.values;
                            var3 = var3.bind(var4)();
                            var1.detectableGames = var3;
                            var3 = _closure1_slot23;
                            var1.blocklistEtag = var3;
                            var3 = _closure1_slot24;
                            var1.blocklistExecutables = var3;
                            var4 = _closure1_slot25;
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.source;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var1.blocklistPatterns = var2;
                            var0 = var1;
                        case 158:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'games';
                var4.key = var6;
                var6 = function() {
                    var1 = _closure1_slot13;
                    var0 = var1.values;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4.get = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'getDetectableGame';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot13;
                    var1 = var2.get;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.cast;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'getGameByName';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30744: for (var _fun30744_ip = 0;;) switch (_fun30744_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun30744_ip = 71;
                                continue _fun30744
                            }
                        case 9:
                            var1 = var2.toLowerCase;
                            var3 = var1.bind(var2)();
                            var1 = global;
                            var1 = var1.Object;
                            var1 = var1.prototype;
                            var5 = var1.hasOwnProperty;
                            var4 = var5.call;
                            var1 = _closure1_slot14;
                            var4 = var4.bind(var5)(var1, var3);
                            var1 = null;
                            if (!var4) {
                                _fun30744_ip = 69;
                                continue _fun30744
                            }
                        case 61:
                            var2 = _closure1_slot14;
                            var1 = var2[var3];
                        case 69:
                            return var1;
                        case 71:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'getOfficialGame';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30745: for (var _fun30745_ip = 0;;) switch (_fun30745_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = this;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun30745_ip = 109;
                                continue _fun30745
                            }
                        case 12:
                            var3 = var1.type;
                            var2 = _closure1_slot11;
                            var2 = var2.GAME;
                            if (!(var3 !== var2)) {
                                _fun30745_ip = 82;
                                continue _fun30745
                            }
                        case 34:
                            var7 = var1.linkedGames;
                            var2 = var0 == var7;
                            var3 = undefined;
                            if (var2) {
                                _fun30745_ip = 80;
                                continue _fun30745
                            }
                        case 49:
                            var5 = var7.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 14;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.GameLinkTypes;
                                var0 = var0.OFFICIAL;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var5.bind(var7)(var2);
                            var5 = var0 == var2;
                            var3 = undefined;
                            if (var5) {
                                _fun30745_ip = 80;
                                continue _fun30745
                            }
                        case 75:
                            var3 = var2.id;
                        case 80:
                            _fun30745_ip = 87;
                            continue _fun30745;
                        case 82:
                            var3 = var1.id;
                        case 87:
                            var2 = var0 == var3;
                            var1 = null;
                            if (var2) {
                                _fun30745_ip = 107;
                                continue _fun30745
                            }
                        case 96:
                            var2 = var4.getDetectableGame;
                            var1 = var2.bind(var4)(var3);
                        case 107:
                            return var1;
                        case 109:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'getGameByApplication';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30747: for (var _fun30747_ip = 0;;) switch (_fun30747_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = this;
                            var2 = var3.getDetectableGame;
                            var0 = var1.id;
                            var0 = var2.bind(var3)(var0);
                            var8 = null;
                            if (!(var8 == var0)) {
                                _fun30747_ip = 135;
                                continue _fun30747
                            }
                        case 28:
                            var2 = var1.linkedGames;
                            if (!(var8 != var2)) {
                                _fun30747_ip = 117;
                                continue _fun30747
                            }
                        case 38:
                            var4 = _closure1_slot29;
                            var2 = var1.linkedGames;
                            var7 = undefined;
                            var6 = var4.bind(var7)(var2);
                            var4 = var6.bind(var7)();
                            var2 = var4.done;
                            var5 = var4;
                            if (var2) {
                                _fun30747_ip = 117;
                                continue _fun30747
                            }
                        case 73:
                            var2 = var5.value;
                            var4 = var3.getDetectableGame;
                            var2 = var2.id;
                            var2 = var4.bind(var3)(var2);
                            if (!(var8 == var2)) {
                                _fun30747_ip = 115;
                                continue _fun30747
                            }
                        case 98:
                            var9 = var6.bind(var7)();
                            var4 = var9.done;
                            var5 = var9;
                            if (var4) {
                                _fun30747_ip = 117;
                                continue _fun30747
                            }
                        case 113:
                            _fun30747_ip = 73;
                            continue _fun30747;
                        case 115:
                            return var2;
                        case 117:
                            var2 = var3.getGameByName;
                            var1 = var1.name;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 135:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'isGameInDatabase';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30748: for (var _fun30748_ip = 0;;) switch (_fun30748_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = this;
                            var1 = var3.getGameByName;
                            var0 = var2.name;
                            var1 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (var0) {
                                _fun30748_ip = 72;
                                continue _fun30748
                            }
                        case 31:
                            var3 = var2.nativeProcessObserverId;
                            var1 = undefined;
                            var1 = var1 !== var3;
                            if (!var1) {
                                _fun30748_ip = 69;
                                continue _fun30748
                            }
                        case 46:
                            var3 = var2.nativeProcessObserverId;
                            var2 = 2147483648.0;
                            var2 = var2 & var3;
                            var1 = !var2;
                        case 69:
                            var0 = var1;
                        case 72:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'fetching';
                var4.key = var6;
                var6 = function() {
                    var1 = _closure1_slot18;
                    var0 = true;
                    var0 = var0 === var1;
                    return var0;
                };
                var4.get = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'detectableGamesEtag';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot17;
                    return var0;
                };
                var4.get = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'blocklistEtag';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot23;
                    return var0;
                };
                var4.get = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'lastFetched';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot19;
                    return var0;
                };
                var4.get = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'hasAttemptedFetch';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot20;
                    return var0;
                };
                var4.get = var6;
                var0[12] = var4;
                var4 = {};
                var6 = 'detectableGamesTtl';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot12;
                    return var0;
                };
                var4.get = var6;
                var0[13] = var4;
                var4 = {};
                var6 = 'canFetchDetectableGames';
                var4.key = var6;
                var6 = function() {
                    _fun30755: for (var _fun30755_ip = 0;;) switch (_fun30755_ip) {
                        case 0:
                            var1 = _closure1_slot18;
                            var0 = true;
                            var0 = var0 !== var1;
                            if (!var0) {
                                _fun30755_ip = 65;
                                continue _fun30755
                            }
                        case 16:
                            var3 = _closure1_slot19;
                            var1 = null;
                            var1 = var1 == var3;
                            if (var1) {
                                _fun30755_ip = 62;
                                continue _fun30755
                            }
                        case 29:
                            var3 = global;
                            var4 = var3.Date;
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var4 = _closure1_slot19;
                            var2 = _closure1_slot12;
                            var2 = var4 + var2;
                            var1 = var3 >= var2;
                        case 62:
                            var0 = var1;
                        case 65:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[14] = var4;
                var4 = {};
                var6 = 'canFetchExecutableBlocklist';
                var4.key = var6;
                var6 = function() {
                    _fun30756: for (var _fun30756_ip = 0;;) switch (_fun30756_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.GameBlocklistExperiment;
                            var1 = var2.getConfig;
                            var0 = {};
                            var4 = 'GameStore.shouldBlock';
                            var0.location = var4;
                            var0 = var1.bind(var2)(var0);
                            var0 = var0.enabled;
                            var1 = !var0;
                            var0 = !var1;
                            if (var1) {
                                _fun30756_ip = 130;
                                continue _fun30756
                            }
                        case 68:
                            var2 = _closure1_slot22;
                            var1 = !var2;
                            if (var2) {
                                _fun30756_ip = 127;
                                continue _fun30756
                            }
                        case 78:
                            var4 = _closure1_slot21;
                            var2 = null;
                            var2 = var2 == var4;
                            if (var2) {
                                _fun30756_ip = 124;
                                continue _fun30756
                            }
                        case 91:
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var5 = _closure1_slot21;
                            var3 = _closure1_slot12;
                            var3 = var5 + var3;
                            var2 = var4 >= var3;
                        case 124:
                            var1 = var2;
                        case 127:
                            var0 = var1;
                        case 130:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[15] = var4;
                var4 = {};
                var6 = 'getGameByExecutable';
                var4.key = var6;
                var6 = function arg0() {
                    var1 = _closure1_slot15;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[16] = var4;
                var4 = {};
                var6 = 'getGameByGameData';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30758: for (var _fun30758_ip = 0;;) switch (_fun30758_ip) {
                        case 0:
                            var1 = arg0;
                            var6 = this;
                            var2 = var1.exePath;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun30758_ip = 235;
                                continue _fun30758
                            }
                        case 21:
                            var3 = var1.exePath;
                            var2 = var3.split;
                            var5 = '/';
                            var3 = var2.bind(var3)(var5);
                            var2 = var3.pop;
                            var4 = var2.bind(var3)();
                            var3 = var1.exePath;
                            var2 = var3.split;
                            var7 = var2.bind(var3)(var5);
                            var3 = var7.slice;
                            var2 = -2;
                            var3 = var3.bind(var7)(var2);
                            var2 = var3.join;
                            var5 = var2.bind(var3)(var5);
                            var2 = var1.name;
                            var3 = var0 != var2;
                            var2 = undefined;
                            if (!var3) {
                                _fun30758_ip = 198;
                                continue _fun30758
                            }
                        case 107:
                            var3 = var6.getGameByName;
                            var1 = var1.name;
                            var1 = var3.bind(var6)(var1);
                            if (!(var0 != var1)) {
                                _fun30758_ip = 137;
                                continue _fun30758
                            }
                        case 127:
                            var3 = var1.executables;
                            if (!(var0 == var3)) {
                                _fun30758_ip = 146;
                                continue _fun30758
                            }
                        case 137:
                            var2 = var1;
                            if (!(var0 != var2)) {
                                _fun30758_ip = 198;
                                continue _fun30758
                            }
                        case 144:
                            return var0;
                        case 146:
                            var8 = var1.executables;
                            var7 = var8.map;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var0 = var0.name;
                                return var0;
                            };
                            var7 = var7.bind(var8)(var3);
                            var3 = var7.includes;
                            var3 = var3.bind(var7)(var4);
                            if (var3) {
                                _fun30758_ip = 233;
                                continue _fun30758
                            }
                        case 182:
                            var3 = var7.includes;
                            var3 = var3.bind(var7)(var5);
                            var2 = var1;
                            if (var3) {
                                _fun30758_ip = 233;
                                continue _fun30758
                            }
                        case 198:
                            var3 = var6.getGameByExecutable;
                            var3 = var3.bind(var6)(var4);
                            if (!(var0 == var3)) {
                                _fun30758_ip = 224;
                                continue _fun30758
                            }
                        case 213:
                            var4 = var6.getGameByExecutable;
                            var3 = var4.bind(var6)(var5);
                        case 224:
                            if (!(var0 != var3)) {
                                _fun30758_ip = 231;
                                continue _fun30758
                            }
                        case 228:
                            var2 = var3;
                        case 231:
                            return var2;
                        case 233:
                            return var1;
                        case 235:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[17] = var4;
                var4 = {};
                var6 = 'shouldBlock';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30760: for (var _fun30760_ip = 0;;) switch (_fun30760_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = this;
                            var _closure3_slot0 = var4;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var6.bind(var0)(var2);
                            var6 = var0.GameBlocklistExperiment;
                            var2 = var6.getConfig;
                            var0 = {};
                            var7 = 'GameStore.shouldBlock';
                            var0.location = var7;
                            var0 = var2.bind(var6)(var0);
                            var0 = var0.enabled;
                            if (var0) {
                                _fun30760_ip = 78;
                                continue _fun30760
                            }
                        case 74:
                            var0 = false;
                            return var0;
                        case 78:
                            var2 = var4.exePath;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun30760_ip = 227;
                                continue _fun30760
                            }
                        case 93:
                            var6 = var4.exePath;
                            var2 = '';
                            if (!(var2 !== var6)) {
                                _fun30760_ip = 227;
                                continue _fun30760
                            }
                        case 107:
                            var6 = var4.exePath;
                            var2 = var6.toLowerCase;
                            var2 = var2.bind(var6)();
                            var _closure3_slot1 = var2;
                            var7 = _closure1_slot24;
                            var6 = var7.find;
                            var2 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot1;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var6.bind(var7)(var2);
                            if (!(var0 == var2)) {
                                _fun30760_ip = 204;
                                continue _fun30760
                            }
                        case 150:
                            var6 = _closure1_slot25;
                            var5 = var6.find;
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.test;
                                var0 = _closure3_slot0;
                                var0 = var0.exePath;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var5.bind(var6)(var1);
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun30760_ip = 202;
                                continue _fun30760
                            }
                        case 176:
                            var6 = var3.maybeTrackBlock;
                            var5 = var1.source;
                            var1 = 'pattern_match';
                            var1 = var6.bind(var3)(var4, var1, var5);
                            var0 = true;
                        case 202:
                            return var0;
                        case 204:
                            var1 = var3.maybeTrackBlock;
                            var0 = 'explicit_list';
                            var0 = var1.bind(var3)(var4, var0, var2);
                            var0 = true;
                            return var0;
                        case 227:
                            var0 = false;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[18] = var4;
                var4 = {};
                var6 = 'maybeTrackBlock';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun30763: for (var _fun30763_ip = 0;;) switch (_fun30763_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = var6.exePath;
                            var1 = var2.split;
                            var0 = /[\/\\]/;
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                            var7 = null;
                            var1 = var7 != var0;
                            var4 = 'unknown';
                            if (!var1) {
                                _fun30763_ip = 59;
                                continue _fun30763
                            }
                        case 56:
                            var4 = var0;
                        case 59:
                            var2 = _closure1_slot26;
                            var1 = var2.get;
                            var2 = var1.bind(var2)(var4);
                            var1 = global;
                            var3 = var1.Date;
                            var1 = var3.now;
                            var3 = var1.bind(var3)();
                            var1 = var7 == var2;
                            if (var1) {
                                _fun30763_ip = 112;
                                continue _fun30763
                            }
                        case 100:
                            var5 = var3 - var2;
                            var2 = _closure1_slot27;
                            var1 = var5 >= var2;
                        case 112:
                            if (!var1) {
                                _fun30763_ip = 223;
                                continue _fun30763
                            }
                        case 115:
                            var2 = _closure1_slot26;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var4, var3);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot10;
                            var1 = var0.GAME_BLOCKLIST_TRIGGERED;
                            var0 = {};
                            var5 = arg1;
                            var0.block_type = var5;
                            var5 = arg2;
                            var0.matched_entry = var5;
                            var5 = var6.gameName;
                            if (!(var7 == var5)) {
                                _fun30763_ip = 205;
                                continue _fun30763
                            }
                        case 199:
                            var5 = var6.origGameName;
                        case 205:
                            var0.game_name = var5;
                            var0.executable_name = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 223:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[19] = var4;
                var4 = {};
                var6 = 'shouldReport';
                var4.key = var6;
                var6 = function arg0() {
                    _fun30764: for (var _fun30764_ip = 0;;) switch (_fun30764_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = this;
                            var1 = var3.shouldBlock;
                            var1 = var1.bind(var3)(var0);
                            if (var1) {
                                _fun30764_ip = 141;
                                continue _fun30764
                            }
                        case 22:
                            var2 = var3.getGameByName;
                            var1 = var0.name;
                            var1 = var2.bind(var3)(var1);
                            var3 = null;
                            var1 = var3 != var1;
                            var2 = var0.name;
                            var2 = var3 != var2;
                            if (!var2) {
                                _fun30764_ip = 76;
                                continue _fun30764
                            }
                        case 56:
                            var4 = _closure1_slot16;
                            var0 = var0.name;
                            var0 = var4[var0];
                            var2 = var3 != var0;
                        case 76:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 17;
                            var4 = var4[var0];
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4);
                            var4 = var0.ShowCurrentGame;
                            var0 = var4.getSetting;
                            var0 = var0.bind(var4)();
                            if (!var0) {
                                _fun30764_ip = 127;
                                continue _fun30764
                            }
                        case 120:
                            var3 = _closure1_slot18;
                            var0 = !var3;
                        case 127:
                            if (!var0) {
                                _fun30764_ip = 139;
                                continue _fun30764
                            }
                        case 130:
                            if (var1) {
                                _fun30764_ip = 136;
                                continue _fun30764
                            }
                        case 133:
                            var1 = var2;
                        case 136:
                            var0 = !var1;
                        case 139:
                            return var0;
                        case 141:
                            var0 = false;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[20] = var4;
                var4 = {};
                var6 = 'markGameReported';
                var4.key = var6;
                var5 = function arg0() {
                    var3 = _closure1_slot16;
                    var2 = true;
                    var0 = arg0;
                    var3[var0] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.Storage;
                    var3 = var4.set;
                    var2 = _closure1_slot16;
                    var1 = 'GameStoreReportedGames';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var4.value = var5;
                var0[21] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var8 = var3.bind(var0)(var8);
            var3 = 'GameStore';
            var8.displayName = var3;
            var8.persistKey = var3;
            var3 = new Array(4);
            var9 = function(arg0) { // Environment: var4
                _fun30766: for (var _fun30766_ip = 0;;) switch (_fun30766_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = null;
                        if (!(var3 == var2)) {
                            _fun30766_ip = 31;
                            continue _fun30766
                        }
                    case 9:
                        var0 = {};
                        var1 = '';
                        var0.detectableGamesEtag = var1;
                        var1 = new Array(0);
                        var0.detectableGames = var1;
                        _fun30766_ip = 92;
                        continue _fun30766;
                    case 31:
                        var1 = {};
                        var4 = var2.detectableGamesEtag;
                        var1.detectableGamesEtag = var4;
                        var6 = var2.detectableGames;
                        var4 = var3 == var6;
                        var2 = undefined;
                        if (var4) {
                            _fun30766_ip = 76;
                            continue _fun30766
                        }
                    case 59:
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot32;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var0 = var4.prototype;
                            var3 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var5 = arg0;
                            var6 = var3;
                            var0 = new var6[var4](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var3;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var2 = var5.bind(var6)(var4);
                    case 76:
                        if (!(var3 == var2)) {
                            _fun30766_ip = 84;
                            continue _fun30766
                        }
                    case 80:
                        var2 = new Array(0);
                    case 84:
                        var1.detectableGames = var2;
                        var0 = var1;
                    case 92:
                        return var0;
                }
            };
            var3[0] = var9;
            var9 = function(arg0) { // Environment: var4
                _fun30768: for (var _fun30768_ip = 0;;) switch (_fun30768_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.isDesktop;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun30768_ip = 64;
                            continue _fun30768
                        }
                    case 41:
                        var1 = {};
                        var2 = '';
                        var1.detectableGamesEtag = var2;
                        var2 = new Array(0);
                        var1.detectableGames = var2;
                        var0 = var1;
                    case 64:
                        return var0;
                }
            };
            var3[1] = var9;
            var9 = function() { // Environment: var4
                var0 = {};
                var1 = '';
                var0.detectableGamesEtag = var1;
                var1 = new Array(0);
                var0.detectableGames = var1;
                return var0;
            };
            var3[2] = var9;
            var9 = function(arg0) { // Environment: var4
                _fun30770: for (var _fun30770_ip = 0;;) switch (_fun30770_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var7 = var0;
                        var6 = var2;
                        var1 = copyDataProperties(var7, var6);
                        var3 = var2.blocklistEtag;
                        var1 = null;
                        var5 = var1 != var3;
                        var4 = '';
                        if (!var5) {
                            _fun30770_ip = 37;
                            continue _fun30770
                        }
                    case 34:
                        var4 = var3;
                    case 37:
                        var3 = 'blocklistEtag';
                        var0[var3] = var4;
                        var4 = var2.blocklistExecutables;
                        if (!(var1 == var4)) {
                            _fun30770_ip = 60;
                            continue _fun30770
                        }
                    case 56:
                        var4 = new Array(0);
                    case 60:
                        var3 = 'blocklistExecutables';
                        var0[var3] = var4;
                        var2 = var2.blocklistPatterns;
                        if (!(var1 == var2)) {
                            _fun30770_ip = 83;
                            continue _fun30770
                        }
                    case 79:
                        var2 = new Array(0);
                    case 83:
                        var1 = 'blocklistPatterns';
                        var0[var1] = var2;
                        return var0;
                }
            };
            var3[3] = var9;
            var8.migrations = var3;
            var3 = 19;
            var3 = var6[var3];
            var15 = var7.bind(var0)(var3);
            var3 = {};
            var9 = function arg0() {
                _fun30771: for (var _fun30771_ip = 0;;) switch (_fun30771_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.detectableApplications;
                        var1 = _closure1_slot13;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        var0 = {};
                        _closure1_slot14 = var0;
                        var0 = {};
                        _closure1_slot15 = var0;
                        var1 = _closure1_slot29;
                        var0 = undefined;
                        var3 = var1.bind(var0)(var2);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun30771_ip = 92;
                            continue _fun30771
                        }
                    case 63:
                        var5 = _closure1_slot33;
                        var1 = var2.value;
                        var1 = var5.bind(var0)(var1);
                        var5 = var3.bind(var0)();
                        var1 = var5.done;
                        var2 = var5;
                        if (!var1) {
                            _fun30771_ip = 63;
                            continue _fun30771
                        }
                    case 92:
                        return var0;
                }
            };
            var3.OVERLAY_INITIALIZE = var9;
            var9 = function() {
                var0 = true;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
            };
            var3.GAMES_DATABASE_FETCH = var9;
            var9 = function() {
                var0 = false;
                _closure1_slot18 = var0;
                var0 = true;
                _closure1_slot20 = var0;
                var0 = undefined;
                return var0;
            };
            var3.GAMES_DATABASE_FETCH_FAIL = var9;
            var9 = function arg0() {
                _fun30774: for (var _fun30774_ip = 0;;) switch (_fun30774_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.games;
                        var1 = var0.etag;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun30774_ip = 35;
                            continue _fun30774
                        }
                    case 24:
                        var2 = _closure1_slot17;
                        var0 = var2 !== var1;
                    case 35:
                        if (!var0) {
                            _fun30774_ip = 71;
                            continue _fun30774
                        }
                    case 38:
                        var4 = _closure1_slot13;
                        var2 = var4.clear;
                        var2 = var2.bind(var4)();
                        var2 = {};
                        _closure1_slot14 = var2;
                        var2 = {};
                        _closure1_slot15 = var2;
                        _closure1_slot17 = var1;
                    case 71:
                        var1 = _closure1_slot29;
                        var0 = undefined;
                        var4 = var1.bind(var0)(var3);
                        var3 = var4.bind(var0)();
                        var1 = var3.done;
                        if (var1) {
                            _fun30774_ip = 135;
                            continue _fun30774
                        }
                    case 97:
                        var5 = _closure1_slot33;
                        var6 = _closure1_slot31;
                        var1 = var3.value;
                        var1 = var6.bind(var0)(var1);
                        var1 = var5.bind(var0)(var1);
                        var5 = var4.bind(var0)();
                        var1 = var5.done;
                        var3 = var5;
                        if (!var1) {
                            _fun30774_ip = 97;
                            continue _fun30774
                        }
                    case 135:
                        _closure1_slot18 = var0;
                        var1 = global;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        _closure1_slot19 = var1;
                        var1 = true;
                        _closure1_slot20 = var1;
                        return var0;
                }
            };
            var3.GAMES_DATABASE_UPDATE = var9;
            var9 = function() {
                var0 = true;
                _closure1_slot22 = var0;
                var0 = undefined;
                return var0;
            };
            var3.GAMES_BLOCKLIST_FETCH = var9;
            var9 = function() {
                var0 = false;
                _closure1_slot22 = var0;
                var0 = undefined;
                return var0;
            };
            var3.GAMES_BLOCKLIST_FETCH_FAIL = var9;
            var4 = function arg0() {
                _fun30777: for (var _fun30777_ip = 0;;) switch (_fun30777_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = var1.executables;
                        var3 = var1.patterns;
                        var2 = var1.etag;
                        var1 = null;
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun30777_ip = 43;
                            continue _fun30777
                        }
                    case 32:
                        var4 = _closure1_slot23;
                        var1 = var4 !== var2;
                    case 43:
                        if (!var1) {
                            _fun30777_ip = 91;
                            continue _fun30777
                        }
                    case 46:
                        _closure1_slot23 = var2;
                        var4 = var5.map;
                        var2 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = var1.toLowerCase;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        _closure1_slot24 = var2;
                        var2 = var3.map;
                        var0 = function(arg0) { // Environment: var0
                            var0 = global;
                            var3 = var0.RegExp;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = arg0;
                            var4 = 'i';
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        _closure1_slot25 = var0;
                    case 91:
                        var0 = false;
                        _closure1_slot22 = var0;
                        var0 = global;
                        var2 = var0.Date;
                        var0 = var2.now;
                        var0 = var0.bind(var2)();
                        _closure1_slot21 = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var3.GAMES_BLOCKLIST_UPDATE = var4;
            var4 = var8.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var16 = var4;
            var14 = var3;
            var3 = new var16[var8](var15, var14, var13);
            var3 = var3 instanceof Object ? var3 : var4;
            var4 = 20;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'stores/DetectableGameStore.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.gameFromServer = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3456, 660, 3486, 667, 3487, 587, 3488, 478, 21, 1647, 3489, 795, 1348, 566, 806, 2]);