// modules/presence_subscriptions/PresenceSubscriptionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun77561: for (var _fun77561_ip = 0;;) switch (_fun77561_ip) {
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
                _fun77561_ip = 76;
                continue _fun77561;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun77565: for (var _fun77565_ip = 0;;) switch (_fun77565_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot14;
                var3 = var0.applicationId;
                var2 = var0.partyId;
                var0 = undefined;
                var2 = var4.bind(var0)(var3, var2);
                var0 = _closure1_slot10;
                var0 = var2 in var0;
                if (var0) {
                    _fun77565_ip = 48;
                    continue _fun77565
                }
            case 40:
                var1 = _closure1_slot11;
                var0 = var2 in var1;
            case 48:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var8 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = {};
        _closure1_slot11 = var0;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.INVITE_EXPIRATION_MS;
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var10 = var1.DelayedCall;
    var1 = var10.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var10
        }
    });
    var13 = 3000;
    var12 = function() {
        _fun77567: for (var _fun77567_ip = 0;;) switch (_fun77567_ip) {
            case 0:
                var3 = new Array(0);
                var0 = global;
                var4 = var0.Object;
                var2 = var4.entries;
                var0 = _closure1_slot11;
                var8 = var2.bind(var4)(var0);
                var0 = var8.length;
                var4 = 0;
                var2 = var4 < var0;
                var0 = undefined;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                if (!var2) {
                    _fun77567_ip = 114;
                    continue _fun77567
                }
            case 54:
                var9 = var8[var5];
                var2 = _closure1_slot7;
                var2 = var2.bind(var0)(var9, var7);
                var9 = var2[var4];
                var10 = var2[var6];
                var2 = var3.push;
                var2 = var2.bind(var3)(var10);
                var2 = _closure1_slot10;
                var2[var9] = var10;
                var2 = _closure1_slot11;
                var2 = delete var2[var9];
                var5 = var5 + 1;
                var2 = var8.length;
                if (var5 < var2) {
                    _fun77567_ip = 54;
                    continue _fun77567
                }
            case 114:
                var2 = var3.length;
                if (!(var4 !== var2)) {
                    _fun77567_ip = 154;
                    continue _fun77567
                }
            case 123:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.subscribeActivities;
                var1 = var1.bind(var2)(var3);
            case 154:
                return var0;
        }
    };
    var14 = var7;
    var1 = new var14[var10](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun77569: for (var _fun77569_ip = 0;;) switch (_fun77569_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77569_ip = 69;
                        continue _fun77569
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77569_ip = 105;
                    continue _fun77569;
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
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'isSubscribed';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot15;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PresenceSubscriptionsStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        _fun77572: for (var _fun77572_ip = 0;;) switch (_fun77572_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.subscription;
                var3 = global;
                var1 = var3.Date;
                var0 = var1.now;
                var13 = var0.bind(var1)();
                var4 = var3.Object;
                var1 = var4.entries;
                var0 = _closure1_slot10;
                var8 = var1.bind(var4)(var0);
                var0 = var8.length;
                var11 = 0;
                var4 = var11 < var0;
                var7 = false;
                var1 = true;
                var5 = undefined;
                var10 = 2;
                var9 = 1;
                var6 = 0;
                var0 = false;
                if (!var4) {
                    _fun77572_ip = 137;
                    continue _fun77572
                }
            case 80:
                var14 = var8[var6];
                var4 = _closure1_slot7;
                var4 = var4.bind(var5)(var14, var10);
                var14 = var4[var11];
                var4 = var4[var9];
                var4 = var4.expiresAt;
                if (!(var4 < var13)) {
                    _fun77572_ip = 122;
                    continue _fun77572
                }
            case 112:
                var4 = _closure1_slot10;
                var4 = delete var4[var14];
                var7 = true;
            case 122:
                var6 = var6 + 1;
                var4 = var8.length;
                var0 = var7;
                if (var6 < var4) {
                    _fun77572_ip = 80;
                    continue _fun77572
                }
            case 137:
                var7 = var3.Object;
                var6 = var7.entries;
                var4 = _closure1_slot11;
                var8 = var6.bind(var7)(var4);
                var4 = var8.length;
                var4 = var11 < var4;
                var7 = var0;
                var6 = 0;
                var0 = var7;
                if (!var4) {
                    _fun77572_ip = 235;
                    continue _fun77572
                }
            case 178:
                var14 = var8[var6];
                var4 = _closure1_slot7;
                var4 = var4.bind(var5)(var14, var10);
                var14 = var4[var11];
                var4 = var4[var9];
                var4 = var4.expiresAt;
                if (!(var4 < var13)) {
                    _fun77572_ip = 220;
                    continue _fun77572
                }
            case 210:
                var4 = _closure1_slot11;
                var4 = delete var4[var14];
                var7 = true;
            case 220:
                var6 = var6 + 1;
                var4 = var8.length;
                var0 = var7;
                if (var6 < var4) {
                    _fun77572_ip = 178;
                    continue _fun77572
                }
            case 235:
                var11 = var12.userId;
                var10 = var12.applicationId;
                var9 = var12.partyId;
                var8 = var12.messageId;
                var7 = var12.channelId;
                var6 = var12.inviteTime;
                var4 = _closure1_slot15;
                var4 = var4.bind(var5)(var12);
                if (var4) {
                    _fun77572_ip = 393;
                    continue _fun77572
                }
            case 279:
                var4 = _closure1_slot9;
                var6 = var6 + var4;
                var12 = var3.Date;
                var4 = var12.now;
                var4 = var4.bind(var12)();
                if (!(!(var6 < var4))) {
                    _fun77572_ip = 391;
                    continue _fun77572
                }
            case 306:
                var4 = _closure1_slot14;
                var5 = var4.bind(var5)(var10, var9);
                var4 = _closure1_slot9;
                var6 = var3.Date;
                var3 = var6.now;
                var3 = var3.bind(var6)();
                var6 = var4 + var3;
                var4 = _closure1_slot11;
                var3 = {};
                var3.userId = var11;
                var3.applicationId = var10;
                var3.partyId = var9;
                var3.messageId = var8;
                var3.channelId = var7;
                var3.expiresAt = var6;
                var4[var5] = var3;
                var3 = _closure1_slot12;
                var2 = var3.delay;
                var2 = var2.bind(var3)();
                return var1;
            case 391:
                return var0;
            case 393:
                return var0;
        }
    };
    var1.PRESENCE_SUBSCRIPTIONS_ADD = var9;
    var1.CONNECTION_OPEN = var8;
    var1.CONNECTION_RESUMED = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = {};
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
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
    var3 = 'modules/presence_subscriptions/PresenceSubscriptionsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 3610, 3457, 9861, 3630, 566, 806, 2]);