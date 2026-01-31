// modules/channel_list_v2/native/useChannelListWidth.tsx
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
    var3 = var3.CHANNEL_DRAWER_SPACING;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/useChannelListWidth.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useChannelListWidth, environment: var1
        _fun92823: for (var _fun92823_ip = 0;;) switch (_fun92823_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 1;
                var0 = var7[var0];
                var4 = undefined;
                var1 = var6.bind(var4)(var0);
                var0 = var1.useDrawerWidth;
                var1 = var0.bind(var1)();
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var5 = var0.isChatBesideChannelList;
                var0 = 4;
                var0 = var7[var0];
                var8 = var6.bind(var4)(var0);
                var3 = var8.useYouBarEnabled;
                var0 = 'usechannellistwidth';
                var3 = var3.bind(var8)(var0);
                var0 = 3;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.DM_WIDTH;
                var1 = var1 - var0;
                var0 = 0;
                if (!var5) {
                    _fun92823_ip = 126;
                    continue _fun92823
                }
            case 117:
                var0 = 0;
                if (var3) {
                    _fun92823_ip = 126;
                    continue _fun92823
                }
            case 122:
                var0 = _closure1_slot3;
            case 126:
                var0 = var1 - var0;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function() { // Original name: getChannelListWidth, environment: var1
        _fun92824: for (var _fun92824_ip = 0;;) switch (_fun92824_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 1;
                var0 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var0);
                var0 = var1.getDrawerWidth;
                var1 = var0.bind(var1)();
                var0 = 2;
                var0 = var6[var0];
                var3 = var5.bind(var4)(var0);
                var0 = var3.getChatLayout;
                var0 = var0.bind(var3)();
                var3 = var0.isChatBesideChannelList;
                var0 = 3;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.DM_WIDTH;
                var1 = var1 - var0;
                var0 = 0;
                if (!var3) {
                    _fun92824_ip = 94;
                    continue _fun92824
                }
            case 90:
                var0 = _closure1_slot3;
            case 94:
                var0 = var1 - var0;
                return var0;
        }
    };
    var2.getChannelListWidth = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8747, 9769, 3881, 670, 12108, 2]);