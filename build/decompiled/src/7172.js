// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {};
    var _closure1_slot2 = var2;
    var2 = {};
    var _closure1_slot3 = var2;
    var2 = function arg0, arg1() {
        _fun58706: for (var _fun58706_ip = 0;;) switch (_fun58706_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot2;
                var2 = var3[var1];
                if (var2) {
                    _fun58706_ip = 21;
                    continue _fun58706
                }
            case 17:
                var2 = new Array(0);
            case 21:
                var3[var1] = var2;
                var0 = _closure1_slot2;
                var2 = var0[var1];
                var1 = var2.push;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.addHandler = var2;
    var2 = function arg0, arg1() {
        _fun58707: for (var _fun58707_ip = 0;;) switch (_fun58707_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot3;
                var1 = var1[var2];
                if (var1) {
                    _fun58707_ip = 36;
                    continue _fun58707
                }
            case 17:
                var3 = arg1;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var1 = _closure1_slot3;
                var0 = true;
                var1[var2] = var0;
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var1.maybeInstrument = var2;
    var2 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var0 = _closure1_slot2;
        var2 = var1.bind(var2)(var0);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot2;
            var0 = undefined;
            var1 = arg0;
            var2[var1] = var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.resetInstrumentationHandlers = var2;
    var0 = function arg0, arg1() {
        _fun58710: for (var _fun58710_ip = 0;;) switch (_fun58710_ip) {
            case 0:
                var1 = arg0;
                var11 = var1;
                var12 = arg1;
                var0 = undefined;
                var13 = undefined;
                if (!var1) {
                    _fun58710_ip = 30;
                    continue _fun58710
                }
            case 16:
                var3 = _closure1_slot2;
                var2 = var11;
                var1 = var3[var2];
            case 30:
                if (!var1) {
                    _fun58710_ip = 233;
                    continue _fun58710
                }
            case 36:
                var10 = var1;
                var2 = var10[Symbol.iterator];
                var10 = var2().next;
                var8 = 1;
                var7 = 2;
                var6 = global;
                var5 = 'Error while triggering instrumentation handler.\nType: ';
                var4 = '\nName: ';
                var3 = '\nError:';
                var1 = 0;
            case 73:
                var15 = var10().value;
                var16 = var2;
                if (!(var16 !== var0)) {
                    _fun58710_ip = 233;
                    continue _fun58710
                }
            case 87: // try_start_1
                var13 = var15;
            case 90: // try_start_0
                var16 = var13;
                var15 = var12;
                var15 = var16.bind(var0)(var15);
            case 101: // try_end0
                _fun58710_ip = 221;
                continue _fun58710;
            case 103: // catch_target0
                CatchBlockStart(arg_register = 14);
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var1];
                var15 = var16.bind(var0)(var15);
                var15 = var15.DEBUG_BUILD;
                if (!var15) {
                    _fun58710_ip = 221;
                    continue _fun58710
                }
            case 131:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var17 = var15[var8];
                var17 = var16.bind(var0)(var17);
                var18 = var17.logger;
                var17 = var18.error;
                var19 = var11;
                var15 = var15[var7];
                var20 = var16.bind(var0)(var15);
                var16 = var20.getFunctionName;
                var15 = var13;
                var22 = var16.bind(var20)(var15);
                var15 = var6.HermesInternal;
                var15 = var15.concat;
                var25 = var5;
                var24 = var19;
                var23 = var4;
                var21 = var3;
                var16 = var25[var15](var24, var23, var22, var21, var20);
                var15 = var14;
                var15 = var17.bind(var18)(var16, var15);
            case 221: // try_end1
                _fun58710_ip = 73;
                continue _fun58710;
            case 226: // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 233:
                return var0;
        }
    };
    var1.triggerHandlers = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7169, 7168, 7173]);