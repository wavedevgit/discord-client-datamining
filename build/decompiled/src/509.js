// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6526: for (var _fun6526_ip = 0;;) switch (_fun6526_ip) {
        case 0:
            var1 = exports;
            var _closure1_slot0 = var1;
            var2 = function arg0, arg1() {
                _fun6527: for (var _fun6527_ip = 0;;) switch (_fun6527_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure2_slot0 = var5;
                        var0 = global;
                        var2 = var0.Symbol;
                        var3 = 'undefined';
                        var2 = typeof var2;
                        var2 = var3 !== var2;
                        if (!var2) {
                            _fun6527_ip = 46;
                            continue _fun6527
                        }
                    case 30:
                        var3 = var0.Symbol;
                        var3 = var3.iterator;
                        var2 = var5[var3];
                    case 46:
                        if (var2) {
                            _fun6527_ip = 55;
                            continue _fun6527
                        }
                    case 49:
                        var2 = var5["@@iterator"];
                    case 55:
                        var _closure2_slot1 = var2;
                        if (var2) {
                            _fun6527_ip = 389;
                            continue _fun6527
                        }
                    case 65:
                        var3 = var0.Array;
                        var2 = var3.isArray;
                        var2 = var2.bind(var3)(var5);
                        if (var2) {
                            _fun6527_ip = 331;
                            continue _fun6527
                        }
                    case 87:
                        var4 = undefined;
                        var2 = undefined;
                        if (!var5) {
                            _fun6527_ip = 290;
                            continue _fun6527
                        }
                    case 97:
                        var6 = 'string';
                        var3 = typeof var5;
                        if (!(var6 !== var3)) {
                            _fun6527_ip = 277;
                            continue _fun6527
                        }
                    case 111:
                        var3 = var0.Object;
                        var3 = var3.prototype;
                        var6 = var3.toString;
                        var3 = var6.call;
                        var8 = var3.bind(var6)(var5);
                        var7 = var8.slice;
                        var6 = 8;
                        var3 = -1;
                        var6 = var7.bind(var8)(var6, var3);
                        var3 = 'Object';
                        var3 = var3 === var6;
                        if (!var3) {
                            _fun6527_ip = 173;
                            continue _fun6527
                        }
                    case 168:
                        var3 = var5.constructor;
                    case 173:
                        var7 = var6;
                        if (!var3) {
                            _fun6527_ip = 189;
                            continue _fun6527
                        }
                    case 179:
                        var3 = var5.constructor;
                        var7 = var3.name;
                    case 189:
                        var3 = 'Map';
                        if (!(var3 !== var7)) {
                            _fun6527_ip = 259;
                            continue _fun6527
                        }
                    case 197:
                        var3 = 'Set';
                        if (!(var3 !== var7)) {
                            _fun6527_ip = 259;
                            continue _fun6527
                        }
                    case 205:
                        var3 = 'Arguments';
                        if (!(var3 !== var7)) {
                            _fun6527_ip = 244;
                            continue _fun6527
                        }
                    case 215:
                        var6 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var3 = var6.test;
                        var3 = var3.bind(var6)(var7);
                        var2 = undefined;
                        if (!var3) {
                            _fun6527_ip = 290;
                            continue _fun6527
                        }
                    case 244:
                        var3 = _closure1_slot2;
                        var2 = var3.bind(var4)(var5, var4);
                        _fun6527_ip = 290;
                        continue _fun6527;
                    case 259:
                        var6 = var0.Array;
                        var3 = var6.from;
                        var2 = var3.bind(var6)(var5);
                        _fun6527_ip = 290;
                        continue _fun6527;
                    case 277:
                        var3 = _closure1_slot2;
                        var2 = var3.bind(var4)(var5, var4);
                    case 290:
                        _closure2_slot1 = var2;
                        if (var2) {
                            _fun6527_ip = 331;
                            continue _fun6527
                        }
                    case 297:
                        var3 = var0.TypeError;
                        var0 = var3.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var10 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var11 = var2;
                        var0 = new var11[var3](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var2;
                        throw var0;
                    case 331:
                        var0 = _closure2_slot1;
                        if (!var0) {
                            _fun6527_ip = 346;
                            continue _fun6527
                        }
                    case 338:
                        var0 = _closure2_slot1;
                        _closure2_slot0 = var0;
                    case 346:
                        var0 = 0;
                        var _closure2_slot2 = var0;
                        var2 = function() {
                            var0 = undefined;
                            return var0;
                        };
                        var0 = {};
                        var0.s = var2;
                        var3 = function() {
                            _fun6529: for (var _fun6529_ip = 0;;) switch (_fun6529_ip) {
                                case 0:
                                    var1 = _closure2_slot2;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun6529_ip = 56;
                                        continue _fun6529
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot2;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot2 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun6529_ip = 67;
                                    continue _fun6529;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        var0.n = var3;
                        var3 = function arg0() {
                            var0 = arg0;
                            throw var0;
                        };
                        var0.e = var3;
                        var0.f = var2;
                        return var0;
                    case 389:
                        var0 = true;
                        var _closure2_slot4 = var0;
                        var0 = false;
                        var _closure2_slot5 = var0;
                        var0 = {};
                        var2 = function() {
                            var3 = _closure2_slot1;
                            var2 = var3.call;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            _closure2_slot1 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0.s = var2;
                        var2 = function() {
                            var1 = _closure2_slot1;
                            var0 = var1.next;
                            var0 = var0.bind(var1)();
                            var1 = var0.done;
                            _closure2_slot4 = var1;
                            return var0;
                        };
                        var0.n = var2;
                        var2 = function arg0() {
                            var0 = true;
                            _closure2_slot5 = var0;
                            var0 = arg0;
                            var _closure2_slot3 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0.e = var2;
                        var1 = function() {
                            _fun6534: for (var _fun6534_ip = 0;;) switch (_fun6534_ip) {
                                case 0: // try_start_0
                                    var2 = _closure2_slot4;
                                    var1 = var2;
                                    if (var2) {
                                        _fun6534_ip = 29;
                                        continue _fun6534
                                    }
                                case 13:
                                    var2 = _closure2_slot1;
                                    var3 = var2.return;
                                    var2 = null;
                                    var1 = var2 == var3;
                                case 29:
                                    if (var1) {
                                        _fun6534_ip = 46;
                                        continue _fun6534
                                    }
                                case 32:
                                    var2 = _closure2_slot1;
                                    var1 = var2.return;
                                    var1 = var1.bind(var2)();
                                case 46: // try_end0
                                    var1 = _closure2_slot5;
                                    if (var1) {
                                        _fun6534_ip = 57;
                                        continue _fun6534
                                    }
                                case 53:
                                    var1 = undefined;
                                    return var1;
                                case 57:
                                    var0 = _closure2_slot3;
                                    throw var0;
                                case 63: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var2 = _closure2_slot5;
                                    if (var2) {
                                        _fun6534_ip = 77;
                                        continue _fun6534
                                    }
                                case 75:
                                    throw var1;
                                case 77:
                                    var0 = _closure2_slot3;
                                    throw var0;
                            }
                        };
                        var0.f = var1;
                        return var0;
                }
            };
            var _closure1_slot1 = var2;
            var2 = function arg0, arg1() {
                _fun6535: for (var _fun6535_ip = 0;;) switch (_fun6535_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var1 = undefined;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun6535_ip = 23;
                            continue _fun6535
                        }
                    case 14:
                        var2 = var3.length;
                        var0 = var1 > var2;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun6535_ip = 33;
                            continue _fun6535
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var6 = var2;
                        var5 = var1;
                        var0 = new var6[var0](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun6535_ip = 88;
                            continue _fun6535
                        }
                    case 73:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun6535_ip = 73;
                            continue _fun6535
                        }
                    case 88:
                        return var0;
                }
            };
            var _closure1_slot2 = var2;
            var2 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.split;
                var0 = / *; */;
                var1 = var1.bind(var2)(var0);
                var0 = var1.shift;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.type = var2;
            var2 = function(arg0) { // Environment: var0
                _fun6537: for (var _fun6537_ip = 0;;) switch (_fun6537_ip) {
                    case 0:
                        var9 = arg0;
                        var7 = undefined;
                        var3 = undefined;
                        var1 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var0 = {};
                        var6 = _closure1_slot1;
                        var8 = var9.split;
                        var2 = / *; */;
                        var2 = var8.bind(var9)(var2);
                        var1 = var6.bind(var7)(var2);
                    case 51: // try_start_0 // try_start_1
                        var6 = var1;
                        var2 = var6.s;
                        var2 = var2.bind(var6)();
                        var2 = var6.n;
                        var2 = var2.bind(var6)();
                        var3 = var2;
                        var2 = var2.done;
                        if (var2) {
                            _fun6537_ip = 188;
                            continue _fun6537
                        }
                    case 84:
                        var2 = var3;
                        var7 = var2.value;
                        var6 = var7.split;
                        var2 = / *= */;
                        var7 = var6.bind(var7)(var2);
                        var2 = var7.shift;
                        var6 = var2.bind(var7)();
                        var4 = var6;
                        var2 = var7.shift;
                        var5 = var2.bind(var7)();
                        var2 = var6;
                        if (!var6) {
                            _fun6537_ip = 148;
                            continue _fun6537
                        }
                    case 145:
                        var2 = var5;
                    case 148:
                        if (!var2) {
                            _fun6537_ip = 164;
                            continue _fun6537
                        }
                    case 151:
                        var7 = var0;
                        var6 = var4;
                        var2 = var5;
                        var7[var6] = var2;
                    case 164:
                        var6 = var1;
                        var2 = var6.n;
                        var2 = var2.bind(var6)();
                        var3 = var2;
                        var2 = var2.done;
                        if (!var2) {
                            _fun6537_ip = 84;
                            continue _fun6537
                        }
                    case 188: // try_end0
                        _fun6537_ip = 205;
                        continue _fun6537;
                    case 190: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = var1;
                        var2 = var3.e;
                        var2 = var2.bind(var3)(var4);
                    case 205: // try_end1
                        var3 = var1;
                        var2 = var3.f;
                        var2 = var2.bind(var3)();
                        return var0;
                    case 220: // catch_target1
                        CatchBlockStart(arg_register = 0);
                        var2 = var1;
                        var1 = var2.f;
                        var1 = var1.bind(var2)();
                        throw var0;
                }
            };
            var1.params = var2;
            var2 = function(arg0) { // Environment: var0
                _fun6538: for (var _fun6538_ip = 0;;) switch (_fun6538_ip) {
                    case 0:
                        var7 = arg0;
                        var4 = undefined;
                        var6 = undefined;
                        var1 = undefined;
                        var0 = {};
                        var3 = _closure1_slot1;
                        var5 = var7.split;
                        var2 = / *, */;
                        var2 = var5.bind(var7)(var2);
                        var1 = var3.bind(var4)(var2);
                    case 47: // try_start_0 // try_start_1
                        var3 = var1;
                        var2 = var3.s;
                        var2 = var2.bind(var3)();
                        var2 = var3.n;
                        var2 = var2.bind(var3)();
                        var6 = var2;
                        var2 = var2.done;
                        var5 = 0;
                        var4 = 1;
                        var3 = -1;
                        if (var2) {
                            _fun6538_ip = 212;
                            continue _fun6538
                        }
                    case 91:
                        var2 = var6;
                        var8 = var2.value;
                        var7 = var8.split;
                        var2 = / *; */;
                        var2 = var7.bind(var8)(var2);
                        var8 = var2[var5];
                        var7 = var8.slice;
                        var8 = var7.bind(var8)(var4, var3);
                        var7 = var0;
                        var10 = var2[var4];
                        var9 = var10.split;
                        var2 = / *= */;
                        var2 = var9.bind(var10)(var2);
                        var9 = var2[var4];
                        var2 = var9.slice;
                        var2 = var2.bind(var9)(var4, var3);
                        var7[var2] = var8;
                        var7 = var1;
                        var2 = var7.n;
                        var2 = var2.bind(var7)();
                        var6 = var2;
                        var2 = var2.done;
                        if (!var2) {
                            _fun6538_ip = 91;
                            continue _fun6538
                        }
                    case 212: // try_end0
                        _fun6538_ip = 229;
                        continue _fun6538;
                    case 214: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = var1;
                        var2 = var3.e;
                        var2 = var2.bind(var3)(var4);
                    case 229: // try_end1
                        var3 = var1;
                        var2 = var3.f;
                        var2 = var2.bind(var3)();
                        return var0;
                    case 244: // catch_target1
                        CatchBlockStart(arg_register = 0);
                        var2 = var1;
                        var1 = var2.f;
                        var1 = var1.bind(var2)();
                        throw var0;
                }
            };
            var1.parseLinks = var2;
            var2 = function(arg0, arg1) { // Environment: var0
                _fun6539: for (var _fun6539_ip = 0;;) switch (_fun6539_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = delete var0["content-type"];
                        var1 = delete var0["content-length"];
                        var1 = delete var0["transfer-encoding"];
                        var1 = delete var0.host;
                        var1 = arg1;
                        if (!var1) {
                            _fun6539_ip = 39;
                            continue _fun6539
                        }
                    case 29:
                        var1 = delete var0.authorization;
                        var1 = delete var0.cookie;
                    case 39:
                        return var0;
                }
            };
            var1.cleanHeader = var2;
            var2 = function(arg0) { // Environment: var0
                _fun6540: for (var _fun6540_ip = 0;;) switch (_fun6540_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 !== var1;
                        if (!var0) {
                            _fun6540_ip = 23;
                            continue _fun6540
                        }
                    case 12:
                        var2 = 'object';
                        var1 = typeof var1;
                        var0 = var2 === var1;
                    case 23:
                        return var0;
                }
            };
            var1.isObject = var2;
            var2 = global;
            var2 = var2.Object;
            var2 = var2.hasOwn;
            if (var2) {
                _fun6526_ip = 104;
                continue _fun6526
            }
        case 99:
            var2 = function(arg0, arg1) { // Environment: var0
                _fun6541: for (var _fun6541_ip = 0;;) switch (_fun6541_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun6541_ip = 73;
                            continue _fun6541
                        }
                    case 9:
                        var0 = global;
                        var1 = var0.Object;
                        var1 = var1.prototype;
                        var3 = var1.hasOwnProperty;
                        var2 = var3.call;
                        var0 = var0.Object;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var7 = var1;
                        var6 = var4;
                        var0 = new var7[var0](var6, var5);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    case 73:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'Cannot convert undefined or null to object';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 104:
            var1.hasOwn = var2;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun6542: for (var _fun6542_ip = 0;;) switch (_fun6542_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var4 = var6;
                        for (var1 in var4)
                            case 20: {
                                case 29: var9 = var1;
                                var10 = _closure1_slot0;
                                var8 = var10.hasOwn;
                                var8 = var8.bind(var10)(var6, var9);
                                if (!var8) {
                                    _fun6542_ip = 20;
                                    continue _fun6542
                                }
                                case 51: var8 = var6[var9];
                                var7[var9] = var8;
                                _fun6542_ip = 20;
                                continue _fun6542;
                            }
                    case 61:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.mixin = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);