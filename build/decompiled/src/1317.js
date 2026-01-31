// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun14789: for (var _fun14789_ip = 0;;) switch (_fun14789_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.UnknownFieldHandler = var0;
            var2.mergeBinaryOptions = var0;
            var2.WireType = var0;
            var4 = var2.UnknownFieldHandler;
            if (var4) {
                _fun14789_ip = 77;
                continue _fun14789
            }
        case 66:
            var3 = {};
            var2.UnknownFieldHandler = var3;
            var4 = var3;
        case 77:
            var3 = function(arg0) { // Environment: var1
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = global;
                var4 = var0.Symbol;
                var3 = var4.for;
                var0 = 'protobuf-ts/unknown';
                var0 = var3.bind(var4)(var0);
                var2.symbol = var0;
                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
                    _fun14791: for (var _fun14791_ip = 0;;) switch (_fun14791_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot1;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var1 = _closure2_slot0;
                            var1 = var1.symbol;
                            if (var3) {
                                _fun14791_ip = 40;
                                continue _fun14791
                            }
                        case 30:
                            var3 = new Array(0);
                            var2[var1] = var3;
                            _fun14791_ip = 44;
                            continue _fun14791;
                        case 40:
                            var3 = var2[var1];
                        case 44:
                            var2 = var3.push;
                            var1 = {};
                            var4 = arg2;
                            var1.no = var4;
                            var4 = arg3;
                            var1.wireType = var4;
                            var4 = arg4;
                            var1.data = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2.onRead = var0;
                var0 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun14792: for (var _fun14792_ip = 0;;) switch (_fun14792_ip) {
                        case 0:
                            var3 = arg2;
                            var2 = _closure2_slot0;
                            var1 = var2.list;
                            var0 = arg1;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                            var0 = undefined;
                        case 32:
                            var4 = var1().value;
                            var5 = var2;
                            if (!(var5 !== var0)) {
                                _fun14792_ip = 92;
                                continue _fun14792
                            }
                        case 43: // try_start_0
                            var8 = var4.no;
                            var7 = var4.wireType;
                            var6 = var4.data;
                            var5 = var3;
                            var4 = var5.tag;
                            var5 = var4.bind(var5)(var8, var7);
                            var4 = var5.raw;
                            var4 = var4.bind(var5)(var6);
                        case 83: // try_end0
                            _fun14792_ip = 32;
                            continue _fun14792;
                        case 85: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 92:
                            return var0;
                    }
                };
                var2.onWrite = var0;
                var0 = function(arg0, arg1) { // Environment: var1
                    _fun14793: for (var _fun14793_ip = 0;;) switch (_fun14793_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var _closure3_slot0 = var2;
                            var5 = _closure2_slot1;
                            var4 = undefined;
                            var4 = var5.bind(var4)(var3);
                            if (var4) {
                                _fun14793_ip = 35;
                                continue _fun14793
                            }
                        case 29:
                            var4 = new Array(0);
                            return var4;
                        case 35:
                            var0 = _closure2_slot0;
                            var0 = var0.symbol;
                            var3 = var3[var0];
                            var0 = var3;
                            if (!var2) {
                                _fun14793_ip = 70;
                                continue _fun14793
                            }
                        case 55:
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.no;
                                var0 = _closure3_slot0;
                                var0 = var1 == var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 70:
                            return var0;
                    }
                };
                var2.list = var0;
                var0 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.list;
                    var1 = arg0;
                    var0 = arg1;
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.slice;
                    var0 = -1;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
                };
                var2.last = var0;
                var0 = function arg0() {
                    _fun14796: for (var _fun14796_ip = 0;;) switch (_fun14796_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4;
                            if (!var0) {
                                _fun14796_ip = 44;
                                continue _fun14796
                            }
                        case 9:
                            var1 = global;
                            var3 = var1.Array;
                            var2 = var3.isArray;
                            var1 = _closure2_slot0;
                            var1 = var1.symbol;
                            var1 = var4[var1];
                            var0 = var2.bind(var3)(var1);
                        case 44:
                            return var0;
                    }
                };
                var _closure2_slot1 = var0;
                var0 = undefined;
                return var0;
            };
            var3 = var3.bind(var0)(var4);
            var1 = function arg0, arg1() {
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var5 = var0.Object;
                var4 = var5.assign;
                var1 = {};
                var0 = arg0;
                var1 = var4.bind(var5)(var1, var0);
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2.mergeBinaryOptions = var1;
            var3 = var2.WireType;
            if (var3) {
                _fun14789_ip = 117;
                continue _fun14789
            }
        case 106:
            var1 = {};
            var2.WireType = var1;
            var3 = var1;
        case 117:
            var2 = 0;
            var3.Varint = var2;
            var1 = 'Varint';
            var3[var2] = var1;
            var2 = 1;
            var3.Bit64 = var2;
            var1 = 'Bit64';
            var3[var2] = var1;
            var2 = 2;
            var3.LengthDelimited = var2;
            var1 = 'LengthDelimited';
            var3[var2] = var1;
            var2 = 3;
            var3.StartGroup = var2;
            var1 = 'StartGroup';
            var3[var2] = var1;
            var2 = 4;
            var3.EndGroup = var2;
            var1 = 'EndGroup';
            var3[var2] = var1;
            var2 = 5;
            var3.Bit32 = var2;
            var1 = 'Bit32';
            var3[var2] = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);