// modules/reactions/native/useBurstToggleCoachmark.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.upsellImageContainer;
        var0.style = var4;
        var6 = _closure1_slot8;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 9;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.SuperReactionIcon;
        var4 = {};
        var8 = _closure1_slot1;
        var7 = 8;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.WHITE;
        var4.color = var7;
        var7 = 'md';
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DismissibleContent;
    var3 = var3.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'height': 40,
        'width': 40,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.upsellImageContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reactions/native/useBurstToggleCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57424: for (var _fun57424_ip = 0;;) switch (_fun57424_ip) {
            case 0:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var3 = undefined;
                var8 = var2.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var7.bind(var8)(var5, var0);
                var0 = 11;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.isPremium;
                var0 = var0.bind(var2)(var5);
                if (var0) {
                    _fun57424_ip = 87;
                    continue _fun57424
                }
            case 81:
                var7 = new Array(0);
                _fun57424_ip = 102;
                continue _fun57424;
            case 87:
                var2 = _closure1_slot9;
                var0 = new Array(1);
                var0[0] = var2;
                var7 = var0;
            case 102:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var6 = var2.bind(var3)(var0);
                var0 = var6.useSelectedDismissibleContent;
                var7 = var0.bind(var6)(var7);
                var6 = _closure1_slot3;
                var0 = 2;
                var6 = var6.bind(var3)(var7, var0);
                var0 = 0;
                var8 = var6[var0];
                var _closure2_slot0 = var8;
                var0 = 1;
                var0 = var6[var0];
                var _closure2_slot1 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var0;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var4 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var9 = var4.intl;
                    var8 = var9.string;
                    var4 = var7[var2];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.t;
                    var4 = var4.nyYohm;
                    var4 = var8.bind(var9)(var4);
                    var0.description = var4;
                    var4 = function() {
                        var2 = _closure2_slot1;
                        var0 = _closure1_slot7;
                        var1 = var0.UNKNOWN;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onDismiss = var4;
                    var4 = 'bottom';
                    var0.position = var4;
                    var3 = function() {
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot11;
                        var1 = undefined;
                        var0 = {};
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0.renderImgComponent = var3;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.ORK94p;
                    var2 = var3.bind(var4)(var2);
                    var0.title = var2;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot9;
                    var1 = var2 === var1;
                    var0.visible = var1;
                    return var0;
                };
                var4 = var6.bind(var7)(var1, var4);
                var1 = 14;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useCoachmark;
                var1 = arg0;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 1369, 33, 1358, 1297, 671, 7009, 566, 3100, 5952, 1234, 7011, 2]);