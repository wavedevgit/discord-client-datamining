// modules/video_calls/native/components/ChannelExpandedControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot3 = var7;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.jsxs;
    var _closure1_slot11 = var7;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'relative',
        'borderRadius': null,
        'backgroundColor': null,
        'marginTop': 8,
        'marginBottom': 8
    };
    var10 = 9;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var10 = 10;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.CONTAINER_BACKGROUND;
    var9.backgroundColor = var10;
    var3.container = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 4294967294,
        'right': '50%',
        'tintColor': '#FF9A15'
    };
    var3.sparkle1 = var9;
    var9 = {
        'position': 'absolute',
        'left': 4294967293,
        'top': 8
    };
    var3.sparkle2 = var9;
    var9 = {
        'position': 'absolute',
        'right': 4294967291,
        'top': '25%'
    };
    var3.sparkle3 = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun69396: for (var _fun69396_ip = 0;;) switch (_fun69396_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channel;
                var _closure2_slot0 = var12;
                var18 = var0.onOpenRTCDebugOverlay;
                var21 = var0.onOpenVoiceSettings;
                var8 = var0.canInvite;
                var6 = var0.isActivitiesEnabled;
                var30 = var0.mediaEngineContext;
                var3 = undefined;
                if (!(var30 === var3)) {
                    _fun69396_ip = 63;
                    continue _fun69396
                }
            case 50:
                var1 = _closure1_slot9;
                var30 = var1.DEFAULT;
            case 63:
                var35 = var0.showGameConsoleSparkles;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var26 = _closure1_slot1;
                var19 = _closure1_slot2;
                var0 = 11;
                var0 = var19[var0];
                var0 = var26.bind(var3)(var0);
                var28 = var0.bind(var3)(var12);
                var16 = _closure1_slot0;
                var0 = 12;
                var0 = var19[var0];
                var1 = var16.bind(var3)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var13 = var0.bind(var1)(var12);
                _closure2_slot1 = var13;
                var0 = 13;
                var0 = var19[var0];
                var0 = var26.bind(var3)(var0);
                var23 = var0.bind(var3)(var12);
                var0 = 14;
                var0 = var19[var0];
                var0 = var16.bind(var3)(var0);
                var1 = var0.DeveloperMode;
                var0 = var1.useSetting;
                var17 = var0.bind(var1)();
                var0 = 15;
                var0 = var19[var0];
                var1 = var26.bind(var3)(var0);
                var0 = var12.id;
                var31 = var1.bind(var3)(var0);
                var0 = _closure1_slot13;
                var15 = var0.bind(var3)();
                var22 = 16;
                var0 = var19[var22];
                var0 = var26.bind(var3)(var0);
                var37 = var0.bind(var3)();
                var0 = 17;
                var0 = var19[var0];
                var0 = var26.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = 18;
                var1 = var19[var11];
                var5 = var16.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var25
                    var1 = _closure1_slot5;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var14 = var4.bind(var5)(var2, var1);
                var4 = 19;
                var1 = var19[var4];
                var5 = var16.bind(var3)(var1);
                var2 = var5.useActionBarSecondButton;
                var1 = {};
                var1.channel = var12;
                var5 = var2.bind(var5)(var1);
                var1 = var19[var4];
                var7 = var16.bind(var3)(var1);
                var2 = var7.useActionBarSecondButtons;
                var1 = {};
                var1.channel = var12;
                var10 = var2.bind(var7)(var1);
                var1 = var19[var4];
                var7 = var16.bind(var3)(var1);
                var2 = var7.useActionBarPrimaryButton;
                var1 = {};
                var1.channel = var12;
                var2 = var2.bind(var7)(var1);
                var1 = var19[var4];
                var20 = var16.bind(var3)(var1);
                var7 = var20.useActionBarPrimaryButtons;
                var1 = {};
                var1.channel = var12;
                var1 = var7.bind(var20)(var1);
                var7 = 20;
                var7 = var19[var7];
                var24 = var16.bind(var3)(var7);
                var20 = var24.UNSAFE_useIsDismissibleContentDismissed;
                var7 = 21;
                var7 = var19[var7];
                var7 = var16.bind(var3)(var7);
                var7 = var7.DismissibleContent;
                var7 = var7.DONUT_MOBILE_NUX;
                var7 = var20.bind(var24)(var7);
                var34 = !var7;
                _closure2_slot2 = var34;
                var24 = 22;
                var7 = var19[var24];
                var27 = var16.bind(var3)(var7);
                var20 = var27.useEmbeddedActivityLaunchability;
                var7 = var12.id;
                var7 = var20.bind(var27)(var7);
                var20 = 23;
                var20 = var19[var20];
                var20 = var26.bind(var3)(var20);
                var20 = var20.bind(var3)();
                var20 = var20.bottom;
                var26 = 24;
                var26 = var19[var26];
                var29 = var16.bind(var3)(var26);
                var27 = var29.useIsStreamFocused;
                var26 = var12.id;
                var32 = var27.bind(var29)(var26);
                var26 = 25;
                var26 = var19[var26];
                var29 = var16.bind(var3)(var26);
                var27 = var29.useHasPipParticipant;
                var26 = {};
                var26.isActivityViewFocused = var31;
                var31 = var27.bind(var29)(var26);
                var11 = var19[var11];
                var26 = var16.bind(var3)(var11);
                var19 = var26.useStateFromStores;
                var11 = _closure1_slot7;
                var16 = new Array(1);
                var16[0] = var11;
                var11 = function() { // Environment: var25
                    var1 = _closure1_slot7;
                    var0 = var1.isPipEnabledWhileFocusedOnActivityOrStream;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var26 = var19.bind(var26)(var16, var11);
                var16 = null;
                if (!(var16 == var0)) {
                    _fun69396_ip = 2260;
                    continue _fun69396
                }
            case 601:
                if (var14) {
                    _fun69396_ip = 2260;
                    continue _fun69396
                }
            case 607:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var11.bind(var3)(var0);
                var0 = var0.ActionBarSecondButton;
                var0 = var0.AUDIO_ROUTE;
                var29 = var5 !== var0;
                if (!var29) {
                    _fun69396_ip = 676;
                    continue _fun69396
                }
            case 643:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var11.bind(var3)(var0);
                var0 = var0.ActionBarSecondButton;
                var0 = var0.AUDIO_ROUTE;
                var29 = var10[var0];
            case 676:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var11.bind(var3)(var0);
                var0 = var0.ActionBarSecondButton;
                var0 = var0.SCREEN_SHARE_START;
                var33 = var5 !== var0;
                if (!var33) {
                    _fun69396_ip = 745;
                    continue _fun69396
                }
            case 712:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var11.bind(var3)(var0);
                var0 = var0.ActionBarSecondButton;
                var0 = var0.SCREEN_SHARE_START;
                var33 = var10[var0];
            case 745:
                if (var33) {
                    _fun69396_ip = 820;
                    continue _fun69396
                }
            case 748:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var11.bind(var3)(var0);
                var0 = var0.ActionBarSecondButton;
                var0 = var0.SCREEN_SHARE_END;
                var0 = var5 !== var0;
                if (!var0) {
                    _fun69396_ip = 817;
                    continue _fun69396
                }
            case 784:
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var11.bind(var3)(var5);
                var5 = var5.ActionBarSecondButton;
                var5 = var5.SCREEN_SHARE_END;
                var0 = var10[var5];
            case 817:
                var33 = var0;
            case 820:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ActionBarPrimaryButton;
                var0 = var0.END_ACTIVITY;
                var11 = var2 !== var0;
                if (!var11) {
                    _fun69396_ip = 889;
                    continue _fun69396
                }
            case 856:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ActionBarPrimaryButton;
                var0 = var0.END_ACTIVITY;
                var11 = var1[var0];
            case 889:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ActionBarPrimaryButton;
                var0 = var0.END_CALL;
                var27 = var2 !== var0;
                if (!var27) {
                    _fun69396_ip = 958;
                    continue _fun69396
                }
            case 925:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ActionBarPrimaryButton;
                var0 = var0.END_CALL;
                var27 = var1[var0];
            case 958:
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var5 = var37.length;
                var4 = 0;
                var4 = var5 > var4;
                var5 = null;
                if (!var4) {
                    _fun69396_ip = 1210;
                    continue _fun69396
                }
            case 987:
                var19 = _closure1_slot11;
                var10 = _closure1_slot3;
                var4 = {};
                var36 = var15.container;
                var4.style = var36;
                var36 = var37.map;
                var25 = function(arg0) { // Environment: var25
                    var0 = arg0;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.GameConsoleAccountItem;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1.nuxVisible = var6;
                    var1.account = var0;
                    var6 = _closure2_slot0;
                    var1.channel = var6;
                    var5 = _closure2_slot1;
                    var1.connected = var5;
                    var0 = var0.type;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var36 = var36.bind(var37)(var25);
                var25 = new Array(2);
                var25[0] = var36;
                if (var34) {
                    _fun69396_ip = 1042;
                    continue _fun69396
                }
            case 1034:
                var34 = null;
                if (!var35) {
                    _fun69396_ip = 1196;
                    continue _fun69396
                }
            case 1042:
                var37 = _closure1_slot11;
                var36 = _closure1_slot12;
                var35 = {};
                var41 = _closure1_slot10;
                var40 = _closure1_slot4;
                var38 = {};
                var39 = var15.sparkle1;
                var38.style = var39;
                var43 = _closure1_slot1;
                var44 = _closure1_slot2;
                var39 = 27;
                var39 = var44[var39];
                var39 = var43.bind(var3)(var39);
                var38.source = var39;
                var39 = var41.bind(var3)(var40, var38);
                var38 = new Array(3);
                var38[0] = var39;
                var39 = {};
                var42 = var15.sparkle2;
                var39.style = var42;
                var42 = 28;
                var42 = var44[var42];
                var42 = var43.bind(var3)(var42);
                var39.source = var42;
                var39 = var41.bind(var3)(var40, var39);
                var38[1] = var39;
                var39 = {};
                var42 = var15.sparkle3;
                var39.style = var42;
                var42 = 29;
                var42 = var44[var42];
                var42 = var43.bind(var3)(var42);
                var39.source = var42;
                var39 = var41.bind(var3)(var40, var39);
                var38[2] = var39;
                var35.children = var38;
                var34 = var37.bind(var3)(var36, var35);
            case 1196:
                var25[1] = var34;
                var4.children = var25;
                var5 = var19.bind(var3)(var10, var4);
            case 1210:
                var4 = new Array(6);
                var4[0] = var5;
                var5 = var13;
                if (!var5) {
                    _fun69396_ip = 1291;
                    continue _fun69396
                }
            case 1224:
                var25 = _closure1_slot10;
                var19 = _closure1_slot3;
                var10 = {};
                var34 = var15.container;
                var10.style = var34;
                var35 = _closure1_slot0;
                var36 = _closure1_slot2;
                var34 = 26;
                var34 = var36[var34];
                var34 = var35.bind(var3)(var34);
                var35 = var34.SoundboardButton;
                var34 = {};
                var34.channel = var12;
                var34 = var25.bind(var3)(var35, var34);
                var10.children = var34;
                var5 = var25.bind(var3)(var19, var10);
            case 1291:
                var4[1] = var5;
                var5 = null;
                if (!var33) {
                    _fun69396_ip = 1374;
                    continue _fun69396
                }
            case 1300:
                var25 = _closure1_slot10;
                var19 = _closure1_slot3;
                var10 = {};
                var34 = var15.container;
                var10.style = var34;
                if (!var33) {
                    _fun69396_ip = 1364;
                    continue _fun69396
                }
            case 1322:
                var36 = _closure1_slot10;
                var35 = _closure1_slot0;
                var37 = _closure1_slot2;
                var34 = 26;
                var34 = var37[var34];
                var34 = var35.bind(var3)(var34);
                var35 = var34.ScreenshareButton;
                var34 = {};
                var34.channel = var12;
                var33 = var36.bind(var3)(var35, var34);
            case 1364:
                var10.children = var33;
                var5 = var25.bind(var3)(var19, var10);
            case 1374:
                var4[2] = var5;
                var25 = _closure1_slot11;
                var10 = _closure1_slot3;
                var5 = {};
                var19 = var15.container;
                var5.style = var19;
                var19 = null;
                if (!var32) {
                    _fun69396_ip = 1448;
                    continue _fun69396
                }
            case 1402:
                if (var31) {
                    _fun69396_ip = 1410;
                    continue _fun69396
                }
            case 1405:
                var19 = null;
                if (var26) {
                    _fun69396_ip = 1448;
                    continue _fun69396
                }
            case 1410:
                var32 = _closure1_slot10;
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var26 = 26;
                var26 = var33[var26];
                var26 = var31.bind(var3)(var26);
                var31 = var26.ToggleShowPip;
                var26 = {};
                var19 = var32.bind(var3)(var31, var26);
            case 1448:
                var26 = new Array(9);
                var26[0] = var19;
                var19 = null;
                if (!var27) {
                    _fun69396_ip = 1503;
                    continue _fun69396
                }
            case 1461:
                var32 = _closure1_slot10;
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var27 = 26;
                var27 = var33[var27];
                var27 = var31.bind(var3)(var27);
                var31 = var27.DisconnectCallButton;
                var27 = {};
                var27.channel = var12;
                var19 = var32.bind(var3)(var31, var27);
            case 1503:
                var26[1] = var19;
                var32 = _closure1_slot10;
                var31 = _closure1_slot0;
                var27 = _closure1_slot2;
                var19 = 26;
                var33 = var27[var19];
                var33 = var31.bind(var3)(var33);
                var34 = var33.StreamVolumeItem;
                var33 = {};
                var33 = var32.bind(var3)(var34, var33);
                var26[2] = var33;
                var27 = var27[var19];
                var27 = var31.bind(var3)(var27);
                var31 = var27.DeafenButton;
                var27 = {};
                var27.channel = var12;
                var27 = var32.bind(var3)(var31, var27);
                var26[3] = var27;
                var27 = null;
                if (!var29) {
                    _fun69396_ip = 1634;
                    continue _fun69396
                }
            case 1585:
                var32 = _closure1_slot10;
                var31 = _closure1_slot0;
                var29 = _closure1_slot2;
                var29 = var29[var19];
                var29 = var31.bind(var3)(var29);
                var31 = var29.AudioRouteButton;
                var29 = {};
                var33 = var12.id;
                var29.channelId = var33;
                var29.isConnectedToVoiceChannel = var13;
                var27 = var32.bind(var3)(var31, var29);
            case 1634:
                var26[4] = var27;
                var27 = null;
                if (!var8) {
                    _fun69396_ip = 1692;
                    continue _fun69396
                }
            case 1643:
                var27 = null;
                if (var28) {
                    _fun69396_ip = 1692;
                    continue _fun69396
                }
            case 1648:
                var27 = null;
                if (!var13) {
                    _fun69396_ip = 1692;
                    continue _fun69396
                }
            case 1653:
                var31 = _closure1_slot10;
                var29 = _closure1_slot0;
                var28 = _closure1_slot2;
                var28 = var28[var19];
                var28 = var29.bind(var3)(var28);
                var29 = var28.InviteButton;
                var28 = {};
                var28.channel = var12;
                var27 = var31.bind(var3)(var29, var28);
            case 1692:
                var26[5] = var27;
                var29 = _closure1_slot10;
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var31 = var27[var19];
                var31 = var28.bind(var3)(var31);
                var32 = var31.ToggleNoiseCancellation;
                var31 = {};
                var31 = var29.bind(var3)(var32, var31);
                var26[6] = var31;
                var31 = var27[var19];
                var31 = var28.bind(var3)(var31);
                var32 = var31.HideNonVideoParticipants;
                var31 = {};
                var31.channel = var12;
                var31 = var29.bind(var3)(var32, var31);
                var26[7] = var31;
                var27 = var27[var19];
                var27 = var28.bind(var3)(var27);
                var28 = var27.HideSelfVideo;
                var27 = {};
                var27.channel = var12;
                var27.mediaEngineContext = var30;
                var27 = var29.bind(var3)(var28, var27);
                var26[8] = var27;
                var5.children = var26;
                var5 = var25.bind(var3)(var10, var5);
                var4[3] = var5;
                var5 = null;
                if (!var6) {
                    _fun69396_ip = 2035;
                    continue _fun69396
                }
            case 1824:
                var5 = null;
                if (!var13) {
                    _fun69396_ip = 2035;
                    continue _fun69396
                }
            case 1832:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var24];
                var6 = var10.bind(var3)(var6);
                var6 = var6.EmbeddedActivityLaunchability;
                var6 = var6.CAN_LAUNCH;
                var5 = null;
                if (!(var7 === var6)) {
                    _fun69396_ip = 2035;
                    continue _fun69396
                }
            case 1870:
                var10 = _closure1_slot11;
                var7 = _closure1_slot3;
                var6 = {};
                var24 = var15.container;
                var6.style = var24;
                var24 = null;
                if (!var11) {
                    _fun69396_ip = 1929;
                    continue _fun69396
                }
            case 1894:
                var26 = _closure1_slot10;
                var25 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var19];
                var11 = var25.bind(var3)(var11);
                var25 = var11.LeaveActivitiesButton;
                var11 = {};
                var24 = var26.bind(var3)(var25, var11);
            case 1929:
                var11 = new Array(3);
                var11[0] = var24;
                var24 = null;
                if (!var17) {
                    _fun69396_ip = 1977;
                    continue _fun69396
                }
            case 1942:
                var27 = _closure1_slot10;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var19];
                var25 = var26.bind(var3)(var25);
                var26 = var25.ShareActivityLogsButton;
                var25 = {};
                var24 = var27.bind(var3)(var26, var25);
            case 1977:
                var11[1] = var24;
                var24 = null;
                if (!var17) {
                    _fun69396_ip = 2021;
                    continue _fun69396
                }
            case 1986:
                var27 = _closure1_slot10;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var19];
                var25 = var26.bind(var3)(var25);
                var26 = var25.ToggleShowActivitiesDebugOverlay;
                var25 = {};
                var24 = var27.bind(var3)(var26, var25);
            case 2021:
                var11[2] = var24;
                var6.children = var11;
                var5 = var10.bind(var3)(var7, var6);
            case 2035:
                var4[4] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = var15.container;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var20 = var22 + var20;
                var11.marginBottom = var20;
                var10[1] = var11;
                var5.style = var10;
                var20 = _closure1_slot10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var19];
                var10 = var11.bind(var3)(var10);
                var11 = var10.VoiceSettingsButton;
                var10 = {};
                var10.onPress = var21;
                var11 = var20.bind(var3)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var20 = var16 != var23;
                var11 = null;
                if (!var20) {
                    _fun69396_ip = 2176;
                    continue _fun69396
                }
            case 2136:
                var22 = _closure1_slot10;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var19];
                var20 = var21.bind(var3)(var20);
                var21 = var20.ReportStreamIssueButton;
                var20 = {};
                var20.stream = var23;
                var11 = var22.bind(var3)(var21, var20);
            case 2176:
                var10[1] = var11;
                var11 = null;
                if (!var17) {
                    _fun69396_ip = 2230;
                    continue _fun69396
                }
            case 2185:
                var11 = null;
                if (!var13) {
                    _fun69396_ip = 2230;
                    continue _fun69396
                }
            case 2190:
                var17 = _closure1_slot10;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var19];
                var13 = var16.bind(var3)(var13);
                var16 = var13.RtcDebugPanelButton;
                var13 = {};
                var13.onOpenRTCDebugOverlay = var18;
                var11 = var17.bind(var3)(var16, var13);
            case 2230:
                var10[2] = var11;
                var5.children = var10;
                var5 = var7.bind(var3)(var6, var5);
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 2260:
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var11 = _closure1_slot10;
                var6 = _closure1_slot3;
                var4 = {};
                var5 = var15.container;
                var4.style = var5;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = 26;
                var5 = var7[var13];
                var5 = var10.bind(var3)(var5);
                var16 = var5.TransferCallButton;
                var5 = {};
                var5.disabled = var14;
                var17 = var12.id;
                var5.channelId = var17;
                var5 = var11.bind(var3)(var16, var5);
                var4.children = var5;
                var5 = var11.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var15 = var15.container;
                var5.style = var15;
                var7 = var7[var13];
                var7 = var10.bind(var3)(var7);
                var10 = var7.DeafenButton;
                var7 = {};
                var7.disabled = var14;
                var7.channel = var12;
                var10 = var11.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                if (!var8) {
                    _fun69396_ip = 2446;
                    continue _fun69396
                }
            case 2407:
                var11 = _closure1_slot10;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var10.bind(var3)(var9);
                var10 = var9.InviteButton;
                var9 = {};
                var9.channel = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 2446:
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var11 = var0.channel;
        var _closure2_slot0 = var11;
        var10 = var0.onOpenRTCDebugOverlay;
        var7 = var0.onOpenVoiceSettings;
        var6 = var0.showGameConsoleSparkles;
        var8 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 30;
        var1 = var12[var0];
        var3 = undefined;
        var5 = var8.bind(var3)(var1);
        var1 = 31;
        var1 = var12[var1];
        var1 = var8.bind(var3)(var1);
        var1 = var1.CHANNEL_EXPANDED_CONTROLS;
        var1 = var5.bind(var3)(var1);
        var5 = var1.analyticsLocations;
        var1 = _closure1_slot0;
        var9 = 18;
        var9 = var12[var9];
        var14 = var1.bind(var3)(var9);
        var13 = var14.useStateFromStores;
        var15 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var15;
        var2 = function() { // Environment: var2
            _fun69401: for (var _fun69401_ip = 0;;) switch (_fun69401_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = var2.isPrivate;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun69401_ip = 53;
                        continue _fun69401
                    }
                case 20:
                    var4 = _closure1_slot6;
                    var3 = var4.can;
                    var2 = _closure1_slot8;
                    var2 = var2.CREATE_INSTANT_INVITE;
                    var1 = _closure2_slot0;
                    var0 = var3.bind(var4)(var2, var1);
                case 53:
                    return var0;
            }
        };
        var9 = var13.bind(var14)(var9, var2);
        var2 = 32;
        var2 = var12[var2];
        var13 = var8.bind(var3)(var2);
        var2 = var11.getGuildId;
        var8 = var2.bind(var11)();
        var2 = var11.id;
        var8 = var13.bind(var3)(var8, var2);
        var2 = _closure1_slot10;
        var0 = var12[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.AnalyticsLocationProvider;
        var0 = {};
        var0.value = var5;
        var5 = _closure1_slot14;
        var4 = {};
        var4.channel = var11;
        var4.onOpenRTCDebugOverlay = var10;
        var4.canInvite = var9;
        var4.isActivitiesEnabled = var8;
        var4.onOpenVoiceSettings = var7;
        var4.showGameConsoleSparkles = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelExpandedControls.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.ChannelExpandedControls = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3478, 3050, 7858, 660, 3469, 33, 1297, 671, 4834, 8403, 7849, 8540, 1348, 7852, 8252, 8253, 566, 8410, 3171, 1358, 7952, 1568, 8034, 7862, 8462, 8465, 8464, 8658, 5687, 5540, 7872, 2]);