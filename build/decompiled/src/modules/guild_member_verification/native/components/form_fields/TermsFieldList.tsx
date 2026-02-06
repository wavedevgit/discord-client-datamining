// modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var17 = var0.rowNumber;
        var12 = var0.rule;
        var8 = var0.rulesChannelId;
        var0 = _closure1_slot8;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var10.termsRow;
        var0.style = var4;
        var13 = _closure1_slot5;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 5;
        var4 = var11[var5];
        var4 = var6.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-muted'
        };
        var14 = var10.termsRowNumber;
        var4.style = var14;
        var14 = global;
        var14 = var14.HermesInternal;
        var16 = var14.concat;
        var15 = '';
        var14 = '.';
        var14 = var16.bind(var15)(var17, var14);
        var4.children = var14;
        var7 = var13.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot5;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var10 = var10.termsRowContent;
        var5.style = var10;
        var10 = 'text-md/medium';
        var5.variant = var10;
        var10 = _closure1_slot1;
        var9 = 6;
        var9 = var11[var9];
        var11 = var10.bind(var3)(var9);
        var10 = var11.parseGuildVerificationFormRule;
        var9 = {};
        var9.channelId = var8;
        var8 = true;
        var8 = var10.bind(var11)(var12, var8, var9);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
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
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'flexDirection': 'column',
        'justifyContent': 'space-between'
    };
    var9 = 16;
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var3.termsContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderTopLeftRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderTopRightRadius = var12;
    var3.firstItem = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderBottomLeftRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderBottomRightRadius = var10;
    var10 = 12;
    var8.marginBottom = var10;
    var3.lastItem = var8;
    var8 = {};
    var10 = 'row';
    var8.flexDirection = var10;
    var3.termsRow = var8;
    var8 = {
        'flex': 1,
        'lineHeight': 20
    };
    var3.termsRowContent = var8;
    var10 = 8;
    var8 = {
        'paddingRight': 8,
        'width': 20,
        'height': 20
    };
    var3.termsRowNumber = var8;
    var8 = {};
    var8.marginBottom = var10;
    var3.countText = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.title = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.rules;
        var _closure2_slot0 = var7;
        var0 = var0.rulesChannelId;
        var _closure2_slot1 = var0;
        var0 = _closure1_slot8;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var _closure2_slot2 = var9;
        var2 = _closure1_slot6;
        var1 = _closure1_slot7;
        var0 = {};
        var8 = _closure1_slot5;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var4 = 5;
        var4 = var13[var4];
        var4 = var12.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var9 = var9.title;
        var4.style = var9;
        var9 = 7;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.prJqwT;
        var9 = var10.bind(var11)(var9);
        var4.children = var9;
        var6 = var8.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = var7.map;
        var5 = function(arg0, arg1) { // Environment: var5
            _fun44083: for (var _fun44083_ip = 0;;) switch (_fun44083_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arg1;
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var12 = _closure1_slot5;
                    var11 = _closure1_slot4;
                    var0 = {};
                    var1 = _closure2_slot2;
                    var5 = var1.termsContainer;
                    var1 = new Array(3);
                    var1[0] = var5;
                    var13 = 0;
                    var10 = null;
                    if (!(var13 === var7)) {
                        _fun44083_ip = 74;
                        continue _fun44083
                    }
                case 64:
                    var13 = _closure2_slot2;
                    var10 = var13.firstItem;
                case 74:
                    var1[1] = var10;
                    var10 = _closure2_slot0;
                    var13 = var10.length;
                    var10 = 1;
                    var14 = var13 - var10;
                    var13 = null;
                    if (!(var7 === var14)) {
                        _fun44083_ip = 110;
                        continue _fun44083
                    }
                case 100:
                    var14 = _closure2_slot2;
                    var13 = var14.lastItem;
                case 110:
                    var1[2] = var13;
                    var0.style = var1;
                    var15 = _closure1_slot5;
                    var14 = _closure1_slot9;
                    var13 = {};
                    var13.rule = var8;
                    var1 = var7 + var10;
                    var13.rowNumber = var1;
                    var1 = _closure2_slot1;
                    var13.rulesChannelId = var1;
                    var1 = undefined;
                    var13 = var15.bind(var1)(var14, var13);
                    var0.children = var13;
                    var11 = var12.bind(var1)(var11, var0);
                    var0 = new Array(2);
                    var0[0] = var11;
                    var9 = _closure2_slot0;
                    var9 = var9.length;
                    var9 = var9 - var10;
                    var5 = null;
                    if (!(var7 !== var9)) {
                        _fun44083_ip = 234;
                        continue _fun44083
                    }
                case 196:
                    var10 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var6 = var11[var6];
                    var6 = var9.bind(var1)(var6);
                    var9 = var6.TableRowDivider;
                    var6 = {};
                    var5 = var10.bind(var1)(var9, var6);
                case 234:
                    var0[1] = var5;
                    var2.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = 'term-';
                    var0 = '-';
                    var0 = var6.bind(var5)(var8, var0, var7);
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var5 = var6.bind(var7)(var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3943, 4784, 1234, 4872, 2]);