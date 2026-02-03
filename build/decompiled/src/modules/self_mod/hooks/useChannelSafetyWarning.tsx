// modules/self_mod/hooks/useChannelSafetyWarning.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/hooks/useChannelSafetyWarning.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = arg1;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = var2.getChannelSafetyWarnings;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var4.bind(var5)(var3, var1, var2);
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot1;
            var0 = var1 === var0;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            _fun73092: for (var _fun73092_ip = 0;;) switch (_fun73092_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.dismiss_timestamp;
                    var2 = null;
                    var0 = var2 == var0;
                    if (!var0) {
                        _fun73092_ip = 87;
                        continue _fun73092
                    }
                case 18:
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun73092_ip = 33;
                        continue _fun73092
                    }
                case 27:
                    var1 = var3.expiry;
                case 33:
                    var1 = var2 == var1;
                    if (var1) {
                        _fun73092_ip = 84;
                        continue _fun73092
                    }
                case 40:
                    var2 = global;
                    var5 = var2.Date;
                    var4 = var5.parse;
                    var3 = var3.expiry;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var1 = var3 > var2;
                case 84:
                    var0 = var1;
                case 87:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useChannelSafetyWarning = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9011, 566, 2]);