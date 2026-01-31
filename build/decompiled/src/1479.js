// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = ['defaultStatus'];
    var _closure1_slot3 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var7 = var1.Object;
    var6 = var7.assign;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var5 = var1.TabActions;
    var4 = {};
    var1 = function() {
        var0 = {};
        var1 = 'OPEN_DRAWER';
        var0.type = var1;
        return var0;
    };
    var4.openDrawer = var1;
    var1 = function() {
        var0 = {};
        var1 = 'CLOSE_DRAWER';
        var0.type = var1;
        return var0;
    };
    var4.closeDrawer = var1;
    var1 = function() {
        var0 = {};
        var1 = 'TOGGLE_DRAWER';
        var0.type = var1;
        return var0;
    };
    var4.toggleDrawer = var1;
    var1 = {};
    var1 = var6.bind(var7)(var1, var5, var4);
    var _closure1_slot6 = var1;
    var3 = function arg0() {
        _fun16987: for (var _fun16987_ip = 0;;) switch (_fun16987_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.defaultStatus;
                var0 = 'closed';
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun16987_ip = 24;
                    continue _fun16987
                }
            case 21:
                var0 = var1;
            case 24:
                var _closure2_slot0 = var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var2 = var2.bind(var3)(var4, var1);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var4 = var1.bind(var3)(var2);
                var _closure2_slot1 = var4;
                var1 = function arg0() {
                    _fun16988: for (var _fun16988_ip = 0;;) switch (_fun16988_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Boolean;
                            var0 = arg0;
                            var5 = var0.history;
                            var0 = null;
                            var3 = var0 == var5;
                            var1 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun16988_ip = 48;
                                continue _fun16988
                            }
                        case 30:
                            var4 = var5.some;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = 'drawer';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var0 = var4.bind(var5)(var3);
                        case 48:
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var _closure2_slot2 = var1;
                var1 = function arg0() {
                    _fun16990: for (var _fun16990_ip = 0;;) switch (_fun16990_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = _closure2_slot2;
                            var10 = undefined;
                            var2 = var0.bind(var10)(var5);
                            var0 = var5;
                            if (var2) {
                                _fun16990_ip = 123;
                                continue _fun16990
                            }
                        case 23:
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var8 = new Array(0);
                            var7 = var8.concat;
                            var9 = _closure1_slot4;
                            var6 = var5.history;
                            var6 = var9.bind(var10)(var6);
                            var9 = {};
                            var10 = 'drawer';
                            var9.type = var10;
                            var10 = _closure2_slot0;
                            var1 = 'open';
                            if (!(var1 === var10)) {
                                _fun16990_ip = 91;
                                continue _fun16990
                            }
                        case 87:
                            var1 = 'closed';
                        case 91:
                            var9.status = var1;
                            var1 = new Array(1);
                            var1[0] = var9;
                            var1 = var7.bind(var8)(var6, var1);
                            var2.history = var1;
                            var1 = {};
                            var0 = var3.bind(var4)(var1, var5, var2);
                        case 123:
                            return var0;
                    }
                };
                var _closure2_slot3 = var1;
                var1 = function arg0() {
                    _fun16991: for (var _fun16991_ip = 0;;) switch (_fun16991_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var5);
                            var0 = var5;
                            if (!var1) {
                                _fun16991_ip = 75;
                                continue _fun16991
                            }
                        case 23:
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var7 = var5.history;
                            var6 = var7.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = 'drawer';
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var1 = var6.bind(var7)(var1);
                            var2.history = var1;
                            var1 = {};
                            var0 = var3.bind(var4)(var1, var5, var2);
                        case 75:
                            return var0;
                    }
                };
                var _closure2_slot4 = var1;
                var1 = function arg0() {
                    _fun16993: for (var _fun16993_ip = 0;;) switch (_fun16993_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var0 = 'open';
                            if (!(var0 !== var2)) {
                                _fun16993_ip = 31;
                                continue _fun16993
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3);
                            _fun16993_ip = 42;
                            continue _fun16993;
                        case 31:
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 42:
                            return var0;
                    }
                };
                var _closure2_slot5 = var1;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var6 = 'drawer';
                var1.type = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var6 = var0.routeNames;
                    var4 = var0.routeParamList;
                    var3 = var0.routeGetIdList;
                    var2 = _closure2_slot1;
                    var1 = var2.getInitialState;
                    var0 = {};
                    var0.routeNames = var6;
                    var0.routeParamList = var4;
                    var0.routeGetIdList = var3;
                    var4 = var1.bind(var2)(var0);
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.assign;
                    var1 = {
                        'default': null,
                        'stale': false,
                        'type': 'drawer'
                    };
                    var5 = _closure2_slot0;
                    var1.default = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 3;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.nanoid;
                    var6 = var5.bind(var6)();
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'drawer-';
                    var0 = var5.bind(var0)(var6);
                    var1.key = var0;
                    var0 = {};
                    var0 = var2.bind(var3)(var0, var4, var1);
                    return var0;
                };
                var1.getInitialState = var6;
                var6 = function arg0, arg1() {
                    _fun16995: for (var _fun16995_ip = 0;;) switch (_fun16995_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var7 = var1.routeNames;
                            var5 = var1.routeParamList;
                            var4 = var1.routeGetIdList;
                            var2 = var0.stale;
                            var1 = false;
                            if (!(var1 !== var2)) {
                                _fun16995_ip = 211;
                                continue _fun16995
                            }
                        case 39:
                            var3 = _closure2_slot1;
                            var2 = var3.getRehydratedState;
                            var1 = {};
                            var1.routeNames = var7;
                            var1.routeParamList = var5;
                            var1.routeGetIdList = var4;
                            var2 = var2.bind(var3)(var0, var1);
                            var1 = _closure2_slot2;
                            var8 = undefined;
                            var1 = var1.bind(var8)(var0);
                            var5 = var2;
                            if (!var1) {
                                _fun16995_ip = 110;
                                continue _fun16995
                            }
                        case 92:
                            var1 = _closure2_slot4;
                            var2 = var1.bind(var8)(var2);
                            var1 = _closure2_slot3;
                            var5 = var1.bind(var8)(var2);
                        case 110:
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var2.default = var6;
                            var6 = 'drawer';
                            var2.type = var6;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 3;
                            var6 = var9[var6];
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.nanoid;
                            var7 = var6.bind(var7)();
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var1 = 'drawer-';
                            var1 = var6.bind(var1)(var7);
                            var2.key = var1;
                            var1 = {};
                            var1 = var3.bind(var4)(var1, var5, var2);
                            return var1;
                        case 211:
                            return var0;
                    }
                };
                var1.getRehydratedState = var6;
                var6 = function arg0, arg1() {
                    var4 = _closure2_slot1;
                    var3 = var4.getStateForRouteFocus;
                    var2 = arg0;
                    var1 = arg1;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var1.getStateForRouteFocus = var6;
                var5 = function arg0, arg1, arg2() {
                    _fun16997: for (var _fun16997_ip = 0;;) switch (_fun16997_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = arg1;
                            var4 = arg2;
                            var1 = var5.type;
                            var0 = 'OPEN_DRAWER';
                            if (!(var0 !== var1)) {
                                _fun16997_ip = 266;
                                continue _fun16997
                            }
                        case 27:
                            var0 = 'CLOSE_DRAWER';
                            if (!(var0 !== var1)) {
                                _fun16997_ip = 250;
                                continue _fun16997
                            }
                        case 40:
                            var0 = 'TOGGLE_DRAWER';
                            if (!(var0 !== var1)) {
                                _fun16997_ip = 211;
                                continue _fun16997
                            }
                        case 53:
                            var0 = 'JUMP_TO';
                            if (!(var0 !== var1)) {
                                _fun16997_ip = 152;
                                continue _fun16997
                            }
                        case 63:
                            var0 = 'NAVIGATE';
                            if (!(var0 !== var1)) {
                                _fun16997_ip = 152;
                                continue _fun16997
                            }
                        case 73:
                            var0 = 'GO_BACK';
                            if (!(var0 !== var1)) {
                                _fun16997_ip = 105;
                                continue _fun16997
                            }
                        case 83:
                            var1 = _closure2_slot1;
                            var0 = var1.getStateForAction;
                            var0 = var0.bind(var1)(var3, var5, var4);
                            return var0;
                        case 105:
                            var0 = _closure2_slot2;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun16997_ip = 141;
                                continue _fun16997
                            }
                        case 122:
                            var6 = _closure2_slot1;
                            var0 = var6.getStateForAction;
                            var0 = var0.bind(var6)(var3, var5, var4);
                            _fun16997_ip = 150;
                            continue _fun16997;
                        case 141:
                            var1 = _closure2_slot4;
                            var0 = var1.bind(var2)(var3);
                        case 150:
                            return var0;
                        case 152:
                            var2 = _closure2_slot1;
                            var0 = var2.getStateForAction;
                            var4 = var0.bind(var2)(var3, var5, var4);
                            var2 = null;
                            var0 = var4;
                            if (!(var2 != var4)) {
                                _fun16997_ip = 209;
                                continue _fun16997
                            }
                        case 181:
                            var5 = var4.index;
                            var2 = var3.index;
                            var0 = var4;
                            if (!(var5 !== var2)) {
                                _fun16997_ip = 209;
                                continue _fun16997
                            }
                        case 198:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var4);
                        case 209:
                            return var0;
                        case 211:
                            var0 = _closure2_slot2;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun16997_ip = 239;
                                continue _fun16997
                            }
                        case 228:
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var2)(var3);
                            _fun16997_ip = 248;
                            continue _fun16997;
                        case 239:
                            var1 = _closure2_slot4;
                            var0 = var1.bind(var2)(var3);
                        case 248:
                            return var0;
                        case 250:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var3);
                            return var0;
                        case 266:
                            var2 = _closure2_slot0;
                            var0 = 'open';
                            if (!(var0 !== var2)) {
                                _fun16997_ip = 294;
                                continue _fun16997
                            }
                        case 281:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3);
                            _fun16997_ip = 305;
                            continue _fun16997;
                        case 294:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 305:
                            return var0;
                    }
                };
                var1.getStateForAction = var5;
                var0 = _closure1_slot6;
                var1.actionCreators = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.default = var3;
    var2.DrawerActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 29, 1480, 1478]);