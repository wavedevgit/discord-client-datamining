// modules/search/SearchMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun38564: for (var _fun38564_ip = 0;;) switch (_fun38564_ip) {
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
                _fun38564_ip = 74;
                continue _fun38564;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun38567: for (var _fun38567_ip = 0;;) switch (_fun38567_ip) {
            case 0:
                var3 = _closure1_slot10;
                var2 = var3.get;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun38567_ip = 50;
                    continue _fun38567
                }
            case 26:
                var1 = _closure1_slot9;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var1 = new var5[var1](var4);
                var0 = var1 instanceof Object ? var1 : var2;
            case 50:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot14;
        var0 = undefined;
        var0 = var2.bind(var0)(var3);
        var2 = _closure1_slot10;
        var1 = var2.set;
        var1 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun38569: for (var _fun38569_ip = 0;;) switch (_fun38569_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = var2.get;
                var4 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun38569_ip = 55;
                    continue _fun38569
                }
            case 26:
                var2 = arg1;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var1 = _closure1_slot11;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
                var0 = true;
                return var0;
            case 55:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        var1 = _closure1_slot14;
        var2 = undefined;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = arg1;
        var0 = var0.bind(var2)(var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var8 = function arg0() {
        _fun38571: for (var _fun38571_ip = 0;;) switch (_fun38571_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var1 = var7.type;
                var _closure2_slot1 = var1;
                var3 = var7.messageId;
                var5 = var7.userId;
                var1 = var7.emoji;
                var _closure2_slot2 = var1;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var4);
                var4 = var6.shouldApplyReaction;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun38571_ip = 81;
                    continue _fun38571
                }
            case 77:
                var4 = false;
                return var4;
            case 81:
                var6 = _closure1_slot7;
                var4 = var6.getId;
                var4 = var4.bind(var6)();
                var4 = var4 === var5;
                var _closure2_slot3 = var4;
                var1 = _closure1_slot16;
                var0 = function(arg0) { // Environment: var0
                    _fun38572: for (var _fun38572_ip = 0;;) switch (_fun38572_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = _closure2_slot0;
                            var5 = var0.reactionType;
                            var2 = _closure2_slot1;
                            var0 = 'MESSAGE_REACTION_ADD';
                            if (!(var0 !== var2)) {
                                _fun38572_ip = 51;
                                continue _fun38572
                            }
                        case 28:
                            var3 = var6.removeReaction;
                            var2 = _closure2_slot2;
                            var0 = _closure2_slot3;
                            var0 = var3.bind(var6)(var2, var0, var5);
                            _fun38572_ip = 84;
                            continue _fun38572;
                        case 51:
                            var4 = var6.addReaction;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var8 = var1.colors;
                            var11 = var6;
                            var7 = var5;
                            var0 = var11[var4](var10, var9, var8, var7, var6);
                        case 84:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var3 = false;
            var2.isIndexing = var3;
            var2.isHistoricalIndexing = var3;
            var2.isFetching = var3;
            var1 = null;
            var2.analyticsId = var1;
            var2.error = var1;
            var2.messages = var1;
            var4 = 0;
            var2.documentsIndexed = var4;
            var2.totalResults = var1;
            var4 = global;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.messageIds = var4;
            var2.isInitialFetchComplete = var3;
            var2.cursor = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'handleSearchStart';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = true;
            var1.isFetching = var0;
            var0 = false;
            var1.isIndexing = var0;
            var0 = null;
            var1.analyticsId = var0;
            var1.error = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleSearchIndexing';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = true;
            var1.isInitialFetchComplete = var0;
            var1.isIndexing = var0;
            var1.isHistoricalIndexing = var0;
            var0 = false;
            var1.isFetching = var0;
            var0 = null;
            var1.error = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleSearchFailure';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var0 = false;
            var2.isFetching = var0;
            var2.isIndexing = var0;
            var1 = true;
            var2.isInitialFetchComplete = var1;
            var2.isHistoricalIndexing = var0;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var4 = var1.APIError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var5 = arg0;
            var6 = var3;
            var1 = new var6[var4](var5, var4);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.error = var1;
            var1 = null;
            var2.analyticsId = var1;
            var1 = 0;
            var2.documentsIndexed = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'handleSearchSuccess';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun38578: for (var _fun38578_ip = 0;;) switch (_fun38578_ip) {
                case 0:
                    var5 = arg0;
                    var6 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var7 = var5.analyticsId;
                    var3 = var5.cursor;
                    var1 = var5.totalResults;
                    var0 = var5.doingHistoricalIndex;
                    var5 = var5.documentsIndexed;
                    var8 = undefined;
                    var _closure3_slot1 = var8;
                    var _closure3_slot2 = var8;
                    var2.analyticsId = var7;
                    var7 = false;
                    var2.isFetching = var7;
                    var2.isIndexing = var7;
                    var7 = true;
                    var2.isInitialFetchComplete = var7;
                    var2.isHistoricalIndexing = var0;
                    var0 = null;
                    var2.error = var0;
                    var2.documentsIndexed = var5;
                    var2.cursor = var3;
                    var5 = var2.messages;
                    if (!(var0 == var5)) {
                        _fun38578_ip = 122;
                        continue _fun38578
                    }
                case 118:
                    var5 = new Array(0);
                case 122:
                    var3 = new Array(0);
                    var10 = 0;
                    var12 = var3;
                    var11 = var5;
                    var0 = arraySpread(var12, var11, var10);
                    _closure3_slot1 = var3;
                    var0 = new Array(0);
                    _closure3_slot2 = var0;
                    var5 = var6.forEach;
                    var4 = function(arg0) { // Environment: var4
                        _fun38579: for (var _fun38579_ip = 0;;) switch (_fun38579_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot0;
                                var4 = var1.messageIds;
                                var3 = var4.has;
                                var1 = var2.id;
                                var1 = var3.bind(var4)(var1);
                                if (var1) {
                                    _fun38579_ip = 52;
                                    continue _fun38579
                                }
                            case 34:
                                var4 = _closure1_slot8;
                                var3 = var4.isBlockedOrIgnoredForMessage;
                                var1 = var3.bind(var4)(var2);
                            case 52:
                                if (var1) {
                                    _fun38579_ip = 108;
                                    continue _fun38579
                                }
                            case 55:
                                var1 = _closure3_slot0;
                                var4 = var1.messageIds;
                                var3 = var4.add;
                                var1 = var2.id;
                                var1 = var3.bind(var4)(var1);
                                var3 = _closure3_slot1;
                                var1 = var3.push;
                                var1 = var1.bind(var3)(var2);
                                var1 = _closure3_slot2;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 108:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var2.messages = var3;
                    var2.totalResults = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7 = var7.bind(var0)();
    var _closure1_slot9 = var7;
    var7 = var1.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot10 = var7;
    var7 = var1.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot11 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun38581: for (var _fun38581_ip = 0;;) switch (_fun38581_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38581_ip = 69;
                        continue _fun38581
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38581_ip = 105;
                    continue _fun38581;
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
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var0 = _closure1_slot8;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getTotalCount';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.totalResults;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getIsInitialFetchComplete';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isInitialFetchComplete;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getIsIndexing';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isIndexing;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getIsHistoricalIndexing';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isHistoricalIndexing;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getDocumentsIndexed';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.documentsIndexed;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getIsFetching';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isFetching;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.error;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getMessages';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.messages;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getCursor';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.cursor;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getAnalyticsId';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.analyticsId;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'hasSearchState';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot10;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SearchMessageStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.ids;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot15;
            var0 = undefined;
            var1 = arg0;
            var2 = var2.bind(var0)(var1);
            var1 = var2.handleSearchStart;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_MESSAGES_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var5 = arg0;
            var3 = _closure1_slot15;
            var2 = var5.id;
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var6 = var5.messages;
            var3 = var6.map;
            var2 = function(arg0) { // Environment: var1
                _fun38609: for (var _fun38609_ip = 0;;) switch (_fun38609_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1[Symbol.iterator];
                        var1 = var0().next;
                        var4 = var1().value;
                        var1 = var0;
                        var3 = undefined;
                        var1 = var1 === var3;
                        var2 = undefined;
                        if (var1) {
                            _fun38609_ip = 27;
                            continue _fun38609
                        }
                    case 24:
                        var2 = var4;
                    case 27:
                        if (var1) {
                            _fun38609_ip = 33;
                            continue _fun38609
                        }
                    case 30:
                        var0.return();
                    case 33:
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 8;
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.createMessageRecord;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var3 = var3.bind(var6)(var2);
            var2 = var4.handleSearchSuccess;
            var3 = var2.bind(var4)(var5, var3);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun38610: for (var _fun38610_ip = 0;;) switch (_fun38610_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = _closure1_slot11;
                        var3 = var4.set;
                        var2 = var0.id;
                        var2 = var3.bind(var4)(var2, var0);
                        var4 = _closure1_slot12;
                        var3 = var4.get;
                        var2 = var0.id;
                        var2 = var3.bind(var4)(var2);
                        var3 = null;
                        var3 = var3 != var2;
                        var4 = 0;
                        if (!var3) {
                            _fun38610_ip = 59;
                            continue _fun38610
                        }
                    case 56:
                        var4 = var2;
                    case 59:
                        var3 = _closure1_slot12;
                        var2 = var3.set;
                        var1 = var0.id;
                        var0 = 1;
                        var0 = var4 + var0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_MESSAGES_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.ids;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot15;
            var0 = undefined;
            var1 = arg0;
            var2 = var2.bind(var0)(var1);
            var1 = var2.handleSearchIndexing;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_MESSAGES_INDEXING = var9;
    var9 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = var1.ids;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot15;
            var0 = undefined;
            var1 = arg0;
            var3 = var2.bind(var0)(var1);
            var2 = var3.handleSearchFailure;
            var1 = _closure2_slot0;
            var1 = var1.error;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_MESSAGES_FAILURE = var9;
    var9 = function arg0() {
        _fun38615: for (var _fun38615_ip = 0;;) switch (_fun38615_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot10;
                var3 = var4.get;
                var2 = var0.id;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun38615_ip = 77;
                    continue _fun38615
                }
            case 31:
                var4 = var2.messageIds;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun38616: for (var _fun38616_ip = 0;;) switch (_fun38616_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot12;
                            var1 = var3.get;
                            var1 = var1.bind(var3)(var2);
                            var3 = null;
                            var3 = var3 != var1;
                            var5 = 0;
                            if (!var3) {
                                _fun38616_ip = 34;
                                continue _fun38616
                            }
                        case 31:
                            var5 = var1;
                        case 34:
                            var1 = 1;
                            if (!(!(var5 <= var1))) {
                                _fun38616_ip = 62;
                                continue _fun38616
                            }
                        case 41:
                            var4 = _closure1_slot12;
                            var3 = var4.set;
                            var1 = var5 - var1;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun38616_ip = 90;
                            continue _fun38616;
                        case 62:
                            var3 = _closure1_slot11;
                            var1 = var3.delete;
                            var1 = var1.bind(var3)(var2);
                            var1 = _closure1_slot12;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot10;
                var1 = var2.delete;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 77:
                var0 = false;
                return var0;
        }
    };
    var1.SEARCH_MESSAGES_CLEAR = var9;
    var9 = function() {
        var0 = global;
        var1 = var0.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var4 = var2;
        var1 = new var4[var1](var3);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot10 = var2;
        var2 = var0.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot11 = var2;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var4 = var2;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_MESSAGES_CLEAR_ALL = var9;
    var9 = function arg0() {
        _fun38618: for (var _fun38618_ip = 0;;) switch (_fun38618_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.message;
                var4 = var0.id;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun38618_ip = 100;
                    continue _fun38618
                }
            case 19:
                var5 = _closure1_slot11;
                var3 = var5.get;
                var6 = var3.bind(var5)(var4);
                if (!(var0 != var6)) {
                    _fun38618_ip = 96;
                    continue _fun38618
                }
            case 40:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.updateMessageRecord;
                var2 = var2.message;
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot11;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
            case 96:
                var0 = false;
                return var0;
            case 100:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var9;
    var1.MESSAGE_REACTION_ADD = var8;
    var9 = function arg0() {
        var1 = arg0;
        var3 = var1.messageId;
        var1 = var1.reactions;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot7;
        var2 = var4.getId;
        var2 = var2.bind(var4)();
        var _closure2_slot1 = var2;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var2 = var3.addReactionBatch;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var1.MESSAGE_REACTION_ADD_MANY = var9;
    var1.MESSAGE_REACTION_REMOVE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.messageId;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var2 = var3.set;
            var1 = 'reactions';
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var1.MESSAGE_REACTION_REMOVE_ALL = var8;
    var8 = function arg0() {
        var1 = arg0;
        var3 = var1.messageId;
        var1 = var1.emoji;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot16;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.removeReactionsForEmoji;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var1.MESSAGE_REACTION_REMOVE_EMOJI = var8;
    var3 = function() {
        var0 = global;
        var1 = var0.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var4 = var2;
        var1 = new var4[var1](var3);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot10 = var2;
        var2 = var0.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot11 = var2;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var4 = var2;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var3;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/SearchMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1216, 3091, 3341, 3963, 3093, 566, 806, 2]);