// records/UserRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        _fun18095: for (var _fun18095_ip = 0;;) switch (_fun18095_ip) {
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
                _fun18095_ip = 74;
                continue _fun18095;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.LOCAL_BOT_ID;
    var _closure1_slot9 = var7;
    var7 = var4.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = var7;
    var7 = var4.PREMIUM_TYPE_NONE;
    var _closure1_slot11 = var7;
    var4 = var4.UserFlags;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.SKU_ID_PURCHASED_FLAGS;
    var _closure1_slot13 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot14 = var7;
    var4 = var4.PurchasedFlags;
    var _closure1_slot15 = var4;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun18099: for (var _fun18099_ip = 0;;) switch (_fun18099_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var11 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18099_ip = 67;
                        continue _fun18099
                    }
                case 54:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var3, var2);
                    _fun18099_ip = 105;
                    continue _fun18099;
                case 67:
                    var6 = global;
                    var10 = var6.Reflect;
                    var9 = var10.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var2)(var3);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var9.bind(var10)(var11, var6, var7);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var8
                        var0 = false;
                        return var0;
                    };
                    var0.hasFlag = var1;
                    var1 = function() { // Environment: var8
                        var0 = false;
                        return var0;
                    };
                    var0.isStaff = var1;
                    var1 = function() { // Environment: var8
                        var0 = false;
                        return var0;
                    };
                    var0.isStaffPersonal = var1;
                    var1 = function() { // Environment: var8
                        var0 = false;
                        return var0;
                    };
                    var0.hasAnyStaffLevel = var1;
                    var6 = var4.premium_type;
                    var1 = null;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 177;
                        continue _fun18099
                    }
                case 171:
                    var6 = var4.premiumType;
                case 177:
                    var3 = var4.id;
                    var0.id = var3;
                    var7 = var4.username;
                    var9 = var1 != var7;
                    var3 = '';
                    if (!var9) {
                        _fun18099_ip = 207;
                        continue _fun18099
                    }
                case 204:
                    var3 = var7;
                case 207:
                    var0.username = var3;
                    var3 = var4.discriminator;
                    if (!(var1 == var3)) {
                        _fun18099_ip = 227;
                        continue _fun18099
                    }
                case 223:
                    var3 = _closure1_slot10;
                case 227:
                    var0.discriminator = var3;
                    var7 = var4.avatar;
                    var9 = var1 != var7;
                    var3 = null;
                    if (!var9) {
                        _fun18099_ip = 251;
                        continue _fun18099
                    }
                case 248:
                    var3 = var7;
                case 251:
                    var0.avatar = var3;
                    var3 = var4.avatar_decoration_data;
                    if (!(var1 == var3)) {
                        _fun18099_ip = 273;
                        continue _fun18099
                    }
                case 267:
                    var3 = var4.avatarDecorationData;
                case 273:
                    var0.avatarDecoration = var3;
                    var7 = var4.email;
                    var9 = var1 != var7;
                    var3 = null;
                    if (!var9) {
                        _fun18099_ip = 297;
                        continue _fun18099
                    }
                case 294:
                    var3 = var7;
                case 297:
                    var0.email = var3;
                    var7 = var4.verified;
                    var3 = var1 != var7;
                    if (!var3) {
                        _fun18099_ip = 319;
                        continue _fun18099
                    }
                case 316:
                    var3 = var7;
                case 319:
                    var0.verified = var3;
                    var7 = var4.bot;
                    var3 = var1 != var7;
                    if (!var3) {
                        _fun18099_ip = 341;
                        continue _fun18099
                    }
                case 338:
                    var3 = var7;
                case 341:
                    var0.bot = var3;
                    var7 = var4.system;
                    var3 = var1 != var7;
                    if (!var3) {
                        _fun18099_ip = 363;
                        continue _fun18099
                    }
                case 360:
                    var3 = var7;
                case 363:
                    var0.system = var3;
                    var7 = var4.mfa_enabled;
                    if (!(var1 == var7)) {
                        _fun18099_ip = 385;
                        continue _fun18099
                    }
                case 379:
                    var7 = var4.mfaEnabled;
                case 385:
                    var3 = var1 != var7;
                    if (!var3) {
                        _fun18099_ip = 395;
                        continue _fun18099
                    }
                case 392:
                    var3 = var7;
                case 395:
                    var0.mfaEnabled = var3;
                    var7 = var4.mobile;
                    var3 = var1 != var7;
                    if (!var3) {
                        _fun18099_ip = 417;
                        continue _fun18099
                    }
                case 414:
                    var3 = var7;
                case 417:
                    var0.mobile = var3;
                    var7 = var4.desktop;
                    var3 = var1 != var7;
                    if (!var3) {
                        _fun18099_ip = 439;
                        continue _fun18099
                    }
                case 436:
                    var3 = var7;
                case 439:
                    var0.desktop = var3;
                    var7 = _closure1_slot11;
                    var3 = null;
                    if (!(var6 !== var7)) {
                        _fun18099_ip = 458;
                        continue _fun18099
                    }
                case 455:
                    var3 = var6;
                case 458:
                    var0.premiumType = var3;
                    var7 = var4.flags;
                    var9 = var1 != var7;
                    var3 = 0;
                    var6 = 0;
                    if (!var9) {
                        _fun18099_ip = 483;
                        continue _fun18099
                    }
                case 480:
                    var6 = var7;
                case 483:
                    var0.flags = var6;
                    var7 = var4.public_flags;
                    if (!(var1 == var7)) {
                        _fun18099_ip = 505;
                        continue _fun18099
                    }
                case 499:
                    var7 = var4.publicFlags;
                case 505:
                    var9 = var1 != var7;
                    var6 = 0;
                    if (!var9) {
                        _fun18099_ip = 517;
                        continue _fun18099
                    }
                case 514:
                    var6 = var7;
                case 517:
                    var0.publicFlags = var6;
                    var7 = var4.purchased_flags;
                    if (!(var1 == var7)) {
                        _fun18099_ip = 539;
                        continue _fun18099
                    }
                case 533:
                    var7 = var4.purchasedFlags;
                case 539:
                    var9 = var1 != var7;
                    var6 = 0;
                    if (!var9) {
                        _fun18099_ip = 551;
                        continue _fun18099
                    }
                case 548:
                    var6 = var7;
                case 551:
                    var0.purchasedFlags = var6;
                    var7 = var4.premium_usage_flags;
                    if (!(var1 == var7)) {
                        _fun18099_ip = 573;
                        continue _fun18099
                    }
                case 567:
                    var7 = var4.premiumUsageFlags;
                case 573:
                    var9 = var1 != var7;
                    var6 = 0;
                    if (!var9) {
                        _fun18099_ip = 585;
                        continue _fun18099
                    }
                case 582:
                    var6 = var7;
                case 585:
                    var0.premiumUsageFlags = var6;
                    var7 = var4.phone;
                    var9 = var1 != var7;
                    var6 = null;
                    if (!var9) {
                        _fun18099_ip = 609;
                        continue _fun18099
                    }
                case 606:
                    var6 = var7;
                case 609:
                    var0.phone = var6;
                    var6 = var4.nsfw_allowed;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 631;
                        continue _fun18099
                    }
                case 625:
                    var6 = var4.nsfwAllowed;
                case 631:
                    var0.nsfwAllowed = var6;
                    var6 = var4.age_verification_status;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 653;
                        continue _fun18099
                    }
                case 647:
                    var6 = var4.ageVerificationStatus;
                case 653:
                    var0.ageVerificationStatus = var6;
                    var6 = var4.guildMemberAvatars;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 671;
                        continue _fun18099
                    }
                case 669:
                    var6 = {};
                case 671:
                    var0.guildMemberAvatars = var6;
                    var7 = var4.has_bounced_email;
                    if (!(var1 == var7)) {
                        _fun18099_ip = 695;
                        continue _fun18099
                    }
                case 689:
                    var7 = var4.hasBouncedEmail;
                case 695:
                    var6 = var1 != var7;
                    if (!var6) {
                        _fun18099_ip = 705;
                        continue _fun18099
                    }
                case 702:
                    var6 = var7;
                case 705:
                    var0.hasBouncedEmail = var6;
                    var7 = var4.personal_connection_id;
                    if (!(var1 == var7)) {
                        _fun18099_ip = 727;
                        continue _fun18099
                    }
                case 721:
                    var7 = var4.personalConnectionId;
                case 727:
                    var9 = var1 != var7;
                    var6 = null;
                    if (!var9) {
                        _fun18099_ip = 739;
                        continue _fun18099
                    }
                case 736:
                    var6 = var7;
                case 739:
                    var0.personalConnectionId = var6;
                    var6 = var4.global_name;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 761;
                        continue _fun18099
                    }
                case 755:
                    var6 = var4.globalName;
                case 761:
                    var0.globalName = var6;
                    var6 = var4.banner;
                    var0.banner = var6;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 8;
                    var6 = var9[var6];
                    var9 = var7.bind(var2)(var6);
                    var7 = var9.ensureUserPrimaryGuild;
                    var10 = var4.primary_guild;
                    if (!(var1 == var10)) {
                        _fun18099_ip = 821;
                        continue _fun18099
                    }
                case 815:
                    var10 = var4.primaryGuild;
                case 821:
                    var11 = var1 != var10;
                    var6 = null;
                    if (!var11) {
                        _fun18099_ip = 833;
                        continue _fun18099
                    }
                case 830:
                    var6 = var10;
                case 833:
                    var6 = var7.bind(var9)(var6);
                    var0.primaryGuild = var6;
                    var6 = var4.collectibles;
                    var0.collectibles = var6;
                    var6 = var4.displayNameStyles;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 903;
                        continue _fun18099
                    }
                case 866:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 9;
                    var7 = var10[var7];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.parseServerDisplayNameStyles;
                    var7 = var4.display_name_styles;
                    var6 = var9.bind(var10)(var7);
                case 903:
                    var0.displayNameStyles = var6;
                    var6 = var4.premiumState;
                    if (!(var1 == var6)) {
                        _fun18099_ip = 956;
                        continue _fun18099
                    }
                case 919:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 10;
                    var7 = var10[var7];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.parseServerPremiumState;
                    var7 = var4.premium_state;
                    var6 = var9.bind(var10)(var7);
                case 956:
                    var0.premiumState = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 11;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.ensureRestrictedScheduleRecord;
                    var5 = var4.restricted_schedule;
                    if (!(var1 == var5)) {
                        _fun18099_ip = 1004;
                        continue _fun18099
                    }
                case 998:
                    var5 = var4.restrictedSchedule;
                case 1004:
                    var5 = var6.bind(var7)(var5);
                    var0.restrictedSchedule = var5;
                    var5 = var4.appTransactionIds;
                    if (!(var1 == var5)) {
                        _fun18099_ip = 1031;
                        continue _fun18099
                    }
                case 1025:
                    var5 = var4.app_transaction_ids;
                case 1031:
                    var6 = var1 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun18099_ip = 1043;
                        continue _fun18099
                    }
                case 1040:
                    var4 = var5;
                case 1043:
                    var0.appTransactionIds = var4;
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.defineProperties;
                    var4 = {};
                    var7 = {
                        'writable': false,
                        'configurable': false,
                        'enumerable': false
                    };
                    var9 = function arg0() {
                        _fun18104: for (var _fun18104_ip = 0;;) switch (_fun18104_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = 1073741824;
                                if (!(!(var1 <= var0))) {
                                    _fun18104_ip = 153;
                                    continue _fun18104
                                }
                            case 16:
                                var8 = _closure1_slot2;
                                var9 = _closure1_slot3;
                                var0 = 12;
                                var2 = var9[var0];
                                var5 = undefined;
                                var6 = var8.bind(var5)(var2);
                                var4 = var6.deserialize;
                                var2 = _closure3_slot0;
                                var3 = var2.flags;
                                var7 = var4.bind(var6)(var3);
                                var3 = var9[var0];
                                var4 = var8.bind(var5)(var3);
                                var3 = var4.deserialize;
                                var2 = var2.publicFlags;
                                var6 = var3.bind(var4)(var2);
                                var2 = var9[var0];
                                var3 = var8.bind(var5)(var2);
                                var2 = var3.deserialize;
                                var4 = var2.bind(var3)(var1);
                                var2 = var9[var0];
                                var3 = var8.bind(var5)(var2);
                                var2 = var3.has;
                                var0 = var9[var0];
                                var5 = var8.bind(var5)(var0);
                                var0 = var5.combine;
                                var0 = var0.bind(var5)(var7, var6);
                                var0 = var2.bind(var3)(var0, var4);
                                return var0;
                            case 153:
                                var0 = _closure3_slot0;
                                var2 = var0.flags;
                                var0 = var0.publicFlags;
                                var0 = var2 | var0;
                                var0 = var0 & var1;
                                var0 = var0 === var1;
                                return var0;
                        }
                    };
                    var7.value = var9;
                    var4.hasFlag = var7;
                    var7 = {
                        'writable': false,
                        'configurable': false,
                        'enumerable': false
                    };
                    var9 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.hasFlag;
                        var0 = _closure1_slot12;
                        var0 = var0.STAFF;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7.value = var9;
                    var4.isStaff = var7;
                    var7 = {
                        'writable': false,
                        'configurable': false,
                        'enumerable': false
                    };
                    var9 = function() {
                        _fun18106: for (var _fun18106_ip = 0;;) switch (_fun18106_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var2 = var3.hasFlag;
                                var0 = _closure1_slot12;
                                var0 = var0.STAFF;
                                var0 = var2.bind(var3)(var0);
                                var0 = !var0;
                                if (!var0) {
                                    _fun18106_ip = 53;
                                    continue _fun18106
                                }
                            case 37:
                                var1 = _closure3_slot0;
                                var2 = var1.personalConnectionId;
                                var1 = null;
                                var0 = var1 != var2;
                            case 53:
                                return var0;
                        }
                    };
                    var7.value = var9;
                    var4.isStaffPersonal = var7;
                    var7 = {
                        'writable': false,
                        'configurable': false,
                        'enumerable': false
                    };
                    var8 = function() {
                        _fun18107: for (var _fun18107_ip = 0;;) switch (_fun18107_ip) {
                            case 0:
                                var4 = _closure3_slot0;
                                var3 = var4.hasFlag;
                                var0 = _closure1_slot12;
                                var0 = var0.STAFF;
                                var0 = var3.bind(var4)(var0);
                                if (var0) {
                                    _fun18107_ip = 59;
                                    continue _fun18107
                                }
                            case 34:
                                var5 = _closure3_slot0;
                                var4 = var5.hasFlag;
                                var3 = _closure1_slot12;
                                var3 = var3.COLLABORATOR;
                                var0 = var4.bind(var5)(var3);
                            case 59:
                                if (var0) {
                                    _fun18107_ip = 87;
                                    continue _fun18107
                                }
                            case 62:
                                var3 = _closure3_slot0;
                                var2 = var3.hasFlag;
                                var1 = _closure1_slot12;
                                var1 = var1.RESTRICTED_COLLABORATOR;
                                var0 = var2.bind(var3)(var1);
                            case 87:
                                return var0;
                        }
                    };
                    var7.value = var8;
                    var4.hasAnyStaffLevel = var7;
                    var4 = var5.bind(var6)(var0, var4);
                    var4 = var0.globalName;
                    var5 = var1 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun18099_ip = 1187;
                        continue _fun18099
                    }
                case 1182:
                    var2 = var4.length;
                case 1187:
                    if (!(var3 === var2)) {
                        _fun18099_ip = 1197;
                        continue _fun18099
                    }
                case 1191:
                    var0.globalName = var1;
                case 1197:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'createdAt';
        var4.key = var0;
        var0 = function() {
            var0 = global;
            var2 = var0.Date;
            var3 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var1);
            var1 = var3.extractTimestamp;
            var0 = this;
            var0 = var0.id;
            var4 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(32);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasVerifiedEmailOrPhone';
        var4.key = var6;
        var6 = function() {
            _fun18109: for (var _fun18109_ip = 0;;) switch (_fun18109_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.verified;
                    var0 = true;
                    var0 = var0 === var2;
                    if (var0) {
                        _fun18109_ip = 30;
                        continue _fun18109
                    }
                case 18:
                    var2 = var1.phone;
                    var1 = null;
                    var0 = var1 != var2;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAvatarURL';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun18110: for (var _fun18110_ip = 0;;) switch (_fun18110_ip) {
                case 0:
                    var8 = arg0;
                    var5 = arguments[2];
                    var4 = arguments[3];
                    var6 = this;
                    var3 = undefined;
                    if (!(var5 === var3)) {
                        _fun18110_ip = 20;
                        continue _fun18110
                    }
                case 18:
                    var5 = false;
                case 20:
                    if (!(var4 === var3)) {
                        _fun18110_ip = 53;
                        continue _fun18110
                    }
                case 24:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 14;
                    var0 = var2[var0];
                    var0 = var1.bind(var3)(var0);
                    var4 = var0.SUPPORTS_WEBP;
                case 53:
                    var9 = null;
                    var0 = var9 != var8;
                    var7 = undefined;
                    if (!var0) {
                        _fun18110_ip = 74;
                        continue _fun18110
                    }
                case 64:
                    var0 = var6.guildMemberAvatars;
                    var7 = var0[var8];
                case 74:
                    if (!(var9 != var7)) {
                        _fun18110_ip = 82;
                        continue _fun18110
                    }
                case 78:
                    if (!(var9 == var8)) {
                        _fun18110_ip = 134;
                        continue _fun18110
                    }
                case 82:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 14;
                    var0 = var2[var0];
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.getUserAvatarURL;
                    var12 = arg1;
                    var15 = var2;
                    var14 = var6;
                    var13 = var5;
                    var11 = null;
                    var10 = var4;
                    var0 = var15[var1](var14, var13, var12, var11, var10, var9);
                    _fun18110_ip = 198;
                    continue _fun18110;
                case 134:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 14;
                    var1 = var9[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.getGuildMemberAvatarURLSimple;
                    var1 = {};
                    var1.guildId = var8;
                    var1.avatar = var7;
                    var6 = var6.id;
                    var1.userId = var6;
                    var1.canAnimate = var5;
                    var1.canWebP = var4;
                    var0 = var2.bind(var3)(var1);
                case 198:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'addGuildAvatarHash';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun18111: for (var _fun18111_ip = 0;;) switch (_fun18111_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var0 = this;
                    var3 = var0.guildMemberAvatars;
                    var3 = var3[var2];
                    if (!(var3 !== var1)) {
                        _fun18111_ip = 63;
                        continue _fun18111
                    }
                case 23:
                    var3 = {};
                    var5 = var0.guildMemberAvatars;
                    var6 = var3;
                    var4 = copyDataProperties(var6, var5);
                    var3[var2] = var1;
                    var2 = var0.merge;
                    var1 = {};
                    var1.guildMemberAvatars = var3;
                    var1 = var2.bind(var0)(var1);
                    return var1;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'removeGuildAvatarHash';
        var4.key = var6;
        var6 = function arg0() {
            _fun18112: for (var _fun18112_ip = 0;;) switch (_fun18112_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.guildMemberAvatars;
                    var3 = var1[var2];
                    var1 = undefined;
                    if (!(var1 !== var3)) {
                        _fun18112_ip = 62;
                        continue _fun18112
                    }
                case 22:
                    var3 = {};
                    var5 = var0.guildMemberAvatars;
                    var6 = var3;
                    var4 = copyDataProperties(var6, var5);
                    var3[var2] = var1;
                    var2 = var0.merge;
                    var1 = {};
                    var1.guildMemberAvatars = var3;
                    var1 = var2.bind(var0)(var1);
                    return var1;
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAvatarSource';
        var4.key = var6;
        var6 = function arg0() {
            _fun18113: for (var _fun18113_ip = 0;;) switch (_fun18113_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arguments[1];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var5;
                    var4 = undefined;
                    if (!(var3 === var4)) {
                        _fun18113_ip = 27;
                        continue _fun18113
                    }
                case 25:
                    var3 = false;
                case 27:
                    var2 = arguments[2];
                    var _closure3_slot2 = var2;
                    var _closure3_slot3 = var4;
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun18113_ip = 62;
                        continue _fun18113
                    }
                case 44:
                    var1 = var1.guildMemberAvatars;
                    var1 = var1[var5];
                    _closure3_slot3 = var1;
                    if (!(var2 == var1)) {
                        _fun18113_ip = 104;
                        continue _fun18113
                    }
                case 62:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 14;
                    var1 = var5[var1];
                    var5 = var2.bind(var4)(var1);
                    var2 = var5.getAnimatableSourceWithFallback;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.getUserAvatarSource;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot2;
                        var0 = arg0;
                        var0 = var3.bind(var4)(var2, var0, var1);
                        return var0;
                    };
                    var1 = var2.bind(var5)(var3, var1);
                    return var1;
                case 104:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 14;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getAnimatableSourceWithFallback;
                    var0 = function(arg0) { // Environment: var0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var0 = 14;
                        var1 = var5[var0];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var1);
                        var1 = var2.makeSource;
                        var0 = var5[var0];
                        var4 = var4.bind(var3)(var0);
                        var3 = var4.getGuildMemberAvatarURLSimple;
                        var0 = {};
                        var6 = _closure3_slot1;
                        var0.guildId = var6;
                        var6 = _closure3_slot3;
                        var0.avatar = var6;
                        var6 = _closure3_slot0;
                        var6 = var6.id;
                        var0.userId = var6;
                        var6 = arg0;
                        var0.canAnimate = var6;
                        var5 = _closure3_slot2;
                        var0.size = var5;
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isClaimed';
        var4.key = var6;
        var6 = function() {
            _fun18116: for (var _fun18116_ip = 0;;) switch (_fun18116_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.email;
                    var2 = null;
                    var0 = var2 != var0;
                    if (var0) {
                        _fun18116_ip = 28;
                        continue _fun18116
                    }
                case 18:
                    var1 = var1.phone;
                    var0 = var2 != var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isPhoneVerified';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.phone;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'toString';
        var4.key = var6;
        var6 = function() {
            _fun18118: for (var _fun18118_ip = 0;;) switch (_fun18118_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.username;
                    var0 = '???';
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun18118_ip = 27;
                        continue _fun18118
                    }
                case 22:
                    var0 = var1.username;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'tag';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var4 = var0.username;
            var2 = var0.discriminator;
            var0 = global;
            var1 = var0.HermesInternal;
            var1 = var1.concat;
            var3 = '';
            var6 = var1.bind(var3)(var2);
            var5 = var6.padStart;
            var2 = 4;
            var1 = '0';
            var2 = var5.bind(var6)(var2, var1);
            var0 = var0.HermesInternal;
            var1 = var0.concat;
            var0 = '#';
            var0 = var1.bind(var3)(var4, var0, var2);
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'hasPurchasedFlag';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hasFlag;
            var0 = this;
            var1 = var0.purchasedFlags;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'hasPremiumUsageFlag';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hasFlag;
            var0 = this;
            var1 = var0.premiumUsageFlags;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'hasHadSKU';
        var4.key = var6;
        var6 = function arg0() {
            _fun18122: for (var _fun18122_ip = 0;;) switch (_fun18122_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot13;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun18122_ip = 37;
                        continue _fun18122
                    }
                case 26:
                    var1 = var3.hasPurchasedFlag;
                    var0 = var1.bind(var3)(var2);
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'hasHadPremium';
        var4.key = var6;
        var6 = function() {
            _fun18123: for (var _fun18123_ip = 0;;) switch (_fun18123_ip) {
                case 0:
                    var4 = arguments[0];
                    var6 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun18123_ip = 14;
                        continue _fun18123
                    }
                case 12:
                    var4 = null;
                case 14:
                    var1 = var6.hasPurchasedFlag;
                    var2 = _closure1_slot15;
                    var0 = var2.PREMIUM_TIER_0;
                    var0 = var1.bind(var6)(var0);
                    var5 = var6.hasPurchasedFlag;
                    var1 = var2.PREMIUM_TIER_1;
                    var1 = var5.bind(var6)(var1);
                    var5 = var6.hasPurchasedFlag;
                    var2 = var2.PREMIUM_TIER_2;
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure1_slot14;
                    var5 = var5.TIER_0;
                    if (!(var5 !== var4)) {
                        _fun18123_ip = 135;
                        continue _fun18123
                    }
                case 86:
                    var5 = _closure1_slot14;
                    var5 = var5.TIER_1;
                    if (!(var5 !== var4)) {
                        _fun18123_ip = 133;
                        continue _fun18123
                    }
                case 100:
                    var3 = _closure1_slot14;
                    var3 = var3.TIER_2;
                    if (!(var3 !== var4)) {
                        _fun18123_ip = 131;
                        continue _fun18123
                    }
                case 114:
                    var3 = var0;
                    if (var3) {
                        _fun18123_ip = 123;
                        continue _fun18123
                    }
                case 120:
                    var3 = var1;
                case 123:
                    if (var3) {
                        _fun18123_ip = 129;
                        continue _fun18123
                    }
                case 126:
                    var3 = var2;
                case 129:
                    return var3;
                case 131:
                    return var2;
                case 133:
                    return var1;
                case 135:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hadPremiumSubscription';
        var4.key = var6;
        var6 = function() {
            _fun18124: for (var _fun18124_ip = 0;;) switch (_fun18124_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var4 = undefined;
                    if (!(var3 === var4)) {
                        _fun18124_ip = 14;
                        continue _fun18124
                    }
                case 12:
                    var3 = null;
                case 14:
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 16;
                    var0 = var5[var0];
                    var1 = var1.bind(var4)(var0);
                    var0 = var1.isPremium;
                    var0 = var0.bind(var1)(var2);
                    var0 = !var0;
                    if (!var0) {
                        _fun18124_ip = 65;
                        continue _fun18124
                    }
                case 54:
                    var1 = var2.hasHadPremium;
                    var0 = var1.bind(var2)(var3);
                case 65:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'hasFreePremium';
        var4.key = var6;
        var6 = function() {
            _fun18125: for (var _fun18125_ip = 0;;) switch (_fun18125_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isStaff;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18125_ip = 40;
                        continue _fun18125
                    }
                case 16:
                    var3 = var2.hasFlag;
                    var1 = _closure1_slot12;
                    var1 = var1.PARTNER;
                    var0 = var3.bind(var2)(var1);
                case 40:
                    if (var0) {
                        _fun18125_ip = 53;
                        continue _fun18125
                    }
                case 43:
                    var1 = var2.isStaffPersonal;
                    var0 = var1.bind(var2)();
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'isPremiumWithPremiumGroup';
        var4.key = var6;
        var6 = function() {
            _fun18126: for (var _fun18126_ip = 0;;) switch (_fun18126_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 16;
                    var0 = var4[var0];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var0);
                    var3 = var5.isPremium;
                    var0 = _closure1_slot14;
                    var0 = var0.TIER_2;
                    var0 = var3.bind(var5)(var2, var0);
                    if (!var0) {
                        _fun18126_ip = 112;
                        continue _fun18126
                    }
                case 53:
                    var3 = var2.premiumState;
                    var2 = null;
                    var5 = var2 == var3;
                    var2 = undefined;
                    if (var5) {
                        _fun18126_ip = 76;
                        continue _fun18126
                    }
                case 70:
                    var2 = var3.premiumSource;
                case 76:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 17;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.PremiumSource;
                    var1 = var1.SUBSCRIPTION_GROUP;
                    var0 = var2 === var1;
                case 112:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isPremiumWithFractionalPremiumOnly';
        var4.key = var6;
        var6 = function() {
            _fun18127: for (var _fun18127_ip = 0;;) switch (_fun18127_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 16;
                    var0 = var4[var0];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var0);
                    var3 = var5.isPremium;
                    var0 = _closure1_slot14;
                    var0 = var0.TIER_2;
                    var0 = var3.bind(var5)(var2, var0);
                    if (!var0) {
                        _fun18127_ip = 172;
                        continue _fun18127
                    }
                case 53:
                    var3 = var2.premiumState;
                    var6 = null;
                    var7 = var6 == var3;
                    var5 = undefined;
                    if (var7) {
                        _fun18127_ip = 76;
                        continue _fun18127
                    }
                case 70:
                    var5 = var3.premiumSubscriptionType;
                case 76:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 17;
                    var3 = var3[var8];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.PremiumSubscriptionType;
                    var3 = var3.NONE_UNSPECIFIED;
                    var3 = var5 === var3;
                    if (var3) {
                        _fun18127_ip = 169;
                        continue _fun18127
                    }
                case 115:
                    var5 = var2.premiumState;
                    var7 = var6 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun18127_ip = 136;
                        continue _fun18127
                    }
                case 130:
                    var6 = var5.premiumSubscriptionType;
                case 136:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.PremiumSubscriptionType;
                    var5 = var5.BOOST_ONLY;
                    var3 = var6 === var5;
                case 169:
                    var0 = var3;
                case 172:
                    if (!var0) {
                        _fun18127_ip = 234;
                        continue _fun18127
                    }
                case 175:
                    var3 = var2.premiumState;
                    var2 = null;
                    var5 = var2 == var3;
                    var2 = undefined;
                    if (var5) {
                        _fun18127_ip = 198;
                        continue _fun18127
                    }
                case 192:
                    var2 = var3.premiumSource;
                case 198:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 17;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.PremiumSource;
                    var1 = var1.FRACTIONAL_NITRO;
                    var0 = var2 === var1;
                case 234:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'isFractionalPremiumWithNoStandardSub';
        var4.key = var6;
        var6 = function() {
            _fun18128: for (var _fun18128_ip = 0;;) switch (_fun18128_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 16;
                    var0 = var4[var0];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var0);
                    var3 = var5.isPremium;
                    var0 = _closure1_slot14;
                    var0 = var0.TIER_2;
                    var0 = var3.bind(var5)(var2, var0);
                    if (!var0) {
                        _fun18128_ip = 112;
                        continue _fun18128
                    }
                case 53:
                    var3 = var2.premiumState;
                    var5 = null;
                    var6 = var5 == var3;
                    var5 = undefined;
                    if (var6) {
                        _fun18128_ip = 76;
                        continue _fun18128
                    }
                case 70:
                    var5 = var3.premiumSource;
                case 76:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 17;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.PremiumSource;
                    var3 = var3.FRACTIONAL_NITRO;
                    var0 = var5 === var3;
                case 112:
                    if (!var0) {
                        _fun18128_ip = 163;
                        continue _fun18128
                    }
                case 115:
                    var2 = var2.premiumState;
                    var2 = var2.premiumSubscriptionType;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 17;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.PremiumSubscriptionType;
                    var1 = var1.TIER_2;
                    var0 = var2 !== var1;
                case 163:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'hasUrgentMessages';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot12;
            var0 = var0.HAS_UNREAD_URGENT_MESSAGES;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'isNonUserBot';
        var4.key = var6;
        var6 = function() {
            _fun18130: for (var _fun18130_ip = 0;;) switch (_fun18130_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isSystemUser;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18130_ip = 45;
                        continue _fun18130
                    }
                case 16:
                    var1 = var2.bot;
                    if (!var1) {
                        _fun18130_ip = 42;
                        continue _fun18130
                    }
                case 25:
                    var3 = var2.discriminator;
                    var2 = _closure1_slot10;
                    var1 = var3 === var2;
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isLocalBot';
        var4.key = var6;
        var6 = function() {
            _fun18131: for (var _fun18131_ip = 0;;) switch (_fun18131_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.bot;
                    if (!var0) {
                        _fun18131_ip = 28;
                        continue _fun18131
                    }
                case 12:
                    var2 = var1.id;
                    var1 = _closure1_slot9;
                    var0 = var2 === var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'isVerifiedBot';
        var4.key = var6;
        var6 = function() {
            _fun18132: for (var _fun18132_ip = 0;;) switch (_fun18132_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.isSystemUser;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun18132_ip = 28;
                        continue _fun18132
                    }
                case 16:
                    var1 = var3.isLocalBot;
                    var0 = var1.bind(var3)();
                case 28:
                    if (var0) {
                        _fun18132_ip = 55;
                        continue _fun18132
                    }
                case 31:
                    var2 = var3.hasFlag;
                    var1 = _closure1_slot12;
                    var1 = var1.VERIFIED_BOT;
                    var0 = var2.bind(var3)(var1);
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'isSystemUser';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.system;
            var0 = true;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'hasAvatarForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun18134: for (var _fun18134_ip = 0;;) switch (_fun18134_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun18134_ip = 29;
                        continue _fun18134
                    }
                case 12:
                    var1 = this;
                    var1 = var1.guildMemberAvatars;
                    var1 = var1[var3];
                    var0 = var2 != var1;
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'hasUniqueUsername';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.discriminator;
            var0 = '0';
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'isPremiumGroupMember';
        var4.key = var6;
        var6 = function() {
            _fun18136: for (var _fun18136_ip = 0;;) switch (_fun18136_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPremiumWithPremiumGroup;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun18136_ip = 63;
                        continue _fun18136
                    }
                case 16:
                    var2 = var1.premiumGroupRole;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.PremiumSubscriptionGroupRole;
                    var1 = var1.MEMBER;
                    var0 = var2 === var1;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'isPremiumGroupPrimary';
        var4.key = var6;
        var6 = function() {
            _fun18137: for (var _fun18137_ip = 0;;) switch (_fun18137_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPremiumWithPremiumGroup;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun18137_ip = 63;
                        continue _fun18137
                    }
                case 16:
                    var2 = var1.premiumGroupRole;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.PremiumSubscriptionGroupRole;
                    var1 = var1.PRIMARY;
                    var0 = var2 === var1;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'isProvisional';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot12;
            var0 = var0.PROVISIONAL_ACCOUNT;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'avatarDecoration';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.avatarDecorationData;
            return var0;
        };
        var4.get = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.parseAvatarDecorationData;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = this;
            var1.avatarDecorationData = var2;
            return var0;
        };
        var4.set = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'nameplate';
        var4.key = var6;
        var6 = function() {
            _fun18141: for (var _fun18141_ip = 0;;) switch (_fun18141_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getNameplateData;
                    var3 = this;
                    var3 = var3.collectibles;
                    var4 = null;
                    var4 = var4 == var3;
                    if (var4) {
                        _fun18141_ip = 55;
                        continue _fun18141
                    }
                case 49:
                    var0 = var3.nameplate;
                case 55:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.get = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'premiumGroupRole';
        var4.key = var6;
        var5 = function() {
            _fun18142: for (var _fun18142_ip = 0;;) switch (_fun18142_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.premiumState;
                    var1 = null;
                    var4 = var1 == var2;
                    var3 = undefined;
                    var0 = undefined;
                    if (var4) {
                        _fun18142_ip = 28;
                        continue _fun18142
                    }
                case 22:
                    var0 = var2.premiumSubscriptionGroupRole;
                case 28:
                    if (!(var1 == var0)) {
                        _fun18142_ip = 67;
                        continue _fun18142
                    }
                case 32:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 17;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.PremiumSubscriptionGroupRole;
                    var0 = var1.UNSPECIFIED;
                case 67:
                    return var0;
            }
        };
        var4.get = var5;
        var0[31] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var1.bind(var0)(var3);
    var1 = {};
    var4 = '0';
    var1.id = var4;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var11 = var1;
    var1 = new var12[var3](var11, var10);
    var1 = var1 instanceof Object ? var1 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/UserRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.PLACEHOLDER_USER_RECORD = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 660, 1623, 1630, 1631, 1635, 1636, 484, 21, 1417, 1384, 1638, 1637, 1605, 1639, 2]);