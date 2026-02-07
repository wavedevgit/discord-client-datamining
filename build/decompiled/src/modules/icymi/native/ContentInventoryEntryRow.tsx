// modules/icymi/native/ContentInventoryEntryRow.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ContentInventoryEntryRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104696: for (var _fun104696_ip = 0;;) switch (_fun104696_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.content;
                var _closure2_slot0 = var5;
                var4 = var0.renderForScreenshot;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun104696_ip = 28;
                    continue _fun104696
                }
            case 26:
                var4 = false;
            case 28:
                var8 = var0.visible;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var7 = var6.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var9 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.isBlockedOrIgnored;
                    var0 = _closure2_slot0;
                    var0 = var0.author_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var2, var1);
                if (var1) {
                    _fun104696_ip = 311;
                    continue _fun104696
                }
            case 93:
                var2 = var5.content_type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 4;
                var1 = var1[var7];
                var1 = var6.bind(var3)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.TOP_GAME;
                if (!(var1 !== var2)) {
                    _fun104696_ip = 268;
                    continue _fun104696
                }
            case 138:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var3)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.PLAYED_GAME;
                if (!(var1 !== var2)) {
                    _fun104696_ip = 268;
                    continue _fun104696
                }
            case 171:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var3)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.CUSTOM_STATUS;
                if (!(var1 !== var2)) {
                    _fun104696_ip = 208;
                    continue _fun104696
                }
            case 204:
                var1 = null;
                return var1;
            case 208:
                var6 = _closure1_slot4;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.content = var5;
                var1.renderForScreenshot = var4;
                var7 = null;
                var7 = var7 != var8;
                if (!var7) {
                    _fun104696_ip = 255;
                    continue _fun104696
                }
            case 252:
                var7 = var8;
            case 255:
                var1.visible = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 268:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.content = var5;
                var0.renderForScreenshot = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 311:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3102, 33, 566, 6909, 13646, 13661, 2]);