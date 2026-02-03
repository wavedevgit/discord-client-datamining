// modules/channel_list_v2/native/ChannelListUtils.tsx
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/ChannelListUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var0 = arg1;
        var1 = var0.favoritesSectionNumber;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isFavoritesSection = var3;
    var3 = function arg0, arg1() {
        var0 = arg1;
        var1 = var0.recentsSectionNumber;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isRecentsSection = var3;
    var3 = function arg0, arg1() {
        var0 = arg1;
        var1 = var0.voiceChannelsSectionNumber;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isVoiceChannelsSection = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.SECTION_INDEX_FIRST_NAMED_CATEGORY;
        var0 = arg0;
        var0 = var0 >= var1;
        return var0;
    };
    var2.isNamedCategorySection = var3;
    var1 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.trackWithMetadata;
        var1 = _closure1_slot3;
        var1 = var1.CHANNEL_LIST_END_REACHED;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.logChannelListEndReached = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4565, 4298, 2]);