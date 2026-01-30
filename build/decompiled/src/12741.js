// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = 0;
    var2 = var4[var0];
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0, arg1, arg2) { // Original name: URLSearchParamsImpl, environment: var4
            _fun97763: for (var _fun97763_ip = 0;;) switch (_fun97763_ip) {
                case 0:
                    var8 = this;
                    var0 = undefined;
                    var5 = undefined;
                    var7 = undefined;
                    var1 = arg2;
                    var2 = var1.doNotStripQMark;
                    var1 = var0 !== var2;
                    if (!var1) {
                        _fun97763_ip = 28;
                        continue _fun97763
                    }
                case 25:
                    var1 = var2;
                case 28:
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var8, var3);
                    var3 = arg1;
                    var6 = 0;
                    var5 = var3[var6];
                    var3 = new Array(0);
                    var8._list = var3;
                    var9 = null;
                    var8._url = var9;
                    if (var1) {
                        _fun97763_ip = 92;
                        continue _fun97763
                    }
                case 78:
                    var3 = var5;
                    var4 = 'string';
                    var3 = typeof var3;
                    var1 = var4 !== var3;
                case 92:
                    if (var1) {
                        _fun97763_ip = 110;
                        continue _fun97763
                    }
                case 95:
                    var3 = var5;
                    var4 = var3[var6];
                    var3 = '?';
                    var1 = var3 !== var4;
                case 110:
                    if (var1) {
                        _fun97763_ip = 129;
                        continue _fun97763
                    }
                case 113:
                    var4 = var5;
                    var3 = var4.slice;
                    var1 = 1;
                    var5 = var3.bind(var4)(var1);
                case 129:
                    var1 = global;
                    var10 = var1.Array;
                    var4 = var10.isArray;
                    var3 = var5;
                    var4 = var4.bind(var10)(var3);
                    var3 = var5;
                    if (var4) {
                        _fun97763_ip = 322;
                        continue _fun97763
                    }
                case 159:
                    var10 = 'object';
                    var4 = typeof var3;
                    if (!(var10 === var4)) {
                        _fun97763_ip = 194;
                        continue _fun97763
                    }
                case 170:
                    var11 = var1.Object;
                    var10 = var11.getPrototypeOf;
                    var4 = var5;
                    var4 = var10.bind(var11)(var4);
                    if (!(var9 !== var4)) {
                        _fun97763_ip = 239;
                        continue _fun97763
                    }
                case 194:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 2;
                    var2 = var9[var2];
                    var9 = var4.bind(var0)(var2);
                    var4 = var9.parseUrlencoded;
                    var2 = var5;
                    var2 = var4.bind(var9)(var2);
                    var8._list = var2;
                    _fun97763_ip = 439;
                    continue _fun97763;
                case 239:
                    var9 = var1.Object;
                    var4 = var9.keys;
                    var2 = var5;
                    var9 = var4.bind(var9)(var2);
                    var2 = var9;
                    var4 = var2[Symbol.iterator];
                    var2 = var4().next;
                case 264:
                    var13 = var2().value;
                    var9 = var4;
                    if (!(var9 !== var0)) {
                        _fun97763_ip = 439;
                        continue _fun97763
                    }
                case 278: // try_start_0
                    var9 = var5;
                    var12 = var9[var13];
                    var11 = var8._list;
                    var10 = var11.push;
                    var9 = new Array(2);
                    var9[0] = var13;
                    var9[1] = var12;
                    var9 = var10.bind(var11)(var9);
                case 313: // try_end0
                    _fun97763_ip = 264;
                    continue _fun97763;
                case 315: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var4.return();
                    throw var2;
                case 322:
                    var5 = var3;
                    var2 = var5[Symbol.iterator];
                    var5 = var2().next;
                    var4 = 1;
                    var3 = 2;
                case 334:
                    var9 = var5().value;
                    var10 = var2;
                    if (!(var10 !== var0)) {
                        _fun97763_ip = 439;
                        continue _fun97763
                    }
                case 345: // try_start_1
                    var7 = var9;
                    var9 = var9.length;
                    if (!(var3 === var9)) {
                        _fun97763_ip = 398;
                        continue _fun97763
                    }
                case 357:
                    var11 = var8._list;
                    var10 = var11.push;
                    var12 = var7;
                    var13 = var12[var6];
                    var9 = new Array(2);
                    var9[0] = var13;
                    var12 = var12[var4];
                    var9[1] = var12;
                    var9 = var10.bind(var11)(var9);
                case 396: // try_end1
                    _fun97763_ip = 334;
                    continue _fun97763;
                case 398: // try_start_2
                    var4 = var1.TypeError;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var15 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.";
                    var16 = var3;
                    var1 = new var16[var4](var15, var14);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 432: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 439:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_updateSteps';
        var0.key = var1;
        var1 = function() { // Original name: _updateSteps, environment: var4
            _fun97764: for (var _fun97764_ip = 0;;) switch (_fun97764_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._url;
                    var2 = null;
                    if (!(var2 !== var1)) {
                        _fun97764_ip = 85;
                        continue _fun97764
                    }
                case 15:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.serializeUrlencoded;
                    var1 = var0._list;
                    var1 = var3.bind(var4)(var1);
                    var3 = '';
                    if (!(var3 === var1)) {
                        _fun97764_ip = 67;
                        continue _fun97764
                    }
                case 65:
                    var1 = null;
                case 67:
                    var0 = var0._url;
                    var0 = var0._url;
                    var0.query = var1;
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'append';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: append, environment: var4
            var1 = this;
            var3 = var1._list;
            var2 = var3.push;
            var0 = new Array(2);
            var4 = arg0;
            var0[0] = var4;
            var4 = arg1;
            var0[1] = var4;
            var0 = var2.bind(var3)(var0);
            var0 = var1._updateSteps;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function(arg0) { // Original name: _delete, environment: var4
            _fun97766: for (var _fun97766_ip = 0;;) switch (_fun97766_ip) {
                case 0:
                    var5 = arg0;
                    var1 = this;
                    var0 = var1._list;
                    var0 = var0.length;
                    var4 = 0;
                    var0 = var4 < var0;
                    var3 = 1;
                    var2 = 0;
                    if (!var0) {
                        _fun97766_ip = 93;
                        continue _fun97766
                    }
                case 31:
                    var0 = var1._list;
                    var0 = var0[var2];
                    var0 = var0[var4];
                    if (!(var0 !== var5)) {
                        _fun97766_ip = 54;
                        continue _fun97766
                    }
                case 49:
                    var6 = var2 + 1;
                    _fun97766_ip = 75;
                    continue _fun97766;
                case 54:
                    var7 = var1._list;
                    var0 = var7.splice;
                    var0 = var0.bind(var7)(var2, var3);
                    var6 = var2;
                case 75:
                    var0 = var1._list;
                    var0 = var0.length;
                    var2 = var6;
                    if (var2 < var0) {
                        _fun97766_ip = 31;
                        continue _fun97766
                    }
                case 93:
                    var0 = var1._updateSteps;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: get, environment: var4
            _fun97767: for (var _fun97767_ip = 0;;) switch (_fun97767_ip) {
                case 0:
                    var5 = arg0;
                    var4 = undefined;
                    var0 = undefined;
                    var1 = this;
                    var2 = var1._list;
                    var3 = var2;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var2 = 0;
                case 24:
                    var6 = var3().value;
                    var7 = var1;
                    if (!(var7 !== var4)) {
                        _fun97767_ip = 73;
                        continue _fun97767
                    }
                case 35: // try_start_0
                    var0 = var6;
                    var7 = var6[var2];
                    var6 = var5;
                    if (!(var7 !== var6)) {
                        _fun97767_ip = 51;
                        continue _fun97767
                    }
                case 49: // try_end0
                    _fun97767_ip = 24;
                    continue _fun97767;
                case 51: // try_start_1
                    var2 = var0;
                    var0 = 1;
                    var0 = var2[var0];
                case 61: // try_end1
                    var1.return();
                    return var0;
                case 66: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 0);
                    var1.return();
                    throw var0;
                case 73:
                    var0 = null;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: getAll, environment: var4
            _fun97768: for (var _fun97768_ip = 0;;) switch (_fun97768_ip) {
                case 0:
                    var6 = arg0;
                    var5 = undefined;
                    var7 = undefined;
                    var0 = new Array(0);
                    var1 = this;
                    var1 = var1._list;
                    var4 = var1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var3 = 1;
                    var1 = 0;
                case 31:
                    var8 = var4().value;
                    var9 = var2;
                    if (!(var9 !== var5)) {
                        _fun97768_ip = 85;
                        continue _fun97768
                    }
                case 42: // try_start_0
                    var7 = var8;
                    var9 = var8[var1];
                    var8 = var6;
                    if (!(var9 === var8)) {
                        _fun97768_ip = 76;
                        continue _fun97768
                    }
                case 56:
                    var10 = var0;
                    var9 = var10.push;
                    var8 = var7;
                    var8 = var8[var3];
                    var8 = var9.bind(var10)(var8);
                case 76: // try_end0
                    _fun97768_ip = 31;
                    continue _fun97768;
                case 78: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 85:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function(arg0) { // Original name: has, environment: var4
            _fun97769: for (var _fun97769_ip = 0;;) switch (_fun97769_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    var0 = var0._list;
                    var3 = var0;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var2 = 0;
                    var0 = undefined;
                case 22:
                    var5 = var3().value;
                    var6 = var1;
                    if (!(var6 !== var0)) {
                        _fun97769_ip = 60;
                        continue _fun97769
                    }
                case 33: // try_start_0
                    var6 = var5[var2];
                    var5 = var4;
                    if (!(var6 !== var5)) {
                        _fun97769_ip = 46;
                        continue _fun97769
                    }
                case 44: // try_end0
                    _fun97769_ip = 22;
                    continue _fun97769;
                case 46:
                    var1.return();
                    var0 = true;
                    return var0;
                case 53: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var1.return();
                    throw var0;
                case 60:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: set, environment: var4
            _fun97770: for (var _fun97770_ip = 0;;) switch (_fun97770_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var1 = this;
                    var0 = var1._list;
                    var0 = var0.length;
                    var9 = 0;
                    var2 = var9 < var0;
                    var6 = false;
                    var8 = 1;
                    var3 = 0;
                    var0 = false;
                    if (!var2) {
                        _fun97770_ip = 130;
                        continue _fun97770
                    }
                case 38:
                    var2 = var1._list;
                    var2 = var2[var3];
                    var2 = var2[var9];
                    if (!(var2 !== var5)) {
                        _fun97770_ip = 64;
                        continue _fun97770
                    }
                case 56:
                    var10 = var3 + 1;
                    var11 = var6;
                    _fun97770_ip = 106;
                    continue _fun97770;
                case 64:
                    var12 = var1._list;
                    if (var6) {
                        _fun97770_ip = 88;
                        continue _fun97770
                    }
                case 73:
                    var2 = var12[var3];
                    var2[var8] = var4;
                    var10 = var3 + 1;
                    var11 = true;
                    _fun97770_ip = 106;
                    continue _fun97770;
                case 88:
                    var2 = var12.splice;
                    var2 = var2.bind(var12)(var3, var8);
                    var11 = var6;
                    var10 = var3;
                case 106:
                    var2 = var1._list;
                    var2 = var2.length;
                    var6 = var11;
                    var3 = var10;
                    var0 = var6;
                    if (var3 < var2) {
                        _fun97770_ip = 38;
                        continue _fun97770
                    }
                case 130:
                    if (var0) {
                        _fun97770_ip = 161;
                        continue _fun97770
                    }
                case 133:
                    var3 = var1._list;
                    var2 = var3.push;
                    var0 = new Array(2);
                    var0[0] = var5;
                    var0[1] = var4;
                    var0 = var2.bind(var3)(var0);
                case 161:
                    var0 = var1._updateSteps;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'sort';
        var0.key = var5;
        var5 = function() { // Original name: sort, environment: var4
            var2 = this;
            var4 = var2._list;
            var3 = function(arg0, arg1) { // Original name: stableSortBy, environment: var1
                var3 = arg0;
                var1 = arg1;
                var _closure4_slot0 = var1;
                var2 = var3.map;
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = {};
                    var1 = arg0;
                    var0.item = var1;
                    var1 = arg1;
                    var0.index = var1;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun97774: for (var _fun97774_ip = 0;;) switch (_fun97774_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var5 = _closure4_slot0;
                            var4 = var2.item;
                            var3 = var1.item;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4, var3);
                            if (var0) {
                                _fun97774_ip = 48;
                                continue _fun97774
                            }
                        case 34:
                            var2 = var2.index;
                            var1 = var1.index;
                            var0 = var2 - var1;
                        case 48:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.item;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = undefined;
            var1 = function(arg0, arg1) { // Environment: var1
                var0 = arg0;
                var2 = 0;
                var1 = var0[var2];
                var0 = arg1;
                var0 = var0[var2];
                var0 = var1 > var0;
                return var0;
            };
            var1 = var3.bind(var0)(var4, var1);
            var2._list = var1;
            var1 = var2._updateSteps;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = global;
        var5 = var5.Symbol;
        var5 = var5.iterator;
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._list;
            var0 = global;
            var0 = var0.Symbol;
            var0 = var0.iterator;
            var0 = var1[var0];
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'toString';
        var0.key = var5;
        var4 = function() { // Original name: toString, environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.serializeUrlencoded;
            var0 = this;
            var0 = var0._list;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2 = var1.bind(var0)();
    var1 = arg5;
    var1.implementation = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12739]);