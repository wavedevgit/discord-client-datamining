// modules/user_profile/UserProfileActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot6;
        var2 = var1.PREMIUM_FEATURE_TRY_OUT;
        var1 = {};
        var6 = arg0;
        var1.feature_name = var6;
        var5 = _closure1_slot9;
        var5 = var5.PREMIUM_STANDARD;
        var1.feature_tier = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49263: for (var _fun49263_ip = 0;;) switch (_fun49263_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49263_ip = 631;
                            continue _fun49263
                        }
                    case 10:
                        var10 = arg0;
                        var6 = arg1;
                        var4 = undefined;
                        var9 = undefined;
                        var3 = undefined;
                        var5 = _closure1_slot4;
                        var1 = var5.getCurrentUser;
                        var5 = var1.bind(var5)();
                        var12 = null;
                        var7 = var12 == var5;
                        var1 = undefined;
                        if (var7) {
                            _fun49263_ip = 54;
                            continue _fun49263
                        }
                    case 49:
                        var1 = var5.id;
                    case 54:
                        var9 = var1;
                        if (!(var12 == var1)) {
                            _fun49263_ip = 64;
                            continue _fun49263
                        }
                    case 61:
                        return var4;
                    case 64:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 6;
                        var1 = var7[var1];
                        var5 = var5.bind(var4)(var1);
                        var1 = var5.getShouldConvertBioEmoji;
                        var5 = var1.bind(var5)();
                        var1 = var10;
                        var1 = var1.bio;
                        var1 = var12 != var1;
                        if (!var1) {
                            _fun49263_ip = 113;
                            continue _fun49263
                        }
                    case 110:
                        var1 = var5;
                    case 113:
                        if (!var1) {
                            _fun49263_ip = 168;
                            continue _fun49263
                        }
                    case 116:
                        var5 = var10;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 7;
                        var1 = var8[var1];
                        var8 = var7.bind(var4)(var1);
                        var7 = var8.parse;
                        var1 = var5.bio;
                        var1 = var7.bind(var8)(var4, var1);
                        var1 = var1.content;
                        var5.bio = var1;
                    case 168: // try_start_0
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var8 = 8;
                        var1 = var7[var8];
                        var13 = var5.bind(var4)(var1);
                        var5 = var13.dispatch;
                        var1 = {};
                        var11 = 'USER_PROFILE_UPDATE_START';
                        var1.type = var11;
                        var11 = var9;
                        var1.userId = var11;
                        var11 = var6;
                        var1.guildId = var11;
                        var1 = var5.bind(var13)(var1);
                        var5 = _closure1_slot0;
                        var1 = 9;
                        var1 = var7[var1];
                        var1 = var5.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var5 = var7.patch;
                        var1 = {};
                        if (!(var12 == var11)) {
                            _fun49263_ip = 278;
                            continue _fun49263
                        }
                    case 257:
                        var13 = _closure1_slot7;
                        var12 = var13.USER_PROFILE;
                        var11 = _closure1_slot8;
                        var11 = var12.bind(var13)(var11);
                        _fun49263_ip = 301;
                        continue _fun49263;
                    case 278:
                        var15 = _closure1_slot7;
                        var14 = var15.USER_GUILD_PROFILE;
                        var13 = var6;
                        var12 = _closure1_slot8;
                        var11 = var14.bind(var15)(var13, var12);
                    case 301:
                        var1.url = var11;
                        var1.body = var10;
                        var10 = false;
                        var1.rejectWithError = var10;
                        var1 = var5.bind(var7)(var1);
                        SaveGenerator(address = 324);
                    case 322:
                        return var1;
                    case 324:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun49263_ip = 522;
                            continue _fun49263
                        }
                    case 333:
                        var3 = var1;
                        var5 = var1.ok;
                        if (var5) {
                            _fun49263_ip = 454;
                            continue _fun49263
                        }
                    case 345:
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = 10;
                        var7 = var5[var7];
                        var7 = var10.bind(var4)(var7);
                        var7 = var7.APIError;
                        var12 = var3;
                        var10 = var7.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var7
                            }
                        });
                        var18 = var10;
                        var17 = var12;
                        var7 = new var18[var7](var17, var16);
                        var11 = var7 instanceof Object ? var7 : var10;
                        var7 = _closure1_slot1;
                        var5 = var5[var8];
                        var10 = var7.bind(var4)(var5);
                        var7 = var10.dispatch;
                        var5 = {};
                        var13 = 'USER_PROFILE_UPDATE_FAILURE';
                        var5.type = var13;
                        var13 = var6;
                        var5.guildId = var13;
                        var12 = var12.body;
                        var5.errors = var12;
                        var5.apiError = var11;
                        var5 = var7.bind(var10)(var5);
                        _fun49263_ip = 519;
                        continue _fun49263;
                    case 454:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var8 = var7.bind(var4)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var10 = 'USER_PROFILE_UPDATE_SUCCESS';
                        var5.type = var10;
                        var5.userId = var9;
                        var9 = var6;
                        var5.guildId = var9;
                        var9 = var3;
                        var16 = var9.body;
                        var17 = var5;
                        var9 = copyDataProperties(var17, var16);
                        var5 = var7.bind(var8)(var5);
                    case 519: // try_end0
                        return var3;
                    case 522:
                        return var1;
                    case 525: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 10;
                        var3 = var7[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.APIError;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var3
                            }
                        });
                        var18 = var5;
                        var17 = var1;
                        var3 = new var18[var3](var17, var16);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = _closure1_slot1;
                        var2 = 8;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'USER_PROFILE_UPDATE_FAILURE';
                        var2.type = var7;
                        var2.guildId = var6;
                        var6 = {};
                        var2.errors = var6;
                        var2.apiError = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 631:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER';
        var1.type = var4;
        var4 = arg0;
        var1.banner = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot13 = var5;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun49268: for (var _fun49268_ip = 0;;) switch (_fun49268_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49268_ip = 297;
                            continue _fun49268
                        }
                    case 10:
                        var1 = _closure1_slot5;
                        var2 = var1.applicationWidgetConfigs;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun49268_ip = 53;
                            continue _fun49268
                        }
                    case 29:
                        var1 = _closure1_slot5;
                        var1 = var1.applicationWidgetConfigs;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(!(var2 > var1))) {
                            _fun49268_ip = 292;
                            continue _fun49268
                        }
                    case 53:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 8;
                        var1 = var1[var2];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var7 = 'USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START';
                        var1.type = var7;
                        var1 = var3.bind(var6)(var1);
                    case 97: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 9;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var7 = _closure1_slot7;
                        var7 = var7.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS;
                        var1.url = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 158);
                    case 156:
                        return var1;
                    case 158:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49268_ip = 223;
                            continue _fun49268
                        }
                    case 164:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var2];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var8 = 'USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS';
                        var3.type = var8;
                        var8 = var1.body;
                        var8 = var8.application_configs;
                        var3.applicationConfigs = var8;
                        var3 = var6.bind(var7)(var3);
                    case 221: // try_end0
                        _fun49268_ip = 292;
                        continue _fun49268;
                    case 223:
                        return var1;
                    case 226: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var7 = var3.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 12;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var1);
                        throw var1;
                    case 292:
                        var1 = undefined;
                        return var1;
                    case 297:
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
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var10 = var6.bind(var0)(var1);
    var _closure1_slot5 = var10;
    var1 = 3;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var1.Endpoints;
    var _closure1_slot7 = var6;
    var6 = var1.ME;
    var _closure1_slot8 = var6;
    var11 = var1.QueryIds;
    var1 = 4;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var6 = var1.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = var6;
    var1 = var1.AnalyticsPremiumFeatureNames;
    var _closure1_slot10 = var1;
    var1 = 13;
    var1 = var8[var1];
    var9 = var7.bind(var0)(var1);
    var6 = var9.createFetchStore;
    var1 = {};
    var11 = var11.APPLICATION_WIDGET_APPLICATION_CONFIGS;
    var1.getQueryId = var11;
    var11 = function() {
        var0 = _closure1_slot5;
        var0 = var0.applicationWidgetConfigs;
        return var0;
    };
    var1.get = var11;
    var11 = function() {
        var1 = _closure1_slot14;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var1.load = var11;
    var1 = var6.bind(var9)(var10, var1);
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/UserProfileActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.saveProfileChanges = var6;
    var6 = function arg0, arg1() {
        _fun49272: for (var _fun49272_ip = 0;;) switch (_fun49272_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = null;
                var5 = var2 == var3;
                var0 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun49272_ip = 34;
                    continue _fun49272
                }
            case 29:
                var4 = var3.id;
            case 34:
                if (!(var2 != var4)) {
                    _fun49272_ip = 100;
                    continue _fun49272
                }
            case 38:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'USER_PROFILE_PIN_BADGES_ON_CLIENT';
                var1.type = var5;
                var5 = arg0;
                var1.badges = var5;
                var5 = arg1;
                var1.ttlInSeconds = var5;
                var1.userId = var4;
                var1 = var2.bind(var3)(var1);
            case 100:
                return var0;
        }
    };
    var2.pinUserProfileBadgesOnClient = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_PROFILE_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingProfileChanges = var6;
    var6 = function arg0() {
        _fun49274: for (var _fun49274_ip = 0;;) switch (_fun49274_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun49274_ip = 33;
                    continue _fun49274
                }
            case 18:
                var6 = var3.startsWith;
                var4 = 'https:';
                var5 = var6.bind(var3)(var4);
            case 33:
                var4 = true;
                if (!(var4 !== var5)) {
                    _fun49274_ip = 57;
                    continue _fun49274
                }
            case 39:
                if (!(var2 != var3)) {
                    _fun49274_ip = 115;
                    continue _fun49274
                }
            case 43:
                var2 = _closure1_slot13;
                var2 = var2.bind(var0)(var3);
                _fun49274_ip = 115;
                continue _fun49274;
            case 57:
                var2 = global;
                var2 = var2.fetch;
                var4 = var2.bind(var0)(var3);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.blob;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.readFileAsBase64;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot13;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 115:
                return var0;
        }
    };
    var2.setPendingBannerUrl = var6;
    var2.setPendingBanner = var5;
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO';
        var1.type = var4;
        var4 = arg0;
        var1.bio = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingBio = var5;
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS';
        var1.type = var4;
        var4 = arg0;
        var1.pronouns = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingPronouns = var5;
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR';
        var1.type = var4;
        var4 = arg0;
        var1.color = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingAccentColor = var5;
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS';
        var1.type = var4;
        var4 = arg0;
        var1.themeColors = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingThemeColors = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR';
        var2.type = var5;
        var5 = arg0;
        var2.avatar = var5;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.ANIMATED_AVATAR;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutAvatar = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION';
        var2.type = var5;
        var5 = arg0;
        var2.avatarDecoration = var5;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.AVATAR_DECORATION;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutAvatarDecoration = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT';
        var2.type = var5;
        var5 = arg0;
        var2.profileEffect = var5;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.PROFILE_EFFECT;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutProfileEffect = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER';
        var2.type = var5;
        var5 = arg0;
        var2.banner = var5;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.PROFILE_BANNER;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutBanner = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS';
        var2.type = var5;
        var5 = arg0;
        var2.themeColors = var5;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.PROFILE_THEME_COLOR;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutThemeColors = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES';
        var2.type = var5;
        var5 = arg0;
        var2.displayNameStyles = var5;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.DISPLAY_NAME_STYLES;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutDisplayNameStyles = var5;
    var4 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET';
        var2.type = var5;
        var6 = arg0;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = _closure1_slot10;
        var1 = var1.PRESET;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.setTryItOutPreset = var4;
    var2.fetchApplicationWidgetConfigs = var3;
    var2.useApplicationWidgetConfigs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1621, 4661, 660, 1623, 795, 5591, 5592, 806, 507, 3352, 1461, 1207, 566, 2]);