// modules/client_themes/ClientThemesBackgroundStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun27674: for (var _fun27674_ip = 0;;) switch (_fun27674_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun27674_ip = 74;
                continue _fun27674;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var8 = function() {
        _fun27677: for (var _fun27677_ip = 0;;) switch (_fun27677_ip) {
            case 0:
                var0 = _closure1_slot19;
                if (!var0) {
                    _fun27677_ip = 16;
                    continue _fun27677
                }
            case 10:
                var0 = undefined;
                var _closure1_slot17 = var0;
            case 16:
                var0 = false;
                _closure1_slot20 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildTextChannelType;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SystemThemeState;
    var _closure1_slot16 = var3;
    var _closure1_slot19 = var1;
    var1 = false;
    var _closure1_slot20 = var1;
    var1 = function() {
        _fun27678: for (var _fun27678_ip = 0;;) switch (_fun27678_ip) {
            case 0:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.canUseClientThemes;
                var5 = _closure1_slot14;
                var1 = var5.getCurrentUser;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var1 = !var1;
                var3 = _closure1_slot19;
                if (!(var1 !== var3)) {
                    _fun27678_ip = 66;
                    continue _fun27678
                }
            case 60:
                _closure1_slot19 = var1;
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function() {
        _fun27679: for (var _fun27679_ip = 0;;) switch (_fun27679_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = var3.shouldSync;
                var0 = 'appearance';
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun27679_ip = 29;
                    continue _fun27679
                }
            case 25:
                var0 = false;
                return var0;
            case 29:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 18;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.ClientThemeSettings;
                var2 = var3.getSetting;
                var2 = var2.bind(var3)();
                var4 = var2.backgroundGradientPresetId;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun27679_ip = 105;
                    continue _fun27679
                }
            case 79:
                var2 = _closure1_slot15;
                var2 = var2[var4];
                var4 = _closure1_slot17;
                if (!(var2 !== var4)) {
                    _fun27679_ip = 101;
                    continue _fun27679
                }
            case 95:
                _closure1_slot17 = var2;
                _fun27679_ip = 117;
                continue _fun27679;
            case 101:
                var2 = false;
                return var2;
            case 105:
                var2 = _closure1_slot17;
                if (!(var3 != var2)) {
                    _fun27679_ip = 119;
                    continue _fun27679
                }
            case 113:
                _closure1_slot17 = var0;
            case 117:
                return var0;
            case 119:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot22 = var1;
    var3 = function() {
        _fun27680: for (var _fun27680_ip = 0;;) switch (_fun27680_ip) {
            case 0:
                var3 = _closure1_slot8;
                var1 = var3.shouldSync;
                var0 = 'appearance';
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun27680_ip = 29;
                    continue _fun27680
                }
            case 25:
                var0 = false;
                return var0;
            case 29:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var3 = var1.ClientThemeSettings;
                var1 = var3.getSetting;
                var1 = var1.bind(var3)();
                var4 = var1.backgroundGradientPresetId;
                var1 = _closure1_slot10;
                var3 = var1.useSystemTheme;
                var1 = _closure1_slot16;
                var1 = var1.ON;
                var1 = var3 === var1;
                if (!var1) {
                    _fun27680_ip = 106;
                    continue _fun27680
                }
            case 100:
                var3 = null;
                var1 = var3 != var4;
            case 106:
                if (!var1) {
                    _fun27680_ip = 150;
                    continue _fun27680
                }
            case 109:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var5 = var3.bind(var0)(var1);
                var3 = var5.setUseSystemTheme;
                var1 = _closure1_slot16;
                var1 = var1.OFF;
                var1 = var3.bind(var5)(var1);
            case 150:
                var3 = null;
                if (!(var3 == var4)) {
                    _fun27680_ip = 170;
                    continue _fun27680
                }
            case 156:
                var1 = _closure1_slot17;
                if (!(var3 != var1)) {
                    _fun27680_ip = 231;
                    continue _fun27680
                }
            case 164:
                _closure1_slot17 = var0;
                _fun27680_ip = 231;
                continue _fun27680;
            case 170:
                var1 = _closure1_slot15;
                var1 = var1[var4];
                var4 = _closure1_slot17;
                var6 = var3 == var4;
                var5 = undefined;
                if (var6) {
                    _fun27680_ip = 196;
                    continue _fun27680
                }
            case 191:
                var5 = var4.id;
            case 196:
                var6 = var3 == var1;
                var4 = undefined;
                if (var6) {
                    _fun27680_ip = 210;
                    continue _fun27680
                }
            case 205:
                var4 = var1.id;
            case 210:
                var4 = var5 === var4;
                var3 = var3 == var1;
                if (var3) {
                    _fun27680_ip = 224;
                    continue _fun27680
                }
            case 221:
                var3 = var4;
            case 224:
                if (var3) {
                    _fun27680_ip = 231;
                    continue _fun27680
                }
            case 227:
                _closure1_slot17 = var1;
            case 231:
                return var0;
        }
    };
    var1 = 21;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var9
        var3 = function arg0() {
            _fun27682: for (var _fun27682_ip = 0;;) switch (_fun27682_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun27682_ip = 84;
                        continue _fun27682
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun27682_ip = 118;
                    continue _fun27682;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = new Array(1);
                    var2 = function(arg0) { // Environment: var2
                        _fun27683: for (var _fun27683_ip = 0;;) switch (_fun27683_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = {};
                                var3 = null;
                                var5 = var3 == var2;
                                var1 = undefined;
                                if (var5) {
                                    _fun27683_ip = 36;
                                    continue _fun27683
                                }
                            case 16:
                                var2 = var2.gradientPreset;
                                var3 = var3 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun27683_ip = 36;
                                    continue _fun27683
                                }
                            case 31:
                                var1 = var2.id;
                            case 36:
                                var0.gradientPresetId = var1;
                                return var0;
                        }
                    };
                    var1[0] = var2;
                    var0.migrations = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun27684: for (var _fun27684_ip = 0;;) switch (_fun27684_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun27684_ip = 60;
                        continue _fun27684
                    }
                case 12:
                    var5 = var4 == var0;
                    var2 = undefined;
                    if (var5) {
                        _fun27684_ip = 27;
                        continue _fun27684
                    }
                case 21:
                    var2 = var0.gradientPresetId;
                case 27:
                    var2 = var4 != var2;
                    var1 = undefined;
                    if (!var2) {
                        _fun27684_ip = 53;
                        continue _fun27684
                    }
                case 36:
                    var2 = _closure1_slot15;
                    var0 = var0.gradientPresetId;
                    var1 = var2[var0];
                case 53:
                    _closure1_slot17 = var1;
                case 60:
                    var8 = var3.waitFor;
                    var14 = _closure1_slot13;
                    var4 = _closure1_slot8;
                    var12 = _closure1_slot9;
                    var11 = _closure1_slot10;
                    var10 = _closure1_slot11;
                    var1 = _closure1_slot14;
                    var15 = var3;
                    var13 = var4;
                    var9 = var1;
                    var2 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
                    var5 = var3.syncWith;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot21;
                    var1 = var5.bind(var3)(var2, var1);
                    var2 = var3.syncWith;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot22;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            _fun27685: for (var _fun27685_ip = 0;;) switch (_fun27685_ip) {
                case 0:
                    var0 = _closure1_slot19;
                    if (var0) {
                        _fun27685_ip = 39;
                        continue _fun27685
                    }
                case 10:
                    var0 = {};
                    var2 = _closure1_slot17;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun27685_ip = 32;
                        continue _fun27685
                    }
                case 27:
                    var1 = var2.id;
                case 32:
                    var0.gradientPresetId = var1;
                    _fun27685_ip = 41;
                    continue _fun27685;
                case 39:
                    var0 = {};
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'gradientPreset';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLinearGradient';
        var4.key = var6;
        var6 = function() {
            _fun27687: for (var _fun27687_ip = 0;;) switch (_fun27687_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.gradientPreset;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun27687_ip = 60;
                        continue _fun27687
                    }
                case 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getLinearGradientForBackgroundGradient;
                    var1 = var1.gradientPreset;
                    var0 = var2.bind(var3)(var1);
                case 60:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isPreview';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isCoachmark';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'mobilePendingThemeIndex';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.get = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ClientThemesBackgroundStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 22;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        _fun27691: for (var _fun27691_ip = 0;;) switch (_fun27691_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.presetId;
                var0 = null;
                var1 = var0 != var3;
                var0 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun27691_ip = 33;
                    continue _fun27691
                }
            case 22:
                var1 = _closure1_slot15;
                var2 = var1[var3];
            case 33:
                _closure1_slot17 = var2;
                return var0;
        }
    };
    var1.UPDATE_BACKGROUND_GRADIENT_PRESET = var10;
    var10 = function arg0() {
        _fun27692: for (var _fun27692_ip = 0;;) switch (_fun27692_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.mobileThemesIndex;
                var0 = null;
                var3 = var0 != var1;
                var0 = undefined;
                var2 = undefined;
                if (!var3) {
                    _fun27692_ip = 25;
                    continue _fun27692
                }
            case 22:
                var2 = var1;
            case 25:
                var _closure1_slot18 = var2;
                return var0;
        }
    };
    var1.UPDATE_MOBILE_PENDING_THEME_INDEX = var10;
    var10 = function() {
        var0 = undefined;
        _closure1_slot17 = var0;
        return var0;
    };
    var1.RESET_PREVIEW_CLIENT_THEME = var10;
    var1.CLIENT_THEMES_EDITOR_CLOSE = var8;
    var9 = function arg0() {
        _fun27694: for (var _fun27694_ip = 0;;) switch (_fun27694_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var2 = var0.guildId;
                var3 = _closure1_slot14;
                var0 = var3.getCurrentUser;
                var6 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var5)) {
                    _fun27694_ip = 183;
                    continue _fun27694
                }
            case 38:
                if (!(var0 != var2)) {
                    _fun27694_ip = 183;
                    continue _fun27694
                }
            case 45:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var4 = undefined;
                var7 = var8.bind(var4)(var2);
                var3 = var7.UNSAFE_isDismissibleContentDismissed;
                var2 = 15;
                var2 = var9[var2];
                var2 = var8.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.CLIENT_THEMES_COACHMARK;
                var2 = var3.bind(var7)(var2);
                if (var2) {
                    _fun27694_ip = 183;
                    continue _fun27694
                }
            case 105:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.ageEligibleForPremiumUpsell;
                var2 = var2.bind(var3)(var6);
                if (!var2) {
                    _fun27694_ip = 183;
                    continue _fun27694
                }
            case 139:
                var3 = _closure1_slot13;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var5);
                var0 = var0 != var2;
                if (!var0) {
                    _fun27694_ip = 174;
                    continue _fun27694
                }
            case 160:
                var3 = _closure1_slot12;
                var2 = var2.type;
                var0 = var3.bind(var4)(var2);
            case 174:
                if (!var0) {
                    _fun27694_ip = 183;
                    continue _fun27694
                }
            case 177:
                var0 = true;
                _closure1_slot20 = var0;
            case 183:
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var9;
    var1.LOGOUT = var8;
    var1.CACHE_LOADED = var3;
    var1.CONNECTION_OPEN = var3;
    var1.OVERLAY_INITIALIZE = var3;
    var1.SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE = var3;
    var1.UNSYNCED_USER_SETTINGS_UPDATE = var3;
    var1.USER_SETTINGS_PROTO_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/ClientThemesBackgroundStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1354, 3187, 3188, 1310, 1376, 1372, 1613, 3201, 3189, 3203, 1358, 3227, 3100, 1348, 3229, 3230, 566, 806, 2]);