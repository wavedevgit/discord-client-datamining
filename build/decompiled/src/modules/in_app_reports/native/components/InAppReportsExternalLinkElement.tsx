// modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
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
    var12 = 1;
    var3 = var5[var12];
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
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'paddingHorizontal': 16
    };
    var3.linksContainer = var8;
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var10 = 4;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var3.button = var8;
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
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var3.container = var8;
    var8 = {};
    var8.flex = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.marginRight = var12;
    var3.buttonTextContainer = var8;
    var8 = {};
    var12 = 20;
    var8.lineHeight = var12;
    var3.buttonText = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var10;
    var3.linkIcon = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.headerText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        _fun92705: for (var _fun92705_ip = 0;;) switch (_fun92705_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.data;
                var1 = var0.url;
                var _closure2_slot0 = var1;
                var13 = var0.link_text;
                var16 = var0.link_description;
                var1 = var0.is_localized;
                var0 = _closure1_slot6;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var14 = null;
                var0 = null;
                if (!var1) {
                    _fun92705_ip = 420;
                    continue _fun92705
                }
            case 64:
                var3 = _closure1_slot4;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.PressableHighlight;
                var1 = {};
                var6 = var12.button;
                var1.style = var6;
                var6 = 'link';
                var1.accessibilityRole = var6;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openURL;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onPress = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var12.container;
                var5.style = var8;
                var8 = {};
                var15 = var12.buttonTextContainer;
                var8.style = var15;
                var17 = 5;
                var10 = var10[var17];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var12.buttonText;
                var10.style = var15;
                var10.children = var13;
                var11 = var3.bind(var4)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = var14 != var16;
                var11 = null;
                if (!var13) {
                    _fun92705_ip = 286;
                    continue _fun92705
                }
            case 226:
                var13 = '';
                var11 = null;
                if (!(var13 !== var16)) {
                    _fun92705_ip = 286;
                    continue _fun92705
                }
            case 236:
                var15 = _closure1_slot4;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var17];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var13.children = var16;
                var11 = var15.bind(var4)(var14, var13);
            case 286:
                var10[1] = var11;
                var8.children = var10;
                var10 = var7.bind(var4)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot4;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 9;
                var9 = var15[var13];
                var10 = var14.bind(var4)(var9);
                var9 = {};
                var16 = 10;
                var16 = var15[var16];
                var16 = var14.bind(var4)(var16);
                var9.source = var16;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.Sizes;
                var13 = var13.MEDIUM;
                var9.size = var13;
                var12 = var12.linkIcon;
                var12 = var12.color;
                var9.color = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 420:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92707: for (var _fun92707_ip = 0;;) switch (_fun92707_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.elements;
                var0 = _closure1_slot6;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var8)) {
                    _fun92707_ip = 281;
                    continue _fun92707
                }
            case 33:
                var2 = var8.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun92707_ip = 281;
                    continue _fun92707
                }
            case 47:
                var2 = var8.find;
                var1 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var0 = var0.data;
                    var0 = var0.is_localized;
                    return var0;
                };
                var1 = var2.bind(var8)(var1);
                if (!(var0 != var1)) {
                    _fun92707_ip = 281;
                    continue _fun92707
                }
            case 71:
                var2 = var8.some;
                var1 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var0 = var0.data;
                    var0 = var0.is_header_hidden;
                    return var0;
                };
                var7 = var2.bind(var8)(var1);
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var9 = var11.linksContainer;
                var1.style = var9;
                var7 = !var7;
                if (!var7) {
                    _fun92707_ip = 240;
                    continue _fun92707
                }
            case 118:
                var10 = _closure1_slot4;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 5;
                var5 = var15[var5];
                var5 = var14.bind(var4)(var5);
                var9 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'heading-deprecated-12/extrabold',
                    'color': 'text-default'
                };
                var11 = var11.headerText;
                var5.style = var11;
                var11 = 6;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.hvVgAZ;
                var12 = var12.bind(var13)(var11);
                var11 = var12.toUpperCase;
                var11 = var11.bind(var12)();
                var5.children = var11;
                var7 = var10.bind(var4)(var9, var5);
            case 240:
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    var0 = arg0;
                    var0 = var0.data;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var2.data = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var1 = 'external-link-';
                    var0 = arg1;
                    var1 = var5.bind(var1)(var0);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 281:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3943, 1234, 4905, 3146, 4087, 5786, 2]);