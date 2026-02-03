// modules/hub/HubUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.throttle;
    var6 = {};
    var1 = false;
    var6.trailing = var1;
    var5 = function(arg0) { // Environment: var3
        _fun92657: for (var _fun92657_ip = 0;;) switch (_fun92657_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getInvite;
                var1 = arg0;
                var1 = var1.code;
                var5 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var4 = null;
                var6 = var4 != var5;
                var4 = undefined;
                if (!var6) {
                    _fun92657_ip = 70;
                    continue _fun92657
                }
            case 67:
                var4 = var5;
            case 70:
                var1.invite = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1 = 1000;
    var1 = var7.bind(var8)(var5, var1, var6);
    var _closure1_slot3 = var1;
    var1 = {};
    var3 = function arg0() {
        var2 = _closure1_slot3;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.onOpenHubInvite = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/HubUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3314, 22, 10291, 2]);