// modules/share/native/ShareAttachments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var10.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 300;
    var3.duration = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.STANDARD_EASING;
    var3.easing = var6;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var11 = -var11;
    var8.marginHorizontal = var11;
    var3.containerRevamp = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var3.attachmentPreviewContentContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.attachmentPreviewContentContainerRevamp = var8;
    var8 = {
        'height': 60,
        'backgroundColor': null,
        'overflow': 'hidden'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.attachmentPreview = var8;
    var8 = {
        'width': 50,
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'bottom': 0,
        'zIndex': 100
    };
    var3.leftGradient = var8;
    var8 = {
        'width': 50,
        'position': 'absolute',
        'right': 0,
        'top': 0,
        'bottom': 0,
        'zIndex': 100
    };
    var3.rightGradient = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.color = var9;
    var3.gradient = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/ShareAttachments.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ShareAttachments, environment: var1
        _fun97052: for (var _fun97052_ip = 0;;) switch (_fun97052_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.attachments;
                var18 = var0.isRevamp;
                var4 = undefined;
                if (!(var18 === var4)) {
                    _fun97052_ip = 25;
                    continue _fun97052
                }
            case 23:
                var18 = false;
            case 25:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot9;
                var17 = var0.bind(var4)();
                _closure2_slot0 = var17;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var15 = 3;
                var0 = var3[var15];
                var1 = var5.bind(var4)(var0);
                var0 = var1.useSharedValue;
                var2 = 0;
                var8 = var0.bind(var1)(var2);
                _closure2_slot1 = var8;
                var0 = var3[var15];
                var1 = var5.bind(var4)(var0);
                var0 = var1.useSharedValue;
                var0 = var0.bind(var1)(var2);
                _closure2_slot2 = var0;
                var1 = var3[var15];
                var6 = var5.bind(var4)(var1);
                var1 = var6.useSharedValue;
                var1 = var1.bind(var6)(var2);
                _closure2_slot3 = var1;
                var6 = var3[var15];
                var12 = var5.bind(var4)(var6);
                var7 = var12.useAnimatedStyle;
                var6 = function() { // Original name: y, environment: var9
                    _fun97053: for (var _fun97053_ip = 0;;) switch (_fun97053_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withTiming;
                            var5 = _closure2_slot1;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var5 = 0;
                            var6 = var2 <= var5;
                            var2 = 1;
                            if (!var6) {
                                _fun97053_ip = 62;
                                continue _fun97053
                            }
                        case 60:
                            var2 = 0;
                        case 62:
                            var1 = _closure1_slot8;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var13 = {};
                var19 = 8;
                var14 = var3[var19];
                var14 = var5.bind(var4)(var14);
                var14 = var14.withTiming;
                var13.withTiming = var14;
                var13.contentOffset = var8;
                var14 = _closure1_slot8;
                var13.GRADIENT_EASING_CONFIG = var14;
                var6.__closure = var13;
                var13 = 3302668154466.0;
                var6.__workletHash = var13;
                var13 = _closure1_slot10;
                var6.__initData = var13;
                var16 = var7.bind(var12)(var6);
                var6 = var3[var15];
                var12 = var5.bind(var4)(var6);
                var7 = var12.useAnimatedStyle;
                var6 = function() { // Original name: S, environment: var9
                    _fun97054: for (var _fun97054_ip = 0;;) switch (_fun97054_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withTiming;
                            var6 = _closure2_slot1;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var7 = _closure2_slot3;
                            var5 = var7.get;
                            var5 = var5.bind(var7)();
                            var5 = var6 + var5;
                            var6 = _closure2_slot2;
                            var2 = var6.get;
                            var2 = var2.bind(var6)();
                            var5 = var5 >= var2;
                            var2 = 1;
                            if (!var5) {
                                _fun97054_ip = 90;
                                continue _fun97054
                            }
                        case 88:
                            var2 = 0;
                        case 90:
                            var1 = _closure1_slot8;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var13 = {};
                var19 = var3[var19];
                var19 = var5.bind(var4)(var19);
                var19 = var19.withTiming;
                var13.withTiming = var19;
                var13.contentOffset = var8;
                var13.layoutWidth = var1;
                var13.contentWidth = var0;
                var13.GRADIENT_EASING_CONFIG = var14;
                var6.__closure = var13;
                var13 = 13996707009656.0;
                var6.__workletHash = var13;
                var13 = _closure1_slot11;
                var6.__initData = var13;
                var20 = var7.bind(var12)(var6);
                var3 = var3[var15];
                var6 = var5.bind(var4)(var3);
                var5 = var6.useAnimatedScrollHandler;
                var3 = function(arg0) { // Original name: v, environment: var9
                    var0 = arg0;
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = var0.contentOffset;
                    var2 = var2.x;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var2 = var0.contentSize;
                    var2 = var2.width;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = var0.layoutMeasurement;
                    var0 = var0.width;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var7 = {};
                var7.contentOffset = var8;
                var7.contentWidth = var0;
                var7.layoutWidth = var1;
                var3.__closure = var7;
                var7 = 12660577105859.0;
                var3.__workletHash = var7;
                var7 = _closure1_slot12;
                var3.__initData = var7;
                var14 = var5.bind(var6)(var3);
                var5 = _closure1_slot3;
                var6 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var13 = var6.bind(var5)(var1, var3);
                var3 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var12 = var3.bind(var5)(var0, var1);
                var3 = var5.useMemo;
                var0 = var17.gradient;
                var0 = var0.color;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hexWithOpacity;
                    var0 = _closure2_slot0;
                    var0 = var0.gradient;
                    var1 = var0.color;
                    var0 = 0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var21 = var3.bind(var5)(var0, var1);
                var1 = var11.length;
                var0 = null;
                if (!(var2 !== var1)) {
                    _fun97052_ip = 954;
                    continue _fun97052
                }
            case 519:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = undefined;
                if (!var18) {
                    _fun97052_ip = 540;
                    continue _fun97052
                }
            case 534:
                var5 = var17.containerRevamp;
            case 540:
                var1.style = var5;
                var8 = _closure1_slot5;
                var7 = _closure1_slot7;
                var5 = {};
                var6 = {
                    'x': 0,
                    'y': 0
                };
                var5.start = var6;
                var6 = {
                    'x': 1,
                    'y': 0
                };
                var5.end = var6;
                var6 = var17.gradient;
                var19 = var6.color;
                var6 = new Array(2);
                var6[0] = var19;
                var6[1] = var21;
                var5.colors = var6;
                var19 = var17.leftGradient;
                var6 = new Array(2);
                var6[0] = var19;
                var6[1] = var16;
                var5.style = var6;
                var16 = 'box-none';
                var5.pointerEvents = var16;
                var6 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = {};
                var19 = {
                    'x': 0,
                    'y': 0
                };
                var6.start = var19;
                var19 = {
                    'x': 1,
                    'y': 0
                };
                var6.end = var19;
                var19 = new Array(2);
                var19[0] = var21;
                var21 = var17.gradient;
                var21 = var21.color;
                var19[1] = var21;
                var6.colors = var19;
                var21 = var17.rightGradient;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var6.style = var19;
                var6.pointerEvents = var16;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var15];
                var6 = var7.bind(var4)(var6);
                var7 = var6.ScrollView;
                var6 = {};
                var16 = var17.attachmentPreviewContentContainer;
                var15 = new Array(2);
                var15[0] = var16;
                var16 = undefined;
                if (!var18) {
                    _fun97052_ip = 800;
                    continue _fun97052
                }
            case 794:
                var16 = var17.attachmentPreviewContentContainerRevamp;
            case 800:
                var15[1] = var16;
                var6.contentContainerStyle = var15;
                var15 = true;
                var6.horizontal = var15;
                var6.onScroll = var14;
                var6.onLayout = var13;
                var6.onContentSizeChange = var12;
                var12 = 16;
                var6.scrollEventThrottle = var12;
                var12 = false;
                var6.showsHorizontalScrollIndicator = var12;
                var12 = 'list';
                var6.accessibilityRole = var12;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 10;
                var12 = var15[var10];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var15[var10];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.RhtzFe;
                var10 = var12.bind(var13)(var10);
                var6.accessibilityLabel = var10;
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var6 = arg0;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var0 = _closure2_slot0;
                    var0 = var0.attachmentPreview;
                    var2.style = var0;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var0 = 11;
                    var0 = var9[var0];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var0);
                    var0 = {
                        'uri': null,
                        'width': 60,
                        'height': 60
                    };
                    var8 = var6.uri;
                    var0.uri = var8;
                    var8 = _closure1_slot0;
                    var7 = 12;
                    var10 = var9[var7];
                    var13 = var8.bind(var1)(var10);
                    var12 = var13.isImage;
                    var11 = var6.uri;
                    var10 = var6.mimeType;
                    var10 = var12.bind(var13)(var11, var10);
                    var0.isImage = var10;
                    var7 = var9[var7];
                    var10 = var8.bind(var1)(var7);
                    var9 = var10.isVideo;
                    var8 = var6.uri;
                    var7 = var6.mimeType;
                    var7 = var9.bind(var10)(var8, var7);
                    var0.isVideo = var7;
                    var6 = var6.name;
                    var0.fileName = var6;
                    var6 = true;
                    var0.showPlayOnVideoPreview = var6;
                    var0 = var4.bind(var1)(var5, var0);
                    var2.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 954:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3679, 4057, 4846, 1297, 671, 4056, 3199, 1234, 8780, 3972, 2]);