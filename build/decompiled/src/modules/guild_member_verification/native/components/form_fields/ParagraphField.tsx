// modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_PARAGRAPH_RESPONSE_LENGTH;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 5;
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
    var3.fieldDescription = var8;
    var8 = {
        'padding': 8,
        'width': '100%',
        'borderRadius': null,
        'lineHeight': 20
    };
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var3.textInput = var8;
    var8 = {};
    var12 = 7;
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
    var3 = 'modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61261: for (var _fun61261_ip = 0;;) switch (_fun61261_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.field;
                var8 = var1.onChange;
                var1 = _closure1_slot6;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var13 = var0.label;
                var11 = var0.response;
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 8;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var10.formHeader;
                var4.style = var14;
                var4.children = var13;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 9;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormInput;
                var5 = {
                    'style': null,
                    'showTopContainer': false,
                    'showBorder': false,
                    'multiline': true,
                    'showCharactersRemaining': true,
                    'numberOfLines': 3
                };
                var10 = var10.textInput;
                var5.style = var10;
                var10 = _closure1_slot3;
                var5.maxLength = var10;
                var10 = null;
                var12 = var10 != var11;
                var10 = '';
                if (!var12) {
                    _fun61261_ip = 200;
                    continue _fun61261
                }
            case 197:
                var10 = var11;
            case 200:
                var5.value = var10;
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var9 = 10;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["Sqn+Wh"];
                var9 = var10.bind(var11)(var9);
                var5.placeholder = var9;
                var5.onChange = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4828, 483, 33, 1297, 671, 4682, 3941, 5382, 1234, 2]);