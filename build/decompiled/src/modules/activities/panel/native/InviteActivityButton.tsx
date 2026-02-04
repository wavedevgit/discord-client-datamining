// modules/activities/panel/native/InviteActivityButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110431: for (var _fun110431_ip = 0;;) switch (_fun110431_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.applicationId;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    _fun110432: for (var _fun110432_ip = 0;;) switch (_fun110432_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun110432_ip = 40;
                                continue _fun110432
                            }
                        case 18:
                            var3 = _closure1_slot3;
                            var2 = var3.getApplicationActivity;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1, var0);
                var _closure2_slot1 = var1;
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun110431_ip = 286;
                    continue _fun110431
                }
            case 85:
                var3 = _closure1_slot4;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.Button;
                var1 = {};
                var6 = function() {
                    var6 = _closure2_slot1;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 5;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 4;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var7 = var6.session_id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'ActivityInviteSheet-';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var1.activity = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1.onPress = var6;
                var6 = _closure1_slot1;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var1.icon = var5;
                var5 = 9;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["OzOM/q"];
                var6 = var7.bind(var10)(var6);
                var1.text = var6;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["OzOM/q"];
                var5 = var6.bind(var7)(var5);
                var1.accessibilityLabel = var5;
                var5 = 'secondary-overlay';
                var1.variant = var5;
                var5 = 'sm';
                var1.size = var5;
                var5 = true;
                var1.shrink = var5;
                var5 = 2;
                var1.maxFontSizeMultiplier = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 286:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/InviteActivityButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5658, 33, 3278, 14218, 1307, 566, 4084, 8649, 1234, 2]);