// modules/toast/native/Toast.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun92826: for (var _fun92826_ip = 0;;) switch (_fun92826_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.icon;
                var4 = var0.IconComponent;
                var9 = var0.iconColor;
                var6 = var0.recolorLegacyIcon;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var3 = undefined;
                var7 = var2.bind(var3)(var0);
                var5 = var7.useToken;
                var0 = null;
                var10 = var0 != var9;
                var2 = 'mobile-text-heading-primary';
                if (!var10) {
                    _fun92826_ip = 74;
                    continue _fun92826
                }
            case 71:
                var2 = var9;
            case 74:
                var5 = var5.bind(var7)(var2);
                var2 = {};
                if (var6) {
                    _fun92826_ip = 96;
                    continue _fun92826
                }
            case 84:
                var6 = true;
                var2.disableColor = var6;
                var9 = var2;
                _fun92826_ip = 103;
                continue _fun92826;
            case 96:
                var2.color = var5;
                var9 = var2;
            case 103:
                if (!(var0 == var4)) {
                    _fun92826_ip = 209;
                    continue _fun92826
                }
            case 107:
                var6 = 'function';
                var2 = typeof var8;
                if (!(var6 !== var2)) {
                    _fun92826_ip = 183;
                    continue _fun92826
                }
            case 118:
                var2 = var0 != var8;
                var0 = null;
                if (!var2) {
                    _fun92826_ip = 181;
                    continue _fun92826
                }
            case 127:
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 7;
                var2 = var10[var2];
                var6 = var6.bind(var3)(var2);
                var2 = {};
                var10 = 'contain';
                var2.resizeMode = var10;
                var2.source = var8;
                var12 = var2;
                var11 = var9;
                var9 = copyDataProperties(var12, var11);
                var0 = var7.bind(var3)(var6, var2);
            case 181:
                _fun92826_ip = 207;
                continue _fun92826;
            case 183:
                var7 = _closure1_slot6;
                var6 = _closure1_slot7;
                var2 = {};
                var8 = var8.bind(var3)();
                var2.children = var8;
                var0 = var7.bind(var3)(var6, var2);
            case 207:
                _fun92826_ip = 233;
                continue _fun92826;
            case 209:
                var2 = _closure1_slot6;
                var1 = {};
                var6 = 'sm';
                var1.size = var6;
                var1.color = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 233:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun92827: for (var _fun92827_ip = 0;;) switch (_fun92827_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.content;
                var7 = var0.onTextLayout;
                var0 = _closure1_slot9;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = 'function';
                var0 = typeof var5;
                if (!(var2 !== var0)) {
                    _fun92827_ip = 111;
                    continue _fun92827
                }
            case 38:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.Text;
                var0 = {
                    'onTextLayout': null,
                    'style': null,
                    'lineClamp': 3,
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var0.onTextLayout = var7;
                var7 = var6.contentContainer;
                var0.style = var7;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun92827_ip = 145;
                continue _fun92827;
            case 111:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.contentContainer;
                var1.style = var6;
                var5 = var5.bind(var4)();
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 145:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xxl;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.padding = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingRight = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TOAST_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var8.borderWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.shadows;
    var14 = var11.SHADOW_HIGH;
    var15 = var8;
    var11 = copyDataProperties(var15, var14);
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingLeft = var9;
    var3.multilineContainer = var8;
    var8 = {
        'marginLeft': 8,
        'flexShrink': 1
    };
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/toast/native/Toast.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92828: for (var _fun92828_ip = 0;;) switch (_fun92828_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.icon;
                var12 = var0.iconColor;
                var11 = var0.IconComponent;
                var9 = var0.content;
                var6 = var0.containerStyle;
                var10 = var0.recolorLegacyIcon;
                var0 = _closure1_slot9;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var15 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot0 = var0;
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = var14.container;
                var4 = new Array(3);
                var4[0] = var7;
                var7 = null;
                if (!var15) {
                    _fun92828_ip = 131;
                    continue _fun92828
                }
            case 125:
                var7 = var14.multilineContainer;
            case 131:
                var4[1] = var7;
                var4[2] = var6;
                var0.style = var4;
                var4 = true;
                var0.accessibilityElementsHidden = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot10;
                var4 = {};
                var4.icon = var13;
                var4.iconColor = var12;
                var4.IconComponent = var11;
                var4.recolorLegacyIcon = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot11;
                var5 = {};
                var5.content = var9;
                var8 = function arg0() {
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.lines;
                    var1 = var0.length;
                    var0 = 1;
                    var1 = var1 > var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onTextLayout = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3110, 4045, 3900, 2]);