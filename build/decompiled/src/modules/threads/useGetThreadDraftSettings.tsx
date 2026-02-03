// modules/threads/useGetThreadDraftSettings.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/useGetThreadDraftSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun72331: for (var _fun72331_ip = 0;;) switch (_fun72331_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 == var0;
                    var0 = null;
                    if (var1) {
                        _fun72331_ip = 99;
                        continue _fun72331
                    }
                case 18:
                    var6 = _closure1_slot3;
                    var4 = var6.getThreadSettings;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var6)(var1);
                    if (!(var3 == var1)) {
                        _fun72331_ip = 96;
                        continue _fun72331
                    }
                case 44:
                    var4 = _closure1_slot3;
                    var3 = var4.getThreadDraftWithParentMessageId;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 2;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.castChannelIdAsMessageId;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    var1 = var3.bind(var4)(var2);
                case 96:
                    var0 = var1;
                case 99:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun72333: for (var _fun72333_ip = 0;;) switch (_fun72333_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun72333_ip = 98;
                        continue _fun72333
                    }
                case 16:
                    var5 = _closure1_slot3;
                    var4 = var5.getThreadSettings;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    if (!(var2 == var1)) {
                        _fun72333_ip = 94;
                        continue _fun72333
                    }
                case 42:
                    var5 = _closure1_slot3;
                    var4 = var5.getThreadDraftWithParentMessageId;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var6 = 2;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.castChannelIdAsMessageId;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    var1 = var4.bind(var5)(var3);
                case 94:
                    var0 = var2 != var1;
                case 98:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasThreadDraft = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3992, 566, 21, 2]);