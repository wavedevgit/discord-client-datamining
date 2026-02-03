// modules/icymi/ICYMISessionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() {
        _fun97396: for (var _fun97396_ip = 0;;) switch (_fun97396_ip) {
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
                _fun97396_ip = 76;
                continue _fun97396;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun97399: for (var _fun97399_ip = 0;;) switch (_fun97399_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun97399_ip = 46;
                    continue _fun97399
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun97399_ip = 55;
                    continue _fun97399
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun97399_ip = 345;
                    continue _fun97399
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun97399_ip = 323;
                    continue _fun97399
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun97399_ip = 283;
                    continue _fun97399
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun97399_ip = 270;
                    continue _fun97399
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
                    _fun97399_ip = 163;
                    continue _fun97399
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun97399_ip = 179;
                    continue _fun97399
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun97399_ip = 249;
                    continue _fun97399
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun97399_ip = 249;
                    continue _fun97399
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun97399_ip = 234;
                    continue _fun97399
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun97399_ip = 247;
                    continue _fun97399
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun97399_ip = 265;
                continue _fun97399;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun97399_ip = 283;
                continue _fun97399;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun97399_ip = 323;
                    continue _fun97399
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
                    _fun97399_ip = 330;
                    continue _fun97399
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun97400: for (var _fun97400_ip = 0;;) switch (_fun97400_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun97400_ip = 56;
                                continue _fun97400
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
                            _fun97400_ip = 67;
                            continue _fun97400;
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
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun97401: for (var _fun97401_ip = 0;;) switch (_fun97401_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun97401_ip = 23;
                    continue _fun97401
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun97401_ip = 33;
                    continue _fun97401
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
                    _fun97401_ip = 70;
                    continue _fun97401
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun97401_ip = 55;
                    continue _fun97401
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        _fun97402: for (var _fun97402_ip = 0;;) switch (_fun97402_ip) {
            case 0:
                var2 = _closure1_slot12;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun97402_ip = 32;
                    continue _fun97402
                }
            case 16:
                var2 = _closure1_slot12;
                var1 = var2.endSession;
                var1 = var1.bind(var2)();
                var0 = true;
            case 32:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        _fun97403: for (var _fun97403_ip = 0;;) switch (_fun97403_ip) {
            case 0:
                var2 = _closure1_slot12;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun97403_ip = 32;
                    continue _fun97403
                }
            case 16:
                var2 = _closure1_slot12;
                var1 = var2.endAllImpressions;
                var1 = var1.bind(var2)();
                var0 = true;
            case 32:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var5 = function() {
        _fun97404: for (var _fun97404_ip = 0;;) switch (_fun97404_ip) {
            case 0:
                var1 = _closure1_slot20;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var1 = _closure1_slot13;
                var3 = var1.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun97404_ip = 66;
                    continue _fun97404
                }
            case 28:
                var5 = _closure1_slot16;
                var7 = _closure1_slot13;
                var1 = var5.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = 'focus';
                var8 = var3;
                var1 = new var8[var5](var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot12 = var1;
                var0 = true;
            case 66:
                return var0;
        }
    };
    var _closure1_slot22 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var4 = 0;
    var9 = var7[var4];
    var0 = undefined;
    var9 = var8.bind(var0)(var9);
    var _closure1_slot2 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot4 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot5 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot6 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var9 = 7;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot9 = var9;
    var9 = 8;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot10 = var9;
    var9 = 9;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot11 = var9;
    var9 = null;
    var _closure1_slot12 = var9;
    var9 = new Array(0);
    var _closure1_slot13 = var9;
    var _closure1_slot14 = var4;
    var1 = var1.Map;
    var4 = var1.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var1
        }
    });
    var14 = var4;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot15 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function() {
            _fun97406: for (var _fun97406_ip = 0;;) switch (_fun97406_ip) {
                case 0:
                    var5 = arguments[0];
                    var2 = arguments[1];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun97406_ip = 25;
                        continue _fun97406
                    }
                case 21:
                    var5 = new Array(0);
                case 25:
                    if (!(var2 === var0)) {
                        _fun97406_ip = 33;
                        continue _fun97406
                    }
                case 29:
                    var2 = 'list';
                case 33:
                    var _closure3_slot1 = var2;
                    var4 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var0)(var3, var2);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 10;
                    var2 = var10[var2];
                    var4 = var9.bind(var0)(var2);
                    var2 = var4.v4;
                    var2 = var2.bind(var4)();
                    var3._sessionId = var2;
                    var2 = global;
                    var6 = var2.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var3._startTimestamp = var4;
                    var4 = null;
                    var3._endTimestamp = var4;
                    var4 = new Array(0);
                    var3._activeItems = var4;
                    var4 = 0;
                    var3._dwellCount = var4;
                    var3._impressionCount = var4;
                    var6 = var2.Map;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var7;
                    var6 = new var15[var6](var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3._dwelledItemIdMap = var6;
                    var6 = var2.Map;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var7;
                    var6 = new var15[var6](var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3._impressionItemIdMap = var6;
                    var6 = var2.Set;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var7;
                    var6 = new var15[var6](var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3._impressionItemTypes = var6;
                    var3._reloadCount = var4;
                    var3._feedFetchCount = var4;
                    var3._dwelledItemsChangedCount = var4;
                    var3._interactionCount = var4;
                    var3._actionCount = var4;
                    var3._latestDwellStartTimeMs = var4;
                    var7 = var2.setTimeout;
                    var6 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.endSession;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = 300000;
                    var2 = var7.bind(var0)(var6, var2);
                    var3._timeout = var2;
                    var8 = 11;
                    var2 = var10[var8];
                    var2 = var9.bind(var0)(var2);
                    var7 = var2.ICYMIAnalytics;
                    var6 = var7.trackFeedSessionStarted;
                    var2 = {};
                    var12 = var3._sessionId;
                    var2.icymiSessionId = var12;
                    var12 = var3._startTimestamp;
                    var2.sessionStartTimeMs = var12;
                    var11 = _closure1_slot14;
                    var2.previousIcymiSessionCount = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.DEFAULT_UX_VARIATION;
                    var2.uxVariation = var8;
                    var2 = var6.bind(var7)(var2);
                    var2 = var5.length;
                    if (!(var2 > var4)) {
                        _fun97406_ip = 430;
                        continue _fun97406
                    }
                case 402:
                    var2 = var3.startItemsDwell;
                    var4 = var5.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = {};
                        var3 = arg0;
                        var4 = var0;
                        var1 = copyDataProperties(var4, var3);
                        var2 = _closure3_slot1;
                        var1 = 'triggerType';
                        var0[var1] = var2;
                        var2 = true;
                        var1 = 'isInitiallyVisible';
                        var0[var1] = var2;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                case 430:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'sessionId';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._sessionId;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(27);
        var1[0] = var0;
        var0 = {};
        var5 = 'startTimestamp';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._startTimestamp;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'endTimestamp';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._endTimestamp;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'dwellCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._dwellCount;
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'uniqueDwellCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._dwelledItemIdMap;
            var0 = var0.size;
            return var0;
        };
        var0.get = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'impressionCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._impressionCount;
            return var0;
        };
        var0.get = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'uniqueImpressionCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._impressionItemIdMap;
            var0 = var0.size;
            return var0;
        };
        var0.get = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'interactionCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._interactionCount;
            return var0;
        };
        var0.get = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'reloadCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._reloadCount;
            return var0;
        };
        var0.get = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'feedFetchCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._feedFetchCount;
            return var0;
        };
        var0.get = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'dwelledItemsChangedCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._dwelledItemsChangedCount;
            return var0;
        };
        var0.get = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'impressionItemTypes';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._impressionItemTypes;
            return var0;
        };
        var0.get = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getImpression';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1._activeItems;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.itemId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'startItemsDwell';
        var0.key = var5;
        var5 = function arg0() {
            _fun97423: for (var _fun97423_ip = 0;;) switch (_fun97423_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = var0._resetTimeout;
                    var1 = var1.bind(var0)();
                    _closure1_slot13 = var5;
                    var4 = var5.length;
                    var1 = var0._activeItems;
                    var1 = var1.length;
                    if (!(var4 === var1)) {
                        _fun97423_ip = 73;
                        continue _fun97423
                    }
                case 49:
                    var4 = var5.every;
                    var1 = function(arg0, arg1) { // Environment: var2
                        var0 = _closure3_slot0;
                        var1 = var0._activeItems;
                        var0 = arg1;
                        var0 = var1[var0];
                        var1 = var0.itemId;
                        var0 = arg0;
                        var0 = var0.itemId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    if (var1) {
                        _fun97423_ip = 291;
                        continue _fun97423
                    }
                case 73:
                    var1 = var0._dwelledItemsChangedCount;
                    var1 = var1 + 1;
                    var0._dwelledItemsChangedCount = var1;
                    var1 = new Array(0);
                    var4 = global;
                    var7 = var4.Set;
                    var8 = var0._activeItems;
                    var6 = var8.map;
                    var4 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.itemId;
                        return var0;
                    };
                    var12 = var6.bind(var8)(var4);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = var6;
                    var4 = new var13[var7](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var3 = _closure1_slot18;
                    var8 = undefined;
                    var7 = var3.bind(var8)(var5);
                    var5 = var7.bind(var8)();
                    var3 = var5.done;
                    var6 = null;
                    if (var3) {
                        _fun97423_ip = 260;
                        continue _fun97423
                    }
                case 168:
                    var3 = var5.value;
                    var10 = var0.getImpression;
                    var9 = var3.itemId;
                    var10 = var10.bind(var0)(var9);
                    if (!(var6 == var10)) {
                        _fun97423_ip = 219;
                        continue _fun97423
                    }
                case 194:
                    var11 = var1.push;
                    var9 = var0._createImpression;
                    var9 = var9.bind(var0)(var3);
                    var9 = var11.bind(var1)(var9);
                    _fun97423_ip = 245;
                    continue _fun97423;
                case 219:
                    var9 = var1.push;
                    var9 = var9.bind(var1)(var10);
                    var9 = var4.delete;
                    var3 = var3.itemId;
                    var3 = var9.bind(var4)(var3);
                case 245:
                    var9 = var7.bind(var8)();
                    var3 = var9.done;
                    var5 = var9;
                    if (!var3) {
                        _fun97423_ip = 168;
                        continue _fun97423
                    }
                case 260:
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2._endImpression;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0._activeItems = var1;
                    var1 = var0._activeItems;
                    return var1;
                case 291:
                    var0 = var0._activeItems;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'trackItemsLongImpression';
        var0.key = var5;
        var5 = function arg0() {
            _fun97427: for (var _fun97427_ip = 0;;) switch (_fun97427_ip) {
                case 0:
                    var9 = this;
                    var2 = _closure1_slot18;
                    var0 = undefined;
                    var1 = arg0;
                    var7 = var2.bind(var0)(var1);
                    var2 = var7.bind(var0)();
                    var1 = var2.done;
                    var6 = 11;
                    var5 = null;
                    var4 = 1;
                    if (var1) {
                        _fun97427_ip = 495;
                        continue _fun97427
                    }
                case 43:
                    var1 = var2.value;
                    var11 = var9.getImpression;
                    var10 = var1.itemId;
                    var13 = var11.bind(var9)(var10);
                    var12 = var13;
                    if (!(var5 == var12)) {
                        _fun97427_ip = 83;
                        continue _fun97427
                    }
                case 72:
                    var10 = var9._constructImpressionFromInput;
                    var12 = var10.bind(var9)(var1);
                case 83:
                    var10 = var9._impressionCount;
                    var10 = var10 + 1;
                    var9._impressionCount = var10;
                    var12.sessionImpressionIndex = var10;
                    var14 = var9._impressionItemIdMap;
                    var11 = var14.set;
                    var10 = var1.itemId;
                    var16 = var9._impressionItemIdMap;
                    var15 = var16.get;
                    var1 = var1.itemId;
                    var15 = var15.bind(var16)(var1);
                    var16 = var5 != var15;
                    var1 = 0;
                    if (!var16) {
                        _fun97427_ip = 155;
                        continue _fun97427
                    }
                case 152:
                    var1 = var15;
                case 155:
                    var1 = var1 + var4;
                    var1 = var11.bind(var14)(var10, var1);
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var10.bind(var0)(var1);
                    var11 = var1.ICYMIAnalytics;
                    var10 = var11.trackFeedItemDwell1s;
                    var1 = {};
                    var14 = var9._sessionId;
                    var1.icymiSessionId = var14;
                    var14 = var12.impressionId;
                    var1.impressionId = var14;
                    var14 = var12.itemId;
                    var1.itemId = var14;
                    var14 = var12.itemType;
                    var1.itemType = var14;
                    var14 = var12.impressionStartTimestamp;
                    var1.dwellStartTimeMs = var14;
                    var14 = var12.triggerType;
                    var1.triggerType = var14;
                    var16 = var9._dwelledItemIdMap;
                    var15 = var16.get;
                    var14 = var12.itemId;
                    var15 = var15.bind(var16)(var14);
                    var16 = var5 != var15;
                    var14 = 0;
                    if (!var16) {
                        _fun97427_ip = 296;
                        continue _fun97427
                    }
                case 293:
                    var14 = var15;
                case 296:
                    var1.itemOccurenceCountInSession = var14;
                    var14 = var12.itemFeedIndex;
                    var1.itemFeedIndex = var14;
                    var14 = var12.itemScore;
                    var1.itemScore = var14;
                    var14 = var12.isInitiallyVisible;
                    var1.isInitiallyVisible = var14;
                    var14 = var12.itemChannelType;
                    var1.itemChannelType = var14;
                    var16 = _closure1_slot15;
                    var15 = var16.get;
                    var14 = var12.itemId;
                    var15 = var15.bind(var16)(var14);
                    if (!(var5 == var15)) {
                        _fun97427_ip = 375;
                        continue _fun97427
                    }
                case 369:
                    var15 = var12.itemCardHeight;
                case 375:
                    var16 = var5 != var15;
                    var14 = null;
                    if (!var16) {
                        _fun97427_ip = 387;
                        continue _fun97427
                    }
                case 384:
                    var14 = var15;
                case 387:
                    var1.itemCardHeight = var14;
                    var13 = var5 != var13;
                    var1.isDwelling = var13;
                    var13 = var12.interactionActionTypes;
                    var1.interactionActionTypes = var13;
                    var13 = var12.interactionCount;
                    var1.interactionCount = var13;
                    var13 = var12.uxVariation;
                    if (!(var5 == var13)) {
                        _fun97427_ip = 456;
                        continue _fun97427
                    }
                case 433:
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var14 = var14[var6];
                    var14 = var15.bind(var0)(var14);
                    var13 = var14.DEFAULT_UX_VARIATION;
                case 456:
                    var1.uxVariation = var13;
                    var12 = var12.sessionImpressionIndex;
                    var1.sessionImpressionIndex = var12;
                    var1 = var10.bind(var11)(var1);
                    var10 = var7.bind(var0)();
                    var1 = var10.done;
                    var2 = var10;
                    if (!var1) {
                        _fun97427_ip = 43;
                        continue _fun97427
                    }
                case 495:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'trackItemInteraction';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun97428: for (var _fun97428_ip = 0;;) switch (_fun97428_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg2;
                    var7 = this;
                    var0 = var7.getImpression;
                    var2 = var0.bind(var7)(var1);
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var11 = 11;
                    var3 = var0[var11];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var6 = var3.ICYMIAnalytics;
                    var5 = var6.trackItemInteraction;
                    var3 = {};
                    var3.id = var1;
                    var1 = arg1;
                    var3.type = var1;
                    var3.actionType = var4;
                    var1 = null;
                    var10 = var1 == var2;
                    var8 = undefined;
                    if (var10) {
                        _fun97428_ip = 92;
                        continue _fun97428
                    }
                case 86:
                    var8 = var2.impressionId;
                case 92:
                    var3.impressionId = var8;
                    var10 = var1 == var2;
                    var8 = undefined;
                    if (var10) {
                        _fun97428_ip = 112;
                        continue _fun97428
                    }
                case 106:
                    var8 = var2.uxVariation;
                case 112:
                    if (!(var1 == var8)) {
                        _fun97428_ip = 139;
                        continue _fun97428
                    }
                case 116:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var11];
                    var9 = var10.bind(var0)(var9);
                    var8 = var9.DEFAULT_UX_VARIATION;
                case 139:
                    var3.uxVariation = var8;
                    var8 = var7._interactionCount;
                    var8 = var8 + 1;
                    var7._interactionCount = var8;
                    var3.sessionInteractionIndex = var8;
                    var7 = var7._sessionId;
                    var3.icymiSessionId = var7;
                    var3 = var5.bind(var6)(var3);
                    if (!(var1 != var2)) {
                        _fun97428_ip = 215;
                        continue _fun97428
                    }
                case 184:
                    var3 = var2.interactionActionTypes;
                    var1 = var3.push;
                    var1 = var1.bind(var3)(var4);
                    var1 = var2.interactionCount;
                    var1 = var1 + 1;
                    var2.interactionCount = var1;
                case 215:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'trackFeedItemActioned';
        var0.key = var5;
        var5 = function arg0() {
            _fun97429: for (var _fun97429_ip = 0;;) switch (_fun97429_ip) {
                case 0:
                    var4 = arg0;
                    var8 = this;
                    var1 = var8.getImpression;
                    var0 = var4.itemId;
                    var7 = var1.bind(var8)(var0);
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var11 = 11;
                    var1 = var0[var11];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.ICYMIAnalytics;
                    var2 = var3.trackFeedItemActioned;
                    var1 = {};
                    var5 = var8._sessionId;
                    var1.icymiSessionId = var5;
                    var5 = null;
                    var10 = var5 == var7;
                    var6 = undefined;
                    if (var10) {
                        _fun97429_ip = 90;
                        continue _fun97429
                    }
                case 84:
                    var6 = var7.uxVariation;
                case 90:
                    if (!(var5 == var6)) {
                        _fun97429_ip = 117;
                        continue _fun97429
                    }
                case 94:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var11];
                    var9 = var10.bind(var0)(var9);
                    var6 = var9.DEFAULT_UX_VARIATION;
                case 117:
                    var1.uxVariation = var6;
                    var6 = var8._actionCount;
                    var6 = var6 + 1;
                    var8._actionCount = var6;
                    var1.sessionActionIndex = var6;
                    var6 = var4.itemId;
                    var1.itemId = var6;
                    var6 = var4.itemType;
                    var1.itemType = var6;
                    var8 = var5 == var7;
                    var6 = undefined;
                    if (var8) {
                        _fun97429_ip = 179;
                        continue _fun97429
                    }
                case 173:
                    var6 = var7.impressionId;
                case 179:
                    var7 = var5 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun97429_ip = 191;
                        continue _fun97429
                    }
                case 188:
                    var5 = var6;
                case 191:
                    var1.impressionId = var5;
                    var4 = var4.actionParameters;
                    var1.actionParameters = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'trackFeedFilterActioned';
        var0.key = var5;
        var5 = function arg0() {
            _fun97430: for (var _fun97430_ip = 0;;) switch (_fun97430_ip) {
                case 0:
                    var5 = arg0;
                    var8 = this;
                    var0 = var5.itemId;
                    var4 = null;
                    var0 = var4 != var0;
                    var6 = null;
                    if (!var0) {
                        _fun97430_ip = 40;
                        continue _fun97430
                    }
                case 23:
                    var1 = var8.getImpression;
                    var0 = var5.itemId;
                    var6 = var1.bind(var8)(var0);
                case 40:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var11 = 11;
                    var1 = var0[var11];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.ICYMIAnalytics;
                    var2 = var3.trackFeedFilterActioned;
                    var1 = {};
                    var7 = var8._sessionId;
                    var1.icymiSessionId = var7;
                    var10 = var4 == var6;
                    var7 = undefined;
                    if (var10) {
                        _fun97430_ip = 105;
                        continue _fun97430
                    }
                case 99:
                    var7 = var6.uxVariation;
                case 105:
                    if (!(var4 == var7)) {
                        _fun97430_ip = 132;
                        continue _fun97430
                    }
                case 109:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var11];
                    var9 = var10.bind(var0)(var9);
                    var7 = var9.DEFAULT_UX_VARIATION;
                case 132:
                    var1.uxVariation = var7;
                    var7 = var8._actionCount;
                    var7 = var7 + 1;
                    var8._actionCount = var7;
                    var1.sessionActionIndex = var7;
                    var7 = var5.filterParameters;
                    var1.filterParameters = var7;
                    var7 = var5.itemId;
                    var1.itemId = var7;
                    var5 = var5.itemType;
                    var1.itemType = var5;
                    var7 = var4 == var6;
                    var5 = undefined;
                    if (var7) {
                        _fun97430_ip = 205;
                        continue _fun97430
                    }
                case 199:
                    var5 = var6.impressionId;
                case 205:
                    var6 = var4 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun97430_ip = 217;
                        continue _fun97430
                    }
                case 214:
                    var4 = var5;
                case 217:
                    var1.impressionId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'trackFeedPageActioned';
        var0.key = var5;
        var5 = function arg0() {
            var5 = this;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 11;
            var1 = var7[var4];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.ICYMIAnalytics;
            var2 = var3.trackFeedPageActioned;
            var1 = {};
            var8 = var5._sessionId;
            var1.icymiSessionId = var8;
            var4 = var7[var4];
            var4 = var6.bind(var0)(var4);
            var4 = var4.DEFAULT_UX_VARIATION;
            var1.uxVariation = var4;
            var4 = var5._actionCount;
            var4 = var4 + 1;
            var5._actionCount = var4;
            var1.sessionActionIndex = var4;
            var9 = arg0;
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'incrementReloadCount';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1._resetTimeout;
            var0 = var0.bind(var1)();
            var0 = var1._reloadCount;
            var0 = var0 + 1;
            var1._reloadCount = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'incrementFeedFetchCount';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1._feedFetchCount;
            var0 = var0 + 1;
            var1._feedFetchCount = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'endAllImpressions';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var5 = var1._activeItems;
            var2 = new Array(0);
            var4 = 0;
            var6 = var2;
            var1 = arraySpread(var6, var5, var4);
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2._endImpression;
                var0 = arg0;
                var0 = var0.itemId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'endSession';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.endAllImpressions;
            var1 = var1.bind(var0)();
            var2 = global;
            var3 = var2.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var0._endTimestamp = var1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 11;
            var3 = var9[var7];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var6 = var3.ICYMIAnalytics;
            var5 = var6.trackFeedSessionCompleted;
            var3 = {};
            var10 = var0._sessionId;
            var3.icymiSessionId = var10;
            var11 = var0._endTimestamp;
            var10 = var0._startTimestamp;
            var10 = var11 - var10;
            var3.sessionDurationMs = var10;
            var10 = var0._startTimestamp;
            var3.sessionStartTimeMs = var10;
            var10 = var0._endTimestamp;
            var3.sessionEndTimeMs = var10;
            var10 = var0._impressionCount;
            var3.impressionCount = var10;
            var10 = var0._impressionItemIdMap;
            var10 = var10.size;
            var3.uniqueImpressionCount = var10;
            var12 = var2.Array;
            var11 = var12.from;
            var10 = var0._impressionItemTypes;
            var10 = var11.bind(var12)(var10);
            var3.impressionItemTypes = var10;
            var10 = var0._reloadCount;
            var3.feedReloadCount = var10;
            var10 = var0._dwelledItemsChangedCount;
            var3.feedDwelledItemsChangedCount = var10;
            var10 = var0._feedFetchCount;
            var3.feedFetchCount = var10;
            var10 = var0._latestDwellStartTimeMs;
            var3.latestDwellStartTimeMs = var10;
            var10 = _closure1_slot14;
            var3.previousIcyMiSessionCount = var10;
            var10 = var0._interactionCount;
            var3.interactionCount = var10;
            var10 = var0._dwellCount;
            var3.dwelledCount = var10;
            var10 = var0._dwelledItemIdMap;
            var10 = var10.size;
            var3.uniqueDwelledCount = var10;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.DEFAULT_UX_VARIATION;
            var3.uxVariation = var7;
            var3 = var5.bind(var6)(var3);
            var3 = var2.clearTimeout;
            var2 = var0._timeout;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot14;
            var2 = var2 + 1;
            _closure1_slot14 = var2;
            var2 = null;
            _closure1_slot12 = var2;
            var2 = _closure1_slot15;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = '_resetTimeout';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = global;
            var5 = var3.clearTimeout;
            var4 = var2._timeout;
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var4 = var3.setTimeout;
            var3 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.endSession;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = 300000;
            var1 = var4.bind(var0)(var3, var1);
            var2._timeout = var1;
            return var0;
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = '_createImpression';
        var0.key = var5;
        var5 = function arg0() {
            _fun97439: for (var _fun97439_ip = 0;;) switch (_fun97439_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = var2._constructImpressionFromInput;
                    var0 = var0.bind(var2)(var1);
                    var3 = var2._dwellCount;
                    var3 = var3 + 1;
                    var2._dwellCount = var3;
                    var6 = var2._dwelledItemIdMap;
                    var5 = var6.set;
                    var4 = var1.itemId;
                    var8 = var2._dwelledItemIdMap;
                    var7 = var8.get;
                    var3 = var1.itemId;
                    var3 = var7.bind(var8)(var3);
                    var7 = null;
                    var8 = var7 != var3;
                    var7 = 0;
                    if (!var8) {
                        _fun97439_ip = 85;
                        continue _fun97439
                    }
                case 82:
                    var7 = var3;
                case 85:
                    var3 = 1;
                    var3 = var7 + var3;
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = var2._impressionItemTypes;
                    var3 = var4.add;
                    var1 = var1.itemType;
                    var1 = var3.bind(var4)(var1);
                    var1 = var0.impressionStartTimestamp;
                    var2._latestDwellStartTimeMs = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = '_constructImpressionFromInput';
        var0.key = var5;
        var5 = function arg0() {
            _fun97440: for (var _fun97440_ip = 0;;) switch (_fun97440_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 10;
                    var0 = var4[var0];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var0);
                    var0 = var3.v4;
                    var3 = var0.bind(var3)();
                    var0 = {};
                    var5 = var1.itemId;
                    var0.itemId = var5;
                    var5 = var1.itemType;
                    var0.itemType = var5;
                    var0.impressionId = var3;
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var0.impressionStartTimestamp = var3;
                    var3 = false;
                    var0.impressionComplete = var3;
                    var3 = var1.triggerType;
                    var0.triggerType = var3;
                    var3 = var1.itemFeedIndex;
                    var0.itemFeedIndex = var3;
                    var3 = var1.itemScore;
                    var0.itemScore = var3;
                    var3 = var1.isInitiallyVisible;
                    var0.isInitiallyVisible = var3;
                    var3 = var1.itemChannelType;
                    var0.itemChannelType = var3;
                    var5 = _closure1_slot15;
                    var3 = var5.get;
                    var1 = var1.itemId;
                    var5 = var3.bind(var5)(var1);
                    var1 = null;
                    var6 = var1 != var5;
                    var3 = null;
                    if (!var6) {
                        _fun97440_ip = 185;
                        continue _fun97440
                    }
                case 182:
                    var3 = var5;
                case 185:
                    var0.itemCardHeight = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 11;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.DEFAULT_UX_VARIATION;
                    var0.uxVariation = var2;
                    var2 = new Array(0);
                    var0.interactionActionTypes = var2;
                    var2 = 0;
                    var0.interactionCount = var2;
                    var0.sessionImpressionIndex = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = '_endImpression';
        var0.key = var5;
        var4 = function arg0() {
            _fun97441: for (var _fun97441_ip = 0;;) switch (_fun97441_ip) {
                case 0:
                    var2 = this;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = var2._activeItems;
                    var1 = var3.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.itemId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var5 = var1.bind(var3)(var0);
                    var0 = var2._activeItems;
                    var1 = var0[var5];
                    var9 = null;
                    var3 = var9 != var1;
                    var0 = null;
                    if (!var3) {
                        _fun97441_ip = 458;
                        continue _fun97441
                    }
                case 60:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var1.impressionEndTimestamp = var3;
                    var3 = true;
                    var1.impressionComplete = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var11 = 11;
                    var3 = var3[var11];
                    var10 = undefined;
                    var3 = var4.bind(var10)(var3);
                    var6 = var3.ICYMIAnalytics;
                    var4 = var6.trackFeedItemDwelled;
                    var3 = {};
                    var7 = var2._sessionId;
                    var3.icymiSessionId = var7;
                    var7 = var1.impressionId;
                    var3.impressionId = var7;
                    var12 = var1.impressionEndTimestamp;
                    var7 = var1.impressionStartTimestamp;
                    var7 = var12 - var7;
                    var3.dwellTimeMs = var7;
                    var7 = var1.itemId;
                    var3.itemId = var7;
                    var7 = var1.itemType;
                    var3.itemType = var7;
                    var7 = var1.impressionStartTimestamp;
                    var3.dwellStartTimeMs = var7;
                    var7 = var1.impressionEndTimestamp;
                    var3.dwellEndTimeMs = var7;
                    var7 = var1.triggerType;
                    var3.triggerType = var7;
                    var13 = var2._dwelledItemIdMap;
                    var12 = var13.get;
                    var7 = var1.itemId;
                    var12 = var12.bind(var13)(var7);
                    var13 = var9 != var12;
                    var7 = 0;
                    if (!var13) {
                        _fun97441_ip = 262;
                        continue _fun97441
                    }
                case 259:
                    var7 = var12;
                case 262:
                    var3.itemOccurenceCountInSession = var7;
                    var7 = var1.itemFeedIndex;
                    var3.itemFeedIndex = var7;
                    var7 = var1.itemScore;
                    var3.itemScore = var7;
                    var7 = var1.isInitiallyVisible;
                    var3.isInitiallyVisible = var7;
                    var7 = var1.itemChannelType;
                    var3.itemChannelType = var7;
                    var13 = _closure1_slot15;
                    var12 = var13.get;
                    var7 = var1.itemId;
                    var12 = var12.bind(var13)(var7);
                    if (!(var9 == var12)) {
                        _fun97441_ip = 341;
                        continue _fun97441
                    }
                case 335:
                    var12 = var1.itemCardHeight;
                case 341:
                    var13 = var9 != var12;
                    var7 = null;
                    if (!var13) {
                        _fun97441_ip = 353;
                        continue _fun97441
                    }
                case 350:
                    var7 = var12;
                case 353:
                    var3.itemCardHeight = var7;
                    var7 = var1.uxVariation;
                    if (!(var9 == var7)) {
                        _fun97441_ip = 391;
                        continue _fun97441
                    }
                case 368:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var11];
                    var8 = var9.bind(var10)(var8);
                    var7 = var8.DEFAULT_UX_VARIATION;
                case 391:
                    var3.uxVariation = var7;
                    var7 = var1.interactionActionTypes;
                    var3.interactionActionTypes = var7;
                    var7 = var1.interactionCount;
                    var3.interactionCount = var7;
                    var7 = var1.sessionImpressionIndex;
                    var3.sessionImpressionIndex = var7;
                    var3 = var4.bind(var6)(var3);
                    var4 = var2._activeItems;
                    var3 = var4.splice;
                    var2 = 1;
                    var2 = var3.bind(var4)(var5, var2);
                    var0 = var1;
                case 458:
                    return var0;
            }
        };
        var0.value = var4;
        var1[26] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot16 = var1;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.Store;
    var4 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun97444: for (var _fun97444_ip = 0;;) switch (_fun97444_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun97444_ip = 69;
                        continue _fun97444
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun97444_ip = 105;
                    continue _fun97444;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var6 = this;
            var5 = var6.waitFor;
            var11 = _closure1_slot8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot11;
            var8 = _closure1_slot7;
            var7 = _closure1_slot9;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'currentSession';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'endedSessionCount';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 13;
    var4 = var7[var4];
    var13 = var8.bind(var0)(var4);
    var4 = {};
    var4.ICYMI_TAB_OPENED = var5;
    var5 = function() {
        var1 = _closure1_slot20;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var4.ICYMI_TAB_CLOSED = var5;
    var5 = function arg0() {
        _fun97449: for (var _fun97449_ip = 0;;) switch (_fun97449_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.focused;
                if (var1) {
                    _fun97449_ip = 27;
                    continue _fun97449
                }
            case 15:
                var2 = _closure1_slot21;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            case 27:
                var2 = _closure1_slot12;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun97449_ip = 49;
                    continue _fun97449
                }
            case 37:
                var2 = _closure1_slot22;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            case 49:
                var1 = _closure1_slot13;
                var2 = var1.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun97449_ip = 68;
                    continue _fun97449
                }
            case 64:
                var1 = false;
                return var1;
            case 68:
                var3 = _closure1_slot13;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = {};
                    var3 = arg0;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    var2 = 'focus';
                    var1 = 'triggerType';
                    var0[var1] = var2;
                    var2 = true;
                    var1 = 'isInitiallyVisible';
                    var0[var1] = var2;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot12;
                var0 = var1.startItemsDwell;
                var0 = var0.bind(var1)(var2);
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_SET_FOCUSED_TAB = var5;
    var5 = function arg0() {
        _fun97451: for (var _fun97451_ip = 0;;) switch (_fun97451_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot12;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun97451_ip = 38;
                    continue _fun97451
                }
            case 16:
                var4 = _closure1_slot12;
                var3 = var4.startItemsDwell;
                var2 = var0.items;
                var2 = var3.bind(var4)(var2);
                _fun97451_ip = 75;
                continue _fun97451;
            case 38:
                var4 = _closure1_slot16;
                var6 = var0.items;
                var0 = var4.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = 'list';
                var7 = var2;
                var0 = new var7[var4](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot12 = var0;
            case 75:
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_ITEMS_DWELL_START = var5;
    var5 = function arg0() {
        _fun97452: for (var _fun97452_ip = 0;;) switch (_fun97452_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot12;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun97452_ip = 53;
                    continue _fun97452
                }
            case 16:
                var5 = _closure1_slot16;
                var7 = var0.items;
                var2 = var5.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = 'list';
                var8 = var3;
                var2 = new var8[var5](var7, var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                _closure1_slot12 = var2;
            case 53:
                var2 = _closure1_slot12;
                var1 = var2.trackItemsLongImpression;
                var0 = var0.items;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_ITEMS_LONG_IMPRESSION = var5;
    var5 = function() {
        _fun97453: for (var _fun97453_ip = 0;;) switch (_fun97453_ip) {
            case 0:
                var2 = _closure1_slot12;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun97453_ip = 34;
                    continue _fun97453
                }
            case 16:
                var2 = _closure1_slot12;
                var1 = var2.incrementReloadCount;
                var1 = var1.bind(var2)();
                var0 = true;
            case 34:
                return var0;
        }
    };
    var4.RELOAD_ICYMI = var5;
    var5 = function() {
        _fun97454: for (var _fun97454_ip = 0;;) switch (_fun97454_ip) {
            case 0:
                var2 = _closure1_slot12;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun97454_ip = 44;
                    continue _fun97454
                }
            case 16:
                var3 = _closure1_slot12;
                var2 = var3.incrementFeedFetchCount;
                var2 = var2.bind(var3)();
                var2 = _closure1_slot21;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var0 = true;
            case 44:
                return var0;
        }
    };
    var4.LOAD_ICYMI_DEHYDRATED = var5;
    var5 = function arg0() {
        _fun97455: for (var _fun97455_ip = 0;;) switch (_fun97455_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.state;
                var0 = 'active';
                var0 = var0 !== var1;
                if (!var0) {
                    _fun97455_ip = 32;
                    continue _fun97455
                }
            case 19:
                var2 = _closure1_slot12;
                var1 = null;
                var0 = var1 != var2;
            case 32:
                if (!var0) {
                    _fun97455_ip = 48;
                    continue _fun97455
                }
            case 35:
                var2 = _closure1_slot20;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 48:
                return var0;
        }
    };
    var4.APP_STATE_UPDATE = var5;
    var5 = function arg0() {
        _fun97456: for (var _fun97456_ip = 0;;) switch (_fun97456_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot12;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun97456_ip = 28;
                    continue _fun97456
                }
            case 19:
                var3 = var2.isInitialSetup;
                var0 = !var3;
            case 28:
                if (!var0) {
                    _fun97456_ip = 40;
                    continue _fun97456
                }
            case 31:
                var2 = var2.preserveDrawerState;
                var0 = !var2;
            case 40:
                if (!var0) {
                    _fun97456_ip = 53;
                    continue _fun97456
                }
            case 43:
                var2 = _closure1_slot21;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 53:
                return var0;
        }
    };
    var4.CHANNEL_SELECT = var5;
    var5 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot15;
        var2 = var3.set;
        var1 = var0.itemId;
        var0 = var0.height;
        var0 = var2.bind(var3)(var1, var0);
        var0 = true;
        return var0;
    };
    var4.ICYMI_SET_CARD_HEIGHT = var5;
    var5 = function arg0() {
        _fun97458: for (var _fun97458_ip = 0;;) switch (_fun97458_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot12;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun97458_ip = 52;
                    continue _fun97458
                }
            case 16:
                var5 = _closure1_slot16;
                var8 = _closure1_slot13;
                var2 = var5.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = 'focus';
                var9 = var3;
                var2 = new var9[var5](var8, var7, var6);
                var2 = var2 instanceof Object ? var2 : var3;
                _closure1_slot12 = var2;
            case 52:
                var4 = _closure1_slot12;
                var3 = var4.trackItemInteraction;
                var2 = var0.itemId;
                var1 = var0.itemType;
                var0 = var0.actionType;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_ITEM_INTERACTED = var5;
    var5 = function arg0() {
        _fun97459: for (var _fun97459_ip = 0;;) switch (_fun97459_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun97459_ip = 49;
                    continue _fun97459
                }
            case 13:
                var4 = _closure1_slot16;
                var6 = _closure1_slot13;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = 'focus';
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure1_slot12 = var1;
            case 49:
                var2 = _closure1_slot12;
                var1 = var2.trackFeedItemActioned;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_FEED_ITEM_ACTIONED = var5;
    var5 = function arg0() {
        _fun97460: for (var _fun97460_ip = 0;;) switch (_fun97460_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun97460_ip = 49;
                    continue _fun97460
                }
            case 13:
                var4 = _closure1_slot16;
                var6 = _closure1_slot13;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = 'focus';
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure1_slot12 = var1;
            case 49:
                var2 = _closure1_slot12;
                var1 = var2.trackFeedFilterActioned;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_FEED_FILTER_ACTIONED = var5;
    var5 = function arg0() {
        _fun97461: for (var _fun97461_ip = 0;;) switch (_fun97461_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun97461_ip = 49;
                    continue _fun97461
                }
            case 13:
                var4 = _closure1_slot16;
                var6 = _closure1_slot13;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = 'focus';
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure1_slot12 = var1;
            case 49:
                var2 = _closure1_slot12;
                var1 = var2.trackFeedPageActioned;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var4.ICYMI_FEED_PAGE_ACTIONED = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/ICYMISessionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var3 = function() {
        _fun97462: for (var _fun97462_ip = 0;;) switch (_fun97462_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun97462_ip = 38;
                    continue _fun97462
                }
            case 13:
                var2 = global;
                var4 = var2.clearTimeout;
                var2 = _closure1_slot12;
                var3 = var2._timeout;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
            case 38:
                _closure1_slot12 = var1;
                var1 = new Array(0);
                _closure1_slot13 = var1;
                var1 = 0;
                _closure1_slot14 = var1;
                var1 = _closure1_slot15;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var2.resetGlobalState = var3;
    var2.ICYMISession = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1590, 1211, 8880, 1216, 8875, 491, 8889, 566, 806, 2]);