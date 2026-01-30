// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.Linking;
    var _closure1_slot4 = var4;
    var3 = var3.Platform;
    var1 = function(arg0, arg1) { // Original name: useLinking, environment: var1
        _fun17505: for (var _fun17505_ip = 0;;) switch (_fun17505_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var6;
                var1 = var2.independent;
                var3 = var2.enabled;
                var13 = undefined;
                var8 = var13 === var3;
                if (var8) {
                    _fun17505_ip = 35;
                    continue _fun17505
                }
            case 32:
                var8 = var3;
            case 35:
                var _closure2_slot1 = var8;
                var11 = var2.prefixes;
                var _closure2_slot2 = var11;
                var10 = var2.filter;
                var _closure2_slot3 = var10;
                var9 = var2.config;
                var _closure2_slot4 = var9;
                var7 = var2.getInitialURL;
                if (!(var13 === var7)) {
                    _fun17505_ip = 82;
                    continue _fun17505
                }
            case 77:
                var7 = function() { // Environment: var0
                    var3 = global;
                    var2 = var3.Promise;
                    var1 = var2.race;
                    var4 = _closure1_slot4;
                    var0 = var4.getInitialURL;
                    var4 = var0.bind(var4)();
                    var0 = new Array(2);
                    var0[0] = var4;
                    var5 = var3.Promise;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = function(arg0) { // Environment: var3
                        var0 = global;
                        var3 = var0.setTimeout;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = 150;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 82:
                var _closure2_slot5 = var7;
                var5 = var2.subscribe;
                if (!(var13 === var5)) {
                    _fun17505_ip = 101;
                    continue _fun17505
                }
            case 96:
                var5 = function(arg0) { // Environment: var0
                    _fun17508: for (var _fun17508_ip = 0;;) switch (_fun17508_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var5 = function(arg0) { // Original name: callback, environment: var0
                                var0 = arg0;
                                var2 = var0.url;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var _closure3_slot1 = var5;
                            var1 = _closure1_slot4;
                            var4 = var1.addEventListener;
                            var3 = 'url';
                            var3 = var4.bind(var1)(var3, var5);
                            var _closure3_slot2 = var3;
                            var4 = var1.removeEventListener;
                            var1 = null;
                            var3 = var1 == var4;
                            var1 = undefined;
                            if (var3) {
                                _fun17508_ip = 76;
                                continue _fun17508
                            }
                        case 62:
                            var3 = var4.bind;
                            var2 = _closure1_slot4;
                            var1 = var3.bind(var4)(var2);
                        case 76:
                            var _closure3_slot3 = var1;
                            var0 = function() { // Environment: var0
                                _fun17510: for (var _fun17510_ip = 0;;) switch (_fun17510_ip) {
                                    case 0:
                                        var1 = _closure3_slot2;
                                        var2 = null;
                                        if (!(var2 != var1)) {
                                            _fun17510_ip = 26;
                                            continue _fun17510
                                        }
                                    case 13:
                                        var1 = _closure3_slot2;
                                        var1 = var1.remove;
                                        if (var1) {
                                            _fun17510_ip = 56;
                                            continue _fun17510
                                        }
                                    case 26:
                                        var1 = _closure3_slot3;
                                        if (!(var2 != var1)) {
                                            _fun17510_ip = 70;
                                            continue _fun17510
                                        }
                                    case 34:
                                        var4 = _closure3_slot3;
                                        var3 = _closure3_slot1;
                                        var2 = undefined;
                                        var1 = 'url';
                                        var1 = var4.bind(var2)(var1, var3);
                                        _fun17510_ip = 70;
                                        continue _fun17510;
                                    case 56:
                                        var1 = _closure3_slot2;
                                        var0 = var1.remove;
                                        var0 = var0.bind(var1)();
                                    case 70:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
            case 101:
                var _closure2_slot6 = var5;
                var3 = var2.getStateFromPath;
                if (!(var13 === var3)) {
                    _fun17505_ip = 144;
                    continue _fun17505
                }
            case 115:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 2;
                var4 = var14[var4];
                var4 = var12.bind(var13)(var4);
                var3 = var4.getStateFromPath;
            case 144:
                var _closure2_slot7 = var3;
                var2 = var2.getActionFromState;
                if (!(var13 === var2)) {
                    _fun17505_ip = 187;
                    continue _fun17505
                }
            case 158:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 2;
                var4 = var14[var4];
                var4 = var12.bind(var13)(var4);
                var2 = var4.getActionFromState;
            case 187:
                var _closure2_slot8 = var2;
                var4 = _closure1_slot3;
                var13 = var4.useEffect;
                var12 = new Array(2);
                var12[0] = var8;
                var12[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var13.bind(var4)(var1, var12);
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var8);
                var _closure2_slot9 = var1;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var11);
                var _closure2_slot10 = var1;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var10);
                var _closure2_slot11 = var1;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var9);
                var _closure2_slot12 = var1;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var7);
                var _closure2_slot13 = var1;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var3);
                var _closure2_slot14 = var1;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var2);
                var _closure2_slot15 = var1;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot1;
                    var2.current = var1;
                    var2 = _closure2_slot10;
                    var1 = _closure2_slot2;
                    var2.current = var1;
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot3;
                    var2.current = var1;
                    var2 = _closure2_slot12;
                    var1 = _closure2_slot4;
                    var2.current = var1;
                    var2 = _closure2_slot13;
                    var1 = _closure2_slot5;
                    var2.current = var1;
                    var2 = _closure2_slot14;
                    var1 = _closure2_slot7;
                    var2.current = var1;
                    var1 = _closure2_slot15;
                    var0 = _closure2_slot8;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var3 = var4.useCallback;
                var2 = function(arg0) { // Environment: var0
                    _fun17513: for (var _fun17513_ip = 0;;) switch (_fun17513_ip) {
                        case 0:
                            var4 = arg0;
                            if (!var4) {
                                _fun17513_ip = 38;
                                continue _fun17513
                            }
                        case 6:
                            var0 = _closure2_slot11;
                            var0 = var0.current;
                            if (!var0) {
                                _fun17513_ip = 42;
                                continue _fun17513
                            }
                        case 21:
                            var2 = _closure2_slot11;
                            var0 = var2.current;
                            var0 = var0.bind(var2)(var4);
                            if (var0) {
                                _fun17513_ip = 42;
                                continue _fun17513
                            }
                        case 38:
                            var0 = undefined;
                            return var0;
                        case 42:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var4 = var3.bind(var0)(var2, var4);
                            if (!(var0 !== var4)) {
                                _fun17513_ip = 110;
                                continue _fun17513
                            }
                        case 86:
                            var3 = _closure2_slot14;
                            var2 = var3.current;
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            var0 = var2.bind(var3)(var4, var1);
                        case 110:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var7 = var3.bind(var4)(var2, var1);
                var _closure2_slot16 = var7;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var0
                    _fun17514: for (var _fun17514_ip = 0;;) switch (_fun17514_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var2 = var2.current;
                            if (!var2) {
                                _fun17514_ip = 62;
                                continue _fun17514
                            }
                        case 17:
                            var3 = _closure2_slot13;
                            var2 = var3.current;
                            var2 = var2.bind(var3)();
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun17514_ip = 47;
                                continue _fun17514
                            }
                        case 36:
                            var4 = 'string';
                            var3 = typeof var2;
                            if (!(var4 === var3)) {
                                _fun17514_ip = 89;
                                continue _fun17514
                            }
                        case 47:
                            var3 = _closure2_slot16;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var _closure3_slot0 = var1;
                        case 62:
                            var1 = {};
                            var3 = function(arg0) { // Original name: then, environment: var0
                                _fun17516: for (var _fun17516_ip = 0;;) switch (_fun17516_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = global;
                                        var2 = var0.Promise;
                                        var1 = var2.resolve;
                                        var4 = _closure3_slot0;
                                        if (var5) {
                                            _fun17516_ip = 32;
                                            continue _fun17516
                                        }
                                    case 27:
                                        var0 = var4;
                                        _fun17516_ip = 39;
                                        continue _fun17516;
                                    case 32:
                                        var3 = undefined;
                                        var0 = var5.bind(var3)(var4);
                                    case 39:
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var1.then = var3;
                            var3 = function() { // Original name: _catch, environment: var0
                                var0 = _closure3_slot1;
                                return var0;
                            };
                            var1.catch = var3;
                            var _closure3_slot1 = var1;
                            return var1;
                        case 89:
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot16;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var3 = var4.useEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var0 = function(arg0) { // Original name: listener, environment: var0
                        _fun17519: for (var _fun17519_ip = 0;;) switch (_fun17519_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = undefined;
                                var2 = undefined;
                                var1 = undefined;
                                var7 = _closure2_slot1;
                                if (!var7) {
                                    _fun17519_ip = 275;
                                    continue _fun17519
                                }
                            case 24:
                                var7 = _closure2_slot0;
                                var8 = var7.current;
                                var2 = var8;
                                var7 = undefined;
                                if (!var8) {
                                    _fun17519_ip = 53;
                                    continue _fun17519
                                }
                            case 41:
                                var9 = _closure2_slot16;
                                var8 = var6;
                                var7 = var9.bind(var0)(var8);
                            case 53:
                                var8 = var2;
                                if (!var8) {
                                    _fun17519_ip = 275;
                                    continue _fun17519
                                }
                            case 62:
                                if (!var7) {
                                    _fun17519_ip = 275;
                                    continue _fun17519
                                }
                            case 68:
                                var9 = var2;
                                var8 = var9.getRootState;
                                var8 = var8.bind(var9)();
                                var _closure4_slot0 = var8;
                                var9 = var7.routes;
                                var8 = var9.some;
                                var5 = function(arg0) { // Environment: var5
                                    _fun17520: for (var _fun17520_ip = 0;;) switch (_fun17520_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var0 = null;
                                            var0 = var0 != var2;
                                            if (!var0) {
                                                _fun17520_ip = 44;
                                                continue _fun17520
                                            }
                                        case 16:
                                            var1 = _closure4_slot0;
                                            var3 = var1.routeNames;
                                            var2 = var3.includes;
                                            var1 = arg0;
                                            var1 = var1.name;
                                            var0 = var2.bind(var3)(var1);
                                        case 44:
                                            var0 = !var0;
                                            return var0;
                                    }
                                };
                                var5 = var8.bind(var9)(var5);
                                if (var5) {
                                    _fun17519_ip = 277;
                                    continue _fun17519
                                }
                            case 113:
                                var8 = _closure2_slot15;
                                var5 = var8.current;
                                var3 = _closure2_slot12;
                                var3 = var3.current;
                                var3 = var5.bind(var8)(var7, var3);
                                var1 = var3;
                                if (!(var0 === var3)) {
                                    _fun17519_ip = 160;
                                    continue _fun17519
                                }
                            case 144:
                                var5 = var2;
                                var3 = var5.resetRoot;
                                var3 = var3.bind(var5)(var7);
                                _fun17519_ip = 275;
                                continue _fun17519;
                            case 160: // try_start_0
                                var3 = var2;
                                var2 = var3.dispatch;
                                var1 = var2.bind(var3)(var1);
                            case 173: // try_end0
                                _fun17519_ip = 275;
                                continue _fun17519;
                            case 175: // catch_target0
                                CatchBlockStart(arg_register = 5);
                                var4 = var5;
                                var1 = global;
                                var3 = var1.console;
                                var2 = var3.warn;
                                var7 = var6;
                                var6 = 'object';
                                var5 = typeof var5;
                                if (!(var6 === var5)) {
                                    _fun17519_ip = 230;
                                    continue _fun17519
                                }
                            case 207:
                                var6 = var4;
                                var5 = null;
                                if (!(var5 != var6)) {
                                    _fun17519_ip = 230;
                                    continue _fun17519
                                }
                            case 216:
                                var6 = var4;
                                var5 = 'message';
                                var5 = var5 in var6;
                                if (var5) {
                                    _fun17519_ip = 235;
                                    continue _fun17519
                                }
                            case 230:
                                var6 = var4;
                                _fun17519_ip = 240;
                                continue _fun17519;
                            case 235:
                                var6 = var4.message;
                            case 240:
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var4 = "An error occurred when trying to handle the link '";
                                var1 = "': ";
                                var1 = var5.bind(var4)(var7, var1, var6);
                                var1 = var2.bind(var3)(var1);
                            case 275:
                                return var0;
                            case 277:
                                var0 = global;
                                var2 = var0.console;
                                var1 = var2.warn;
                                var0 = "The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.";
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var0, var2);
                var0 = {};
                var0.getInitialState = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1472, 1554]);