// modules/user_settings/native/notifications/SettingsNotificationScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun85470: for (var _fun85470_ip = 0;;) switch (_fun85470_ip) {
            case 0:
                var0 = _closure1_slot10;
                var4 = undefined;
                var21 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.useShowReactivationPrompt;
                var6 = var0.bind(var3)();
                var0 = 8;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.hasAndroidNotificationChannels;
                var5 = var0.bind(var1)();
                if (var5) {
                    _fun85470_ip = 76;
                    continue _fun85470
                }
            case 68:
                var0 = null;
                if (!var6) {
                    _fun85470_ip = 532;
                    continue _fun85470
                }
            case 76:
                var3 = _closure1_slot8;
                var2 = _closure1_slot9;
                var1 = {};
                var7 = var5;
                if (!var7) {
                    _fun85470_ip = 194;
                    continue _fun85470
                }
            case 92:
                var9 = _closure1_slot7;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 9;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var10 = 10;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["/TZX1J"];
                var10 = var11.bind(var12)(var10);
                var5.children = var10;
                var7 = var9.bind(var4)(var8, var5);
            case 194:
                var5 = new Array(2);
                var5[0] = var7;
                if (!var6) {
                    _fun85470_ip = 518;
                    continue _fun85470
                }
            case 208:
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var21.card;
                var7.style = var10;
                var12 = _closure1_slot7;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var10 = 11;
                var10 = var27[var10];
                var10 = var26.bind(var4)(var10);
                var11 = var10.Card;
                var10 = {
                    'border': 'none',
                    'shadow': 'none'
                };
                var15 = _closure1_slot8;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = var21.cardContent;
                var13.style = var16;
                var18 = _closure1_slot7;
                var16 = 12;
                var16 = var27[var16];
                var16 = var26.bind(var4)(var16);
                var17 = var16.CircleErrorIcon;
                var16 = {};
                var22 = _closure1_slot1;
                var19 = 6;
                var19 = var27[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.unsafe_rawColors;
                var19 = var19.YELLOW_300;
                var16.color = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot7;
                var18 = _closure1_slot4;
                var17 = {};
                var21 = var21.text;
                var17.style = var21;
                var22 = _closure1_slot7;
                var20 = 9;
                var20 = var27[var20];
                var20 = var26.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {
                    'color': 'text-default',
                    'variant': 'text-sm/medium'
                };
                var23 = 10;
                var24 = var27[var23];
                var24 = var26.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var27[var23];
                var23 = var26.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.TAuasM;
                var23 = var24.bind(var25)(var23);
                var20.children = var23;
                var20 = var22.bind(var4)(var21, var20);
                var17.children = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 518:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 532:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.initializeAndroidNotificationSettingsStore;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MobileSetting;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var7 = var3.jsxs;
    var _closure1_slot8 = var7;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginBottom': 8,
        'borderColor': null,
        'borderWidth': 1
    };
    var11 = 6;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.YELLOW_300;
    var9.borderColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var9.borderRadius = var11;
    var3.card = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.cardContent = var9;
    var9 = {};
    var9.flex = var10;
    var3.text = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = function() { // Environment: var1
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var0 = 13;
            var0 = var11[var0];
            var9 = undefined;
            var2 = var10.bind(var9)(var0);
            var1 = var2.createList;
            var0 = {};
            var4 = {};
            var6 = 10;
            var3 = var11[var6];
            var3 = var10.bind(var9)(var3);
            var8 = var3.intl;
            var5 = var8.string;
            var3 = var11[var6];
            var3 = var10.bind(var9)(var3);
            var3 = var3.t;
            var3 = var3.clE4PU;
            var3 = var5.bind(var8)(var3);
            var4.label = var3;
            var5 = _closure1_slot6;
            var8 = var5.IN_APP_NOTIFICATIONS;
            var3 = new Array(1);
            var3[0] = var8;
            var4.settings = var3;
            var3 = new Array(16);
            var3[0] = var4;
            var4 = {};
            var8 = var11[var6];
            var8 = var10.bind(var9)(var8);
            var13 = var8.intl;
            var12 = var13.string;
            var8 = var11[var6];
            var8 = var10.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8["jcHF+3"];
            var8 = var12.bind(var13)(var8);
            var4.label = var8;
            var12 = var5.SYSTEM_NOTIFICATIONS;
            var8 = new Array(1);
            var8[0] = var12;
            var4.settings = var8;
            var12 = _closure1_slot7;
            var8 = _closure1_slot11;
            var7 = {};
            var7 = var12.bind(var9)(var8, var7);
            var4.subLabel = var7;
            var3[1] = var4;
            var4 = {};
            var8 = var5.ANDROID_MESSAGE_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[2] = var4;
            var4 = {};
            var8 = var5.IOS_NATIVE_PHONE_INTEGRATION;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[3] = var4;
            var4 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.a2O7oY;
            var7 = var8.bind(var12)(var7);
            var4.label = var7;
            var8 = var5.ANDROID_NOTIFICATION_LIGHTS;
            var7 = new Array(3);
            var7[0] = var8;
            var8 = var5.ANDROID_NOTIFICATION_VIBRATIONS;
            var7[1] = var8;
            var8 = var5.ANDROID_NOTIFICATION_SOUNDS;
            var7[2] = var8;
            var4.settings = var7;
            var3[4] = var4;
            var4 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.EZorjX;
            var7 = var8.bind(var12)(var7);
            var4.label = var7;
            var8 = var5.FRIEND_STREAM_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[5] = var4;
            var4 = {};
            var8 = var5.VOICE_ACTIVITY_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[6] = var4;
            var4 = {};
            var8 = var5.COMMUNITY_ACTIVITY_ALERTS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[7] = var4;
            var4 = {};
            var8 = var5.HIGHLIGHT_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[8] = var4;
            var4 = {};
            var8 = var5.FRIEND_ONLINE_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[9] = var4;
            var4 = {};
            var8 = var5.REACTION_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.oWF6eQ;
            var7 = var8.bind(var12)(var7);
            var4.subLabel = var7;
            var3[10] = var4;
            var4 = {};
            var8 = var5.CUSTOM_STATUS_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.PTtxi9;
            var7 = var8.bind(var12)(var7);
            var4.label = var7;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7["/+OQEs"];
            var7 = var8.bind(var12)(var7);
            var4.subLabel = var7;
            var3[11] = var4;
            var4 = {};
            var8 = var5.GAME_UPDATE_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[12] = var4;
            var4 = {};
            var8 = var5.PROFILE_UPDATES_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[13] = var4;
            var4 = {};
            var8 = var5.SERVER_TRENDING_NOTIFICATIONS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[14] = var4;
            var4 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6["6DXkz6"];
            var6 = var7.bind(var8)(var6);
            var4.label = var6;
            var6 = var5.ENABLE_DM_REPLY_NUDGE_REMINDERS;
            var5 = new Array(1);
            var5[0] = var6;
            var4.settings = var5;
            var3[15] = var4;
            var0.sections = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = new Array(0);
        var4 = var4.bind(var5)(var3, var2);
        var3 = var5.useEffect;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot7;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.node = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/notifications/SettingsNotificationScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10996, 7000, 33, 1297, 671, 10997, 11003, 3932, 1234, 4895, 5386, 8977, 10169, 2]);