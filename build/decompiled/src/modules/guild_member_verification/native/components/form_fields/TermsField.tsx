// modules/guild_member_verification/native/components/form_fields/TermsField.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
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
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'stretch',
        'justifyContent': 'space-between',
        'paddingTop': 0,
        'paddingBottom': 0,
        'paddingHorizontal': 0
    };
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.checkboxContainer = var8;
    var8 = {};
    var8.marginLeft = var12;
    var3.checkboxText = var8;
    var8 = {};
    var12 = 6;
    var12 = var5[var12];
    var13 = var10.bind(var0)(var12);
    var12 = var11.DISPLAY_SEMIBOLD;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/form_fields/TermsField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TermsField, environment: var1
        _fun60356: for (var _fun60356_ip = 0;;) switch (_fun60356_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.field;
                var2 = var1.onChange;
                var _closure2_slot0 = var2;
                var8 = var1.rulesChannelId;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot6;
                var15 = var1.bind(var3)();
                var9 = var0.values;
                var0 = var0.response;
                var1 = null;
                var10 = var1 != var0;
                if (!var10) {
                    _fun60356_ip = 67;
                    continue _fun60356
                }
            case 64:
                var10 = var0;
            case 67:
                _closure2_slot1 = var10;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var15.container;
                var0.style = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 7;
                var4 = var11[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.rules = var9;
                var4.rulesChannelId = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var9 = _closure1_slot0;
                var8 = 8;
                var5 = var11[var8];
                var5 = var9.bind(var3)(var5);
                var6 = var5.FormRow;
                var5 = {
                    'start': true,
                    'end': true,
                    'accessibilityRole': 'checkbox'
                };
                var13 = {};
                var13.checked = var10;
                var5.accessibilityState = var13;
                var13 = 9;
                var13 = var11[var13];
                var13 = var9.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var15.checkboxText;
                var13.style = var15;
                var15 = 10;
                var16 = var11[var15];
                var16 = var9.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var11[var15];
                var15 = var9.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["2EXfGJ"];
                var15 = var16.bind(var17)(var15);
                var13.children = var15;
                var13 = var7.bind(var3)(var14, var13);
                var5.label = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var2 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onPress = var12;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.FormRow;
                var9 = var8.Checkbox;
                var8 = {};
                var8.selected = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.leading = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 671, 4645, 4743, 5340, 3900, 1234, 2]);