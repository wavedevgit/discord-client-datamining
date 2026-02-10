// modules/quests/QuestBarUnfurlStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = var6.createWithEqualityFn;
    var3 = var3.bind(var6)();
    var10 = 1;
    var6 = var5[var10];
    var8 = var4.bind(var0)(var6);
    var7 = var8.persist;
    var6 = {};
    var11 = 'questBarUnfurlState';
    var6.name = var11;
    var10 = var5[var10];
    var12 = var4.bind(var0)(var10);
    var11 = var12.createJSONStorage;
    var10 = function() { // Environment: var1
        var0 = {};
        var2 = function arg0() {
            _fun47275: for (var _fun47275_ip = 0;;) switch (_fun47275_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.Storage;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun47275_ip = 56;
                        continue _fun47275
                    }
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var0.getItem = var2;
        var2 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var3 = var0.Storage;
            var2 = var3.set;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.setItem = var2;
        var1 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.Storage;
            var1 = var2.remove;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.removeItem = var1;
        return var0;
    };
    var10 = var11.bind(var12)(var10);
    var6.storage = var10;
    var10 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.seenUnfurlQuestIds;
        var0.seenUnfurlQuestIds = var1;
        return var0;
    };
    var6.partialize = var10;
    var6.version = var9;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = {};
        var0.seenUnfurlQuestIds = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun47272: for (var _fun47272_ip = 0;;) switch (_fun47272_ip) {
                    case 0:
                        var2 = _closure2_slot1;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var6 = var2.seenUnfurlQuestIds;
                        var2 = _closure3_slot0;
                        var2 = var6[var2];
                        var5 = true;
                        if (!(var5 !== var2)) {
                            _fun47272_ip = 73;
                            continue _fun47272
                        }
                    case 36:
                        var2 = _closure2_slot0;
                        var1 = {};
                        var3 = {};
                        var8 = var3;
                        var7 = var6;
                        var6 = copyDataProperties(var8, var7);
                        var4 = _closure3_slot0;
                        var3[var4] = var5;
                        var1.seenUnfurlQuestIds = var3;
                        var1 = var2.bind(var0)(var1);
                    case 73:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.markUnfurlSeen = var2;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = {};
            var0 = {};
            var1.seenUnfurlQuestIds = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.clearUserState = var1;
        return var0;
    };
    var1 = var7.bind(var8)(var1, var6);
    var1 = var3.bind(var0)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/QuestBarUnfurlStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.useQuestBarUnfurlStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [797, 3918, 802, 587, 2]);