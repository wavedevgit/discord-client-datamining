// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useCallback;
    var _closure1_slot2 = var4;
    var4 = var3.useEffect;
    var _closure1_slot3 = var4;
    var4 = var3.useMemo;
    var _closure1_slot4 = var4;
    var3 = var3.useRef;
    var _closure1_slot5 = var3;
    var1 = function arg0, arg1() {
        _fun46024: for (var _fun46024_ip = 0;;) switch (_fun46024_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var2 = _closure1_slot5;
                var4 = undefined;
                var1 = false;
                var7 = var2.bind(var4)(var1);
                var _closure2_slot2 = var7;
                var7 = var2.bind(var4)(var1);
                var _closure2_slot3 = var7;
                var1 = var2.bind(var4)(var1);
                var _closure2_slot4 = var1;
                var1 = global;
                var7 = var1.Date;
                var1 = var7.now;
                var1 = var1.bind(var7)();
                var1 = var2.bind(var4)(var1);
                var _closure2_slot5 = var1;
                var1 = var6.props;
                var11 = var1.data;
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useUnmountAwareAnimationFrame;
                var1 = var1.bind(var2)();
                var13 = var1.requestAnimationFrame;
                var _closure2_slot6 = var13;
                var1 = var6.hasLayout;
                var1 = var1.bind(var6)();
                var10 = 0;
                if (!var1) {
                    _fun46024_ip = 160;
                    continue _fun46024
                }
            case 145:
                var1 = var6.getWindowSize;
                var1 = var1.bind(var6)();
                var10 = var1.height;
            case 160:
                var1 = var6.hasLayout;
                var1 = var1.bind(var6)();
                var8 = 0;
                if (!var1) {
                    _fun46024_ip = 190;
                    continue _fun46024
                }
            case 175:
                var1 = var6.getChildContainerDimensions;
                var1 = var1.bind(var6)();
                var8 = var1.height;
            case 190:
                var1 = var6.hasLayout;
                var1 = var1.bind(var6)();
                var2 = 0;
                if (!var1) {
                    _fun46024_ip = 220;
                    continue _fun46024
                }
            case 205:
                var1 = var6.getWindowSize;
                var1 = var1.bind(var6)();
                var2 = var1.width;
            case 220:
                var1 = var6.hasLayout;
                var1 = var1.bind(var6)();
                var7 = 0;
                if (!var1) {
                    _fun46024_ip = 250;
                    continue _fun46024
                }
            case 235:
                var1 = var6.getChildContainerDimensions;
                var1 = var1.bind(var6)();
                var7 = var1.width;
            case 250:
                var12 = _closure1_slot2;
                var9 = new Array(1);
                var9[0] = var6;
                var1 = function() { // Environment: var0
                    _fun46025: for (var _fun46025_ip = 0;;) switch (_fun46025_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var5 = global;
                            var3 = var5.Date;
                            var0 = var3.now;
                            var0 = var0.bind(var3)();
                            var1.current = var0;
                            var0 = _closure2_slot0;
                            var0 = var0.props;
                            var12 = var0.onEndReached;
                            var8 = var0.onStartReached;
                            var1 = var0.maintainVisibleContentPosition;
                            var3 = var0.horizontal;
                            var14 = var0.onEndReachedThreshold;
                            var10 = var0.onStartReachedThreshold;
                            var9 = null;
                            var6 = var9 == var1;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun46025_ip = 96;
                                continue _fun46025
                            }
                        case 88:
                            var4 = var1.autoscrollToBottomThreshold;
                        case 96:
                            var6 = var9 != var4;
                            var1 = -1;
                            if (!var6) {
                                _fun46025_ip = 112;
                                continue _fun46025
                            }
                        case 109:
                            var1 = var4;
                        case 112:
                            if (var12) {
                                _fun46025_ip = 127;
                                continue _fun46025
                            }
                        case 115:
                            if (var8) {
                                _fun46025_ip = 127;
                                continue _fun46025
                            }
                        case 118:
                            var4 = 0;
                            if (!(!(var1 < var4))) {
                                _fun46025_ip = 466;
                                continue _fun46025
                            }
                        case 127:
                            var6 = _closure2_slot0;
                            var4 = var6.getIsFirstLayoutComplete;
                            var4 = var4.bind(var6)();
                            if (!var4) {
                                _fun46025_ip = 466;
                                continue _fun46025
                            }
                        case 147:
                            var11 = _closure2_slot0;
                            var4 = var11.getAbsoluteLastScrollOffset;
                            var7 = var4.bind(var11)();
                            var4 = var11.getChildContainerDimensions;
                            var4 = var4.bind(var11)();
                            var6 = var11.getWindowSize;
                            var13 = var6.bind(var11)();
                            var11 = true;
                            var6 = var11 === var3;
                            if (var6) {
                                _fun46025_ip = 197;
                                continue _fun46025
                            }
                        case 190:
                            var3 = var13.height;
                            _fun46025_ip = 202;
                            continue _fun46025;
                        case 197:
                            var3 = var13.width;
                        case 202:
                            if (var6) {
                                _fun46025_ip = 212;
                                continue _fun46025
                            }
                        case 205:
                            var13 = var4.height;
                            _fun46025_ip = 217;
                            continue _fun46025;
                        case 212:
                            var13 = var4.width;
                        case 217:
                            var4 = _closure2_slot0;
                            var4 = var4.firstItemOffset;
                            var4 = var13 + var4;
                            if (!var12) {
                                _fun46025_ip = 332;
                                continue _fun46025
                            }
                        case 234:
                            var15 = var9 != var14;
                            var13 = 0.5;
                            if (!var15) {
                                _fun46025_ip = 254;
                                continue _fun46025
                            }
                        case 251:
                            var13 = var14;
                        case 254:
                            var13 = var13 * var3;
                            var16 = var5.Math;
                            var15 = var16.ceil;
                            var14 = var7 + var3;
                            var14 = var15.bind(var16)(var14);
                            var13 = var4 - var13;
                            var13 = var14 >= var13;
                            var14 = var13;
                            if (!var14) {
                                _fun46025_ip = 305;
                                continue _fun46025
                            }
                        case 293:
                            var15 = _closure2_slot2;
                            var15 = var15.current;
                            var14 = !var15;
                        case 305:
                            if (!var14) {
                                _fun46025_ip = 322;
                                continue _fun46025
                            }
                        case 308:
                            var14 = _closure2_slot2;
                            var14.current = var11;
                            var12 = var12.bind(var0)();
                        case 322:
                            var12 = _closure2_slot2;
                            var12.current = var13;
                        case 332:
                            if (!var8) {
                                _fun46025_ip = 408;
                                continue _fun46025
                            }
                        case 335:
                            var12 = var9 != var10;
                            var9 = 0.2;
                            if (!var12) {
                                _fun46025_ip = 355;
                                continue _fun46025
                            }
                        case 352:
                            var9 = var10;
                        case 355:
                            var9 = var9 * var3;
                            var9 = var7 <= var9;
                            var10 = var9;
                            if (!var10) {
                                _fun46025_ip = 381;
                                continue _fun46025
                            }
                        case 369:
                            var12 = _closure2_slot3;
                            var12 = var12.current;
                            var10 = !var12;
                        case 381:
                            if (!var10) {
                                _fun46025_ip = 398;
                                continue _fun46025
                            }
                        case 384:
                            var10 = _closure2_slot3;
                            var10.current = var11;
                            var8 = var8.bind(var0)();
                        case 398:
                            var8 = _closure2_slot3;
                            var8.current = var9;
                        case 408:
                            if (var6) {
                                _fun46025_ip = 466;
                                continue _fun46025
                            }
                        case 411:
                            var6 = 0;
                            if (!(var1 >= var6)) {
                                _fun46025_ip = 466;
                                continue _fun46025
                            }
                        case 417:
                            var1 = var1 * var3;
                            var6 = var5.Math;
                            var5 = var6.ceil;
                            var3 = var7 + var3;
                            var3 = var5.bind(var6)(var3);
                            var1 = var4 - var1;
                            var1 = var3 >= var1;
                            var2 = _closure2_slot4;
                            var1 = !var1;
                            var1 = !var1;
                            var2.current = var1;
                        case 466:
                            return var0;
                    }
                };
                var1 = var12.bind(var4)(var1, var9);
                var9 = new Array(3);
                var9[0] = var13;
                var9[1] = var5;
                var9[2] = var6;
                var5 = function() { // Environment: var0
                    _fun46026: for (var _fun46026_ip = 0;;) switch (_fun46026_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            if (!var1) {
                                _fun46026_ip = 45;
                                continue _fun46026
                            }
                        case 15:
                            var2 = _closure2_slot4;
                            var1 = false;
                            var2.current = var1;
                            var2 = _closure2_slot6;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                _fun46027: for (var _fun46027_ip = 0;;) switch (_fun46027_ip) {
                                    case 0:
                                        var0 = _closure2_slot0;
                                        var0 = var0.props;
                                        var4 = var0.maintainVisibleContentPosition;
                                        var1 = null;
                                        var5 = var1 == var4;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun46027_ip = 39;
                                            continue _fun46027
                                        }
                                    case 31:
                                        var3 = var4.animateAutoScrollToBottom;
                                    case 39:
                                        var4 = var1 == var3;
                                        if (var4) {
                                            _fun46027_ip = 49;
                                            continue _fun46027
                                        }
                                    case 46:
                                        var4 = var3;
                                    case 49:
                                        var2 = _closure2_slot1;
                                        var3 = var2.current;
                                        if (!(var1 != var3)) {
                                            _fun46027_ip = 80;
                                            continue _fun46027
                                        }
                                    case 62:
                                        var2 = var3.scrollToEnd;
                                        var1 = {};
                                        var1.animated = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 80:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var1)(var0);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var12.bind(var4)(var5, var9);
                var _closure2_slot7 = var5;
                var13 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var11;
                var9 = function() { // Environment: var0
                    var1 = _closure2_slot2;
                    var0 = false;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var9 = var13.bind(var4)(var9, var12);
                var3 = _closure1_slot3;
                var9 = new Array(4);
                var9[0] = var11;
                var9[1] = var5;
                var9[2] = var10;
                var9[3] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var3.bind(var4)(var2, var9);
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var6 = var6.firstItemOffset;
                var2[2] = var6;
                var2[3] = var5;
                var0 = function() { // Environment: var0
                    _fun46030: for (var _fun46030_ip = 0;;) switch (_fun46030_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0.Date;
                            var0 = var1.now;
                            var2 = var0.bind(var1)();
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var2 = var2 - var1;
                            var1 = 100;
                            if (!(var2 >= var1)) {
                                _fun46030_ip = 50;
                                continue _fun46030
                            }
                        case 40:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0, var2);
                var0 = {};
                var0.checkBounds = var1;
                return var0;
        }
    };
    var2.useBoundDetection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5150]);