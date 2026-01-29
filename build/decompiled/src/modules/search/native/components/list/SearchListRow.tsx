// modules/search/native/components/list/SearchListRow.tsx
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_ROW_TAP_STATE_PADDING;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 16;
        var1.paddingHorizontal = var2;
        var2 = _closure1_slot4;
        var1.paddingVertical = var2;
        var0.pressable = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var0.body = var1;
        var2 = 1;
        var1 = {
            'justifyContent': 'center',
            'flex': 1
        };
        var0.labels = var1;
        var1 = {};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.colors;
        var3 = var3.INTERACTIVE_BACKGROUND_ACTIVE;
        var1.backgroundColor = var3;
        var0.underlayColor = var1;
        var1 = {};
        var1.flexShrink = var2;
        var0.text = var1;
        var1 = {};
        var2 = 12;
        var1.marginRight = var2;
        var0.iconContainer = var1;
        var1 = {};
        var2 = arg0;
        var1.marginLeft = var2;
        var0.extrasContainer = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun105789: for (var _fun105789_ip = 0;;) switch (_fun105789_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.containerStyle;
                var4 = var0.onPress;
                var19 = var0.label;
                var15 = var0.subLabel;
                var14 = var0.icon;
                var17 = var0.iconContainerStyle;
                var2 = var0.iconWidth;
                var12 = var0.trailing;
                var9 = var0.extras;
                var7 = var0.header;
                var21 = var0.accessible;
                var3 = undefined;
                if (!(var21 === var3)) {
                    _fun105789_ip = 72;
                    continue _fun105789
                }
            case 70:
                var21 = true;
            case 72:
                var20 = var0.accessibilityRole;
                if (!(var20 === var3)) {
                    _fun105789_ip = 85;
                    continue _fun105789
                }
            case 81:
                var20 = 'button';
            case 85:
                var18 = var0.accessibilityLabel;
                var16 = var0.accessibilityActions;
                var8 = var0.onAccessibilityAction;
                var13 = var0.bodyStyle;
                var1 = _closure1_slot7;
                var5 = null;
                var10 = var5 != var2;
                var0 = 0;
                if (!var10) {
                    _fun105789_ip = 129;
                    continue _fun105789
                }
            case 126:
                var0 = var2;
            case 129:
                var10 = var1.bind(var3)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 6;
                var0 = var22[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var0.accessible = var21;
                var0.accessibilityRole = var20;
                var0.accessibilityLabel = var18;
                var0.accessibilityActions = var16;
                var0.onAccessibilityAction = var8;
                var16 = var10.pressable;
                var8 = new Array(2);
                var8[0] = var16;
                var8[1] = var11;
                var0.style = var8;
                var0.onPress = var4;
                var4 = 130;
                var0.unstable_pressDelay = var4;
                var4 = var10.underlayColor;
                var4 = var4.backgroundColor;
                var0.underlayColor = var4;
                var4 = new Array(3);
                var4[0] = var7;
                var8 = _closure1_slot3;
                var7 = {};
                var16 = var10.body;
                var11 = new Array(2);
                var11[0] = var16;
                var11[1] = var13;
                var7.style = var11;
                var13 = _closure1_slot5;
                var11 = {};
                var18 = var10.iconContainer;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var17;
                var11.style = var16;
                var11.children = var14;
                var13 = var13.bind(var3)(var8, var11);
                var11 = new Array(3);
                var11[0] = var13;
                var13 = {};
                var14 = var10.labels;
                var13.style = var14;
                var17 = 'string';
                var14 = typeof var19;
                var16 = var19;
                if (!(var17 === var14)) {
                    _fun105789_ip = 407;
                    continue _fun105789
                }
            case 345:
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 7;
                var14 = var20[var14];
                var14 = var17.bind(var3)(var14);
                var17 = var14.Text;
                var14 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var10.text;
                var14.style = var20;
                var14.children = var19;
                var16 = var18.bind(var3)(var17, var14);
            case 407:
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var13.children = var14;
                var13 = var2.bind(var3)(var8, var13);
                var11[1] = var13;
                var11[2] = var12;
                var7.children = var11;
                var7 = var2.bind(var3)(var8, var7);
                var4[1] = var7;
                var5 = var5 != var9;
                if (!var5) {
                    _fun105789_ip = 496;
                    continue _fun105789
                }
            case 458:
                var8 = _closure1_slot5;
                var7 = _closure1_slot3;
                var6 = {};
                var11 = var10.extrasContainer;
                var10 = new Array(1);
                var10[0] = var11;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 496:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/SearchListRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SearchListRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8857, 33, 1297, 671, 4858, 3895, 2]);