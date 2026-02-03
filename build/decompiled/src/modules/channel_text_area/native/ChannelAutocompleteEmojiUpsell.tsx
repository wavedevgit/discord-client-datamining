// modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.upsell = var8;
    var8 = {
        'lineHeight': 16,
        'flex': 1
    };
    var3.title = var8;
    var8 = {};
    var9 = 28;
    var8.height = var9;
    var3.emojis = var8;
    var8 = {
        'position': 'absolute',
        'width': 28,
        'height': 28,
        'padding': 2,
        'backgroundColor': null,
        'borderWidth': 2,
        'borderRadius': 14,
        'borderColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.borderColor = var9;
    var3.emojiWrapper = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.emoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var14 = var0.results;
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var _closure2_slot0 = var8;
        var5 = var14.slice;
        var2 = 0;
        var0 = 3;
        var0 = var5.bind(var14)(var2, var0);
        var2 = var0.map;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun89914: for (var _fun89914_ip = 0;;) switch (_fun89914_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var5 = var7.emojiWrapper;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var5 = {};
                    var8 = 24;
                    var6 = arg1;
                    var6 = var8 * var6;
                    var5.left = var6;
                    var1[1] = var5;
                    var2.style = var1;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 6;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = {};
                    var7 = var7.emoji;
                    var5.style = var7;
                    var7 = {};
                    var9 = var0.id;
                    var8 = null;
                    if (!(var8 == var9)) {
                        _fun89914_ip = 115;
                        continue _fun89914
                    }
                case 108:
                    var8 = var0.url;
                    _fun89914_ip = 176;
                    continue _fun89914;
                case 115:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 7;
                    var9 = var11[var9];
                    var11 = var10.bind(var1)(var9);
                    var10 = var11.getEmojiURL;
                    var9 = {};
                    var13 = var0.id;
                    var9.id = var13;
                    var13 = var0.animated;
                    var9.animated = var13;
                    var12 = _closure1_slot4;
                    var9.size = var12;
                    var8 = var10.bind(var11)(var9);
                case 176:
                    var7.uri = var8;
                    var5.source = var7;
                    var5 = var4.bind(var1)(var6, var5);
                    var2.children = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var7 = var2.bind(var0)(var1);
        var1 = var0.length;
        var0 = 24;
        var11 = var0 * var1;
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var8.upsell;
        var0.style = var5;
        var6 = _closure1_slot5;
        var10 = _closure1_slot0;
        var15 = _closure1_slot2;
        var4 = 8;
        var4 = var15[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'text-sm/medium'
        };
        var9 = var8.title;
        var4.style = var9;
        var9 = 9;
        var12 = var15[var9];
        var12 = var10.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.format;
        var9 = var15[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.t;
        var10 = var9.uEky42;
        var9 = {};
        var14 = var14.length;
        var9.count = var14;
        var9 = var12.bind(var13)(var10, var9);
        var4.children = var9;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var9 = var8.emojis;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var10 = 16;
        var10 = var11 + var10;
        var9.width = var10;
        var8[1] = var9;
        var5.style = var8;
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1616, 33, 1297, 671, 4699, 1417, 3932, 1234, 2]);