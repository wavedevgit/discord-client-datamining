// modules/avatar_decorations/useAvatarDecoration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0, arg1) { // Original name: getAvatarDecoration, environment: var3
        _fun36009: for (var _fun36009_ip = 0;;) switch (_fun36009_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var4 = arguments[2];
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun36009_ip = 33;
                    continue _fun36009
                }
            case 15:
                var3 = _closure1_slot3;
                var0 = new Array(1);
                var0[0] = var3;
                var4 = var0;
            case 33:
                var3 = _closure1_slot2;
                var0 = 1;
                var3 = var3.bind(var1)(var4, var0);
                var0 = 0;
                var6 = var3[var0];
                var3 = null;
                var0 = var3 != var7;
                var4 = null;
                if (!var0) {
                    _fun36009_ip = 92;
                    continue _fun36009
                }
            case 66:
                var0 = var3 != var2;
                var4 = null;
                if (!var0) {
                    _fun36009_ip = 92;
                    continue _fun36009
                }
            case 75:
                var5 = var6.getMember;
                var0 = var2.id;
                var4 = var5.bind(var6)(var7, var0);
            case 92:
                var5 = var3 == var4;
                var0 = undefined;
                if (var5) {
                    _fun36009_ip = 107;
                    continue _fun36009
                }
            case 101:
                var0 = var4.avatarDecoration;
            case 107:
                if (!(var3 == var0)) {
                    _fun36009_ip = 129;
                    continue _fun36009
                }
            case 111:
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun36009_ip = 126;
                    continue _fun36009
                }
            case 120:
                var1 = var2.avatarDecoration;
            case 126:
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/avatar_decorations/useAvatarDecoration.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Original name: useAvatarDecoration, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var0 = _closure1_slot3;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useAvatarDecoration = var3;
    var2.getAvatarDecoration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1672, 632, 2]);