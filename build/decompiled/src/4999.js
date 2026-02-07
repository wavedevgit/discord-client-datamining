// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var8 = var7.useContext;
    var _closure1_slot3 = var8;
    var8 = var7.useEffect;
    var _closure1_slot4 = var8;
    var8 = var7.useMemo;
    var _closure1_slot5 = var8;
    var7 = var7.useRef;
    var _closure1_slot6 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        _fun44939: for (var _fun44939_ip = 0;;) switch (_fun44939_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot3;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var3.bind(var4)(var0);
                var0 = var5.gesture;
                if (var0) {
                    _fun44939_ip = 84;
                    continue _fun44939
                }
            case 48:
                var0 = global;
                var6 = var0.Error;
                var0 = var6.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var20 = 'GestureDetector must have a gesture prop provided.';
                var21 = var3;
                var0 = new var21[var6](var20, var19);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 84:
                var14 = var5.gesture;
                var _closure2_slot0 = var14;
                var6 = var5;
                var7 = var14;
                var8 = undefined;
                var9 = undefined;
                var0 = ['userSelect', 'enableContextMenu', 'touchAction'];
                var3 = var0[Symbol.iterator];
                var0 = var3().next;
            case 117:
                var11 = var0().value;
                var10 = var3;
                if (!(var10 !== var4)) {
                    _fun44939_ip = 208;
                    continue _fun44939
                }
            case 128: // try_start_1
                var8 = var11;
                var10 = var6;
                var10 = var10[var11];
                var9 = var10;
                if (!(var4 !== var10)) {
                    _fun44939_ip = 199;
                    continue _fun44939
                }
            case 145:
                var11 = var7;
                var10 = var11.toGestureArray;
                var12 = var10.bind(var11)();
                var10 = var12;
                var11 = var10[Symbol.iterator];
                var10 = var11().next;
            case 164:
                var12 = var10().value;
                var13 = var11;
                if (!(var13 !== var4)) {
                    _fun44939_ip = 199;
                    continue _fun44939
                }
            case 175: // try_start_0
                var15 = var12.config;
                var13 = var8;
                var12 = var9;
                var15[var13] = var12;
            case 190: // try_end0
                _fun44939_ip = 164;
                continue _fun44939;
            case 192: // catch_target0
                CatchBlockStart(arg_register = 10);
                var11.return();
                throw var10;
            case 199: // try_end1
                _fun44939_ip = 117;
                continue _fun44939;
            case 201: // catch_target1
                CatchBlockStart(arg_register = 0);
                var3.return();
                throw var0;
            case 208:
                var6 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var14;
                var0 = function() { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.toGestureArray;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var6.bind(var4)(var0, var3);
                var _closure2_slot1 = var13;
                var3 = var13.some;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.shouldUseReanimated;
                    return var0;
                };
                var0 = var3.bind(var13)(var0);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 4;
                var3 = var11[var3];
                var6 = var10.bind(var4)(var3);
                var3 = var6.useWebEventHandlers;
                var12 = var3.bind(var6)();
                var _closure2_slot2 = var12;
                var6 = _closure1_slot6;
                var8 = false;
                var3 = {
                    'firstRender': true,
                    'viewRef': null,
                    'previousViewTag': 4294967295,
                    'forceRebuildReanimatedEvent': false
                };
                var3 = var6.bind(var4)(var3);
                var3 = var3.current;
                var _closure2_slot3 = var3;
                var9 = _closure1_slot7;
                var7 = var9.useRef;
                var6 = {
                    'attachedGestures': null,
                    'animatedEventHandler': null,
                    'animatedHandlers': null,
                    'shouldUseReanimated': null,
                    'isMounted': false
                };
                var15 = new Array(0);
                var6.attachedGestures = var15;
                var6.shouldUseReanimated = var0;
                var6 = var7.bind(var9)(var6);
                var6 = var6.current;
                var _closure2_slot4 = var6;
                var7 = 5;
                var7 = var11[var7];
                var9 = var10.bind(var4)(var7);
                var7 = var9.useDetectorUpdater;
                var21 = var9;
                var20 = var3;
                var19 = var6;
                var18 = var13;
                var17 = var14;
                var16 = var12;
                var9 = var21[var7](var20, var19, var18, var17, var16, var15);
                var _closure2_slot5 = var9;
                var7 = 6;
                var7 = var11[var7];
                var10 = var10.bind(var4)(var7);
                var7 = var10.useViewRefHandler;
                var7 = var7.bind(var10)(var3, var9);
                var12 = var3.firstRender;
                if (var12) {
                    _fun44939_ip = 455;
                    continue _fun44939
                }
            case 449:
                var12 = var3.forceRebuildReanimatedEvent;
            case 455:
                if (var12) {
                    _fun44939_ip = 490;
                    continue _fun44939
                }
            case 458:
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 7;
                var10 = var14[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.needsToReattach;
                var12 = var10.bind(var11)(var6, var13);
            case 490:
                var3.forceRebuildReanimatedEvent = var8;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = 8;
                var10 = var8[var10];
                var11 = var3.bind(var4)(var10);
                var10 = var11.useAnimatedGesture;
                var10 = var10.bind(var11)(var6, var12);
                var10 = 9;
                var10 = var8[var10];
                var13 = var3.bind(var4)(var10);
                var12 = var13.useIsomorphicLayoutEffect;
                var11 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var1 = var5[var1];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var1);
                    var1 = _closure2_slot3;
                    var1 = var1.viewRef;
                    var3 = var3.bind(var2)(var1);
                    var6 = _closure2_slot4;
                    var1 = true;
                    var6.isMounted = var1;
                    var1 = _closure1_slot0;
                    var0 = 11;
                    var0 = var5[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.attachHandlers;
                    var0 = {};
                    var5 = _closure2_slot4;
                    var0.preparedGesture = var5;
                    var5 = _closure2_slot0;
                    var0.gestureConfig = var5;
                    var5 = _closure2_slot1;
                    var0.gesturesToAttach = var5;
                    var4 = _closure2_slot2;
                    var0.webEventHandlersRef = var4;
                    var0.viewTag = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot4;
                        var0 = false;
                        var2.isMounted = var0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.dropHandlers;
                        var1 = _closure2_slot4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var10 = new Array(0);
                var10 = var12.bind(var13)(var11, var10);
                var11 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var5;
                var2 = function() { // Environment: var2
                    _fun44944: for (var _fun44944_ip = 0;;) switch (_fun44944_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.firstRender;
                            if (var1) {
                                _fun44944_ip = 28;
                                continue _fun44944
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun44944_ip = 40;
                            continue _fun44944;
                        case 28:
                            var1 = _closure2_slot3;
                            var0 = false;
                            var1.firstRender = var0;
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var4)(var2, var10);
                var2 = 13;
                var2 = var8[var2];
                var8 = var3.bind(var4)(var2);
                var3 = var8.useMountReactions;
                var2 = var5.discordOnErrorHandler;
                var2 = var3.bind(var8)(var9, var6, var2);
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                if (var0) {
                    _fun44939_ip = 671;
                    continue _fun44939
                }
            case 642:
                var2 = var1.Wrap;
                var0 = {};
                var0.ref = var7;
                var8 = var5.children;
                var0.children = var8;
                var0 = var3.bind(var4)(var2, var0);
                _fun44939_ip = 709;
                continue _fun44939;
            case 671:
                var2 = var1.AnimatedWrap;
                var1 = {};
                var1.ref = var7;
                var6 = var6.animatedEventHandler;
                var1.onGestureHandlerEvent = var6;
                var5 = var5.children;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 709:
                return var0;
        }
    };
    var2.GestureDetector = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4978, 5000, 5004, 5009, 5005, 5010, 5011, 4989, 5007, 5006, 5012, 5013]);