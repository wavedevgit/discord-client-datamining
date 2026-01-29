// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun43480: for (var _fun43480_ip = 0;;) switch (_fun43480_ip) {
        case 0:
            var7 = require;
            var12 = exports;
            var8 = dependencyMap;
            var5 = var7;
            var2 = var12;
            var4 = var8;
            var0 = undefined;
            var3 = undefined;
            var6 = ['children'];
            var _closure1_slot0 = var6;
            var6 = global;
            var11 = var6.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var6 = true;
            var9.value = var6;
            var6 = '__esModule';
            var6 = var10.bind(var11)(var12, var6, var9);
            var6 = 0;
            var9 = var8[var6];
            var6 = metroImportDefault;
            var6 = var6.bind(var0)(var9);
            var _closure1_slot2 = var6;
            var6 = 1;
            var9 = var8[var6];
            var6 = metroImportAll;
            var6 = var6.bind(var0)(var9);
            var6 = 2;
            var6 = var8[var6];
            var6 = var7.bind(var0)(var6);
            var3 = var6.UIManager;
            var6 = 3;
            var6 = var8[var6];
            var6 = var7.bind(var0)(var6);
            var6 = var6.jsx;
            var _closure1_slot3 = var6;
        case 142: // try_start_0
            var6 = var4;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.default;
            var _closure1_slot1 = var4;
        case 166: // try_end0
            _fun43480_ip = 170;
            continue _fun43480;
        case 168: // catch_target0
            CatchBlockStart(arg_register = 4);
        case 170:
            var5 = var3;
            var4 = var5.getViewManagerConfig;
            var3 = 'RNCMaskedView';
            var4 = var4.bind(var5)(var3);
            var3 = null;
            var3 = var3 != var4;
            var _closure1_slot4 = var3;
            var1 = function(arg0) { // Original name: MaskedView, environment: var1
                _fun43481: for (var _fun43481_ip = 0;;) switch (_fun43481_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = var5.children;
                        var3 = _closure1_slot2;
                        var0 = _closure1_slot0;
                        var4 = undefined;
                        var8 = var3.bind(var4)(var5, var0);
                        var3 = _closure1_slot4;
                        var0 = var1;
                        if (!var3) {
                            _fun43481_ip = 89;
                            continue _fun43481
                        }
                    case 37:
                        var3 = _closure1_slot1;
                        var0 = var1;
                        if (!var3) {
                            _fun43481_ip = 89;
                            continue _fun43481
                        }
                    case 47:
                        var3 = _closure1_slot3;
                        var2 = _closure1_slot1;
                        var5 = global;
                        var7 = var5.Object;
                        var6 = var7.assign;
                        var5 = {};
                        var5.children = var1;
                        var1 = {};
                        var1 = var6.bind(var7)(var1, var8, var5);
                        var0 = var3.bind(var4)(var2, var1);
                    case 89:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, null]);