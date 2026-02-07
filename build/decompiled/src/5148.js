// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useCallback;
    var _closure1_slot4 = var6;
    var6 = var3.useImperativeHandle;
    var _closure1_slot5 = var6;
    var6 = var3.useMemo;
    var _closure1_slot6 = var6;
    var6 = var3.useRef;
    var _closure1_slot7 = var6;
    var3 = var3.useState;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.I18nManager;
    var _closure1_slot9 = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        var5 = arg0;
        var9 = arg2;
        var4 = arg3;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var9;
        var _closure2_slot2 = var4;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 4;
        var1 = var7[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var1);
        var1 = var3.useUnmountFlag;
        var12 = var1.bind(var3)();
        var _closure2_slot3 = var12;
        var3 = _closure1_slot8;
        var1 = 0;
        var11 = var3.bind(var8)(var1);
        var10 = _closure1_slot3;
        var3 = 2;
        var3 = var10.bind(var8)(var11, var3);
        var1 = var3[var1];
        var1 = 1;
        var1 = var3[var1];
        var _closure2_slot4 = var1;
        var3 = _closure1_slot7;
        var1 = false;
        var10 = var3.bind(var8)(var1);
        var _closure2_slot5 = var10;
        var1 = var3.bind(var8)(var1);
        var _closure2_slot6 = var1;
        var1 = var5.getDataLength;
        var1 = var1.bind(var5)();
        var1 = var3.bind(var8)(var1);
        var _closure2_slot7 = var1;
        var1 = 5;
        var1 = var7[var1];
        var2 = var2.bind(var8)(var1);
        var1 = var2.useUnmountAwareTimeout;
        var1 = var1.bind(var2)();
        var2 = var1.setTimeout;
        var _closure2_slot8 = var2;
        var1 = var3.bind(var8)(var8);
        var _closure2_slot9 = var1;
        var1 = var3.bind(var8)(var8);
        var _closure2_slot10 = var1;
        var1 = new Array(0);
        var1 = var3.bind(var8)(var1);
        var _closure2_slot11 = var1;
        var10 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var5;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun45948: for (var _fun45948_ip = 0;;) switch (_fun45948_ip) {
                case 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var3.updateScrollOffset;
                    var0 = arg0;
                    var2 = var2.bind(var3)(var0);
                    var0 = undefined;
                    if (!(var0 === var2)) {
                        _fun45948_ip = 36;
                        continue _fun45948
                    }
                case 30:
                    var2 = var4.bind(var0)();
                    _fun45948_ip = 71;
                    continue _fun45948;
                case 36:
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure2_slot4;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 1;
                        var0 = var1 + var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                case 71:
                    return var0;
            }
        };
        var1 = var10.bind(var8)(var1, var3);
        var _closure2_slot12 = var1;
        var7 = new Array(1);
        var7[0] = var5;
        var3 = function() { // Environment: var0
            _fun45950: for (var _fun45950_ip = 0;;) switch (_fun45950_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = var2.getIsFirstLayoutComplete;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun45950_ip = 203;
                        continue _fun45950
                    }
                case 23:
                    var2 = _closure2_slot0;
                    var0 = var2.hasStableDataKeys;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun45950_ip = 203;
                        continue _fun45950
                    }
                case 43:
                    var2 = _closure2_slot0;
                    var0 = var2.getDataLength;
                    var0 = var0.bind(var2)();
                    var3 = 0;
                    if (!(var0 > var3)) {
                        _fun45950_ip = 203;
                        continue _fun45950
                    }
                case 66:
                    var2 = _closure2_slot0;
                    var0 = var2.shouldMaintainVisibleContentPosition;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun45950_ip = 203;
                        continue _fun45950
                    }
                case 83:
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.max;
                    var6 = _closure2_slot0;
                    var2 = var6.computeVisibleIndices;
                    var2 = var2.bind(var6)();
                    var2 = var2.startIndex;
                    var5 = var4.bind(var5)(var3, var2);
                    var2 = undefined;
                    var2 = var2 !== var5;
                    if (!var2) {
                        _fun45950_ip = 135;
                        continue _fun45950
                    }
                case 131:
                    var2 = var5 >= var3;
                case 135:
                    if (!var2) {
                        _fun45950_ip = 203;
                        continue _fun45950
                    }
                case 138:
                    var4 = _closure2_slot9;
                    var2 = _closure2_slot0;
                    var3 = var2.getDataKey;
                    var3 = var3.bind(var2)(var5);
                    var4.current = var3;
                    var1 = _closure2_slot10;
                    var4 = var0.Object;
                    var3 = var4.assign;
                    var0 = var2.getLayout;
                    var2 = var0.bind(var2)(var5);
                    var0 = {};
                    var0 = var3.bind(var4)(var0, var2);
                    var1.current = var0;
                case 203:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var10.bind(var8)(var3, var7);
        var _closure2_slot13 = var3;
        var7 = new Array(6);
        var7[0] = var5;
        var7[1] = var4;
        var7[2] = var9;
        var7[3] = var2;
        var7[4] = var1;
        var7[5] = var3;
        var4 = function() { // Environment: var0
            _fun45951: for (var _fun45951_ip = 0;;) switch (_fun45951_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var2 = var4.props;
                    var8 = var2.horizontal;
                    var10 = var2.data;
                    var3 = _closure2_slot11;
                    var5 = var3.current;
                    var2 = new Array(0);
                    var3.current = var2;
                    var3 = var5.forEach;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2);
                    var2 = var4.getDataLength;
                    var3 = var2.bind(var4)();
                    var2 = var4.getIsFirstLayoutComplete;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun45951_ip = 615;
                        continue _fun45951
                    }
                case 85:
                    var4 = _closure2_slot0;
                    var2 = var4.hasStableDataKeys;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun45951_ip = 615;
                        continue _fun45951
                    }
                case 105:
                    var6 = 0;
                    if (!(var3 > var6)) {
                        _fun45951_ip = 615;
                        continue _fun45951
                    }
                case 114:
                    var4 = _closure2_slot0;
                    var2 = var4.shouldMaintainVisibleContentPosition;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun45951_ip = 615;
                        continue _fun45951
                    }
                case 134:
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    var2 = var3 !== var2;
                    var3 = _closure2_slot9;
                    var3 = var3.current;
                    if (!var3) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 162:
                    var4 = _closure2_slot0;
                    var3 = var4.getEngagedIndices;
                    var5 = var3.bind(var4)();
                    var4 = var5.findValue;
                    var3 = function(arg0) { // Environment: var1
                        var3 = _closure2_slot0;
                        var2 = var3.getDataKey;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var0 = _closure2_slot9;
                        var0 = var0.current;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var13 = var4.bind(var5)(var3);
                    var3 = null;
                    if (!(var3 == var13)) {
                        _fun45951_ip = 236;
                        continue _fun45951
                    }
                case 200:
                    var4 = undefined;
                    if (!var2) {
                        _fun45951_ip = 233;
                        continue _fun45951
                    }
                case 205:
                    var7 = var3 == var10;
                    var5 = undefined;
                    if (var7) {
                        _fun45951_ip = 230;
                        continue _fun45951
                    }
                case 214:
                    var9 = var10.findIndex;
                    var7 = function(arg0, arg1) { // Environment: var1
                        var3 = _closure2_slot0;
                        var2 = var3.getDataKey;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var0 = _closure2_slot9;
                        var0 = var0.current;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var5 = var9.bind(var10)(var7);
                case 230:
                    var4 = var5;
                case 233:
                    var13 = var4;
                case 236:
                    var4 = undefined;
                    if (!(var4 !== var13)) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 245:
                    if (!(var13 >= var6)) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 252:
                    var7 = _closure2_slot0;
                    var5 = var7.getLayout;
                    var7 = var5.bind(var7)(var13);
                    if (var8) {
                        _fun45951_ip = 295;
                        continue _fun45951
                    }
                case 270:
                    var9 = var7.y;
                    var5 = _closure2_slot10;
                    var5 = var5.current;
                    var5 = var5.y;
                    var5 = var9 - var5;
                    _fun45951_ip = 318;
                    continue _fun45951;
                case 295:
                    var9 = var7.x;
                    var7 = _closure2_slot10;
                    var7 = var7.current;
                    var7 = var7.x;
                    var5 = var9 - var7;
                case 318:
                    var9 = _closure2_slot10;
                    var7 = global;
                    var12 = var7.Object;
                    var11 = var12.assign;
                    var10 = _closure2_slot0;
                    var7 = var10.getLayout;
                    var10 = var7.bind(var10)(var13);
                    var7 = {};
                    var7 = var11.bind(var12)(var7, var10);
                    var9.current = var7;
                    if (!(var6 !== var5)) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 371:
                    var6 = _closure2_slot5;
                    var6 = var6.current;
                    if (var6) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 386:
                    var6 = _closure2_slot0;
                    var6 = var6.animationOptimizationsEnabled;
                    if (var6) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 402:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 6;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.PlatformConfig;
                    var6 = var6.supportsOffsetCorrection;
                    if (var6) {
                        _fun45951_ip = 519;
                        continue _fun45951
                    }
                case 440:
                    var6 = {};
                    var9 = _closure2_slot0;
                    var7 = var9.getAbsoluteLastScrollOffset;
                    var7 = var7.bind(var9)();
                    var7 = var7 + var5;
                    if (var8) {
                        _fun45951_ip = 479;
                        continue _fun45951
                    }
                case 463:
                    var6.y = var7;
                    var8 = false;
                    var6.animated = var8;
                    var8 = var6;
                    _fun45951_ip = 493;
                    continue _fun45951;
                case 479:
                    var6.x = var7;
                    var7 = false;
                    var6.animated = var7;
                    var8 = var6;
                case 493:
                    var6 = _closure2_slot1;
                    var7 = var6.current;
                    if (!(var3 != var7)) {
                        _fun45951_ip = 543;
                        continue _fun45951
                    }
                case 506:
                    var6 = var7.scrollTo;
                    var6 = var6.bind(var7)(var8);
                    _fun45951_ip = 543;
                    continue _fun45951;
                case 519:
                    var6 = _closure2_slot2;
                    var6 = var6.current;
                    if (!(var3 != var6)) {
                        _fun45951_ip = 543;
                        continue _fun45951
                    }
                case 532:
                    var3 = var6.scrollBy;
                    var3 = var3.bind(var6)(var5);
                case 543:
                    if (!var2) {
                        _fun45951_ip = 605;
                        continue _fun45951
                    }
                case 546:
                    var6 = _closure2_slot12;
                    var3 = _closure2_slot0;
                    var2 = var3.getAbsoluteLastScrollOffset;
                    var2 = var2.bind(var3)();
                    var5 = var2 + var5;
                    var2 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var6.bind(var4)(var5, var2);
                    var2 = true;
                    var3.ignoreScrollEvents = var2;
                    var3 = _closure2_slot8;
                    var2 = function() { // Environment: var1
                        var1 = _closure2_slot0;
                        var0 = false;
                        var1.ignoreScrollEvents = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                case 605:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 615:
                    var1 = _closure2_slot7;
                    var2 = _closure2_slot0;
                    var0 = var2.getDataLength;
                    var0 = var0.bind(var2)();
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var10.bind(var8)(var4, var7);
        var11 = _closure1_slot6;
        var7 = new Array(5);
        var7[0] = var5;
        var7[1] = var9;
        var7[2] = var2;
        var7[3] = var12;
        var7[4] = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var3 = function() {
                var0 = _closure2_slot0;
                var0 = var0.props;
                return var0;
            };
            var4 = undefined;
            var2 = 'props';
            Object.defineProperty(var0, var2, {
                get: var3,
                set: var4,
                enumerable: true
            });
            var2 = function arg0() {
                _fun45959: for (var _fun45959_ip = 0;;) switch (_fun45959_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = var0.offset;
                        var1 = var0.animated;
                        var2 = var0.skipFirstItemOffset;
                        var0 = undefined;
                        var7 = var0 === var2;
                        if (var7) {
                            _fun45959_ip = 33;
                            continue _fun45959
                        }
                    case 30:
                        var7 = var2;
                    case 33:
                        var3 = _closure2_slot0;
                        var3 = var3.props;
                        var6 = var3.horizontal;
                        var3 = _closure2_slot1;
                        var3 = var3.current;
                        if (!var3) {
                            _fun45959_ip = 282;
                            continue _fun45959
                        }
                    case 66:
                        var4 = _closure1_slot9;
                        var4 = var4.isRTL;
                        if (!var4) {
                            _fun45959_ip = 85;
                            continue _fun45959
                        }
                    case 82:
                        var4 = var6;
                    case 85:
                        var5 = var10;
                        if (!var4) {
                            _fun45959_ip = 183;
                            continue _fun45959
                        }
                    case 91:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 7;
                        var3 = var8[var3];
                        var9 = var4.bind(var0)(var3);
                        var8 = var9.adjustOffsetForRTL;
                        var11 = _closure2_slot0;
                        var3 = var11.getChildContainerDimensions;
                        var3 = var3.bind(var11)();
                        var4 = var3.width;
                        var3 = var11.getWindowSize;
                        var3 = var3.bind(var11)();
                        var3 = var3.width;
                        var4 = var8.bind(var9)(var10, var4, var3);
                        var3 = _closure2_slot0;
                        var8 = var3.firstItemOffset;
                        if (var7) {
                            _fun45959_ip = 176;
                            continue _fun45959
                        }
                    case 171:
                        var3 = -var8;
                        _fun45959_ip = 179;
                        continue _fun45959;
                    case 176:
                        var3 = var8;
                    case 179:
                        var5 = var4 + var3;
                    case 183:
                        var4 = 0;
                        var3 = 0;
                        if (var7) {
                            _fun45959_ip = 200;
                            continue _fun45959
                        }
                    case 190:
                        var7 = _closure2_slot0;
                        var3 = var7.firstItemOffset;
                    case 200:
                        var5 = var5 + var3;
                        var3 = {};
                        if (var6) {
                            _fun45959_ip = 222;
                            continue _fun45959
                        }
                    case 209:
                        var3.x = var4;
                        var3.y = var5;
                        var7 = var3;
                        _fun45959_ip = 233;
                        continue _fun45959;
                    case 222:
                        var3.x = var5;
                        var3.y = var4;
                        var7 = var3;
                    case 233:
                        var2 = _closure2_slot1;
                        var3 = var2.current;
                        var2 = var3.scrollTo;
                        var4 = global;
                        var6 = var4.Object;
                        var5 = var6.assign;
                        var4 = {};
                        var4.animated = var1;
                        var1 = {};
                        var1 = var5.bind(var6)(var1, var7, var4);
                        var1 = var2.bind(var3)(var1);
                    case 282:
                        return var0;
                }
            };
            var0.scrollToOffset = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.markLayoutManagerDirty;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0.clearLayoutCacheOnUpdate = var2;
            var2 = function() {
                var0 = _closure2_slot1;
                var1 = var0.current;
                var0 = var1.flashScrollIndicators;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0.flashScrollIndicators = var2;
            var2 = function() {
                var0 = _closure2_slot1;
                var0 = var0.current;
                return var0;
            };
            var0.getNativeScrollRef = var2;
            var2 = function() {
                var0 = _closure2_slot1;
                var1 = var0.current;
                var0 = var1.getScrollResponder;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.getScrollResponder = var2;
            var2 = function() {
                var0 = _closure2_slot1;
                var1 = var0.current;
                var0 = var1.getScrollableNode;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.getScrollableNode = var2;
            var3 = _closure1_slot2;
            var2 = function*() { // Environment: var1
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun45966: for (var _fun45966_ip = 0;;) switch (_fun45966_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun45966_ip = 180;
                                continue _fun45966
                            }
                        case 12:
                            var1 = undefined;
                            var5 = undefined;
                            var _closure5_slot0 = var1;
                            var3 = arguments.length;
                            var4 = 0;
                            if (!(var3 > var4)) {
                                _fun45966_ip = 37;
                                continue _fun45966
                            }
                        case 29:
                            var3 = arguments[var4];
                            if (!(var1 === var3)) {
                                _fun45966_ip = 41;
                                continue _fun45966
                            }
                        case 37:
                            var3 = {};
                            _fun45966_ip = 45;
                            continue _fun45966;
                        case 41:
                            var3 = arguments[var4];
                        case 45:
                            var8 = var3.animated;
                            _closure5_slot0 = var8;
                            var5 = _closure2_slot0;
                            var5 = var5.props;
                            var5 = var5.data;
                            if (!var5) {
                                _fun45966_ip = 162;
                                continue _fun45966
                            }
                        case 75:
                            var6 = var5.length;
                            if (!(var6 > var4)) {
                                _fun45966_ip = 162;
                                continue _fun45966
                            }
                        case 84:
                            var6 = var5.length;
                            var5 = 1;
                            var9 = var6 - var5;
                            var6 = _closure2_slot0;
                            var5 = var6.getEngagedIndices;
                            var6 = var5.bind(var6)();
                            var5 = var6.includes;
                            var5 = var5.bind(var6)(var9);
                            if (var5) {
                                _fun45966_ip = 162;
                                continue _fun45966
                            }
                        case 123:
                            var7 = _closure2_slot14;
                            var6 = var7.scrollToIndex;
                            var5 = {};
                            var5.index = var9;
                            var5.animated = var8;
                            var5 = var6.bind(var7)(var5);
                            SaveGenerator(address = 153);
                        case 151:
                            return var5;
                        case 153:
                            ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                            if (!var6) {
                                _fun45966_ip = 162;
                                continue _fun45966
                            }
                        case 159:
                            return var5;
                        case 162:
                            var3 = _closure2_slot8;
                            var2 = function() { // Environment: var2
                                _fun45967: for (var _fun45967_ip = 0;;) switch (_fun45967_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun45967_ip = 43;
                                            continue _fun45967
                                        }
                                    case 18:
                                        var1 = var2.scrollToEnd;
                                        var0 = {};
                                        var3 = _closure5_slot0;
                                        var0.animated = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 43:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var1)(var2, var4);
                            return var1;
                        case 180:
                            return var0;
                    }
                };
                return var0;
            };
            var2 = var3.bind(var4)(var2);
            var _closure3_slot0 = var2;
            var2 = function() {
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0.scrollToEnd = var2;
            var2 = function() {
                _fun45969: for (var _fun45969_ip = 0;;) switch (_fun45969_ip) {
                    case 0:
                        var0 = undefined;
                        var2 = undefined;
                        var1 = arguments.length;
                        var5 = 0;
                        if (!(var1 > var5)) {
                            _fun45969_ip = 21;
                            continue _fun45969
                        }
                    case 13:
                        var1 = arguments[var5];
                        if (!(var0 === var1)) {
                            _fun45969_ip = 25;
                            continue _fun45969
                        }
                    case 21:
                        var1 = {};
                        _fun45969_ip = 29;
                        continue _fun45969;
                    case 25:
                        var1 = arguments[var5];
                    case 29:
                        var4 = var1.animated;
                        var3 = _closure2_slot14;
                        var2 = var3.scrollToOffset;
                        var1 = {};
                        var1.offset = var5;
                        var1.animated = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var0.scrollToTop = var2;
            var2 = function arg0() {
                var1 = arg0;
                var2 = var1.index;
                var _closure4_slot0 = var2;
                var2 = var1.animated;
                var _closure4_slot1 = var2;
                var2 = var1.viewPosition;
                var _closure4_slot2 = var2;
                var1 = var1.viewOffset;
                var _closure4_slot3 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    _fun45971: for (var _fun45971_ip = 0;;) switch (_fun45971_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure5_slot0 = var5;
                            var1 = _closure2_slot0;
                            var1 = var1.props;
                            var1 = var1.horizontal;
                            var _closure5_slot1 = var1;
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if (!var2) {
                                _fun45971_ip = 78;
                                continue _fun45971
                            }
                        case 43:
                            var6 = _closure4_slot0;
                            var2 = 0;
                            if (!(var6 >= var2)) {
                                _fun45971_ip = 78;
                                continue _fun45971
                            }
                        case 56:
                            var6 = _closure4_slot0;
                            var7 = _closure2_slot0;
                            var3 = var7.getDataLength;
                            var3 = var3.bind(var7)();
                            if (!(!(var6 < var3))) {
                                _fun45971_ip = 89;
                                continue _fun45971
                            }
                        case 78:
                            var3 = undefined;
                            var3 = var5.bind(var3)();
                            _fun45971_ip = 243;
                            continue _fun45971;
                        case 89:
                            var5 = _closure2_slot5;
                            var3 = true;
                            var5.current = var3;
                            var6 = _closure2_slot0;
                            var5 = var6.setOffsetProjectionEnabled;
                            var3 = false;
                            var3 = var5.bind(var6)(var3);
                            var3 = function() {
                                _fun45972: for (var _fun45972_ip = 0;;) switch (_fun45972_ip) {
                                    case 0:
                                        var4 = _closure2_slot0;
                                        var3 = var4.getLayout;
                                        var1 = _closure4_slot0;
                                        var3 = var3.bind(var4)(var1);
                                        var1 = _closure5_slot1;
                                        if (var1) {
                                            _fun45972_ip = 42;
                                            continue _fun45972
                                        }
                                    case 35:
                                        var6 = var3.y;
                                        _fun45972_ip = 47;
                                        continue _fun45972;
                                    case 42:
                                        var6 = var3.x;
                                    case 47:
                                        var1 = _closure4_slot2;
                                        var5 = undefined;
                                        if (!(var5 === var1)) {
                                            _fun45972_ip = 68;
                                            continue _fun45972
                                        }
                                    case 57:
                                        var7 = _closure4_slot3;
                                        var1 = var6;
                                        if (!(var5 !== var7)) {
                                            _fun45972_ip = 166;
                                            continue _fun45972
                                        }
                                    case 68:
                                        var7 = _closure5_slot1;
                                        var9 = _closure2_slot0;
                                        var8 = var9.getWindowSize;
                                        var8 = var8.bind(var9)();
                                        if (var7) {
                                            _fun45972_ip = 96;
                                            continue _fun45972
                                        }
                                    case 89:
                                        var7 = var8.height;
                                        _fun45972_ip = 101;
                                        continue _fun45972;
                                    case 96:
                                        var7 = var8.width;
                                    case 101:
                                        var4 = _closure5_slot1;
                                        if (var4) {
                                            _fun45972_ip = 115;
                                            continue _fun45972
                                        }
                                    case 108:
                                        var4 = var3.height;
                                        _fun45972_ip = 120;
                                        continue _fun45972;
                                    case 115:
                                        var4 = var3.width;
                                    case 120:
                                        var8 = _closure4_slot2;
                                        var3 = var6;
                                        if (!(var5 !== var8)) {
                                            _fun45972_ip = 147;
                                            continue _fun45972
                                        }
                                    case 131:
                                        var7 = var7 - var4;
                                        var4 = _closure4_slot2;
                                        var4 = var7 * var4;
                                        var3 = var6 - var4;
                                    case 147:
                                        var4 = _closure4_slot3;
                                        var1 = var3;
                                        if (!(var5 !== var4)) {
                                            _fun45972_ip = 166;
                                            continue _fun45972
                                        }
                                    case 158:
                                        var2 = _closure4_slot3;
                                        var1 = var3 + var2;
                                    case 166:
                                        var0 = _closure2_slot0;
                                        var0 = var0.firstItemOffset;
                                        var0 = var1 + var0;
                                        return var0;
                                }
                            };
                            var _closure5_slot2 = var3;
                            var5 = var6.getAbsoluteLastScrollOffset;
                            var5 = var5.bind(var6)();
                            var _closure5_slot3 = var5;
                            var5 = _closure2_slot0;
                            var0 = var5.getWindowSize;
                            var0 = var0.bind(var5)();
                            if (var1) {
                                _fun45971_ip = 165;
                                continue _fun45971
                            }
                        case 158:
                            var1 = var0.height;
                            _fun45971_ip = 170;
                            continue _fun45971;
                        case 165:
                            var1 = var0.width;
                        case 170:
                            var0 = 2;
                            var0 = var0 * var1;
                            var _closure5_slot4 = var0;
                            var0 = function() {
                                _fun45973: for (var _fun45973_ip = 0;;) switch (_fun45973_ip) {
                                    case 0:
                                        var4 = _closure5_slot3;
                                        var2 = _closure5_slot2;
                                        var0 = undefined;
                                        var5 = var2.bind(var0)();
                                        if (!(!(var5 > var4))) {
                                            _fun45973_ip = 74;
                                            continue _fun45973
                                        }
                                    case 21:
                                        var0 = global;
                                        var3 = var0.Math;
                                        var2 = var3.min;
                                        var0 = _closure5_slot4;
                                        var0 = var5 + var0;
                                        var0 = var2.bind(var3)(var0, var4);
                                        var6 = _closure2_slot0;
                                        var3 = var6.setScrollDirection;
                                        var2 = 'backward';
                                        var2 = var3.bind(var6)(var2);
                                        _fun45973_ip = 123;
                                        continue _fun45973;
                                    case 74:
                                        var2 = global;
                                        var3 = var2.Math;
                                        var2 = var3.max;
                                        var1 = _closure5_slot4;
                                        var1 = var5 - var1;
                                        var0 = var2.bind(var3)(var1, var4);
                                        var4 = _closure2_slot0;
                                        var3 = var4.setScrollDirection;
                                        var2 = 'forward';
                                        var2 = var3.bind(var4)(var2);
                                    case 123:
                                        return var0;
                                }
                            };
                            var _closure5_slot5 = var0;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var _closure5_slot6 = var3;
                            var0 = var0.bind(var1)();
                            var _closure5_slot7 = var0;
                            var3 = _closure5_slot6;
                            var _closure5_slot8 = var3;
                            var _closure5_slot9 = var0;
                            var0 = function arg0() {
                                _fun45974: for (var _fun45974_ip = 0;;) switch (_fun45974_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var _closure6_slot0 = var6;
                                        var2 = _closure2_slot3;
                                        var2 = var2.current;
                                        if (var2) {
                                            _fun45974_ip = 142;
                                            continue _fun45974
                                        }
                                    case 24:
                                        var2 = 5;
                                        if (!(!(var6 >= var2))) {
                                            _fun45974_ip = 127;
                                            continue _fun45974
                                        }
                                    case 31:
                                        var3 = _closure2_slot12;
                                        var2 = _closure4_slot1;
                                        if (var2) {
                                            _fun45974_ip = 81;
                                            continue _fun45974
                                        }
                                    case 48:
                                        var4 = _closure5_slot9;
                                        var2 = 4;
                                        var5 = var6 / var2;
                                        var7 = _closure5_slot8;
                                        var2 = _closure5_slot9;
                                        var2 = var7 - var2;
                                        var2 = var5 * var2;
                                        var2 = var4 + var2;
                                        _fun45974_ip = 112;
                                        continue _fun45974;
                                    case 81:
                                        var4 = _closure5_slot8;
                                        var5 = 4;
                                        var5 = var6 / var5;
                                        var6 = _closure5_slot9;
                                        var1 = _closure5_slot8;
                                        var1 = var6 - var1;
                                        var1 = var5 * var1;
                                        var2 = var4 + var1;
                                    case 112:
                                        var1 = undefined;
                                        var0 = function() { // Environment: var0
                                            _fun45975: for (var _fun45975_ip = 0;;) switch (_fun45975_ip) {
                                                case 0:
                                                    var2 = _closure4_slot0;
                                                    var4 = _closure2_slot0;
                                                    var1 = var4.getDataLength;
                                                    var1 = var1.bind(var4)();
                                                    if (!(!(var2 >= var1))) {
                                                        _fun45975_ip = 135;
                                                        continue _fun45975
                                                    }
                                                case 28:
                                                    var4 = _closure5_slot2;
                                                    var1 = undefined;
                                                    var5 = var4.bind(var1)();
                                                    var4 = _closure5_slot6;
                                                    if (!(var5 < var4)) {
                                                        _fun45975_ip = 57;
                                                        continue _fun45975
                                                    }
                                                case 49:
                                                    var4 = _closure5_slot7;
                                                    if (!(!(var5 < var4))) {
                                                        _fun45975_ip = 98;
                                                        continue _fun45975
                                                    }
                                                case 57:
                                                    var4 = _closure5_slot6;
                                                    if (!(var5 > var4)) {
                                                        _fun45975_ip = 73;
                                                        continue _fun45975
                                                    }
                                                case 65:
                                                    var4 = _closure5_slot7;
                                                    if (!(!(var5 > var4))) {
                                                        _fun45975_ip = 98;
                                                        continue _fun45975
                                                    }
                                                case 73:
                                                    var6 = _closure5_slot10;
                                                    var7 = _closure6_slot0;
                                                    var4 = 1;
                                                    var4 = var7 + var4;
                                                    var4 = var6.bind(var1)(var4);
                                                    _fun45975_ip = 133;
                                                    continue _fun45975;
                                                case 98:
                                                    _closure5_slot8 = var5;
                                                    var4 = _closure5_slot5;
                                                    var4 = var4.bind(var1)();
                                                    _closure5_slot9 = var4;
                                                    _closure5_slot6 = var5;
                                                    _closure5_slot7 = var4;
                                                    var4 = _closure5_slot10;
                                                    var2 = 0;
                                                    var2 = var4.bind(var1)(var2);
                                                case 133:
                                                    return var1;
                                                case 135:
                                                    var2 = _closure2_slot14;
                                                    var1 = var2.scrollToEnd;
                                                    var0 = {};
                                                    var3 = _closure4_slot1;
                                                    var0.animated = var3;
                                                    var0 = var1.bind(var2)(var0);
                                                    var1 = _closure5_slot0;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)();
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0 = var3.bind(var1)(var2, var0);
                                        _fun45974_ip = 155;
                                        continue _fun45974;
                                    case 127:
                                        var1 = _closure5_slot11;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        _fun45974_ip = 155;
                                        continue _fun45974;
                                    case 142:
                                        var1 = _closure5_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 155:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure5_slot10 = var0;
                            var3 = function() {
                                _fun45976: for (var _fun45976_ip = 0;;) switch (_fun45976_ip) {
                                    case 0:
                                        var1 = _closure5_slot2;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)();
                                        _closure5_slot8 = var1;
                                        var3 = _closure2_slot0;
                                        var1 = var3.getMaxScrollOffset;
                                        var1 = var1.bind(var3)();
                                        var3 = _closure5_slot8;
                                        if (!(var3 > var1)) {
                                            _fun45976_ip = 48;
                                            continue _fun45976
                                        }
                                    case 44:
                                        _closure5_slot8 = var1;
                                    case 48:
                                        var3 = _closure4_slot1;
                                        if (!var3) {
                                            _fun45976_ip = 97;
                                            continue _fun45976
                                        }
                                    case 58:
                                        var5 = _closure2_slot14;
                                        var4 = var5.scrollToOffset;
                                        var3 = {
                                            'offset': null,
                                            'animated': false,
                                            'skipFirstItemOffset': true
                                        };
                                        var7 = _closure5_slot9;
                                        var3.offset = var7;
                                        var3 = var4.bind(var5)(var3);
                                    case 97:
                                        var5 = _closure2_slot14;
                                        var4 = var5.scrollToOffset;
                                        var3 = {};
                                        var6 = _closure5_slot8;
                                        var3.offset = var6;
                                        var1 = _closure4_slot1;
                                        var3.animated = var1;
                                        var6 = true;
                                        var3.skipFirstItemOffset = var6;
                                        var3 = var4.bind(var5)(var3);
                                        var3 = _closure2_slot8;
                                        var2 = 200;
                                        if (!var1) {
                                            _fun45976_ip = 155;
                                            continue _fun45976
                                        }
                                    case 149:
                                        var2 = 300;
                                    case 155:
                                        var1 = function() { // Environment: var1
                                            var2 = _closure2_slot5;
                                            var1 = false;
                                            var2.current = var1;
                                            var2 = _closure2_slot0;
                                            var1 = var2.setOffsetProjectionEnabled;
                                            var0 = true;
                                            var0 = var1.bind(var2)(var0);
                                            var1 = _closure5_slot0;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)();
                                            return var0;
                                        };
                                        var1 = var3.bind(var0)(var1, var2);
                                        return var0;
                                }
                            };
                            var _closure5_slot11 = var3;
                            var0 = var0.bind(var1)(var2);
                        case 243:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var0.scrollToIndex = var2;
            var2 = function arg0() {
                _fun45978: for (var _fun45978_ip = 0;;) switch (_fun45978_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.item;
                        var _closure4_slot0 = var2;
                        var5 = var0.animated;
                        var4 = var0.viewPosition;
                        var3 = var0.viewOffset;
                        var2 = _closure2_slot0;
                        var2 = var2.props;
                        var6 = var2.data;
                        var2 = _closure2_slot1;
                        var2 = var2.current;
                        if (!var2) {
                            _fun45978_ip = 122;
                            continue _fun45978
                        }
                    case 61:
                        if (!var6) {
                            _fun45978_ip = 122;
                            continue _fun45978
                        }
                    case 64:
                        var2 = var6.findIndex;
                        var1 = function(arg0) { // Environment: var1
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var6 = var2.bind(var6)(var1);
                        var1 = 0;
                        if (!(var6 >= var1)) {
                            _fun45978_ip = 122;
                            continue _fun45978
                        }
                    case 86:
                        var2 = _closure2_slot14;
                        var1 = var2.scrollToIndex;
                        var0 = {};
                        var0.index = var6;
                        var0.animated = var5;
                        var0.viewPosition = var4;
                        var0.viewOffset = var3;
                        var0 = var1.bind(var2)(var0);
                    case 122:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.scrollToItem = var2;
            var2 = function() {
                var0 = _closure2_slot0;
                var0 = var0.firstItemOffset;
                return var0;
            };
            var0.getFirstItemOffset = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.getWindowSize;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.getWindowSize = var2;
            var2 = function arg0() {
                var2 = _closure2_slot0;
                var1 = var2.tryGetLayout;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.getLayout = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.getAbsoluteLastScrollOffset;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.getAbsoluteLastScrollOffset = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.getChildContainerDimensions;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.getChildContainerDimensions = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.recordInteraction;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0.recordInteraction = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.computeVisibleIndices;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.computeVisibleIndices = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.computeVisibleIndices;
                var0 = var0.bind(var1)();
                var0 = var0.startIndex;
                return var0;
            };
            var0.getFirstVisibleIndex = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var0 = var1.recomputeViewableItems;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0.recomputeViewableItems = var2;
            var1 = function() {
                _fun45989: for (var _fun45989_ip = 0;;) switch (_fun45989_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var1 = var1.props;
                        var1 = var1.keyExtractor;
                        if (var1) {
                            _fun45989_ip = 76;
                            continue _fun45989
                        }
                    case 21:
                        var1 = global;
                        var3 = var1.console;
                        var2 = var3.warn;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 8;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.WarningMessages;
                        var1 = var1.keyExtractorNotDefinedForAnimation;
                        var1 = var2.bind(var3)(var1);
                    case 76:
                        var1 = _closure2_slot0;
                        var0 = true;
                        var1.animationOptimizationsEnabled = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var0.prepareForLayoutAnimationRender = var1;
            return var0;
        };
        var1 = var11.bind(var8)(var1, var7);
        var _closure2_slot14 = var1;
        var7 = new Array(3);
        var7[0] = var1;
        var7[1] = var5;
        var7[2] = var2;
        var2 = function() { // Environment: var0
            _fun45990: for (var _fun45990_ip = 0;;) switch (_fun45990_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var0 = var4.props;
                    var6 = var0.horizontal;
                    var3 = var0.data;
                    var7 = var0.initialScrollIndexParams;
                    var0 = var4.getInitialScrollIndex;
                    var0 = var0.bind(var4)();
                    var5 = null;
                    var4 = var5 != var0;
                    var8 = -1;
                    if (!var4) {
                        _fun45990_ip = 61;
                        continue _fun45990
                    }
                case 58:
                    var8 = var0;
                case 61:
                    var4 = var5 == var3;
                    var0 = undefined;
                    var9 = undefined;
                    if (var4) {
                        _fun45990_ip = 77;
                        continue _fun45990
                    }
                case 72:
                    var9 = var3.length;
                case 77:
                    var10 = var5 != var9;
                    var3 = 0;
                    var4 = 0;
                    if (!var10) {
                        _fun45990_ip = 91;
                        continue _fun45990
                    }
                case 88:
                    var4 = var9;
                case 91:
                    if (!(var8 >= var3)) {
                        _fun45990_ip = 289;
                        continue _fun45990
                    }
                case 98:
                    if (!(var8 < var4)) {
                        _fun45990_ip = 289;
                        continue _fun45990
                    }
                case 105:
                    var4 = _closure2_slot6;
                    var4 = var4.current;
                    if (var4) {
                        _fun45990_ip = 289;
                        continue _fun45990
                    }
                case 120:
                    var9 = _closure2_slot0;
                    var4 = var9.getIsFirstLayoutComplete;
                    var4 = var4.bind(var9)();
                    if (!var4) {
                        _fun45990_ip = 289;
                        continue _fun45990
                    }
                case 140:
                    var10 = _closure2_slot8;
                    var9 = function() { // Environment: var1
                        var2 = _closure2_slot6;
                        var1 = true;
                        var2.current = var1;
                        var1 = _closure2_slot5;
                        var0 = false;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var4 = 100;
                    var4 = var10.bind(var0)(var9, var4);
                    var9 = _closure2_slot5;
                    var4 = true;
                    var9.current = var4;
                    var9 = var5 == var7;
                    var4 = undefined;
                    if (var9) {
                        _fun45990_ip = 185;
                        continue _fun45990
                    }
                case 179:
                    var4 = var7.viewOffset;
                case 185:
                    var7 = var5 != var4;
                    var5 = 0;
                    if (!var7) {
                        _fun45990_ip = 197;
                        continue _fun45990
                    }
                case 194:
                    var5 = var4;
                case 197:
                    var7 = _closure2_slot0;
                    var4 = var7.getLayout;
                    var4 = var4.bind(var7)(var8);
                    if (var6) {
                        _fun45990_ip = 226;
                        continue _fun45990
                    }
                case 215:
                    var6 = var4.y;
                    var7 = var6 + var5;
                    _fun45990_ip = 235;
                    continue _fun45990;
                case 226:
                    var4 = var4.x;
                    var7 = var4 + var5;
                case 235:
                    var _closure3_slot0 = var7;
                    var6 = _closure2_slot14;
                    var5 = var6.scrollToOffset;
                    var4 = {
                        'offset': null,
                        'animated': false,
                        'skipFirstItemOffset': false
                    };
                    var4.offset = var7;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot8;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot14;
                        var1 = var2.scrollToOffset;
                        var0 = {
                            'offset': null,
                            'animated': false,
                            'skipFirstItemOffset': false
                        };
                        var3 = _closure3_slot0;
                        var0.offset = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1, var3);
                case 289:
                    return var0;
            }
        };
        var2 = var10.bind(var8)(var2, var7);
        var7 = _closure1_slot5;
        var6 = new Array(3);
        var6[0] = var1;
        var6[1] = var9;
        var6[2] = var5;
        var5 = arg1;
        var0 = function() { // Environment: var0
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var2 = _closure2_slot1;
            var3 = var2.current;
            var2 = _closure2_slot14;
            var0 = {};
            var0 = var4.bind(var5)(var0, var3, var2);
            var4 = var1.Object;
            var3 = var4.defineProperty;
            var2 = {
                'get': null,
                'enumerable': true,
                'configurable': true
            };
            var1 = function() {
                var0 = _closure2_slot0;
                var0 = var0.props;
                return var0;
            };
            var2.get = var1;
            var1 = 'props';
            var1 = var3.bind(var4)(var0, var1, var2);
            return var0;
        };
        var0 = var7.bind(var8)(var5, var0, var6);
        var0 = {};
        var0.applyOffsetCorrection = var4;
        var0.computeFirstVisibleIndexForOffsetCorrection = var3;
        var0.applyInitialScrollIndex = var2;
        var0.handlerMethods = var1;
        return var0;
    };
    var2.useRecyclerViewController = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1308, 5104, 31, 27, 5149, 5150, 5119, 5151, 5146]);