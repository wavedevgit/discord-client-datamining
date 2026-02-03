// modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var7 = var3.StyleSheet;
    var _closure1_slot6 = var7;
    var3 = var3.Pressable;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ComponentActions;
    var _closure1_slot8 = var7;
    var3 = var3.ME;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var12.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var15 = 'MainTabsNavigatorPanel';
    var16 = var7;
    var3 = new var16[var8](var15, var14);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var9 = {};
    var11 = 7;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var11;
    var3.containerBackground = var9;
    var9 = {};
    var9.flex = var10;
    var3.tabsContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function MainTabsNavigatorPanelTsx1(){const{translateX}=this.__closure;return{opacity:translateX.get()>0?1:0};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun100629: for (var _fun100629_ip = 0;;) switch (_fun100629_ip) {
            case 0:
                var1 = _closure1_slot13;
                var3 = undefined;
                var26 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var1 = var2[var1];
                var4 = var7.bind(var3)(var1);
                var1 = var4.useNavigation;
                var1 = var1.bind(var4)();
                var _closure2_slot0 = var1;
                var5 = _closure1_slot1;
                var4 = 9;
                var4 = var2[var4];
                var4 = var5.bind(var3)(var4);
                var6 = var4.bind(var3)();
                var4 = var6.isChatBesideChannelList;
                var17 = var6.isChatLockedOpen;
                var _closure2_slot1 = var17;
                var6 = 10;
                var6 = var2[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.useDrawerWidth;
                var12 = var6.bind(var7)();
                var _closure2_slot2 = var12;
                var6 = 11;
                var6 = var2[var6];
                var6 = var5.bind(var3)(var6);
                var16 = var6.bind(var3)();
                var14 = _closure1_slot4;
                var6 = var14.useRef;
                var6 = var6.bind(var14)(var17);
                var _closure2_slot3 = var6;
                var6 = var14.useRef;
                var9 = false;
                var6 = var6.bind(var14)(var9);
                var _closure2_slot4 = var6;
                var8 = var14.useLayoutEffect;
                var7 = new Array(1);
                var7[0] = var17;
                var6 = function() { // Environment: var0
                    _fun100630: for (var _fun100630_ip = 0;;) switch (_fun100630_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = _closure2_slot1;
                            if (!(var2 !== var1)) {
                                _fun100630_ip = 96;
                                continue _fun100630
                            }
                        case 20:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot1;
                            var2.current = var1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            if (var1) {
                                _fun100630_ip = 74;
                                continue _fun100630
                            }
                        case 62:
                            var1 = var2.convertLandscapeToPortraitScreens;
                            var1 = var1.bind(var2)();
                            _fun100630_ip = 84;
                            continue _fun100630;
                        case 74:
                            var1 = var2.convertPortraitToLandscapeScreens;
                            var1 = var1.bind(var2)();
                        case 84:
                            var1 = _closure2_slot4;
                            var0 = true;
                            var1.current = var0;
                        case 96:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var14)(var6, var7);
                var15 = 13;
                var2 = var2[var15];
                var2 = var5.bind(var3)(var2);
                var23 = var2.bind(var3)(var1);
                var _closure2_slot5 = var23;
                var5 = var14.useState;
                var2 = function() { // Environment: var0
                    _fun100631: for (var _fun100631_ip = 0;;) switch (_fun100631_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = 0;
                            var0 = var1[var0];
                            var1 = null;
                            var2 = var1 == var0;
                            var3 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun100631_ip = 31;
                                continue _fun100631
                            }
                        case 26:
                            var1 = var0.type;
                        case 31:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 13;
                            var0 = var4[var0];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.ChannelScreenType;
                            var0 = var0.DEFAULT;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var2 = var5.bind(var14)(var2);
                var18 = _closure1_slot3;
                var10 = 2;
                var5 = var18.bind(var3)(var2, var10);
                var13 = 0;
                var22 = var5[var13];
                var _closure2_slot6 = var22;
                var2 = 1;
                var5 = var5[var2];
                var _closure2_slot7 = var5;
                var7 = var23[var13];
                var _closure2_slot8 = var7;
                var5 = var14.useRef;
                var5 = var5.bind(var14)(var7);
                var _closure2_slot9 = var5;
                var8 = var14.useEffect;
                var6 = new Array(1);
                var6[0] = var7;
                var5 = function() { // Environment: var0
                    var1 = _closure2_slot9;
                    var0 = _closure2_slot8;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var8.bind(var14)(var5, var6);
                var8 = var14.useCallback;
                var6 = new Array(1);
                var6[0] = var1;
                var5 = function() { // Environment: var0
                    _fun100633: for (var _fun100633_ip = 0;;) switch (_fun100633_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot0;
                            var2 = var3.getState;
                            var10 = var2.bind(var3)();
                            var9 = var10.index;
                            var2 = var10.routes;
                            var2 = var2[var9];
                            var8 = null;
                            var3 = var8 == var2;
                            var4 = undefined;
                            if (var3) {
                                _fun100633_ip = 61;
                                continue _fun100633
                            }
                        case 56:
                            var4 = var2.name;
                        case 61:
                            var2 = 0;
                            var7 = 'channel';
                            var6 = 1;
                            var5 = 0;
                            var3 = 0;
                            if (!(var7 === var4)) {
                                _fun100633_ip = 120;
                                continue _fun100633
                            }
                        case 78:
                            var11 = var5 + var6;
                            var9 = var9 - var6;
                            var4 = var10.routes;
                            var12 = var4[var9];
                            var13 = var8 == var12;
                            var4 = undefined;
                            if (var13) {
                                _fun100633_ip = 110;
                                continue _fun100633
                            }
                        case 105:
                            var4 = var12.name;
                        case 110:
                            var5 = var11;
                            var3 = var5;
                            if (var7 === var4) {
                                _fun100633_ip = 78;
                                continue _fun100633
                            }
                        case 120:
                            if (!(var3 > var2)) {
                                _fun100633_ip = 139;
                                continue _fun100633
                            }
                        case 124:
                            var2 = _closure2_slot0;
                            var1 = var2.pop;
                            var1 = var1.bind(var2)(var3);
                        case 139:
                            return var0;
                    }
                };
                var8 = var8.bind(var14)(var5, var6);
                var _closure2_slot10 = var8;
                var6 = var14.useState;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isActiveTabsGuilds;
                    var3 = _closure2_slot0;
                    var0 = var3.getState;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var14)(var5);
                var6 = var18.bind(var3)(var5, var10);
                var5 = var6[var13];
                var _closure2_slot11 = var5;
                var6 = var6[var2];
                var _closure2_slot12 = var6;
                var19 = var14.useState;
                var6 = function() { // Environment: var0
                    var0 = _closure2_slot11;
                    return var0;
                };
                var6 = var19.bind(var14)(var6);
                var6 = var18.bind(var3)(var6, var10);
                var18 = var6[var13];
                var6 = var6[var2];
                var _closure2_slot13 = var6;
                var19 = var14.useEffect;
                var10 = new Array(1);
                var10[0] = var1;
                var6 = function() { // Environment: var0
                    var4 = function arg0() {
                        var2 = _closure2_slot12;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.isActiveTabsGuilds;
                        var1 = arg0;
                        var1 = var1.data;
                        var1 = var1.state;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var4;
                    var3 = _closure2_slot0;
                    var2 = var3.addListener;
                    var1 = 'state';
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot0;
                        var2 = var3.removeListener;
                        var1 = _closure3_slot0;
                        var0 = 'state';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var6 = var19.bind(var14)(var6, var10);
                var10 = var14.useEffect;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure2_slot13;
                    var1 = _closure2_slot11;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var10.bind(var14)(var5, var6);
                if (!var18) {
                    _fun100629_ip = 470;
                    continue _fun100629
                }
            case 467:
                var18 = var4;
            case 470:
                var _closure2_slot14 = var18;
                var10 = _closure1_slot4;
                var4 = var10.useRef;
                var4 = var4.bind(var10)(var9);
                var _closure2_slot15 = var4;
                var5 = var10.useCallback;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var8;
                var1 = function(arg0) { // Environment: var0
                    _fun100640: for (var _fun100640_ip = 0;;) switch (_fun100640_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot7;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot15;
                            var3 = false;
                            var4.current = var3;
                            if (var2) {
                                _fun100640_ip = 45;
                                continue _fun100640
                            }
                        case 32:
                            var2 = _closure2_slot10;
                            var2 = var2.bind(var0)();
                            _fun100640_ip = 178;
                            continue _fun100640;
                        case 45:
                            var2 = _closure2_slot9;
                            var3 = var2.current;
                            var2 = null;
                            var2 = var2 != var3;
                            if (!var2) {
                                _fun100640_ip = 115;
                                continue _fun100640
                            }
                        case 63:
                            var5 = _closure2_slot0;
                            var3 = var5.getState;
                            var3 = var3.bind(var5)();
                            var4 = var3.routes;
                            var3 = var5.getState;
                            var3 = var3.bind(var5)();
                            var3 = var3.index;
                            var3 = var4[var3];
                            var4 = var3.name;
                            var3 = 'channel';
                            var2 = var3 !== var4;
                        case 115:
                            if (!var2) {
                                _fun100640_ip = 178;
                                continue _fun100640
                            }
                        case 118:
                            var3 = _closure2_slot15;
                            var2 = true;
                            var3.current = var2;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.transitionToChannel;
                            var1 = _closure2_slot9;
                            var1 = var1.current;
                            var1 = var1.channelId;
                            var1 = var2.bind(var3)(var1);
                        case 178:
                            return var0;
                    }
                };
                var6 = var5.bind(var10)(var1, var4);
                var5 = var10.useCallback;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 15;
                    var4 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var4);
                    var5 = var4.ComponentDispatch;
                    var4 = var5.dispatch;
                    var1 = _closure1_slot8;
                    var1 = var1.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                    var1 = var4.bind(var5)(var1);
                    var1 = 16;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dismissKeyboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var5 = var5.bind(var10)(var4, var1);
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 17;
                var1 = var10[var1];
                var4 = var4.bind(var3)(var1);
                var1 = {};
                var10 = var18;
                if (!var18) {
                    _fun100629_ip = 575;
                    continue _fun100629
                }
            case 572:
                var10 = var17;
            case 575:
                var10 = !var10;
                if (!var10) {
                    _fun100629_ip = 587;
                    continue _fun100629
                }
            case 581:
                var14 = null;
                var10 = var14 != var7;
            case 587:
                if (!var10) {
                    _fun100629_ip = 628;
                    continue _fun100629
                }
            case 590:
                var19 = var7.type;
                var20 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var15];
                var14 = var20.bind(var3)(var14);
                var14 = var14.ChannelScreenType;
                var14 = var14.FALLBACK_RENDERED;
                var10 = var19 !== var14;
            case 628:
                var1.canDrag = var10;
                var1.onVisibilityChange = var6;
                var1.onDragStart = var5;
                var5 = var23[var13];
                var10 = null;
                var14 = var10 == var5;
                var6 = undefined;
                if (var14) {
                    _fun100629_ip = 663;
                    continue _fun100629
                }
            case 658:
                var6 = var5.type;
            case 663:
                var14 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var15];
                var5 = var14.bind(var3)(var5);
                var5 = var5.ChannelScreenType;
                var5 = var5.DEFAULT;
                var5 = var6 === var5;
                var1.startShown = var5;
                var5 = undefined;
                if (!var18) {
                    _fun100629_ip = 709;
                    continue _fun100629
                }
            case 706:
                var5 = var12;
            case 709:
                var1.openWidth = var5;
                var5 = var4.bind(var3)(var1);
                var6 = var5.gesture;
                var4 = var5.panelGestureContext;
                var20 = var5.isDragging;
                var21 = var5.translateX;
                var _closure2_slot16 = var21;
                var1 = var5.movePanel;
                var _closure2_slot17 = var1;
                var19 = var5.maxWidth;
                var _closure2_slot18 = var19;
                var5 = var5.isDraggingRef;
                var _closure2_slot19 = var5;
                var14 = _closure1_slot4;
                var24 = var14.useEffect;
                var15 = new Array(2);
                var15[0] = var18;
                var15[1] = var12;
                var12 = function() { // Environment: var0
                    var3 = _closure1_slot12;
                    var2 = var3.log;
                    var1 = {};
                    var4 = _closure2_slot14;
                    var1.isNavigatorPanelsBesideChannelList = var4;
                    var0 = _closure2_slot2;
                    var1.drawerWidth = var0;
                    var0 = 'Chat Layout Changed';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var12 = var24.bind(var14)(var12, var15);
                var12 = {};
                var12.handleExit = var8;
                var12.maxWidth = var19;
                var12.movePanel = var1;
                var12.screens = var23;
                var12.firstScreen = var7;
                var _closure2_slot20 = var12;
                var8 = var14.useRef;
                var8 = var8.bind(var14)(var12);
                var _closure2_slot21 = var8;
                var12 = var14.useEffect;
                var8 = function() { // Environment: var0
                    var1 = _closure2_slot21;
                    var0 = _closure2_slot20;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var8 = var12.bind(var14)(var8);
                var12 = var14.useEffect;
                var8 = var10 == var7;
                var15 = undefined;
                if (var8) {
                    _fun100629_ip = 892;
                    continue _fun100629
                }
            case 887:
                var15 = var7.type;
            case 892:
                var8 = new Array(3);
                var8[0] = var15;
                var8[1] = var21;
                var8[2] = var5;
                var5 = function() { // Environment: var0
                    _fun100644: for (var _fun100644_ip = 0;;) switch (_fun100644_ip) {
                        case 0:
                            var1 = _closure2_slot19;
                            var1 = var1.current;
                            if (var1) {
                                _fun100644_ip = 289;
                                continue _fun100644
                            }
                        case 18:
                            var1 = _closure2_slot21;
                            var1 = var1.current;
                            var4 = var1.handleExit;
                            var6 = var1.maxWidth;
                            var8 = var1.movePanel;
                            var5 = var1.screens;
                            var2 = _closure2_slot8;
                            var1 = null;
                            var1 = var1 == var2;
                            var2 = undefined;
                            var7 = undefined;
                            if (var1) {
                                _fun100644_ip = 77;
                                continue _fun100644
                            }
                        case 68:
                            var1 = _closure2_slot8;
                            var7 = var1.type;
                        case 77:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 13;
                            var1 = var10[var1];
                            var1 = var9.bind(var2)(var1);
                            var1 = var1.ChannelScreenType;
                            var1 = var1.DEFAULT;
                            var1 = var7 === var1;
                            var7 = var5.length;
                            var5 = 2;
                            if (!(!(var7 >= var5))) {
                                _fun100644_ip = 254;
                                continue _fun100644
                            }
                        case 131:
                            if (var1) {
                                _fun100644_ip = 186;
                                continue _fun100644
                            }
                        case 134:
                            var12 = 0;
                            var15 = undefined;
                            var14 = false;
                            var13 = false;
                            var11 = false;
                            var5 = var15[var8](var14, var13, var12, var11, var10);
                            if (!var5) {
                                _fun100644_ip = 289;
                                continue _fun100644
                            }
                        case 154:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 16;
                            var3 = var7[var3];
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.dismissKeyboard;
                            var3 = var3.bind(var5)();
                            _fun100644_ip = 289;
                            continue _fun100644;
                        case 186:
                            var3 = _closure2_slot15;
                            var3 = var3.current;
                            if (var3) {
                                _fun100644_ip = 214;
                                continue _fun100644
                            }
                        case 198:
                            var13 = false;
                            var12 = 0;
                            var15 = undefined;
                            var14 = true;
                            var11 = true;
                            var3 = var15[var8](var14, var13, var12, var11, var10);
                            _fun100644_ip = 289;
                            continue _fun100644;
                        case 214:
                            var5 = _closure2_slot15;
                            var3 = false;
                            var5.current = var3;
                            var5 = _closure2_slot16;
                            var3 = var5.get;
                            var3 = var3.bind(var5)();
                            var3 = var3 === var6;
                            if (!var3) {
                                _fun100644_ip = 250;
                                continue _fun100644
                            }
                        case 246:
                            var3 = var4.bind(var2)();
                        case 250:
                            var3 = undefined;
                            return var3;
                        case 254:
                            var5 = _closure2_slot16;
                            var4 = var5.set;
                            var3 = 0;
                            if (var1) {
                                _fun100644_ip = 271;
                                continue _fun100644
                            }
                        case 268:
                            var3 = var6;
                        case 271:
                            var3 = var4.bind(var5)(var3);
                            var0 = _closure2_slot7;
                            var0 = var0.bind(var2)(var1);
                            var0 = undefined;
                            return var0;
                        case 289:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var12.bind(var14)(var5, var8);
                var12 = _closure1_slot4;
                var8 = var12.useEffect;
                var14 = var10 == var7;
                var5 = undefined;
                if (var14) {
                    _fun100629_ip = 944;
                    continue _fun100629
                }
            case 939:
                var5 = var7.channelId;
            case 944:
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    _fun100645: for (var _fun100645_ip = 0;;) switch (_fun100645_ip) {
                        case 0:
                            var0 = _closure2_slot21;
                            var0 = var0.current;
                            var1 = var0.firstScreen;
                            var6 = null;
                            var2 = var6 == var1;
                            var0 = undefined;
                            var3 = undefined;
                            if (var2) {
                                _fun100645_ip = 36;
                                continue _fun100645
                            }
                        case 31:
                            var3 = var1.type;
                        case 36:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 13;
                            var2 = var7[var2];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.ChannelScreenType;
                            var2 = var2.BACKGROUND_SAVED;
                            if (!(var3 === var2)) {
                                _fun100645_ip = 125;
                                continue _fun100645
                            }
                        case 75:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.preload;
                            var2 = var1.guildId;
                            if (!(var6 == var2)) {
                                _fun100645_ip = 114;
                                continue _fun100645
                            }
                        case 110:
                            var2 = _closure1_slot9;
                        case 114:
                            var1 = var1.channelId;
                            var1 = var3.bind(var4)(var2, var1);
                        case 125:
                            return var0;
                    }
                };
                var5 = var8.bind(var12)(var5, var7);
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var4 = _closure2_slot17;
                    var0 = undefined;
                    var8 = true;
                    var6 = 0;
                    var9 = undefined;
                    var7 = false;
                    var5 = false;
                    var1 = var9[var4](var8, var7, var6, var5, var4);
                    return var0;
                };
                var1 = var7.bind(var8)(var1, var5);
                var _closure2_slot22 = var1;
                var7 = var8.useMemo;
                var5 = new Array(4);
                var5[0] = var1;
                var5[1] = var22;
                var5[2] = var17;
                var5[3] = var18;
                var1 = function() { // Environment: var0
                    _fun100647: for (var _fun100647_ip = 0;;) switch (_fun100647_ip) {
                        case 0:
                            var2 = _closure2_slot14;
                            var0 = null;
                            if (!var2) {
                                _fun100647_ip = 73;
                                continue _fun100647
                            }
                        case 12:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (var2) {
                                _fun100647_ip = 73;
                                continue _fun100647
                            }
                        case 21:
                            var2 = _closure2_slot6;
                            var0 = null;
                            if (var2) {
                                _fun100647_ip = 73;
                                continue _fun100647
                            }
                        case 30:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var5 = _closure1_slot6;
                            var5 = var5.absoluteFill;
                            var2.style = var5;
                            var1 = _closure2_slot22;
                            var2.onPress = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 73:
                            return var0;
                    }
                };
                var15 = var7.bind(var8)(var1, var5);
                if (!var18) {
                    _fun100629_ip = 1043;
                    continue _fun100629
                }
            case 1040:
                if (var17) {
                    _fun100629_ip = 1048;
                    continue _fun100629
                }
            case 1043:
                var28 = !var22;
                _fun100629_ip = 1057;
                continue _fun100629;
            case 1048:
                var1 = var23.length;
                var28 = var1 <= var2;
            case 1057:
                var7 = _closure1_slot4;
                var5 = var7.useMemo;
                var2 = new Array(4);
                var2[0] = var17;
                var2[1] = var18;
                var2[2] = var19;
                var2[3] = var21;
                var1 = function() { // Environment: var0
                    _fun100648: for (var _fun100648_ip = 0;;) switch (_fun100648_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var0 = null;
                            if (!var1) {
                                _fun100648_ip = 76;
                                continue _fun100648
                            }
                        case 12:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure2_slot16;
                            var1.translateX = var6;
                            var6 = _closure2_slot18;
                            var1.maxWidth = var6;
                            var5 = _closure2_slot1;
                            var1.isChatLockedOpen = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 76:
                            return var0;
                    }
                };
                var14 = var5.bind(var7)(var1, var2);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var30 = 20;
                var1 = var7[var30];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun100649: for (var _fun100649_ip = 0;;) switch (_fun100649_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot16;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 0;
                            var2 = var2 > var1;
                            if (!var2) {
                                _fun100649_ip = 30;
                                continue _fun100649
                            }
                        case 27:
                            var1 = 1;
                        case 30:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var8 = {};
                var8.translateX = var21;
                var0.__closure = var8;
                var8 = 9628030376561.0;
                var0.__workletHash = var8;
                var8 = _closure1_slot14;
                var0.__initData = var8;
                var29 = var1.bind(var2)(var0);
                var1 = _closure1_slot1;
                var0 = 21;
                var0 = var7[var0];
                var2 = var1.bind(var3)(var0);
                var0 = 'channel_list_scrim';
                var27 = var2.bind(var3)(var0);
                var0 = 22;
                var0 = var7[var0];
                var8 = var5.bind(var3)(var0);
                var2 = var8.useYouBarEnabled;
                var0 = 'MainTabs';
                var25 = var2.bind(var8)(var0);
                var0 = 23;
                var0 = var7[var0];
                var2 = var5.bind(var3)(var0);
                var0 = var2.useIsCustomThemeActive;
                var24 = var0.bind(var2)();
                var2 = _closure1_slot10;
                var0 = 24;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 25;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot5;
                var6 = {};
                var31 = var26.container;
                var12 = new Array(2);
                var12[0] = var31;
                var24 = !var24;
                if (!var24) {
                    _fun100629_ip = 1340;
                    continue _fun100629
                }
            case 1334:
                var24 = var26.containerBackground;
            case 1340:
                var12[1] = var24;
                var6.style = var12;
                var6.collapsable = var9;
                var24 = _closure1_slot11;
                var12 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var30];
                var9 = var12.bind(var3)(var9);
                var12 = var9.View;
                var9 = {};
                var30 = var26.tabsContainer;
                var26 = new Array(2);
                var26[0] = var30;
                var26[1] = var29;
                var9.style = var26;
                var26 = !var28;
                if (!var28) {
                    _fun100629_ip = 1411;
                    continue _fun100629
                }
            case 1409:
                var26 = undefined;
            case 1411:
                var9.accessibilityElementsHidden = var26;
                var26 = 'no-hide-descendants';
                if (!var28) {
                    _fun100629_ip = 1427;
                    continue _fun100629
                }
            case 1425:
                var26 = undefined;
            case 1427:
                var9.importantForAccessibility = var26;
                var28 = _closure1_slot10;
                var26 = _closure1_slot1;
                var30 = _closure1_slot2;
                if (var25) {
                    _fun100629_ip = 1456;
                    continue _fun100629
                }
            case 1447:
                var25 = 27;
                var25 = var30[var25];
                _fun100629_ip = 1463;
                continue _fun100629;
            case 1456:
                var29 = 26;
                var25 = var30[var29];
            case 1463:
                var26 = var26.bind(var3)(var25);
                var25 = {};
                var26 = var28.bind(var3)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = undefined;
                if (!var27) {
                    _fun100629_ip = 1537;
                    continue _fun100629
                }
            case 1489:
                var29 = _closure1_slot10;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var27 = 28;
                var27 = var30[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.MainTabsContentScrim;
                var27 = {};
                var27.translateX = var21;
                var27.maxWidth = var19;
                var26 = var29.bind(var3)(var28, var27);
            case 1537:
                var25[1] = var26;
                var9.children = var25;
                var12 = var24.bind(var3)(var12, var9);
                var9 = new Array(3);
                var9[0] = var12;
                var25 = _closure1_slot10;
                var24 = _closure1_slot1;
                var26 = _closure1_slot2;
                var12 = 29;
                var12 = var26[var12];
                var24 = var24.bind(var3)(var12);
                var12 = {};
                var12 = var25.bind(var3)(var24, var12);
                var9[1] = var12;
                var12 = var23.length;
                var12 = var12 > var13;
                var10 = null;
                if (!var12) {
                    _fun100629_ip = 1717;
                    continue _fun100629
                }
            case 1609:
                var13 = _closure1_slot10;
                var12 = _closure1_slot1;
                var24 = _closure1_slot2;
                var11 = 30;
                var11 = var24[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.screens = var23;
                if (var22) {
                    _fun100629_ip = 1655;
                    continue _fun100629
                }
            case 1643:
                var23 = var18;
                if (!var23) {
                    _fun100629_ip = 1652;
                    continue _fun100629
                }
            case 1649:
                var23 = var17;
            case 1652:
                var22 = var23;
            case 1655:
                var11.screenStackActive = var22;
                var11.translateX = var21;
                var11.isDragging = var20;
                var11.maxWidth = var19;
                var19 = !var18;
                var11.shouldFreeze = var19;
                var11.focusChatPressableComponent = var15;
                var15 = undefined;
                if (!var18) {
                    _fun100629_ip = 1701;
                    continue _fun100629
                }
            case 1693:
                var15 = undefined;
                if (!var17) {
                    _fun100629_ip = 1701;
                    continue _fun100629
                }
            case 1698:
                var15 = var16;
            case 1701:
                var11.firstScreenWidth = var15;
                var11.firstScreenFrame = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 1717:
                var9[2] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 3, 1297, 671, 1470, 3922, 9867, 9866, 13112, 13113, 3943, 1229, 3718, 13114, 3945, 13116, 3720, 4592, 12154, 8726, 13117, 4961, 13118, 13607, 13638, 13639, 13640, 2]);