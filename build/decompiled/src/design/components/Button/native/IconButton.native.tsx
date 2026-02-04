// design/components/Button/native/IconButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun60833: for (var _fun60833_ip = 0;;) switch (_fun60833_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 3;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_4;
                var1.paddingBottom = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_8;
                var1.gap = var2;
                var2 = 'center';
                var1.alignItems = var2;
                var1.alignSelf = var2;
                var4 = arg0;
                var3 = 0;
                if (!var4) {
                    _fun60833_ip = 93;
                    continue _fun60833
                }
            case 90:
                var3 = 1;
            case 93:
                var1.flexGrow = var3;
                var0.labelPressable = var1;
                var1 = {};
                var1.textAlign = var2;
                var0.label = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun60834: for (var _fun60834_ip = 0;;) switch (_fun60834_ip) {
            case 0:
                var4 = arg0;
                var16 = arg1;
                var9 = var4.label;
                var2 = var4.grow;
                var6 = var4.accessibilityLabel;
                var10 = var4.maxFontSizeMultiplier;
                var8 = var4.accessibilityHint;
                var3 = {
                    'label': 0,
                    'grow': 0,
                    'accessibilityLabel': 0,
                    'maxFontSizeMultiplier': 0,
                    'accessibilityHint': 0
                };
                var0 = null;
                var19 = var3;
                var18 = null;
                var1 = silentSetPrototypeOf(var19, var18);
                var19 = {};
                var18 = var4;
                var17 = var3;
                var13 = copyDataProperties(var19, var18, var17);
                var1 = _closure1_slot5;
                var4 = undefined;
                var11 = var1.bind(var4)(var2);
                if (!(var0 == var9)) {
                    _fun60834_ip = 173;
                    continue _fun60834
                }
            case 89:
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.BaseIconButton;
                var0 = {};
                var0.ref = var16;
                var19 = var0;
                var18 = var13;
                var3 = copyDataProperties(var19, var18);
                var3 = 'accessibilityLabel';
                var0[var3] = var6;
                var3 = 'accessibilityHint';
                var0[var3] = var8;
                var3 = 'maxFontSizeMultiplier';
                var0[var3] = var10;
                var0 = var2.bind(var4)(var1, var0);
                _fun60834_ip = 424;
                continue _fun60834;
            case 173:
                var3 = _closure1_slot4;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 4;
                var1 = var12[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.BaseButton;
                var1 = {};
                var14 = var11.labelPressable;
                var1.style = var14;
                var19 = var1;
                var18 = var13;
                var14 = copyDataProperties(var19, var18);
                var15 = 'none';
                var14 = 'variant';
                var1[var14] = var15;
                var14 = 'accessibilityLabel';
                var1[var14] = var6;
                var6 = 'accessibilityHint';
                var1[var6] = var8;
                var8 = _closure1_slot3;
                var5 = 5;
                var5 = var12[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.BaseIconButton;
                var5 = {};
                var5.ref = var16;
                var19 = var5;
                var18 = var13;
                var13 = copyDataProperties(var19, var18);
                var13 = 'accessibilityRole';
                var5[var13] = var15;
                var13 = '';
                var5[var14] = var13;
                var14 = 'lg';
                var13 = 'size';
                var5[var13] = var14;
                var13 = 'maxFontSizeMultiplier';
                var5[var13] = var10;
                var5 = var8.bind(var4)(var6, var5);
                var6 = new Array(2);
                var6[0] = var5;
                var5 = 6;
                var5 = var12[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default'
                };
                var11 = var11.label;
                var5.style = var11;
                var5.maxFontSizeMultiplier = var10;
                var5.children = var9;
                var5 = var8.bind(var4)(var7, var5);
                var6[1] = var5;
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 424:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/IconButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.IconButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4093, 7036, 3941, 2]);