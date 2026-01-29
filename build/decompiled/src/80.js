// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun1470: for (var _fun1470_ip = 0;;) switch (_fun1470_ip) {
        case 0:
            var3 = global;
            var1 = exports;
            var2 = metroImportDefault;
            var _closure1_slot0 = var2;
            var2 = dependencyMap;
            var _closure1_slot1 = var2;
            var2 = function(arg0, arg1, arg2) { // Original name: createGetter, environment: var0
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var0 = function() { // Environment: var0
                    _fun1472: for (var _fun1472_ip = 0;;) switch (_fun1472_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun1472_ip = 35;
                                continue _fun1472
                            }
                        case 13:
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                            if (!(var2 == var1)) {
                                _fun1472_ip = 31;
                                continue _fun1472
                            }
                        case 27:
                            var1 = _closure2_slot1;
                        case 31:
                            var _closure2_slot2 = var1;
                        case 35:
                            var0 = _closure2_slot2;
                            return var0;
                    }
                };
                return var0;
            };
            var _closure1_slot6 = var2;
            var2 = global;
            var8 = var2.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var4 = true;
            var6.value = var4;
            var5 = '__esModule';
            var5 = var7.bind(var8)(var1, var5, var6);
            var5 = var2.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var12 = var6;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var6;
            var _closure1_slot3 = var5;
            var2 = var2.Set;
            var5 = var2.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var2
                }
            });
            var12 = var5;
            var2 = new var12[var2](var11);
            var2 = var2 instanceof Object ? var2 : var5;
            var _closure1_slot4 = var2;
            var2 = var3.RN$Bridgeless;
            var2 = var4 === var2;
            if (var2) {
                _fun1470_ip = 148;
                continue _fun1470
            }
        case 136:
            var4 = var3.__turboModuleProxy;
            var3 = null;
            var2 = var3 != var4;
        case 148:
            var _closure1_slot5 = var2;
            var2 = function(arg0, arg1) { // Original name: createJavaScriptFlagGetter, environment: var0
                var3 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var3;
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = function() { // Environment: var0
                    _fun1474: for (var _fun1474_ip = 0;;) switch (_fun1474_ip) {
                        case 0:
                            var4 = _closure1_slot3;
                            var3 = var4.add;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure1_slot2;
                            var2 = null;
                            var3 = var2 == var4;
                            var0 = undefined;
                            if (var3) {
                                _fun1474_ip = 71;
                                continue _fun1474
                            }
                        case 39:
                            var3 = _closure2_slot0;
                            var3 = var4[var3];
                            var2 = var2 == var3;
                            var0 = undefined;
                            if (var2) {
                                _fun1474_ip = 71;
                                continue _fun1474
                            }
                        case 56:
                            var2 = var3.call;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var4, var1);
                        case 71:
                            return var0;
                    }
                };
                var0 = var2.bind(var1)(var1, var0, var3);
                return var0;
            };
            var1.createJavaScriptFlagGetter = var2;
            var2 = function(arg0, arg1) { // Original name: createNativeFlagGetter, environment: var0
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = function() { // Environment: var0
                    _fun1476: for (var _fun1476_ip = 0;;) switch (_fun1476_ip) {
                        case 0:
                            var9 = _closure2_slot0;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 0;
                            var0 = var0[var6];
                            var5 = undefined;
                            var0 = var2.bind(var5)(var0);
                            if (var0) {
                                _fun1476_ip = 48;
                                continue _fun1476
                            }
                        case 34:
                            var4 = _closure1_slot4;
                            var2 = var4.has;
                            var0 = var2.bind(var4)(var9);
                        case 48:
                            if (var0) {
                                _fun1476_ip = 58;
                                continue _fun1476
                            }
                        case 51:
                            var2 = _closure1_slot5;
                            var0 = !var2;
                        case 58:
                            if (var0) {
                                _fun1476_ip = 122;
                                continue _fun1476
                            }
                        case 61:
                            var2 = _closure1_slot4;
                            var0 = var2.add;
                            var0 = var0.bind(var2)(var9);
                            var0 = global;
                            var4 = var0.console;
                            var2 = var4.error;
                            var0 = var0.HermesInternal;
                            var8 = var0.concat;
                            var7 = "Could not access feature flag '";
                            var0 = "' because native module method was not available";
                            var0 = var8.bind(var7)(var9, var0);
                            var0 = var2.bind(var4)(var0);
                        case 122:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var6];
                            var0 = var2.bind(var5)(var0);
                            var2 = null;
                            var4 = var2 == var0;
                            var0 = undefined;
                            if (var4) {
                                _fun1476_ip = 211;
                                continue _fun1476
                            }
                        case 150:
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var6];
                            var4 = var7.bind(var5)(var4);
                            var3 = _closure2_slot0;
                            var3 = var4[var3];
                            var2 = var2 == var3;
                            var0 = undefined;
                            if (var2) {
                                _fun1476_ip = 211;
                                continue _fun1476
                            }
                        case 184:
                            var2 = var3.call;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var6];
                            var1 = var4.bind(var5)(var1);
                            var0 = var2.bind(var3)(var1);
                        case 211:
                            return var0;
                    }
                };
                var0 = arg1;
                var0 = var3.bind(var2)(var2, var1, var0);
                return var0;
            };
            var1.createNativeFlagGetter = var2;
            var2 = function() { // Original name: getOverrides, environment: var0
                var0 = _closure1_slot2;
                return var0;
            };
            var1.getOverrides = var2;
            var0 = function(arg0) { // Original name: setOverrides, environment: var0
                _fun1478: for (var _fun1478_ip = 0;;) switch (_fun1478_ip) {
                    case 0:
                        var2 = _closure1_slot2;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun1478_ip = 127;
                            continue _fun1478
                        }
                    case 13:
                        var0 = _closure1_slot3;
                        var2 = var0.size;
                        var0 = 0;
                        if (!(!(var2 > var0))) {
                            _fun1478_ip = 39;
                            continue _fun1478
                        }
                    case 28:
                        var0 = arg0;
                        var _closure1_slot2 = var0;
                        var0 = undefined;
                        return var0;
                    case 39:
                        var0 = global;
                        var3 = var0.Array;
                        var2 = var3.from;
                        var1 = _closure1_slot3;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.join;
                        var1 = ', ';
                        var3 = var2.bind(var3)(var1);
                        var2 = var0.Error;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = 'Feature flags were accessed before being overridden: ';
                        var4 = var1.bind(var0)(var3);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 127:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = 'Feature flags cannot be overridden more than once';
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.setOverrides = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [81]);