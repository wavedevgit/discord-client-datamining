// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = /^[a-fA-F0-9]{6}$/;
    var _closure1_slot1 = var3;
    var1 = function arg0() {
        _fun51993: for (var _fun51993_ip = 0;;) switch (_fun51993_ip) {
            case 0:
                var11 = undefined;
                var12 = undefined;
                var13 = undefined;
                var14 = undefined;
                var0 = {};
                var10 = global;
                var3 = var10.Object;
                var2 = var3.entries;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var9 = var1;
                var2 = var9[Symbol.iterator];
                var9 = var2().next;
                var8 = '#';
                var6 = 1;
                var5 = 0;
                var4 = 'Color';
                var3 = 2;
                var1 = null;
            case 59:
                var16 = var9().value;
                var15 = var2;
                if (!(var15 !== var11)) {
                    _fun51993_ip = 234;
                    continue _fun51993
                }
            case 73: // try_start_0
                var15 = _closure1_slot0;
                var15 = var15.bind(var11)(var16, var3);
                var12 = var15[var5];
                var15 = var15[var6];
                var13 = var15;
                if (!(var1 !== var15)) {
                    _fun51993_ip = 222;
                    continue _fun51993
                }
            case 101:
                var16 = var12;
                var15 = var16.includes;
                var15 = var15.bind(var16)(var4);
                if (var15) {
                    _fun51993_ip = 141;
                    continue _fun51993
                }
            case 117:
                var17 = var0;
                var16 = var12;
                var18 = var13;
                var15 = var18.toString;
                var15 = var15.bind(var18)();
                var17[var16] = var15;
                _fun51993_ip = 222;
                continue _fun51993;
            case 141:
                var15 = var13;
                var14 = var15;
                var15 = var15[var5];
                if (!(var8 === var15)) {
                    _fun51993_ip = 168;
                    continue _fun51993
                }
            case 155:
                var16 = var13;
                var15 = var16.slice;
                var14 = var15.bind(var16)(var6);
            case 168:
                var17 = _closure1_slot1;
                var16 = var17.test;
                var15 = var14;
                var15 = var16.bind(var17)(var15);
                if (var15) {
                    _fun51993_ip = 193;
                    continue _fun51993
                }
            case 188: // try_end0
                _fun51993_ip = 59;
                continue _fun51993;
            case 193: // try_start_1
                var17 = var0;
                var16 = var12;
                var18 = var14;
                var15 = var10.HermesInternal;
                var15 = var15.concat;
                var15 = var15.bind(var8)(var18);
                var17[var16] = var15;
            case 222: // try_end1
                _fun51993_ip = 59;
                continue _fun51993;
            case 227: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 234:
                return var0;
        }
    };
    var2.processThemeValues = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);