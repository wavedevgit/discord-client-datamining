// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun99689: for (var _fun99689_ip = 0;;) switch (_fun99689_ip) {
            case 0:
                var4 = arg0;
                var5 = global;
                var3 = var5.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = 'path';
                var7 = var0 in var4;
                var6 = undefined;
                if (!var7) {
                    _fun99689_ip = 78;
                    continue _fun99689
                }
            case 31:
                var9 = var5.Array;
                var8 = var9.isArray;
                var7 = var4.path;
                var7 = var8.bind(var9)(var7);
                var6 = undefined;
                if (!var7) {
                    _fun99689_ip = 78;
                    continue _fun99689
                }
            case 58:
                var9 = var4.path;
                var8 = var9.join;
                var7 = '.';
                var6 = var8.bind(var9)(var7);
            case 78:
                var1.path = var6;
                var6 = 'keys';
                var7 = var6 in var4;
                var6 = undefined;
                if (!var7) {
                    _fun99689_ip = 118;
                    continue _fun99689
                }
            case 96:
                var9 = var5.JSON;
                var8 = var9.stringify;
                var7 = var4.keys;
                var6 = var8.bind(var9)(var7);
            case 118:
                var1.keys = var6;
                var6 = 'unionErrors';
                var6 = var6 in var4;
                var0 = undefined;
                if (!var6) {
                    _fun99689_ip = 158;
                    continue _fun99689
                }
            case 135:
                var7 = var5.JSON;
                var6 = var7.stringify;
                var5 = var4.unionErrors;
                var0 = var6.bind(var7)(var5);
            case 158:
                var1.unionErrors = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun99690: for (var _fun99690_ip = 0;;) switch (_fun99690_ip) {
            case 0:
                var3 = undefined;
                var1 = undefined;
                var6 = undefined;
                var0 = global;
                var2 = var0.Set;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = var4;
                var2 = new var12[var2](var11);
                var1 = var2 instanceof Object ? var2 : var4;
                var2 = arg0;
                var2 = var2.issues;
                var5 = var2;
                var4 = var5[Symbol.iterator];
                var5 = var4().next;
                var2 = 0;
            case 51:
                var8 = var5().value;
                var7 = var4;
                if (!(var7 !== var3)) {
                    _fun99690_ip = 128;
                    continue _fun99690
                }
            case 62: // try_start_0
                var6 = var8;
                var8 = var8.path;
                var7 = var8;
                if (!var8) {
                    _fun99690_ip = 90;
                    continue _fun99690
                }
            case 77:
                var8 = var6;
                var8 = var8.path;
                var7 = var8[var2];
            case 90:
                if (!var7) {
                    _fun99690_ip = 119;
                    continue _fun99690
                }
            case 93:
                var9 = var1;
                var8 = var9.add;
                var7 = var6;
                var7 = var7.path;
                var7 = var7[var2];
                var7 = var8.bind(var9)(var7);
            case 119: // try_end0
                _fun99690_ip = 51;
                continue _fun99690;
            case 121: // catch_target0
                CatchBlockStart(arg_register = 2);
                var4.return();
                throw var2;
            case 128:
                var4 = var0.Array;
                var2 = var4.from;
                var5 = var2.bind(var4)(var1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.truncate;
                var2 = var5.join;
                var1 = ', ';
                var2 = var2.bind(var5)(var1);
                var1 = 100;
                var2 = var3.bind(var4)(var2, var1);
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Failed to validate keys: ';
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var3 = function arg0, arg1, arg2() {
        _fun99691: for (var _fun99691_ip = 0;;) switch (_fun99691_ip) {
            case 0:
                var5 = arg1;
                var10 = arg2;
                var1 = var5.exception;
                var0 = var5;
                if (!var1) {
                    _fun99691_ip = 433;
                    continue _fun99691
                }
            case 21:
                var1 = var5.exception;
                var1 = var1.values;
                var0 = var5;
                if (!var1) {
                    _fun99691_ip = 433;
                    continue _fun99691
                }
            case 41:
                var0 = var5;
                if (!var10) {
                    _fun99691_ip = 433;
                    continue _fun99691
                }
            case 50:
                var1 = var10.originalException;
                var0 = var5;
                if (!var1) {
                    _fun99691_ip = 433;
                    continue _fun99691
                }
            case 65:
                var3 = var10.originalException;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var19 = 1;
                var2 = var2[var19];
                var17 = undefined;
                var4 = var4.bind(var17)(var2);
                var2 = var4.isError;
                var2 = var2.bind(var4)(var3);
                if (!var2) {
                    _fun99691_ip = 125;
                    continue _fun99691
                }
            case 110:
                var6 = var3.name;
                var4 = 'ZodError';
                var2 = var4 === var6;
            case 125:
                if (!var2) {
                    _fun99691_ip = 152;
                    continue _fun99691
                }
            case 128:
                var4 = global;
                var6 = var4.Array;
                var4 = var6.isArray;
                var3 = var3.errors;
                var2 = var4.bind(var6)(var3);
            case 152:
                var0 = var5;
                if (!var2) {
                    _fun99691_ip = 433;
                    continue _fun99691
                }
            case 161:
                var2 = var10.originalException;
                var2 = var2.issues;
                var2 = var2.length;
                var13 = 0;
                var0 = var5;
                if (!(var13 !== var2)) {
                    _fun99691_ip = 433;
                    continue _fun99691
                }
            case 190:
                var6 = global;
                var4 = var6.Object;
                var3 = var4.assign;
                var2 = {};
                var12 = var6.Object;
                var11 = var12.assign;
                var9 = var5.exception;
                var8 = {};
                var18 = var6.Object;
                var16 = var18.assign;
                var7 = var5.exception;
                var7 = var7.values;
                var15 = var7[var13];
                var14 = {};
                var20 = _closure1_slot4;
                var7 = var10.originalException;
                var7 = var20.bind(var17)(var7);
                var14.value = var7;
                var7 = {};
                var7 = var16.bind(var18)(var7, var15, var14);
                var15 = new Array(1);
                var15[0] = var7;
                var14 = var15.concat;
                var16 = _closure1_slot2;
                var7 = var5.exception;
                var18 = var7.values;
                var7 = var18.slice;
                var7 = var7.bind(var18)(var19);
                var7 = var16.bind(var17)(var7);
                var7 = var14.bind(var15)(var7);
                var8.values = var7;
                var7 = {};
                var7 = var11.bind(var12)(var7, var9, var8);
                var2.exception = var7;
                var9 = var6.Object;
                var8 = var9.assign;
                var7 = var5.extra;
                var6 = {};
                var10 = var10.originalException;
                var12 = var10.errors;
                var11 = var12.slice;
                var10 = arg0;
                var11 = var11.bind(var12)(var13, var10);
                var10 = var11.map;
                var1 = _closure1_slot3;
                var1 = var10.bind(var11)(var1);
                var6['zoderror.issues'] = var1;
                var1 = {};
                var1 = var8.bind(var9)(var1, var7, var6);
                var2.extra = var1;
                var1 = {};
                var0 = var3.bind(var4)(var1, var5, var2);
            case 433:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7.value = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var2, var4, var7);
    var4 = 2;
    var4 = var6[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() {
        _fun99692: for (var _fun99692_ip = 0;;) switch (_fun99692_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun99692_ip = 23;
                    continue _fun99692
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun99692_ip = 27;
                    continue _fun99692
                }
            case 23:
                var0 = {};
                _fun99692_ip = 31;
                continue _fun99692;
            case 27:
                var0 = arguments[var2];
            case 31:
                var0 = var0.limit;
                if (var0) {
                    _fun99692_ip = 42;
                    continue _fun99692
                }
            case 39:
                var0 = 10;
            case 42:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'ZodErrors';
                var0.name = var2;
                var1 = function arg0, arg1() {
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var4.bind(var2)(var3, var1, var0);
                    return var0;
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var4.bind(var5)(var1);
    var2.applyZodErrorsToEvent = var3;
    var2.zodErrorsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 12887, 12976]);