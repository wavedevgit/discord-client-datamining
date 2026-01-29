// modules/messages/native/emoji/EmojiGrid.tsx
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 40,
        'width': 40
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.gridEmojiFastImage = var8;
    var8 = {
        'fontSize': 18,
        'lineHeight': 44
    };
    var3.gridEmojiText = var8;
    var8 = {
        'marginTop': 16,
        'flexDirection': 'row'
    };
    var3.emojiGridRowContainer = var8;
    var8 = {
        'marginTop': 8,
        'alignItems': 'center'
    };
    var3.emojiGridContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = function(arg0) { // Original name: Emoji, environment: var1
        _fun73967: for (var _fun73967_ip = 0;;) switch (_fun73967_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildEmoji;
                var1 = _closure1_slot5;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var0.id;
                var6 = null;
                if (!(var6 != var8)) {
                    _fun73967_ip = 121;
                    continue _fun73967
                }
            case 59:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 6;
                var6 = var9[var6];
                var9 = var8.bind(var4)(var6);
                var8 = var9.getEmojiURL;
                var6 = {};
                var10 = var0.id;
                var6.id = var10;
                var10 = var0.animated;
                var6.animated = var10;
                var10 = 48;
                var6.size = var10;
                var6 = var8.bind(var9)(var6);
                _fun73967_ip = 157;
                continue _fun73967;
            case 121:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 5;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.getURL;
                var7 = var0.name;
                var6 = var8.bind(var9)(var7);
            case 157:
                var1.src = var6;
                var6 = var5.gridEmojiFastImage;
                var1.fastImageStyle = var6;
                var5 = var5.gridEmojiText;
                var1.textEmojiStyle = var5;
                var5 = var0.name;
                var1.name = var5;
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/emoji/EmojiGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun73968: for (var _fun73968_ip = 0;;) switch (_fun73968_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.expressionSourceGuild;
                var2 = var0.doNotDisplayEmojiIds;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun73968_ip = 27;
                    continue _fun73968
                }
            case 23:
                var2 = new Array(0);
            case 27:
                var _closure2_slot0 = var2;
                var9 = var0.numberToShow;
                if (!(var9 === var3)) {
                    _fun73968_ip = 46;
                    continue _fun73968
                }
            case 43:
                var9 = 10;
            case 46:
                var2 = var0.maxPerRow;
                if (!(var2 === var3)) {
                    _fun73968_ip = 59;
                    continue _fun73968
                }
            case 56:
                var2 = 5;
            case 59:
                var _closure2_slot1 = var3;
                var5 = {};
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 8;
                var0 = var0[var7];
                var8 = var8.bind(var3)(var0);
                var0 = var8.useSharedMessageEmojiStyles;
                var11 = var0.bind(var8)();
                var12 = var5;
                var0 = copyDataProperties(var12, var11);
                var0 = _closure1_slot5;
                var11 = var0.bind(var3)();
                var12 = var5;
                var0 = copyDataProperties(var12, var11);
                _closure2_slot1 = var5;
                var0 = null;
                var8 = var0 == var1;
                var10 = undefined;
                if (var8) {
                    _fun73968_ip = 141;
                    continue _fun73968
                }
            case 135:
                var10 = var1.emojis;
            case 141:
                if (!(var0 == var10)) {
                    _fun73968_ip = 149;
                    continue _fun73968
                }
            case 145:
                var10 = new Array(0);
            case 149:
                var1 = var10.slice;
                var0 = 1;
                var0 = var9 + var0;
                var8 = 0;
                var10 = var1.bind(var10)(var8, var0);
                var1 = var10.filter;
                var0 = function(arg0) { // Environment: var6
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var1.bind(var10)(var0);
                var0 = var1.slice;
                var1 = var0.bind(var1)(var8, var9);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 9;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var8 = var0.bind(var3)(var1, var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var5.emojiGridContainer;
                var0.style = var5;
                var5 = _closure1_slot0;
                var4 = 10;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GappedList;
                var4 = {};
                var4.gap = var7;
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    var8 = arg0;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.emojiGridRowContainer;
                    var2.style = var1;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var5 = var0.GappedList;
                    var0 = {};
                    var6 = 32;
                    var0.gap = var6;
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var4 = _closure1_slot4;
                        var3 = _closure1_slot6;
                        var2 = {};
                        var2.guildEmoji = var0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3, var2, var1);
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
    var2.EmojiGrid = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3067, 1417, 5727, 9268, 8508, 9281, 2]);