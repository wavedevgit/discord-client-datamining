// modules/forums/native/posts/ForumPostTimestamp.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.useForumChannelStore;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'lineHeight': 18,
        'height': 18
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/ForumPostTimestamp.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89607: for (var _fun89607_ip = 0;;) switch (_fun89607_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.textStyle;
                var9 = var0.thread;
                var1 = var0.hasUnreads;
                var8 = var0.format;
                var2 = _closure1_slot4;
                var3 = undefined;
                var6 = var2.bind(var3)();
                var4 = _closure1_slot2;
                var2 = var9.parent_id;
                var2 = var4.bind(var3)(var2);
                var5 = var2.sortOrder;
                var4 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useLastActiveTimestamp;
                var4 = var2.bind(var4)(var9, var5, var8);
                var5 = 'text-muted';
                if (!var1) {
                    _fun89607_ip = 108;
                    continue _fun89607
                }
            case 102:
                var5 = 'text-default';
            case 108:
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 5;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/normal'
                };
                var0.color = var5;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.text;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11638, 33, 1297, 8937, 3941, 2]);