// modules/safety_hub/native/SafetyHubErrorActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.paddingBottom = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var11 = 120;
    var8.minHeight = var11;
    var3.errorContainer = var8;
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 48,
        'width': 48
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_CRITICAL;
    var8.backgroundColor = var11;
    var3.errorIconContainer = var8;
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 40,
        'width': 40
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.backgroundColor = var9;
    var3.redesignErrorIconContainer = var8;
    var8 = {
        'height': 50,
        'width': 50
    };
    var3.redesignErrorIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/SafetyHubErrorActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89634: for (var _fun89634_ip = 0;;) switch (_fun89634_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun89634_ip = 436;
                    continue _fun89634
                }
            case 12:
                var0 = _closure1_slot7;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var7 = _closure1_slot1;
                var14 = _closure1_slot3;
                var0 = 5;
                var0 = var14[var0];
                var0 = var7.bind(var4)(var0);
                var9 = var0.bind(var4)();
                var3 = _closure1_slot6;
                var13 = _closure1_slot0;
                var0 = 6;
                var0 = var14[var0];
                var0 = var13.bind(var4)(var0);
                var2 = var0.BottomSheet;
                var0 = {};
                var6 = _closure1_slot4;
                var5 = {};
                var11 = var15.errorContainer;
                var10 = new Array(1);
                var10[0] = var11;
                var5.style = var10;
                var8 = _closure1_slot5;
                var10 = {};
                var12 = var15.redesignErrorIconContainer;
                var11 = new Array(1);
                var11[0] = var12;
                var10.style = var11;
                var11 = 7;
                var11 = var14[var11];
                var11 = var13.bind(var4)(var11);
                var12 = var11.CircleXIcon;
                var11 = {};
                var16 = 'custom';
                var11.size = var16;
                var16 = 4;
                var16 = var14[var16];
                var16 = var7.bind(var4)(var16);
                var16 = var16.colors;
                var16 = var16.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
                var11.color = var16;
                var16 = var15.redesignErrorIcon;
                var15 = new Array(1);
                var15[0] = var16;
                var11.style = var15;
                var11 = var8.bind(var4)(var12, var11);
                var10.children = var11;
                var10 = var8.bind(var4)(var6, var10);
                var11 = new Array(2);
                var11[0] = var10;
                var10 = 8;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var15 = var10.Text;
                var12 = {};
                var10 = 'heading-lg/normal';
                var12.variant = var10;
                var10 = 9;
                var16 = var14[var10];
                var16 = var13.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var14[var10];
                var16 = var13.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.TDRvqs;
                var16 = var17.bind(var18)(var16);
                var12.children = var16;
                var12 = var8.bind(var4)(var15, var12);
                var11[1] = var12;
                var5.children = var11;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 10;
                var6 = var14[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var11 = function() {
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getSafetyHubData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6.onPress = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.R1AN4F;
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var6.loading = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 436:
                var19 = "Cannot destructure 'undefined' or 'null'.";
                var20 = var1;
                var0 = throwTypeError(var20, var19);
                var0 = undefined;
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11639, 4933, 5425, 3942, 1234, 4875, 10231, 2]);