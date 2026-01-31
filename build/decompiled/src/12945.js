// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /[^\w\-.\/]+/gi;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var3 = var2.bind(var1)(var0);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun99680: for (var _fun99680_ip = 0;;) switch (_fun99680_ip) {
                case 0:
                    var0 = arg1;
                    var8 = undefined;
                    var1 = undefined;
                    var2 = _closure1_slot4;
                    var6 = var2;
                    var3 = var6[Symbol.iterator];
                    var6 = var3().next;
                    var5 = 2;
                    var4 = 0;
                    var2 = 1;
                case 28:
                    var10 = var6().value;
                    var9 = var3;
                    if (!(var9 !== var8)) {
                        _fun99680_ip = 78;
                        continue _fun99680
                    }
                case 39: // try_start_0
                    var9 = _closure1_slot3;
                    var9 = var9.bind(var8)(var10, var5);
                    var10 = var9[var4];
                    var1 = var9[var2];
                    var9 = var0;
                    if (!(var9 !== var10)) {
                        _fun99680_ip = 66;
                        continue _fun99680
                    }
                case 64: // try_end0
                    _fun99680_ip = 28;
                    continue _fun99680;
                case 66:
                    var3.return();
                    _fun99680_ip = 81;
                    continue _fun99680;
                case 71: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var3.return();
                    throw var2;
                case 78:
                    var1 = var0;
                case 81:
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
            }
        };
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = new Array(6);
    var4 = ['\n', '\\n'];
    var3[0] = var4;
    var4 = ['\r', '\\r'];
    var3[1] = var4;
    var4 = ['\t', '\\t'];
    var3[2] = var4;
    var4 = ['\\', '\\\\'];
    var3[3] = var4;
    var4 = ['|', '\\u{7c}'];
    var3[4] = var4;
    var4 = [',', '\\u{2c}'];
    var3[5] = var4;
    var _closure1_slot4 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var0 = global;
        var3 = var0.Object;
        var2 = var3.entries;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.dropUndefinedKeys;
        var1 = arg3;
        var1 = var4.bind(var5)(var1);
        var3 = var2.bind(var3)(var1);
        var2 = var3.sort;
        var1 = function(arg0, arg1) { // Environment: var1
            var0 = arg0;
            var3 = 0;
            var2 = var0[var3];
            var1 = var2.localeCompare;
            var0 = arg1;
            var0 = var0[var3];
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var10 = '';
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getBucketKey = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /[^\w\-.]+/gi;
        var0 = '_';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.sanitizeMetricKey = var3;
    var3 = function arg0() {
        _fun99684: for (var _fun99684_ip = 0;;) switch (_fun99684_ip) {
            case 0:
                var9 = arg0;
                var0 = {};
                var7 = var9;
                var2 = undefined;
                var1 = global;
                for (var4 in var7)
                    case 23: {
                        case 32: var10 = var4;
                        var11 = var1.Object;
                        var11 = var11.prototype;
                        var12 = var11.hasOwnProperty;
                        var11 = var12.call;
                        var11 = var11.bind(var12)(var9, var10);
                        if (!var11) {
                            _fun99684_ip = 23;
                            continue _fun99684
                        }
                        case 66: var11 = _closure1_slot5;
                        var11 = var11.bind(var2)(var10);
                        var12 = _closure1_slot6;
                        var13 = var1.String;
                        var10 = var9[var10];
                        var10 = var13.bind(var2)(var10);
                        var10 = var12.bind(var2)(var10);
                        var0[var11] = var10;
                        _fun99684_ip = 23;
                        continue _fun99684;
                    }
            case 105:
                return var0;
        }
    };
    var2.sanitizeTags = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /[^\w]+/gi;
        var0 = '_';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.sanitizeUnit = var3;
    var3 = function arg0() {
        _fun99686: for (var _fun99686_ip = 0;;) switch (_fun99686_ip) {
            case 0:
                var13 = undefined;
                var15 = undefined;
                var16 = undefined;
                var12 = '';
                var0 = var12;
                var11 = arg0;
                var2 = var11[Symbol.iterator];
                var11 = var2().next;
                var10 = global;
                var9 = '@';
                var8 = ':';
                var7 = '|';
                var6 = '|T';
                var5 = '\n';
                var4 = ',';
                var3 = '|#';
                var1 = 0;
            case 57:
                var17 = var11().value;
                var18 = var2;
                if (!(var18 !== var13)) {
                    _fun99686_ip = 248;
                    continue _fun99686
                }
            case 71: // try_start_0
                var15 = var17;
                var19 = var10.Object;
                var18 = var19.entries;
                var17 = var17.tags;
                var17 = var18.bind(var19)(var17);
                var16 = var17;
                var17 = var17.length;
                var17 = var17 > var1;
                var24 = var12;
                if (!var17) {
                    _fun99686_ip = 161;
                    continue _fun99686
                }
            case 115:
                var19 = var16;
                var18 = var19.map;
                var17 = function(arg0) { // Environment: var14
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 2;
                    var1 = var3.bind(var2)(var1, var0);
                    var0 = 0;
                    var4 = var1[var0];
                    var0 = 1;
                    var3 = var1[var0];
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = ':';
                    var0 = var2.bind(var1)(var4, var0, var3);
                    return var0;
                };
                var18 = var18.bind(var19)(var17);
                var17 = var18.join;
                var18 = var17.bind(var18)(var4);
                var17 = var10.HermesInternal;
                var17 = var17.concat;
                var24 = var17.bind(var3)(var18);
            case 161:
                var18 = var0;
                var17 = var15;
                var35 = var17.name;
                var33 = var17.unit;
                var31 = var17.metric;
                var29 = var17.metricType;
                var26 = var17.timestamp;
                var17 = var10.HermesInternal;
                var17 = var17.concat;
                var36 = var12;
                var34 = var9;
                var32 = var8;
                var30 = var7;
                var28 = var24;
                var27 = var6;
                var25 = var5;
                var17 = var36[var17](var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24);
                var0 = var18 + var17;
            case 236: // try_end0
                _fun99686_ip = 57;
                continue _fun99686;
            case 241: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 248:
                return var0;
        }
    };
    var2.serializeMetricBuckets = var3;
    var1 = function arg0() {
        _fun99688: for (var _fun99688_ip = 0;;) switch (_fun99688_ip) {
            case 0:
                var6 = arg0;
                var0 = var6.length;
                var1 = 0;
                var2 = var1 < var0;
                var5 = 5;
                var4 = 0;
                var3 = 0;
                var0 = 0;
                if (!var2) {
                    _fun99688_ip = 68;
                    continue _fun99688
                }
            case 26:
                var2 = var6.charCodeAt;
                var7 = var2.bind(var6)(var3);
                var2 = var4 << var5;
                var2 = var2 - var4;
                var2 = var2 + var7;
                var4 = var2 & var2;
                var3 = var3 + 1;
                var2 = var6.length;
                var0 = var4;
                if (var3 < var2) {
                    _fun99688_ip = 26;
                    continue _fun99688
                }
            case 68:
                var0 = var0 >>> var1;
                return var0;
        }
    };
    var2.simpleHash = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 12824]);