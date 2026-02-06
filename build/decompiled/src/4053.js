// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = ['goBackGesture', 'screensRefs', 'currentScreenId', 'transitionAnimation', 'screenEdgeGesture', 'onFinishTransitioning', 'children'];
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var1 = function arg0() {
        _fun37454: for (var _fun37454_ip = 0;;) switch (_fun37454_ip) {
            case 0:
                var4 = arg0;
                var16 = var4.goBackGesture;
                var5 = var4.screensRefs;
                var8 = var4.currentScreenId;
                var15 = var4.transitionAnimation;
                var11 = var4.screenEdgeGesture;
                var14 = var4.onFinishTransitioning;
                var21 = var4.children;
                var1 = _closure1_slot5;
                var0 = _closure1_slot4;
                var3 = undefined;
                var12 = var1.bind(var3)(var4, var0);
                var4 = _closure1_slot6;
                var1 = var4.useRef;
                var10 = null;
                var6 = var10 == var5;
                var0 = undefined;
                if (var6) {
                    _fun37454_ip = 90;
                    continue _fun37454
                }
            case 85:
                var0 = var5.current;
            case 90:
                if (!(var10 == var0)) {
                    _fun37454_ip = 96;
                    continue _fun37454
                }
            case 94:
                var0 = {};
            case 96:
                var9 = var1.bind(var4)(var0);
                var19 = _closure1_slot6;
                var0 = var19.useRef;
                var13 = var0.bind(var19)(var10);
                var _closure2_slot0 = var13;
                var1 = var19.Children;
                var0 = var1.count;
                var0 = var0.bind(var1)(var21);
                var _closure2_slot1 = var0;
                var6 = var19.useContext;
                var1 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 4;
                var5 = var4[var0];
                var5 = var1.bind(var3)(var5);
                var5 = var5.GHContext;
                var5 = var6.bind(var19)(var5);
                var17 = var19.useRef;
                var6 = {};
                var18 = function arg0() {
                    var0 = undefined;
                    return var0;
                };
                var6.stackUseEffectCallback = var18;
                var17 = var17.bind(var19)(var6);
                var _closure2_slot2 = var17;
                var20 = var19.Children;
                var18 = var20.map;
                var6 = function(arg0, arg1) { // Environment: var2
                    _fun37456: for (var _fun37456_ip = 0;;) switch (_fun37456_ip) {
                        case 0:
                            var4 = arg0;
                            var5 = var4.props;
                            var6 = var4.key;
                            var0 = null;
                            var2 = var0 == var5;
                            var3 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun37456_ip = 32;
                                continue _fun37456
                            }
                        case 26:
                            var1 = var5.descriptor;
                        case 32:
                            if (!(var0 == var1)) {
                                _fun37456_ip = 67;
                                continue _fun37456
                            }
                        case 36:
                            var7 = var0 == var5;
                            var2 = undefined;
                            if (var7) {
                                _fun37456_ip = 64;
                                continue _fun37456
                            }
                        case 45:
                            var5 = var5.descriptors;
                            var7 = var0 == var5;
                            var2 = undefined;
                            if (var7) {
                                _fun37456_ip = 64;
                                continue _fun37456
                            }
                        case 60:
                            var2 = var5[var6];
                        case 64:
                            var1 = var2;
                        case 67:
                            var2 = var0 == var1;
                            var5 = undefined;
                            if (var2) {
                                _fun37456_ip = 96;
                                continue _fun37456
                            }
                        case 76:
                            var1 = var1.options;
                            var2 = var0 == var1;
                            var5 = undefined;
                            if (var2) {
                                _fun37456_ip = 96;
                                continue _fun37456
                            }
                        case 90:
                            var5 = var1.freezeOnBlur;
                        case 96:
                            if (!(var0 == var5)) {
                                _fun37456_ip = 133;
                                continue _fun37456
                            }
                        case 100:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 5;
                            var0 = var2[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.freezeEnabled;
                            var5 = var0.bind(var1)();
                        case 133:
                            var2 = _closure1_slot0;
                            var1 = 'nativeFabricUIManager';
                            var1 = var1 in var2;
                            var6 = _closure2_slot1;
                            var2 = arg1;
                            var2 = var6 - var2;
                            if (var1) {
                                _fun37456_ip = 174;
                                continue _fun37456
                            }
                        case 165:
                            var1 = 1;
                            var6 = var2 > var1;
                            _fun37456_ip = 181;
                            continue _fun37456;
                        case 174:
                            var1 = 2;
                            var6 = var2 > var1;
                        case 181:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var0 = 6;
                            var0 = var7[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            if (!var5) {
                                _fun37456_ip = 213;
                                continue _fun37456
                            }
                        case 210:
                            var5 = var6;
                        case 213:
                            var0.freeze = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var6 = var18.bind(var20)(var21, var6);
                var18 = var19.useEffect;
                var2 = function() { // Environment: var2
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = var2.stackUseEffectCallback;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var18.bind(var19)(var2);
                var18 = var5.name;
                var2 = 'GHWrapper';
                var19 = var2 !== var18;
                if (!var19) {
                    _fun37454_ip = 262;
                    continue _fun37454
                }
            case 258:
                var19 = var3 !== var16;
            case 262:
                var18 = _closure1_slot2;
                var2 = _closure1_slot3;
                var20 = 3;
                var2 = var2[var20];
                var18 = var18.bind(var3)(var2);
                var2 = 'Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.';
                var2 = var18.bind(var3)(var19, var2);
                var19 = var3 !== var16;
                if (!var19) {
                    _fun37454_ip = 305;
                    continue _fun37454
                }
            case 301:
                var19 = var10 === var9;
            case 305:
                if (!var19) {
                    _fun37454_ip = 312;
                    continue _fun37454
                }
            case 308:
                var19 = var3 === var8;
            case 312:
                var18 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var20];
                var18 = var18.bind(var3)(var2);
                var2 = 'Custom Screen Transition require screensRefs and currentScreenId to be provided.';
                var2 = var18.bind(var3)(var19, var2);
                var2 = _closure1_slot7;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.RNSScreensRefContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var9;
                var4 = {};
                var4.gestureDetectorBridge = var17;
                var4.goBackGesture = var16;
                var4.transitionAnimation = var15;
                var10 = var10 != var11;
                if (!var10) {
                    _fun37454_ip = 401;
                    continue _fun37454
                }
            case 398:
                var10 = var11;
            case 401:
                var4.screenEdgeGesture = var10;
                var4.screensRefs = var9;
                var4.currentScreenId = var8;
                var8 = _closure1_slot7;
                var9 = _closure1_slot2;
                var10 = _closure1_slot3;
                var7 = 7;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var9 = global;
                var11 = var9.Object;
                var10 = var11.assign;
                var9 = {};
                var9.onFinishTransitioning = var14;
                var9.ref = var13;
                var9.children = var6;
                var6 = {};
                var6 = var10.bind(var11)(var6, var12, var9);
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 4054, 4055, 4034, 4040, 4056]);