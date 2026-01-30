// modules/user_settings/native/premium_marketing/ProfileCustomizationTryItOutSettingScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var3 = var3.AnalyticsPages;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var10;
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var3.container = var8;
    var8 = {
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.activityIndicator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/ProfileCustomizationTryItOutSettingScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: ProfileCustomizationTryItOutSettingScreen, environment: var1
        _fun88627: for (var _fun88627_ip = 0;;) switch (_fun88627_ip) {
            case 0:
                var1 = _closure1_slot11;
                var5 = undefined;
                var7 = var1.bind(var5)();
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 8;
                var2 = var10[var1];
                var3 = var9.bind(var5)(var2);
                var2 = 9;
                var2 = var10[var2];
                var2 = var9.bind(var5)(var2);
                var2 = var2.USER_SETTINGS_TRY_OUT_PREMIUM;
                var2 = var3.bind(var5)(var2);
                var4 = var2.analyticsLocations;
                var14 = var2.sourceAnalyticsLocations;
                var _closure2_slot0 = var14;
                var3 = _closure1_slot0;
                var2 = 10;
                var2 = var10[var2];
                var11 = var3.bind(var5)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var8.bind(var11)(var3, var2);
                var _closure2_slot1 = var12;
                var2 = 11;
                var2 = var10[var2];
                var2 = var9.bind(var5)(var2);
                var3 = var2.bind(var5)();
                var2 = var3.categories;
                var _closure2_slot2 = var2;
                var8 = var3.isFetching;
                var3 = 12;
                var3 = var10[var3];
                var9 = var9.bind(var5)(var3);
                var3 = {};
                var11 = true;
                var3.isTryItOut = var11;
                var3.analyticsLocations = var4;
                var9 = var9.bind(var5)(var3);
                var3 = var9.pendingAvatarDecoration;
                var _closure2_slot3 = var3;
                var9 = var9.setPendingAvatarDecoration;
                var _closure2_slot4 = var9;
                var13 = _closure1_slot3;
                var16 = var13.useEffect;
                var15 = new Array(1);
                var15[0] = var12;
                var10 = function() { // Environment: var0
                    _fun88629: for (var _fun88629_ip = 0;;) switch (_fun88629_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun88629_ip = 78;
                                continue _fun88629
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var5 = _closure2_slot1;
                            var2 = var5.id;
                            var1 = var5.getAvatarURL;
                            var0 = 80;
                            var1 = var1.bind(var5)(var4, var0);
                            var0 = {};
                            var5 = true;
                            var0.dispatchWait = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var16.bind(var13)(var10, var15);
                var15 = var13.useEffect;
                var10 = new Array(3);
                var10[0] = var3;
                var10[1] = var9;
                var10[2] = var2;
                var9 = function() { // Environment: var0
                    _fun88630: for (var _fun88630_ip = 0;;) switch (_fun88630_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            if (!(var0 === var2)) {
                                _fun88630_ip = 108;
                                continue _fun88630
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.getAvatarDecorationsFromCategories;
                            var2 = _closure2_slot2;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure2_slot4;
                            var1 = global;
                            var5 = var1.Math;
                            var4 = var5.floor;
                            var6 = var1.Math;
                            var1 = var6.random;
                            var6 = var1.bind(var6)();
                            var1 = var3.length;
                            var1 = var6 * var1;
                            var1 = var4.bind(var5)(var1);
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                        case 108:
                            return var0;
                    }
                };
                var9 = var15.bind(var13)(var9, var10);
                var15 = var13.useEffect;
                var10 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 15;
                    var1 = var5[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var1);
                    var2 = var3.setTryItOutDisplayNameStyles;
                    var1 = 16;
                    var1 = var5[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.generateRandomDisplayNameStyles;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = new Array(0);
                var9 = var15.bind(var13)(var10, var9);
                var10 = var13.useEffect;
                var9 = new Array(1);
                var9[0] = var14;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.PREMIUM_UPSELL_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.PREMIUM_PROFILE_TRY_IT_OUT;
                    var1.type = var5;
                    var5 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.USER_SETTINGS;
                    var5.page = var6;
                    var1.location = var5;
                    var5 = _closure2_slot0;
                    var1.location_stack = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var10.bind(var13)(var0, var9);
                var0 = null;
                var9 = var0 == var12;
                if (var9) {
                    _fun88627_ip = 510;
                    continue _fun88627
                }
            case 331:
                if (var8) {
                    _fun88627_ip = 453;
                    continue _fun88627
                }
            case 334:
                if (!(var5 === var3)) {
                    _fun88627_ip = 349;
                    continue _fun88627
                }
            case 338:
                var3 = var2.size;
                var2 = 0;
                if (!(!(var3 > var2))) {
                    _fun88627_ip = 453;
                    continue _fun88627
                }
            case 349:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = var13[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var4;
                var8 = _closure1_slot4;
                var4 = {};
                var9 = var7.container;
                var4.style = var9;
                var10 = _closure1_slot1;
                var9 = 18;
                var9 = var13[var9];
                var10 = var10.bind(var5)(var9);
                var9 = {};
                var9.currentUser = var12;
                var9.isTryItOut = var11;
                var9 = var3.bind(var5)(var10, var9);
                var4.children = var9;
                var4 = var3.bind(var5)(var8, var4);
                var1.children = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun88627_ip = 507;
                continue _fun88627;
            case 453:
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.activityIndicator;
                var2.style = var7;
                var7 = _closure1_slot5;
                var6 = {
                    'animating': true,
                    'size': 'large'
                };
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 507:
                var0 = var1;
            case 510:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 660, 1615, 33, 1297, 671, 5687, 5540, 566, 5691, 5542, 6915, 4562, 5547, 1623, 795, 10098, 2]);