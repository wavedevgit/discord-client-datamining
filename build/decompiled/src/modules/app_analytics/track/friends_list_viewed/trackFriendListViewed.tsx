// modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107162: for (var _fun107162_ip = 0;;) switch (_fun107162_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.tab_opened;
                var10 = var0.source;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 1;
                var1 = var4[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var6 = var1.bind(var0)();
                var1 = 2;
                var1 = var4[var1];
                var9 = var3.bind(var0)(var1);
                var7 = var9.track;
                var1 = _closure1_slot3;
                var5 = var1.FRIENDS_LIST_VIEWED;
                var3 = {};
                var3.tab_opened = var8;
                var3.source = var10;
                var13 = var3;
                var12 = var6;
                var10 = copyDataProperties(var13, var12);
                var3 = var7.bind(var9)(var5, var3);
                var3 = _closure1_slot0;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackClickstream;
                var2 = var1.FRIENDS_LIST_VIEWED_CLICKSTREAM;
                var1 = {};
                var7 = null;
                var9 = var7 != var8;
                var5 = 'tabless';
                if (!var9) {
                    _fun107162_ip = 145;
                    continue _fun107162
                }
            case 142:
                var5 = var8;
            case 145:
                var1.tab_opened = var5;
                var9 = var6.num_friends;
                var10 = var7 != var9;
                var8 = 0;
                if (!var10) {
                    _fun107162_ip = 168;
                    continue _fun107162
                }
            case 165:
                var8 = var9;
            case 168:
                var1.num_friends = var8;
                var9 = var6.now_playing_visible;
                var8 = var7 != var9;
                if (!var8) {
                    _fun107162_ip = 189;
                    continue _fun107162
                }
            case 186:
                var8 = var9;
            case 189:
                var1.now_playing_visible = var8;
                var6 = var6.now_playing_num_cards;
                var7 = var7 != var6;
                var5 = 0;
                if (!var7) {
                    _fun107162_ip = 212;
                    continue _fun107162
                }
            case 209:
                var5 = var6;
            case 212:
                var1.now_playing_num_cards = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 13845, 795, 4316, 2]);