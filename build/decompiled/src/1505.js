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
    var3 = function(arg0) { // Original name: getActiveRoute, environment: var1
        _fun17172: for (var _fun17172_ip = 0;;) switch (_fun17172_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.index;
                var2 = 'number';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun17172_ip = 49;
                    continue _fun17172
                }
            case 19:
                var2 = var0.routes;
                var1 = var0.routes;
                var3 = var1.length;
                var1 = 1;
                var1 = var3 - var1;
                var1 = var2[var1];
                _fun17172_ip = 64;
                continue _fun17172;
            case 49:
                var2 = var0.routes;
                var0 = var0.index;
                var1 = var2[var0];
            case 64:
                var2 = var1.state;
                var0 = var1;
                if (!var2) {
                    _fun17172_ip = 94;
                    continue _fun17172
                }
            case 75:
                var3 = _closure1_slot5;
                var2 = var1.state;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 94:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function(arg0) { // Original name: getParamName, environment: var1
        var2 = arg0;
        var1 = var2.replace;
        var0 = /^:/;
        var3 = '';
        var2 = var1.bind(var2)(var0, var3);
        var1 = var2.replace;
        var0 = /\?$/;
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var _closure1_slot6 = var3;
    var3 = function() { // Original name: joinPaths, environment: var1
        _fun17174: for (var _fun17174_ip = 0;;) switch (_fun17174_ip) {
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
                    _fun17174_ip = 62;
                    continue _fun17174
                }
            case 47:
                var4 = arguments[var1];
                var8[var1] = var4;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun17174_ip = 47;
                    continue _fun17174
                }
            case 62:
                var4 = new Array(0);
                var3 = var4.concat;
                var2 = var3.apply;
                var5 = _closure1_slot3;
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
    var _closure1_slot7 = var3;
    var3 = function(arg0, arg1) { // Original name: createConfigItem, environment: var1
        _fun17176: for (var _fun17176_ip = 0;;) switch (_fun17176_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = 'string';
                var0 = typeof var5;
                if (!(var1 !== var0)) {
                    _fun17176_ip = 255;
                    continue _fun17176
                }
            case 20:
                var0 = var5.exact;
                if (!var0) {
                    _fun17176_ip = 44;
                    continue _fun17176
                }
            case 29:
                var1 = var5.path;
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun17176_ip = 219;
                    continue _fun17176
                }
            case 44:
                var1 = var5.exact;
                var0 = true;
                if (!(var0 === var1)) {
                    _fun17176_ip = 71;
                    continue _fun17176
                }
            case 56:
                var6 = var5.path;
                if (var6) {
                    _fun17176_ip = 69;
                    continue _fun17176
                }
            case 65:
                var6 = '';
            case 69:
                _fun17176_ip = 109;
                continue _fun17176;
            case 71:
                var3 = _closure1_slot7;
                var2 = var4;
                if (var2) {
                    _fun17176_ip = 88;
                    continue _fun17176
                }
            case 84:
                var2 = '';
            case 88:
                var1 = var5.path;
                if (var1) {
                    _fun17176_ip = 101;
                    continue _fun17176
                }
            case 97:
                var1 = '';
            case 101:
                var0 = undefined;
                var6 = var3.bind(var0)(var2, var1);
            case 109:
                var0 = var5.screens;
                var2 = undefined;
                var1 = undefined;
                if (!var0) {
                    _fun17176_ip = 141;
                    continue _fun17176
                }
            case 122:
                var3 = _closure1_slot9;
                var0 = var5.screens;
                var1 = var3.bind(var2)(var0, var6);
            case 141:
                var0 = {};
                var3 = null;
                var3 = var3 == var6;
                var2 = undefined;
                if (var3) {
                    _fun17176_ip = 196;
                    continue _fun17176
                }
            case 154:
                var3 = var6.split;
                var7 = '/';
                var8 = var3.bind(var6)(var7);
                var6 = var8.filter;
                var3 = global;
                var3 = var3.Boolean;
                var6 = var6.bind(var8)(var3);
                var3 = var6.join;
                var2 = var3.bind(var6)(var7);
            case 196:
                var0.pattern = var2;
                var2 = var5.stringify;
                var0.stringify = var2;
                var0.screens = var1;
                return var0;
            case 219:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = "A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.";
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 255:
                var0 = {};
                var1 = var5;
                if (!var4) {
                    _fun17176_ip = 278;
                    continue _fun17176
                }
            case 263:
                var3 = _closure1_slot7;
                var2 = undefined;
                var1 = var3.bind(var2)(var4, var5);
            case 278:
                var0.pattern = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function(arg0, arg1) { // Original name: createNormalizedConfigs, environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var3 = global;
        var5 = var3.Object;
        var4 = var5.entries;
        var3 = arg0;
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot4;
            var4 = undefined;
            var2 = arg0;
            var0 = 2;
            var3 = var3.bind(var4)(var2, var0);
            var0 = 0;
            var2 = var3[var0];
            var0 = 1;
            var3 = var3[var0];
            var0 = new Array(2);
            var0[0] = var2;
            var2 = _closure1_slot8;
            var1 = _closure2_slot0;
            var1 = var2.bind(var4)(var3, var1);
            var0[1] = var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var1 = function(arg0, arg1) { // Original name: getPathFromState, environment: var1
        _fun17179: for (var _fun17179_ip = 0;;) switch (_fun17179_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var0;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun17179_ip = 233;
                    continue _fun17179
                }
            case 21:
                if (!var6) {
                    _fun17179_ip = 54;
                    continue _fun17179
                }
            case 24:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)(var6);
            case 54:
                if (!(var3 != var6)) {
                    _fun17179_ip = 67;
                    continue _fun17179
                }
            case 58:
                var2 = var6.screens;
                if (var2) {
                    _fun17179_ip = 71;
                    continue _fun17179
                }
            case 67:
                var2 = {};
                _fun17179_ip = 100;
                continue _fun17179;
            case 71:
                var5 = _closure1_slot9;
                var7 = var3 == var6;
                var4 = undefined;
                var3 = undefined;
                if (var7) {
                    _fun17179_ip = 95;
                    continue _fun17179
                }
            case 89:
                var3 = var6.screens;
            case 95:
                var2 = var5.bind(var4)(var3);
            case 100:
                var _closure2_slot1 = var2;
                var4 = '/';
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var0;
                var2 = {};
                var _closure2_slot4 = var2;
                var3 = function() { // Original name: _loop, environment: var1
                    _fun17180: for (var _fun17180_ip = 0;;) switch (_fun17180_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = var0.index;
                            var4 = 'number';
                            var3 = typeof var3;
                            var0 = 0;
                            if (!(var4 === var3)) {
                                _fun17180_ip = 36;
                                continue _fun17180
                            }
                        case 27:
                            var3 = _closure2_slot3;
                            var0 = var3.index;
                        case 36:
                            var _closure3_slot2 = var0;
                            var0 = _closure2_slot3;
                            var3 = var0.routes;
                            var0 = _closure3_slot2;
                            var0 = var3[var0];
                            var _closure3_slot3 = var0;
                            var5 = _closure1_slot5;
                            var4 = _closure2_slot0;
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var _closure3_slot4 = var4;
                            var5 = _closure2_slot1;
                            var _closure3_slot5 = var5;
                            var7 = new Array(0);
                            var _closure3_slot6 = var7;
                            var5 = true;
                            var _closure3_slot7 = var5;
                            var6 = function() { // Original name: _loop2, environment: var1
                                _fun17181: for (var _fun17181_ip = 0;;) switch (_fun17181_ip) {
                                    case 0:
                                        var3 = _closure3_slot5;
                                        var2 = _closure3_slot3;
                                        var2 = var2.name;
                                        var2 = var3[var2];
                                        var2 = var2.pattern;
                                        _closure3_slot0 = var2;
                                        var4 = _closure3_slot6;
                                        var3 = var4.push;
                                        var2 = _closure3_slot3;
                                        var2 = var2.name;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = _closure3_slot3;
                                        var2 = var2.params;
                                        if (!var2) {
                                            _fun17181_ip = 301;
                                            continue _fun17181
                                        }
                                    case 71:
                                        var3 = _closure3_slot5;
                                        var2 = _closure3_slot3;
                                        var2 = var2.name;
                                        var4 = var3[var2];
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var6 = undefined;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun17181_ip = 107;
                                            continue _fun17181
                                        }
                                    case 101:
                                        var3 = var4.stringify;
                                    case 107:
                                        var _closure4_slot0 = var3;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var3 = 3;
                                        var3 = var5[var3];
                                        var5 = var4.bind(var6)(var3);
                                        var3 = global;
                                        var8 = var3.Object;
                                        var7 = var8.entries;
                                        var4 = _closure3_slot3;
                                        var4 = var4.params;
                                        var8 = var7.bind(var8)(var4);
                                        var7 = var8.map;
                                        var4 = function(arg0) { // Environment: var0
                                            _fun17182: for (var _fun17182_ip = 0;;) switch (_fun17182_ip) {
                                                case 0:
                                                    var2 = _closure1_slot4;
                                                    var5 = undefined;
                                                    var1 = arg0;
                                                    var0 = 2;
                                                    var1 = var2.bind(var5)(var1, var0);
                                                    var0 = 0;
                                                    var2 = var1[var0];
                                                    var0 = 1;
                                                    var4 = var1[var0];
                                                    var0 = new Array(2);
                                                    var0[0] = var2;
                                                    var6 = _closure4_slot0;
                                                    var1 = null;
                                                    if (!(var1 != var6)) {
                                                        _fun17182_ip = 66;
                                                        continue _fun17182
                                                    }
                                                case 55:
                                                    var1 = _closure4_slot0;
                                                    var1 = var1[var2];
                                                    if (var1) {
                                                        _fun17182_ip = 81;
                                                        continue _fun17182
                                                    }
                                                case 66:
                                                    var1 = global;
                                                    var1 = var1.String;
                                                    var1 = var1.bind(var5)(var4);
                                                    _fun17182_ip = 94;
                                                    continue _fun17182;
                                                case 81:
                                                    var3 = _closure4_slot0;
                                                    var2 = var3[var2];
                                                    var1 = var2.bind(var3)(var4);
                                                case 94:
                                                    var0[1] = var1;
                                                    return var0;
                                            }
                                        };
                                        var4 = var7.bind(var8)(var4);
                                        var6 = var5.bind(var6)(var4);
                                        var4 = _closure3_slot0;
                                        if (!var4) {
                                            _fun17181_ip = 214;
                                            continue _fun17181
                                        }
                                    case 190:
                                        var7 = var3.Object;
                                        var5 = var7.assign;
                                        var4 = _closure2_slot4;
                                        var4 = var5.bind(var7)(var4, var6);
                                    case 214:
                                        var5 = _closure3_slot4;
                                        var4 = _closure3_slot3;
                                        if (!(var5 === var4)) {
                                            _fun17181_ip = 301;
                                            continue _fun17181
                                        }
                                    case 226:
                                        var5 = var3.Object;
                                        var4 = var5.assign;
                                        var3 = {};
                                        var3 = var4.bind(var5)(var3, var6);
                                        _closure3_slot1 = var3;
                                        var4 = _closure3_slot0;
                                        if (!(var2 != var4)) {
                                            _fun17181_ip = 301;
                                            continue _fun17181
                                        }
                                    case 257:
                                        var3 = var4.split;
                                        var2 = '/';
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.filter;
                                        var2 = function(arg0) { // Environment: var0
                                            var2 = arg0;
                                            var1 = var2.startsWith;
                                            var0 = ':';
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var3 = var3.bind(var4)(var2);
                                        var2 = var3.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun17184: for (var _fun17184_ip = 0;;) switch (_fun17184_ip) {
                                                case 0:
                                                    var2 = _closure1_slot6;
                                                    var0 = undefined;
                                                    var1 = arg0;
                                                    var2 = var2.bind(var0)(var1);
                                                    var3 = _closure3_slot1;
                                                    if (!var3) {
                                                        _fun17184_ip = 35;
                                                        continue _fun17184
                                                    }
                                                case 27:
                                                    var1 = _closure3_slot1;
                                                    var1 = delete var1[var2];
                                                case 35:
                                                    return var0;
                                            }
                                        };
                                        var0 = var2.bind(var3)(var0);
                                    case 301:
                                        var2 = _closure3_slot5;
                                        var0 = _closure3_slot3;
                                        var0 = var0.name;
                                        var0 = var2[var0];
                                        var0 = var0.screens;
                                        if (!var0) {
                                            _fun17181_ip = 342;
                                            continue _fun17181
                                        }
                                    case 327:
                                        var0 = _closure3_slot3;
                                        var2 = var0.state;
                                        var0 = undefined;
                                        if (!(var0 === var2)) {
                                            _fun17181_ip = 353;
                                            continue _fun17181
                                        }
                                    case 342:
                                        var0 = false;
                                        _closure3_slot7 = var0;
                                        _fun17181_ip = 502;
                                        continue _fun17181;
                                    case 353:
                                        var0 = _closure3_slot3;
                                        var0 = var0.state;
                                        var0 = var0.index;
                                        var2 = 'number';
                                        var0 = typeof var0;
                                        if (!(var2 !== var0)) {
                                            _fun17181_ip = 407;
                                            continue _fun17181
                                        }
                                    case 378:
                                        var0 = _closure3_slot3;
                                        var0 = var0.state;
                                        var0 = var0.routes;
                                        var2 = var0.length;
                                        var0 = 1;
                                        var0 = var2 - var0;
                                        _fun17181_ip = 421;
                                        continue _fun17181;
                                    case 407:
                                        var2 = _closure3_slot3;
                                        var2 = var2.state;
                                        var0 = var2.index;
                                    case 421:
                                        _closure3_slot2 = var0;
                                        var0 = _closure3_slot3;
                                        var0 = var0.state;
                                        var2 = var0.routes;
                                        var0 = _closure3_slot2;
                                        var2 = var2[var0];
                                        var3 = _closure3_slot5;
                                        var0 = _closure3_slot3;
                                        var0 = var0.name;
                                        var0 = var3[var0];
                                        var0 = var0.screens;
                                        if (!var0) {
                                            _fun17181_ip = 486;
                                            continue _fun17181
                                        }
                                    case 474:
                                        var3 = var2.name;
                                        var3 = var3 in var0;
                                        if (var3) {
                                            _fun17181_ip = 494;
                                            continue _fun17181
                                        }
                                    case 486:
                                        var3 = false;
                                        _closure3_slot7 = var3;
                                        _fun17181_ip = 502;
                                        continue _fun17181;
                                    case 494:
                                        _closure3_slot3 = var2;
                                        _closure3_slot5 = var0;
                                    case 502:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = _closure3_slot3;
                            var8 = var5.name;
                            var5 = _closure3_slot5;
                            var5 = var8 in var5;
                            if (!var5) {
                                _fun17180_ip = 169;
                                continue _fun17180
                            }
                        case 131:
                            var5 = _closure3_slot7;
                            if (!var5) {
                                _fun17180_ip = 169;
                                continue _fun17180
                            }
                        case 138:
                            var5 = var6.bind(var0)();
                            var5 = _closure3_slot3;
                            var8 = var5.name;
                            var5 = _closure3_slot5;
                            var5 = var8 in var5;
                            if (!var5) {
                                _fun17180_ip = 169;
                                continue _fun17180
                            }
                        case 162:
                            var5 = _closure3_slot7;
                            if (var5) {
                                _fun17180_ip = 138;
                                continue _fun17180
                            }
                        case 169:
                            var5 = _closure3_slot0;
                            if (!(var0 === var5)) {
                                _fun17180_ip = 195;
                                continue _fun17180
                            }
                        case 177:
                            var6 = var7.join;
                            var5 = '/';
                            var5 = var6.bind(var7)(var5);
                            var _closure3_slot0 = var5;
                        case 195:
                            var6 = _closure3_slot5;
                            var5 = _closure3_slot3;
                            var5 = var5.name;
                            var5 = var6[var5];
                            if (!(var0 === var5)) {
                                _fun17180_ip = 252;
                                continue _fun17180
                            }
                        case 216:
                            var6 = _closure2_slot2;
                            var5 = global;
                            var7 = var5.encodeURIComponent;
                            var5 = _closure3_slot3;
                            var5 = var5.name;
                            var5 = var7.bind(var0)(var5);
                            var5 = var6 + var5;
                            _closure2_slot2 = var5;
                            _fun17180_ip = 307;
                            continue _fun17180;
                        case 252:
                            var6 = _closure2_slot2;
                            var7 = _closure3_slot0;
                            var5 = var7.split;
                            var8 = '/';
                            var9 = var5.bind(var7)(var8);
                            var7 = var9.map;
                            var5 = function(arg0) { // Environment: var1
                                _fun17185: for (var _fun17185_ip = 0;;) switch (_fun17185_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = _closure1_slot6;
                                        var3 = undefined;
                                        var1 = var0.bind(var3)(var4);
                                        var0 = '*';
                                        if (!(var0 !== var4)) {
                                            _fun17185_ip = 110;
                                            continue _fun17185
                                        }
                                    case 25:
                                        var2 = var4.startsWith;
                                        var0 = ':';
                                        var0 = var2.bind(var4)(var0);
                                        if (var0) {
                                            _fun17185_ip = 58;
                                            continue _fun17185
                                        }
                                    case 43:
                                        var0 = global;
                                        var0 = var0.encodeURIComponent;
                                        var0 = var0.bind(var3)(var4);
                                        return var0;
                                    case 58:
                                        var0 = _closure2_slot4;
                                        var2 = var0[var1];
                                        if (!(var3 === var2)) {
                                            _fun17185_ip = 95;
                                            continue _fun17185
                                        }
                                    case 73:
                                        var1 = var4.endsWith;
                                        var0 = '?';
                                        var1 = var1.bind(var4)(var0);
                                        var0 = '';
                                        if (var1) {
                                            _fun17185_ip = 108;
                                            continue _fun17185
                                        }
                                    case 95:
                                        var1 = global;
                                        var1 = var1.encodeURIComponent;
                                        var0 = var1.bind(var3)(var2);
                                    case 108:
                                        return var0;
                                    case 110:
                                        var0 = _closure3_slot3;
                                        var0 = var0.name;
                                        return var0;
                                }
                            };
                            var7 = var7.bind(var9)(var5);
                            var5 = var7.join;
                            var5 = var5.bind(var7)(var8);
                            var5 = var6 + var5;
                            _closure2_slot2 = var5;
                        case 307:
                            var5 = _closure3_slot1;
                            if (var5) {
                                _fun17180_ip = 324;
                                continue _fun17180
                            }
                        case 314:
                            var4 = var4.params;
                            var _closure3_slot1 = var4;
                        case 324:
                            var4 = _closure3_slot3;
                            var4 = var4.state;
                            if (var4) {
                                _fun17180_ip = 483;
                                continue _fun17180
                            }
                        case 339:
                            var4 = _closure3_slot1;
                            if (!var4) {
                                _fun17180_ip = 499;
                                continue _fun17180
                            }
                        case 349:
                            var8 = _closure3_slot1;
                            var4 = 'undefined';
                            for (var5 in var8)
                                case 365: {
                                    case 374: var11 = var5;
                                    var10 = _closure3_slot1;
                                    var10 = var10[var11];
                                    if (var4 !== var10) {
                                        _fun17180_ip = 365;
                                        continue _fun17180
                                    }
                                    case 389: var10 = _closure3_slot1;
                                    var10 = delete var10[var11];
                                    _fun17180_ip = 365;
                                    continue _fun17180;
                                }
                        case 399:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 4;
                            var3 = var5[var3];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.stringify;
                            var4 = _closure3_slot1;
                            var3 = {};
                            var7 = false;
                            var3.sort = var7;
                            var6 = var5.bind(var6)(var4, var3);
                            if (!var6) {
                                _fun17180_ip = 499;
                                continue _fun17180
                            }
                        case 447:
                            var4 = _closure2_slot2;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = '?';
                            var3 = var5.bind(var3)(var6);
                            var3 = var4 + var3;
                            _closure2_slot2 = var3;
                            _fun17180_ip = 499;
                            continue _fun17180;
                        case 483:
                            var4 = _closure2_slot2;
                            var3 = '/';
                            var3 = var4 + var3;
                            _closure2_slot2 = var3;
                        case 499:
                            var1 = _closure3_slot3;
                            var1 = var1.state;
                            _closure2_slot3 = var1;
                            return var0;
                    }
                };
                var2 = undefined;
                if (!var0) {
                    _fun17179_ip = 143;
                    continue _fun17179
                }
            case 132:
                var0 = var3.bind(var2)();
                var0 = _closure2_slot3;
                if (var0) {
                    _fun17179_ip = 132;
                    continue _fun17179
                }
            case 143:
                var3 = _closure2_slot2;
                var2 = var3.replace;
                var0 = /\\/ + /g;
                var0 = var2.bind(var3)(var0, var4);
                _closure2_slot2 = var0;
                var2 = var0.length;
                var0 = 1;
                if (!(!(var2 > var0))) {
                    _fun17179_ip = 194;
                    continue _fun17179
                }
            case 188:
                var0 = _closure2_slot2;
                _fun17179_ip = 227;
                continue _fun17179;
            case 194:
                var5 = _closure2_slot2;
                var4 = var5.replace;
                var3 = /\\/$ / ;
                var2 = '';
                var0 = var4.bind(var5)(var3, var2);
            case 227:
                _closure2_slot2 = var0;
                return var0;
            case 233:
                var0 = global;
                var2 = var0.Error;
                var1 = undefined;
                var0 = "Got 'undefined' for the navigation state. You must pass a valid state object.";
                var0 = var2.bind(var1)(var0);
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 1506, 1507, 1508]);