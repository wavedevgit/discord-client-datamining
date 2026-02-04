// modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var9[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var4 = var9[var3];
    var4 = var8.bind(var0)(var4);
    var12 = var4.DEFAULT_CONTENT_PADDING;
    var _closure1_slot5 = var12;
    var14 = var4.SCREEN_BACKGROUND_COLOR;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot6 = var5;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var15 = 4;
    var4 = var9[var15];
    var4 = var8.bind(var0)(var4);
    var4 = var4.BACK_BUTTON_SIZE;
    var3 = var3 * var12;
    var4 = var4 + var3;
    var3 = 36;
    var3 = var4 + var3;
    var5 = var3 + var15;
    var6 = 56;
    var3 = var5 - var6;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var9[var3];
    var10 = var8.bind(var0)(var3);
    var7 = var10.createStyles;
    var3 = {};
    var11 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'position': 'absolute',
        'top': 4294967280,
        'left': 0,
        'right': 0
    };
    var4 = -16;
    var11.padding = var12;
    var3.headerContainer = var11;
    var11 = {};
    var12 = 6;
    var16 = var9[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var16;
    var3.loadingHeaderContainer = var11;
    var11 = {
        'position': 'absolute',
        'padding': 4,
        'bottom': 4294967260,
        'left': '50%'
    };
    var11.backgroundColor = var14;
    var14 = var9[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xl;
    var14 = var14 + var15;
    var11.borderRadius = var14;
    var3.appIconMask = var11;
    var11 = {
        'width': 72,
        'height': 72
    };
    var14 = var9[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xl;
    var11.borderRadius = var14;
    var3.appIcon = var11;
    var11 = {};
    var12 = var9[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var11.backgroundColor = var12;
    var3.loadingIcon = var11;
    var11 = {
        'textAlign': 'center',
        'pointerEvents': 'none',
        'flexGrow': 1,
        'marginHorizontal': 8
    };
    var3.appSmallName = var11;
    var11 = {};
    var13 = {};
    var12 = '180deg';
    var13.rotate = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var11.transform = var12;
    var3.icon = var11;
    var11 = {
        'backgroundColor': 'black',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var3.headerBannerOverlay = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot9 = var3;
    var7 = {};
    var10 = "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}";
    var7.code = var10;
    var _closure1_slot10 = var7;
    var7 = {};
    var10 = "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}";
    var7.code = var10;
    var _closure1_slot11 = var7;
    var7 = {};
    var10 = "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}";
    var7.code = var10;
    var _closure1_slot12 = var7;
    var7 = 14;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx';
    var7 = var8.bind(var9)(var7);
    var2.COLLAPSED_HEADER_HEIGHT = var6;
    var4 = var5 + var4;
    var2.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = var4;
    var2.useStyles = var3;
    var1 = function arg0() {
        _fun108065: for (var _fun108065_ip = 0;;) switch (_fun108065_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.command;
                var17 = var1.onPressBack;
                var15 = var1.scrollOffsetY;
                var _closure2_slot0 = var15;
                var1 = var1.section;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot9;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun108066: for (var _fun108066_ip = 0;;) switch (_fun108066_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getAppLauncherIconSource;
                            var5 = _closure2_slot1;
                            var4 = null;
                            var4 = var4 == var5;
                            if (var4) {
                                _fun108066_ip = 56;
                                continue _fun108066
                            }
                        case 47:
                            var3 = _closure2_slot1;
                            var0 = var3.application;
                        case 56:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var1, var2);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 8;
                var6 = var2[var11];
                var8 = var1.bind(var3)(var6);
                var7 = var8.useAnimatedStyle;
                var6 = function() {
                    var0 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var2 = var8[var3];
                    var5 = undefined;
                    var12 = var6.bind(var5)(var2);
                    var11 = var12.interpolate;
                    var4 = _closure2_slot0;
                    var2 = var4.get;
                    var16 = var2.bind(var4)();
                    var1 = _closure1_slot8;
                    var9 = [0];
                    var9[1] = var1;
                    var14 = [0, 1];
                    var7 = 'clamp';
                    var17 = var12;
                    var15 = var9;
                    var13 = var7;
                    var2 = var17[var11](var16, var15, var14, var13, var12);
                    var0.opacity = var2;
                    var2 = {};
                    var3 = var8[var3];
                    var6 = var6.bind(var5)(var3);
                    var5 = var6.interpolate;
                    var3 = var4.get;
                    var16 = var3.bind(var4)();
                    var3 = [0];
                    var3[1] = var1;
                    var14 = [12, 0];
                    var17 = var6;
                    var15 = var3;
                    var1 = var17[var5](var16, var15, var14, var13, var12);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var10 = {};
                var12 = var2[var11];
                var12 = var1.bind(var3)(var12);
                var12 = var12.interpolate;
                var10.interpolate = var12;
                var10.scrollOffsetY = var15;
                var13 = _closure1_slot8;
                var10.TOTAL_SCROLL_RANGE = var13;
                var6.__closure = var10;
                var10 = 15596175827193.0;
                var6.__workletHash = var10;
                var10 = _closure1_slot10;
                var6.__initData = var10;
                var16 = var7.bind(var8)(var6);
                var6 = var2[var11];
                var10 = var1.bind(var3)(var6);
                var8 = var10.useAnimatedStyle;
                var7 = function() {
                    var0 = {};
                    var2 = {};
                    var4 = _closure1_slot5;
                    var3 = -40;
                    var3 = var3 + var4;
                    var2.translateX = var3;
                    var8 = new Array(3);
                    var8[0] = var2;
                    var9 = {};
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var3 = var7[var2];
                    var4 = undefined;
                    var14 = var5.bind(var4)(var3);
                    var13 = var14.interpolate;
                    var3 = _closure2_slot0;
                    var6 = var3.get;
                    var18 = var6.bind(var3)();
                    var1 = _closure1_slot8;
                    var11 = [0];
                    var11[1] = var1;
                    var10 = [0];
                    var6 = -36;
                    var10[1] = var6;
                    var6 = 'clamp';
                    var19 = var14;
                    var17 = var11;
                    var16 = var10;
                    var15 = var6;
                    var10 = var19[var13](var18, var17, var16, var15, var14);
                    var9.translateY = var10;
                    var8[1] = var9;
                    var9 = {};
                    var10 = var7[var2];
                    var14 = var5.bind(var4)(var10);
                    var13 = var14.interpolate;
                    var10 = var3.get;
                    var18 = var10.bind(var3)();
                    var11 = [0];
                    var11[1] = var1;
                    var16 = [1, 0];
                    var19 = var14;
                    var17 = var11;
                    var10 = var19[var13](var18, var17, var16, var15, var14);
                    var9.scale = var10;
                    var8[2] = var9;
                    var0.transform = var8;
                    var2 = var7[var2];
                    var5 = var5.bind(var4)(var2);
                    var4 = var5.interpolate;
                    var2 = var3.get;
                    var18 = var2.bind(var3)();
                    var2 = [0];
                    var2[1] = var1;
                    var16 = [1, 0];
                    var19 = var5;
                    var17 = var2;
                    var1 = var19[var4](var18, var17, var16, var15, var14);
                    var0.opacity = var1;
                    return var0;
                };
                var12 = {
                    'APP_ICON_SIZE': 72,
                    'APP_ICON_BORDER_WIDTH': 4
                };
                var6 = 4;
                var18 = _closure1_slot5;
                var12.DEFAULT_CONTENT_PADDING = var18;
                var18 = var2[var11];
                var18 = var1.bind(var3)(var18);
                var18 = var18.interpolate;
                var12.interpolate = var18;
                var12.scrollOffsetY = var15;
                var12.TOTAL_SCROLL_RANGE = var13;
                var7.__closure = var12;
                var12 = 13563524587234.0;
                var7.__workletHash = var12;
                var12 = _closure1_slot11;
                var7.__initData = var12;
                var10 = var8.bind(var10)(var7);
                var7 = var2[var11];
                var8 = var1.bind(var3)(var7);
                var7 = var8.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.interpolate;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var10 = var2.bind(var3)();
                    var1 = _closure1_slot8;
                    var3 = [0];
                    var3[1] = var1;
                    var8 = [0, 0.5];
                    var7 = 'clamp';
                    var11 = var6;
                    var9 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.opacity = var1;
                    return var0;
                };
                var12 = {};
                var18 = var2[var11];
                var18 = var1.bind(var3)(var18);
                var18 = var18.interpolate;
                var12.interpolate = var18;
                var12.scrollOffsetY = var15;
                var12.TOTAL_SCROLL_RANGE = var13;
                var0.__closure = var12;
                var12 = 2637023147700.0;
                var0.__workletHash = var12;
                var12 = _closure1_slot12;
                var0.__initData = var12;
                var20 = var7.bind(var8)(var0);
                var0 = 9;
                var0 = var2[var0];
                var8 = var1.bind(var3)(var0);
                var7 = var8.useToken;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOW;
                var7 = var7.bind(var8)(var0);
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var8 = 'number';
                var0 = typeof var4;
                var1 = var4;
                if (!(var8 !== var0)) {
                    _fun108065_ip = 486;
                    continue _fun108065
                }
            case 467:
                var0 = null;
                var8 = var0 == var4;
                var0 = undefined;
                if (var8) {
                    _fun108065_ip = 483;
                    continue _fun108065
                }
            case 478:
                var0 = var4.uri;
            case 483:
                var1 = var0;
            case 486:
                var13 = null;
                var8 = var13 != var7;
                var0 = '';
                if (!var8) {
                    _fun108065_ip = 502;
                    continue _fun108065
                }
            case 499:
                var0 = var7;
            case 502:
                var12 = var2.bind(var3)(var1, var0);
                if (!(var13 == var4)) {
                    _fun108065_ip = 558;
                    continue _fun108065
                }
            case 512:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var9.appIcon;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var9.loadingIcon;
                var7[1] = var8;
                var0.style = var7;
                var8 = var2.bind(var3)(var1, var0);
                _fun108065_ip = 604;
                continue _fun108065;
            case 558:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var9.appIcon;
                var0.style = var7;
                var0.source = var4;
                var8 = var2.bind(var3)(var1, var0);
            case 604:
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var9.headerContainer;
                var4 = new Array(2);
                var4[0] = var7;
                if (!(var13 != var14)) {
                    _fun108065_ip = 640;
                    continue _fun108065
                }
            case 632:
                var7 = {};
                var7.backgroundColor = var12;
                _fun108065_ip = 646;
                continue _fun108065;
            case 640:
                var7 = var9.loadingHeaderContainer;
            case 646:
                var4[1] = var7;
                var0.style = var4;
                var12 = _closure1_slot6;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = var15[var11];
                var4 = var7.bind(var3)(var4);
                var18 = var4.View;
                var4 = {};
                var21 = var9.headerBannerOverlay;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var4.style = var19;
                var18 = var12.bind(var3)(var18, var4);
                var4 = new Array(5);
                var4[0] = var18;
                var6 = var15[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.onPress = var17;
                var6 = var12.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot0;
                var6 = 12;
                var6 = var15[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'lineClamp': 1,
                    'animated': true,
                    'style': null,
                    'variant': 'heading-lg/bold',
                    'color': 'white'
                };
                var17 = var9.appSmallName;
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var6.style = var15;
                var15 = var13 == var14;
                var13 = undefined;
                if (var15) {
                    _fun108065_ip = 816;
                    continue _fun108065
                }
            case 811:
                var13 = var14.displayName;
            case 816:
                var6.children = var13;
                var6 = var12.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var12 = 13;
                var12 = var5[var12];
                var13 = var6.bind(var3)(var12);
                var12 = {};
                var14 = 32;
                var12.size = var14;
                var12 = var7.bind(var3)(var13, var12);
                var4[3] = var12;
                var5 = var5[var11];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var11 = var9.appIconMask;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AppLauncherCommandViewHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1468, 33, 13934, 1297, 671, 13859, 3720, 3151, 6842, 4704, 3941, 9282, 2]);