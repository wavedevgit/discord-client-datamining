// modules/profile_effects/useClock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/useClock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun56638: for (var _fun56638_ip = 0;;) switch (_fun56638_ip) {
            case 0:
                var2 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var2;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun56638_ip = 20;
                    continue _fun56638
                }
            case 18:
                var1 = {};
            case 20:
                var6 = var1.minInterval;
                if (!(var6 === var5)) {
                    _fun56638_ip = 42;
                    continue _fun56638
                }
            case 32:
                var6 = 41.666666666666664;
            case 42:
                var _closure2_slot1 = var6;
                var14 = var1.allowableMinInterval;
                var _closure2_slot2 = var14;
                var11 = var1.droppedFramesCallbackThreshold;
                var _closure2_slot3 = var11;
                var10 = var1.droppedFramesCallback;
                var _closure2_slot4 = var10;
                var12 = var1.droppedFramesResetTime;
                if (!(var12 === var5)) {
                    _fun56638_ip = 100;
                    continue _fun56638
                }
            case 94:
                var12 = 3000;
            case 100:
                var _closure2_slot5 = var12;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var _closure2_slot9 = var5;
                var _closure2_slot10 = var5;
                var _closure2_slot11 = var5;
                var _closure2_slot12 = var5;
                var _closure2_slot13 = var5;
                var _closure2_slot14 = var5;
                var _closure2_slot15 = var5;
                var9 = _closure1_slot2;
                var1 = var9.useRef;
                var1 = var1.bind(var9)(var6);
                _closure2_slot6 = var1;
                var1 = var9.useRef;
                var7 = 0;
                var1 = var1.bind(var9)(var7);
                _closure2_slot7 = var1;
                var1 = var9.useRef;
                var1 = var1.bind(var9)(var5);
                _closure2_slot8 = var1;
                var1 = var9.useRef;
                var1 = var1.bind(var9)(var5);
                _closure2_slot9 = var1;
                var3 = var9.useRef;
                var1 = true;
                var1 = var3.bind(var9)(var1);
                _closure2_slot10 = var1;
                var3 = var9.useRef;
                var3 = var3.bind(var9)(var7);
                _closure2_slot11 = var3;
                var3 = var9.useRef;
                var3 = var3.bind(var9)(var5);
                _closure2_slot12 = var3;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var0
                    _fun56639: for (var _fun56639_ip = 0;;) switch (_fun56639_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var1 = 0;
                            var2.current = var1;
                            var1 = _closure2_slot12;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun56639_ip = 64;
                                continue _fun56639
                            }
                        case 30:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot12;
                            var2 = var1.current;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var0 = _closure2_slot12;
                            var0.current = var1;
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = new Array(0);
                var13 = var8.bind(var9)(var7, var3);
                _closure2_slot13 = var13;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var0
                    var2 = _closure2_slot10;
                    var0 = false;
                    var2.current = var0;
                    var2 = global;
                    var4 = var2.cancelAnimationFrame;
                    var0 = _closure2_slot7;
                    var3 = var0.current;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var2 = var2.clearTimeout;
                    var1 = _closure2_slot12;
                    var1 = var1.current;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = new Array(0);
                var3 = var8.bind(var9)(var7, var3);
                _closure2_slot14 = var3;
                var8 = var9.useCallback;
                var7 = new Array(6);
                var7[0] = var14;
                var7[1] = var13;
                var7[2] = var12;
                var7[3] = var11;
                var7[4] = var10;
                var7[5] = var2;
                var2 = function(arg0) { // Environment: var0
                    _fun56641: for (var _fun56641_ip = 0;;) switch (_fun56641_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot10;
                            var1 = var1.current;
                            if (!var1) {
                                _fun56641_ip = 413;
                                continue _fun56641
                            }
                        case 21:
                            var1 = _closure2_slot8;
                            var1 = var1.current;
                            var6 = null;
                            if (!(var6 == var1)) {
                                _fun56641_ip = 46;
                                continue _fun56641
                            }
                        case 36:
                            var1 = _closure2_slot8;
                            var1.current = var3;
                        case 46:
                            var1 = _closure2_slot9;
                            var1 = var1.current;
                            if (!(var6 == var1)) {
                                _fun56641_ip = 69;
                                continue _fun56641
                            }
                        case 59:
                            var1 = _closure2_slot9;
                            var1.current = var3;
                        case 69:
                            var1 = _closure2_slot9;
                            var1 = var1.current;
                            var4 = var3 - var1;
                            var1 = _closure2_slot8;
                            var1 = var1.current;
                            var5 = var3 - var1;
                            var2 = global;
                            var9 = var2.Math;
                            var8 = var9.min;
                            var1 = _closure2_slot2;
                            var1 = var6 != var1;
                            var7 = 120;
                            if (!var1) {
                                _fun56641_ip = 126;
                                continue _fun56641
                            }
                        case 122:
                            var7 = _closure2_slot2;
                        case 126:
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            var7 = var8.bind(var9)(var7, var1);
                            var1 = 1.5;
                            var1 = var1 * var7;
                            if (!(var5 > var1)) {
                                _fun56641_ip = 335;
                                continue _fun56641
                            }
                        case 162:
                            var5 = _closure2_slot11;
                            var1 = var5.current;
                            var8 = 1;
                            var1 = var1 + var8;
                            var5.current = var1;
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            if (!(var6 != var1)) {
                                _fun56641_ip = 219;
                                continue _fun56641
                            }
                        case 197:
                            var7 = var2.clearTimeout;
                            var1 = _closure2_slot12;
                            var5 = var1.current;
                            var1 = undefined;
                            var1 = var7.bind(var1)(var5);
                        case 219:
                            var7 = _closure2_slot12;
                            var10 = var2.setTimeout;
                            var9 = _closure2_slot13;
                            var1 = _closure2_slot5;
                            var5 = undefined;
                            var1 = var10.bind(var5)(var9, var1);
                            var7.current = var1;
                            var1 = _closure2_slot3;
                            if (!(var6 != var1)) {
                                _fun56641_ip = 335;
                                continue _fun56641
                            }
                        case 259:
                            var1 = _closure2_slot11;
                            var7 = var1.current;
                            var1 = _closure2_slot3;
                            if (!(var7 > var1)) {
                                _fun56641_ip = 335;
                                continue _fun56641
                            }
                        case 276:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var8];
                            var8 = var7.bind(var5)(var1);
                            var1 = _closure2_slot4;
                            var7 = var6 != var1;
                            var6 = 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit';
                            var6 = var8.bind(var5)(var7, var6);
                            var1 = var1.bind(var5)();
                            if (!var1) {
                                _fun56641_ip = 335;
                                continue _fun56641
                            }
                        case 323:
                            var5 = _closure2_slot11;
                            var1 = 0;
                            var5.current = var1;
                        case 335:
                            var1 = _closure2_slot8;
                            var1.current = var3;
                            var1 = _closure2_slot6;
                            var5 = var1.current;
                            var1 = 3;
                            var1 = var5 - var1;
                            if (!(var4 >= var1)) {
                                _fun56641_ip = 386;
                                continue _fun56641
                            }
                        case 365:
                            var1 = _closure2_slot9;
                            var1.current = var3;
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var4);
                        case 386:
                            var1 = _closure2_slot7;
                            var3 = var2.requestAnimationFrame;
                            var2 = _closure2_slot15;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var1.current = var0;
                        case 413:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var2, var7);
                _closure2_slot15 = var2;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot10;
                    var0 = true;
                    var2.current = var0;
                    var2 = _closure2_slot9;
                    var0 = undefined;
                    var2.current = var0;
                    var2 = _closure2_slot7;
                    var3 = global;
                    var3 = var3.requestAnimationFrame;
                    var1 = _closure2_slot15;
                    var1 = var3.bind(var0)(var1);
                    var2.current = var1;
                    return var0;
                };
                var2 = var8.bind(var9)(var2, var7);
                var8 = var9.useEffect;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var7);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot7;
                    var2 = global;
                    var3 = var2.requestAnimationFrame;
                    var2 = _closure2_slot15;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var1.current = var0;
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot14;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var0 = var4.bind(var5)(var0);
                var0 = {};
                var0.stop = var3;
                var0.reset = var2;
                var0.ticking = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 44, 4056, 2]);