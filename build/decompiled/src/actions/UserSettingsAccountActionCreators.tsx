// actions/UserSettingsAccountActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun51313: for (var _fun51313_ip = 0;;) switch (_fun51313_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51313_ip = 324;
                            continue _fun51313
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.patch;
                        var1 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.ME;
                        var1.url = var6;
                        var6 = true;
                        var1.oldFormErrors = var6;
                        var1.body = var9;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 91);
                    case 89:
                        return var1;
                    case 91:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51313_ip = 321;
                            continue _fun51313
                        }
                    case 100:
                        var5 = var1.body;
                        var3 = var5.token;
                        if (!var3) {
                            _fun51313_ip = 274;
                            continue _fun51313
                        }
                    case 117:
                        var10 = var5.token;
                        var3 = delete var5.token;
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 3;
                        var3 = var3[var7];
                        var8 = var6.bind(var4)(var3);
                        var6 = var8.dispatch;
                        var3 = {};
                        var11 = 'UPDATE_TOKEN';
                        var3.type = var11;
                        var3.token = var10;
                        var10 = var5.id;
                        var3.userId = var10;
                        var3 = var6.bind(var8)(var3);
                        var8 = null;
                        var6 = var8 == var9;
                        var3 = undefined;
                        if (var6) {
                            _fun51313_ip = 199;
                            continue _fun51313
                        }
                    case 193:
                        var3 = var9.password;
                    case 199:
                        var3 = var8 != var3;
                        if (!var3) {
                            _fun51313_ip = 225;
                            continue _fun51313
                        }
                    case 206:
                        var10 = var8 == var9;
                        var6 = undefined;
                        if (var10) {
                            _fun51313_ip = 221;
                            continue _fun51313
                        }
                    case 215:
                        var6 = var9.new_password;
                    case 221:
                        var3 = var8 != var6;
                    case 225:
                        if (!var3) {
                            _fun51313_ip = 274;
                            continue _fun51313
                        }
                    case 228:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var8 = 'PASSWORD_UPDATED';
                        var3.type = var8;
                        var8 = var5.id;
                        var3.userId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 274:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'CURRENT_USER_UPDATE';
                        var2.type = var6;
                        var2.user = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 321:
                        return var1;
                    case 324:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot4 = var7;
    var7 = var4.Routes;
    var _closure1_slot5 = var7;
    var7 = var4.DEVICE_TOKEN;
    var _closure1_slot6 = var7;
    var4 = var4.DEVICE_VOIP_TOKEN;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot8 = var7;
    var4 = var4.getDevicePushProvider;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserSettingsAccountActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_INIT';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.accountDetailsInit = var4;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.accountDetailsClose = var4;
    var4 = function arg0, arg1() {
        _fun51316: for (var _fun51316_ip = 0;;) switch (_fun51316_ip) {
            case 0:
                var1 = _closure1_slot4;
                var2 = arg1;
                if (var2) {
                    _fun51316_ip = 21;
                    continue _fun51316
                }
            case 13:
                var3 = var1.DISABLE_ACCOUNT;
                _fun51316_ip = 27;
                continue _fun51316;
            case 21:
                var3 = var1.DELETE_ACCOUNT;
            case 27:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {};
                var0.url = var3;
                var3 = {};
                var4 = arg0;
                var3.password = var4;
                var0.body = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 5;
                    var2 = var4[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.logoutInternal;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var2 = 6;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.transitionTo;
                    var1 = _closure1_slot5;
                    var1 = var1.DEFAULT_LOGGED_OUT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.disableAccount = var4;
    var2.saveAccountRequest = var3;
    var3 = function arg0() {
        _fun51318: for (var _fun51318_ip = 0;;) switch (_fun51318_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.username;
                var11 = var1.discriminator;
                var17 = var1.email;
                var16 = var1.emailToken;
                var15 = var1.password;
                var14 = var1.avatar;
                var _closure2_slot0 = var14;
                var13 = var1.avatarDescription;
                var12 = var1.avatarId;
                var _closure2_slot1 = var12;
                var9 = var1.avatarDecoration;
                var6 = var1.newPassword;
                var10 = var1.globalName;
                var7 = var1.legacyUsername;
                var8 = var1.nameplate;
                var5 = var1.primaryGuildId;
                var4 = var1.displayNameStyles;
                var19 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var20 = var19.bind(var3)(var2);
                var19 = var20.dispatch;
                var2 = {};
                var21 = 'USER_SETTINGS_ACCOUNT_SUBMIT';
                var2.type = var21;
                var2 = var19.bind(var20)(var2);
                var2 = {};
                var2.username = var18;
                var2.email = var17;
                var2.email_token = var16;
                var2.password = var15;
                var2.avatar = var14;
                var2.avatar_description = var13;
                var2.avatar_id = var12;
                var2.discriminator = var11;
                var2.global_name = var10;
                var2.legacy_username = var7;
                var2.new_password = var6;
                if (!(var3 !== var9)) {
                    _fun51318_ip = 244;
                    continue _fun51318
                }
            case 209:
                var6 = null;
                var10 = var6 == var9;
                var7 = undefined;
                if (var10) {
                    _fun51318_ip = 226;
                    continue _fun51318
                }
            case 220:
                var7 = var9.skuId;
            case 226:
                var9 = var6 != var7;
                var6 = null;
                if (!var9) {
                    _fun51318_ip = 238;
                    continue _fun51318
                }
            case 235:
                var6 = var7;
            case 238:
                var2.avatar_decoration_sku_id = var6;
            case 244:
                if (!(var3 !== var8)) {
                    _fun51318_ip = 285;
                    continue _fun51318
                }
            case 248:
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun51318_ip = 265;
                    continue _fun51318
                }
            case 259:
                var7 = var8.skuId;
            case 265:
                var8 = var6 != var7;
                var6 = null;
                if (!var8) {
                    _fun51318_ip = 277;
                    continue _fun51318
                }
            case 274:
                var6 = var7;
            case 277:
                var2.nameplate_sku_id = var6;
            case 285:
                if (!(var3 !== var5)) {
                    _fun51318_ip = 297;
                    continue _fun51318
                }
            case 289:
                var2.primary_guild_id = var5;
            case 297:
                var6 = null;
                if (!(var6 == var4)) {
                    _fun51318_ip = 327;
                    continue _fun51318
                }
            case 303:
                if (!(var6 === var4)) {
                    _fun51318_ip = 362;
                    continue _fun51318
                }
            case 307:
                var2.display_name_font_id = var6;
                var2.display_name_effect_id = var6;
                var2.display_name_colors = var6;
                _fun51318_ip = 362;
                continue _fun51318;
            case 327:
                var5 = var4.fontId;
                var2.display_name_font_id = var5;
                var5 = var4.effectId;
                var2.display_name_effect_id = var5;
                var4 = var4.colors;
                var2.display_name_colors = var4;
            case 362:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 7;
                var4 = var4[var7];
                var4 = var5.bind(var3)(var4);
                var8 = var4.Storage;
                var5 = var8.get;
                var4 = _closure1_slot6;
                var4 = var5.bind(var8)(var4);
                var5 = _closure1_slot9;
                var5 = var5.bind(var3)();
                var8 = var6 != var5;
                if (!var8) {
                    _fun51318_ip = 421;
                    continue _fun51318
                }
            case 417:
                var8 = var6 != var4;
            case 421:
                if (!var8) {
                    _fun51318_ip = 436;
                    continue _fun51318
                }
            case 424:
                var2.push_provider = var5;
                var2.push_token = var4;
            case 436:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var3)(var4);
                var7 = var4.Storage;
                var5 = var7.get;
                var4 = _closure1_slot7;
                var4 = var5.bind(var7)(var4);
                var5 = _closure1_slot8;
                var5 = var6 != var5;
                if (!var5) {
                    _fun51318_ip = 488;
                    continue _fun51318
                }
            case 484:
                var5 = var6 != var4;
            case 488:
                if (!var5) {
                    _fun51318_ip = 507;
                    continue _fun51318
                }
            case 491:
                var5 = _closure1_slot8;
                var2.push_voip_provider = var5;
                var2.push_voip_token = var4;
            case 507:
                var1 = _closure1_slot10;
                var3 = var1.bind(var3)(var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun51319: for (var _fun51319_ip = 0;;) switch (_fun51319_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 3;
                            var1 = var1[var3];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.dispatch;
                            var1 = {};
                            var6 = 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS';
                            var1.type = var6;
                            var1 = var4.bind(var5)(var1);
                            var1 = _closure2_slot0;
                            var5 = null;
                            var1 = var5 == var1;
                            if (!var1) {
                                _fun51319_ip = 71;
                                continue _fun51319
                            }
                        case 63:
                            var4 = _closure2_slot1;
                            var1 = var5 == var4;
                        case 71:
                            if (var1) {
                                _fun51319_ip = 113;
                                continue _fun51319
                            }
                        case 74:
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var0 = var0[var3];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'RECENT_AVATARS_UPDATE';
                            var0.type = var3;
                            var0 = var1.bind(var2)(var0);
                        case 113:
                            var0 = arg0;
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
                    var1.type = var4;
                    var4 = var0.body;
                    var1.errors = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.saveAccountChanges = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var3 = _closure1_slot4;
        var3 = var3.USER_HARVEST;
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getHarvestStatus = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot4;
        var3 = var3.USER_HARVEST;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.backends = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.requestHarvest = var3;
    var3 = function arg0() {
        _fun51323: for (var _fun51323_ip = 0;;) switch (_fun51323_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.dispatch;
                var2 = {};
                var6 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR';
                var2.type = var6;
                var2.avatar = var3;
                var2 = var4.bind(var5)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun51323_ip = 149;
                    continue _fun51323
                }
            case 61:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 9;
                var5 = var8[var2];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.NstziV;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                _fun51323_ip = 235;
                continue _fun51323;
            case 149:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var3 = var1.AccessibilityAnnouncer;
                var2 = var3.announce;
                var1 = 9;
                var4 = var7[var1];
                var4 = var6.bind(var0)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var1 = var1.t;
                var1 = var1["f1+oNk"];
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 235:
                return var0;
        }
    };
    var2.setPendingAvatar = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME';
        var1.type = var4;
        var4 = arg0;
        var1.globalName = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingGlobalName = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED';
        var1.type = var4;
        var4 = arg0;
        var1.legacyUsernameDisabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingLegacyUsernameDisabled = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM';
        var1.type = var4;
        var4 = arg0;
        var1.item = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingCollectiblesItem = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRIMARY_GUILD_ID';
        var1.type = var4;
        var4 = arg0;
        var1.primaryGuildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingPrimaryGuildId = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES';
        var1.type = var4;
        var4 = arg0;
        var1.displayNameStyles = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingDisplayNameStyles = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_CLEAR_ERRORS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearErrors = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_ACCOUNT_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingAccountChanges = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetAllPending = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_TRY_IT_OUT_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetAllTryItOut = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetAndCloseUserProfileForm = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingLegacyUsernameDisabled = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_PRIMARY_GUILD_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingPrimaryGuildChanges = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 4560, 806, 507, 4557, 1220, 587, 3207, 1234, 2]);