// modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChatInputActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90361: for (var _fun90361_ip = 0;;) switch (_fun90361_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.accessible;
                var9 = var0.active;
                var12 = var0.disabled;
                var14 = var0.styleButton;
                var11 = var0.styleActiveIcon;
                var13 = var0.channel;
                var _closure2_slot0 = var13;
                var0 = var0.onPress;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot3;
                var0 = var1.useRef;
                var4 = null;
                var5 = var0.bind(var1)(var4);
                var _closure2_slot2 = var5;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var2 = var13.id;
                var0.channelId = var2;
                var0 = var1.bind(var3)(var0);
                var6 = var0.canShowOnboarding;
                var16 = var0.canShowBotsBanner;
                var _closure2_slot3 = var16;
                var17 = var0.canShowAppsOrActivitiesBanner;
                var _closure2_slot4 = var17;
                var1 = var0.fromTriggeredOnboarding;
                var0 = var0.willShowGlobalSearchOnboarding;
                var _closure2_slot5 = var0;
                if (!var6) {
                    _fun90361_ip = 168;
                    continue _fun90361
                }
            case 165:
                var6 = !var1;
            case 168:
                _closure2_slot6 = var6;
                var7 = _closure1_slot3;
                var2 = var7.useRef;
                var1 = -1;
                var1 = var2.bind(var7)(var1);
                _closure2_slot7 = var1;
                var2 = var7.useEffect;
                var1 = new Array(6);
                var1[0] = var6;
                var1[1] = var17;
                var1[2] = var16;
                var17 = var4 == var13;
                var16 = undefined;
                if (var17) {
                    _fun90361_ip = 231;
                    continue _fun90361
                }
            case 226:
                var16 = var13.guild_id;
            case 231:
                var1[3] = var16;
                var16 = var13.id;
                var1[4] = var16;
                var1[5] = var0;
                var0 = function() { // Environment: var10
                    _fun90362: for (var _fun90362_ip = 0;;) switch (_fun90362_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun90362_ip = 462;
                                continue _fun90362
                            }
                        case 13:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun90362_ip = 153;
                                continue _fun90362
                            }
                        case 23:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun90362_ip = 271;
                                continue _fun90362
                            }
                        case 33:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.setTriggeredOnboardingContentMetadata;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var5 = var6.id;
                            var1.channelId = var5;
                            var5 = global;
                            var7 = var5.Date;
                            var5 = var7.now;
                            var5 = var5.bind(var7)();
                            var1.timeMs = var5;
                            var5 = null;
                            var5 = var5 == var6;
                            if (var5) {
                                _fun90362_ip = 119;
                                continue _fun90362
                            }
                        case 110:
                            var5 = _closure2_slot0;
                            var4 = var5.guild_id;
                        case 119:
                            var1.guildId = var4;
                            var4 = false;
                            var1.canShowBotsBanner = var4;
                            var4 = true;
                            var1.canShowAppsOrActivitiesBanner = var4;
                            var4 = _closure2_slot5;
                            var1.willShowGlobalSearchOnboarding = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun90362_ip = 271;
                            continue _fun90362;
                        case 153:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.setTriggeredOnboardingContentMetadata;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var5 = var6.id;
                            var1.channelId = var5;
                            var5 = global;
                            var7 = var5.Date;
                            var5 = var7.now;
                            var5 = var5.bind(var7)();
                            var1.timeMs = var5;
                            var5 = null;
                            var5 = var5 == var6;
                            if (var5) {
                                _fun90362_ip = 239;
                                continue _fun90362
                            }
                        case 230:
                            var5 = _closure2_slot0;
                            var4 = var5.guild_id;
                        case 239:
                            var1.guildId = var4;
                            var4 = true;
                            var1.canShowBotsBanner = var4;
                            var4 = false;
                            var1.canShowAppsOrActivitiesBanner = var4;
                            var4 = _closure2_slot5;
                            var1.willShowGlobalSearchOnboarding = var4;
                            var1 = var2.bind(var3)(var1);
                        case 271:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun90362_ip = 398;
                                continue _fun90362
                            }
                        case 278:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.setTriggeredOnboardingContentMetadata;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var5 = var6.id;
                            var1.channelId = var5;
                            var5 = global;
                            var7 = var5.Date;
                            var5 = var7.now;
                            var5 = var5.bind(var7)();
                            var1.timeMs = var5;
                            var5 = null;
                            var5 = var5 == var6;
                            if (var5) {
                                _fun90362_ip = 364;
                                continue _fun90362
                            }
                        case 355:
                            var5 = _closure2_slot0;
                            var4 = var5.guild_id;
                        case 364:
                            var1.guildId = var4;
                            var4 = _closure2_slot4;
                            var1.canShowAppsOrActivitiesBanner = var4;
                            var4 = _closure2_slot3;
                            var1.canShowBotsBanner = var4;
                            var4 = true;
                            var1.willShowGlobalSearchOnboarding = var4;
                            var1 = var2.bind(var3)(var1);
                        case 398:
                            var1 = _closure2_slot7;
                            var0 = global;
                            var4 = var0.setTimeout;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 6;
                            var0 = var3[var0];
                            var3 = undefined;
                            var0 = var2.bind(var3)(var0);
                            var2 = var0.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.setLastSeenTimeMs;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var0 = var4.bind(var3)(var0, var2);
                            var1.current = var0;
                        case 462:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var0.ref = var5;
                var5 = null;
                if (!var6) {
                    _fun90361_ip = 332;
                    continue _fun90361
                }
            case 280:
                var5 = null;
                if (var9) {
                    _fun90361_ip = 332;
                    continue _fun90361
                }
            case 285:
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 6;
                var4 = var16[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.AppLauncherOnboardingChatInputButtonAnimation;
                var4 = {};
                var13 = var13.id;
                var4.channelId = var13;
                var5 = var7.bind(var3)(var6, var4);
            case 332:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 7;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.accessible = var15;
                var5.style = var14;
                var5.disabled = var12;
                var5.active = var9;
                var5.activeIconStyle = var11;
                var10 = function arg0() {
                    var0 = global;
                    var2 = var0.clearTimeout;
                    var0 = _closure2_slot7;
                    var1 = var0.current;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var5 = _closure2_slot1;
                    var2 = _closure1_slot5;
                    var3 = var2.APPS;
                    var2 = arg0;
                    var2 = var5.bind(var0)(var2, var3);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setAccessibilityFocus;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1.ref = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5.onPress = var10;
                var12 = _closure1_slot0;
                var8 = 9;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.AppLauncherButtonIcon;
                var5.IconComponent = var8;
                var8 = 10;
                var10 = var13[var8];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.rugBPp;
                var8 = var10.bind(var11)(var8);
                var5.accessibilityLabel = var8;
                var8 = {};
                var8.expanded = var9;
                var5.accessibilityState = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11628, 33, 11751, 11754, 11755, 11748, 4888, 11764, 1234, 2]);