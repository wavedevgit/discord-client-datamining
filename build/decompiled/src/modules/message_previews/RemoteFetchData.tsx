// modules/message_previews/RemoteFetchData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun85227: for (var _fun85227_ip = 0;;) switch (_fun85227_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun85227_ip = 46;
                    continue _fun85227
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun85227_ip = 55;
                    continue _fun85227
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun85227_ip = 345;
                    continue _fun85227
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun85227_ip = 323;
                    continue _fun85227
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun85227_ip = 283;
                    continue _fun85227
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun85227_ip = 270;
                    continue _fun85227
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
                    _fun85227_ip = 163;
                    continue _fun85227
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun85227_ip = 179;
                    continue _fun85227
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun85227_ip = 249;
                    continue _fun85227
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun85227_ip = 249;
                    continue _fun85227
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun85227_ip = 234;
                    continue _fun85227
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun85227_ip = 247;
                    continue _fun85227
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun85227_ip = 265;
                continue _fun85227;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun85227_ip = 283;
                continue _fun85227;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun85227_ip = 323;
                    continue _fun85227
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
                    _fun85227_ip = 330;
                    continue _fun85227
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun85228: for (var _fun85228_ip = 0;;) switch (_fun85228_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun85228_ip = 56;
                                continue _fun85228
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
                            _fun85228_ip = 67;
                            continue _fun85228;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun85229: for (var _fun85229_ip = 0;;) switch (_fun85229_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun85229_ip = 23;
                    continue _fun85229
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun85229_ip = 33;
                    continue _fun85229
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
                    _fun85229_ip = 70;
                    continue _fun85229
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun85229_ip = 55;
                    continue _fun85229
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var6 = 1;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = {};
    var3.Pending = var7;
    var4 = 'Pending';
    var3[var7] = var4;
    var3.Fetching = var6;
    var4 = 'Fetching';
    var3[var6] = var4;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot1;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.pending = var3;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.fetching = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'empty';
        var4.key = var1;
        var1 = function() {
            _fun85232: for (var _fun85232_ip = 0;;) switch (_fun85232_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.pending;
                    var0 = var0.size;
                    var2 = 0;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun85232_ip = 38;
                        continue _fun85232
                    }
                case 23:
                    var1 = var1.fetching;
                    var1 = var1.size;
                    var0 = var2 === var1;
                case 38:
                    return var0;
            }
        };
        var4.value = var1;
        var1 = new Array(9);
        var1[0] = var4;
        var4 = {};
        var6 = 'status';
        var4.key = var6;
        var6 = function arg0() {
            _fun85233: for (var _fun85233_ip = 0;;) switch (_fun85233_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.pending;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun85233_ip = 61;
                        continue _fun85233
                    }
                case 25:
                    var1 = var0.fetching;
                    var0 = var1.has;
                    var1 = var0.bind(var1)(var2);
                    var0 = null;
                    if (!var1) {
                        _fun85233_ip = 59;
                        continue _fun85233
                    }
                case 46:
                    var1 = _closure1_slot3;
                    var0 = var1.Fetching;
                case 59:
                    _fun85233_ip = 74;
                    continue _fun85233;
                case 61:
                    var1 = _closure1_slot3;
                    var0 = var1.Pending;
                case 74:
                    return var0;
            }
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'addWant';
        var4.key = var6;
        var6 = function arg0() {
            _fun85234: for (var _fun85234_ip = 0;;) switch (_fun85234_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.fetching;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun85234_ip = 41;
                        continue _fun85234
                    }
                case 25:
                    var1 = var0.pending;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'removeWant';
        var4.key = var6;
        var6 = function arg0() {
            var2 = arg0;
            var0 = this;
            var3 = var0.pending;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var2);
            var1 = var0.fetching;
            var0 = var1.delete;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = 'nextWants';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var6 = var0.pending;
            var0 = new Array(0);
            var5 = 0;
            var7 = var0;
            var1 = arraySpread(var7, var6, var5);
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var2 = var0.length;
            var1 = arg0;
            var1 = var3.bind(var4)(var1, var2);
            var0.length = var1;
            return var0;
        };
        var4.value = var6;
        var1[4] = var4;
        var4 = {};
        var6 = 'markFetching';
        var4.key = var6;
        var6 = function arg0() {
            _fun85237: for (var _fun85237_ip = 0;;) switch (_fun85237_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun85237_ip = 84;
                        continue _fun85237
                    }
                case 32:
                    var6 = var2.value;
                    var5 = var4.pending;
                    var1 = var5.delete;
                    var1 = var1.bind(var5)(var6);
                    var5 = var4.fetching;
                    var1 = var5.add;
                    var1 = var1.bind(var5)(var6);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun85237_ip = 32;
                        continue _fun85237
                    }
                case 84:
                    return var0;
            }
        };
        var4.value = var6;
        var1[5] = var4;
        var4 = {};
        var6 = 'markCompleted';
        var4.key = var6;
        var6 = function arg0() {
            _fun85238: for (var _fun85238_ip = 0;;) switch (_fun85238_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun85238_ip = 84;
                        continue _fun85238
                    }
                case 32:
                    var6 = var2.value;
                    var5 = var4.pending;
                    var1 = var5.delete;
                    var1 = var1.bind(var5)(var6);
                    var5 = var4.fetching;
                    var1 = var5.delete;
                    var1 = var1.bind(var5)(var6);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun85238_ip = 32;
                        continue _fun85238
                    }
                case 84:
                    return var0;
            }
        };
        var4.value = var6;
        var1[6] = var4;
        var4 = {};
        var6 = 'markFailed';
        var4.key = var6;
        var6 = function arg0() {
            _fun85239: for (var _fun85239_ip = 0;;) switch (_fun85239_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun85239_ip = 84;
                        continue _fun85239
                    }
                case 32:
                    var6 = var2.value;
                    var5 = var4.pending;
                    var1 = var5.add;
                    var1 = var1.bind(var5)(var6);
                    var5 = var4.fetching;
                    var1 = var5.delete;
                    var1 = var1.bind(var5)(var6);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun85239_ip = 32;
                        continue _fun85239
                    }
                case 84:
                    return var0;
            }
        };
        var4.value = var6;
        var1[7] = var4;
        var4 = {};
        var6 = 'try';
        var4.key = var6;
        var7 = _closure1_slot0;
        var0 = undefined;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun85241: for (var _fun85241_ip = 0;;) switch (_fun85241_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun85241_ip = 90;
                            continue _fun85241
                        }
                    case 10:
                        var2 = arg0;
                        var1 = arg1;
                    case 16: // try_start_0
                        var5 = var4.markFetching;
                        var3 = var2;
                        var3 = var5.bind(var4)(var3);
                        var3 = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)();
                        SaveGenerator(address = 45);
                    case 43:
                        return var1;
                    case 45:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun85241_ip = 70;
                            continue _fun85241
                        }
                    case 51:
                        var5 = var4.markCompleted;
                        var3 = var2;
                        var3 = var5.bind(var4)(var3);
                    case 67: // try_end0
                        return var1;
                    case 70:
                        return var1;
                    case 73: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = var4.markFailed;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 90:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var1[8] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 3;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_previews/RemoteFetchData.tsx';
    var4 = var5.bind(var6)(var4);
    var2.FetchStatus = var3;
    var2.RemoteFetchData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 2]);