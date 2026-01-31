// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function(arg0) { // Original name: filenameIsInApp, environment: var0
        _fun98959: for (var _fun98959_ip = 0;;) switch (_fun98959_ip) {
            case 0:
                var3 = arg0;
                var1 = undefined;
                var4 = undefined;
                var0 = arguments.length;
                var2 = 1;
                var0 = var0 > var2;
                if (!var0) {
                    _fun98959_ip = 28;
                    continue _fun98959
                }
            case 20:
                var5 = arguments[var2];
                var0 = var1 !== var5;
            case 28:
                if (!var0) {
                    _fun98959_ip = 35;
                    continue _fun98959
                }
            case 31:
                var0 = arguments[var2];
            case 35:
                if (var0) {
                    _fun98959_ip = 148;
                    continue _fun98959
                }
            case 38:
                var2 = var3;
                if (!var2) {
                    _fun98959_ip = 62;
                    continue _fun98959
                }
            case 44:
                var5 = var3.startsWith;
                var4 = '/';
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 62:
                if (!var2) {
                    _fun98959_ip = 93;
                    continue _fun98959
                }
            case 65:
                var5 = var3.match;
                var4 = /^[A-Z]:/;
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 93:
                if (!var2) {
                    _fun98959_ip = 114;
                    continue _fun98959
                }
            case 96:
                var5 = var3.startsWith;
                var4 = '.';
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 114:
                if (!var2) {
                    _fun98959_ip = 145;
                    continue _fun98959
                }
            case 117:
                var5 = var3.match;
                var4 = /^[a-zA-Z]([a-zA-Z0-9.\-+])*:\\/\\ //;
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 145:
                var0 = var2;
            case 148:
                var0 = !var0;
                if (!var0) {
                    _fun98959_ip = 158;
                    continue _fun98959
                }
            case 154:
                var0 = var1 !== var3;
            case 158:
                if (!var0) {
                    _fun98959_ip = 180;
                    continue _fun98959
                }
            case 161:
                var2 = var3.includes;
                var1 = 'node_modules/';
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 180:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var2 = function(arg0) { // Original name: node, environment: var0
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = /^\s*[-]{4,}$/;
        var _closure2_slot1 = var1;
        var1 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun98961: for (var _fun98961_ip = 0;;) switch (_fun98961_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.match;
                    var0 = _closure2_slot2;
                    var7 = var2.bind(var1)(var0);
                    if (var7) {
                        _fun98961_ip = 55;
                        continue _fun98961
                    }
                case 24:
                    var2 = var1.match;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var1)(var0);
                    if (var0) {
                        _fun98961_ip = 46;
                        continue _fun98961
                    }
                case 42:
                    var0 = undefined;
                    return var0;
                case 46:
                    var0 = {};
                    var0.filename = var1;
                    return var0;
                case 55:
                    var9 = 1;
                    var3 = var7[var9];
                    var4 = undefined;
                    var0 = undefined;
                    var1 = undefined;
                    var2 = undefined;
                    if (!var3) {
                        _fun98961_ip = 221;
                        continue _fun98961
                    }
                case 76:
                    var16 = var7[var9];
                    var3 = var16.lastIndexOf;
                    var8 = '.';
                    var3 = var3.bind(var16)(var8);
                    var5 = var3 - var9;
                    var5 = var16[var5];
                    var10 = var3;
                    if (!(var8 === var5)) {
                        _fun98961_ip = 113;
                        continue _fun98961
                    }
                case 110:
                    var10 = var3 - 1;
                case 113:
                    var15 = 0;
                    var11 = var10 > var15;
                    var8 = undefined;
                    var5 = undefined;
                    var3 = var16;
                    if (!var11) {
                        _fun98961_ip = 212;
                        continue _fun98961
                    }
                case 129:
                    var11 = var16.slice;
                    var14 = var11.bind(var16)(var15, var10);
                    var11 = var16.slice;
                    var10 = var10 + var9;
                    var11 = var11.bind(var16)(var10);
                    var12 = var14.indexOf;
                    var10 = '.Module';
                    var13 = var12.bind(var14)(var10);
                    var8 = var14;
                    var5 = var11;
                    var3 = var16;
                    if (!(var13 > var15)) {
                        _fun98961_ip = 212;
                        continue _fun98961
                    }
                case 184:
                    var12 = var16.slice;
                    var10 = var13 + var9;
                    var3 = var12.bind(var16)(var10);
                    var12 = var14.slice;
                    var8 = var12.bind(var14)(var15, var13);
                    var5 = var11;
                case 212:
                    var0 = var8;
                    var1 = var5;
                    var2 = var3;
                case 221:
                    var10 = undefined;
                    var8 = undefined;
                    if (!var1) {
                        _fun98961_ip = 234;
                        continue _fun98961
                    }
                case 228:
                    var10 = var0;
                    var8 = var1;
                case 234:
                    var0 = '<anonymous>';
                    if (!(var0 === var1)) {
                        _fun98961_ip = 248;
                        continue _fun98961
                    }
                case 244:
                    var2 = undefined;
                    var8 = undefined;
                case 248:
                    if (!(var4 === var2)) {
                        _fun98961_ip = 320;
                        continue _fun98961
                    }
                case 252:
                    if (var8) {
                        _fun98961_ip = 283;
                        continue _fun98961
                    }
                case 255:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var0 = var1.bind(var4)(var0);
                    var8 = var0.UNKNOWN_FUNCTION;
                case 283:
                    var0 = var8;
                    if (!var10) {
                        _fun98961_ip = 317;
                        continue _fun98961
                    }
                case 289:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var3 = '';
                    var1 = '.';
                    var0 = var5.bind(var3)(var10, var1, var8);
                case 317:
                    var2 = var0;
                case 320:
                    var0 = 2;
                    var1 = var7[var0];
                    if (!var1) {
                        _fun98961_ip = 354;
                        continue _fun98961
                    }
                case 330:
                    var5 = var7[var0];
                    var3 = var5.startsWith;
                    var1 = 'file://';
                    var1 = var3.bind(var5)(var1);
                    if (var1) {
                        _fun98961_ip = 360;
                        continue _fun98961
                    }
                case 354:
                    var8 = var7[var0];
                    _fun98961_ip = 377;
                    continue _fun98961;
                case 360:
                    var3 = var7[var0];
                    var1 = var3.slice;
                    var0 = 7;
                    var8 = var1.bind(var3)(var0);
                case 377:
                    var0 = 5;
                    var3 = var7[var0];
                    var1 = 'native';
                    var3 = var1 === var3;
                    var5 = var8;
                    if (!var8) {
                        _fun98961_ip = 423;
                        continue _fun98961
                    }
                case 398:
                    var10 = var8.match;
                    var1 = /\\/ [A - Z]: /;
                    var5 = var10.bind(var8)(var1);
                case 423:
                    var1 = var8;
                    if (!var5) {
                        _fun98961_ip = 439;
                        continue _fun98961
                    }
                case 429:
                    var5 = var8.slice;
                    var1 = var5.bind(var8)(var9);
                case 439:
                    var5 = var1;
                    if (var1) {
                        _fun98961_ip = 452;
                        continue _fun98961
                    }
                case 445:
                    var8 = var7[var0];
                    var5 = !var8;
                case 452:
                    if (var5) {
                        _fun98961_ip = 458;
                        continue _fun98961
                    }
                case 455:
                    var5 = var3;
                case 458:
                    if (var5) {
                        _fun98961_ip = 465;
                        continue _fun98961
                    }
                case 461:
                    var1 = var7[var0];
                case 465:
                    var0 = {};
                    var0.filename = var1;
                    var8 = _closure2_slot0;
                    var5 = undefined;
                    if (!var8) {
                        _fun98961_ip = 490;
                        continue _fun98961
                    }
                case 481:
                    var6 = _closure2_slot0;
                    var5 = var6.bind(var4)(var1);
                case 490:
                    var0.module = var5;
                    var0.function = var2;
                    var6 = _closure1_slot4;
                    var5 = 3;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var0.lineno = var5;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var0.colno = var5;
                    var2 = _closure1_slot2;
                    if (var1) {
                        _fun98961_ip = 552;
                        continue _fun98961
                    }
                case 548:
                    var1 = '';
                case 552:
                    var1 = var2.bind(var4)(var1, var3);
                    var0.in_app = var1;
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot3 = var2;
    var4 = function(arg0) { // Original name: _parseIntOrUndefined, environment: var0
        _fun98962: for (var _fun98962_ip = 0;;) switch (_fun98962_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.parseInt;
                if (var3) {
                    _fun98962_ip = 18;
                    continue _fun98962
                }
            case 14:
                var3 = '';
            case 18:
                var1 = undefined;
                var0 = 10;
                var0 = var2.bind(var1)(var3, var0);
                if (var0) {
                    _fun98962_ip = 34;
                    continue _fun98962
                }
            case 32:
                var0 = undefined;
            case 34:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var1.filenameIsInApp = var3;
    var1.node = var2;
    var0 = function(arg0) { // Original name: nodeStackLineParser, environment: var0
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var0 = [90];
        var0[1] = var1;
        return var0;
    };
    var1.nodeStackLineParser = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12838]);