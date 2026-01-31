// modules/changelog/openChangelog.native.tsx
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
    var3 = var3.CHANGELOG_MODAL_KEY;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/changelog/openChangelog.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: openChangelog, environment: var1
        _fun112788: for (var _fun112788_ip = 0;;) switch (_fun112788_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun112788_ip = 11;
                    continue _fun112788
                }
            case 9:
                var1 = false;
            case 11:
                var1 = !var1;
                if (!var1) {
                    _fun112788_ip = 50;
                    continue _fun112788
                }
            case 17:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isModalOpen;
                var1 = var2.bind(var3)();
            case 50:
                if (var1) {
                    _fun112788_ip = 129;
                    continue _fun112788
                }
            case 53:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 2;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var6 = _closure1_slot0;
                var3 = 4;
                var3 = var2[var3];
                var6 = var6.bind(var0)(var3);
                var3 = 3;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var0)(var3, var2);
                var2 = _closure1_slot3;
                var1 = {};
                var1 = var4.bind(var5)(var3, var1, var2);
            case 129:
                return var0;
        }
    };
    var2.openChangelog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1660, 3878, 4525, 10982, 1307, 2]);