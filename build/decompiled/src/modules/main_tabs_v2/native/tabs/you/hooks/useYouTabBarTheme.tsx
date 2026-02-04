// modules/main_tabs_v2/native/tabs/you/hooks/useYouTabBarTheme.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/you/hooks/useYouTabBarTheme.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun104519: for (var _fun104519_ip = 0;;) switch (_fun104519_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var3 = var5[var2];
                var6 = undefined;
                var8 = var4.bind(var6)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var7.bind(var8)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 5;
                var3 = var5[var3];
                var4 = var4.bind(var6)(var3);
                var8 = null;
                var5 = var8 == var9;
                var3 = undefined;
                if (var5) {
                    _fun104519_ip = 89;
                    continue _fun104519
                }
            case 84:
                var3 = var9.id;
            case 89:
                if (!(var8 == var3)) {
                    _fun104519_ip = 97;
                    continue _fun104519
                }
            case 93:
                var3 = _closure1_slot6;
            case 97:
                var5 = var4.bind(var6)(var3);
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = var7[var2];
                var10 = var3.bind(var6)(var2);
                var4 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.syncProfileThemeWithUserTheme;
                    return var0;
                };
                var4 = var4.bind(var10)(var3, var2);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = {};
                var10 = var8 != var9;
                var7 = undefined;
                if (!var10) {
                    _fun104519_ip = 183;
                    continue _fun104519
                }
            case 180:
                var7 = var9;
            case 183:
                var2.user = var7;
                var2.displayProfile = var5;
                var2 = var3.bind(var6)(var2);
                var7 = var2.theme;
                var9 = var2.primaryColor;
                var _closure2_slot1 = var9;
                var5 = var2.secondaryColor;
                var _closure2_slot2 = var5;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 7;
                var2 = var10[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.useProfileThemeValues;
                var7 = var2.bind(var3)(var7);
                var _closure2_slot3 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var9;
                var10 = var8 == var7;
                var9 = undefined;
                if (var10) {
                    _fun104519_ip = 290;
                    continue _fun104519
                }
            case 284:
                var9 = var7.overlay;
            case 290:
                var1[1] = var9;
                var8 = var8 == var7;
                var6 = undefined;
                if (var8) {
                    _fun104519_ip = 309;
                    continue _fun104519
                }
            case 303:
                var6 = var7.overlaySyncedWithUserTheme;
            case 309:
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun104522: for (var _fun104522_ip = 0;;) switch (_fun104522_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = _closure2_slot3;
                            var1 = null;
                            var3 = var1 == var3;
                            var5 = undefined;
                            if (var2) {
                                _fun104522_ip = 39;
                                continue _fun104522
                            }
                        case 22:
                            var6 = undefined;
                            if (var3) {
                                _fun104522_ip = 37;
                                continue _fun104522
                            }
                        case 27:
                            var2 = _closure2_slot3;
                            var6 = var2.overlay;
                        case 37:
                            _fun104522_ip = 57;
                            continue _fun104522;
                        case 39:
                            var2 = undefined;
                            if (var3) {
                                _fun104522_ip = 54;
                                continue _fun104522
                            }
                        case 44:
                            var3 = _closure2_slot3;
                            var2 = var3.overlaySyncedWithUserTheme;
                        case 54:
                            var6 = var2;
                        case 57:
                            var2 = _closure2_slot2;
                            if (!(var1 == var2)) {
                                _fun104522_ip = 71;
                                continue _fun104522
                            }
                        case 65:
                            var4 = _closure2_slot1;
                            _fun104522_ip = 75;
                            continue _fun104522;
                        case 71:
                            var4 = _closure2_slot2;
                        case 75:
                            var0 = var1 != var4;
                            var3 = null;
                            if (!var0) {
                                _fun104522_ip = 128;
                                continue _fun104522
                            }
                        case 84:
                            var0 = var1 != var6;
                            var3 = null;
                            if (!var0) {
                                _fun104522_ip = 128;
                                continue _fun104522
                            }
                        case 93:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 8;
                            var0 = var7[var0];
                            var2 = var2.bind(var5)(var0);
                            var0 = var2.calculateOverlayedColor;
                            var3 = var0.bind(var2)(var4, var6);
                        case 128:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 8;
                            var0 = var0[var7];
                            var4 = var4.bind(var5)(var0);
                            var0 = var4.getProfileTheme;
                            var9 = var0.bind(var4)(var3);
                            var0 = var1 != var3;
                            if (!var0) {
                                _fun104522_ip = 173;
                                continue _fun104522
                            }
                        case 169:
                            var0 = var1 != var9;
                        case 173:
                            var4 = var3;
                            if (!var0) {
                                _fun104522_ip = 281;
                                continue _fun104522
                            }
                        case 179:
                            var6 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 9;
                            var0 = var10[var0];
                            var0 = var6.bind(var5)(var0);
                            var8 = var0.bind(var5)(var3);
                            var6 = var8.set;
                            var3 = _closure1_slot0;
                            var0 = 10;
                            var0 = var10[var0];
                            var3 = var3.bind(var5)(var0);
                            var0 = var3.isThemeLight;
                            var0 = var0.bind(var3)(var9);
                            var3 = 0.1;
                            if (!var0) {
                                _fun104522_ip = 259;
                                continue _fun104522
                            }
                        case 249:
                            var3 = 0.9;
                        case 259:
                            var0 = 'hsl.l';
                            var3 = var6.bind(var8)(var0, var3);
                            var0 = var3.num;
                            var4 = var0.bind(var3)();
                        case 281:
                            var0 = {};
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var6 = var6.bind(var5)(var3);
                            var3 = var6.getProfileTheme;
                            var3 = var3.bind(var6)(var4);
                            var0.theme = var3;
                            var3 = var1 != var4;
                            var1 = null;
                            if (!var3) {
                                _fun104522_ip = 356;
                                continue _fun104522
                            }
                        case 325:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 11;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.int2hex;
                            var1 = var2.bind(var3)(var4);
                        case 356:
                            var0.primaryColor = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1621, 660, 632, 6956, 6964, 5385, 6965, 669, 3206, 668, 2]);