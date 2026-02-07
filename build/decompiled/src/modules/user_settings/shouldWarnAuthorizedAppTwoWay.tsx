// modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        _fun83096: for (var _fun83096_ip = 0;;) switch (_fun83096_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.ConsoleOAuthApplications;
                var0 = var0.XBOX_APPLICATION_ID;
                var0 = var0 === var3;
                if (var0) {
                    _fun83096_ip = 85;
                    continue _fun83096
                }
            case 46:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ConsoleOAuthApplicationsSets;
                var2 = var1.PLAYSTATION_APPLICATION_IDS;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 85:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 1;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useShouldWarnAuthorizedAppTwoWay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5824, 2]);