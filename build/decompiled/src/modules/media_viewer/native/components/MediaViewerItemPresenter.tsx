// modules/media_viewer/native/components/MediaViewerItemPresenter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.platformStyles = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();const interpolateProxy=function(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);};return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaViewerItemPresenter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76511: for (var _fun76511_ip = 0;;) switch (_fun76511_ip) {
            case 0:
                var1 = arg0;
                var22 = var1.source;
                var4 = var1.originLayout;
                var9 = var1.renderMedia;
                var12 = var1.windowWidth;
                var _closure2_slot0 = var12;
                var11 = var1.windowHeight;
                var _closure2_slot1 = var11;
                var20 = var1.entranceAnimationDriver;
                var _closure2_slot2 = var20;
                var15 = var1.index;
                var _closure2_slot3 = var15;
                var2 = var1.useItemVisible;
                var10 = var1.panGestureConfig;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 3;
                var1 = var8[var1];
                var6 = var7.bind(var3)(var1);
                var1 = var6.useEntranceAnimation;
                var6 = var1.bind(var6)(var20);
                var1 = var6.loads;
                var19 = var6.handleLoad;
                var17 = var6.handleError;
                var25 = var6.handleLoadStart;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var13 = var6.MediaViewerSourcesStore;
                var7 = var13.useField;
                var6 = 'spoilerIndexes';
                var6 = var7.bind(var13)(var6);
                var _closure2_slot4 = var6;
                var14 = _closure1_slot3;
                var13 = var14.useMemo;
                var7 = new Array(2);
                var7[0] = var15;
                var7[1] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure2_slot4;
                    var1 = var2.has;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var13.bind(var14)(var6, var7);
                var7 = _closure1_slot1;
                var6 = 5;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)(var12, var11, var22);
                var8 = var6.width;
                var _closure2_slot5 = var8;
                var6 = var6.height;
                var _closure2_slot6 = var6;
                var13 = var2.bind(var3)(var15);
                var7 = new Array(0);
                var23 = global;
                var16 = var23.Array;
                var2 = var16.isArray;
                var2 = var2.bind(var16)(var22);
                if (var2) {
                    _fun76511_ip = 406;
                    continue _fun76511
                }
            case 295:
                var16 = var7.push;
                var2 = {};
                var26 = var22.uri;
                var18 = var23.HermesInternal;
                var24 = var18.concat;
                var21 = '0:';
                var18 = ':';
                var18 = var24.bind(var21)(var15, var18, var26);
                var2.key = var18;
                var2.onLoadStart = var25;
                var2.onLoad = var19;
                var2.onError = var17;
                var2.source = var22;
                var18 = _closure1_slot7;
                var18 = var18.platformStyles;
                var2.style = var18;
                var2.index = var15;
                var2.hasSpoiler = var14;
                var2.visible = var13;
                var2.panGestureConfig = var10;
                var2 = var9.bind(var3)(var2);
                var2 = var16.bind(var7)(var2);
                _fun76511_ip = 678;
                continue _fun76511;
            case 406:
                var21 = 1;
                var18 = var1 <= var21;
                if (!var18) {
                    _fun76511_ip = 532;
                    continue _fun76511
                }
            case 416:
                var16 = var7.push;
                var2 = {};
                var24 = 0;
                var26 = var22[var24];
                var29 = var26.uri;
                var26 = var23.HermesInternal;
                var28 = var26.concat;
                var27 = '0:';
                var26 = ':';
                var26 = var28.bind(var27)(var15, var26, var29);
                var2.key = var26;
                var2.onLoadStart = var25;
                var2.onLoad = var19;
                var2.onError = var17;
                var24 = var22[var24];
                var2.source = var24;
                var24 = _closure1_slot7;
                var24 = var24.platformStyles;
                var2.style = var24;
                var2.index = var15;
                var2.hasSpoiler = var14;
                var2.visible = var13;
                var2.panGestureConfig = var10;
                var2 = var9.bind(var3)(var2);
                var2 = var16.bind(var7)(var2);
            case 532:
                if (!(var1 >= var21)) {
                    _fun76511_ip = 678;
                    continue _fun76511
                }
            case 539:
                var2 = var7.push;
                var1 = {};
                var16 = 0;
                var24 = var22[var16];
                var26 = var24.uri;
                var23 = var23.HermesInternal;
                var25 = var23.concat;
                var24 = '1:';
                var23 = ':';
                var23 = var25.bind(var24)(var15, var23, var26);
                var1.key = var23;
                var21 = var22[var21];
                var1.source = var21;
                var21 = _closure1_slot7;
                var21 = var21.platformStyles;
                var1.style = var21;
                var1.onLoad = var19;
                var1.onError = var17;
                var17 = 'auto';
                if (!var18) {
                    _fun76511_ip = 632;
                    continue _fun76511
                }
            case 628:
                var17 = 'none';
            case 632:
                var1.pointerEvents = var17;
                var1.fadeDuration = var16;
                var16 = false;
                var1.fade = var16;
                var1.index = var15;
                var1.hasSpoiler = var14;
                var1.visible = var13;
                var1.panGestureConfig = var10;
                var1 = var9.bind(var3)(var1);
                var1 = var2.bind(var7)(var1);
            case 678:
                var1 = var8 / var6;
                var9 = var4.width;
                var2 = var4.height;
                var9 = var9 / var2;
                var10 = var4.x;
                var2 = var4.width;
                var2 = var8 - var2;
                var19 = 2;
                var2 = var2 / var19;
                var10 = var10 - var2;
                var2 = var12 - var8;
                var2 = var2 / var19;
                var14 = var10 - var2;
                _closure2_slot8 = var14;
                var2 = var4.height;
                var2 = var6 - var2;
                var13 = var2 / var19;
                var2 = var11 - var6;
                var10 = var2 / var19;
                var2 = var4.y;
                var2 = var2 - var13;
                var15 = var2 - var10;
                _closure2_slot9 = var15;
                _closure2_slot10 = var8;
                _closure2_slot11 = var6;
                var13 = var4.resizeMode;
                var2 = 'cover';
                if (!(var2 !== var13)) {
                    _fun76511_ip = 831;
                    continue _fun76511
                }
            case 796:
                var2 = 1;
                if (!(var1 > var9)) {
                    _fun76511_ip = 806;
                    continue _fun76511
                }
            case 803:
                var2 = var1;
            case 806:
                var1 = var4.width;
                var1 = var1 / var8;
                var13 = var1 * var2;
                _closure2_slot7 = var13;
                var16 = var8;
                var17 = var6;
                _fun76511_ip = 905;
                continue _fun76511;
            case 831:
                var2 = var4.width;
                _closure2_slot10 = var2;
                var1 = var4.height;
                _closure2_slot11 = var1;
                var18 = var4.x;
                var9 = var12 - var8;
                var9 = var9 / var19;
                var9 = var18 - var9;
                _closure2_slot8 = var9;
                var4 = var4.y;
                var4 = var4 - var10;
                _closure2_slot9 = var4;
                var10 = 1;
                _closure2_slot7 = var10;
                var13 = var10;
                var14 = var9;
                var15 = var4;
                var16 = var2;
                var17 = var1;
            case 905:
                var19 = _closure1_slot0;
                var10 = _closure1_slot2;
                var18 = 6;
                var1 = var10[var18];
                var4 = var19.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var5 = function arg0, arg1() {
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 6;
                        var3 = var6[var0];
                        var1 = undefined;
                        var5 = var2.bind(var1)(var3);
                        var4 = var5.interpolate;
                        var3 = _closure3_slot0;
                        var0 = var6[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.Extrapolation;
                        var7 = var0.CLAMP;
                        var9 = arg0;
                        var8 = arg1;
                        var11 = var5;
                        var10 = var3;
                        var0 = var11[var4](var10, var9, var8, var7, var6);
                        return var0;
                    };
                    var0 = {};
                    var2 = _closure2_slot11;
                    var3 = new Array(2);
                    var3[0] = var2;
                    var2 = _closure2_slot6;
                    var3[1] = var2;
                    var4 = undefined;
                    var2 = [0, 1];
                    var2 = var5.bind(var4)(var2, var3);
                    var0.height = var2;
                    var2 = _closure2_slot10;
                    var3 = new Array(2);
                    var3[0] = var2;
                    var2 = _closure2_slot5;
                    var3[1] = var2;
                    var2 = [0, 1];
                    var2 = var5.bind(var4)(var2, var3);
                    var0.width = var2;
                    var2 = _closure2_slot9;
                    var6 = new Array(2);
                    var6[0] = var2;
                    var2 = 0;
                    var6[1] = var2;
                    var3 = [0, 1];
                    var3 = var5.bind(var4)(var3, var6);
                    var0.top = var3;
                    var6 = _closure2_slot8;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var3[1] = var2;
                    var2 = [0, 1];
                    var2 = var5.bind(var4)(var2, var3);
                    var0.left = var2;
                    var3 = [0, 0.25];
                    var2 = [16, 0];
                    var2 = var5.bind(var4)(var3, var2);
                    var0.borderRadius = var2;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var3 = new Array(2);
                    var3[0] = var1;
                    var1 = 1;
                    var3[1] = var1;
                    var1 = [0, 1];
                    var1 = var5.bind(var4)(var1, var3);
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var9 = {};
                var9.entranceAnimationDriver = var20;
                var20 = var10[var18];
                var20 = var19.bind(var3)(var20);
                var20 = var20.interpolate;
                var9.interpolate = var20;
                var18 = var10[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.Extrapolation;
                var9.Extrapolation = var18;
                var9.startHeight = var17;
                var9.sourceHeight = var6;
                var9.startWidth = var16;
                var9.sourceWidth = var8;
                var9.startTranslateY = var15;
                var9.startTranslateX = var14;
                var9.startScale = var13;
                var1.__closure = var9;
                var9 = 7638182709879.0;
                var1.__workletHash = var9;
                var9 = _closure1_slot8;
                var1.__initData = var9;
                var9 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(4);
                var1[0] = var12;
                var1[1] = var11;
                var1[2] = var8;
                var1[3] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.create;
                    var0 = {};
                    var3 = {};
                    var5 = _closure2_slot0;
                    var3.width = var5;
                    var5 = _closure2_slot1;
                    var3.height = var5;
                    var5 = 'center';
                    var3.alignItems = var5;
                    var3.justifyContent = var5;
                    var0.container = var3;
                    var3 = {};
                    var5 = _closure2_slot5;
                    var3.width = var5;
                    var4 = _closure2_slot6;
                    var3.height = var4;
                    var0.child = var3;
                    var3 = {
                        'position': 'relative',
                        'overflow': 'hidden',
                        'opacity': 1
                    };
                    var0.presenter = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = false;
                var0.collapsable = var4;
                var4 = var8.container;
                var0.style = var4;
                var4 = {};
                var6 = var8.child;
                var4.style = var6;
                var6 = _closure1_slot1;
                var5 = 7;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var10 = var8.presenter;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.style = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4.children = var5;
                var4 = var2.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 9737, 8836, 9736, 3711, 3901, 2]);