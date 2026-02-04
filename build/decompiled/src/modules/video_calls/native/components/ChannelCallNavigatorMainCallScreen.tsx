// modules/video_calls/native/components/ChannelCallNavigatorMainCallScreen.tsx
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
        _fun69568: for (var _fun69568_ip = 0;;) switch (_fun69568_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.channel;
                var0 = var1.shouldShowConnectingScreen;
                var5 = var1.awaitingRemoteSessionInfo;
                var1 = null;
                if (!(var1 == var5)) {
                    _fun69568_ip = 81;
                    continue _fun69568
                }
            case 26:
                var3 = _closure1_slot15;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                if (var0) {
                    _fun69568_ip = 53;
                    continue _fun69568
                }
            case 44:
                var0 = 12;
                var0 = var6[var0];
                _fun69568_ip = 60;
                continue _fun69568;
            case 53:
                var2 = 11;
                var0 = var6[var2];
            case 60:
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var0.channel = var4;
                var0 = var3.bind(var2)(var1, var0);
                _fun69568_ip = 123;
                continue _fun69568;
            case 81:
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.awaitingRemoteSessionInfo = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 123:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DevShelfFetchState;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.setShowConsoleVoiceSparkles;
    var _closure1_slot7 = var7;
    var3 = var3.useConsoleVoiceUpsellStore;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.resetFocus;
    var _closure1_slot11 = var6;
    var3 = var3.useIsVoiceChatFocused;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallNavigatorMainCallScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69569: for (var _fun69569_ip = 0;;) switch (_fun69569_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.channel;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var1 = var0.bind(var1)(var19);
                var5 = _closure1_slot1;
                var0 = 14;
                var0 = var2[var0];
                var0 = var5.bind(var3)(var0);
                var20 = var0.bind(var3)();
                var0 = 15;
                var2 = var2[var0];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var14
                    var1 = _closure1_slot9;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var21 = var5.bind(var6)(var4, var2);
                if (var1) {
                    _fun69569_ip = 164;
                    continue _fun69569
                }
            case 139:
                var2 = null;
                var2 = var2 == var20;
                var4 = undefined;
                if (var2) {
                    _fun69569_ip = 155;
                    continue _fun69569
                }
            case 150:
                var4 = var20.channelId;
            case 155:
                var2 = var19.id;
                var1 = var4 === var2;
            case 164:
                var11 = !var1;
                if (!var11) {
                    _fun69569_ip = 205;
                    continue _fun69569
                }
            case 170:
                var2 = var19.type;
                var1 = _closure1_slot13;
                var1 = var1.GUILD_VOICE;
                var1 = var2 === var1;
                if (var1) {
                    _fun69569_ip = 202;
                    continue _fun69569
                }
            case 192:
                var2 = var19.isVocalThread;
                var1 = var2.bind(var19)();
            case 202:
                var11 = var1;
            case 205:
                _closure2_slot0 = var11;
                var1 = _closure1_slot12;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var5 = 'dark';
                var4 = var5;
                if (!var11) {
                    _fun69569_ip = 266;
                    continue _fun69569
                }
            case 251:
                var2 = null;
                var2 = var2 == var21;
                var4 = var5;
                if (!var2) {
                    _fun69569_ip = 266;
                    continue _fun69569
                }
            case 263:
                var4 = var1;
            case 266:
                var13 = _closure1_slot4;
                var2 = var13.useState;
                var1 = false;
                var5 = var2.bind(var13)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var8 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot1 = var1;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                var22 = var1.showSparkles;
                _closure2_slot2 = var22;
                var23 = function() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = var7[var0];
                var10 = var1.bind(var3)(var2);
                var6 = var10.useStateFromStores;
                var2 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var14
                    var1 = _closure1_slot10;
                    var0 = var1.getShowActivitiesDebugOverlay;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var6.bind(var10)(var5, var2);
                var6 = var13.useEffect;
                var5 = new Array(1);
                var5[0] = var11;
                var2 = function() { // Environment: var14
                    _fun69573: for (var _fun69573_ip = 0;;) switch (_fun69573_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun69573_ip = 23;
                                continue _fun69573
                            }
                        case 10:
                            var1 = _closure1_slot11;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var13)(var2, var5);
                var5 = _closure1_slot1;
                var2 = 17;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                _closure2_slot3 = var2;
                var6 = 18;
                var6 = var7[var6];
                var16 = var1.bind(var3)(var6);
                var15 = var16.UNSAFE_useIsDismissibleContentDismissed;
                var6 = 19;
                var6 = var7[var6];
                var6 = var1.bind(var3)(var6);
                var6 = var6.DismissibleContent;
                var6 = var6.DONUT_MOBILE_NUX;
                var6 = var15.bind(var16)(var6);
                var16 = !var6;
                _closure2_slot4 = var16;
                var15 = var13.useCallback;
                var6 = new Array(3);
                var6[0] = var16;
                var6[1] = var22;
                var6[2] = var2;
                var2 = function() { // Environment: var14
                    _fun69574: for (var _fun69574_ip = 0;;) switch (_fun69574_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun69574_ip = 25;
                                continue _fun69574
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 25:
                            if (!var1) {
                                _fun69574_ip = 88;
                                continue _fun69574
                            }
                        case 28:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 18;
                            var1 = var6[var1];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var1);
                            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = 19;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.DONUT_MOBILE_NUX;
                            var1 = var2.bind(var3)(var1);
                        case 88:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun69574_ip = 111;
                                continue _fun69574
                            }
                        case 95:
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var15.bind(var13)(var2, var6);
                var0 = var7[var0];
                var17 = var1.bind(var3)(var0);
                var15 = var17.useStateFromStores;
                var0 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var0;
                var2 = function() { // Environment: var14
                    var1 = _closure1_slot5;
                    var0 = var1.getFetchState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var15 = var15.bind(var17)(var6, var2, var0);
                _closure2_slot5 = var15;
                var0 = 20;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)(var15);
                _closure2_slot6 = var0;
                var6 = var13.useEffect;
                var2 = new Array(2);
                var2[0] = var15;
                var2[1] = var0;
                var0 = function() { // Environment: var14
                    _fun69576: for (var _fun69576_ip = 0;;) switch (_fun69576_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = _closure1_slot6;
                            var0 = var0.ERROR;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun69576_ip = 45;
                                continue _fun69576
                            }
                        case 27:
                            var2 = _closure2_slot6;
                            var1 = _closure1_slot6;
                            var1 = var1.ERROR;
                            var0 = var2 !== var1;
                        case 45:
                            if (!var0) {
                                _fun69576_ip = 166;
                                continue _fun69576
                            }
                        case 48:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 21;
                            var0 = var6[var0];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var7 = 'EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR';
                            var0.key = var7;
                            var9 = _closure1_slot0;
                            var3 = 22;
                            var7 = var6[var3];
                            var7 = var9.bind(var4)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var3 = var6[var3];
                            var3 = var9.bind(var4)(var3);
                            var3 = var3.t;
                            var3 = var3["AlJyI+"];
                            var3 = var7.bind(var8)(var3);
                            var0.content = var3;
                            var3 = 23;
                            var3 = var6[var3];
                            var3 = var5.bind(var4)(var3);
                            var0.icon = var3;
                            var0 = var1.bind(var2)(var0);
                        case 166:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var13)(var0, var2);
                var2 = _closure1_slot15;
                var0 = 24;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var4;
                var6 = _closure1_slot16;
                var4 = 25;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.useThemedBarStyle = var11;
                var7 = var11;
                if (var11) {
                    _fun69569_ip = 682;
                    continue _fun69569
                }
            case 679:
                var7 = var12;
            case 682:
                var4.showStatus = var7;
                var4.channel = var19;
                var13 = _closure1_slot15;
                var12 = _closure1_slot17;
                var7 = {};
                var7.channel = var19;
                var7.awaitingRemoteSessionInfo = var21;
                var7.shouldShowConnectingScreen = var11;
                var12 = var13.bind(var3)(var12, var7);
                var7 = new Array(4);
                var7[0] = var12;
                var15 = _closure1_slot15;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 26;
                var12 = var17[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.channel = var19;
                var17 = var11;
                if (var17) {
                    _fun69569_ip = 771;
                    continue _fun69569
                }
            case 765:
                var18 = null;
                var17 = var18 != var21;
            case 771:
                if (var17) {
                    _fun69569_ip = 780;
                    continue _fun69569
                }
            case 774:
                var18 = null;
                var17 = var18 != var20;
            case 780:
                var12.omitPTT = var17;
                var12.disableGradient = var11;
                var12.forceReveal = var11;
                var12.onDrawerClose = var16;
                var21 = _closure1_slot15;
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var16 = 27;
                var16 = var20[var16];
                var18 = var17.bind(var3)(var16);
                var16 = {};
                var16.channel = var19;
                var16.onOpenRTCDebugOverlay = var23;
                var16.showConnecting = var11;
                var16 = var21.bind(var3)(var18, var16);
                var12.header = var16;
                var16 = true;
                var12.isTouchingLeftScreenEdge = var16;
                var21 = _closure1_slot15;
                var16 = 28;
                var16 = var20[var16];
                var18 = var17.bind(var3)(var16);
                var16 = {};
                var16.channel = var19;
                var16 = var21.bind(var3)(var18, var16);
                var12.bottomHeader = var16;
                var21 = _closure1_slot15;
                var16 = 29;
                var16 = var20[var16];
                var18 = var17.bind(var3)(var16);
                var16 = {};
                var25 = _closure1_slot0;
                var24 = 11;
                var24 = var20[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.showVoiceSettingsActionSheet;
                var16.onOpenVoiceSettings = var24;
                var16.channel = var19;
                var16.onOpenRTCDebugOverlay = var23;
                var23 = _closure1_slot14;
                var23 = var23.DEFAULT;
                var16.mediaEngineContext = var23;
                var16.showGameConsoleSparkles = var22;
                var16 = var21.bind(var3)(var18, var16);
                var12.expandedControls = var16;
                var21 = _closure1_slot15;
                var16 = 30;
                var16 = var20[var16];
                var18 = var17.bind(var3)(var16);
                var16 = {};
                var16.channel = var19;
                var16.shouldShowConnectingScreen = var11;
                var16 = var21.bind(var3)(var18, var16);
                var12.actionBar = var16;
                var18 = _closure1_slot15;
                var16 = 31;
                var16 = var20[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.shouldShowConnectingScreen = var11;
                var16.channel = var19;
                var16 = var18.bind(var3)(var17, var16);
                var12.children = var16;
                var12 = var15.bind(var3)(var13, var12);
                var7[1] = var12;
                if (!var8) {
                    _fun69569_ip = 1066;
                    continue _fun69569
                }
            case 1063:
                var8 = !var11;
            case 1066:
                if (!var8) {
                    _fun69569_ip = 1113;
                    continue _fun69569
                }
            case 1069:
                var13 = _closure1_slot15;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 32;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var14 = function() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var11.onClose = var14;
                var8 = var13.bind(var3)(var12, var11);
            case 1113:
                var7[2] = var8;
                var8 = null;
                if (!var10) {
                    _fun69569_ip = 1154;
                    continue _fun69569
                }
            case 1122:
                var11 = _closure1_slot15;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 33;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var8 = var11.bind(var3)(var10, var9);
            case 1154:
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 7224, 8698, 3519, 7898, 7885, 660, 3510, 33, 8699, 8466, 8702, 7889, 8294, 566, 3246, 8293, 3212, 1358, 5306, 3148, 1234, 5885, 3159, 7891, 8619, 8652, 8709, 8713, 8452, 8715, 8661, 8725, 2]);