// modules/auth/QRLoginUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = /^\\/ra\\ / ([\w - ] + ) $ / ;
    var _closure1_slot2 = var0;
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/QRLoginUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun29742: for (var _fun29742_ip = 0;;) switch (_fun29742_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun29742_ip = 87;
                    continue _fun29742
                }
            case 12:
                if (!(var0 != var3)) {
                    _fun29742_ip = 87;
                    continue _fun29742
                }
            case 16:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var2 = var4.isDiscordHostname;
                var2 = var2.bind(var4)(var5);
                if (!var2) {
                    _fun29742_ip = 87;
                    continue _fun29742
                }
            case 54:
                var2 = var3.match;
                var1 = _closure1_slot2;
                var3 = var2.bind(var3)(var1);
                var2 = var0 != var3;
                var1 = null;
                if (!var2) {
                    _fun29742_ip = 85;
                    continue _fun29742
                }
            case 78:
                var2 = 1;
                var1 = var3[var2];
            case 85:
                return var1;
            case 87:
                return var0;
        }
    };
    var2.findRemoteAuthFingerprint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1457, 2]);