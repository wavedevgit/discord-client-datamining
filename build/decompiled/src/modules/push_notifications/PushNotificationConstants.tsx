// modules/push_notifications/PushNotificationConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun41111: for (var _fun41111_ip = 0;;) switch (_fun41111_ip) {
        case 0:
            var10 = require;
            var2 = exports;
            var11 = dependencyMap;
            var _closure1_slot0 = var10;
            var _closure1_slot1 = var11;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var1);
            var0 = 0;
            var1 = var11[var0];
            var0 = undefined;
            var4 = var10.bind(var0)(var1);
            var1 = var4.getConstants;
            var5 = var1.bind(var4)();
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            if (var6) {
                _fun41111_ip = 91;
                continue _fun41111
            }
        case 85:
            var1 = var5.Identifier;
        case 91:
            var5 = var4 != var1;
            var4 = '';
            if (!var5) {
                _fun41111_ip = 105;
                continue _fun41111
            }
        case 102:
            var4 = var1;
        case 105:
            var1 = 1;
            var1 = var11[var1];
            var5 = var10.bind(var0)(var1);
            var1 = var5.isQuestRelease;
            var7 = var1.bind(var5)();
            var _closure1_slot2 = var7;
            var5 = var4.startsWith;
            var1 = 'com.discord.kodiak';
            var1 = var5.bind(var4)(var1);
            var6 = var4.startsWith;
            var5 = 'com.hammerandchisel.discord.local';
            var9 = var6.bind(var4)(var5);
            var6 = 'meta_horizon';
            var _closure1_slot3 = var6;
            var5 = 'apns_internal';
            var8 = var4;
            if (var1) {
                _fun41111_ip = 205;
                continue _fun41111
            }
        case 187:
            var4 = 'apns';
            if (!var9) {
                _fun41111_ip = 202;
                continue _fun41111
            }
        case 196:
            var4 = 'apns_local';
        case 202:
            var5 = var4;
        case 205:
            var _closure1_slot4 = var5;
            var4 = 'apns_internal_voip';
            if (var1) {
                _fun41111_ip = 236;
                continue _fun41111
            }
        case 218:
            var1 = 'apns_voip';
            if (!var9) {
                _fun41111_ip = 233;
                continue _fun41111
            }
        case 227:
            var1 = 'apns_local_voip';
        case 233:
            var4 = var1;
        case 236:
            var1 = {};
            var9 = 'reminder';
            var1.REMINDER = var9;
            var9 = 'top_messages_push';
            var1.TOP_MESSAGE_PUSH = var9;
            var9 = 'trending_content_push';
            var1.TRENDING_CONTENT_PUSH = var9;
            var9 = 3;
            var9 = var11[var9];
            var11 = var10.bind(var0)(var9);
            var10 = var11.fileFinishedImporting;
            var9 = 'modules/push_notifications/PushNotificationConstants.tsx';
            var9 = var10.bind(var11)(var9);
            var2.BUNDLE_ID = var8;
            var2.IS_QUEST_RELEASE = var7;
            var7 = 'gcm';
            var2.DEVICE_PUSH_PROVIDER_ANDROID = var7;
            var2.DEVICE_PUSH_PROVIDER_META_HORIZON = var6;
            var2.DEVICE_PUSH_PROVIDER_IOS = var5;
            var2.DEVICE_PUSH_VOIP_PROVIDER = var4;
            var3 = function() { // Original name: getDevicePushProvider, environment: var3
                _fun41112: for (var _fun41112_ip = 0;;) switch (_fun41112_ip) {
                    case 0:
                        var0 = _closure1_slot2;
                        if (var0) {
                            _fun41112_ip = 57;
                            continue _fun41112
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 2;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var0 = var2.isAndroid;
                        var2 = var0.bind(var2)();
                        var0 = 'gcm';
                        if (var2) {
                            _fun41112_ip = 55;
                            continue _fun41112
                        }
                    case 51:
                        var0 = _closure1_slot4;
                    case 55:
                        _fun41112_ip = 61;
                        continue _fun41112;
                    case 57:
                        var0 = _closure1_slot3;
                    case 61:
                        return var0;
                }
            };
            var2.getDevicePushProvider = var3;
            var2.NotificationTypes = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1594, 4065, 478, 2]);