// modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: FamilyCenterAcceptedLinkRow, environment: var1
        _fun81913: for (var _fun81913_ip = 0;;) switch (_fun81913_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.otherUser;
                var _closure2_slot0 = var17;
                var0 = _closure1_slot9;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var15 = null;
                var0 = null;
                if (!(var4 !== var17)) {
                    _fun81913_ip = 304;
                    continue _fun81913
                }
            case 39:
                var3 = _closure1_slot6;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 13;
                var1 = var16[var1];
                var2 = var12.bind(var4)(var1);
                var1 = {};
                var1.otherUser = var17;
                var7 = _closure1_slot6;
                var13 = _closure1_slot0;
                var5 = 14;
                var5 = var16[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var11 = 'button';
                var5.accessibilityRole = var11;
                var11 = 9;
                var11 = var16[var11];
                var11 = var13.bind(var4)(var11);
                var14 = var11.intl;
                var13 = var14.formatToPlainString;
                var11 = 10;
                var11 = var16[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.T7DUoU;
                var11 = {};
                var16 = var15 == var17;
                var15 = undefined;
                if (var16) {
                    _fun81913_ip = 168;
                    continue _fun81913
                }
            case 159:
                var16 = var17.toString;
                var15 = var16.bind(var17)();
            case 168:
                var11.name = var15;
                var11 = var13.bind(var14)(var12, var11);
                var5.accessibilityLabel = var11;
                var10 = function() { // Original name: onPress, environment: var10
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var3 = var1[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 17;
                    var2 = var1[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = 16;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var0)(var2, var1);
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.otherUser = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5.onPress = var10;
                var9 = var9.actionButton;
                var5.style = var9;
                var10 = _closure1_slot6;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 18;
                var8 = var13[var11];
                var9 = var12.bind(var4)(var8);
                var8 = {};
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.SMALL;
                var8.size = var11;
                var11 = true;
                var8.disableColor = var11;
                var11 = 19;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var8.source = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.actions = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 304:
                return var0;
        }
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS;
    var _closure1_slot4 = var6;
    var3 = var3.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var6 = 4;
    var3 = var5[var6];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var7 = {};
    var3 = {};
    var10 = 24;
    var3.marginTop = var10;
    var7.container = var3;
    var3 = {
        'display': 'flex',
        'justifyContent': 'center'
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var3.borderRadius = var12;
    var7.content = var3;
    var3 = 20;
    var12 = {
        'padding': 20,
        'alignSelf': 'center'
    };
    var7.empty = var12;
    var12 = {};
    var13 = 10;
    var12.marginBottom = var13;
    var7.header = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'backgroundColor': null,
        'tintColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': 32,
        'width': 32
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var6.actionButton = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: FamilyCenterAcceptedLinks, environment: var1
        _fun81915: for (var _fun81915_ip = 0;;) switch (_fun81915_ip) {
            case 0:
                var0 = _closure1_slot8;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useActiveLinkUsers;
                var9 = var1.bind(var2)();
                if (var0) {
                    _fun81915_ip = 72;
                    continue _fun81915
                }
            case 66:
                var0 = _closure1_slot5;
                _fun81915_ip = 76;
                continue _fun81915;
            case 72:
                var0 = _closure1_slot4;
            case 76:
                var10 = {};
                var1 = var9.length;
                var10.count = var1;
                var10.max = var0;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useAgeSpecificText;
                var15 = 9;
                var0 = var8[var15];
                var0 = var5.bind(var3)(var0);
                var6 = var0.intl;
                var1 = var6.formatToPlainString;
                var12 = _closure1_slot1;
                var18 = 10;
                var0 = var8[var18];
                var0 = var12.bind(var3)(var0);
                var0 = var0["+tnO34"];
                var1 = var1.bind(var6)(var0, var10);
                var0 = var8[var15];
                var0 = var5.bind(var3)(var0);
                var7 = var0.intl;
                var6 = var7.formatToPlainString;
                var0 = var8[var18];
                var0 = var12.bind(var3)(var0);
                var0 = var0["pu6/U0"];
                var0 = var6.bind(var7)(var0, var10);
                var7 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var6 = _closure1_slot6;
                var4 = 11;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var8 = var11.header;
                var4.style = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var7 = var11.content;
                var5.style = var7;
                var8 = var9.length;
                var7 = 0;
                if (!(var7 !== var8)) {
                    _fun81915_ip = 348;
                    continue _fun81915
                }
            case 327:
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var2.otherUser = var0;
                    var5 = var0.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'accepted-';
                    var1 = var1.bind(var0)(var5);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                _fun81915_ip = 459;
                continue _fun81915;
            case 348:
                var10 = _closure1_slot6;
                var9 = _closure1_slot3;
                var8 = {};
                var11 = var11.empty;
                var8.style = var11;
                var13 = _closure1_slot6;
                var17 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 12;
                var11 = var14[var11];
                var12 = var17.bind(var3)(var11);
                var11 = {};
                var16 = _closure1_slot0;
                var15 = var14[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.C4ScLD;
                var14 = var15.bind(var16)(var14);
                var11.text = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 459:
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4551, 33, 1297, 671, 6468, 6467, 10393, 1234, 1849, 3895, 10437, 10439, 4858, 4518, 10442, 1307, 4039, 10444, 2]);