// stores/NotificationSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun69549: for (var _fun69549_ip = 0;;) switch (_fun69549_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
                _fun69550: for (var _fun69550_ip = 0;;) switch (_fun69550_ip) {
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
                        _fun69550_ip = 76;
                        continue _fun69550;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot12 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var8 = function(arg0) { // Original name: handleSetDesktopType, environment: var3
                var0 = arg0;
                var1 = var0.desktopType;
                var0 = _closure1_slot11;
                var0.desktopType = var1;
                var0 = undefined;
                return var0;
            };
            var _closure1_slot13 = var8;
            var0 = global;
            var9 = var0.Object;
            var7 = var9.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var9)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var _closure1_slot2 = var1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 4;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 5;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var10 = var1.DesktopNotificationTypes;
            var _closure1_slot7 = var10;
            var7 = var1.NotificationPermissionTypes;
            var _closure1_slot8 = var7;
            var7 = var1.TTSNotificationTypes;
            var _closure1_slot9 = var7;
            var1 = {
                'desktopType': null,
                'disableAllSounds': false,
                'disabledSounds': null,
                'ttsType': null,
                'disableUnreadBadge': false,
                'taskbarFlash': true,
                'notifyMessagesInSelectedChannel': false
            };
            var9 = 6;
            var9 = var5[var9];
            var9 = var4.bind(var0)(var9);
            var9 = var9.isPlatformEmbedded;
            if (var9) {
                _fun69549_ip = 242;
                continue _fun69549
            }
        case 234:
            var9 = var10.NEVER;
            _fun69549_ip = 248;
            continue _fun69549;
        case 242:
            var9 = var10.ALL;
        case 248:
            var1.desktopType = var9;
            var9 = new Array(0);
            var1.disabledSounds = var9;
            var7 = var7.NEVER;
            var1.ttsType = var7;
            var _closure1_slot10 = var1;
            var _closure1_slot11 = var1;
            var1 = 7;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var7 = var1.DeviceSettingsStore;
            var1 = function(arg0) { // Environment: var3
                var3 = function() { // Original name: NotificationSettingsStore, environment: var5
                    _fun69555: for (var _fun69555_ip = 0;;) switch (_fun69555_ip) {
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
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun69555_ip = 69;
                                continue _fun69555
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun69555_ip = 105;
                            continue _fun69555;
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
                var0 = function(arg0) { // Original name: value, environment: var5
                    var1 = {};
                    var3 = _closure1_slot10;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    var3 = arg0;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    _closure1_slot11 = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(10);
                var0[0] = var4;
                var4 = {};
                var6 = 'getUserAgnosticState';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'getDesktopType';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.desktopType;
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'getTTSType';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.ttsType;
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'getDisabledSounds';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.disabledSounds;
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'getDisableAllSounds';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.disableAllSounds;
                    return var0;
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'getDisableUnreadBadge';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.disableUnreadBadge;
                    return var0;
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'getNotifyMessagesInSelectedChannel';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.notifyMessagesInSelectedChannel;
                    return var0;
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'taskbarFlash';
                var4.key = var6;
                var6 = function() { // Original name: get, environment: var5
                    var0 = _closure1_slot11;
                    var0 = var0.taskbarFlash;
                    return var0;
                };
                var4.get = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'isSoundDisabled';
                var4.key = var6;
                var5 = function(arg0) { // Original name: value, environment: var5
                    _fun69565: for (var _fun69565_ip = 0;;) switch (_fun69565_ip) {
                        case 0:
                            var0 = _closure1_slot11;
                            var0 = var0.disableAllSounds;
                            if (var0) {
                                _fun69565_ip = 50;
                                continue _fun69565
                            }
                        case 16:
                            var1 = _closure1_slot11;
                            var3 = var1.disabledSounds;
                            var2 = var3.indexOf;
                            var1 = arg0;
                            var2 = var2.bind(var3)(var1);
                            var1 = -1;
                            var0 = var1 !== var2;
                        case 50:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[9] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var1.bind(var0)(var7);
            var1 = 'NotificationSettingsStore';
            var7.displayName = var1;
            var1 = 'notifications';
            var7.persistKey = var1;
            var1 = new Array(1);
            var9 = function(arg0) { // Environment: var3
                _fun69566: for (var _fun69566_ip = 0;;) switch (_fun69566_ip) {
                    case 0:
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var1 = copyDataProperties(var6, var5);
                        var1 = var0.disabledSounds;
                        if (var1) {
                            _fun69566_ip = 25;
                            continue _fun69566
                        }
                    case 21:
                        var1 = new Array(0);
                    case 25:
                        var0.disabledSounds = var1;
                        var1 = var0.disableUnreadBadge;
                        if (var1) {
                            _fun69566_ip = 42;
                            continue _fun69566
                        }
                    case 40:
                        var1 = false;
                    case 42:
                        var0.disableUnreadBadge = var1;
                        var1 = var0.taskbarFlash;
                        var2 = null;
                        var1 = var2 == var1;
                        if (var1) {
                            _fun69566_ip = 69;
                            continue _fun69566
                        }
                    case 63:
                        var1 = var0.taskbarFlash;
                    case 69:
                        var0.taskbarFlash = var1;
                        var1 = var0.ttsType;
                        if (var1) {
                            _fun69566_ip = 97;
                            continue _fun69566
                        }
                    case 84:
                        var3 = _closure1_slot9;
                        var1 = var3.NEVER;
                    case 97:
                        var0.ttsType = var1;
                        var1 = var0.desktopType;
                        if (!(var2 == var1)) {
                            _fun69566_ip = 171;
                            continue _fun69566
                        }
                    case 113:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.isPlatformEmbedded;
                        var2 = _closure1_slot7;
                        if (var1) {
                            _fun69566_ip = 159;
                            continue _fun69566
                        }
                    case 151:
                        var1 = var2.NEVER;
                        _fun69566_ip = 165;
                        continue _fun69566;
                    case 159:
                        var1 = var2.ALL;
                    case 165:
                        var0.desktopType = var1;
                    case 171:
                        return var0;
                }
            };
            var1[0] = var9;
            var7.migrations = var1;
            var1 = 8;
            var1 = var5[var1];
            var14 = var6.bind(var0)(var1);
            var1 = {};
            var1.NOTIFICATIONS_SET_DESKTOP_TYPE = var8;
            var8 = function(arg0) { // Original name: handleSetTTSType, environment: var3
                var0 = arg0;
                var1 = var0.ttsType;
                var0 = _closure1_slot11;
                var0.ttsType = var1;
                var0 = undefined;
                return var0;
            };
            var1.NOTIFICATIONS_SET_TTS_TYPE = var8;
            var8 = function(arg0) { // Original name: handleSetDisabledSounds, environment: var3
                var0 = arg0;
                var1 = var0.sounds;
                var0 = _closure1_slot11;
                var0.disabledSounds = var1;
                var0 = undefined;
                return var0;
            };
            var1.NOTIFICATIONS_SET_DISABLED_SOUNDS = var8;
            var8 = function() { // Original name: handleToggleAllDisabled, environment: var3
                var1 = _closure1_slot11;
                var0 = var1.disableAllSounds;
                var0 = !var0;
                var1.disableAllSounds = var0;
                var0 = undefined;
                return var0;
            };
            var1.NOTIFICATIONS_TOGGLE_ALL_DISABLED = var8;
            var8 = function(arg0) { // Original name: handleSetHavePermission, environment: var3
                _fun69570: for (var _fun69570_ip = 0;;) switch (_fun69570_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.enabled;
                        var1 = _closure1_slot8;
                        var1 = var1.BLOCKED;
                        if (!(var2 !== var1)) {
                            _fun69570_ip = 69;
                            continue _fun69570
                        }
                    case 25:
                        var1 = _closure1_slot8;
                        var1 = var1.ENABLED;
                        if (!(var2 === var1)) {
                            _fun69570_ip = 97;
                            continue _fun69570
                        }
                    case 39:
                        var3 = _closure1_slot13;
                        var2 = {};
                        var1 = _closure1_slot7;
                        var1 = var1.ALL;
                        var2.desktopType = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun69570_ip = 97;
                        continue _fun69570;
                    case 69:
                        var2 = _closure1_slot13;
                        var1 = {};
                        var0 = _closure1_slot7;
                        var0 = var0.NEVER;
                        var1.desktopType = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 97:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.NOTIFICATIONS_SET_PERMISSION_STATE = var8;
            var8 = function(arg0) { // Original name: handleSetDisableUnreadBadge, environment: var3
                var0 = arg0;
                var1 = var0.disableUnreadBadge;
                var0 = _closure1_slot11;
                var0.disableUnreadBadge = var1;
                var0 = undefined;
                return var0;
            };
            var1.NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE = var8;
            var8 = function(arg0) { // Original name: handleSetTaskbarFlash, environment: var3
                var0 = arg0;
                var1 = var0.taskbarFlash;
                var0 = _closure1_slot11;
                var0.taskbarFlash = var1;
                var0 = undefined;
                return var0;
            };
            var1.NOTIFICATIONS_SET_TASKBAR_FLASH = var8;
            var3 = function(arg0) { // Original name: handleSetNotifyMessagesInSelectedChannel, environment: var3
                var0 = arg0;
                var1 = var0.notify;
                var0 = _closure1_slot11;
                var0.notifyMessagesInSelectedChannel = var1;
                var0 = undefined;
                return var0;
            };
            var1.NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var15 = var3;
            var13 = var1;
            var1 = new var15[var7](var14, var13, var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/NotificationSettingsStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 478, 566, 806, 2]);