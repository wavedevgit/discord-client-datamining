// modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.STICKY_BANNER_ASPECT_RATIO;
    var _closure1_slot4 = var6;
    var3 = var3.BANNER_MAX_HEIGHT_PERCENTAGE;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var4 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 2;
        var5 = var11[var3];
        var3 = undefined;
        var6 = var4.bind(var3)(var5);
        var5 = var6.useRedesignGuildHeaderHeight;
        var7 = var5.bind(var6)(var2);
        var _closure2_slot0 = var7;
        var6 = _closure1_slot1;
        var5 = 3;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.bind(var3)();
        var8 = var5.height;
        var _closure2_slot1 = var8;
        var5 = 4;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var9 = var5.bind(var3)();
        var _closure2_slot2 = var9;
        var5 = 5;
        var5 = var11[var5];
        var10 = var4.bind(var3)(var5);
        var5 = var10.useFontScale;
        var5 = var5.bind(var10)();
        var _closure2_slot3 = var5;
        var10 = var2.banner;
        var2 = null;
        var10 = var2 != var10;
        var _closure2_slot4 = var10;
        var2 = 6;
        var2 = var11[var2];
        var12 = var4.bind(var3)(var2);
        var4 = var12.useMainTabsHeight;
        var2 = {
            'enabled': true,
            'ignoreQuestDock': true
        };
        var4 = var4.bind(var12)(var2);
        var _closure2_slot5 = var4;
        var2 = 7;
        var2 = var11[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var6 = var2.top;
        var _closure2_slot6 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(7);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var1[6] = var4;
        var0 = function() { // Environment: var0
            _fun101855: for (var _fun101855_ip = 0;;) switch (_fun101855_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    var6 = 0;
                    var9 = 0;
                    if (!var0) {
                        _fun101855_ip = 60;
                        continue _fun101855
                    }
                case 14:
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot2;
                    var2 = _closure1_slot4;
                    var2 = var5 / var2;
                    var5 = _closure2_slot1;
                    var0 = _closure1_slot5;
                    var0 = var5 * var0;
                    var9 = var3.bind(var4)(var2, var0);
                case 60:
                    var0 = {};
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var7 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var7);
                    var7 = var7.bind(var3)(var9);
                    var0.bannerHeight = var7;
                    var7 = var5[var2];
                    var8 = var4.bind(var3)(var7);
                    var7 = _closure2_slot2;
                    var7 = var8.bind(var3)(var7);
                    var0.bannerWidth = var7;
                    var7 = var5[var2];
                    var8 = var4.bind(var3)(var7);
                    var7 = _closure2_slot0;
                    var8 = var8.bind(var3)(var7);
                    var0.headerHeight = var8;
                    var8 = _closure2_slot3;
                    var0.fontScale = var8;
                    var8 = var5[var2];
                    var8 = var4.bind(var3)(var8);
                    var7 = var9 + var7;
                    var7 = var8.bind(var3)(var7);
                    var0.listTop = var7;
                    var0.listBottom = var6;
                    var6 = var5[var2];
                    var7 = var4.bind(var3)(var6);
                    var6 = 24;
                    var6 = var7.bind(var3)(var6);
                    var0.listPaddingBottom = var6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot6;
                    var4 = var5 - var4;
                    var1 = _closure2_slot5;
                    var1 = var4 - var1;
                    var1 = var2.bind(var3)(var1);
                    var0.listViewportHeight = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8821, 13293, 1464, 12175, 4090, 5228, 1568, 13151, 2]);