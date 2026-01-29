// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun12405: for (var _fun12405_ip = 0;;) switch (_fun12405_ip) {
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
                _fun12405_ip = 74;
                continue _fun12405;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var3 = var3.Symbol;
    var6 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var7.bind(var8)(var2, var6, var3);
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var4 = {
        'componentStack': null,
        'error': null,
        'eventId': null
    };
    var _closure1_slot8 = var4;
    var4 = var3.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: ErrorBoundary, environment: var5
            _fun12409: for (var _fun12409_ip = 0;;) switch (_fun12409_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var _closure3_slot0 = var3;
                    var0 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var6, var4);
                    var11 = new Array(1);
                    var11[0] = var3;
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var5)(var4);
                    var4 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun12409_ip = 79;
                        continue _fun12409
                    }
                case 66:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun12409_ip = 113;
                    continue _fun12409;
                case 79:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot5;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 113:
                    var0 = var4.bind(var5)(var6, var0);
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot8;
                    var0.state = var4;
                    var4 = true;
                    var0._openFallbackReportDialog = var4;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getClient;
                    var4 = var2.bind(var4)();
                    var2 = var4;
                    if (!var2) {
                        _fun12409_ip = 183;
                        continue _fun12409
                    }
                case 177:
                    var2 = var3.showDialog;
                case 183:
                    if (!var2) {
                        _fun12409_ip = 223;
                        continue _fun12409
                    }
                case 186:
                    var2 = false;
                    var0._openFallbackReportDialog = var2;
                    var3 = var4.on;
                    var2 = 'afterSendEvent';
                    var1 = function(arg0) { // Environment: var1
                        _fun12410: for (var _fun12410_ip = 0;;) switch (_fun12410_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.type;
                                var0 = !var0;
                                if (!var0) {
                                    _fun12410_ip = 27;
                                    continue _fun12410
                                }
                            case 14:
                                var2 = _closure3_slot1;
                                var0 = var2._lastEventId;
                            case 27:
                                if (!var0) {
                                    _fun12410_ip = 53;
                                    continue _fun12410
                                }
                            case 30:
                                var2 = var1.event_id;
                                var1 = _closure3_slot1;
                                var1 = var1._lastEventId;
                                var0 = var2 === var1;
                            case 53:
                                if (!var0) {
                                    _fun12410_ip = 144;
                                    continue _fun12410
                                }
                            case 56:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.showReportDialog;
                                var0 = global;
                                var6 = var0.Object;
                                var5 = var6.assign;
                                var3 = _closure3_slot0;
                                var4 = var3.dialogOptions;
                                var3 = {};
                                var0 = _closure3_slot1;
                                var0 = var0._lastEventId;
                                var3.eventId = var0;
                                var0 = {};
                                var0 = var5.bind(var6)(var0, var4, var3);
                                var0 = var1.bind(var2)(var0);
                            case 144:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var0._cleanupHook = var1;
                case 223:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'componentDidCatch';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: componentDidCatch, environment: var5
            var2 = arg1;
            var0 = this;
            var3 = arg0;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var2;
            var _closure3_slot2 = var0;
            var2 = var2.componentStack;
            var _closure3_slot3 = var2;
            var0 = var0.props;
            var2 = var0.beforeCapture;
            var _closure3_slot4 = var2;
            var2 = var0.onError;
            var _closure3_slot5 = var2;
            var2 = var0.showDialog;
            var _closure3_slot6 = var2;
            var0 = var0.dialogOptions;
            var _closure3_slot7 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 6;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.withScope;
            var1 = function(arg0) { // Environment: var1
                _fun12412: for (var _fun12412_ip = 0;;) switch (_fun12412_ip) {
                    case 0:
                        var0 = _closure3_slot4;
                        if (!var0) {
                            _fun12412_ip = 34;
                            continue _fun12412
                        }
                    case 10:
                        var4 = _closure3_slot4;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot3;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0, var3, var2);
                    case 34:
                        var0 = _closure3_slot2;
                        var0 = var0.props;
                        var1 = var0.handled;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun12412_ip = 78;
                            continue _fun12412
                        }
                    case 55:
                        var0 = _closure3_slot2;
                        var0 = var0.props;
                        var0 = var0.fallback;
                        var0 = !var0;
                        var9 = !var0;
                        _fun12412_ip = 93;
                        continue _fun12412;
                    case 78:
                        var0 = _closure3_slot2;
                        var0 = var0.props;
                        var9 = var0.handled;
                    case 93:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 7;
                        var2 = var2[var0];
                        var0 = undefined;
                        var7 = var3.bind(var0)(var2);
                        var6 = var7.captureReactException;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = {};
                        var8 = {};
                        var8.handled = var9;
                        var9 = 'auto.function.react.error_boundary';
                        var8.type = var9;
                        var2.mechanism = var8;
                        var4 = var6.bind(var7)(var4, var3, var2);
                        var2 = _closure3_slot5;
                        if (!var2) {
                            _fun12412_ip = 189;
                            continue _fun12412
                        }
                    case 170:
                        var6 = _closure3_slot5;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot3;
                        var2 = var6.bind(var0)(var3, var2, var4);
                    case 189:
                        var2 = _closure3_slot6;
                        if (!var2) {
                            _fun12412_ip = 279;
                            continue _fun12412
                        }
                    case 196:
                        var2 = _closure3_slot2;
                        var2._lastEventId = var4;
                        var2 = var2._openFallbackReportDialog;
                        if (!var2) {
                            _fun12412_ip = 279;
                            continue _fun12412
                        }
                    case 215:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.showReportDialog;
                        var1 = global;
                        var9 = var1.Object;
                        var8 = var9.assign;
                        var7 = _closure3_slot7;
                        var6 = {};
                        var6.eventId = var4;
                        var1 = {};
                        var1 = var8.bind(var9)(var1, var7, var6);
                        var1 = var2.bind(var3)(var1);
                    case 279:
                        var3 = _closure3_slot2;
                        var2 = var3.setState;
                        var1 = {};
                        var6 = _closure3_slot0;
                        var1.error = var6;
                        var5 = _closure3_slot3;
                        var1.componentStack = var5;
                        var1.eventId = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidMount';
        var4.key = var6;
        var6 = function() { // Original name: componentDidMount, environment: var5
            _fun12413: for (var _fun12413_ip = 0;;) switch (_fun12413_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.onMount;
                    if (!var1) {
                        _fun12413_ip = 23;
                        continue _fun12413
                    }
                case 17:
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 23:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: componentWillUnmount, environment: var5
            _fun12414: for (var _fun12414_ip = 0;;) switch (_fun12414_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.state;
                    var5 = var0.error;
                    var4 = var0.componentStack;
                    var2 = var0.eventId;
                    var0 = var1.props;
                    var3 = var0.onUnmount;
                    if (!var3) {
                        _fun12414_ip = 77;
                        continue _fun12414
                    }
                case 39:
                    var6 = var1.state;
                    var0 = _closure1_slot8;
                    if (!(var6 !== var0)) {
                        _fun12414_ip = 66;
                        continue _fun12414
                    }
                case 55:
                    var0 = undefined;
                    var0 = var3.bind(var0)(var5, var4, var2);
                    _fun12414_ip = 77;
                    continue _fun12414;
                case 66:
                    var2 = undefined;
                    var0 = null;
                    var0 = var3.bind(var2)(var0, var0, var0);
                case 77:
                    var0 = var1._cleanupHook;
                    if (!var0) {
                        _fun12414_ip = 104;
                        continue _fun12414
                    }
                case 86:
                    var0 = var1._cleanupHook;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    var1._cleanupHook = var0;
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'resetErrorBoundary';
        var4.key = var6;
        var6 = function() { // Original name: resetErrorBoundary, environment: var5
            _fun12415: for (var _fun12415_ip = 0;;) switch (_fun12415_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var5 = var0.onReset;
                    var0 = var2.state;
                    var4 = var0.error;
                    var3 = var0.componentStack;
                    var1 = var0.eventId;
                    if (!var5) {
                        _fun12415_ip = 48;
                        continue _fun12415
                    }
                case 39:
                    var0 = undefined;
                    var0 = var5.bind(var0)(var4, var3, var1);
                case 48:
                    var1 = var2.setState;
                    var0 = _closure1_slot8;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            _fun12416: for (var _fun12416_ip = 0;;) switch (_fun12416_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = var0.props;
                    var4 = var1.fallback;
                    var2 = var1.children;
                    var7 = var0.state;
                    var0 = var7.componentStack;
                    var1 = null;
                    if (!(var1 !== var0)) {
                        _fun12416_ip = 226;
                        continue _fun12416
                    }
                case 45:
                    var5 = 'function';
                    var3 = typeof var4;
                    var0 = var4;
                    if (!(var5 === var3)) {
                        _fun12416_ip = 121;
                        continue _fun12416
                    }
                case 59:
                    var6 = _closure1_slot7;
                    var5 = var6.createElement;
                    var3 = {};
                    var9 = var7.error;
                    var3.error = var9;
                    var9 = var7.componentStack;
                    var3.componentStack = var9;
                    var8 = function() { // Original name: resetError, environment: var8
                        var1 = _closure3_slot0;
                        var0 = var1.resetErrorBoundary;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.resetError = var8;
                    var7 = var7.eventId;
                    var3.eventId = var7;
                    var0 = var5.bind(var6)(var4, var3);
                case 121:
                    var6 = _closure1_slot7;
                    var5 = var6.isValidElement;
                    var5 = var5.bind(var6)(var0);
                    if (var5) {
                        _fun12416_ip = 224;
                        continue _fun12416
                    }
                case 142:
                    if (!var4) {
                        _fun12416_ip = 173;
                        continue _fun12416
                    }
                case 145:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 8;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var4 = var5.DEBUG_BUILD;
                case 173:
                    var0 = null;
                    if (!var4) {
                        _fun12416_ip = 224;
                        continue _fun12416
                    }
                case 178:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.debug;
                    var4 = var5.warn;
                    var3 = 'fallback did not produce a valid ReactElement';
                    var3 = var4.bind(var5)(var3);
                    var0 = null;
                case 224:
                    return var0;
                case 226:
                    var3 = 'function';
                    var1 = typeof var2;
                    var0 = var2;
                    if (!(var3 === var1)) {
                        _fun12416_ip = 246;
                        continue _fun12416
                    }
                case 240:
                    var1 = undefined;
                    var0 = var2.bind(var1)();
                case 246:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot9 = var3;
    var2.ErrorBoundary = var3;
    var3 = 'unknown';
    var2.UNKNOWN_COMPONENT = var3;
    var1 = function(arg0, arg1) { // Original name: withErrorBoundary, environment: var1
        _fun12418: for (var _fun12418_ip = 0;;) switch (_fun12418_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var6 = var3.displayName;
                if (var6) {
                    _fun12418_ip = 29;
                    continue _fun12418
                }
            case 24:
                var6 = var3.name;
            case 29:
                if (var6) {
                    _fun12418_ip = 36;
                    continue _fun12418
                }
            case 32:
                var6 = 'unknown';
            case 36:
                var4 = _closure1_slot7;
                var2 = var4.memo;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot7;
                    var3 = var4.createElement;
                    var2 = _closure1_slot9;
                    var0 = global;
                    var8 = var0.Object;
                    var7 = var8.assign;
                    var6 = _closure2_slot1;
                    var1 = {};
                    var1 = var7.bind(var8)(var1, var6);
                    var6 = var4.createElement;
                    var5 = _closure2_slot0;
                    var9 = var0.Object;
                    var8 = var9.assign;
                    var7 = {};
                    var0 = arg0;
                    var0 = var8.bind(var9)(var7, var0);
                    var0 = var6.bind(var4)(var5, var0);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var0 = var2.bind(var4)(var0);
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = 'errorBoundary(';
                var2 = ')';
                var2 = var5.bind(var4)(var6, var2);
                var0.displayName = var2;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.hoistNonReactStatics;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.withErrorBoundary = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 1021, 1133, 1141, 817, 1136]);