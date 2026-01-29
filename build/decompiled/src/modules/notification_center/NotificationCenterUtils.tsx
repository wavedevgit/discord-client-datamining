// modules/notification_center/NotificationCenterUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/NotificationCenterUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun38324: for (var _fun38324_ip = 0;;) switch (_fun38324_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun38324_ip = 11;
                    continue _fun38324
                }
            case 9:
                var3 = true;
            case 11:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 0;
                var0 = var0[var6];
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var5 = arg0;
                var0.since = var5;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var5.bind(var2)(var4);
                if (var3) {
                    _fun38324_ip = 71;
                    continue _fun38324
                }
            case 63:
                var3 = var4.getFullFormatter;
                _fun38324_ip = 77;
                continue _fun38324;
            case 71:
                var3 = var4.getAbbreviatedFormatter;
            case 77:
                var0.getFormatter = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getRelativeTimestamp = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun38325: for (var _fun38325_ip = 0;;) switch (_fun38325_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var0 = var2.acked;
                if (var0) {
                    _fun38325_ip = 99;
                    continue _fun38325
                }
            case 15:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var6 = undefined;
                var1 = var4.bind(var6)(var1);
                var1 = var1.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
                var1 = var5 !== var1;
                if (!var1) {
                    _fun38325_ip = 96;
                    continue _fun38325
                }
            case 53:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 2;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.compare;
                var2 = var2.id;
                var3 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var1 = var3 >= var2;
            case 96:
                var0 = var1;
            case 99:
                return var0;
        }
    };
    var2.isRemoteAcked = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: incomingFriendRequestLocalItem, environment: var1
        var6 = arg0;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 2;
        var0 = var5[var0];
        var4 = undefined;
        var7 = var1.bind(var4)(var0);
        var1 = var7.fromTimestamp;
        var3 = global;
        var9 = var3.Date;
        var0 = var9.prototype;
        var8 = Object.create(var0, {
            constructor: {
                value: var9
            }
        });
        var13 = arg1;
        var14 = var8;
        var0 = new var14[var9](var13, var12);
        var8 = var0 instanceof Object ? var0 : var8;
        var0 = var8.getTime;
        var0 = var0.bind(var8)();
        var1 = var1.bind(var7)(var0);
        var0 = {
            'acked': false,
            'forceUnacked': true,
            'other_user': null,
            'kind': 'notification-center-item'
        };
        var0.other_user = var6;
        var10 = var6.id;
        var7 = var3.HermesInternal;
        var9 = var7.concat;
        var8 = 'incoming_friend_requests_';
        var7 = '_';
        var7 = var9.bind(var8)(var10, var7, var1);
        var0.local_id = var7;
        var7 = var6.id;
        var3 = var3.HermesInternal;
        var6 = var3.concat;
        var3 = 'https://discord.com/users/';
        var3 = var6.bind(var3)(var7);
        var0.deeplink = var3;
        var3 = _closure1_slot0;
        var2 = 3;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.NotificationCenterLocalItems;
        var2 = var2.INCOMING_FRIEND_REQUESTS;
        var0.type = var2;
        var0.id = var1;
        var1 = arg2;
        var0.applicationId = var1;
        return var0;
    };
    var2.incomingFriendRequestLocalItem = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: incomingGameFriendRequestLocalItem, environment: var1
        var6 = arg0;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 2;
        var0 = var5[var0];
        var4 = undefined;
        var7 = var1.bind(var4)(var0);
        var1 = var7.fromTimestamp;
        var3 = global;
        var9 = var3.Date;
        var0 = var9.prototype;
        var8 = Object.create(var0, {
            constructor: {
                value: var9
            }
        });
        var13 = arg1;
        var14 = var8;
        var0 = new var14[var9](var13, var12);
        var8 = var0 instanceof Object ? var0 : var8;
        var0 = var8.getTime;
        var0 = var0.bind(var8)();
        var1 = var1.bind(var7)(var0);
        var0 = {
            'acked': false,
            'forceUnacked': true,
            'other_user': null,
            'kind': 'notification-center-item'
        };
        var0.other_user = var6;
        var10 = var6.id;
        var7 = var3.HermesInternal;
        var9 = var7.concat;
        var8 = 'incoming_game_friend_requests_';
        var7 = '_';
        var7 = var9.bind(var8)(var10, var7, var1);
        var0.local_id = var7;
        var7 = var6.id;
        var3 = var3.HermesInternal;
        var6 = var3.concat;
        var3 = 'https://discord.com/users/';
        var3 = var6.bind(var3)(var7);
        var0.deeplink = var3;
        var3 = _closure1_slot0;
        var2 = 3;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.NotificationCenterLocalItems;
        var2 = var2.INCOMING_GAME_FRIEND_REQUESTS;
        var0.type = var2;
        var0.id = var1;
        var1 = arg2;
        var0.applicationId = var1;
        return var0;
    };
    var2.incomingGameFriendRequestLocalItem = var3;
    var3 = function(arg0) { // Original name: mobileNativeUpdateAvailableLocalItem, environment: var1
        var1 = arg0;
        var0 = {
            'acked': false,
            'enableBadge': true,
            'id': null,
            'kind': 'notification-center-item'
        };
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 2;
        var3 = var5[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var7 = var8.fromTimestamp;
        var3 = global;
        var6 = var3.Date;
        var9 = var6.prototype;
        var9 = Object.create(var9, {
            constructor: {
                value: var6
            }
        });
        var11 = var9;
        var6 = new var11[var6](var10);
        var9 = var6 instanceof Object ? var6 : var9;
        var6 = var9.getTime;
        var6 = var6.bind(var9)();
        var6 = var7.bind(var8)(var6);
        var0.id = var6;
        var7 = var1.build;
        var3 = var3.HermesInternal;
        var6 = var3.concat;
        var3 = 'mobile_update_available_';
        var3 = var6.bind(var3)(var7);
        var0.local_id = var3;
        var3 = _closure1_slot0;
        var2 = 3;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.NotificationCenterLocalItems;
        var2 = var2.MOBILE_NATIVE_UPDATE_AVAILABLE;
        var0.type = var2;
        var1 = var1.urls;
        var2 = var1.install;
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        var0.deeplink = var1;
        return var0;
    };
    var2.mobileNativeUpdateAvailableLocalItem = var3;
    var1 = function(arg0) { // Environment: var1
        _fun38329: for (var _fun38329_ip = 0;;) switch (_fun38329_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var0.NotificationCenterItems;
                var0 = var0.RECENT_MENTION;
                var0 = var3 === var0;
                if (var0) {
                    _fun38329_ip = 90;
                    continue _fun38329
                }
            case 52:
                var2 = var2.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.NotificationCenterItems;
                var1 = var1.REPLY_MENTION;
                var0 = var2 === var1;
            case 90:
                return var0;
        }
    };
    var2.isMentionItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4181, 1348, 21, 3925, 2]);