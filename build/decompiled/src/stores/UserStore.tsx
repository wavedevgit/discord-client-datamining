// stores/UserStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var9;
    var0 = function() {
        _fun17930: for (var _fun17930_ip = 0;;) switch (_fun17930_ip) {
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
                _fun17930_ip = 74;
                continue _fun17930;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun17933: for (var _fun17933_ip = 0;;) switch (_fun17933_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun17933_ip = 46;
                    continue _fun17933
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun17933_ip = 55;
                    continue _fun17933
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun17933_ip = 343;
                    continue _fun17933
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun17933_ip = 323;
                    continue _fun17933
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun17933_ip = 283;
                    continue _fun17933
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun17933_ip = 270;
                    continue _fun17933
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun17933_ip = 163;
                    continue _fun17933
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun17933_ip = 179;
                    continue _fun17933
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun17933_ip = 249;
                    continue _fun17933
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun17933_ip = 249;
                    continue _fun17933
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun17933_ip = 234;
                    continue _fun17933
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun17933_ip = 247;
                    continue _fun17933
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun17933_ip = 265;
                continue _fun17933;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun17933_ip = 283;
                continue _fun17933;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun17933_ip = 323;
                    continue _fun17933
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun17933_ip = 330;
                    continue _fun17933
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun17934: for (var _fun17934_ip = 0;;) switch (_fun17934_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun17934_ip = 56;
                                continue _fun17934
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun17934_ip = 67;
                            continue _fun17934;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun17935: for (var _fun17935_ip = 0;;) switch (_fun17935_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun17935_ip = 23;
                    continue _fun17935
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun17935_ip = 33;
                    continue _fun17935
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun17935_ip = 70;
                    continue _fun17935
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun17935_ip = 55;
                    continue _fun17935
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun17936: for (var _fun17936_ip = 0;;) switch (_fun17936_ip) {
            case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = _closure1_slot16;
                var0 = arg0;
                var1 = var1[var0];
                var0 = null;
                if (!(var0 != var1)) {
                    _fun17936_ip = 92;
                    continue _fun17936
                }
            case 26:
                if (!(var0 != var3)) {
                    _fun17936_ip = 46;
                    continue _fun17936
                }
            case 30:
                var0 = var1.addGuildAvatarHash;
                var0 = var0.bind(var1)(var4, var3);
                _fun17936_ip = 59;
                continue _fun17936;
            case 46:
                var3 = var1.removeGuildAvatarHash;
                var0 = var3.bind(var1)(var4);
            case 59:
                var4 = _closure1_slot16;
                var3 = var1.id;
                var4[var3] = var0;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun17936_ip = 90;
                    continue _fun17936
                }
            case 79:
                var1 = _closure1_slot17;
                var1 = var1 + 1;
                _closure1_slot17 = var1;
            case 90:
                return var0;
            case 92:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun17937: for (var _fun17937_ip = 0;;) switch (_fun17937_ip) {
            case 0:
                var3 = arg1;
                var1 = _closure1_slot16;
                var0 = arg0;
                var6 = var1[var0];
                var7 = null;
                var0 = var7 != var6;
                if (!var0) {
                    _fun17937_ip = 179;
                    continue _fun17937
                }
            case 29:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var9 = 11;
                var1 = var1[var9];
                var8 = undefined;
                var10 = var2.bind(var8)(var1);
                var5 = var10.isUserPrimaryGuildEqual;
                var2 = var6.primaryGuild;
                var1 = var3.primary_guild;
                var1 = var5.bind(var10)(var2, var1);
                var1 = !var1;
                if (!var1) {
                    _fun17937_ip = 176;
                    continue _fun17937
                }
            case 81:
                var2 = var6.primaryGuild;
                var2 = var7 == var2;
                if (var2) {
                    _fun17937_ip = 104;
                    continue _fun17937
                }
            case 94:
                var5 = var3.primary_guild;
                var2 = var7 != var5;
            case 104:
                if (!var2) {
                    _fun17937_ip = 173;
                    continue _fun17937
                }
            case 107:
                var7 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var7 = var7.bind(var8)(var5);
                var5 = var7.ensureUserPrimaryGuild;
                var3 = var3.primary_guild;
                var3 = var5.bind(var7)(var3);
                var6.primaryGuild = var3;
                var5 = _closure1_slot16;
                var3 = var6.id;
                var5[var3] = var6;
                var3 = _closure1_slot17;
                var3 = var3 + 1;
                _closure1_slot17 = var3;
                var2 = true;
            case 173:
                var1 = var2;
            case 176:
                var0 = var1;
            case 179:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var3 = function arg0() {
        _fun17938: for (var _fun17938_ip = 0;;) switch (_fun17938_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.mfa_enabled;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun17938_ip = 26;
                    continue _fun17938
                }
            case 15:
                var0.mfaEnabled = var2;
                var2 = delete var0.mfa_enabled;
            case 26:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 12;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.getPremiumTypeFromRawValue;
                var4 = var0.premium_type;
                var4 = var5.bind(var6)(var4);
                if (!(var2 !== var4)) {
                    _fun17938_ip = 83;
                    continue _fun17938
                }
            case 72:
                var0.premiumType = var4;
                var4 = delete var0.premium_type;
            case 83:
                var4 = var0.nsfw_allowed;
                if (!(var1 != var4)) {
                    _fun17938_ip = 104;
                    continue _fun17938
                }
            case 93:
                var0.nsfwAllowed = var4;
                var4 = delete var0.nsfw_allowed;
            case 104:
                var4 = var0.age_verification_status;
                if (!(var1 != var4)) {
                    _fun17938_ip = 125;
                    continue _fun17938
                }
            case 114:
                var0.ageVerificationStatus = var4;
                var4 = delete var0.age_verification_status;
            case 125:
                var4 = var0.public_flags;
                if (!(var1 != var4)) {
                    _fun17938_ip = 146;
                    continue _fun17938
                }
            case 135:
                var0.publicFlags = var4;
                var4 = delete var0.public_flags;
            case 146:
                var4 = var0.purchased_flags;
                if (!(var2 !== var4)) {
                    _fun17938_ip = 167;
                    continue _fun17938
                }
            case 156:
                var0.purchasedFlags = var4;
                var4 = delete var0.purchased_flags;
            case 167:
                var4 = var0.premium_usage_flags;
                if (!(var2 !== var4)) {
                    _fun17938_ip = 188;
                    continue _fun17938
                }
            case 177:
                var0.premiumUsageFlags = var4;
                var4 = delete var0.premium_usage_flags;
            case 188:
                var4 = var0.banner_color;
                if (!(var1 === var4)) {
                    _fun17938_ip = 203;
                    continue _fun17938
                }
            case 198:
                var4 = delete var0.banner_color;
            case 203:
                var6 = var0.avatar_decoration_data;
                if (!(var2 !== var6)) {
                    _fun17938_ip = 255;
                    continue _fun17938
                }
            case 213:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 13;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.parseAvatarDecorationData;
                var4 = var4.bind(var5)(var6);
                var0.avatarDecorationData = var4;
                var4 = delete var0.avatar_decoration_data;
            case 255:
                var6 = var0.collectibles;
                if (!(var2 !== var6)) {
                    _fun17938_ip = 307;
                    continue _fun17938
                }
            case 265:
                var4 = delete var0.collectibles;
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 14;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.parseServerUserCollectibles;
                var4 = var4.bind(var5)(var6);
                var0.collectibles = var4;
            case 307:
                var4 = var0.global_name;
                if (!(var2 !== var4)) {
                    _fun17938_ip = 328;
                    continue _fun17938
                }
            case 317:
                var0.globalName = var4;
                var4 = delete var0.global_name;
            case 328:
                var6 = var0.primary_guild;
                if (!(var2 !== var6)) {
                    _fun17938_ip = 375;
                    continue _fun17938
                }
            case 338:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 11;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.ensureUserPrimaryGuild;
                var4 = var4.bind(var5)(var6);
                var0.primary_guild = var4;
            case 375:
                var6 = var0.display_name_styles;
                if (!(var2 !== var6)) {
                    _fun17938_ip = 427;
                    continue _fun17938
                }
            case 385:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 15;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.parseServerDisplayNameStyles;
                var4 = var4.bind(var5)(var6);
                var0.displayNameStyles = var4;
                var4 = delete var0.display_name_styles;
            case 427:
                var6 = var0.premium_state;
                if (!(var2 !== var6)) {
                    _fun17938_ip = 479;
                    continue _fun17938
                }
            case 437:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 16;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.parseServerPremiumState;
                var4 = var4.bind(var5)(var6);
                var0.premiumState = var4;
                var4 = delete var0.premium_state;
            case 479:
                var5 = var0.restricted_schedule;
                if (!(var2 !== var5)) {
                    _fun17938_ip = 549;
                    continue _fun17938
                }
            case 489:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 17;
                var3 = var6[var3];
                var3 = var4.bind(var2)(var3);
                var4 = var3.RestrictedScheduleRecord;
                var3 = var4.fromServer;
                var3 = var3.bind(var4)(var5);
                var4 = var1 != var3;
                var1 = null;
                if (!var4) {
                    _fun17938_ip = 538;
                    continue _fun17938
                }
            case 535:
                var1 = var3;
            case 538:
                var0.restrictedSchedule = var1;
                var1 = delete var0.restricted_schedule;
            case 549:
                var1 = var0.app_transaction_ids;
                if (!(var2 !== var1)) {
                    _fun17938_ip = 570;
                    continue _fun17938
                }
            case 559:
                var0.appTransactionIds = var1;
                var1 = delete var0.app_transaction_ids;
            case 570:
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.id;
        var2 = _closure1_slot11;
        var0 = var2.getId;
        var0 = var0.bind(var2)();
        var0 = var1 !== var0;
        return var0;
    };
    var _closure1_slot26 = var0;
    var1 = function arg0() {
        _fun17940: for (var _fun17940_ip = 0;;) switch (_fun17940_ip) {
            case 0:
                var1 = arg0;
                var0 = arguments[1];
                var8 = undefined;
                if (!(var0 === var8)) {
                    _fun17940_ip = 14;
                    continue _fun17940
                }
            case 12:
                var0 = true;
            case 14:
                var4 = _closure1_slot16;
                var3 = var1.id;
                var5 = var4[var3];
                var3 = var1.id;
                var6 = var8 !== var3;
                if (!var6) {
                    _fun17940_ip = 65;
                    continue _fun17940
                }
            case 42:
                var4 = var1.id;
                var7 = _closure1_slot11;
                var3 = var7.getId;
                var3 = var3.bind(var7)();
                var6 = var4 === var3;
            case 65:
                var11 = null;
                if (!(var11 != var5)) {
                    _fun17940_ip = 425;
                    continue _fun17940
                }
            case 74:
                var7 = undefined;
                var4 = var5;
                if (!var0) {
                    _fun17940_ip = 536;
                    continue _fun17940
                }
            case 85:
                var0 = _closure1_slot25;
                var0 = var0.bind(var8)(var1);
                var3 = var1.premium_type;
                if (!(var11 == var3)) {
                    _fun17940_ip = 110;
                    continue _fun17940
                }
            case 104:
                var3 = var1.premiumType;
            case 110:
                var0 = var8 !== var3;
                if (!var0) {
                    _fun17940_ip = 120;
                    continue _fun17940
                }
            case 117:
                var0 = var6;
            case 120:
                if (!var0) {
                    _fun17940_ip = 154;
                    continue _fun17940
                }
            case 123:
                var10 = _closure1_slot0;
                var12 = _closure1_slot3;
                var9 = 12;
                var9 = var12[var9];
                var10 = var10.bind(var8)(var9);
                var9 = var10.isStaffEnvRawData;
                var0 = var9.bind(var10)(var1);
            case 154:
                if (!var0) {
                    _fun17940_ip = 248;
                    continue _fun17940
                }
            case 157:
                var10 = var1.premium_type;
                if (!(var11 == var10)) {
                    _fun17940_ip = 173;
                    continue _fun17940
                }
            case 167:
                var10 = var1.premiumType;
            case 173:
                var9 = _closure1_slot28;
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 12;
                var0 = var13[var0];
                var12 = var12.bind(var8)(var0);
                var0 = var12.isStaffEnvRawData;
                var0 = var0.bind(var12)(var1);
                var0 = var9.bind(var8)(var0, var10);
                var9 = var1.premiumType;
                if (!(var8 === var9)) {
                    _fun17940_ip = 242;
                    continue _fun17940
                }
            case 224:
                var9 = var1.premium_type;
                if (!(var8 !== var9)) {
                    _fun17940_ip = 248;
                    continue _fun17940
                }
            case 234:
                var1.premium_type = var0;
                _fun17940_ip = 248;
                continue _fun17940;
            case 242:
                var1.premiumType = var0;
            case 248:
                var0 = var5.primaryGuild;
                var0 = var11 == var0;
                if (!var0) {
                    _fun17940_ip = 271;
                    continue _fun17940
                }
            case 261:
                var9 = var1.primary_guild;
                var0 = var11 == var9;
            case 271:
                var9 = true;
                if (!(var0 !== var9)) {
                    _fun17940_ip = 409;
                    continue _fun17940
                }
            case 280:
                var0 = var5.primaryGuild;
                var0 = var11 != var0;
                if (!var0) {
                    _fun17940_ip = 303;
                    continue _fun17940
                }
            case 293:
                var10 = var1.primary_guild;
                var0 = var11 == var10;
            case 303:
                if (!(var0 !== var9)) {
                    _fun17940_ip = 397;
                    continue _fun17940
                }
            case 307:
                var11 = _closure1_slot0;
                var0 = _closure1_slot3;
                var10 = 11;
                var0 = var0[var10];
                var13 = var11.bind(var8)(var0);
                var12 = var13.isUserPrimaryGuildEqual;
                var11 = var5.primaryGuild;
                var0 = var1.primary_guild;
                var0 = var12.bind(var13)(var11, var0);
                if (!(var0 !== var9)) {
                    _fun17940_ip = 397;
                    continue _fun17940
                }
            case 355:
                var9 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var10];
                var10 = var9.bind(var8)(var0);
                var9 = var10.ensureUserPrimaryGuild;
                var0 = var1.primary_guild;
                var0 = var9.bind(var10)(var0);
                var1.primary_guild = var0;
                _fun17940_ip = 409;
                continue _fun17940;
            case 397:
                var0 = var5.primaryGuild;
                var1.primary_guild = var0;
            case 409:
                var0 = var5.merge;
                var4 = var0.bind(var5)(var1);
                var7 = var3;
                _fun17940_ip = 536;
                continue _fun17940;
            case 425:
                var0 = _closure1_slot10;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var17 = var3;
                var16 = var1;
                var0 = new var17[var0](var16, var15);
                var0 = var0 instanceof Object ? var0 : var3;
                var3 = var0.premiumType;
                var5 = var8 !== var3;
                if (!var5) {
                    _fun17940_ip = 468;
                    continue _fun17940
                }
            case 465:
                var5 = var6;
            case 468:
                var7 = var3;
                var4 = var0;
                if (!var5) {
                    _fun17940_ip = 536;
                    continue _fun17940
                }
            case 477:
                var9 = _closure1_slot28;
                var6 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 12;
                var5 = var10[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var6.isStaffEnv;
                var6 = var5.bind(var6)(var0);
                var5 = var0.premiumType;
                var5 = var9.bind(var8)(var6, var5);
                var0.premiumType = var5;
                var7 = var3;
                var4 = var0;
            case 536:
                var3 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 12;
                var5 = var9[var0];
                var6 = var3.bind(var8)(var5);
                var5 = var6.validatePremiumType;
                var0 = var9[var0];
                var3 = var3.bind(var8)(var0);
                var0 = var3.isStaffEnv;
                var3 = var0.bind(var3)(var4);
                var0 = var4.premiumType;
                var0 = var5.bind(var6)(var3, var7, var0);
                var3 = _closure1_slot16;
                var0 = var1.id;
                var0 = var3[var0];
                var0 = var0 !== var4;
                var3 = _closure1_slot16;
                var1 = var1.id;
                var3[var1] = var4;
                if (!var0) {
                    _fun17940_ip = 639;
                    continue _fun17940
                }
            case 628:
                var1 = _closure1_slot17;
                var1 = var1 + 1;
                _closure1_slot17 = var1;
            case 639:
                return var0;
        }
    };
    var _closure1_slot27 = var1;
    var0 = function arg0, arg1() {
        _fun17941: for (var _fun17941_ip = 0;;) switch (_fun17941_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun17941_ip = 11;
                    continue _fun17941
                }
            case 6:
                var0 = arg1;
                return var0;
            case 11:
                var1 = _closure1_slot9;
                var0 = var1.getPremiumTypeOverride;
                var0 = var0.bind(var1)();
                var3 = _closure1_slot9;
                var1 = var3.getPremiumTypeActual;
                var1 = var1.bind(var3)();
                var2 = _closure1_slot15;
                if (!(var0 === var2)) {
                    _fun17941_ip = 55;
                    continue _fun17941
                }
            case 52:
                var0 = var1;
            case 55:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun17942: for (var _fun17942_ip = 0;;) switch (_fun17942_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var2 = null;
                var3 = var2 == var8;
                var0 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun17942_ip = 25;
                    continue _fun17942
                }
            case 19:
                var1 = var8.users;
            case 25:
                if (!(var2 != var1)) {
                    _fun17942_ip = 94;
                    continue _fun17942
                }
            case 29:
                var5 = var8.users;
                for (var2 in var5)
                    case 46: {
                        case 55: var10 = var2;
                        var9 = var8.users;
                        var10 = var9[var10];
                        var9 = _closure1_slot26;
                        var9 = var9.bind(var0)(var10);
                        if (!var9) {
                            _fun17942_ip = 46;
                            continue _fun17942
                        }
                        case 80: var9 = _closure1_slot27;
                        var9 = var9.bind(var0)(var10, var7);
                        _fun17942_ip = 46;
                        continue _fun17942;
                    }
            case 92:
                return var0;
            case 94:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun17943: for (var _fun17943_ip = 0;;) switch (_fun17943_ip) {
            case 0:
                var2 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var0 = var2.author;
                var4 = null;
                var0 = var4 != var0;
                if (!var0) {
                    _fun17943_ip = 40;
                    continue _fun17943
                }
            case 27:
                var5 = var2.state;
                var3 = 'SENDING';
                var0 = var3 !== var5;
            case 40:
                if (!var0) {
                    _fun17943_ip = 63;
                    continue _fun17943
                }
            case 43:
                var7 = _closure1_slot26;
                var5 = var2.author;
                var3 = undefined;
                var0 = var7.bind(var3)(var5);
            case 63:
                if (!var0) {
                    _fun17943_ip = 87;
                    continue _fun17943
                }
            case 66:
                var5 = _closure1_slot27;
                var3 = var2.author;
                var0 = undefined;
                var0 = var5.bind(var0)(var3, var6);
            case 87:
                var5 = var2.mentions;
                if (!(var4 != var5)) {
                    _fun17943_ip = 112;
                    continue _fun17943
                }
            case 97:
                var3 = var5.forEach;
                var0 = function(arg0) { // Environment: var1
                    _fun17944: for (var _fun17944_ip = 0;;) switch (_fun17944_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot26;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            if (!var2) {
                                _fun17944_ip = 37;
                                continue _fun17944
                            }
                        case 20:
                            var2 = _closure1_slot27;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var0)(var3, var1);
                        case 37:
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0);
            case 112:
                var5 = var2.interaction;
                var7 = var4 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var7) {
                    _fun17943_ip = 134;
                    continue _fun17943
                }
            case 129:
                var3 = var5.user;
            case 134:
                var3 = var4 != var3;
                if (!var3) {
                    _fun17943_ip = 173;
                    continue _fun17943
                }
            case 141:
                var7 = _closure1_slot26;
                var8 = var2.interaction;
                var9 = var4 == var8;
                var5 = undefined;
                if (var9) {
                    _fun17943_ip = 168;
                    continue _fun17943
                }
            case 163:
                var5 = var8.user;
            case 168:
                var3 = var7.bind(var0)(var5);
            case 173:
                if (!var3) {
                    _fun17943_ip = 200;
                    continue _fun17943
                }
            case 176:
                var5 = _closure1_slot27;
                var3 = var2.interaction;
                var3 = var3.user;
                var3 = var5.bind(var0)(var3, var6);
            case 200:
                var7 = var2.attachments;
                if (!(var4 != var7)) {
                    _fun17943_ip = 225;
                    continue _fun17943
                }
            case 210:
                var5 = var7.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun17945: for (var _fun17945_ip = 0;;) switch (_fun17945_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.clip_participants;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun17945_ip = 34;
                                continue _fun17945
                            }
                        case 17:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun17946: for (var _fun17946_ip = 0;;) switch (_fun17946_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure1_slot26;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var3);
                                        if (!var2) {
                                            _fun17946_ip = 37;
                                            continue _fun17946
                                        }
                                    case 20:
                                        var2 = _closure1_slot27;
                                        var1 = _closure2_slot0;
                                        var1 = var2.bind(var0)(var3, var1);
                                    case 37:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var7)(var3);
            case 225:
                var7 = _closure1_slot29;
                var5 = var2.resolved;
                var5 = var7.bind(var0)(var5, var6);
                var7 = var2.interaction_metadata;
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun17943_ip = 264;
                    continue _fun17943
                }
            case 259:
                var5 = var7.user;
            case 264:
                var5 = var4 != var5;
                if (!var5) {
                    _fun17943_ip = 291;
                    continue _fun17943
                }
            case 271:
                var8 = _closure1_slot26;
                var7 = var2.interaction_metadata;
                var7 = var7.user;
                var5 = var8.bind(var0)(var7);
            case 291:
                if (!var5) {
                    _fun17943_ip = 315;
                    continue _fun17943
                }
            case 294:
                var5 = _closure1_slot27;
                var3 = var2.interaction_metadata;
                var3 = var3.user;
                var3 = var5.bind(var0)(var3, var6);
            case 315:
                var3 = var2.message_snapshots;
                if (!(var4 != var3)) {
                    _fun17943_ip = 346;
                    continue _fun17943
                }
            case 325:
                var3 = var2.message_snapshots;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun17947: for (var _fun17947_ip = 0;;) switch (_fun17947_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.moderator_report;
                            var4 = null;
                            var5 = var4 == var3;
                            var0 = undefined;
                            var2 = undefined;
                            if (var5) {
                                _fun17947_ip = 42;
                                continue _fun17947
                            }
                        case 22:
                            var3 = var3.reported_member;
                            var5 = var4 == var3;
                            var2 = undefined;
                            if (var5) {
                                _fun17947_ip = 42;
                                continue _fun17947
                            }
                        case 37:
                            var2 = var3.user;
                        case 42:
                            if (!(var4 != var2)) {
                                _fun17947_ip = 83;
                                continue _fun17947
                            }
                        case 46:
                            var5 = _closure1_slot27;
                            var2 = var1.moderator_report;
                            var2 = var2.reported_member;
                            var3 = var2.user;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var0)(var3, var2);
                        case 83:
                            var3 = var1.moderator_report;
                            var5 = var4 == var3;
                            var2 = undefined;
                            if (var5) {
                                _fun17947_ip = 118;
                                continue _fun17947
                            }
                        case 98:
                            var3 = var3.reporting_member;
                            var5 = var4 == var3;
                            var2 = undefined;
                            if (var5) {
                                _fun17947_ip = 118;
                                continue _fun17947
                            }
                        case 113:
                            var2 = var3.user;
                        case 118:
                            if (!(var4 != var2)) {
                                _fun17947_ip = 159;
                                continue _fun17947
                            }
                        case 122:
                            var5 = _closure1_slot27;
                            var2 = var1.moderator_report;
                            var2 = var2.reporting_member;
                            var3 = var2.user;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var0)(var3, var2);
                        case 159:
                            var2 = global;
                            var3 = var2.Object;
                            var2 = var3.values;
                            var5 = var1.message;
                            var6 = var4 == var5;
                            var1 = undefined;
                            if (var6) {
                                _fun17947_ip = 207;
                                continue _fun17947
                            }
                        case 186:
                            var5 = var5.resolved;
                            var6 = var4 == var5;
                            var1 = undefined;
                            if (var6) {
                                _fun17947_ip = 207;
                                continue _fun17947
                            }
                        case 201:
                            var1 = var5.users;
                        case 207:
                            if (!(var4 == var1)) {
                                _fun17947_ip = 213;
                                continue _fun17947
                            }
                        case 211:
                            var1 = {};
                        case 213:
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun17948: for (var _fun17948_ip = 0;;) switch (_fun17948_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure1_slot26;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var3);
                                        if (!var2) {
                                            _fun17948_ip = 37;
                                            continue _fun17948
                                        }
                                    case 20:
                                        var2 = _closure1_slot27;
                                        var1 = _closure2_slot0;
                                        var1 = var2.bind(var0)(var3, var1);
                                    case 37:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 346:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun17949: for (var _fun17949_ip = 0;;) switch (_fun17949_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.user;
                var6 = var0.users;
                var4 = var0.guilds;
                var0 = delete var5.premium;
                var0 = delete var5.banner_color;
                var3 = _closure1_slot27;
                var0 = undefined;
                var3 = var3.bind(var0)(var5);
                var5 = var6.forEach;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot27;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = var1.members;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var6 = _closure1_slot23;
                        var0 = var1.user;
                        var5 = var0.id;
                        var0 = _closure3_slot0;
                        var4 = var0.id;
                        var3 = var1.avatar;
                        var0 = undefined;
                        var3 = var6.bind(var0)(var5, var4, var3);
                        var3 = _closure1_slot24;
                        var2 = var1.user;
                        var2 = var2.id;
                        var1 = var1.user;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot16;
                var4 = _closure1_slot11;
                var2 = var4.getId;
                var2 = var2.bind(var4)();
                var3 = var3[var2];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun17949_ip = 163;
                    continue _fun17949
                }
            case 104:
                var3 = _closure1_slot16;
                var2 = _closure1_slot18;
                var5 = _closure1_slot10;
                var1 = {
                    'id': null,
                    'username': 'Wumpus',
                    'discriminator': '0',
                    'globalName': 'Wumpus',
                    'avatar': 'c1f86b313385cb97985f1b118851c28c'
                };
                var1.id = var2;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var7 = var1;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var3[var2] = var1;
            case 163:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun17953: for (var _fun17953_ip = 0;;) switch (_fun17953_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guilds;
                var2 = var1.lazyPrivateChannels;
                var3 = var4.forEach;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = var1.members;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var6 = _closure1_slot23;
                        var0 = var1.user;
                        var5 = var0.id;
                        var0 = _closure3_slot0;
                        var4 = var0.id;
                        var3 = var1.avatar;
                        var0 = undefined;
                        var3 = var6.bind(var0)(var5, var4, var3);
                        var3 = _closure1_slot24;
                        var2 = var1.user;
                        var2 = var2.id;
                        var1 = var1.user;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var1 = null;
                if (!(var1 != var2)) {
                    _fun17953_ip = 53;
                    continue _fun17953
                }
            case 38:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun17956: for (var _fun17956_ip = 0;;) switch (_fun17956_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.rawRecipients;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun17956_ip = 32;
                                continue _fun17956
                            }
                        case 15:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot27;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 53:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        var1 = 'incomplete';
        var0 = arg0;
        var0 = var1 in var0;
        var0 = !var0;
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun17959: for (var _fun17959_ip = 0;;) switch (_fun17959_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.users;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun17959_ip = 135;
                    continue _fun17959
                }
            case 15:
                var1 = _closure1_slot21;
                var0 = var0.users;
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun17959_ip = 135;
                    continue _fun17959
                }
            case 47:
                var8 = var1.value;
                var5 = var8.id;
                var0 = _closure1_slot16;
                var0 = var5 in var0;
                if (!var0) {
                    _fun17959_ip = 77;
                    continue _fun17959
                }
            case 68:
                var5 = _closure1_slot33;
                var0 = var5.bind(var3)(var8);
            case 77:
                if (var0) {
                    _fun17959_ip = 120;
                    continue _fun17959
                }
            case 80:
                var6 = _closure1_slot16;
                var5 = var8.id;
                var0 = _closure1_slot10;
                var7 = var0.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var7;
                var9 = var8;
                var0 = new var10[var0](var9, var8);
                var0 = var0 instanceof Object ? var0 : var7;
                var6[var5] = var0;
            case 120:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun17959_ip = 47;
                    continue _fun17959
                }
            case 135:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun17960: for (var _fun17960_ip = 0;;) switch (_fun17960_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var3 = _closure1_slot26;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                if (var3) {
                    _fun17960_ip = 29;
                    continue _fun17960
                }
            case 25:
                var3 = false;
                return var3;
            case 29:
                var1 = _closure1_slot27;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun17961: for (var _fun17961_ip = 0;;) switch (_fun17961_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userProfile;
                var4 = _closure1_slot26;
                var3 = var1.user;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                if (var3) {
                    _fun17961_ip = 35;
                    continue _fun17961
                }
            case 31:
                var3 = false;
                return var3;
            case 35:
                var2 = _closure1_slot27;
                var1 = var1.user;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.user;
        var1 = _closure1_slot27;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.user;
        var3 = _closure1_slot27;
        var2 = {};
        var1 = var0.id;
        var2.id = var1;
        var0 = var0.premiumType;
        var2.premiumType = var0;
        var0 = undefined;
        var1 = true;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.messages;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot30;
            var0 = undefined;
            var2 = arg0;
            var1 = true;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.pins;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.message;
            var2 = _closure1_slot30;
            var0 = undefined;
            var1 = true;
            var1 = var2.bind(var0)(var3, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        _fun17968: for (var _fun17968_ip = 0;;) switch (_fun17968_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.mostRecentMessages;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun17968_ip = 32;
                    continue _fun17968
                }
            case 15:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot30;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = false;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 32:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var4 = var1.messages;
            var2 = var1.channels;
            var3 = var4.forEach;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot30;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = true;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun17974: for (var _fun17974_ip = 0;;) switch (_fun17974_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.type;
                        var2 = _closure1_slot14;
                        var2 = var2.DM;
                        var2 = var3 !== var2;
                        if (!var2) {
                            _fun17974_ip = 47;
                            continue _fun17974
                        }
                    case 28:
                        var4 = var0.type;
                        var3 = _closure1_slot14;
                        var3 = var3.GROUP_DM;
                        var2 = var4 !== var3;
                    case 47:
                        if (var2) {
                            _fun17974_ip = 106;
                            continue _fun17974
                        }
                    case 50:
                        var5 = var0.recipients;
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun17974_ip = 79;
                            continue _fun17974
                        }
                    case 62:
                        var4 = var5.forEach;
                        var2 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot27;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                    case 79:
                        var2 = var0.recipient;
                        if (!(var3 != var2)) {
                            _fun17974_ip = 106;
                            continue _fun17974
                        }
                    case 89:
                        var2 = _closure1_slot27;
                        var1 = var0.recipient;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 106:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function arg0() {
        _fun17976: for (var _fun17976_ip = 0;;) switch (_fun17976_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.firstMessages;
                var2 = var1.owners;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun17976_ip = 38;
                    continue _fun17976
                }
            case 23:
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot30;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = true;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
            case 38:
                if (!(var1 != var2)) {
                    _fun17976_ip = 57;
                    continue _fun17976
                }
            case 42:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot27;
                    var0 = arg0;
                    var2 = var0.user;
                    var1 = undefined;
                    var0 = true;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 57:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.values;
        var2 = var0.bind(var1)(var2);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun17980: for (var _fun17980_ip = 0;;) switch (_fun17980_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.first_message;
                    var5 = var0.most_recent_message;
                    var0 = var0.owner;
                    var3 = null;
                    if (!(var3 != var6)) {
                        _fun17980_ip = 44;
                        continue _fun17980
                    }
                case 27:
                    var4 = _closure1_slot30;
                    var2 = undefined;
                    var1 = true;
                    var1 = var4.bind(var2)(var6, var1);
                case 44:
                    if (!(var3 != var5)) {
                        _fun17980_ip = 65;
                        continue _fun17980
                    }
                case 48:
                    var4 = _closure1_slot30;
                    var2 = undefined;
                    var1 = true;
                    var1 = var4.bind(var2)(var5, var1);
                case 65:
                    var1 = var3 != var0;
                    if (!var1) {
                        _fun17980_ip = 81;
                        continue _fun17980
                    }
                case 72:
                    var2 = var0.user;
                    var1 = var3 != var2;
                case 81:
                    if (!var1) {
                        _fun17980_ip = 106;
                        continue _fun17980
                    }
                case 84:
                    var3 = _closure1_slot27;
                    var2 = var0.user;
                    var1 = undefined;
                    var0 = true;
                    var0 = var3.bind(var1)(var2, var0);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.supplementalData;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.values;
        var2 = var0.bind(var1)(var2);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun17982: for (var _fun17982_ip = 0;;) switch (_fun17982_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.message_preview;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun17982_ip = 32;
                        continue _fun17982
                    }
                case 15:
                    var2 = _closure1_slot30;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var3, var0);
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var2 = var1.guildScheduledEventUsers;
        var1 = var1.guildId;
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun17984: for (var _fun17984_ip = 0;;) switch (_fun17984_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.user;
                    var5 = var1.member;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun17984_ip = 76;
                        continue _fun17984
                    }
                case 20:
                    var3 = _closure1_slot27;
                    var4 = undefined;
                    var3 = var3.bind(var4)(var0);
                    var6 = var2 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun17984_ip = 49;
                        continue _fun17984
                    }
                case 43:
                    var3 = var5.avatar;
                case 49:
                    if (!(var2 != var3)) {
                        _fun17984_ip = 76;
                        continue _fun17984
                    }
                case 53:
                    var2 = _closure1_slot23;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var4)(var1, var0, var3);
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.items;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun17986: for (var _fun17986_ip = 0;;) switch (_fun17986_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.other_user;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun17986_ip = 35;
                        continue _fun17986
                    }
                case 15:
                    var2 = _closure1_slot27;
                    var1 = var0.other_user;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = function arg0() {
        _fun17987: for (var _fun17987_ip = 0;;) switch (_fun17987_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.item;
                var2 = var0.other_user;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun17987_ip = 40;
                    continue _fun17987
                }
            case 20:
                var2 = _closure1_slot27;
                var1 = var0.other_user;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 40:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function arg0() {
        _fun17988: for (var _fun17988_ip = 0;;) switch (_fun17988_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.message;
                var0 = _closure1_slot30;
                var9 = undefined;
                var1 = true;
                var0 = var0.bind(var9)(var3, var1);
                var4 = var3.flags;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun17988_ip = 86;
                    continue _fun17988
                }
            case 36:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var10 = 18;
                var4 = var4[var10];
                var6 = var5.bind(var9)(var4);
                var5 = var6.hasFlag;
                var4 = var3.flags;
                var3 = _closure1_slot13;
                var3 = var3.URGENT;
                var3 = var5.bind(var6)(var4, var3);
                if (var3) {
                    _fun17988_ip = 90;
                    continue _fun17988
                }
            case 86:
                var3 = false;
                return var3;
            case 90:
                var4 = _closure1_slot16;
                var5 = _closure1_slot11;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                var7 = var4[var3];
                var0 = var0 != var7;
                if (!var0) {
                    _fun17988_ip = 203;
                    continue _fun17988
                }
            case 119:
                var4 = _closure1_slot16;
                var5 = _closure1_slot11;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                var6 = var7.set;
                var8 = _closure1_slot2;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var9 = var8.bind(var9)(var5);
                var8 = var9.setFlag;
                var5 = var7.flags;
                var2 = _closure1_slot12;
                var2 = var2.HAS_UNREAD_URGENT_MESSAGES;
                var5 = var8.bind(var9)(var5, var2, var1);
                var2 = 'flags';
                var2 = var6.bind(var7)(var2, var5);
                var4[var3] = var2;
                var0 = true;
            case 203:
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var0 = function arg0() {
        _fun17989: for (var _fun17989_ip = 0;;) switch (_fun17989_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.rawRecipients;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun17989_ip = 37;
                    continue _fun17989
                }
            case 20:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot27;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 37:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot50 = var0;
    var0 = function arg0() {
        _fun17991: for (var _fun17991_ip = 0;;) switch (_fun17991_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot21;
                var4 = undefined;
                var3 = var0.bind(var4)(var1);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = null;
                if (var0) {
                    _fun17991_ip = 84;
                    continue _fun17991
                }
            case 39:
                var0 = var1.value;
                var7 = var0.rawRecipients;
                if (!(var2 != var7)) {
                    _fun17991_ip = 69;
                    continue _fun17991
                }
            case 54:
                var6 = var7.forEach;
                var0 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot27;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var6.bind(var7)(var0);
            case 69:
                var6 = var3.bind(var4)();
                var0 = var6.done;
                var1 = var6;
                if (!var0) {
                    _fun17991_ip = 39;
                    continue _fun17991
                }
            case 84:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var3 = var1.updates;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun17994: for (var _fun17994_ip = 0;;) switch (_fun17994_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var1 = _closure1_slot16;
                    var0 = var0.user;
                    var0 = var0.id;
                    var1 = var1[var0];
                    var _closure3_slot1 = var1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun17994_ip = 98;
                        continue _fun17994
                    }
                case 40:
                    var5 = _closure1_slot19;
                    var4 = var5.reduce;
                    var1 = function(arg0, arg1) { // Environment: var2
                        _fun17995: for (var _fun17995_ip = 0;;) switch (_fun17995_ip) {
                            case 0:
                                var4 = arg0;
                                var7 = arg1;
                                var0 = _closure3_slot0;
                                var1 = var0.user;
                                var0 = var1.hasOwnProperty;
                                var1 = var0.bind(var1)(var7);
                                var0 = var4;
                                if (!var1) {
                                    _fun17995_ip = 120;
                                    continue _fun17995
                                }
                            case 35:
                                var6 = _closure3_slot1;
                                var5 = var6.set;
                                var8 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var8.bind(var1)(var2);
                                var1 = var2.camelCase;
                                var2 = var1.bind(var2)(var7);
                                var1 = _closure3_slot0;
                                var1 = var1.user;
                                var1 = var1[var7];
                                var2 = var5.bind(var6)(var2, var1);
                                var1 = var4;
                                if (var4) {
                                    _fun17995_ip = 113;
                                    continue _fun17995
                                }
                            case 105:
                                var4 = _closure3_slot1;
                                var1 = var2 !== var4;
                            case 113:
                                _closure3_slot1 = var2;
                                var0 = var1;
                            case 120:
                                return var0;
                        }
                    };
                    var0 = false;
                    var1 = var4.bind(var5)(var1, var0);
                    var4 = !var1;
                    var0 = !var4;
                    if (var4) {
                        _fun17994_ip = 96;
                        continue _fun17994
                    }
                case 72:
                    var4 = _closure1_slot16;
                    var3 = _closure3_slot1;
                    var3 = var3.id;
                    var2 = _closure3_slot1;
                    var4[var3] = var2;
                    var0 = var1;
                case 96:
                    return var0;
                case 98:
                    var0 = false;
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot52 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.bans;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot27;
            var0 = arg0;
            var1 = var0.user;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot53 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.bans;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot27;
            var0 = arg0;
            var1 = var0.user;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot54 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot27;
        var0 = arg0;
        var1 = var0.user;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot55 = var0;
    var0 = function arg0() {
        _fun18002: for (var _fun18002_ip = 0;;) switch (_fun18002_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isMember;
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun18002_ip = 37;
                    continue _fun18002
                }
            case 18:
                var3 = _closure1_slot27;
                var2 = var1.user;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 37:
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var0 = function arg0() {
        _fun18003: for (var _fun18003_ip = 0;;) switch (_fun18003_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot27;
                var1 = var0.user;
                var5 = undefined;
                var1 = var3.bind(var5)(var1);
                var4 = _closure1_slot23;
                var2 = var0.user;
                var3 = var2.id;
                var2 = var0.guildId;
                var0 = var0.avatar;
                var0 = var4.bind(var5)(var3, var2, var0);
                if (var0) {
                    _fun18003_ip = 60;
                    continue _fun18003
                }
            case 57:
                var0 = var1;
            case 60:
                return var0;
        }
    };
    var _closure1_slot57 = var0;
    var0 = function arg0() {
        _fun18004: for (var _fun18004_ip = 0;;) switch (_fun18004_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.ops;
                var0 = _closure1_slot21;
                var8 = undefined;
                var7 = var0.bind(var8)(var1);
                var1 = var7.bind(var8)();
                var0 = var1.done;
                var6 = null;
                var5 = 'UPDATE';
                var4 = 'INSERT';
                var3 = var1;
                var2 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun18004_ip = 146;
                    continue _fun18004
                }
            case 52:
                var0 = var3.value;
                var10 = var0.op;
                if (!(var4 !== var10)) {
                    _fun18004_ip = 75;
                    continue _fun18004
                }
            case 66:
                var10 = var0.op;
                if (!(var5 === var10)) {
                    _fun18004_ip = 131;
                    continue _fun18004
                }
            case 75:
                var0 = var0.item;
                var10 = var0.member;
                var11 = var6 == var10;
                var0 = undefined;
                if (var11) {
                    _fun18004_ip = 100;
                    continue _fun18004
                }
            case 95:
                var0 = var10.user;
            case 100:
                var2 = var10;
                var1 = var0;
                if (!(var6 != var0)) {
                    _fun18004_ip = 131;
                    continue _fun18004
                }
            case 110:
                var12 = _closure1_slot24;
                var11 = var0.id;
                var11 = var12.bind(var8)(var11, var0);
                var2 = var10;
                var1 = var0;
            case 131:
                var10 = var7.bind(var8)();
                var0 = var10.done;
                var3 = var10;
                if (!var0) {
                    _fun18004_ip = 52;
                    continue _fun18004
                }
            case 146:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot58 = var0;
    var0 = function arg0() {
        _fun18005: for (var _fun18005_ip = 0;;) switch (_fun18005_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.chunks;
                var1 = false;
                var _closure2_slot0 = var1;
                var5 = function arg0() {
                    _fun18006: for (var _fun18006_ip = 0;;) switch (_fun18006_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = var1.members;
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun18007: for (var _fun18007_ip = 0;;) switch (_fun18007_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = arg1;
                                        var4 = _closure1_slot27;
                                        var2 = var0.user;
                                        var6 = undefined;
                                        var2 = var4.bind(var6)(var2);
                                        var5 = _closure1_slot23;
                                        var3 = var0.user;
                                        var4 = var3.id;
                                        var3 = _closure3_slot0;
                                        var3 = var3.guildId;
                                        var0 = var0.avatar;
                                        var0 = var5.bind(var6)(var4, var3, var0);
                                        if (var0) {
                                            _fun18007_ip = 70;
                                            continue _fun18007
                                        }
                                    case 67:
                                        var0 = var2;
                                    case 70:
                                        if (var0) {
                                            _fun18007_ip = 76;
                                            continue _fun18007
                                        }
                                    case 73:
                                        var0 = var1;
                                    case 76:
                                        return var0;
                                }
                            };
                            var0 = false;
                            var1 = var2.bind(var3)(var1, var0);
                            if (var1) {
                                _fun18006_ip = 44;
                                continue _fun18006
                            }
                        case 37:
                            var1 = _closure2_slot0;
                        case 44:
                            _closure2_slot0 = var1;
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = _closure1_slot21;
                var4 = undefined;
                var3 = var1.bind(var4)(var2);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun18005_ip = 73;
                    continue _fun18005
                }
            case 48:
                var1 = var2.value;
                var1 = var5.bind(var4)(var1);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun18005_ip = 48;
                    continue _fun18005
                }
            case 73:
                var0 = _closure2_slot0;
                return var0;
        }
    };
    var _closure1_slot59 = var0;
    var0 = function arg0() {
        _fun18008: for (var _fun18008_ip = 0;;) switch (_fun18008_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot21;
                var0 = var8.members;
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun18008_ip = 121;
                    continue _fun18008
                }
            case 42:
                var1 = var3.value;
                var10 = _closure1_slot27;
                var9 = var1.user;
                var9 = var10.bind(var6)(var9);
                if (!var9) {
                    _fun18008_ip = 66;
                    continue _fun18008
                }
            case 64:
                var2 = true;
            case 66:
                var11 = _closure1_slot23;
                var9 = var1.user;
                var10 = var9.id;
                var9 = var8.guildId;
                var1 = var1.avatar;
                var1 = var11.bind(var6)(var10, var9, var1);
                if (!var1) {
                    _fun18008_ip = 103;
                    continue _fun18008
                }
            case 101:
                var2 = true;
            case 103:
                var10 = var5.bind(var6)();
                var1 = var10.done;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun18008_ip = 42;
                    continue _fun18008
                }
            case 121:
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var0 = function arg0() {
        _fun18009: for (var _fun18009_ip = 0;;) switch (_fun18009_ip) {
            case 0:
                var1 = _closure1_slot21;
                var0 = arg0;
                var0 = var0.users;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun18009_ip = 26;
                    continue _fun18009
                }
            case 22:
                var0 = new Array(0);
            case 26:
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = global;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun18009_ip = 131;
                    continue _fun18009
                }
            case 54:
                var9 = var3.value;
                var11 = var4.Object;
                var10 = var11.hasOwn;
                var8 = _closure1_slot16;
                var1 = var9.id;
                var1 = var10.bind(var11)(var8, var1);
                var8 = var2;
                if (var1) {
                    _fun18009_ip = 110;
                    continue _fun18009
                }
            case 92:
                var1 = _closure1_slot27;
                var1 = var1.bind(var6)(var9);
                if (var1) {
                    _fun18009_ip = 107;
                    continue _fun18009
                }
            case 104:
                var1 = var2;
            case 107:
                var8 = var1;
            case 110:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var2 = var8;
                var3 = var9;
                var0 = var2;
                if (!var1) {
                    _fun18009_ip = 54;
                    continue _fun18009
                }
            case 131:
                return var0;
        }
    };
    var _closure1_slot61 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var3 = var1.members;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun18011: for (var _fun18011_ip = 0;;) switch (_fun18011_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.member;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun18011_ip = 43;
                        continue _fun18011
                    }
                case 18:
                    var5 = _closure1_slot27;
                    var3 = var1.member;
                    var4 = var3.user;
                    var3 = undefined;
                    var0 = var5.bind(var3)(var4);
                case 43:
                    if (!var0) {
                        _fun18011_ip = 55;
                        continue _fun18011
                    }
                case 46:
                    var0 = true;
                    _closure2_slot0 = var0;
                case 55:
                    var0 = var1.presence;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun18011_ip = 93;
                        continue _fun18011
                    }
                case 68:
                    var3 = _closure1_slot27;
                    var1 = var1.presence;
                    var2 = var1.user;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 93:
                    if (!var0) {
                        _fun18011_ip = 105;
                        continue _fun18011
                    }
                case 96:
                    var0 = true;
                    _closure2_slot0 = var0;
                case 105:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot62 = var0;
    var0 = function arg0() {
        _fun18012: for (var _fun18012_ip = 0;;) switch (_fun18012_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.addedMembers;
                var1 = false;
                var _closure2_slot0 = var1;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun18012_ip = 38;
                    continue _fun18012
                }
            case 23:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun18013: for (var _fun18013_ip = 0;;) switch (_fun18013_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.member;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun18013_ip = 43;
                                continue _fun18013
                            }
                        case 18:
                            var5 = _closure1_slot27;
                            var3 = var1.member;
                            var4 = var3.user;
                            var3 = undefined;
                            var0 = var5.bind(var3)(var4);
                        case 43:
                            if (!var0) {
                                _fun18013_ip = 55;
                                continue _fun18013
                            }
                        case 46:
                            var0 = true;
                            _closure2_slot0 = var0;
                        case 55:
                            var0 = var1.presence;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun18013_ip = 93;
                                continue _fun18013
                            }
                        case 68:
                            var3 = _closure1_slot27;
                            var1 = var1.presence;
                            var2 = var1.user;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 93:
                            if (!var0) {
                                _fun18013_ip = 105;
                                continue _fun18013
                            }
                        case 96:
                            var0 = true;
                            _closure2_slot0 = var0;
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 38:
                var0 = _closure2_slot0;
                return var0;
        }
    };
    var _closure1_slot63 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var2 = var1.members;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun18015: for (var _fun18015_ip = 0;;) switch (_fun18015_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.user;
                    var4 = var1.id;
                    var8 = var1.username;
                    var7 = var1.avatar;
                    var6 = var1.discriminator;
                    var1 = var1.bot;
                    var3 = var0.avatar;
                    var5 = _closure1_slot11;
                    var2 = var5.getId;
                    var2 = var2.bind(var5)();
                    if (!(var4 !== var2)) {
                        _fun18015_ip = 99;
                        continue _fun18015
                    }
                case 63:
                    var5 = _closure1_slot27;
                    var2 = {};
                    var2.id = var4;
                    var2.username = var8;
                    var2.avatar = var7;
                    var2.discriminator = var6;
                    var2.bot = var1;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                case 99:
                    var2 = _closure1_slot23;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var4, var1, var3);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot64 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot27;
        var0 = arg0;
        var0 = var0.relationship;
        var1 = var0.user;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot65 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot27;
        var0 = arg0;
        var0 = var0.gameRelationship;
        var1 = var0.user;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot66 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.relationships;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18019: for (var _fun18019_ip = 0;;) switch (_fun18019_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot27;
                    var0 = arg1;
                    var2 = var0.user;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    if (var0) {
                        _fun18019_ip = 31;
                        continue _fun18019
                    }
                case 28:
                    var0 = var1;
                case 31:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot67 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot27;
        var0 = arg0;
        var0 = var0.suggestion;
        var1 = var0.suggested_user;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot68 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.suggestions;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18022: for (var _fun18022_ip = 0;;) switch (_fun18022_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot27;
                    var0 = arg1;
                    var2 = var0.suggested_user;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    if (var0) {
                        _fun18022_ip = 32;
                        continue _fun18022
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot69 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.users;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun18024: for (var _fun18024_ip = 0;;) switch (_fun18024_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot16;
                    var1 = var4.id;
                    var2 = var2[var1];
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun18024_ip = 65;
                        continue _fun18024
                    }
                case 25:
                    var2 = _closure1_slot16;
                    var1 = var4.id;
                    var0 = _closure1_slot10;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var6 = var3;
                    var5 = var4;
                    var0 = new var6[var0](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var2[var1] = var0;
                case 65:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot70 = var0;
    var0 = function arg0() {
        _fun18025: for (var _fun18025_ip = 0;;) switch (_fun18025_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.giftCode;
                var2 = var1.user;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun18025_ip = 42;
                    continue _fun18025
                }
            case 23:
                var3 = _closure1_slot27;
                var2 = var1.user;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 42:
                return var0;
        }
    };
    var _closure1_slot71 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.appliedBoosts;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun18027: for (var _fun18027_ip = 0;;) switch (_fun18027_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.user;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun18027_ip = 28;
                        continue _fun18027
                    }
                case 14:
                    var1 = _closure1_slot27;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot72 = var0;
    var0 = function arg0() {
        _fun18028: for (var _fun18028_ip = 0;;) switch (_fun18028_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.request;
                var5 = var0.user;
                var4 = var0.actioned_by_user;
                var1 = null;
                var0 = var1 != var5;
                var2 = false;
                if (!var0) {
                    _fun18028_ip = 45;
                    continue _fun18028
                }
            case 31:
                var3 = _closure1_slot27;
                var0 = undefined;
                var2 = var3.bind(var0)(var5);
            case 45:
                var0 = var2;
                if (!(var1 != var4)) {
                    _fun18028_ip = 75;
                    continue _fun18028
                }
            case 52:
                var1 = var2;
                if (var2) {
                    _fun18028_ip = 72;
                    continue _fun18028
                }
            case 58:
                var3 = _closure1_slot27;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot73 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.users;
        var0 = var0.familyCenterTeenActivity;
        var3 = new Array(0);
        var4 = 0;
        var6 = var3;
        var4 = arraySpread(var6, var5, var4);
        var5 = var0.users;
        var6 = var3;
        var0 = arraySpread(var6, var5, var4);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18030: for (var _fun18030_ip = 0;;) switch (_fun18030_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot27;
                    var2 = undefined;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun18030_ip = 26;
                        continue _fun18030
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot74 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.users;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18032: for (var _fun18032_ip = 0;;) switch (_fun18032_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot27;
                    var2 = undefined;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun18032_ip = 26;
                        continue _fun18032
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot75 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.users;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18034: for (var _fun18034_ip = 0;;) switch (_fun18034_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot27;
                    var2 = undefined;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun18034_ip = 26;
                        continue _fun18034
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot76 = var0;
    var0 = function arg0() {
        _fun18035: for (var _fun18035_ip = 0;;) switch (_fun18035_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.familyCenterTeenActivity;
                var1 = undefined;
                if (!(var1 === var0)) {
                    _fun18035_ip = 17;
                    continue _fun18035
                }
            case 15:
                return var1;
            case 17:
                var3 = var0.users;
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun18036: for (var _fun18036_ip = 0;;) switch (_fun18036_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot27;
                            var2 = undefined;
                            var0 = arg1;
                            var0 = var3.bind(var2)(var0);
                            if (var0) {
                                _fun18036_ip = 26;
                                continue _fun18036
                            }
                        case 23:
                            var0 = var1;
                        case 26:
                            return var0;
                    }
                };
                var0 = false;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot77 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.familyCenterTeenActivity;
        var3 = var0.users;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18038: for (var _fun18038_ip = 0;;) switch (_fun18038_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot27;
                    var2 = undefined;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun18038_ip = 26;
                        continue _fun18038
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot78 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var3 = var1.members;
        var2 = _closure1_slot11;
        var1 = var2.getId;
        var1 = var1.bind(var2)();
        var _closure2_slot0 = var1;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18040: for (var _fun18040_ip = 0;;) switch (_fun18040_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var0 = var1.member;
                    var0 = var0.user;
                    var4 = var0.id;
                    var3 = _closure2_slot0;
                    var0 = var2;
                    if (!(var4 !== var3)) {
                        _fun18040_ip = 70;
                        continue _fun18040
                    }
                case 36:
                    var4 = _closure1_slot27;
                    var1 = var1.member;
                    var3 = var1.user;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    if (var1) {
                        _fun18040_ip = 67;
                        continue _fun18040
                    }
                case 64:
                    var1 = var2;
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot79 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.messageItems;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun18042: for (var _fun18042_ip = 0;;) switch (_fun18042_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.message;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun18042_ip = 36;
                        continue _fun18042
                    }
                case 14:
                    var3 = _closure1_slot30;
                    var2 = var0.message;
                    var1 = undefined;
                    var0 = true;
                    var0 = var3.bind(var1)(var2, var0);
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot80 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.participants;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18044: for (var _fun18044_ip = 0;;) switch (_fun18044_ip) {
                case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var0 = 20;
                    var0 = var4[var0];
                    var4 = undefined;
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.bind(var4)(var2);
                    if (!var0) {
                        _fun18044_ip = 59;
                        continue _fun18044
                    }
                case 39:
                    var3 = _closure1_slot27;
                    var2 = var2.member;
                    var2 = var2.user;
                    var0 = var3.bind(var4)(var2);
                case 59:
                    if (var0) {
                        _fun18044_ip = 65;
                        continue _fun18044
                    }
                case 62:
                    var0 = var1;
                case 65:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot81 = var0;
    var0 = function arg0() {
        _fun18045: for (var _fun18045_ip = 0;;) switch (_fun18045_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun18045_ip = 116;
                    continue _fun18045
                }
            case 9:
                var4 = _closure1_slot16;
                var5 = _closure1_slot11;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                var7 = var4[var3];
                var0 = var0 != var7;
                if (!var0) {
                    _fun18045_ip = 114;
                    continue _fun18045
                }
            case 41:
                var4 = _closure1_slot16;
                var5 = _closure1_slot11;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                var6 = var7.set;
                var8 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 21;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var5);
                var2 = var2.AgeVerificationStatusUkAndAusOnly;
                var5 = var2.CLIENT_ONLY_PENDING;
                var2 = 'ageVerificationStatus';
                var2 = var6.bind(var7)(var2, var5);
                var4[var3] = var2;
                var0 = true;
            case 114:
                return var0;
            case 116:
                var9 = "Cannot destructure 'undefined' or 'null'.";
                var10 = var1;
                var0 = throwTypeError(var10, var9);
                var0 = undefined;
                throw var0;
        }
    };
    var _closure1_slot82 = var0;
    var0 = function arg0() {
        _fun18046: for (var _fun18046_ip = 0;;) switch (_fun18046_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.status;
                var1 = _closure1_slot16;
                var3 = _closure1_slot11;
                var0 = var3.getId;
                var0 = var0.bind(var3)();
                var6 = var1[var0];
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun18046_ip = 131;
                    continue _fun18046
                }
            case 42:
                var3 = var6.ageVerificationStatus;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 21;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.AgeVerificationStatusUkAndAusOnly;
                var1 = var1.CLIENT_ONLY_PENDING;
                var1 = var3 === var1;
                if (!var1) {
                    _fun18046_ip = 128;
                    continue _fun18046
                }
            case 89:
                var4 = _closure1_slot16;
                var3 = _closure1_slot11;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var5 = var6.set;
                var2 = 'ageVerificationStatus';
                var2 = var5.bind(var6)(var2, var7);
                var4[var3] = var2;
                var1 = true;
            case 128:
                var0 = var1;
            case 131:
                return var0;
        }
    };
    var _closure1_slot83 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.resolved;
        var2 = _closure1_slot29;
        var1 = undefined;
        var0 = true;
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var _closure1_slot84 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.stickers;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18049: for (var _fun18049_ip = 0;;) switch (_fun18049_ip) {
                case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var3 = var2.user;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun18049_ip = 39;
                        continue _fun18049
                    }
                case 20:
                    var4 = _closure1_slot27;
                    var3 = var2.user;
                    var2 = undefined;
                    var0 = var4.bind(var2)(var3);
                case 39:
                    if (var0) {
                        _fun18049_ip = 45;
                        continue _fun18049
                    }
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot85 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var4);
    var4 = 0;
    var5 = var9[var4];
    var0 = undefined;
    var5 = var10.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var7 = 1;
    var5 = var9[var7];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var10.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var9[var5];
    var10 = var10.bind(var0)(var5);
    var5 = 9;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var11 = var5.UserFlags;
    var _closure1_slot12 = var11;
    var11 = var5.MessageFlags;
    var _closure1_slot13 = var11;
    var5 = var5.ChannelTypes;
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot15 = var5;
    var5 = {};
    var _closure1_slot16 = var5;
    var _closure1_slot17 = var4;
    var4 = '47835198259242069';
    var _closure1_slot18 = var4;
    var11 = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
    var _closure1_slot19 = var11;
    var6 = function(arg0) { // Environment: var6
        var3 = function() {
            _fun18051: for (var _fun18051_ip = 0;;) switch (_fun18051_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = _closure1_slot31;
                    var0.CONNECTION_OPEN = var6;
                    var6 = _closure1_slot32;
                    var0.CONNECTION_OPEN_SUPPLEMENTAL = var6;
                    var6 = _closure1_slot38;
                    var0.UPDATE_CLIENT_PREMIUM_TYPE = var6;
                    var6 = _closure1_slot34;
                    var0.OVERLAY_INITIALIZE = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleLoadCache;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.CACHE_LOADED = var6;
                    var6 = _closure1_slot35;
                    var0.USER_UPDATE = var6;
                    var6 = _closure1_slot36;
                    var0.USER_PROFILE_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot37;
                    var0.CURRENT_USER_UPDATE = var6;
                    var6 = _closure1_slot52;
                    var0.PRESENCE_UPDATES = var6;
                    var6 = _closure1_slot42;
                    var0.SEARCH_MESSAGES_SUCCESS = var6;
                    var0.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var6;
                    var6 = _closure1_slot39;
                    var0.LOAD_MESSAGES_SUCCESS = var6;
                    var0.LOAD_MESSAGES_AROUND_SUCCESS = var6;
                    var0.LOAD_RECENT_MENTIONS_SUCCESS = var6;
                    var6 = _closure1_slot40;
                    var0.LOAD_PINNED_MESSAGES_SUCCESS = var6;
                    var6 = _closure1_slot41;
                    var0.THREAD_LIST_SYNC = var6;
                    var6 = _closure1_slot49;
                    var0.MESSAGE_CREATE = var6;
                    var0.MESSAGE_UPDATE = var6;
                    var6 = _closure1_slot53;
                    var0.GUILD_SETTINGS_LOADED_BANS = var6;
                    var6 = _closure1_slot54;
                    var0.GUILD_SETTINGS_LOADED_BANS_BATCH = var6;
                    var6 = _closure1_slot64;
                    var0.GUILD_CREATE = var6;
                    var6 = _closure1_slot55;
                    var0.GUILD_BAN_ADD = var6;
                    var0.GUILD_BAN_REMOVE = var6;
                    var6 = _closure1_slot56;
                    var0.CHANNEL_RECIPIENT_ADD = var6;
                    var0.CHANNEL_RECIPIENT_REMOVE = var6;
                    var6 = _closure1_slot85;
                    var0.GUILD_STICKERS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot73;
                    var0.GUILD_JOIN_REQUEST_CREATE = var6;
                    var0.GUILD_JOIN_REQUEST_UPDATE = var6;
                    var6 = _closure1_slot57;
                    var0.GUILD_MEMBER_ADD = var6;
                    var0.GUILD_MEMBER_UPDATE = var6;
                    var6 = _closure1_slot59;
                    var0.GUILD_MEMBERS_CHUNK_BATCH = var6;
                    var6 = _closure1_slot58;
                    var0.GUILD_MEMBER_LIST_UPDATE = var6;
                    var6 = _closure1_slot62;
                    var0.THREAD_MEMBER_LIST_UPDATE = var6;
                    var6 = _closure1_slot63;
                    var0.THREAD_MEMBERS_UPDATE = var6;
                    var6 = _closure1_slot50;
                    var0.CHANNEL_CREATE = var6;
                    var6 = _closure1_slot51;
                    var0.CHANNEL_UPDATES = var6;
                    var6 = _closure1_slot65;
                    var0.RELATIONSHIP_ADD = var6;
                    var6 = _closure1_slot66;
                    var0.GAME_RELATIONSHIP_ADD = var6;
                    var6 = _closure1_slot67;
                    var0.LOAD_RELATIONSHIPS_SUCCESS = var6;
                    var6 = _closure1_slot68;
                    var0.FRIEND_SUGGESTION_CREATE = var6;
                    var6 = _closure1_slot69;
                    var0.LOAD_FRIEND_SUGGESTIONS_SUCCESS = var6;
                    var6 = _closure1_slot70;
                    var0.AUDIT_LOG_FETCH_SUCCESS = var6;
                    var0.AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS = var6;
                    var6 = _closure1_slot71;
                    var0.GIFT_CODE_RESOLVE_SUCCESS = var6;
                    var6 = _closure1_slot72;
                    var0.GUILD_APPLIED_BOOSTS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot43;
                    var0.LOAD_THREADS_SUCCESS = var6;
                    var0.LOAD_ARCHIVED_THREADS_SUCCESS = var6;
                    var6 = _closure1_slot44;
                    var0.LOAD_FORUM_POSTS = var6;
                    var6 = _closure1_slot46;
                    var0.GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot47;
                    var0.LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS = var6;
                    var6 = _closure1_slot48;
                    var0.NOTIFICATION_CENTER_ITEM_CREATE = var6;
                    var6 = _closure1_slot45;
                    var0.LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS = var6;
                    var6 = _closure1_slot60;
                    var0.PASSIVE_UPDATE_V2 = var6;
                    var6 = _closure1_slot61;
                    var0.LOCAL_MESSAGES_LOADED = var6;
                    var6 = _closure1_slot74;
                    var0.FAMILY_CENTER_INITIAL_LOAD = var6;
                    var6 = _closure1_slot75;
                    var0.FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot77;
                    var0.FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot78;
                    var0.FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot76;
                    var0.FAMILY_CENTER_REQUEST_LINK_SUCCESS = var6;
                    var6 = _closure1_slot79;
                    var0.MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS = var6;
                    var6 = _closure1_slot80;
                    var0.LOAD_ICYMI_HYDRATED = var6;
                    var6 = _closure1_slot81;
                    var0.EMBEDDED_ACTIVITY_UPDATE_V2 = var6;
                    var6 = _closure1_slot82;
                    var0.INITIATE_AGE_VERIFICATION = var6;
                    var6 = _closure1_slot83;
                    var0.CLOSE_AGE_VERIFICATION_MODAL = var6;
                    var6 = _closure1_slot84;
                    var0.INTERACTION_MODAL_CREATE = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun18051_ip = 628;
                        continue _fun18051
                    }
                case 615:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun18051_ip = 662;
                    continue _fun18051;
                case 628:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 662:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot11;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'takeSnapshot';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.getCurrentUser;
            var2 = var0.bind(var1)();
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.LATEST_SNAPSHOT_VERSION;
            var0.version = var1;
            var1 = {};
            var4 = new Array(1);
            var4[0] = var2;
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 22;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var2 = var3.bind(var4)(var2);
            var1.users = var2;
            var0.data = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleLoadCache';
        var4.key = var6;
        var6 = function arg0() {
            _fun18055: for (var _fun18055_ip = 0;;) switch (_fun18055_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var3.readSnapshot;
                    var1 = _closure2_slot0;
                    var1 = var1.LATEST_SNAPSHOT_VERSION;
                    var1 = var2.bind(var3)(var1);
                    var6 = null;
                    if (!(var6 != var1)) {
                        _fun18055_ip = 130;
                        continue _fun18055
                    }
                case 38:
                    var2 = _closure1_slot21;
                    var1 = var1.users;
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if (var1) {
                        _fun18055_ip = 130;
                        continue _fun18055
                    }
                case 70:
                    var11 = var2.value;
                    var9 = _closure1_slot16;
                    var8 = var11.id;
                    var1 = _closure1_slot10;
                    var10 = var1.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var10;
                    var12 = var11;
                    var1 = new var13[var1](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var10;
                    var9[var8] = var1;
                    var8 = var3.bind(var4)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun18055_ip = 70;
                        continue _fun18055
                    }
                case 130:
                    var1 = var0.users;
                    if (!(var6 != var1)) {
                        _fun18055_ip = 260;
                        continue _fun18055
                    }
                case 140:
                    var2 = _closure1_slot21;
                    var1 = var0.users;
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if (var1) {
                        _fun18055_ip = 260;
                        continue _fun18055
                    }
                case 172:
                    var11 = var2.value;
                    var8 = var11.id;
                    var1 = _closure1_slot16;
                    var1 = var8 in var1;
                    if (!var1) {
                        _fun18055_ip = 202;
                        continue _fun18055
                    }
                case 193:
                    var8 = _closure1_slot33;
                    var1 = var8.bind(var4)(var11);
                case 202:
                    if (var1) {
                        _fun18055_ip = 245;
                        continue _fun18055
                    }
                case 205:
                    var9 = _closure1_slot16;
                    var8 = var11.id;
                    var1 = _closure1_slot10;
                    var10 = var1.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var10;
                    var12 = var11;
                    var1 = new var13[var1](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var10;
                    var9[var8] = var1;
                case 245:
                    var8 = var3.bind(var4)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun18055_ip = 172;
                        continue _fun18055
                    }
                case 260:
                    var1 = var0.privateChannels;
                    var5 = new Array(2);
                    var5[0] = var1;
                    var0 = var0.initialGuildChannels;
                    var5[1] = var0;
                    var0 = var5.length;
                    var4 = 0;
                    var1 = var4 < var0;
                    var0 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18055_ip = 390;
                        continue _fun18055
                    }
                case 305:
                    var8 = _closure1_slot21;
                    var1 = var5[var4];
                    var9 = var8.bind(var0)(var1);
                    var8 = var9.bind(var0)();
                    var1 = var8.done;
                    if (var1) {
                        _fun18055_ip = 378;
                        continue _fun18055
                    }
                case 330:
                    var1 = var8.value;
                    var10 = var1.rawRecipients;
                    if (!(var6 != var10)) {
                        _fun18055_ip = 360;
                        continue _fun18055
                    }
                case 345:
                    var11 = var10.forEach;
                    var1 = function(arg0) { // Environment: var7
                        var3 = _closure1_slot27;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = false;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1 = var11.bind(var10)(var1);
                case 360:
                    var11 = var9.bind(var0)();
                    var1 = var11.done;
                    var8 = var11;
                    var2 = var10;
                    if (!var1) {
                        _fun18055_ip = 330;
                        continue _fun18055
                    }
                case 378:
                    var4 = var4 + 1;
                    var1 = var5.length;
                    if (var4 < var1) {
                        _fun18055_ip = 305;
                        continue _fun18055
                    }
                case 390:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUserStoreVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUser';
        var4.key = var6;
        var6 = function arg0() {
            _fun18058: for (var _fun18058_ip = 0;;) switch (_fun18058_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun18058_ip = 13;
                        continue _fun18058
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot16;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getUsers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'forEach';
        var4.key = var6;
        var6 = function arg0() {
            _fun18060: for (var _fun18060_ip = 0;;) switch (_fun18060_ip) {
                case 0:
                    var9 = arg0;
                    var7 = _closure1_slot16;
                    var0 = undefined;
                    var2 = false;
                    for (var3 in var7)
                        case 22: {
                            case 31: var10 = var3;
                            var1 = _closure1_slot16;
                            var1 = var1[var10];
                            var1 = var9.bind(var0)(var1);
                            if (var2 !== var1) {
                                _fun18060_ip = 22;
                                continue _fun18060
                            }
                        }
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'findByTag';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun18061: for (var _fun18061_ip = 0;;) switch (_fun18061_ip) {
                case 0:
                    var10 = arg0;
                    var9 = arg1;
                    var7 = _closure1_slot16;
                    var2 = null;
                    for (var3 in var7)
                        case 23: {
                            case 32: var1 = var3;
                            var0 = _closure1_slot16;
                            var0 = var0[var1];
                            if (!(var2 != var9)) {
                                _fun18061_ip = 66;
                                continue _fun18061
                            }
                            case 47: var1 = var0.username;
                            if (!(var1 === var10)) {
                                _fun18061_ip = 66;
                                continue _fun18061
                            }
                            case 56: var1 = var0.discriminator;
                            if (!(var1 !== var9)) {
                                _fun18061_ip = 94;
                                continue _fun18061
                            }
                            case 66: if (var2 != var9) {
                                _fun18061_ip = 23;
                                continue _fun18061
                            }
                            case 70: var1 = var0.username;
                            if (var1 !== var10) {
                                _fun18061_ip = 23;
                                continue _fun18061
                            }
                            case 79: var1 = var0.hasUniqueUsername;
                            var1 = var1.bind(var0)();
                            if (!var1) {
                                _fun18061_ip = 23;
                                continue _fun18061
                            }
                            case 92: return var0;
                            case 94: return var0;
                        }
                case 96:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'filter';
        var4.key = var6;
        var6 = function arg0() {
            _fun18062: for (var _fun18062_ip = 0;;) switch (_fun18062_ip) {
                case 0:
                    var9 = arg0;
                    var1 = arguments[1];
                    var8 = undefined;
                    if (!(var1 === var8)) {
                        _fun18062_ip = 14;
                        continue _fun18062
                    }
                case 12:
                    var1 = false;
                case 14:
                    var0 = new Array(0);
                    var6 = _closure1_slot16;
                    for (var2 in var6)
                        case 33: {
                            case 42: var11 = var2;
                            var10 = _closure1_slot16;
                            var11 = var10[var11];
                            var10 = var9.bind(var8)(var11);
                            if (!var10) {
                                _fun18062_ip = 33;
                                continue _fun18062
                            }
                            case 61: var10 = var0.push;
                            var10 = var10.bind(var0)(var11);
                            _fun18062_ip = 33;
                            continue _fun18062;
                        }
                case 73:
                    if (!var1) {
                        _fun18062_ip = 94;
                        continue _fun18062
                    }
                case 76:
                    var2 = var0.sort;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun18063: for (var _fun18063_ip = 0;;) switch (_fun18063_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var3 = var2.username;
                                var0 = var1.username;
                                var3 = var3 > var0;
                                var0 = 1;
                                if (var3) {
                                    _fun18063_ip = 54;
                                    continue _fun18063
                                }
                            case 26:
                                var2 = var2.username;
                                var1 = var1.username;
                                var2 = var2 < var1;
                                var1 = 0;
                                if (!var2) {
                                    _fun18063_ip = 51;
                                    continue _fun18063
                                }
                            case 45:
                                var1 = -1;
                            case 51:
                                var0 = var1;
                            case 54:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                case 94:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getCurrentUser';
        var4.key = var6;
        var5 = function() {
            var1 = _closure1_slot16;
            var2 = _closure1_slot11;
            var0 = var2.getId;
            var0 = var0.bind(var2)();
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var10);
    var10 = 'UserStore';
    var6.displayName = var10;
    var6.LATEST_SNAPSHOT_VERSION = var7;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var15 = var7;
    var6 = new var15[var6](var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 23;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'stores/UserStore.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.users = var5;
    var2.ASSISTANT_WUMPUS_VOICE_USER = var4;
    var2.transformUser = var3;
    var2.mergeUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1622, 1628, 1216, 1218, 660, 1623, 1630, 1626, 1605, 1643, 1631, 1635, 1636, 1384, 22, 1644, 1645, 1304, 2]);