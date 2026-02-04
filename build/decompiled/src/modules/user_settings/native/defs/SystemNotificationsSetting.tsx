// modules/user_settings/native/defs/SystemNotificationsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85708: for (var _fun85708_ip = 0;;) switch (_fun85708_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85708_ip = 224;
                            continue _fun85708
                        }
                    case 10:
                        var1 = _closure1_slot4;
                        var3 = var1.NativePermissionManager;
                        var1 = var3.getNotificationAuthorizationStatus;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 37);
                    case 35:
                        return var1;
                    case 37:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun85708_ip = 221;
                            continue _fun85708
                        }
                    case 46:
                        var3 = _closure1_slot6;
                        var3 = var3.UNDETERMINED;
                        if (!(var1 !== var3)) {
                            _fun85708_ip = 174;
                            continue _fun85708
                        }
                    case 60:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var5 = undefined;
                        var7 = var4.bind(var5)(var3);
                        var6 = var7.track;
                        var3 = _closure1_slot5;
                        var4 = var3.NOTIFICATION_SETTINGS_CLICKED;
                        var3 = {};
                        var8 = 'os';
                        var3.setting_type = var8;
                        var8 = _closure1_slot6;
                        var9 = var8.AUTHORIZED;
                        var8 = 0;
                        if (!(var1 === var9)) {
                            _fun85708_ip = 129;
                            continue _fun85708
                        }
                    case 126:
                        var8 = 1;
                    case 129:
                        var3.current_status = var8;
                        var3 = var6.bind(var7)(var4, var3);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 8;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openNotificationSettings;
                        var3 = var3.bind(var4)();
                        _fun85708_ip = 216;
                        continue _fun85708;
                    case 174:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.requestPermission;
                        var2 = function(arg0) { // Environment: var2
                            _fun85709: for (var _fun85709_ip = 0;;) switch (_fun85709_ip) {
                                case 0:
                                    var2 = arg0;
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var0 = 7;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var6 = var4.bind(var0)(var3);
                                    var5 = var6.track;
                                    var3 = _closure1_slot5;
                                    var4 = var3.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                                    var3 = {};
                                    var7 = _closure1_slot7;
                                    var7 = var7.ALLOW_TO_REQUEST;
                                    var3.action_type = var7;
                                    var7 = _closure1_slot8;
                                    var7 = var7.NOTIFICATION_SETTING;
                                    var3.action_location = var7;
                                    var3.permission_granted = var2;
                                    var3 = var5.bind(var6)(var4, var3);
                                    if (var2) {
                                        _fun85709_ip = 119;
                                        continue _fun85709
                                    }
                                case 89:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var3[var1];
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.openNotificationSettings;
                                    var1 = var1.bind(var2)();
                                case 119:
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                    case 216:
                        var2 = undefined;
                        return var2;
                    case 221:
                        return var1;
                    case 224:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NotificationAuthorizationStatus;
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.EventActionType;
    var _closure1_slot7 = var3;
    var1 = var1.EventActionLocation;
    var _closure1_slot8 = var1;
    var1 = 9;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.nl2Dqx;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.NOTIFICATIONS;
    var1.parent = var9;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.onPress = var8;
    var1.withArrow = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/SystemNotificationsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 7008, 660, 4014, 11021, 11022, 795, 8628, 8999, 1234, 2]);