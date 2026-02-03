// modules/activities/utils/hasRichActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.ActivityTypes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/hasRichActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun31938: for (var _fun31938_ip = 0;;) switch (_fun31938_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 == var3;
                var1 = undefined;
                if (var0) {
                    _fun31938_ip = 19;
                    continue _fun31938
                }
            case 14:
                var1 = var3.type;
            case 19:
                var0 = _closure1_slot0;
                var0 = var0.HANG_STATUS;
                var1 = var1 === var0;
                if (!var1) {
                    _fun31938_ip = 45;
                    continue _fun31938
                }
            case 39:
                var0 = arg1;
                var1 = !var0;
            case 45:
                var0 = !var1;
                if (var1) {
                    _fun31938_ip = 194;
                    continue _fun31938
                }
            case 54:
                var1 = var4 != var3;
                if (!var1) {
                    _fun31938_ip = 80;
                    continue _fun31938
                }
            case 61:
                var5 = var3.type;
                var2 = _closure1_slot0;
                var2 = var2.CUSTOM_STATUS;
                var1 = var5 !== var2;
            case 80:
                if (!var1) {
                    _fun31938_ip = 191;
                    continue _fun31938
                }
            case 83:
                var2 = var3.details;
                var2 = var4 != var2;
                if (var2) {
                    _fun31938_ip = 150;
                    continue _fun31938
                }
            case 96:
                var5 = var3.assets;
                var5 = var4 != var5;
                if (!var5) {
                    _fun31938_ip = 147;
                    continue _fun31938
                }
            case 109:
                var6 = var3.assets;
                var6 = var6.large_image;
                var6 = var4 != var6;
                if (var6) {
                    _fun31938_ip = 144;
                    continue _fun31938
                }
            case 128:
                var7 = var3.assets;
                var7 = var7.small_text;
                var6 = var4 != var7;
            case 144:
                var5 = var6;
            case 147:
                var2 = var5;
            case 150:
                if (var2) {
                    _fun31938_ip = 163;
                    continue _fun31938
                }
            case 153:
                var5 = var3.party;
                var2 = var4 != var5;
            case 163:
                if (var2) {
                    _fun31938_ip = 176;
                    continue _fun31938
                }
            case 166:
                var5 = var3.secrets;
                var2 = var4 != var5;
            case 176:
                if (var2) {
                    _fun31938_ip = 188;
                    continue _fun31938
                }
            case 179:
                var3 = var3.state;
                var2 = var4 != var3;
            case 188:
                var1 = var2;
            case 191:
                var0 = var1;
            case 194:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);