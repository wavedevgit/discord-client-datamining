// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16197: for (var _fun16197_ip = 0;;) switch (_fun16197_ip) {
        case 0:
            var1 = require;
            var _closure1_slot0 = var1;
            var1 = dependencyMap;
            var _closure1_slot1 = var1;
            var1 = function(arg0, arg1, arg2) { // Original name: priv, environment: var0
                _fun16198: for (var _fun16198_ip = 0;;) switch (_fun16198_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = arg1;
                        var0 = arg2;
                        var6 = undefined;
                        var3 = undefined;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        if (var1) {
                            _fun16198_ip = 46;
                            continue _fun16198
                        }
                    case 27:
                        var1 = _closure1_slot2;
                        var1 = var1.bind(var6)(var5);
                        var6 = _closure1_slot3;
                        var6[var5] = var1;
                        _fun16198_ip = 54;
                        continue _fun16198;
                    case 46:
                        var4 = _closure1_slot3;
                        var1 = var4[var5];
                    case 54:
                        var4 = arguments.length;
                        var3 = 2;
                        if (!(var3 !== var4)) {
                            _fun16198_ip = 70;
                            continue _fun16198
                        }
                    case 64:
                        var2[var1] = var0;
                        _fun16198_ip = 74;
                        continue _fun16198;
                    case 70:
                        var0 = var2[var1];
                    case 74:
                        return var0;
                }
            };
            var _closure1_slot4 = var1;
            var1 = function() { // Original name: naiveLength, environment: var0
                var0 = 1;
                return var0;
            };
            var _closure1_slot5 = var1;
            var1 = function(arg0) { // Original name: LRUCache, environment: var0
                _fun16200: for (var _fun16200_ip = 0;;) switch (_fun16200_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = this;
                        var0 = _closure1_slot6;
                        var0 = var2 instanceof var0;
                        if (var0) {
                            _fun16200_ip = 48;
                            continue _fun16200
                        }
                    case 19:
                        var0 = _closure1_slot6;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var12 = var1;
                        var11 = var4;
                        var0 = new var12[var0](var11, var10);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    case 48:
                        var8 = 'number';
                        var0 = typeof var4;
                        var1 = var4;
                        if (!(var8 === var0)) {
                            _fun16200_ip = 71;
                            continue _fun16200
                        }
                    case 62:
                        var0 = {};
                        var0.max = var4;
                        var1 = var0;
                    case 71:
                        if (var1) {
                            _fun16200_ip = 76;
                            continue _fun16200
                        }
                    case 74:
                        var1 = {};
                    case 76:
                        var5 = _closure1_slot4;
                        var4 = var1.max;
                        var0 = undefined;
                        var6 = 'max';
                        var7 = var5.bind(var0)(var2, var6, var4);
                        var4 = !var7;
                        if (var4) {
                            _fun16200_ip = 111;
                            continue _fun16200
                        }
                    case 104:
                        var5 = typeof var7;
                        var4 = var8 !== var5;
                    case 111:
                        if (var4) {
                            _fun16200_ip = 120;
                            continue _fun16200
                        }
                    case 114:
                        var5 = 0;
                        var4 = var7 <= var5;
                    case 120:
                        if (!var4) {
                            _fun16200_ip = 144;
                            continue _fun16200
                        }
                    case 123:
                        var5 = _closure1_slot4;
                        var4 = inf;
                        var4 = var5.bind(var0)(var2, var6, var4);
                    case 144:
                        var5 = var1.length;
                        if (var5) {
                            _fun16200_ip = 156;
                            continue _fun16200
                        }
                    case 152:
                        var5 = _closure1_slot5;
                    case 156:
                        var6 = 'function';
                        var4 = typeof var5;
                        if (!(var6 !== var4)) {
                            _fun16200_ip = 171;
                            continue _fun16200
                        }
                    case 167:
                        var5 = _closure1_slot5;
                    case 171:
                        var6 = _closure1_slot4;
                        var4 = 'lengthCalculator';
                        var4 = var6.bind(var0)(var2, var4, var5);
                        var5 = var1.stale;
                        if (var5) {
                            _fun16200_ip = 199;
                            continue _fun16200
                        }
                    case 197:
                        var5 = false;
                    case 199:
                        var4 = 'allowStale';
                        var4 = var6.bind(var0)(var2, var4, var5);
                        var6 = _closure1_slot4;
                        var5 = var1.maxAge;
                        if (var5) {
                            _fun16200_ip = 227;
                            continue _fun16200
                        }
                    case 225:
                        var5 = 0;
                    case 227:
                        var4 = 'maxAge';
                        var4 = var6.bind(var0)(var2, var4, var5);
                        var4 = _closure1_slot4;
                        var3 = var1.dispose;
                        var1 = 'dispose';
                        var1 = var4.bind(var0)(var2, var1, var3);
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var0;
                }
            };
            var _closure1_slot6 = var1;
            var2 = function(arg0, arg1, arg2, arg3) { // Original name: forEachStep, environment: var0
                _fun16201: for (var _fun16201_ip = 0;;) switch (_fun16201_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var7 = arg2;
                        var2 = var7.value;
                        var1 = _closure1_slot9;
                        var0 = undefined;
                        var4 = var1.bind(var0)(var6, var2);
                        var1 = var2;
                        if (!var4) {
                            _fun16201_ip = 69;
                            continue _fun16201
                        }
                    case 35:
                        var4 = _closure1_slot11;
                        var4 = var4.bind(var0)(var6, var7);
                        var4 = _closure1_slot4;
                        var3 = 'allowStale';
                        var3 = var4.bind(var0)(var6, var3);
                        if (var3) {
                            _fun16201_ip = 66;
                            continue _fun16201
                        }
                    case 64:
                        var2 = undefined;
                    case 66:
                        var1 = var2;
                    case 69:
                        if (!var1) {
                            _fun16201_ip = 100;
                            continue _fun16201
                        }
                    case 72:
                        var4 = var5.call;
                        var10 = var1.value;
                        var9 = var1.key;
                        var11 = arg3;
                        var12 = var5;
                        var8 = var6;
                        var1 = var12[var4](var11, var10, var9, var8, var7);
                    case 100:
                        return var0;
                }
            };
            var _closure1_slot7 = var2;
            var2 = function(arg0, arg1, arg2) { // Original name: get, environment: var0
                _fun16202: for (var _fun16202_ip = 0;;) switch (_fun16202_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = _closure1_slot4;
                        var2 = undefined;
                        var0 = 'cache';
                        var4 = var1.bind(var2)(var6, var0);
                        var1 = var4.get;
                        var0 = arg1;
                        var7 = var1.bind(var4)(var0);
                        var0 = undefined;
                        if (!var7) {
                            _fun16202_ip = 144;
                            continue _fun16202
                        }
                    case 40:
                        var4 = var7.value;
                        var1 = _closure1_slot9;
                        var1 = var1.bind(var2)(var6, var4);
                        if (var1) {
                            _fun16202_ip = 99;
                            continue _fun16202
                        }
                    case 58:
                        var5 = arg2;
                        var1 = var4;
                        if (!var5) {
                            _fun16202_ip = 133;
                            continue _fun16202
                        }
                    case 67:
                        var8 = _closure1_slot4;
                        var5 = 'lruList';
                        var8 = var8.bind(var2)(var6, var5);
                        var5 = var8.unshiftNode;
                        var5 = var5.bind(var8)(var7);
                        var1 = var4;
                        _fun16202_ip = 133;
                        continue _fun16202;
                    case 99:
                        var5 = _closure1_slot11;
                        var5 = var5.bind(var2)(var6, var7);
                        var5 = _closure1_slot4;
                        var3 = 'allowStale';
                        var3 = var5.bind(var2)(var6, var3);
                        var1 = var4;
                        if (var3) {
                            _fun16202_ip = 133;
                            continue _fun16202
                        }
                    case 131:
                        var1 = undefined;
                    case 133:
                        var0 = var1;
                        if (!var0) {
                            _fun16202_ip = 144;
                            continue _fun16202
                        }
                    case 139:
                        var0 = var1.value;
                    case 144:
                        return var0;
                }
            };
            var _closure1_slot8 = var2;
            var2 = function(arg0, arg1) { // Original name: isStale, environment: var0
                _fun16203: for (var _fun16203_ip = 0;;) switch (_fun16203_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = arg1;
                        if (!var1) {
                            _fun16203_ip = 40;
                            continue _fun16203
                        }
                    case 9:
                        var0 = var1.maxAge;
                        if (var0) {
                            _fun16203_ip = 44;
                            continue _fun16203
                        }
                    case 18:
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var0 = 'maxAge';
                        var0 = var3.bind(var2)(var6, var0);
                        if (var0) {
                            _fun16203_ip = 44;
                            continue _fun16203
                        }
                    case 40:
                        var0 = false;
                        return var0;
                    case 44:
                        var0 = global;
                        var2 = var0.Date;
                        var0 = var2.now;
                        var2 = var0.bind(var2)();
                        var0 = var1.now;
                        var2 = var2 - var0;
                        var0 = var1.maxAge;
                        if (var0) {
                            _fun16203_ip = 117;
                            continue _fun16203
                        }
                    case 79:
                        var0 = _closure1_slot4;
                        var5 = undefined;
                        var4 = 'maxAge';
                        var0 = var0.bind(var5)(var6, var4);
                        if (!var0) {
                            _fun16203_ip = 115;
                            continue _fun16203
                        }
                    case 101:
                        var3 = _closure1_slot4;
                        var3 = var3.bind(var5)(var6, var4);
                        var0 = var2 > var3;
                    case 115:
                        _fun16203_ip = 127;
                        continue _fun16203;
                    case 117:
                        var1 = var1.maxAge;
                        var0 = var2 > var1;
                    case 127:
                        return var0;
                }
            };
            var _closure1_slot9 = var2;
            var2 = function(arg0) { // Original name: trim, environment: var0
                _fun16204: for (var _fun16204_ip = 0;;) switch (_fun16204_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var4 = 'length';
                        var2 = var1.bind(var0)(var6, var4);
                        var3 = 'max';
                        var1 = var1.bind(var0)(var6, var3);
                        if (!(var2 > var1)) {
                            _fun16204_ip = 123;
                            continue _fun16204
                        }
                    case 36:
                        var1 = _closure1_slot4;
                        var2 = 'lruList';
                        var2 = var1.bind(var0)(var6, var2);
                        var2 = var2.tail;
                        var7 = var1.bind(var0)(var6, var4);
                        var1 = var1.bind(var0)(var6, var3);
                        if (!(var7 > var1)) {
                            _fun16204_ip = 123;
                            continue _fun16204
                        }
                    case 74:
                        var1 = null;
                        if (!(var1 !== var2)) {
                            _fun16204_ip = 123;
                            continue _fun16204
                        }
                    case 80:
                        var7 = var2.prev;
                        var8 = _closure1_slot11;
                        var8 = var8.bind(var0)(var6, var2);
                        var8 = _closure1_slot4;
                        var9 = var8.bind(var0)(var6, var4);
                        var8 = var8.bind(var0)(var6, var3);
                        if (!(var9 > var8)) {
                            _fun16204_ip = 123;
                            continue _fun16204
                        }
                    case 116:
                        var2 = var7;
                        if (var1 !== var2) {
                            _fun16204_ip = 80;
                            continue _fun16204
                        }
                    case 123:
                        return var0;
                }
            };
            var _closure1_slot10 = var2;
            var2 = function(arg0, arg1) { // Original name: del, environment: var0
                _fun16205: for (var _fun16205_ip = 0;;) switch (_fun16205_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = arg1;
                        if (!var2) {
                            _fun16205_ip = 151;
                            continue _fun16205
                        }
                    case 12:
                        var0 = var2.value;
                        var5 = _closure1_slot4;
                        var3 = undefined;
                        var6 = 'dispose';
                        var5 = var5.bind(var3)(var4, var6);
                        if (!var5) {
                            _fun16205_ip = 73;
                            continue _fun16205
                        }
                    case 39:
                        var5 = _closure1_slot4;
                        var9 = var5.bind(var3)(var4, var6);
                        var8 = var9.call;
                        var7 = var0.key;
                        var6 = var0.value;
                        var5 = this;
                        var5 = var8.bind(var9)(var5, var7, var6);
                    case 73:
                        var1 = _closure1_slot4;
                        var6 = 'length';
                        var7 = var1.bind(var3)(var4, var6);
                        var5 = var0.length;
                        var5 = var7 - var5;
                        var5 = var1.bind(var3)(var4, var6, var5);
                        var5 = 'cache';
                        var6 = var1.bind(var3)(var4, var5);
                        var5 = var6.delete;
                        var0 = var0.key;
                        var0 = var5.bind(var6)(var0);
                        var0 = 'lruList';
                        var1 = var1.bind(var3)(var4, var0);
                        var0 = var1.removeNode;
                        var0 = var0.bind(var1)(var2);
                    case 151:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot11 = var2;
            var2 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: Entry, environment: var0
                _fun16206: for (var _fun16206_ip = 0;;) switch (_fun16206_ip) {
                    case 0:
                        var1 = arg4;
                        var0 = this;
                        var2 = arg0;
                        var0.key = var2;
                        var2 = arg1;
                        var0.value = var2;
                        var2 = arg2;
                        var0.length = var2;
                        var2 = arg3;
                        var0.now = var2;
                        if (var1) {
                            _fun16206_ip = 46;
                            continue _fun16206
                        }
                    case 44:
                        var1 = 0;
                    case 46:
                        var0.maxAge = var1;
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot12 = var2;
            var2 = arg4;
            var2.exports = var1;
            var2 = {};
            var _closure1_slot3 = var2;
            var3 = global;
            var2 = var3.Symbol;
            var4 = 'function';
            var2 = typeof var2;
            if (!(var4 !== var2)) {
                _fun16197_ip = 137;
                continue _fun16197
            }
        case 130:
            var2 = function(arg0) { // Original name: makeSymbol, environment: var0
                var1 = '_';
                var0 = arg0;
                var0 = var1 + var0;
                return var0;
            };
            _fun16197_ip = 142;
            continue _fun16197;
        case 137:
            var2 = function(arg0) { // Original name: makeSymbol, environment: var0
                var0 = global;
                var2 = var0.Symbol;
                var1 = var2.for;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
        case 142:
            var _closure1_slot2 = var2;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = var1.prototype;
            var5 = {};
            var2 = function(arg0) { // Original name: set, environment: var0
                _fun16209: for (var _fun16209_ip = 0;;) switch (_fun16209_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = this;
                        var0 = !var5;
                        if (var0) {
                            _fun16209_ip = 22;
                            continue _fun16209
                        }
                    case 11:
                        var3 = 'number';
                        var1 = typeof var5;
                        var0 = var3 !== var1;
                    case 22:
                        if (var0) {
                            _fun16209_ip = 31;
                            continue _fun16209
                        }
                    case 25:
                        var1 = 0;
                        var0 = var5 <= var1;
                    case 31:
                        if (!var0) {
                            _fun16209_ip = 44;
                            continue _fun16209
                        }
                    case 34:
                        var5 = inf;
                    case 44:
                        var4 = _closure1_slot4;
                        var0 = undefined;
                        var3 = 'max';
                        var3 = var4.bind(var0)(var2, var3, var5);
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var5.set = var2;
            var2 = function() { // Original name: get, environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'max';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var5.get = var2;
            var2 = true;
            var5.enumerable = var2;
            var4 = 'max';
            var4 = var7.bind(var8)(var6, var4, var5);
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = var1.prototype;
            var5 = {};
            var4 = function(arg0) { // Original name: set, environment: var0
                var4 = _closure1_slot4;
                var0 = arg0;
                var1 = !var0;
                var0 = undefined;
                var3 = this;
                var2 = 'allowStale';
                var1 = !var1;
                var1 = var4.bind(var0)(var3, var2, var1);
                return var0;
            };
            var5.set = var4;
            var4 = function() { // Original name: get, environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'allowStale';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var5.get = var4;
            var5.enumerable = var2;
            var4 = 'allowStale';
            var4 = var7.bind(var8)(var6, var4, var5);
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = var1.prototype;
            var5 = {};
            var4 = function(arg0) { // Original name: set, environment: var0
                _fun16213: for (var _fun16213_ip = 0;;) switch (_fun16213_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = this;
                        var0 = !var5;
                        if (var0) {
                            _fun16213_ip = 22;
                            continue _fun16213
                        }
                    case 11:
                        var3 = 'number';
                        var1 = typeof var5;
                        var0 = var3 !== var1;
                    case 22:
                        if (var0) {
                            _fun16213_ip = 31;
                            continue _fun16213
                        }
                    case 25:
                        var1 = 0;
                        var0 = var5 < var1;
                    case 31:
                        if (!var0) {
                            _fun16213_ip = 36;
                            continue _fun16213
                        }
                    case 34:
                        var5 = 0;
                    case 36:
                        var4 = _closure1_slot4;
                        var0 = undefined;
                        var3 = 'maxAge';
                        var3 = var4.bind(var0)(var2, var3, var5);
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var5.set = var4;
            var4 = function() { // Original name: get, environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'maxAge';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var5.get = var4;
            var5.enumerable = var2;
            var4 = 'maxAge';
            var4 = var7.bind(var8)(var6, var4, var5);
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = var1.prototype;
            var5 = {};
            var4 = function(arg0) { // Original name: set, environment: var0
                _fun16215: for (var _fun16215_ip = 0;;) switch (_fun16215_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = this;
                        var1 = 'function';
                        var0 = typeof var5;
                        if (!(var1 !== var0)) {
                            _fun16215_ip = 23;
                            continue _fun16215
                        }
                    case 16:
                        var5 = _closure1_slot5;
                    case 23:
                        var4 = _closure1_slot4;
                        var0 = undefined;
                        var3 = 'lengthCalculator';
                        var4 = var4.bind(var0)(var2, var3);
                        if (!(var5 !== var4)) {
                            _fun16215_ip = 102;
                            continue _fun16215
                        }
                    case 48:
                        var4 = _closure1_slot4;
                        var3 = var4.bind(var0)(var2, var3, var5);
                        var5 = 'length';
                        var3 = 0;
                        var3 = var4.bind(var0)(var2, var5, var3);
                        var3 = 'lruList';
                        var5 = var4.bind(var0)(var2, var3);
                        var4 = var5.forEach;
                        var3 = function(arg0) { // Environment: var3
                            var1 = arg0;
                            var4 = this;
                            var3 = _closure1_slot4;
                            var0 = undefined;
                            var2 = 'lengthCalculator';
                            var7 = var3.bind(var0)(var4, var2);
                            var6 = var7.call;
                            var5 = var1.value;
                            var2 = var1.key;
                            var2 = var6.bind(var7)(var4, var5, var2);
                            var1.length = var2;
                            var2 = 'length';
                            var5 = var3.bind(var0)(var4, var2);
                            var1 = var1.length;
                            var1 = var5 + var1;
                            var1 = var3.bind(var0)(var4, var2, var1);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3, var2);
                    case 102:
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var5.set = var4;
            var4 = function() { // Original name: get, environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'lengthCalculator';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var5.get = var4;
            var5.enumerable = var2;
            var4 = 'lengthCalculator';
            var4 = var7.bind(var8)(var6, var4, var5);
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = var1.prototype;
            var5 = {};
            var4 = function() { // Original name: get, environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'length';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var5.get = var4;
            var5.enumerable = var2;
            var4 = 'length';
            var4 = var7.bind(var8)(var6, var4, var5);
            var6 = var3.Object;
            var5 = var6.defineProperty;
            var4 = var1.prototype;
            var3 = {};
            var7 = function() { // Original name: get, environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'lruList';
                var0 = var3.bind(var2)(var1, var0);
                var0 = var0.length;
                return var0;
            };
            var3.get = var7;
            var3.enumerable = var2;
            var2 = 'itemCount';
            var2 = var5.bind(var6)(var4, var2, var3);
            var3 = var1.prototype;
            var2 = function(arg0, arg1) { // Environment: var0
                _fun16220: for (var _fun16220_ip = 0;;) switch (_fun16220_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = this;
                        if (var5) {
                            _fun16220_ip = 14;
                            continue _fun16220
                        }
                    case 11:
                        var5 = var4;
                    case 14:
                        var2 = _closure1_slot4;
                        var0 = undefined;
                        var1 = 'lruList';
                        var1 = var2.bind(var0)(var4, var1);
                        var2 = var1.tail;
                        var1 = null;
                        if (!(var1 !== var2)) {
                            _fun16220_ip = 82;
                            continue _fun16220
                        }
                    case 47:
                        var7 = var2.prev;
                        var8 = _closure1_slot7;
                        var13 = undefined;
                        var12 = var4;
                        var11 = var6;
                        var10 = var2;
                        var9 = var5;
                        var8 = var13[var8](var12, var11, var10, var9, var8);
                        var2 = var7;
                        if (var1 !== var2) {
                            _fun16220_ip = 47;
                            continue _fun16220
                        }
                    case 82:
                        return var0;
                }
            };
            var3.rforEach = var2;
            var3 = var1.prototype;
            var2 = function(arg0, arg1) { // Environment: var0
                _fun16221: for (var _fun16221_ip = 0;;) switch (_fun16221_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = this;
                        if (var5) {
                            _fun16221_ip = 14;
                            continue _fun16221
                        }
                    case 11:
                        var5 = var4;
                    case 14:
                        var2 = _closure1_slot4;
                        var0 = undefined;
                        var1 = 'lruList';
                        var1 = var2.bind(var0)(var4, var1);
                        var2 = var1.head;
                        var1 = null;
                        if (!(var1 !== var2)) {
                            _fun16221_ip = 81;
                            continue _fun16221
                        }
                    case 47:
                        var7 = var2.next;
                        var8 = _closure1_slot7;
                        var13 = undefined;
                        var12 = var4;
                        var11 = var6;
                        var10 = var2;
                        var9 = var5;
                        var8 = var13[var8](var12, var11, var10, var9, var8);
                        var2 = var7;
                        if (var1 !== var2) {
                            _fun16221_ip = 47;
                            continue _fun16221
                        }
                    case 81:
                        return var0;
                }
            };
            var3.forEach = var2;
            var3 = var1.prototype;
            var2 = function() { // Environment: var0
                var3 = this;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = 'lruList';
                var1 = var2.bind(var1)(var3, var0);
                var0 = var1.toArray;
                var2 = var0.bind(var1)();
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.key;
                    return var0;
                };
                var0 = var1.bind(var2)(var0, var3);
                return var0;
            };
            var3.keys = var2;
            var3 = var1.prototype;
            var2 = function() { // Environment: var0
                var3 = this;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = 'lruList';
                var1 = var2.bind(var1)(var3, var0);
                var0 = var1.toArray;
                var2 = var0.bind(var1)();
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.value;
                    return var0;
                };
                var0 = var1.bind(var2)(var0, var3);
                return var0;
            };
            var3.values = var2;
            var3 = var1.prototype;
            var2 = function() { // Environment: var0
                _fun16226: for (var _fun16226_ip = 0;;) switch (_fun16226_ip) {
                    case 0:
                        var4 = this;
                        var3 = _closure1_slot4;
                        var0 = undefined;
                        var2 = 'dispose';
                        var2 = var3.bind(var0)(var4, var2);
                        if (!var2) {
                            _fun16226_ip = 40;
                            continue _fun16226
                        }
                    case 24:
                        var5 = _closure1_slot4;
                        var3 = 'lruList';
                        var2 = var5.bind(var0)(var4, var3);
                    case 40:
                        if (!var2) {
                            _fun16226_ip = 64;
                            continue _fun16226
                        }
                    case 43:
                        var5 = _closure1_slot4;
                        var3 = 'lruList';
                        var3 = var5.bind(var0)(var4, var3);
                        var2 = var3.length;
                    case 64:
                        if (!var2) {
                            _fun16226_ip = 101;
                            continue _fun16226
                        }
                    case 67:
                        var3 = _closure1_slot4;
                        var2 = 'lruList';
                        var5 = var3.bind(var0)(var4, var2);
                        var3 = var5.forEach;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var5 = this;
                            var3 = _closure1_slot4;
                            var0 = undefined;
                            var2 = 'dispose';
                            var4 = var3.bind(var0)(var5, var2);
                            var3 = var4.call;
                            var2 = var1.key;
                            var1 = var1.value;
                            var1 = var3.bind(var4)(var5, var2, var1);
                            return var0;
                        };
                        var2 = var3.bind(var5)(var2, var4);
                    case 101:
                        var3 = _closure1_slot4;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 0;
                        var1 = var6[var2];
                        var1 = var5.bind(var0)(var1);
                        var7 = var1.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var7;
                        var1 = new var11[var1](var10);
                        var7 = var1 instanceof Object ? var1 : var7;
                        var1 = 'cache';
                        var1 = var3.bind(var0)(var4, var1, var7);
                        var1 = 1;
                        var1 = var6[var1];
                        var1 = var5.bind(var0)(var1);
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var5;
                        var1 = new var11[var1](var10);
                        var5 = var1 instanceof Object ? var1 : var5;
                        var1 = 'lruList';
                        var1 = var3.bind(var0)(var4, var1, var5);
                        var1 = 'length';
                        var1 = var3.bind(var0)(var4, var1, var2);
                        return var0;
                }
            };
            var3.reset = var2;
            var3 = var1.prototype;
            var2 = function() { // Environment: var0
                var4 = this;
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = 'lruList';
                var3 = var3.bind(var2)(var4, var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    _fun16229: for (var _fun16229_ip = 0;;) switch (_fun16229_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot9;
                            var0 = undefined;
                            var1 = this;
                            var1 = var3.bind(var0)(var1, var2);
                            if (var1) {
                                _fun16229_ip = 69;
                                continue _fun16229
                            }
                        case 23:
                            var1 = {};
                            var3 = var2.key;
                            var1.k = var3;
                            var3 = var2.value;
                            var1.v = var3;
                            var3 = var2.now;
                            var2 = var2.maxAge;
                            if (var2) {
                                _fun16229_ip = 59;
                                continue _fun16229
                            }
                        case 57:
                            var2 = 0;
                        case 59:
                            var2 = var3 + var2;
                            var1.e = var2;
                            return var1;
                        case 69:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1, var4);
                var1 = var2.toArray;
                var2 = var1.bind(var2)();
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3.dump = var2;
            var3 = var1.prototype;
            var2 = function() { // Environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = this;
                var0 = 'lruList';
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var3.dumpLru = var2;
            var3 = var1.prototype;
            var2 = function(arg0, arg1) { // Environment: var0
                _fun16232: for (var _fun16232_ip = 0;;) switch (_fun16232_ip) {
                    case 0:
                        var10 = arg1;
                        var5 = this;
                        var _closure2_slot0 = var10;
                        var0 = 'LRUCache {';
                        var _closure2_slot1 = var0;
                        var3 = false;
                        var _closure2_slot2 = var3;
                        var6 = _closure1_slot4;
                        var4 = undefined;
                        var2 = 'allowStale';
                        var2 = var6.bind(var4)(var5, var2);
                        var6 = false;
                        if (!var2) {
                            _fun16232_ip = 79;
                            continue _fun16232
                        }
                    case 53:
                        var7 = _closure2_slot1;
                        var2 = '\n  allowStale: true';
                        var2 = var7 + var2;
                        _closure2_slot1 = var2;
                        var2 = true;
                        _closure2_slot2 = var2;
                        var6 = true;
                    case 79:
                        var7 = _closure1_slot4;
                        var2 = 'max';
                        var9 = var7.bind(var4)(var5, var2);
                        var7 = var9;
                        if (!var7) {
                            _fun16232_ip = 113;
                            continue _fun16232
                        }
                    case 99:
                        var2 = inf;
                        var7 = var9 !== var2;
                    case 113:
                        var2 = var6;
                        if (!var7) {
                            _fun16232_ip = 200;
                            continue _fun16232
                        }
                    case 119:
                        if (!var6) {
                            _fun16232_ip = 138;
                            continue _fun16232
                        }
                    case 122:
                        var7 = _closure2_slot1;
                        var6 = ',';
                        var6 = var7 + var6;
                        _closure2_slot1 = var6;
                    case 138:
                        var7 = _closure2_slot1;
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var6 = 2;
                        var6 = var11[var6];
                        var8 = var8.bind(var4)(var6);
                        var6 = var8.inspect;
                        var8 = var6.bind(var8)(var9, var10);
                        var6 = '\n  max: ';
                        var6 = var6 + var8;
                        var6 = var7 + var6;
                        _closure2_slot1 = var6;
                        var6 = true;
                        _closure2_slot2 = var6;
                        var2 = true;
                    case 200:
                        var7 = _closure1_slot4;
                        var6 = 'maxAge';
                        var9 = var7.bind(var4)(var5, var6);
                        var _closure2_slot3 = var9;
                        var6 = var2;
                        if (!var9) {
                            _fun16232_ip = 305;
                            continue _fun16232
                        }
                    case 224:
                        if (!var2) {
                            _fun16232_ip = 243;
                            continue _fun16232
                        }
                    case 227:
                        var7 = _closure2_slot1;
                        var2 = ',';
                        var2 = var7 + var2;
                        _closure2_slot1 = var2;
                    case 243:
                        var7 = _closure2_slot1;
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var2 = 2;
                        var2 = var11[var2];
                        var8 = var8.bind(var4)(var2);
                        var2 = var8.inspect;
                        var8 = var2.bind(var8)(var9, var10);
                        var2 = '\n  maxAge: ';
                        var2 = var2 + var8;
                        var2 = var7 + var2;
                        _closure2_slot1 = var2;
                        var2 = true;
                        _closure2_slot2 = var2;
                        var6 = true;
                    case 305:
                        var7 = _closure1_slot4;
                        var2 = 'lengthCalculator';
                        var8 = var7.bind(var4)(var5, var2);
                        var _closure2_slot4 = var8;
                        var7 = var8;
                        if (!var7) {
                            _fun16232_ip = 339;
                            continue _fun16232
                        }
                    case 331:
                        var2 = _closure1_slot5;
                        var7 = var8 !== var2;
                    case 339:
                        var2 = var6;
                        if (!var7) {
                            _fun16232_ip = 440;
                            continue _fun16232
                        }
                    case 345:
                        if (!var6) {
                            _fun16232_ip = 364;
                            continue _fun16232
                        }
                    case 348:
                        var7 = _closure2_slot1;
                        var6 = ',';
                        var6 = var7 + var6;
                        _closure2_slot1 = var6;
                    case 364:
                        var7 = _closure2_slot1;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 2;
                        var6 = var9[var6];
                        var9 = var8.bind(var4)(var6);
                        var8 = var9.inspect;
                        var11 = _closure1_slot4;
                        var6 = 'length';
                        var6 = var11.bind(var4)(var5, var6);
                        var8 = var8.bind(var9)(var6, var10);
                        var6 = '\n  length: ';
                        var6 = var6 + var8;
                        var6 = var7 + var6;
                        _closure2_slot1 = var6;
                        var6 = true;
                        _closure2_slot2 = var6;
                        var2 = true;
                    case 440:
                        var _closure2_slot5 = var3;
                        var3 = _closure1_slot4;
                        var0 = 'lruList';
                        var4 = var3.bind(var4)(var5, var0);
                        var3 = var4.forEach;
                        var0 = function(arg0) { // Environment: var1
                            _fun16233: for (var _fun16233_ip = 0;;) switch (_fun16233_ip) {
                                case 0:
                                    var10 = arg0;
                                    var0 = _closure2_slot5;
                                    if (var0) {
                                        _fun16233_ip = 64;
                                        continue _fun16233
                                    }
                                case 13:
                                    var0 = _closure2_slot2;
                                    if (!var0) {
                                        _fun16233_ip = 38;
                                        continue _fun16233
                                    }
                                case 20:
                                    var1 = _closure2_slot1;
                                    var0 = ',\n';
                                    var0 = var1 + var0;
                                    _closure2_slot1 = var0;
                                case 38:
                                    var0 = true;
                                    _closure2_slot5 = var0;
                                    var1 = _closure2_slot1;
                                    var0 = '\n  ';
                                    var0 = var1 + var0;
                                    _closure2_slot1 = var0;
                                    _fun16233_ip = 82;
                                    continue _fun16233;
                                case 64:
                                    var1 = _closure2_slot1;
                                    var0 = ',\n  ';
                                    var0 = var1 + var0;
                                    _closure2_slot1 = var0;
                                case 82:
                                    var4 = _closure1_slot0;
                                    var0 = _closure1_slot1;
                                    var7 = 2;
                                    var3 = var0[var7];
                                    var0 = undefined;
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.inspect;
                                    var3 = var10.key;
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.split;
                                    var6 = '\n';
                                    var5 = var3.bind(var4)(var6);
                                    var3 = var5.join;
                                    var4 = '\n  ';
                                    var5 = var3.bind(var5)(var4);
                                    var8 = {};
                                    var3 = var10.value;
                                    var8.value = var3;
                                    var9 = var10.maxAge;
                                    var3 = _closure2_slot3;
                                    if (!(var9 !== var3)) {
                                        _fun16233_ip = 190;
                                        continue _fun16233
                                    }
                                case 178:
                                    var3 = var10.maxAge;
                                    var8.maxAge = var3;
                                case 190:
                                    var9 = _closure2_slot4;
                                    var3 = _closure1_slot5;
                                    if (!(var9 !== var3)) {
                                        _fun16233_ip = 213;
                                        continue _fun16233
                                    }
                                case 202:
                                    var3 = var10.length;
                                    var8.length = var3;
                                case 213:
                                    var9 = _closure1_slot9;
                                    var3 = this;
                                    var3 = var9.bind(var0)(var3, var10);
                                    if (!var3) {
                                        _fun16233_ip = 236;
                                        continue _fun16233
                                    }
                                case 228:
                                    var3 = true;
                                    var8.stale = var3;
                                case 236:
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var1 = var1[var7];
                                    var7 = var3.bind(var0)(var1);
                                    var3 = var7.inspect;
                                    var1 = _closure2_slot0;
                                    var3 = var3.bind(var7)(var8, var1);
                                    var1 = var3.split;
                                    var3 = var1.bind(var3)(var6);
                                    var1 = var3.join;
                                    var4 = var1.bind(var3)(var4);
                                    var3 = _closure2_slot1;
                                    var1 = ' => ';
                                    var1 = var5 + var1;
                                    var1 = var1 + var4;
                                    var1 = var3 + var1;
                                    _closure2_slot1 = var1;
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var0);
                        var0 = _closure2_slot5;
                        if (var0) {
                            _fun16232_ip = 485;
                            continue _fun16232
                        }
                    case 482:
                        var0 = var2;
                    case 485:
                        if (!var0) {
                            _fun16232_ip = 504;
                            continue _fun16232
                        }
                    case 488:
                        var2 = _closure2_slot1;
                        var0 = '\n';
                        var0 = var2 + var0;
                        _closure2_slot1 = var0;
                    case 504:
                        var2 = _closure2_slot1;
                        var0 = '}';
                        var0 = var2 + var0;
                        _closure2_slot1 = var0;
                        return var0;
                }
            };
            var3.inspect = var2;
            var3 = var1.prototype;
            var2 = function(arg0, arg1, arg2) { // Environment: var0
                _fun16234: for (var _fun16234_ip = 0;;) switch (_fun16234_ip) {
                    case 0:
                        var5 = arg0;
                        var7 = arg1;
                        var8 = arg2;
                        var3 = this;
                        if (var8) {
                            _fun16234_ip = 33;
                            continue _fun16234
                        }
                    case 14:
                        var2 = _closure1_slot4;
                        var1 = undefined;
                        var0 = 'maxAge';
                        var8 = var2.bind(var1)(var3, var0);
                    case 33:
                        var9 = 0;
                        if (!var8) {
                            _fun16234_ip = 55;
                            continue _fun16234
                        }
                    case 38:
                        var0 = global;
                        var1 = var0.Date;
                        var0 = var1.now;
                        var9 = var0.bind(var1)();
                    case 55:
                        var1 = _closure1_slot4;
                        var2 = undefined;
                        var4 = 'lengthCalculator';
                        var6 = var1.bind(var2)(var3, var4);
                        var4 = var6.call;
                        var6 = var4.bind(var6)(var3, var7, var5);
                        var4 = 'cache';
                        var10 = var1.bind(var2)(var3, var4);
                        var1 = var10.has;
                        var1 = var1.bind(var10)(var5);
                        if (var1) {
                            _fun16234_ip = 316;
                            continue _fun16234
                        }
                    case 114:
                        var1 = _closure1_slot12;
                        var10 = var1.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var1
                            }
                        });
                        var19 = var10;
                        var18 = var5;
                        var17 = var7;
                        var16 = var6;
                        var15 = var9;
                        var14 = var8;
                        var1 = new var19[var1](var18, var17, var16, var15, var14, var13);
                        var13 = var1 instanceof Object ? var1 : var10;
                        var10 = var13.length;
                        var11 = _closure1_slot4;
                        var1 = 'max';
                        var1 = var11.bind(var2)(var3, var1);
                        if (!(!(var10 > var1))) {
                            _fun16234_ip = 271;
                            continue _fun16234
                        }
                    case 176:
                        var12 = _closure1_slot4;
                        var10 = 'length';
                        var11 = var12.bind(var2)(var3, var10);
                        var1 = var13.length;
                        var1 = var11 + var1;
                        var1 = var12.bind(var2)(var3, var10, var1);
                        var1 = 'lruList';
                        var11 = var12.bind(var2)(var3, var1);
                        var10 = var11.unshift;
                        var10 = var10.bind(var11)(var13);
                        var11 = var12.bind(var2)(var3, var4);
                        var10 = var11.set;
                        var1 = var12.bind(var2)(var3, var1);
                        var1 = var1.head;
                        var1 = var10.bind(var11)(var5, var1);
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var2)(var3);
                        var1 = true;
                        _fun16234_ip = 314;
                        continue _fun16234;
                    case 271:
                        var10 = _closure1_slot4;
                        var12 = 'dispose';
                        var11 = var10.bind(var2)(var3, var12);
                        var1 = false;
                        if (!var11) {
                            _fun16234_ip = 314;
                            continue _fun16234
                        }
                    case 290:
                        var11 = _closure1_slot4;
                        var12 = var11.bind(var2)(var3, var12);
                        var11 = var12.call;
                        var11 = var11.bind(var12)(var3, var5, var7);
                        var1 = false;
                    case 314:
                        return var1;
                    case 316:
                        var10 = _closure1_slot4;
                        var1 = 'max';
                        var1 = var10.bind(var2)(var3, var1);
                        if (!(!(var6 > var1))) {
                            _fun16234_ip = 483;
                            continue _fun16234
                        }
                    case 337:
                        var10 = _closure1_slot4;
                        var11 = var10.bind(var2)(var3, var4);
                        var1 = var11.get;
                        var1 = var1.bind(var11)(var5);
                        var1 = var1.value;
                        var11 = 'dispose';
                        var10 = var10.bind(var2)(var3, var11);
                        if (!var10) {
                            _fun16234_ip = 402;
                            continue _fun16234
                        }
                    case 375:
                        var10 = _closure1_slot4;
                        var12 = var10.bind(var2)(var3, var11);
                        var11 = var12.call;
                        var10 = var1.value;
                        var10 = var11.bind(var12)(var3, var5, var10);
                    case 402:
                        var1.now = var9;
                        var1.maxAge = var8;
                        var1.value = var7;
                        var9 = _closure1_slot4;
                        var8 = 'length';
                        var10 = var9.bind(var2)(var3, var8);
                        var7 = var1.length;
                        var7 = var6 - var7;
                        var7 = var10 + var7;
                        var7 = var9.bind(var2)(var3, var8, var7);
                        var1.length = var6;
                        var1 = var3.get;
                        var1 = var1.bind(var3)(var5);
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var2)(var3);
                        var1 = true;
                        return var1;
                    case 483:
                        var1 = _closure1_slot11;
                        var0 = _closure1_slot4;
                        var4 = var0.bind(var2)(var3, var4);
                        var0 = var4.get;
                        var0 = var0.bind(var4)(var5);
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = false;
                        return var0;
                }
            };
            var3.set = var2;
            var3 = var1.prototype;
            var2 = function(arg0) { // Environment: var0
                _fun16235: for (var _fun16235_ip = 0;;) switch (_fun16235_ip) {
                    case 0:
                        var6 = arg0;
                        var4 = this;
                        var0 = _closure1_slot4;
                        var3 = undefined;
                        var5 = 'cache';
                        var2 = var0.bind(var3)(var4, var5);
                        var0 = var2.has;
                        var0 = var0.bind(var2)(var6);
                        var2 = !var0;
                        var0 = !var2;
                        if (var2) {
                            _fun16235_ip = 81;
                            continue _fun16235
                        }
                    case 43:
                        var2 = _closure1_slot9;
                        var1 = _closure1_slot4;
                        var5 = var1.bind(var3)(var4, var5);
                        var1 = var5.get;
                        var1 = var1.bind(var5)(var6);
                        var1 = var1.value;
                        var1 = var2.bind(var3)(var4, var1);
                        var0 = !var1;
                    case 81:
                        return var0;
                }
            };
            var3.has = var2;
            var3 = var1.prototype;
            var2 = function(arg0) { // Environment: var0
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = this;
                var1 = arg0;
                var0 = true;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var3.get = var2;
            var3 = var1.prototype;
            var2 = function(arg0) { // Environment: var0
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = this;
                var1 = arg0;
                var0 = false;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var3.peek = var2;
            var3 = var1.prototype;
            var2 = function() { // Environment: var0
                _fun16238: for (var _fun16238_ip = 0;;) switch (_fun16238_ip) {
                    case 0:
                        var4 = this;
                        var1 = _closure1_slot4;
                        var3 = undefined;
                        var0 = 'lruList';
                        var0 = var1.bind(var3)(var4, var0);
                        var1 = var0.tail;
                        var0 = null;
                        if (!var1) {
                            _fun16238_ip = 49;
                            continue _fun16238
                        }
                    case 34:
                        var2 = _closure1_slot11;
                        var2 = var2.bind(var3)(var4, var1);
                        var0 = var1.value;
                    case 49:
                        return var0;
                }
            };
            var3.pop = var2;
            var3 = var1.prototype;
            var2 = function(arg0) { // Environment: var0
                var3 = this;
                var2 = _closure1_slot11;
                var4 = _closure1_slot4;
                var0 = undefined;
                var1 = 'cache';
                var5 = var4.bind(var0)(var3, var1);
                var4 = var5.get;
                var1 = arg0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var3.del = var2;
            var3 = var1.prototype;
            var2 = function(arg0) { // Environment: var0
                _fun16240: for (var _fun16240_ip = 0;;) switch (_fun16240_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = this;
                        var0 = var5.reset;
                        var0 = var0.bind(var5)();
                        var0 = global;
                        var1 = var0.Date;
                        var0 = var1.now;
                        var4 = var0.bind(var1)();
                        var1 = var6.length;
                        var0 = 1;
                        var3 = var1 - var0;
                        var0 = undefined;
                        var2 = 0;
                        var1 = undefined;
                        if (!(var3 >= var2)) {
                            _fun16240_ip = 144;
                            continue _fun16240
                        }
                    case 54:
                        var8 = var6[var3];
                        var7 = var8.e;
                        if (var7) {
                            _fun16240_ip = 68;
                            continue _fun16240
                        }
                    case 66:
                        var7 = 0;
                    case 68:
                        if (!(var2 !== var7)) {
                            _fun16240_ip = 110;
                            continue _fun16240
                        }
                    case 72:
                        var9 = var7 - var4;
                        var7 = var9;
                        if (!(var9 > var2)) {
                            _fun16240_ip = 134;
                            continue _fun16240
                        }
                    case 83:
                        var12 = var5.set;
                        var11 = var8.k;
                        var10 = var8.v;
                        var10 = var12.bind(var5)(var11, var10, var9);
                        var7 = var9;
                        _fun16240_ip = 134;
                        continue _fun16240;
                    case 110:
                        var10 = var5.set;
                        var9 = var8.k;
                        var8 = var8.v;
                        var8 = var10.bind(var5)(var9, var8);
                        var7 = var1;
                    case 134:
                        var3 = var3 - 1;
                        var1 = var7;
                        if (var3 >= var2) {
                            _fun16240_ip = 54;
                            continue _fun16240
                        }
                    case 144:
                        return var0;
                }
            };
            var3.load = var2;
            var1 = var1.prototype;
            var0 = function() { // Environment: var0
                var4 = this;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot4;
                var0 = undefined;
                var2 = 'cache';
                var3 = var3.bind(var0)(var4, var2);
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = arg1;
                    var1 = false;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.prune = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1387, 1389, 1390]);