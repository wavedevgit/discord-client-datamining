// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = function() {
        _fun17252: for (var _fun17252_ip = 0;;) switch (_fun17252_ip) {
            case 0:
                var6 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var0 = global;
                var1 = var0.Array;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var4;
                var10 = var2;
                var1 = new var11[var1](var10, var9);
                var8 = var1 instanceof Object ? var1 : var4;
                var1 = 0;
                var4 = var1 < var2;
                if (!var4) {
                    _fun17252_ip = 62;
                    continue _fun17252
                }
            case 47:
                var4 = arguments[var1];
                var8[var1] = var4;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun17252_ip = 47;
                    continue _fun17252
                }
            case 62:
                var4 = new Array(0);
                var3 = var4.concat;
                var2 = var3.apply;
                var5 = _closure1_slot4;
                var7 = var8.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.split;
                    var0 = '/';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var7.bind(var8)(var1);
                var1 = var5.bind(var6)(var1);
                var2 = var2.bind(var3)(var4, var1);
                var1 = var2.filter;
                var0 = var0.Boolean;
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '/';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function arg0, arg1() {
        _fun17254: for (var _fun17254_ip = 0;;) switch (_fun17254_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var5 = undefined;
                var6 = undefined;
                var2 = arg0;
                var _closure2_slot2 = var2;
                var7 = function() {
                    _fun17255: for (var _fun17255_ip = 0;;) switch (_fun17255_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.regex;
                            if (var1) {
                                _fun17255_ip = 22;
                                continue _fun17255
                            }
                        case 18:
                            var1 = 0;
                            return var1;
                        case 22:
                            var4 = _closure2_slot2;
                            var3 = var4.match;
                            var1 = _closure2_slot3;
                            var1 = var1.regex;
                            var1 = var3.bind(var4)(var1);
                            var _closure3_slot0 = var1;
                            if (var1) {
                                _fun17255_ip = 58;
                                continue _fun17255
                            }
                        case 54:
                            var3 = undefined;
                            return var3;
                        case 58:
                            var3 = _closure2_slot3;
                            var6 = var3.pattern;
                            var3 = null;
                            var4 = var3 == var6;
                            var3 = undefined;
                            if (var4) {
                                _fun17255_ip = 127;
                                continue _fun17255
                            }
                        case 79:
                            var5 = var6.split;
                            var4 = '/';
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.filter;
                            var4 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.startsWith;
                                var0 = ':';
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var7 = var5.bind(var6)(var4);
                            var6 = var7.reduce;
                            var5 = function(arg0, arg1, arg2) { // Environment: var0
                                var0 = global;
                                var3 = var0.Object;
                                var2 = var3.assign;
                                var6 = _closure1_slot3;
                                var1 = _closure3_slot0;
                                var4 = arg2;
                                var0 = 1;
                                var4 = var4 + var0;
                                var0 = 2;
                                var0 = var0 * var4;
                                var5 = var1[var0];
                                var4 = var5.replace;
                                var1 = /\\/ / ;
                                var0 = '';
                                var5 = var4.bind(var5)(var1, var0);
                                var4 = undefined;
                                var1 = {};
                                var0 = arg1;
                                var1 = var6.bind(var4)(var1, var0, var5);
                                var0 = arg0;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var4 = {};
                            var3 = var6.bind(var7)(var5, var4);
                        case 127:
                            var _closure3_slot1 = var3;
                            var3 = _closure2_slot3;
                            var4 = var3.routeNames;
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun17258: for (var _fun17258_ip = 0;;) switch (_fun17258_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var _closure4_slot0 = var3;
                                        var4 = _closure2_slot0;
                                        var2 = var4.find;
                                        var1 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.screen;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var5 = var2.bind(var4)(var1);
                                        var _closure4_slot1 = var5;
                                        var1 = null;
                                        var6 = var1 == var5;
                                        var2 = undefined;
                                        if (var6) {
                                            _fun17258_ip = 109;
                                            continue _fun17258
                                        }
                                    case 46:
                                        var5 = var5.path;
                                        var1 = var1 == var5;
                                        var2 = undefined;
                                        if (var1) {
                                            _fun17258_ip = 109;
                                            continue _fun17258
                                        }
                                    case 61:
                                        var4 = var5.split;
                                        var1 = '/';
                                        var5 = var4.bind(var5)(var1);
                                        var4 = var5.filter;
                                        var1 = function(arg0) { // Environment: var0
                                            var2 = arg0;
                                            var1 = var2.startsWith;
                                            var0 = ':';
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var5 = var4.bind(var5)(var1);
                                        var4 = var5.reduce;
                                        var1 = function(arg0, arg1) { // Environment: var0
                                            _fun17261: for (var _fun17261_ip = 0;;) switch (_fun17261_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var3 = arg1;
                                                    var1 = _closure3_slot1;
                                                    var5 = var1[var3];
                                                    if (!var5) {
                                                        _fun17261_ip = 129;
                                                        continue _fun17261
                                                    }
                                                case 20:
                                                    var2 = var3.replace;
                                                    var1 = /^:/;
                                                    var4 = '';
                                                    var3 = var2.bind(var3)(var1, var4);
                                                    var2 = var3.replace;
                                                    var1 = /\?$/;
                                                    var2 = var2.bind(var3)(var1, var4);
                                                    var1 = _closure4_slot1;
                                                    var4 = var1.parse;
                                                    var6 = null;
                                                    var1 = var5;
                                                    if (!(var6 != var4)) {
                                                        _fun17261_ip = 125;
                                                        continue _fun17261
                                                    }
                                                case 96:
                                                    var4 = var4[var2];
                                                    var1 = var5;
                                                    if (!var4) {
                                                        _fun17261_ip = 125;
                                                        continue _fun17261
                                                    }
                                                case 106:
                                                    var3 = _closure4_slot1;
                                                    var4 = var3.parse;
                                                    var3 = var4[var2];
                                                    var1 = var3.bind(var4)(var5);
                                                case 125:
                                                    var0[var2] = var1;
                                                case 129:
                                                    return var0;
                                            }
                                        };
                                        var0 = {};
                                        var2 = var4.bind(var5)(var1, var0);
                                    case 109:
                                        if (!var2) {
                                            _fun17258_ip = 138;
                                            continue _fun17258
                                        }
                                    case 112:
                                        var0 = global;
                                        var1 = var0.Object;
                                        var0 = var1.keys;
                                        var0 = var0.bind(var1)(var2);
                                        var0 = var0.length;
                                        if (var0) {
                                            _fun17258_ip = 146;
                                            continue _fun17258
                                        }
                                    case 138:
                                        var0 = {};
                                        var0.name = var3;
                                        _fun17258_ip = 160;
                                        continue _fun17258;
                                    case 146:
                                        var1 = {};
                                        var1.name = var3;
                                        var1.params = var2;
                                        var0 = var1;
                                    case 160:
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var0);
                            var _closure2_slot1 = var0;
                            var5 = _closure2_slot2;
                            var4 = var5.replace;
                            var0 = 1;
                            var3 = var1[var0];
                            var1 = '';
                            var1 = var4.bind(var5)(var3, var1);
                            _closure2_slot2 = var1;
                            return var0;
                    }
                };
                var4 = var0;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var3 = 1;
                var0 = 0;
            case 36:
                var8 = var4().value;
                var9 = var2;
                if (!(var9 !== var5)) {
                    _fun17254_ip = 86;
                    continue _fun17254
                }
            case 47: // try_start_0
                var _closure2_slot3 = var8;
                var8 = var7;
                var8 = var8.bind(var5)();
                var6 = var8;
                if (!(var0 !== var8)) {
                    _fun17254_ip = 72;
                    continue _fun17254
                }
            case 65:
                var8 = var6;
                if (!(var3 !== var8)) {
                    _fun17254_ip = 74;
                    continue _fun17254
                }
            case 72: // try_end0
                _fun17254_ip = 36;
                continue _fun17254;
            case 74:
                var2.return();
                _fun17254_ip = 86;
                continue _fun17254;
            case 79: // catch_target0
                CatchBlockStart(arg_register = 0);
                var2.return();
                throw var0;
            case 86:
                var0 = {};
                var2 = _closure2_slot1;
                var0.routes = var2;
                var1 = _closure2_slot2;
                var0.remainingPath = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1() {
        _fun17262: for (var _fun17262_ip = 0;;) switch (_fun17262_ip) {
            case 0:
                var7 = arg0;
                var6 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var0 = 2;
                if (!(var2 > var0)) {
                    _fun17262_ip = 27;
                    continue _fun17262
                }
            case 19:
                var2 = arguments[var0];
                if (!(var6 === var2)) {
                    _fun17262_ip = 33;
                    continue _fun17262
                }
            case 27:
                var2 = new Array(0);
                _fun17262_ip = 37;
                continue _fun17262;
            case 33:
                var2 = arguments[var0];
            case 37:
                var _closure2_slot0 = var2;
                var3 = arguments.length;
                var0 = 3;
                var3 = var3 > var0;
                var9 = undefined;
                if (!var3) {
                    _fun17262_ip = 60;
                    continue _fun17262
                }
            case 56:
                var9 = arguments[var0];
            case 60:
                var _closure2_slot1 = var9;
                var3 = arguments.length;
                var0 = 4;
                var3 = var3 > var0;
                var10 = undefined;
                if (!var3) {
                    _fun17262_ip = 83;
                    continue _fun17262
                }
            case 79:
                var10 = arguments[var0];
            case 83:
                var _closure2_slot2 = var10;
                var3 = arguments.length;
                var0 = 5;
                var5 = var3 > var0;
                var3 = undefined;
                if (!var5) {
                    _fun17262_ip = 106;
                    continue _fun17262
                }
            case 102:
                var3 = arguments[var0];
            case 106:
                var _closure2_slot3 = var3;
                var0 = new Array(0);
                var _closure2_slot4 = var0;
                var4 = var2.push;
                var4 = var4.bind(var2)(var7);
                var4 = var10.push;
                var4 = var4.bind(var10)(var7);
                var4 = arg1;
                var5 = var4[var7];
                var _closure2_slot5 = var5;
                var11 = typeof var5;
                var8 = 'string';
                if (!(var8 !== var11)) {
                    _fun17262_ip = 449;
                    continue _fun17262
                }
            case 163:
                var4 = 'object';
                if (!(var4 === var11)) {
                    _fun17262_ip = 503;
                    continue _fun17262
                }
            case 174:
                var4 = var5.path;
                var4 = typeof var4;
                if (!(var8 === var4)) {
                    _fun17262_ip = 323;
                    continue _fun17262
                }
            case 190:
                var4 = var5.exact;
                if (!var4) {
                    _fun17262_ip = 212;
                    continue _fun17262
                }
            case 199:
                var4 = var5.path;
                if (!(var6 !== var4)) {
                    _fun17262_ip = 413;
                    continue _fun17262
                }
            case 212:
                var8 = var5.exact;
                var4 = true;
                if (!(var4 === var8)) {
                    _fun17262_ip = 239;
                    continue _fun17262
                }
            case 224:
                var13 = var5.path;
                if (var13) {
                    _fun17262_ip = 237;
                    continue _fun17262
                }
            case 233:
                var13 = '';
            case 237:
                _fun17262_ip = 275;
                continue _fun17262;
            case 239:
                var11 = _closure1_slot5;
                var8 = var3;
                if (var8) {
                    _fun17262_ip = 256;
                    continue _fun17262
                }
            case 252:
                var8 = '';
            case 256:
                var4 = var5.path;
                if (var4) {
                    _fun17262_ip = 269;
                    continue _fun17262
                }
            case 265:
                var4 = '';
            case 269:
                var13 = var11.bind(var6)(var8, var4);
            case 275:
                var _closure2_slot6 = var13;
                var8 = var0.push;
                var12 = _closure1_slot8;
                var15 = var5.path;
                var14 = var5.parse;
                var19 = undefined;
                var18 = var7;
                var17 = var2;
                var16 = var13;
                var4 = var19[var12](var18, var17, var16, var15, var14, var13);
                var4 = var8.bind(var0)(var4);
            case 323:
                var4 = var5.screens;
                if (!var4) {
                    _fun17262_ip = 503;
                    continue _fun17262
                }
            case 335:
                var4 = var5.initialRouteName;
                if (!var4) {
                    _fun17262_ip = 372;
                    continue _fun17262
                }
            case 344:
                var8 = var9.push;
                var4 = {};
                var11 = var5.initialRouteName;
                var4.initialRouteName = var11;
                var4.parentScreens = var10;
                var4 = var8.bind(var9)(var4);
            case 372:
                var4 = global;
                var9 = var4.Object;
                var8 = var9.keys;
                var4 = var5.screens;
                var8 = var8.bind(var9)(var4);
                var4 = var8.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun17263: for (var _fun17263_ip = 0;;) switch (_fun17263_ip) {
                        case 0:
                            var9 = _closure1_slot7;
                            var0 = _closure2_slot5;
                            var8 = var0.screens;
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot1;
                            var4 = _closure1_slot4;
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = _closure2_slot6;
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun17263_ip = 59;
                                continue _fun17263
                            }
                        case 53:
                            var4 = _closure2_slot3;
                            _fun17263_ip = 63;
                            continue _fun17263;
                        case 59:
                            var4 = _closure2_slot6;
                        case 63:
                            var15 = arg0;
                            var16 = undefined;
                            var14 = var8;
                            var13 = var7;
                            var12 = var6;
                            var11 = var5;
                            var10 = var4;
                            var5 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
                            var3 = _closure2_slot4;
                            var4 = var3.push;
                            var3 = var4.apply;
                            var2 = _closure2_slot4;
                            var1 = _closure1_slot4;
                            var1 = var1.bind(var0)(var5);
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var4.bind(var8)(var1);
                _fun17262_ip = 503;
                continue _fun17262;
            case 413:
                var1 = global;
                var8 = var1.Error;
                var1 = var8.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var8
                    }
                });
                var18 = "A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.";
                var19 = var4;
                var1 = new var19[var8](var18, var17);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
            case 449:
                var4 = var5;
                if (!var3) {
                    _fun17262_ip = 468;
                    continue _fun17262
                }
            case 455:
                var1 = _closure1_slot5;
                var4 = var1.bind(var6)(var3, var5);
            case 468:
                var3 = var0.push;
                var1 = _closure1_slot8;
                var19 = undefined;
                var18 = var7;
                var17 = var2;
                var16 = var4;
                var15 = var5;
                var1 = var19[var1](var18, var17, var16, var15, var14);
                var1 = var3.bind(var0)(var1);
            case 503:
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun17264: for (var _fun17264_ip = 0;;) switch (_fun17264_ip) {
            case 0:
                var2 = arg2;
                var0 = {};
                var1 = arg0;
                var0.screen = var1;
                var1 = var2.split;
                var7 = '/';
                var3 = var1.bind(var2)(var7);
                var2 = var3.filter;
                var4 = global;
                var1 = var4.Boolean;
                var2 = var2.bind(var3)(var1);
                var1 = var2.join;
                var1 = var1.bind(var2)(var7);
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun17264_ip = 156;
                    continue _fun17264
                }
            case 62:
                var6 = var4.RegExp;
                var5 = var1.split;
                var8 = var5.bind(var1)(var7);
                var7 = var8.map;
                var5 = function(arg0) { // Environment: var5
                    _fun17265: for (var _fun17265_ip = 0;;) switch (_fun17265_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.startsWith;
                            var0 = ':';
                            var0 = var1.bind(var3)(var0);
                            if (var0) {
                                _fun17265_ip = 96;
                                continue _fun17265
                            }
                        case 21:
                            var4 = '.*';
                            var0 = '*';
                            if (!(var0 !== var3)) {
                                _fun17265_ip = 65;
                                continue _fun17265
                            }
                        case 35:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var2.bind(var1)(var0);
                            var4 = var0.bind(var1)(var3);
                        case 65:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = '\\/';
                            var0 = var2.bind(var1)(var4, var0);
                            _fun17265_ip = 150;
                            continue _fun17265;
                        case 96:
                            var2 = var3.endsWith;
                            var1 = '?';
                            var2 = var2.bind(var3)(var1);
                            var4 = '';
                            if (!var2) {
                                _fun17265_ip = 121;
                                continue _fun17265
                            }
                        case 118:
                            var4 = var1;
                        case 121:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var2 = '(([^/]+\\/)';
                            var1 = ')';
                            var0 = var3.bind(var2)(var4, var1);
                        case 150:
                            return var0;
                    }
                };
                var8 = var7.bind(var8)(var5);
                var7 = var8.join;
                var5 = '';
                var8 = var7.bind(var8)(var5);
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var5 = '^(';
                var4 = ')';
                var10 = var7.bind(var5)(var8, var4);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var4 = new var11[var6](var10, var9);
                var2 = var4 instanceof Object ? var4 : var5;
            case 156:
                var0.regex = var2;
                var0.pattern = var1;
                var1 = arg3;
                var0.path = var1;
                var2 = _closure1_slot4;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var0.routeNames = var1;
                var1 = arg4;
                var0.parse = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun17266: for (var _fun17266_ip = 0;;) switch (_fun17266_ip) {
            case 0:
                var1 = arg0;
                var8 = arg1;
                var0 = undefined;
                var3 = undefined;
                var9 = undefined;
                var10 = undefined;
                var7 = arg2;
                var2 = var7[Symbol.iterator];
                var7 = var2().next;
                var4 = 0;
            case 22:
                var11 = var7().value;
                var12 = var2;
                if (!(var12 !== var0)) {
                    _fun17266_ip = 185;
                    continue _fun17266
                }
            case 36: // try_start_0
                var3 = var11;
                var12 = var8;
                var12 = var12.length;
                var11 = var11.parentScreens;
                var11 = var11.length;
                if (!(var12 === var11)) {
                    _fun17266_ip = 147;
                    continue _fun17266
                }
            case 62:
                var9 = true;
                var10 = 0;
                var11 = var8;
                var11 = var11.length;
                if (!(var4 < var11)) {
                    _fun17266_ip = 141;
                    continue _fun17266
                }
            case 78:
                var11 = var8;
                var14 = var10;
                var13 = var11[var14];
                var12 = var13.localeCompare;
                var11 = var3;
                var11 = var11.parentScreens;
                var11 = var11[var14];
                var11 = var12.bind(var13)(var11);
                if (!(var4 === var11)) {
                    _fun17266_ip = 139;
                    continue _fun17266
                }
            case 116:
                var11 = var10;
                var12 = var11 + 1;
                var10 = var12;
                var11 = var8;
                var11 = var11.length;
                if (var12 < var11) {
                    _fun17266_ip = 78;
                    continue _fun17266
                }
            case 137:
                _fun17266_ip = 141;
                continue _fun17266;
            case 139:
                var9 = false;
            case 141:
                var11 = var9;
                if (var11) {
                    _fun17266_ip = 149;
                    continue _fun17266
                }
            case 147: // try_end0
                _fun17266_ip = 22;
                continue _fun17266;
            case 149: // try_start_1
                var5 = var1;
                var1 = var3;
                var4 = var1.initialRouteName;
                var1 = undefined;
                if (!(var5 !== var4)) {
                    _fun17266_ip = 173;
                    continue _fun17266
                }
            case 167:
                var1 = var3.initialRouteName;
            case 173: // try_end1
                var2.return();
                return var1;
            case 178: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 185:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun17267: for (var _fun17267_ip = 0;;) switch (_fun17267_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var5 = {};
                var0 = arg2;
                if (var0) {
                    _fun17267_ip = 151;
                    continue _fun17267
                }
            case 17:
                if (var3) {
                    _fun17267_ip = 77;
                    continue _fun17267
                }
            case 20:
                var0 = global;
                var6 = var0.Object;
                var2 = var6.assign;
                var1 = {};
                var0 = {};
                var7 = new Array(0);
                var0.routes = var7;
                var1.state = var0;
                var0 = {};
                var1 = var2.bind(var6)(var0, var4, var1);
                var0 = new Array(1);
                var0[0] = var1;
                var5.routes = var0;
                var0 = var5;
                _fun17267_ip = 149;
                continue _fun17267;
            case 77:
                var1 = {};
                var2 = 1;
                var1.index = var2;
                var5.name = var3;
                var2 = new Array(2);
                var2[0] = var5;
                var6 = global;
                var9 = var6.Object;
                var8 = var9.assign;
                var7 = {};
                var6 = {};
                var10 = new Array(0);
                var6.routes = var10;
                var7.state = var6;
                var6 = {};
                var6 = var8.bind(var9)(var6, var4, var7);
                var2[1] = var6;
                var1.routes = var2;
                var0 = var1;
            case 149:
                _fun17267_ip = 208;
                continue _fun17267;
            case 151:
                if (var3) {
                    _fun17267_ip = 172;
                    continue _fun17267
                }
            case 154:
                var1 = new Array(1);
                var1[0] = var4;
                var5.routes = var1;
                var1 = var5;
                _fun17267_ip = 205;
                continue _fun17267;
            case 172:
                var2 = {};
                var6 = 1;
                var2.index = var6;
                var5.name = var3;
                var3 = new Array(2);
                var3[0] = var5;
                var3[1] = var4;
                var2.routes = var3;
                var1 = var2;
            case 205:
                var0 = var1;
            case 208:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun17268: for (var _fun17268_ip = 0;;) switch (_fun17268_ip) {
            case 0:
                var5 = arg0;
                var11 = arg1;
                var10 = arg2;
                var6 = arg3;
                var0 = var11.shift;
                var7 = var0.bind(var11)();
                var9 = new Array(0);
                var2 = _closure1_slot9;
                var0 = var7.name;
                var4 = undefined;
                var3 = var2.bind(var4)(var0, var9, var10);
                var2 = var9.push;
                var0 = var7.name;
                var0 = var2.bind(var9)(var0);
                var2 = _closure1_slot10;
                var0 = var11.length;
                var8 = 0;
                var0 = var8 === var0;
                var0 = var2.bind(var4)(var3, var7, var0);
                var2 = var11.length;
                if (!(var2 > var8)) {
                    _fun17268_ip = 254;
                    continue _fun17268
                }
            case 96:
                var2 = var11.shift;
                var2 = var2.bind(var11)();
                var7 = 1;
                var3 = var0;
                if (!var2) {
                    _fun17268_ip = 254;
                    continue _fun17268
                }
            case 118:
                var13 = _closure1_slot9;
                var12 = var2.name;
                var16 = var13.bind(var4)(var12, var9, var10);
                var14 = var3.index;
                if (var14) {
                    _fun17268_ip = 157;
                    continue _fun17268
                }
            case 142:
                var12 = var3.routes;
                var12 = var12.length;
                var14 = var12 - var7;
            case 157:
                var12 = var3.routes;
                var13 = var12[var14];
                var15 = _closure1_slot10;
                var12 = var11.length;
                var12 = var8 === var12;
                var12 = var15.bind(var4)(var16, var2, var12);
                var13.state = var12;
                var12 = var11.length;
                var13 = var3;
                if (!(var12 > var8)) {
                    _fun17268_ip = 220;
                    continue _fun17268
                }
            case 205:
                var12 = var3.routes;
                var12 = var12[var14];
                var13 = var12.state;
            case 220:
                var14 = var9.push;
                var12 = var2.name;
                var12 = var14.bind(var9)(var12);
                var12 = var11.shift;
                var2 = var12.bind(var11)();
                var3 = var13;
                if (var2) {
                    _fun17268_ip = 118;
                    continue _fun17268
                }
            case 254:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)(var0);
                var2.path = var5;
                var3 = _closure1_slot12;
                var1 = undefined;
                if (!var6) {
                    _fun17268_ip = 387;
                    continue _fun17268
                }
            case 294:
                var8 = var2.name;
                var11 = var8;
                var7 = undefined;
                var10 = var6;
                var8 = var10[Symbol.iterator];
                var10 = var8().next;
                var9 = 1;
            case 313:
                var12 = var10().value;
                var13 = var8;
                var6 = undefined;
                if (!(var13 !== var4)) {
                    _fun17268_ip = 384;
                    continue _fun17268
                }
            case 326: // try_start_0
                var7 = var12;
                var13 = var11;
                var14 = var12.routeNames;
                var12 = var12.routeNames;
                var12 = var12.length;
                var12 = var12 - var9;
                var12 = var14[var12];
                if (!(var13 !== var12)) {
                    _fun17268_ip = 363;
                    continue _fun17268
                }
            case 361: // try_end0
                _fun17268_ip = 313;
                continue _fun17268;
            case 363: // try_start_1
                var7 = var7.parse;
            case 369: // try_end1
                var8.return();
                var6 = var7;
                _fun17268_ip = 384;
                continue _fun17268;
            case 377: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 7);
                var8.return();
                throw var7;
            case 384:
                var1 = var6;
            case 387:
                var6 = var3.bind(var4)(var5, var1);
                if (!var6) {
                    _fun17268_ip = 430;
                    continue _fun17268
                }
            case 396:
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var2.params;
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var6);
                var2.params = var1;
            case 430:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = function arg0, arg1() {
        _fun17269: for (var _fun17269_ip = 0;;) switch (_fun17269_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var1 = var4.split;
                var0 = '?';
                var1 = var1.bind(var4)(var0);
                var0 = 1;
                var5 = var1[var0];
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.parse;
                var1 = var1.bind(var4)(var5);
                var _closure2_slot1 = var1;
                if (!var3) {
                    _fun17269_ip = 109;
                    continue _fun17269
                }
            case 76:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var4 = var3.bind(var4)(var1);
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun17270: for (var _fun17270_ip = 0;;) switch (_fun17270_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = global;
                            var0 = var0.Object;
                            var4 = var0.hasOwnProperty;
                            var3 = var4.call;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1, var2);
                            if (!var1) {
                                _fun17270_ip = 57;
                                continue _fun17270
                            }
                        case 38:
                            var3 = _closure2_slot1;
                            var3 = var3[var2];
                            var4 = 'string';
                            var3 = typeof var3;
                            var1 = var4 === var3;
                        case 57:
                            if (!var1) {
                                _fun17270_ip = 85;
                                continue _fun17270
                            }
                        case 60:
                            var1 = _closure2_slot1;
                            var4 = _closure2_slot0;
                            var3 = var4[var2];
                            var0 = var1[var2];
                            var0 = var3.bind(var4)(var0);
                            var1[var2] = var0;
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
            case 109:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var2 = var2.bind(var3)(var1);
                var2 = var2.length;
                var0 = undefined;
                if (!var2) {
                    _fun17269_ip = 140;
                    continue _fun17269
                }
            case 137:
                var0 = var1;
            case 140:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var1 = function arg0, arg1() {
        _fun17271: for (var _fun17271_ip = 0;;) switch (_fun17271_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                if (!var1) {
                    _fun17271_ip = 41;
                    continue _fun17271
                }
            case 11:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)(var1);
            case 41:
                var4 = new Array(0);
                var _closure2_slot0 = var4;
                var7 = null;
                var2 = var7 != var1;
                if (!var2) {
                    _fun17271_ip = 64;
                    continue _fun17271
                }
            case 58:
                var2 = var1.initialRouteName;
            case 64:
                if (!var2) {
                    _fun17271_ip = 99;
                    continue _fun17271
                }
            case 67:
                var3 = var4.push;
                var2 = {};
                var6 = var1.initialRouteName;
                var2.initialRouteName = var6;
                var6 = new Array(0);
                var2.parentScreens = var6;
                var2 = var3.bind(var4)(var2);
            case 99:
                var2 = var7 == var1;
                var3 = undefined;
                var14 = undefined;
                if (var2) {
                    _fun17271_ip = 116;
                    continue _fun17271
                }
            case 110:
                var14 = var1.screens;
            case 116:
                var _closure2_slot1 = var14;
                var2 = var5.replace;
                var1 = /\\/ + /g;
                var6 = '/';
                var8 = var2.bind(var5)(var1, var6);
                var2 = var8.replace;
                var1 = /^\\/ / ;
                var9 = '';
                var8 = var2.bind(var8)(var1, var9);
                var2 = var8.replace;
                var1 = /\?.*$/;
                var8 = var2.bind(var8)(var1, var9);
                var1 = var8.endsWith;
                var1 = var1.bind(var8)(var6);
                var2 = var8;
                if (var1) {
                    _fun17271_ip = 239;
                    continue _fun17271
                }
            case 220:
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var2 = var1.bind(var9)(var8, var6);
            case 239:
                if (!(var3 !== var14)) {
                    _fun17271_ip = 498;
                    continue _fun17271
                }
            case 246:
                var11 = new Array(0);
                var10 = var11.concat;
                var9 = var10.apply;
                var12 = _closure1_slot4;
                var1 = global;
                var13 = var1.Object;
                var1 = var13.keys;
                var14 = var1.bind(var13)(var14);
                var13 = var14.map;
                var1 = function(arg0) { // Environment: var0
                    var6 = _closure1_slot7;
                    var10 = _closure2_slot1;
                    var8 = _closure2_slot0;
                    var12 = undefined;
                    var11 = arg0;
                    var9 = new Array(0);
                    var7 = new Array(0);
                    var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                    return var0;
                };
                var1 = var13.bind(var14)(var1);
                var1 = var12.bind(var3)(var1);
                var10 = var9.bind(var10)(var11, var1);
                var9 = var10.sort;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun17274: for (var _fun17274_ip = 0;;) switch (_fun17274_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var3 = var0.pattern;
                            var2 = var1.pattern;
                            if (!(var3 !== var2)) {
                                _fun17274_ip = 348;
                                continue _fun17274
                            }
                        case 25:
                            var4 = var0.pattern;
                            var3 = var4.startsWith;
                            var2 = var1.pattern;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun17274_ip = 340;
                                continue _fun17274
                            }
                        case 54:
                            var4 = var1.pattern;
                            var3 = var4.startsWith;
                            var2 = var0.pattern;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun17274_ip = 335;
                                continue _fun17274
                            }
                        case 83:
                            var3 = var0.pattern;
                            var2 = var3.split;
                            var5 = '/';
                            var2 = var2.bind(var3)(var5);
                            var4 = var1.pattern;
                            var3 = var4.split;
                            var3 = var3.bind(var4)(var5);
                            var9 = global;
                            var7 = var9.Math;
                            var6 = var7.max;
                            var5 = var2.length;
                            var4 = var3.length;
                            var4 = var6.bind(var7)(var5, var4);
                            var8 = 0;
                            var4 = var8 < var4;
                            var7 = ':';
                            var6 = '*';
                            var5 = null;
                            if (!var4) {
                                _fun17274_ip = 306;
                                continue _fun17274
                            }
                        case 170:
                            var4 = var2[var8];
                            if (!(var5 != var4)) {
                                _fun17274_ip = 330;
                                continue _fun17274
                            }
                        case 181:
                            var4 = var3[var8];
                            if (!(var5 != var4)) {
                                _fun17274_ip = 322;
                                continue _fun17274
                            }
                        case 192:
                            var4 = var2[var8];
                            var10 = var6 === var4;
                            if (var10) {
                                _fun17274_ip = 218;
                                continue _fun17274
                            }
                        case 203:
                            var11 = var2[var8];
                            var4 = var11.startsWith;
                            var10 = var4.bind(var11)(var7);
                        case 218:
                            var4 = var3[var8];
                            var4 = var6 === var4;
                            if (var4) {
                                _fun17274_ip = 244;
                                continue _fun17274
                            }
                        case 229:
                            var12 = var3[var8];
                            var11 = var12.startsWith;
                            var4 = var11.bind(var12)(var7);
                        case 244:
                            if (!var10) {
                                _fun17274_ip = 250;
                                continue _fun17274
                            }
                        case 247:
                            if (var4) {
                                _fun17274_ip = 269;
                                continue _fun17274
                            }
                        case 250:
                            if (var10) {
                                _fun17274_ip = 264;
                                continue _fun17274
                            }
                        case 253:
                            if (!var4) {
                                _fun17274_ip = 269;
                                continue _fun17274
                            }
                        case 256:
                            var4 = -1;
                            return var4;
                        case 264:
                            var4 = 1;
                            return var4;
                        case 269:
                            var8 = var8 + 1;
                            var12 = var9.Math;
                            var11 = var12.max;
                            var10 = var2.length;
                            var4 = var3.length;
                            var4 = var11.bind(var12)(var10, var4);
                            if (var8 < var4) {
                                _fun17274_ip = 170;
                                continue _fun17274
                            }
                        case 306:
                            var3 = var3.length;
                            var2 = var2.length;
                            var2 = var3 - var2;
                            return var2;
                        case 322:
                            var2 = -1;
                            return var2;
                        case 330:
                            var2 = 1;
                            return var2;
                        case 335:
                            var2 = 1;
                            return var2;
                        case 340:
                            var2 = -1;
                            return var2;
                        case 348:
                            var2 = var1.routeNames;
                            var1 = var2.join;
                            var4 = '>';
                            var2 = var1.bind(var2)(var4);
                            var1 = var2.localeCompare;
                            var3 = var0.routeNames;
                            var0 = var3.join;
                            var0 = var0.bind(var3)(var4);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var9 = var9.bind(var10)(var1);
                var _closure2_slot2 = var9;
                var11 = var9.reduce;
                var10 = function(arg0, arg1) { // Environment: var0
                    _fun17275: for (var _fun17275_ip = 0;;) switch (_fun17275_ip) {
                        case 0:
                            var3 = arg0;
                            var7 = arg1;
                            var0 = var7.pattern;
                            var0 = var3[var0];
                            if (!var0) {
                                _fun17275_ip = 209;
                                continue _fun17275
                            }
                        case 24:
                            var0 = var7.pattern;
                            var0 = var3[var0];
                            var6 = var0.routeNames;
                            var _closure3_slot0 = var6;
                            var5 = var7.routeNames;
                            var _closure3_slot1 = var5;
                            var2 = var6.length;
                            var0 = var5.length;
                            if (!(!(var2 > var0))) {
                                _fun17275_ip = 86;
                                continue _fun17275
                            }
                        case 68:
                            var2 = var6.every;
                            var0 = function(arg0, arg1) { // Environment: var1
                                var1 = _closure3_slot1;
                                var0 = arg1;
                                var1 = var1[var0];
                                var0 = arg0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var6)(var0);
                            _fun17275_ip = 102;
                            continue _fun17275;
                        case 86:
                            var2 = var5.every;
                            var1 = function(arg0, arg1) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg1;
                                var1 = var1[var0];
                                var0 = arg0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var5)(var1);
                        case 102:
                            if (var0) {
                                _fun17275_ip = 209;
                                continue _fun17275
                            }
                        case 105:
                            var0 = global;
                            var2 = var0.Error;
                            var10 = var7.pattern;
                            var1 = var6.join;
                            var4 = ' > ';
                            var14 = var1.bind(var6)(var4);
                            var1 = var5.join;
                            var12 = var1.bind(var5)(var4);
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var17 = "Found conflicting screens with the same pattern. The pattern '";
                            var15 = "' resolves to both '";
                            var13 = "' and '";
                            var11 = "'. Patterns must be unique and cannot resolve to more than one screen.";
                            var16 = var10;
                            var16 = var17[var6](var16, var15, var14, var13, var12, var11, var10);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var17 = var1;
                            var0 = new var17[var2](var16, var15);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 209:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.assign;
                            var6 = _closure1_slot3;
                            var5 = var7.pattern;
                            var4 = undefined;
                            var0 = {};
                            var0 = var6.bind(var4)(var0, var5, var7);
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var1 = {};
                var1 = var11.bind(var9)(var10, var1);
                if (!(var6 !== var2)) {
                    _fun17271_ip = 436;
                    continue _fun17271
                }
            case 354:
                var10 = _closure1_slot6;
                var11 = var9.map;
                var1 = function(arg0) { // Environment: var0
                    _fun17282: for (var _fun17282_ip = 0;;) switch (_fun17282_ip) {
                        case 0:
                            var4 = arg0;
                            var5 = global;
                            var3 = var5.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var6 = var4.regex;
                            var0 = undefined;
                            if (!var6) {
                                _fun17282_ip = 74;
                                continue _fun17282
                            }
                        case 29:
                            var7 = var5.RegExp;
                            var5 = var4.regex;
                            var6 = var5.source;
                            var5 = '$';
                            var10 = var6 + var5;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var11 = var6;
                            var5 = new var11[var7](var10, var9);
                            var0 = var5 instanceof Object ? var5 : var6;
                        case 74:
                            var1.regex = var0;
                            var0 = {};
                            var0 = var2.bind(var3)(var0, var4, var1);
                            return var0;
                    }
                };
                var1 = var11.bind(var9)(var1);
                var1 = var10.bind(var3)(var2, var1);
                var12 = var1.routes;
                var1 = var1.remainingPath;
                var1 = undefined;
                var10 = undefined;
                if (!(var3 !== var12)) {
                    _fun17271_ip = 424;
                    continue _fun17271
                }
            case 399:
                var11 = _closure1_slot11;
                var19 = undefined;
                var18 = var5;
                var17 = var12;
                var16 = var4;
                var15 = var9;
                var1 = var19[var11](var18, var17, var16, var15, var14);
                var10 = var1;
            case 424:
                if (!(var7 != var10)) {
                    _fun17271_ip = 432;
                    continue _fun17271
                }
            case 428:
                if (!(var7 == var1)) {
                    _fun17271_ip = 434;
                    continue _fun17271
                }
            case 432:
                return var3;
            case 434:
                return var1;
            case 436:
                var7 = var9.find;
                var1 = function(arg0) { // Environment: var0
                    _fun17278: for (var _fun17278_ip = 0;;) switch (_fun17278_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.path;
                            var0 = '';
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun17278_ip = 44;
                                continue _fun17278
                            }
                        case 20:
                            var3 = var1.routeNames;
                            var2 = var3.every;
                            var1 = function(arg0) { // Environment: var1
                                _fun17279: for (var _fun17279_ip = 0;;) switch (_fun17279_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var2 = _closure2_slot2;
                                        var1 = var2.find;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.screen;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var1 = var1.bind(var2)(var0);
                                        var0 = null;
                                        var0 = var0 != var1;
                                        if (!var0) {
                                            _fun17279_ip = 46;
                                            continue _fun17279
                                        }
                                    case 40:
                                        var0 = var1.path;
                                    case 46:
                                        var0 = !var0;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 44:
                            return var0;
                    }
                };
                var7 = var7.bind(var9)(var1);
                var1 = undefined;
                if (!var7) {
                    _fun17271_ip = 496;
                    continue _fun17271
                }
            case 456:
                var8 = _closure1_slot11;
                var11 = var7.routeNames;
                var10 = var11.map;
                var7 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = arg0;
                    var0.name = var1;
                    return var0;
                };
                var17 = var10.bind(var11)(var7);
                var19 = undefined;
                var18 = var5;
                var16 = var4;
                var15 = var9;
                var1 = var19[var8](var18, var17, var16, var15, var14);
            case 496:
                return var1;
            case 498:
                var1 = var2.split;
                var6 = var1.bind(var2)(var6);
                var2 = var6.filter;
                var1 = global;
                var1 = var1.Boolean;
                var2 = var2.bind(var6)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = global;
                    var3 = var1.decodeURIComponent;
                    var2 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var2)(var1);
                    var0.name = var1;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.length;
                var0 = undefined;
                if (!var1) {
                    _fun17271_ip = 565;
                    continue _fun17271
                }
            case 551:
                var1 = _closure1_slot11;
                var0 = var1.bind(var3)(var5, var2, var4);
            case 565:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 65, 1506, 1514, 1488, 1508]);