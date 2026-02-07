// modules/activities/native/WebViewContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var7 = 0;
    var4 = var6[var7];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = metroImportAll;
    var4 = var3.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot2 = var8;
    var8 = var3.StyleSheet;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot3 = var9;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = var4.createContext;
    var3 = var3.bind(var4)(var7);
    var _closure1_slot5 = var3;
    var7 = var8.create;
    var4 = {};
    var9 = {
        'width': 2,
        'height': 2,
        'position': 'absolute',
        'opacity': 0
    };
    var4.placeholderWebView = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/WebViewContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.WebViewContext = var3;
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.children;
        var6 = _closure1_slot1;
        var2 = var6.useState;
        var1 = 0;
        var7 = var2.bind(var6)(var1);
        var4 = _closure1_slot0;
        var3 = undefined;
        var2 = 2;
        var2 = var4.bind(var3)(var7, var2);
        var4 = var2[var1];
        var1 = 1;
        var7 = var2[var1];
        var _closure2_slot0 = var7;
        var2 = var6.useCallback;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function(arg0) { // Environment: var0
            _fun65369: for (var _fun65369_ip = 0;;) switch (_fun65369_ip) {
                case 0:
                    var0 = arg0;
                    if (!var0) {
                        _fun65369_ip = 26;
                        continue _fun65369
                    }
                case 6:
                    var2 = _closure2_slot0;
                    var1 = var0._nativeTag;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 26:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot4;
        var0 = _closure1_slot5;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var4;
        var7 = _closure1_slot3;
        var6 = _closure1_slot2;
        var4 = {};
        var9 = _closure1_slot6;
        var9 = var9.placeholderWebView;
        var4.style = var9;
        var4.ref = var8;
        var8 = 'none';
        var4.pointerEvents = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.WebViewContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 2]);