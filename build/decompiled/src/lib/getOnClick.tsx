// lib/getOnClick.tsx
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
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun51695: for (var _fun51695_ip = 0;;) switch (_fun51695_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51695_ip = 84;
                            continue _fun51695
                        }
                    case 7:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.dispatch;
                        var1 = {};
                        var5 = 'DISPLAYED_INVITE_SHOW';
                        var1.type = var5;
                        var5 = arg1;
                        var1.code = var5;
                        var1.username = var2;
                        var1.deeplinkAttemptId = var2;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 72);
                    case 70:
                        return var1;
                    case 72:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51695_ip = 81;
                            continue _fun51695
                        }
                    case 78:
                        return var2;
                    case 81:
                        return var1;
                    case 84:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun51698: for (var _fun51698_ip = 0;;) switch (_fun51698_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51698_ip = 497;
                            continue _fun51698
                        }
                    case 15:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var6 = _closure1_slot8;
                        var5 = var6.getInvite;
                        var1 = var2.code;
                        var5 = var5.bind(var6)(var1);
                        var10 = null;
                        if (!(var10 == var5)) {
                            _fun51698_ip = 112;
                            continue _fun51698
                        }
                    case 50:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 14;
                        var1 = var7[var1];
                        var9 = var6.bind(var3)(var1);
                        var7 = var9.resolveInvite;
                        var6 = var2.code;
                        var1 = 'Markdown Link';
                        var1 = var7.bind(var9)(var6, var1);
                        SaveGenerator(address = 97);
                    case 95:
                        return var1;
                    case 97:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun51698_ip = 494;
                            continue _fun51698
                        }
                    case 106:
                        var5 = var1.invite;
                    case 112:
                        if (!(var10 != var5)) {
                            _fun51698_ip = 488;
                            continue _fun51698
                        }
                    case 119:
                        var7 = var5.state;
                        var6 = _closure1_slot13;
                        var6 = var6.EXPIRED;
                        if (!(var7 !== var6)) {
                            _fun51698_ip = 176;
                            continue _fun51698
                        }
                    case 138:
                        var7 = var5.state;
                        var6 = _closure1_slot13;
                        var6 = var6.BANNED;
                        if (!(var7 !== var6)) {
                            _fun51698_ip = 176;
                            continue _fun51698
                        }
                    case 157:
                        var7 = var5.state;
                        var6 = _closure1_slot13;
                        var6 = var6.ERROR;
                        if (!(var7 === var6)) {
                            _fun51698_ip = 207;
                            continue _fun51698
                        }
                    case 176:
                        var7 = _closure1_slot18;
                        var6 = var2.code;
                        var6 = var7.bind(var3)(var5, var6);
                        SaveGenerator(address = 195);
                    case 193:
                        return var6;
                    case 195:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (!var7) {
                            _fun51698_ip = 488;
                            continue _fun51698
                        }
                    case 204:
                        return var6;
                    case 207:
                        var7 = _closure1_slot11;
                        var6 = var7.getFlattenedGuildIds;
                        var9 = var6.bind(var7)();
                        var6 = var10 == var5;
                        var13 = undefined;
                        if (var6) {
                            _fun51698_ip = 249;
                            continue _fun51698
                        }
                    case 230:
                        var6 = var5.guild;
                        var7 = var10 == var6;
                        var13 = undefined;
                        if (var7) {
                            _fun51698_ip = 249;
                            continue _fun51698
                        }
                    case 244:
                        var13 = var6.id;
                    case 249:
                        var7 = var10 != var13;
                        if (!var7) {
                            _fun51698_ip = 266;
                            continue _fun51698
                        }
                    case 256:
                        var6 = var9.includes;
                        var7 = var6.bind(var9)(var13);
                    case 266:
                        var6 = false;
                        if (!var7) {
                            _fun51698_ip = 424;
                            continue _fun51698
                        }
                    case 274:
                        var9 = var5.roles;
                        var9 = var10 != var9;
                        var6 = false;
                        if (!var9) {
                            _fun51698_ip = 424;
                            continue _fun51698
                        }
                    case 292:
                        var9 = var5.roles;
                        var12 = var9.length;
                        var9 = 0;
                        var9 = var12 > var9;
                        var6 = false;
                        if (!var9) {
                            _fun51698_ip = 424;
                            continue _fun51698
                        }
                    case 314:
                        var11 = _closure1_slot6;
                        var9 = var11.getId;
                        var12 = var9.bind(var11)();
                        var11 = _closure1_slot7;
                        var9 = var11.getMember;
                        var12 = var9.bind(var11)(var13, var12);
                        var9 = global;
                        var11 = var9.Set;
                        var13 = var10 == var12;
                        var9 = undefined;
                        if (var13) {
                            _fun51698_ip = 367;
                            continue _fun51698
                        }
                    case 361:
                        var9 = var12.roles;
                    case 367:
                        if (!(var10 == var9)) {
                            _fun51698_ip = 375;
                            continue _fun51698
                        }
                    case 371:
                        var9 = new Array(0);
                    case 375:
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var16 = var10;
                        var15 = var9;
                        var9 = new var16[var11](var15, var14);
                        var9 = var9 instanceof Object ? var9 : var10;
                        _closure4_slot0 = var9;
                        var10 = var5.roles;
                        var9 = var10.some;
                        var8 = function(arg0) { // Environment: var8
                            var2 = _closure4_slot0;
                            var1 = var2.has;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var6 = var9.bind(var10)(var8);
                    case 424:
                        if (!var7) {
                            _fun51698_ip = 463;
                            continue _fun51698
                        }
                    case 427:
                        if (var6) {
                            _fun51698_ip = 463;
                            continue _fun51698
                        }
                    case 430:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 14;
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.transitionToInviteSync;
                        var6 = var6.bind(var7)(var5);
                        _fun51698_ip = 488;
                        continue _fun51698;
                    case 463:
                        var4 = _closure1_slot18;
                        var2 = var2.code;
                        var2 = var4.bind(var3)(var5, var2);
                        SaveGenerator(address = 482);
                    case 480:
                        return var2;
                    case 482:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun51698_ip = 491;
                            continue _fun51698
                        }
                    case 488:
                        return var3;
                    case 491:
                        return var2;
                    case 494:
                        return var1;
                    case 497:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot12 = var6;
    var6 = var3.AppContext;
    var6 = var3.InviteStates;
    var _closure1_slot13 = var6;
    var3 = var3.Routes;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CollectibleShopTab;
    var _closure1_slot14 = var6;
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot16 = var3;
    var3 = {};
    var3.skipExtensionCheck = var0;
    var6 = new Array(0);
    var3.analyticsLocations = var6;
    var _closure1_slot17 = var3;
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/getOnClick.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun51700: for (var _fun51700_ip = 0;;) switch (_fun51700_ip) {
            case 0:
                var8 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var8;
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun51700_ip = 25;
                    continue _fun51700
                }
            case 18:
                var1 = _closure1_slot17;
            case 25:
                var7 = var1.skipExtensionCheck;
                var1 = var1.analyticsLocations;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.findCodedLink;
                var1 = var1.bind(var2)(var8);
                _closure2_slot2 = var1;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun51700_ip = 182;
                    continue _fun51700
                }
            case 97:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 16;
                var2 = var2[var10];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.INVITE;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1067;
                    continue _fun51700
                }
            case 141:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.EMBEDDED_ACTIVITY_INVITE;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1067;
                    continue _fun51700
                }
            case 182:
                if (!(var3 != var1)) {
                    _fun51700_ip = 315;
                    continue _fun51700
                }
            case 189:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 16;
                var2 = var2[var10];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.APP_DIRECTORY_PROFILE;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1060;
                    continue _fun51700
                }
            case 233:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.APP_DIRECTORY_STOREFRONT;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1060;
                    continue _fun51700
                }
            case 274:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.APP_DIRECTORY_STOREFRONT_SKU;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1060;
                    continue _fun51700
                }
            case 315:
                if (!(var3 != var1)) {
                    _fun51700_ip = 363;
                    continue _fun51700
                }
            case 319:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.ACTIVITY_BOOKMARK;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1053;
                    continue _fun51700
                }
            case 363:
                if (!(var3 != var1)) {
                    _fun51700_ip = 411;
                    continue _fun51700
                }
            case 367:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.GUILD_PRODUCT;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1046;
                    continue _fun51700
                }
            case 411:
                if (!(var3 != var1)) {
                    _fun51700_ip = 459;
                    continue _fun51700
                }
            case 415:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.SOCIAL_LAYER_STOREFRONT;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1039;
                    continue _fun51700
                }
            case 459:
                if (!(var3 != var1)) {
                    _fun51700_ip = 597;
                    continue _fun51700
                }
            case 466:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.QUESTS_EMBED;
                if (!(var4 === var2)) {
                    _fun51700_ip = 597;
                    continue _fun51700
                }
            case 507:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 29;
                var2 = var9[var2];
                var9 = var4.bind(var6)(var2);
                var4 = var9.getIsEligibleForQuests;
                var2 = {};
                var10 = _closure1_slot16;
                var10 = var10.EMBED_MOBILE;
                var2.location = var10;
                var2 = var4.bind(var9)(var2);
                if (!var2) {
                    _fun51700_ip = 597;
                    continue _fun51700
                }
            case 557:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 30;
                var2 = var9[var2];
                var4 = var4.bind(var6)(var2);
                var2 = var4.isMetaQuest;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun51700_ip = 597;
                    continue _fun51700
                }
            case 590:
                var2 = function(arg0) { // Environment: var0
                    _fun51719: for (var _fun51719_ip = 0;;) switch (_fun51719_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun51719_ip = 19;
                                continue _fun51719
                            }
                        case 9:
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                        case 19:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 31;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var1);
                            var4 = var6.toURLSafe;
                            var1 = _closure2_slot2;
                            var1 = var1.url;
                            var1 = var4.bind(var6)(var1);
                            if (!(var3 == var1)) {
                                _fun51719_ip = 73;
                                continue _fun51719
                            }
                        case 71:
                            var1 = {};
                        case 73:
                            var8 = var1.search;
                            var1 = var3 != var8;
                            var6 = undefined;
                            var4 = undefined;
                            if (!var1) {
                                _fun51719_ip = 179;
                                continue _fun51719
                            }
                        case 90:
                            var1 = global;
                            var1 = var1.URLSearchParams;
                            var7 = var1.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var7;
                            var10 = var8;
                            var1 = new var11[var1](var10, var9);
                            var9 = var1 instanceof Object ? var1 : var7;
                            var7 = var9.get;
                            var1 = 'sort';
                            var1 = var7.bind(var9)(var1);
                            var8 = var3 != var1;
                            var7 = undefined;
                            if (!var8) {
                                _fun51719_ip = 147;
                                continue _fun51719
                            }
                        case 144:
                            var7 = var1;
                        case 147:
                            var8 = var9.get;
                            var1 = 'filter';
                            var8 = var8.bind(var9)(var1);
                            var9 = var3 != var8;
                            var1 = undefined;
                            if (!var9) {
                                _fun51719_ip = 173;
                                continue _fun51719
                            }
                        case 170:
                            var1 = var8;
                        case 173:
                            var4 = var1;
                            var6 = var7;
                        case 179:
                            var1 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 32;
                            var0 = var7[var0];
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.openQuestHome;
                            var0 = {};
                            var5 = _closure2_slot2;
                            var5 = var5.code;
                            var0.scrollToQuestId = var5;
                            var7 = var3 != var6;
                            var5 = null;
                            if (!var7) {
                                _fun51719_ip = 233;
                                continue _fun51719
                            }
                        case 230:
                            var5 = var6;
                        case 233:
                            var0.sort = var5;
                            var5 = var3 != var4;
                            var3 = null;
                            if (!var5) {
                                _fun51719_ip = 250;
                                continue _fun51719
                            }
                        case 247:
                            var3 = var4;
                        case 250:
                            var0.filter = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
                return var2;
            case 597:
                if (!(var3 != var1)) {
                    _fun51700_ip = 645;
                    continue _fun51700
                }
            case 601:
                var4 = var1.type;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var2 = var9.bind(var6)(var2);
                var2 = var2.CodedLinkType;
                var2 = var2.COLLECTIBLES_SHOP;
                if (!(var4 !== var2)) {
                    _fun51700_ip = 1032;
                    continue _fun51700
                }
            case 645:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var12 = 31;
                var2 = var2[var12];
                var4 = var4.bind(var6)(var2);
                var2 = var4.toURLSafe;
                var2 = var2.bind(var4)(var8);
                if (!(var3 == var2)) {
                    _fun51700_ip = 682;
                    continue _fun51700
                }
            case 680:
                var2 = {};
            case 682:
                var11 = var2.host;
                var16 = var2.hostname;
                var10 = var2.pathname;
                _closure2_slot3 = var10;
                var4 = var2.search;
                var2 = var2.hash;
                var13 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var14 = var13.bind(var6)(var9);
                var13 = var14.isDiscordHostname;
                var15 = var3 != var16;
                var9 = null;
                if (!var15) {
                    _fun51700_ip = 750;
                    continue _fun51700
                }
            case 747:
                var9 = var16;
            case 750:
                var9 = var13.bind(var14)(var9);
                if (var9) {
                    _fun51700_ip = 811;
                    continue _fun51700
                }
            case 758:
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var12];
                var15 = var14.bind(var6)(var13);
                var14 = var15.isDiscordLocalhost;
                var17 = var3 != var11;
                var13 = null;
                if (!var17) {
                    _fun51700_ip = 793;
                    continue _fun51700
                }
            case 790:
                var13 = var11;
            case 793:
                var17 = var3 != var16;
                var11 = null;
                if (!var17) {
                    _fun51700_ip = 805;
                    continue _fun51700
                }
            case 802:
                var11 = var16;
            case 805:
                var9 = var14.bind(var15)(var13, var11);
            case 811:
                if (!(var3 != var10)) {
                    _fun51700_ip = 852;
                    continue _fun51700
                }
            case 815:
                if (!var9) {
                    _fun51700_ip = 852;
                    continue _fun51700
                }
            case 818:
                var11 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var11 = var11.bind(var6)(var9);
                var9 = var11.isAppRoute;
                var9 = var9.bind(var11)(var10);
                if (var9) {
                    _fun51700_ip = 987;
                    continue _fun51700
                }
            case 852:
                if (!(var3 != var1)) {
                    _fun51700_ip = 897;
                    continue _fun51700
                }
            case 856:
                var9 = var1.type;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 16;
                var1 = var12[var1];
                var1 = var11.bind(var6)(var1);
                var1 = var1.CodedLinkType;
                var1 = var1.APP_OAUTH2_LINK;
                if (!(var9 !== var1)) {
                    _fun51700_ip = 980;
                    continue _fun51700
                }
            case 897:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 37;
                var1 = var11[var1];
                var9 = var9.bind(var6)(var1);
                var1 = var9.tryParseEventDetailsPath;
                var1 = var1.bind(var9)(var10);
                var1 = undefined;
                if (var7) {
                    _fun51700_ip = 978;
                    continue _fun51700
                }
            case 933:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 38;
                var5 = var9[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var7.isSuspiciousDownload;
                var5 = var5.bind(var7)(var8);
                var5 = var3 == var5;
                var1 = undefined;
                if (var5) {
                    _fun51700_ip = 978;
                    continue _fun51700
                }
            case 973:
                var1 = function(arg0) { // Environment: var0
                    _fun51724: for (var _fun51724_ip = 0;;) switch (_fun51724_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun51724_ip = 19;
                                continue _fun51724
                            }
                        case 9:
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                        case 19:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 39;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.show;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
            case 978:
                _fun51700_ip = 985;
                continue _fun51700;
            case 980:
                var1 = function(arg0) { // Environment: var0
                    _fun51723: for (var _fun51723_ip = 0;;) switch (_fun51723_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun51723_ip = 19;
                                continue _fun51723
                            }
                        case 9:
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                        case 19:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 36;
                            var1 = var4[var1];
                            var2 = undefined;
                            var7 = var3.bind(var2)(var1);
                            var6 = var7.trackWithMetadata;
                            var0 = _closure1_slot12;
                            var5 = var0.APP_OAUTH2_LINK_EMBED_URL_CLICKED;
                            var1 = {};
                            var8 = _closure2_slot2;
                            var8 = var8.code;
                            var1.application_id = var8;
                            var1 = var6.bind(var7)(var5, var1);
                            var1 = 18;
                            var1 = var4[var1];
                            var1 = var3.bind(var2)(var1);
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
            case 985:
                return var1;
            case 987:
                var1 = {
                    'navigationReplace': false,
                    'openChannel': true
                };
                _closure2_slot4 = var1;
                if (!(var3 != var4)) {
                    _fun51700_ip = 1015;
                    continue _fun51700
                }
            case 1009:
                var1.search = var4;
            case 1015:
                if (!(var3 != var2)) {
                    _fun51700_ip = 1025;
                    continue _fun51700
                }
            case 1019:
                var1.hash = var2;
            case 1025:
                var1 = function(arg0) { // Environment: var0
                    _fun51722: for (var _fun51722_ip = 0;;) switch (_fun51722_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun51722_ip = 19;
                                continue _fun51722
                            }
                        case 9:
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                        case 19:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 35;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = true;
                            return var0;
                    }
                };
                return var1;
            case 1032:
                var1 = function(arg0) { // Environment: var0
                    _fun51720: for (var _fun51720_ip = 0;;) switch (_fun51720_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51720_ip = 21;
                                continue _fun51720
                            }
                        case 11:
                            var1 = var2.preventDefault;
                            var1 = var1.bind(var2)();
                        case 21:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 33;
                            var2 = var1[var2];
                            var4 = undefined;
                            var6 = var3.bind(var4)(var2);
                            var5 = var6.isVirtualCurrencyEnabled;
                            var2 = {};
                            var7 = 'getOnClick';
                            var2.location = var7;
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.enabled;
                            var _closure3_slot0 = var2;
                            var2 = 27;
                            var2 = var1[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = 34;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun51721: for (var _fun51721_ip = 0;;) switch (_fun51721_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.openCollectiblesShopMobile;
                                        var0 = _closure2_slot2;
                                        var3 = var0.code;
                                        var1 = var3.split;
                                        var0 = '-';
                                        var5 = var1.bind(var3)(var0);
                                        var4 = _closure1_slot3;
                                        var0 = undefined;
                                        var3 = 2;
                                        var3 = var4.bind(var0)(var5, var3);
                                        var4 = 0;
                                        var7 = var3[var4];
                                        var8 = 1;
                                        var4 = var3[var8];
                                        var3 = '';
                                        var5 = var3 !== var4;
                                        var3 = _closure3_slot0;
                                        if (!var3) {
                                            _fun51721_ip = 98;
                                            continue _fun51721
                                        }
                                    case 84:
                                        var3 = _closure1_slot14;
                                        var3 = var3.ORBS;
                                        if (!(var7 !== var3)) {
                                            _fun51721_ip = 121;
                                            continue _fun51721
                                        }
                                    case 98:
                                        var7 = _closure1_slot15;
                                        if (var5) {
                                            _fun51721_ip = 113;
                                            continue _fun51721
                                        }
                                    case 105:
                                        var3 = var7.FEATURED_PAGE;
                                        _fun51721_ip = 119;
                                        continue _fun51721;
                                    case 113:
                                        var3 = var7.SHOP_ALL;
                                    case 119:
                                        _fun51721_ip = 131;
                                        continue _fun51721;
                                    case 121:
                                        var1 = _closure1_slot15;
                                        var3 = var1.ORBS;
                                    case 131:
                                        var1 = {};
                                        var6 = _closure2_slot1;
                                        var7 = var6.length;
                                        var7 = var7 - var8;
                                        var7 = var6[var7];
                                        var1.analyticsSource = var7;
                                        var1.analyticsLocations = var6;
                                        var1.screen = var3;
                                        var3 = undefined;
                                        if (!var5) {
                                            _fun51721_ip = 173;
                                            continue _fun51721
                                        }
                                    case 170:
                                        var3 = var4;
                                    case 173:
                                        var1.initialProductSkuId = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
                return var1;
            case 1039:
                var1 = function(arg0) { // Environment: var0
                    _fun51717: for (var _fun51717_ip = 0;;) switch (_fun51717_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51717_ip = 21;
                                continue _fun51717
                            }
                        case 11:
                            var1 = var2.preventDefault;
                            var1 = var1.bind(var2)();
                        case 21:
                            var1 = _closure2_slot2;
                            var3 = var1.code;
                            var2 = var3.split;
                            var1 = '-';
                            var5 = var2.bind(var3)(var1);
                            var3 = _closure1_slot3;
                            var4 = undefined;
                            var2 = 2;
                            var3 = var3.bind(var4)(var5, var2);
                            var2 = 0;
                            var2 = var3[var2];
                            var _closure3_slot0 = var2;
                            var2 = 1;
                            var2 = var3[var2];
                            var _closure3_slot1 = var2;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 27;
                            var2 = var1[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = 28;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.default;
                                var1 = {};
                                var3 = _closure3_slot1;
                                var1.guildId = var3;
                                var0 = _closure3_slot0;
                                var1.skuId = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
                return var1;
            case 1046:
                var1 = function(arg0) { // Environment: var0
                    _fun51715: for (var _fun51715_ip = 0;;) switch (_fun51715_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51715_ip = 21;
                                continue _fun51715
                            }
                        case 11:
                            var1 = var2.preventDefault;
                            var1 = var1.bind(var2)();
                        case 21:
                            var1 = _closure2_slot2;
                            var3 = var1.code;
                            var2 = var3.split;
                            var1 = '-';
                            var5 = var2.bind(var3)(var1);
                            var3 = _closure1_slot3;
                            var4 = undefined;
                            var2 = 2;
                            var3 = var3.bind(var4)(var5, var2);
                            var2 = 0;
                            var2 = var3[var2];
                            var _closure3_slot0 = var2;
                            var2 = 1;
                            var2 = var3[var2];
                            var _closure3_slot1 = var2;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 27;
                            var2 = var1[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = 26;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var3 = var0.openGuildProductLink;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
                return var1;
            case 1053:
                var1 = function(arg0) { // Environment: var0
                    _fun51704: for (var _fun51704_ip = 0;;) switch (_fun51704_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = null;
                            if (!(var6 != var2)) {
                                _fun51704_ip = 21;
                                continue _fun51704
                            }
                        case 11:
                            var0 = var2.preventDefault;
                            var0 = var0.bind(var2)();
                        case 21:
                            var2 = _closure2_slot2;
                            var7 = var2.code;
                            var _closure3_slot0 = var7;
                            var0 = _closure2_slot2;
                            var4 = var0.url;
                            var2 = _closure1_slot5;
                            var0 = var2.getApplication;
                            var8 = var0.bind(var2)(var7);
                            var0 = global;
                            var0 = var0.URL;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var16 = var2;
                            var15 = var4;
                            var0 = new var16[var0](var15, var14);
                            var2 = var0 instanceof Object ? var0 : var2;
                            var _closure3_slot1 = var2;
                            var5 = var2.searchParams;
                            var4 = var5.get;
                            var0 = 'referrer_id';
                            var4 = var4.bind(var5)(var0);
                            var9 = var6 != var4;
                            var5 = undefined;
                            var0 = undefined;
                            if (!var9) {
                                _fun51704_ip = 133;
                                continue _fun51704
                            }
                        case 130:
                            var0 = var4;
                        case 133:
                            var _closure3_slot2 = var0;
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 20;
                            var0 = var9[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.bind(var5)();
                            var _closure3_slot3 = var0;
                            var4 = _closure1_slot0;
                            var0 = 21;
                            var0 = var9[var0];
                            var4 = var4.bind(var5)(var0);
                            var0 = var4.getPlayInContext;
                            var9 = var0.bind(var4)(var7);
                            var4 = var9.currentChannelId;
                            var _closure3_slot4 = var4;
                            var0 = var9.instanceId;
                            var _closure3_slot5 = var0;
                            var0 = var9.isCurrentlyInInstance;
                            var9 = var9.canLaunchInChannel;
                            if (var9) {
                                _fun51704_ip = 340;
                                continue _fun51704
                            }
                        case 227:
                            var9 = var6 == var8;
                            var12 = undefined;
                            if (var9) {
                                _fun51704_ip = 256;
                                continue _fun51704
                            }
                        case 236:
                            var8 = var8.bot;
                            var9 = var6 == var8;
                            var12 = undefined;
                            if (var9) {
                                _fun51704_ip = 256;
                                continue _fun51704
                            }
                        case 251:
                            var12 = var8.id;
                        case 256:
                            var8 = var6 != var12;
                            if (!var8) {
                                _fun51704_ip = 338;
                                continue _fun51704
                            }
                        case 263:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 24;
                            var9 = var11[var9];
                            var11 = var10.bind(var5)(var9);
                            var10 = var11.openPrivateChannel;
                            var9 = {};
                            var9.recipientIds = var12;
                            var11 = var10.bind(var11)(var9);
                            var10 = var11.then;
                            var9 = function() { // Environment: var1
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = function*(arg0) { // Environment: var0
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun51712: for (var _fun51712_ip = 0;;) switch (_fun51712_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun51712_ip = 194;
                                                    continue _fun51712
                                                }
                                            case 10:
                                                var4 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 22;
                                                var1 = var2[var1];
                                                var2 = undefined;
                                                var8 = var4.bind(var2)(var1);
                                                var7 = var8.getCustomActivityLinkParams;
                                                var6 = _closure3_slot0;
                                                var1 = _closure3_slot1;
                                                var9 = var1.searchParams;
                                                var4 = var9.get;
                                                var1 = 'link_id';
                                                var4 = var4.bind(var9)(var1);
                                                var1 = _closure3_slot1;
                                                var10 = var1.searchParams;
                                                var9 = var10.get;
                                                var1 = 'custom_id';
                                                var1 = var9.bind(var10)(var1);
                                                var1 = var7.bind(var8)(var6, var4, var1);
                                                SaveGenerator(address = 107);
                                            case 105:
                                                return var1;
                                            case 107:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun51712_ip = 191;
                                                    continue _fun51712
                                                }
                                            case 113:
                                                var6 = var1.customId;
                                                var4 = _closure1_slot1;
                                                var7 = _closure1_slot2;
                                                var3 = 25;
                                                var3 = var7[var3];
                                                var4 = var4.bind(var2)(var3);
                                                var3 = {};
                                                var7 = _closure3_slot0;
                                                var3.targetApplicationId = var7;
                                                var7 = arg0;
                                                var3.channelId = var7;
                                                var7 = _closure2_slot1;
                                                var3.analyticsLocations = var7;
                                                var3.customId = var6;
                                                var5 = _closure3_slot2;
                                                var3.referrerId = var5;
                                                var3 = var4.bind(var2)(var3);
                                                return var2;
                                            case 191:
                                                return var1;
                                            case 194:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var9 = var9.bind(var5)();
                            var11 = var10.bind(var11)(var9);
                            var10 = var11.catch;
                            var9 = function() { // Environment: var1
                                var0 = undefined;
                                return var0;
                            };
                            var9 = var10.bind(var11)(var9);
                            var8 = true;
                        case 338:
                            return var8;
                        case 340:
                            var0 = !var0;
                            if (!var0) {
                                _fun51704_ip = 350;
                                continue _fun51704
                            }
                        case 346:
                            var0 = var6 != var4;
                        case 350:
                            if (!var0) {
                                _fun51704_ip = 463;
                                continue _fun51704
                            }
                        case 353:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 22;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            var4 = var6.getCustomActivityLinkParams;
                            var9 = var2.searchParams;
                            var8 = var9.get;
                            var3 = 'link_id';
                            var3 = var8.bind(var9)(var3);
                            var9 = var2.searchParams;
                            var8 = var9.get;
                            var2 = 'custom_id';
                            var2 = var8.bind(var9)(var2);
                            var4 = var4.bind(var6)(var7, var3, var2);
                            var3 = var4.then;
                            var2 = function() { // Environment: var1
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = function*(arg0) { // Environment: var0
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun51707: for (var _fun51707_ip = 0;;) switch (_fun51707_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun51707_ip = 155;
                                                    continue _fun51707
                                                }
                                            case 10:
                                                var1 = arg0;
                                                var7 = var1.customId;
                                                var3 = undefined;
                                                SaveGenerator(address = 25);
                                            case 23:
                                                return var3;
                                            case 25:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                if (var2) {
                                                    _fun51707_ip = 152;
                                                    continue _fun51707
                                                }
                                            case 31:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var2 = 23;
                                                var2 = var5[var2];
                                                var5 = var4.bind(var3)(var2);
                                                var4 = var5.runPrimaryAppCommandOrJoinEmbeddedActivity;
                                                var2 = {};
                                                var8 = _closure3_slot4;
                                                var2.channelId = var8;
                                                var8 = _closure3_slot0;
                                                var2.applicationId = var8;
                                                var9 = _closure3_slot5;
                                                var8 = null;
                                                var8 = var8 == var9;
                                                var2.isStart = var8;
                                                var8 = _closure3_slot3;
                                                var2.embeddedActivitiesManager = var8;
                                                var2.customId = var7;
                                                var6 = _closure3_slot2;
                                                var2.referrerId = var6;
                                                var6 = _closure2_slot1;
                                                var2.analyticsLocations = var6;
                                                var2 = var4.bind(var5)(var2);
                                                SaveGenerator(address = 140);
                                            case 138:
                                                return var2;
                                            case 140:
                                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun51707_ip = 149;
                                                    continue _fun51707
                                                }
                                            case 146:
                                                return var3;
                                            case 149:
                                                return var2;
                                            case 152:
                                                return var1;
                                            case 155:
                                                return var0;
                                        }
                                    };
                                    var1 = var0.next;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var2 = var2.bind(var5)();
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.catch;
                            var1 = function() { // Environment: var1
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0 = true;
                        case 463:
                            return var0;
                    }
                };
                return var1;
            case 1060:
                var1 = function(arg0) { // Environment: var0
                    _fun51703: for (var _fun51703_ip = 0;;) switch (_fun51703_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun51703_ip = 19;
                                continue _fun51703
                            }
                        case 9:
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                        case 19:
                            var1 = _closure2_slot2;
                            var6 = var1.code;
                            var1 = _closure2_slot2;
                            var5 = var1.type;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var8 = 16;
                            var4 = var2[var8];
                            var2 = undefined;
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.CodedLinkType;
                            var4 = var4.APP_DIRECTORY_PROFILE;
                            if (!(var5 !== var4)) {
                                _fun51703_ip = 174;
                                continue _fun51703
                            }
                        case 81:
                            var4 = _closure2_slot2;
                            var5 = var4.type;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var8];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.CodedLinkType;
                            var4 = var4.APP_DIRECTORY_STOREFRONT;
                            if (!(var5 !== var4)) {
                                _fun51703_ip = 174;
                                continue _fun51703
                            }
                        case 123:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 17;
                            var4 = var7[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.parseStorefrontSkuCodedLink;
                            var4 = var4.bind(var5)(var6);
                            if (!(var3 == var4)) {
                                _fun51703_ip = 172;
                                continue _fun51703
                            }
                        case 158:
                            var5 = {};
                            var5.applicationId = var2;
                            var5.skuId = var2;
                            var4 = var5;
                        case 172:
                            _fun51703_ip = 188;
                            continue _fun51703;
                        case 174:
                            var5 = {};
                            var5.applicationId = var6;
                            var5.skuId = var2;
                            var4 = var5;
                        case 188:
                            var8 = var4.applicationId;
                            var4 = var4.skuId;
                            var5 = _closure1_slot10;
                            var4 = var5.getGuildId;
                            var4 = var4.bind(var5)();
                            var5 = var3 != var4;
                            var7 = undefined;
                            if (!var5) {
                                _fun51703_ip = 225;
                                continue _fun51703
                            }
                        case 222:
                            var7 = var4;
                        case 225:
                            if (!(var3 != var8)) {
                                _fun51703_ip = 310;
                                continue _fun51703
                            }
                        case 229:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var6 = var4.bind(var2)(var3);
                            var5 = var6.track;
                            var3 = _closure1_slot12;
                            var4 = var3.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
                            var3 = {};
                            var3.application_id = var8;
                            var8 = 'mobile_native';
                            var3.device_platform = var8;
                            var3.guild_id = var7;
                            var8 = _closure1_slot9;
                            var7 = var8.getChannelId;
                            var7 = var7.bind(var8)();
                            var3.channel_id = var7;
                            var3 = var5.bind(var6)(var4, var3);
                        case 310:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 18;
                            var1 = var4[var1];
                            var1 = var3.bind(var2)(var1);
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = true;
                            return var0;
                    }
                };
                return var1;
            case 1067:
                var0 = function(arg0) { // Environment: var0
                    _fun51701: for (var _fun51701_ip = 0;;) switch (_fun51701_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun51701_ip = 19;
                                continue _fun51701
                            }
                        case 9:
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                        case 19:
                            var2 = _closure2_slot2;
                            var1 = function() {
                                var0 = undefined;
                                var3 = _closure1_slot20;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            var0 = true;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 3445, 3325, 1216, 1672, 3314, 1661, 3204, 4372, 660, 3274, 5223, 806, 5893, 3313, 3318, 3334, 3129, 795, 7937, 11579, 12047, 7907, 3936, 7973, 12118, 1307, 12119, 5309, 3515, 1457, 10019, 3335, 4593, 5612, 4298, 3454, 12123, 11351, 2]);