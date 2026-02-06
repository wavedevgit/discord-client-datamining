// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44852: for (var _fun44852_ip = 0;;) switch (_fun44852_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var7;
            var0 = function() {
                _fun44853: for (var _fun44853_ip = 0;;) switch (_fun44853_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun44853_ip = 74;
                        continue _fun44853;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot13 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = function arg0() {
                _fun44856: for (var _fun44856_ip = 0;;) switch (_fun44856_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = function arg0() {
                            _fun44857: for (var _fun44857_ip = 0;;) switch (_fun44857_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = global;
                                    var1 = var0.Array;
                                    var0 = var1.isArray;
                                    var0 = var0.bind(var1)(var3);
                                    if (var0) {
                                        _fun44857_ip = 43;
                                        continue _fun44857
                                    }
                                case 24:
                                    var0 = var3;
                                    if (!var0) {
                                        _fun44857_ip = 41;
                                        continue _fun44857
                                    }
                                case 30:
                                    var2 = var3.current;
                                    var1 = null;
                                    var0 = var1 === var2;
                                case 41:
                                    _fun44857_ip = 61;
                                    continue _fun44857;
                                case 43:
                                    var2 = var3.some;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun44858: for (var _fun44858_ip = 0;;) switch (_fun44858_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = var1;
                                                if (!var0) {
                                                    _fun44858_ip = 20;
                                                    continue _fun44858
                                                }
                                            case 9:
                                                var2 = var1.current;
                                                var1 = null;
                                                var0 = var1 === var2;
                                            case 20:
                                                return var0;
                                        }
                                    };
                                    var0 = var2.bind(var3)(var1);
                                case 61:
                                    return var0;
                            }
                        };
                        var0 = var1.simultaneousHandlers;
                        var2 = undefined;
                        var0 = var3.bind(var2)(var0);
                        if (var0) {
                            _fun44856_ip = 37;
                            continue _fun44856
                        }
                    case 26:
                        var1 = var1.waitFor;
                        var0 = var3.bind(var2)(var1);
                    case 37:
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var3 = global;
            var9 = var3.Object;
            var8 = var9.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var5);
            var0 = 0;
            var5 = var7[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var _closure1_slot3 = var5;
            var5 = 1;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot4 = var5;
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot5 = var5;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot6 = var5;
            var5 = 4;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot7 = var5;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot8 = var5;
            var5 = 6;
            var5 = var7[var5];
            var6 = var6.bind(var0)(var5);
            var5 = 7;
            var8 = var7[var5];
            var5 = arg3;
            var5 = var5.bind(var0)(var8);
            var _closure1_slot9 = var5;
            var5 = 8;
            var5 = var7[var5];
            var8 = var4.bind(var0)(var5);
            var5 = var8.Platform;
            var5 = var8.UIManager;
            var8 = var8.DeviceEventEmitter;
            var8 = 9;
            var8 = var7[var8];
            var8 = var4.bind(var0)(var8);
            var8 = var8.jsx;
            var8 = 10;
            var8 = var7[var8];
            var8 = var4.bind(var0)(var8);
            var9 = var8.customDirectEventTypes;
            var8 = {};
            var15 = 'onGestureHandlerEvent';
            var8.registrationName = var15;
            var9.topGestureHandlerEvent = var8;
            var11 = var3.Object;
            var10 = var11.assign;
            var9 = {};
            var8 = {};
            var8.registrationName = var15;
            var9.onGestureHandlerEvent = var8;
            var8 = {};
            var14 = 'onGestureHandlerStateChange';
            var8.registrationName = var14;
            var9.onGestureHandlerStateChange = var8;
            var8 = 11;
            var8 = var7[var8];
            var12 = var4.bind(var0)(var8);
            var8 = var12.isFabric;
            var8 = var8.bind(var12)();
            if (!var8) {
                _fun44852_ip = 387;
                continue _fun44852
            }
        case 354:
            var12 = {};
            var13 = {};
            var13.registrationName = var15;
            var12.topOnGestureHandlerEvent = var13;
            var13 = {};
            var13.registrationName = var14;
            var12.topOnGestureHandlerStateChange = var13;
            var8 = var12;
        case 387:
            var12 = var10.bind(var11)(var9, var8);
            var11 = var3.Object;
            var10 = var11.assign;
            var9 = var5.genericDirectEventTypes;
            var8 = {};
            var8 = var10.bind(var11)(var8, var9, var12);
            var5.genericDirectEventTypes = var8;
            var9 = var5.getViewManagerConfig;
            var8 = null;
            var9 = var8 == var9;
            var8 = undefined;
            if (var9) {
                _fun44852_ip = 457;
                continue _fun44852
            }
        case 442:
            var10 = var5.getViewManagerConfig;
            var9 = 'getConstants';
            var8 = var10.bind(var5)(var9);
        case 457:
            if (!var8) {
                _fun44852_ip = 492;
                continue _fun44852
            }
        case 460:
            var11 = var3.Object;
            var10 = var11.assign;
            var9 = var8.genericDirectEventTypes;
            var3 = {};
            var3 = var10.bind(var11)(var3, var9, var12);
            var8.genericDirectEventTypes = var3;
        case 492:
            var3 = var5.setJSResponder;
            if (!(var0 === var3)) {
                _fun44852_ip = 507;
                continue _fun44852
            }
        case 502:
            var3 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
        case 507:
            var _closure1_slot10 = var3;
            var3 = var5.clearJSResponder;
            if (!(var0 === var3)) {
                _fun44852_ip = 526;
                continue _fun44852
            }
        case 521:
            var3 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
        case 526:
            var _closure1_slot11 = var3;
            var3 = function(arg0, arg1) { // Environment: var1
                var3 = arg0;
                var2 = arg1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 12;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.handleSetJSResponder;
                var4 = var4.bind(var5)(var3, var2);
                var1 = _closure1_slot10;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
            };
            var5.setJSResponder = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.handleClearJSResponder;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot11;
                var1 = var1.bind(var0)();
                return var0;
            };
            var5.clearJSResponder = var3;
            var3 = 13;
            var5 = var7[var3];
            var5 = var4.bind(var0)(var5);
            var5 = var5.State;
            var8 = var5.UNDETERMINED;
            var5 = {};
            var9 = var6.bind(var0)(var5, var8, var0);
            var5 = var7[var3];
            var5 = var4.bind(var0)(var5);
            var5 = var5.State;
            var8 = var5.BEGAN;
            var5 = 'onBegan';
            var9 = var6.bind(var0)(var9, var8, var5);
            var5 = var7[var3];
            var5 = var4.bind(var0)(var5);
            var5 = var5.State;
            var8 = var5.FAILED;
            var5 = 'onFailed';
            var9 = var6.bind(var0)(var9, var8, var5);
            var5 = var7[var3];
            var5 = var4.bind(var0)(var5);
            var5 = var5.State;
            var8 = var5.CANCELLED;
            var5 = 'onCancelled';
            var9 = var6.bind(var0)(var9, var8, var5);
            var5 = var7[var3];
            var5 = var4.bind(var0)(var5);
            var5 = var5.State;
            var8 = var5.ACTIVE;
            var5 = 'onActivated';
            var5 = var6.bind(var0)(var9, var8, var5);
            var3 = var7[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.State;
            var4 = var3.END;
            var3 = 'onEnded';
            var3 = var6.bind(var0)(var5, var4, var3);
            var _closure1_slot12 = var3;
            var1 = function arg0() {
                _fun44863: for (var _fun44863_ip = 0;;) switch (_fun44863_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.name;
                        var _closure2_slot0 = var2;
                        var4 = var1.allowedProps;
                        var3 = undefined;
                        if (!(var3 === var4)) {
                            _fun44863_ip = 30;
                            continue _fun44863
                        }
                    case 26:
                        var4 = new Array(0);
                    case 30:
                        var _closure2_slot1 = var4;
                        var4 = var1.config;
                        if (!(var3 === var4)) {
                            _fun44863_ip = 45;
                            continue _fun44863
                        }
                    case 43:
                        var4 = {};
                    case 45:
                        var _closure2_slot2 = var4;
                        var4 = var1.transformProps;
                        var _closure2_slot3 = var4;
                        var1 = var1.customNativeProps;
                        if (!(var3 === var1)) {
                            _fun44863_ip = 73;
                            continue _fun44863
                        }
                    case 69:
                        var1 = new Array(0);
                    case 73:
                        var _closure2_slot4 = var1;
                        var4 = _closure1_slot9;
                        var4 = var4.Component;
                        var0 = function(arg0) { // Environment: var0
                            var3 = function arg0() {
                                _fun44865: for (var _fun44865_ip = 0;;) switch (_fun44865_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var6 = this;
                                        var0 = _closure1_slot4;
                                        var5 = _closure3_slot0;
                                        var4 = undefined;
                                        var0 = var0.bind(var4)(var6, var5);
                                        var11 = new Array(1);
                                        var11[0] = var1;
                                        var0 = _closure1_slot7;
                                        var10 = var0.bind(var4)(var5);
                                        var5 = _closure1_slot6;
                                        var0 = _closure1_slot13;
                                        var0 = var0.bind(var4)();
                                        if (var0) {
                                            _fun44865_ip = 75;
                                            continue _fun44865
                                        }
                                    case 62:
                                        var0 = var10.apply;
                                        var0 = var0.bind(var10)(var6, var11);
                                        _fun44865_ip = 109;
                                        continue _fun44865;
                                    case 75:
                                        var7 = global;
                                        var9 = var7.Reflect;
                                        var8 = var9.construct;
                                        var7 = _closure1_slot7;
                                        var7 = var7.bind(var4)(var6);
                                        var7 = var7.constructor;
                                        var0 = var8.bind(var9)(var10, var11, var7);
                                    case 109:
                                        var0 = var5.bind(var4)(var6, var0);
                                        var _closure4_slot0 = var0;
                                        var5 = -1;
                                        var0.handlerTag = var5;
                                        var5 = function(arg0) { // Environment: var3
                                            _fun44866: for (var _fun44866_ip = 0;;) switch (_fun44866_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var0 = var2.nativeEvent;
                                                    var3 = var0.handlerTag;
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.handlerTag;
                                                    if (!(var3 !== var1)) {
                                                        _fun44866_ip = 75;
                                                        continue _fun44866
                                                    }
                                                case 32:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.props;
                                                    var3 = var1.onGestureHandlerEvent;
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun44866_ip = 142;
                                                        continue _fun44866
                                                    }
                                                case 53:
                                                    var1 = _closure4_slot0;
                                                    var3 = var1.props;
                                                    var1 = var3.onGestureHandlerEvent;
                                                    var1 = var1.bind(var3)(var2);
                                                    _fun44866_ip = 142;
                                                    continue _fun44866;
                                                case 75:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.props;
                                                    var1 = var1.onGestureEvent;
                                                    var3 = 'function';
                                                    var1 = typeof var1;
                                                    if (!(var3 === var1)) {
                                                        _fun44866_ip = 142;
                                                        continue _fun44866
                                                    }
                                                case 101:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.props;
                                                    var3 = var1.onGestureEvent;
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun44866_ip = 142;
                                                        continue _fun44866
                                                    }
                                                case 122:
                                                    var0 = _closure4_slot0;
                                                    var1 = var0.props;
                                                    var0 = var1.onGestureEvent;
                                                    var0 = var0.bind(var1)(var2);
                                                case 142:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.onGestureHandlerEvent = var5;
                                        var5 = function(arg0) { // Environment: var3
                                            _fun44867: for (var _fun44867_ip = 0;;) switch (_fun44867_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var0 = var2.nativeEvent;
                                                    var3 = var0.handlerTag;
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.handlerTag;
                                                    if (!(var3 !== var1)) {
                                                        _fun44867_ip = 81;
                                                        continue _fun44867
                                                    }
                                                case 32:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.props;
                                                    var3 = var1.onGestureHandlerStateChange;
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun44867_ip = 212;
                                                        continue _fun44867
                                                    }
                                                case 56:
                                                    var1 = _closure4_slot0;
                                                    var3 = var1.props;
                                                    var1 = var3.onGestureHandlerStateChange;
                                                    var1 = var1.bind(var3)(var2);
                                                    _fun44867_ip = 212;
                                                    continue _fun44867;
                                                case 81:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.props;
                                                    var1 = var1.onHandlerStateChange;
                                                    var4 = 'function';
                                                    var1 = typeof var1;
                                                    if (!(var4 === var1)) {
                                                        _fun44867_ip = 148;
                                                        continue _fun44867
                                                    }
                                                case 107:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.props;
                                                    var3 = var1.onHandlerStateChange;
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun44867_ip = 148;
                                                        continue _fun44867
                                                    }
                                                case 128:
                                                    var1 = _closure4_slot0;
                                                    var3 = var1.props;
                                                    var1 = var3.onHandlerStateChange;
                                                    var1 = var1.bind(var3)(var2);
                                                case 148:
                                                    var1 = var2.nativeEvent;
                                                    var3 = var1.state;
                                                    var1 = _closure1_slot12;
                                                    var3 = var1[var3];
                                                    var1 = var3;
                                                    if (!var1) {
                                                        _fun44867_ip = 189;
                                                        continue _fun44867
                                                    }
                                                case 176:
                                                    var0 = _closure4_slot0;
                                                    var0 = var0.props;
                                                    var1 = var0[var3];
                                                case 189:
                                                    var0 = var1;
                                                    if (!var0) {
                                                        _fun44867_ip = 202;
                                                        continue _fun44867
                                                    }
                                                case 195:
                                                    var3 = typeof var1;
                                                    var0 = var4 === var3;
                                                case 202:
                                                    if (!var0) {
                                                        _fun44867_ip = 212;
                                                        continue _fun44867
                                                    }
                                                case 205:
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)(var2);
                                                case 212:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.onGestureHandlerStateChange = var5;
                                        var5 = function(arg0) { // Environment: var3
                                            _fun44868: for (var _fun44868_ip = 0;;) switch (_fun44868_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = _closure4_slot0;
                                                    var1.viewNode = var2;
                                                    var3 = _closure1_slot9;
                                                    var4 = var3.Children;
                                                    var3 = var4.only;
                                                    var1 = var1.props;
                                                    var1 = var1.children;
                                                    var4 = var3.bind(var4)(var1);
                                                    var3 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 11;
                                                    var1 = var1[var0];
                                                    var0 = undefined;
                                                    var3 = var3.bind(var0)(var1);
                                                    var1 = var3.isReact19;
                                                    var1 = var1.bind(var3)();
                                                    var3 = null;
                                                    if (var1) {
                                                        _fun44868_ip = 103;
                                                        continue _fun44868
                                                    }
                                                case 87:
                                                    var5 = var3 == var4;
                                                    var1 = undefined;
                                                    if (var5) {
                                                        _fun44868_ip = 101;
                                                        continue _fun44868
                                                    }
                                                case 96:
                                                    var1 = var4.ref;
                                                case 101:
                                                    _fun44868_ip = 125;
                                                    continue _fun44868;
                                                case 103:
                                                    var4 = var4.props;
                                                    var5 = var3 == var4;
                                                    var3 = undefined;
                                                    if (var5) {
                                                        _fun44868_ip = 122;
                                                        continue _fun44868
                                                    }
                                                case 117:
                                                    var3 = var4.ref;
                                                case 122:
                                                    var1 = var3;
                                                case 125:
                                                    if (!var1) {
                                                        _fun44868_ip = 152;
                                                        continue _fun44868
                                                    }
                                                case 128:
                                                    var4 = 'function';
                                                    var3 = typeof var1;
                                                    if (!(var4 !== var3)) {
                                                        _fun44868_ip = 147;
                                                        continue _fun44868
                                                    }
                                                case 139:
                                                    var1.current = var2;
                                                    _fun44868_ip = 152;
                                                    continue _fun44868;
                                                case 147:
                                                    var1 = var1.bind(var0)(var2);
                                                case 152:
                                                    return var0;
                                            }
                                        };
                                        var0.refHandler = var5;
                                        var5 = function(arg0) { // Environment: var3
                                            var5 = arg0;
                                            var1 = _closure4_slot0;
                                            var6 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var0 = 14;
                                            var3 = var4[var0];
                                            var0 = undefined;
                                            var6 = var6.bind(var0)(var3);
                                            var3 = var6.getNextHandlerTag;
                                            var3 = var3.bind(var6)();
                                            var1.handlerTag = var3;
                                            var1.config = var5;
                                            var3 = _closure1_slot1;
                                            var2 = 12;
                                            var2 = var4[var2];
                                            var4 = var3.bind(var0)(var2);
                                            var3 = var4.createGestureHandler;
                                            var2 = _closure2_slot0;
                                            var1 = var1.handlerTag;
                                            var1 = var3.bind(var4)(var2, var1, var5);
                                            return var0;
                                        };
                                        var0.createGestureHandler = var5;
                                        var5 = function(arg0) { // Environment: var3
                                            _fun44870: for (var _fun44870_ip = 0;;) switch (_fun44870_ip) {
                                                case 0:
                                                    var7 = arg0;
                                                    var3 = _closure4_slot0;
                                                    var3.viewTag = var7;
                                                    var5 = _closure1_slot0;
                                                    var4 = _closure1_slot2;
                                                    var0 = 15;
                                                    var4 = var4[var0];
                                                    var0 = undefined;
                                                    var8 = var5.bind(var0)(var4);
                                                    var6 = var8.registerOldGestureHandler;
                                                    var5 = var3.handlerTag;
                                                    var4 = {};
                                                    var9 = var3.onGestureHandlerEvent;
                                                    var4.onGestureEvent = var9;
                                                    var9 = var3.onGestureHandlerStateChange;
                                                    var4.onGestureStateChange = var9;
                                                    var4 = var6.bind(var8)(var5, var4);
                                                    var3 = var3.props;
                                                    var5 = null;
                                                    var6 = var5 == var3;
                                                    var4 = undefined;
                                                    if (var6) {
                                                        _fun44870_ip = 105;
                                                        continue _fun44870
                                                    }
                                                case 99:
                                                    var4 = var3.onGestureEvent;
                                                case 105:
                                                    var3 = var4;
                                                    if (!var3) {
                                                        _fun44870_ip = 133;
                                                        continue _fun44870
                                                    }
                                                case 111:
                                                    var6 = 'current';
                                                    var6 = var6 in var4;
                                                    if (var6) {
                                                        _fun44870_ip = 130;
                                                        continue _fun44870
                                                    }
                                                case 122:
                                                    var8 = 'workletEventHandler';
                                                    var6 = var8 in var4;
                                                case 130:
                                                    var3 = var6;
                                                case 133:
                                                    var6 = _closure4_slot0;
                                                    var6 = var6.props;
                                                    var8 = var5 == var6;
                                                    var5 = undefined;
                                                    if (var8) {
                                                        _fun44870_ip = 157;
                                                        continue _fun44870
                                                    }
                                                case 151:
                                                    var5 = var6.onHandlerStateChange;
                                                case 157:
                                                    if (var3) {
                                                        _fun44870_ip = 267;
                                                        continue _fun44870
                                                    }
                                                case 160:
                                                    if (!var5) {
                                                        _fun44870_ip = 185;
                                                        continue _fun44870
                                                    }
                                                case 163:
                                                    var3 = 'current';
                                                    var3 = var3 in var5;
                                                    if (var3) {
                                                        _fun44870_ip = 267;
                                                        continue _fun44870
                                                    }
                                                case 174:
                                                    var3 = 'workletEventHandler';
                                                    var3 = var3 in var5;
                                                    if (var3) {
                                                        _fun44870_ip = 267;
                                                        continue _fun44870
                                                    }
                                                case 185:
                                                    if (!var4) {
                                                        _fun44870_ip = 199;
                                                        continue _fun44870
                                                    }
                                                case 188:
                                                    var3 = '__isNative';
                                                    var3 = var3 in var4;
                                                    if (var3) {
                                                        _fun44870_ip = 233;
                                                        continue _fun44870
                                                    }
                                                case 199:
                                                    var4 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var3 = 16;
                                                    var3 = var5[var3];
                                                    var3 = var4.bind(var0)(var3);
                                                    var3 = var3.ActionType;
                                                    var6 = var3.JS_FUNCTION_OLD_API;
                                                    _fun44870_ip = 265;
                                                    continue _fun44870;
                                                case 233:
                                                    var4 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var3 = 16;
                                                    var3 = var5[var3];
                                                    var3 = var4.bind(var0)(var3);
                                                    var3 = var3.ActionType;
                                                    var6 = var3.NATIVE_ANIMATED_EVENT;
                                                case 265:
                                                    _fun44870_ip = 299;
                                                    continue _fun44870;
                                                case 267:
                                                    var4 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var3 = 16;
                                                    var3 = var5[var3];
                                                    var3 = var4.bind(var0)(var3);
                                                    var3 = var3.ActionType;
                                                    var6 = var3.REANIMATED_WORKLET;
                                                case 299:
                                                    var5 = _closure1_slot1;
                                                    var3 = _closure1_slot2;
                                                    var4 = 12;
                                                    var4 = var3[var4];
                                                    var5 = var5.bind(var0)(var4);
                                                    var4 = var5.attachGestureHandler;
                                                    var2 = _closure4_slot0;
                                                    var2 = var2.handlerTag;
                                                    var2 = var4.bind(var5)(var2, var7, var6);
                                                    var2 = _closure1_slot0;
                                                    var1 = 17;
                                                    var1 = var3[var1];
                                                    var4 = var2.bind(var0)(var1);
                                                    var1 = var4.scheduleFlushOperations;
                                                    var1 = var1.bind(var4)();
                                                    var1 = 18;
                                                    var1 = var3[var1];
                                                    var3 = var2.bind(var0)(var1);
                                                    var2 = var3.ghQueueMicrotask;
                                                    var1 = function() { // Environment: var1
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot2;
                                                        var0 = 19;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var1 = var2.bind(var0)(var1);
                                                        var3 = var1.MountRegistry;
                                                        var2 = var3.gestureHandlerWillMount;
                                                        var1 = _closure4_slot0;
                                                        var1 = var2.bind(var3)(var1);
                                                        return var0;
                                                    };
                                                    var1 = var2.bind(var3)(var1);
                                                    return var0;
                                            }
                                        };
                                        var0.attachGestureHandler = var5;
                                        var3 = function(arg0) { // Environment: var3
                                            var6 = arg0;
                                            var2 = _closure4_slot0;
                                            var2.config = var6;
                                            var5 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var0 = 12;
                                            var4 = var3[var0];
                                            var0 = undefined;
                                            var5 = var5.bind(var0)(var4);
                                            var4 = var5.updateGestureHandler;
                                            var2 = var2.handlerTag;
                                            var2 = var4.bind(var5)(var2, var6);
                                            var2 = _closure1_slot0;
                                            var1 = 17;
                                            var1 = var3[var1];
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.scheduleFlushOperations;
                                            var1 = var1.bind(var2)();
                                            return var0;
                                        };
                                        var0.updateGestureHandler = var3;
                                        var3 = {};
                                        var0.config = var3;
                                        var5 = _closure1_slot9;
                                        var3 = var5.createRef;
                                        var3 = var3.bind(var5)();
                                        var0.propsRef = var3;
                                        var3 = var5.createRef;
                                        var3 = var3.bind(var5)();
                                        var0.isMountedRef = var3;
                                        var3 = {};
                                        var5 = true;
                                        var3.allowTouches = var5;
                                        var0.state = var3;
                                        var3 = var1.id;
                                        if (!var3) {
                                            _fun44865_ip = 341;
                                            continue _fun44865
                                        }
                                    case 264:
                                        var6 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var5 = 15;
                                        var3 = var3[var5];
                                        var3 = var6.bind(var4)(var3);
                                        var6 = var3.handlerIDToTag;
                                        var3 = var1.id;
                                        var3 = var6[var3];
                                        if (!(var4 === var3)) {
                                            _fun44865_ip = 343;
                                            continue _fun44865
                                        }
                                    case 303:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var2 = var2[var5];
                                        var2 = var3.bind(var4)(var2);
                                        var4 = var2.handlerIDToTag;
                                        var3 = var1.id;
                                        var2 = var0.handlerTag;
                                        var4[var3] = var2;
                                    case 341:
                                        return var0;
                                    case 343:
                                        var0 = global;
                                        var2 = var0.Error;
                                        var4 = var1.id;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var1 = 'Handler with ID "';
                                        var0 = '" already registered';
                                        var14 = var3.bind(var1)(var4, var0);
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var15 = var1;
                                        var0 = new var15[var2](var14, var13);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                }
                            };
                            var _closure3_slot0 = var3;
                            var4 = _closure1_slot8;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var4.bind(var2)(var3, var1);
                            var1 = _closure1_slot5;
                            var4 = {};
                            var0 = 'componentDidMount';
                            var4.key = var0;
                            var0 = function() {
                                _fun44873: for (var _fun44873_ip = 0;;) switch (_fun44873_ip) {
                                    case 0:
                                        var3 = this;
                                        var _closure4_slot0 = var3;
                                        var5 = var3.props;
                                        var1 = var3.isMountedRef;
                                        var0 = true;
                                        var1.current = var0;
                                        var4 = _closure1_slot14;
                                        var0 = undefined;
                                        var4 = var4.bind(var0)(var5);
                                        if (!var4) {
                                            _fun44873_ip = 81;
                                            continue _fun44873
                                        }
                                    case 45:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var4 = 18;
                                        var4 = var6[var4];
                                        var5 = var5.bind(var0)(var4);
                                        var4 = var5.ghQueueMicrotask;
                                        var2 = function() { // Environment: var2
                                            var2 = _closure4_slot0;
                                            var1 = var2.update;
                                            var0 = 1;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var2 = var4.bind(var5)(var2);
                                    case 81:
                                        var4 = var3.createGestureHandler;
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 17;
                                        var2 = var6[var2];
                                        var8 = var5.bind(var0)(var2);
                                        var7 = var8.filterConfig;
                                        var5 = _closure2_slot3;
                                        if (var5) {
                                            _fun44873_ip = 130;
                                            continue _fun44873
                                        }
                                    case 123:
                                        var6 = var3.props;
                                        _fun44873_ip = 144;
                                        continue _fun44873;
                                    case 130:
                                        var9 = _closure2_slot3;
                                        var5 = var3.props;
                                        var6 = var9.bind(var0)(var5);
                                    case 144:
                                        var11 = new Array(0);
                                        var10 = var11.concat;
                                        var12 = _closure1_slot3;
                                        var5 = _closure2_slot1;
                                        var9 = var12.bind(var0)(var5);
                                        var5 = _closure2_slot4;
                                        var5 = var12.bind(var0)(var5);
                                        var5 = var10.bind(var11)(var9, var5);
                                        var2 = _closure2_slot2;
                                        var2 = var7.bind(var8)(var6, var5, var2);
                                        var2 = var4.bind(var3)(var2);
                                        var2 = var3.viewNode;
                                        if (var2) {
                                            _fun44873_ip = 277;
                                            continue _fun44873
                                        }
                                    case 206:
                                        var2 = global;
                                        var5 = var2.Error;
                                        var4 = _closure3_slot0;
                                        var7 = var4.displayName;
                                        var2 = var2.HermesInternal;
                                        var6 = var2.concat;
                                        var4 = '[Gesture Handler] Failed to obtain view for ';
                                        var2 = ". Note that old API doesn't support functional components.";
                                        var15 = var6.bind(var4)(var7, var2);
                                        var4 = var5.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var16 = var4;
                                        var2 = new var16[var5](var15, var14);
                                        var2 = var2 instanceof Object ? var2 : var4;
                                        throw var2;
                                    case 277:
                                        var2 = var3.attachGestureHandler;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var1 = 20;
                                        var1 = var5[var1];
                                        var4 = var4.bind(var0)(var1);
                                        var1 = var3.viewNode;
                                        var1 = var4.bind(var0)(var1);
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var4.value = var0;
                            var0 = new Array(6);
                            var0[0] = var4;
                            var4 = {};
                            var6 = 'componentDidUpdate';
                            var4.key = var6;
                            var6 = function() {
                                _fun44875: for (var _fun44875_ip = 0;;) switch (_fun44875_ip) {
                                    case 0:
                                        var3 = this;
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 20;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var3.viewNode;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var3.viewTag;
                                        if (!(var1 !== var2)) {
                                            _fun44875_ip = 60;
                                            continue _fun44875
                                        }
                                    case 49:
                                        var1 = var3.attachGestureHandler;
                                        var1 = var1.bind(var3)(var2);
                                    case 60:
                                        var2 = var3.update;
                                        var1 = 1;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[1] = var4;
                            var4 = {};
                            var6 = 'componentWillUnmount';
                            var4.key = var6;
                            var6 = function() {
                                _fun44876: for (var _fun44876_ip = 0;;) switch (_fun44876_ip) {
                                    case 0:
                                        var3 = this;
                                        var1 = var3.inspectorToggleListener;
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun44876_ip = 27;
                                            continue _fun44876
                                        }
                                    case 17:
                                        var0 = var1.remove;
                                        var0 = var0.bind(var1)();
                                    case 27:
                                        var1 = var3.isMountedRef;
                                        var0 = false;
                                        var1.current = var0;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var6 = 15;
                                        var2 = var5[var6];
                                        var0 = undefined;
                                        var8 = var4.bind(var0)(var2);
                                        var7 = var8.unregisterOldGestureHandler;
                                        var2 = var3.handlerTag;
                                        var2 = var7.bind(var8)(var2);
                                        var7 = _closure1_slot1;
                                        var2 = 12;
                                        var2 = var5[var2];
                                        var8 = var7.bind(var0)(var2);
                                        var7 = var8.dropGestureHandler;
                                        var2 = var3.handlerTag;
                                        var2 = var7.bind(var8)(var2);
                                        var2 = 17;
                                        var2 = var5[var2];
                                        var4 = var4.bind(var0)(var2);
                                        var2 = var4.scheduleFlushOperations;
                                        var2 = var2.bind(var4)();
                                        var2 = var3.props;
                                        var4 = var2.id;
                                        if (!var4) {
                                            _fun44876_ip = 178;
                                            continue _fun44876
                                        }
                                    case 151:
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var2 = var2[var6];
                                        var2 = var5.bind(var0)(var2);
                                        var2 = var2.handlerIDToTag;
                                        var2 = delete var2[var4];
                                    case 178:
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 19;
                                        var1 = var4[var1];
                                        var1 = var2.bind(var0)(var1);
                                        var2 = var1.MountRegistry;
                                        var1 = var2.gestureHandlerWillUnmount;
                                        var1 = var1.bind(var2)(var3);
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[2] = var4;
                            var4 = {};
                            var6 = 'update';
                            var4.key = var6;
                            var6 = function arg0() {
                                _fun44877: for (var _fun44877_ip = 0;;) switch (_fun44877_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var5 = this;
                                        var _closure4_slot0 = var4;
                                        var _closure4_slot1 = var5;
                                        var1 = var5.isMountedRef;
                                        var1 = var1.current;
                                        if (!var1) {
                                            _fun44877_ip = 258;
                                            continue _fun44877
                                        }
                                    case 33:
                                        var6 = _closure1_slot14;
                                        var2 = var5.props;
                                        var3 = undefined;
                                        var2 = var6.bind(var3)(var2);
                                        if (!var2) {
                                            _fun44877_ip = 64;
                                            continue _fun44877
                                        }
                                    case 55:
                                        var2 = 0;
                                        if (!(!(var4 > var2))) {
                                            _fun44877_ip = 222;
                                            continue _fun44877
                                        }
                                    case 64:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 17;
                                        var2 = var6[var2];
                                        var8 = var4.bind(var3)(var2);
                                        var7 = var8.filterConfig;
                                        var4 = _closure2_slot3;
                                        if (var4) {
                                            _fun44877_ip = 107;
                                            continue _fun44877
                                        }
                                    case 100:
                                        var6 = var5.props;
                                        _fun44877_ip = 121;
                                        continue _fun44877;
                                    case 107:
                                        var9 = _closure2_slot3;
                                        var4 = var5.props;
                                        var6 = var9.bind(var3)(var4);
                                    case 121:
                                        var11 = new Array(0);
                                        var10 = var11.concat;
                                        var12 = _closure1_slot3;
                                        var4 = _closure2_slot1;
                                        var9 = var12.bind(var3)(var4);
                                        var4 = _closure2_slot4;
                                        var4 = var12.bind(var3)(var4);
                                        var4 = var10.bind(var11)(var9, var4);
                                        var2 = _closure2_slot2;
                                        var4 = var7.bind(var8)(var6, var4, var2);
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var7[var2];
                                        var7 = var6.bind(var3)(var2);
                                        var6 = var7.deepEqual;
                                        var2 = var5.config;
                                        var2 = var6.bind(var7)(var2, var4);
                                        if (var2) {
                                            _fun44877_ip = 258;
                                            continue _fun44877
                                        }
                                    case 209:
                                        var2 = var5.updateGestureHandler;
                                        var2 = var2.bind(var5)(var4);
                                        _fun44877_ip = 258;
                                        continue _fun44877;
                                    case 222:
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 18;
                                        var1 = var4[var1];
                                        var2 = var2.bind(var3)(var1);
                                        var1 = var2.ghQueueMicrotask;
                                        var0 = function() { // Environment: var0
                                            var2 = _closure4_slot1;
                                            var1 = var2.update;
                                            var3 = _closure4_slot0;
                                            var0 = 1;
                                            var0 = var3 - var0;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 258:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[3] = var4;
                            var4 = {};
                            var6 = 'setNativeProps';
                            var4.key = var6;
                            var6 = function arg0() {
                                _fun44879: for (var _fun44879_ip = 0;;) switch (_fun44879_ip) {
                                    case 0:
                                        var3 = this;
                                        var0 = global;
                                        var5 = var0.Object;
                                        var4 = var5.assign;
                                        var2 = var3.props;
                                        var1 = {};
                                        var0 = arg0;
                                        var8 = var4.bind(var5)(var1, var2, var0);
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 17;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var6 = var4.bind(var0)(var1);
                                        var5 = var6.filterConfig;
                                        var7 = _closure2_slot3;
                                        var4 = var8;
                                        if (!var7) {
                                            _fun44879_ip = 86;
                                            continue _fun44879
                                        }
                                    case 77:
                                        var7 = _closure2_slot3;
                                        var4 = var7.bind(var0)(var8);
                                    case 86:
                                        var9 = new Array(0);
                                        var8 = var9.concat;
                                        var10 = _closure1_slot3;
                                        var2 = _closure2_slot1;
                                        var7 = var10.bind(var0)(var2);
                                        var2 = _closure2_slot4;
                                        var2 = var10.bind(var0)(var2);
                                        var2 = var8.bind(var9)(var7, var2);
                                        var1 = _closure2_slot2;
                                        var2 = var5.bind(var6)(var4, var2, var1);
                                        var1 = var3.updateGestureHandler;
                                        var1 = var1.bind(var3)(var2);
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[4] = var4;
                            var4 = {};
                            var6 = 'render';
                            var4.key = var6;
                            var5 = function() {
                                _fun44880: for (var _fun44880_ip = 0;;) switch (_fun44880_ip) {
                                    case 0:
                                        var13 = this;
                                        var4 = undefined;
                                        var12 = undefined;
                                        var1 = undefined;
                                        var11 = undefined;
                                        var0 = undefined;
                                        var8 = var13.onGestureHandlerEvent;
                                        var2 = var13.props;
                                        var3 = var2.onGestureEvent;
                                        var2 = var2.onGestureHandlerEvent;
                                        if (!var3) {
                                            _fun44880_ip = 50;
                                            continue _fun44880
                                        }
                                    case 39:
                                        var6 = 'function';
                                        var5 = typeof var3;
                                        if (!(var6 === var5)) {
                                            _fun44880_ip = 106;
                                            continue _fun44880
                                        }
                                    case 50:
                                        var6 = var8;
                                        if (!var2) {
                                            _fun44880_ip = 115;
                                            continue _fun44880
                                        }
                                    case 56:
                                        var7 = 'function';
                                        var5 = typeof var2;
                                        var6 = var8;
                                        if (!(var7 !== var5)) {
                                            _fun44880_ip = 115;
                                            continue _fun44880
                                        }
                                    case 70:
                                        var5 = global;
                                        var8 = var5.Error;
                                        var5 = var8.prototype;
                                        var7 = Object.create(var5, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var19 = 'Nesting touch handlers with native animated driver is not supported yet';
                                        var20 = var7;
                                        var5 = new var20[var8](var19, var18);
                                        var5 = var5 instanceof Object ? var5 : var7;
                                        throw var5;
                                    case 106:
                                        var6 = var3;
                                        if (var2) {
                                            _fun44880_ip = 661;
                                            continue _fun44880
                                        }
                                    case 115:
                                        var9 = var13.onGestureHandlerStateChange;
                                        var2 = var13.props;
                                        var3 = var2.onHandlerStateChange;
                                        var2 = var2.onGestureHandlerStateChange;
                                        if (!var3) {
                                            _fun44880_ip = 152;
                                            continue _fun44880
                                        }
                                    case 141:
                                        var7 = 'function';
                                        var5 = typeof var3;
                                        if (!(var7 === var5)) {
                                            _fun44880_ip = 208;
                                            continue _fun44880
                                        }
                                    case 152:
                                        var5 = var9;
                                        if (!var2) {
                                            _fun44880_ip = 217;
                                            continue _fun44880
                                        }
                                    case 158:
                                        var8 = 'function';
                                        var7 = typeof var2;
                                        var5 = var9;
                                        if (!(var8 !== var7)) {
                                            _fun44880_ip = 217;
                                            continue _fun44880
                                        }
                                    case 172:
                                        var7 = global;
                                        var9 = var7.Error;
                                        var7 = var9.prototype;
                                        var8 = Object.create(var7, {
                                            constructor: {
                                                value: var9
                                            }
                                        });
                                        var19 = 'Nesting touch handlers with native animated driver is not supported yet';
                                        var20 = var8;
                                        var7 = new var20[var9](var19, var18);
                                        var7 = var7 instanceof Object ? var7 : var8;
                                        throw var7;
                                    case 208:
                                        var5 = var3;
                                        if (var2) {
                                            _fun44880_ip = 625;
                                            continue _fun44880
                                        }
                                    case 217:
                                        var3 = {};
                                        var2 = var13.state;
                                        var7 = var2.allowTouches;
                                        var2 = undefined;
                                        if (!var7) {
                                            _fun44880_ip = 238;
                                            continue _fun44880
                                        }
                                    case 235:
                                        var2 = var6;
                                    case 238:
                                        var3.onGestureHandlerEvent = var2;
                                        var2 = var13.state;
                                        var6 = var2.allowTouches;
                                        var2 = undefined;
                                        if (!var6) {
                                            _fun44880_ip = 262;
                                            continue _fun44880
                                        }
                                    case 259:
                                        var2 = var5;
                                    case 262:
                                        var3.onGestureHandlerStateChange = var2;
                                        var1 = var3;
                                        var2 = var13.propsRef;
                                        var2.current = var3;
                                        var14 = null;
                                        var11 = null;
                                    case 286: // try_start_0
                                        var2 = _closure1_slot9;
                                        var5 = var2.Children;
                                        var3 = var5.only;
                                        var2 = var13.props;
                                        var2 = var2.children;
                                        var11 = var3.bind(var5)(var2);
                                    case 320: // try_end0
                                        var5 = var11;
                                        var2 = var5.props;
                                        var0 = var2.children;
                                        var3 = _closure1_slot9;
                                        var2 = var3.cloneElement;
                                        var7 = global;
                                        var10 = var7.Object;
                                        var9 = var10.assign;
                                        var8 = {};
                                        var7 = var13.refHandler;
                                        var8.ref = var7;
                                        var7 = false;
                                        var8.collapsable = var7;
                                        var7 = _closure1_slot0;
                                        var15 = _closure1_slot2;
                                        var6 = 11;
                                        var6 = var15[var6];
                                        var7 = var7.bind(var4)(var6);
                                        var6 = var7.isTestEnv;
                                        var6 = var6.bind(var7)();
                                        if (var6) {
                                            _fun44880_ip = 412;
                                            continue _fun44880
                                        }
                                    case 408:
                                        var7 = {};
                                        _fun44880_ip = 456;
                                        continue _fun44880;
                                    case 412:
                                        var6 = {};
                                        var15 = _closure2_slot0;
                                        var6.handlerType = var15;
                                        var15 = var13.handlerTag;
                                        var6.handlerTag = var15;
                                        var15 = var13.props;
                                        var15 = var15.enabled;
                                        var6.enabled = var15;
                                        var7 = var6;
                                    case 456:
                                        var6 = {};
                                        var13 = var13.props;
                                        var13 = var13.testID;
                                        var12 = var13;
                                        if (!(var14 == var13)) {
                                            _fun44880_ip = 489;
                                            continue _fun44880
                                        }
                                    case 476:
                                        var11 = var11.props;
                                        var11 = var11.testID;
                                        _fun44880_ip = 492;
                                        continue _fun44880;
                                    case 489:
                                        var11 = var12;
                                    case 492:
                                        var6.testID = var11;
                                        var16 = var1;
                                        var20 = var10;
                                        var19 = var8;
                                        var18 = var7;
                                        var17 = var6;
                                        var1 = var20[var9](var19, var18, var17, var16, var15);
                                        var0 = var2.bind(var3)(var5, var1, var0);
                                        return var0;
                                    case 525: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        var0 = global;
                                        var2 = var0.Error;
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var1 = 11;
                                        var1 = var5[var1];
                                        var3 = var3.bind(var4)(var1);
                                        var1 = var3.tagMessage;
                                        var6 = _closure2_slot0;
                                        var0 = var0.HermesInternal;
                                        var5 = var0.concat;
                                        var4 = '';
                                        var0 = ' got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.';
                                        var0 = var5.bind(var4)(var6, var0);
                                        var19 = var1.bind(var3)(var0);
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var20 = var1;
                                        var0 = new var20[var2](var19, var18);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                    case 625:
                                        var0 = global;
                                        var2 = var0.Error;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var19 = 'Nesting touch handlers with native animated driver is not supported yet';
                                        var20 = var1;
                                        var0 = new var20[var2](var19, var18);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                    case 661:
                                        var0 = global;
                                        var2 = var0.Error;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var19 = 'Nesting touch handlers with native animated driver is not supported yet';
                                        var20 = var1;
                                        var0 = new var20[var2](var19, var18);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                }
                            };
                            var4.value = var5;
                            var0[5] = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var0 = var0.bind(var3)(var4);
                        var0.displayName = var2;
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 21;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var0.contextType = var1;
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 15, 17, 18, 77, 31, 27, 33, 4984, 4968, 4973, 4969, 4985, 4967, 4986, 4987, 4988, 4989, 4990, 4979]);