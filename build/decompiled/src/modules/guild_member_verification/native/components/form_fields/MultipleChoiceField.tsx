// modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginVertical': 12,
        'flexDirection': 'column'
    };
    var3.container = var8;
    var8 = {};
    var11 = 5;
    var11 = var5[var11];
    var13 = var10.bind(var0)(var11);
    var12 = var9.DISPLAY_SEMIBOLD;
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var16 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var9 = {};
    var10 = false;
    var9.uppercase = var10;
    var10 = 16;
    var18 = undefined;
    var17 = var12;
    var15 = var10;
    var14 = var9;
    var16 = var18[var13](var17, var16, var15, var14, var13);
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var9 = 'paddingBottom';
    var8[var9] = var10;
    var3.formHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61165: for (var _fun61165_ip = 0;;) switch (_fun61165_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.field;
                var0 = var0.onChange;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot6;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var12 = var1.label;
                var0 = var1.choices;
                var _closure2_slot1 = var0;
                var11 = var1.response;
                var5 = _closure1_slot2;
                var2 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure2_slot1;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var0 = {};
                        var1 = arg0;
                        var0.name = var1;
                        var1 = arg1;
                        var0.value = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var13.container;
                var0.style = var5;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var13.formHeader;
                var4.style = var13;
                var4.children = var12;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var9 = null;
                var12 = var9 != var11;
                var9 = -1;
                if (!var12) {
                    _fun61165_ip = 213;
                    continue _fun61165
                }
            case 210:
                var9 = var11;
            case 213:
                var5.defaultValue = var9;
                var9 = function arg0() {
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5.onChange = var9;
                var9 = false;
                var5.hasIcons = var9;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var0.name;
                    var1.label = var5;
                    var5 = var0.value;
                    var1.value = var5;
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 4677, 671, 3932, 5417, 5416, 2]);