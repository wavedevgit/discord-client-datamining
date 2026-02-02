// utils/FileManagerUtils.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun100099: for (var _fun100099_ip = 0;;) switch (_fun100099_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100099_ip = 295;
                            continue _fun100099
                        }
                    case 10:
                        var5 = arg1;
                        var4 = arg2;
                        var10 = undefined;
                        var8 = undefined;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var11 = 2;
                        var1 = var1[var11];
                        var2 = var2.bind(var10)(var1);
                        var1 = null;
                        var6 = var1 == var2;
                        var2 = null;
                        if (var6) {
                            _fun100099_ip = 136;
                            continue _fun100099
                        }
                    case 54:
                        var7 = 'cache';
                        var6 = arg0;
                        if (!(var7 !== var6)) {
                            _fun100099_ip = 100;
                            continue _fun100099
                        }
                    case 65:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var11];
                        var7 = var7.bind(var10)(var6);
                        var6 = var7.getConstants;
                        var6 = var6.bind(var7)();
                        var6 = var6.DocumentsDirPath;
                        _fun100099_ip = 133;
                        continue _fun100099;
                    case 100:
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var11];
                        var9 = var9.bind(var10)(var7);
                        var7 = var9.getConstants;
                        var7 = var7.bind(var9)();
                        var6 = var7.CacheDirPath;
                    case 133:
                        var2 = var6;
                    case 136:
                        var8 = var2;
                        if (!(var1 != var2)) {
                            _fun100099_ip = 292;
                            continue _fun100099
                        }
                    case 146:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var11];
                        var7 = var6.bind(var10)(var2);
                        var6 = var7.fileExists;
                        var2 = var8;
                        var9 = '/';
                        var12 = var2 + var9;
                        var2 = var5;
                        var2 = var12 + var2;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 198);
                    case 196:
                        return var2;
                    case 198:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun100099_ip = 289;
                            continue _fun100099
                        }
                    case 204:
                        if (var2) {
                            _fun100099_ip = 210;
                            continue _fun100099
                        }
                    case 207:
                        return var1;
                    case 210: // try_start_0
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var11];
                        var7 = var7.bind(var10)(var6);
                        var6 = var7.readFile;
                        var8 = var8 + var9;
                        var5 = var8 + var5;
                        var4 = var6.bind(var7)(var5, var4);
                        SaveGenerator(address = 251);
                    case 249:
                        return var4;
                    case 251:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun100099_ip = 260;
                            continue _fun100099
                        }
                    case 257: // try_end0
                        return var4;
                    case 260:
                        return var4;
                    case 263: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot3;
                        var4 = var5.error;
                        var3 = 'Failed to read file from disk';
                        var3 = var4.bind(var5)(var3, var6);
                        return var1;
                    case 289:
                        return var2;
                    case 292:
                        return var1;
                    case 295:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'FileManagerUtils';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/FileManagerUtils.android.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun100100: for (var _fun100100_ip = 0;;) switch (_fun100100_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = null;
                var3 = var1 == var0;
                var0 = undefined;
                if (var3) {
                    _fun100100_ip = 97;
                    continue _fun100100
                }
            case 36:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var7 = var3.bind(var4)(var2);
                var6 = var7.writeFile;
                var11 = arg0;
                var10 = arg1;
                var9 = arg2;
                var8 = arg3;
                var12 = var7;
                var4 = var12[var6](var11, var10, var9, var8, var7);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var2
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = 'file:';
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2);
            case 97:
                if (!(var1 == var0)) {
                    _fun100100_ip = 126;
                    continue _fun100100
                }
            case 101:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var1 = "RTNFileManager doesn't exist?";
                var0 = var2.bind(var3)(var1);
            case 126:
                return var0;
        }
    };
    var2.writeFile = var3;
    var3 = function arg0, arg1, arg2() {
        _fun100102: for (var _fun100102_ip = 0;;) switch (_fun100102_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = null;
                var3 = var1 == var0;
                var0 = undefined;
                if (var3) {
                    _fun100102_ip = 75;
                    continue _fun100102
                }
            case 36:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var3.bind(var4)(var2);
                var5 = var6.moveFile;
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var0 = var5.bind(var6)(var4, var3, var2);
            case 75:
                if (!(var1 == var0)) {
                    _fun100102_ip = 100;
                    continue _fun100102
                }
            case 79:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var1 = false;
                var0 = var2.bind(var3)(var1);
            case 100:
                return var0;
        }
    };
    var2.moveFile = var3;
    var3 = function arg0, arg1() {
        _fun100103: for (var _fun100103_ip = 0;;) switch (_fun100103_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = null;
                var3 = var1 == var0;
                var0 = undefined;
                if (var3) {
                    _fun100103_ip = 71;
                    continue _fun100103
                }
            case 36:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var5 = var3.bind(var4)(var2);
                var4 = var5.removeFile;
                var3 = arg0;
                var2 = arg1;
                var0 = var4.bind(var5)(var3, var2);
            case 71:
                if (!(var1 == var0)) {
                    _fun100103_ip = 96;
                    continue _fun100103
                }
            case 75:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var1 = false;
                var0 = var2.bind(var3)(var1);
            case 96:
                return var0;
        }
    };
    var2.removeFile = var3;
    var3 = function arg0, arg1() {
        _fun100104: for (var _fun100104_ip = 0;;) switch (_fun100104_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = null;
                var3 = var1 == var0;
                var0 = undefined;
                if (var3) {
                    _fun100104_ip = 71;
                    continue _fun100104
                }
            case 36:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var5 = var3.bind(var4)(var2);
                var4 = var5.clearFolder;
                var3 = arg0;
                var2 = arg1;
                var0 = var4.bind(var5)(var3, var2);
            case 71:
                if (!(var1 == var0)) {
                    _fun100104_ip = 96;
                    continue _fun100104
                }
            case 75:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var1 = false;
                var0 = var2.bind(var3)(var1);
            case 96:
                return var0;
        }
    };
    var2.clearFolder = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.readFile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3, 1269, 2]);