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
    var0 = function() {
        _fun27730: for (var _fun27730_ip = 0;;) switch (_fun27730_ip) {
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
                _fun27730_ip = 74;
                continue _fun27730;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
        var3 = function() {
            _fun27734: for (var _fun27734_ip = 0;;) switch (_fun27734_ip) {
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
                        _fun27734_ip = 69;
                        continue _fun27734
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun27734_ip = 105;
                    continue _fun27734;
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
        var0 = function arg0() {
            _fun27735: for (var _fun27735_ip = 0;;) switch (_fun27735_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun27735_ip = 11;
                        continue _fun27735
                    }
                case 9:
                    var3 = {};
                case 11:
                    _closure1_slot17 = var3;
                    var4 = var3.useSystemTheme;
                    if (!(var0 != var4)) {
                        _fun27735_ip = 98;
                        continue _fun27735
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
                        _fun27735_ip = 98;
                        continue _fun27735
                    }
                case 58:
                    var6 = 'boolean';
                    var5 = typeof var4;
                    var2 = var4;
                    if (!(var6 === var5)) {
                        _fun27735_ip = 96;
                        continue _fun27735
                    }
                case 72:
                    var5 = _closure1_slot8;
                    if (var4) {
                        _fun27735_ip = 87;
                        continue _fun27735
                    }
                case 79:
                    var4 = var5.OFF;
                    _fun27735_ip = 93;
                    continue _fun27735;
                case 87:
                    var4 = var5.ON;
                case 93:
                    var2 = var4;
                case 96:
                    _fun27735_ip = 108;
                    continue _fun27735;
                case 98:
                    var4 = _closure1_slot8;
                    var2 = var4.UNSET;
                case 108:
                    var3.useSystemTheme = var2;
                    var3 = _closure1_slot17;
                    var2 = var3.dataSavingMode;
                    if (!(var0 == var2)) {
                        _fun27735_ip = 138;
                        continue _fun27735
                    }
                case 128:
                    var4 = _closure1_slot17;
                    var2 = var4.lowQualityImageMode;
                case 138:
                    var3.dataSavingMode = var2;
                    var3 = _closure1_slot17;
                    var2 = var3.darkSidebar;
                    if (!(var0 == var2)) {
                        _fun27735_ip = 239;
                        continue _fun27735
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
                        _fun27735_ip = 226;
                        continue _fun27735
                    }
                case 220:
                    var5 = var4.darkSidebar;
                case 226:
                    var4 = var0 != var5;
                    if (!var4) {
                        _fun27735_ip = 236;
                        continue _fun27735
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
                        _fun27735_ip = 271;
                        continue _fun27735
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
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'displayCompactAvatars';
        var4.key = var6;
        var6 = function() {
            _fun27737: for (var _fun27737_ip = 0;;) switch (_fun27737_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.displayCompactAvatars;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27737_ip = 27;
                        continue _fun27737
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
        var6 = function() {
            _fun27738: for (var _fun27738_ip = 0;;) switch (_fun27738_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.lowQualityImageMode;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27738_ip = 25;
                        continue _fun27738
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
        var6 = function() {
            _fun27739: for (var _fun27739_ip = 0;;) switch (_fun27739_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.videoUploadQuality;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27739_ip = 23;
                        continue _fun27739
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
        var6 = function() {
            _fun27740: for (var _fun27740_ip = 0;;) switch (_fun27740_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.dataSavingMode;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun27740_ip = 29;
                        continue _fun27740
                    }
                case 19:
                    var2 = _closure1_slot17;
                    var1 = var2.lowQualityImageMode;
                case 29:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27740_ip = 39;
                        continue _fun27740
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
        var6 = function() {
            _fun27741: for (var _fun27741_ip = 0;;) switch (_fun27741_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.expressionPickerWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27741_ip = 31;
                        continue _fun27741
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
        var6 = function() {
            _fun27742: for (var _fun27742_ip = 0;;) switch (_fun27742_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.messageRequestSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27742_ip = 25;
                        continue _fun27742
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
        var6 = function() {
            _fun27743: for (var _fun27743_ip = 0;;) switch (_fun27743_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.threadSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27743_ip = 25;
                        continue _fun27743
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
        var6 = function() {
            _fun27744: for (var _fun27744_ip = 0;;) switch (_fun27744_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.postSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27744_ip = 25;
                        continue _fun27744
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
        var6 = function() {
            _fun27745: for (var _fun27745_ip = 0;;) switch (_fun27745_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.callChatSidebarWidth;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27745_ip = 25;
                        continue _fun27745
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
        var6 = function() {
            _fun27746: for (var _fun27746_ip = 0;;) switch (_fun27746_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.homeSidebarWidth;
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun27746_ip = 94;
                        continue _fun27746
                    }
                case 21:
                    var2 = _closure1_slot16;
                    if (!(var3 == var2)) {
                        _fun27746_ip = 90;
                        continue _fun27746
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
        var6 = 'callHeaderHeight';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            var0 = var0.callHeaderHeight;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'useSystemTheme';
        var4.key = var6;
        var6 = function() {
            _fun27748: for (var _fun27748_ip = 0;;) switch (_fun27748_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.useSystemTheme;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27748_ip = 29;
                        continue _fun27748
                    }
                case 19:
                    var1 = _closure1_slot8;
                    var0 = var1.UNSET;
                case 29:
                    return var0;
            }
        };
        var4.get = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'activityPanelHeight';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            var0 = var0.activityPanelHeight;
            return var0;
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'disableVoiceChannelChangeAlert';
        var4.key = var6;
        var6 = function() {
            _fun27750: for (var _fun27750_ip = 0;;) switch (_fun27750_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableVoiceChannelChangeAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27750_ip = 25;
                        continue _fun27750
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'disableHardwareMuteSilenceAlert';
        var4.key = var6;
        var6 = function() {
            _fun27751: for (var _fun27751_ip = 0;;) switch (_fun27751_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableHardwareMuteSilenceAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27751_ip = 27;
                        continue _fun27751
                    }
                case 24:
                    var0 = var1;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'disableEmbeddedActivityPopOutAlert';
        var4.key = var6;
        var6 = function() {
            _fun27752: for (var _fun27752_ip = 0;;) switch (_fun27752_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableEmbeddedActivityPopOutAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27752_ip = 27;
                        continue _fun27752
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
        var6 = function() {
            _fun27753: for (var _fun27753_ip = 0;;) switch (_fun27753_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableActivityHardwareAccelerationPrompt;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27753_ip = 27;
                        continue _fun27753
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
        var6 = function() {
            _fun27754: for (var _fun27754_ip = 0;;) switch (_fun27754_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableInviteWithTextChannelActivityLaunch;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27754_ip = 27;
                        continue _fun27754
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
        var6 = function() {
            _fun27755: for (var _fun27755_ip = 0;;) switch (_fun27755_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableHideSelfStreamAndVideoConfirmationAlert;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27755_ip = 25;
                        continue _fun27755
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
        var6 = function() {
            _fun27756: for (var _fun27756_ip = 0;;) switch (_fun27756_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.pushUpsellDismissed;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27756_ip = 27;
                        continue _fun27756
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
        var6 = function() {
            _fun27757: for (var _fun27757_ip = 0;;) switch (_fun27757_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableActivityHostLeftNitroUpsell;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27757_ip = 27;
                        continue _fun27757
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
        var6 = function() {
            _fun27758: for (var _fun27758_ip = 0;;) switch (_fun27758_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableCallUserConfirmationPrompt;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27758_ip = 27;
                        continue _fun27758
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
        var6 = function() {
            _fun27759: for (var _fun27759_ip = 0;;) switch (_fun27759_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.disableApplicationSubscriptionCancellationSurvey;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27759_ip = 27;
                        continue _fun27759
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
        var6 = function() {
            _fun27760: for (var _fun27760_ip = 0;;) switch (_fun27760_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.darkSidebar;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun27760_ip = 25;
                        continue _fun27760
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
        var6 = function() {
            _fun27761: for (var _fun27761_ip = 0;;) switch (_fun27761_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.saveCameraUploadsToDevice;
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun27761_ip = 25;
                        continue _fun27761
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
        var6 = function arg0() {
            _fun27762: for (var _fun27762_ip = 0;;) switch (_fun27762_ip) {
                case 0:
                    var0 = arg0;
                    var1 = _closure1_slot17;
                    var1 = var1.disableVisualRefresh;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun27762_ip = 25;
                        continue _fun27762
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
        var6 = function() {
            _fun27763: for (var _fun27763_ip = 0;;) switch (_fun27763_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var0 = var0.listDensity;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27763_ip = 31;
                        continue _fun27763
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
        var5 = function() {
            _fun27764: for (var _fun27764_ip = 0;;) switch (_fun27764_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.hdrDynamicRange;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 'no-limit';
                    if (!var2) {
                        _fun27764_ip = 31;
                        continue _fun27764
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
        var1 = 11;
        var5 = var3[var1];
        var2 = undefined;
        var5 = var4.bind(var2)(var5);
        var7 = var5.Storage;
        var6 = var7.get;
        var5 = 'UserSettingsStore';
        var18 = var6.bind(var7)(var5);
        var1 = var3[var1];
        var1 = var4.bind(var2)(var1);
        var4 = var1.Storage;
        var1 = var4.remove;
        var1 = var1.bind(var4)(var5);
        var1 = _closure1_slot1;
        var0 = 12;
        var0 = var3[var0];
        var17 = var1.bind(var2)(var0);
        var16 = var17.pick;
        var34 = 'dataSavingMode';
        var33 = 'videoUploadQuality';
        var32 = 'lowQualityImageMode';
        var31 = 'useSystemTheme';
        var30 = 'expressionPickerWidth';
        var29 = 'disableVoiceChannelChangeAlert';
        var28 = 'disableHardwareMuteSilenceAlert';
        var27 = 'disableHideSelfStreamAndVideoConfirmationAlert';
        var26 = 'pushUpsellDismissed';
        var25 = 'disableEmbeddedActivityPopOutAlert';
        var24 = 'disableActivityHardwareAccelerationPrompt';
        var23 = 'disableInviteWithTextChannelActivityLaunch';
        var22 = 'disableActivityHostLeftNitroUpsell';
        var21 = 'disableCallUserConfirmationPrompt';
        var20 = 'disableApplicationSubscriptionCancellationSurvey';
        var19 = 'enableAndroidChatListAnimations';
        var36 = var17;
        var35 = var18;
        var0 = var36[var16](var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
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
    var4 = 13;
    var4 = var7[var4];
    var14 = var8.bind(var0)(var4);
    var4 = {};
    var10 = function arg0() {
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
    var10 = function() {
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
    var10 = function() {
        _fun27769: for (var _fun27769_ip = 0;;) switch (_fun27769_ip) {
            case 0:
                var2 = _closure1_slot17;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun27769_ip = 19;
                    continue _fun27769
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
    var10 = function() {
        var1 = _closure1_slot17;
        var0 = _closure1_slot8;
        var0 = var0.ON;
        var1.useSystemTheme = var0;
        var0 = undefined;
        return var0;
    };
    var4.REGISTER_SUCCESS = var10;
    var5 = function() {
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
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/UnsyncedUserSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.VideoQualitySettings = var3;
    var2.VideoCompressionQuality = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3205, 660, 1565, 1351, 3206, 566, 587, 22, 807, 2]);