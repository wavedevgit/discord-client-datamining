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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = {};
    var _closure1_slot2 = var2;
    var2 = {};
    var _closure1_slot3 = var2;
    var2 = function arg0, arg1() {
        _fun8971: for (var _fun8971_ip = 0;;) switch (_fun8971_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot2;
                var2 = var3[var1];
                if (var2) {
                    _fun8971_ip = 21;
                    continue _fun8971
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
        _fun8972: for (var _fun8972_ip = 0;;) switch (_fun8972_ip) {
            case 0:
                var5 = arg0;
                var1 = var5;
                var3 = arg1;
                var4 = _closure1_slot3;
                var4 = var4[var5];
                if (var4) {
                    _fun8972_ip = 143;
                    continue _fun8972
                }
            case 23:
                var6 = _closure1_slot3;
                var5 = var1;
                var4 = true;
                var6[var5] = var4;
            case 36: // try_start_0
                var4 = var3;
                var3 = undefined;
                var3 = var4.bind(var3)();
            case 45: // try_end0
                _fun8972_ip = 143;
                continue _fun8972;
            case 47: // catch_target0
                CatchBlockStart(arg_register = 0);
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun8972_ip = 143;
                    continue _fun8972
                }
            case 79:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.debug;
                var2 = var3.error;
                var5 = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'Error while instrumenting ';
                var1 = var4.bind(var1)(var5);
                var0 = var2.bind(var3)(var1, var0);
            case 143:
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
        _fun8975: for (var _fun8975_ip = 0;;) switch (_fun8975_ip) {
            case 0:
                var1 = arg0;
                var11 = var1;
                var12 = arg1;
                var0 = undefined;
                var13 = undefined;
                if (!var1) {
                    _fun8975_ip = 30;
                    continue _fun8975
                }
            case 16:
                var3 = _closure1_slot2;
                var2 = var11;
                var1 = var3[var2];
            case 30:
                if (!var1) {
                    _fun8975_ip = 233;
                    continue _fun8975
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
                    _fun8975_ip = 233;
                    continue _fun8975
                }
            case 87: // try_start_1
                var13 = var15;
            case 90: // try_start_0
                var16 = var13;
                var15 = var12;
                var15 = var16.bind(var0)(var15);
            case 101: // try_end0
                _fun8975_ip = 221;
                continue _fun8975;
            case 103: // catch_target0
                CatchBlockStart(arg_register = 14);
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var1];
                var15 = var16.bind(var0)(var15);
                var15 = var15.DEBUG_BUILD;
                if (!var15) {
                    _fun8975_ip = 221;
                    continue _fun8975
                }
            case 131:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var17 = var15[var8];
                var17 = var16.bind(var0)(var17);
                var18 = var17.debug;
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
                _fun8975_ip = 73;
                continue _fun8975;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [823, 824, 832]);