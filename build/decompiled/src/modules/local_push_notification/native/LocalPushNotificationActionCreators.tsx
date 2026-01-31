// modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.LocalNotificationTypes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun118067: for (var _fun118067_ip = 0;;) switch (_fun118067_ip) {
            case 0:
                var5 = arg0;
                var2 = function() {
                    _fun118068: for (var _fun118068_ip = 0;;) switch (_fun118068_ip) {
                        case 0:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 3;
                            var1 = var6[var0];
                            var0 = undefined;
                            var7 = var5.bind(var0)(var1);
                            var4 = var7.dispatch;
                            var1 = {};
                            var8 = 'PUSH_NOTIFICATION_CLICK';
                            var1.type = var8;
                            var1 = var4.bind(var7)(var1);
                            var1 = 4;
                            var1 = var6[var1];
                            var8 = var5.bind(var0)(var1);
                            var7 = var8.addBreadcrumb;
                            var4 = {};
                            var1 = 'Notification Clicked';
                            var4.message = var1;
                            var9 = {};
                            var10 = _closure2_slot0;
                            var10 = var10.type;
                            var9.type = var10;
                            var4.data = var9;
                            var4 = var7.bind(var8)(var4);
                            var4 = 5;
                            var4 = var6[var4];
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.track;
                            var4 = _closure1_slot4;
                            var5 = var4.NOTIFICATION_CLICKED;
                            var4 = {};
                            var8 = _closure2_slot0;
                            var8 = var8.type;
                            var4.notif_type = var8;
                            var9 = _closure2_slot0;
                            var8 = 'guildId';
                            var9 = var8 in var9;
                            var8 = null;
                            if (!var9) {
                                _fun118068_ip = 173;
                                continue _fun118068
                            }
                        case 164:
                            var9 = _closure2_slot0;
                            var8 = var9.guildId;
                        case 173:
                            var4.guild_id = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            var4 = _closure2_slot0;
                            var5 = var4.type;
                            var4 = _closure1_slot3;
                            var4 = var4.GUILD_VERIFICATION;
                            if (!(var4 !== var5)) {
                                _fun118068_ip = 354;
                                continue _fun118068
                            }
                        case 209:
                            var4 = _closure1_slot3;
                            var4 = var4.CALL_RING;
                            if (!(var4 !== var5)) {
                                _fun118068_ip = 297;
                                continue _fun118068
                            }
                        case 223:
                            var4 = _closure1_slot3;
                            var4 = var4.MESSAGE_SEND_FAILED;
                            if (!(var4 === var5)) {
                                _fun118068_ip = 394;
                                continue _fun118068
                            }
                        case 240:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = 8;
                            var5 = var4[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = 9;
                            var5 = var4[var5];
                            var4 = var4.paths;
                            var6 = var6.bind(var0)(var5, var4);
                            var5 = var6.then;
                            var4 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var4 = var0.transitionToMessage;
                                var1 = _closure2_slot0;
                                var3 = var1.channelId;
                                var0 = _closure2_slot0;
                                var2 = var0.messageId;
                                var1 = {};
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 10;
                                var5 = var5[var0];
                                var0 = undefined;
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.JumpTypes;
                                var5 = var5.INSTANT;
                                var1.jumpType = var5;
                                var0 = var4.bind(var0)(var3, var2, var1);
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                            _fun118068_ip = 394;
                            continue _fun118068;
                        case 297:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = 8;
                            var5 = var4[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = 7;
                            var5 = var4[var5];
                            var4 = var4.paths;
                            var5 = var6.bind(var0)(var5, var4);
                            var4 = var5.then;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var2 = var0.default;
                                var0 = _closure2_slot0;
                                var1 = var0.channelId;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            _fun118068_ip = 394;
                            continue _fun118068;
                        case 354:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 6;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.transitionToGuildSync;
                            var1 = _closure2_slot0;
                            var1 = var1.guildId;
                            var1 = var2.bind(var3)(var1);
                        case 394:
                            return var0;
                    }
                };
                var1 = var5.getData;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun118067_ip = 182;
                    continue _fun118067
                }
            case 27:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var3);
                var6 = var7.trackAppOpened;
                var3 = 'notification';
                var3 = var6.bind(var7)(var3);
                var3 = var5.getData;
                var3 = var3.bind(var5)();
                var _closure2_slot0 = var3;
                var4 = var3.type;
                var3 = _closure1_slot3;
                var3 = var3.GUILD_VERIFICATION;
                if (!(var3 !== var4)) {
                    _fun118067_ip = 130;
                    continue _fun118067
                }
            case 100:
                var3 = _closure1_slot3;
                var3 = var3.CALL_RING;
                if (!(var3 !== var4)) {
                    _fun118067_ip = 130;
                    continue _fun118067
                }
            case 114:
                var3 = _closure1_slot3;
                var3 = var3.MESSAGE_SEND_FAILED;
                if (!(var3 !== var4)) {
                    _fun118067_ip = 130;
                    continue _fun118067
                }
            case 128:
                return var1;
            case 130:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var3 = var3.bind(var1)(var0);
                var0 = var3.isDispatching;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun118067_ip = 169;
                    continue _fun118067
                }
            case 163:
                var0 = var2.bind(var1)();
                _fun118067_ip = 182;
                continue _fun118067;
            case 169:
                var0 = global;
                var0 = var0.setImmediate;
                var0 = var0.bind(var1)(var2);
            case 182:
                var0 = undefined;
                return var0;
        }
    };
    var2.receiveLocalNotification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12434, 660, 4328, 806, 1207, 795, 4642, 7928, 1307, 3902, 4215, 2]);