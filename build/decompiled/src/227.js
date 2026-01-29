// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0) { // Original name: URLSearchParams, environment: var4
            _fun3133: for (var _fun3133_ip = 0;;) switch (_fun3133_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var4, var2);
                    var2 = global;
                    var3 = var2.Map;
                    var6 = var3.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var6;
                    var3 = new var9[var3](var8);
                    var3 = var3 instanceof Object ? var3 : var6;
                    var4._searchParams = var3;
                    var3 = null;
                    if (!(var3 !== var5)) {
                        _fun3133_ip = 224;
                        continue _fun3133
                    }
                case 77:
                    var4 = typeof var5;
                    var3 = 'string';
                    if (!(var3 !== var4)) {
                        _fun3133_ip = 166;
                        continue _fun3133
                    }
                case 88:
                    var6 = var2.Array;
                    var3 = var6.isArray;
                    var3 = var3.bind(var6)(var5);
                    if (var3) {
                        _fun3133_ip = 149;
                        continue _fun3133
                    }
                case 107:
                    var3 = 'object';
                    if (!(var3 === var4)) {
                        _fun3133_ip = 224;
                        continue _fun3133
                    }
                case 115:
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var4 = var2.bind(var3)(var5);
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot1;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = 2;
                        var1 = var3.bind(var2)(var1, var0);
                        var0 = 0;
                        var3 = var1[var0];
                        var0 = 1;
                        var2 = var1[var0];
                        var1 = _closure3_slot0;
                        var0 = var1.append;
                        var0 = var0.bind(var1)(var3, var2);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun3133_ip = 224;
                    continue _fun3133;
                case 149:
                    var3 = var5.forEach;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot1;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = 2;
                        var1 = var3.bind(var2)(var1, var0);
                        var0 = 0;
                        var3 = var1[var0];
                        var0 = 1;
                        var2 = var1[var0];
                        var1 = _closure3_slot0;
                        var0 = var1.append;
                        var0 = var0.bind(var1)(var3, var2);
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2);
                    _fun3133_ip = 224;
                    continue _fun3133;
                case 166:
                    var4 = var5.replace;
                    var3 = /^\?/;
                    var2 = '';
                    var4 = var4.bind(var5)(var3, var2);
                    var3 = var4.split;
                    var2 = '&';
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun3134: for (var _fun3134_ip = 0;;) switch (_fun3134_ip) {
                            case 0:
                                var2 = arg0;
                                if (!var2) {
                                    _fun3134_ip = 87;
                                    continue _fun3134
                                }
                            case 6:
                                var1 = var2.split;
                                var0 = '=';
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    var4 = arg0;
                                    var0 = global;
                                    var2 = var0.decodeURIComponent;
                                    var3 = var4.replace;
                                    var1 = /\+/g;
                                    var0 = ' ';
                                    var1 = var3.bind(var4)(var1, var0);
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3 = var1.bind(var2)(var0);
                                var2 = _closure1_slot1;
                                var1 = undefined;
                                var0 = 2;
                                var1 = var2.bind(var1)(var3, var0);
                                var0 = 0;
                                var3 = var1[var0];
                                var0 = 1;
                                var2 = var1[var0];
                                var1 = _closure3_slot0;
                                var0 = var1.append;
                                var0 = var0.bind(var1)(var3, var2);
                            case 87:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 224:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'size';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._searchParams;
            var0 = var0.size;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(14);
        var1[0] = var0;
        var0 = {};
        var5 = 'append';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: append, environment: var4
            _fun3139: for (var _fun3139_ip = 0;;) switch (_fun3139_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var4 = var1._searchParams;
                    var0 = var4.has;
                    var0 = var0.bind(var4)(var3);
                    var1 = var1._searchParams;
                    if (var0) {
                        _fun3139_ip = 55;
                        continue _fun3139
                    }
                case 34:
                    var4 = var1.set;
                    var0 = new Array(1);
                    var0[0] = var2;
                    var0 = var4.bind(var1)(var3, var0);
                    _fun3139_ip = 81;
                    continue _fun3139;
                case 55:
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var3);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun3139_ip = 81;
                        continue _fun3139
                    }
                case 71:
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function(arg0) { // Original name: _delete, environment: var4
            var0 = this;
            var2 = var0._searchParams;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: get, environment: var4
            _fun3141: for (var _fun3141_ip = 0;;) switch (_fun3141_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._searchParams;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!var2) {
                        _fun3141_ip = 33;
                        continue _fun3141
                    }
                case 27:
                    var1 = 0;
                    var0 = var2[var1];
                case 33:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: getAll, environment: var4
            _fun3142: for (var _fun3142_ip = 0;;) switch (_fun3142_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._searchParams;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun3142_ip = 32;
                        continue _fun3142
                    }
                case 28:
                    var0 = new Array(0);
                case 32:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function(arg0) { // Original name: has, environment: var4
            var0 = this;
            var2 = var0._searchParams;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: set, environment: var4
            var0 = this;
            var3 = var0._searchParams;
            var2 = var3.set;
            var1 = new Array(1);
            var0 = arg1;
            var1[0] = var0;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'keys';
        var0.key = var5;
        var5 = function() { // Original name: keys, environment: var4
            var0 = this;
            var1 = var0._searchParams;
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var5 = function() { // Original name: values, environment: var4
            var0 = this;
            var2 = var0._searchParams;
            var1 = function*(arg0) { // Original name: generateValues, environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_generateValues, environment: var0
                    _fun3148: for (var _fun3148_ip = 0;;) switch (_fun3148_ip) {
                        case 0:
                            StartGenerator();
                            var2 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun3148_ip = 95;
                                continue _fun3148
                            }
                        case 10:
                            var1 = var2.values;
                            var1 = var1.bind(var2)();
                            var2 = var1;
                            var3 = var2[Symbol.iterator];
                            var2 = var3().next;
                            var1 = undefined;
                        case 27:
                            var4 = var2().value;
                            var5 = var3;
                            if (!(var5 !== var1)) {
                                _fun3148_ip = 92;
                                continue _fun3148
                            }
                        case 38: // try_start_1
                            var6 = var4;
                            var5 = var6[Symbol.iterator];
                            var6 = var5().next;
                        case 44:
                            var4 = var6().value;
                            var7 = var5;
                            if (!(var7 !== var1)) {
                                _fun3148_ip = 83;
                                continue _fun3148
                            }
                        case 55: // try_start_0
                            SaveGenerator(address = 59);
                        case 57:
                            return var4;
                        case 59:
                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                            if (var7) {
                                _fun3148_ip = 67;
                                continue _fun3148
                            }
                        case 65: // try_end0
                            _fun3148_ip = 44;
                            continue _fun3148;
                        case 67:
                            var5.return();
                        case 70: // try_end1
                            var3.return();
                            return var4;
                        case 76: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var5.return();
                            throw var4;
                        case 83: // try_end2
                            _fun3148_ip = 27;
                            continue _fun3148;
                        case 85: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 2);
                            var3.return();
                            throw var2;
                        case 92:
                            return var1;
                        case 95:
                            return var0;
                    }
                };
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'entries';
        var0.key = var5;
        var5 = function() { // Original name: entries, environment: var4
            var0 = this;
            var2 = var0._searchParams;
            var1 = function*(arg0) { // Original name: generateEntries, environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_generateEntries, environment: var0
                    _fun3151: for (var _fun3151_ip = 0;;) switch (_fun3151_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun3151_ip = 132;
                                continue _fun3151
                            }
                        case 10:
                            var1 = undefined;
                            var8 = undefined;
                            var7 = arg0;
                            var3 = var7[Symbol.iterator];
                            var7 = var3().next;
                            var5 = 2;
                            var4 = 0;
                            var2 = 1;
                        case 31:
                            var10 = var7().value;
                            var9 = var3;
                            if (!(var9 !== var1)) {
                                _fun3151_ip = 129;
                                continue _fun3151
                            }
                        case 42: // try_start_1
                            var9 = _closure1_slot1;
                            var9 = var9.bind(var1)(var10, var5);
                            var8 = var9[var4];
                            var9 = var9[var2];
                            var11 = var9;
                            var10 = var11[Symbol.iterator];
                            var11 = var10().next;
                        case 66:
                            var12 = var11().value;
                            var9 = var10;
                            if (!(var9 !== var1)) {
                                _fun3151_ip = 120;
                                continue _fun3151
                            }
                        case 77: // try_start_0
                            var13 = var8;
                            var9 = new Array(2);
                            var9[0] = var13;
                            var9[1] = var12;
                            SaveGenerator(address = 96);
                        case 94:
                            return var9;
                        case 96:
                            ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 12);
                            if (var12) {
                                _fun3151_ip = 104;
                                continue _fun3151
                            }
                        case 102: // try_end0
                            _fun3151_ip = 66;
                            continue _fun3151;
                        case 104:
                            var10.return();
                        case 107: // try_end1
                            var3.return();
                            return var9;
                        case 113: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 9);
                            var10.return();
                            throw var9;
                        case 120: // try_end2
                            _fun3151_ip = 31;
                            continue _fun3151;
                        case 122: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 2);
                            var3.return();
                            throw var2;
                        case 129:
                            return var1;
                        case 132:
                            return var0;
                    }
                };
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'forEach';
        var0.key = var5;
        var5 = function(arg0) { // Original name: forEach, environment: var4
            _fun3152: for (var _fun3152_ip = 0;;) switch (_fun3152_ip) {
                case 0:
                    var9 = this;
                    var7 = arg0;
                    var0 = undefined;
                    var8 = undefined;
                    var1 = var9._searchParams;
                    var6 = var1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = 2;
                    var3 = 0;
                    var1 = 1;
                case 33:
                    var11 = var6().value;
                    var10 = var2;
                    if (!(var10 !== var0)) {
                        _fun3152_ip = 110;
                        continue _fun3152
                    }
                case 44: // try_start_1
                    var10 = _closure1_slot1;
                    var10 = var10.bind(var0)(var11, var4);
                    var8 = var10[var3];
                    var12 = var10[var1];
                    var10 = var12;
                    var11 = var10[Symbol.iterator];
                    var10 = var11().next;
                case 68:
                    var14 = var10().value;
                    var12 = var11;
                    if (!(var12 !== var0)) {
                        _fun3152_ip = 101;
                        continue _fun3152
                    }
                case 79: // try_start_0
                    var13 = var7;
                    var12 = var8;
                    var12 = var13.bind(var0)(var14, var12, var9);
                case 92: // try_end0
                    _fun3152_ip = 68;
                    continue _fun3152;
                case 94: // catch_target0
                    CatchBlockStart(arg_register = 10);
                    var11.return();
                    throw var10;
                case 101: // try_end1
                    _fun3152_ip = 33;
                    continue _fun3152;
                case 103: // catch_target1
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 110:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'sort';
        var0.key = var5;
        var5 = function() { // Original name: sort, environment: var4
            var2 = this;
            var0 = global;
            var4 = var0.Map;
            var3 = _closure1_slot0;
            var1 = var2._searchParams;
            var0 = var1.entries;
            var1 = var0.bind(var1)();
            var0 = undefined;
            var5 = var3.bind(var0)(var1);
            var3 = var5.sort;
            var1 = function(arg0, arg1) { // Environment: var1
                var5 = _closure1_slot1;
                var4 = undefined;
                var0 = arg0;
                var3 = 1;
                var0 = var5.bind(var4)(var0, var3);
                var1 = 0;
                var2 = var0[var1];
                var0 = arg1;
                var0 = var5.bind(var4)(var0, var3);
                var1 = var0[var1];
                var0 = var2.localeCompare;
                var0 = var0.bind(var2)(var1);
                return var0;
            };
            var6 = var3.bind(var5)(var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._searchParams = var1;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = global;
        var5 = var5.Symbol;
        var5 = var5.iterator;
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun3155: for (var _fun3155_ip = 0;;) switch (_fun3155_ip) {
                case 0:
                    var7 = undefined;
                    var8 = undefined;
                    var0 = new Array(0);
                    var1 = this;
                    var1 = var1._searchParams;
                    var6 = var1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = 2;
                    var3 = 0;
                    var1 = 1;
                case 34:
                    var10 = var6().value;
                    var9 = var2;
                    if (!(var9 !== var7)) {
                        _fun3155_ip = 126;
                        continue _fun3155
                    }
                case 45: // try_start_1
                    var9 = _closure1_slot1;
                    var9 = var9.bind(var7)(var10, var4);
                    var8 = var9[var3];
                    var11 = var9[var1];
                    var9 = var11;
                    var10 = var9[Symbol.iterator];
                    var9 = var10().next;
                case 69:
                    var14 = var9().value;
                    var11 = var10;
                    if (!(var11 !== var7)) {
                        _fun3155_ip = 117;
                        continue _fun3155
                    }
                case 80: // try_start_0
                    var13 = var0;
                    var12 = var13.push;
                    var15 = var8;
                    var11 = new Array(2);
                    var11[0] = var15;
                    var11[1] = var14;
                    var11 = var12.bind(var13)(var11);
                case 108: // try_end0
                    _fun3155_ip = 69;
                    continue _fun3155;
                case 110: // catch_target0
                    CatchBlockStart(arg_register = 9);
                    var10.return();
                    throw var9;
                case 117: // try_end1
                    _fun3155_ip = 34;
                    continue _fun3155;
                case 119: // catch_target1
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 126:
                    var1 = var0;
                    var0 = global;
                    var0 = var0.Symbol;
                    var0 = var0.iterator;
                    var0 = var1[var0];
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'toString';
        var0.key = var5;
        var4 = function() { // Original name: toString, environment: var4
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = this;
            var3 = var0._searchParams;
            var0 = var3.entries;
            var0 = var0.bind(var3)();
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var4 = _closure1_slot1;
                var3 = undefined;
                var2 = arg0;
                var1 = 2;
                var2 = var4.bind(var3)(var2, var1);
                var1 = 0;
                var1 = var2[var1];
                var _closure4_slot0 = var1;
                var1 = 1;
                var2 = var2[var1];
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.encodeURIComponent;
                    var1 = _closure4_slot0;
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.replace;
                    var1 = /%20/g;
                    var5 = '+';
                    var4 = var2.bind(var4)(var1, var5);
                    var2 = var0.encodeURIComponent;
                    var1 = arg0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.replace;
                    var1 = /%20/g;
                    var3 = var2.bind(var3)(var1, var5);
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = '=';
                    var0 = var2.bind(var1)(var4, var0, var3);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '&';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.join;
            var0 = '&';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[13] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.URLSearchParams = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 6, 7]);