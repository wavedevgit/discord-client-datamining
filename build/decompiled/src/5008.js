// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1, arg2() {
        _fun45026: for (var _fun45026_ip = 0;;) switch (_fun45026_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var7 = arg2;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var7;
                var0 = var2.prepare;
                var0 = var0.bind(var2)();
                var0 = var7.length;
                var6 = 0;
                var4 = var6 < var0;
                var0 = undefined;
                var5 = 0;
                if (!var4) {
                    _fun45026_ip = 158;
                    continue _fun45026
                }
            case 50:
                var4 = var3.attachedGestures;
                var4 = var4[var5];
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var6];
                var9 = var9.bind(var0)(var8);
                var8 = var9.checkGestureCallbacksForWorklets;
                var8 = var8.bind(var9)(var4);
                var8 = var7[var5];
                var9 = var8.handlerTag;
                var8 = var4.handlerTag;
                if (!(var9 !== var8)) {
                    _fun45026_ip = 146;
                    continue _fun45026
                }
            case 108:
                var9 = var7[var5];
                var8 = var4.handlerTag;
                var9.handlerTag = var8;
                var8 = var7[var5];
                var8 = var8.handlers;
                var4 = var4.handlerTag;
                var8.handlerTag = var4;
            case 146:
                var5 = var5 + 1;
                var4 = var7.length;
                if (var5 < var4) {
                    _fun45026_ip = 50;
                    continue _fun45026
                }
            case 158:
                var3 = var3.attachedGestures;
                var _closure2_slot2 = var3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.ghQueueMicrotask;
                var1 = function() { // Environment: var1
                    _fun45027: for (var _fun45027_ip = 0;;) switch (_fun45027_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.isMounted;
                            if (!var0) {
                                _fun45027_ip = 464;
                                continue _fun45027
                            }
                        case 21:
                            var2 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var0 = var0.attachedGestures;
                            if (!(var2 === var0)) {
                                _fun45027_ip = 464;
                                continue _fun45027
                            }
                        case 42:
                            var0 = _closure2_slot2;
                            var3 = var0.length;
                            var0 = _closure2_slot1;
                            var2 = var0.length;
                            var8 = var3 !== var2;
                            var0 = var0.length;
                            var12 = 0;
                            var6 = var12 < var0;
                            var11 = 2;
                            var2 = undefined;
                            var3 = 3;
                            var10 = 4;
                            var7 = 0;
                            var5 = var8;
                            if (!var6) {
                                _fun45027_ip = 371;
                                continue _fun45027
                            }
                        case 100:
                            var6 = _closure2_slot2;
                            var17 = var6[var7];
                            var6 = var17.handlers;
                            var13 = var6.gestureId;
                            var6 = _closure2_slot1;
                            var6 = var6[var7];
                            var6 = var6.handlers;
                            var6 = var6.gestureId;
                            var6 = var13 !== var6;
                            if (!var6) {
                                _fun45027_ip = 173;
                                continue _fun45027
                            }
                        case 147:
                            var13 = _closure2_slot1;
                            var13 = var13[var7];
                            var13 = var13.shouldUseReanimated;
                            if (var13) {
                                _fun45027_ip = 170;
                                continue _fun45027
                            }
                        case 164:
                            var13 = var17.shouldUseReanimated;
                        case 170:
                            var6 = var13;
                        case 173:
                            if (!var6) {
                                _fun45027_ip = 178;
                                continue _fun45027
                            }
                        case 176:
                            var8 = true;
                        case 178:
                            var6 = _closure2_slot1;
                            var13 = var6[var7];
                            var13 = var13.config;
                            var17.config = var13;
                            var13 = var6[var7];
                            var13 = var13.handlers;
                            var17.handlers = var13;
                            var15 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var14 = var13[var11];
                            var19 = var15.bind(var2)(var14);
                            var18 = var19.updateGestureHandler;
                            var16 = var17.handlerTag;
                            var14 = _closure1_slot0;
                            var15 = var13[var3];
                            var23 = var14.bind(var2)(var15);
                            var22 = var23.filterConfig;
                            var21 = var17.config;
                            var15 = var13[var12];
                            var15 = var14.bind(var2)(var15);
                            var20 = var15.ALLOWED_PROPS;
                            var15 = var13[var12];
                            var24 = var14.bind(var2)(var15);
                            var15 = var24.extractGestureRelations;
                            var15 = var15.bind(var24)(var17);
                            var15 = var22.bind(var23)(var21, var20, var15);
                            var15 = var18.bind(var19)(var16, var15);
                            var13 = var13[var10];
                            var16 = var14.bind(var2)(var13);
                            var15 = var16.registerHandler;
                            var14 = var17.handlerTag;
                            var13 = var17.config;
                            var13 = var13.testId;
                            var13 = var15.bind(var16)(var14, var17, var13);
                            var7 = var7 + 1;
                            var6 = var6.length;
                            var5 = var8;
                            if (var7 < var6) {
                                _fun45027_ip = 100;
                                continue _fun45027
                            }
                        case 371:
                            var6 = _closure2_slot0;
                            var6 = var6.animatedHandlers;
                            if (!var6) {
                                _fun45027_ip = 437;
                                continue _fun45027
                            }
                        case 384:
                            if (!var5) {
                                _fun45027_ip = 437;
                                continue _fun45027
                            }
                        case 387:
                            var7 = _closure2_slot2;
                            var6 = var7.filter;
                            var5 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var0 = var0.shouldUseReanimated;
                                return var0;
                            };
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.map;
                            var4 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var0 = var0.handlers;
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                            var1 = _closure2_slot0;
                            var1 = var1.animatedHandlers;
                            var1.value = var4;
                        case 437:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var3];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.scheduleFlushOperations;
                            var0 = var0.bind(var1)();
                        case 464:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.updateHandlers = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5000, 4987, 4972, 4986, 4966]);