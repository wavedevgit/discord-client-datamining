// modules/portals/PortalToNativeView.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var7 = var3.StyleSheet;
    var6 = var3.requireNativeComponent;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot0 = var3;
    var3 = 'PortalToNativeView';
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'opacity': 0,
        'height': 0,
        'right': 0,
        'left': 0,
        'top': 0
    };
    var3.portal = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/portals/PortalToNativeView.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.portalId;
        var0 = var0.children;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = {};
        var6 = 'none';
        var1.pointerEvents = var6;
        var1.portalId = var5;
        var4 = _closure1_slot2;
        var4 = var4.portal;
        var1.style = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 2]);