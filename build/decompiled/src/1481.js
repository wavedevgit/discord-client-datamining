// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var1 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var1;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = {};
    var4 = function(arg0, arg1) { // Original name: replace, environment: var3
        var0 = {};
        var1 = 'REPLACE';
        var0.type = var1;
        var1 = {};
        var2 = arg0;
        var1.name = var2;
        var2 = arg1;
        var1.params = var2;
        var0.payload = var1;
        return var0;
    };
    var1.replace = var4;
    var4 = function(arg0, arg1) { // Original name: push, environment: var3
        var0 = {};
        var1 = 'PUSH';
        var0.type = var1;
        var1 = {};
        var2 = arg0;
        var1.name = var2;
        var2 = arg1;
        var1.params = var2;
        var0.payload = var1;
        return var0;
    };
    var1.push = var4;
    var4 = function() { // Original name: pop, environment: var3
        _fun17026: for (var _fun17026_ip = 0;;) switch (_fun17026_ip) {
            case 0:
                var6 = undefined;
                var4 = undefined;
                var0 = {};
                var1 = 'POP';
                var0.type = var1;
                var1 = {};
                var2 = arguments.length;
                var3 = 0;
                var5 = var2 > var3;
                var7 = 1;
                var2 = var7;
                if (!var5) {
                    _fun17026_ip = 49;
                    continue _fun17026
                }
            case 34:
                var5 = arguments[var3];
                var2 = var7;
                if (!(var6 !== var5)) {
                    _fun17026_ip = 49;
                    continue _fun17026
                }
            case 45:
                var2 = arguments[var3];
            case 49:
                var1.count = var2;
                var0.payload = var1;
                return var0;
        }
    };
    var1.pop = var4;
    var4 = function() { // Original name: popToTop, environment: var3
        var0 = {};
        var1 = 'POP_TO_TOP';
        var0.type = var1;
        return var0;
    };
    var1.popToTop = var4;
    var _closure1_slot4 = var1;
    var3 = function(arg0) { // Original name: StackRouter, environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var5 = var0.Object;
        var4 = var5.assign;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var2 = {};
        var6 = 'stack';
        var2.type = var6;
        var6 = function(arg0) { // Original name: getInitialState, environment: var1
            _fun17029: for (var _fun17029_ip = 0;;) switch (_fun17029_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.routeNames;
                    var3 = var0.routeParamList;
                    var1 = _closure2_slot0;
                    var1 = var1.initialRouteName;
                    var7 = undefined;
                    if (!(var7 !== var1)) {
                        _fun17029_ip = 57;
                        continue _fun17029
                    }
                case 34:
                    var4 = var2.includes;
                    var1 = _closure2_slot0;
                    var1 = var1.initialRouteName;
                    var1 = var4.bind(var2)(var1);
                    if (var1) {
                        _fun17029_ip = 65;
                        continue _fun17029
                    }
                case 57:
                    var1 = 0;
                    var1 = var2[var1];
                    _fun17029_ip = 75;
                    continue _fun17029;
                case 65:
                    var0 = _closure2_slot0;
                    var1 = var0.initialRouteName;
                case 75:
                    var0 = {
                        'stale': false,
                        'type': 'stack',
                        'key': null,
                        'index': 0
                    };
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var4 = var8[var5];
                    var9 = var6.bind(var7)(var4);
                    var4 = var9.nanoid;
                    var11 = var4.bind(var9)();
                    var4 = global;
                    var9 = var4.HermesInternal;
                    var10 = var9.concat;
                    var9 = 'stack-';
                    var9 = var10.bind(var9)(var11);
                    var0.key = var9;
                    var0.routeNames = var2;
                    var2 = {};
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.nanoid;
                    var7 = var5.bind(var6)();
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var5 = '';
                    var4 = '-';
                    var4 = var6.bind(var5)(var1, var4, var7);
                    var2.key = var4;
                    var2.name = var1;
                    var1 = var3[var1];
                    var2.params = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.routes = var1;
                    return var0;
            }
        };
        var2.getInitialState = var6;
        var6 = function(arg0, arg1) { // Original name: getRehydratedState, environment: var1
            _fun17030: for (var _fun17030_ip = 0;;) switch (_fun17030_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var3 = var2.routeNames;
                    var _closure3_slot0 = var3;
                    var6 = var2.routeParamList;
                    var _closure3_slot1 = var6;
                    var4 = var0.stale;
                    var2 = false;
                    if (!(var2 !== var4)) {
                        _fun17030_ip = 319;
                        continue _fun17030
                    }
                case 43:
                    var5 = var0.routes;
                    var4 = var5.filter;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.name;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun17032: for (var _fun17032_ip = 0;;) switch (_fun17032_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = global;
                                var3 = var6.Object;
                                var2 = var3.assign;
                                var1 = {};
                                var0 = var4.key;
                                if (var0) {
                                    _fun17032_ip = 92;
                                    continue _fun17032
                                }
                            case 26:
                                var10 = var4.name;
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 2;
                                var7 = var7[var5];
                                var5 = undefined;
                                var7 = var8.bind(var5)(var7);
                                var5 = var7.nanoid;
                                var9 = var5.bind(var7)();
                                var5 = var6.HermesInternal;
                                var8 = var5.concat;
                                var7 = '';
                                var5 = '-';
                                var0 = var8.bind(var7)(var10, var5, var9);
                            case 92:
                                var1.key = var0;
                                var7 = _closure3_slot1;
                                var0 = var4.name;
                                var7 = var7[var0];
                                var0 = undefined;
                                if (!(var0 === var7)) {
                                    _fun17032_ip = 126;
                                    continue _fun17032
                                }
                            case 118:
                                var0 = var4.params;
                                _fun17032_ip = 165;
                                continue _fun17032;
                            case 126:
                                var9 = var6.Object;
                                var8 = var9.assign;
                                var6 = _closure3_slot1;
                                var5 = var4.name;
                                var7 = var6[var5];
                                var6 = var4.params;
                                var5 = {};
                                var0 = var8.bind(var9)(var5, var7, var6);
                            case 165:
                                var1.params = var0;
                                var0 = {};
                                var0 = var2.bind(var3)(var0, var4, var1);
                                return var0;
                        }
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.length;
                    var4 = 0;
                    if (!(var4 === var1)) {
                        _fun17030_ip = 218;
                        continue _fun17030
                    }
                case 93:
                    var5 = _closure2_slot0;
                    var5 = var5.initialRouteName;
                    var9 = undefined;
                    if (!(var9 === var5)) {
                        _fun17030_ip = 118;
                        continue _fun17030
                    }
                case 112:
                    var5 = var3[var4];
                    _fun17030_ip = 128;
                    continue _fun17030;
                case 118:
                    var1 = _closure2_slot0;
                    var5 = var1.initialRouteName;
                case 128:
                    var4 = var2.push;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 2;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.nanoid;
                    var10 = var7.bind(var8)();
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '';
                    var7 = '-';
                    var7 = var9.bind(var8)(var5, var7, var10);
                    var1.key = var7;
                    var1.name = var5;
                    var5 = var6[var5];
                    var1.params = var5;
                    var1 = var4.bind(var2)(var1);
                case 218:
                    var1 = {
                        'stale': false,
                        'type': 'stack'
                    };
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 2;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.nanoid;
                    var6 = var4.bind(var5)();
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'stack-';
                    var4 = var5.bind(var4)(var6);
                    var1.key = var4;
                    var5 = var2.length;
                    var4 = 1;
                    var4 = var5 - var4;
                    var1.index = var4;
                    var1.routeNames = var3;
                    var1.routes = var2;
                    return var1;
                case 319:
                    return var0;
            }
        };
        var2.getRehydratedState = var6;
        var6 = function(arg0, arg1) { // Original name: getStateForRouteNamesChange, environment: var1
            _fun17033: for (var _fun17033_ip = 0;;) switch (_fun17033_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var6 = var1.routeNames;
                    var _closure3_slot0 = var6;
                    var5 = var1.routeParamList;
                    var1 = var1.routeKeyChanges;
                    var _closure3_slot1 = var1;
                    var2 = var4.routes;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun17034: for (var _fun17034_ip = 0;;) switch (_fun17034_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure3_slot0;
                                var3 = var4.includes;
                                var0 = var1.name;
                                var0 = var3.bind(var4)(var0);
                                if (!var0) {
                                    _fun17034_ip = 50;
                                    continue _fun17034
                                }
                            case 28:
                                var3 = _closure3_slot1;
                                var2 = var3.includes;
                                var1 = var1.name;
                                var1 = var2.bind(var3)(var1);
                                var0 = !var1;
                            case 50:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var2 = 0;
                    if (!(var2 === var1)) {
                        _fun17033_ip = 217;
                        continue _fun17033
                    }
                case 69:
                    var3 = _closure2_slot0;
                    var3 = var3.initialRouteName;
                    var9 = undefined;
                    if (!(var9 !== var3)) {
                        _fun17033_ip = 111;
                        continue _fun17033
                    }
                case 88:
                    var7 = var6.includes;
                    var3 = _closure2_slot0;
                    var3 = var3.initialRouteName;
                    var3 = var7.bind(var6)(var3);
                    if (var3) {
                        _fun17033_ip = 117;
                        continue _fun17033
                    }
                case 111:
                    var3 = var6[var2];
                    _fun17033_ip = 127;
                    continue _fun17033;
                case 117:
                    var1 = _closure2_slot0;
                    var3 = var1.initialRouteName;
                case 127:
                    var2 = var0.push;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 2;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.nanoid;
                    var10 = var7.bind(var8)();
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '';
                    var7 = '-';
                    var7 = var9.bind(var8)(var3, var7, var10);
                    var1.key = var7;
                    var1.name = var3;
                    var3 = var5[var3];
                    var1.params = var3;
                    var1 = var2.bind(var0)(var1);
                case 217:
                    var5 = global;
                    var3 = var5.Object;
                    var2 = var3.assign;
                    var1 = {};
                    var1.routeNames = var6;
                    var1.routes = var0;
                    var7 = var5.Math;
                    var6 = var7.min;
                    var5 = var4.index;
                    var8 = var0.length;
                    var0 = 1;
                    var0 = var8 - var0;
                    var0 = var6.bind(var7)(var5, var0);
                    var1.index = var0;
                    var0 = {};
                    var0 = var2.bind(var3)(var0, var4, var1);
                    return var0;
            }
        };
        var2.getStateForRouteNamesChange = var6;
        var6 = function(arg0, arg1) { // Original name: getStateForRouteFocus, environment: var1
            _fun17035: for (var _fun17035_ip = 0;;) switch (_fun17035_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var2 = var5.routes;
                    var1 = var2.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var1.bind(var2)(var0);
                    var1 = -1;
                    var0 = var5;
                    if (!(var1 !== var6)) {
                        _fun17035_ip = 118;
                        continue _fun17035
                    }
                case 47:
                    var1 = var5.index;
                    var0 = var5;
                    if (!(var6 !== var1)) {
                        _fun17035_ip = 118;
                        continue _fun17035
                    }
                case 59:
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.assign;
                    var2 = {};
                    var2.index = var6;
                    var8 = var5.routes;
                    var7 = var8.slice;
                    var1 = 1;
                    var6 = var6 + var1;
                    var1 = 0;
                    var1 = var7.bind(var8)(var1, var6);
                    var2.routes = var1;
                    var1 = {};
                    var0 = var3.bind(var4)(var1, var5, var2);
                case 118:
                    return var0;
            }
        };
        var2.getStateForRouteFocus = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: getStateForAction, environment: var1
            _fun17037: for (var _fun17037_ip = 0;;) switch (_fun17037_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var _closure3_slot0 = var0;
                    var12 = var2.routeParamList;
                    var _closure3_slot1 = var12;
                    var4 = var0.type;
                    var3 = 'REPLACE';
                    if (!(var3 !== var4)) {
                        _fun17037_ip = 2197;
                        continue _fun17037
                    }
                case 43:
                    var3 = 'PUSH';
                    if (!(var3 !== var4)) {
                        _fun17037_ip = 1650;
                        continue _fun17037
                    }
                case 54:
                    var7 = 'POP';
                    if (!(var7 !== var4)) {
                        _fun17037_ip = 1457;
                        continue _fun17037
                    }
                case 65:
                    var3 = 'POP_TO_TOP';
                    if (!(var3 !== var4)) {
                        _fun17037_ip = 1399;
                        continue _fun17037
                    }
                case 78:
                    var3 = 'NAVIGATE';
                    if (!(var3 !== var4)) {
                        _fun17037_ip = 219;
                        continue _fun17037
                    }
                case 91:
                    var3 = 'GO_BACK';
                    if (!(var3 !== var4)) {
                        _fun17037_ip = 140;
                        continue _fun17037
                    }
                case 101:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.getStateForAction;
                    var3 = var3.bind(var4)(var5, var0);
                    return var3;
                case 140:
                    var4 = var5.index;
                    var3 = 0;
                    var4 = var4 > var3;
                    var3 = null;
                    if (!var4) {
                        _fun17037_ip = 217;
                        continue _fun17037
                    }
                case 156:
                    var8 = _closure2_slot1;
                    var6 = var8.getStateForAction;
                    var4 = {};
                    var4.type = var7;
                    var9 = {};
                    var10 = 1;
                    var9.count = var10;
                    var4.payload = var9;
                    var9 = var0.target;
                    var4.target = var9;
                    var9 = var0.source;
                    var4.source = var9;
                    var3 = var6.bind(var8)(var5, var4, var2);
                case 217:
                    return var3;
                case 219:
                    var3 = var0.payload;
                    var3 = var3.name;
                    var11 = undefined;
                    if (!(var11 !== var3)) {
                        _fun17037_ip = 270;
                        continue _fun17037
                    }
                case 236:
                    var6 = var5.routeNames;
                    var4 = var6.includes;
                    var3 = var0.payload;
                    var3 = var3.name;
                    var3 = var4.bind(var6)(var3);
                    if (var3) {
                        _fun17037_ip = 270;
                        continue _fun17037
                    }
                case 266:
                    var3 = null;
                    return var3;
                case 270:
                    var3 = var0.payload;
                    var3 = var3.key;
                    if (var3) {
                        _fun17037_ip = 302;
                        continue _fun17037
                    }
                case 284:
                    var3 = var0.payload;
                    var3 = var3.name;
                    if (var3) {
                        _fun17037_ip = 302;
                        continue _fun17037
                    }
                case 298:
                    var3 = null;
                    return var3;
                case 302:
                    var3 = var0.payload;
                    var3 = var3.key;
                    var8 = undefined;
                    if (!(var11 === var3)) {
                        _fun17037_ip = 357;
                        continue _fun17037
                    }
                case 319:
                    var3 = var0.payload;
                    var3 = var3.name;
                    var8 = undefined;
                    if (!(var11 !== var3)) {
                        _fun17037_ip = 357;
                        continue _fun17037
                    }
                case 336:
                    var4 = var2.routeGetIdList;
                    var3 = var0.payload;
                    var3 = var3.name;
                    var8 = var4[var3];
                case 357:
                    var _closure3_slot9 = var8;
                    var3 = null;
                    var6 = var3 == var8;
                    var4 = undefined;
                    if (var6) {
                        _fun17037_ip = 396;
                        continue _fun17037
                    }
                case 372:
                    var6 = {};
                    var9 = var0.payload;
                    var9 = var9.params;
                    var6.params = var9;
                    var4 = var8.bind(var11)(var6);
                case 396:
                    var _closure3_slot10 = var4;
                    var8 = var5.routes;
                    if (var4) {
                        _fun17037_ip = 630;
                        continue _fun17037
                    }
                case 412:
                    var4 = var5.index;
                    var4 = var8[var4];
                    var6 = var4.name;
                    var4 = var0.payload;
                    var4 = var4.name;
                    if (!(var6 === var4)) {
                        _fun17037_ip = 459;
                        continue _fun17037
                    }
                case 441:
                    var4 = var0.payload;
                    var4 = var4.key;
                    if (!(var11 !== var4)) {
                        _fun17037_ip = 623;
                        continue _fun17037
                    }
                case 459:
                    var6 = var5.routes;
                    var4 = var5.index;
                    var4 = var6[var4];
                    var6 = var4.key;
                    var4 = var0.payload;
                    var4 = var4.key;
                    if (!(var6 !== var4)) {
                        _fun17037_ip = 623;
                        continue _fun17037
                    }
                case 497:
                    var4 = var5.routes;
                    var6 = var4.length;
                    var4 = 1;
                    var9 = var6 - var4;
                    var6 = -1;
                    var4 = 0;
                    var17 = var6;
                    if (!(var9 >= var4)) {
                        _fun17037_ip = 646;
                        continue _fun17037
                    }
                case 530:
                    var10 = var5.routes;
                    var10 = var10[var9];
                    var13 = var10.name;
                    var10 = var0.payload;
                    var10 = var10.name;
                    if (!(var13 === var10)) {
                        _fun17037_ip = 578;
                        continue _fun17037
                    }
                case 560:
                    var10 = var0.payload;
                    var10 = var10.key;
                    var17 = var9;
                    if (!(var11 !== var10)) {
                        _fun17037_ip = 646;
                        continue _fun17037
                    }
                case 578:
                    var10 = var5.routes;
                    var10 = var10[var9];
                    var13 = var10.key;
                    var10 = var0.payload;
                    var10 = var10.key;
                    var17 = var9;
                    if (!(var13 !== var10)) {
                        _fun17037_ip = 646;
                        continue _fun17037
                    }
                case 611:
                    var9 = var9 - 1;
                    var17 = var6;
                    if (var9 >= var4) {
                        _fun17037_ip = 530;
                        continue _fun17037
                    }
                case 621:
                    _fun17037_ip = 646;
                    continue _fun17037;
                case 623:
                    var17 = var5.index;
                    _fun17037_ip = 646;
                    continue _fun17037;
                case 630:
                    var6 = var8.findIndex;
                    var4 = function(arg0) { // Environment: var1
                        _fun17043: for (var _fun17043_ip = 0;;) switch (_fun17043_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = var6.name;
                                var0 = _closure3_slot0;
                                var0 = var0.payload;
                                var0 = var0.name;
                                var0 = var1 === var0;
                                if (!var0) {
                                    _fun17043_ip = 80;
                                    continue _fun17043
                                }
                            case 33:
                                var2 = _closure3_slot10;
                                var4 = _closure3_slot9;
                                var1 = null;
                                var4 = var1 == var4;
                                var5 = undefined;
                                var1 = undefined;
                                if (var4) {
                                    _fun17043_ip = 76;
                                    continue _fun17043
                                }
                            case 54:
                                var4 = _closure3_slot9;
                                var3 = {};
                                var6 = var6.params;
                                var3.params = var6;
                                var1 = var4.bind(var5)(var3);
                            case 76:
                                var0 = var2 === var1;
                            case 80:
                                return var0;
                        }
                    };
                    var17 = var6.bind(var8)(var4);
                case 646:
                    var4 = -1;
                    var4 = var4 === var17;
                    if (!var4) {
                        _fun17037_ip = 691;
                        continue _fun17037
                    }
                case 659:
                    var6 = var0.payload;
                    var6 = var6.key;
                    if (!var6) {
                        _fun17037_ip = 691;
                        continue _fun17037
                    }
                case 673:
                    var6 = var0.payload;
                    var6 = var6.name;
                    if (!(var11 !== var6)) {
                        _fun17037_ip = 1397;
                        continue _fun17037
                    }
                case 691:
                    if (!var4) {
                        _fun17037_ip = 712;
                        continue _fun17037
                    }
                case 694:
                    var4 = var0.payload;
                    var4 = var4.name;
                    if (!(var11 === var4)) {
                        _fun17037_ip = 1100;
                        continue _fun17037
                    }
                case 712:
                    var4 = var5.routes;
                    var19 = var4[var17];
                    var4 = var0.payload;
                    var4 = var4.merge;
                    if (var4) {
                        _fun17037_ip = 809;
                        continue _fun17037
                    }
                case 737:
                    var4 = var19.name;
                    var4 = var12[var4];
                    if (!(var11 === var4)) {
                        _fun17037_ip = 764;
                        continue _fun17037
                    }
                case 750:
                    var4 = var0.payload;
                    var4 = var4.params;
                    _fun17037_ip = 807;
                    continue _fun17037;
                case 764:
                    var6 = global;
                    var13 = var6.Object;
                    var10 = var13.assign;
                    var6 = var19.name;
                    var9 = var12[var6];
                    var6 = var0.payload;
                    var8 = var6.params;
                    var6 = {};
                    var4 = var10.bind(var13)(var6, var9, var8);
                case 807:
                    _fun17037_ip = 898;
                    continue _fun17037;
                case 809:
                    var6 = var0.payload;
                    var6 = var6.params;
                    if (!(var11 === var6)) {
                        _fun17037_ip = 846;
                        continue _fun17037
                    }
                case 825:
                    var6 = var19.name;
                    var6 = var12[var6];
                    if (!(var11 === var6)) {
                        _fun17037_ip = 846;
                        continue _fun17037
                    }
                case 838:
                    var6 = var19.params;
                    _fun17037_ip = 895;
                    continue _fun17037;
                case 846:
                    var8 = global;
                    var15 = var8.Object;
                    var14 = var15.assign;
                    var8 = var19.name;
                    var24 = var12[var8];
                    var23 = var19.params;
                    var8 = var0.payload;
                    var22 = var8.params;
                    var25 = {};
                    var26 = var15;
                    var6 = var26[var14](var25, var24, var23, var22, var21);
                case 895:
                    var4 = var6;
                case 898:
                    var16 = global;
                    var9 = var16.Object;
                    var8 = var9.assign;
                    var6 = {};
                    var6.index = var17;
                    var14 = new Array(0);
                    var13 = var14.concat;
                    var15 = _closure1_slot3;
                    var20 = var5.routes;
                    var18 = var20.slice;
                    var10 = 0;
                    var10 = var18.bind(var20)(var10, var17);
                    var10 = var15.bind(var11)(var10);
                    var15 = var19.params;
                    if (!(var4 === var15)) {
                        _fun17037_ip = 1016;
                        continue _fun17037
                    }
                case 967:
                    var15 = var0.payload;
                    var15 = var15.path;
                    if (!var15) {
                        _fun17037_ip = 1004;
                        continue _fun17037
                    }
                case 982:
                    var15 = var0.payload;
                    var18 = var15.path;
                    var15 = var19.path;
                    if (!(var18 === var15)) {
                        _fun17037_ip = 1016;
                        continue _fun17037
                    }
                case 1004:
                    var15 = var5.routes;
                    var15 = var15[var17];
                    _fun17037_ip = 1070;
                    continue _fun17037;
                case 1016:
                    var18 = var16.Object;
                    var17 = var18.assign;
                    var16 = {};
                    var20 = var0.payload;
                    var20 = var20.path;
                    if (!(var3 == var20)) {
                        _fun17037_ip = 1051;
                        continue _fun17037
                    }
                case 1045:
                    var20 = var19.path;
                case 1051:
                    var16.path = var20;
                    var16.params = var4;
                    var4 = {};
                    var15 = var17.bind(var18)(var4, var19, var16);
                case 1070:
                    var4 = new Array(1);
                    var4[0] = var15;
                    var4 = var13.bind(var14)(var10, var4);
                    var6.routes = var4;
                    var4 = {};
                    var4 = var8.bind(var9)(var4, var5, var6);
                    return var4;
                case 1100:
                    var9 = new Array(0);
                    var8 = var9.concat;
                    var6 = _closure1_slot3;
                    var4 = var5.routes;
                    var6 = var6.bind(var11)(var4);
                    var10 = {};
                    var4 = var0.payload;
                    var4 = var4.key;
                    if (!(var3 == var4)) {
                        _fun17037_ip = 1213;
                        continue _fun17037
                    }
                case 1144:
                    var14 = var0.payload;
                    var17 = var14.name;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 2;
                    var13 = var15[var13];
                    var14 = var14.bind(var11)(var13);
                    var13 = var14.nanoid;
                    var16 = var13.bind(var14)();
                    var13 = global;
                    var13 = var13.HermesInternal;
                    var15 = var13.concat;
                    var14 = '';
                    var13 = '-';
                    var4 = var15.bind(var14)(var17, var13, var16);
                case 1213:
                    var10.key = var4;
                    var4 = var0.payload;
                    var4 = var4.name;
                    var10.name = var4;
                    var4 = var0.payload;
                    var4 = var4.path;
                    var10.path = var4;
                    var4 = var0.payload;
                    var4 = var4.name;
                    var4 = var12[var4];
                    if (!(var11 === var4)) {
                        _fun17037_ip = 1282;
                        continue _fun17037
                    }
                case 1268:
                    var4 = var0.payload;
                    var4 = var4.params;
                    _fun17037_ip = 1331;
                    continue _fun17037;
                case 1282:
                    var11 = global;
                    var16 = var11.Object;
                    var15 = var16.assign;
                    var11 = var0.payload;
                    var11 = var11.name;
                    var14 = var12[var11];
                    var11 = var0.payload;
                    var13 = var11.params;
                    var11 = {};
                    var4 = var15.bind(var16)(var11, var14, var13);
                case 1331:
                    var10.params = var4;
                    var4 = new Array(1);
                    var4[0] = var10;
                    var4 = var8.bind(var9)(var6, var4);
                    var6 = global;
                    var9 = var6.Object;
                    var8 = var9.assign;
                    var6 = {};
                    var6.routes = var4;
                    var10 = var4.length;
                    var4 = 1;
                    var4 = var10 - var4;
                    var6.index = var4;
                    var4 = {};
                    var4 = var8.bind(var9)(var4, var5, var6);
                    return var4;
                case 1397:
                    return var3;
                case 1399:
                    var6 = _closure2_slot1;
                    var4 = var6.getStateForAction;
                    var3 = {};
                    var3.type = var7;
                    var7 = {};
                    var8 = var5.routes;
                    var9 = var8.length;
                    var8 = 1;
                    var8 = var9 - var8;
                    var7.count = var8;
                    var3.payload = var7;
                    var3 = var4.bind(var6)(var5, var3, var2);
                    return var3;
                case 1457:
                    var4 = var0.target;
                    var3 = var5.key;
                    if (!(var4 === var3)) {
                        _fun17037_ip = 1480;
                        continue _fun17037
                    }
                case 1472:
                    var3 = var0.source;
                    if (var3) {
                        _fun17037_ip = 1487;
                        continue _fun17037
                    }
                case 1480:
                    var3 = var5.index;
                    _fun17037_ip = 1509;
                    continue _fun17037;
                case 1487:
                    var7 = var5.routes;
                    var6 = var7.findIndex;
                    var4 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var0.source;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var6.bind(var7)(var4);
                case 1509:
                    var10 = 0;
                    if (!(!(var3 > var10))) {
                        _fun17037_ip = 1519;
                        continue _fun17037
                    }
                case 1515:
                    var4 = null;
                    return var4;
                case 1519:
                    var4 = global;
                    var8 = var4.Math;
                    var7 = var8.max;
                    var6 = var0.payload;
                    var6 = var6.count;
                    var6 = var3 - var6;
                    var9 = 1;
                    var6 = var6 + var9;
                    var8 = var7.bind(var8)(var6, var9);
                    var7 = var5.routes;
                    var6 = var7.slice;
                    var7 = var6.bind(var7)(var10, var8);
                    var6 = var7.concat;
                    var10 = var5.routes;
                    var8 = var10.slice;
                    var3 = var3 + var9;
                    var3 = var8.bind(var10)(var3);
                    var3 = var6.bind(var7)(var3);
                    var7 = var4.Object;
                    var6 = var7.assign;
                    var4 = {};
                    var8 = var3.length;
                    var8 = var8 - var9;
                    var4.index = var8;
                    var4.routes = var3;
                    var3 = {};
                    var3 = var6.bind(var7)(var3, var5, var4);
                    return var3;
                case 1650:
                    var6 = var5.routeNames;
                    var4 = var6.includes;
                    var3 = var0.payload;
                    var3 = var3.name;
                    var3 = var4.bind(var6)(var3);
                    if (var3) {
                        _fun17037_ip = 1684;
                        continue _fun17037
                    }
                case 1680:
                    var3 = null;
                    return var3;
                case 1684:
                    var3 = var2.routeGetIdList;
                    var2 = var0.payload;
                    var2 = var2.name;
                    var4 = var3[var2];
                    var _closure3_slot6 = var4;
                    var2 = null;
                    var3 = var2 == var4;
                    var13 = undefined;
                    var2 = undefined;
                    if (var3) {
                        _fun17037_ip = 1746;
                        continue _fun17037
                    }
                case 1722:
                    var3 = {};
                    var6 = var0.payload;
                    var6 = var6.params;
                    var3.params = var6;
                    var2 = var4.bind(var13)(var3);
                case 1746:
                    var _closure3_slot7 = var2;
                    var10 = undefined;
                    if (!var2) {
                        _fun17037_ip = 1776;
                        continue _fun17037
                    }
                case 1755:
                    var4 = var5.routes;
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var1
                        _fun17040: for (var _fun17040_ip = 0;;) switch (_fun17040_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = var6.name;
                                var0 = _closure3_slot0;
                                var0 = var0.payload;
                                var0 = var0.name;
                                var0 = var1 === var0;
                                if (!var0) {
                                    _fun17040_ip = 80;
                                    continue _fun17040
                                }
                            case 33:
                                var2 = _closure3_slot7;
                                var4 = _closure3_slot6;
                                var1 = null;
                                var4 = var1 == var4;
                                var5 = undefined;
                                var1 = undefined;
                                if (var4) {
                                    _fun17040_ip = 76;
                                    continue _fun17040
                                }
                            case 54:
                                var4 = _closure3_slot6;
                                var3 = {};
                                var6 = var6.params;
                                var3.params = var6;
                                var1 = var4.bind(var5)(var3);
                            case 76:
                                var0 = var2 === var1;
                            case 80:
                                return var0;
                        }
                    };
                    var10 = var3.bind(var4)(var2);
                case 1776:
                    var _closure3_slot8 = var10;
                    if (var10) {
                        _fun17037_ip = 2007;
                        continue _fun17037
                    }
                case 1786:
                    var6 = new Array(0);
                    var4 = var6.concat;
                    var7 = _closure1_slot3;
                    var3 = var5.routes;
                    var3 = var7.bind(var13)(var3);
                    var7 = {};
                    var8 = var0.payload;
                    var15 = var8.name;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var2 = var9[var2];
                    var8 = var8.bind(var13)(var2);
                    var2 = var8.nanoid;
                    var14 = var2.bind(var8)();
                    var8 = global;
                    var2 = var8.HermesInternal;
                    var11 = var2.concat;
                    var9 = '';
                    var2 = '-';
                    var2 = var11.bind(var9)(var15, var2, var14);
                    var7.key = var2;
                    var2 = var0.payload;
                    var2 = var2.name;
                    var7.name = var2;
                    var2 = var0.payload;
                    var2 = var2.name;
                    var2 = var12[var2];
                    if (!(var13 === var2)) {
                        _fun17037_ip = 1936;
                        continue _fun17037
                    }
                case 1922:
                    var2 = var0.payload;
                    var2 = var2.params;
                    _fun17037_ip = 1983;
                    continue _fun17037;
                case 1936:
                    var15 = var8.Object;
                    var14 = var15.assign;
                    var8 = var0.payload;
                    var8 = var8.name;
                    var11 = var12[var8];
                    var8 = var0.payload;
                    var9 = var8.params;
                    var8 = {};
                    var2 = var14.bind(var15)(var8, var11, var9);
                case 1983:
                    var7.params = var2;
                    var2 = new Array(1);
                    var2[0] = var7;
                    var2 = var4.bind(var6)(var3, var2);
                    _fun17037_ip = 2150;
                    continue _fun17037;
                case 2007:
                    var6 = var5.routes;
                    var4 = var6.filter;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot8;
                        var0 = var0.key;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var3 = var4.bind(var6)(var3);
                    var6 = var3.push;
                    var11 = global;
                    var9 = var11.Object;
                    var8 = var9.assign;
                    var7 = {};
                    var4 = var0.payload;
                    var4 = var4.name;
                    var4 = var12[var4];
                    if (!(var13 === var4)) {
                        _fun17037_ip = 2081;
                        continue _fun17037
                    }
                case 2067:
                    var4 = var0.payload;
                    var4 = var4.params;
                    _fun17037_ip = 2128;
                    continue _fun17037;
                case 2081:
                    var15 = var11.Object;
                    var14 = var15.assign;
                    var11 = var0.payload;
                    var11 = var11.name;
                    var13 = var12[var11];
                    var11 = var0.payload;
                    var12 = var11.params;
                    var11 = {};
                    var4 = var14.bind(var15)(var11, var13, var12);
                case 2128:
                    var7.params = var4;
                    var4 = {};
                    var4 = var8.bind(var9)(var4, var10, var7);
                    var4 = var6.bind(var3)(var4);
                    var2 = var3;
                case 2150:
                    var3 = global;
                    var6 = var3.Object;
                    var4 = var6.assign;
                    var3 = {};
                    var8 = var2.length;
                    var7 = 1;
                    var7 = var8 - var7;
                    var3.index = var7;
                    var3.routes = var2;
                    var2 = {};
                    var2 = var4.bind(var6)(var2, var5, var3);
                    return var2;
                case 2197:
                    var3 = var0.target;
                    var2 = var5.key;
                    if (!(var3 === var2)) {
                        _fun17037_ip = 2220;
                        continue _fun17037
                    }
                case 2212:
                    var2 = var0.source;
                    if (var2) {
                        _fun17037_ip = 2227;
                        continue _fun17037
                    }
                case 2220:
                    var3 = var5.index;
                    _fun17037_ip = 2249;
                    continue _fun17037;
                case 2227:
                    var6 = var5.routes;
                    var4 = var6.findIndex;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var0.source;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var4.bind(var6)(var2);
                case 2249:
                    var _closure3_slot2 = var3;
                    var2 = -1;
                    if (!(var2 !== var3)) {
                        _fun17037_ip = 2370;
                        continue _fun17037
                    }
                case 2263:
                    var0 = var0.payload;
                    var3 = var0.name;
                    var _closure3_slot3 = var3;
                    var2 = var0.key;
                    var _closure3_slot4 = var2;
                    var0 = var0.params;
                    var _closure3_slot5 = var0;
                    var2 = var5.routeNames;
                    var0 = var2.includes;
                    var2 = var0.bind(var2)(var3);
                    var0 = null;
                    if (!var2) {
                        _fun17037_ip = 2368;
                        continue _fun17037
                    }
                case 2318:
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.assign;
                    var2 = {};
                    var7 = var5.routes;
                    var6 = var7.map;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun17039: for (var _fun17039_ip = 0;;) switch (_fun17039_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot2;
                                var1 = arg1;
                                if (!(var1 === var2)) {
                                    _fun17039_ip = 183;
                                    continue _fun17039
                                }
                            case 20:
                                var1 = {};
                                var2 = _closure3_slot4;
                                var4 = undefined;
                                if (!(var4 === var2)) {
                                    _fun17039_ip = 99;
                                    continue _fun17039
                                }
                            case 32:
                                var8 = _closure3_slot3;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 2;
                                var2 = var6[var2];
                                var5 = var5.bind(var4)(var2);
                                var2 = var5.nanoid;
                                var7 = var2.bind(var5)();
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = '';
                                var2 = '-';
                                var2 = var6.bind(var5)(var8, var2, var7);
                                _fun17039_ip = 103;
                                continue _fun17039;
                            case 99:
                                var2 = _closure3_slot4;
                            case 103:
                                var1.key = var2;
                                var2 = _closure3_slot3;
                                var1.name = var2;
                                var5 = _closure3_slot1;
                                var2 = _closure3_slot3;
                                var2 = var5[var2];
                                if (!(var4 === var2)) {
                                    _fun17039_ip = 137;
                                    continue _fun17039
                                }
                            case 131:
                                var2 = _closure3_slot5;
                                _fun17039_ip = 175;
                                continue _fun17039;
                            case 137:
                                var4 = global;
                                var7 = var4.Object;
                                var6 = var7.assign;
                                var5 = _closure3_slot1;
                                var4 = _closure3_slot3;
                                var5 = var5[var4];
                                var4 = _closure3_slot5;
                                var3 = {};
                                var2 = var6.bind(var7)(var3, var5, var4);
                            case 175:
                                var1.params = var2;
                                var0 = var1;
                            case 183:
                                return var0;
                        }
                    };
                    var1 = var6.bind(var7)(var1);
                    var2.routes = var1;
                    var1 = {};
                    var0 = var3.bind(var4)(var1, var5, var2);
                case 2368:
                    return var0;
                case 2370:
                    var0 = null;
                    return var0;
            }
        };
        var2.getStateForAction = var6;
        var0 = _closure1_slot4;
        var2.actionCreators = var0;
        var0 = {};
        var0 = var4.bind(var5)(var0, var3, var2);
        var _closure2_slot1 = var0;
        return var0;
    };
    var2.default = var3;
    var2.StackActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 1477, 1478]);