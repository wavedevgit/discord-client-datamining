// modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var4 = true;
    var3.value = var4;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var3);
    var1 = function(arg0) { // Original name: isObject, environment: var0
        _fun69976: for (var _fun69976_ip = 0;;) switch (_fun69976_ip) {
            case 0:
                var4 = arg0;
                var1 = 'object';
                var0 = typeof var4;
                if (!(var1 === var0)) {
                    _fun69976_ip = 20;
                    continue _fun69976
                }
            case 14:
                var2 = null;
                if (!(var2 === var4)) {
                    _fun69976_ip = 24;
                    continue _fun69976
                }
            case 20:
                var0 = false;
                return var0;
            case 24:
                var0 = global;
                var1 = var0.Object;
                var1 = var1.getPrototypeOf;
                var3 = 'function';
                var1 = typeof var1;
                if (!(var3 !== var1)) {
                    _fun69976_ip = 85;
                    continue _fun69976
                }
            case 49:
                var1 = var0.Object;
                var1 = var1.prototype;
                var3 = var1.toString;
                var1 = var3.call;
                var3 = var1.bind(var3)(var4);
                var1 = '[object Object]';
                var1 = var1 === var3;
                return var1;
            case 85:
                var3 = var0.Object;
                var1 = var3.getPrototypeOf;
                var1 = var1.bind(var3)(var4);
                var0 = var0.Object;
                var0 = var0.prototype;
                var0 = var1 === var0;
                if (var0) {
                    _fun69976_ip = 124;
                    continue _fun69976
                }
            case 120:
                var0 = var2 === var1;
            case 124:
                return var0;
        }
    };
    var _closure1_slot0 = var1;
    var1 = function(arg0) { // Original name: merge, environment: var0
        var5 = 0;
        var3 = copyRestArgs(var5);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun69978: for (var _fun69978_ip = 0;;) switch (_fun69978_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var5;
                    var0 = global;
                    var4 = var0.Array;
                    var3 = var4.isArray;
                    var3 = var3.bind(var4)(var5);
                    if (var3) {
                        _fun69978_ip = 72;
                        continue _fun69978
                    }
                case 37:
                    var4 = var0.Object;
                    var3 = var4.keys;
                    var4 = var3.bind(var4)(var5);
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var2
                        _fun69979: for (var _fun69979_ip = 0;;) switch (_fun69979_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = ['__proto__', 'constructor', 'prototype'];
                                var0 = var1.includes;
                                var0 = var0.bind(var1)(var2);
                                if (var0) {
                                    _fun69979_ip = 293;
                                    continue _fun69979
                                }
                            case 29:
                                var6 = global;
                                var4 = var6.Array;
                                var1 = var4.isArray;
                                var0 = _closure3_slot0;
                                var0 = var0[var2];
                                var0 = var1.bind(var4)(var0);
                                if (!var0) {
                                    _fun69979_ip = 88;
                                    continue _fun69979
                                }
                            case 61:
                                var4 = var6.Array;
                                var1 = var4.isArray;
                                var0 = _closure3_slot1;
                                var0 = var0[var2];
                                var0 = var1.bind(var4)(var0);
                                if (var0) {
                                    _fun69979_ip = 186;
                                    continue _fun69979
                                }
                            case 88:
                                var4 = _closure1_slot0;
                                var1 = _closure3_slot0;
                                var1 = var1[var2];
                                var7 = undefined;
                                var1 = var4.bind(var7)(var1);
                                if (!var1) {
                                    _fun69979_ip = 133;
                                    continue _fun69979
                                }
                            case 113:
                                var4 = _closure1_slot0;
                                var1 = _closure3_slot1;
                                var1 = var1[var2];
                                var1 = var4.bind(var7)(var1);
                                if (var1) {
                                    _fun69979_ip = 154;
                                    continue _fun69979
                                }
                            case 133:
                                var4 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var1 = var1[var2];
                                var4[var2] = var1;
                                _fun69979_ip = 293;
                                continue _fun69979;
                            case 154:
                                var1 = _closure3_slot0;
                                var5 = _closure1_slot1;
                                var4 = var1[var2];
                                var0 = _closure3_slot1;
                                var0 = var0[var2];
                                var0 = var5.bind(var7)(var4, var0);
                                var1[var2] = var0;
                                _fun69979_ip = 293;
                                continue _fun69979;
                            case 186:
                                var1 = _closure3_slot0;
                                var0 = _closure1_slot1;
                                var0 = var0.options;
                                var0 = var0.mergeArrays;
                                if (var0) {
                                    _fun69979_ip = 221;
                                    continue _fun69979
                                }
                            case 211:
                                var0 = _closure3_slot1;
                                var0 = var0[var2];
                                _fun69979_ip = 289;
                                continue _fun69979;
                            case 221:
                                var5 = var6.Array;
                                var4 = var5.from;
                                var7 = var6.Set;
                                var6 = _closure3_slot0;
                                var8 = var6[var2];
                                var6 = var8.concat;
                                var3 = _closure3_slot1;
                                var3 = var3[var2];
                                var10 = var6.bind(var8)(var3);
                                var6 = var7.prototype;
                                var6 = Object.create(var6, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var11 = var6;
                                var3 = new var11[var7](var10, var9);
                                var3 = var3 instanceof Object ? var3 : var6;
                                var0 = var4.bind(var5)(var3);
                            case 289:
                                var1[var2] = var0;
                            case 293:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                case 72:
                    var2 = var0.TypeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = 'Arguments provided to ts-deepmerge must be objects, not arrays.';
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot1 = var1;
    var3 = {};
    var3.mergeArrays = var4;
    var _closure1_slot2 = var3;
    var1.options = var3;
    var0 = function(arg0, arg1) { // Environment: var0
        var7 = 1;
        var4 = copyRestArgs(var7);
        var2 = _closure1_slot1;
        var0 = {};
        var3 = true;
        var0.mergeArrays = var3;
        var6 = arg0;
        var7 = var0;
        var3 = copyDataProperties(var7, var6);
        var2.options = var0;
        var3 = new Array(0);
        var5 = 0;
        var7 = var3;
        var6 = var4;
        var0 = arraySpread(var7, var6, var5);
        var5 = undefined;
        var7 = var2;
        var6 = var3;
        var0 = apply(var7, var6, var5);
        var1 = _closure1_slot2;
        var2.options = var1;
        return var0;
    };
    var1.withOptions = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);