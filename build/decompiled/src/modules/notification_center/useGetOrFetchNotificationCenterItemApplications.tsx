// modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var7 = var3.Set;
    var6 = 1;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationCenterLocalItems;
    var8 = var3.INCOMING_GAME_FRIEND_REQUESTS;
    var3 = new Array(4);
    var3[0] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.NotificationCenterLocalItems;
    var8 = var8.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
    var3[1] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.NotificationCenterLocalItems;
    var8 = var8.INCOMING_FRIEND_REQUESTS;
    var3[2] = var8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.NotificationCenterLocalItems;
    var6 = var6.INCOMING_FRIEND_REQUESTS_ACCEPTED;
    var3[3] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var11 = var3;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useGetOrFetchNotificationCenterItemsApplications, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var0 = global;
            var0 = var0.Set;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun103565: for (var _fun103565_ip = 0;;) switch (_fun103565_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.applicationId;
                        var3 = var0.type;
                        var1 = _closure1_slot3;
                        var0 = var1.has;
                        var0 = var0.bind(var1)(var3);
                        if (!var0) {
                            _fun103565_ip = 93;
                            continue _fun103565
                        }
                    case 33:
                        var0 = null;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun103565_ip = 59;
                            continue _fun103565
                        }
                    case 42:
                        var3 = _closure3_slot0;
                        var1 = var3.has;
                        var0 = var1.bind(var3)(var2);
                    case 59:
                        if (var0) {
                            _fun103565_ip = 93;
                            continue _fun103565
                        }
                    case 62:
                        var3 = _closure3_slot0;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var2);
                        var1 = _closure3_slot1;
                        var0 = var1.push;
                        var0 = var0.bind(var1)(var2);
                    case 93:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var2.useGetOrFetchNotificationCenterItemsApplications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3925, 6839, 2]);