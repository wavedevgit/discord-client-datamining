// actions/native/PushNotificationActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun85661: for (var _fun85661_ip = 0;;) switch (_fun85661_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun85661_ip = 270;
                            continue _fun85661
                        }
                    case 13:
                        var6 = var1;
                        var5 = undefined;
                        var4 = undefined;
                        var10 = undefined;
                        var2 = var1.pushSyncToken;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun85661_ip = 46;
                            continue _fun85661
                        }
                    case 34:
                        var2 = var6;
                        var2 = var2.pushSyncToken;
                        return var2;
                    case 46:
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var3 = 6;
                        var3 = var8[var3];
                        var8 = var7.bind(var5)(var3);
                        var7 = var8.getToken;
                        var3 = var6;
                        var3 = var3.id;
                        var3 = var7.bind(var8)(var3);
                        var10 = var3;
                        if (!(var1 != var3)) {
                            _fun85661_ip = 267;
                            continue _fun85661
                        }
                    case 98: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 7;
                        var3 = var8[var3];
                        var3 = var7.bind(var5)(var3);
                        var8 = var3.HTTP;
                        var7 = var8.get;
                        var3 = {};
                        var9 = _closure1_slot9;
                        var9 = var9.DEVICES_SYNC_TOKEN;
                        var3.url = var9;
                        var9 = {};
                        var9.authorization = var10;
                        var3.headers = var9;
                        var9 = false;
                        var3.rejectWithError = var9;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address = 171);
                    case 169:
                        return var3;
                    case 171:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun85661_ip = 228;
                            continue _fun85661
                        }
                    case 177:
                        var7 = var3.body;
                        var4 = var7.token;
                    case 188: // try_end0
                        var8 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var7 = 9;
                        var7 = var9[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.updatePushSyncToken;
                        var6 = var6.id;
                        var6 = var7.bind(var8)(var6, var4);
                        return var4;
                    case 228:
                        return var3;
                    case 231: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 8;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    case 267:
                        return var1;
                    case 270:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.DEVICE_TOKEN;
    var _closure1_slot7 = var7;
    var7 = var3.DEVICE_VOIP_TOKEN;
    var _closure1_slot8 = var7;
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.BUNDLE_ID;
    var _closure1_slot10 = var7;
    var7 = var3.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot11 = var7;
    var7 = var3.getDevicePushProvider;
    var _closure1_slot12 = var7;
    var3 = var3.IS_QUEST_RELEASE;
    var _closure1_slot13 = var3;
    var3 = 5;
    var3 = var6[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'PushNotificationActionCreators';
    var12 = var4;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot14 = var3;
    var3 = {};
    var4 = function arg0() {
        _fun85662: for (var _fun85662_ip = 0;;) switch (_fun85662_ip) {
            case 0:
                var4 = arg0;
                var0 = arguments[1];
                var3 = this;
                var9 = undefined;
                if (!(var0 === var9)) {
                    _fun85662_ip = 17;
                    continue _fun85662
                }
            case 15:
                var0 = false;
            case 17:
                var5 = _closure1_slot14;
                var2 = var5.log;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var6 = 'Registering push notification token: ';
                var1 = ', is voip:';
                var1 = var8.bind(var6)(var4, var1, var0);
                var1 = var2.bind(var5)(var1);
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 10;
                var1 = var5[var1];
                var1 = var2.bind(var9)(var1);
                var5 = var1.Storage;
                var1 = var5.set;
                var2 = var0;
                if (var2) {
                    _fun85662_ip = 109;
                    continue _fun85662
                }
            case 103:
                var0 = _closure1_slot7;
                _fun85662_ip = 113;
                continue _fun85662;
            case 109:
                var0 = _closure1_slot8;
            case 113:
                var0 = var1.bind(var5)(var0, var4);
                var0 = _closure1_slot5;
                var0 = var0.canUseMultiAccountNotifications;
                if (var0) {
                    _fun85662_ip = 328;
                    continue _fun85662
                }
            case 135:
                var1 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 11;
                var0 = var5[var0];
                var5 = var1.bind(var9)(var0);
                var1 = var5.post;
                var0 = {};
                var6 = _closure1_slot9;
                var6 = var6.DEVICES;
                var0.url = var6;
                var6 = {};
                if (var2) {
                    _fun85662_ip = 192;
                    continue _fun85662
                }
            case 182:
                var8 = _closure1_slot12;
                var8 = var8.bind(var9)();
                _fun85662_ip = 196;
                continue _fun85662;
            case 192:
                var8 = _closure1_slot11;
            case 196:
                var6.provider = var8;
                var6.token = var4;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var8 = 12;
                var8 = var11[var8];
                var10 = var10.bind(var9)(var8);
                var8 = var10.isAndroid;
                var8 = var8.bind(var10)();
                if (!var8) {
                    _fun85662_ip = 246;
                    continue _fun85662
                }
            case 239:
                var10 = _closure1_slot13;
                var8 = !var10;
            case 246:
                var6.bypass_server_throttling_supported = var8;
                var8 = _closure1_slot10;
                var6.bundle_id = var8;
                var0.body = var6;
                var6 = true;
                var0.oldFormErrors = var6;
                var6 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 13;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.NetworkActionNames;
                var7 = var7.USER_REGISTER_DEVICE_TOKEN;
                var6.event = var7;
                var0.trackedActionData = var6;
                var6 = false;
                var0.rejectWithError = var6;
                var0 = var1.bind(var5)(var0);
                _fun85662_ip = 340;
                continue _fun85662;
            case 328:
                var1 = var3.syncDevice;
                var0 = var1.bind(var3)(var4, var2);
            case 340:
                return var0;
        }
    };
    var3.registerDevice = var4;
    var4 = function arg0() {
        _fun85663: for (var _fun85663_ip = 0;;) switch (_fun85663_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun85663_ip = 20;
                    continue _fun85663
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot4;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85665: for (var _fun85665_ip = 0;;) switch (_fun85665_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun85665_ip = 423;
                                    continue _fun85665
                                }
                            case 12:
                                var2 = undefined;
                                var _closure4_slot0 = var2;
                                var5 = _closure1_slot6;
                                var3 = var5.getId;
                                var3 = var3.bind(var5)();
                                _closure4_slot0 = var3;
                                var3 = global;
                                var5 = var3.Promise;
                                var3 = var5.all;
                                var7 = _closure1_slot5;
                                var6 = var7.getValidUsers;
                                var7 = var6.bind(var7)();
                                var6 = var7.sort;
                                var1 = function(arg0, arg1) { // Environment: var1
                                    _fun85666: for (var _fun85666_ip = 0;;) switch (_fun85666_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.id;
                                            var2 = _closure4_slot0;
                                            var0 = -1;
                                            if (!(var3 !== var2)) {
                                                _fun85666_ip = 49;
                                                continue _fun85666
                                            }
                                        case 25:
                                            var2 = arg1;
                                            var3 = var2.id;
                                            var2 = _closure4_slot0;
                                            var1 = 0;
                                            if (!(var3 === var2)) {
                                                _fun85666_ip = 46;
                                                continue _fun85666
                                            }
                                        case 43:
                                            var1 = 1;
                                        case 46:
                                            var0 = var1;
                                        case 49:
                                            return var0;
                                    }
                                };
                                var7 = var6.bind(var7)(var1);
                                var6 = var7.map;
                                var1 = _closure1_slot15;
                                var1 = var6.bind(var7)(var1);
                                var1 = var3.bind(var5)(var1);
                                SaveGenerator(address = 110);
                            case 108:
                                return var1;
                            case 110:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun85665_ip = 420;
                                    continue _fun85665
                                }
                            case 119:
                                var5 = var1.length;
                                var3 = 1;
                                if (!(!(var5 < var3))) {
                                    _fun85665_ip = 417;
                                    continue _fun85665
                                }
                            case 134:
                                var6 = 0;
                                var5 = var1[var6];
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun85665_ip = 417;
                                    continue _fun85665
                                }
                            case 149:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var3 = 7;
                                var3 = var7[var3];
                                var3 = var5.bind(var2)(var3);
                                var7 = var3.HTTP;
                                var5 = var7.put;
                                var3 = {};
                                var8 = _closure1_slot9;
                                var8 = var8.DEVICES_SYNC;
                                var3.url = var8;
                                var8 = {};
                                var10 = _closure2_slot1;
                                if (var10) {
                                    _fun85665_ip = 218;
                                    continue _fun85665
                                }
                            case 208:
                                var10 = _closure1_slot12;
                                var10 = var10.bind(var2)();
                                _fun85665_ip = 222;
                                continue _fun85665;
                            case 218:
                                var10 = _closure1_slot11;
                            case 222:
                                var8.provider = var10;
                                var9 = _closure2_slot0;
                                var8.token = var9;
                                var12 = var1.filter;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot3;
                                var9 = 14;
                                var9 = var11[var9];
                                var9 = var10.bind(var2)(var9);
                                var9 = var9.isNotNullish;
                                var9 = var12.bind(var1)(var9);
                                var8.push_sync_tokens = var9;
                                var9 = 12;
                                var9 = var11[var9];
                                var10 = var10.bind(var2)(var9);
                                var9 = var10.isAndroid;
                                var9 = var9.bind(var10)();
                                if (!var9) {
                                    _fun85665_ip = 311;
                                    continue _fun85665
                                }
                            case 304:
                                var10 = _closure1_slot13;
                                var9 = !var10;
                            case 311:
                                var8.bypass_server_throttling_supported = var9;
                                var9 = _closure1_slot10;
                                var8.bundle_id = var9;
                                var3.body = var8;
                                var8 = false;
                                var3.rejectWithError = var8;
                                var3 = var5.bind(var7)(var3);
                                SaveGenerator(address = 344);
                            case 342:
                                return var3;
                            case 344:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun85665_ip = 414;
                                    continue _fun85665
                                }
                            case 350:
                                var5 = var3.body;
                                var5 = var5.invalid_push_sync_tokens;
                                var5 = var5.length;
                                if (!(var5 > var6)) {
                                    _fun85665_ip = 417;
                                    continue _fun85665
                                }
                            case 370:
                                var5 = _closure1_slot2;
                                var6 = _closure1_slot3;
                                var4 = 9;
                                var4 = var6[var4];
                                var6 = var5.bind(var2)(var4);
                                var5 = var6.invalidatePushSyncTokens;
                                var4 = var3.body;
                                var4 = var4.invalid_push_sync_tokens;
                                var4 = var5.bind(var6)(var4);
                                _fun85665_ip = 417;
                                continue _fun85665;
                            case 414:
                                return var3;
                            case 417:
                                return var2;
                            case 420:
                                return var1;
                            case 423:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.syncDevice = var4;
    var4 = function arg0() {
        var5 = arg0;
        var2 = _closure1_slot14;
        var1 = var2.log;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var0 = 'Unregistering push notification token: ';
        var0 = var3.bind(var0)(var5);
        var0 = var1.bind(var2)(var0);
        var1 = _closure1_slot1;
        var7 = _closure1_slot3;
        var0 = 11;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.delete;
        var0 = {};
        var3 = _closure1_slot9;
        var3 = var3.DEVICES;
        var0.url = var3;
        var3 = {};
        var8 = _closure1_slot12;
        var8 = var8.bind(var6)();
        var3.provider = var8;
        var3.token = var5;
        var0.body = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 13;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.USER_UNREGISTER_DEVICE_TOKEN;
        var3.event = var4;
        var0.trackedActionData = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.unregisterDevice = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/PushNotificationActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 15;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'PUSH_NOTIFICATION_PERMISSION_SET_STATE';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.permissionState = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPushPermissionState = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN';
        var1.type = var4;
        var4 = arg0;
        var1.promptType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPushPermissionReactivationSeen = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE';
        var1.type = var4;
        var4 = arg0;
        var1.promptType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPushNotificationPermissionEligibleForPrompt = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.authorizationStatus = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateNotificationAuthorizationStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 10278, 1216, 660, 4560, 3, 804, 507, 1207, 10282, 587, 4525, 478, 481, 1304, 806, 2]);