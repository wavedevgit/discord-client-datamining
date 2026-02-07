// modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun101860: for (var _fun101860_ip = 0;;) switch (_fun101860_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var5 = var1.placeholderHeight;
                var7 = var1.row;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var8 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var3.bind(var6)(var2, var0);
                var0 = null;
                var0 = var0 == var6;
                var2 = undefined;
                if (var0) {
                    _fun101860_ip = 102;
                    continue _fun101860
                }
            case 92:
                var0 = var6.isPrivate;
                var2 = var0.bind(var6)();
            case 102:
                var0 = true;
                if (!(var0 !== var2)) {
                    _fun101860_ip = 151;
                    continue _fun101860
                }
            case 108:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.height = var5;
                var0.row = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun101860_ip = 191;
                continue _fun101860;
            case 151:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var6;
                var1.height = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 191:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var5 = arg0;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var2 = var8[var1];
        var6 = undefined;
        var4 = var7.bind(var6)(var2);
        var3 = var4.scaleTextLineHeight;
        var2 = 'redesign/channel-title/semibold';
        var3 = var3.bind(var4)(var2, var5);
        var1 = var8[var1];
        var4 = var7.bind(var6)(var1);
        var2 = var4.scaleTextLineHeight;
        var1 = 'text-xs/medium';
        var2 = var2.bind(var4)(var1, var5);
        var4 = _closure1_slot1;
        var0 = 4;
        var1 = var8[var0];
        var1 = var4.bind(var6)(var1);
        var1 = var1.spacing;
        var1 = var1.PX_16;
        var0 = var8[var0];
        var0 = var4.bind(var6)(var0);
        var0 = var0.spacing;
        var10 = var0.PX_32;
        var0 = {};
        var0.avatar = var10;
        var4 = global;
        var9 = var4.Math;
        var5 = var9.max;
        var4 = var3 + var2;
        var4 = var5.bind(var9)(var10, var4);
        var5 = var4 + var1;
        var4 = 5;
        var4 = var8[var4];
        var4 = var7.bind(var6)(var4);
        var4 = var4.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
        var4 = var5 + var4;
        var0.height = var4;
        var0.label = var3;
        var0.labelSecondary = var2;
        var0.padding = var1;
        return var0;
    };
    var2.getMessagesItemChannelSizes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 7049, 671, 13272, 566, 13279, 2]);