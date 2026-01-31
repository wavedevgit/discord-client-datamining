// design/components/TagListInput/native/TagListInputTag.native.tsx
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
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var12 = 2;
    var3 = var5[var12];
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
    var9 = 4;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var8.marginHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.paddingVertical = var12;
    var12 = 'hidden';
    var8.overflow = var12;
    var12 = 'row';
    var8.flexDirection = var12;
    var12 = 'center';
    var8.alignItems = var12;
    var3.tagWrapper = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_500;
    var8.backgroundColor = var12;
    var3.highlightedTagWrapper = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.paddingRight = var12;
    var8.marginLeft = var11;
    var3.tagIcon = var8;
    var8 = {};
    var8.marginLeft = var11;
    var3.start = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginRight = var9;
    var3.end = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TagListInput/native/TagListInputTag.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TagListInputTagComponent, environment: var1
        _fun65662: for (var _fun65662_ip = 0;;) switch (_fun65662_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.tag;
                var10 = var0.selected;
                var1 = var0.onPress;
                var _closure2_slot0 = var1;
                var15 = var0.start;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun65662_ip = 38;
                    continue _fun65662
                }
            case 36:
                var15 = false;
            case 38:
                var14 = var0.end;
                if (!(var14 === var3)) {
                    _fun65662_ip = 49;
                    continue _fun65662
                }
            case 47:
                var14 = false;
            case 49:
                var0 = _closure1_slot6;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 5;
                var2 = var12[var0];
                var2 = var1.bind(var3)(var2);
                var6 = var2.intl;
                var4 = var6.formatToPlainString;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var2 = var0["0Vb9FQ"];
                var0 = {};
                var7 = var8.text;
                var0.text = var7;
                var7 = var4.bind(var6)(var2, var0);
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var12[var0];
                var2 = var2.bind(var3)(var0);
                var0 = function() { // Environment: var9
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = 'remove';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var7);
                var4 = var0.onAccessibilityAction;
                var6 = var0.accessibilityActions;
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var13 = var11.tagWrapper;
                var12 = new Array(4);
                var12[0] = var13;
                var13 = undefined;
                if (!var10) {
                    _fun65662_ip = 219;
                    continue _fun65662
                }
            case 213:
                var13 = var11.highlightedTagWrapper;
            case 219:
                var12[1] = var13;
                var13 = undefined;
                if (!var15) {
                    _fun65662_ip = 233;
                    continue _fun65662
                }
            case 228:
                var13 = var11.start;
            case 233:
                var12[2] = var13;
                var13 = undefined;
                if (!var14) {
                    _fun65662_ip = 247;
                    continue _fun65662
                }
            case 242:
                var13 = var11.end;
            case 247:
                var12[3] = var13;
                var0.style = var12;
                var9 = function() { // Original name: onPress, environment: var9
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = 'select';
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.onPress = var9;
                var9 = 'button';
                var0.accessibilityRole = var9;
                var0.accessibilityLabel = var7;
                var0.accessibilityActions = var6;
                var0.onAccessibilityAction = var4;
                var4 = var8.icon;
                var6 = null;
                var4 = var6 != var4;
                if (!var4) {
                    _fun65662_ip = 337;
                    continue _fun65662
                }
            case 302:
                var9 = _closure1_slot4;
                var7 = _closure1_slot3;
                var4 = {};
                var11 = var11.tagIcon;
                var4.style = var11;
                var11 = var8.icon;
                var4.children = var11;
                var6 = var9.bind(var3)(var7, var4);
            case 337:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'lineClamp': 1,
                    'variant': 'text-sm/medium'
                };
                var9 = 'text-default';
                if (!var10) {
                    _fun65662_ip = 403;
                    continue _fun65662
                }
            case 397:
                var9 = 'always-white';
            case 403:
                var5.color = var9;
                var8 = var8.text;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TagListInputTagComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1234, 8106, 4865, 3900, 2]);