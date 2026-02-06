// design/components/Navigator/native/NavigatorScreen.native.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsxs;
    var _closure1_slot2 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun51560: for (var _fun51560_ip = 0;;) switch (_fun51560_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.screen;
                var5 = var0.route;
                var7 = var0.navigation;
                var4 = var0.viewStyle;
                var1 = var8.customNavbar;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var6 = var2.designConfig;
                var2 = var6.useTrackNavigatorScreenImpression;
                var2 = var2.bind(var6)(var8, var5);
                var6 = null;
                var2 = var6 != var1;
                if (!var2) {
                    _fun51560_ip = 89;
                    continue _fun51560
                }
            case 85:
                var6 = var1.bind(var3)();
            case 89:
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 3;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PostponeRender;
                var0 = {};
                var9 = var8.postponeRender;
                var0.postpone = var9;
                var9 = var8.ignoreKeyboard;
                var0.ignoreKeyboard = var9;
                var0.viewStyle = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var8.render;
                var5 = var5.params;
                var5 = var6.bind(var8)(var5, var7);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/NavigatorScreen.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.NavigatorScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5857, 5858, 2]);