// modules/user_settings/UnsyncedUserSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var5
        _fun27489: for (var _fun27489_ip = 0;;) switch (_fun27489_ip) {
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
            case 70: // try_end0
                _fun27489_ip = 74;
                continue _fun27489;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var4 = global;
    var9 = var4.Object;
    var3 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var9 = 2;
    var1 = var7[var9];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.SystemThemeState;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.DEFAULT_CHAT_SIDEBAR_WIDTH;
    var _closure1_slot9 = var3;
    var10 = var1.CHANNEL_SIDEBAR_WIDTH;
    var _closure1_slot10 = var10;
    var1 = var1.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.ExpressionPickerWidths;
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.ListDensityMode;
    var _closure1_slot13 = var1;
    var3 = {};
    var1 = 'data_saver';
    var3.DATA_SAVER = var1;
    var1 = 'standard';
    var3.STANDARD = var1;
    var1 = 'best';
    var3.BEST = var1;
    var1 = {};
    var11 = 'very_low';
    var1.VERY_LOW = var11;
    var11 = 'low';
    var1.LOW = var11;
    var11 = 'medium';
    var1.MEDIUM = var11;
    var11 = 'high';
    var1.HIGH = var11;
    var11 = 'very_high';
    var1.VERY_HIGH = var11;
    var4 = var4.window;
    var4 = var4.innerWidth;
    var4 = var4 - var10;
    var4 = var4 / var9;
    var _closure1_slot14 = var4;
    var4 = var3.STANDARD;
    var _closure1_slot15 = var4;
    var4 = null;
    var _closure1_slot16 = var4;
    var4 = {};
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.DeviceSettingsStore;
    var4 = function(arg0) { // Environment: var5
        var3 = function() { // Original name: UnsyncedUserSettingsStore, environment: var5
            _fun27493: for (var _fun27493_ip = 0;;) switch (_fun27493_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun27493_ip = 69;
                        continue _fun27493
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun27493_ip = 105;
                    continue _fun27493;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun27494: for (var _fun27494_ip = 0;;) switch (_fun27494_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun27494_ip = 11;
                        continue _fun27494
                    }
                case 9:
                    var3 = {};
                case 11:
                    _closure1_slot17 = var3;
                    var4 = var3.useSystemTheme;
                    if (!(var0 != var4)) {
                        _fun27494_ip = 98;
                        continue _fun27494
                    }
                case 28:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.bind(var5)();
                    if (!(var0 != var2)) {
                        _fun27494_ip = 98;
                        continue _fun27494
                    }
                case 58:
                    var6 = 'boolean';
                    var5 = typeof var4;
                    var2 = var4;
                    if (!(var6 === var5)) {
                        _fun27494_ip = 96;
                        continue _fun27494
                    }
                case 72:
                    var5 = _closure1_slot8;
                    if (var4) {
                        _fun27494_ip = 87;
                        continue _fun27494
                    }
                case 79:
                    var4 = var5.OFF;
                    _fun27494_ip = 93;
                    continue _fun27494;
                case 87:
                    var4 = var5.ON;
                case 93:
                    var2 = var4;
                case 96:
                    _fun27494_ip = 108;
                    continue _fun27494;
                case 98:
                    var4 = _closure1_slot8;
                    var2 = var4.UNSET;
                case 108:
                    var3.useSystemTheme = var2;
                    var3 = _closure1_slot17;
                    var2 = var3.dataSavingMode;
                    if (!(var0 == var2)) {
                        _fun27494_ip = 138;
                        continue _fun27494
                    }
                case 128:
                    var4 = _closure1_slot17;
                    var2 = var4.lowQualityImageMode;
                case 138:
                    var3.dataSavingMode = var2;
                    var3 = _closure1_slot17;
                    var2 = var3.darkSidebar;
                    if (!(var0 == var2)) {
                        _fun27494_ip = 239;
                        continue _fun27494
                    }
                case 158:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var8 = var4.PersistedStore;
                    var7 = var8.migrateAndReadStoreState;
                    var6 = 'AccessibilityStore';
                    var4 = new Array(0);
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = var4.state;
                    var6 = var0 == var4;
                    if (var6) {
                        _fun27494_ip = 226;
                        continue _fun27494
                    }
                case 220:
                    var5 = var4.darkSidebar;
                case 226:
                    var4 = var0 != var5;
                    if (!var4) {
                        _fun27494_ip = 236;
                        continue _fun27494
                    }
                case 233:
                    var4 = var5;
                case 236:
                    var2 = var4;
                case 239:
                    var3.darkSidebar = var2;
                    var1 = _closure1_slot17;
                    var2 = var1.hdrDynamicRange;
                    var3 = var0 != var2;
                    var0 = 'no-limit';
                    if (!var3) {
                        _fun27494_ip = 271;
                        continue _fun27494
                    }
                case 268:
                    var0 = var2;
                case 271:
                    var1.hdrDynamicRange = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(30);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'displayCompactAvatars';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27496: for (var _fun27496_ip = 0;;) switch (_fun27496_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.displayCompactAvatars;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27496_ip = 27;
                        continue _fun27496
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'lowQualityImageMode';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27497: for (var _fun27497_ip = 0;;) switch (_fun27497_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.lowQualityImageMode;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27497_ip = 25;
                        continue _fun27497
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'videoUploadQuality';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27498: for (var _fun27498_ip = 0;;) switch (_fun27498_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.videoUploadQuality;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27498_ip = 23;
                        continue _fun27498
                    }
                case 19:
                    var0 = _closure1_slot15;
                case 23:
                    return var0;
            }
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'dataSavingMode';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27499: for (var _fun27499_ip = 0;;) switch (_fun27499_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.dataSavingMode;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun27499_ip = 29;
                        continue _fun27499
                    }
                case 19:
                    var2 = _closure1_slot17;
                    var1 = var2.lowQualityImageMode;
                case 29:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27499_ip = 39;
                        continue _fun27499
                    }
                case 36:
                    var0 = var1;
                case 39:
                    return var0;
            }
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'expressionPickerWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27500: for (var _fun27500_ip = 0;;) switch (_fun27500_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.expressionPickerWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27500_ip = 31;
                        continue _fun27500
                    }
                case 21:
                    var1 = _closure1_slot12;
                    var0 = var1.MIN;
                case 31:
                    return var0;
            }
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'messageRequestSidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27501: for (var _fun27501_ip = 0;;) switch (_fun27501_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.messageRequestSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27501_ip = 25;
                        continue _fun27501
                    }
                case 21:
                    var0 = _closure1_slot11;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'threadSidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27502: for (var _fun27502_ip = 0;;) switch (_fun27502_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.threadSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27502_ip = 25;
                        continue _fun27502
                    }
                case 21:
                    var0 = _closure1_slot9;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'postSidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27503: for (var _fun27503_ip = 0;;) switch (_fun27503_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.postSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27503_ip = 25;
                        continue _fun27503
                    }
                case 21:
                    var0 = _closure1_slot14;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'callChatSidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27504: for (var _fun27504_ip = 0;;) switch (_fun27504_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.callChatSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27504_ip = 25;
                        continue _fun27504
                    }
                case 21:
                    var0 = _closure1_slot9;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'homeSidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27505: for (var _fun27505_ip = 0;;) switch (_fun27505_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.homeSidebarWidth;
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun27505_ip = 94;
                        continue _fun27505
                    }
                case 21:
                    var2 = _closure1_slot16;
                    if (!(var3 == var2)) {
                        _fun27505_ip = 90;
                        continue _fun27505
                    }
                case 29:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var2 = var2.window;
                    var3 = var2.innerWidth;
                    var2 = _closure1_slot10;
                    var3 = var3 - var2;
                    var2 = 0.4;
                    var3 = var2 * var3;
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    _closure1_slot16 = var2;
                case 90:
                    var0 = _closure1_slot16;
                case 94:
                    return var0;
            }
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'callParticipantsSidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27506: for (var _fun27506_ip = 0;;) switch (_fun27506_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.callParticipantsSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27506_ip = 49;
                        continue _fun27506
                    }
                case 21:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0 = var1.DEFAULT_PARTICIPANTS_SIDEBAR_WIDTH;
                case 49:
                    return var0;
            }
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'callHeaderHeight';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot17;
            var0 = var0.callHeaderHeight;
            return var0;
        };
        var4.get = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'useSystemTheme';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27508: for (var _fun27508_ip = 0;;) switch (_fun27508_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.useSystemTheme;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27508_ip = 29;
                        continue _fun27508
                    }
                case 19:
                    var1 = _closure1_slot8;
                    var0 = var1.UNSET;
                case 29:
                    return var0;
            }
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'activityPanelHeight';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot17;
            var0 = var0.activityPanelHeight;
            return var0;
        };
        var4.get = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'disableVoiceChannelChangeAlert';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27510: for (var _fun27510_ip = 0;;) switch (_fun27510_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableVoiceChannelChangeAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27510_ip = 25;
                        continue _fun27510
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'disableEmbeddedActivityPopOutAlert';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27511: for (var _fun27511_ip = 0;;) switch (_fun27511_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableEmbeddedActivityPopOutAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27511_ip = 27;
                        continue _fun27511
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'disableActivityHardwareAccelerationPrompt';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27512: for (var _fun27512_ip = 0;;) switch (_fun27512_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableActivityHardwareAccelerationPrompt;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27512_ip = 27;
                        continue _fun27512
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'disableInviteWithTextChannelActivityLaunch';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27513: for (var _fun27513_ip = 0;;) switch (_fun27513_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableInviteWithTextChannelActivityLaunch;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27513_ip = 27;
                        continue _fun27513
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'disableHideSelfStreamAndVideoConfirmationAlert';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27514: for (var _fun27514_ip = 0;;) switch (_fun27514_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableHideSelfStreamAndVideoConfirmationAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27514_ip = 25;
                        continue _fun27514
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'pushUpsellUserSettingsDismissed';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27515: for (var _fun27515_ip = 0;;) switch (_fun27515_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.pushUpsellDismissed;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27515_ip = 27;
                        continue _fun27515
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'disableActivityHostLeftNitroUpsell';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27516: for (var _fun27516_ip = 0;;) switch (_fun27516_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableActivityHostLeftNitroUpsell;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27516_ip = 27;
                        continue _fun27516
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'disableCallUserConfirmationPrompt';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27517: for (var _fun27517_ip = 0;;) switch (_fun27517_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableCallUserConfirmationPrompt;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27517_ip = 27;
                        continue _fun27517
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'disableApplicationSubscriptionCancellationSurvey';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27518: for (var _fun27518_ip = 0;;) switch (_fun27518_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableApplicationSubscriptionCancellationSurvey;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27518_ip = 27;
                        continue _fun27518
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'darkSidebar';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27519: for (var _fun27519_ip = 0;;) switch (_fun27519_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.darkSidebar;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27519_ip = 25;
                        continue _fun27519
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'saveCameraUploadsToDevice';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27520: for (var _fun27520_ip = 0;;) switch (_fun27520_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.saveCameraUploadsToDevice;
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun27520_ip = 25;
                        continue _fun27520
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'isVisualRefreshDisabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun27521: for (var _fun27521_ip = 0;;) switch (_fun27521_ip) {
                case 0:
                    var0 = arg0;
                    var1 = _closure1_slot17;
                    var1 = var1.disableVisualRefresh;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun27521_ip = 25;
                        continue _fun27521
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'listDensity';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27522: for (var _fun27522_ip = 0;;) switch (_fun27522_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.listDensity;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27522_ip = 31;
                        continue _fun27522
                    }
                case 21:
                    var1 = _closure1_slot13;
                    var0 = var1.COZY;
                case 31:
                    return var0;
            }
        };
        var4.get = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'hdrDynamicRange';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            _fun27523: for (var _fun27523_ip = 0;;) switch (_fun27523_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.hdrDynamicRange;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 'no-limit';
                    if (!var2) {
                        _fun27523_ip = 31;
                        continue _fun27523
                    }
                case 28:
                    var0 = var1;
                case 31:
                    return var0;
            }
        };
        var4.get = var5;
        var0[29] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'UnsyncedUserSettingsStore';
    var9.displayName = var4;
    var9.persistKey = var4;
    var4 = new Array(2);
    var10 = function() { // Environment: var5
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 12;
        var5 = var3[var1];
        var2 = undefined;
        var5 = var4.bind(var2)(var5);
        var7 = var5.Storage;
        var6 = var7.get;
        var5 = 'UserSettingsStore';
        var17 = var6.bind(var7)(var5);
        var1 = var3[var1];
        var1 = var4.bind(var2)(var1);
        var4 = var1.Storage;
        var1 = var4.remove;
        var1 = var1.bind(var4)(var5);
        var1 = _closure1_slot1;
        var0 = 13;
        var0 = var3[var0];
        var16 = var1.bind(var2)(var0);
        var15 = var16.pick;
        var32 = 'dataSavingMode';
        var31 = 'videoUploadQuality';
        var30 = 'lowQualityImageMode';
        var29 = 'useSystemTheme';
        var28 = 'expressionPickerWidth';
        var27 = 'disableVoiceChannelChangeAlert';
        var26 = 'disableHideSelfStreamAndVideoConfirmationAlert';
        var25 = 'pushUpsellDismissed';
        var24 = 'disableEmbeddedActivityPopOutAlert';
        var23 = 'disableActivityHardwareAccelerationPrompt';
        var22 = 'disableInviteWithTextChannelActivityLaunch';
        var21 = 'disableActivityHostLeftNitroUpsell';
        var20 = 'disableCallUserConfirmationPrompt';
        var19 = 'disableApplicationSubscriptionCancellationSurvey';
        var18 = 'enableAndroidChatListAnimations';
        var34 = var16;
        var33 = var17;
        var0 = var34[var15](var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
        return var0;
    };
    var4[0] = var10;
    var10 = function(arg0) { // Environment: var5
        var0 = arg0;
        var0 = delete var0.disableVisualRefresh;
        var0 = undefined;
        return var0;
    };
    var4[1] = var10;
    var9.migrations = var4;
    var4 = 14;
    var4 = var7[var4];
    var14 = var8.bind(var0)(var4);
    var4 = {};
    var10 = function(arg0) { // Original name: handleUnsyncedUserSettingsUpdate, environment: var5
        var1 = {};
        var3 = _closure1_slot17;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var2 = arg0;
        var3 = var2.settings;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot17 = var1;
        var0 = undefined;
        return var0;
    };
    var4.UNSYNCED_USER_SETTINGS_UPDATE = var10;
    var10 = function() { // Original name: handleLogOut, environment: var5
        var1 = {};
        var2 = _closure1_slot17;
        var2 = var2.useSystemTheme;
        var1.useSystemTheme = var2;
        var2 = _closure1_slot17;
        var2 = var2.darkSidebar;
        var1.darkSidebar = var2;
        _closure1_slot17 = var1;
        var0 = undefined;
        return var0;
    };
    var4.LOGOUT = var10;
    var10 = function() { // Original name: handleLogInSuccess, environment: var5
        _fun27528: for (var _fun27528_ip = 0;;) switch (_fun27528_ip) {
            case 0:
                var2 = _closure1_slot17;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun27528_ip = 19;
                    continue _fun27528
                }
            case 13:
                var0 = {};
                _closure1_slot17 = var0;
            case 19:
                var0 = undefined;
                return var0;
        }
    };
    var4.LOGIN_SUCCESS = var10;
    var10 = function() { // Original name: handleRegisterSuccess, environment: var5
        var1 = _closure1_slot17;
        var0 = _closure1_slot8;
        var0 = var0.ON;
        var1.useSystemTheme = var0;
        var0 = undefined;
        return var0;
    };
    var4.REGISTER_SUCCESS = var10;
    var5 = function() { // Original name: handleDarkSidebarToggle, environment: var5
        var1 = _closure1_slot17;
        var0 = var1.darkSidebar;
        var0 = !var0;
        var1.darkSidebar = var0;
        var0 = true;
        return var0;
    };
    var4.ACCESSIBILITY_DARK_SIDEBAR_TOGGLE = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/UnsyncedUserSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.VideoQualitySettings = var3;
    var2.VideoCompressionQuality = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3157, 660, 1565, 1351, 3158, 566, 3159, 587, 22, 806, 2]);