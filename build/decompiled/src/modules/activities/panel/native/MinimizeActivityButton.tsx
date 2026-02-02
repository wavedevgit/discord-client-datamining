// modules/activities/panel/native/MinimizeActivityButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flexShrink = var10;
    var3.buttonParent = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110409: for (var _fun110409_ip = 0;;) switch (_fun110409_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.activityName;
                var4 = var1.setMode;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot5;
                    var1 = var0.PIP;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var2.bind(var3)(var0, var1);
                var0 = _closure1_slot7;
                var4 = undefined;
                var5 = var0.bind(var4)();
                if (!(var4 !== var7)) {
                    _fun110409_ip = 79;
                    continue _fun110409
                }
            case 68:
                var0 = '';
                if (!(var0 === var7)) {
                    _fun110409_ip = 215;
                    continue _fun110409
                }
            case 79:
                var2 = _closure1_slot6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var0 = var11.bind(var4)(var0);
                var1 = var0.IconButton;
                var0 = {
                    'icon': null,
                    'accessibilityLabel': null,
                    'onPress': null,
                    'size': 'sm',
                    'variant': 'secondary-overlay',
                    'maxFontSizeMultiplier': 2
                };
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var12[var3];
                var3 = var6.bind(var4)(var3);
                var0.icon = var3;
                var3 = 7;
                var6 = var12[var3];
                var6 = var11.bind(var4)(var6);
                var10 = var6.intl;
                var6 = var10.string;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.brPQ5U;
                var3 = var6.bind(var10)(var3);
                var0.accessibilityLabel = var3;
                var0.onPress = var8;
                var0 = var2.bind(var4)(var1, var0);
                _fun110409_ip = 391;
                continue _fun110409;
            case 215:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var5.buttonParent;
                var1.style = var5;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 5;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var6 = var5.Button;
                var5 = {};
                var10 = _closure1_slot1;
                var9 = 6;
                var9 = var13[var9];
                var9 = var10.bind(var4)(var9);
                var5.icon = var9;
                var9 = 7;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.brPQ5U;
                var9 = var10.bind(var11)(var9);
                var5.accessibilityLabel = var9;
                var5.onPress = var8;
                var5.text = var7;
                var7 = 'sm';
                var5.size = var7;
                var7 = 'secondary-overlay';
                var5.variant = var7;
                var7 = 2;
                var5.maxFontSizeMultiplier = var7;
                var7 = true;
                var5.shrink = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 391:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/MinimizeActivityButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7878, 33, 1297, 4045, 7332, 1234, 7472, 2]);