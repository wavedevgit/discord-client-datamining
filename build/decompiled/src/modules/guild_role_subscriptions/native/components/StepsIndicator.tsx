// modules/guild_role_subscriptions/native/components/StepsIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun116926: for (var _fun116926_ip = 0;;) switch (_fun116926_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.label;
                var4 = var2.isCurrent;
                var _closure2_slot0 = var4;
                var0 = var2.isDone;
                var7 = var2.useReducedMotion;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot7;
                var6 = var2.bind(var3)();
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 6;
                var2 = var2[var10];
                var12 = var9.bind(var3)(var2);
                var11 = var12.useSharedValue;
                var9 = 0;
                if (!var4) {
                    _fun116926_ip = 87;
                    continue _fun116926
                }
            case 84:
                var9 = 1;
            case 87:
                var12 = var11.bind(var12)(var9);
                _closure2_slot1 = var12;
                var15 = 180;
                if (!var7) {
                    _fun116926_ip = 104;
                    continue _fun116926
                }
            case 102:
                var15 = 0;
            case 104:
                _closure2_slot2 = var15;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = var13[var10];
                var9 = var14.bind(var3)(var2);
                var7 = var9.useAnimatedStyle;
                var2 = function() {
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 6;
                    var0 = var11[var6];
                    var9 = undefined;
                    var4 = var10.bind(var9)(var0);
                    var3 = var4.interpolate;
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                    var1 = [0, 1];
                    var0 = [0.4, 1];
                    var4 = var3.bind(var4)(var2, var1, var0);
                    var2 = 7;
                    var0 = var11[var2];
                    var3 = var10.bind(var9)(var0);
                    var1 = var3.withTiming;
                    var0 = {};
                    var5 = _closure2_slot2;
                    var0.duration = var5;
                    var5 = var11[var6];
                    var5 = var10.bind(var9)(var5);
                    var12 = var5.Easing;
                    var8 = var12.out;
                    var5 = var11[var6];
                    var5 = var10.bind(var9)(var5);
                    var5 = var5.Easing;
                    var5 = var5.ease;
                    var5 = var8.bind(var12)(var5);
                    var0.easing = var5;
                    var1 = var1.bind(var3)(var4, var0);
                    var0 = var11[var6];
                    var8 = var10.bind(var9)(var0);
                    var5 = var8.interpolate;
                    var3 = _closure2_slot1;
                    var0 = var3.get;
                    var4 = var0.bind(var3)();
                    var3 = new Array(2);
                    var0 = -2;
                    var3[0] = var0;
                    var3[1] = var6;
                    var0 = [0, 1];
                    var5 = var5.bind(var8)(var4, var0, var3);
                    var0 = {};
                    var2 = var11[var2];
                    var4 = var10.bind(var9)(var2);
                    var3 = var4.withTiming;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2.duration = var7;
                    var7 = var11[var6];
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.Easing;
                    var7 = var8.out;
                    var6 = var11[var6];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.Easing;
                    var6 = var6.ease;
                    var6 = var7.bind(var8)(var6);
                    var2.easing = var6;
                    var2 = var3.bind(var4)(var5, var2);
                    var0.marginHorizontal = var2;
                    var2 = {};
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var11 = {};
                var16 = var13[var10];
                var16 = var14.bind(var3)(var16);
                var16 = var16.interpolate;
                var11.interpolate = var16;
                var11.state = var12;
                var16 = 7;
                var16 = var13[var16];
                var16 = var14.bind(var3)(var16);
                var16 = var16.withTiming;
                var11.withTiming = var16;
                var11.duration = var15;
                var13 = var13[var10];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Easing;
                var11.Easing = var13;
                var2.__closure = var11;
                var11 = 4051275727555.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot8;
                var2.__initData = var11;
                var9 = var7.bind(var9)(var2);
                var11 = _closure1_slot3;
                var7 = var11.useEffect;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var4;
                var1 = function() { // Environment: var1
                    _fun116928: for (var _fun116928_ip = 0;;) switch (_fun116928_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var3 = _closure2_slot0;
                            var0 = 0;
                            if (!var3) {
                                _fun116928_ip = 24;
                                continue _fun116928
                            }
                        case 21:
                            var0 = 1;
                        case 24:
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var11)(var1, var2);
                if (var0) {
                    _fun116926_ip = 294;
                    continue _fun116926
                }
            case 283:
                if (var4) {
                    _fun116926_ip = 294;
                    continue _fun116926
                }
            case 286:
                var7 = var6.emptyNode;
                _fun116926_ip = 300;
                continue _fun116926;
            case 294:
                var7 = var6.filledNode;
            case 300:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var10 = var6.node;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var9;
                var6[2] = var7;
                var0.style = var6;
                if (!var4) {
                    _fun116926_ip = 410;
                    continue _fun116926
                }
            case 357:
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'heading-deprecated-12/extrabold',
                    'color': 'interactive-text-active'
                };
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 410:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.container = var3;
    var3 = 10;
    var9 = {
        'width': 20,
        'height': 20,
        'borderRadius': 10,
        'marginHorizontal': 4294967294
    };
    var6.node = var9;
    var9 = {
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var6.filledNode = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var10;
    var6.emptyNode = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var6 = {};
    var7 = 'function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}';
    var6.code = var7;
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/StepsIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.current;
        var _closure2_slot0 = var10;
        var6 = var0.style;
        var9 = var0.total;
        var _closure2_slot1 = var9;
        var2 = _closure1_slot7;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 9;
        var2 = var7[var2];
        var8 = var4.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            var0 = _closure1_slot5;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var8 = var7.bind(var8)(var4, var2);
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var4 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var1 = function() { // Environment: var1
            _fun116931: for (var _fun116931_ip = 0;;) switch (_fun116931_ip) {
                case 0:
                    var0 = new Array(0);
                    var1 = _closure2_slot1;
                    var5 = 0;
                    var1 = var5 < var1;
                    var4 = 1;
                    var2 = undefined;
                    if (!var1) {
                        _fun116931_ip = 105;
                        continue _fun116931
                    }
                case 28:
                    var10 = var5 + var4;
                    var7 = var0.push;
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot9;
                    var1 = {};
                    var11 = _closure2_slot2;
                    var1.useReducedMotion = var11;
                    var11 = _closure2_slot0;
                    var12 = var10 === var11;
                    var1.isCurrent = var12;
                    var11 = var10 < var11;
                    var1.isDone = var11;
                    var1.label = var10;
                    var1 = var9.bind(var2)(var8, var1, var5);
                    var1 = var7.bind(var0)(var1);
                    var5 = var5 + 1;
                    var1 = _closure2_slot1;
                    if (var5 < var1) {
                        _fun116931_ip = 28;
                        continue _fun116931
                    }
                case 105:
                    return var0;
            }
        };
        var4 = var4.bind(var7)(var1, var2);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var5.container;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 671, 3720, 4097, 3941, 566, 2]);