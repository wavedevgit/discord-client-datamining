// modules/user_profile/WidgetStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun42895: for (var _fun42895_ip = 0;;) switch (_fun42895_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42895_ip = 46;
                    continue _fun42895
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun42895_ip = 55;
                    continue _fun42895
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun42895_ip = 343;
                    continue _fun42895
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42895_ip = 323;
                    continue _fun42895
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42895_ip = 283;
                    continue _fun42895
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42895_ip = 270;
                    continue _fun42895
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
                    _fun42895_ip = 163;
                    continue _fun42895
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun42895_ip = 179;
                    continue _fun42895
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42895_ip = 249;
                    continue _fun42895
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42895_ip = 249;
                    continue _fun42895
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42895_ip = 234;
                    continue _fun42895
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42895_ip = 247;
                    continue _fun42895
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun42895_ip = 265;
                continue _fun42895;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun42895_ip = 283;
                continue _fun42895;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun42895_ip = 323;
                    continue _fun42895
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
                    _fun42895_ip = 330;
                    continue _fun42895
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42896: for (var _fun42896_ip = 0;;) switch (_fun42896_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42896_ip = 56;
                                continue _fun42896
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
                            _fun42896_ip = 67;
                            continue _fun42896;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun42897: for (var _fun42897_ip = 0;;) switch (_fun42897_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42897_ip = 23;
                    continue _fun42897
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42897_ip = 33;
                    continue _fun42897
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
                    _fun42897_ip = 70;
                    continue _fun42897
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42897_ip = 55;
                    continue _fun42897
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun42898: for (var _fun42898_ip = 0;;) switch (_fun42898_ip) {
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
                _fun42898_ip = 74;
                continue _fun42898;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = null;
    var _closure1_slot10 = var1;
    var _closure1_slot11 = var1;
    var1 = false;
    var _closure1_slot12 = var1;
    var6 = {};
    var7 = new Array(0);
    var6.suggestedGamesIds = var7;
    var7 = new Array(0);
    var6.suggestedWishlistGamesIds = var7;
    var _closure1_slot13 = var6;
    var _closure1_slot14 = var1;
    var _closure1_slot15 = var1;
    var _closure1_slot16 = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun42902: for (var _fun42902_ip = 0;;) switch (_fun42902_ip) {
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
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42902_ip = 69;
                        continue _fun42902
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42902_ip = 105;
                    continue _fun42902;
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
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(14);
        var0[0] = var4;
        var4 = {};
        var6 = 'getPendingWidgets';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSaveablePendingWidgets';
        var4.key = var6;
        var6 = function() {
            _fun42905: for (var _fun42905_ip = 0;;) switch (_fun42905_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun42905_ip = 37;
                        continue _fun42905
                    }
                case 16:
                    var3 = _closure1_slot10;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.isDiscardable;
                        var0 = var0.bind(var1)();
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasPendingChanges';
        var4.key = var6;
        var6 = function() {
            _fun42907: for (var _fun42907_ip = 0;;) switch (_fun42907_ip) {
                case 0:
                    var0 = _closure1_slot10;
                    var3 = null;
                    var0 = var3 !== var0;
                    if (!var0) {
                        _fun42907_ip = 75;
                        continue _fun42907
                    }
                case 16:
                    var1 = _closure1_slot11;
                    var1 = var3 === var1;
                    if (var1) {
                        _fun42907_ip = 72;
                        continue _fun42907
                    }
                case 27:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isEqual;
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot11;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
                case 72:
                    var0 = var1;
                case 75:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getWidgetUpdates';
        var4.key = var6;
        var6 = function() {
            _fun42908: for (var _fun42908_ip = 0;;) switch (_fun42908_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getSaveablePendingWidgets;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun42908_ip = 424;
                        continue _fun42908
                    }
                case 24:
                    var3 = _closure1_slot11;
                    if (!(var2 != var3)) {
                        _fun42908_ip = 424;
                        continue _fun42908
                    }
                case 38:
                    var4 = global;
                    var6 = var4.Map;
                    var7 = _closure1_slot11;
                    var5 = var7.map;
                    var3 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var2 = var1.id;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var18 = var5.bind(var7)(var3);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var19 = var5;
                    var3 = new var19[var6](var18, var17);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var5 = var4.Map;
                    var4 = var1.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var2 = var1.id;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var18 = var4.bind(var1)(var0);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var19 = var4;
                    var0 = new var19[var5](var18, var17);
                    var12 = var0 instanceof Object ? var0 : var4;
                    var5 = new Array(0);
                    var4 = new Array(0);
                    var0 = _closure1_slot17;
                    var9 = undefined;
                    var13 = var0.bind(var9)(var12);
                    var6 = var13.bind(var9)();
                    var0 = var6.done;
                    var11 = 2;
                    var8 = 0;
                    var7 = 1;
                    if (var0) {
                        _fun42908_ip = 244;
                        continue _fun42908
                    }
                case 165:
                    var14 = var6.value;
                    var0 = _closure1_slot2;
                    var0 = var0.bind(var9)(var14, var11);
                    var15 = var0[var8];
                    var14 = var0[var7];
                    var0 = var3.get;
                    var16 = var0.bind(var3)(var15);
                    var0 = var2 != var16;
                    if (!var0) {
                        _fun42908_ip = 216;
                        continue _fun42908
                    }
                case 205:
                    var15 = var14.isEqual;
                    var0 = var15.bind(var14)(var16);
                case 216:
                    if (var0) {
                        _fun42908_ip = 229;
                        continue _fun42908
                    }
                case 219:
                    var0 = var5.push;
                    var0 = var0.bind(var5)(var14);
                case 229:
                    var14 = var13.bind(var9)();
                    var0 = var14.done;
                    var6 = var14;
                    if (!var0) {
                        _fun42908_ip = 165;
                        continue _fun42908
                    }
                case 244:
                    var0 = _closure1_slot17;
                    var6 = var0.bind(var9)(var3);
                    var3 = var6.bind(var9)();
                    var0 = var3.done;
                    if (var0) {
                        _fun42908_ip = 326;
                        continue _fun42908
                    }
                case 265:
                    var13 = var3.value;
                    var0 = _closure1_slot2;
                    var0 = var0.bind(var9)(var13, var11);
                    var14 = var0[var8];
                    var13 = var0[var7];
                    var0 = var12.has;
                    var0 = var0.bind(var12)(var14);
                    if (var0) {
                        _fun42908_ip = 311;
                        continue _fun42908
                    }
                case 301:
                    var0 = var4.push;
                    var0 = var0.bind(var4)(var13);
                case 311:
                    var13 = var6.bind(var9)();
                    var0 = var13.done;
                    var3 = var13;
                    if (!var0) {
                        _fun42908_ip = 265;
                        continue _fun42908
                    }
                case 326:
                    var0 = var1.length;
                    var0 = var8 < var0;
                    var8 = 0;
                    var3 = false;
                    if (!var0) {
                        _fun42908_ip = 405;
                        continue _fun42908
                    }
                case 342:
                    var0 = var1[var8];
                    var12 = var2 == var0;
                    var11 = undefined;
                    if (var12) {
                        _fun42908_ip = 360;
                        continue _fun42908
                    }
                case 355:
                    var11 = var0.id;
                case 360:
                    var0 = _closure1_slot11;
                    var12 = var0[var8];
                    var13 = var2 == var12;
                    var0 = undefined;
                    if (var13) {
                        _fun42908_ip = 382;
                        continue _fun42908
                    }
                case 377:
                    var0 = var12.id;
                case 382:
                    var3 = true;
                    if (!(var11 === var0)) {
                        _fun42908_ip = 405;
                        continue _fun42908
                    }
                case 388:
                    var8 = var8 + 1;
                    var0 = var1.length;
                    var0 = var8 < var0;
                    var3 = false;
                    if (var0) {
                        _fun42908_ip = 342;
                        continue _fun42908
                    }
                case 405:
                    var0 = {};
                    var0.changedWidgets = var5;
                    var0.removedWidgets = var4;
                    var0.hasOrderChanges = var3;
                    return var0;
                case 424:
                    var0 = {};
                    if (!(var2 == var1)) {
                        _fun42908_ip = 434;
                        continue _fun42908
                    }
                case 430:
                    var1 = new Array(0);
                case 434:
                    var0.changedWidgets = var1;
                    var1 = new Array(0);
                    var0.removedWidgets = var1;
                    var1 = false;
                    var0.hasOrderChanges = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getChangedWidgets';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.getWidgetUpdates;
            var0 = var0.bind(var1)();
            var0 = var0.changedWidgets;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getRemovedWidgets';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.getWidgetUpdates;
            var0 = var0.bind(var1)();
            var0 = var0.removedWidgets;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasUnsavedChanges';
        var4.key = var6;
        var6 = function() {
            _fun42913: for (var _fun42913_ip = 0;;) switch (_fun42913_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getWidgetUpdates;
                    var1 = var0.bind(var1)();
                    var0 = var1.changedWidgets;
                    var2 = var1.removedWidgets;
                    var1 = var1.hasOrderChanges;
                    var0 = var0.length;
                    var3 = 0;
                    var0 = var0 > var3;
                    if (var0) {
                        _fun42913_ip = 54;
                        continue _fun42913
                    }
                case 45:
                    var2 = var2.length;
                    var0 = var2 > var3;
                case 54:
                    if (var0) {
                        _fun42913_ip = 60;
                        continue _fun42913
                    }
                case 57:
                    var0 = var1;
                case 60:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'canSaveChanges';
        var4.key = var6;
        var6 = function() {
            _fun42914: for (var _fun42914_ip = 0;;) switch (_fun42914_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getSaveablePendingWidgets;
                    var3 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun42914_ip = 40;
                        continue _fun42914
                    }
                case 22:
                    var2 = var3.every;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.isValid;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isSubmitting';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'suggestedFetchError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'suggestedFetchIsLoading';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'suggestedFetchAttempted';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'suggestedGameIds';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var5;
        var0[13] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 10;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun42921: for (var _fun42921_ip = 0;;) switch (_fun42921_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.widgets;
                _closure1_slot10 = var0;
                var0 = _closure1_slot11;
                var2 = null;
                if (!(var2 === var0)) {
                    _fun42921_ip = 90;
                    continue _fun42921
                }
            case 26:
                var3 = _closure1_slot8;
                var0 = var3.getCurrentUser;
                var0 = var0.bind(var3)();
                if (!(var2 != var0)) {
                    _fun42921_ip = 90;
                    continue _fun42921
                }
            case 43:
                var4 = _closure1_slot9;
                var3 = var4.getUserProfile;
                var0 = var0.id;
                var3 = var3.bind(var4)(var0);
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun42921_ip = 78;
                    continue _fun42921
                }
            case 72:
                var0 = var3.widgets;
            case 78:
                if (!(var2 == var0)) {
                    _fun42921_ip = 86;
                    continue _fun42921
                }
            case 82:
                var0 = new Array(0);
            case 86:
                _closure1_slot11 = var0;
            case 90:
                var0 = undefined;
                return var0;
        }
    };
    var1.WIDGET_PENDING_SET = var7;
    var7 = function() {
        var0 = true;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_PENDING_SAVE_START = var7;
    var7 = function() {
        _fun42923: for (var _fun42923_ip = 0;;) switch (_fun42923_ip) {
            case 0:
                var0 = false;
                _closure1_slot12 = var0;
                var2 = _closure1_slot10;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun42923_ip = 27;
                    continue _fun42923
                }
            case 19:
                _closure1_slot11 = var0;
                _closure1_slot10 = var0;
            case 27:
                var0 = undefined;
                return var0;
        }
    };
    var1.WIDGET_PENDING_SAVE_SUCCESS = var7;
    var7 = function() {
        var0 = false;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_PENDING_SAVE_FAILURE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.suggestedGamesIds;
        var2 = var0.suggestedWishlistGamesIds;
        var0 = _closure1_slot13;
        var0.suggestedGamesIds = var3;
        var0.suggestedWishlistGamesIds = var2;
        var0 = false;
        _closure1_slot15 = var0;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_SUGGESTED_FETCH_SUCCESS = var7;
    var7 = function() {
        var0 = true;
        _closure1_slot14 = var0;
        var0 = false;
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_SUGGESTED_FETCH_FAILURE = var7;
    var7 = function() {
        var0 = true;
        _closure1_slot15 = var0;
        var2 = false;
        _closure1_slot14 = var2;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_SUGGESTED_FETCH_START = var7;
    var7 = function() {
        var0 = null;
        _closure1_slot10 = var0;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_PENDING_CLEAR = var7;
    var3 = function arg0() {
        var1 = arg0;
        var1 = var1.applicationId;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot13;
        var4 = var1.suggestedGamesIds;
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var0
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var0 !== var1;
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var1.suggestedGamesIds = var2;
        var3 = var1.suggestedWishlistGamesIds;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var0 !== var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        var1.suggestedWishlistGamesIds = var0;
        var0 = undefined;
        return var0;
    };
    var1.WIDGET_SUGGESTED_REMOVE_GAME = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/WidgetStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1621, 4660, 22, 566, 806, 2]);