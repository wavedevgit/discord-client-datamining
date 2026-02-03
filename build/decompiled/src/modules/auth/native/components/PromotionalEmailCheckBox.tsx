// modules/auth/native/components/PromotionalEmailCheckBox.tsx
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
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.Pressable;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.usePromoEmailConsentStore;
    var _closure1_slot4 = var6;
    var3 = var3.setPromoEmailConsentChecked;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = 8;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'gap': 8
    };
    var6.checkboxRow = var9;
    var9 = {};
    var9.flex = var10;
    var6.checkboxLabel = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/PromotionalEmailCheckBox.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100517: for (var _fun100517_ip = 0;;) switch (_fun100517_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.style;
                var0 = _closure1_slot8;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var2 = _closure1_slot4;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.required;
                    return var0;
                };
                var1 = var2.bind(var4)(var0);
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.checked;
                    return var0;
                };
                var10 = var2.bind(var4)(var0);
                var _closure2_slot0 = var10;
                var0 = null;
                if (!var1) {
                    _fun100517_ip = 345;
                    continue _fun100517
                }
            case 63:
                var3 = _closure1_slot6;
                var2 = _closure1_slot2;
                var1 = {};
                var1.style = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = 'checkbox';
                var5.accessibilityRole = var11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var11 = 5;
                var9 = var15[var11];
                var9 = var14.bind(var4)(var9);
                var16 = var9.intl;
                var13 = var16.string;
                var9 = var15[var11];
                var9 = var14.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.ylFCLt;
                var9 = var13.bind(var16)(var9);
                var5.accessibilityLabel = var9;
                var9 = {};
                var9.selected = var10;
                var5.accessibilityState = var9;
                var8 = function() {
                    var2 = _closure1_slot5;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onPress = var8;
                var8 = var12.checkboxRow;
                var5.style = var8;
                var8 = 6;
                var8 = var15[var8];
                var8 = var14.bind(var4)(var8);
                var9 = var8.FormCheckbox;
                var8 = {};
                var8.checked = var10;
                var9 = var3.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 7;
                var9 = var15[var9];
                var9 = var14.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var12 = var12.checkboxLabel;
                var9.style = var12;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.ylFCLt;
                var11 = var12.bind(var13)(var11);
                var9.children = var11;
                var9 = var3.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 345:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4558, 33, 1297, 1234, 5440, 3941, 2]);