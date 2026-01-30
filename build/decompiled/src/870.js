// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: _notifyEventProcessors, environment: var0
        _fun9195: for (var _fun9195_ip = 0;;) switch (_fun9195_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var5 = arg2;
                var7 = arg3;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var7;
                var10 = var5[var7];
                if (!var8) {
                    _fun9195_ip = 36;
                    continue _fun9195
                }
            case 33:
                if (var10) {
                    _fun9195_ip = 38;
                    continue _fun9195
                }
            case 36:
                return var8;
            case 38:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var0 = {};
                var0 = var3.bind(var4)(var0, var8);
                var4 = undefined;
                var3 = var10.bind(var4)(var0, var6);
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 2;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.DEBUG_BUILD;
                if (!var8) {
                    _fun9195_ip = 105;
                    continue _fun9195
                }
            case 99:
                var9 = null;
                var8 = var9 === var3;
            case 105:
                if (!var8) {
                    _fun9195_ip = 185;
                    continue _fun9195
                }
            case 108:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 3;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.debug;
                var8 = var9.log;
                var12 = var10.id;
                if (var12) {
                    _fun9195_ip = 151;
                    continue _fun9195
                }
            case 147:
                var12 = '?';
            case 151:
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var10 = 'Event processor "';
                var2 = '" dropped event';
                var2 = var11.bind(var10)(var12, var2);
                var2 = var8.bind(var9)(var2);
            case 185:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 0;
                var2 = var9[var2];
                var8 = var8.bind(var4)(var2);
                var2 = var8.isThenable;
                var2 = var2.bind(var8)(var3);
                if (var2) {
                    _fun9195_ip = 246;
                    continue _fun9195
                }
            case 218:
                var2 = _closure1_slot2;
                var0 = 1;
                var13 = var7 + var0;
                var17 = undefined;
                var16 = var3;
                var15 = var6;
                var14 = var5;
                var0 = var17[var2](var16, var15, var14, var13, var12);
                _fun9195_ip = 261;
                continue _fun9195;
            case 246:
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var5 = _closure1_slot2;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = 1;
                    var6 = var1 + var0;
                    var10 = undefined;
                    var9 = arg0;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 261:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function(arg0, arg1, arg2) { // Original name: notifyEventProcessors, environment: var0
        _fun9197: for (var _fun9197_ip = 0;;) switch (_fun9197_ip) {
            case 0:
                var3 = undefined;
                var9 = undefined;
                var4 = arg0;
                var7 = arg1;
                var5 = arg2;
                var2 = undefined;
                var1 = undefined;
                var0 = arguments.length;
                var8 = 3;
                var10 = var0 > var8;
                var6 = 0;
                var0 = 0;
                if (!var10) {
                    _fun9197_ip = 48;
                    continue _fun9197
                }
            case 34:
                var10 = arguments[var8];
                var0 = 0;
                if (!(var3 !== var10)) {
                    _fun9197_ip = 48;
                    continue _fun9197
                }
            case 44:
                var0 = arguments[var8];
            case 48:
                var2 = var0;
            case 51: // try_start_0
                var8 = _closure1_slot2;
                var14 = var7;
                var13 = var5;
                var12 = var4;
                var11 = var2;
                var15 = undefined;
                var5 = var15[var8](var14, var13, var12, var11, var10);
                var1 = var5;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isThenable;
                var2 = var2.bind(var4)(var5);
                if (var2) {
                    _fun9197_ip = 146;
                    continue _fun9197
                }
            case 110:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.resolvedSyncPromise;
                var0 = var1;
                var0 = var2.bind(var4)(var0);
                _fun9197_ip = 149;
                continue _fun9197;
            case 146:
                var0 = var1;
            case 149: // try_end0
                return var0;
            case 151: // catch_target0
                CatchBlockStart(arg_register = 2);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.rejectedSyncPromise;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.notifyEventProcessors = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [827, 871, 823, 824]);