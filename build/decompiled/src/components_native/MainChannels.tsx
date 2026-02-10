// components_native/MainChannels.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.DM_WIDTH;
    var _closure1_slot8 = var10;
    var3 = var3.ME;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': null,
        'bottom': 0,
        'right': 0,
        'flexDirection': 'row'
    };
    var9.left = var10;
    var3.sideContainer = var9;
    var9 = {};
    var10 = 10;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var9.borderTopLeftRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var9.borderTopRightRadius = var13;
    var3.side = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderTopRightRadius = var13;
    var3.sideTablet = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var9.borderTopRightRadius = var13;
    var9.borderRightWidth = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.borderRightColor = var10;
    var3.sideTabletWithYouBar = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var7 = var6.memo;
    var3 = function() {
        _fun101250: for (var _fun101250_ip = 0;;) switch (_fun101250_ip) {
            case 0:
                var0 = _closure1_slot12;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var _closure2_slot0 = var15;
                var0 = function() {
                    _fun101251: for (var _fun101251_ip = 0;;) switch (_fun101251_ip) {
                        case 0:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 6;
                            var1 = var8[var1];
                            var7 = undefined;
                            var2 = var6.bind(var7)(var1);
                            var1 = var2.useGuildsRouteGuildAndChannelId;
                            var4 = var1.bind(var2)();
                            var2 = _closure1_slot3;
                            var1 = 2;
                            var2 = var2.bind(var7)(var4, var1);
                            var1 = 0;
                            var5 = var2[var1];
                            var _closure3_slot0 = var5;
                            var1 = 1;
                            var1 = var2[var1];
                            var9 = _closure1_slot4;
                            var2 = var9.useRef;
                            var4 = var2.bind(var9)(var5);
                            var _closure3_slot1 = var4;
                            var2 = 7;
                            var2 = var8[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = var6.useSelectedChannelFromRoute;
                            var2 = var2.bind(var6)();
                            var8 = var9.useEffect;
                            var6 = new Array(1);
                            var6[0] = var5;
                            var3 = function() { // Environment: var3
                                var1 = _closure3_slot1;
                                var0 = _closure3_slot0;
                                var1.current = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var3 = var8.bind(var9)(var3, var6);
                            var3 = null;
                            var6 = var3 != var5;
                            if (!var6) {
                                _fun101251_ip = 150;
                                continue _fun101251
                            }
                        case 142:
                            var8 = _closure1_slot9;
                            var6 = var5 !== var8;
                        case 150:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 8;
                            var0 = var9[var0];
                            var0 = var8.bind(var7)(var0);
                            var4 = var0.bind(var7)(var4);
                            var0 = {};
                            var0.isGuildSelected = var6;
                            if (!var6) {
                                _fun101251_ip = 188;
                                continue _fun101251
                            }
                        case 185:
                            var4 = var5;
                        case 188:
                            var0.selectedGuildId = var4;
                            if (!(var3 != var2)) {
                                _fun101251_ip = 200;
                                continue _fun101251
                            }
                        case 197:
                            var1 = var2;
                        case 200:
                            var0.selectedChannelId = var1;
                            return var0;
                    }
                };
                var0 = var0.bind(var3)();
                var18 = var0.isGuildSelected;
                var _closure2_slot1 = var18;
                var21 = var0.selectedGuildId;
                var20 = var0.selectedChannelId;
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var13 = var0.isChatBesideChannelList;
                var _closure2_slot2 = var13;
                var5 = _closure1_slot0;
                var0 = 12;
                var0 = var7[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useYouBarEnabled;
                var0 = 'channel list';
                var0 = var2.bind(var4)(var0);
                var _closure2_slot3 = var0;
                var9 = _closure1_slot4;
                var4 = var9.useMemo;
                var2 = new Array(3);
                var2[0] = var15;
                var2[1] = var13;
                var2[2] = var0;
                var0 = function() { // Environment: var1
                    _fun101253: for (var _fun101253_ip = 0;;) switch (_fun101253_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.side;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun101253_ip = 38;
                                continue _fun101253
                            }
                        case 28:
                            var3 = _closure2_slot0;
                            var1 = var3.sideTablet;
                        case 38:
                            var0[1] = var1;
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun101253_ip = 53;
                                continue _fun101253
                            }
                        case 49:
                            var1 = _closure2_slot2;
                        case 53:
                            if (!var1) {
                                _fun101253_ip = 66;
                                continue _fun101253
                            }
                        case 56:
                            var2 = _closure2_slot0;
                            var1 = var2.sideTabletWithYouBar;
                        case 66:
                            var0[2] = var1;
                            return var0;
                    }
                };
                var22 = var4.bind(var9)(var0, var2);
                var0 = 13;
                var2 = var7[var0];
                var4 = var5.bind(var3)(var2);
                var2 = var4.useHomeGesture;
                var2 = var2.bind(var4)();
                var6 = var2.gesture;
                var19 = var2.panelStyles;
                var4 = var2.homeDrawerState;
                var8 = _closure1_slot8;
                var2 = 14;
                var2 = var7[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var12 = var8 + var2;
                var2 = 15;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var10 = var2.ReplyNudgeExperiment;
                var8 = var10.useConfig;
                var2 = {};
                var11 = 'MainChannels';
                var2.location = var11;
                var2 = var8.bind(var10)(var2);
                var11 = var2.enabled;
                var _closure2_slot4 = var11;
                var2 = 16;
                var2 = var7[var2];
                var14 = var5.bind(var3)(var2);
                var10 = var14.useStateFromStores;
                var2 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.isNudgesInitialized;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var10.bind(var14)(var8, var2);
                var _closure2_slot5 = var10;
                var8 = var9.useEffect;
                var2 = new Array(3);
                var2[0] = var18;
                var2[1] = var11;
                var2[2] = var10;
                var1 = function() { // Environment: var1
                    _fun101255: for (var _fun101255_ip = 0;;) switch (_fun101255_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = !var0;
                            if (!var0) {
                                _fun101255_ip = 17;
                                continue _fun101255
                            }
                        case 13:
                            var0 = _closure2_slot4;
                        case 17:
                            if (!var0) {
                                _fun101255_ip = 24;
                                continue _fun101255
                            }
                        case 20:
                            var0 = _closure2_slot5;
                        case 24:
                            if (!var0) {
                                _fun101255_ip = 56;
                                continue _fun101255
                            }
                        case 27:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.bind(var1)();
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var1, var2);
                var2 = _closure1_slot10;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.HomeDrawerStateContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 18;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.NonCollapsableGestureDetector;
                var4 = {};
                var4.gesture = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = _closure1_slot6;
                var10 = var9.absoluteFill;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = undefined;
                if (!var13) {
                    _fun101250_ip = 449;
                    continue _fun101250
                }
            case 446:
                var11 = var12;
            case 449:
                var10.width = var11;
                var9[1] = var10;
                var6.style = var9;
                var12 = _closure1_slot10;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 19;
                var9 = var17[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.HomePanelContent;
                var9 = {};
                var10 = var12.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var11 = _closure1_slot1;
                var10 = 20;
                var10 = var17[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.View;
                var10 = {
                    'style': null,
                    'pointerEvents': 'box-none',
                    'nativeID': 'messages-parent-view'
                };
                var13 = new Array(2);
                var13[0] = var19;
                var15 = var15.sideContainer;
                var13[1] = var15;
                var10.style = var13;
                var15 = _closure1_slot11;
                var13 = 21;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.NativeFreezeScreens;
                var13 = {};
                var17 = 0;
                if (!var18) {
                    _fun101250_ip = 598;
                    continue _fun101250
                }
            case 595:
                var17 = 1;
            case 598:
                var13.activeIndex = var17;
                var19 = _closure1_slot10;
                var18 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 22;
                var16 = var23[var16];
                var17 = var18.bind(var3)(var16);
                var16 = {};
                var16.style = var22;
                var17 = var19.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 23;
                var17 = var23[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var17.style = var22;
                var17.selectedGuildId = var21;
                var17.selectedChannelId = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function() {
        var3 = _closure1_slot10;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 24;
        var0 = var7[var5];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var6 = _closure1_slot0;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var5 = var5.Profiles;
        var5 = var5.LeftPanel;
        var0.profile = var5;
        var5 = _closure1_slot13;
        var4 = {};
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/MainChannels.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8379, 660, 33, 13176, 3920, 4737, 1297, 671, 3923, 5275, 13172, 12218, 8381, 566, 13177, 13178, 13179, 3721, 13248, 13249, 13321, 11898, 2]);