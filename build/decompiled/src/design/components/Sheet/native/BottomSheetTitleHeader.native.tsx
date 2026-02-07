// design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun46963: for (var _fun46963_ip = 0;;) switch (_fun46963_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.title;
                var12 = var0.subtitle;
                var0 = _closure1_slot8;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var7.container;
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var7.titles;
                var4.style = var7;
                var10 = _closure1_slot6;
                var8 = _closure1_slot14;
                var7 = {};
                var13 = 2;
                var7.lineClamp = var13;
                var7.children = var11;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                var10 = var8 != var12;
                if (!var10) {
                    _fun46963_ip = 131;
                    continue _fun46963
                }
            case 111:
                var11 = _closure1_slot6;
                var10 = _closure1_slot15;
                var9 = {};
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 131:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun46964: for (var _fun46964_ip = 0;;) switch (_fun46964_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.title;
                var13 = var0.subtitle;
                var14 = var0.leading;
                var15 = var0.trailing;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var0 = _closure1_slot9;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var8.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var16.container;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var16.accessories;
                var4.style = var7;
                var11 = _closure1_slot6;
                var9 = _closure1_slot5;
                var7 = {};
                var17 = var16.item;
                var7.style = var17;
                var7.children = var14;
                var9 = var11.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var14 = _closure1_slot6;
                var11 = _closure1_slot5;
                var9 = {};
                var16 = var16.item;
                var9.style = var16;
                var9.children = var15;
                var9 = var14.bind(var3)(var11, var9);
                var7[1] = var9;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.titles;
                var5.style = var8;
                var11 = _closure1_slot6;
                var9 = _closure1_slot14;
                var8 = {};
                var14 = 1;
                var8.lineClamp = var14;
                var8.children = var12;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                var11 = var9 != var13;
                if (!var11) {
                    _fun46964_ip = 276;
                    continue _fun46964
                }
            case 256:
                var12 = _closure1_slot6;
                var11 = _closure1_slot15;
                var10 = {};
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 276:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun46965: for (var _fun46965_ip = 0;;) switch (_fun46965_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.title;
                var20 = var1.subtitle;
                var13 = var1.leading;
                var8 = var1.trailing;
                var19 = var1.onTitleTextLayout;
                var1 = _closure1_slot8;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var1 = _closure1_slot10;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var2 = var1.width;
                var1 = 32;
                var2 = var2 - var1;
                var1 = 4;
                var11 = var2 / var1;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var4 = var1.bind(var2)(var3);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var15 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot0 = var1;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun46967: for (var _fun46967_ip = 0;;) switch (_fun46967_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = global;
                                var3 = var1.Math;
                                var2 = var3.max;
                                var1 = null;
                                var4 = var1 != var0;
                                var1 = 0;
                                if (!var4) {
                                    _fun46967_ip = 30;
                                    continue _fun46967
                                }
                            case 27:
                                var1 = var0;
                            case 30:
                                var0 = _closure3_slot0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var9 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot5;
                var4 = {};
                var12 = {};
                var12.width = var15;
                var4.style = var12;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(5);
                var4[0] = var6;
                var12 = _closure1_slot7;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = var14.titles;
                var6.style = var14;
                var17 = _closure1_slot6;
                var16 = _closure1_slot14;
                var14 = {};
                var14.onTextLayout = var19;
                var19 = 3;
                var14.lineClamp = var19;
                var14.children = var18;
                var16 = var17.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var16 = null;
                var17 = var16 != var20;
                if (!var17) {
                    _fun46965_ip = 311;
                    continue _fun46965
                }
            case 291:
                var19 = _closure1_slot6;
                var18 = _closure1_slot15;
                var17 = {};
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 311:
                var14[1] = var16;
                var6.children = var14;
                var6 = var12.bind(var3)(var7, var6);
                var4[1] = var6;
                var12 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = {};
                var14.width = var15;
                var6.style = var14;
                var6 = var12.bind(var3)(var7, var6);
                var4[2] = var6;
                var12 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var6.onLayout = var9;
                var15 = var10.accessory;
                var14 = new Array(3);
                var14[0] = var15;
                var15 = var10.leading;
                var14[1] = var15;
                var15 = {};
                var15.maxWidth = var11;
                var14[2] = var15;
                var6.style = var14;
                var6.children = var13;
                var6 = var12.bind(var3)(var7, var6);
                var4[3] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot5;
                var5 = {};
                var5.onLayout = var9;
                var12 = var10.accessory;
                var9 = new Array(3);
                var9[0] = var12;
                var10 = var10.trailing;
                var9[1] = var10;
                var10 = {};
                var10.maxWidth = var11;
                var9[2] = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'redesign/heading-18/bold',
            'color': 'mobile-text-heading-primary',
            'accessibilityRole': 'header'
        };
        var4 = var4.title;
        var0.style = var4;
        var6 = arg0;
        var7 = var0;
        var4 = copyDataProperties(var7, var6);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var1 = _closure1_slot8;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 6;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/medium',
            'color': 'text-default',
            'lineClamp': 1
        };
        var5 = var5.subtitle;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
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
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'paddingHorizontal': 16,
            'flexDirection': 'row',
            'gap': 4,
            'position': 'relative'
        };
        var0.container = var1;
        var1 = {
            'flexGrow': 1,
            'flexShrink': 1
        };
        var0.titles = var1;
        var1 = {};
        var2 = 'center';
        var1.textAlign = var2;
        var0.subtitle = var1;
        var1 = {};
        var1.textAlign = var2;
        var0.title = var1;
        return var0;
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 'column';
        var1.flexDirection = var2;
        var0.container = var1;
        var1 = {
            'flexDirection': 'row',
            'justifyContent': 'space-between'
        };
        var0.accessories = var1;
        var1 = {};
        var2 = 0;
        var1.flexShrink = var2;
        var0.item = var1;
        return var0;
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'position': 'absolute',
            'top': 0,
            'bottom': 0,
            'flexShrink': 0,
            'flexDirection': 'row',
            'flexGrow': 1
        };
        var0.accessory = var1;
        var1 = {
            'left': 16,
            'justifyContent': 'flex-start'
        };
        var0.leading = var1;
        var1 = {
            'right': 16,
            'justifyContent': 'flex-end'
        };
        var0.trailing = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/BottomSheetTitleHeader.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun46973: for (var _fun46973_ip = 0;;) switch (_fun46973_ip) {
            case 0:
                var6 = arg0;
                var9 = var6.leading;
                var3 = var6.trailing;
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var0 = false;
                var8 = var1.bind(var4)(var0);
                var4 = _closure1_slot3;
                var5 = undefined;
                var1 = 2;
                var8 = var4.bind(var5)(var8, var1);
                var1 = 0;
                var1 = var8[var1];
                var4 = 1;
                var4 = var8[var4];
                var _closure2_slot0 = var4;
                var4 = null;
                if (!(var4 != var9)) {
                    _fun46973_ip = 86;
                    continue _fun46973
                }
            case 74:
                if (!(var0 !== var9)) {
                    _fun46973_ip = 86;
                    continue _fun46973
                }
            case 78:
                var8 = '';
                if (!(var8 === var9)) {
                    _fun46973_ip = 130;
                    continue _fun46973
                }
            case 86:
                if (!(var4 != var3)) {
                    _fun46973_ip = 102;
                    continue _fun46973
                }
            case 90:
                if (!(var0 !== var3)) {
                    _fun46973_ip = 102;
                    continue _fun46973
                }
            case 94:
                var0 = '';
                if (!(var0 === var3)) {
                    _fun46973_ip = 130;
                    continue _fun46973
                }
            case 102:
                var4 = _closure1_slot6;
                var3 = _closure1_slot11;
                var0 = {};
                var11 = var0;
                var10 = var6;
                var8 = copyDataProperties(var11, var10);
                var0 = var4.bind(var5)(var3, var0);
                _fun46973_ip = 202;
                continue _fun46973;
            case 130:
                var4 = _closure1_slot6;
                if (var1) {
                    _fun46973_ip = 177;
                    continue _fun46973
                }
            case 137:
                var3 = _closure1_slot13;
                var1 = {};
                var11 = var1;
                var10 = var6;
                var8 = copyDataProperties(var11, var10);
                var8 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot0;
                    var0 = var0.lines;
                    var1 = var0.length;
                    var0 = 2;
                    var1 = var1 > var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = 'onTitleTextLayout';
                var1[var7] = var8;
                var1 = var4.bind(var5)(var3, var1);
                _fun46973_ip = 199;
                continue _fun46973;
            case 177:
                var3 = _closure1_slot12;
                var2 = {};
                var11 = var2;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var1 = var4.bind(var5)(var3, var2);
            case 199:
                var0 = var1;
            case 202:
                return var0;
        }
    };
    var2.BottomSheetTitleHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 1464, 4878, 2]);