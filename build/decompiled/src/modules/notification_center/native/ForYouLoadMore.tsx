// modules/notification_center/native/ForYouLoadMore.tsx
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
    var6 = var3.ActivityIndicator;
    var _closure1_slot2 = var6;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
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
    var6 = {};
    var3 = 8;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'marginTop': 8,
        'marginBottom': 24,
        'marginHorizontal': 16,
        'height': 42
    };
    var6.container = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouLoadMore.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun103579: for (var _fun103579_ip = 0;;) switch (_fun103579_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onPressLoad;
                var0 = _closure1_slot6;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.loading;
                    return var0;
                };
                var4 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var6.container;
                var0.style = var6;
                var7 = _closure1_slot5;
                if (var4) {
                    _fun103579_ip = 205;
                    continue _fun103579
                }
            case 100:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 6;
                var4 = var13[var4];
                var4 = var12.bind(var3)(var4);
                var6 = var4.Button;
                var4 = {
                    'variant': 'secondary',
                    'grow': true,
                    'size': 'md'
                };
                var9 = 7;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["Q/LSXp"];
                var9 = var10.bind(var11)(var9);
                var4.text = var9;
                var4.onPress = var8;
                var4 = var7.bind(var3)(var6, var4);
                _fun103579_ip = 217;
                continue _fun103579;
            case 205:
                var6 = _closure1_slot2;
                var5 = {};
                var4 = var7.bind(var3)(var6, var5);
            case 217:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForYouLoadMore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3970, 33, 1297, 632, 4085, 1234, 2]);