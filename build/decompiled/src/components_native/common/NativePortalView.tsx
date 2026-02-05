// components_native/common/NativePortalView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun70566: for (var _fun70566_ip = 0;;) switch (_fun70566_ip) {
        case 0:
            var5 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var6;
            var3 = global;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var7 = var6[var0];
            var4 = metroImportAll;
            var0 = undefined;
            var7 = var4.bind(var0)(var7);
            var _closure1_slot3 = var7;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var13 = var4.StyleSheet;
            var10 = var4.requireNativeComponent;
            var9 = var4.NativeEventEmitter;
            var8 = var4.NativeModules;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.jsx;
            var _closure1_slot4 = var4;
            var12 = var13.create;
            var4 = {};
            var14 = {};
            var15 = 'hidden';
            var14.overflow = var15;
            var4.base = var14;
            var4 = var12.bind(var13)(var4);
            var _closure1_slot5 = var4;
            var4 = 3;
            var4 = var6[var4];
            var12 = var5.bind(var0)(var4);
            var4 = var12.isAndroid;
            var4 = var4.bind(var12)();
            if (var4) {
                _fun70566_ip = 205;
                continue _fun70566
            }
        case 192:
            var4 = 'DCDPortalView';
            var4 = var10.bind(var0)(var4);
            _fun70566_ip = 217;
            continue _fun70566;
        case 205:
            var10 = 4;
            var10 = var6[var10];
            var4 = var11.bind(var0)(var10);
        case 217:
            var _closure1_slot6 = var4;
            var4 = var8.MediaPlayerManager;
            var _closure1_slot7 = var4;
            var8 = var8.DCDPortalViewManager;
            var _closure1_slot8 = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var9
                }
            });
            var19 = var8;
            var18 = var4;
            var4 = new var19[var9](var18, var17);
            var4 = var4 instanceof Object ? var4 : var8;
            var _closure1_slot9 = var4;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var19 = var4;
            var3 = new var19[var3](var18);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure1_slot10 = var3;
            var4 = var7.memo;
            var3 = function(arg0) { // Environment: var1
                _fun70567: for (var _fun70567_ip = 0;;) switch (_fun70567_ip) {
                    case 0:
                        var9 = arg0;
                        var5 = var9.style;
                        var6 = var9.children;
                        var2 = var9.paused;
                        var _closure2_slot0 = var2;
                        var1 = var9.muted;
                        var _closure2_slot1 = var1;
                        var4 = var9.onLoad;
                        var _closure2_slot2 = var4;
                        var8 = {
                            'style': 0,
                            'children': 0,
                            'paused': 0,
                            'muted': 0,
                            'onLoad': 0
                        };
                        var3 = null;
                        var13 = var8;
                        var12 = null;
                        var7 = silentSetPrototypeOf(var13, var12);
                        var13 = {};
                        var12 = var9;
                        var11 = var8;
                        var8 = copyDataProperties(var13, var12, var11);
                        var _closure2_slot3 = var8;
                        if (!(var3 == var6)) {
                            _fun70567_ip = 403;
                            continue _fun70567
                        }
                    case 93:
                        var3 = _closure1_slot3;
                        var9 = var3.useLayoutEffect;
                        var10 = var8.portal;
                        var6 = new Array(2);
                        var6[0] = var10;
                        var6[1] = var2;
                        var2 = function() { // Environment: var0
                            _fun70568: for (var _fun70568_ip = 0;;) switch (_fun70568_ip) {
                                case 0:
                                    var1 = _closure2_slot3;
                                    var2 = var1.portal;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun70568_ip = 55;
                                        continue _fun70568
                                    }
                                case 19:
                                    var3 = _closure1_slot7;
                                    var2 = var3.toggle;
                                    var1 = _closure2_slot3;
                                    var1 = var1.portal;
                                    var0 = _closure2_slot0;
                                    var0 = !var0;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 55:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var9.bind(var3)(var2, var6);
                        var6 = var3.useLayoutEffect;
                        var9 = var8.portal;
                        var2 = new Array(2);
                        var2[0] = var9;
                        var2[1] = var1;
                        var1 = function() { // Environment: var0
                            _fun70569: for (var _fun70569_ip = 0;;) switch (_fun70569_ip) {
                                case 0:
                                    var1 = _closure2_slot3;
                                    var2 = var1.portal;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun70569_ip = 52;
                                        continue _fun70569
                                    }
                                case 19:
                                    var3 = _closure1_slot7;
                                    var2 = var3.setMuted;
                                    var1 = _closure2_slot3;
                                    var1 = var1.portal;
                                    var0 = _closure2_slot1;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 52:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var6.bind(var3)(var1, var2);
                        var6 = var3.useLayoutEffect;
                        var2 = new Array(2);
                        var2[0] = var4;
                        var1 = var8.portal;
                        var2[1] = var1;
                        var1 = function() { // Environment: var0
                            _fun70570: for (var _fun70570_ip = 0;;) switch (_fun70570_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 3;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var1);
                                    var1 = var3.isAndroid;
                                    var1 = var1.bind(var3)();
                                    if (var1) {
                                        _fun70570_ip = 51;
                                        continue _fun70570
                                    }
                                case 38:
                                    var4 = _closure2_slot2;
                                    var3 = null;
                                    var1 = var3 == var4;
                                case 51:
                                    if (var1) {
                                        _fun70570_ip = 65;
                                        continue _fun70570
                                    }
                                case 54:
                                    var1 = _closure2_slot2;
                                    var1 = var1.bind(var2)();
                                case 65:
                                    var3 = _closure1_slot7;
                                    var2 = var3.setLoopPlayback;
                                    var0 = _closure2_slot3;
                                    var1 = var0.portal;
                                    var0 = true;
                                    var0 = var2.bind(var3)(var1, var0);
                                    var0 = function() { // Environment: var0
                                        _fun70571: for (var _fun70571_ip = 0;;) switch (_fun70571_ip) {
                                            case 0:
                                                var5 = _closure1_slot7;
                                                var4 = var5.setLoopPlayback;
                                                var0 = _closure2_slot3;
                                                var3 = var0.portal;
                                                var0 = false;
                                                var0 = var4.bind(var5)(var3, var0);
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var0 = 3;
                                                var3 = var3[var0];
                                                var0 = undefined;
                                                var4 = var4.bind(var0)(var3);
                                                var3 = var4.isAndroid;
                                                var3 = var3.bind(var4)();
                                                if (var3) {
                                                    _fun70571_ip = 96;
                                                    continue _fun70571
                                                }
                                            case 69:
                                                var5 = _closure1_slot8;
                                                var4 = var5.unregisterView;
                                                var3 = _closure2_slot3;
                                                var3 = var3.portal;
                                                var3 = var4.bind(var5)(var3);
                                                _fun70571_ip = 137;
                                                continue _fun70571;
                                            case 96:
                                                var4 = _closure1_slot1;
                                                var5 = _closure1_slot2;
                                                var3 = 5;
                                                var3 = var5[var3];
                                                var5 = var4.bind(var0)(var3);
                                                var4 = var5.unregisterView;
                                                var3 = _closure2_slot3;
                                                var3 = var3.portal;
                                                var3 = var4.bind(var5)(var3);
                                            case 137:
                                                var3 = _closure1_slot10;
                                                var2 = var3.add;
                                                var1 = _closure2_slot3;
                                                var1 = var1.portal;
                                                var1 = var2.bind(var3)(var1);
                                                return var0;
                                        }
                                    };
                                    return var0;
                            }
                        };
                        var1 = var6.bind(var3)(var1, var2);
                        var2 = var3.useCallback;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var4 = var8.portal;
                        var1[1] = var4;
                        var0 = function(arg0) { // Environment: var0
                            _fun70572: for (var _fun70572_ip = 0;;) switch (_fun70572_ip) {
                                case 0:
                                    var1 = _closure2_slot3;
                                    var2 = var1.portal;
                                    var1 = arg0;
                                    var1 = var1.nativeEvent;
                                    var1 = var1.portal;
                                    if (!(var2 === var1)) {
                                        _fun70572_ip = 52;
                                        continue _fun70572
                                    }
                                case 32:
                                    var2 = _closure2_slot2;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun70572_ip = 52;
                                        continue _fun70572
                                    }
                                case 42:
                                    var1 = _closure2_slot2;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 52:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var2.bind(var3)(var0, var1);
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 3;
                        var0 = var2[var0];
                        var4 = undefined;
                        var1 = var1.bind(var4)(var0);
                        var0 = var1.isAndroid;
                        var0 = var0.bind(var1)();
                        var3 = _closure1_slot4;
                        var2 = _closure1_slot6;
                        if (var0) {
                            _fun70567_ip = 341;
                            continue _fun70567
                        }
                    case 290:
                        var0 = {};
                        var13 = var0;
                        var12 = var8;
                        var1 = copyDataProperties(var13, var12);
                        var1 = _closure1_slot5;
                        var1 = var1.base;
                        var9 = new Array(2);
                        var9[0] = var1;
                        var9[1] = var5;
                        var1 = 'style';
                        var0[var1] = var9;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun70567_ip = 401;
                        continue _fun70567;
                    case 341:
                        var1 = {};
                        var13 = var1;
                        var12 = var8;
                        var8 = copyDataProperties(var13, var12);
                        var7 = _closure1_slot5;
                        var8 = var7.base;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var7[1] = var5;
                        var5 = 'style';
                        var1[var5] = var7;
                        var5 = 'onPortalViewLoaded';
                        var1[var5] = var6;
                        var0 = var3.bind(var4)(var2, var1);
                    case 401:
                        return var0;
                    case 403:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var13 = 'The <NativePortalView> component cannot contain children.';
                        var14 = var1;
                        var0 = new var14[var2](var13, var12);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var3 = var4.bind(var7)(var3);
            var4 = 6;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'components_native/common/NativePortalView.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var3 = function arg0() {
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = function arg0() {
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var1 = var2.changeProgress;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.seek = var2;
                var2 = function arg0() {
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var1 = var2.toggle;
                    var0 = arg0;
                    var0 = !var0;
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.pause = var2;
                var1 = function arg0, arg1, arg2() {
                    var9 = _closure2_slot0;
                    var4 = function arg0, arg1, arg2, arg3() {
                        var7 = arg0;
                        var5 = arg1;
                        var6 = arg2;
                        var4 = arg3;
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var5;
                        var _closure4_slot2 = var6;
                        var _closure4_slot3 = var4;
                        var3 = _closure1_slot3;
                        var2 = var3.useEffect;
                        var1 = new Array(4);
                        var1[0] = var7;
                        var1[1] = var6;
                        var1[2] = var5;
                        var1[3] = var4;
                        var0 = function() { // Environment: var0
                            var5 = _closure1_slot9;
                            var4 = var5.addListener;
                            var3 = 'MediaPlayerProgress';
                            var2 = function(arg0) { // Environment: var0
                                _fun70579: for (var _fun70579_ip = 0;;) switch (_fun70579_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.id;
                                        var3 = var0.time;
                                        var2 = var0.duration;
                                        var1 = _closure4_slot0;
                                        var1 = var4 === var1;
                                        if (!var1) {
                                            _fun70579_ip = 39;
                                            continue _fun70579
                                        }
                                    case 33:
                                        var4 = 0;
                                        var1 = var2 > var4;
                                    case 39:
                                        if (!var1) {
                                            _fun70579_ip = 54;
                                            continue _fun70579
                                        }
                                    case 42:
                                        var1 = _closure4_slot1;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var3, var2);
                                    case 54:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var3, var2);
                            var _closure5_slot0 = var2;
                            var5 = _closure1_slot9;
                            var4 = var5.addListener;
                            var3 = 'MediaPlayerDownloadProgress';
                            var2 = function(arg0) { // Environment: var0
                                _fun70580: for (var _fun70580_ip = 0;;) switch (_fun70580_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.id;
                                        var2 = var0.progressPercent;
                                        var4 = var0.totalDurationSeconds;
                                        var1 = _closure4_slot0;
                                        var1 = var3 === var1;
                                        if (!var1) {
                                            _fun70580_ip = 40;
                                            continue _fun70580
                                        }
                                    case 34:
                                        var3 = 0;
                                        var1 = var4 > var3;
                                    case 40:
                                        if (!var1) {
                                            _fun70580_ip = 53;
                                            continue _fun70580
                                        }
                                    case 43:
                                        var4 = _closure4_slot3;
                                        var3 = null;
                                        var1 = var3 != var4;
                                    case 53:
                                        if (!var1) {
                                            _fun70580_ip = 67;
                                            continue _fun70580
                                        }
                                    case 56:
                                        var1 = _closure4_slot3;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 67:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var3, var2);
                            var _closure5_slot1 = var2;
                            var4 = _closure1_slot9;
                            var3 = var4.addListener;
                            var2 = 'MediaPlayerPause';
                            var1 = function(arg0) { // Environment: var0
                                _fun70581: for (var _fun70581_ip = 0;;) switch (_fun70581_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.id;
                                        var2 = var0.paused;
                                        var1 = _closure4_slot0;
                                        if (!(var3 === var1)) {
                                            _fun70581_ip = 36;
                                            continue _fun70581
                                        }
                                    case 25:
                                        var1 = _closure4_slot2;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 36:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure5_slot2 = var1;
                            var0 = function() { // Environment: var0
                                var2 = _closure5_slot0;
                                var1 = var2.remove;
                                var1 = var1.bind(var2)();
                                var2 = _closure5_slot1;
                                var1 = var2.remove;
                                var1 = var1.bind(var2)();
                                var1 = _closure5_slot2;
                                var0 = var1.remove;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = undefined;
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = undefined;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.useSubscribe = var1;
                return var0;
            };
            var2.createPortalControls = var3;
            var3 = function arg0() {
                var2 = _closure1_slot10;
                var1 = var2.delete;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.markPortalAlive = var3;
            var1 = function arg0() {
                var2 = _closure1_slot10;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.isPortalExpired = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 8880, 8881, 2]);