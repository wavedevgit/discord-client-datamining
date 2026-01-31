// components_native/premium/PremiumFeatureList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var10 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = 8;
    var9 = {
        'backgroundColor': 'transparent',
        'paddingHorizontal': 0,
        'paddingVertical': 8,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.item = var9;
    var9 = {};
    var12 = 5;
    var12 = var5[var12];
    var15 = var11.bind(var0)(var12);
    var14 = var10.PRIMARY_NORMAL;
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var13 = var12.TEXT_DEFAULT;
    var12 = 14;
    var17 = var15.bind(var0)(var14, var13, var12);
    var18 = var9;
    var12 = copyDataProperties(var18, var17);
    var6.label = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var6.icon = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginEnd = var10;
    var6.iconMargin = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/PremiumFeatureList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var6 = var0.features;
        var5 = var0.style;
        var1 = var0.separator;
        var _closure2_slot0 = var1;
        var1 = var0.iconStyle;
        var _closure2_slot1 = var1;
        var1 = var0.labelStyle;
        var _closure2_slot2 = var1;
        var0 = var0.rowStyle;
        var _closure2_slot3 = var0;
        var1 = _closure1_slot6;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot4 = var1;
        var2 = var6.filter;
        var1 = function(arg0) { // Environment: var4
            var0 = arg0;
            var0 = var0.hidden;
            var0 = !var0;
            return var0;
        };
        var6 = var2.bind(var6)(var1);
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = {};
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            _fun61582: for (var _fun61582_ip = 0;;) switch (_fun61582_ip) {
                case 0:
                    var8 = arg0;
                    var4 = arg1;
                    var11 = var8.IconComponent;
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot2;
                    var2 = var0.Fragment;
                    var1 = {};
                    var6 = _closure1_slot3;
                    var5 = {};
                    var13 = _closure2_slot4;
                    var9 = var13.item;
                    var0 = new Array(2);
                    var0[0] = var9;
                    var9 = _closure2_slot3;
                    var0[1] = var9;
                    var5.style = var0;
                    var12 = _closure1_slot4;
                    var9 = {};
                    var0 = 'md';
                    var9.size = var0;
                    var0 = var8.color;
                    var9.color = var0;
                    var14 = var13.iconMargin;
                    var0 = new Array(2);
                    var0[0] = var14;
                    var14 = _closure2_slot1;
                    var0[1] = var14;
                    var9.style = var0;
                    var0 = undefined;
                    var11 = var12.bind(var0)(var11, var9);
                    var9 = new Array(2);
                    var9[0] = var11;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var10 = 7;
                    var10 = var14[var10];
                    var10 = var11.bind(var0)(var10);
                    var10 = var10.FormRow;
                    var11 = var10.Label;
                    var10 = {};
                    var14 = 2;
                    var10.numberOfLines = var14;
                    var14 = var13.label;
                    var13 = new Array(2);
                    var13[0] = var14;
                    var14 = _closure2_slot2;
                    var13[1] = var14;
                    var10.style = var13;
                    var13 = var8.label;
                    var10.text = var13;
                    var10 = var12.bind(var0)(var11, var10);
                    var9[1] = var10;
                    var5.children = var9;
                    var6 = var3.bind(var0)(var6, var5, var4);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = _closure2_slot0;
                    var9 = null;
                    var10 = var9 != var6;
                    var6 = null;
                    if (!var10) {
                        _fun61582_ip = 284;
                        continue _fun61582
                    }
                case 253:
                    var11 = _closure2_slot0;
                    var10 = '';
                    var6 = null;
                    if (!(var10 !== var11)) {
                        _fun61582_ip = 284;
                        continue _fun61582
                    }
                case 267:
                    var8 = var8.renderSeparatorBelow;
                    var6 = null;
                    if (!var8) {
                        _fun61582_ip = 284;
                        continue _fun61582
                    }
                case 280:
                    var6 = _closure2_slot0;
                case 284:
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 4645, 671, 5340, 2]);