// ../discord_common/js/packages/performance-utils/index.js
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7231: for (var _fun7231_ip = 0;;) switch (_fun7231_ip) {
        case 0:
            var0 = global;
            var11 = require;
            var16 = exports;
            var12 = dependencyMap;
            var2 = var0;
            var10 = var0;
            var6 = var11;
            var1 = var16;
            var5 = var12;
            var0 = undefined;
            var4 = undefined;
            var7 = undefined;
            var3 = undefined;
            var8 = global;
            var15 = var8.Object;
            var14 = var15.defineProperty;
            var13 = {};
            var9 = true;
            var13.value = var9;
            var9 = '__esModule';
            var9 = var14.bind(var15)(var16, var9, var13);
            var9 = 0;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
        case 78: // try_start_0
            var9 = var8.Date;
            var11 = var9.now;
            var9 = null;
            if (!(var9 == var11)) {
                _fun7231_ip = 114;
                continue _fun7231
            }
        case 95:
            var11 = var8.Date;
            var9 = function() { // Environment: var9
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var2 = var1;
                var0 = new var2[var0](var1);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.valueOf;
                var0 = var0.bind(var1)();
                return var0;
            };
            var11.now = var9;
        case 114: // try_end0
            _fun7231_ip = 118;
            continue _fun7231;
        case 116: // catch_target0
            CatchBlockStart(arg_register = 9);
        case 118:
            var11 = undefined;
        case 120: // try_start_1
            var9 = var10;
            var9 = var9.performance;
            var9 = var9.timing;
            var12 = var9.navigationStart;
            var11 = var12;
            var9 = null;
            if (!(var9 == var12)) {
                _fun7231_ip = 170;
                continue _fun7231
            }
        case 150:
            var9 = var10;
            var12 = var9.performance;
            var9 = var12.now;
            var9 = var9.bind(var12)();
            _fun7231_ip = 173;
            continue _fun7231;
        case 170:
            var9 = var11;
        case 173: // try_end1
            _fun7231_ip = 192;
            continue _fun7231;
        case 175: // catch_target1
            CatchBlockStart(arg_register = 11);
            var12 = var8.Date;
            var11 = var12.now;
            var9 = var11.bind(var12)();
        case 192:
            var4 = var9;
            var7 = var9;
            var9 = undefined;
        case 200: // try_start_2
            var10 = var10.performance;
            var11 = var10.timeOrigin;
            var9 = var11;
            var10 = null;
            if (!(var10 == var11)) {
                _fun7231_ip = 223;
                continue _fun7231
            }
        case 221:
            _fun7231_ip = 226;
            continue _fun7231;
        case 223:
            var7 = var9;
        case 226: // try_end2
            _fun7231_ip = 245;
            continue _fun7231;
        case 228: // catch_target2
            CatchBlockStart(arg_register = 9);
            var9 = var8.Date;
            var8 = var9.now;
            var7 = var8.bind(var9)();
        case 245:
            var3 = var7;
            var7 = var2;
            var7 = var7.performance;
            var7 = var7.timing;
            var8 = null;
            if (!(var8 == var7)) {
                _fun7231_ip = 298;
                continue _fun7231
            }
        case 269: // try_start_3
            var7 = var2;
            var9 = var7.performance;
            var7 = {};
            var10 = var4;
            var7.navigationStart = var10;
            var9.timing = var7;
        case 294: // try_end3
            _fun7231_ip = 298;
            continue _fun7231;
        case 296: // catch_target3
            CatchBlockStart(arg_register = 7);
        case 298:
            var7 = var2;
            var7 = var7.performance;
            var7 = var7.timeOrigin;
            if (!(var8 == var7)) {
                _fun7231_ip = 339;
                continue _fun7231
            }
        case 317: // try_start_4
            var7 = var2;
            var8 = var7.performance;
            var7 = var3;
            var8.timeOrigin = var7;
        case 335: // try_end4
            _fun7231_ip = 339;
            continue _fun7231;
        case 337: // catch_target4
            CatchBlockStart(arg_register = 7);
        case 339:
            var2 = var2.performance;
            var7 = var5;
            var5 = 1;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = '../discord_common/js/packages/performance-utils/index.js';
            var5 = var6.bind(var7)(var5);
            var1.navigationStart = var4;
            var1.timeOrigin = var3;
            var1.performance = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [638, 2]);