// ../discord_common/js/packages/kv-storage/js/api/Database.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun18505: for (var _fun18505_ip = 0;;) switch (_fun18505_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18505_ip = 46;
                    continue _fun18505
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun18505_ip = 55;
                    continue _fun18505
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun18505_ip = 343;
                    continue _fun18505
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18505_ip = 323;
                    continue _fun18505
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18505_ip = 283;
                    continue _fun18505
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18505_ip = 270;
                    continue _fun18505
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun18505_ip = 163;
                    continue _fun18505
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun18505_ip = 179;
                    continue _fun18505
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18505_ip = 249;
                    continue _fun18505
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18505_ip = 249;
                    continue _fun18505
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18505_ip = 234;
                    continue _fun18505
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18505_ip = 247;
                    continue _fun18505
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun18505_ip = 265;
                continue _fun18505;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun18505_ip = 283;
                continue _fun18505;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun18505_ip = 323;
                    continue _fun18505
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun18505_ip = 330;
                    continue _fun18505
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18506: for (var _fun18506_ip = 0;;) switch (_fun18506_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18506_ip = 56;
                                continue _fun18506
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun18506_ip = 67;
                            continue _fun18506;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun18507: for (var _fun18507_ip = 0;;) switch (_fun18507_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18507_ip = 23;
                    continue _fun18507
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18507_ip = 33;
                    continue _fun18507
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun18507_ip = 70;
                    continue _fun18507
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18507_ip = 55;
                    continue _fun18507
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = function() { // Environment: var4
        var4 = function arg0() {
            var3 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot4;
            var4 = _closure2_slot2;
            var0 = undefined;
            var4 = var6.bind(var0)(var2, var4);
            var2.raw = var3;
            var4 = var3.name;
            var2.name = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 3;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.DatabaseState;
            var6 = var6.Open;
            var2.lastState = var6;
            var3 = var3.handle;
            var2.handle = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var4 = var3.Runtime;
            var3 = var4.addDatabaseStateCallback;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun18510: for (var _fun18510_ip = 0;;) switch (_fun18510_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.handle;
                        var1 = arg0;
                        if (!(var2 === var1)) {
                            _fun18510_ip = 33;
                            continue _fun18510
                        }
                    case 20:
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1.lastState = var0;
                    case 33:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2.databaseStateCallback = var1;
            return var0;
        };
        var _closure2_slot2 = var4;
        var3 = _closure1_slot5;
        var0 = {};
        var2 = 'close';
        var0.key = var2;
        var2 = function() {
            _fun18511: for (var _fun18511_ip = 0;;) switch (_fun18511_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.DatabaseState;
                    var3 = var3.Closed;
                    var1.lastState = var3;
                    var5 = var1.raw;
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun18511_ip = 67;
                        continue _fun18511
                    }
                case 57:
                    var4 = var5.close;
                    var4 = var4.bind(var5)();
                case 67:
                    var1.raw = var3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.Runtime;
                    var2 = var3.removeCompletionCallback;
                    var1 = var1.databaseStateCallback;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(11);
        var2[0] = var0;
        var0 = {};
        var5 = 'disable';
        var0.key = var5;
        var5 = function arg0() {
            _fun18512: for (var _fun18512_ip = 0;;) switch (_fun18512_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.raw;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun18512_ip = 92;
                        continue _fun18512
                    }
                case 14:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = var0.DatabaseState;
                    var0 = var0.Disabled;
                    var2.lastState = var0;
                    var1 = var2.execute;
                    var0 = {
                        'type': 'db.disable',
                        'handle': 0
                    };
                    var3 = arg0;
                    var0.reason = var3;
                    var0 = var1.bind(var2)(var0);
                    _fun18512_ip = 110;
                    continue _fun18512;
                case 92:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var0 = var1.bind(var2)();
                case 110:
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'execute';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun18513: for (var _fun18513_ip = 0;;) switch (_fun18513_ip) {
                case 0:
                    var6 = arg0;
                    var8 = arg1;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var8;
                    var0 = var3.raw;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun18513_ip = 180;
                        continue _fun18513
                    }
                case 37:
                    var0 = 'key';
                    var0 = var0 in var6;
                    if (var0) {
                        _fun18513_ip = 56;
                        continue _fun18513
                    }
                case 48:
                    var0 = var6.table;
                    _fun18513_ip = 67;
                    continue _fun18513;
                case 56:
                    var5 = var6.key;
                    var4 = 0;
                    var0 = var5[var4];
                case 67:
                    var2 = function() {
                        _fun18514: for (var _fun18514_ip = 0;;) switch (_fun18514_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var3 = var0.Runtime;
                                var2 = var3.executeAsync;
                                var4 = _closure3_slot2;
                                var1 = null;
                                if (!(var1 == var4)) {
                                    _fun18514_ip = 61;
                                    continue _fun18514
                                }
                            case 50:
                                var1 = _closure3_slot1;
                                var1 = var1.type;
                                _fun18514_ip = 65;
                                continue _fun18514;
                            case 61:
                                var1 = _closure3_slot2;
                            case 65:
                                var0 = function(arg0) { // Environment: var0
                                    var1 = _closure3_slot0;
                                    var3 = var1.raw;
                                    var2 = var3.execute;
                                    var1 = {};
                                    var5 = _closure3_slot1;
                                    var6 = var1;
                                    var0 = copyDataProperties(var6, var5);
                                    var4 = 0;
                                    var0 = 'handle';
                                    var1[var0] = var4;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0, var1);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    if (!(var1 !== var8)) {
                        _fun18513_ip = 172;
                        continue _fun18513
                    }
                case 76:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.timeAsync;
                    if (!(var1 == var8)) {
                        _fun18513_ip = 116;
                        continue _fun18513
                    }
                case 111:
                    var8 = var6.type;
                case 116:
                    var1 = var1 != var0;
                    var7 = '';
                    var6 = var7;
                    if (!var1) {
                        _fun18513_ip = 133;
                        continue _fun18513
                    }
                case 130:
                    var6 = var0;
                case 133:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = ' ';
                    var1 = var1.bind(var7)(var8, var0, var6);
                    var0 = '💾';
                    var0 = var4.bind(var5)(var0, var1, var2);
                    _fun18513_ip = 178;
                    continue _fun18513;
                case 172:
                    var1 = undefined;
                    var0 = var2.bind(var1)();
                case 178:
                    return var0;
                case 180:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'database is no longer open (database: ';
                    var11 = var1.bind(var0)(var3);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'executeSync';
        var0.key = var5;
        var5 = function arg0() {
            _fun18516: for (var _fun18516_ip = 0;;) switch (_fun18516_ip) {
                case 0:
                    var6 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var1 = var3.raw;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun18516_ip = 160;
                        continue _fun18516
                    }
                case 30:
                    var1 = 'key';
                    var1 = var1 in var6;
                    if (var1) {
                        _fun18516_ip = 49;
                        continue _fun18516
                    }
                case 41:
                    var1 = var6.table;
                    _fun18516_ip = 60;
                    continue _fun18516;
                case 49:
                    var5 = var6.key;
                    var4 = 0;
                    var1 = var5[var4];
                case 60:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.time;
                    var8 = var6.type;
                    var2 = var2 != var1;
                    var7 = '';
                    if (!var2) {
                        _fun18516_ip = 110;
                        continue _fun18516
                    }
                case 107:
                    var7 = var1;
                case 110:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var2 = 'SYNC: ';
                    var1 = ' ';
                    var2 = var6.bind(var2)(var8, var1, var7);
                    var1 = '💾';
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var4 = var1.raw;
                        var3 = var4.execute;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var7 = var2;
                        var0 = copyDataProperties(var7, var6);
                        var1 = 0;
                        var0 = 'handle';
                        var2[var0] = var1;
                        var1 = {};
                        var0 = true;
                        var1.synchronous = var0;
                        var0 = null;
                        var0 = var3.bind(var4)(var0, var2, var1);
                        return var0;
                    };
                    var0 = var4.bind(var5)(var1, var2, var0);
                    return var0;
                case 160:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'database is no longer open (database: ';
                    var11 = var1.bind(var0)(var3);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'fullVacuum';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.execute;
            var0 = {
                'type': 'db.vacuum',
                'handle': 0,
                'complete': true
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'fsInfo';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.execute;
            var0 = {
                'type': 'db.fs_info',
                'handle': 0
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'incrementalVacuum';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.execute;
            var0 = {
                'type': 'db.vacuum',
                'handle': 0,
                'complete': false
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = 'instantaneousState';
        var0.key = var5;
        var5 = function() {
            _fun18521: for (var _fun18521_ip = 0;;) switch (_fun18521_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.raw;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun18521_ip = 45;
                        continue _fun18521
                    }
                case 14:
                    var2 = var1.executeSync;
                    var0 = {};
                    var3 = 'db.state';
                    var0.type = var3;
                    var0 = var2.bind(var1)(var0);
                    var1.lastState = var0;
                    _fun18521_ip = 82;
                    continue _fun18521;
                case 45:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.DatabaseState;
                    var0 = var1.Closed;
                case 82:
                    return var0;
            }
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = 'instantaneousStateAsync';
        var0.key = var5;
        var7 = _closure1_slot3;
        var1 = undefined;
        var5 = function*() { // Environment: var6
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun18523: for (var _fun18523_ip = 0;;) switch (_fun18523_ip) {
                    case 0:
                        StartGenerator();
                        var1 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun18523_ip = 108;
                            continue _fun18523
                        }
                    case 10:
                        var3 = var1.raw;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun18523_ip = 68;
                            continue _fun18523
                        }
                    case 21:
                        var3 = var1.execute;
                        var2 = {};
                        var4 = 'db.state';
                        var2.type = var4;
                        var2 = var3.bind(var1)(var2);
                        SaveGenerator(address = 48);
                    case 46:
                        return var2;
                    case 48:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun18523_ip = 65;
                            continue _fun18523
                        }
                    case 54:
                        var1.lastState = var2;
                        var1 = var2;
                        _fun18523_ip = 105;
                        continue _fun18523;
                    case 65:
                        return var2;
                    case 68:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.DatabaseState;
                        var1 = var2.Closed;
                    case 105:
                        return var1;
                    case 108:
                        return var0;
                }
            };
            return var0;
        };
        var5 = var7.bind(var1)(var5);
        var _closure2_slot1 = var5;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = 'state';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.lastState;
            return var0;
        };
        var0.value = var5;
        var2[9] = var0;
        var0 = {};
        var5 = 'transaction';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = _closure1_slot6;
            var2 = var1.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var1
                }
            });
            var5 = var2;
            var4 = var3;
            var1 = new var5[var1](var4, var3);
            var3 = var1 instanceof Object ? var1 : var2;
            var _closure3_slot2 = var3;
            var2 = arg0;
            var1 = undefined;
            var3 = var2.bind(var1)(var3);
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var2 = var1.bind(var2)(var3);
            var1 = var2.then;
            var0 = function() { // Environment: var0
                _fun18527: for (var _fun18527_ip = 0;;) switch (_fun18527_ip) {
                    case 0:
                        var0 = _closure3_slot2;
                        var0 = var0.operations;
                        var2 = var0.length;
                        var0 = 0;
                        if (!(!(var2 > var0))) {
                            _fun18527_ip = 44;
                            continue _fun18527
                        }
                    case 24:
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.resolve;
                        var0 = var0.bind(var2)();
                        _fun18527_ip = 95;
                        continue _fun18527;
                    case 44:
                        var4 = _closure3_slot0;
                        var3 = var4.execute;
                        var2 = {};
                        var5 = 'db.transaction';
                        var2.type = var5;
                        var6 = _closure3_slot2;
                        var5 = var6.complete;
                        var5 = var5.bind(var6)();
                        var2.operations = var5;
                        var1 = _closure3_slot1;
                        var0 = var3.bind(var4)(var2, var1);
                    case 95:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[10] = var0;
        var5 = {};
        var0 = 'open';
        var5.key = var0;
        var0 = function*(arg0, arg1) { // Environment: var6
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun18529: for (var _fun18529_ip = 0;;) switch (_fun18529_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun18529_ip = 102;
                            continue _fun18529
                        }
                    case 7:
                        var2 = _closure2_slot2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var5 = var1.Host;
                        var4 = var5.open;
                        var3 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var3, var1);
                        SaveGenerator(address = 67);
                    case 65:
                        return var1;
                    case 67:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun18529_ip = 99;
                            continue _fun18529
                        }
                    case 73:
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var8 = var3;
                        var7 = var1;
                        var2 = new var8[var2](var7, var6);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 99:
                        return var1;
                    case 102:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var5.value = var0;
        var0 = new Array(3);
        var0[0] = var5;
        var5 = {};
        var7 = 'openSyncUnsafe';
        var5.key = var7;
        var7 = function arg0, arg1() {
            var2 = _closure2_slot2;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var1);
            var4 = var0.Host;
            var3 = var4.openSyncUnsafe;
            var1 = arg0;
            var0 = arg1;
            var6 = var3.bind(var4)(var1, var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var7 = var1;
            var0 = new var7[var2](var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var7;
        var0[1] = var5;
        var5 = {};
        var7 = 'delete';
        var5.key = var7;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.Host;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var0[2] = var5;
        var0 = var3.bind(var1)(var4, var2, var0);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = function() { // Environment: var4
        var3 = _closure1_slot5;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.database = var1;
            var1 = new Array(0);
            var2.operations = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'add';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0.operations;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'complete';
        var0.key = var5;
        var5 = function() {
            _fun18536: for (var _fun18536_ip = 0;;) switch (_fun18536_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot7;
                    var1 = var0.operations;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = 0;
                    if (var1) {
                        _fun18536_ip = 63;
                        continue _fun18536
                    }
                case 37:
                    var1 = var2.value;
                    var1.handle = var3;
                    var6 = var4.bind(var5)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun18536_ip = 37;
                        continue _fun18536
                    }
                case 63:
                    var0 = var0.operations;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'toString';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.database;
            var9 = var1.handle;
            var0 = var0.operations;
            var7 = var0.length;
            var0 = global;
            var0 = var0.HermesInternal;
            var3 = var0.concat;
            var10 = '[DatabaseTransaction ';
            var8 = ': ';
            var6 = ' ops]';
            var0 = var10[var3](var9, var8, var7, var6, var5);
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot6 = var1;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/api/Database.tsx';
    var4 = var5.bind(var6)(var4);
    var2.Database = var3;
    var2.DatabaseTransaction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1644, 1646, 20, 1647, 2]);