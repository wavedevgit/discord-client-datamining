// modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Pressable;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.getScaledSearchBarHeight;
    var _closure1_slot5 = var9;
    var3 = var3.VIEWABILITY_CONFIG;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useYouBarTotalHeight;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot9 = var9;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = var7.createAnimatedComponent;
    var3 = var3.bind(var7)(var8);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun101890: for (var _fun101890_ip = 0;;) switch (_fun101890_ip) {
            case 0:
                var6 = arg0;
                var0 = {};
                var1 = {
                    'position': 'absolute',
                    'right': '50%',
                    'zIndex': 1,
                    'marginVertical': 12,
                    'marginHorizontal': 0,
                    'paddingRight': 9,
                    'paddingLeft': null,
                    'paddingVertical': 4,
                    'minHeight': 24,
                    'flexDirection': 'row',
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'borderRadius': null,
                    'backgroundColor': null,
                    'elevation': 4
                };
                var8 = 1;
                var4 = 9;
                var3 = 5;
                if (!var6) {
                    _fun101890_ip = 34;
                    continue _fun101890
                }
            case 31:
                var3 = 6;
            case 34:
                var1.paddingLeft = var3;
                var9 = 4;
                var10 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = var5[var4];
                var5 = undefined;
                var7 = var10.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var4];
                var7 = var10.bind(var5)(var7);
                if (var6) {
                    _fun101890_ip = 128;
                    continue _fun101890
                }
            case 101:
                var10 = var7.colors;
                var6 = arg1;
                if (var6) {
                    _fun101890_ip = 120;
                    continue _fun101890
                }
            case 112:
                var6 = var10.BACKGROUND_SURFACE_HIGHEST;
                _fun101890_ip = 126;
                continue _fun101890;
            case 120:
                var6 = var10.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
            case 126:
                _fun101890_ip = 139;
                continue _fun101890;
            case 128:
                var7 = var7.unsafe_rawColors;
                var6 = var7.RED_400;
            case 139:
                var1.backgroundColor = var6;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var10 = var6[var4];
                var10 = var7.bind(var5)(var10);
                var10 = var10.colors;
                var10 = var10.BLACK;
                var1.shadowColor = var10;
                var10 = {
                    'width': 0,
                    'height': 1
                };
                var1.shadowOffset = var10;
                var10 = 0.08;
                var1.shadowOpacity = var10;
                var1.shadowRadius = var9;
                var1.borderWidth = var8;
                var4 = var6[var4];
                var4 = var7.bind(var5)(var4);
                var4 = var4.colors;
                var4 = var4.BORDER_SUBTLE;
                var1.borderColor = var4;
                var0.unreadBar = var1;
                var1 = {
                    'textTransform': 'uppercase',
                    'marginTop': null,
                    'marginLeft': 2,
                    'marginRight': 0
                };
                var4 = _closure1_slot0;
                var3 = 10;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                var2 = 0;
                if (!var3) {
                    _fun101890_ip = 299;
                    continue _fun101890
                }
            case 293:
                var2 = -1;
            case 299:
                var1.marginTop = var2;
                var0.text = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}";
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun101891: for (var _fun101891_ip = 0;;) switch (_fun101891_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.position;
                var _closure2_slot0 = var1;
                var15 = var3.shown;
                var _closure2_slot1 = var15;
                var5 = var3.onPress;
                var _closure2_slot2 = var5;
                var4 = var3.isMention;
                var _closure2_slot3 = var4;
                var22 = var3.guildChannelsListUnreadBarInsetEnd;
                var _closure2_slot4 = var22;
                var28 = var3.scrollPosition;
                var _closure2_slot5 = var28;
                var27 = var3.listPaddingTop;
                var _closure2_slot6 = var27;
                var2 = var3.endReachedCounter;
                var _closure2_slot7 = var2;
                var32 = var3.headerHeight;
                var _closure2_slot8 = var32;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var9 = _closure1_slot4;
                var7 = var9.useState;
                var6 = null;
                var6 = var6 != var4;
                if (!var6) {
                    _fun101891_ip = 161;
                    continue _fun101891
                }
            case 158:
                var6 = var4;
            case 161:
                var6 = var7.bind(var9)(var6);
                var30 = _closure1_slot3;
                var29 = 2;
                var6 = var30.bind(var3)(var6, var29);
                var25 = 0;
                var10 = var6[var25];
                _closure2_slot9 = var10;
                var14 = 1;
                var6 = var6[var14];
                _closure2_slot10 = var6;
                var24 = _closure1_slot4;
                var7 = var24.useEffect;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    _fun101892: for (var _fun101892_ip = 0;;) switch (_fun101892_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101892_ip = 28;
                                continue _fun101892
                            }
                        case 13:
                            var2 = _closure2_slot10;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var7.bind(var24)(var4, var6);
                var6 = _closure1_slot1;
                var19 = _closure1_slot2;
                var4 = 11;
                var4 = var19[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.bind(var3)();
                var4 = _closure1_slot12;
                var11 = var4.bind(var3)(var10, var6);
                var18 = _closure1_slot0;
                var6 = 12;
                var4 = var19[var6];
                var7 = var18.bind(var3)(var4);
                var4 = var7.useFontScale;
                var26 = var4.bind(var7)();
                var4 = 13;
                var4 = var19[var4];
                var7 = var18.bind(var3)(var4);
                var4 = var7.scaleTextLineHeight;
                var9 = 'text-xs/bold';
                var7 = var4.bind(var7)(var9, var26);
                var4 = 8;
                var12 = var7 + var4;
                var21 = 7;
                var4 = var19[var21];
                var7 = var18.bind(var3)(var4);
                var4 = var7.useSharedValue;
                var16 = var4.bind(var7)(var25);
                _closure2_slot11 = var16;
                var4 = var19[var21];
                var7 = var18.bind(var3)(var4);
                var4 = var7.useSharedValue;
                var23 = var4.bind(var7)(var12);
                _closure2_slot12 = var23;
                var12 = var24.useCallback;
                var7 = new Array(2);
                var7[0] = var16;
                var7[1] = var23;
                var4 = function(arg0) { // Environment: var0
                    _fun101893: for (var _fun101893_ip = 0;;) switch (_fun101893_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.nativeEvent;
                            var0 = var0.layout;
                            var4 = var0.width;
                            var0 = 0;
                            if (!(var0 !== var4)) {
                                _fun101893_ip = 43;
                                continue _fun101893
                            }
                        case 26:
                            var3 = _closure2_slot11;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4);
                        case 43:
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var2 = var1.height;
                            if (!(var0 !== var2)) {
                                _fun101893_ip = 81;
                                continue _fun101893
                            }
                        case 64:
                            var1 = _closure2_slot12;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var12.bind(var24)(var4, var7);
                var13 = var24.useEffect;
                var12 = new Array(3);
                var12[0] = var15;
                var12[1] = var10;
                var12[2] = var1;
                var7 = function() { // Environment: var0
                    _fun101894: for (var _fun101894_ip = 0;;) switch (_fun101894_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun101894_ip = 76;
                                continue _fun101894
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackWithMetadata;
                            var0 = _closure1_slot7;
                            var1 = var0.CHANNEL_LIST_UNREAD_BADGE_VIEWED;
                            var0 = {};
                            var5 = _closure2_slot9;
                            var0.is_mention = var5;
                            var4 = _closure2_slot0;
                            var0.position = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var13.bind(var24)(var7, var12);
                var12 = var24.useCallback;
                var7 = new Array(3);
                var7[0] = var5;
                var7[1] = var1;
                var7[2] = var10;
                var5 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.trackWithMetadata;
                    var1 = _closure1_slot7;
                    var3 = var1.CHANNEL_LIST_UNREAD_BADGE_CLICKED;
                    var2 = {};
                    var6 = _closure2_slot9;
                    var2.is_mention = var6;
                    var6 = _closure2_slot0;
                    var2.position = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var13 = var12.bind(var24)(var5, var7);
                var5 = var19[var21];
                var7 = var18.bind(var3)(var5);
                var5 = var7.useSharedValue;
                var20 = var5.bind(var7)(var25);
                _closure2_slot13 = var20;
                var12 = var24.useCallback;
                var7 = new Array(1);
                var7[0] = var20;
                var5 = function() { // Environment: var0
                    var2 = _closure2_slot13;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var12 = var12.bind(var24)(var5, var7);
                var17 = var24.useCallback;
                var7 = new Array(1);
                var7[0] = var20;
                var5 = function() { // Environment: var0
                    var2 = _closure2_slot13;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var7 = var17.bind(var24)(var5, var7);
                var5 = _closure1_slot8;
                var5 = var5.bind(var3)();
                _closure2_slot14 = var5;
                var31 = var24.useMemo;
                var17 = new Array(3);
                var17[0] = var32;
                var17[1] = var1;
                var17[2] = var5;
                var5 = function() { // Environment: var0
                    _fun101898: for (var _fun101898_ip = 0;;) switch (_fun101898_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = 'bottom';
                            if (!(var0 !== var1)) {
                                _fun101898_ip = 27;
                                continue _fun101898
                            }
                        case 15:
                            var0 = {};
                            var1 = _closure2_slot8;
                            var0.top = var1;
                            _fun101898_ip = 40;
                            continue _fun101898;
                        case 27:
                            var1 = {};
                            var2 = _closure2_slot14;
                            var1.bottom = var2;
                            var0 = var1;
                        case 40:
                            return var0;
                    }
                };
                var17 = var31.bind(var24)(var5, var17);
                var5 = _closure1_slot5;
                var26 = var5.bind(var3)(var26);
                _closure2_slot15 = var26;
                var31 = var24.useState;
                var5 = false;
                var5 = var31.bind(var24)(var5);
                var5 = var30.bind(var3)(var5, var29);
                var25 = var5[var25];
                _closure2_slot16 = var25;
                var5 = var5[var14];
                _closure2_slot17 = var5;
                var14 = var24.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    _fun101899: for (var _fun101899_ip = 0;;) switch (_fun101899_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101899_ip = 26;
                                continue _fun101899
                            }
                        case 13:
                            var2 = _closure2_slot17;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 26:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var14.bind(var24)(var2, var5);
                var14 = var24.useCallback;
                var5 = function() { // Environment: var0
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = _closure1_slot6;
                    var1 = var0.minimumViewTime;
                    var0 = 1;
                    var2 = var1 + var0;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot17;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var2 = new Array(0);
                var24 = var14.bind(var24)(var5, var2);
                _closure2_slot18 = var24;
                var2 = var19[var21];
                var5 = var18.bind(var3)(var2);
                var2 = var5.useAnimatedStyle;
                var0 = function() {
                    _fun101902: for (var _fun101902_ip = 0;;) switch (_fun101902_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun101902_ip = 90;
                                continue _fun101902
                            }
                        case 10:
                            var2 = _closure2_slot0;
                            var1 = 'top';
                            if (!(var1 !== var2)) {
                                _fun101902_ip = 31;
                                continue _fun101902
                            }
                        case 22:
                            var1 = _closure2_slot16;
                            var1 = !var1;
                            _fun101902_ip = 87;
                            continue _fun101902;
                        case 31:
                            var2 = _closure2_slot5;
                            var4 = null;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun101902_ip = 52;
                                continue _fun101902
                            }
                        case 44:
                            var3 = _closure2_slot6;
                            var2 = var4 != var3;
                        case 52:
                            if (!var2) {
                                _fun101902_ip = 84;
                                continue _fun101902
                            }
                        case 55:
                            var4 = _closure2_slot5;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var5 = _closure2_slot6;
                            var3 = _closure2_slot15;
                            var3 = var5 + var3;
                            var2 = var4 > var3;
                        case 84:
                            var1 = var2;
                        case 87:
                            var0 = var1;
                        case 90:
                            var1 = _closure2_slot16;
                            if (!var1) {
                                _fun101902_ip = 140;
                                continue _fun101902
                            }
                        case 97:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot18;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
                        case 140:
                            var2 = _closure2_slot12;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 12;
                            var3 = var2 - var1;
                            var4 = _closure2_slot0;
                            var2 = 'bottom';
                            if (var0) {
                                _fun101902_ip = 190;
                                continue _fun101902
                            }
                        case 171:
                            var1 = -1;
                            if (!(var2 === var4)) {
                                _fun101902_ip = 184;
                                continue _fun101902
                            }
                        case 181:
                            var1 = 1;
                        case 184:
                            var12 = var3 * var1;
                            _fun101902_ip = 230;
                            continue _fun101902;
                        case 190:
                            var1 = 0;
                            if (!(var2 === var4)) {
                                _fun101902_ip = 227;
                                continue _fun101902
                            }
                        case 196:
                            var4 = _closure2_slot4;
                            var2 = null;
                            var2 = var2 != var4;
                            var1 = 0;
                            if (!var2) {
                                _fun101902_ip = 227;
                                continue _fun101902
                            }
                        case 211:
                            var3 = _closure2_slot4;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = -var2;
                        case 227:
                            var12 = var1;
                        case 230:
                            var1 = 0;
                            var13 = 0;
                            if (!var0) {
                                _fun101902_ip = 240;
                                continue _fun101902
                            }
                        case 237:
                            var13 = 1;
                        case 240:
                            var2 = _closure2_slot11;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var0 = var0 > var1;
                            var4 = 1;
                            if (!var0) {
                                _fun101902_ip = 300;
                                continue _fun101902
                            }
                        case 263:
                            var1 = _closure2_slot11;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = 5;
                            var1 = var1 + var0;
                            var2 = _closure2_slot11;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var4 = var1 / var0;
                        case 300:
                            var0 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 15;
                            var1 = var9[var5];
                            var7 = undefined;
                            var11 = var8.bind(var7)(var1);
                            var6 = var11.withSpring;
                            var3 = 16;
                            var1 = var9[var3];
                            var1 = var8.bind(var7)(var1);
                            var2 = var1.springStandard;
                            var1 = 'animate-always';
                            var1 = var6.bind(var11)(var13, var2, var1);
                            var0.opacity = var1;
                            var2 = {};
                            var1 = var9[var5];
                            var11 = var8.bind(var7)(var1);
                            var6 = var11.withSpring;
                            var1 = var9[var3];
                            var1 = var8.bind(var7)(var1);
                            var1 = var1.springStandard;
                            var1 = var6.bind(var11)(var12, var1);
                            var2.translateY = var1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var11 = _closure2_slot11;
                            var6 = var11.get;
                            var11 = var6.bind(var11)();
                            var6 = 2;
                            var6 = var11 / var6;
                            var2.translateX = var6;
                            var1[1] = var2;
                            var2 = {};
                            var5 = var9[var5];
                            var6 = var8.bind(var7)(var5);
                            var5 = var6.withSpring;
                            var11 = 7;
                            var11 = var9[var11];
                            var13 = var8.bind(var7)(var11);
                            var12 = var13.interpolate;
                            var11 = _closure2_slot13;
                            var10 = var11.get;
                            var11 = var10.bind(var11)();
                            var10 = [1];
                            var10[1] = var4;
                            var4 = [0, 1];
                            var4 = var12.bind(var13)(var11, var4, var10);
                            var3 = var9[var3];
                            var3 = var8.bind(var7)(var3);
                            var3 = var3.ON_PRESS_SPRING;
                            var3 = var5.bind(var6)(var4, var3);
                            var2.scale = var3;
                            var1[2] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var14 = {};
                var14.shown = var15;
                var14.position = var1;
                var14.scrollPosition = var28;
                var14.listPaddingTop = var27;
                var14.searchBarHeight = var26;
                var14.justReachedEnd = var25;
                var25 = var19[var21];
                var25 = var18.bind(var3)(var25);
                var25 = var25.runOnJS;
                var14.runOnJS = var25;
                var14.resetReachedEnd = var24;
                var14.height = var23;
                var14.MARGIN = var6;
                var14.guildChannelsListUnreadBarInsetEnd = var22;
                var14.width = var16;
                var16 = 15;
                var16 = var19[var16];
                var16 = var18.bind(var3)(var16);
                var16 = var16.withSpring;
                var14.withSpring = var16;
                var16 = 16;
                var22 = var19[var16];
                var22 = var18.bind(var3)(var22);
                var22 = var22.springStandard;
                var14.springStandard = var22;
                var21 = var19[var21];
                var21 = var18.bind(var3)(var21);
                var21 = var21.interpolate;
                var14.interpolate = var21;
                var14.pressed = var20;
                var16 = var19[var16];
                var16 = var18.bind(var3)(var16);
                var16 = var16.ON_PRESS_SPRING;
                var14.ON_PRESS_SPRING = var16;
                var0.__closure = var14;
                var14 = 978162815161.0;
                var0.__workletHash = var14;
                var14 = _closure1_slot13;
                var0.__initData = var14;
                var16 = var2.bind(var5)(var0);
                if (var10) {
                    _fun101891_ip = 992;
                    continue _fun101891
                }
            case 928:
                var0 = 'bottom';
                if (!(var0 !== var1)) {
                    _fun101891_ip = 964;
                    continue _fun101891
                }
            case 936:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.ArrowSmallUpIcon;
                _fun101891_ip = 990;
                continue _fun101891;
            case 964:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 18;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.ArrowSmallDownIcon;
            case 990:
                _fun101891_ip = 1018;
                continue _fun101891;
            case 992:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 17;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.AtIcon;
            case 1018:
                var1 = _closure1_slot9;
                var0 = {};
                var14 = _closure1_slot1;
                var18 = _closure1_slot2;
                var5 = 9;
                var5 = var18[var5];
                var14 = var14.bind(var3)(var5);
                if (var10) {
                    _fun101891_ip = 1060;
                    continue _fun101891
                }
            case 1047:
                var5 = var14.colors;
                var5 = var5.TEXT_BRAND;
                _fun101891_ip = 1071;
                continue _fun101891;
            case 1060:
                var14 = var14.unsafe_rawColors;
                var5 = var14.WHITE;
            case 1071:
                var0.color = var5;
                var5 = 'xxs';
                var0.size = var5;
                var5 = var1.bind(var3)(var2, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var0 = {};
                var18 = var11.unreadBar;
                var14 = new Array(3);
                var14[0] = var18;
                var14[1] = var17;
                var14[2] = var16;
                var0.style = var14;
                var14 = 'none';
                if (!var15) {
                    _fun101891_ip = 1136;
                    continue _fun101891
                }
            case 1132:
                var14 = 'auto';
            case 1136:
                var0.pointerEvents = var14;
                var14 = 'button';
                var0.accessibilityRole = var14;
                var0.onPress = var13;
                var0.onPressIn = var12;
                var0.onPressOut = var7;
                var0.hitSlop = var6;
                var0.onLayout = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 20;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var11 = var11.text;
                var5.style = var11;
                var5.variant = var9;
                var9 = 'text-brand';
                if (!var10) {
                    _fun101891_ip = 1240;
                    continue _fun101891
                }
            case 1234:
                var9 = 'always-white';
            case 1240:
                var5.color = var9;
                var9 = 1.5;
                var5.maxFontSizeMultiplier = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 21;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.y2b7CA;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8747, 660, 13083, 33, 3679, 1297, 671, 478, 8672, 4049, 6939, 4266, 4040, 4046, 4817, 11285, 11283, 3900, 1234, 2]);