// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0, arg1, arg2) { // Original name: v35, environment: var0
        _fun6420: for (var _fun6420_ip = 0;;) switch (_fun6420_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var3 = arg2;
                var _closure2_slot1 = var3;
                var0 = function(arg0, arg1, arg2, arg3) { // Original name: generateUUID, environment: var2
                    _fun6421: for (var _fun6421_ip = 0;;) switch (_fun6421_ip) {
                        case 0:
                            var8 = arg0;
                            var4 = arg1;
                            var0 = arg2;
                            var5 = arg3;
                            var3 = 'string';
                            var1 = typeof var8;
                            var7 = var8;
                            if (!(var3 === var1)) {
                                _fun6421_ip = 109;
                                continue _fun6421
                            }
                        case 26:
                            var1 = global;
                            var6 = var1.unescape;
                            var1 = var1.encodeURIComponent;
                            var2 = undefined;
                            var1 = var1.bind(var2)(var8);
                            var8 = var6.bind(var2)(var1);
                            var6 = new Array(0);
                            var1 = var8.length;
                            var2 = 0;
                            var1 = var2 < var1;
                            var7 = var6;
                            if (!var1) {
                                _fun6421_ip = 109;
                                continue _fun6421
                            }
                        case 73:
                            var9 = var6.push;
                            var1 = var8.charCodeAt;
                            var1 = var1.bind(var8)(var2);
                            var1 = var9.bind(var6)(var1);
                            var2 = var2 + 1;
                            var1 = var8.length;
                            var7 = var6;
                            if (var2 < var1) {
                                _fun6421_ip = 73;
                                continue _fun6421
                            }
                        case 109:
                            var2 = typeof var4;
                            var1 = var4;
                            if (!(var3 === var2)) {
                                _fun6421_ip = 148;
                                continue _fun6421
                            }
                        case 119:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 0;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var6.bind(var3)(var2);
                            var1 = var2.bind(var3)(var4);
                        case 148:
                            var2 = undefined;
                            var4 = null;
                            var3 = undefined;
                            if (!(var4 !== var1)) {
                                _fun6421_ip = 169;
                                continue _fun6421
                            }
                        case 158:
                            var3 = undefined;
                            if (!(var3 !== var1)) {
                                _fun6421_ip = 169;
                                continue _fun6421
                            }
                        case 164:
                            var3 = var1.length;
                        case 169:
                            var4 = 16;
                            if (!(var4 === var3)) {
                                _fun6421_ip = 372;
                                continue _fun6421
                            }
                        case 179:
                            var3 = global;
                            var8 = var3.Uint8Array;
                            var3 = var7.length;
                            var11 = var4 + var3;
                            var6 = var8.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var12 = var6;
                            var3 = new var12[var8](var11, var10);
                            var6 = var3 instanceof Object ? var3 : var6;
                            var3 = var6.set;
                            var3 = var3.bind(var6)(var1);
                            var3 = var6.set;
                            var1 = var1.length;
                            var1 = var3.bind(var6)(var7, var1);
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var2)(var6);
                            var6 = 6;
                            var8 = var3[var6];
                            var7 = 15;
                            var7 = var7 & var8;
                            var1 = _closure2_slot0;
                            var1 = var7 | var1;
                            var3[var6] = var1;
                            var6 = 8;
                            var7 = var3[var6];
                            var1 = 63;
                            var7 = var1 & var7;
                            var1 = 128;
                            var1 = var7 | var1;
                            var3[var6] = var1;
                            if (var0) {
                                _fun6421_ip = 344;
                                continue _fun6421
                            }
                        case 308:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 1;
                            var1 = var7[var1];
                            var6 = var6.bind(var2)(var1);
                            var1 = var6.unsafeStringify;
                            var1 = var1.bind(var6)(var3);
                            return var1;
                        case 344:
                            if (var5) {
                                _fun6421_ip = 349;
                                continue _fun6421
                            }
                        case 347:
                            var5 = 0;
                        case 349:
                            var1 = 0;
                        case 351:
                            var7 = var5 + var1;
                            var6 = var3[var1];
                            var0[var7] = var6;
                            var1 = var1 + 1;
                            if (var1 < var4) {
                                _fun6421_ip = 351;
                                continue _fun6421
                            }
                        case 370:
                            return var0;
                        case 372:
                            var0 = global;
                            var1 = var0.TypeError;
                            var0 = 'Namespace must be array-like (16 iterable integer values, 0-255)';
                            var0 = var1.bind(var2)(var0);
                            throw var0;
                    }
                };
            case 24: // try_start_0
                var2 = var0;
                var2.name = var1;
            case 33: // try_end0
                _fun6420_ip = 37;
                continue _fun6420;
            case 35: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 37:
                var1 = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
                var0.DNS = var1;
                var1 = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
                var0.URL = var1;
                return var0;
        }
    };
    var1.default = var0;
    var0 = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    var1.DNS = var0;
    var0 = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    var1.URL = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [499, 494]);