// modules/nameplates/hooks/useNameplate.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/hooks/useNameplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var4 = var1.user;
        var _closure2_slot0 = var4;
        var5 = var1.guildId;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var8 = var6.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var0
            _fun73287: for (var _fun73287_ip = 0;;) switch (_fun73287_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun73287_ip = 63;
                        continue _fun73287
                    }
                case 18:
                    var2 = _closure2_slot0;
                    var2 = var3 != var2;
                    var0 = null;
                    if (!var2) {
                        _fun73287_ip = 63;
                        continue _fun73287
                    }
                case 31:
                    var4 = _closure1_slot3;
                    var3 = var4.getMember;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var3.bind(var4)(var2, var1);
                case 63:
                    return var0;
            }
        };
        var6 = var7.bind(var8)(var6, var2);
        var _closure2_slot2 = var6;
        var2 = _closure1_slot2;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun73288: for (var _fun73288_ip = 0;;) switch (_fun73288_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun73288_ip = 17;
                        continue _fun73288
                    }
                case 13:
                    var0 = undefined;
                    return var0;
                case 17:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var0 = var4[var0];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var0);
                    var3 = var4.getNameplateData;
                    var0 = _closure2_slot2;
                    var5 = var2 == var0;
                    var0 = undefined;
                    if (var5) {
                        _fun73288_ip = 86;
                        continue _fun73288
                    }
                case 61:
                    var5 = _closure2_slot2;
                    var5 = var5.collectibles;
                    var6 = var2 == var5;
                    var0 = undefined;
                    if (var6) {
                        _fun73288_ip = 86;
                        continue _fun73288
                    }
                case 80:
                    var0 = var5.nameplate;
                case 86:
                    var0 = var3.bind(var4)(var0);
                    var3 = _closure2_slot1;
                    if (!(var2 != var3)) {
                        _fun73288_ip = 103;
                        continue _fun73288
                    }
                case 99:
                    if (!(var2 == var0)) {
                        _fun73288_ip = 113;
                        continue _fun73288
                    }
                case 103:
                    var1 = _closure2_slot0;
                    var0 = var1.nameplate;
                case 113:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useNameplate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1683, 566, 1641, 2]);