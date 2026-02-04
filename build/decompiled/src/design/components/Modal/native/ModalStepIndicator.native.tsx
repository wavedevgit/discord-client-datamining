// design/components/Modal/native/ModalStepIndicator.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun88364: for (var _fun88364_ip = 0;;) switch (_fun88364_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.isActive;
                var _closure2_slot0 = var6;
                var14 = var0.activeColor;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun88364_ip = 61;
                    continue _fun88364
                }
            case 27:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.colors;
                var14 = var1.TEXT_BRAND;
            case 61:
                var11 = var0.inactiveColor;
                if (!(var11 === var3)) {
                    _fun88364_ip = 105;
                    continue _fun88364
                }
            case 71:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.colors;
                var11 = var1.BACKGROUND_MOD_STRONG;
            case 105:
                var9 = var0.inactiveOpacity;
                if (!(var9 === var3)) {
                    _fun88364_ip = 118;
                    continue _fun88364
                }
            case 115:
                var9 = 1;
            case 118:
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot7;
                var5 = var0.bind(var3)();
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 5;
                var0 = var0[var4];
                var8 = var7.bind(var3)(var0);
                var7 = var8.useSharedValue;
                var0 = 0;
                if (!var6) {
                    _fun88364_ip = 179;
                    continue _fun88364
                }
            case 176:
                var0 = 1;
            case 179:
                var12 = var7.bind(var8)(var0);
                _closure2_slot2 = var12;
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 6;
                var8 = var0[var7];
                var10 = var13.bind(var3)(var8);
                var8 = var10.useToken;
                var10 = var8.bind(var10)(var14);
                _closure2_slot3 = var10;
                var7 = var0[var7];
                var8 = var13.bind(var3)(var7);
                var7 = var8.useToken;
                var11 = var7.bind(var8)(var11);
                _closure2_slot4 = var11;
                var14 = _closure1_slot3;
                var8 = var14.useEffect;
                var7 = new Array(2);
                var7[0] = var6;
                var7[1] = var12;
                var6 = function() { // Environment: var2
                    _fun88365: for (var _fun88365_ip = 0;;) switch (_fun88365_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var6 = 0;
                            if (!var1) {
                                _fun88365_ip = 15;
                                continue _fun88365
                            }
                        case 12:
                            var6 = 1;
                        case 15:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 7;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.withSpring;
                            var1 = _closure1_slot6;
                            var1 = var4.bind(var5)(var6, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var6 = var8.bind(var14)(var6, var7);
                var6 = var0[var4];
                var7 = var13.bind(var3)(var6);
                var6 = var7.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var1 = var5[var2];
                    var3 = undefined;
                    var10 = var4.bind(var3)(var1);
                    var9 = var10.interpolate;
                    var7 = _closure2_slot2;
                    var6 = var7.get;
                    var8 = var6.bind(var7)();
                    var7 = [0, 1];
                    var6 = [12, 36];
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var0.width = var6;
                    var6 = var5[var2];
                    var10 = var4.bind(var3)(var6);
                    var9 = var10.interpolateColor;
                    var7 = _closure2_slot2;
                    var6 = var7.get;
                    var8 = var6.bind(var7)();
                    var6 = _closure2_slot4;
                    var7 = new Array(2);
                    var7[0] = var6;
                    var6 = _closure2_slot3;
                    var7[1] = var6;
                    var6 = [0, 1];
                    var6 = var9.bind(var10)(var8, var6, var7);
                    var0.backgroundColor = var6;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var1 = _closure2_slot1;
                    var2 = new Array(2);
                    var2[0] = var1;
                    var1 = 1;
                    var2[1] = var1;
                    var1 = [0, 1];
                    var1 = var4.bind(var5)(var3, var1, var2);
                    var0.opacity = var1;
                    return var0;
                };
                var8 = {};
                var14 = var0[var4];
                var14 = var13.bind(var3)(var14);
                var14 = var14.interpolate;
                var8.interpolate = var14;
                var8.sharedValue = var12;
                var12 = 12;
                var8.WIDTH_INACTIVE = var12;
                var12 = 36;
                var8.WIDTH_ACTIVE = var12;
                var12 = var0[var4];
                var12 = var13.bind(var3)(var12);
                var12 = var12.interpolateColor;
                var8.interpolateColor = var12;
                var8.inactiveColor = var11;
                var8.activeColor = var10;
                var8.inactiveOpacity = var9;
                var2.__closure = var8;
                var8 = 12485955218699.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot8;
                var2.__initData = var8;
                var6 = var6.bind(var7)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var5 = var5.stepPill;
                var4[1] = var5;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var6 = true;
    var3.value = var6;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var3.overshootClamping = var6;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'gap': 4
    };
    var3.container = var8;
    var8 = {
        'height': 4,
        'borderRadius': 2
    };
    var3.stepPill = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Modal/native/ModalStepIndicator.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88367: for (var _fun88367_ip = 0;;) switch (_fun88367_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.currentStep;
                var8 = var0.totalSteps;
                var7 = var0.activeColor;
                var6 = var0.inactiveColor;
                var2 = var0.inactiveOpacity;
                var1 = _closure1_slot7;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var4 = new Array(0);
                var1 = 0;
                var10 = var1 < var8;
                if (!var10) {
                    _fun88367_ip = 117;
                    continue _fun88367
                }
            case 59:
                var11 = var4.push;
                var13 = _closure1_slot5;
                var12 = _closure1_slot9;
                var10 = {};
                var14 = var1 === var9;
                var10.isActive = var14;
                var10.activeColor = var7;
                var10.inactiveColor = var6;
                var10.inactiveOpacity = var2;
                var10 = var13.bind(var3)(var12, var10, var1);
                var10 = var11.bind(var4)(var10);
                var1 = var1 + 1;
                if (var1 < var8) {
                    _fun88367_ip = 59;
                    continue _fun88367
                }
            case 117:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ModalStepIndicator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3720, 3151, 4081, 2]);