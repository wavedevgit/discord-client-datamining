// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96977: for (var _fun96977_ip = 0;;) switch (_fun96977_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = global;
            var1 = var0.TypeError;
            var _closure1_slot2 = var1;
            var1 = var0.Object;
            var1 = var1.defineProperty;
            var _closure1_slot3 = var1;
            var0 = var0.Object;
            var0 = var0.getOwnPropertyDescriptor;
            var _closure1_slot4 = var0;
            var0 = 0;
            var2 = var6[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            if (var2) {
                _fun96977_ip = 84;
                continue _fun96977
            }
        case 75:
            var2 = function arg0, arg1, arg2() {
                _fun96979: for (var _fun96979_ip = 0;;) switch (_fun96979_ip) {
                    case 0:
                        var11 = arg0;
                        var10 = arg1;
                        var7 = arg2;
                        var1 = var11;
                        var3 = var10;
                        var2 = var7;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 2;
                        var9 = var6[var4];
                        var8 = undefined;
                        var9 = var5.bind(var8)(var9);
                        var9 = var9.bind(var8)(var11);
                        var9 = 3;
                        var9 = var6[var9];
                        var9 = var5.bind(var8)(var9);
                        var3 = var9.bind(var8)(var10);
                        var4 = var6[var4];
                        var4 = var5.bind(var8)(var4);
                        var4 = var4.bind(var8)(var7);
                        var4 = 4;
                        var4 = var6[var4];
                        var4 = var5.bind(var8)(var4);
                        if (!var4) {
                            _fun96979_ip = 118;
                            continue _fun96979
                        }
                    case 94: // try_start_0
                        var7 = _closure1_slot3;
                        var6 = var1;
                        var5 = var3;
                        var4 = var2;
                        var4 = var7.bind(var8)(var6, var5, var4);
                    case 114: // try_end0
                        return var4;
                    case 116: // catch_target0
                        CatchBlockStart(arg_register = 4);
                    case 118:
                        var5 = var2;
                        var4 = 'get';
                        var4 = var4 in var5;
                        if (var4) {
                            _fun96979_ip = 174;
                            continue _fun96979
                        }
                    case 132:
                        var5 = var2;
                        var4 = 'set';
                        var4 = var4 in var5;
                        if (var4) {
                            _fun96979_ip = 174;
                            continue _fun96979
                        }
                    case 146:
                        var5 = var2;
                        var4 = 'value';
                        var4 = var4 in var5;
                        if (!var4) {
                            _fun96979_ip = 172;
                            continue _fun96979
                        }
                    case 160:
                        var4 = var1;
                        var2 = var2.value;
                        var4[var3] = var2;
                    case 172:
                        return var1;
                    case 174:
                        var2 = _closure1_slot2;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = 'Accessors not supported';
                        var15 = var1;
                        var0 = new var15[var2](var14, var13);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            _fun96977_ip = 109;
            continue _fun96977;
        case 84:
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            if (!var4) {
                _fun96977_ip = 106;
                continue _fun96977
            }
        case 99:
            var1 = function arg0, arg1, arg2() {
                _fun96978: for (var _fun96978_ip = 0;;) switch (_fun96978_ip) {
                    case 0:
                        var4 = arg0;
                        var7 = arg2;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 2;
                        var2 = var6[var1];
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.bind(var3)(var4);
                        var2 = 3;
                        var2 = var6[var2];
                        var8 = var5.bind(var3)(var2);
                        var2 = arg1;
                        var2 = var8.bind(var3)(var2);
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.bind(var3)(var7);
                        var6 = 'function';
                        var5 = typeof var4;
                        var1 = var7;
                        if (!(var6 === var5)) {
                            _fun96978_ip = 250;
                            continue _fun96978
                        }
                    case 87:
                        var5 = 'prototype';
                        var1 = var7;
                        if (!(var5 === var2)) {
                            _fun96978_ip = 250;
                            continue _fun96978
                        }
                    case 101:
                        var5 = 'value';
                        var5 = var5 in var7;
                        var1 = var7;
                        if (!var5) {
                            _fun96978_ip = 250;
                            continue _fun96978
                        }
                    case 118:
                        var5 = 'writable';
                        var5 = var5 in var7;
                        var1 = var7;
                        if (!var5) {
                            _fun96978_ip = 250;
                            continue _fun96978
                        }
                    case 132:
                        var5 = var7.writable;
                        var1 = var7;
                        if (var5) {
                            _fun96978_ip = 250;
                            continue _fun96978
                        }
                    case 144:
                        var5 = _closure1_slot4;
                        var6 = var5.bind(var3)(var4, var2);
                        var5 = var6;
                        if (!var5) {
                            _fun96978_ip = 166;
                            continue _fun96978
                        }
                    case 160:
                        var5 = var6.writable;
                    case 166:
                        var1 = var7;
                        if (!var5) {
                            _fun96978_ip = 250;
                            continue _fun96978
                        }
                    case 172:
                        var5 = var7.value;
                        var4[var2] = var5;
                        var5 = {};
                        var8 = 'configurable';
                        var8 = var8 in var7;
                        if (var8) {
                            _fun96978_ip = 202;
                            continue _fun96978
                        }
                    case 194:
                        var8 = var6.configurable;
                        _fun96978_ip = 208;
                        continue _fun96978;
                    case 202:
                        var8 = var7.configurable;
                    case 208:
                        var5.configurable = var8;
                        var8 = 'enumerable';
                        var8 = var8 in var7;
                        if (var8) {
                            _fun96978_ip = 231;
                            continue _fun96978
                        }
                    case 224:
                        var6 = var6.enumerable;
                        _fun96978_ip = 236;
                        continue _fun96978;
                    case 231:
                        var6 = var7.enumerable;
                    case 236:
                        var5.enumerable = var6;
                        var6 = false;
                        var5.writable = var6;
                        var1 = var5;
                    case 250:
                        var0 = _closure1_slot3;
                        var0 = var0.bind(var3)(var4, var2, var1);
                        return var0;
                }
            };
        case 106:
            var2 = var1;
        case 109:
            var1 = arg5;
            var1.f = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12664, 12716, 12713, 12673, 12696]);