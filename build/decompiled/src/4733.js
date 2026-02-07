// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var7 = 1;
    var5 = var6[var7];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot6 = var4;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'flex': 1,
        'flexDirection': 'column-reverse'
    };
    var3.container = var6;
    var6 = {};
    var6.flex = var7;
    var3.content = var6;
    var6 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var3.absolute = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        _fun43733: for (var _fun43733_ip = 0;;) switch (_fun43733_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 4;
                var5 = var1[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var5);
                var5 = var6.useSafeAreaFrame;
                var5 = var5.bind(var6)();
                var _closure2_slot0 = var5;
                var2 = var1[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useSafeAreaInsets;
                var4 = var2.bind(var4)();
                var5 = _closure1_slot4;
                var7 = var5.useContext;
                var6 = _closure1_slot1;
                var12 = 5;
                var2 = var1[var12];
                var2 = var6.bind(var3)(var2);
                var10 = var7.bind(var5)(var2);
                var2 = var5.useContext;
                var23 = 6;
                var1 = var1[var23];
                var1 = var6.bind(var3)(var1);
                var22 = var2.bind(var5)(var1);
                var7 = var0.focused;
                var2 = var0.modal;
                var1 = var3 !== var2;
                if (!var1) {
                    _fun43733_ip = 139;
                    continue _fun43733
                }
            case 136:
                var1 = var2;
            case 139:
                var _closure2_slot1 = var1;
                var13 = var0.header;
                var1 = var0.headerShown;
                var6 = var3 === var1;
                if (var6) {
                    _fun43733_ip = 164;
                    continue _fun43733
                }
            case 161:
                var6 = var1;
            case 164:
                var16 = var0.headerTransparent;
                var1 = var0.headerStatusBarHeight;
                if (!(var3 === var1)) {
                    _fun43733_ip = 193;
                    continue _fun43733
                }
            case 180:
                var2 = 0;
                if (var10) {
                    _fun43733_ip = 190;
                    continue _fun43733
                }
            case 185:
                var2 = var4.top;
            case 190:
                var1 = var2;
            case 193:
                var _closure2_slot2 = var1;
                var18 = var0.navigation;
                var11 = var0.route;
                var19 = var0.children;
                var5 = var0.style;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = function() { // Environment: var17
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var4 = undefined;
                    var3 = var1.bind(var4)(var0);
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var21 = 0;
                var20 = var1[var21];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot3 = var0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = !var7;
                var0.accessibilityElementsHidden = var4;
                var4 = 'no-hide-descendants';
                if (!var7) {
                    _fun43733_ip = 315;
                    continue _fun43733
                }
            case 311:
                var4 = 'auto';
            case 315:
                var0.importantForAccessibility = var4;
                var8 = _closure1_slot8;
                var7 = var8.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot6;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var8.content;
                var4.style = var8;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Provider;
                var8 = {};
                if (var10) {
                    _fun43733_ip = 398;
                    continue _fun43733
                }
            case 392:
                var12 = false;
                var10 = var12 !== var6;
            case 398:
                var8.value = var10;
                var14 = _closure1_slot6;
                var12 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var23];
                var10 = var12.bind(var3)(var10);
                var12 = var10.Provider;
                var10 = {};
                if (var6) {
                    _fun43733_ip = 451;
                    continue _fun43733
                }
            case 434:
                var23 = null;
                var23 = var23 != var22;
                var21 = 0;
                if (!var23) {
                    _fun43733_ip = 448;
                    continue _fun43733
                }
            case 445:
                var21 = var22;
            case 448:
                var20 = var21;
            case 451:
                var10.value = var20;
                var10.children = var19;
                var10 = var14.bind(var3)(var12, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var6) {
                    _fun43733_ip = 635;
                    continue _fun43733
                }
            case 501:
                var8 = _closure1_slot6;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 9;
                var6 = var12[var9];
                var6 = var10.bind(var3)(var6);
                var6 = var6.NavigationContext;
                var7 = var6.Provider;
                var6 = {};
                var6.value = var18;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.NavigationRouteContext;
                var10 = var9.Provider;
                var9 = {};
                var9.value = var11;
                var12 = _closure1_slot5;
                var11 = {};
                var17 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var11.onLayout = var17;
                var14 = null;
                if (!var16) {
                    _fun43733_ip = 601;
                    continue _fun43733
                }
            case 591:
                var15 = _closure1_slot8;
                var14 = var15.absolute;
            case 601:
                var11.style = var14;
                var11.children = var13;
                var11 = var8.bind(var3)(var12, var11);
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 635:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1571, 4717, 4728, 4714, 4713, 1470]);