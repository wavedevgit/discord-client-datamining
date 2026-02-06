// stores/native/PushNotificationPermissionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun85668: for (var _fun85668_ip = 0;;) switch (_fun85668_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun85668_ip = 76;
                continue _fun85668;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var9 = global;
    var4 = var9.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var13 = 0;
    var1 = var6[var13];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var12 = 1;
    var1 = var6[var12];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var11 = 2;
    var1 = var6[var11];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var10 = 3;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var8 = 4;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var3 = {};
    var3.INIT = var13;
    var1 = 'INIT';
    var3[var13] = var1;
    var3.REQUESTED = var12;
    var1 = 'REQUESTED';
    var3[var12] = var1;
    var3.PROMPT_SEEN = var11;
    var1 = 'PROMPT_SEEN';
    var3[var11] = var1;
    var3.PROMPT_SKIPPED = var10;
    var1 = 'PROMPT_SKIPPED';
    var3[var10] = var1;
    var _closure1_slot7 = var3;
    var1 = {};
    var1.MESSAGE_SENT = var13;
    var4 = 'MESSAGE_SENT';
    var1[var13] = var4;
    var1.INVITE_ACCEPTED = var12;
    var4 = 'INVITE_ACCEPTED';
    var1[var12] = var4;
    var1.FRIEND_REQUEST_SENT = var11;
    var4 = 'FRIEND_REQUEST_SENT';
    var1[var11] = var4;
    var1.DM_SPACE = var10;
    var4 = 'DM_SPACE';
    var1[var10] = var4;
    var1.APP_LOAD_PROMPT = var8;
    var4 = 'APP_LOAD_PROMPT';
    var1[var8] = var4;
    var8 = 5;
    var1.CHANNEL_BANNER = var8;
    var4 = 'CHANNEL_BANNER';
    var1[var8] = var4;
    var8 = {};
    var4 = var3.INIT;
    var8.permissionState = var4;
    var10 = {};
    var11 = var1.MESSAGE_SENT;
    var4 = null;
    var10[var11] = var4;
    var11 = var1.INVITE_ACCEPTED;
    var10[var11] = var4;
    var11 = var1.FRIEND_REQUEST_SENT;
    var10[var11] = var4;
    var11 = var1.DM_SPACE;
    var10[var11] = var4;
    var11 = var1.APP_LOAD_PROMPT;
    var10[var11] = var4;
    var11 = var1.CHANNEL_BANNER;
    var10[var11] = var4;
    var8.promptLastSeen = var10;
    var11 = var9.Set;
    var9 = var11.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var16 = new Array(0);
    var17 = var10;
    var9 = new var17[var11](var16, var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var8.eligiblePromptTypes = var9;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var8 = var4.DeviceSettingsStore;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun85672: for (var _fun85672_ip = 0;;) switch (_fun85672_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun85672_ip = 69;
                        continue _fun85672
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun85672_ip = 105;
                    continue _fun85672;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun85673: for (var _fun85673_ip = 0;;) switch (_fun85673_ip) {
                case 0:
                    var8 = arg0;
                    var2 = {};
                    var11 = _closure1_slot8;
                    var12 = var2;
                    var0 = copyDataProperties(var12, var11);
                    var7 = null;
                    var3 = var7 != var8;
                    var0 = null;
                    if (!var3) {
                        _fun85673_ip = 33;
                        continue _fun85673
                    }
                case 30:
                    var0 = var8;
                case 33:
                    var12 = var2;
                    var11 = var0;
                    var0 = copyDataProperties(var12, var11);
                    var4 = {};
                    var0 = _closure1_slot8;
                    var11 = var0.promptLastSeen;
                    var12 = var4;
                    var0 = copyDataProperties(var12, var11);
                    var5 = var7 == var8;
                    var0 = undefined;
                    var3 = undefined;
                    if (var5) {
                        _fun85673_ip = 79;
                        continue _fun85673
                    }
                case 73:
                    var3 = var8.promptLastSeen;
                case 79:
                    var12 = var4;
                    var11 = var3;
                    var3 = copyDataProperties(var12, var11);
                    var3 = 'promptLastSeen';
                    var2[var3] = var4;
                    var3 = global;
                    var5 = var3.Set;
                    var3 = _closure1_slot8;
                    var11 = var3.eligiblePromptTypes;
                    var3 = new Array(0);
                    var10 = 0;
                    var12 = var3;
                    var6 = arraySpread(var12, var11, var10);
                    var9 = var7 == var8;
                    var4 = undefined;
                    if (var9) {
                        _fun85673_ip = 144;
                        continue _fun85673
                    }
                case 138:
                    var4 = var8.eligiblePromptTypes;
                case 144:
                    if (!(var7 == var4)) {
                        _fun85673_ip = 152;
                        continue _fun85673
                    }
                case 148:
                    var4 = new Array(0);
                case 152:
                    var12 = var3;
                    var11 = var4;
                    var10 = var6;
                    var4 = arraySpread(var12, var11, var10);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var13 = var4;
                    var12 = var3;
                    var3 = new var13[var5](var12, var11);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = 'eligiblePromptTypes';
                    var2[var3] = var4;
                    _closure1_slot9 = var2;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.checkPermissions;
                    var1 = function(arg0) { // Environment: var1
                        _fun85674: for (var _fun85674_ip = 0;;) switch (_fun85674_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.alert;
                                var2 = var1.sound;
                                var1 = var1.badge;
                                if (var0) {
                                    _fun85674_ip = 27;
                                    continue _fun85674
                                }
                            case 24:
                                var0 = var2;
                            case 27:
                                if (var0) {
                                    _fun85674_ip = 33;
                                    continue _fun85674
                                }
                            case 30:
                                var0 = var1;
                            case 33:
                                if (!var0) {
                                    _fun85674_ip = 59;
                                    continue _fun85674
                                }
                            case 36:
                                var1 = _closure1_slot9;
                                var0 = _closure1_slot7;
                                var0 = var0.REQUESTED;
                                var1.permissionState = var0;
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'permissionState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.permissionState;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'promptSeen';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot7;
            var3 = var1.PROMPT_SEEN;
            var2 = new Array(2);
            var2[0] = var3;
            var1 = var1.PROMPT_SKIPPED;
            var2[1] = var1;
            var1 = var2.includes;
            var0 = _closure1_slot9;
            var0 = var0.permissionState;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'authorizationStatus';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var4.bind(var0)(var8);
    var4 = 'PushNotificationPermissionStore';
    var8.displayName = var4;
    var4 = 'PushNotificationPermissionStoreKey_1';
    var8.persistKey = var4;
    var4 = new Array(1);
    var9 = function(arg0) { // Environment: var5
        _fun85679: for (var _fun85679_ip = 0;;) switch (_fun85679_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = _closure1_slot8;
                var7 = var0;
                var6 = var2;
                var3 = copyDataProperties(var7, var6);
                var7 = var0;
                var6 = var1;
                var3 = copyDataProperties(var7, var6);
                var3 = {};
                var6 = var2.promptLastSeen;
                var7 = var3;
                var2 = copyDataProperties(var7, var6);
                var6 = var1.promptLastSeen;
                var7 = var3;
                var2 = copyDataProperties(var7, var6);
                var2 = 'promptLastSeen';
                var0[var2] = var3;
                var3 = var1.eligiblePromptTypes;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun85679_ip = 201;
                    continue _fun85679
                }
            case 81:
                var3 = global;
                var5 = var3.Array;
                var4 = var5.isArray;
                var2 = var1.eligiblePromptTypes;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun85679_ip = 167;
                    continue _fun85679
                }
            case 108:
                var4 = var1.eligiblePromptTypes;
                var2 = var3.Set;
                var2 = var4 instanceof var2;
                if (var2) {
                    _fun85679_ip = 159;
                    continue _fun85679
                }
            case 127:
                var5 = var3.Set;
                var2 = var5.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = new Array(0);
                var8 = var4;
                var2 = new var8[var5](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                _fun85679_ip = 165;
                continue _fun85679;
            case 159:
                var2 = var1.eligiblePromptTypes;
            case 165:
                _fun85679_ip = 199;
                continue _fun85679;
            case 167:
                var4 = var3.Set;
                var7 = var1.eligiblePromptTypes;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var2 = var1 instanceof Object ? var1 : var3;
            case 199:
                _fun85679_ip = 233;
                continue _fun85679;
            case 201:
                var1 = global;
                var4 = var1.Set;
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = new Array(0);
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var2 = var1 instanceof Object ? var1 : var3;
            case 233:
                var1 = 'eligiblePromptTypes';
                var0[var1] = var2;
                return var0;
        }
    };
    var4[0] = var9;
    var8.migrations = var4;
    var4 = 7;
    var4 = var6[var4];
    var16 = var7.bind(var0)(var4);
    var4 = {};
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.permissionState;
        var0 = _closure1_slot9;
        var0.permissionState = var1;
        var0 = undefined;
        return var0;
    };
    var4.PUSH_NOTIFICATION_PERMISSION_SET_STATE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.promptType;
        var0 = _closure1_slot9;
        var1 = var0.promptLastSeen;
        var0 = global;
        var0 = var0.Date;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var4 = var3;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var3;
        var1[var2] = var0;
        var0 = true;
        return var0;
    };
    var4.PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.promptType;
        var1 = _closure1_slot9;
        var2 = global;
        var4 = var2.Set;
        var0 = _closure1_slot9;
        var5 = var0.eligiblePromptTypes;
        var2 = var4.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var4
            }
        });
        var6 = var2;
        var0 = new var6[var4](var5, var4);
        var2 = var0 instanceof Object ? var0 : var2;
        var0 = var2.add;
        var0 = var0.bind(var2)(var3);
        var1.eligiblePromptTypes = var0;
        var0 = true;
        return var0;
    };
    var4.PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE = var9;
    var5 = function arg0() {
        var0 = arg0;
        var1 = var0.authorizationStatus;
        _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var4.PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var8
        }
    });
    var17 = var5;
    var15 = var4;
    var4 = new var17[var8](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/native/PushNotificationPermissionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.PermissionStateType = var3;
    var2.PermissionPromptType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8652, 566, 806, 2]);