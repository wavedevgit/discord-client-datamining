// modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.BoostInfoType;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: getGuildPowerupsBoostInfoText, environment: var1
        _fun102712: for (var _fun102712_ip = 0;;) switch (_fun102712_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = _closure1_slot3;
                var1 = var1.AVAILABLE;
                if (!(var1 !== var2)) {
                    _fun102712_ip = 192;
                    continue _fun102712
                }
            case 26:
                var1 = _closure1_slot3;
                var1 = var1.SPENT;
                if (!(var1 !== var2)) {
                    _fun102712_ip = 121;
                    continue _fun102712
                }
            case 40:
                var1 = _closure1_slot3;
                var1 = var1.TOTAL;
                if (!(var1 !== var2)) {
                    _fun102712_ip = 58;
                    continue _fun102712
                }
            case 54:
                var1 = undefined;
                return var1;
            case 58:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 1;
                var1 = var7[var1];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.intl;
                var2 = var3.string;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1["/F7Z2y"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 121:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 1;
                var1 = var7[var1];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var5 = var1.intl;
                var3 = var5.formatToPlainString;
                var2 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var2 = var1.xvgIVG;
                var1 = {};
                var1.boostCount = var4;
                var1 = var3.bind(var5)(var2, var1);
                return var1;
            case 192:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var1 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var1 = var0.BdRXZA;
                var0 = {};
                var0.boostCount = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getGuildPowerupsBoostInfoText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6675, 1234, 1881, 2]);