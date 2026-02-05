// modules/icymi/native/NewContentPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var14 = var0.guild;
        var0 = _closure1_slot11;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = {
            'width': 24,
            'height': 24
        };
        var0.style = var4;
        var6 = _closure1_slot9;
        var8 = _closure1_slot1;
        var13 = _closure1_slot2;
        var9 = 8;
        var4 = var13[var9];
        var5 = var8.bind(var3)(var4);
        var4 = {};
        var11 = {
            'shape': null,
            'x': 18,
            'y': 4294967292,
            'width': 32,
            'height': 32
        };
        var12 = _closure1_slot0;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.CutoutShape;
        var9 = var9.RoundedRect;
        var11.shape = var9;
        var9 = 7;
        var9 = var13[var9];
        var9 = var8.bind(var3)(var9);
        var9 = var9.radii;
        var9 = var9.md;
        var11.cornerRadius = var9;
        var9 = new Array(1);
        var9[0] = var11;
        var4.cutouts = var9;
        var9 = _closure1_slot9;
        var11 = 9;
        var7 = var13[var11];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var7.guild = var14;
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.GuildIconSizes;
        var11 = var11.XSMALL;
        var7.size = var11;
        var10 = var10.guildIconBG;
        var7.style = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignSelf': 'center',
        'alignItems': 'center',
        'flexDirection': 'row',
        'paddingRight': 12,
        'paddingLeft': 8,
        'paddingVertical': 6
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.guildIconBG = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'height': 32,
        'width': '100%',
        'zIndex': 100
    };
    var3.refreshMorePillContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = {
        'overshootClamping': true,
        'stiffness': 20,
        'damping': 15,
        'mass': 0.03
    };
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}";
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}";
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/NewContentPill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104438: for (var _fun104438_ip = 0;;) switch (_fun104438_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.onPress;
                var _closure2_slot0 = var0;
                var13 = var1.isRefreshing;
                var _closure2_slot1 = var13;
                var4 = undefined;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var1 = _closure1_slot11;
                var8 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var2 = var7[var1];
                var11 = var6.bind(var4)(var2);
                var10 = var11.useStateFromStoresArray;
                var2 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var2;
                var3 = function() { // Environment: var14
                    var1 = _closure1_slot8;
                    var0 = var1.getNewUnreadDehydratedItems;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var10.bind(var11)(var5, var3);
                var _closure2_slot2 = var11;
                var3 = var7[var1];
                var12 = var6.bind(var4)(var3);
                var10 = var12.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var2;
                var3 = function() { // Environment: var14
                    var1 = _closure1_slot8;
                    var0 = var1.hasNewContent;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = new Array(0);
                var2 = var10.bind(var12)(var5, var3, var2);
                var _closure2_slot3 = var2;
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var10 = var3.bind(var5)(var11);
                var3 = _closure1_slot3;
                var12 = 2;
                var15 = var3.bind(var4)(var10, var12);
                var17 = 0;
                var10 = var15[var17];
                var _closure2_slot4 = var10;
                var24 = 1;
                var15 = var15[var24];
                var _closure2_slot5 = var15;
                var16 = _closure1_slot1;
                var15 = 11;
                var15 = var7[var15];
                var15 = var16.bind(var4)(var15);
                var21 = var15.bind(var4)();
                var16 = var5.useMemo;
                var15 = new Array(1);
                var15[0] = var10;
                var10 = function() { // Environment: var14
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot4;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun104442: for (var _fun104442_ip = 0;;) switch (_fun104442_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = _closure3_slot0;
                                var5 = var0.length;
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 12;
                                var4 = var4[var0];
                                var0 = undefined;
                                var4 = var6.bind(var0)(var4);
                                var4 = var4.MIN_ITEMS_FOR_NEW_PILL;
                                if (!(!(var5 >= var4))) {
                                    _fun104442_ip = 138;
                                    continue _fun104442
                                }
                            case 50:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var3 = var5[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.isGuildItem;
                                var3 = var3.bind(var4)(var1);
                                if (!var3) {
                                    _fun104442_ip = 111;
                                    continue _fun104442
                                }
                            case 84:
                                var6 = _closure3_slot0;
                                var5 = var6.includes;
                                var4 = var1.data;
                                var4 = var4.guild_id;
                                var4 = var5.bind(var6)(var4);
                                var3 = !var4;
                            case 111:
                                if (!var3) {
                                    _fun104442_ip = 138;
                                    continue _fun104442
                                }
                            case 114:
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = var1.data;
                                var1 = var1.guild_id;
                                var1 = var2.bind(var3)(var1);
                            case 138:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var16.bind(var5)(var10, var15);
                var _closure2_slot6 = var10;
                var1 = var7[var1];
                var10 = var6.bind(var4)(var1);
                var7 = var10.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var14
                    var2 = _closure2_slot6;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot7;
                        var1 = var2.getGuild;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var0 = global;
                    var0 = var0.Boolean;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var23 = var7.bind(var10)(var6, var1);
                var1 = var5.useState;
                var10 = false;
                var1 = var1.bind(var5)(var10);
                var3 = var3.bind(var4)(var1, var12);
                var1 = var3[var17];
                var3 = var3[var24];
                var _closure2_slot7 = var3;
                var19 = var2;
                if (!var19) {
                    _fun104438_ip = 329;
                    continue _fun104438
                }
            case 326:
                var19 = var1;
            case 329:
                _closure2_slot8 = var19;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 14;
                var3 = var15[var1];
                var7 = var6.bind(var4)(var3);
                var5 = var7.useAnimatedStyle;
                var3 = function() {
                    _fun104445: for (var _fun104445_ip = 0;;) switch (_fun104445_ip) {
                        case 0:
                            var0 = {};
                            var4 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 15;
                            var2 = var2[var7];
                            var6 = undefined;
                            var10 = var3.bind(var6)(var2);
                            var9 = var10.withSpring;
                            var3 = _closure2_slot8;
                            var8 = 0;
                            if (!var3) {
                                _fun104445_ip = 49;
                                continue _fun104445
                            }
                        case 46:
                            var8 = 12;
                        case 49:
                            var3 = _closure1_slot12;
                            var3 = var9.bind(var10)(var8, var3);
                            var4.translateY = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var0.transform = var3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.withSpring;
                            var2 = _closure2_slot8;
                            var5 = 0;
                            if (!var2) {
                                _fun104445_ip = 110;
                                continue _fun104445
                            }
                        case 107:
                            var5 = 1;
                        case 110:
                            var2 = _closure1_slot12;
                            var1 = 'respect-motion-settings';
                            var1 = var3.bind(var4)(var5, var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var16 = {};
                var18 = 15;
                var18 = var15[var18];
                var18 = var6.bind(var4)(var18);
                var18 = var18.withSpring;
                var16.withSpring = var18;
                var16.showingPill = var19;
                var18 = _closure1_slot12;
                var16.springConfig = var18;
                var3.__closure = var16;
                var16 = 13655660855782.0;
                var3.__workletHash = var16;
                var16 = _closure1_slot13;
                var3.__initData = var16;
                var7 = var5.bind(var7)(var3);
                var3 = var15[var1];
                var16 = var6.bind(var4)(var3);
                var5 = var16.useAnimatedProps;
                var3 = function() {
                    _fun104446: for (var _fun104446_ip = 0;;) switch (_fun104446_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot8;
                            var1 = 'none';
                            if (!var2) {
                                _fun104446_ip = 22;
                                continue _fun104446
                            }
                        case 16:
                            var1 = 'box-none';
                        case 22:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var18 = {};
                var18.showingPill = var19;
                var3.__closure = var18;
                var18 = 876312391659.0;
                var3.__workletHash = var18;
                var18 = _closure1_slot14;
                var3.__initData = var18;
                var5 = var5.bind(var16)(var3);
                var3 = 16;
                var3 = var15[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.useIsFocused;
                var15 = var3.bind(var6)();
                _closure2_slot9 = var15;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var10 = var3.bind(var6)(var10);
                var3 = _closure1_slot3;
                var10 = var3.bind(var4)(var10, var12);
                var3 = var10[var17];
                _closure2_slot10 = var3;
                var10 = var10[var24];
                _closure2_slot11 = var10;
                var12 = var6.useLayoutEffect;
                var10 = new Array(3);
                var10[0] = var2;
                var10[1] = var15;
                var10[2] = var3;
                var3 = function() { // Environment: var14
                    _fun104447: for (var _fun104447_ip = 0;;) switch (_fun104447_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun104447_ip = 39;
                                continue _fun104447
                            }
                        case 10:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun104447_ip = 39;
                                continue _fun104447
                            }
                        case 17:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun104447_ip = 39;
                                continue _fun104447
                            }
                        case 24:
                            var3 = _closure2_slot7;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                            _fun104447_ip = 76;
                            continue _fun104447;
                        case 39:
                            var1 = _closure2_slot10;
                            if (!var1) {
                                _fun104447_ip = 50;
                                continue _fun104447
                            }
                        case 46:
                            var1 = _closure2_slot9;
                        case 50:
                            if (!var1) {
                                _fun104447_ip = 60;
                                continue _fun104447
                            }
                        case 53:
                            var2 = _closure2_slot3;
                            var1 = !var2;
                        case 60:
                            if (!var1) {
                                _fun104447_ip = 76;
                                continue _fun104447
                            }
                        case 63:
                            var3 = _closure2_slot7;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                        case 76:
                            var2 = _closure2_slot11;
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var3 = var12.bind(var6)(var3, var10);
                var10 = var6.useEffect;
                var3 = new Array(3);
                var3[0] = var13;
                var3[1] = var11;
                var3[2] = var2;
                var2 = function() { // Environment: var14
                    _fun104448: for (var _fun104448_ip = 0;;) switch (_fun104448_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun104448_ip = 25;
                                continue _fun104448
                            }
                        case 10:
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var10.bind(var6)(var2, var3);
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var14
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var10 = var3.bind(var6)(var0, var2);
                var0 = var23.length;
                if (!(var17 !== var0)) {
                    _fun104438_ip = 1137;
                    continue _fun104438
                }
            case 679:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = var15[var1];
                var0 = var2.bind(var4)(var0);
                var2 = var0.View;
                var0 = {};
                var11 = var8.refreshMorePillContainer;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var7;
                var0.style = var6;
                var0.animatedProps = var5;
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var6 = 17;
                var6 = var15[var6];
                var6 = var11.bind(var4)(var6);
                var11 = var6.PressableOpacity;
                var6 = {};
                var6.onPress = var10;
                var15 = var8.container;
                var6.style = var15;
                var18 = _closure1_slot9;
                if (var13) {
                    _fun104438_ip = 830;
                    continue _fun104438
                }
            case 782:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 18;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var15 = var13.ArrowSmallUpIcon;
                var13 = {
                    'size': 'md',
                    'color': 'interactive-text-active'
                };
                var15 = var18.bind(var4)(var15, var13);
                _fun104438_ip = 919;
                continue _fun104438;
            case 830:
                var16 = _closure1_slot5;
                var13 = {};
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 21;
                var19 = var22[var19];
                var20 = var20.bind(var4)(var19);
                var19 = var20.isThemeDark;
                var19 = var19.bind(var20)(var21);
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var20 = 7;
                var20 = var22[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.unsafe_rawColors;
                if (var19) {
                    _fun104438_ip = 903;
                    continue _fun104438
                }
            case 895:
                var19 = var20.PRIMARY_500;
                _fun104438_ip = 909;
                continue _fun104438;
            case 903:
                var19 = var20.WHITE;
            case 909:
                var13.color = var19;
                var15 = var18.bind(var4)(var16, var13);
            case 919:
                var13 = new Array(3);
                var13[0] = var15;
                var16 = var23.slice;
                var15 = var23.length;
                var15 = var15 - var24;
                var16 = var16.bind(var23)(var17, var15);
                var15 = var16.map;
                var14 = function(arg0, arg1) { // Environment: var14
                    _fun104450: for (var _fun104450_ip = 0;;) switch (_fun104450_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot9;
                            var3 = _closure1_slot6;
                            var2 = {};
                            var5 = {};
                            var7 = arg1;
                            var6 = 0;
                            var7 = var7 > var6;
                            var6 = 4;
                            if (!var7) {
                                _fun104450_ip = 39;
                                continue _fun104450
                            }
                        case 33:
                            var6 = -2;
                        case 39:
                            var5.marginLeft = var6;
                            var2.style = var5;
                            var7 = _closure1_slot9;
                            var6 = _closure1_slot15;
                            var5 = {};
                            var5.guild = var0;
                            var1 = undefined;
                            var5 = var7.bind(var1)(var6, var5);
                            var2.children = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var14 = var15.bind(var16)(var14);
                var13[1] = var14;
                var16 = _closure1_slot9;
                var15 = _closure1_slot6;
                var14 = {};
                var17 = {};
                var18 = var23.length;
                var19 = var18 > var24;
                var18 = 4;
                if (!var19) {
                    _fun104438_ip = 1001;
                    continue _fun104438
                }
            case 995:
                var18 = -2;
            case 1001:
                var17.marginLeft = var18;
                var14.style = var17;
                var19 = _closure1_slot9;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var20 = 9;
                var17 = var22[var20];
                var18 = var18.bind(var4)(var17);
                var17 = {};
                var21 = var23.length;
                var21 = var21 - var24;
                var21 = var23[var21];
                var17.guild = var21;
                var21 = _closure1_slot0;
                var20 = var22[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.GuildIconSizes;
                var20 = var20.XSMALL;
                var17.size = var20;
                var20 = var8.guildIconBG;
                var17.style = var20;
                var17 = var19.bind(var4)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[2] = var14;
                var6.children = var13;
                var6 = var12.bind(var4)(var11, var6);
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun104438_ip = 1417;
                continue _fun104438;
            case 1137:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = var16[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var11 = var8.refreshMorePillContainer;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var7;
                var1.style = var6;
                var1.animatedProps = var5;
                var7 = _closure1_slot10;
                var15 = _closure1_slot0;
                var5 = 17;
                var5 = var16[var5];
                var5 = var15.bind(var4)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var5.onPress = var10;
                var8 = var8.container;
                var5.style = var8;
                var11 = _closure1_slot9;
                var8 = 18;
                var8 = var16[var8];
                var8 = var15.bind(var4)(var8);
                var10 = var8.ArrowSmallUpIcon;
                var8 = {
                    'size': 'md',
                    'color': 'interactive-text-active'
                };
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot9;
                var9 = 19;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'heading-md/bold',
                    'color': 'interactive-text-active'
                };
                var12 = {};
                var13 = 4;
                var12.marginLeft = var13;
                var9.style = var12;
                var12 = 20;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["4Nl0Rl"];
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1417:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 8896, 33, 1297, 671, 5461, 7415, 566, 3246, 6641, 8905, 3720, 4081, 1472, 4904, 11394, 3941, 1234, 3206, 2]);