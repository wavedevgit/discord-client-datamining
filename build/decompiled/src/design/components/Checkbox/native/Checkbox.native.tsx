// design/components/Checkbox/native/Checkbox.native.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var6 = var3.Pressable;
    var _closure1_slot2 = var6;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.textContainer = var8;
    var8 = {
        'minHeight': 24,
        'justifyContent': 'center'
    };
    var3.labelContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Checkbox/native/Checkbox.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48320: for (var _fun48320_ip = 0;;) switch (_fun48320_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.label;
                var15 = var0.description;
                var19 = var0.required;
                var9 = var0.checked;
                var _closure2_slot0 = var9;
                var0 = var0.onToggle;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot6;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = 'checkbox';
                var0.accessibilityRole = var5;
                var6 = '';
                var5 = var6;
                if (!var19) {
                    _fun48320_ip = 166;
                    continue _fun48320
                }
            case 82:
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 3;
                var8 = var13[var7];
                var8 = var11.bind(var3)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var13[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.EkokLy;
                var11 = var8.bind(var10)(var7);
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var8 = ' (';
                var7 = ')';
                var5 = var10.bind(var8)(var11, var7);
            case 166:
                var5 = var20 + var5;
                var11 = null;
                var7 = var11 != var15;
                if (!var7) {
                    _fun48320_ip = 203;
                    continue _fun48320
                }
            case 179:
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = ', ';
                var6 = var8.bind(var7)(var15);
            case 203:
                var5 = var5 + var6;
                var0.accessibilityLabel = var5;
                var5 = {};
                var5.checked = var9;
                var0.accessibilityState = var5;
                var4 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var6 = _closure1_slot5;
                var17 = _closure1_slot0;
                var14 = _closure1_slot1;
                var4 = 4;
                var4 = var14[var4];
                var4 = var17.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = 'horizontal';
                var4.direction = var7;
                var13 = _closure1_slot4;
                var7 = 5;
                var7 = var14[var7];
                var7 = var17.bind(var3)(var7);
                var8 = var7.FormCheckbox;
                var7 = {};
                var7.checked = var9;
                var8 = var13.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var9 = _closure1_slot3;
                var8 = {};
                var10 = var16.textContainer;
                var8.style = var10;
                var10 = {};
                var16 = var16.labelContainer;
                var10.style = var16;
                var16 = 6;
                var14 = var14[var16];
                var14 = var17.bind(var3)(var14);
                var17 = var14.Text;
                var14 = {};
                var18 = 'text-md/medium';
                var14.variant = var18;
                var18 = new Array(2);
                var18[0] = var20;
                if (!var19) {
                    _fun48320_ip = 494;
                    continue _fun48320
                }
            case 382:
                var22 = _closure1_slot5;
                var26 = _closure1_slot0;
                var27 = _closure1_slot1;
                var20 = var27[var16];
                var20 = var26.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-md/bold',
                    'color': 'text-feedback-critical'
                };
                var23 = 3;
                var24 = var27[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var27[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.EkokLy;
                var23 = var24.bind(var25)(var23);
                var20['aria-label'] = var23;
                var23 = [' ', '*'];
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 494:
                var18[1] = var19;
                var14.children = var18;
                var14 = var6.bind(var3)(var17, var14);
                var10.children = var14;
                var13 = var13.bind(var3)(var9, var10);
                var10 = new Array(2);
                var10[0] = var13;
                var11 = var11 != var15;
                if (!var11) {
                    _fun48320_ip = 583;
                    continue _fun48320
                }
            case 533:
                var14 = _closure1_slot4;
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var16];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-subtle'
                };
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 583:
                var10[1] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Checkbox = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 1234, 4080, 5440, 3941, 2]);