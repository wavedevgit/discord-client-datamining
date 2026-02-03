// modules/forums/native/posts/grid/ForumPostGridHeader.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ForumTimestampFormats;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 8;
    var8.marginEnd = var10;
    var3.pinIcon = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'marginBottom': 4
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 4
    };
    var3.details = var8;
    var8 = {};
    var8.flex = var9;
    var3.timestampText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/grid/ForumPostGridHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89510: for (var _fun89510_ip = 0;;) switch (_fun89510_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.thread;
                var8 = var0.hasUnreads;
                var7 = var0.isNew;
                var0 = _closure1_slot8;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var1 = var9.hasFlag;
                var0 = _closure1_slot5;
                var0 = var0.PINNED;
                var6 = var1.bind(var9)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var13.container;
                var0.style = var4;
                var4 = {};
                var10 = var13.details;
                var4.style = var10;
                var10 = var6;
                if (!var10) {
                    _fun89510_ip = 135;
                    continue _fun89510
                }
            case 92:
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 6;
                var6 = var14[var6];
                var11 = var11.bind(var3)(var6);
                var6 = {};
                var14 = var13.pinIcon;
                var6.containerStyle = var14;
                var10 = var12.bind(var3)(var11, var6);
            case 135:
                var6 = new Array(4);
                var6[0] = var10;
                var12 = _closure1_slot6;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 7;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.ForumPostAuthor;
                var10 = {};
                var10.thread = var9;
                var10.hasUnreads = var8;
                var10 = var12.bind(var3)(var11, var10);
                var6[1] = var10;
                var11 = _closure1_slot1;
                var10 = 8;
                var10 = var14[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.thread = var9;
                var10.hasUnreads = var8;
                var14 = _closure1_slot4;
                var14 = var14.POSTED_DURATION_AGO;
                var10.format = var14;
                var13 = var13.timestampText;
                var10.textStyle = var13;
                var10 = var12.bind(var3)(var11, var10);
                var6[2] = var10;
                if (!var7) {
                    _fun89510_ip = 293;
                    continue _fun89510
                }
            case 261:
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 9;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var7 = var12.bind(var3)(var11, var10);
            case 293:
                var6[3] = var7;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 10;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var9.name;
                var5.title = var9;
                var5.hasUnreads = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6478, 1379, 33, 1297, 11619, 11621, 11630, 11631, 11632, 2]);