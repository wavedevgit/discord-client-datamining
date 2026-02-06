// components_native/add_friend/AddFriendModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function() {
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var2 = var1[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.pushLazy;
        var5 = _closure1_slot0;
        var4 = 3;
        var4 = var1[var4];
        var5 = var5.bind(var0)(var4);
        var4 = 2;
        var4 = var1[var4];
        var1 = var1.paths;
        var1 = var5.bind(var0)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.openAddFriendModalDeeplink = var6;
    var3 = function arg0() {
        _fun96247: for (var _fun96247_ip = 0;;) switch (_fun96247_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun96247_ip = 100;
                    continue _fun96247
                }
            case 22:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 1;
                var2 = var0[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.pushLazy;
                var4 = _closure1_slot0;
                var1 = 3;
                var1 = var0[var1];
                var4 = var4.bind(var5)(var1);
                var1 = 2;
                var1 = var0[var1];
                var0 = var0.paths;
                var1 = var4.bind(var5)(var1, var0);
                var0 = {};
                var4 = arg0;
                var0.sourceMetadata = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 100:
                var0 = undefined;
                return var0;
        }
    };
    var1.openAddFriendModal = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/add_friend/AddFriendModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 4562, 12547, 1307, 2]);