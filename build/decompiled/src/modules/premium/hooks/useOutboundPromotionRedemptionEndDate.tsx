// modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var7 = var8.duration;
    var6 = 30;
    var3 = 'days';
    var3 = var7.bind(var8)(var6, var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun83566: for (var _fun83566_ip = 0;;) switch (_fun83566_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 2;
                    var0 = var2[var0];
                    var6 = undefined;
                    var3 = var1.bind(var6)(var0);
                    var2 = var3.dateFormat;
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun83566_ip = 78;
                        continue _fun83566
                    }
                case 41:
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 1;
                    var0 = var7[var0];
                    var1 = var1.bind(var6)(var0);
                    var0 = _closure2_slot0;
                    var0 = var0.endDate;
                    var1 = var1.bind(var6)(var0);
                    _fun83566_ip = 183;
                    continue _fun83566;
                case 78:
                    var0 = _closure2_slot0;
                    var7 = var0.outboundRedemptionEndDate;
                    var0 = null;
                    if (!(var0 == var7)) {
                        _fun83566_ip = 145;
                        continue _fun83566
                    }
                case 94:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 1;
                    var0 = var8[var0];
                    var7 = var7.bind(var6)(var0);
                    var0 = _closure2_slot0;
                    var0 = var0.endDate;
                    var8 = var7.bind(var6)(var0);
                    var7 = var8.add;
                    var0 = _closure1_slot4;
                    var0 = var7.bind(var8)(var0);
                    _fun83566_ip = 180;
                    continue _fun83566;
                case 145:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 1;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var4 = _closure2_slot0;
                    var4 = var4.outboundRedemptionEndDate;
                    var0 = var5.bind(var6)(var4);
                case 180:
                    var1 = var0;
                case 183:
                    var0 = 'LL';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3047, 3134, 2]);