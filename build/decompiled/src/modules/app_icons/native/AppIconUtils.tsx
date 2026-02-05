// modules/app_icons/native/AppIconUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun85844: for (var _fun85844_ip = 0;;) switch (_fun85844_ip) {
        case 0:
            var6 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var9;
            var _closure1_slot2 = var7;
            var4 = function() {
                var0 = undefined;
                var3 = _closure1_slot15;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot14 = var4;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot4;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85848: for (var _fun85848_ip = 0;;) switch (_fun85848_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85848_ip = 145;
                                    continue _fun85848
                                }
                            case 10: // try_start_0
                                var3 = _closure1_slot13;
                                var1 = null;
                                var3 = var1 == var3;
                                var1 = undefined;
                                if (var3) {
                                    _fun85848_ip = 44;
                                    continue _fun85848
                                }
                            case 28:
                                var3 = _closure1_slot13;
                                var2 = var3.getCurrentIcon;
                                var1 = var2.bind(var3)();
                            case 44:
                                SaveGenerator(address = 48);
                            case 46:
                                return var1;
                            case 48:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun85848_ip = 62;
                                    continue _fun85848
                                }
                            case 54:
                                var2 = var1.id;
                            case 59: // try_end0
                                return var2;
                            case 62:
                                return var1;
                            case 65: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var4 = _closure1_slot12;
                                var3 = var4.warn;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var5 = var2.concat;
                                var2 = 'Error fetching current app icon: ';
                                var2 = var5.bind(var2)(var6);
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.FreemiumAppIconIds;
                                var1 = var1.DEFAULT;
                                return var1;
                            case 145:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot15 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot15 = var0;
            var3 = function() {
                var6 = _closure1_slot5;
                var4 = var6.useState;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var7.bind(var3)(var0);
                var0 = var0.FreemiumAppIconIds;
                var0 = var0.DEFAULT;
                var6 = var4.bind(var6)(var0);
                var4 = _closure1_slot3;
                var0 = 2;
                var6 = var4.bind(var3)(var6, var0);
                var0 = 0;
                var0 = var6[var0];
                var4 = 1;
                var4 = var6[var4];
                var _closure2_slot0 = var4;
                var8 = _closure1_slot5;
                var7 = var8.useCallback;
                var6 = _closure1_slot4;
                var4 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85851: for (var _fun85851_ip = 0;;) switch (_fun85851_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85851_ip = 48;
                                    continue _fun85851
                                }
                            case 7:
                                var1 = _closure1_slot14;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 24);
                            case 22:
                                return var1;
                            case 24:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun85851_ip = 45;
                                    continue _fun85851
                                }
                            case 30:
                                var3 = _closure2_slot0;
                                var3 = var3.bind(var2)(var1);
                                return var2;
                            case 45:
                                return var1;
                            case 48:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var6.bind(var3)(var4);
                var4 = new Array(0);
                var4 = var7.bind(var8)(var6, var4);
                var _closure2_slot1 = var4;
                var4 = _closure1_slot1;
                var2 = 11;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var0 = var3.bind(var2)();
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 12;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.subscribe;
                    var0 = 'APP_ICON_UPDATED';
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.unsubscribe;
                        var2 = _closure2_slot1;
                        var1 = 'APP_ICON_UPDATED';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot16 = var3;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot4;
                var2 = function*(arg0, arg1) { // Environment: var2
                    var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                        _fun85856: for (var _fun85856_ip = 0;;) switch (_fun85856_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85856_ip = 361;
                                    continue _fun85856
                                }
                            case 10:
                                var9 = arg0;
                                var8 = arg1;
                            case 16: // try_start_0
                                var1 = _closure1_slot13;
                                var6 = null;
                                var2 = var6 == var1;
                                var11 = undefined;
                                var1 = undefined;
                                if (var2) {
                                    _fun85856_ip = 54;
                                    continue _fun85856
                                }
                            case 36:
                                var4 = _closure1_slot13;
                                var3 = var4.setIcon;
                                var2 = var9;
                                var1 = var3.bind(var4)(var2);
                            case 54:
                                SaveGenerator(address = 58);
                            case 56:
                                return var1;
                            case 58:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun85856_ip = 210;
                                    continue _fun85856
                                }
                            case 67:
                                var3 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var2 = 12;
                                var2 = var12[var2];
                                var5 = var3.bind(var11)(var2);
                                var4 = var5.dispatch;
                                var2 = {};
                                var10 = 'APP_ICON_UPDATED';
                                var2.type = var10;
                                var2 = var4.bind(var5)(var2);
                                var2 = 13;
                                var2 = var12[var2];
                                var5 = var3.bind(var11)(var2);
                                var4 = var5.track;
                                var2 = _closure1_slot9;
                                var3 = var2.APP_ICON_UPDATED;
                                var2 = {};
                                var2.icon_id = var9;
                                var2.user_premium_tier = var8;
                                var10 = _closure1_slot0;
                                var8 = 10;
                                var8 = var12[var8];
                                var8 = var10.bind(var11)(var8);
                                var8 = var8.FreemiumAppIconIds;
                                var8 = var8.DEFAULT;
                                var6 = null;
                                if (!(var9 !== var8)) {
                                    _fun85856_ip = 192;
                                    continue _fun85856
                                }
                            case 182:
                                var7 = _closure1_slot11;
                                var6 = var7.TIER_2;
                            case 192:
                                var2.icon_premium_tier = var6;
                                var2 = var4.bind(var5)(var3, var2);
                            case 205: // try_end0
                                _fun85856_ip = 356;
                                continue _fun85856;
                            case 210:
                                return var1;
                            case 213: // catch_target0
                                CatchBlockStart(arg_register = 5);
                                var3 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var2 = 14;
                                var2 = var11[var2];
                                var10 = undefined;
                                var4 = var3.bind(var10)(var2);
                                var3 = var4.open;
                                var2 = {};
                                var6 = 'APP_ICON_LOGS_ERROR_MESSAGE_GENERIC';
                                var2.key = var6;
                                var9 = _closure1_slot0;
                                var6 = 15;
                                var7 = var11[var6];
                                var7 = var9.bind(var10)(var7);
                                var8 = var7.intl;
                                var7 = var8.string;
                                var6 = var11[var6];
                                var6 = var9.bind(var10)(var6);
                                var6 = var6.t;
                                var6 = var6["c76eo/"];
                                var6 = var7.bind(var8)(var6);
                                var2.content = var6;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot12;
                                var2 = var3.warn;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var4 = var1.concat;
                                var1 = 'Error changing users app icon: ';
                                var1 = var4.bind(var1)(var5);
                                var1 = var2.bind(var3)(var1);
                            case 356:
                                var1 = undefined;
                                return var1;
                            case 361:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot17 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot17 = var0;
            var0 = global;
            var10 = var0.Object;
            var8 = var10.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var10)(var2, var0, var5);
            var0 = 0;
            var5 = var7[var0];
            var0 = undefined;
            var5 = var9.bind(var0)(var5);
            var _closure1_slot3 = var5;
            var5 = 1;
            var5 = var7[var5];
            var5 = var9.bind(var0)(var5);
            var _closure1_slot4 = var5;
            var5 = 2;
            var8 = var7[var5];
            var5 = arg3;
            var5 = var5.bind(var0)(var8);
            var _closure1_slot5 = var5;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.NativeModules;
            var8 = 4;
            var8 = var7[var8];
            var8 = var6.bind(var0)(var8);
            var10 = var8.getDefaultIcon;
            var _closure1_slot6 = var10;
            var10 = var8.getOfficialAlternateIcons;
            var _closure1_slot7 = var10;
            var8 = var8.getLimitedAlternateIcons;
            var _closure1_slot8 = var8;
            var8 = 5;
            var8 = var7[var8];
            var8 = var6.bind(var0)(var8);
            var10 = var8.AnalyticEvents;
            var _closure1_slot9 = var10;
            var8 = var8.UserSettingsSections;
            var _closure1_slot10 = var8;
            var8 = 6;
            var8 = var7[var8];
            var8 = var6.bind(var0)(var8);
            var8 = var8.PremiumTypes;
            var _closure1_slot11 = var8;
            var8 = 7;
            var8 = var7[var8];
            var10 = var9.bind(var0)(var8);
            var8 = var10.prototype;
            var9 = Object.create(var8, {
                constructor: {
                    value: var10
                }
            });
            var13 = 'AppIconUtils';
            var14 = var9;
            var8 = new var14[var10](var13, var12);
            var8 = var8 instanceof Object ? var8 : var9;
            var _closure1_slot12 = var8;
            var8 = 8;
            var8 = var7[var8];
            var9 = var6.bind(var0)(var8);
            var8 = var9.isAndroid;
            var8 = var8.bind(var9)();
            if (var8) {
                _fun85844_ip = 344;
                continue _fun85844
            }
        case 334:
            var5 = var5.DCDIconManager;
            _fun85844_ip = 361;
            continue _fun85844;
        case 344:
            var8 = 9;
            var8 = var7[var8];
            var8 = var6.bind(var0)(var8);
            var5 = var8.default;
        case 361:
            var _closure1_slot13 = var5;
            var5 = 18;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/app_icons/native/AppIconUtils.tsx';
            var5 = var6.bind(var7)(var5);
            var2.fetchCurrentAppIcon = var4;
            var2.useCurrentAppIcon = var3;
            var3 = function() {
                var0 = undefined;
                var3 = _closure1_slot17;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.setAppIcon = var3;
            var3 = function() {
                var1 = _closure1_slot16;
                var5 = undefined;
                var1 = var1.bind(var5)();
                var6 = _closure1_slot5;
                var3 = var6.useState;
                var2 = new Array(0);
                var3 = var3.bind(var6)(var2);
                var2 = _closure1_slot3;
                var9 = 2;
                var6 = var2.bind(var5)(var3, var9);
                var2 = 0;
                var3 = var6[var2];
                var7 = 1;
                var6 = var6[var7];
                var _closure2_slot0 = var6;
                var10 = _closure1_slot5;
                var8 = var10.useState;
                var6 = new Array(0);
                var8 = var8.bind(var10)(var6);
                var6 = _closure1_slot3;
                var6 = var6.bind(var5)(var8, var9);
                var2 = var6[var2];
                var6 = var6[var7];
                var _closure2_slot1 = var6;
                var9 = _closure1_slot5;
                var8 = var9.useCallback;
                var7 = _closure1_slot4;
                var6 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85860: for (var _fun85860_ip = 0;;) switch (_fun85860_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85860_ip = 335;
                                    continue _fun85860
                                }
                            case 12:
                                var1 = undefined;
                                var _closure4_slot0 = var1;
                            case 18: // try_start_0
                                var5 = _closure1_slot13;
                                var2 = null;
                                var5 = var2 == var5;
                                var2 = undefined;
                                if (var5) {
                                    _fun85860_ip = 52;
                                    continue _fun85860
                                }
                            case 36:
                                var6 = _closure1_slot13;
                                var5 = var6.getAvailableIcons;
                                var2 = var5.bind(var6)();
                            case 52:
                                SaveGenerator(address = 56);
                            case 54:
                                return var2;
                            case 56:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun85860_ip = 188;
                                    continue _fun85860
                                }
                            case 65:
                                var6 = var2.map;
                                var5 = function(arg0) { // Environment: var4
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var5 = var6.bind(var2)(var5);
                                _closure4_slot0 = var5;
                                var5 = _closure1_slot7;
                                var7 = var5.bind(var1)();
                                var6 = var7.filter;
                                var5 = function(arg0) { // Environment: var4
                                    var2 = _closure4_slot0;
                                    var1 = var2.includes;
                                    var0 = arg0;
                                    var0 = var0.id;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var13 = var6.bind(var7)(var5);
                                var5 = _closure1_slot8;
                                var7 = var5.bind(var1)();
                                var5 = var7.filter;
                                var4 = function(arg0) { // Environment: var4
                                    var2 = _closure4_slot0;
                                    var1 = var2.includes;
                                    var0 = arg0;
                                    var0 = var0.id;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var7 = var5.bind(var7)(var4);
                                var5 = _closure2_slot1;
                                var5 = var5.bind(var1)(var7);
                                var4 = _closure2_slot0;
                                var3 = _closure1_slot6;
                                var5 = var3.bind(var1)();
                                var3 = new Array(1);
                                var3[0] = var5;
                                var12 = 1;
                                var14 = var3;
                                var5 = arraySpread(var14, var13, var12);
                                var3 = var4.bind(var1)(var3);
                            case 183: // try_end0
                                _fun85860_ip = 332;
                                continue _fun85860;
                            case 188:
                                return var2;
                            case 191: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var4 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var3 = 14;
                                var3 = var11[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.open;
                                var3 = {};
                                var7 = 'APP_ICON_LOGS_ERROR_MESSAGE_GENERIC';
                                var3.key = var7;
                                var10 = _closure1_slot0;
                                var7 = 15;
                                var8 = var11[var7];
                                var8 = var10.bind(var1)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var11[var7];
                                var7 = var10.bind(var1)(var7);
                                var7 = var7.t;
                                var7 = var7["c76eo/"];
                                var7 = var8.bind(var9)(var7);
                                var3.content = var7;
                                var3 = var4.bind(var5)(var3);
                                var4 = _closure1_slot12;
                                var3 = var4.warn;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var5 = var2.concat;
                                var2 = 'Error fetching available app icons: ';
                                var2 = var5.bind(var2)(var6);
                                var2 = var3.bind(var4)(var2);
                            case 332:
                                return var1;
                            case 335:
                                return var0;
                        }
                    };
                    return var0;
                };
                var7 = var7.bind(var5)(var6);
                var6 = new Array(0);
                var6 = var8.bind(var9)(var7, var6);
                var _closure2_slot2 = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 11;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var0 = var3.bind(var2)();
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 12;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.subscribe;
                    var0 = 'APP_ICON_UPDATED';
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.unsubscribe;
                        var2 = _closure2_slot2;
                        var1 = 'APP_ICON_UPDATED';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var0 = var4.bind(var5)(var0);
                var0 = {};
                var0.officialAppIcons = var3;
                var0.limitedTimeAppIcons = var2;
                var0.currentAppIcon = var1;
                return var0;
            };
            var2.useAppIcons = var3;
            var3 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.openUserSettings;
                var1 = {};
                var4 = _closure1_slot10;
                var4 = var4.APP_ICONS;
                var1.screen = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.navigateToAppIconSettings = var3;
            var1 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.isMetaQuest;
                var0 = var0.bind(var1)();
                var0 = !var0;
                return var0;
            };
            var2.isAppIconsSupported = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 7655, 660, 1623, 3, 478, 11078, 7656, 4103, 806, 795, 3148, 1234, 5926, 4106, 2]);