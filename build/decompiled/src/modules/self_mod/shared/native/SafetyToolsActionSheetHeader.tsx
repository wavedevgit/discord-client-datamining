// modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
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
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var3.navbarContainer = var8;
    var8 = {};
    var9 = 'absolute';
    var8.position = var9;
    var9 = 4;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.left = var9;
    var3.navbarLeft = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73064: for (var _fun73064_ip = 0;;) switch (_fun73064_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.title;
                var12 = var2.channelId;
                var _closure2_slot0 = var12;
                var11 = var2.recipientId;
                var _closure2_slot1 = var11;
                var10 = var2.warningId;
                var _closure2_slot2 = var10;
                var1 = var2.warningType;
                var _closure2_slot3 = var1;
                var7 = var2.hasBackButton;
                var2 = _closure1_slot6;
                var3 = undefined;
                var6 = var2.bind(var3)();
                var _closure2_slot4 = var6;
                var4 = _closure1_slot2;
                var9 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.openSafetyToolsActionSheet;
                    var10 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var7 = _closure2_slot3;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var9 = var9.bind(var4)(var1, var2);
                var _closure2_slot5 = var9;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var9 = var6.navbarLeft;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var1);
                    var2 = var5.getHeaderBackButton;
                    var1 = _closure2_slot5;
                    var2 = var2.bind(var5)(var1);
                    var1 = _closure1_slot4;
                    var0 = {};
                    var4 = _closure2_slot4;
                    var4 = var4.navbarLeft;
                    var0.style = var4;
                    var0 = var1.bind(var3)(var2, var0);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var6.navbarContainer;
                var0.style = var6;
                var6 = null;
                var6 = var6 != var7;
                if (!var6) {
                    _fun73064_ip = 186;
                    continue _fun73064
                }
            case 183:
                var6 = var4;
            case 186:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 7;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9128, 4705, 3942, 2]);