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
    var3 = var4.bind(var0)(var3);
    var10 = var3.DM_WIDTH;
    var _closure1_slot7 = var10;
    var3 = var3.ME;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
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
    var10 = 8;
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
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderRightColor = var12;
    var3.sideTabletWithYouBar = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9.borderTopLeftRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.none;
    var9.borderTopRightRadius = var10;
    var3.squareEdges = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var7 = var6.memo;
    var3 = function() { // Original name: LeftMenuTabsInner, environment: var1
        _fun101335: for (var _fun101335_ip = 0;;) switch (_fun101335_ip) {
            case 0:
                var1 = _closure1_slot11;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var _closure2_slot0 = var15;
                var1 = function() { // Original name: useMainChannelsRouteInfo, environment: var0
                    _fun101336: for (var _fun101336_ip = 0;;) switch (_fun101336_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.useGuildsRouteGuildAndChannelId;
                            var3 = var1.bind(var2)();
                            var2 = _closure1_slot3;
                            var1 = 2;
                            var2 = var2.bind(var5)(var3, var1);
                            var1 = 0;
                            var3 = var2[var1];
                            var _closure3_slot0 = var3;
                            var1 = 1;
                            var1 = var2[var1];
                            var8 = _closure1_slot4;
                            var2 = var8.useRef;
                            var2 = var2.bind(var8)(var3);
                            var _closure3_slot1 = var2;
                            var7 = var8.useEffect;
                            var6 = new Array(1);
                            var6[0] = var3;
                            var4 = function() { // Environment: var4
                                var1 = _closure3_slot1;
                                var0 = _closure3_slot0;
                                var1.current = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var4 = var7.bind(var8)(var4, var6);
                            var4 = null;
                            var4 = var4 != var3;
                            if (!var4) {
                                _fun101336_ip = 128;
                                continue _fun101336
                            }
                        case 120:
                            var6 = _closure1_slot8;
                            var4 = var3 !== var6;
                        case 128:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 6;
                            var0 = var7[var0];
                            var0 = var6.bind(var5)(var0);
                            var2 = var0.bind(var5)(var2);
                            var0 = {};
                            var0.isGuildSelected = var4;
                            if (!var4) {
                                _fun101336_ip = 166;
                                continue _fun101336
                            }
                        case 163:
                            var2 = var3;
                        case 166:
                            var0.selectedGuildId = var2;
                            var0.selectedChannelId = var1;
                            return var0;
                    }
                };
                var1 = var1.bind(var3)();
                var18 = var1.isGuildSelected;
                var21 = var1.selectedGuildId;
                var20 = var1.selectedChannelId;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var13 = var1.isChatBesideChannelList;
                var _closure2_slot1 = var13;
                var5 = _closure1_slot0;
                var1 = 10;
                var1 = var7[var1];
                var4 = var5.bind(var3)(var1);
                var2 = var4.useYouBarEnabled;
                var1 = 'channel list';
                var6 = var2.bind(var4)(var1);
                var _closure2_slot2 = var6;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var15;
                var1[1] = var13;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun101338: for (var _fun101338_ip = 0;;) switch (_fun101338_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.side;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun101338_ip = 38;
                                continue _fun101338
                            }
                        case 28:
                            var3 = _closure2_slot0;
                            var1 = var3.sideTablet;
                        case 38:
                            var0[1] = var1;
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun101338_ip = 53;
                                continue _fun101338
                            }
                        case 49:
                            var1 = _closure2_slot1;
                        case 53:
                            if (!var1) {
                                _fun101338_ip = 66;
                                continue _fun101338
                            }
                        case 56:
                            var2 = _closure2_slot0;
                            var1 = var2.sideTabletWithYouBar;
                        case 66:
                            var0[2] = var1;
                            return var0;
                    }
                };
                var22 = var2.bind(var4)(var0, var1);
                var0 = 11;
                var1 = var7[var0];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useHomeGesture;
                var1 = var1.bind(var2)();
                var6 = var1.gesture;
                var19 = var1.panelStyles;
                var4 = var1.homeDrawerState;
                var2 = _closure1_slot7;
                var1 = 12;
                var1 = var7[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var12 = var2 + var1;
                var2 = _closure1_slot9;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.HomeDrawerStateContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 13;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.NonCollapsableGestureDetector;
                var4 = {};
                var4.gesture = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = _closure1_slot6;
                var10 = var9.absoluteFill;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = undefined;
                if (!var13) {
                    _fun101335_ip = 315;
                    continue _fun101335
                }
            case 312:
                var11 = var12;
            case 315:
                var10.width = var11;
                var9[1] = var10;
                var6.style = var9;
                var12 = _closure1_slot9;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 14;
                var9 = var17[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.HomePanelContent;
                var9 = {};
                var10 = var12.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var11 = _closure1_slot1;
                var10 = 15;
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
                var15 = _closure1_slot10;
                var13 = 16;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.NativeFreezeScreens;
                var13 = {};
                var17 = 0;
                if (!var18) {
                    _fun101335_ip = 464;
                    continue _fun101335
                }
            case 461:
                var17 = 1;
            case 464:
                var13.activeIndex = var17;
                var19 = _closure1_slot9;
                var18 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 17;
                var16 = var23[var16];
                var17 = var18.bind(var3)(var16);
                var16 = {};
                var16.style = var22;
                var17 = var19.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 18;
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
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: MainChannelsRedesignInner, environment: var1
        var3 = _closure1_slot9;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 19;
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
        var5 = _closure1_slot12;
        var4 = {};
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/MainChannels.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 13143, 4697, 1297, 671, 3881, 12173, 13139, 12174, 13144, 13145, 3679, 13220, 13221, 13299, 11577, 2]);