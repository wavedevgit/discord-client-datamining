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
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.useRef;
    var _closure1_slot4 = var8;
    var8 = var7.useState;
    var _closure1_slot5 = var8;
    var8 = var7.useMemo;
    var _closure1_slot6 = var8;
    var8 = var7.useImperativeHandle;
    var _closure1_slot7 = var8;
    var8 = var7.useCallback;
    var _closure1_slot8 = var8;
    var7 = var7.useEffect;
    var _closure1_slot9 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var1 = function arg0() {
        _fun46045: for (var _fun46045_ip = 0;;) switch (_fun46045_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.stickyHeaderIndices;
                var _closure2_slot0 = var13;
                var4 = var1.stickyHeaderOffset;
                var _closure2_slot1 = var4;
                var7 = var1.renderItem;
                var _closure2_slot2 = var7;
                var15 = var1.stickyHeaderRef;
                var12 = var1.recyclerViewManager;
                var _closure2_slot3 = var12;
                var11 = var1.scrollY;
                var _closure2_slot4 = var11;
                var8 = var1.data;
                var _closure2_slot5 = var8;
                var5 = var1.extraData;
                var _closure2_slot6 = var5;
                var10 = var1.onChangeStickyIndex;
                var _closure2_slot7 = var10;
                var9 = _closure1_slot5;
                var1 = {};
                var3 = -1;
                var1.currentStickyIndex = var3;
                var6 = global;
                var3 = var6.Number;
                var3 = var3.MAX_SAFE_INTEGER;
                var1.pushStartsAt = var3;
                var3 = undefined;
                var14 = var9.bind(var3)(var1);
                var9 = _closure1_slot3;
                var1 = 2;
                var9 = var9.bind(var3)(var14, var1);
                var14 = 0;
                var1 = var9[var14];
                var18 = 1;
                var9 = var9[var18];
                var _closure2_slot8 = var9;
                var9 = var1.currentStickyIndex;
                var _closure2_slot9 = var9;
                var1 = var1.pushStartsAt;
                var _closure2_slot10 = var1;
                var17 = _closure1_slot6;
                var16 = new Array(1);
                var16[0] = var13;
                var13 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var17.bind(var3)(var13, var16);
                var _closure2_slot11 = var16;
                var13 = var16.length;
                var17 = var14 === var13;
                if (var17) {
                    _fun46045_ip = 252;
                    continue _fun46045
                }
            case 225:
                var13 = var12.getDataLength;
                var14 = var13.bind(var12)();
                var13 = var16.length;
                var13 = var13 - var18;
                var13 = var16[var13];
                var17 = var14 <= var13;
            case 252:
                var _closure2_slot12 = var17;
                var14 = _closure1_slot8;
                var13 = new Array(7);
                var13[0] = var17;
                var13[1] = var12;
                var13[2] = var16;
                var13[3] = var9;
                var13[4] = var1;
                var13[5] = var10;
                var13[6] = var4;
                var10 = function() { // Environment: var0
                    _fun46048: for (var _fun46048_ip = 0;;) switch (_fun46048_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            if (var1) {
                                _fun46048_ip = 424;
                                continue _fun46048
                            }
                        case 13:
                            var2 = _closure2_slot3;
                            var1 = var2.getLastScrollOffset;
                            var3 = var1.bind(var2)();
                            var2 = _closure2_slot11;
                            var1 = _closure2_slot1;
                            var11 = var3 + var1;
                            var1 = var2.length;
                            var8 = 1;
                            var10 = var1 - var8;
                            var3 = -1;
                            var5 = 0;
                            var1 = global;
                            var9 = 2;
                            var7 = 0;
                            var4 = var3;
                            var6 = var4;
                            if (!(var5 <= var10)) {
                                _fun46048_ip = 157;
                                continue _fun46048
                            }
                        case 78:
                            var14 = var1.Math;
                            var13 = var14.floor;
                            var12 = var7 + var10;
                            var12 = var12 / var9;
                            var13 = var13.bind(var14)(var12);
                            var15 = var2[var13];
                            var14 = _closure2_slot3;
                            var12 = var14.getLayout;
                            var12 = var12.bind(var14)(var15);
                            var12 = var12.y;
                            if (!(!(var12 <= var11))) {
                                _fun46048_ip = 137;
                                continue _fun46048
                            }
                        case 131:
                            var12 = var13 - var8;
                            _fun46048_ip = 147;
                            continue _fun46048;
                        case 137:
                            var7 = var13 + var8;
                            var12 = var10;
                            var4 = var13;
                        case 147:
                            var10 = var12;
                            var6 = var4;
                            if (var7 <= var10) {
                                _fun46048_ip = 78;
                                continue _fun46048
                            }
                        case 157:
                            var7 = var2[var6];
                            var4 = null;
                            var9 = var4 != var7;
                            var2 = var3;
                            if (!var9) {
                                _fun46048_ip = 176;
                                continue _fun46048
                            }
                        case 173:
                            var2 = var7;
                        case 176:
                            var7 = _closure2_slot11;
                            var6 = var6 + var8;
                            var6 = var7[var6];
                            var8 = var4 != var6;
                            var7 = var3;
                            if (!var8) {
                                _fun46048_ip = 201;
                                continue _fun46048
                            }
                        case 198:
                            var7 = var6;
                        case 201:
                            var8 = _closure2_slot3;
                            var6 = var8.getEngagedIndices;
                            var6 = var6.bind(var8)();
                            var6 = var6.endIndex;
                            if (!(var7 > var6)) {
                                _fun46048_ip = 228;
                                continue _fun46048
                            }
                        case 225:
                            var7 = var3;
                        case 228:
                            if (!(var3 !== var7)) {
                                _fun46048_ip = 289;
                                continue _fun46048
                            }
                        case 232:
                            var6 = _closure2_slot3;
                            var3 = var6.tryGetLayout;
                            var6 = var3.bind(var6)(var7);
                            var7 = var4 == var6;
                            var3 = undefined;
                            if (var7) {
                                _fun46048_ip = 261;
                                continue _fun46048
                            }
                        case 256:
                            var3 = var6.y;
                        case 261:
                            var7 = var4 != var3;
                            var6 = 0;
                            if (!var7) {
                                _fun46048_ip = 273;
                                continue _fun46048
                            }
                        case 270:
                            var6 = var3;
                        case 273:
                            var3 = _closure2_slot3;
                            var3 = var3.firstItemOffset;
                            var3 = var6 + var3;
                            _fun46048_ip = 301;
                            continue _fun46048;
                        case 289:
                            var1 = var1.Number;
                            var3 = var1.MAX_SAFE_INTEGER;
                        case 301:
                            var6 = _closure2_slot3;
                            var1 = var6.tryGetLayout;
                            var7 = var1.bind(var6)(var2);
                            var8 = var4 == var7;
                            var1 = undefined;
                            var6 = undefined;
                            if (var8) {
                                _fun46048_ip = 332;
                                continue _fun46048
                            }
                        case 327:
                            var6 = var7.height;
                        case 332:
                            var7 = var4 != var6;
                            var5 = 0;
                            if (!var7) {
                                _fun46048_ip = 344;
                                continue _fun46048
                            }
                        case 341:
                            var5 = var6;
                        case 344:
                            var7 = var3 - var5;
                            var3 = _closure2_slot9;
                            var3 = var2 === var3;
                            if (!var3) {
                                _fun46048_ip = 367;
                                continue _fun46048
                            }
                        case 359:
                            var5 = _closure2_slot10;
                            var3 = var7 === var5;
                        case 367:
                            if (var3) {
                                _fun46048_ip = 399;
                                continue _fun46048
                            }
                        case 370:
                            var5 = _closure2_slot8;
                            var3 = {};
                            var3.currentStickyIndex = var2;
                            var6 = _closure2_slot1;
                            var6 = var7 - var6;
                            var3.pushStartsAt = var6;
                            var3 = var5.bind(var1)(var3);
                        case 399:
                            var3 = _closure2_slot9;
                            if (!(var2 !== var3)) {
                                _fun46048_ip = 424;
                                continue _fun46048
                            }
                        case 407:
                            var3 = _closure2_slot7;
                            if (!(var4 != var3)) {
                                _fun46048_ip = 424;
                                continue _fun46048
                            }
                        case 415:
                            var0 = _closure2_slot7;
                            var0 = var0.bind(var1)(var2);
                        case 424:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var14.bind(var3)(var10, var13);
                var _closure2_slot13 = var10;
                var16 = _closure1_slot9;
                var14 = new Array(1);
                var14[0] = var10;
                var13 = function() { // Environment: var0
                    var1 = _closure2_slot13;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var13 = var16.bind(var3)(var13, var14);
                var14 = _closure1_slot7;
                var13 = new Array(1);
                var13[0] = var10;
                var10 = function() { // Environment: var0
                    var0 = {};
                    var1 = function() {
                        var1 = _closure2_slot13;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.reportScrollEvent = var1;
                    return var0;
                };
                var10 = var14.bind(var3)(var15, var10, var13);
                var10 = _closure1_slot4;
                var6 = var6.Map;
                var13 = var6.prototype;
                var13 = Object.create(var13, {
                    constructor: {
                        value: var6
                    }
                });
                var22 = var13;
                var6 = new var22[var6](var21);
                var6 = var6 instanceof Object ? var6 : var13;
                var6 = var10.bind(var3)(var6);
                var6 = var6.current;
                var _closure2_slot14 = var6;
                var2 = _closure1_slot6;
                var10 = new Array(5);
                var10[0] = var12;
                var10[1] = var9;
                var10[2] = var11;
                var10[3] = var1;
                var10[4] = var4;
                var1 = function() { // Environment: var0
                    _fun46052: for (var _fun46052_ip = 0;;) switch (_fun46052_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = var2.tryGetLayout;
                            var0 = _closure2_slot9;
                            var3 = var1.bind(var2)(var0);
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun46052_ip = 38;
                                continue _fun46052
                            }
                        case 33:
                            var0 = var3.height;
                        case 38:
                            var2 = var2 != var0;
                            var3 = 0;
                            var8 = 0;
                            if (!var2) {
                                _fun46052_ip = 52;
                                continue _fun46052
                            }
                        case 49:
                            var8 = var0;
                        case 52:
                            var0 = {};
                            var7 = _closure2_slot4;
                            var4 = var7.interpolate;
                            var2 = {};
                            var9 = _closure2_slot10;
                            var5 = new Array(2);
                            var5[0] = var9;
                            var9 = var9 + var8;
                            var5[1] = var9;
                            var2.inputRange = var5;
                            var9 = -var8;
                            var5 = [0];
                            var5[1] = var9;
                            var2.outputRange = var5;
                            var5 = 'clamp';
                            var2.extrapolate = var5;
                            var2 = var4.bind(var7)(var2);
                            var0.translateY = var2;
                            var2 = _closure2_slot1;
                            var2 = var2 > var3;
                            var1 = undefined;
                            if (!var2) {
                                _fun46052_ip = 207;
                                continue _fun46052
                            }
                        case 145:
                            var4 = _closure2_slot4;
                            var3 = var4.interpolate;
                            var2 = {};
                            var7 = _closure2_slot10;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = var7 + var8;
                            var6[1] = var7;
                            var2.inputRange = var6;
                            var6 = [1, 0];
                            var2.outputRange = var6;
                            var2.extrapolate = var5;
                            var1 = var3.bind(var4)(var2);
                        case 207:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1, var10);
                var11 = var1.translateY;
                var _closure2_slot15 = var11;
                var10 = var1.opacity;
                var _closure2_slot16 = var10;
                var1 = new Array(8);
                var1[0] = var11;
                var1[1] = var10;
                var1[2] = var9;
                var1[3] = var8;
                var1[4] = var7;
                var1[5] = var6;
                var1[6] = var5;
                var1[7] = var4;
                var0 = function() { // Environment: var0
                    _fun46053: for (var _fun46053_ip = 0;;) switch (_fun46053_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 4;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.CompatAnimatedView;
                            var0 = {};
                            var4 = {
                                'position': 'absolute',
                                'top': null,
                                'left': 0,
                                'right': 0,
                                'zIndex': 2
                            };
                            var6 = _closure2_slot1;
                            var4.top = var6;
                            var7 = {};
                            var6 = _closure2_slot15;
                            var7.translateY = var6;
                            var6 = new Array(1);
                            var6[0] = var7;
                            var4.transform = var6;
                            var6 = _closure2_slot16;
                            var4.opacity = var6;
                            var0.style = var4;
                            var7 = _closure2_slot9;
                            var8 = null;
                            var6 = -1;
                            var4 = null;
                            if (!(var6 !== var7)) {
                                _fun46053_ip = 270;
                                continue _fun46053
                            }
                        case 120:
                            var7 = _closure2_slot9;
                            var6 = _closure2_slot5;
                            var6 = var6.length;
                            var6 = var7 < var6;
                            var4 = null;
                            if (!var6) {
                                _fun46053_ip = 270;
                                continue _fun46053
                            }
                        case 145:
                            var7 = _closure1_slot10;
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var5 = 5;
                            var5 = var10[var5];
                            var5 = var6.bind(var2)(var5);
                            var6 = var5.ViewHolder;
                            var5 = {};
                            var11 = _closure2_slot9;
                            var5.index = var11;
                            var10 = _closure2_slot5;
                            var10 = var10[var11];
                            var5.item = var10;
                            var10 = _closure2_slot2;
                            var5.renderItem = var10;
                            var10 = {
                                'x': 0,
                                'y': 0,
                                'width': 0,
                                'height': 0
                            };
                            var5.layout = var10;
                            var10 = _closure2_slot14;
                            var5.refHolder = var10;
                            var9 = _closure2_slot6;
                            var5.extraData = var9;
                            var5.trailingItem = var8;
                            var8 = 'StickyHeader';
                            var5.target = var8;
                            var8 = false;
                            var5.hidden = var8;
                            var4 = var7.bind(var2)(var6, var5);
                        case 270:
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.StickyHeaders = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5125, 5104, 31, 33, 5155, 5159]);