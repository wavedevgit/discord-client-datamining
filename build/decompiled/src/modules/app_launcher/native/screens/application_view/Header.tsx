// modules/app_launcher/native/screens/application_view/Header.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var3 = var7[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var17 = 4;
    var1 = var7[var17];
    var1 = var6.bind(var0)(var1);
    var15 = var1.DEFAULT_CONTENT_PADDING;
    var16 = var1.SCREEN_BACKGROUND_COLOR;
    var1 = 5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var _closure1_slot6 = var3;
    var1 = var1.ApplicationFlags;
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot8 = var3;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var11 = 7;
    var1 = var7[var11];
    var1 = var12.bind(var0)(var1);
    var1 = var1.radii;
    var14 = var1.xl;
    var _closure1_slot10 = var14;
    var1 = 8;
    var1 = var7[var1];
    var9 = var6.bind(var0)(var1);
    var8 = var9.createStyles;
    var5 = {};
    var13 = 'absolute';
    var1 = 161;
    var3 = {
        'position': 'absolute',
        'top': 4294967280,
        'left': 0,
        'right': 0,
        'minHeight': 161
    };
    var5.headerContainer = var3;
    var3 = {};
    var10 = 105;
    var3.height = var10;
    var5.expandedHeaderBanner = var3;
    var10 = {
        'position': 'absolute',
        'padding': 4,
        'bottom': 4294967256,
        'left': 16
    };
    var3 = 16;
    var10.backgroundColor = var16;
    var16 = var7[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xl;
    var16 = var16 + var17;
    var10.borderRadius = var16;
    var5.appIconMask = var10;
    var10 = {
        'height': 56,
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'flexDirection': 'row'
    };
    var10.padding = var15;
    var5.collapsedHeaderBanner = var10;
    var10 = {
        'backgroundColor': 'black',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var5.collapsedHeaderBannerOverlay = var10;
    var10 = {
        'position': 'absolute',
        'top': 12,
        'left': 12
    };
    var5.backButtonContainer = var10;
    var10 = {
        'height': 72,
        'width': 72
    };
    var10.borderRadius = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
    var10.backgroundColor = var14;
    var5.loadingIcon = var10;
    var10 = {};
    var10.position = var13;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.top = var13;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.right = var13;
    var5.addCTAContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'display': 'flex',
        'gap': null,
        'position': 'absolute',
        'right': null,
        'top': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.gap = var13;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.right = var13;
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10.top = var11;
    var5.actionsWrapper = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}";
    var5.code = var8;
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}";
    var5.code = var8;
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}";
    var5.code = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}";
    var5.code = var8;
    var _closure1_slot15 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/screens/application_view/Header.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun107900: for (var _fun107900_ip = 0;;) switch (_fun107900_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.application;
                var _closure2_slot0 = var14;
                var23 = var1.onPressBack;
                var0 = var1.scrollOffsetY;
                var13 = var1.onAddAppMenuClick;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var16
                    var1 = _closure1_slot5;
                    var0 = var1.entrypoint;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var4.bind(var5)(var2, var1);
                var _closure2_slot1 = var1;
                var1 = _closure1_slot11;
                var9 = var1.bind(var3)();
                var7 = null;
                var1 = var7 != var14;
                var5 = null;
                if (!var1) {
                    _fun107900_ip = 149;
                    continue _fun107900
                }
            case 118:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getAppLauncherIconSource;
                var5 = var1.bind(var2)(var14);
            case 149:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var8 = var2.bind(var3)(var1);
                var6 = var8.useToken;
                var2 = _closure1_slot1;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_BASE_LOW;
                var6 = var6.bind(var8)(var1);
                var1 = 13;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var8 = 'number';
                var1 = typeof var5;
                var2 = var5;
                if (!(var8 !== var1)) {
                    _fun107900_ip = 250;
                    continue _fun107900
                }
            case 233:
                var8 = var7 == var5;
                var1 = undefined;
                if (var8) {
                    _fun107900_ip = 247;
                    continue _fun107900
                }
            case 242:
                var1 = var5.uri;
            case 247:
                var2 = var1;
            case 250:
                var8 = var7 != var6;
                var21 = '';
                var1 = var21;
                if (!var8) {
                    _fun107900_ip = 267;
                    continue _fun107900
                }
            case 264:
                var1 = var6;
            case 267:
                var25 = var4.bind(var3)(var2, var1);
                if (!(var7 == var5)) {
                    _fun107900_ip = 305;
                    continue _fun107900
                }
            case 277:
                var4 = _closure1_slot8;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var9.loadingIcon;
                var1.style = var6;
                var18 = var4.bind(var3)(var2, var1);
                _fun107900_ip = 359;
                continue _fun107900;
            case 305:
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.iconSource = var5;
                var5 = _closure1_slot10;
                var1.iconBorderRadius = var5;
                var5 = 72;
                var1.iconSize = var5;
                var18 = var4.bind(var3)(var2, var1);
            case 359:
                var2 = {};
                var2.scrollOffsetY = var0;
                var1 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var6 = var0.scrollOffsetY;
                    var _closure3_slot0 = var6;
                    var0 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 9;
                    var2 = var10[var7];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var2);
                    var2 = var3.useAnimatedStyle;
                    var1 = function() {
                        var0 = {};
                        var2 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.interpolate;
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var11 = var1.bind(var3)();
                        var4 = [0];
                        var1 = 105;
                        var4[1] = var1;
                        var3 = [0];
                        var1 = -105;
                        var3[1] = var1;
                        var8 = 'clamp';
                        var12 = var7;
                        var10 = var4;
                        var9 = var3;
                        var1 = var12[var6](var11, var10, var9, var8, var7);
                        var2.translateY = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0.transform = var1;
                        return var0;
                    };
                    var5 = {};
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.interpolate;
                    var5.interpolate = var7;
                    var5.scrollOffsetY = var6;
                    var6 = 105;
                    var5.HEADER_SCROLL_RANGE = var6;
                    var1.__closure = var5;
                    var5 = 2572905048492.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot12;
                    var1.__initData = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.style = var1;
                    return var0;
                };
                var5 = var1.bind(var3)(var2);
                var2 = {};
                var2.scrollOffsetY = var0;
                var1 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var7 = var0.scrollOffsetY;
                    var _closure3_slot0 = var7;
                    var0 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 9;
                    var2 = var11[var8];
                    var9 = undefined;
                    var5 = var10.bind(var9)(var2);
                    var3 = var5.useAnimatedStyle;
                    var2 = function() {
                        var0 = {};
                        var2 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.interpolate;
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var11 = var1.bind(var3)();
                        var4 = [0];
                        var1 = 105;
                        var4[1] = var1;
                        var3 = [0];
                        var3[1] = var1;
                        var8 = 'clamp';
                        var12 = var7;
                        var10 = var4;
                        var9 = var3;
                        var1 = var12[var6](var11, var10, var9, var8, var7);
                        var2.translateY = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0.transform = var1;
                        return var0;
                    };
                    var12 = {};
                    var6 = var11[var8];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.interpolate;
                    var12.interpolate = var6;
                    var12.scrollOffsetY = var7;
                    var6 = 105;
                    var12.HEADER_SCROLL_RANGE = var6;
                    var2.__closure = var12;
                    var12 = 8190094903650.0;
                    var2.__workletHash = var12;
                    var12 = _closure1_slot13;
                    var2.__initData = var12;
                    var2 = var3.bind(var5)(var2);
                    var0.headerStyle = var2;
                    var2 = var11[var8];
                    var3 = var10.bind(var9)(var2);
                    var2 = var3.useAnimatedStyle;
                    var1 = function() {
                        var0 = {};
                        var9 = {};
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 9;
                        var1 = var7[var2];
                        var4 = undefined;
                        var13 = var5.bind(var4)(var1);
                        var12 = var13.interpolate;
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var17 = var1.bind(var3)();
                        var10 = [52.5];
                        var1 = 105;
                        var10[1] = var1;
                        var15 = [16, 0];
                        var6 = 'clamp';
                        var18 = var13;
                        var16 = var10;
                        var14 = var6;
                        var8 = var18[var12](var17, var16, var15, var14, var13);
                        var9.translateY = var8;
                        var8 = new Array(1);
                        var8[0] = var9;
                        var0.transform = var8;
                        var2 = var7[var2];
                        var5 = var5.bind(var4)(var2);
                        var4 = var5.interpolate;
                        var2 = var3.get;
                        var17 = var2.bind(var3)();
                        var2 = [52.5];
                        var2[1] = var1;
                        var15 = [0, 1];
                        var18 = var5;
                        var16 = var2;
                        var1 = var18[var4](var17, var16, var15, var14, var13);
                        var0.opacity = var1;
                        return var0;
                    };
                    var5 = {};
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.interpolate;
                    var5.interpolate = var8;
                    var5.scrollOffsetY = var7;
                    var5.HEADER_SCROLL_RANGE = var6;
                    var1.__closure = var5;
                    var5 = 14190901941859.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot14;
                    var1.__initData = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.nameStyle = var1;
                    return var0;
                };
                var20 = var1.bind(var3)(var2);
                var1 = {};
                var1.scrollOffsetY = var0;
                var0 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var6 = var0.scrollOffsetY;
                    var _closure3_slot0 = var6;
                    var0 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 9;
                    var2 = var10[var7];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var2);
                    var2 = var3.useAnimatedStyle;
                    var1 = function() {
                        var0 = {};
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.interpolate;
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var10 = var1.bind(var2)();
                        var3 = [52.5];
                        var1 = 105;
                        var3[1] = var1;
                        var8 = [0, 0.5];
                        var7 = 'clamp';
                        var11 = var6;
                        var9 = var3;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        var0.opacity = var1;
                        return var0;
                    };
                    var5 = {};
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.interpolate;
                    var5.interpolate = var7;
                    var5.scrollOffsetY = var6;
                    var6 = 105;
                    var5.HEADER_SCROLL_RANGE = var6;
                    var1.__closure = var5;
                    var5 = 9589752719246.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot15;
                    var1.__initData = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.style = var1;
                    return var0;
                };
                var24 = var0.bind(var3)(var1);
                var0 = var7 != var14;
                if (!var0) {
                    _fun107900_ip = 454;
                    continue _fun107900
                }
            case 423:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getSectionName;
                var21 = var0.bind(var1)(var14);
            case 454:
                var0 = var7 != var14;
                if (!var0) {
                    _fun107900_ip = 469;
                    continue _fun107900
                }
            case 461:
                var1 = 'flags';
                var0 = var1 in var14;
            case 469:
                if (!var0) {
                    _fun107900_ip = 531;
                    continue _fun107900
                }
            case 472:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.hasFlag;
                var1 = var14.flags;
                var8 = var7 != var1;
                var2 = 0;
                if (!var8) {
                    _fun107900_ip = 515;
                    continue _fun107900
                }
            case 512:
                var2 = var1;
            case 515:
                var1 = _closure1_slot7;
                var1 = var1.EMBEDDED;
                var0 = var4.bind(var6)(var2, var1);
            case 531:
                _closure2_slot2 = var0;
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                _closure2_slot3 = var0;
                var2 = _closure1_slot9;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 9;
                var0 = var17[var10];
                var0 = var12.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = var9.headerContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var5 = var5.style;
                var4[1] = var5;
                var0.style = var4;
                var8 = 'box-none';
                var0.pointerEvents = var8;
                var15 = _closure1_slot8;
                var5 = _closure1_slot3;
                var4 = {};
                var19 = var9.expandedHeaderBanner;
                var6 = new Array(2);
                var6[0] = var19;
                var19 = {};
                var19.backgroundColor = var25;
                var6[1] = var19;
                var4.style = var6;
                var19 = 'none';
                var4.pointerEvents = var19;
                var6 = {};
                var22 = var9.appIconMask;
                var6.style = var22;
                var6.children = var18;
                var6 = var15.bind(var3)(var5, var6);
                var4.children = var6;
                var5 = var15.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var17[var10];
                var5 = var12.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var22 = var9.collapsedHeaderBanner;
                var18 = new Array(3);
                var18[0] = var22;
                var22 = {};
                var22.backgroundColor = var25;
                var18[1] = var22;
                var22 = var20.headerStyle;
                var18[2] = var22;
                var5.style = var18;
                var5.pointerEvents = var8;
                var8 = var17[var10];
                var8 = var12.bind(var3)(var8);
                var18 = var8.View;
                var8 = {};
                var25 = var9.collapsedHeaderBannerOverlay;
                var22 = new Array(2);
                var22[0] = var25;
                var24 = var24.style;
                var22[1] = var24;
                var8.style = var22;
                var8.pointerEvents = var19;
                var18 = var15.bind(var3)(var18, var8);
                var8 = new Array(4);
                var8[0] = var18;
                var18 = 17;
                var18 = var17[var18];
                var22 = var12.bind(var3)(var18);
                var18 = {};
                var18.onPress = var23;
                var18 = var15.bind(var3)(var22, var18);
                var8[1] = var18;
                var10 = var17[var10];
                var10 = var12.bind(var3)(var10);
                var18 = var10.View;
                var10 = {};
                var20 = var20.nameStyle;
                var10.style = var20;
                var10.pointerEvents = var19;
                var20 = _closure1_slot0;
                var19 = 18;
                var19 = var17[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'heading-lg/bold',
                    'color': 'white'
                };
                var19.children = var21;
                var19 = var15.bind(var3)(var20, var19);
                var10.children = var19;
                var10 = var15.bind(var3)(var18, var10);
                var8[2] = var10;
                var10 = 19;
                var10 = var17[var10];
                var12 = var12.bind(var3)(var10);
                var10 = {
                    'size': 32,
                    'pointerEvents': 'none'
                };
                var10 = var15.bind(var3)(var12, var10);
                var8[3] = var10;
                var5.children = var8;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var6 = var7 != var14;
                var5 = null;
                if (!var6) {
                    _fun107900_ip = 1251;
                    continue _fun107900
                }
            case 1009:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var8 = var8.bind(var3)(var6);
                var6 = var8.isRealApplication;
                var6 = var6.bind(var8)(var14);
                var5 = null;
                if (!var6) {
                    _fun107900_ip = 1251;
                    continue _fun107900
                }
            case 1048:
                var8 = _closure1_slot9;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var9.actionsWrapper;
                var6.style = var9;
                var12 = _closure1_slot8;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 20;
                var9 = var15[var9];
                var9 = var19.bind(var3)(var9);
                var10 = var9.IconButton;
                var9 = {
                    'size': 'sm',
                    'variant': 'secondary-overlay'
                };
                var11 = _closure1_slot1;
                var17 = 21;
                var17 = var15[var17];
                var17 = var11.bind(var3)(var17);
                var9.icon = var17;
                var16 = function() {
                    _fun107909: for (var _fun107909_ip = 0;;) switch (_fun107909_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 22;
                            var2 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot6;
                            var3 = var2.APP_LAUNCHER_APPLICATION_LINK_COPIED;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var7 = var7.id;
                            var2.application_id = var7;
                            var7 = _closure2_slot1;
                            var2.source = var7;
                            var2 = var5.bind(var6)(var3, var2);
                            var3 = _closure1_slot0;
                            var2 = 23;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.copy;
                            var2 = _closure2_slot2;
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 24;
                            var5 = var11[var5];
                            var7 = var8.bind(var0)(var5);
                            if (var2) {
                                _fun107909_ip = 180;
                                continue _fun107909
                            }
                        case 122:
                            var5 = var7.getApplicationInstallURL;
                            var2 = {};
                            var10 = _closure2_slot0;
                            var6 = var10.id;
                            var2.id = var6;
                            var6 = 15;
                            var6 = var11[var6];
                            var8 = var8.bind(var0)(var6);
                            var6 = var8.getInstallAppProps;
                            var12 = var6.bind(var8)(var10);
                            var13 = var2;
                            var6 = copyDataProperties(var13, var12);
                            var2 = var5.bind(var7)(var2);
                            _fun107909_ip = 235;
                            continue _fun107909;
                        case 180:
                            var6 = var7.getActivityLaunchURL;
                            var5 = {};
                            var8 = _closure2_slot0;
                            var8 = var8.id;
                            var5.applicationId = var8;
                            var10 = _closure2_slot3;
                            var8 = null;
                            var10 = var8 == var10;
                            var8 = undefined;
                            if (var10) {
                                _fun107909_ip = 225;
                                continue _fun107909
                            }
                        case 216:
                            var9 = _closure2_slot3;
                            var8 = var9.id;
                        case 225:
                            var5.referrerId = var8;
                            var2 = var6.bind(var7)(var5);
                        case 235:
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.presentLinkCopied;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var9.onPress = var16;
                var16 = 26;
                var17 = var15[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var15[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.XWDihq;
                var16 = var17.bind(var18)(var16);
                var9.accessibilityLabel = var16;
                var10 = var12.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = 27;
                var10 = var15[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.application = var14;
                var10.onAddAppMenuClick = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1251:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.SHEET_HANDLE_CONTAINER_HEIGHT = var3;
    var2.EXPANDED_HEADER_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 12149, 1468, 660, 33, 671, 1297, 3679, 566, 13817, 3110, 6799, 10463, 4636, 1384, 13892, 3900, 9226, 7470, 3214, 795, 5253, 7786, 3106, 1234, 13893, 2]);