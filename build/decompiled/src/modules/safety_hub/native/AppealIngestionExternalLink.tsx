// modules/safety_hub/native/AppealIngestionExternalLink.tsx
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.childButton = var8;
    var8 = {
        'minHeight': 60,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'backgroundColor': null,
        'paddingVertical': 16,
        'paddingStart': 16,
        'paddingEnd': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.childContainer = var8;
    var8 = {
        'flex': 1,
        'lineHeight': 20
    };
    var3.childButtonText = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var9;
    var3.chevron = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/AppealIngestionExternalLink.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppealIngestionExternalLink, environment: var1
        var0 = arg0;
        var11 = var0.text;
        var1 = var0.url;
        var _closure2_slot0 = var1;
        var0 = var0.onPress;
        var _closure2_slot1 = var0;
        var0 = _closure1_slot6;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 5;
        var0 = var13[var0];
        var0 = var12.bind(var3)(var0);
        var1 = var0.PressableHighlight;
        var0 = {};
        var5 = var10.childButton;
        var0.style = var5;
        var5 = 'button';
        var0.accessibilityRole = var5;
        var4 = function() { // Original name: onPress, environment: var4
            _fun79511: for (var _fun79511_ip = 0;;) switch (_fun79511_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun79511_ip = 23;
                        continue _fun79511
                    }
                case 13:
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                case 23:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openURL;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.onPress = var4;
        var6 = _closure1_slot5;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var10.childContainer;
        var4.style = var7;
        var7 = 7;
        var7 = var13[var7];
        var7 = var12.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'style': null,
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = var10.childButtonText;
        var7.style = var14;
        var7.children = var11;
        var9 = var2.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var9 = _closure1_slot1;
        var8 = 8;
        var8 = var13[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var11 = 9;
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var8.source = var11;
        var10 = var10.chevron;
        var10 = var10.color;
        var8.color = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4864, 3103, 3901, 4045, 6464, 2]);