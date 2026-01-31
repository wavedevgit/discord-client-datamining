// modules/user_profile/native/UserProfileSection.tsx
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var8.marginLeft = var9;
    var3.guildIcon = var8;
    var12 = 'row';
    var8 = {
        'flexDirection': 'row',
        'marginBottom': 12,
        'justifyContent': 'space-between'
    };
    var3.titleContainer = var8;
    var8 = {};
    var8.flexDirection = var12;
    var3.title = var8;
    var8 = {
        'marginHorizontal': 12,
        'marginTop': 12,
        'marginBottom': 8
    };
    var3.section = var8;
    var8 = {};
    var8.borderWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderColor = var9;
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77767: for (var _fun77767_ip = 0;;) switch (_fun77767_ip) {
            case 0:
                var2 = arg0;
                var19 = var2.title;
                var16 = var2.headerIcon;
                var14 = var2.trailingIcon;
                var11 = var2.showContainer;
                var8 = var2.children;
                var7 = var2.style;
                var1 = {
                    'title': 0,
                    'headerIcon': 0,
                    'trailingIcon': 0,
                    'showContainer': 0,
                    'children': 0,
                    'style': 0
                };
                var9 = null;
                var23 = var1;
                var22 = null;
                var0 = silentSetPrototypeOf(var23, var22);
                var23 = {};
                var22 = var2;
                var21 = var1;
                var5 = copyDataProperties(var23, var22, var21);
                var0 = _closure1_slot5;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 5;
                var0 = var6[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useThemeContext;
                var0 = var0.bind(var1)();
                var13 = var0.theme;
                var1 = var0.primaryColor;
                var0 = 6;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useProfileThemeValues;
                var0 = var0.bind(var2)(var13);
                var10 = {};
                var22 = var15.contentContainer;
                var23 = var10;
                var2 = copyDataProperties(var23, var22);
                if (!(var9 != var1)) {
                    _fun77767_ip = 174;
                    continue _fun77767
                }
            case 170:
                if (!(var9 == var0)) {
                    _fun77767_ip = 188;
                    continue _fun77767
                }
            case 174:
                var1 = var15.contentContainer;
                var1 = var1.borderColor;
                _fun77767_ip = 248;
                continue _fun77767;
            case 188:
                var17 = _closure1_slot0;
                var18 = _closure1_slot1;
                var2 = 7;
                var2 = var18[var2];
                var12 = var17.bind(var3)(var2);
                var6 = var12.hexOpacityToRgba;
                var2 = 8;
                var2 = var18[var2];
                var2 = var17.bind(var3)(var2);
                var2 = var2.DIVIDER_COLORS;
                var2 = var2[var13];
                var0 = var0.dividerOpacity;
                var1 = var6.bind(var12)(var2, var0);
            case 248:
                var0 = 'borderColor';
                var10[var0] = var1;
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var12 = var15.section;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var7;
                var0.style = var6;
                var23 = var0;
                var22 = var5;
                var5 = copyDataProperties(var23, var22);
                var5 = var9 != var19;
                var6 = null;
                if (!var5) {
                    _fun77767_ip = 438;
                    continue _fun77767
                }
            case 310:
                var12 = _closure1_slot4;
                var7 = _closure1_slot2;
                var5 = {};
                var13 = var15.titleContainer;
                var5.style = var13;
                var13 = {};
                var15 = var15.title;
                var13.style = var15;
                var18 = _closure1_slot3;
                var17 = _closure1_slot0;
                var20 = _closure1_slot1;
                var15 = 9;
                var15 = var20[var15];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'eyebrow',
                    'accessibilityRole': 'header'
                };
                var15.children = var19;
                var17 = var18.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var13.children = var15;
                var15 = var12.bind(var3)(var7, var13);
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var5.children = var13;
                var6 = var12.bind(var3)(var7, var5);
            case 438:
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot2;
                var4 = {};
                var9 = null;
                if (!var11) {
                    _fun77767_ip = 464;
                    continue _fun77767
                }
            case 461:
                var9 = var10;
            case 464:
                var4.style = var9;
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3118, 5347, 3199, 5346, 3900, 2]);