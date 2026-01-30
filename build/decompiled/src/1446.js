// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16711: for (var _fun16711_ip = 0;;) switch (_fun16711_ip) {
        case 0:
            var15 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var14 = dependencyMap;
            var _closure1_slot0 = var10;
            var0 = metroImportAll;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var14;
            var7 = function(arg0) { // Original name: configure, environment: var9
                _fun16712: for (var _fun16712_ip = 0;;) switch (_fun16712_ip) {
                    case 0:
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = {};
                        var1 = arg0;
                        var1 = var5.bind(var6)(var3, var4, var1);
                        _closure1_slot7 = var1;
                        var1 = _closure1_slot8;
                        if (!var1) {
                            _fun16712_ip = 87;
                            continue _fun16712
                        }
                    case 61:
                        var3 = _closure1_slot8;
                        var1 = var3.tearDown;
                        var1 = var1.bind(var3)();
                        var1 = _closure1_slot9;
                        var1 = var1.bind(var0)();
                        _closure1_slot8 = var1;
                    case 87:
                        return var0;
                }
            };
            var _closure1_slot12 = var7;
            var6 = function(arg0) { // Original name: fetch, environment: var9
                _fun16713: for (var _fun16713_ip = 0;;) switch (_fun16713_ip) {
                    case 0:
                        var1 = _closure1_slot8;
                        if (var1) {
                            _fun16713_ip = 24;
                            continue _fun16713
                        }
                    case 10:
                        var2 = _closure1_slot9;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        _closure1_slot8 = var1;
                    case 24:
                        var2 = _closure1_slot8;
                        var1 = var2.latest;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var5 = function() { // Original name: refresh, environment: var9
                _fun16714: for (var _fun16714_ip = 0;;) switch (_fun16714_ip) {
                    case 0:
                        var2 = _closure1_slot8;
                        if (var2) {
                            _fun16714_ip = 26;
                            continue _fun16714
                        }
                    case 12:
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        _closure1_slot8 = var2;
                    case 26:
                        var2 = _closure1_slot10;
                        if (var2) {
                            _fun16714_ip = 86;
                            continue _fun16714
                        }
                    case 33:
                        var2 = true;
                        _closure1_slot10 = var2;
                        var2 = _closure1_slot8;
                        var0 = var2._fetchCurrentState;
                        var3 = var0.bind(var2)();
                        var2 = var3.then;
                        var0 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var4 = _closure1_slot11;
                            var3 = var4.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = arg0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1);
                            var1 = new Array(0);
                            _closure1_slot11 = var1;
                            return var0;
                        };
                        var3 = var2.bind(var3)(var0);
                        var2 = var3.finally;
                        var0 = function() { // Environment: var1
                            var0 = false;
                            _closure1_slot10 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        _fun16714_ip = 119;
                        continue _fun16714;
                    case 86:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot11;
                            var1 = var2.push;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 119:
                        return var0;
                }
            };
            var4 = function(arg0) { // Original name: addEventListener, environment: var9
                _fun16719: for (var _fun16719_ip = 0;;) switch (_fun16719_ip) {
                    case 0:
                        var3 = arg0;
                        var _closure2_slot0 = var3;
                        var2 = _closure1_slot8;
                        if (var2) {
                            _fun16719_ip = 33;
                            continue _fun16719
                        }
                    case 19:
                        var4 = _closure1_slot9;
                        var2 = undefined;
                        var2 = var4.bind(var2)();
                        _closure1_slot8 = var2;
                    case 33:
                        var2 = _closure1_slot8;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var0 = function() { // Environment: var0
                            _fun16720: for (var _fun16720_ip = 0;;) switch (_fun16720_ip) {
                                case 0:
                                    var1 = _closure1_slot8;
                                    if (!var1) {
                                        _fun16720_ip = 32;
                                        continue _fun16720
                                    }
                                case 10:
                                    var2 = _closure1_slot8;
                                    var1 = var2.remove;
                                    var0 = _closure2_slot0;
                                    var0 = var1.bind(var2)(var0);
                                case 32:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        return var0;
                }
            };
            var _closure1_slot13 = var4;
            var3 = function(arg0) { // Original name: useNetInfo, environment: var9
                _fun16721: for (var _fun16721_ip = 0;;) switch (_fun16721_ip) {
                    case 0:
                        var3 = arg0;
                        if (!var3) {
                            _fun16721_ip = 22;
                            continue _fun16721
                        }
                    case 8:
                        var2 = _closure1_slot12;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3);
                    case 22:
                        var3 = _closure1_slot4;
                        var0 = {
                            'type': null,
                            'isConnected': null,
                            'isInternetReachable': null,
                            'details': null
                        };
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 5;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var5 = var5.NetInfoStateType;
                        var5 = var5.unknown;
                        var0.type = var5;
                        var5 = var3.bind(var4)(var0);
                        var3 = _closure1_slot3;
                        var0 = 2;
                        var5 = var3.bind(var4)(var5, var0);
                        var0 = 0;
                        var0 = var5[var0];
                        var3 = 1;
                        var3 = var5[var3];
                        var _closure2_slot0 = var3;
                        var3 = _closure1_slot5;
                        var2 = function() { // Environment: var1
                            var3 = _closure1_slot13;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            return var0;
                        };
                        var1 = new Array(0);
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var1 = function() { // Original name: useNetInfoInstance, environment: var9
                _fun16724: for (var _fun16724_ip = 0;;) switch (_fun16724_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var0 = arguments.length;
                        var3 = 0;
                        var8 = var0 > var3;
                        if (!var8) {
                            _fun16724_ip = 26;
                            continue _fun16724
                        }
                    case 18:
                        var0 = arguments[var3];
                        var8 = var4 !== var0;
                    case 26:
                        if (!var8) {
                            _fun16724_ip = 33;
                            continue _fun16724
                        }
                    case 29:
                        var8 = arguments[var3];
                    case 33:
                        var _closure2_slot0 = var8;
                        var0 = arguments.length;
                        var7 = 1;
                        var5 = var0 > var7;
                        var0 = undefined;
                        if (!var5) {
                            _fun16724_ip = 56;
                            continue _fun16724
                        }
                    case 52:
                        var0 = arguments[var7];
                    case 56:
                        var _closure2_slot1 = var0;
                        var5 = _closure1_slot4;
                        var6 = var5.bind(var4)();
                        var5 = _closure1_slot3;
                        var10 = 2;
                        var6 = var5.bind(var4)(var6, var10);
                        var5 = var6[var3];
                        var _closure2_slot2 = var5;
                        var6 = var6[var7];
                        var _closure2_slot3 = var6;
                        var9 = _closure1_slot4;
                        var6 = {
                            'type': null,
                            'isConnected': null,
                            'isInternetReachable': null,
                            'details': null
                        };
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 5;
                        var11 = var13[var11];
                        var11 = var12.bind(var4)(var11);
                        var11 = var11.NetInfoStateType;
                        var11 = var11.unknown;
                        var6.type = var11;
                        var9 = var9.bind(var4)(var6);
                        var6 = _closure1_slot3;
                        var6 = var6.bind(var4)(var9, var10);
                        var3 = var6[var3];
                        var6 = var6[var7];
                        var _closure2_slot4 = var6;
                        var7 = _closure1_slot5;
                        var6 = new Array(2);
                        var6[0] = var8;
                        var6[1] = var0;
                        var0 = function() { // Environment: var1
                            _fun16725: for (var _fun16725_ip = 0;;) switch (_fun16725_ip) {
                                case 0:
                                    var0 = _closure2_slot0;
                                    if (var0) {
                                        _fun16725_ip = 127;
                                        continue _fun16725
                                    }
                                case 10:
                                    var0 = global;
                                    var8 = var0.Object;
                                    var7 = var8.assign;
                                    var2 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var0 = 3;
                                    var0 = var5[var0];
                                    var3 = undefined;
                                    var6 = var2.bind(var3)(var0);
                                    var4 = _closure2_slot1;
                                    var0 = {};
                                    var4 = var7.bind(var8)(var0, var6, var4);
                                    var0 = 4;
                                    var0 = var5[var0];
                                    var0 = var2.bind(var3)(var0);
                                    var2 = var0.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var12 = var2;
                                    var11 = var4;
                                    var0 = new var12[var0](var11, var10);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    var2 = _closure2_slot3;
                                    var2 = var2.bind(var3)(var0);
                                    var2 = var0.add;
                                    var1 = _closure2_slot4;
                                    var1 = var2.bind(var0)(var1);
                                    var0 = var0.tearDown;
                                    return var0;
                                case 127:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var7.bind(var4)(var0, var6);
                        var0 = {};
                        var0.netInfo = var3;
                        var3 = _closure1_slot6;
                        var2 = new Array(1);
                        var2[0] = var5;
                        var1 = function() { // Environment: var1
                            _fun16726: for (var _fun16726_ip = 0;;) switch (_fun16726_ip) {
                                case 0:
                                    var1 = _closure2_slot2;
                                    if (!var1) {
                                        _fun16726_ip = 20;
                                        continue _fun16726
                                    }
                                case 10:
                                    var2 = _closure1_slot10;
                                    var1 = !var2;
                                case 20:
                                    if (!var1) {
                                        _fun16726_ip = 64;
                                        continue _fun16726
                                    }
                                case 23:
                                    var1 = true;
                                    _closure1_slot10 = var1;
                                    var1 = _closure2_slot2;
                                    var0 = var1._fetchCurrentState;
                                    var2 = var0.bind(var1)();
                                    var1 = var2.finally;
                                    var0 = function() { // Environment: var0
                                        var0 = false;
                                        _closure1_slot10 = var0;
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 64:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1, var2);
                        var0.refresh = var1;
                        return var0;
                }
            };
            var0 = global;
            var12 = var0.Object;
            var11 = var12.defineProperty;
            var8 = {};
            var0 = true;
            var8.value = var0;
            var0 = '__esModule';
            var0 = var11.bind(var12)(var2, var0, var8);
            var0 = 0;
            var8 = var14[var0];
            var0 = undefined;
            var8 = var10.bind(var0)(var8);
            var _closure1_slot3 = var8;
            var8 = 1;
            var8 = var14[var8];
            var8 = var15.bind(var0)(var8);
            var11 = var8.useState;
            var _closure1_slot4 = var11;
            var11 = var8.useEffect;
            var _closure1_slot5 = var11;
            var8 = var8.useCallback;
            var _closure1_slot6 = var8;
            var8 = 2;
            var8 = var14[var8];
            var8 = var15.bind(var0)(var8);
            var8 = var8.Platform;
            var8 = 3;
            var8 = var14[var8];
            var8 = var10.bind(var0)(var8);
            var _closure1_slot7 = var8;
            var8 = null;
            var _closure1_slot8 = var8;
            var8 = function() { // Original name: createState, environment: var9
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot7;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var _closure1_slot9 = var8;
            var8 = false;
            var _closure1_slot10 = var8;
            var8 = new Array(0);
            var _closure1_slot11 = var8;
            var8 = {};
            var8.configure = var7;
            var8.fetch = var6;
            var8.refresh = var5;
            var8.addEventListener = var4;
            var8.useNetInfo = var3;
            var8.useNetInfoInstance = var1;
            var2.default = var8;
            var9 = 5;
            var8 = var14[var9];
            var12 = var15.bind(var0)(var8);
            for (var8 in var12)
                case 276: {
                    case 285: var17 = var8;
                    var16 = var14[var9];
                    var16 = var15.bind(var0)(var16);
                    var16 = var16[var17];
                    var2[var17] = var16;
                    _fun16711_ip = 276;
                    continue _fun16711;
                }
        case 307:
            var2.configure = var7;
            var2.fetch = var6;
            var2.refresh = var5;
            var2.addEventListener = var4;
            var2.useNetInfo = var3;
            var2.useNetInfoInstance = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1447, 1448, 1453]);