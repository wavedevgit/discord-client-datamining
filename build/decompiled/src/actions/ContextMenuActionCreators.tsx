// actions/ContextMenuActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: open, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CONTEXT_MENU_OPEN';
        var1.type = var4;
        var4 = arg0;
        var1.contextMenu = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: openContextMenu, environment: var1
        _fun59944: for (var _fun59944_ip = 0;;) switch (_fun59944_ip) {
            case 0:
                var5 = arg0;
                var2 = arg2;
                var0 = var5.stopPropagation;
                var0 = var0.bind(var5)();
                var0 = var5.currentTarget;
                var0 = var0.contains;
                var6 = null;
                if (!(var6 != var0)) {
                    _fun59944_ip = 65;
                    continue _fun59944
                }
            case 36:
                var4 = var5.currentTarget;
                var3 = var4.contains;
                var0 = var5.target;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun59944_ip = 494;
                    continue _fun59944
                }
            case 65:
                var0 = 'pageX';
                var4 = var0 in var5;
                var9 = 0;
                var3 = 0;
                var0 = 0;
                if (!var4) {
                    _fun59944_ip = 94;
                    continue _fun59944
                }
            case 82:
                var3 = var5.pageX;
                var0 = var5.pageY;
            case 94:
                var8 = var3;
                var7 = var0;
                if (!(var9 === var3)) {
                    _fun59944_ip = 228;
                    continue _fun59944
                }
            case 107:
                var8 = var3;
                var7 = var0;
                if (!(var9 === var7)) {
                    _fun59944_ip = 228;
                    continue _fun59944
                }
            case 117:
                var3 = var5.target;
                var0 = var6 == var3;
                var12 = undefined;
                var10 = undefined;
                if (var0) {
                    _fun59944_ip = 144;
                    continue _fun59944
                }
            case 134:
                var0 = var3.getBoundingClientRect;
                var10 = var0.bind(var3)();
            case 144:
                if (!(var6 == var10)) {
                    _fun59944_ip = 150;
                    continue _fun59944
                }
            case 148:
                var10 = {};
            case 150:
                var0 = var10.left;
                var3 = 0;
                if (!(var12 !== var0)) {
                    _fun59944_ip = 164;
                    continue _fun59944
                }
            case 161:
                var3 = var0;
            case 164:
                var0 = var10.top;
                var4 = 0;
                if (!(var12 !== var0)) {
                    _fun59944_ip = 178;
                    continue _fun59944
                }
            case 175:
                var4 = var0;
            case 178:
                var11 = var10.width;
                var0 = 0;
                if (!(var12 !== var11)) {
                    _fun59944_ip = 192;
                    continue _fun59944
                }
            case 189:
                var0 = var11;
            case 192:
                var11 = var10.height;
                var10 = 2;
                var0 = var0 / var10;
                var3 = var3 + var0;
                var0 = 0;
                if (!(var12 !== var11)) {
                    _fun59944_ip = 217;
                    continue _fun59944
                }
            case 214:
                var0 = var11;
            case 217:
                var0 = var0 / var10;
                var7 = var4 + var0;
                var8 = var3;
            case 228:
                var4 = {};
                var0 = arg1;
                var4.render = var0;
                var0 = arg3;
                var4.renderLazy = var0;
                var0 = var5.target;
                if (!(var6 == var0)) {
                    _fun59944_ip = 264;
                    continue _fun59944
                }
            case 258:
                var0 = var5.currentTarget;
            case 264:
                var4.target = var0;
                var0 = global;
                var0 = var0.DOMRect;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var18 = var3;
                var17 = var8;
                var16 = var7;
                var15 = 0;
                var14 = 0;
                var0 = new var18[var0](var17, var16, var15, var14, var13);
                var0 = var0 instanceof Object ? var0 : var3;
                var4.rect = var0;
                var7 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var8 = var8[var3];
                var3 = undefined;
                var9 = var9.bind(var3)(var8);
                var8 = var9.getCurrentlyInteractingAppContext;
                var8 = var8.bind(var9)();
                if (!(var6 == var8)) {
                    _fun59944_ip = 363;
                    continue _fun59944
                }
            case 353:
                var9 = _closure1_slot3;
                var8 = var9.APP;
            case 363:
                var7.context = var8;
                var17 = var7;
                var16 = var2;
                var8 = copyDataProperties(var17, var16);
                var4.config = var7;
                var _closure2_slot0 = var4;
                if (!(var6 != var2)) {
                    _fun59944_ip = 433;
                    continue _fun59944
                }
            case 389:
                var2 = var2.enableSpellCheck;
                if (!var2) {
                    _fun59944_ip = 433;
                    continue _fun59944
                }
            case 400:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.isDesktop;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun59944_ip = 454;
                    continue _fun59944
                }
            case 433:
                var2 = var5.preventDefault;
                var2 = var2.bind(var5)();
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var4);
                _fun59944_ip = 494;
                continue _fun59944;
            case 454:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.addResultListener;
                var0 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var _closure2_slot1 = var0;
            case 494:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.AppContext;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ContextMenuActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: closeContextMenu, environment: var1
        var0 = undefined;
        return var0;
    };
    var2.closeContextMenu = var4;
    var2.openContextMenu = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: openContextMenuLazy, environment: var1
        var4 = _closure1_slot5;
        var0 = undefined;
        var8 = arg0;
        var6 = arg2;
        var5 = arg1;
        var9 = undefined;
        var7 = undefined;
        var1 = var9[var4](var8, var7, var6, var5, var4);
        return var0;
    };
    var2.openContextMenuLazy = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 7395, 478, 7398, 2]);