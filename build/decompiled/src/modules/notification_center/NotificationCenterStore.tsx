// modules/notification_center/NotificationCenterStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var8
        _fun101583: for (var _fun101583_ip = 0;;) switch (_fun101583_ip) {
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
                _fun101583_ip = 76;
                continue _fun101583;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var3 = function() { // Original name: handleLoadFinished, environment: var8
        var2 = _closure1_slot11;
        var1 = false;
        var2.hasNewMentions = var1;
        var2 = _closure1_slot11;
        var2.isDataStale = var1;
        var0 = _closure1_slot11;
        var0.isRefreshing = var1;
        var0 = undefined;
        return var0;
    };
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
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Millis;
    var7 = var1.DAY;
    var1 = 90;
    var1 = var1 * var7;
    var _closure1_slot10 = var1;
    var1 = {
        'tab': null,
        'localItemAcks': null,
        'hasNewMentions': false,
        'isDataStale': false,
        'isRefreshing': false
    };
    var7 = {};
    var1.localItemAcks = var7;
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var8
        var3 = function() { // Original name: NotificationCenterStore, environment: var5
            _fun101588: for (var _fun101588_ip = 0;;) switch (_fun101588_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun101588_ip = 69;
                        continue _fun101588
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun101588_ip = 105;
                    continue _fun101588;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun101589: for (var _fun101589_ip = 0;;) switch (_fun101589_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var3 = var4.waitFor;
                    var1 = _closure1_slot9;
                    var1 = var3.bind(var4)(var1);
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun101589_ip = 177;
                        continue _fun101589
                    }
                case 33:
                    _closure1_slot11 = var2;
                    var5 = var2.localItemAcks;
                    if (!(var1 == var5)) {
                        _fun101589_ip = 49;
                        continue _fun101589
                    }
                case 47:
                    var5 = {};
                case 49:
                    var1 = {};
                    var10 = global;
                    var4 = var10.Object;
                    var3 = var4.entries;
                    var9 = var3.bind(var4)(var5);
                    var3 = var9.length;
                    var8 = 0;
                    var3 = var8 < var3;
                    var7 = undefined;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    if (!var3) {
                        _fun101589_ip = 159;
                        continue _fun101589
                    }
                case 94:
                    var11 = var9[var4];
                    var3 = _closure1_slot8;
                    var3 = var3.bind(var7)(var11, var6);
                    var11 = var3[var8];
                    var3 = var3[var5];
                    var13 = var10.Date;
                    var12 = var13.now;
                    var12 = var12.bind(var13)();
                    var13 = var12 - var3;
                    var12 = _closure1_slot10;
                    if (!(var13 < var12)) {
                        _fun101589_ip = 147;
                        continue _fun101589
                    }
                case 143:
                    var1[var11] = var3;
                case 147:
                    var4 = var4 + 1;
                    var3 = var9.length;
                    if (var4 < var3) {
                        _fun101589_ip = 94;
                        continue _fun101589
                    }
                case 159:
                    var2.localItemAcks = var1;
                    var1 = _closure1_slot11;
                    var0 = true;
                    var1.isDataStale = var0;
                case 177:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getTab';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun101591: for (var _fun101591_ip = 0;;) switch (_fun101591_ip) {
                case 0:
                    var0 = _closure1_slot11;
                    var0 = var0.tab;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun101591_ip = 53;
                        continue _fun101591
                    }
                case 19:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.NotificationCenterTabs;
                    var0 = var1.ForYou;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isLocalItemAcked';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun101592: for (var _fun101592_ip = 0;;) switch (_fun101592_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.local_id;
                    var4 = null;
                    var0 = var4 != var0;
                    if (!var0) {
                        _fun101592_ip = 97;
                        continue _fun101592
                    }
                case 18:
                    var1 = _closure1_slot11;
                    var5 = var1.localItemAcks;
                    var1 = var3.local_id;
                    var1 = var5[var1];
                    var1 = var4 != var1;
                    if (var1) {
                        _fun101592_ip = 94;
                        continue _fun101592
                    }
                case 48:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.age;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot10;
                    var1 = var3 > var2;
                case 94:
                    var0 = var1;
                case 97:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasNewMentions';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            var0 = var0.hasNewMentions;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isDataStale';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            var0 = var0.isDataStale;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isRefreshing';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            var0 = var0.isRefreshing;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'shouldReload';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun101596: for (var _fun101596_ip = 0;;) switch (_fun101596_ip) {
                case 0:
                    var0 = _closure1_slot11;
                    var0 = var0.hasNewMentions;
                    if (var0) {
                        _fun101596_ip = 26;
                        continue _fun101596
                    }
                case 16:
                    var2 = _closure1_slot11;
                    var0 = var2.isDataStale;
                case 26:
                    if (var0) {
                        _fun101596_ip = 39;
                        continue _fun101596
                    }
                case 29:
                    var1 = _closure1_slot11;
                    var0 = var1.isRefreshing;
                case 39:
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'NotificationCenterStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 11;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function(arg0) { // Original name: handleMessageCreate, environment: var8
        _fun101597: for (var _fun101597_ip = 0;;) switch (_fun101597_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var3 = _closure1_slot9;
                var2 = var3.hasMention;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun101597_ip = 48;
                    continue _fun101597
                }
            case 36:
                var1 = _closure1_slot11;
                var0 = true;
                var1.hasNewMentions = var0;
            case 48:
                var0 = undefined;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var9;
    var9 = function(arg0) { // Original name: handleSetTab, environment: var8
        var1 = {};
        var4 = _closure1_slot11;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = arg0;
        var3 = var2.tab;
        var2 = 'tab';
        var1[var2] = var3;
        _closure1_slot11 = var1;
        var0 = undefined;
        return var0;
    };
    var1.NOTIFICATION_CENTER_SET_TAB = var9;
    var9 = function(arg0) { // Original name: handleAck, environment: var8
        var0 = arg0;
        var2 = var0.localIds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = {};
            var5 = _closure1_slot11;
            var6 = var1;
            var2 = copyDataProperties(var6, var5);
            var3 = {};
            var2 = _closure1_slot11;
            var5 = var2.localItemAcks;
            var6 = var3;
            var2 = copyDataProperties(var6, var5);
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var4 = var2.bind(var4)();
            var2 = arg0;
            var3[var2] = var4;
            var2 = 'localItemAcks';
            var1[var2] = var3;
            _closure1_slot11 = var1;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.NOTIFICATION_CENTER_ITEMS_LOCAL_ACK = var9;
    var8 = function() { // Original name: handleRefreshData, environment: var8
        var1 = _closure1_slot11;
        var0 = true;
        var1.isRefreshing = var0;
        var0 = undefined;
        return var0;
    };
    var1.NOTIFICATION_CENTER_REFRESH = var8;
    var1.LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE = var3;
    var1.LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS = var3;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/NotificationCenterStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 8586, 667, 3931, 21, 566, 806, 2]);