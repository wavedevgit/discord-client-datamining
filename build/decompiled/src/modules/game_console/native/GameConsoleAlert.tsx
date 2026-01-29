// modules/game_console/native/GameConsoleAlert.tsx
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
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginTop = var9;
    var3.errorCodeText = var8;
    var8 = {};
    var8.marginTop = var11;
    var3.alertBody = var8;
    var8 = {};
    var8.flex = var10;
    var3.container = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.body = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/GameConsoleAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SelfDismissibleAlertBody, environment: var1
        _fun66860: for (var _fun66860_ip = 0;;) switch (_fun66860_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.body;
                var6 = var1.dismissCallback;
                var _closure2_slot0 = var6;
                var9 = var1.errorCodeMessage;
                var1 = _closure1_slot7;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getRemoteSessionId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var3.bind(var7)(var2, var1);
                var _closure2_slot1 = var7;
                var3 = _closure1_slot2;
                var2 = var3.useEffect;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun66862: for (var _fun66862_ip = 0;;) switch (_fun66862_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun66862_ip = 23;
                                continue _fun66862
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var1 = null;
                var0 = var13;
                if (!(var1 != var9)) {
                    _fun66860_ip = 325;
                    continue _fun66860
                }
            case 139:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var11.container;
                var1.style = var6;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 6;
                var5 = var10[var6];
                var5 = var7.bind(var4)(var5);
                var12 = var5.Text;
                var5 = {
                    'maxFontSizeMultiplier': 1,
                    'variant': 'text-md/normal'
                };
                var15 = var11.body;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var11.alertBody;
                var14[1] = var15;
                var5.style = var14;
                var5.children = var13;
                var12 = var8.bind(var4)(var12, var5);
                var5 = new Array(2);
                var5[0] = var12;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'maxFontSizeMultiplier': 1,
                    'variant': 'text-md/normal'
                };
                var12 = var11.body;
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var11.errorCodeText;
                var10[1] = var11;
                var6.style = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 325:
                return var0;
        }
    };
    var2.SelfDismissibleAlertBody = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3478, 33, 1297, 566, 3895, 2]);