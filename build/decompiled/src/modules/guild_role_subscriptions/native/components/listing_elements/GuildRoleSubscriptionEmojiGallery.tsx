// modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84268: for (var _fun84268_ip = 0;;) switch (_fun84268_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.emojiIds;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var1 = var0.maxPerRow;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun84268_ip = 35;
                    continue _fun84268
                }
            case 32:
                var1 = 9;
            case 35:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 3;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var8 = var0.bind(var3)(var2, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = 4;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GappedList;
                var4 = {};
                var7 = 8;
                var4.gap = var7;
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    var8 = arg0;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var1 = {};
                    var5 = 'row';
                    var1.flexDirection = var5;
                    var2.style = var1;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var5 = var0.GappedList;
                    var0 = {};
                    var6 = 16;
                    var0.gap = var6;
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var4 = arg0;
                        var3 = _closure1_slot4;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 5;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {
                            'size': 22,
                            'fontSize': 18
                        };
                        var5 = _closure2_slot0;
                        var0.guildId = var5;
                        var0.id = var4;
                        var0 = var3.bind(var2)(var1, var0, var4);
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6);
                    var0.children = var6;
                    var0 = var4.bind(var1)(var5, var0);
                    var2.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8511, 9288, 10738, 2]);