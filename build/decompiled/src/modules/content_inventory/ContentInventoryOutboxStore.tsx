// modules/content_inventory/ContentInventoryOutboxStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun62641: for (var _fun62641_ip = 0;;) switch (_fun62641_ip) {
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
                _fun62641_ip = 74;
                continue _fun62641;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var0 = global;
        var1 = var0.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot7 = var2;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot8 = var0;
        var0 = null;
        _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
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
    var7 = var1.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot8 = var1;
    var1 = null;
    var _closure1_slot9 = var1;
    var1 = false;
    var _closure1_slot10 = var1;
    var _closure1_slot11 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun62646: for (var _fun62646_ip = 0;;) switch (_fun62646_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun62646_ip = 69;
                        continue _fun62646
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun62646_ip = 105;
                    continue _fun62646;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getMatchingOutboxEntry';
        var4.key = var0;
        var0 = function arg0() {
            _fun62647: for (var _fun62647_ip = 0;;) switch (_fun62647_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.activity;
                    var4 = var0.userId;
                    var2 = _closure1_slot7;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var4);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun62647_ip = 41;
                        continue _fun62647
                    }
                case 37:
                    if (!(var2 == var3)) {
                        _fun62647_ip = 45;
                        continue _fun62647
                    }
                case 41:
                    var2 = undefined;
                    return var2;
                case 45:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.findMatchingEntry;
                    var0 = var0.entries;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserOutbox';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot7;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isFetchingUserOutbox';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot8;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'deleteOutboxEntryError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isDeletingEntryHistory';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasInitialized';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ContentInventoryOutboxStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var1 = _closure1_slot13;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = true;
        _closure1_slot11 = var1;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function() {
        var1 = _closure1_slot13;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot8;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_FETCH_OUTBOX_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var7 = var0.outbox;
        var2 = var0.userId;
        var4 = _closure1_slot7;
        var3 = var4.set;
        var1 = {};
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 'lastFetched';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        var1 = _closure1_slot8;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot8;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE = var8;
    var8 = function() {
        var0 = null;
        _closure1_slot9 = var0;
        var0 = true;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START = var8;
    var8 = function arg0() {
        _fun62659: for (var _fun62659_ip = 0;;) switch (_fun62659_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.entry;
                var _closure2_slot0 = var2;
                var4 = var1.userId;
                var2 = null;
                _closure1_slot9 = var2;
                var5 = _closure1_slot7;
                var3 = var5.get;
                var5 = var3.bind(var5)(var4);
                if (!(var2 != var5)) {
                    _fun62659_ip = 114;
                    continue _fun62659
                }
            case 47:
                var3 = var5.entries;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 !== var0;
                    return var0;
                };
                var6 = var2.bind(var3)(var0);
                var3 = _closure1_slot7;
                var2 = var3.set;
                var0 = {};
                var8 = var0;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var5 = 'entries';
                var0[var5] = var6;
                var0 = var2.bind(var3)(var4, var0);
                var0 = false;
                _closure1_slot10 = var0;
                var0 = undefined;
                return var0;
            case 114:
                var0 = false;
                return var0;
        }
    };
    var1.CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.error;
        _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE = var8;
    var3 = function() {
        var0 = null;
        _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/ContentInventoryOutboxStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 7837, 566, 806, 2]);