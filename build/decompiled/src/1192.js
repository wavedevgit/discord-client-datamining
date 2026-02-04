// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun12954: for (var _fun12954_ip = 0;;) switch (_fun12954_ip) {
            case 0:
                var1 = arg1;
                var0 = undefined;
                var6 = undefined;
                var3 = undefined;
                var7 = undefined;
                var4 = var1.event;
                var6 = var4;
                var5 = var1.name;
                var1 = {};
                var2 = arg0;
                var1.message = var2;
                var2 = 'info';
                var1.level = var2;
                var8 = _closure1_slot3;
                var1.type = var8;
                var8 = _closure1_slot2;
                var1.category = var8;
                if (!var4) {
                    _fun12954_ip = 168;
                    continue _fun12954
                }
            case 66:
                var4 = {};
                var4.gesture = var5;
                var3 = var4;
                var4 = global;
                var8 = var4.Object;
                var5 = var8.keys;
                var4 = _closure1_slot4;
                var8 = var5.bind(var8)(var4);
                var4 = var8;
                var5 = var4[Symbol.iterator];
                var4 = var5().next;
            case 104:
                var9 = var4().value;
                var8 = var5;
                if (!(var8 !== var0)) {
                    _fun12954_ip = 162;
                    continue _fun12954
                }
            case 115: // try_start_0
                var8 = _closure1_slot4;
                var9 = var8[var9];
                var7 = var9;
                var8 = var6;
                var8 = var9 in var8;
                if (!var8) {
                    _fun12954_ip = 153;
                    continue _fun12954
                }
            case 136:
                var10 = var3;
                var9 = var7;
                var8 = var6;
                var8 = var8[var9];
                var10[var9] = var8;
            case 153: // try_end0
                _fun12954_ip = 104;
                continue _fun12954;
            case 155: // catch_target0
                CatchBlockStart(arg_register = 4);
                var5.return();
                throw var4;
            case 162:
                var1.data = var3;
            case 168:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var5 = var4[var2];
                var6 = var3.bind(var0)(var5);
                var5 = var6.addBreadcrumb;
                var5 = var5.bind(var6)(var1);
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.debug;
                var2 = var3.log;
                var5 = var1.message;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = '[GestureTracing] ';
                var1 = var4.bind(var1)(var5);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = 'gesture';
    var _closure1_slot2 = var2;
    var3 = 'user';
    var _closure1_slot3 = var3;
    var4 = {
        'NUMBER_OF_POINTERS': 'numberOfPointers',
        'NUMBER_OF_TOUCHES': 'numberOfTouches',
        'FORCE': 'force',
        'FORCE_CHANGE': 'forceChange',
        'ROTATION': 'rotation',
        'ROTATION_CHANGE': 'rotationChange',
        'SCALE': 'scale',
        'SCALE_CHANGE': 'scaleChange',
        'DURATION': 'duration',
        'VELOCITY': 'velocity',
        'VELOCITY_X': 'velocityX',
        'VELOCITY_Y': 'velocityY'
    };
    var _closure1_slot4 = var4;
    var1.DEFAULT_BREADCRUMB_CATEGORY = var2;
    var1.DEFAULT_BREADCRUMB_TYPE = var3;
    var3 = 14;
    var1.GESTURE_POSTFIX_LENGTH = var3;
    var1.ACTION_GESTURE_FALLBACK = var2;
    var0 = function arg0, arg1() {
        _fun12955: for (var _fun12955_ip = 0;;) switch (_fun12955_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var2;
                if (var0) {
                    _fun12955_ip = 63;
                    continue _fun12955
                }
            case 15:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.debug;
                var4 = var5.warn;
                var3 = '[GestureTracing] Gesture can not be undefined';
                var3 = var4.bind(var5)(var3);
                return var0;
            case 63:
                var3 = var0.handlers;
                if (var3) {
                    _fun12955_ip = 120;
                    continue _fun12955
                }
            case 72:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.debug;
                var4 = var5.warn;
                var3 = '[GestureTracing] Can not wrap gesture without handlers. If you want to wrap a gesture composition wrap individual gestures.';
                var3 = var4.bind(var5)(var3);
                return var0;
            case 120:
                if (var2) {
                    _fun12955_ip = 171;
                    continue _fun12955
                }
            case 123:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.debug;
                var3 = var4.warn;
                var2 = '[GestureTracing] Can not wrap gesture without name.';
                var2 = var3.bind(var4)(var2);
                return var0;
            case 171:
                var2 = var0.handlerName;
                var2 = var2.length;
                var4 = 14;
                var3 = var2 > var4;
                var2 = 'gesture';
                if (!var3) {
                    _fun12955_ip = 241;
                    continue _fun12955
                }
            case 196:
                var6 = var0.handlerName;
                var5 = var6.substring;
                var3 = var0.handlerName;
                var3 = var3.length;
                var4 = var3 - var4;
                var3 = 0;
                var4 = var5.bind(var6)(var3, var4);
                var3 = var4.toLowerCase;
                var2 = var3.bind(var4)();
            case 241:
                var _closure2_slot1 = var2;
                var2 = var0.handlers;
                var2 = var2.onBegin;
                var _closure2_slot2 = var2;
                var3 = var0.handlers;
                var2 = function(arg0) { // Environment: var1
                    _fun12956: for (var _fun12956_ip = 0;;) switch (_fun12956_ip) {
                        case 0:
                            var2 = arg0;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var0 = 1;
                            var1 = var9[var0];
                            var0 = undefined;
                            var7 = var8.bind(var0)(var1);
                            var6 = var7.startUserInteractionSpan;
                            var5 = {};
                            var3 = _closure2_slot0;
                            var5.elementId = var3;
                            var3 = 2;
                            var3 = var9[var3];
                            var3 = var8.bind(var0)(var3);
                            var12 = var3.UI_ACTION;
                            var11 = _closure2_slot1;
                            var3 = global;
                            var8 = var3.HermesInternal;
                            var10 = var8.concat;
                            var9 = '';
                            var8 = '.';
                            var8 = var10.bind(var9)(var12, var8, var11);
                            var5.op = var8;
                            var8 = var6.bind(var7)(var5);
                            if (!var8) {
                                _fun12956_ip = 165;
                                continue _fun12956
                            }
                        case 110:
                            var7 = var8.setAttribute;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var5 = 0;
                            var5 = var10[var5];
                            var5 = var9.bind(var0)(var5);
                            var6 = var5.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var5 = 3;
                            var5 = var10[var5];
                            var5 = var9.bind(var0)(var5);
                            var5 = var5.SPAN_ORIGIN_AUTO_INTERACTION;
                            var5 = var7.bind(var8)(var6, var5);
                        case 165:
                            var5 = _closure1_slot5;
                            var7 = _closure2_slot0;
                            var3 = var3.HermesInternal;
                            var6 = var3.concat;
                            var4 = 'Gesture ';
                            var3 = ' begin.';
                            var4 = var6.bind(var4)(var7, var3);
                            var3 = {};
                            var3.event = var2;
                            var6 = _closure2_slot1;
                            var3.name = var6;
                            var3 = var5.bind(var0)(var4, var3);
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun12956_ip = 239;
                                continue _fun12956
                            }
                        case 230:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                        case 239:
                            return var0;
                    }
                };
                var3.onBegin = var2;
                var2 = var0.handlers;
                var2 = var2.onEnd;
                var _closure2_slot3 = var2;
                var2 = var0.handlers;
                var1 = function(arg0) { // Environment: var1
                    _fun12957: for (var _fun12957_ip = 0;;) switch (_fun12957_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = _closure1_slot5;
                            var6 = _closure2_slot0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var3 = 'Gesture ';
                            var0 = ' end.';
                            var4 = var4.bind(var3)(var6, var0);
                            var3 = {};
                            var3.event = var2;
                            var0 = _closure2_slot1;
                            var3.name = var0;
                            var0 = undefined;
                            var3 = var5.bind(var0)(var4, var3);
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun12957_ip = 87;
                                continue _fun12957
                            }
                        case 78:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)(var2);
                        case 87:
                            return var0;
                    }
                };
                var2.onEnd = var1;
                return var0;
        }
    };
    var1.sentryTraceGesture = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1164, 1154, 1157]);