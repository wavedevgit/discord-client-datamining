// modules/saved_messages/native/ForLaterOpenActionButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103062: for (var _fun103062_ip = 0;;) switch (_fun103062_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.showRedDot;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var3 = undefined;
                var0 = var6.bind(var3)(var0);
                var5 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = 9;
                var0 = var7[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useToken;
                var0 = 7;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.INTERACTIVE_TEXT_DEFAULT;
                var16 = var1.bind(var2)(var0, var5);
                var0 = _closure1_slot10;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var12.container;
                var0.style = var5;
                if (var4) {
                    _fun103062_ip = 174;
                    continue _fun103062
                }
            case 119:
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BookmarkIcon;
                var4 = {};
                var7 = 'sm';
                var4.size = var7;
                var4.color = var16;
                var4 = var6.bind(var3)(var5, var4);
                _fun103062_ip = 331;
                continue _fun103062;
            case 174:
                var7 = _closure1_slot8;
                var6 = _closure1_slot7;
                var5 = {};
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 4;
                var8 = var17[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var14 = _closure1_slot9;
                var13 = new Array(1);
                var13[0] = var14;
                var8.cutouts = var13;
                var15 = _closure1_slot6;
                var14 = _closure1_slot0;
                var13 = 10;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.BookmarkIcon;
                var13 = {};
                var17 = 'sm';
                var13.size = var17;
                var13.color = var16;
                var13 = var15.bind(var3)(var14, var13);
                var8.children = var13;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var12.dot;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 331:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var7 = var3.Fragment;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CutoutShape;
    var7 = var7.Circle;
    var3.shape = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ICON_SIZE;
    var8 = var7.sm;
    var7 = 9;
    var7 = var8 - var7;
    var3.x = var7;
    var7 = -1;
    var3.y = var7;
    var7 = 10;
    var3.size = var7;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 18,
        'width': 18,
        'aspectRatio': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'position': 'relative'
    };
    var3.container = var9;
    var9 = {
        'position': 'absolute',
        'height': 6.5,
        'width': 6.5,
        'backgroundColor': null,
        'borderRadius': null,
        'right': 1,
        'top': 0.7
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_NOTIFICATION;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9.borderRadius = var10;
    var3.dot = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var1 = arg0;
        var6 = var1.onOpen;
        var _closure2_slot0 = var6;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 11;
        var1 = var11[var2];
        var3 = undefined;
        var12 = var10.bind(var3)(var1);
        var9 = var12.useStateFromStores;
        var1 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var1;
        var5 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.hasOverdueReminder;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = new Array(0);
        var13 = var9.bind(var12)(var7, var5, var4);
        var2 = var11[var2];
        var5 = var10.bind(var3)(var2);
        var4 = var5.useStateFromStores;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getSavedMessageCount;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var4.bind(var5)(var2, var1);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun103066: for (var _fun103066_ip = 0;;) switch (_fun103066_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot1;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun103066_ip = 108;
                        continue _fun103066
                    }
                case 23:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    if (var2) {
                        _fun103066_ip = 108;
                        continue _fun103066
                    }
                case 53:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var1 = 14;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.EntitlementFeatureNames;
                    var1 = var1.SAVED_MESSAGES;
                    var1 = var2.bind(var0)(var1);
                    _fun103066_ip = 200;
                    continue _fun103066;
                case 108:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 15;
                    var3 = var1[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.pushLazy;
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 16;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var1 = 'modal';
                    var3.presentation = var1;
                    var9 = {};
                    var8 = 'for-later-modal';
                    var11 = var6;
                    var7 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                case 200:
                    return var0;
            }
        };
        var7 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = arg1;
        var0.ref = var4;
        var6 = _closure1_slot6;
        var4 = 18;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.IconButton;
        var4 = {
            'variant': 'tertiary',
            'size': 'sm'
        };
        var12 = _closure1_slot6;
        var9 = _closure1_slot11;
        var8 = {};
        var8.showRedDot = var13;
        var8 = var12.bind(var3)(var9, var8);
        var4.icon = var8;
        var4.onPress = var7;
        var7 = 19;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["2pAkDA"];
        var7 = var8.bind(var9)(var7);
        var4.accessibilityLabel = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/ForLaterOpenActionButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9639, 33, 5457, 13463, 1297, 671, 3246, 3151, 9655, 566, 9642, 7618, 7620, 4561, 9644, 1307, 7508, 1234, 2]);