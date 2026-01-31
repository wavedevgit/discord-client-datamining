// modules/notifications/NotificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserNotificationSettings;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MuteUntilSeconds;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = var3;
    var3 = {
        'ignoreMute': false,
        'ignoreUnreadSetting': true,
        'ignoreNotificationSetting': false
    };
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/NotificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: getMuteTimeOptions, environment: var1
        var1 = {};
        var0 = '15-minutes';
        var1.id = var0;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 4;
        var2 = var8[var3];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2["8ot6gv"];
        var2 = var4.bind(var5)(var2);
        var1.label = var2;
        var2 = _closure1_slot6;
        var0 = var2.MINUTES_15;
        var1.value = var0;
        var0 = new Array(6);
        var0[0] = var1;
        var1 = {};
        var4 = '1-hour';
        var1.id = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.UMWBZr;
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var2.HOURS_1;
        var1.value = var4;
        var0[1] = var1;
        var1 = {};
        var4 = '3-hours';
        var1.id = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.QmYWtu;
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var2.HOURS_3;
        var1.value = var4;
        var0[2] = var1;
        var1 = {};
        var4 = '8-hours';
        var1.id = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.EpAXPC;
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var2.HOURS_8;
        var1.value = var4;
        var0[3] = var1;
        var1 = {};
        var4 = '24-hours';
        var1.id = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4["755t4q"];
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var2.HOURS_24;
        var1.value = var4;
        var0[4] = var1;
        var1 = {};
        var4 = 'forever';
        var1.id = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.r3LawO;
        var3 = var4.bind(var5)(var3);
        var1.label = var3;
        var2 = var2.ALWAYS;
        var1.value = var2;
        var0[5] = var1;
        return var0;
    };
    var2.getMuteTimeOptions = var3;
    var3 = function(arg0) { // Original name: filterOverrides, environment: var1
        _fun69825: for (var _fun69825_ip = 0;;) switch (_fun69825_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var3;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun69825_ip = 25;
                    continue _fun69825
                }
            case 18:
                var1 = _closure1_slot8;
            case 25:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.keys;
                var2 = var1.bind(var2)(var3);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun69826: for (var _fun69826_ip = 0;;) switch (_fun69826_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = _closure2_slot0;
                            var1 = var0[var5];
                            var4 = var1.message_notifications;
                            var1 = _closure1_slot5;
                            var1 = var1.NULL;
                            var4 = var4 !== var1;
                            var7 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var8 = 6;
                            var1 = var1[var8];
                            var6 = undefined;
                            var11 = var7.bind(var6)(var1);
                            var7 = var11.hasFlag;
                            var0 = var0[var5];
                            var0 = var0.flags;
                            var10 = null;
                            var12 = var10 != var0;
                            var1 = 0;
                            if (!var12) {
                                _fun69826_ip = 88;
                                continue _fun69826
                            }
                        case 85:
                            var1 = var0;
                        case 88:
                            var0 = _closure1_slot7;
                            var0 = var0.UNREADS_ALL_MESSAGES;
                            var1 = var7.bind(var11)(var1, var0);
                            if (var1) {
                                _fun69826_ip = 171;
                                continue _fun69826
                            }
                        case 107:
                            var7 = _closure1_slot2;
                            var0 = _closure1_slot3;
                            var0 = var0[var8];
                            var8 = var7.bind(var6)(var0);
                            var7 = var8.hasFlag;
                            var0 = _closure2_slot0;
                            var0 = var0[var5];
                            var0 = var0.flags;
                            var10 = var10 != var0;
                            var9 = 0;
                            if (!var10) {
                                _fun69826_ip = 155;
                                continue _fun69826
                            }
                        case 152:
                            var9 = var0;
                        case 155:
                            var0 = _closure1_slot7;
                            var0 = var0.UNREADS_ONLY_MENTIONS;
                            var1 = var7.bind(var8)(var9, var0);
                        case 171:
                            var0 = _closure2_slot1;
                            var0 = var0.ignoreUnreadSetting;
                            var0 = !var0;
                            if (!var0) {
                                _fun69826_ip = 190;
                                continue _fun69826
                            }
                        case 187:
                            var0 = var1;
                        case 190:
                            if (var0) {
                                _fun69826_ip = 215;
                                continue _fun69826
                            }
                        case 193:
                            var1 = _closure2_slot1;
                            var1 = var1.ignoreNotificationSetting;
                            var1 = !var1;
                            if (!var1) {
                                _fun69826_ip = 212;
                                continue _fun69826
                            }
                        case 209:
                            var1 = var4;
                        case 212:
                            var0 = var1;
                        case 215:
                            if (var0) {
                                _fun69826_ip = 276;
                                continue _fun69826
                            }
                        case 218:
                            var1 = _closure2_slot1;
                            var1 = var1.ignoreMute;
                            var1 = !var1;
                            if (!var1) {
                                _fun69826_ip = 273;
                                continue _fun69826
                            }
                        case 234:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 7;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.computeIsMuted;
                            var2 = _closure2_slot0;
                            var2 = var2[var5];
                            var1 = var3.bind(var4)(var2);
                        case 273:
                            var0 = var1;
                        case 276:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.filterOverrides = var3;
    var3 = function() { // Original name: useShouldUseNewNotificationSystem, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.useNewNotifications;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useShouldUseNewNotificationSystem = var3;
    var1 = function() { // Original name: shouldShowUseNewNotificationSystem, environment: var1
        var0 = _closure1_slot4;
        var0 = var0.useNewNotifications;
        return var0;
    };
    var2.shouldShowUseNewNotificationSystem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4267, 660, 1351, 665, 1234, 21, 1384, 3053, 566, 2]);