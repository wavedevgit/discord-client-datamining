// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = {};
    var4 = true;
    var3.attachReduxState = var4;
    var4 = function(arg0) { // Original name: actionTransformer, environment: var1
        var0 = arg0;
        return var0;
    };
    var3.actionTransformer = var4;
    var4 = function(arg0) { // Original name: stateTransformer, environment: var1
        _fun12426: for (var _fun12426_ip = 0;;) switch (_fun12426_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun12426_ip = 8;
                    continue _fun12426
                }
            case 6:
                var0 = null;
            case 8:
                return var0;
        }
    };
    var3.stateTransformer = var4;
    var _closure1_slot3 = var3;
    var1 = function(arg0) { // Original name: createReduxEnhancer, environment: var1
        var1 = global;
        var5 = var1.Object;
        var4 = var5.assign;
        var3 = _closure1_slot3;
        var2 = {};
        var1 = arg0;
        var1 = var4.bind(var5)(var2, var3, var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun12429: for (var _fun12429_ip = 0;;) switch (_fun12429_ip) {
                    case 0:
                        var1 = function(arg0) { // Original name: sentryWrapReducer, environment: var2
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun12431: for (var _fun12431_ip = 0;;) switch (_fun12431_ip) {
                                    case 0:
                                        var7 = arg1;
                                        var1 = _closure5_slot0;
                                        var3 = undefined;
                                        var0 = arg0;
                                        var0 = var1.bind(var3)(var0, var7);
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var8 = 1;
                                        var1 = var1[var8];
                                        var2 = var2.bind(var3)(var1);
                                        var1 = var2.getCurrentScope;
                                        var2 = var1.bind(var2)();
                                        var6 = _closure2_slot0;
                                        var5 = var6.actionTransformer;
                                        var10 = var5.bind(var6)(var7);
                                        var5 = null;
                                        if (!(var5 != var10)) {
                                            _fun12431_ip = 122;
                                            continue _fun12431
                                        }
                                    case 78:
                                        var7 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var6 = var6[var8];
                                        var9 = var7.bind(var3)(var6);
                                        var7 = var9.addBreadcrumb;
                                        var6 = {
                                            'category': 'redux.action',
                                            'data': null,
                                            'type': 'info'
                                        };
                                        var6.data = var10;
                                        var6 = var7.bind(var9)(var6);
                                    case 122:
                                        var7 = _closure2_slot0;
                                        var6 = var7.stateTransformer;
                                        var9 = var6.bind(var7)(var0);
                                        if (!(var5 == var9)) {
                                            _fun12431_ip = 162;
                                            continue _fun12431
                                        }
                                    case 141:
                                        var7 = var2.setContext;
                                        var6 = 'state';
                                        var6 = var7.bind(var2)(var6, var5);
                                        _fun12431_ip = 306;
                                        continue _fun12431;
                                    case 162:
                                        var7 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var6 = var6[var8];
                                        var7 = var7.bind(var3)(var6);
                                        var6 = var7.getClient;
                                        var10 = var6.bind(var7)();
                                        var7 = var5 == var10;
                                        var6 = undefined;
                                        if (var7) {
                                            _fun12431_ip = 208;
                                            continue _fun12431
                                        }
                                    case 198:
                                        var7 = var10.getOptions;
                                        var6 = var7.bind(var10)();
                                    case 208:
                                        var7 = var5 == var6;
                                        var5 = undefined;
                                        if (var7) {
                                            _fun12431_ip = 223;
                                            continue _fun12431
                                        }
                                    case 217:
                                        var5 = var6.normalizeDepth;
                                    case 223:
                                        if (var5) {
                                            _fun12431_ip = 229;
                                            continue _fun12431
                                        }
                                    case 226:
                                        var5 = 3;
                                    case 229:
                                        var6 = {};
                                        var7 = {};
                                        var10 = 'redux';
                                        var7.type = var10;
                                        var7.value = var9;
                                        var6.state = var7;
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var4 = var4[var8];
                                        var8 = var7.bind(var3)(var4);
                                        var7 = var8.addNonEnumerableProperty;
                                        var4 = 3;
                                        var5 = var4 + var5;
                                        var4 = '__sentry_override_normalization_depth__';
                                        var4 = var7.bind(var8)(var6, var4, var5);
                                        var5 = var2.setContext;
                                        var4 = 'state';
                                        var4 = var5.bind(var2)(var4, var6);
                                    case 306:
                                        var1 = _closure2_slot0;
                                        var1 = var1.configureScopeWithState;
                                        var5 = 'function';
                                        var4 = typeof var1;
                                        if (!(var5 === var4)) {
                                            _fun12431_ip = 333;
                                            continue _fun12431
                                        }
                                    case 327:
                                        var1 = var1.bind(var3)(var2, var0);
                                    case 333:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var _closure4_slot0 = var1;
                        var0 = _closure2_slot0;
                        var0 = var0.attachReduxState;
                        if (!var0) {
                            _fun12429_ip = 78;
                            continue _fun12429
                        }
                    case 27:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 1;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var0 = var3.getGlobalScope;
                        var4 = var0.bind(var3)();
                        var3 = var4.addEventProcessor;
                        var0 = function(arg0, arg1) { // Environment: var2
                            _fun12432: for (var _fun12432_ip = 0;;) switch (_fun12432_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = arg1;
                                case 6: // try_start_0
                                    var3 = var0;
                                    var3 = var3.type;
                                    var6 = undefined;
                                    var3 = var6 === var3;
                                    var2 = var3;
                                    if (!var3) {
                                        _fun12432_ip = 58;
                                        continue _fun12432
                                    }
                                case 26:
                                    var3 = var0;
                                    var3 = var3.contexts;
                                    var3 = var3.state;
                                    var3 = var3.state;
                                    var4 = var3.type;
                                    var3 = 'redux';
                                    var2 = var3 === var4;
                                case 58:
                                    if (!var2) {
                                        _fun12432_ip = 181;
                                        continue _fun12432
                                    }
                                case 61:
                                    var2 = var1;
                                    var5 = new Array(0);
                                    var4 = var5.concat;
                                    var3 = _closure1_slot2;
                                    var7 = var2.attachments;
                                    var1 = var7;
                                    if (var7) {
                                        _fun12432_ip = 96;
                                        continue _fun12432
                                    }
                                case 92:
                                    var1 = new Array(0);
                                case 96:
                                    var3 = var3.bind(var6)(var1);
                                    var6 = {};
                                    var1 = 'redux_state.json';
                                    var6.filename = var1;
                                    var1 = global;
                                    var8 = var1.JSON;
                                    var7 = var8.stringify;
                                    var1 = var0;
                                    var1 = var1.contexts;
                                    var1 = var1.state;
                                    var1 = var1.state;
                                    var1 = var1.value;
                                    var1 = var7.bind(var8)(var1);
                                    var6.data = var1;
                                    var1 = new Array(1);
                                    var1[0] = var6;
                                    var1 = var4.bind(var5)(var3, var1);
                                    var2.attachments = var1;
                                case 181: // try_end0
                                    _fun12432_ip = 185;
                                    continue _fun12432;
                                case 183: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                case 185:
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var0);
                    case 78:
                        var4 = _closure3_slot0;
                        var3 = undefined;
                        var0 = arg0;
                        var1 = var1.bind(var3)(var0);
                        var0 = arg1;
                        var0 = var4.bind(var3)(var1, var0);
                        var1 = global;
                        var4 = var1.Proxy;
                        var6 = var0.replaceReducer;
                        var1 = {};
                        var2 = function(arg0, arg1, arg2) { // Original name: apply, environment: var2
                            var4 = arg0;
                            var3 = var4.apply;
                            var2 = _closure4_slot0;
                            var1 = arg2;
                            var0 = 0;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        var1.apply = var2;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = var2;
                        var5 = var1;
                        var1 = new var7[var4](var6, var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var0.replaceReducer = var1;
                        return var0;
                }
            };
            return var0;
        };
        return var0;
    };
    var2.createReduxEnhancer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 817]);