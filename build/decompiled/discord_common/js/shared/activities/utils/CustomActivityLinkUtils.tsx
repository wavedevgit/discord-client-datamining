// ../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var6 = 0;
    var4 = var5[var6];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = {};
    var3.MANAGED = var6;
    var4 = 'MANAGED';
    var3[var6] = var4;
    var4 = 1;
    var3.QUICK = var4;
    var6 = 'QUICK';
    var3[var4] = var6;
    var _closure1_slot1 = var3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.CustomLinkType = var3;
    var1 = function arg0() {
        _fun92384: for (var _fun92384_ip = 0;;) switch (_fun92384_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun92384_ip = 133;
                    continue _fun92384
                }
            case 12:
                var2 = var4.split;
                var1 = '-';
                var6 = var2.bind(var4)(var1);
                var5 = _closure1_slot0;
                var3 = undefined;
                var2 = 2;
                var3 = var5.bind(var3)(var6, var2);
                var2 = 0;
                var6 = var3[var2];
                var2 = 1;
                var3 = var3[var2];
                var2 = '0';
                if (!(var2 !== var6)) {
                    _fun92384_ip = 91;
                    continue _fun92384
                }
            case 67:
                var2 = '1';
                var5 = null;
                if (!(var2 === var6)) {
                    _fun92384_ip = 101;
                    continue _fun92384
                }
            case 79:
                var2 = _closure1_slot1;
                var5 = var2.QUICK;
                _fun92384_ip = 101;
                continue _fun92384;
            case 91:
                var1 = _closure1_slot1;
                var5 = var1.MANAGED;
            case 101:
                var2 = var0 == var5;
                var1 = null;
                if (var2) {
                    _fun92384_ip = 131;
                    continue _fun92384
                }
            case 110:
                var2 = {};
                var2.type = var5;
                var2.encodedLinkId = var4;
                var2.decodedLinkId = var3;
                var1 = var2;
            case 131:
                return var1;
            case 133:
                return var0;
        }
    };
    var2.decodeCustomActivityLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 2]);