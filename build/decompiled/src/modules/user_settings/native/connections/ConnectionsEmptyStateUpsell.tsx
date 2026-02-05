// modules/user_settings/native/connections/ConnectionsEmptyStateUpsell.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun82744: for (var _fun82744_ip = 0;;) switch (_fun82744_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.platform;
                var _closure2_slot0 = var10;
                var1 = _closure1_slot8;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var _closure2_slot1 = var9;
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var2 = {};
                    var4 = _closure2_slot0;
                    var6 = var4.type;
                    var2.platformType = var6;
                    var6 = _closure1_slot5;
                    var6 = var6.CONNECTIONS_EMPTY_STATE;
                    var2.location = var6;
                    var2 = var5.bind(var0)(var2);
                    var2 = _closure1_slot0;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackEmptyStateCardClicked;
                    var1 = {};
                    var4 = var4.type;
                    var1.platformType = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var4.bind(var6)(var1, var2);
                var1 = _closure1_slot0;
                var2 = 9;
                var2 = var5[var2];
                var8 = var1.bind(var3)(var2);
                var6 = var8.getConnectionBackgroundColor;
                var2 = var10.type;
                var14 = var6.bind(var8)(var2);
                var _closure2_slot2 = var14;
                var8 = _closure1_slot3;
                var6 = var8.useMemo;
                var2 = new Array(5);
                var2[0] = var14;
                var11 = var10.icon;
                var11 = var11.darkPNG;
                var2[1] = var11;
                var11 = var10.icon;
                var11 = var11.lightPNG;
                var2[2] = var11;
                var11 = var10.icon;
                var11 = var11.whitePNG;
                var2[3] = var11;
                var2[4] = var9;
                var0 = function() { // Environment: var0
                    _fun82746: for (var _fun82746_ip = 0;;) switch (_fun82746_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.makeSource;
                            var6 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 == var6)) {
                                _fun82746_ip = 107;
                                continue _fun82746
                            }
                        case 44:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 11;
                            var0 = var6[var0];
                            var5 = var4.bind(var5)(var0);
                            var4 = var5.isThemeDark;
                            var0 = _closure2_slot1;
                            var0 = var4.bind(var5)(var0);
                            var4 = _closure2_slot0;
                            var4 = var4.icon;
                            if (var0) {
                                _fun82746_ip = 99;
                                continue _fun82746
                            }
                        case 91:
                            var0 = var4.lightPNG;
                            _fun82746_ip = 105;
                            continue _fun82746;
                        case 99:
                            var0 = var4.darkPNG;
                        case 105:
                            _fun82746_ip = 122;
                            continue _fun82746;
                        case 107:
                            var3 = _closure2_slot0;
                            var3 = var3.icon;
                            var0 = var3.whitePNG;
                        case 122:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var11 = var6.bind(var8)(var0, var2);
                var2 = _closure1_slot6;
                var0 = 12;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var0.onPress = var4;
                var4 = var12.card;
                var0.style = var4;
                var4 = 'strong';
                var0.border = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var12.iconContainer;
                var8 = new Array(2);
                var8[0] = var9;
                var13 = var10.color;
                var9 = null;
                var9 = var9 != var13;
                if (!var9) {
                    _fun82744_ip = 295;
                    continue _fun82744
                }
            case 286:
                var13 = {};
                var13.backgroundColor = var14;
                var9 = var13;
            case 295:
                var8[1] = var9;
                var4.style = var8;
                var9 = _closure1_slot6;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 13;
                var7 = var13[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var12 = var12.icon;
                var7.style = var12;
                var7.source = var11;
                var11 = 'contain';
                var7.resizeMode = var11;
                var11 = true;
                var7.disableColor = var11;
                var10 = var10.name;
                var7.accessibilityLabel = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.count;
        var0 = _closure1_slot8;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 14;
            var3 = var1[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.openLazy;
            var5 = _closure1_slot0;
            var2 = 16;
            var2 = var1[var2];
            var5 = var5.bind(var0)(var2);
            var2 = 15;
            var2 = var1[var2];
            var1 = var1.paths;
            var2 = var5.bind(var0)(var2, var1);
            var1 = 'AddConnection';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = new Array(0);
        var8 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 12;
        var0 = var7[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Card;
        var0 = {};
        var0.onPress = var8;
        var6 = var6.card;
        var0.style = var6;
        var6 = 'strong';
        var0.border = var6;
        var6 = _closure1_slot6;
        var4 = 17;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-md/medium',
            'color': 'interactive-text-default'
        };
        var7 = global;
        var7 = var7.HermesInternal;
        var8 = var7.concat;
        var7 = '+';
        var7 = var8.bind(var7)(var9);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsLocations;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var2 = 'center';
        var1 = {
            'flex': 1,
            'alignItems': 'center'
        };
        var0.container = var1;
        var1 = {
            'flex': 1,
            'width': '100%',
            'maxWidth': 260,
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var0.content = var1;
        var1 = {
            'flex': 1,
            'maxHeight': 76,
            'maxWidth': 76,
            'aspectRatio': 1,
            'alignItems': 'center',
            'justifyContent': 'center',
            'padding': 12
        };
        var0.card = var1;
        var1 = {};
        var3 = 32;
        var1.marginTop = var3;
        var0.textContainer = var1;
        var1 = {};
        var1.textAlign = var2;
        var0.text = var1;
        var1 = {
            'flex': 1,
            'maxHeight': 52,
            'maxWidth': 52,
            'aspectRatio': 1,
            'borderRadius': null,
            'alignItems': 'center',
            'justifyContent': 'center',
            'padding': 8
        };
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.radii;
        var2 = var2.round;
        var1.borderRadius = var2;
        var0.iconContainer = var1;
        var1 = {
            'flex': 1,
            'aspectRatio': 1
        };
        var0.icon = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/ConnectionsEmptyStateUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var0 = 18;
        var0 = var18[var0];
        var1 = var17.bind(var3)(var0);
        var0 = var1.useEmptyStatePlatforms;
        var21 = var0.bind(var1)();
        var _closure2_slot0 = var21;
        var4 = _closure1_slot3;
        var2 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var21;
        var0 = function() { // Environment: var14
            var3 = _closure2_slot0;
            var2 = var3.slice;
            var1 = 0;
            var0 = 3;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var22 = var2.bind(var4)(var0, var1);
        var4 = _closure1_slot3;
        var2 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var21;
        var0 = function() { // Environment: var14
            var3 = _closure2_slot0;
            var2 = var3.slice;
            var1 = 3;
            var0 = 5;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var19 = var2.bind(var4)(var0, var1);
        var1 = _closure1_slot1;
        var0 = 19;
        var0 = var18[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var6 = var0.bottom;
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var15.container;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var5.paddingBottom = var6;
        var4[1] = var5;
        var0.style = var4;
        var6 = _closure1_slot7;
        var5 = _closure1_slot4;
        var4 = {};
        var7 = var15.content;
        var4.style = var7;
        var8 = 20;
        var7 = var18[var8];
        var7 = var17.bind(var3)(var7);
        var9 = var7.Stack;
        var7 = {
            'spacing': 16,
            'direction': 'vertical',
            'align': 'center'
        };
        var10 = var15.textContainer;
        var7.style = var10;
        var13 = _closure1_slot6;
        var10 = var18[var8];
        var10 = var17.bind(var3)(var10);
        var11 = var10.Stack;
        var10 = {
            'spacing': 16,
            'justify': 'center',
            'direction': 'horizontal'
        };
        var20 = var22.map;
        var16 = function(arg0) { // Environment: var14
            var0 = arg0;
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var2.platform = var0;
            var1 = var0.type;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var16 = var20.bind(var22)(var16);
        var10.children = var16;
        var11 = var13.bind(var3)(var11, var10);
        var10 = new Array(2);
        var10[0] = var11;
        var11 = var18[var8];
        var11 = var17.bind(var3)(var11);
        var13 = var11.Stack;
        var11 = {
            'spacing': 16,
            'justify': 'center',
            'direction': 'horizontal'
        };
        var16 = var19.map;
        var14 = function(arg0) { // Environment: var14
            var0 = arg0;
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var2.platform = var0;
            var1 = var0.type;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var16 = var16.bind(var19)(var14);
        var14 = new Array(2);
        var14[0] = var16;
        var20 = _closure1_slot6;
        var19 = _closure1_slot10;
        var16 = {};
        var22 = var21.length;
        var21 = 5;
        var21 = var22 - var21;
        var16.count = var21;
        var16 = var20.bind(var3)(var19, var16);
        var14[1] = var16;
        var11.children = var14;
        var11 = var6.bind(var3)(var13, var11);
        var10[1] = var11;
        var7.children = var10;
        var9 = var6.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var8 = var18[var8];
        var8 = var17.bind(var3)(var8);
        var9 = var8.Stack;
        var8 = {
            'spacing': 8,
            'align': 'center'
        };
        var10 = var15.textContainer;
        var8.style = var10;
        var16 = _closure1_slot6;
        var11 = 17;
        var10 = var18[var11];
        var10 = var17.bind(var3)(var10);
        var13 = var10.Text;
        var10 = {
            'variant': 'text-lg/bold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = var15.text;
        var10.style = var14;
        var14 = 21;
        var19 = var18[var14];
        var19 = var17.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var18[var14];
        var19 = var17.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.JlrHXb;
        var19 = var20.bind(var21)(var19);
        var10.children = var19;
        var13 = var16.bind(var3)(var13, var10);
        var10 = new Array(2);
        var10[0] = var13;
        var13 = _closure1_slot6;
        var11 = var18[var11];
        var11 = var17.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var15 = var15.text;
        var11.style = var15;
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.XijaQP;
        var14 = var15.bind(var16)(var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var10[1] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 3246, 5322, 10610, 10611, 1417, 3206, 4902, 4086, 3278, 10607, 1307, 3941, 4518, 1568, 4080, 1234, 2]);