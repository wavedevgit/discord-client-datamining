// modules/video_calls/native/components/PictureInPicture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var13.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportAll;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var15 = var1.StyleSheet;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.toggleFocus;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.PIP_GESTURE_ACTIVE_OFFSET;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.PictureInPicturePositions;
    var _closure1_slot7 = var1;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var10 = var5.bind(var0)(var4);
    var9 = var10.createStyles;
    var4 = {};
    var11 = {};
    var18 = var15.absoluteFillObject;
    var19 = var11;
    var12 = copyDataProperties(var19, var18);
    var14 = 'baseline';
    var12 = 'alignItems';
    var11[var12] = var14;
    var4.pipOuterContainer = var11;
    var11 = {};
    var18 = var15.absoluteFillObject;
    var19 = var11;
    var15 = copyDataProperties(var19, var18);
    var11[var12] = var14;
    var4.pipInnerContainer = var11;
    var11 = 8;
    var12 = var6[var11];
    var14 = var5.bind(var0)(var12);
    var12 = var14.generateBoxShadowStyle;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var11 = var12.bind(var14)(var11);
    var4.elevationShadow = var11;
    var11 = {};
    var12 = 9;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var11.backgroundColor = var12;
    var4.background = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot9 = var4;
    var9 = {};
    var4 = 'function PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}';
    var9.code = var4;
    var4 = function arg0() {
        var0 = {
            'mass': 0.2,
            'damping': 7.5,
            'stiffness': 100,
            'restDisplacementThreshold': 0.1,
            'restSpeedThreshold': 0.1,
            'overshootClamping': true
        };
        var1 = arg0;
        var0.velocity = var1;
        return var0;
    };
    var10 = {};
    var4.__closure = var10;
    var10 = 14089987184261.0;
    var4.__workletHash = var10;
    var4.__initData = var9;
    var _closure1_slot10 = var4;
    var1 = var1.TOP_LEFT;
    var9 = -var8;
    var4 = new Array(2);
    var4[0] = var9;
    var4[1] = var8;
    var _closure1_slot11 = var4;
    var9 = -var8;
    var4 = new Array(2);
    var4[0] = var9;
    var4[1] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}';
    var4.code = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun62963: for (var _fun62963_ip = 0;;) switch (_fun62963_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.children;
                var5 = var0.style;
                var1 = var0.preferredPosition;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun62963_ip = 40;
                    continue _fun62963
                }
            case 27:
                var1 = _closure1_slot7;
                var1 = var1.TOP_LEFT;
            case 40:
                var15 = var0.channel;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot9;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var7 = var1.bind(var3)(var0);
                var4 = var7.useShouldForcePipOrientation;
                var0 = {};
                var0.channel = var15;
                var7 = var4.bind(var7)(var0);
                var4 = _closure1_slot1;
                var0 = 11;
                var0 = var2[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var12 = var0.width;
                var9 = var0.height;
                var0 = 12;
                var0 = var2[var0];
                var8 = var4.bind(var3)(var0);
                var0 = {};
                var11 = true;
                var0.includeKeyboardHeight = var11;
                var0 = var8.bind(var3)(var0);
                var16 = var0.insets;
                _closure2_slot0 = var16;
                var0 = 13;
                var0 = var2[var0];
                var4 = var4.bind(var3)(var0);
                var0 = {};
                var8 = var15.id;
                var0.channelId = var8;
                var0.forcedOrientation = var7;
                var11 = var4.bind(var3)(var0);
                var8 = _closure1_slot4;
                var7 = var8.useState;
                var4 = {
                    'x': 0,
                    'y': 0,
                    'width': null,
                    'height': null,
                    'pageX': 0,
                    'pageY': 0
                };
                var0 = 0;
                var4.width = var12;
                var4.height = var9;
                var8 = var7.bind(var8)(var4);
                var7 = _closure1_slot3;
                var4 = 2;
                var7 = var7.bind(var3)(var8, var4);
                var4 = var7[var0];
                var0 = 1;
                var0 = var7[var0];
                _closure2_slot1 = var0;
                var8 = 14;
                var0 = var2[var8];
                var9 = var1.bind(var3)(var0);
                var7 = var9.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.top;
                    var0.marginTop = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.withSpring;
                    var2 = _closure2_slot0;
                    var2 = var2.bottom;
                    var1 = _closure1_slot10;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var4)(var2, var1);
                    var0.marginBottom = var1;
                    return var0;
                };
                var12 = {};
                var12.insets = var16;
                var16 = 15;
                var16 = var2[var16];
                var16 = var1.bind(var3)(var16);
                var16 = var16.withSpring;
                var12.withSpring = var16;
                var16 = _closure1_slot10;
                var12.getSpringAnimationConfig = var16;
                var0.__closure = var12;
                var12 = 16677290574613.0;
                var0.__workletHash = var12;
                var12 = _closure1_slot13;
                var0.__initData = var12;
                var7 = var7.bind(var9)(var0);
                var0 = 16;
                var0 = var2[var0];
                var12 = var1.bind(var3)(var0);
                var9 = var12.useIsViewingActivity;
                var0 = {};
                var15 = var15.id;
                var0.channelId = var15;
                var9 = var9.bind(var12)(var0);
                var0 = 17;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useDraggablePip;
                var0 = {};
                var12 = var11.width;
                var0.width = var12;
                var11 = var11.height;
                var0.height = var11;
                var11 = var4.width;
                var0.containerWidth = var11;
                var4 = var4.height;
                var0.containerHeight = var4;
                var4 = _closure1_slot11;
                var0.activeOffsetX = var4;
                var4 = _closure1_slot12;
                var0.activeOffsetY = var4;
                var4 = !var9;
                var0.snapToCorners = var4;
                var4 = undefined;
                if (!var9) {
                    _fun62963_ip = 500;
                    continue _fun62963
                }
            case 496:
                var4 = _closure1_slot6;
            case 500:
                var0.onPress = var4;
                var0 = var1.bind(var2)(var0);
                var11 = var0.gesture;
                var12 = var0.draggableGridItemStyles;
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var0 = null;
                var15 = var1.bind(var2)(var0);
                _closure2_slot2 = var15;
                var2 = _closure1_slot8;
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = var16[var8];
                var0 = var9.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var17 = var14.pipOuterContainer;
                var4 = new Array(3);
                var4[0] = var17;
                var4[1] = var7;
                var4[2] = var5;
                var0.style = var4;
                var7 = 'box-none';
                var0.pointerEvents = var7;
                var5 = _closure1_slot5;
                var4 = {};
                var4.ref = var15;
                var15 = var14.pipInnerContainer;
                var4.style = var15;
                var4.pointerEvents = var7;
                var6 = function() {
                    _fun62965: for (var _fun62965_ip = 0;;) switch (_fun62965_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun62965_ip = 45;
                                continue _fun62965
                            }
                        case 18:
                            var0 = _closure2_slot2;
                            var2 = var0.current;
                            var1 = var2.measure;
                            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                                var2 = _closure2_slot1;
                                var1 = {};
                                var0 = arg0;
                                var1.x = var0;
                                var0 = arg1;
                                var1.y = var0;
                                var0 = arg2;
                                var1.width = var0;
                                var0 = arg3;
                                var1.height = var0;
                                var0 = arg4;
                                var1.pageX = var0;
                                var0 = arg5;
                                var1.pageY = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.onLayout = var6;
                var15 = _closure1_slot0;
                var6 = 18;
                var6 = var16[var6];
                var6 = var15.bind(var3)(var6);
                var7 = var6.GestureDetector;
                var6 = {};
                var6.gesture = var11;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.View;
                var8 = {};
                var11 = new Array(2);
                var11[0] = var12;
                var12 = 19;
                var12 = var16[var12];
                var15 = var15.bind(var3)(var12);
                var12 = var15.isIOS;
                var15 = var12.bind(var15)();
                var12 = undefined;
                if (!var15) {
                    _fun62963_ip = 727;
                    continue _fun62963
                }
            case 721:
                var12 = var14.elevationShadow;
            case 727:
                var11[1] = var12;
                var8.style = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot5;
                var10 = {};
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var6.children = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/PictureInPicture.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DEFAULT_PIP_POSITION = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7882, 7887, 660, 33, 1297, 4886, 671, 7898, 1464, 4893, 7901, 3720, 4081, 7902, 7903, 4961, 478, 2]);