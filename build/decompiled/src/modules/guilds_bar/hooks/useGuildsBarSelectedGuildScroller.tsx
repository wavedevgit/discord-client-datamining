// modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = function() {
                _fun101182: for (var _fun101182_ip = 0;;) switch (_fun101182_ip) {
                    case 0:
                        var1 = _closure1_slot1;
                        var0 = var1.getGuildId;
                        var0 = var0.bind(var1)();
                        var1 = _closure3_slot0;
                        if (!(var0 !== var1)) {
                            _fun101182_ip = 75;
                            continue _fun101182
                        }
                    case 28:
                        var3 = null;
                        var4 = var3 != var0;
                        var1 = null;
                        if (!var4) {
                            _fun101182_ip = 42;
                            continue _fun101182
                        }
                    case 39:
                        var1 = var0;
                    case 42:
                        _closure3_slot0 = var1;
                        var2 = _closure2_slot0;
                        var1 = var3 != var0;
                        var3 = null;
                        if (!var1) {
                            _fun101182_ip = 65;
                            continue _fun101182
                        }
                    case 62:
                        var3 = var0;
                    case 65:
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var3, var0);
                    case 75:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var3;
            var1 = null;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot1;
            var1 = var2.addChangeListener;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = var2.removeChangeListener;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3204, 2]);