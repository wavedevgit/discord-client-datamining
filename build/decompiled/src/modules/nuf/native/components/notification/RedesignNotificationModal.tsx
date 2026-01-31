// modules/nuf/native/components/notification/RedesignNotificationModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: RedesignNotificationModal, environment: var1
        var1 = arg0;
        var5 = var1.onComplete;
        var _closure2_slot0 = var5;
        var1 = _closure1_slot11;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var6 = _closure1_slot3;
        var4 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 8;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var4 = var5.requestPushNotificationPermission;
            var2 = _closure1_slot8;
            var3 = var2.ALLOW_TO_REQUEST;
            var1 = _closure1_slot7;
            var2 = var1.ALERT;
            var1 = function() { // Environment: var1
                _fun100526: for (var _fun100526_ip = 0;;) switch (_fun100526_ip) {
                    case 0:
                        var2 = _closure2_slot0;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun100526_ip = 23;
                            continue _fun100526
                        }
                    case 13:
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 23:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var9 = var4.bind(var6)(var1, var2);
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun100527: for (var _fun100527_ip = 0;;) switch (_fun100527_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot9;
                    var4 = var2.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.SKIP_STEP;
                    var2.action_type = var7;
                    var7 = _closure1_slot7;
                    var7 = var7.ALERT;
                    var2.action_location = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot0;
                    var4 = 10;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.setPushPermissionState;
                    var1 = _closure1_slot6;
                    var1 = var1.PROMPT_SKIPPED;
                    var1 = var4.bind(var5)(var1);
                    var1 = 8;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.enableProvisionalPushNotification;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun100527_ip = 161;
                        continue _fun100527
                    }
                case 150:
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                case 161:
                    return var0;
            }
        };
        var8 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var12.container;
        var0.style = var4;
        var6 = _closure1_slot10;
        var13 = _closure1_slot1;
        var11 = _closure1_slot2;
        var4 = 11;
        var4 = var11[var4];
        var5 = var13.bind(var3)(var4);
        var4 = {};
        var4.onAllow = var9;
        var4.onDontAllow = var8;
        var10 = _closure1_slot10;
        var9 = _closure1_slot4;
        var8 = {};
        var14 = 'contain';
        var8.resizeMode = var14;
        var12 = var12.notificationHeaderImage;
        var8.style = var12;
        var12 = 12;
        var12 = var11[var12];
        var12 = var13.bind(var3)(var12);
        var8.source = var12;
        var8 = var10.bind(var3)(var9, var8);
        var4.header = var8;
        var10 = _closure1_slot0;
        var7 = 13;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["3nx0b5"];
        var8 = var9.bind(var12)(var8);
        var4.title = var8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.Gf7U1T;
        var7 = var8.bind(var9)(var7);
        var4.subtitle = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PermissionStateType;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.EventActionLocation;
    var _closure1_slot7 = var7;
    var4 = var4.EventActionType;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9.flex = var10;
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_48;
    var10 = -var10;
    var9.marginTop = var10;
    var4.container = var9;
    var9 = {
        'position': 'absolute',
        'alignSelf': 'center',
        'zIndex': 2,
        'top': 4294967156,
        'height': 156,
        'width': 150
    };
    var4.notificationHeaderImage = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/notification/RedesignNotificationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Original name: RedesignNotificationScreen, environment: var1
        var0 = arg0;
        var0 = var0.route;
        var0 = var0.params;
        var0 = var0.onComplete;
        var3 = _closure1_slot10;
        var2 = _closure1_slot12;
        var1 = {};
        var1.onComplete = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.RedesignNotificationScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10920, 10921, 660, 33, 1297, 671, 10919, 795, 10923, 10359, 13050, 1234, 2]);