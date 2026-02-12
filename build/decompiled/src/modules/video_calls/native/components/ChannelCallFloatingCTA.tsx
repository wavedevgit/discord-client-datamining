// modules/video_calls/native/components/ChannelCallFloatingCTA.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun91896: for (var _fun91896_ip = 0;;) switch (_fun91896_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.onPress;
                var4 = var0.subtitle;
                var21 = var0.supertitle;
                var12 = var0.image;
                var11 = var0.imageStyle;
                var10 = var0.disabled;
                var5 = var0.label;
                var8 = var0.trailing;
                var14 = var0.style;
                var0 = _closure1_slot21;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var7 = null;
                var0 = var7 != var21;
                var6 = undefined;
                if (!var0) {
                    _fun91896_ip = 217;
                    continue _fun91896
                }
            case 80:
                var2 = _closure1_slot19;
                var1 = _closure1_slot5;
                var0 = {};
                var15 = var15.superHeader;
                var0.style = var15;
                var20 = _closure1_slot18;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = 14;
                var15 = var19[var16];
                var15 = var17.bind(var3)(var15);
                var18 = var15.Text;
                var15 = {
                    'variant': 'heading-deprecated-12/extrabold',
                    'color': 'text-default'
                };
                var15.children = var21;
                var18 = var20.bind(var3)(var18, var15);
                var15 = new Array(2);
                var15[0] = var18;
                var18 = _closure1_slot18;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var16.children = var5;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var0.children = var15;
                var6 = var2.bind(var3)(var1, var0);
            case 217:
                var2 = _closure1_slot18;
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 15;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.FormCTA;
                var0 = {};
                var0.style = var14;
                if (!var10) {
                    _fun91896_ip = 265;
                    continue _fun91896
                }
            case 256:
                var13 = function() { // Environment: var14
                    var0 = null;
                    return var0;
                };
            case 265:
                var0.onPress = var13;
                var0.iconSource = var12;
                var0.iconStyle = var11;
                if (!var10) {
                    _fun91896_ip = 298;
                    continue _fun91896
                }
            case 282:
                var11 = _closure1_slot18;
                var10 = _closure1_slot20;
                var9 = {};
                var8 = var11.bind(var3)(var10, var9);
            case 298:
                var0.trailing = var8;
                if (!(var7 != var6)) {
                    _fun91896_ip = 310;
                    continue _fun91896
                }
            case 307:
                var5 = var6;
            case 310:
                var0.title = var5;
                var0.subtitle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var1 = function() {
        var3 = _closure1_slot13;
        var0 = undefined;
        var2 = true;
        var3 = var3.bind(var0)(var2);
        var1 = _closure1_slot7;
        var1 = var1.bind(var0)(var2);
        var1 = global;
        var2 = var1.setTimeout;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 26;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.ComponentDispatch;
            var1 = var2.dispatch;
            var0 = _closure1_slot14;
            var0 = var0.TOGGLE_CALL_CONTROL_DRAWER;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot25 = var1;
    var0 = function arg0() {
        _fun91900: for (var _fun91900_ip = 0;;) switch (_fun91900_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.connectedAccount;
                var1 = _closure1_slot21;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var1 = var0.type;
                var0 = _closure1_slot17;
                var0 = var0.XBOX;
                if (!(var0 !== var1)) {
                    _fun91900_ip = 157;
                    continue _fun91900
                }
            case 41:
                var0 = _closure1_slot17;
                var0 = var0.PLAYSTATION;
                if (!(var0 !== var1)) {
                    _fun91900_ip = 59;
                    continue _fun91900
                }
            case 55:
                var0 = null;
                return var0;
            case 59:
                var4 = {};
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 29;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var4.image = var0;
                var0 = var11.playstationUpsell;
                var4.imageStyle = var0;
                var5 = _closure1_slot0;
                var0 = 28;
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.LI7BXC;
                var0 = var1.bind(var2)(var0);
                var4.supertitle = var0;
                _fun91900_ip = 245;
                continue _fun91900;
            case 157:
                var0 = {};
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 27;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var0.image = var1;
                var6 = _closure1_slot0;
                var1 = 28;
                var2 = var7[var1];
                var2 = var6.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["w/AmTl"];
                var1 = var2.bind(var5)(var1);
                var0.supertitle = var1;
                var4 = var0;
            case 245:
                var2 = _closure1_slot18;
                var1 = _closure1_slot24;
                var0 = {};
                var5 = _closure1_slot25;
                var0.onPress = var5;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 28;
                var6 = var13[var5];
                var6 = var9.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var13[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.iwKUSZ;
                var5 = var6.bind(var7)(var5);
                var0.label = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = 4;
                var5.hitSlop = var9;
                var9 = function() {
                    var2 = _closure1_slot8;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5.onPress = var9;
                var10 = _closure1_slot18;
                var12 = _closure1_slot1;
                var8 = 30;
                var8 = var13[var8];
                var9 = var12.bind(var3)(var8);
                var8 = {};
                var11 = var11.closeIcon;
                var8.style = var11;
                var11 = 31;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var8.source = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.trailing = var5;
                var15 = var0;
                var14 = var4;
                var4 = copyDataProperties(var15, var14);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 26;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = _closure1_slot14;
        var2 = var2.TOGGLE_CALL_CONTROL_DRAWER;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot28;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 33;
        var1 = var5[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var1);
        var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 25;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.SOUNDBOARD_MOBILE_FLOATING_CTA;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun91906: for (var _fun91906_ip = 0;;) switch (_fun91906_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot21;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var7 = var1.bind(var3)(var0);
                var2 = var7.useStateFromStores;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var3 = _closure1_slot11;
                    var2 = var3.can;
                    var0 = _closure1_slot16;
                    var1 = var0.CREATE_INSTANT_INVITE;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var2.bind(var7)(var1, var0);
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 28;
                var1 = var9[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                if (var8) {
                    _fun91906_ip = 137;
                    continue _fun91906
                }
            case 124:
                var7 = var0.WkAgPU;
                var7 = var1.bind(var2)(var7);
                _fun91906_ip = 150;
                continue _fun91906;
            case 137:
                var0 = var0.YSGk4L;
                var7 = var1.bind(var2)(var0);
            case 150:
                var2 = _closure1_slot18;
                var1 = _closure1_slot24;
                var0 = {};
                var8 = !var8;
                var0.disabled = var8;
                var0.label = var7;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 37;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var0.image = var6;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showInstantInviteActionSheet;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var4 = _closure1_slot15;
                    var4 = var4.VOICE_CHANNEL;
                    var0.source = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.onPress = var5;
                var4 = var4.channelCallInviteFloatingCTA;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var13.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.setShowConsoleVoiceSparkles;
    var _closure1_slot7 = var7;
    var7 = var4.setVoiceUpsellDismissed;
    var _closure1_slot8 = var7;
    var4 = var4.useConsoleVoiceUpsellStore;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot10 = var4;
    var12 = 6;
    var4 = var6[var12];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.setFocus;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ComponentActions;
    var _closure1_slot14 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot15 = var7;
    var7 = var4.Permissions;
    var _closure1_slot16 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot18 = var8;
    var7 = var4.jsxs;
    var _closure1_slot19 = var7;
    var4 = var4.Fragment;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10.paddingTop = var12;
    var4.superHeader = var10;
    var10 = {
        'width': 20,
        'height': 20
    };
    var4.closeIcon = var10;
    var10 = {
        'width': 24,
        'height': 24,
        'margin': 6
    };
    var12 = 12;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.DARK_WHITE_500_LIGHT_PLAYSTATION;
    var10.tintColor = var12;
    var4.playstationUpsell = var10;
    var10 = {};
    var12 = 13;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var10.color = var12;
    var4.floatingCTAClose = var10;
    var10 = {};
    var10.flex = var11;
    var4.channelCallInviteFloatingCTA = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot21 = var4;
    var7 = function() {
        var3 = _closure1_slot18;
        var2 = _closure1_slot24;
        var1 = {};
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 32;
        var5 = var8[var0];
        var0 = undefined;
        var5 = var6.bind(var0)(var5);
        var1.image = var5;
        var5 = _closure1_slot25;
        var1.onPress = var5;
        var7 = _closure1_slot0;
        var4 = 28;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.O2WA4u;
        var4 = var5.bind(var6)(var4);
        var1.label = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot22 = var4;
    var7 = function() {
        var0 = _closure1_slot21;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot18;
        var1 = _closure1_slot24;
        var0 = {};
        var8 = _closure1_slot1;
        var11 = _closure1_slot2;
        var4 = 34;
        var4 = var11[var4];
        var4 = var8.bind(var3)(var4);
        var0.image = var4;
        var4 = _closure1_slot27;
        var0.onPress = var4;
        var14 = _closure1_slot0;
        var9 = 28;
        var4 = var11[var9];
        var4 = var14.bind(var3)(var4);
        var6 = var4.intl;
        var5 = var6.string;
        var4 = var11[var9];
        var4 = var14.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.IJgkPX;
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var6 = _closure1_slot18;
        var4 = 35;
        var4 = var11[var4];
        var4 = var14.bind(var3)(var4);
        var5 = var4.PressableOpacity;
        var4 = {};
        var12 = 'button';
        var4.accessibilityRole = var12;
        var12 = var11[var9];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var9 = var11[var9];
        var9 = var14.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.cpT0Cq;
        var9 = var12.bind(var13)(var9);
        var4.accessibilityLabel = var9;
        var9 = _closure1_slot28;
        var4.onPress = var9;
        var9 = _closure1_slot18;
        var7 = 36;
        var7 = var11[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var10 = var10.floatingCTAClose;
        var10 = var10.color;
        var7.color = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.trailing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot23 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallFloatingCTA.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun91909: for (var _fun91909_ip = 0;;) switch (_fun91909_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var _closure2_slot0 = var0;
                var1 = var1.shouldShowConnectingScreen;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var5 = _closure1_slot18;
                var2 = _closure1_slot29;
                var1 = {};
                var1.channel = var0;
                var1 = var5.bind(var3)(var2, var1);
                var _closure2_slot2 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 16;
                var6 = var5[var1];
                var10 = var2.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var7
                    var2 = _closure1_slot6;
                    var1 = var2.getParticipants;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 1;
                    var0 = var0 === var1;
                    return var0;
                };
                var6 = var9.bind(var10)(var8, var6);
                var _closure2_slot3 = var6;
                var1 = var5[var1];
                var9 = var2.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var7
                    var1 = _closure1_slot12;
                    var0 = var1.getChannelId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var8.bind(var9)(var6, var1);
                var _closure2_slot4 = var1;
                var1 = 17;
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var6 = var8.useImminentUpcomingGuildEvents;
                var1 = var0.id;
                var8 = var6.bind(var8)(var1);
                var6 = _closure1_slot3;
                var1 = 1;
                var6 = var6.bind(var3)(var8, var1);
                var1 = 0;
                var11 = var6[var1];
                var _closure2_slot5 = var11;
                var1 = 18;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useManageResourcePermissions;
                var1 = var1.bind(var2)(var0);
                var1 = var1.canManageGuildEvent;
                var1 = var1.bind(var3)(var11);
                var _closure2_slot6 = var1;
                var2 = null;
                var1 = var2 != var11;
                if (!var1) {
                    _fun91909_ip = 277;
                    continue _fun91909
                }
            case 268:
                var5 = _closure1_slot10;
                var1 = var5.bind(var3)(var11);
            case 277:
                _closure2_slot7 = var1;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 19;
                var1 = var8[var1];
                var1 = var5.bind(var3)(var1);
                var6 = var1.bind(var3)();
                _closure2_slot8 = var6;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                var1 = var1.voiceUpsellDismissed;
                _closure2_slot9 = var1;
                var5 = _closure1_slot0;
                var1 = 20;
                var1 = var8[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.getNextRecurrenceIdInEvent;
                var1 = var1.bind(var5)(var11);
                var2 = var2 != var1;
                var10 = undefined;
                if (!var2) {
                    _fun91909_ip = 366;
                    continue _fun91909
                }
            case 363:
                var10 = var1;
            case 366:
                var8 = _closure1_slot18;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 21;
                var1 = var9[var1];
                var2 = var5.bind(var3)(var1);
                var1 = {};
                var1.guildScheduledEvent = var11;
                var1.channel = var0;
                var1.recurrenceId = var10;
                var1 = var8.bind(var3)(var2, var1);
                _closure2_slot10 = var1;
                var1 = 22;
                var1 = var9[var1];
                var1 = var5.bind(var3)(var1);
                var0 = var0.id;
                var8 = var1.bind(var3)(var0);
                var2 = _closure1_slot18;
                var1 = _closure1_slot26;
                var0 = {};
                var0.connectedAccount = var6;
                var0 = var2.bind(var3)(var1, var0);
                _closure2_slot11 = var0;
                var2 = _closure1_slot18;
                var1 = _closure1_slot0;
                var0 = 23;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.DisableCustomTheme;
                var0 = {};
                var6 = _closure1_slot18;
                var4 = 24;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.contentTypes = var8;
                var7 = function arg0() {
                    _fun91912: for (var _fun91912_ip = 0;;) switch (_fun91912_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.visibleContent;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 25;
                            var1 = var1[var5];
                            var4 = undefined;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.SOUNDBOARD_MOBILE_FLOATING_CTA;
                            if (!(var1 !== var2)) {
                                _fun91912_ip = 202;
                                continue _fun91912
                            }
                        case 53:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.DONUT_MOBILE_NUX;
                            if (!(var1 !== var2)) {
                                _fun91912_ip = 196;
                                continue _fun91912
                            }
                        case 86:
                            var1 = _closure2_slot8;
                            var6 = null;
                            if (!(var6 != var1)) {
                                _fun91912_ip = 112;
                                continue _fun91912
                            }
                        case 99:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun91912_ip = 112;
                                continue _fun91912
                            }
                        case 106:
                            var1 = _closure2_slot11;
                            _fun91912_ip = 194;
                            continue _fun91912;
                        case 112:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun91912_ip = 147;
                                continue _fun91912
                            }
                        case 119:
                            var2 = _closure2_slot5;
                            if (!(var6 != var2)) {
                                _fun91912_ip = 147;
                                continue _fun91912
                            }
                        case 127:
                            var2 = _closure2_slot6;
                            if (!var2) {
                                _fun91912_ip = 147;
                                continue _fun91912
                            }
                        case 134:
                            var2 = _closure2_slot7;
                            if (var2) {
                                _fun91912_ip = 147;
                                continue _fun91912
                            }
                        case 141:
                            var2 = _closure2_slot10;
                            _fun91912_ip = 191;
                            continue _fun91912;
                        case 147:
                            var5 = _closure2_slot3;
                            var3 = null;
                            if (!var5) {
                                _fun91912_ip = 188;
                                continue _fun91912
                            }
                        case 156:
                            var7 = _closure2_slot0;
                            var5 = var7.isPrivate;
                            var5 = var5.bind(var7)();
                            var3 = null;
                            if (var5) {
                                _fun91912_ip = 188;
                                continue _fun91912
                            }
                        case 175:
                            var5 = _closure2_slot4;
                            var3 = null;
                            if (!var5) {
                                _fun91912_ip = 188;
                                continue _fun91912
                            }
                        case 184:
                            var3 = _closure2_slot2;
                        case 188:
                            var2 = var3;
                        case 191:
                            var1 = var2;
                        case 194:
                            return var1;
                        case 196:
                            var1 = _closure1_slot22;
                            return var1;
                        case 202:
                            var0 = _closure1_slot23;
                            return var0;
                    }
                };
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.openDrawerForConsoleVoice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3945, 11892, 3331, 3093, 3515, 7922, 660, 33, 1297, 4848, 671, 3938, 5441, 566, 8209, 8218, 11911, 8212, 11913, 11914, 4858, 6517, 1358, 1229, 11915, 1234, 8956, 4092, 9756, 11916, 3213, 11917, 4880, 11918, 11919, 9000, 2]);