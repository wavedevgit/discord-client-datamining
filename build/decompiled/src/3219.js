// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var9 = function arg0() {
        _fun27911: for (var _fun27911_ip = 0;;) switch (_fun27911_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var1) {
                    _fun27911_ip = 42;
                    continue _fun27911
                }
            case 9:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var1;
                if (!(var3 === var2)) {
                    _fun27911_ip = 42;
                    continue _fun27911
                }
            case 23:
                var2 = 'default';
                var2 = var2 in var1;
                var0 = var1;
                if (!var2) {
                    _fun27911_ip = 42;
                    continue _fun27911
                }
            case 37:
                var0 = var1.default;
            case 42:
                return var0;
        }
    };
    var0 = function() {
        _fun27912: for (var _fun27912_ip = 0;;) switch (_fun27912_ip) {
            case 0:
                var0 = undefined;
                var1 = global;
                var1 = var1.Object;
                var3 = var1.assign;
                if (var3) {
                    _fun27912_ip = 25;
                    continue _fun27912
                }
            case 18:
                var3 = function(arg0) { // Environment: var1
                    _fun27913: for (var _fun27913_ip = 0;;) switch (_fun27913_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = undefined;
                            var1 = arguments.length;
                            var3 = 1;
                            var1 = var3 < var1;
                            var2 = global;
                            var4 = undefined;
                            if (!var1) {
                                _fun27913_ip = 115;
                                continue _fun27913
                            }
                        case 22:
                            var11 = arguments[var3];
                            var9 = var11;
                            var1 = var4;
                            var4 = var1;
                            for (var6 in var9)
                                case 43: {
                                    var4 = var1;
                                    case 55: var12 = var6;
                                    var13 = var2.Object;
                                    var13 = var13.prototype;
                                    var14 = var13.hasOwnProperty;
                                    var13 = var14.call;
                                    var13 = var13.bind(var14)(var11, var12);
                                    var1 = var12;
                                    if (!var13) {
                                        _fun27913_ip = 43;
                                        continue _fun27913
                                    }
                                    case 92: var13 = var11[var12];
                                    var0[var12] = var13;
                                    var1 = var12;
                                    _fun27913_ip = 43;
                                    continue _fun27913;
                                }
                        case 105:
                            var3 = var3 + 1;
                            var1 = arguments.length;
                            if (var3 < var1) {
                                _fun27913_ip = 22;
                                continue _fun27913
                            }
                        case 115:
                            return var0;
                    }
                };
            case 25:
                _closure1_slot15 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.create;
        var2 = var0.prototype;
        var2 = var3.bind(var4)(var2);
        var1.prototype = var2;
        var2 = var1.prototype;
        var2.constructor = var1;
        var1.__proto__ = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun27915: for (var _fun27915_ip = 0;;) switch (_fun27915_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun27915_ip = 89;
                    continue _fun27915
                }
            case 12:
                var0 = {};
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var4 = var1.bind(var2)(var6);
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = 0;
                if (!var1) {
                    _fun27915_ip = 87;
                    continue _fun27915
                }
            case 48:
                var7 = var4[var2];
                var1 = var5.indexOf;
                var1 = var1.bind(var5)(var7);
                if (!(!(var3 <= var1))) {
                    _fun27915_ip = 75;
                    continue _fun27915
                }
            case 67:
                var1 = var6[var7];
                var0[var7] = var1;
            case 75:
                var2 = var2 + 1;
                var1 = var4.length;
                if (var2 < var1) {
                    _fun27915_ip = 48;
                    continue _fun27915
                }
            case 87:
                return var0;
            case 89:
                var0 = {};
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var5 = function arg0, arg1() {
        _fun27916: for (var _fun27916_ip = 0;;) switch (_fun27916_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = undefined;
                if (!(var3 === var5)) {
                    _fun27916_ip = 16;
                    continue _fun27916
                }
            case 12:
                var5 = '/';
            case 16:
                if (!(var3 === var4)) {
                    _fun27916_ip = 22;
                    continue _fun27916
                }
            case 20:
                var4 = {};
            case 22:
                var1 = '/';
                var0 = var5;
                if (!(var1 !== var0)) {
                    _fun27916_ip = 126;
                    continue _fun27916
                }
            case 33:
                var2 = _closure1_slot10;
                var2 = var2[var5];
                if (var2) {
                    _fun27916_ip = 103;
                    continue _fun27916
                }
            case 47:
                var6 = _closure1_slot4;
                var2 = var6.compile;
                var6 = var2.bind(var6)(var5);
                var8 = _closure1_slot11;
                var7 = 10000;
                var2 = var6;
                if (!(var8 < var7)) {
                    _fun27916_ip = 111;
                    continue _fun27916
                }
            case 79:
                var7 = _closure1_slot10;
                var7[var5] = var6;
                var7 = _closure1_slot11;
                var7 = var7 + 1;
                _closure1_slot11 = var7;
                var2 = var6;
                _fun27916_ip = 111;
                continue _fun27916;
            case 103:
                var1 = _closure1_slot10;
                var2 = var1[var5];
            case 111:
                var1 = {};
                var5 = true;
                var1.pretty = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 126:
                return var0;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function arg0, arg1() {
        _fun27917: for (var _fun27917_ip = 0;;) switch (_fun27917_ip) {
            case 0:
                var4 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var1 === var4)) {
                    _fun27917_ip = 20;
                    continue _fun27917
                }
            case 18:
                var4 = {};
            case 20:
                var3 = 'string';
                var2 = typeof var4;
                var3 = var3 !== var2;
                if (!var3) {
                    _fun27917_ip = 55;
                    continue _fun27917
                }
            case 34:
                var2 = global;
                var5 = var2.Array;
                var2 = var5.isArray;
                var2 = var2.bind(var5)(var4);
                var3 = !var2;
            case 55:
                var2 = var4;
                if (var3) {
                    _fun27917_ip = 71;
                    continue _fun27917
                }
            case 61:
                var3 = {};
                var3.path = var4;
                var2 = var3;
            case 71:
                var3 = var2.path;
                var5 = var2.exact;
                var4 = var1 !== var5;
                if (!var4) {
                    _fun27917_ip = 93;
                    continue _fun27917
                }
            case 90:
                var4 = var5;
            case 93:
                var _closure2_slot1 = var4;
                var5 = var2.strict;
                var4 = var1 !== var5;
                if (!var4) {
                    _fun27917_ip = 113;
                    continue _fun27917
                }
            case 110:
                var4 = var5;
            case 113:
                var _closure2_slot2 = var4;
                var2 = var2.sensitive;
                var1 = var1 !== var2;
                if (!var1) {
                    _fun27917_ip = 133;
                    continue _fun27917
                }
            case 130:
                var1 = var2;
            case 133:
                var _closure2_slot3 = var1;
                var2 = new Array(0);
                var1 = var2.concat;
                var3 = var1.bind(var2)(var3);
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun27918: for (var _fun27918_ip = 0;;) switch (_fun27918_ip) {
                        case 0:
                            var0 = arg0;
                            var8 = arg1;
                            if (var8) {
                                _fun27918_ip = 23;
                                continue _fun27918
                            }
                        case 11:
                            var1 = '';
                            if (!(var1 !== var8)) {
                                _fun27918_ip = 23;
                                continue _fun27918
                            }
                        case 19:
                            var1 = null;
                            return var1;
                        case 23:
                            if (var0) {
                                _fun27918_ip = 331;
                                continue _fun27918
                            }
                        case 29:
                            var10 = {};
                            var2 = _closure2_slot1;
                            var10.end = var2;
                            var2 = _closure2_slot2;
                            var10.strict = var2;
                            var2 = _closure2_slot3;
                            var10.sensitive = var2;
                            var2 = var10.end;
                            var4 = '' + var2;
                            var2 = var10.strict;
                            var4 = var4 + var2;
                            var2 = var10.sensitive;
                            var6 = var4 + var2;
                            var2 = _closure1_slot12;
                            var4 = var2[var6];
                            if (var4) {
                                _fun27918_ip = 115;
                                continue _fun27918
                            }
                        case 102:
                            var5 = _closure1_slot12;
                            var2 = {};
                            var5[var6] = var2;
                            var4 = var2;
                        case 115:
                            var2 = var4[var8];
                            if (var2) {
                                _fun27918_ip = 187;
                                continue _fun27918
                            }
                        case 122:
                            var2 = new Array(0);
                            var5 = {};
                            var9 = _closure1_slot4;
                            var6 = undefined;
                            var6 = var9.bind(var6)(var8, var2, var10);
                            var5.regexp = var6;
                            var5.keys = var2;
                            var9 = _closure1_slot13;
                            var6 = 10000;
                            var2 = var5;
                            if (!(var9 < var6)) {
                                _fun27918_ip = 191;
                                continue _fun27918
                            }
                        case 167:
                            var4[var8] = var5;
                            var6 = _closure1_slot13;
                            var6 = var6 + 1;
                            _closure1_slot13 = var6;
                            var2 = var5;
                            _fun27918_ip = 191;
                            continue _fun27918;
                        case 187:
                            var2 = var4[var8];
                        case 191:
                            var5 = var2.regexp;
                            var6 = var2.keys;
                            var4 = var5.exec;
                            var2 = _closure2_slot0;
                            var5 = var4.bind(var5)(var2);
                            if (var5) {
                                _fun27918_ip = 224;
                                continue _fun27918
                            }
                        case 220:
                            var2 = null;
                            return var2;
                        case 224:
                            var2 = 0;
                            var7 = var5[var2];
                            var4 = var5.slice;
                            var2 = 1;
                            var2 = var4.bind(var5)(var2);
                            var _closure3_slot0 = var2;
                            var2 = _closure2_slot0;
                            var4 = var2 === var7;
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun27918_ip = 267;
                                continue _fun27918
                            }
                        case 262:
                            var1 = null;
                            if (!var4) {
                                _fun27918_ip = 329;
                                continue _fun27918
                            }
                        case 267:
                            var2 = {};
                            var2.path = var8;
                            var5 = '/';
                            if (!(var5 === var8)) {
                                _fun27918_ip = 290;
                                continue _fun27918
                            }
                        case 282:
                            var8 = '';
                            if (!(var8 !== var7)) {
                                _fun27918_ip = 293;
                                continue _fun27918
                            }
                        case 290:
                            var5 = var7;
                        case 293:
                            var2.url = var5;
                            var2.isExact = var4;
                            var5 = var6.reduce;
                            var4 = function(arg0, arg1, arg2) { // Environment: var3
                                var0 = arg0;
                                var1 = arg1;
                                var2 = var1.name;
                                var3 = _closure3_slot0;
                                var1 = arg2;
                                var1 = var3[var1];
                                var0[var2] = var1;
                                return var0;
                            };
                            var3 = {};
                            var3 = var5.bind(var6)(var4, var3);
                            var2.params = var3;
                            var1 = var2;
                        case 329:
                            return var1;
                        case 331:
                            return var0;
                    }
                };
                var0 = null;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var4;
    var0 = function arg0() {
        _fun27920: for (var _fun27920_ip = 0;;) switch (_fun27920_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.charAt;
                var0 = 0;
                var3 = var1.bind(var2)(var0);
                var1 = '/';
                var0 = var2;
                if (!(var1 !== var3)) {
                    _fun27920_ip = 31;
                    continue _fun27920
                }
            case 27:
                var0 = var1 + var2;
            case 31:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun27921: for (var _fun27921_ip = 0;;) switch (_fun27921_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                if (var1) {
                    _fun27921_ip = 11;
                    continue _fun27921
                }
            case 9:
                return var5;
            case 11:
                var0 = _closure1_slot20;
                var4 = undefined;
                var1 = var0.bind(var4)(var1);
                var3 = var5.pathname;
                var0 = var3.indexOf;
                var6 = var0.bind(var3)(var1);
                var3 = 0;
                var0 = var5;
                if (!(var3 === var6)) {
                    _fun27921_ip = 93;
                    continue _fun27921
                }
            case 51:
                var3 = _closure1_slot15;
                var2 = {};
                var7 = var5.pathname;
                var6 = var7.substr;
                var1 = var1.length;
                var1 = var6.bind(var7)(var1);
                var2.pathname = var1;
                var1 = {};
                var0 = var3.bind(var4)(var1, var5, var2);
            case 93:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun27922: for (var _fun27922_ip = 0;;) switch (_fun27922_ip) {
            case 0:
                var3 = arg0;
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 !== var1)) {
                    _fun27922_ip = 53;
                    continue _fun27922
                }
            case 17:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.createPath;
                var0 = var1.bind(var2)(var3);
            case 53:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var0 = undefined;
            var1 = false;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot24 = var0;
    var3 = function() {
        var2 = _closure1_slot14;
        var1 = _closure1_slot7;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.location;
        return var0;
    };
    var _closure1_slot25 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var8 = 0;
    var6 = var11[var8];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var13 = var9.bind(var0)(var6);
    var _closure1_slot2 = var13;
    var6 = 1;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var6 = 2;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var6 = 3;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var6 = var9.bind(var0)(var6);
    var7 = 4;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var7 = var9.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 5;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var7 = var9.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 6;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var7 = 7;
    var7 = var11[var7];
    var7 = var10.bind(var0)(var7);
    var7 = var9.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = var6.bind(var0)();
    var9 = 'Router-History';
    var7.displayName = var9;
    var _closure1_slot6 = var7;
    var6 = var6.bind(var0)();
    var9 = 'Router';
    var6.displayName = var9;
    var _closure1_slot7 = var6;
    var10 = var13.Component;
    var9 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var0 = function arg0() {
            _fun27928: for (var _fun27928_ip = 0;;) switch (_fun27928_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var4 = _closure2_slot0;
                    var0 = var4.call;
                    var0 = var0.bind(var4)(var3, var2);
                    if (var0) {
                        _fun27928_ip = 32;
                        continue _fun27928
                    }
                case 29:
                    var0 = var3;
                case 32:
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var4 = var2.history;
                    var4 = var4.location;
                    var3.location = var4;
                    var0.state = var3;
                    var3 = false;
                    var0._isMounted = var3;
                    var3 = null;
                    var0._pendingLocation = var3;
                    var3 = var2.staticContext;
                    if (var3) {
                        _fun27928_ip = 112;
                        continue _fun27928
                    }
                case 84:
                    var3 = var2.history;
                    var2 = var3.listen;
                    var1 = function(arg0) { // Environment: var1
                        _fun27929: for (var _fun27929_ip = 0;;) switch (_fun27929_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var0._isMounted;
                                var2 = _closure3_slot0;
                                if (var0) {
                                    _fun27929_ip = 31;
                                    continue _fun27929
                                }
                            case 23:
                                var2._pendingLocation = var3;
                                _fun27929_ip = 48;
                                continue _fun27929;
                            case 31:
                                var1 = var2.setState;
                                var0 = {};
                                var0.location = var3;
                                var0 = var1.bind(var2)(var0);
                            case 48:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.unlisten = var1;
                case 112:
                    return var0;
            }
        };
        var _closure2_slot1 = var0;
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var0, var4);
        var2 = function(arg0) { // Environment: var1
            var0 = {
                'path': '/',
                'url': '/'
            };
            var2 = '/';
            var1 = {};
            var0.params = var1;
            var1 = arg0;
            var1 = var2 === var1;
            var0.isExact = var1;
            return var0;
        };
        var0.computeRootMatch = var2;
        var2 = var0.prototype;
        var3 = function() { // Environment: var1
            _fun27931: for (var _fun27931_ip = 0;;) switch (_fun27931_ip) {
                case 0:
                    var2 = this;
                    var0 = true;
                    var2._isMounted = var0;
                    var0 = var2._pendingLocation;
                    if (!var0) {
                        _fun27931_ip = 43;
                        continue _fun27931
                    }
                case 20:
                    var1 = var2.setState;
                    var0 = {};
                    var3 = var2._pendingLocation;
                    var0.location = var3;
                    var0 = var1.bind(var2)(var0);
                case 43:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.componentDidMount = var3;
        var3 = function() { // Environment: var1
            _fun27932: for (var _fun27932_ip = 0;;) switch (_fun27932_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.unlisten;
                    if (!var0) {
                        _fun27932_ip = 22;
                        continue _fun27932
                    }
                case 12:
                    var0 = var1.unlisten;
                    var0 = var0.bind(var1)();
                case 22:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.componentWillUnmount = var3;
        var1 = function() { // Environment: var1
            _fun27933: for (var _fun27933_ip = 0;;) switch (_fun27933_ip) {
                case 0:
                    var7 = this;
                    var4 = _closure1_slot2;
                    var3 = var4.createElement;
                    var1 = _closure1_slot7;
                    var2 = var1.Provider;
                    var1 = {};
                    var5 = {};
                    var6 = var7.props;
                    var6 = var6.history;
                    var5.history = var6;
                    var6 = var7.state;
                    var6 = var6.location;
                    var5.location = var6;
                    var9 = _closure2_slot1;
                    var8 = var9.computeRootMatch;
                    var6 = var7.state;
                    var6 = var6.location;
                    var6 = var6.pathname;
                    var6 = var8.bind(var9)(var6);
                    var5.match = var6;
                    var6 = var7.props;
                    var6 = var6.staticContext;
                    var5.staticContext = var6;
                    var1.value = var5;
                    var6 = var4.createElement;
                    var0 = _closure1_slot6;
                    var5 = var0.Provider;
                    var0 = {};
                    var8 = var7.props;
                    var8 = var8.children;
                    if (var8) {
                        _fun27933_ip = 152;
                        continue _fun27933
                    }
                case 150:
                    var8 = null;
                case 152:
                    var0.children = var8;
                    var7 = var7.props;
                    var7 = var7.history;
                    var0.value = var7;
                    var0 = var6.bind(var4)(var5, var0);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var2.render = var1;
        return var0;
    };
    var10 = var9.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var11 = var13.Component;
    var9 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var0 = function() {
            _fun27935: for (var _fun27935_ip = 0;;) switch (_fun27935_ip) {
                case 0:
                    var1 = this;
                    var3 = undefined;
                    var4 = undefined;
                    var2 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var5 = var0.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var0
                        }
                    });
                    var10 = var5;
                    var9 = var2;
                    var0 = new var10[var0](var9, var8);
                    var7 = var0 instanceof Object ? var0 : var5;
                    var0 = 0;
                    var5 = var0 < var2;
                    if (!var5) {
                        _fun27935_ip = 65;
                        continue _fun27935
                    }
                case 50:
                    var5 = arguments[var0];
                    var7[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var2) {
                        _fun27935_ip = 50;
                        continue _fun27935
                    }
                case 65:
                    var5 = _closure2_slot0;
                    var4 = var5.call;
                    var2 = var4.apply;
                    var6 = new Array(1);
                    var6[0] = var1;
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var2.bind(var4)(var5, var0);
                    if (var0) {
                        _fun27935_ip = 112;
                        continue _fun27935
                    }
                case 109:
                    var0 = var1;
                case 112:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 8;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.createMemoryHistory;
                    var1 = var0.props;
                    var1 = var2.bind(var3)(var1);
                    var0.history = var1;
                    return var0;
            }
        };
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var0, var4);
        var2 = var0.prototype;
        var1 = function() { // Environment: var1
            var4 = this;
            var3 = _closure1_slot2;
            var2 = var3.createElement;
            var1 = _closure1_slot8;
            var0 = {};
            var5 = var4.history;
            var0.history = var5;
            var4 = var4.props;
            var4 = var4.children;
            var0.children = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2.render = var1;
        return var0;
    };
    var12 = var9.bind(var0)(var11);
    var11 = var13.Component;
    var9 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var0 = function() {
            _fun27938: for (var _fun27938_ip = 0;;) switch (_fun27938_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    if (var0) {
                        _fun27938_ip = 31;
                        continue _fun27938
                    }
                case 28:
                    var0 = var1;
                case 31:
                    return var0;
            }
        };
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var0, var4);
        var2 = var0.prototype;
        var3 = function() { // Environment: var1
            _fun27939: for (var _fun27939_ip = 0;;) switch (_fun27939_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var0 = var0.onMount;
                    if (!var0) {
                        _fun27939_ip = 39;
                        continue _fun27939
                    }
                case 17:
                    var0 = var2.props;
                    var1 = var0.onMount;
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2, var2);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.componentDidMount = var3;
        var3 = function(arg0) { // Environment: var1
            _fun27940: for (var _fun27940_ip = 0;;) switch (_fun27940_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.props;
                    var0 = var0.onUpdate;
                    if (!var0) {
                        _fun27940_ip = 43;
                        continue _fun27940
                    }
                case 17:
                    var0 = var3.props;
                    var2 = var0.onUpdate;
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var3, var0);
                case 43:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.componentDidUpdate = var3;
        var3 = function() { // Environment: var1
            _fun27941: for (var _fun27941_ip = 0;;) switch (_fun27941_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var0 = var0.onUnmount;
                    if (!var0) {
                        _fun27941_ip = 39;
                        continue _fun27941
                    }
                case 17:
                    var0 = var2.props;
                    var1 = var0.onUnmount;
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2, var2);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.componentWillUnmount = var3;
        var1 = function() { // Environment: var1
            var0 = null;
            return var0;
        };
        var2.render = var1;
        return var0;
    };
    var9 = var9.bind(var0)(var11);
    var _closure1_slot9 = var9;
    var9 = {};
    var _closure1_slot10 = var9;
    var _closure1_slot11 = var8;
    var9 = {};
    var _closure1_slot12 = var9;
    var _closure1_slot13 = var8;
    var9 = var13.Component;
    var8 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var0 = function() {
            _fun27944: for (var _fun27944_ip = 0;;) switch (_fun27944_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    if (var0) {
                        _fun27944_ip = 31;
                        continue _fun27944
                    }
                case 28:
                    var0 = var1;
                case 31:
                    return var0;
            }
        };
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var0, var4);
        var2 = var0.prototype;
        var1 = function() { // Environment: var1
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot2;
            var3 = var4.createElement;
            var1 = _closure1_slot7;
            var2 = var1.Consumer;
            var1 = null;
            var0 = function(arg0) { // Environment: var0
                _fun27946: for (var _fun27946_ip = 0;;) switch (_fun27946_ip) {
                    case 0:
                        var4 = arg0;
                        if (var4) {
                            _fun27946_ip = 22;
                            continue _fun27946
                        }
                    case 6:
                        var2 = _closure1_slot3;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                    case 22:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var7 = var1.location;
                        if (var7) {
                            _fun27946_ip = 47;
                            continue _fun27946
                        }
                    case 42:
                        var7 = var4.location;
                    case 47:
                        var3 = _closure1_slot15;
                        var2 = {};
                        var2.location = var7;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var1 = var1.computedMatch;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        if (var1) {
                            _fun27946_ip = 133;
                            continue _fun27946
                        }
                    case 87:
                        var1 = var5.path;
                        if (var1) {
                            _fun27946_ip = 104;
                            continue _fun27946
                        }
                    case 96:
                        var1 = var4.match;
                        _fun27946_ip = 131;
                        continue _fun27946;
                    case 104:
                        var10 = _closure1_slot19;
                        var9 = var7.pathname;
                        var7 = _closure3_slot0;
                        var8 = var7.props;
                        var7 = undefined;
                        var1 = var10.bind(var7)(var9, var8);
                    case 131:
                        _fun27946_ip = 139;
                        continue _fun27946;
                    case 133:
                        var1 = var5.computedMatch;
                    case 139:
                        var2.match = var1;
                        var9 = undefined;
                        var1 = {};
                        var8 = var3.bind(var9)(var1, var4, var2);
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var1 = var0.children;
                        var11 = var0.component;
                        var10 = var0.render;
                        var0 = global;
                        var2 = var0.Array;
                        var0 = var2.isArray;
                        var0 = var0.bind(var2)(var1);
                        if (!var0) {
                            _fun27946_ip = 213;
                            continue _fun27946
                        }
                    case 202:
                        var3 = var1.length;
                        var2 = 0;
                        var0 = var2 === var3;
                    case 213:
                        var7 = var1;
                        if (!var0) {
                            _fun27946_ip = 221;
                            continue _fun27946
                        }
                    case 219:
                        var7 = null;
                    case 221:
                        var4 = _closure1_slot2;
                        var3 = var4.createElement;
                        var0 = _closure1_slot7;
                        var2 = var0.Provider;
                        var1 = {};
                        var1.value = var8;
                        var0 = var8.match;
                        if (var0) {
                            _fun27946_ip = 276;
                            continue _fun27946
                        }
                    case 256:
                        var12 = 'function';
                        var5 = typeof var7;
                        var0 = null;
                        if (!(var12 === var5)) {
                            _fun27946_ip = 274;
                            continue _fun27946
                        }
                    case 269:
                        var0 = var7.bind(var9)(var8);
                    case 274:
                        _fun27946_ip = 337;
                        continue _fun27946;
                    case 276:
                        if (var7) {
                            _fun27946_ip = 312;
                            continue _fun27946
                        }
                    case 279:
                        if (var11) {
                            _fun27946_ip = 294;
                            continue _fun27946
                        }
                    case 282:
                        var5 = null;
                        if (!var10) {
                            _fun27946_ip = 292;
                            continue _fun27946
                        }
                    case 287:
                        var5 = var10.bind(var9)(var8);
                    case 292:
                        _fun27946_ip = 310;
                        continue _fun27946;
                    case 294:
                        var10 = _closure1_slot2;
                        var6 = var10.createElement;
                        var5 = var6.bind(var10)(var11, var8);
                    case 310:
                        _fun27946_ip = 334;
                        continue _fun27946;
                    case 312:
                        var11 = 'function';
                        var10 = typeof var7;
                        var6 = var7;
                        if (!(var11 === var10)) {
                            _fun27946_ip = 331;
                            continue _fun27946
                        }
                    case 326:
                        var6 = var7.bind(var9)(var8);
                    case 331:
                        var5 = var6;
                    case 334:
                        var0 = var5;
                    case 337:
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                }
            };
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var2.render = var1;
        return var0;
    };
    var11 = var8.bind(var0)(var9);
    var9 = var13.Component;
    var8 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var0 = function() {
            _fun27948: for (var _fun27948_ip = 0;;) switch (_fun27948_ip) {
                case 0:
                    var2 = this;
                    var4 = undefined;
                    var3 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var5 = var0.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var0
                        }
                    });
                    var10 = var5;
                    var9 = var3;
                    var0 = new var10[var0](var9, var8);
                    var7 = var0 instanceof Object ? var0 : var5;
                    var0 = 0;
                    var5 = var0 < var3;
                    if (!var5) {
                        _fun27948_ip = 65;
                        continue _fun27948
                    }
                case 50:
                    var5 = arguments[var0];
                    var7[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var3) {
                        _fun27948_ip = 50;
                        continue _fun27948
                    }
                case 65:
                    var5 = _closure2_slot0;
                    var4 = var5.call;
                    var3 = var4.apply;
                    var6 = new Array(1);
                    var6[0] = var2;
                    var0 = var6.concat;
                    var0 = var0.bind(var6)(var7);
                    var0 = var3.bind(var4)(var5, var0);
                    if (var0) {
                        _fun27948_ip = 112;
                        continue _fun27948
                    }
                case 109:
                    var0 = var2;
                case 112:
                    var _closure3_slot0 = var0;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.navigateTo;
                        var1 = arg0;
                        var0 = 'PUSH';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.handlePush = var2;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.navigateTo;
                        var1 = arg0;
                        var0 = 'REPLACE';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.handleReplace = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot24;
                        return var0;
                    };
                    var0.handleListen = var2;
                    var1 = function() { // Environment: var1
                        var0 = _closure1_slot24;
                        return var0;
                    };
                    var0.handleBlock = var1;
                    return var0;
            }
        };
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var0, var4);
        var2 = var0.prototype;
        var3 = function(arg0, arg1) { // Environment: var1
            _fun27953: for (var _fun27953_ip = 0;;) switch (_fun27953_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.props;
                    var2 = var1.basename;
                    var8 = '';
                    var0 = undefined;
                    if (!(var0 !== var2)) {
                        _fun27953_ip = 27;
                        continue _fun27953
                    }
                case 24:
                    var8 = var2;
                case 27:
                    var2 = var1.context;
                    if (!(var0 === var2)) {
                        _fun27953_ip = 38;
                        continue _fun27953
                    }
                case 36:
                    var2 = {};
                case 38:
                    var1 = arg1;
                    var2.action = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.createLocation;
                    var3 = arg0;
                    var7 = var4.bind(var5)(var3);
                    var3 = var7;
                    if (!var8) {
                        _fun27953_ip = 129;
                        continue _fun27953
                    }
                case 90:
                    var6 = _closure1_slot15;
                    var5 = {};
                    var4 = _closure1_slot20;
                    var8 = var4.bind(var0)(var8);
                    var4 = var7.pathname;
                    var4 = var8 + var4;
                    var5.pathname = var4;
                    var4 = {};
                    var3 = var6.bind(var0)(var4, var7, var5);
                case 129:
                    var2.location = var3;
                    var3 = _closure1_slot22;
                    var1 = var2.location;
                    var1 = var3.bind(var0)(var1);
                    var2.url = var1;
                    return var0;
            }
        };
        var2.navigateTo = var3;
        var1 = function() { // Environment: var1
            _fun27954: for (var _fun27954_ip = 0;;) switch (_fun27954_ip) {
                case 0:
                    var1 = this;
                    var8 = var1.props;
                    var0 = var8.basename;
                    var5 = '';
                    var7 = undefined;
                    if (!(var7 !== var0)) {
                        _fun27954_ip = 29;
                        continue _fun27954
                    }
                case 26:
                    var5 = var0;
                case 29:
                    var _closure3_slot0 = var5;
                    var0 = var8.context;
                    if (!(var7 === var0)) {
                        _fun27954_ip = 44;
                        continue _fun27954
                    }
                case 42:
                    var0 = {};
                case 44:
                    var3 = var8.location;
                    var10 = '/';
                    if (!(var7 !== var3)) {
                        _fun27954_ip = 60;
                        continue _fun27954
                    }
                case 57:
                    var10 = var3;
                case 60:
                    var6 = _closure1_slot17;
                    var3 = ['basename', 'context', 'location'];
                    var6 = var6.bind(var7)(var8, var3);
                    var8 = {};
                    var2 = function arg0() {
                        var2 = _closure1_slot20;
                        var3 = _closure3_slot0;
                        var4 = _closure1_slot22;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3 + var0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var8.createHref = var2;
                    var2 = 'POP';
                    var8.action = var2;
                    var3 = _closure1_slot21;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 8;
                    var2 = var11[var2];
                    var9 = var9.bind(var7)(var2);
                    var2 = var9.createLocation;
                    var2 = var2.bind(var9)(var10);
                    var2 = var3.bind(var7)(var5, var2);
                    var8.location = var2;
                    var2 = var1.handlePush;
                    var8.push = var2;
                    var2 = var1.handleReplace;
                    var8.replace = var2;
                    var2 = _closure1_slot23;
                    var3 = var2.bind(var7)();
                    var8.go = var3;
                    var3 = var2.bind(var7)();
                    var8.goBack = var3;
                    var2 = var2.bind(var7)();
                    var8.goForward = var2;
                    var2 = var1.handleListen;
                    var8.listen = var2;
                    var1 = var1.handleBlock;
                    var8.block = var1;
                    var3 = _closure1_slot2;
                    var2 = var3.createElement;
                    var1 = _closure1_slot8;
                    var5 = _closure1_slot15;
                    var4 = {};
                    var4.history = var8;
                    var4.staticContext = var0;
                    var0 = {};
                    var0 = var5.bind(var7)(var0, var6, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var2.render = var1;
        return var0;
    };
    var9 = var8.bind(var0)(var9);
    var14 = var13.Component;
    var8 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var0 = function() {
            _fun27957: for (var _fun27957_ip = 0;;) switch (_fun27957_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var0 = var2.bind(var3)(var1, var0);
                    if (var0) {
                        _fun27957_ip = 31;
                        continue _fun27957
                    }
                case 28:
                    var0 = var1;
                case 31:
                    return var0;
            }
        };
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var0, var4);
        var2 = var0.prototype;
        var1 = function() { // Environment: var1
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot2;
            var3 = var4.createElement;
            var1 = _closure1_slot7;
            var2 = var1.Consumer;
            var1 = null;
            var0 = function(arg0) { // Environment: var0
                _fun27959: for (var _fun27959_ip = 0;;) switch (_fun27959_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        if (var1) {
                            _fun27959_ip = 28;
                            continue _fun27959
                        }
                    case 12:
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var0 = false;
                        var0 = var3.bind(var2)(var0);
                    case 28:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var6 = var2.location;
                        if (var6) {
                            _fun27959_ip = 53;
                            continue _fun27959
                        }
                    case 48:
                        var6 = var1.location;
                    case 53:
                        var _closure4_slot3 = var6;
                        var2 = _closure1_slot2;
                        var4 = var2.Children;
                        var3 = var4.forEach;
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var2 = var0.children;
                        var0 = function(arg0) { // Environment: var5
                            _fun27960: for (var _fun27960_ip = 0;;) switch (_fun27960_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure4_slot2;
                                    var0 = null;
                                    if (!(var0 == var2)) {
                                        _fun27960_ip = 131;
                                        continue _fun27960
                                    }
                                case 16:
                                    var2 = _closure1_slot2;
                                    var0 = var2.isValidElement;
                                    var0 = var0.bind(var2)(var3);
                                    if (!var0) {
                                        _fun27960_ip = 131;
                                        continue _fun27960
                                    }
                                case 37:
                                    var _closure4_slot1 = var3;
                                    var0 = var3.props;
                                    var2 = var0.path;
                                    if (var2) {
                                        _fun27960_ip = 65;
                                        continue _fun27960
                                    }
                                case 55:
                                    var0 = var3.props;
                                    var2 = var0.from;
                                case 65:
                                    if (var2) {
                                        _fun27960_ip = 80;
                                        continue _fun27960
                                    }
                                case 68:
                                    var0 = _closure4_slot0;
                                    var0 = var0.match;
                                    _fun27960_ip = 127;
                                    continue _fun27960;
                                case 80:
                                    var5 = _closure1_slot19;
                                    var4 = _closure4_slot3;
                                    var4 = var4.pathname;
                                    var8 = _closure1_slot15;
                                    var7 = var3.props;
                                    var6 = {};
                                    var6.path = var2;
                                    var3 = undefined;
                                    var2 = {};
                                    var2 = var8.bind(var3)(var2, var7, var6);
                                    var0 = var5.bind(var3)(var4, var2);
                                case 127:
                                    var _closure4_slot2 = var0;
                                case 131:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var2, var0);
                        var2 = _closure4_slot2;
                        var0 = null;
                        if (!var2) {
                            _fun27959_ip = 144;
                            continue _fun27959
                        }
                    case 109:
                        var4 = _closure1_slot2;
                        var3 = var4.cloneElement;
                        var2 = _closure4_slot1;
                        var1 = {};
                        var1.location = var6;
                        var5 = _closure4_slot2;
                        var1.computedMatch = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 144:
                        return var0;
                }
            };
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var2.render = var1;
        return var0;
    };
    var8 = var8.bind(var0)(var14);
    var13 = var13.useContext;
    var _closure1_slot14 = var13;
    var2.MemoryRouter = var12;
    var12 = function arg0() {
        _fun27961: for (var _fun27961_ip = 0;;) switch (_fun27961_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.message;
                var _closure2_slot0 = var2;
                var2 = var1.when;
                var1 = undefined;
                var1 = var1 === var2;
                if (var1) {
                    _fun27961_ip = 32;
                    continue _fun27961
                }
            case 29:
                var1 = var2;
            case 32:
                var _closure2_slot1 = var1;
                var4 = _closure1_slot2;
                var3 = var4.createElement;
                var1 = _closure1_slot7;
                var2 = var1.Consumer;
                var1 = null;
                var0 = function(arg0) { // Environment: var0
                    _fun27962: for (var _fun27962_ip = 0;;) switch (_fun27962_ip) {
                        case 0:
                            var0 = arg0;
                            if (var0) {
                                _fun27962_ip = 24;
                                continue _fun27962
                            }
                        case 8:
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                        case 24:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun27962_ip = 124;
                                continue _fun27962
                            }
                        case 34:
                            var1 = var0.staticContext;
                            if (var1) {
                                _fun27962_ip = 124;
                                continue _fun27962
                            }
                        case 43:
                            var0 = var0.history;
                            var0 = var0.block;
                            var _closure3_slot0 = var0;
                            var3 = _closure1_slot2;
                            var2 = var3.createElement;
                            var1 = _closure1_slot9;
                            var0 = {};
                            var6 = function arg0() {
                                var2 = _closure3_slot0;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = arg0;
                                var1.release = var2;
                                return var0;
                            };
                            var0.onMount = var6;
                            var6 = function arg0, arg1() {
                                _fun27964: for (var _fun27964_ip = 0;;) switch (_fun27964_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = arg1;
                                        var3 = var0.message;
                                        var2 = _closure2_slot0;
                                        if (!(var3 !== var2)) {
                                            _fun27964_ip = 56;
                                            continue _fun27964
                                        }
                                    case 22:
                                        var2 = var1.release;
                                        var2 = var2.bind(var1)();
                                        var3 = _closure3_slot0;
                                        var2 = _closure2_slot0;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2);
                                        var1.release = var0;
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onUpdate = var6;
                            var5 = function arg0() {
                                var1 = arg0;
                                var0 = var1.release;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var0.onUnmount = var5;
                            var4 = _closure2_slot0;
                            var0.message = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 124:
                            var0 = null;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.Prompt = var12;
    var12 = function arg0() {
        _fun27966: for (var _fun27966_ip = 0;;) switch (_fun27966_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.computedMatch;
                var _closure2_slot0 = var2;
                var2 = var1.to;
                var _closure2_slot1 = var2;
                var2 = var1.push;
                var1 = undefined;
                var1 = var1 !== var2;
                if (!var1) {
                    _fun27966_ip = 41;
                    continue _fun27966
                }
            case 38:
                var1 = var2;
            case 41:
                var _closure2_slot2 = var1;
                var4 = _closure1_slot2;
                var3 = var4.createElement;
                var1 = _closure1_slot7;
                var2 = var1.Consumer;
                var1 = null;
                var0 = function(arg0) { // Environment: var0
                    _fun27967: for (var _fun27967_ip = 0;;) switch (_fun27967_ip) {
                        case 0:
                            var1 = arg0;
                            if (var1) {
                                _fun27967_ip = 24;
                                continue _fun27967
                            }
                        case 8:
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var0 = false;
                            var0 = var3.bind(var2)(var0);
                        case 24:
                            var0 = var1.history;
                            var4 = var1.staticContext;
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun27967_ip = 53;
                                continue _fun27967
                            }
                        case 46:
                            var3 = var0.replace;
                            _fun27967_ip = 58;
                            continue _fun27967;
                        case 53:
                            var3 = var0.push;
                        case 58:
                            var _closure3_slot0 = var3;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 8;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var1);
                            var5 = var6.createLocation;
                            var1 = _closure2_slot0;
                            var9 = _closure2_slot1;
                            if (var1) {
                                _fun27967_ip = 109;
                                continue _fun27967
                            }
                        case 104:
                            var1 = var9;
                            _fun27967_ip = 199;
                            continue _fun27967;
                        case 109:
                            var10 = 'string';
                            var9 = typeof var9;
                            if (!(var10 !== var9)) {
                                _fun27967_ip = 172;
                                continue _fun27967
                            }
                        case 120:
                            var12 = _closure1_slot15;
                            var11 = _closure2_slot1;
                            var10 = {};
                            var14 = _closure1_slot18;
                            var13 = var11.pathname;
                            var9 = _closure2_slot0;
                            var9 = var9.params;
                            var9 = var14.bind(var2)(var13, var9);
                            var10.pathname = var9;
                            var9 = {};
                            var9 = var12.bind(var2)(var9, var11, var10);
                            _fun27967_ip = 196;
                            continue _fun27967;
                        case 172:
                            var12 = _closure1_slot18;
                            var11 = _closure2_slot1;
                            var10 = _closure2_slot0;
                            var10 = var10.params;
                            var9 = var12.bind(var2)(var11, var10);
                        case 196:
                            var1 = var9;
                        case 199:
                            var1 = var5.bind(var6)(var1);
                            var _closure3_slot1 = var1;
                            if (var4) {
                                _fun27967_ip = 263;
                                continue _fun27967
                            }
                        case 211:
                            var6 = _closure1_slot2;
                            var5 = var6.createElement;
                            var4 = _closure1_slot9;
                            var0 = {};
                            var9 = function() {
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onMount = var9;
                            var8 = function arg0, arg1() {
                                _fun27969: for (var _fun27969_ip = 0;;) switch (_fun27969_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var2 = 8;
                                        var5 = var4[var2];
                                        var0 = undefined;
                                        var7 = var3.bind(var0)(var5);
                                        var6 = var7.createLocation;
                                        var5 = arg1;
                                        var5 = var5.to;
                                        var5 = var6.bind(var7)(var5);
                                        var2 = var4[var2];
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.locationsAreEqual;
                                        var8 = _closure1_slot15;
                                        var7 = _closure3_slot1;
                                        var6 = {};
                                        var2 = var5.key;
                                        var6.key = var2;
                                        var2 = {};
                                        var2 = var8.bind(var0)(var2, var7, var6);
                                        var2 = var3.bind(var4)(var5, var2);
                                        if (var2) {
                                            _fun27969_ip = 112;
                                            continue _fun27969
                                        }
                                    case 99:
                                        var2 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var1 = var2.bind(var0)(var1);
                                    case 112:
                                        return var0;
                                }
                            };
                            var0.onUpdate = var8;
                            var7 = _closure2_slot1;
                            var0.to = var7;
                            var0 = var5.bind(var6)(var4, var0);
                            _fun27967_ip = 270;
                            continue _fun27967;
                        case 263:
                            var1 = var3.bind(var2)(var1);
                            var0 = null;
                        case 270:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.Redirect = var12;
    var2.Route = var11;
    var2.Router = var10;
    var2.StaticRouter = var9;
    var2.Switch = var8;
    var2.__HistoryContext = var7;
    var2.__RouterContext = var6;
    var2.generatePath = var5;
    var2.matchPath = var4;
    var4 = function() {
        var2 = _closure1_slot14;
        var1 = _closure1_slot6;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useHistory = var4;
    var2.useLocation = var3;
    var3 = function() {
        _fun27971: for (var _fun27971_ip = 0;;) switch (_fun27971_ip) {
            case 0:
                var2 = _closure1_slot14;
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.match;
                if (var1) {
                    _fun27971_ip = 31;
                    continue _fun27971
                }
            case 27:
                var0 = {};
                _fun27971_ip = 37;
                continue _fun27971;
            case 31:
                var0 = var1.params;
            case 37:
                return var0;
        }
    };
    var2.useParams = var3;
    var3 = function arg0() {
        _fun27972: for (var _fun27972_ip = 0;;) switch (_fun27972_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot25;
                var3 = undefined;
                var1 = var0.bind(var3)();
                var5 = _closure1_slot14;
                var0 = _closure1_slot7;
                var0 = var5.bind(var3)(var0);
                var0 = var0.match;
                if (!var4) {
                    _fun27972_ip = 54;
                    continue _fun27972
                }
            case 38:
                var2 = _closure1_slot19;
                var1 = var1.pathname;
                var0 = var2.bind(var3)(var1, var4);
            case 54:
                return var0;
        }
    };
    var2.useRouteMatch = var3;
    var1 = function arg0() {
        _fun27973: for (var _fun27973_ip = 0;;) switch (_fun27973_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = function arg0() {
                    var5 = arg0;
                    var1 = var5.wrappedComponentRef;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot17;
                    var3 = undefined;
                    var2 = ['wrappedComponentRef'];
                    var2 = var4.bind(var3)(var5, var2);
                    var _closure3_slot1 = var2;
                    var4 = _closure1_slot2;
                    var3 = var4.createElement;
                    var1 = _closure1_slot7;
                    var2 = var1.Consumer;
                    var1 = null;
                    var0 = function(arg0) { // Environment: var0
                        _fun27975: for (var _fun27975_ip = 0;;) switch (_fun27975_ip) {
                            case 0:
                                var8 = arg0;
                                if (var8) {
                                    _fun27975_ip = 22;
                                    continue _fun27975
                                }
                            case 6:
                                var2 = _closure1_slot3;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                            case 22:
                                var3 = _closure1_slot2;
                                var2 = var3.createElement;
                                var1 = _closure2_slot0;
                                var7 = _closure1_slot15;
                                var11 = _closure3_slot1;
                                var5 = {};
                                var0 = _closure3_slot0;
                                var5.ref = var0;
                                var13 = undefined;
                                var12 = {};
                                var10 = var8;
                                var9 = var5;
                                var0 = var13[var7](var12, var11, var10, var9, var8);
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var1 = var3.displayName;
                if (var1) {
                    _fun27973_ip = 27;
                    continue _fun27973
                }
            case 22:
                var1 = var3.name;
            case 27:
                var0 = 'withRouter(';
                var1 = var0 + var1;
                var0 = ')';
                var0 = var1 + var0;
                var2.displayName = var0;
                var2.WrappedComponent = var3;
                var1 = _closure1_slot5;
                var0 = undefined;
                var0 = var1.bind(var0)(var2, var3);
                return var0;
        }
    };
    var2.withRouter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3220, 1227, 3223, 1228, 3226, 1138, 1137, 1221]);