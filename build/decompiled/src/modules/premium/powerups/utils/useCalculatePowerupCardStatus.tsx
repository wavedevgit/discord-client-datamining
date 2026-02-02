// modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PowerupActiveStatusType;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var4 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun102401: for (var _fun102401_ip = 0;;) switch (_fun102401_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var1 = var0.sourceEntitlement;
                    var9 = null;
                    var3 = var9 == var1;
                    var12 = undefined;
                    var0 = undefined;
                    if (var3) {
                        _fun102401_ip = 32;
                        continue _fun102401
                    }
                case 26:
                    var0 = var1.ends_at;
                case 32:
                    if (!(var9 == var0)) {
                        _fun102401_ip = 393;
                        continue _fun102401
                    }
                case 39:
                    var0 = _closure2_slot2;
                    if (!var0) {
                        _fun102401_ip = 63;
                        continue _fun102401
                    }
                case 46:
                    var0 = _closure2_slot0;
                    var0 = var0.storeRemovalDate;
                    if (!(var9 == var0)) {
                        _fun102401_ip = 361;
                        continue _fun102401
                    }
                case 63:
                    var0 = _closure2_slot1;
                    var1 = var0.type;
                    var0 = _closure1_slot4;
                    var0 = var0.LEVEL_ACTIVATED;
                    if (!(var1 !== var0)) {
                        _fun102401_ip = 194;
                        continue _fun102401
                    }
                case 89:
                    var0 = _closure2_slot1;
                    var3 = var0.type;
                    var0 = _closure1_slot4;
                    var1 = var0.INACTIVE;
                    var0 = undefined;
                    if (!(var3 !== var1)) {
                        _fun102401_ip = 189;
                        continue _fun102401
                    }
                case 114:
                    var1 = {};
                    var3 = 'active';
                    var1.type = var3;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 2;
                    var3 = var7[var3];
                    var3 = var4.bind(var12)(var3);
                    var5 = var3.intl;
                    var4 = var5.string;
                    var6 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var3 = var6.bind(var12)(var3);
                    var3 = var3.FFLkmx;
                    var3 = var4.bind(var5)(var3);
                    var1.statusText = var3;
                    var0 = var1;
                case 189:
                    _fun102401_ip = 359;
                    continue _fun102401;
                case 194:
                    var1 = {};
                    var3 = 'active';
                    var1.type = var3;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var13 = 2;
                    var3 = var7[var13];
                    var3 = var4.bind(var12)(var3);
                    var6 = var3.intl;
                    var5 = var6.formatToPlainString;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var3 = var4.bind(var12)(var3);
                    var4 = var3.WRRYUT;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var10 = var7.sourcePowerup;
                    var11 = var9 == var10;
                    var7 = undefined;
                    if (var11) {
                        _fun102401_ip = 284;
                        continue _fun102401
                    }
                case 279:
                    var7 = var10.title;
                case 284:
                    if (!(var9 == var7)) {
                        _fun102401_ip = 340;
                        continue _fun102401
                    }
                case 288:
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = var8[var13];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var8[var13];
                    var8 = var11.bind(var12)(var8);
                    var8 = var8.t;
                    var8 = var8.BfF6ED;
                    var7 = var9.bind(var10)(var8);
                case 340:
                    var3.perkName = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1.statusText = var3;
                    var0 = var1;
                case 359:
                    _fun102401_ip = 391;
                    continue _fun102401;
                case 361:
                    var1 = {};
                    var3 = 'removing';
                    var1.type = var3;
                    var3 = _closure2_slot0;
                    var3 = var3.storeRemovalDate;
                    var1.removingAt = var3;
                    var0 = var1;
                case 391:
                    _fun102401_ip = 429;
                    continue _fun102401;
                case 393:
                    var1 = {};
                    var3 = 'expiring';
                    var1.type = var3;
                    var2 = _closure2_slot1;
                    var2 = var2.sourceEntitlement;
                    var2 = var2.ends_at;
                    var1.expiringAt = var2;
                    var0 = var1;
                case 429:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCalculatePowerupCardStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6681, 1234, 1881, 2]);