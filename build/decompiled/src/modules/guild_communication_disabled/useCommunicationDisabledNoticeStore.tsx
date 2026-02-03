// modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
    var _closure1_slot3 = var8;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStore;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun19116: for (var _fun19116_ip = 0;;) switch (_fun19116_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.Storage;
                var3 = var4.get;
                var2 = _closure1_slot3;
                var4 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 == var4)) {
                    _fun19116_ip = 73;
                    continue _fun19116
                }
            case 69:
                var4 = new Array(0);
            case 73:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var3;
                var6 = var4;
                var2 = new var7[var2](var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                var0.notificationDismissedInGuilds = var2;
                var2 = function arg0() {
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var7 = var2.notificationDismissedInGuilds;
                    var _closure3_slot0 = var7;
                    var3 = var7.add;
                    var2 = arg0;
                    var2 = var3.bind(var7)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var5 = 2;
                    var5 = var4[var5];
                    var5 = var3.bind(var0)(var5);
                    var6 = var5.Storage;
                    var5 = var6.set;
                    var2 = _closure1_slot3;
                    var2 = var5.bind(var6)(var2, var7);
                    var2 = 4;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.notificationDismissedInGuilds = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.dismissNotification = var2;
                var1 = function arg0() {
                    _fun19119: for (var _fun19119_ip = 0;;) switch (_fun19119_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var7 = var2.notificationDismissedInGuilds;
                            var _closure3_slot0 = var7;
                            var2 = var7.has;
                            var2 = var2.bind(var7)(var3);
                            if (!var2) {
                                _fun19119_ip = 123;
                                continue _fun19119
                            }
                        case 41:
                            var2 = var7.delete;
                            var2 = var2.bind(var7)(var3);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var5 = 2;
                            var5 = var4[var5];
                            var5 = var3.bind(var0)(var5);
                            var6 = var5.Storage;
                            var5 = var6.set;
                            var2 = _closure1_slot3;
                            var2 = var5.bind(var6)(var2, var7);
                            var2 = 4;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot0;
                                var1 = {};
                                var0 = _closure3_slot0;
                                var1.notificationDismissedInGuilds = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 123:
                            return var0;
                    }
                };
                var0.resetNotification = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Storage;
    var6 = var7.asyncGet;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = global;
            var5 = var3.Set;
            var6 = _closure2_slot0;
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var7 = var4;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var0.notificationDismissedInGuilds = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var6.bind(var7)(var8, var3);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 5;
        var1 = var7[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var5 = var6.useStoreWithEqualityFn;
        var4 = _closure1_slot4;
        var1 = 6;
        var1 = var7[var1];
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var2 = var1.notificationDismissedInGuilds;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.dismissNotification;
            var0[1] = var1;
            return var0;
        };
        var2 = var5.bind(var6)(var4, var1, var2);
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var3 = var1[var0];
        var0 = 1;
        var1 = var1[var0];
        var2 = var3.has;
        var0 = arg0;
        var0 = var2.bind(var3)(var0);
        var2 = !var0;
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.useCommunicationDisabledNoticeStore = var3;
    var1 = function arg0() {
        var1 = _closure1_slot4;
        var0 = var1.getState;
        var2 = var0.bind(var1)();
        var1 = var2.resetNotification;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.clearCommunicationDisabledNotice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1674, 587, 630, 802, 797, 3067, 2]);