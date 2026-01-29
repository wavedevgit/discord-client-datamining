// utils/PremiumFeatureUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0) { // Original name: getUserMaxFileSize, environment: var4
        _fun61465: for (var _fun61465_ip = 0;;) switch (_fun61465_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun61465_ip = 127;
                    continue _fun61465
                }
            case 9:
                var4 = _closure1_slot2;
                var0 = var4.getPremiumTypeOverride;
                var4 = var0.bind(var4)();
                var0 = var2.isStaff;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun61465_ip = 47;
                    continue _fun61465
                }
            case 39:
                var0 = _closure1_slot6;
                if (!(var4 !== var0)) {
                    _fun61465_ip = 121;
                    continue _fun61465
                }
            case 47:
                var0 = var2.premiumType;
                if (!(var3 != var0)) {
                    _fun61465_ip = 93;
                    continue _fun61465
                }
            case 57:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.isPremium;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun61465_ip = 99;
                    continue _fun61465
                }
            case 93:
                var0 = _closure1_slot3;
                _fun61465_ip = 119;
                continue _fun61465;
            case 99:
                var3 = _closure1_slot5;
                var2 = var2.premiumType;
                var2 = var3[var2];
                var0 = var2.fileSize;
            case 119:
                _fun61465_ip = 125;
                continue _fun61465;
            case 121:
                var0 = _closure1_slot4;
            case 125:
                return var0;
            case 127:
                var0 = _closure1_slot3;
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.MAX_ATTACHMENT_SIZE;
    var _closure1_slot3 = var7;
    var3 = var3.MAX_STAFF_ATTACHMENT_SIZE;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.PremiumUserLimits;
    var _closure1_slot5 = var7;
    var3 = var3.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot6 = var3;
    var3 = {};
    var3.getUserMaxFileSize = var1;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/PremiumFeatureUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getUserMaxFileSize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1614, 660, 1615, 1628, 2]);