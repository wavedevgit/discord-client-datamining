// modules/guild_role_subscriptions/native/components/LayoutUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var6 = var3.Fragment;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/LayoutUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74047: for (var _fun74047_ip = 0;;) switch (_fun74047_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.children;
                var1 = var0.gap;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun74047_ip = 24;
                    continue _fun74047
                }
            case 21:
                var1 = 4;
            case 24:
                var _closure2_slot0 = var1;
                var0 = var0.renderGap;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var5 = _closure1_slot2;
                var2 = var5.Children;
                var1 = var2.toArray;
                var6 = var1.bind(var2)(var6);
                var2 = var6.filter;
                var1 = function(arg0) { // Environment: var4
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var7 = var2.bind(var6)(var1);
                _closure2_slot2 = var7;
                var2 = _closure1_slot3;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var5.Children;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun74049: for (var _fun74049_ip = 0;;) switch (_fun74049_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var0 = new Array(2);
                            var4 = arg0;
                            var0[0] = var4;
                            var4 = _closure2_slot2;
                            var7 = var4.length;
                            var4 = 1;
                            var7 = var7 - var4;
                            var4 = arg1;
                            var4 = var4 !== var7;
                            if (!var4) {
                                _fun74049_ip = 120;
                                continue _fun74049
                            }
                        case 53:
                            var8 = _closure2_slot1;
                            var7 = null;
                            if (!(var7 == var8)) {
                                _fun74049_ip = 107;
                                continue _fun74049
                            }
                        case 63:
                            var9 = _closure1_slot3;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 2;
                            var5 = var8[var5];
                            var8 = undefined;
                            var7 = var7.bind(var8)(var5);
                            var5 = {};
                            var10 = _closure2_slot0;
                            var5.size = var10;
                            var5 = var9.bind(var8)(var7, var5);
                            _fun74049_ip = 117;
                            continue _fun74049;
                        case 107:
                            var7 = _closure2_slot1;
                            var6 = undefined;
                            var5 = var7.bind(var6)();
                        case 117:
                            var4 = var5;
                        case 120:
                            var0[1] = var4;
                            var1.children = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var7, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GappedList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9226, 2]);