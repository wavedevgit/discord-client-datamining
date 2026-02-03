// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28796: for (var _fun28796_ip = 0;;) switch (_fun28796_ip) {
        case 0:
            var1 = global;
            var0 = var1.Object;
            var0 = var0.getOwnPropertySymbols;
            var _closure1_slot0 = var0;
            var0 = var1.Object;
            var0 = var0.prototype;
            var0 = var0.hasOwnProperty;
            var _closure1_slot1 = var0;
            var0 = var1.Object;
            var0 = var0.prototype;
            var0 = var0.propertyIsEnumerable;
            var _closure1_slot2 = var0;
            var3 = function() {
                _fun28797: for (var _fun28797_ip = 0;;) switch (_fun28797_ip) {
                    case 0:
                        var1 = undefined;
                        var6 = undefined;
                    case 6: // try_start_0
                        var0 = global;
                        var3 = var0.Object;
                        var3 = var3.assign;
                        if (var3) {
                            _fun28797_ip = 26;
                            continue _fun28797
                        }
                    case 22: // try_end0
                        var3 = false;
                        return var3;
                    case 26: // try_start_1
                        var5 = var0.String;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var11 = 'abc';
                        var12 = var4;
                        var3 = new var12[var5](var11, var10);
                        var5 = var3 instanceof Object ? var3 : var4;
                        var4 = 'de';
                        var3 = 5;
                        var5[var3] = var4;
                        var4 = var0.Object;
                        var3 = var4.getOwnPropertyNames;
                        var4 = var3.bind(var4)(var5);
                        var3 = 0;
                        var5 = var4[var3];
                        var4 = '5';
                        if (!(var4 !== var5)) {
                            _fun28797_ip = 310;
                            continue _fun28797
                        }
                    case 103:
                        var4 = {};
                        var1 = var4;
                        var _closure2_slot0 = var4;
                        var6 = 0;
                        var5 = '_';
                        var4 = 10;
                    case 121:
                        var8 = var1;
                        var9 = var0.String;
                        var7 = var9.fromCharCode;
                        var3 = var6;
                        var7 = var7.bind(var9)(var3);
                        var7 = var5 + var7;
                        var8[var7] = var3;
                        var3 = var3 + 1;
                        var6 = var3;
                        if (var3 < var4) {
                            _fun28797_ip = 121;
                            continue _fun28797
                        }
                    case 162:
                        var4 = var0.Object;
                        var3 = var4.getOwnPropertyNames;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.map;
                        var1 = function(arg0) { // Environment: var2
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var1[var0];
                            return var0;
                        };
                        var4 = var3.bind(var4)(var1);
                        var1 = var4.join;
                        var3 = '';
                        var4 = var1.bind(var4)(var3);
                        var1 = '0123456789';
                        if (!(var1 === var4)) {
                            _fun28797_ip = 306;
                            continue _fun28797
                        }
                    case 218:
                        var7 = {};
                        var _closure2_slot1 = var7;
                        var1 = 'abcdefghijklmnopqrst';
                        var4 = var1.split;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.forEach;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var0 = _closure2_slot1;
                            var0[var1] = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        var4 = var0.Object;
                        var2 = var4.keys;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var0 = {};
                        var0 = var5.bind(var6)(var0, var7);
                        var2 = var2.bind(var4)(var0);
                        var0 = var2.join;
                        var0 = var0.bind(var2)(var3);
                    case 300: // try_end1
                        var0 = var1 === var0;
                        return var0;
                    case 306:
                        var0 = false;
                        return var0;
                    case 310:
                        var0 = false;
                        return var0;
                    case 314: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var0 = undefined;
            var3 = var3.bind(var0)();
            if (var3) {
                _fun28796_ip = 83;
                continue _fun28796
            }
        case 76:
            var2 = function(arg0, arg1) { // Environment: var2
                _fun28800: for (var _fun28800_ip = 0;;) switch (_fun28800_ip) {
                    case 0:
                        var1 = arg0;
                        var9 = undefined;
                        var10 = undefined;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun28800_ip = 243;
                            continue _fun28800
                        }
                    case 16:
                        var8 = global;
                        var0 = var8.Object;
                        var0 = var0.bind(var9)(var1);
                        var1 = arguments.length;
                        var7 = 1;
                        var1 = var7 < var1;
                        var5 = 0;
                        var4 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        if (!var1) {
                            _fun28800_ip = 241;
                            continue _fun28800
                        }
                    case 56:
                        var11 = var8.Object;
                        var1 = arguments[var7];
                        var13 = var11.bind(var9)(var1);
                        var15 = var13;
                        var1 = var3;
                        var3 = var1;
                        for (var11 in var15)
                            case 88: {
                                var3 = var1;
                                case 100: var17 = var11;
                                var19 = _closure1_slot1;
                                var18 = var19.call;
                                var18 = var18.bind(var19)(var13, var17);
                                var1 = var17;
                                if (!var18) {
                                    _fun28800_ip = 88;
                                    continue _fun28800
                                }
                                case 124: var18 = var13[var17];
                                var0[var17] = var18;
                                var1 = var17;
                                _fun28800_ip = 88;
                                continue _fun28800;
                            }
                    case 137:
                        var1 = _closure1_slot0;
                        if (!var1) {
                            _fun28800_ip = 228;
                            continue _fun28800
                        }
                    case 144:
                        var1 = _closure1_slot0;
                        var12 = var1.bind(var9)(var13);
                        var1 = var12.length;
                        var1 = var5 < var1;
                        var11 = 0;
                        var4 = var12;
                        var2 = 0;
                        if (!var1) {
                            _fun28800_ip = 228;
                            continue _fun28800
                        }
                    case 172:
                        var15 = _closure1_slot2;
                        var14 = var15.call;
                        var1 = var12[var11];
                        var1 = var14.bind(var15)(var13, var1);
                        if (!var1) {
                            _fun28800_ip = 210;
                            continue _fun28800
                        }
                    case 194:
                        var14 = var12[var11];
                        var1 = var12[var11];
                        var1 = var13[var1];
                        var0[var14] = var1;
                    case 210:
                        var11 = var11 + 1;
                        var1 = var12.length;
                        var4 = var12;
                        var2 = var11;
                        if (var2 < var1) {
                            _fun28800_ip = 172;
                            continue _fun28800
                        }
                    case 228:
                        var7 = var7 + 1;
                        var1 = arguments.length;
                        if (var7 < var1) {
                            _fun28800_ip = 56;
                            continue _fun28800
                        }
                    case 241:
                        return var0;
                    case 243:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var21 = 'Object.assign cannot be called with null or undefined';
                        var22 = var1;
                        var0 = new var22[var2](var21, var20);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            _fun28796_ip = 94;
            continue _fun28796;
        case 83:
            var1 = var1.Object;
            var2 = var1.assign;
        case 94:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);