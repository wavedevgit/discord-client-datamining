// modules/launchpad/native/useLaunchPadPullTabMinimized.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun110512: for (var _fun110512_ip = 0;;) switch (_fun110512_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
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
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var8 = var3.NativeEventEmitter;
            var3 = var3.NativeModules;
            var6 = var3.DCDScrollTracker;
            var3 = undefined;
            if (!var6) {
                _fun110512_ip = 131;
                continue _fun110512
            }
        case 108:
            var7 = var8.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var8
                }
            });
            var12 = var7;
            var11 = var6;
            var6 = new var12[var8](var11, var10);
            var3 = var6 instanceof Object ? var6 : var7;
        case 131:
            var _closure1_slot3 = var3;
            var3 = {};
            var6 = 'function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}';
            var3.code = var6;
            var _closure1_slot4 = var3;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/launchpad/native/useLaunchPadPullTabMinimized.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                var1 = arg0;
                var6 = var1.launchPadSharedState;
                var _closure2_slot0 = var6;
                var8 = var1.launchPadPullTabState;
                var _closure2_slot1 = var8;
                var4 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 3;
                var1 = var9[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var1 = var5.useIsVoicePanelFullscreen;
                var7 = var1.bind(var5)();
                var _closure2_slot2 = var7;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 2;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.useSharedValue;
                    var0 = false;
                    var0 = var3.bind(var4)(var0);
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot2;
                    var3 = var4.useEffect;
                    var2 = new Array(1);
                    var2[0] = var0;
                    var1 = function() { // Environment: var1
                        _fun110515: for (var _fun110515_ip = 0;;) switch (_fun110515_ip) {
                            case 0:
                                var1 = -1;
                                var _closure4_slot0 = var1;
                                var3 = _closure1_slot3;
                                var1 = null;
                                var3 = var1 == var3;
                                var1 = undefined;
                                if (var3) {
                                    _fun110515_ip = 59;
                                    continue _fun110515
                                }
                            case 30:
                                var5 = _closure1_slot3;
                                var4 = var5.addListener;
                                var3 = 'isScrollingOrDragging';
                                var2 = function(arg0) { // Environment: var0
                                    _fun110516: for (var _fun110516_ip = 0;;) switch (_fun110516_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.isScrollingOrDragging;
                                            var1 = global;
                                            var5 = var1.clearTimeout;
                                            var4 = _closure4_slot0;
                                            var0 = undefined;
                                            var4 = var5.bind(var0)(var4);
                                            if (var3) {
                                                _fun110516_ip = 69;
                                                continue _fun110516
                                            }
                                        case 36:
                                            var4 = var1.setTimeout;
                                            var3 = function() { // Environment: var1
                                                var2 = _closure3_slot0;
                                                var1 = var2.set;
                                                var0 = false;
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var1 = 1000;
                                            var1 = var4.bind(var0)(var3, var1);
                                            _closure4_slot0 = var1;
                                            _fun110516_ip = 88;
                                            continue _fun110516;
                                        case 69:
                                            var3 = _closure3_slot0;
                                            var2 = var3.set;
                                            var1 = true;
                                            var1 = var2.bind(var3)(var1);
                                        case 88:
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var5)(var3, var2);
                            case 59:
                                var _closure4_slot1 = var1;
                                var0 = function() { // Environment: var0
                                    _fun110518: for (var _fun110518_ip = 0;;) switch (_fun110518_ip) {
                                        case 0:
                                            var0 = global;
                                            var3 = var0.clearTimeout;
                                            var2 = _closure4_slot0;
                                            var0 = undefined;
                                            var2 = var3.bind(var0)(var2);
                                            var3 = _closure4_slot1;
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun110518_ip = 46;
                                                continue _fun110518
                                            }
                                        case 32:
                                            var2 = _closure4_slot1;
                                            var1 = var2.remove;
                                            var1 = var1.bind(var2)();
                                        case 46:
                                            return var0;
                                    }
                                };
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var5 = var1.bind(var2)();
                var _closure2_slot3 = var5;
                var1 = 2;
                var1 = var9[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.useDerivedValue;
                var0 = function() {
                    _fun110519: for (var _fun110519_ip = 0;;) switch (_fun110519_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var0 = var0.minimized;
                            if (var0) {
                                _fun110519_ip = 29;
                                continue _fun110519
                            }
                        case 25:
                            var0 = _closure2_slot2;
                        case 29:
                            if (!var0) {
                                _fun110519_ip = 51;
                                continue _fun110519
                            }
                        case 32:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 0;
                            var0 = var3 <= var2;
                        case 51:
                            if (var0) {
                                _fun110519_ip = 67;
                                continue _fun110519
                            }
                        case 54:
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var0 = var1.bind(var2)();
                        case 67:
                            return var0;
                    }
                };
                var4 = {};
                var4.launchPadPullTabState = var8;
                var4.isVoicePanelOpen = var7;
                var4.launchPadSharedState = var6;
                var4.isMinimizedDuringScroll = var5;
                var0.__closure = var4;
                var4 = 14263056934448.0;
                var0.__workletHash = var4;
                var3 = _closure1_slot4;
                var0.__initData = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3721, 7951, 2]);