// modules/notifications/FocusModeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationSettingsUpdateType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.StatusTypes;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/FocusModeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun69631: for (var _fun69631_ip = 0;;) switch (_fun69631_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var0 = var3[var1];
                var6 = undefined;
                var0 = var2.bind(var6)(var0);
                var4 = var0.FocusMode;
                var0 = var4.useSetting;
                var0 = var0.bind(var4)();
                var1 = var3[var1];
                var1 = var2.bind(var6)(var1);
                var2 = var1.FocusModeExpiresAtSetting;
                var1 = var2.useSetting;
                var4 = var1.bind(var2)();
                if (!var0) {
                    _fun69631_ip = 180;
                    continue _fun69631
                }
            case 69:
                var1 = '0';
                var1 = var1 === var4;
                if (var1) {
                    _fun69631_ip = 177;
                    continue _fun69631
                }
            case 82:
                var2 = global;
                var5 = var2.Date;
                var3 = var2.Number;
                var7 = var3.bind(var6)(var4);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.getTime;
                var3 = var3.bind(var4)();
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var4;
                var2 = new var8[var2](var7);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = var4.getTime;
                var2 = var2.bind(var4)();
                var3 = var3 - var2;
                var2 = 0;
                var1 = var3 > var2;
            case 177:
                var0 = var1;
            case 180:
                return var0;
        }
    };
    var2.useFocusModeEnabled = var3;
    var3 = function() {
        _fun69632: for (var _fun69632_ip = 0;;) switch (_fun69632_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var0 = var3[var1];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var4 = var0.FocusMode;
                var0 = var4.getSetting;
                var0 = var0.bind(var4)();
                var1 = var3[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.FocusModeExpiresAtSetting;
                var1 = var2.getSetting;
                var3 = var1.bind(var2)();
                if (!var0) {
                    _fun69632_ip = 75;
                    continue _fun69632
                }
            case 69:
                var1 = null;
                var0 = var1 != var3;
            case 75:
                if (!var0) {
                    _fun69632_ip = 173;
                    continue _fun69632
                }
            case 78:
                var1 = global;
                var4 = var1.Date;
                var2 = var1.Number;
                var6 = var2.bind(var5)(var3);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var2 = new var7[var4](var6, var5);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.getTime;
                var2 = var2.bind(var3)();
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var3;
                var1 = new var7[var1](var6);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var2 = var2 - var1;
                var1 = 0;
                var0 = var2 > var1;
            case 173:
                return var0;
        }
    };
    var2.getFocusModeEnabled = var3;
    var1 = function arg0, arg1() {
        _fun69633: for (var _fun69633_ip = 0;;) switch (_fun69633_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 3;
                var1 = var7[var0];
                var0 = undefined;
                var1 = var6.bind(var0)(var1);
                var8 = var1.FocusMode;
                var1 = var8.getSetting;
                var9 = var1.bind(var8)();
                var1 = 4;
                var8 = var7[var1];
                var8 = var6.bind(var0)(var8);
                var11 = var8.PreloadedUserSettingsActionCreators;
                var10 = var11.updateAsync;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var1 = var1.UserSettingsDelay;
                var8 = var1.INFREQUENT_USER_ACTION;
                var6 = 'notifications';
                var1 = function(arg0) { // Environment: var4
                    _fun69634: for (var _fun69634_ip = 0;;) switch (_fun69634_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var6 = var1.BoolValue;
                            var5 = var6.create;
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.value = var3;
                            var1 = var5.bind(var6)(var1);
                            var2.quietMode = var1;
                            var5 = '0';
                            var1 = var5;
                            if (!var3) {
                                _fun69634_ip = 136;
                                continue _fun69634
                            }
                        case 75:
                            var6 = _closure2_slot1;
                            var3 = null;
                            var3 = var3 != var6;
                            var1 = var5;
                            if (!var3) {
                                _fun69634_ip = 136;
                                continue _fun69634
                            }
                        case 91:
                            var3 = global;
                            var6 = var3.Date;
                            var5 = var6.now;
                            var5 = var5.bind(var6)();
                            var4 = _closure2_slot1;
                            var5 = var5 + var4;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = '';
                            var1 = var4.bind(var3)(var5);
                        case 136:
                            var2.focusModeExpiresAtMs = var1;
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var6, var1, var8);
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var7[var1];
                var8 = var6.bind(var0)(var1);
                var7 = var8.track;
                var1 = _closure1_slot5;
                var6 = var1.NOTIFICATION_SETTINGS_UPDATED;
                var1 = {};
                var10 = _closure1_slot4;
                var10 = var10.ACCOUNT;
                var1.update_type = var10;
                var1.quiet_mode_enabled = var2;
                var1.quiet_mode_enabled_old = var9;
                var1 = var7.bind(var8)(var6, var1);
                var6 = _closure1_slot3;
                var1 = var6.getStatus;
                var6 = var1.bind(var6)();
                var1 = _closure1_slot6;
                var1 = var1.DND;
                var1 = var6 === var1;
                if (!var1) {
                    _fun69633_ip = 218;
                    continue _fun69633
                }
            case 215:
                var1 = var2;
            case 218:
                if (!var1) {
                    _fun69633_ip = 227;
                    continue _fun69633
                }
            case 221:
                var2 = null;
                var1 = var2 == var3;
            case 227:
                if (!var1) {
                    _fun69633_ip = 483;
                    continue _fun69633
                }
            case 233:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var8 = _closure1_slot0;
                var5 = 8;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6["B+cbLS"];
                var6 = var7.bind(var10)(var6);
                var1.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.CYVgLI;
                var6 = var7.bind(var10)(var6);
                var1.body = var6;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.f3Pet9;
                var6 = var7.bind(var10)(var6);
                var1.cancelText = var6;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.BddRzS;
                var5 = var6.bind(var7)(var5);
                var1.confirmText = var5;
                var4 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = _closure1_slot6;
                    var3 = var3.ONLINE;
                    var1.nextStatus = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onConfirm = var4;
                var1 = var2.bind(var3)(var1);
            case 483:
                return var0;
        }
    };
    var2.setFocusMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5619, 3062, 660, 1348, 1355, 1342, 795, 3962, 1234, 8684, 2]);