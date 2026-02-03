// modules/parent_tools/native/RestrictedHoursModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var22 = var0.bind(var3)();
        var20 = _closure1_slot1;
        var21 = _closure1_slot2;
        var0 = 5;
        var0 = var21[var0];
        var0 = var20.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var13 = var0.top;
        var12 = var0.bottom;
        var2 = _closure1_slot5;
        var19 = _closure1_slot0;
        var0 = 6;
        var0 = var21[var0];
        var0 = var19.bind(var3)(var0);
        var1 = var0.ModalScreen;
        var0 = {};
        var6 = _closure1_slot5;
        var4 = 7;
        var4 = var21[var4];
        var4 = var19.bind(var3)(var4);
        var5 = var4.ModalContent;
        var4 = {};
        var9 = _closure1_slot5;
        var8 = _closure1_slot4;
        var7 = {};
        var11 = var22.container;
        var10 = new Array(2);
        var10[0] = var11;
        var11 = {};
        var11.paddingTop = var13;
        var11.paddingBottom = var12;
        var10[1] = var11;
        var7.style = var10;
        var12 = _closure1_slot6;
        var11 = _closure1_slot4;
        var10 = {};
        var13 = var22.content;
        var10.style = var13;
        var23 = _closure1_slot5;
        var14 = 8;
        var13 = var21[var14];
        var13 = var19.bind(var3)(var13);
        var16 = var13.Text;
        var13 = {
            'variant': 'heading-xl/bold',
            'color': 'text-default'
        };
        var17 = var22.title;
        var13.style = var17;
        var18 = 9;
        var17 = var21[var18];
        var17 = var19.bind(var3)(var17);
        var26 = var17.intl;
        var25 = var26.string;
        var17 = 10;
        var24 = var21[var17];
        var24 = var20.bind(var3)(var24);
        var24 = var24.ujnPZZ;
        var24 = var25.bind(var26)(var24);
        var13.children = var24;
        var16 = var23.bind(var3)(var16, var13);
        var13 = new Array(2);
        var13[0] = var16;
        var16 = _closure1_slot5;
        var14 = var21[var14];
        var14 = var19.bind(var3)(var14);
        var15 = var14.Text;
        var14 = {
            'variant': 'text-md/normal',
            'color': 'text-muted'
        };
        var22 = var22.description;
        var14.style = var22;
        var18 = var21[var18];
        var18 = var19.bind(var3)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var17 = var21[var17];
        var17 = var20.bind(var3)(var17);
        var17 = var17.VfqJvY;
        var17 = var18.bind(var19)(var17);
        var14.children = var17;
        var14 = var16.bind(var3)(var15, var14);
        var13[1] = var14;
        var10.children = var13;
        var10 = var12.bind(var3)(var11, var10);
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 'center';
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.paddingHorizontal = var12;
    var3.container = var8;
    var8 = {
        'alignItems': 'center',
        'textAlign': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.gap = var10;
    var3.content = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.title = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'main';
    var3.MAIN = var6;
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/RestrictedHoursModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.useNavigatorScreens;
            var1 = function() { // Environment: var0
                var0 = {};
                var1 = _closure1_slot8;
                var2 = var1.MAIN;
                var1 = {
                    'headerShown': false,
                    'gestureEnabled': false
                };
                var3 = function() {
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot9;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 12;
        var1 = var6[var1];
        var1 = var2.bind(var3)(var1);
        var8 = var1.bind(var3)();
        var _closure2_slot0 = var8;
        var7 = _closure1_slot3;
        var2 = var7.useEffect;
        var1 = new Array(1);
        var1[0] = var8;
        var0 = function() { // Environment: var0
            _fun117943: for (var _fun117943_ip = 0;;) switch (_fun117943_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun117943_ip = 45;
                        continue _fun117943
                    }
                case 10:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.closeRestrictedHoursModal;
                    var0 = var0.bind(var1)();
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var7)(var0, var1);
        var2 = _closure1_slot5;
        var1 = _closure1_slot0;
        var0 = 14;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Modal;
        var0 = {};
        var0.screens = var5;
        var4 = _closure1_slot8;
        var4 = var4.MAIN;
        var0.initialRouteName = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 6439, 6440, 3941, 1234, 1858, 5786, 15033, 15031, 7502, 2]);