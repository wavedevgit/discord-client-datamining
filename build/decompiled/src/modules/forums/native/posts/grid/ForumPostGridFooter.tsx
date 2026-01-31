// modules/forums/native/posts/grid/ForumPostGridFooter.tsx
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
    var3 = var3.AnalyticsObjects;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'marginTop': 12
    };
    var3.footer = var8;
    var8 = {
        'height': 4,
        'width': 4,
        'borderRadius': 2,
        'backgroundColor': null,
        'marginHorizontal': 8
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.dot = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/grid/ForumPostGridFooter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ForumPostGridFooter, environment: var1
        _fun89523: for (var _fun89523_ip = 0;;) switch (_fun89523_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.thread;
                var11 = var0.firstMessage;
                var17 = var0.hasUnreads;
                var10 = var0.parentChannel;
                var0 = _closure1_slot8;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 6;
                var0 = var8[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useTypingUserIds;
                var0 = var12.id;
                var18 = var1.bind(var2)(var0);
                var1 = var18.length;
                var0 = 0;
                var5 = var1 > var0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var15.footer;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.thread = var12;
                var4.hasUnreads = var17;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                if (!var5) {
                    _fun89523_ip = 257;
                    continue _fun89523
                }
            case 156:
                var8 = _closure1_slot7;
                var7 = _closure1_slot6;
                var6 = {};
                var16 = _closure1_slot5;
                var14 = _closure1_slot3;
                var13 = {};
                var15 = var15.dot;
                var13.style = var15;
                var14 = var16.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 8;
                var14 = var19[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.thread = var12;
                var14.typingUserIds = var18;
                var14.hasUnreads = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var6.children = var13;
                var5 = var8.bind(var3)(var7, var6);
            case 257:
                var4[1] = var5;
                var5 = null;
                var5 = var5 != var11;
                if (!var5) {
                    _fun89523_ip = 338;
                    continue _fun89523
                }
            case 270:
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 9;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.MostCommonForumPostReaction;
                var6 = {};
                var6.thread = var12;
                var6.firstMessage = var11;
                var6.parentChannel = var10;
                var9 = _closure1_slot4;
                var9 = var9.FORUM_GRID_ITEM_FOOTER;
                var6.locationAnalyticsObject = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 338:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 11589, 11591, 11592, 11543, 2]);