// modules/interaction_components/native/InteractionIframeModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.APPLICATIONS_WITH_NO_REFFERER;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BotTagTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 7;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var8.flex = var10;
    var3.wrapper = var8;
    var8 = {
        'flexDirection': 'row',
        'padding': 16,
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.header = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.headerCenterContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'marginBottom': 2
    };
    var3.headerTitleContainer = var8;
    var8 = {};
    var10 = 8;
    var8.marginEnd = var10;
    var3.closeButton = var8;
    var8 = {
        'marginStart': 8,
        'width': 32
    };
    var3.spacerView = var8;
    var8 = {};
    var8.marginStart = var9;
    var3.botTag = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/InteractionIframeModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun113431: for (var _fun113431_ip = 0;;) switch (_fun113431_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot10;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var18 = var4.application;
                var14 = var4.title;
                var1 = var18.id;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIframeModalState;
                var0 = var0.bind(var2)(var4);
                var11 = var0.queryParams;
                var13 = var0.iframeUrl;
                var16 = _closure1_slot4;
                var0 = var16.useState;
                var4 = false;
                var5 = var0.bind(var16)(var4);
                var2 = _closure1_slot3;
                var0 = 2;
                var5 = var2.bind(var3)(var5, var0);
                var0 = 0;
                var0 = var5[var0];
                var2 = 1;
                var2 = var5[var2];
                var _closure2_slot1 = var2;
                var5 = _closure1_slot1;
                var2 = 9;
                var2 = var12[var2];
                var8 = var5.bind(var3)(var2);
                var2 = {};
                var9 = true;
                var2.includeKeyboardHeight = var9;
                var2 = var8.bind(var3)(var2);
                var8 = var2.insets;
                var15 = var16.useLayoutEffect;
                var9 = function() { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.lockOrientation;
                    var0 = 'PORTRAIT';
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.restoreDefaultOrientation;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var15.bind(var16)(var9, var2);
                var9 = var16.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1, var0);
                    return var0;
                };
                var9 = var9.bind(var16)(var1, var2);
                var _closure2_slot2 = var9;
                var15 = var16.useCallback;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var6
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = true;
                    return var0;
                };
                var2 = var15.bind(var16)(var1, var2);
                var1 = 12;
                var1 = var12[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                var17 = null;
                var5 = null;
                if (var0) {
                    _fun113431_ip = 456;
                    continue _fun113431
                }
            case 268:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 15;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var15 = function() {
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = 0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.onActivityCrash = var15;
                var15 = var18.id;
                var0.applicationId = var15;
                var15 = var11.channel_id;
                var0.channelId = var15;
                var15 = var11.guild_id;
                var0.guildId = var15;
                var0.activityUrl = var13;
                var13 = var11.instance_id;
                var0.activitySessionId = var13;
                var0.queryParams = var11;
                var6 = function() {
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 13;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'interaction_iframe_modal';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 14;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.HehpFW;
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onLoadError = var6;
                var11 = _closure1_slot0;
                var6 = 16;
                var6 = var12[var6];
                var11 = var11.bind(var3)(var6);
                var6 = var11.allowPopups;
                var6 = var6.bind(var11)(var18);
                var0.allowPopups = var6;
                var12 = _closure1_slot6;
                var11 = var12.has;
                var6 = var18.id;
                var11 = var11.bind(var12)(var6);
                var6 = 'origin';
                if (!var11) {
                    _fun113431_ip = 430;
                    continue _fun113431
                }
            case 424:
                var6 = 'no-referrer';
            case 430:
                var0.referrerPolicy = var6;
                var0.isPipOrGridMode = var4;
                var0.webViewKey = var3;
                var0.ignoreSilentHardwareSwitch = var4;
                var5 = var2.bind(var3)(var1, var0);
            case 456:
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var10.wrapper;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                var11 = var8.top;
                var6.paddingTop = var11;
                var8 = var8.bottom;
                var6.paddingBottom = var8;
                var4[1] = var6;
                var0.style = var4;
                var4 = {};
                var6 = var10.header;
                var4.style = var6;
                var16 = _closure1_slot8;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var6 = 17;
                var6 = var19[var6];
                var6 = var12.bind(var3)(var6);
                var8 = var6.PressableOpacity;
                var6 = {};
                var11 = 'button';
                var6.accessibilityRole = var11;
                var11 = 14;
                var13 = var19[var11];
                var13 = var12.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var11 = var19[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.cpT0Cq;
                var11 = var13.bind(var15)(var11);
                var6.accessibilityLabel = var11;
                var6.onPress = var9;
                var9 = var10.closeButton;
                var6.style = var9;
                var9 = 18;
                var9 = var19[var9];
                var9 = var12.bind(var3)(var9);
                var11 = var9.XLargeIcon;
                var9 = {};
                var9 = var16.bind(var3)(var11, var9);
                var6.children = var9;
                var8 = var16.bind(var3)(var8, var6);
                var6 = new Array(3);
                var6[0] = var8;
                var8 = {};
                var9 = var10.headerCenterContainer;
                var8.style = var9;
                var9 = {};
                var11 = var10.headerTitleContainer;
                var9.style = var11;
                var15 = 19;
                var11 = var19[var15];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'heading-sm/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var18.name;
                var11.children = var13;
                var12 = var16.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var13 = _closure1_slot1;
                var12 = 20;
                var12 = var19[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var19 = _closure1_slot7;
                var19 = var19.BOT;
                var12.type = var19;
                var18 = var18.bot;
                var19 = var17 == var18;
                var17 = undefined;
                if (var19) {
                    _fun113431_ip = 801;
                    continue _fun113431
                }
            case 795:
                var17 = var18.verified;
            case 801:
                var12.verified = var17;
                var17 = var10.botTag;
                var12.style = var17;
                var12 = var16.bind(var3)(var13, var12);
                var11[1] = var12;
                var9.children = var11;
                var9 = var2.bind(var3)(var1, var9);
                var11 = new Array(2);
                var11[0] = var9;
                var9 = _closure1_slot8;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var15];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default'
                };
                var12.children = var14;
                var12 = var9.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var2.bind(var3)(var1, var8);
                var6[1] = var8;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var10.spacerView;
                var7.style = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3448, 3476, 33, 1297, 671, 14532, 4888, 7812, 14545, 4070, 3139, 1234, 8055, 8061, 4897, 3255, 3932, 5762, 2]);