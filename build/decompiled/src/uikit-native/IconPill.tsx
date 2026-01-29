// uikit-native/IconPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var13 = 4;
    var3 = var5[var13];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'height': 20,
        'paddingHorizontal': 8
    };
    var10 = 5;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var3;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.radii;
    var3 = var3.md;
    var9.borderRadius = var3;
    var3 = 8;
    var6.pillContainer = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var9.tintColor = var14;
    var9.marginRight = var13;
    var6.pillIcon = var9;
    var9 = {};
    var12 = var12.PRIMARY_NORMAL;
    var9.fontFamily = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_SUBTLE;
    var9.color = var10;
    var10 = 14;
    var9.fontSize = var10;
    var10 = 18;
    var9.lineHeight = var10;
    var6.pillText = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/IconPill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: IconPill, environment: var1
        _fun65980: for (var _fun65980_ip = 0;;) switch (_fun65980_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.text;
                var16 = var0.source;
                var12 = var0.IconComponent;
                var6 = var0.style;
                var11 = var0.textStyle;
                var9 = var0.accessibilityLabel;
                var0 = _closure1_slot6;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var10.pillContainer;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = null;
                if (!(var4 == var12)) {
                    _fun65980_ip = 158;
                    continue _fun65980
                }
            case 85:
                var7 = _closure1_slot4;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 6;
                var4 = var15[var13];
                var6 = var14.bind(var3)(var4);
                var4 = {};
                var4.source = var16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.EXTRA_SMALL;
                var4.size = var13;
                var13 = var10.pillIcon;
                var4.style = var13;
                var6 = var7.bind(var3)(var6, var4);
                _fun65980_ip = 188;
                continue _fun65980;
            case 158:
                var7 = _closure1_slot4;
                var4 = {};
                var13 = 'xxs';
                var4.size = var13;
                var13 = var10.pillIcon;
                var4.style = var13;
                var6 = var7.bind(var3)(var12, var4);
            case 188:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 7;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var12 = var10.pillText;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var5.style = var10;
                var10 = 1;
                var5.numberOfLines = var10;
                var5.accessibilityLabel = var9;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 671, 4039, 4832, 2]);