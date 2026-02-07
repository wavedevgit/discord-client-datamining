// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76204: for (var _fun76204_ip = 0;;) switch (_fun76204_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76204_ip = 507;
                            continue _fun76204
                        }
                    case 15:
                        var6 = undefined;
                        var7 = undefined;
                        var1 = null;
                        if (!(var1 != var9)) {
                            _fun76204_ip = 33;
                            continue _fun76204
                        }
                    case 25:
                        var1 = var9.type;
                        if (var1) {
                            _fun76204_ip = 78;
                            continue _fun76204
                        }
                    case 33:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 2;
                        var1 = var4[var1];
                        var1 = var3.bind(var6)(var1);
                        var1 = var1.types;
                        var1 = var1.allFiles;
                        var3 = new Array(1);
                        var3[0] = var1;
                        _fun76204_ip = 149;
                        continue _fun76204;
                    case 78:
                        var1 = global;
                        var5 = var1.Array;
                        var4 = var5.isArray;
                        var1 = var9.type;
                        var4 = var4.bind(var5)(var1);
                        var1 = var9.type;
                        if (var4) {
                            _fun76204_ip = 119;
                            continue _fun76204
                        }
                    case 109:
                        var4 = new Array(1);
                        var4[0] = var1;
                        _fun76204_ip = 122;
                        continue _fun76204;
                    case 119:
                        var4 = var1;
                    case 122:
                        var1 = var4.flat;
                        var5 = var1.bind(var4)();
                        var4 = var5.map;
                        var1 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var0 = var1.trim;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var3 = var4.bind(var5)(var1);
                    case 149:
                        var1 = global;
                        var8 = var1.Object;
                        var5 = var8.assign;
                        var4 = {};
                        var4.type = var3;
                        var3 = {
                            'mode': 'import',
                            'allowMultiSelection': false,
                            'allowVirtualFiles': false
                        };
                        var3 = var5.bind(var8)(var3, var9, var4);
                        var7 = var3;
                        var4 = var3.type;
                        var3 = var4.every;
                        var2 = function(arg0) { // Environment: var2
                            var1 = 'string';
                            var0 = arg0;
                            var0 = typeof var0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun76204_ip = 283;
                            continue _fun76204
                        }
                    case 218:
                        var4 = var1.TypeError;
                        var2 = var7;
                        var8 = var2.type;
                        var2 = var1.HermesInternal;
                        var5 = var2.concat;
                        var3 = 'Unexpected type option in ';
                        var2 = ', did you try using a DocumentPicker.types.* that does not exist?';
                        var14 = var5.bind(var3)(var8, var2);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var15 = var3;
                        var2 = new var15[var4](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 283:
                        var3 = var7;
                        var2 = 'mode';
                        var2 = var2 in var3;
                        if (!var2) {
                            _fun76204_ip = 374;
                            continue _fun76204
                        }
                    case 297:
                        var4 = ['import', 'open'];
                        var3 = var4.includes;
                        var2 = var7;
                        var2 = var2.mode;
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun76204_ip = 374;
                            continue _fun76204
                        }
                    case 328:
                        var3 = var1.TypeError;
                        var1 = var7;
                        var2 = var1.mode;
                        var1 = 'Invalid mode option: ';
                        var14 = var1 + var2;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 374:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 3;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var3 = var1.NativeDocumentPicker;
                        var2 = var3.pick;
                        var1 = var7;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 421);
                    case 419:
                        return var1;
                    case 421:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76204_ip = 504;
                            continue _fun76204
                        }
                    case 427:
                        var4 = var1;
                        var3 = var4[Symbol.iterator];
                        var4 = var3().next;
                        var2 = 4;
                    case 436:
                        var9 = var4().value;
                        var8 = var3;
                        if (!(var8 !== var6)) {
                            _fun76204_ip = 501;
                            continue _fun76204
                        }
                    case 447: // try_start_0
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var8 = var8[var2];
                        var11 = var10.bind(var6)(var8);
                        var10 = var11.safeValidate;
                        var8 = var7;
                        var8 = var8.type;
                        var8 = var10.bind(var11)(var8, var9);
                        var9.hasRequestedType = var8;
                    case 492: // try_end0
                        _fun76204_ip = 436;
                        continue _fun76204;
                    case 494: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3.return();
                        throw var2;
                    case 501:
                        return var1;
                    case 504:
                        return var1;
                    case 507:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot3 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var1 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.pick = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 9649, 9647, 9653]);