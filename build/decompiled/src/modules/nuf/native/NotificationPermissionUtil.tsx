// modules/nuf/native/NotificationPermissionUtil.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _requestPushNotificationPermission, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun85049: for (var _fun85049_ip = 0;;) switch (_fun85049_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg1;
                        var3 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85049_ip = 218;
                            continue _fun85049
                        }
                    case 18:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var8;
                        var _closure4_slot2 = var3;
                        var1 = _closure1_slot6;
                        var4 = var1.NativePermissionManager;
                        var1 = var4.getNotificationAuthorizationStatus;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 60);
                    case 58:
                        return var1;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun85049_ip = 215;
                            continue _fun85049
                        }
                    case 69:
                        var4 = _closure1_slot10;
                        var4 = var4.DENIED;
                        if (!(var1 !== var4)) {
                            _fun85049_ip = 125;
                            continue _fun85049
                        }
                    case 83:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 10;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.requestPermission;
                        var2 = function(arg0) { // Environment: var2
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.track;
                            var1 = _closure1_slot9;
                            var3 = var1.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                            var2 = {};
                            var6 = _closure4_slot0;
                            var2.action_type = var6;
                            var6 = _closure4_slot1;
                            var2.action_location = var6;
                            var6 = arg0;
                            var2.permission_granted = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = _closure4_slot2;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        _fun85049_ip = 210;
                        continue _fun85049;
                    case 125:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var4 = var6[var2];
                        var2 = undefined;
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.bind(var2)();
                        var4 = 9;
                        var4 = var6[var4];
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot9;
                        var5 = var4.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                        var4 = {};
                        var9 = _closure1_slot8;
                        var9 = var9.TO_SETTINGS;
                        var4.action_type = var9;
                        var4.action_location = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        var2 = var3.bind(var2)();
                    case 210:
                        var2 = undefined;
                        return var2;
                    case 215:
                        return var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: _enableProvisionalPushNotification, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85053: for (var _fun85053_ip = 0;;) switch (_fun85053_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85053_ip = 96;
                            continue _fun85053
                        }
                    case 7:
                        var1 = _closure1_slot6;
                        var3 = var1.NativePermissionManager;
                        var1 = var3.getNotificationAuthorizationStatus;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 34);
                    case 32:
                        return var1;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun85053_ip = 93;
                            continue _fun85053
                        }
                    case 40:
                        var3 = _closure1_slot10;
                        var3 = var3.UNDETERMINED;
                        if (!(var1 === var3)) {
                            _fun85053_ip = 88;
                            continue _fun85053
                        }
                    case 54:
                        var2 = _closure1_slot6;
                        var4 = var2.DCDProvisionalNotificationUtils;
                        var3 = var4.registerProvisionalNotification;
                        var2 = function(arg0) { // Environment: var2
                            _fun85054: for (var _fun85054_ip = 0;;) switch (_fun85054_ip) {
                                case 0:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 9;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.track;
                                    var1 = _closure1_slot9;
                                    var2 = var1.PERMISSIONS_ACKED;
                                    var1 = {};
                                    var5 = 'provisional_notification';
                                    var1.type = var5;
                                    var5 = 'denied';
                                    var6 = arg0;
                                    if (!var6) {
                                        _fun85054_ip = 68;
                                        continue _fun85054
                                    }
                                case 64:
                                    var5 = 'accepted';
                                case 68:
                                    var1.action = var5;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                    case 88:
                        var2 = undefined;
                        return var2;
                    case 93:
                        return var1;
                    case 96:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var4 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot6 = var3;
    var3 = 4;
    var4 = var6[var3];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.PermissionPromptType;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.EventActionType;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.NotificationAuthorizationStatus;
    var _closure1_slot10 = var3;
    var3 = {};
    var9 = var4.APP_LOAD_PROMPT;
    var7 = {};
    var8 = 11;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var10 = var10.getMobileNotificationAppStartupNudgeExperiment;
    var7.getExperiment = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var10 = var10.useMobileNotificationAppStartupNudgeExperiment;
    var7.useExperiment = var10;
    var3[var9] = var7;
    var9 = var4.DM_SPACE;
    var7 = {};
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var10 = var10.getMobileNotificationMessageHomePageNudgeExperiment;
    var7.getExperiment = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var10 = var10.useMobileNotificationMessageHomePageNudgeExperiment;
    var7.useExperiment = var10;
    var3[var9] = var7;
    var7 = var4.CHANNEL_BANNER;
    var4 = {};
    var9 = var6[var8];
    var9 = var5.bind(var0)(var9);
    var9 = var9.getMobileNotificationChannelNudgeExperiment;
    var4.getExperiment = var9;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.useMobileNotificationChannelNudgeExperiment;
    var4.useExperiment = var8;
    var3[var7] = var4;
    var _closure1_slot11 = var3;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: requestPushNotificationPermission, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.requestPushNotificationPermission = var4;
    var4 = function() { // Original name: useShowReactivationPrompt, environment: var1
        var4 = _closure1_slot5;
        var3 = var4.useState;
        var2 = false;
        var5 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var5, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot0 = var2;
        var3 = var4.useEffect;
        var2 = function() { // Environment: var1
            var1 = function() { // Original name: _shouldShowReactivationPrompts, environment: var0
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot4;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85060: for (var _fun85060_ip = 0;;) switch (_fun85060_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85060_ip = 78;
                                    continue _fun85060
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var3 = var1.NativePermissionManager;
                                var1 = var3.getNotificationAuthorizationStatus;
                                var1 = var1.bind(var3)();
                                SaveGenerator(address = 34);
                            case 32:
                                return var1;
                            case 34:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun85060_ip = 75;
                                    continue _fun85060
                                }
                            case 40:
                                var2 = _closure1_slot10;
                                var2 = var2.AUTHORIZED;
                                if (!(var1 !== var2)) {
                                    _fun85060_ip = 70;
                                    continue _fun85060
                                }
                            case 54:
                                var4 = _closure2_slot0;
                                var3 = undefined;
                                var2 = true;
                                var2 = var4.bind(var3)(var2);
                            case 70:
                                var2 = undefined;
                                return var2;
                            case 75:
                                return var1;
                            case 78:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot0 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var1;
            var1 = function() { // Original name: shouldShowReactivationPrompts, environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = !var1;
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useShowReactivationPrompt = var4;
    var4 = function() { // Original name: enableProvisionalPushNotification, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.enableProvisionalPushNotification = var4;
    var2.PERMISSION_PROMPT_EXPERIMENTS = var3;
    var3 = function(arg0) { // Original name: useNudgeExperimentConfigWithoutExposure, environment: var1
        _fun85063: for (var _fun85063_ip = 0;;) switch (_fun85063_ip) {
            case 0:
                var1 = _closure1_slot11;
                var0 = arg0;
                var3 = var1[var0];
                var0 = null;
                var1 = var0 == var3;
                var0 = undefined;
                if (var1) {
                    _fun85063_ip = 50;
                    continue _fun85063
                }
            case 25:
                var2 = var3.getExperiment;
                var1 = {
                    'location': 'useNudgeExperimentConfigWithoutExposure',
                    'autoTrackExposure': false
                };
                var0 = var2.bind(var3)(var1);
            case 50:
                return var0;
        }
    };
    var2.useNudgeExperimentConfigWithoutExposure = var3;
    var1 = function(arg0) { // Original name: useShouldSeePushNotificationNudge, environment: var1
        _fun85064: for (var _fun85064_ip = 0;;) switch (_fun85064_ip) {
            case 0:
                var6 = arg0;
                var13 = arguments[1];
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun85064_ip = 16;
                    continue _fun85064
                }
            case 14:
                var13 = true;
            case 16:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 12;
                var1 = var7[var4];
                var11 = var5.bind(var3)(var1);
                var9 = var11.useStateFromStores;
                var10 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var10;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var0 = var0.eligiblePromptTypes;
                    return var0;
                };
                var8 = var9.bind(var11)(var8, var1);
                var1 = var7[var4];
                var12 = var5.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var10;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var0 = var0.permissionState;
                    return var0;
                };
                var9 = var11.bind(var12)(var9, var1);
                var1 = var7[var4];
                var14 = var5.bind(var3)(var1);
                var12 = var14.useStateFromStores;
                var11 = new Array(1);
                var11[0] = var10;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var0 = var0.promptLastSeen;
                    return var0;
                };
                var1 = var12.bind(var14)(var11, var1);
                var4 = var7[var4];
                var7 = var5.bind(var3)(var4);
                var5 = var7.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var10;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var0 = var0.authorizationStatus;
                    return var0;
                };
                var7 = var5.bind(var7)(var4, var0);
                var0 = _closure1_slot10;
                var0 = var0.DENIED;
                var4 = var7 === var0;
                var0 = _closure1_slot11;
                var11 = var0[var6];
                var5 = null;
                var0 = var5 == var11;
                var3 = undefined;
                if (var0) {
                    _fun85064_ip = 242;
                    continue _fun85064
                }
            case 207:
                var10 = var11.useExperiment;
                var0 = {};
                var12 = 'useShouldSeePushNotificationNudge';
                var0.location = var12;
                var12 = var4;
                if (!var12) {
                    _fun85064_ip = 232;
                    continue _fun85064
                }
            case 229:
                var12 = var13;
            case 232:
                var0.autoTrackExposure = var12;
                var3 = var10.bind(var11)(var0);
            case 242:
                var0 = !var4;
                var0 = !var0;
                if (!var4) {
                    _fun85064_ip = 353;
                    continue _fun85064
                }
            case 251:
                var4 = {};
                var4.permissionState = var9;
                var4.eligiblePromptTypes = var8;
                var4.promptLastSeen = var1;
                var9 = var5 == var3;
                var1 = false;
                if (var9) {
                    _fun85064_ip = 350;
                    continue _fun85064
                }
            case 277:
                var2 = _closure1_slot10;
                var2 = var2.DENIED;
                var1 = false;
                if (!(var7 === var2)) {
                    _fun85064_ip = 350;
                    continue _fun85064
                }
            case 293:
                var2 = var3.reminderUI;
                var7 = var3.isContextual;
                var3 = var5 != var7;
                if (!var3) {
                    _fun85064_ip = 315;
                    continue _fun85064
                }
            case 312:
                var3 = var7;
            case 315:
                var2 = var5 != var2;
                if (!var2) {
                    _fun85064_ip = 347;
                    continue _fun85064
                }
            case 322:
                if (!var3) {
                    _fun85064_ip = 344;
                    continue _fun85064
                }
            case 325:
                var5 = var4.eligiblePromptTypes;
                var4 = var5.has;
                var4 = var4.bind(var5)(var6);
                var3 = !var4;
            case 344:
                var2 = !var3;
            case 347:
                var1 = var2;
            case 350:
                var0 = var1;
            case 353:
                return var0;
        }
    };
    var2.useShouldSeePushNotificationNudge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 10912, 10913, 660, 3967, 3977, 795, 10914, 10916, 566, 2]);