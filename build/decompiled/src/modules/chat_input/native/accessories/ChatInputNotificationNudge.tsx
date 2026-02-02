// modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.onDismiss;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot15;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 12;
        var0 = var11[var0];
        var2 = var9.bind(var3)(var0);
        var1 = var2.useNudgeExperimentConfigWithoutExposure;
        var0 = _closure1_slot8;
        var0 = var0.CHANNEL_BANNER;
        var0 = var1.bind(var2)(var0);
        var _closure2_slot1 = var0;
        var2 = _closure1_slot4;
        var1 = function() { // Environment: var14
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot9;
            var2 = var1.CONTEXTUAL_REMINDER_ACTION;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = 14;
            var8 = var7[var5];
            var8 = var6.bind(var0)(var8);
            var8 = var8.NotificationNudgeAnalyticsAction;
            var8 = var8.IMPRESSION;
            var1.action = var8;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.NotificationNudgeSurface;
            var5 = var5.CHANNEL_BANNER;
            var1.prompt_type = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var2 = _closure1_slot14;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var13.container;
        var0.style = var4;
        var6 = _closure1_slot13;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var13.iconContainer;
        var4.style = var7;
        var12 = _closure1_slot13;
        var7 = 15;
        var7 = var11[var7];
        var7 = var9.bind(var3)(var7);
        var10 = var7.BellSlashIcon;
        var7 = {};
        var15 = 'sm';
        var7.size = var15;
        var16 = _closure1_slot1;
        var15 = 11;
        var15 = var11[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.colors;
        var15 = var15.ICON_STRONG;
        var7.color = var15;
        var7 = var12.bind(var3)(var10, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var15 = _closure1_slot14;
        var7 = _closure1_slot5;
        var6 = {};
        var5 = var13.contentContainer;
        var6.style = var5;
        var16 = _closure1_slot13;
        var20 = 16;
        var5 = var11[var20];
        var5 = var9.bind(var3)(var5);
        var12 = var5.Text;
        var5 = {
            'variant': 'text-md/medium',
            'color': 'text-strong'
        };
        var10 = 17;
        var17 = var11[var10];
        var17 = var9.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var11[var10];
        var17 = var9.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17["/6SnPw"];
        var17 = var18.bind(var19)(var17);
        var5.children = var17;
        var5 = var16.bind(var3)(var12, var5);
        var16 = new Array(2);
        var16[0] = var5;
        var19 = _closure1_slot13;
        var5 = 18;
        var12 = var11[var5];
        var12 = var9.bind(var3)(var12);
        var18 = var12.PressableOpacity;
        var17 = {};
        var12 = 8;
        var17.hitSlop = var12;
        var12 = function() {
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var0 = 12;
            var2 = var7[var0];
            var0 = undefined;
            var8 = var6.bind(var0)(var2);
            var5 = var8.requestPushNotificationPermission;
            var2 = _closure1_slot12;
            var4 = var2.TO_SETTINGS;
            var2 = _closure1_slot11;
            var3 = var2.CHANNEL_BANNER;
            var2 = function() { // Environment: var2
                var0 = undefined;
                return var0;
            };
            var2 = var5.bind(var8)(var4, var3, var2);
            var3 = _closure1_slot1;
            var2 = 13;
            var2 = var7[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot9;
            var2 = var1.CONTEXTUAL_REMINDER_ACTION;
            var1 = {};
            var5 = 14;
            var8 = var7[var5];
            var8 = var6.bind(var0)(var8);
            var8 = var8.NotificationNudgeAnalyticsAction;
            var8 = var8.ACCEPT;
            var1.action = var8;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.NotificationNudgeSurface;
            var5 = var5.CHANNEL_BANNER;
            var1.prompt_type = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var17.onPress = var12;
        var12 = var13.ctaButton;
        var17.style = var12;
        var12 = 'button';
        var17.accessibilityRole = var12;
        var22 = _closure1_slot13;
        var20 = var11[var20];
        var20 = var9.bind(var3)(var20);
        var21 = var20.Text;
        var20 = {
            'variant': 'text-sm/semibold',
            'color': 'text-brand'
        };
        var23 = var11[var10];
        var23 = var9.bind(var3)(var23);
        var25 = var23.intl;
        var24 = var25.string;
        var23 = var11[var10];
        var23 = var9.bind(var3)(var23);
        var23 = var23.t;
        var23 = var23.SwOsUv;
        var23 = var24.bind(var25)(var23);
        var20.children = var23;
        var20 = var22.bind(var3)(var21, var20);
        var17.children = var20;
        var17 = var19.bind(var3)(var18, var17);
        var16[1] = var17;
        var6.children = var16;
        var6 = var15.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot13;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.PressableHighlight;
        var5 = {};
        var14 = function() {
            _fun90117: for (var _fun90117_ip = 0;;) switch (_fun90117_ip) {
                case 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 19;
                    var2 = var7[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.setPushPermissionReactivationSeen;
                    var2 = _closure1_slot8;
                    var2 = var2.CHANNEL_BANNER;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var2 = 13;
                    var2 = var7[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.track;
                    var1 = _closure1_slot9;
                    var3 = var1.CONTEXTUAL_REMINDER_ACTION;
                    var2 = {};
                    var1 = 14;
                    var8 = var7[var1];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.NotificationNudgeAnalyticsAction;
                    var8 = var8.DISMISS;
                    var2.action = var8;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.NotificationNudgeSurface;
                    var1 = var1.CHANNEL_BANNER;
                    var2.prompt_type = var1;
                    var7 = _closure2_slot1;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun90117_ip = 161;
                        continue _fun90117
                    }
                case 151:
                    var7 = _closure2_slot1;
                    var6 = var7.timing;
                case 161:
                    var2.dismiss_logic = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var5.onPress = var14;
        var13 = var13.xContainer;
        var5.style = var13;
        var5.accessibilityRole = var12;
        var12 = var11[var10];
        var12 = var9.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var10 = var11[var10];
        var10 = var9.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.WAI6xu;
        var10 = var12.bind(var13)(var10);
        var5.accessibilityLabel = var10;
        var10 = _closure1_slot13;
        var8 = 20;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.XSmallBoldIcon;
        var8 = {
            'size': 'sm',
            'color': 'icon-subtle'
        };
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PermissionPromptType;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EventActionLocation;
    var _closure1_slot11 = var6;
    var3 = var3.EventActionType;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'display': 'flex',
            'flexDirection': 'row',
            'padding': null,
            'backgroundColor': null,
            'alignItems': 'center'
        };
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 11;
        var2 = var6[var3];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_12;
        var1.padding = var2;
        var2 = var6[var3];
        var2 = var5.bind(var4)(var2);
        var2 = var2.colors;
        var2 = var2.BACKGROUND_SURFACE_HIGH;
        var1.backgroundColor = var2;
        var0.container = var1;
        var1 = {};
        var2 = 10;
        var1.padding = var2;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_MOD_STRONG;
        var1.backgroundColor = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var1.borderRadius = var7;
        var0.iconContainer = var1;
        var1 = {};
        var7 = 1;
        var1.flex = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_12;
        var1.marginLeft = var3;
        var0.contentContainer = var1;
        var1 = {};
        var1.padding = var2;
        var0.xContainer = var1;
        var1 = {};
        var2 = 'flex-start';
        var1.alignSelf = var2;
        var0.ctaButton = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90119: for (var _fun90119_ip = 0;;) switch (_fun90119_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var _closure2_slot0 = var3;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 21;
                var0 = var7[var0];
                var8 = var2.bind(var4)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(2);
                var2[0] = var0;
                var0 = _closure1_slot7;
                var2[1] = var0;
                var0 = function() { // Environment: var5
                    _fun90120: for (var _fun90120_ip = 0;;) switch (_fun90120_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.getGuildId;
                            var5 = var0.bind(var2)();
                            var0 = var2.isThread;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun90120_ip = 60;
                                continue _fun90120
                            }
                        case 33:
                            var4 = _closure1_slot7;
                            var3 = var4.isChannelMuted;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var5, var0);
                            _fun90120_ip = 84;
                            continue _fun90120;
                        case 60:
                            var3 = _closure1_slot6;
                            var2 = var3.isMuted;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 84:
                            return var0;
                    }
                };
                var2 = var6.bind(var8)(var2, var0);
                var6 = _closure1_slot1;
                var0 = 22;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.bind(var4)(var3);
                var2 = !var2;
                if (!var2) {
                    _fun90119_ip = 111;
                    continue _fun90119
                }
            case 108:
                var2 = !var0;
            case 111:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var3 = var7[var0];
                var9 = var6.bind(var4)(var3);
                var8 = var9.useShouldSeePushNotificationNudge;
                var3 = _closure1_slot8;
                var3 = var3.CHANNEL_BANNER;
                var3 = var8.bind(var9)(var3, var2);
                var0 = var7[var0];
                var9 = var6.bind(var4)(var0);
                var8 = var9.useNudgeExperimentConfigWithoutExposure;
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL_BANNER;
                var11 = var8.bind(var9)(var0);
                var0 = 23;
                var0 = var7[var0];
                var8 = var6.bind(var4)(var0);
                var7 = var8.useSelectedTimeRecurringDismissibleContent;
                var0 = null;
                var6 = null;
                if (!var3) {
                    _fun90119_ip = 245;
                    continue _fun90119
                }
            case 208:
                var6 = null;
                if (!var2) {
                    _fun90119_ip = 245;
                    continue _fun90119
                }
            case 213:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 24;
                var2 = var9[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var6 = var2.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
            case 245:
                var3 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 14;
                var2 = var10[var2];
                var10 = var9.bind(var4)(var2);
                var9 = var10.getNotificationNudgeCooldownMs;
                var12 = var0 == var11;
                var2 = undefined;
                if (var12) {
                    _fun90119_ip = 288;
                    continue _fun90119
                }
            case 282:
                var2 = var11.timing;
            case 288:
                var2 = var9.bind(var10)(var2);
                var3.cooldownDurationMs = var2;
                var13 = true;
                var17 = var8;
                var16 = var6;
                var15 = var3;
                var14 = undefined;
                var6 = var17[var7](var16, var15, var14, var13, var12);
                var3 = _closure1_slot3;
                var2 = 2;
                var6 = var3.bind(var4)(var6, var2);
                var2 = 0;
                var3 = var6[var2];
                var2 = 1;
                var2 = var6[var2];
                _closure2_slot1 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 24;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun90119_ip = 411;
                    continue _fun90119
                }
            case 383:
                var3 = _closure1_slot13;
                var2 = _closure1_slot16;
                var1 = {};
                var5 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot10;
                    var1 = var0.USER_DISMISS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onDismiss = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 411:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3054, 4269, 10922, 660, 1369, 10923, 33, 1297, 671, 10921, 795, 10926, 8717, 3902, 1234, 4867, 10925, 6967, 566, 7776, 5921, 1358, 2]);