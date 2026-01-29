// ../discord_common/js/shared/utils/PathUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: getAuthenticationPath, environment: var1
        _fun6282: for (var _fun6282_ip = 0;;) switch (_fun6282_ip) {
            case 0:
                var7 = arguments[1];
                var2 = arguments[2];
                var9 = arguments[3];
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun6282_ip = 17;
                    continue _fun6282
                }
            case 15:
                var7 = null;
            case 17:
                if (!(var2 === var4)) {
                    _fun6282_ip = 23;
                    continue _fun6282
                }
            case 21:
                var2 = true;
            case 23:
                if (!(var9 === var4)) {
                    _fun6282_ip = 31;
                    continue _fun6282
                }
            case 27:
                var9 = '';
            case 31:
                var0 = global;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var1 = var1.WEBAPP_ENDPOINT;
                var3 = null;
                var5 = var3 != var1;
                var6 = '';
                var1 = var6;
                if (!var5) {
                    _fun6282_ip = 85;
                    continue _fun6282
                }
            case 67:
                var5 = var0.window;
                var5 = var5.GLOBAL_ENV;
                var1 = var5.WEBAPP_ENDPOINT;
            case 85:
                var3 = var3 != var7;
                var5 = var6;
                if (!var3) {
                    _fun6282_ip = 128;
                    continue _fun6282
                }
            case 95:
                var3 = var0.encodeURIComponent;
                var7 = var3.bind(var4)(var7);
                var3 = var0.HermesInternal;
                var4 = var3.concat;
                var3 = '?redirect_to=';
                var5 = var4.bind(var3)(var7);
            case 128:
                var3 = var9.length;
                var7 = 0;
                var4 = var9;
                if (!(var7 !== var3)) {
                    _fun6282_ip = 196;
                    continue _fun6282
                }
            case 142:
                var3 = var5.length;
                if (!(var7 !== var3)) {
                    _fun6282_ip = 173;
                    continue _fun6282
                }
            case 151:
                var3 = var0.HermesInternal;
                var7 = var3.concat;
                var3 = '&';
                var3 = var7.bind(var3)(var9);
                _fun6282_ip = 193;
                continue _fun6282;
            case 173:
                var7 = var0.HermesInternal;
                var8 = var7.concat;
                var7 = '?';
                var3 = var8.bind(var7)(var9);
            case 193:
                var4 = var3;
            case 196:
                var3 = var6;
                if (!var2) {
                    _fun6282_ip = 205;
                    continue _fun6282
                }
            case 202:
                var3 = var1;
            case 205:
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var13 = '/';
                var12 = arg0;
                var15 = var6;
                var14 = var3;
                var11 = var5;
                var10 = var4;
                var0 = var15[var2](var14, var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0) { // Original name: UnescapedPathParam, environment: var1
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.value = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'toString';
        var0.key = var4;
        var1 = function() { // Original name: value, environment: var1
            var0 = this;
            var0 = var0.value;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var5 = 2;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/utils/PathUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0) { // Original name: getLoginPath, environment: var1
        _fun6286: for (var _fun6286_ip = 0;;) switch (_fun6286_ip) {
            case 0:
                var5 = arguments[1];
                var4 = arguments[2];
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun6286_ip = 14;
                    continue _fun6286
                }
            case 12:
                var5 = true;
            case 14:
                if (!(var4 === var3)) {
                    _fun6286_ip = 22;
                    continue _fun6286
                }
            case 18:
                var4 = '';
            case 22:
                var2 = _closure1_slot3;
                var9 = 'login';
                var8 = arg0;
                var10 = undefined;
                var7 = var5;
                var6 = var4;
                var0 = var10[var2](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.getLoginPath = var5;
    var2.getAuthenticationPath = var4;
    var2.UnescapedPathParam = var3;
    var1 = function(arg0, arg1) { // Original name: wrapPaths, environment: var1
        _fun6287: for (var _fun6287_ip = 0;;) switch (_fun6287_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = {};
                var _closure2_slot2 = var0;
                var5 = function() { // Original name: _loop, environment: var6
                    _fun6288: for (var _fun6288_ip = 0;;) switch (_fun6288_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var2 = var3[var2];
                            var _closure3_slot0 = var2;
                            var4 = 'function';
                            var3 = typeof var2;
                            if (!(var4 === var3)) {
                                _fun6288_ip = 53;
                                continue _fun6288
                            }
                        case 32:
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot3;
                            var1 = function(arg0) { // Environment: var1
                                var8 = 0;
                                var5 = copyRestArgs(var8);
                                var2 = _closure3_slot0;
                                var3 = _closure2_slot1;
                                var0 = function(arg0, arg1) { // Original name: encodePathArguments, environment: var0
                                    var2 = arg0;
                                    var1 = arg1;
                                    var _closure5_slot0 = var1;
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun6291: for (var _fun6291_ip = 0;;) switch (_fun6291_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var2 = null;
                                                var0 = var3;
                                                if (!(var2 != var0)) {
                                                    _fun6291_ip = 124;
                                                    continue _fun6291
                                                }
                                            case 12:
                                                var1 = _closure1_slot2;
                                                var1 = var3 instanceof var1;
                                                if (var1) {
                                                    _fun6291_ip = 112;
                                                    continue _fun6291
                                                }
                                            case 26:
                                                var1 = _closure5_slot0;
                                                if (!(var2 != var1)) {
                                                    _fun6291_ip = 95;
                                                    continue _fun6291
                                                }
                                            case 37:
                                                var1 = global;
                                                var2 = var1.String;
                                                var1 = undefined;
                                                var2 = var2.bind(var1)(var3);
                                                var1 = var2.split;
                                                var4 = '';
                                                var5 = var1.bind(var2)(var4);
                                                var2 = var5.map;
                                                var1 = function(arg0) { // Environment: var1
                                                    _fun6292: for (var _fun6292_ip = 0;;) switch (_fun6292_ip) {
                                                        case 0:
                                                            var3 = arg0;
                                                            var2 = _closure5_slot0;
                                                            var1 = null;
                                                            if (!(var1 != var2)) {
                                                                _fun6292_ip = 36;
                                                                continue _fun6292
                                                            }
                                                        case 16:
                                                            var1 = _closure5_slot0;
                                                            var0 = var1.includes;
                                                            var1 = var0.bind(var1)(var3);
                                                            var0 = var3;
                                                            if (var1) {
                                                                _fun6292_ip = 51;
                                                                continue _fun6292
                                                            }
                                                        case 36:
                                                            var1 = global;
                                                            var2 = var1.encodeURIComponent;
                                                            var1 = undefined;
                                                            var0 = var2.bind(var1)(var3);
                                                        case 51:
                                                            return var0;
                                                    }
                                                };
                                                var2 = var2.bind(var5)(var1);
                                                var1 = var2.join;
                                                var1 = var1.bind(var2)(var4);
                                                _fun6291_ip = 110;
                                                continue _fun6291;
                                            case 95:
                                                var2 = global;
                                                var4 = var2.encodeURIComponent;
                                                var2 = undefined;
                                                var1 = var4.bind(var2)(var3);
                                            case 110:
                                                _fun6291_ip = 121;
                                                continue _fun6291;
                                            case 112:
                                                var2 = var3.toString;
                                                var1 = var2.bind(var3)();
                                            case 121:
                                                var0 = var1;
                                            case 124:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = undefined;
                                var7 = var0.bind(var1)(var5, var3);
                                var0 = new Array(0);
                                var8 = var0;
                                var6 = 0;
                                var3 = arraySpread(var8, var7, var6);
                                var8 = var2;
                                var7 = var0;
                                var6 = undefined;
                                var0 = apply(var8, var7, var6);
                                return var0;
                            };
                            var4[var3] = var1;
                            var1 = undefined;
                            return var1;
                        case 53:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot3;
                            var1[var0] = var2;
                            var0 = 1;
                            return var0;
                    }
                };
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var4 = var1.bind(var2)(var3);
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = undefined;
                if (!var1) {
                    _fun6287_ip = 85;
                    continue _fun6287
                }
            case 61:
                var1 = var4[var3];
                var _closure2_slot3 = var1;
                var1 = var5.bind(var2)();
                var3 = var3 + 1;
                var1 = var4.length;
                if (var3 < var1) {
                    _fun6287_ip = 61;
                    continue _fun6287
                }
            case 85:
                return var0;
        }
    };
    var2.wrapPaths = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);