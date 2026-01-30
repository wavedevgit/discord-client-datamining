// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function(arg0, arg1) { // Original name: jumpTo, environment: var2
        var0 = {};
        var1 = 'JUMP_TO';
        var0.type = var1;
        var1 = {};
        var2 = arg0;
        var1.name = var2;
        var2 = arg1;
        var1.params = var2;
        var0.payload = var1;
        return var0;
    };
    var0.jumpTo = var3;
    var _closure1_slot3 = var0;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: getRouteHistory, environment: var2
        _fun16998: for (var _fun16998_ip = 0;;) switch (_fun16998_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var6 = arg2;
                var0 = arg3;
                var _closure2_slot0 = var0;
                var2 = {};
                var3 = 'route';
                var2.type = var3;
                var0 = var5[var4];
                var0 = var0.key;
                var2.key = var0;
                var0 = new Array(1);
                var0[0] = var2;
                var2 = 'order';
                if (!(var2 !== var6)) {
                    _fun16998_ip = 186;
                    continue _fun16998
                }
            case 60:
                var2 = 'firstRoute';
                if (!(var2 !== var6)) {
                    _fun16998_ip = 148;
                    continue _fun16998
                }
            case 70:
                var2 = 'initialRoute';
                if (!(var2 === var6)) {
                    _fun16998_ip = 236;
                    continue _fun16998
                }
            case 81:
                var2 = var5.findIndex;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var5)(var1);
                var2 = -1;
                var6 = 0;
                if (!(var2 !== var1)) {
                    _fun16998_ip = 112;
                    continue _fun16998
                }
            case 109:
                var6 = var1;
            case 112:
                if (!(var4 !== var6)) {
                    _fun16998_ip = 236;
                    continue _fun16998
                }
            case 116:
                var2 = var0.unshift;
                var1 = {};
                var1.type = var3;
                var6 = var5[var6];
                var6 = var6.key;
                var1.key = var6;
                var1 = var2.bind(var0)(var1);
                _fun16998_ip = 236;
                continue _fun16998;
            case 148:
                var6 = 0;
                if (!(var6 !== var4)) {
                    _fun16998_ip = 236;
                    continue _fun16998
                }
            case 154:
                var2 = var0.unshift;
                var1 = {};
                var1.type = var3;
                var6 = var5[var6];
                var6 = var6.key;
                var1.key = var6;
                var1 = var2.bind(var0)(var1);
                _fun16998_ip = 236;
                continue _fun16998;
            case 186:
                var2 = 1;
                var1 = 0;
                if (!(var4 > var1)) {
                    _fun16998_ip = 236;
                    continue _fun16998
                }
            case 195:
                var7 = var0.unshift;
                var6 = {};
                var6.type = var3;
                var8 = var4 - var2;
                var8 = var5[var8];
                var8 = var8.key;
                var6.key = var8;
                var6 = var7.bind(var0)(var6);
                var4 = var4 - 1;
                if (var4 > var1) {
                    _fun16998_ip = 195;
                    continue _fun16998
                }
            case 236:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: changeIndex, environment: var2
        _fun17000: for (var _fun17000_ip = 0;;) switch (_fun17000_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var7 = arg2;
                var0 = 'history';
                if (!(var0 !== var7)) {
                    _fun17000_ip = 49;
                    continue _fun17000
                }
            case 19:
                var6 = _closure1_slot4;
                var11 = var4.routes;
                var12 = undefined;
                var8 = arg3;
                var10 = var5;
                var9 = var7;
                var0 = var12[var6](var11, var10, var9, var8, var7);
                _fun17000_ip = 113;
                continue _fun17000;
            case 49:
                var2 = var4.routes;
                var2 = var2[var5];
                var6 = var2.key;
                var _closure2_slot0 = var6;
                var3 = var4.history;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun17001: for (var _fun17001_ip = 0;;) switch (_fun17001_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = 'route';
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun17001_ip = 35;
                                continue _fun17001
                            }
                        case 19:
                            var2 = var1.key;
                            var1 = _closure2_slot0;
                            var0 = var2 !== var1;
                        case 35:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.concat;
                var1 = {};
                var7 = 'route';
                var1.type = var7;
                var1.key = var6;
                var0 = var2.bind(var3)(var1);
            case 113:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var1.index = var5;
                var1.history = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var2 = function(arg0) { // Original name: TabRouter, environment: var2
        _fun17002: for (var _fun17002_ip = 0;;) switch (_fun17002_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.initialRouteName;
                var _closure2_slot0 = var1;
                var1 = var0.backBehavior;
                var0 = 'firstRoute';
                var6 = undefined;
                if (!(var6 !== var1)) {
                    _fun17002_ip = 36;
                    continue _fun17002
                }
            case 33:
                var0 = var1;
            case 36:
                var _closure2_slot1 = var0;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.assign;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 0;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = {};
                var6 = 'tab';
                var1.type = var6;
                var6 = function(arg0) { // Original name: getInitialState, environment: var5
                    _fun17003: for (var _fun17003_ip = 0;;) switch (_fun17003_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.routeNames;
                            var0 = var0.routeParamList;
                            var _closure3_slot0 = var0;
                            var2 = _closure2_slot0;
                            var7 = undefined;
                            var4 = 0;
                            if (!(var7 !== var2)) {
                                _fun17003_ip = 70;
                                continue _fun17003
                            }
                        case 36:
                            var6 = var3.includes;
                            var2 = _closure2_slot0;
                            var2 = var6.bind(var3)(var2);
                            var4 = 0;
                            if (!var2) {
                                _fun17003_ip = 70;
                                continue _fun17003
                            }
                        case 55:
                            var5 = var3.indexOf;
                            var2 = _closure2_slot0;
                            var4 = var5.bind(var3)(var2);
                        case 70:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var0 = {};
                                var0.name = var2;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 1;
                                var3 = var3[var1];
                                var1 = undefined;
                                var3 = var4.bind(var1)(var3);
                                var1 = var3.nanoid;
                                var5 = var1.bind(var3)();
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var4 = var1.concat;
                                var3 = '';
                                var1 = '-';
                                var1 = var4.bind(var3)(var2, var1, var5);
                                var0.key = var1;
                                var1 = _closure3_slot0;
                                var1 = var1[var2];
                                var0.params = var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var6 = _closure1_slot4;
                            var10 = _closure2_slot1;
                            var9 = _closure2_slot0;
                            var13 = undefined;
                            var12 = var1;
                            var11 = var4;
                            var2 = var13[var6](var12, var11, var10, var9, var8);
                            var0 = {
                                'stale': false,
                                'type': 'tab'
                            };
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 1;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.nanoid;
                            var7 = var5.bind(var6)();
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = 'tab-';
                            var5 = var6.bind(var5)(var7);
                            var0.key = var5;
                            var0.index = var4;
                            var0.routeNames = var3;
                            var0.history = var2;
                            var0.routes = var1;
                            return var0;
                    }
                };
                var1.getInitialState = var6;
                var6 = function(arg0, arg1) { // Original name: getRehydratedState, environment: var5
                    _fun17005: for (var _fun17005_ip = 0;;) switch (_fun17005_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var7 = var1.routeNames;
                            var1 = var1.routeParamList;
                            var _closure3_slot0 = var1;
                            var _closure3_slot1 = var0;
                            var2 = var0.stale;
                            var1 = false;
                            if (!(var1 !== var2)) {
                                _fun17005_ip = 333;
                                continue _fun17005
                            }
                        case 43:
                            var2 = var7.map;
                            var1 = function(arg0) { // Environment: var4
                                _fun17006: for (var _fun17006_ip = 0;;) switch (_fun17006_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var _closure4_slot0 = var6;
                                        var1 = _closure3_slot1;
                                        var2 = var1.routes;
                                        var1 = var2.find;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.name;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var4 = var1.bind(var2)(var0);
                                        var7 = global;
                                        var3 = var7.Object;
                                        var2 = var3.assign;
                                        var1 = {};
                                        var1.name = var6;
                                        if (!var4) {
                                            _fun17006_ip = 76;
                                            continue _fun17006
                                        }
                                    case 59:
                                        var0 = var4.name;
                                        if (!(var0 === var6)) {
                                            _fun17006_ip = 76;
                                            continue _fun17006
                                        }
                                    case 68:
                                        var0 = var4.key;
                                        if (var0) {
                                            _fun17006_ip = 139;
                                            continue _fun17006
                                        }
                                    case 76:
                                        var9 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var0 = 1;
                                        var8 = var8[var0];
                                        var0 = undefined;
                                        var8 = var9.bind(var0)(var8);
                                        var0 = var8.nanoid;
                                        var10 = var0.bind(var8)();
                                        var0 = var7.HermesInternal;
                                        var9 = var0.concat;
                                        var8 = '';
                                        var0 = '-';
                                        var0 = var9.bind(var8)(var6, var0, var10);
                                        _fun17006_ip = 144;
                                        continue _fun17006;
                                    case 139:
                                        var0 = var4.key;
                                    case 144:
                                        var1.key = var0;
                                        var0 = _closure3_slot0;
                                        var0 = var0[var6];
                                        var9 = undefined;
                                        if (!(var9 === var0)) {
                                            _fun17006_ip = 175;
                                            continue _fun17006
                                        }
                                    case 162:
                                        var0 = undefined;
                                        if (!var4) {
                                            _fun17006_ip = 173;
                                            continue _fun17006
                                        }
                                    case 167:
                                        var0 = var4.params;
                                    case 173:
                                        _fun17006_ip = 214;
                                        continue _fun17006;
                                    case 175:
                                        var8 = var7.Object;
                                        var7 = var8.assign;
                                        var5 = _closure3_slot0;
                                        var6 = var5[var6];
                                        var9 = undefined;
                                        if (!var4) {
                                            _fun17006_ip = 205;
                                            continue _fun17006
                                        }
                                    case 199:
                                        var9 = var4.params;
                                    case 205:
                                        var5 = {};
                                        var0 = var7.bind(var8)(var5, var6, var9);
                                    case 214:
                                        var1.params = var0;
                                        var0 = {};
                                        var0 = var2.bind(var3)(var0, var4, var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var7)(var1);
                            var _closure3_slot2 = var1;
                            var8 = global;
                            var10 = var8.Math;
                            var9 = var10.min;
                            var12 = var8.Math;
                            var11 = var12.max;
                            var13 = var7.indexOf;
                            var14 = var0.routes;
                            var3 = null;
                            var2 = var3 == var0;
                            var6 = undefined;
                            var15 = undefined;
                            if (var2) {
                                _fun17005_ip = 116;
                                continue _fun17005
                            }
                        case 111:
                            var15 = var0.index;
                        case 116:
                            var16 = var3 != var15;
                            var5 = 0;
                            var2 = 0;
                            if (!var16) {
                                _fun17005_ip = 130;
                                continue _fun17005
                            }
                        case 127:
                            var2 = var15;
                        case 130:
                            var14 = var14[var2];
                            var15 = var3 == var14;
                            var2 = undefined;
                            if (var15) {
                                _fun17005_ip = 148;
                                continue _fun17005
                            }
                        case 143:
                            var2 = var14.name;
                        case 148:
                            var2 = var13.bind(var7)(var2);
                            var5 = var11.bind(var12)(var2, var5);
                            var2 = var1.length;
                            var11 = 1;
                            var2 = var2 - var11;
                            var5 = var9.bind(var10)(var5, var2);
                            var10 = var0.history;
                            var9 = var3 == var10;
                            var2 = undefined;
                            if (var9) {
                                _fun17005_ip = 207;
                                continue _fun17005
                            }
                        case 192:
                            var9 = var10.filter;
                            var4 = function(arg0) { // Environment: var4
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot2;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.key;
                                    var0 = _closure4_slot0;
                                    var0 = var0.key;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var9.bind(var10)(var4);
                        case 207:
                            if (!(var3 == var2)) {
                                _fun17005_ip = 215;
                                continue _fun17005
                            }
                        case 211:
                            var2 = new Array(0);
                        case 215:
                            var4 = _closure1_slot5;
                            var3 = {
                                'stale': false,
                                'type': 'tab'
                            };
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var10 = var10.bind(var6)(var9);
                            var9 = var10.nanoid;
                            var10 = var9.bind(var10)();
                            var8 = var8.HermesInternal;
                            var9 = var8.concat;
                            var8 = 'tab-';
                            var8 = var9.bind(var8)(var10);
                            var3.key = var8;
                            var3.index = var5;
                            var3.routeNames = var7;
                            var3.history = var2;
                            var3.routes = var1;
                            var18 = _closure2_slot1;
                            var17 = _closure2_slot0;
                            var21 = undefined;
                            var20 = var3;
                            var19 = var5;
                            var1 = var21[var4](var20, var19, var18, var17, var16);
                            return var1;
                        case 333:
                            return var0;
                    }
                };
                var1.getRehydratedState = var6;
                var6 = function(arg0, arg1) { // Original name: getStateForRouteNamesChange, environment: var5
                    _fun17010: for (var _fun17010_ip = 0;;) switch (_fun17010_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = arg1;
                            var _closure3_slot0 = var4;
                            var6 = var0.routeNames;
                            var1 = var0.routeParamList;
                            var _closure3_slot1 = var1;
                            var0 = var0.routeKeyChanges;
                            var _closure3_slot2 = var0;
                            var1 = var6.map;
                            var0 = function(arg0) { // Environment: var2
                                _fun17011: for (var _fun17011_ip = 0;;) switch (_fun17011_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var _closure4_slot0 = var3;
                                        var1 = _closure3_slot0;
                                        var4 = var1.routes;
                                        var1 = var4.find;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun17012: for (var _fun17012_ip = 0;;) switch (_fun17012_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = var1.name;
                                                    var0 = _closure4_slot0;
                                                    var0 = var2 === var0;
                                                    if (!var0) {
                                                        _fun17012_ip = 47;
                                                        continue _fun17012
                                                    }
                                                case 22:
                                                    var3 = _closure3_slot2;
                                                    var2 = var3.includes;
                                                    var1 = var1.name;
                                                    var1 = var2.bind(var3)(var1);
                                                    var0 = !var1;
                                                case 47:
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var4)(var0);
                                        if (var0) {
                                            _fun17011_ip = 129;
                                            continue _fun17011
                                        }
                                    case 40:
                                        var1 = {};
                                        var1.name = var3;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var4 = 1;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var5 = var6.bind(var4)(var5);
                                        var4 = var5.nanoid;
                                        var7 = var4.bind(var5)();
                                        var4 = global;
                                        var4 = var4.HermesInternal;
                                        var6 = var4.concat;
                                        var5 = '';
                                        var4 = '-';
                                        var4 = var6.bind(var5)(var3, var4, var7);
                                        var1.key = var4;
                                        var2 = _closure3_slot1;
                                        var2 = var2[var3];
                                        var1.params = var2;
                                        var0 = var1;
                                    case 129:
                                        return var0;
                                }
                            };
                            var5 = var1.bind(var6)(var0);
                            var _closure3_slot3 = var5;
                            var1 = global;
                            var8 = var1.Math;
                            var7 = var8.max;
                            var3 = var6.indexOf;
                            var9 = var4.routes;
                            var0 = var4.index;
                            var0 = var9[var0];
                            var0 = var0.name;
                            var3 = var3.bind(var6)(var0);
                            var0 = 0;
                            var0 = var7.bind(var8)(var0, var3);
                            var7 = var4.history;
                            var3 = var7.filter;
                            var2 = function(arg0) { // Environment: var2
                                _fun17013: for (var _fun17013_ip = 0;;) switch (_fun17013_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var2 = var0.type;
                                        var0 = 'route';
                                        var0 = var0 !== var2;
                                        if (var0) {
                                            _fun17013_ip = 47;
                                            continue _fun17013
                                        }
                                    case 25:
                                        var3 = _closure3_slot3;
                                        var2 = var3.find;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var1 = var0.key;
                                            var0 = _closure4_slot0;
                                            var0 = var0.key;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var1);
                                    case 47:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var7)(var2);
                            var2 = var3.length;
                            var7 = var3;
                            if (var2) {
                                _fun17010_ip = 171;
                                continue _fun17010
                            }
                        case 141:
                            var9 = _closure1_slot4;
                            var11 = _closure2_slot1;
                            var10 = _closure2_slot0;
                            var14 = undefined;
                            var13 = var5;
                            var12 = var0;
                            var7 = var14[var9](var13, var12, var11, var10, var9);
                        case 171:
                            var3 = var1.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var1.history = var7;
                            var1.routeNames = var6;
                            var1.routes = var5;
                            var1.index = var0;
                            var0 = {};
                            var0 = var2.bind(var3)(var0, var4, var1);
                            return var0;
                    }
                };
                var1.getStateForRouteNamesChange = var6;
                var6 = function(arg0, arg1) { // Original name: getStateForRouteFocus, environment: var5
                    _fun17015: for (var _fun17015_ip = 0;;) switch (_fun17015_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = arg1;
                            var _closure3_slot0 = var1;
                            var2 = var6.routes;
                            var1 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var1.bind(var2)(var0);
                            var1 = -1;
                            var0 = var6;
                            if (!(var1 !== var5)) {
                                _fun17015_ip = 89;
                                continue _fun17015
                            }
                        case 47:
                            var1 = var6.index;
                            var0 = var6;
                            if (!(var5 !== var1)) {
                                _fun17015_ip = 89;
                                continue _fun17015
                            }
                        case 59:
                            var4 = _closure1_slot5;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot0;
                            var11 = undefined;
                            var10 = var6;
                            var9 = var5;
                            var0 = var11[var4](var10, var9, var8, var7, var6);
                        case 89:
                            return var0;
                    }
                };
                var1.getStateForRouteFocus = var6;
                var6 = function(arg0, arg1, arg2) { // Original name: getStateForAction, environment: var5
                    _fun17017: for (var _fun17017_ip = 0;;) switch (_fun17017_ip) {
                        case 0:
                            var7 = arg0;
                            var0 = arg1;
                            var2 = arg2;
                            var _closure3_slot0 = var0;
                            var3 = var2.routeParamList;
                            var _closure3_slot1 = var3;
                            var2 = var2.routeGetIdList;
                            var _closure3_slot2 = var2;
                            var3 = var0.type;
                            var2 = 'JUMP_TO';
                            if (!(var2 !== var3)) {
                                _fun17017_ip = 264;
                                continue _fun17017
                            }
                        case 53:
                            var2 = 'NAVIGATE';
                            if (!(var2 !== var3)) {
                                _fun17017_ip = 264;
                                continue _fun17017
                            }
                        case 66:
                            var2 = 'GO_BACK';
                            if (!(var2 !== var3)) {
                                _fun17017_ip = 114;
                                continue _fun17017
                            }
                        case 76:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 0;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getStateForAction;
                            var2 = var2.bind(var3)(var7, var0);
                            return var2;
                        case 114:
                            var2 = var7.history;
                            var3 = var2.length;
                            var2 = 1;
                            if (!(var2 !== var3)) {
                                _fun17017_ip = 260;
                                continue _fun17017
                            }
                        case 135:
                            var3 = var7.history;
                            var2 = var7.history;
                            var4 = var2.length;
                            var2 = 2;
                            var2 = var4 - var2;
                            var2 = var3[var2];
                            var2 = var2.key;
                            var _closure3_slot4 = var2;
                            var4 = var7.routes;
                            var3 = var4.findIndex;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure3_slot4;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            var11 = -1;
                            var2 = null;
                            if (!(var11 !== var3)) {
                                _fun17017_ip = 258;
                                continue _fun17017
                            }
                        case 206:
                            var4 = global;
                            var6 = var4.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var10 = var7.history;
                            var9 = var10.slice;
                            var8 = 0;
                            var8 = var9.bind(var10)(var8, var11);
                            var4.history = var8;
                            var4.index = var3;
                            var3 = {};
                            var2 = var5.bind(var6)(var3, var7, var4);
                        case 258:
                            return var2;
                        case 260:
                            var2 = null;
                            return var2;
                        case 264:
                            var2 = -1;
                            var _closure3_slot3 = var2;
                            var4 = var0.type;
                            var3 = 'NAVIGATE';
                            if (!(var3 === var4)) {
                                _fun17017_ip = 303;
                                continue _fun17017
                            }
                        case 289:
                            var0 = var0.payload;
                            var0 = var0.key;
                            if (var0) {
                                _fun17017_ip = 327;
                                continue _fun17017
                            }
                        case 303:
                            var4 = var7.routes;
                            var3 = var4.findIndex;
                            var0 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.name;
                                var0 = _closure3_slot0;
                                var0 = var0.payload;
                                var0 = var0.name;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var3.bind(var4)(var0);
                            _fun17017_ip = 349;
                            continue _fun17017;
                        case 327:
                            var4 = var7.routes;
                            var3 = var4.findIndex;
                            var0 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure3_slot0;
                                var0 = var0.payload;
                                var0 = var0.key;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var3.bind(var4)(var0);
                        case 349:
                            _closure3_slot3 = var6;
                            var0 = null;
                            if (!(var2 !== var6)) {
                                _fun17017_ip = 436;
                                continue _fun17017
                            }
                        case 359:
                            var5 = _closure1_slot5;
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var9 = var7.routes;
                            var8 = var9.map;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun17020: for (var _fun17020_ip = 0;;) switch (_fun17020_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure3_slot3;
                                        var2 = arg1;
                                        if (!(var2 === var3)) {
                                            _fun17020_ip = 535;
                                            continue _fun17020
                                        }
                                    case 20:
                                        var3 = _closure3_slot2;
                                        var2 = var0.name;
                                        var7 = var3[var2];
                                        var4 = null;
                                        var2 = var4 == var7;
                                        var6 = undefined;
                                        var3 = undefined;
                                        if (var2) {
                                            _fun17020_ip = 64;
                                            continue _fun17020
                                        }
                                    case 46:
                                        var2 = {};
                                        var5 = var0.params;
                                        var2.params = var5;
                                        var3 = var7.bind(var6)(var2);
                                    case 64:
                                        var5 = var4 == var7;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun17020_ip = 101;
                                            continue _fun17020
                                        }
                                    case 73:
                                        var5 = {};
                                        var8 = _closure3_slot0;
                                        var8 = var8.payload;
                                        var8 = var8.params;
                                        var5.params = var8;
                                        var2 = var7.bind(var6)(var5);
                                    case 101:
                                        var2 = var3 === var2;
                                        if (var2) {
                                            _fun17020_ip = 176;
                                            continue _fun17020
                                        }
                                    case 108:
                                        var9 = var0.name;
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var3 = 1;
                                        var3 = var7[var3];
                                        var5 = var5.bind(var6)(var3);
                                        var3 = var5.nanoid;
                                        var8 = var3.bind(var5)();
                                        var3 = global;
                                        var3 = var3.HermesInternal;
                                        var7 = var3.concat;
                                        var5 = '';
                                        var3 = '-';
                                        var7 = var7.bind(var5)(var9, var3, var8);
                                        _fun17020_ip = 181;
                                        continue _fun17020;
                                    case 176:
                                        var7 = var0.key;
                                    case 181:
                                        var3 = _closure3_slot0;
                                        var3 = var3.type;
                                        var5 = 'NAVIGATE';
                                        if (!(var5 === var3)) {
                                            _fun17020_ip = 222;
                                            continue _fun17020
                                        }
                                    case 200:
                                        var3 = _closure3_slot0;
                                        var3 = var3.payload;
                                        var3 = var3.merge;
                                        if (!var3) {
                                            _fun17020_ip = 222;
                                            continue _fun17020
                                        }
                                    case 219:
                                        if (var2) {
                                            _fun17020_ip = 310;
                                            continue _fun17020
                                        }
                                    case 222:
                                        var3 = _closure3_slot1;
                                        var2 = var0.name;
                                        var2 = var3[var2];
                                        if (!(var6 === var2)) {
                                            _fun17020_ip = 257;
                                            continue _fun17020
                                        }
                                    case 239:
                                        var2 = _closure3_slot0;
                                        var2 = var2.payload;
                                        var2 = var2.params;
                                        _fun17020_ip = 308;
                                        continue _fun17020;
                                    case 257:
                                        var3 = global;
                                        var11 = var3.Object;
                                        var10 = var11.assign;
                                        var8 = _closure3_slot1;
                                        var3 = var0.name;
                                        var9 = var8[var3];
                                        var3 = _closure3_slot0;
                                        var3 = var3.payload;
                                        var8 = var3.params;
                                        var3 = {};
                                        var2 = var10.bind(var11)(var3, var9, var8);
                                    case 308:
                                        _fun17020_ip = 415;
                                        continue _fun17020;
                                    case 310:
                                        var3 = _closure3_slot0;
                                        var3 = var3.payload;
                                        var3 = var3.params;
                                        if (!(var6 === var3)) {
                                            _fun17020_ip = 355;
                                            continue _fun17020
                                        }
                                    case 330:
                                        var8 = _closure3_slot1;
                                        var3 = var0.name;
                                        var3 = var8[var3];
                                        if (!(var6 === var3)) {
                                            _fun17020_ip = 355;
                                            continue _fun17020
                                        }
                                    case 347:
                                        var3 = var0.params;
                                        _fun17020_ip = 412;
                                        continue _fun17020;
                                    case 355:
                                        var6 = global;
                                        var12 = var6.Object;
                                        var11 = var12.assign;
                                        var8 = _closure3_slot1;
                                        var6 = var0.name;
                                        var15 = var8[var6];
                                        var14 = var0.params;
                                        var6 = _closure3_slot0;
                                        var6 = var6.payload;
                                        var13 = var6.params;
                                        var16 = {};
                                        var17 = var12;
                                        var3 = var17[var11](var16, var15, var14, var13, var12);
                                    case 412:
                                        var2 = var3;
                                    case 415:
                                        var3 = _closure3_slot0;
                                        var3 = var3.type;
                                        if (!(var5 === var3)) {
                                            _fun17020_ip = 448;
                                            continue _fun17020
                                        }
                                    case 428:
                                        var3 = _closure3_slot0;
                                        var3 = var3.payload;
                                        var3 = var3.path;
                                        if (!(var4 == var3)) {
                                            _fun17020_ip = 456;
                                            continue _fun17020
                                        }
                                    case 448:
                                        var6 = var0.path;
                                        _fun17020_ip = 472;
                                        continue _fun17020;
                                    case 456:
                                        var1 = _closure3_slot0;
                                        var1 = var1.payload;
                                        var6 = var1.path;
                                    case 472:
                                        var1 = var0.params;
                                        if (!(var2 === var1)) {
                                            _fun17020_ip = 495;
                                            continue _fun17020
                                        }
                                    case 482:
                                        var3 = var0.path;
                                        var1 = var0;
                                        if (!(var6 !== var3)) {
                                            _fun17020_ip = 533;
                                            continue _fun17020
                                        }
                                    case 495:
                                        var3 = global;
                                        var5 = var3.Object;
                                        var4 = var5.assign;
                                        var3 = {};
                                        var3.key = var7;
                                        var3.path = var6;
                                        var3.params = var2;
                                        var2 = {};
                                        var1 = var4.bind(var5)(var2, var0, var3);
                                    case 533:
                                        return var1;
                                    case 535:
                                        return var0;
                                }
                            };
                            var1 = var8.bind(var9)(var1);
                            var2.routes = var1;
                            var1 = {};
                            var15 = var3.bind(var4)(var1, var7, var2);
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot0;
                            var16 = undefined;
                            var14 = var6;
                            var0 = var16[var5](var15, var14, var13, var12, var11);
                        case 436:
                            return var0;
                    }
                };
                var1.getStateForAction = var6;
                var5 = function(arg0) { // Original name: shouldActionChangeFocus, environment: var5
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'NAVIGATE';
                    var0 = var0 === var1;
                    return var0;
                };
                var1.shouldActionChangeFocus = var5;
                var0 = _closure1_slot3;
                var1.actionCreators = var0;
                var0 = {};
                var0 = var3.bind(var4)(var0, var2, var1);
                return var0;
        }
    };
    var1.default = var2;
    var1.TabActions = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1477, 1478]);