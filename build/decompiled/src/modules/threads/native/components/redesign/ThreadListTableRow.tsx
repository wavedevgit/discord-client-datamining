// modules/threads/native/components/redesign/ThreadListTableRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var13 = var1.thread;
        var _closure2_slot0 = var13;
        var7 = var1.onPress;
        var _closure2_slot1 = var7;
        var5 = var1.start;
        var4 = var1.end;
        var1 = _closure1_slot6;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var6 = _closure1_slot2;
        var2 = var6.useMemo;
        var1 = new Array(2);
        var1[0] = var7;
        var7 = var13.id;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            _fun105886: for (var _fun105886_ip = 0;;) switch (_fun105886_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun105886_ip = 17;
                        continue _fun105886
                    }
                case 13:
                    var0 = undefined;
                    return var0;
                case 17:
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var0 = _closure2_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot5;
        var11 = _closure1_slot0;
        var14 = _closure1_slot1;
        var0 = 5;
        var0 = var14[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var7 = var13.name;
        var0.label = var7;
        var9 = _closure1_slot5;
        var8 = _closure1_slot3;
        var7 = {};
        var12 = var12.subLabel;
        var7.style = var12;
        var12 = _closure1_slot5;
        var10 = 6;
        var10 = var14[var10];
        var10 = var11.bind(var3)(var10);
        var11 = var10.ThreadSubtext;
        var10 = {};
        var10.thread = var13;
        var10 = var12.bind(var3)(var11, var10);
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var0.subLabel = var7;
        var0.onPress = var6;
        var0.start = var5;
        var0.end = var4;
        var4 = true;
        var0.arrow = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg2;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'maxWidth': '100%',
        'marginTop': 2
    };
    var3.subLabel = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun105888: for (var _fun105888_ip = 0;;) switch (_fun105888_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.threadId;
                var _closure2_slot0 = var2;
                var5 = var1.onPress;
                var7 = var1.start;
                var6 = var1.end;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var2 = var4[var2];
                var4 = undefined;
                var8 = var3.bind(var4)(var2);
                var3 = var8.useStateFromStores;
                var9 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var3.bind(var8)(var2, var0);
                var0 = null;
                var2 = var0 == var8;
                if (var2) {
                    _fun105888_ip = 127;
                    continue _fun105888
                }
            case 94:
                var3 = _closure1_slot5;
                var2 = _closure1_slot7;
                var1 = {};
                var1.thread = var8;
                var1.start = var7;
                var1.end = var6;
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 127:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/redesign/ThreadListTableRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 33, 1297, 4893, 13794, 566, 2]);