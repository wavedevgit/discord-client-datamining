// ../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var42 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var43 = dependencyMap;
    var _closure1_slot0 = var42;
    var _closure1_slot1 = var43;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var44
        _fun18105: for (var _fun18105_ip = 0;;) switch (_fun18105_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot41;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun18105_ip = 51;
                    continue _fun18105
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun18105_ip = 92;
                continue _fun18105;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun18105_ip = 71;
                    continue _fun18105
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var44
        _fun18106: for (var _fun18106_ip = 0;;) switch (_fun18106_ip) {
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
                _fun18106_ip = 74;
                continue _fun18106;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot41 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var6 = 0;
    var1 = var43[var6];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var5 = 1;
    var1 = var43[var5];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var4 = 2;
    var1 = var43[var4];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var10 = 3;
    var1 = var43[var10];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var8 = 4;
    var1 = var43[var8];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var12 = 5;
    var1 = var43[var12];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var40 = {};
    var40.DAY_OF_WEEK_UNSPECIFIED = var6;
    var1 = 'DAY_OF_WEEK_UNSPECIFIED';
    var40[var6] = var1;
    var40.MONDAY = var5;
    var1 = 'MONDAY';
    var40[var5] = var1;
    var40.TUESDAY = var4;
    var1 = 'TUESDAY';
    var40[var4] = var1;
    var40.WEDNESDAY = var10;
    var1 = 'WEDNESDAY';
    var40[var10] = var1;
    var40.THURSDAY = var8;
    var1 = 'THURSDAY';
    var40[var8] = var1;
    var40.FRIDAY = var12;
    var1 = 'FRIDAY';
    var40[var12] = var1;
    var1 = 6;
    var40.SATURDAY = var1;
    var3 = 'SATURDAY';
    var40[var1] = var3;
    var11 = 7;
    var40.SUNDAY = var11;
    var3 = 'SUNDAY';
    var40[var11] = var3;
    var _closure1_slot8 = var40;
    var39 = {};
    var39.UNSPECIFIED = var6;
    var3 = 'UNSPECIFIED';
    var39[var6] = var3;
    var14 = 11;
    var39.DEFAULT = var14;
    var7 = 'DEFAULT';
    var39[var14] = var7;
    var39.BANGERS = var5;
    var7 = 'BANGERS';
    var39[var5] = var7;
    var39.BIO_RHYME = var4;
    var7 = 'BIO_RHYME';
    var39[var4] = var7;
    var39.CHERRY_BOMB = var10;
    var7 = 'CHERRY_BOMB';
    var39[var10] = var7;
    var39.CHICLE = var8;
    var7 = 'CHICLE';
    var39[var8] = var7;
    var39.COMPAGNON = var12;
    var7 = 'COMPAGNON';
    var39[var12] = var7;
    var39.MUSEO_MODERNO = var1;
    var7 = 'MUSEO_MODERNO';
    var39[var1] = var7;
    var39.NEO_CASTEL = var11;
    var7 = 'NEO_CASTEL';
    var39[var11] = var7;
    var16 = 8;
    var39.PIXELIFY = var16;
    var7 = 'PIXELIFY';
    var39[var16] = var7;
    var41 = 9;
    var39.RIBES = var41;
    var7 = 'RIBES';
    var39[var41] = var7;
    var15 = 10;
    var39.SINISTRE = var15;
    var7 = 'SINISTRE';
    var39[var15] = var7;
    var13 = 12;
    var39.ZILLA_SLAB = var13;
    var7 = 'ZILLA_SLAB';
    var39[var13] = var7;
    var _closure1_slot9 = var39;
    var38 = {};
    var38.UNSPECIFIED = var6;
    var38[var6] = var3;
    var38.SOLID = var5;
    var7 = 'SOLID';
    var38[var5] = var7;
    var38.GRADIENT = var4;
    var7 = 'GRADIENT';
    var38[var4] = var7;
    var38.NEON = var10;
    var7 = 'NEON';
    var38[var10] = var7;
    var38.TOON = var8;
    var7 = 'TOON';
    var38[var8] = var7;
    var38.POP = var12;
    var7 = 'POP';
    var38[var12] = var7;
    var38.GLOW = var1;
    var7 = 'GLOW';
    var38[var1] = var7;
    var _closure1_slot10 = var38;
    var37 = {};
    var37.USER_LINK_TYPE_UNSPECIFIED = var6;
    var7 = 'USER_LINK_TYPE_UNSPECIFIED';
    var37[var6] = var7;
    var37.PARENT = var5;
    var7 = 'PARENT';
    var37[var5] = var7;
    var37.CHILD = var4;
    var7 = 'CHILD';
    var37[var4] = var7;
    var _closure1_slot11 = var37;
    var36 = {};
    var36.USER_LINK_STATUS_UNSPECIFIED = var6;
    var7 = 'USER_LINK_STATUS_UNSPECIFIED';
    var36[var6] = var7;
    var36.PENDING = var5;
    var7 = 'PENDING';
    var36[var5] = var7;
    var36.ACTIVE = var4;
    var7 = 'ACTIVE';
    var36[var4] = var7;
    var36.INACTIVE = var10;
    var7 = 'INACTIVE';
    var36[var10] = var7;
    var36.DECLINED = var8;
    var7 = 'DECLINED';
    var36[var8] = var7;
    var _closure1_slot12 = var36;
    var35 = {};
    var35.RATE_LIMIT_TIER_UNSPECIFIED = var6;
    var7 = 'RATE_LIMIT_TIER_UNSPECIFIED';
    var35[var6] = var7;
    var35.UNLIMITED = var5;
    var7 = 'UNLIMITED';
    var35[var5] = var7;
    var35.TIER_2 = var4;
    var7 = 'TIER_2';
    var35[var4] = var7;
    var35.TIER_3 = var10;
    var9 = 'TIER_3';
    var35[var10] = var9;
    var35.TIER_4 = var8;
    var9 = 'TIER_4';
    var35[var8] = var9;
    var35.DISABLED = var12;
    var9 = 'DISABLED';
    var35[var12] = var9;
    var34 = {};
    var34.FEATURE_LIMIT_NAME_UNSPECIFIED = var6;
    var9 = 'FEATURE_LIMIT_NAME_UNSPECIFIED';
    var34[var6] = var9;
    var34.GUILD_MESSAGE_SEND = var5;
    var9 = 'GUILD_MESSAGE_SEND';
    var34[var5] = var9;
    var34.DM_SEND = var4;
    var9 = 'DM_SEND';
    var34[var4] = var9;
    var34.FRIEND_REQUEST = var10;
    var9 = 'FRIEND_REQUEST';
    var34[var10] = var9;
    var34.GUILD_CREATE = var8;
    var9 = 'GUILD_CREATE';
    var34[var8] = var9;
    var34.GUILD_JOIN = var12;
    var9 = 'GUILD_JOIN';
    var34[var12] = var9;
    var34.GUILD_TEXT_CHANNEL_CREATE = var1;
    var9 = 'GUILD_TEXT_CHANNEL_CREATE';
    var34[var1] = var9;
    var34.GUILD_UPLOAD_ATTACHMENT = var11;
    var9 = 'GUILD_UPLOAD_ATTACHMENT';
    var34[var11] = var9;
    var34.DM_UPLOAD_ATTACHMENT = var16;
    var9 = 'DM_UPLOAD_ATTACHMENT';
    var34[var16] = var9;
    var34.GDM_UPLOAD_ATTACHMENT = var41;
    var9 = 'GDM_UPLOAD_ATTACHMENT';
    var34[var41] = var9;
    var34.GDM_SEND = var15;
    var9 = 'GDM_SEND';
    var34[var15] = var9;
    var34.GUILD_VOICE_CHANNEL_CREATE = var14;
    var9 = 'GUILD_VOICE_CHANNEL_CREATE';
    var34[var14] = var9;
    var34.USER_PROFILE_EDIT = var13;
    var9 = 'USER_PROFILE_EDIT';
    var34[var13] = var9;
    var33 = {};
    var33.SAFETY_FLAG_TYPE_UNSPECIFIED = var6;
    var9 = 'SAFETY_FLAG_TYPE_UNSPECIFIED';
    var33[var6] = var9;
    var33.STRANGER_DANGER = var5;
    var9 = 'STRANGER_DANGER';
    var33[var5] = var9;
    var33.LIKELY_ATO = var4;
    var9 = 'LIKELY_ATO';
    var33[var4] = var9;
    var33.PARENTAL_CONSENT_REVOKED_IOS = var10;
    var9 = 'PARENTAL_CONSENT_REVOKED_IOS';
    var33[var10] = var9;
    var33.PARENTAL_CONSENT_REVOKED_ANDROID = var8;
    var9 = 'PARENTAL_CONSENT_REVOKED_ANDROID';
    var33[var8] = var9;
    var32 = {};
    var32.REASON_UNSPECIFIED = var6;
    var9 = 'REASON_UNSPECIFIED';
    var32[var6] = var9;
    var32.DISABLED_SUSPICIOUS_ACTIVITY = var5;
    var9 = 'DISABLED_SUSPICIOUS_ACTIVITY';
    var32[var5] = var9;
    var32.SMITE_REMOVE_EMAIL_VERIFICATION = var4;
    var9 = 'SMITE_REMOVE_EMAIL_VERIFICATION';
    var32[var4] = var9;
    var32.USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT = var10;
    var9 = 'USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT';
    var32[var10] = var9;
    var32.ACTIVE_ASSIGNMENT_COMPLETED = var8;
    var9 = 'ACTIVE_ASSIGNMENT_COMPLETED';
    var32[var8] = var9;
    var32.ACTIVE_ASSIGNMENT_CREATED = var12;
    var9 = 'ACTIVE_ASSIGNMENT_CREATED';
    var32[var12] = var9;
    var32.DEFERRED_ASSIGNMENT_CREATED = var1;
    var9 = 'DEFERRED_ASSIGNMENT_CREATED';
    var32[var1] = var9;
    var32.DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE = var11;
    var9 = 'DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE';
    var32[var11] = var9;
    var32.DEFERRED_ASSIGNMENT_CANCELLED = var16;
    var9 = 'DEFERRED_ASSIGNMENT_CANCELLED';
    var32[var16] = var9;
    var32.ASSIGNMENT_STATE_REPAIRED = var41;
    var9 = 'ASSIGNMENT_STATE_REPAIRED';
    var32[var41] = var9;
    var32.MANUAL_PERMANENT_BAN = var15;
    var9 = 'MANUAL_PERMANENT_BAN';
    var32[var15] = var9;
    var32.SAFETY_SYSTEM_UNBAN = var14;
    var9 = 'SAFETY_SYSTEM_UNBAN';
    var32[var14] = var9;
    var32.GENERIC_AUTOMATED_SAFETY_ACTION = var13;
    var9 = 'GENERIC_AUTOMATED_SAFETY_ACTION';
    var32[var13] = var9;
    var13 = 13;
    var32.GENERIC_MANUAL_SAFETY_ACTION = var13;
    var9 = 'GENERIC_MANUAL_SAFETY_ACTION';
    var32[var13] = var9;
    var _closure1_slot13 = var32;
    var31 = {};
    var31.ANNOTATION_UNSPECIFIED = var6;
    var9 = 'ANNOTATION_UNSPECIFIED';
    var31[var6] = var9;
    var31.SPAMMER = var5;
    var9 = 'SPAMMER';
    var31[var5] = var9;
    var31.SELF_DELETED = var4;
    var9 = 'SELF_DELETED';
    var31[var4] = var9;
    var31.SELF_DISABLED = var10;
    var9 = 'SELF_DISABLED';
    var31[var10] = var9;
    var31.UNDERAGE_DELETED = var8;
    var9 = 'UNDERAGE_DELETED';
    var31[var8] = var9;
    var31.SAFETY_POLICY_VIOLATION = var12;
    var9 = 'SAFETY_POLICY_VIOLATION';
    var31[var12] = var9;
    var31.INACTIVITY_DELETED = var1;
    var9 = 'INACTIVITY_DELETED';
    var31[var1] = var9;
    var31.GENERIC_DELETED = var11;
    var9 = 'GENERIC_DELETED';
    var31[var11] = var9;
    var _closure1_slot14 = var31;
    var30 = {};
    var30.NONE_UNSPECIFIED = var6;
    var9 = 'NONE_UNSPECIFIED';
    var30[var6] = var9;
    var30.SUBSCRIPTION = var5;
    var11 = 'SUBSCRIPTION';
    var30[var5] = var11;
    var30.FRACTIONAL_NITRO = var4;
    var11 = 'FRACTIONAL_NITRO';
    var30[var4] = var11;
    var30.REVERSE_TRIAL = var10;
    var11 = 'REVERSE_TRIAL';
    var30[var10] = var11;
    var30.SUBSCRIPTION_GROUP = var8;
    var11 = 'SUBSCRIPTION_GROUP';
    var30[var8] = var11;
    var _closure1_slot15 = var30;
    var29 = {};
    var29.NONE_UNSPECIFIED = var6;
    var29[var6] = var9;
    var29.BOOST_ONLY = var5;
    var9 = 'BOOST_ONLY';
    var29[var5] = var9;
    var29.TIER_0 = var4;
    var9 = 'TIER_0';
    var29[var4] = var9;
    var29.TIER_1 = var10;
    var9 = 'TIER_1';
    var29[var10] = var9;
    var29.TIER_2 = var8;
    var29[var8] = var7;
    var _closure1_slot16 = var29;
    var28 = {};
    var28.UNSPECIFIED = var6;
    var28[var6] = var3;
    var28.PRIMARY = var5;
    var3 = 'PRIMARY';
    var28[var5] = var3;
    var28.MEMBER = var4;
    var3 = 'MEMBER';
    var28[var4] = var3;
    var _closure1_slot17 = var28;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: TimeOfDay$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(4);
            var0 = {
                'no': 1,
                'name': 'hours',
                'kind': 'scalar',
                'T': 5
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'minutes',
                'kind': 'scalar',
                'T': 5
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'seconds',
                'kind': 'scalar',
                'T': 5
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'nanos',
                'kind': 'scalar',
                'T': 5
            };
            var5[3] = var0;
            var0 = ['discord_protos.users.v1.TimeOfDay'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18111: for (var _fun18111_ip = 0;;) switch (_fun18111_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'hours': 0,
                        'minutes': 0,
                        'seconds': 0,
                        'nanos': 0
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18111_ip = 118;
                        continue _fun18111
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18112: for (var _fun18112_ip = 0;;) switch (_fun18112_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var16 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18112_ip = 27;
                        continue _fun18112
                    }
                case 18:
                    var1 = var16.create;
                    var0 = var1.bind(var16)();
                case 27:
                    var2 = var18.pos;
                    var1 = arg1;
                    var15 = var2 + var1;
                    var1 = var18.pos;
                    var1 = var1 < var15;
                    var14 = undefined;
                    var12 = 6;
                    var11 = true;
                    var10 = false;
                    var9 = 'throw';
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18112_ip = 440;
                        continue _fun18112
                    }
                case 88:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var14)(var19, var6);
                    var27 = var1[var4];
                    var26 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun18112_ip = 400;
                        continue _fun18112
                    }
                case 122:
                    if (!(var6 !== var27)) {
                        _fun18112_ip = 376;
                        continue _fun18112
                    }
                case 129:
                    if (!(var7 !== var27)) {
                        _fun18112_ip = 352;
                        continue _fun18112
                    }
                case 136:
                    if (!(var8 !== var27)) {
                        _fun18112_ip = 328;
                        continue _fun18112
                    }
                case 143:
                    var21 = var17.readUnknownField;
                    if (!(var9 !== var21)) {
                        _fun18112_ip = 248;
                        continue _fun18112
                    }
                case 153:
                    var1 = var18.skip;
                    var1 = var1.bind(var18)(var26);
                    var20 = var21;
                    var19 = var1;
                    if (!(var10 !== var21)) {
                        _fun18112_ip = 422;
                        continue _fun18112
                    }
                case 177:
                    var23 = var21;
                    if (!(var11 === var21)) {
                        _fun18112_ip = 213;
                        continue _fun18112
                    }
                case 184:
                    var24 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var22 = var22[var12];
                    var22 = var24.bind(var14)(var22);
                    var22 = var22.UnknownFieldHandler;
                    var23 = var22.onRead;
                case 213:
                    var32 = var16.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var26;
                    var28 = var1;
                    var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                    var20 = var21;
                    var19 = var1;
                    _fun18112_ip = 422;
                    continue _fun18112;
                case 248:
                    var1 = global;
                    var21 = var1.globalThis;
                    var22 = var21.Error;
                    var28 = var16.typeName;
                    var1 = var1.HermesInternal;
                    var24 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var26;
                    var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var21 = var22.prototype;
                    var21 = Object.create(var21, {
                        constructor: {
                            value: var22
                        }
                    });
                    var33 = var21;
                    var1 = new var33[var22](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var21;
                    throw var1;
                case 328:
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var0.nanos = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun18112_ip = 422;
                    continue _fun18112;
                case 352:
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var0.seconds = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun18112_ip = 422;
                    continue _fun18112;
                case 376:
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var0.minutes = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun18112_ip = 422;
                    continue _fun18112;
                case 400:
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var0.hours = var1;
                    var20 = var3;
                    var19 = var2;
                case 422:
                    var1 = var18.pos;
                    var3 = var20;
                    var2 = var19;
                    if (var1 < var15) {
                        _fun18112_ip = 88;
                        continue _fun18112
                    }
                case 440:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18113: for (var _fun18113_ip = 0;;) switch (_fun18113_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.hours;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun18113_ip = 85;
                        continue _fun18113
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.hours;
                    var1 = var3.bind(var5)(var1);
                case 85:
                    var1 = var4.minutes;
                    if (!(var2 !== var1)) {
                        _fun18113_ip = 162;
                        continue _fun18113
                    }
                case 95:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.minutes;
                    var1 = var3.bind(var5)(var1);
                case 162:
                    var1 = var4.seconds;
                    if (!(var2 !== var1)) {
                        _fun18113_ip = 239;
                        continue _fun18113
                    }
                case 172:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 3;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.seconds;
                    var1 = var3.bind(var5)(var1);
                case 239:
                    var1 = var4.nanos;
                    if (!(var2 !== var1)) {
                        _fun18113_ip = 316;
                        continue _fun18113
                    }
                case 249:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 4;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.nanos;
                    var1 = var2.bind(var3)(var1);
                case 316:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18113_ip = 393;
                        continue _fun18113
                    }
                case 331:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18113_ip = 375;
                        continue _fun18113
                    }
                case 338:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 375:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 393:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var27 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot18 = var27;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: User$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(12);
            var0 = {
                'no': 1,
                'name': 'id',
                'kind': 'scalar',
                'T': 4
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'username',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'discriminator',
                'kind': 'scalar',
                'T': 9
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'avatar',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'bot',
                'kind': 'scalar',
                'T': 8
            };
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'public_flags',
                'kind': 'scalar',
                'T': 4
            };
            var5[5] = var0;
            var0 = {
                'no': 8,
                'name': 'global_name',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 9,
                'name': 'avatar_decoration_data',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot19;
                return var0;
            };
            var0.T = var7;
            var5[7] = var0;
            var0 = {
                'no': 10,
                'name': 'primary_guild',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot23;
                return var0;
            };
            var0.T = var7;
            var5[8] = var0;
            var0 = {
                'no': 11,
                'name': 'collectibles',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot22;
                return var0;
            };
            var0.T = var7;
            var5[9] = var0;
            var0 = {
                'no': 12,
                'name': 'safety_state',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot37;
                return var0;
            };
            var0.T = var7;
            var5[10] = var0;
            var0 = {
                'no': 13,
                'name': 'display_name_styles',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot21;
                return var0;
            };
            var0.T = var6;
            var5[11] = var0;
            var0 = ['discord_protos.users.v1.User'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18123: for (var _fun18123_ip = 0;;) switch (_fun18123_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'id': '0',
                        'username': '',
                        'discriminator': '',
                        'bot': false,
                        'publicFlags': '0'
                    };
                    var10 = false;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18123_ip = 118;
                        continue _fun18123
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18124: for (var _fun18124_ip = 0;;) switch (_fun18124_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun18124_ip = 27;
                        continue _fun18124
                    }
                case 18:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 27:
                    var3 = var19.pos;
                    var2 = arg1;
                    var17 = var3 + var2;
                    var2 = var19.pos;
                    var2 = var2 < var17;
                    var16 = undefined;
                    var14 = 6;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 7;
                    var9 = 2;
                    var8 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun18124_ip = 823;
                        continue _fun18124
                    }
                case 85:
                    var2 = var19.tag;
                    var6 = var2.bind(var19)();
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var16)(var6, var9);
                    var7 = var2[var8];
                    var6 = var2[var5];
                    SwitchImm(value_reg = 7, jump_table_address = 905, default_jump_address = 708, unsigned_min_value = 1, unsigned_max_value = 13) // Switch table: [675, 649, 623, 548, 521, 485, 708, 410, 354, 298, 242, 186, 130];
                case 130:
                    var22 = _closure1_slot21;
                    var21 = var22.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.displayNameStyles;
                    var31 = var22;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var21](var30, var29, var28, var27, var26);
                    var0.displayNameStyles = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 186:
                    var24 = _closure1_slot37;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.safetyState;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.safetyState = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 242:
                    var24 = _closure1_slot22;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.collectibles;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.collectibles = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 298:
                    var24 = _closure1_slot23;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.primaryGuild;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.primaryGuild = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 354:
                    var24 = _closure1_slot19;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.avatarDecorationData;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.avatarDecorationData = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 410:
                    var22 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var10];
                    var2 = var22.bind(var16)(var2);
                    var24 = var2.StringValue;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.globalName;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.globalName = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 485:
                    var2 = var19.uint64;
                    var22 = var2.bind(var19)();
                    var2 = var22.toString;
                    var2 = var2.bind(var22)();
                    var0.publicFlags = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 521:
                    var2 = var19.bool;
                    var2 = var2.bind(var19)();
                    var0.bot = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 548:
                    var22 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var10];
                    var2 = var22.bind(var16)(var2);
                    var24 = var2.StringValue;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.avatar;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.avatar = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 623:
                    var2 = var19.string;
                    var2 = var2.bind(var19)();
                    var0.discriminator = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 649:
                    var2 = var19.string;
                    var2 = var2.bind(var19)();
                    var0.username = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 675:
                    var2 = var19.uint64;
                    var22 = var2.bind(var19)();
                    var2 = var22.toString;
                    var2 = var2.bind(var22)();
                    var0.id = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun18124_ip = 805;
                    continue _fun18124;
                case 708:
                    var22 = var18.readUnknownField;
                    if (!(var11 !== var22)) {
                        _fun18124_ip = 825;
                        continue _fun18124
                    }
                case 718:
                    var2 = var19.skip;
                    var2 = var2.bind(var19)(var6);
                    var21 = var22;
                    var20 = var2;
                    if (!(var12 !== var22)) {
                        _fun18124_ip = 805;
                        continue _fun18124
                    }
                case 739:
                    var24 = var22;
                    if (!(var13 === var22)) {
                        _fun18124_ip = 775;
                        continue _fun18124
                    }
                case 746:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var14];
                    var23 = var25.bind(var16)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 775:
                    var30 = var1.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var7;
                    var27 = var6;
                    var26 = var2;
                    var23 = var31[var24](var30, var29, var28, var27, var26, var25);
                    var21 = var22;
                    var20 = var2;
                case 805:
                    var2 = var19.pos;
                    var4 = var21;
                    var3 = var20;
                    if (var2 < var17) {
                        _fun18124_ip = 85;
                        continue _fun18124
                    }
                case 823:
                    return var0;
                case 825:
                    var0 = global;
                    var2 = var0.globalThis;
                    var2 = var2.Error;
                    var26 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var7;
                    var28 = var6;
                    var30 = var31[var4](var30, var29, var28, var27, var26, var25);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var31 = var1;
                    var0 = new var31[var2](var30, var29);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18125: for (var _fun18125_ip = 0;;) switch (_fun18125_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.id;
                    var5 = '0';
                    if (!(var5 !== var1)) {
                        _fun18125_ip = 90;
                        continue _fun18125
                    }
                case 24:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var6 = var6.bind(var0)(var1, var3);
                    var3 = var6.uint64;
                    var1 = var4.id;
                    var1 = var3.bind(var6)(var1);
                case 90:
                    var1 = var4.username;
                    var3 = '';
                    if (!(var3 !== var1)) {
                        _fun18125_ip = 168;
                        continue _fun18125
                    }
                case 103:
                    var7 = var0.tag;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 6;
                    var6 = var6[var1];
                    var1 = undefined;
                    var1 = var8.bind(var1)(var6);
                    var1 = var1.WireType;
                    var6 = var1.LengthDelimited;
                    var1 = 2;
                    var7 = var7.bind(var0)(var1, var6);
                    var6 = var7.string;
                    var1 = var4.username;
                    var1 = var6.bind(var7)(var1);
                case 168:
                    var1 = var4.discriminator;
                    if (!(var3 !== var1)) {
                        _fun18125_ip = 244;
                        continue _fun18125
                    }
                case 178:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 3;
                    var6 = var6.bind(var0)(var1, var3);
                    var3 = var6.string;
                    var1 = var4.discriminator;
                    var1 = var3.bind(var6)(var1);
                case 244:
                    var1 = var4.avatar;
                    if (!var1) {
                        _fun18125_ip = 359;
                        continue _fun18125
                    }
                case 253:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var1 = 7;
                    var1 = var11[var1];
                    var8 = undefined;
                    var1 = var10.bind(var8)(var1);
                    var7 = var1.StringValue;
                    var6 = var7.internalBinaryWrite;
                    var3 = var4.avatar;
                    var9 = var0.tag;
                    var1 = 6;
                    var1 = var11[var1];
                    var1 = var10.bind(var8)(var1);
                    var1 = var1.WireType;
                    var8 = var1.LengthDelimited;
                    var1 = 4;
                    var8 = var9.bind(var0)(var1, var8);
                    var1 = var8.fork;
                    var1 = var1.bind(var8)();
                    var3 = var6.bind(var7)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 359:
                    var3 = var4.bot;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18125_ip = 438;
                        continue _fun18125
                    }
                case 371:
                    var7 = var0.tag;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 6;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var6);
                    var3 = var3.WireType;
                    var6 = var3.Varint;
                    var3 = 5;
                    var7 = var7.bind(var0)(var3, var6);
                    var6 = var7.bool;
                    var3 = var4.bot;
                    var3 = var6.bind(var7)(var3);
                case 438:
                    var3 = var4.publicFlags;
                    if (!(var5 !== var3)) {
                        _fun18125_ip = 512;
                        continue _fun18125
                    }
                case 448:
                    var6 = var0.tag;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var5 = 6;
                    var7 = var3[var5];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var7);
                    var3 = var3.WireType;
                    var3 = var3.Varint;
                    var6 = var6.bind(var0)(var5, var3);
                    var5 = var6.uint64;
                    var3 = var4.publicFlags;
                    var3 = var5.bind(var6)(var3);
                case 512:
                    var3 = var4.globalName;
                    if (!var3) {
                        _fun18125_ip = 627;
                        continue _fun18125
                    }
                case 521:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var3 = 7;
                    var3 = var11[var3];
                    var8 = undefined;
                    var3 = var10.bind(var8)(var3);
                    var7 = var3.StringValue;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.globalName;
                    var9 = var0.tag;
                    var3 = 6;
                    var3 = var11[var3];
                    var3 = var10.bind(var8)(var3);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 8;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 627:
                    var3 = var4.avatarDecorationData;
                    if (!var3) {
                        _fun18125_ip = 728;
                        continue _fun18125
                    }
                case 636:
                    var7 = _closure1_slot19;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.avatarDecorationData;
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 6;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var10.bind(var3)(var8);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 9;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 728:
                    var3 = var4.primaryGuild;
                    if (!var3) {
                        _fun18125_ip = 829;
                        continue _fun18125
                    }
                case 737:
                    var7 = _closure1_slot23;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.primaryGuild;
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 6;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var10.bind(var3)(var8);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 10;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 829:
                    var3 = var4.collectibles;
                    if (!var3) {
                        _fun18125_ip = 930;
                        continue _fun18125
                    }
                case 838:
                    var7 = _closure1_slot22;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.collectibles;
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 6;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var10.bind(var3)(var8);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 11;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 930:
                    var3 = var4.safetyState;
                    if (!var3) {
                        _fun18125_ip = 1031;
                        continue _fun18125
                    }
                case 939:
                    var7 = _closure1_slot37;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.safetyState;
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 6;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var10.bind(var3)(var8);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 12;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 1031:
                    var3 = var4.displayNameStyles;
                    if (!var3) {
                        _fun18125_ip = 1132;
                        continue _fun18125
                    }
                case 1040:
                    var7 = _closure1_slot21;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.displayNameStyles;
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 6;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var10.bind(var3)(var8);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 13;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 1132:
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun18125_ip = 1204;
                        continue _fun18125
                    }
                case 1142:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18125_ip = 1186;
                        continue _fun18125
                    }
                case 1149:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 1186:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 1204:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var26 = var3 instanceof Object ? var3 : var4;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: MediumUser$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(8);
            var0 = {
                'no': 1,
                'name': 'id',
                'kind': 'scalar',
                'T': 6
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'username',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'discriminator',
                'kind': 'scalar',
                'T': 13
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'avatar_hash',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'bot',
                'kind': 'scalar',
                'T': 8
            };
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'flags',
                'kind': 'scalar',
                'T': 4
            };
            var5[5] = var0;
            var0 = {
                'no': 7,
                'name': 'email',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 8,
                'name': 'phone',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var6;
            var5[7] = var0;
            var0 = ['discord_protos.users.v1.MediumUser'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18131: for (var _fun18131_ip = 0;;) switch (_fun18131_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'id': '0',
                        'username': '',
                        'discriminator': 0,
                        'bot': false,
                        'flags': '0'
                    };
                    var10 = false;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18131_ip = 118;
                        continue _fun18131
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18132: for (var _fun18132_ip = 0;;) switch (_fun18132_ip) {
                case 0:
                    var21 = arg0;
                    var20 = arg2;
                    var0 = arg3;
                    var19 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18132_ip = 27;
                        continue _fun18132
                    }
                case 18:
                    var1 = var19.create;
                    var0 = var1.bind(var19)();
                case 27:
                    var2 = var21.pos;
                    var1 = arg1;
                    var18 = var2 + var1;
                    var1 = var21.pos;
                    var1 = var1 < var18;
                    var17 = undefined;
                    var15 = 7;
                    var14 = 6;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 8;
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18132_ip = 746;
                        continue _fun18132
                    }
                case 97:
                    var1 = var21.tag;
                    var22 = var1.bind(var21)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var17)(var22, var6);
                    var30 = var1[var4];
                    var29 = var1[var5];
                    if (!(var5 !== var30)) {
                        _fun18132_ip = 697;
                        continue _fun18132
                    }
                case 131:
                    if (!(var6 !== var30)) {
                        _fun18132_ip = 674;
                        continue _fun18132
                    }
                case 138:
                    if (!(var7 !== var30)) {
                        _fun18132_ip = 650;
                        continue _fun18132
                    }
                case 145:
                    if (!(var8 !== var30)) {
                        _fun18132_ip = 578;
                        continue _fun18132
                    }
                case 152:
                    if (!(var9 !== var30)) {
                        _fun18132_ip = 551;
                        continue _fun18132
                    }
                case 159:
                    if (!(var14 !== var30)) {
                        _fun18132_ip = 515;
                        continue _fun18132
                    }
                case 166:
                    if (!(var15 !== var30)) {
                        _fun18132_ip = 440;
                        continue _fun18132
                    }
                case 173:
                    if (!(var10 !== var30)) {
                        _fun18132_ip = 365;
                        continue _fun18132
                    }
                case 180:
                    var24 = var20.readUnknownField;
                    if (!(var11 !== var24)) {
                        _fun18132_ip = 285;
                        continue _fun18132
                    }
                case 190:
                    var1 = var21.skip;
                    var1 = var1.bind(var21)(var29);
                    var23 = var24;
                    var22 = var1;
                    if (!(var12 !== var24)) {
                        _fun18132_ip = 728;
                        continue _fun18132
                    }
                case 214:
                    var26 = var24;
                    if (!(var13 === var24)) {
                        _fun18132_ip = 250;
                        continue _fun18132
                    }
                case 221:
                    var27 = _closure1_slot0;
                    var25 = _closure1_slot1;
                    var25 = var25[var14];
                    var25 = var27.bind(var17)(var25);
                    var25 = var25.UnknownFieldHandler;
                    var26 = var25.onRead;
                case 250:
                    var35 = var19.typeName;
                    var36 = undefined;
                    var34 = var0;
                    var33 = var30;
                    var32 = var29;
                    var31 = var1;
                    var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                    var23 = var24;
                    var22 = var1;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 285:
                    var1 = global;
                    var24 = var1.globalThis;
                    var25 = var24.Error;
                    var31 = var19.typeName;
                    var1 = var1.HermesInternal;
                    var27 = var1.concat;
                    var36 = 'Unknown field ';
                    var34 = ' (wire type ';
                    var32 = ') for ';
                    var35 = var30;
                    var33 = var29;
                    var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                    var24 = var25.prototype;
                    var24 = Object.create(var24, {
                        constructor: {
                            value: var25
                        }
                    });
                    var36 = var24;
                    var1 = new var36[var25](var35, var34);
                    var1 = var1 instanceof Object ? var1 : var24;
                    throw var1;
                case 365:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var24.bind(var17)(var1);
                    var26 = var1.StringValue;
                    var25 = var26.internalBinaryRead;
                    var1 = var21.uint32;
                    var34 = var1.bind(var21)();
                    var32 = var0.phone;
                    var36 = var26;
                    var35 = var21;
                    var33 = var20;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.phone = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 440:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var24.bind(var17)(var1);
                    var26 = var1.StringValue;
                    var25 = var26.internalBinaryRead;
                    var1 = var21.uint32;
                    var34 = var1.bind(var21)();
                    var32 = var0.email;
                    var36 = var26;
                    var35 = var21;
                    var33 = var20;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.email = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 515:
                    var1 = var21.uint64;
                    var24 = var1.bind(var21)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var0.flags = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 551:
                    var1 = var21.bool;
                    var1 = var1.bind(var21)();
                    var0.bot = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 578:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var24.bind(var17)(var1);
                    var26 = var1.StringValue;
                    var25 = var26.internalBinaryRead;
                    var1 = var21.uint32;
                    var34 = var1.bind(var21)();
                    var32 = var0.avatarHash;
                    var36 = var26;
                    var35 = var21;
                    var33 = var20;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.avatarHash = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 650:
                    var1 = var21.uint32;
                    var1 = var1.bind(var21)();
                    var0.discriminator = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 674:
                    var1 = var21.string;
                    var1 = var1.bind(var21)();
                    var0.username = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18132_ip = 728;
                    continue _fun18132;
                case 697:
                    var1 = var21.fixed64;
                    var24 = var1.bind(var21)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var0.id = var1;
                    var23 = var3;
                    var22 = var2;
                case 728:
                    var1 = var21.pos;
                    var3 = var23;
                    var2 = var22;
                    if (var1 < var18) {
                        _fun18132_ip = 97;
                        continue _fun18132
                    }
                case 746:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18133: for (var _fun18133_ip = 0;;) switch (_fun18133_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.id;
                    var5 = '0';
                    if (!(var5 !== var1)) {
                        _fun18133_ip = 90;
                        continue _fun18133
                    }
                case 24:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Bit64;
                    var1 = 1;
                    var6 = var6.bind(var0)(var1, var3);
                    var3 = var6.fixed64;
                    var1 = var4.id;
                    var1 = var3.bind(var6)(var1);
                case 90:
                    var3 = var4.username;
                    var1 = '';
                    if (!(var1 !== var3)) {
                        _fun18133_ip = 168;
                        continue _fun18133
                    }
                case 103:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 2;
                    var6 = var6.bind(var0)(var1, var3);
                    var3 = var6.string;
                    var1 = var4.username;
                    var1 = var3.bind(var6)(var1);
                case 168:
                    var3 = var4.discriminator;
                    var1 = 0;
                    if (!(var1 !== var3)) {
                        _fun18133_ip = 247;
                        continue _fun18133
                    }
                case 180:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 3;
                    var6 = var6.bind(var0)(var1, var3);
                    var3 = var6.uint32;
                    var1 = var4.discriminator;
                    var1 = var3.bind(var6)(var1);
                case 247:
                    var1 = var4.avatarHash;
                    if (!var1) {
                        _fun18133_ip = 362;
                        continue _fun18133
                    }
                case 256:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var1 = 7;
                    var1 = var11[var1];
                    var8 = undefined;
                    var1 = var10.bind(var8)(var1);
                    var7 = var1.StringValue;
                    var6 = var7.internalBinaryWrite;
                    var3 = var4.avatarHash;
                    var9 = var0.tag;
                    var1 = 6;
                    var1 = var11[var1];
                    var1 = var10.bind(var8)(var1);
                    var1 = var1.WireType;
                    var8 = var1.LengthDelimited;
                    var1 = 4;
                    var8 = var9.bind(var0)(var1, var8);
                    var1 = var8.fork;
                    var1 = var1.bind(var8)();
                    var3 = var6.bind(var7)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 362:
                    var3 = var4.bot;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18133_ip = 441;
                        continue _fun18133
                    }
                case 374:
                    var7 = var0.tag;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 6;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var6);
                    var3 = var3.WireType;
                    var6 = var3.Varint;
                    var3 = 5;
                    var7 = var7.bind(var0)(var3, var6);
                    var6 = var7.bool;
                    var3 = var4.bot;
                    var3 = var6.bind(var7)(var3);
                case 441:
                    var3 = var4.flags;
                    if (!(var5 !== var3)) {
                        _fun18133_ip = 513;
                        continue _fun18133
                    }
                case 450:
                    var6 = var0.tag;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var5 = 6;
                    var7 = var3[var5];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var7);
                    var3 = var3.WireType;
                    var3 = var3.Varint;
                    var6 = var6.bind(var0)(var5, var3);
                    var5 = var6.uint64;
                    var3 = var4.flags;
                    var3 = var5.bind(var6)(var3);
                case 513:
                    var3 = var4.email;
                    if (!var3) {
                        _fun18133_ip = 625;
                        continue _fun18133
                    }
                case 522:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var9 = 7;
                    var3 = var12[var9];
                    var10 = undefined;
                    var3 = var11.bind(var10)(var3);
                    var7 = var3.StringValue;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.email;
                    var8 = var0.tag;
                    var3 = 6;
                    var3 = var12[var3];
                    var3 = var11.bind(var10)(var3);
                    var3 = var3.WireType;
                    var3 = var3.LengthDelimited;
                    var8 = var8.bind(var0)(var9, var3);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 625:
                    var3 = var4.phone;
                    if (!var3) {
                        _fun18133_ip = 740;
                        continue _fun18133
                    }
                case 634:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var3 = 7;
                    var3 = var11[var3];
                    var8 = undefined;
                    var3 = var10.bind(var8)(var3);
                    var7 = var3.StringValue;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.phone;
                    var9 = var0.tag;
                    var3 = 6;
                    var3 = var11[var3];
                    var3 = var10.bind(var8)(var3);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 8;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 740:
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun18133_ip = 812;
                        continue _fun18133
                    }
                case 750:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18133_ip = 794;
                        continue _fun18133
                    }
                case 757:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 794:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 812:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var25 = var3 instanceof Object ? var3 : var4;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: UserAvatarDecoration$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(3);
            var0 = {
                'no': 1,
                'name': 'asset',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'sku_id',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt64Value;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'expires_at',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt32Value;
                return var0;
            };
            var0.T = var6;
            var5[2] = var0;
            var0 = ['discord_protos.users.v1.UserAvatarDecoration'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18138: for (var _fun18138_ip = 0;;) switch (_fun18138_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '';
                    var0.asset = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18138_ip = 119;
                        continue _fun18138
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18139: for (var _fun18139_ip = 0;;) switch (_fun18139_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var16 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18139_ip = 27;
                        continue _fun18139
                    }
                case 18:
                    var1 = var16.create;
                    var0 = var1.bind(var16)();
                case 27:
                    var2 = var18.pos;
                    var1 = arg1;
                    var15 = var2 + var1;
                    var1 = var18.pos;
                    var1 = var1 < var15;
                    var14 = undefined;
                    var12 = 7;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18139_ip = 504;
                        continue _fun18139
                    }
                case 88:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var14)(var19, var6);
                    var27 = var1[var4];
                    var26 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun18139_ip = 465;
                        continue _fun18139
                    }
                case 122:
                    if (!(var6 !== var27)) {
                        _fun18139_ip = 393;
                        continue _fun18139
                    }
                case 129:
                    if (!(var7 !== var27)) {
                        _fun18139_ip = 321;
                        continue _fun18139
                    }
                case 136:
                    var21 = var17.readUnknownField;
                    if (!(var8 !== var21)) {
                        _fun18139_ip = 241;
                        continue _fun18139
                    }
                case 146:
                    var1 = var18.skip;
                    var1 = var1.bind(var18)(var26);
                    var20 = var21;
                    var19 = var1;
                    if (!(var9 !== var21)) {
                        _fun18139_ip = 486;
                        continue _fun18139
                    }
                case 170:
                    var23 = var21;
                    if (!(var10 === var21)) {
                        _fun18139_ip = 206;
                        continue _fun18139
                    }
                case 177:
                    var24 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var22 = var22[var11];
                    var22 = var24.bind(var14)(var22);
                    var22 = var22.UnknownFieldHandler;
                    var23 = var22.onRead;
                case 206:
                    var32 = var16.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var26;
                    var28 = var1;
                    var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                    var20 = var21;
                    var19 = var1;
                    _fun18139_ip = 486;
                    continue _fun18139;
                case 241:
                    var1 = global;
                    var21 = var1.globalThis;
                    var22 = var21.Error;
                    var28 = var16.typeName;
                    var1 = var1.HermesInternal;
                    var24 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var26;
                    var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var21 = var22.prototype;
                    var21 = Object.create(var21, {
                        constructor: {
                            value: var22
                        }
                    });
                    var33 = var21;
                    var1 = new var33[var22](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var21;
                    throw var1;
                case 321:
                    var21 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var12];
                    var1 = var21.bind(var14)(var1);
                    var23 = var1.UInt32Value;
                    var22 = var23.internalBinaryRead;
                    var1 = var18.uint32;
                    var31 = var1.bind(var18)();
                    var29 = var0.expiresAt;
                    var33 = var23;
                    var32 = var18;
                    var30 = var17;
                    var1 = var33[var22](var32, var31, var30, var29, var28);
                    var0.expiresAt = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun18139_ip = 486;
                    continue _fun18139;
                case 393:
                    var21 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var12];
                    var1 = var21.bind(var14)(var1);
                    var23 = var1.UInt64Value;
                    var22 = var23.internalBinaryRead;
                    var1 = var18.uint32;
                    var31 = var1.bind(var18)();
                    var29 = var0.skuId;
                    var33 = var23;
                    var32 = var18;
                    var30 = var17;
                    var1 = var33[var22](var32, var31, var30, var29, var28);
                    var0.skuId = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun18139_ip = 486;
                    continue _fun18139;
                case 465:
                    var1 = var18.string;
                    var1 = var1.bind(var18)();
                    var0.asset = var1;
                    var20 = var3;
                    var19 = var2;
                case 486:
                    var1 = var18.pos;
                    var3 = var20;
                    var2 = var19;
                    if (var1 < var15) {
                        _fun18139_ip = 88;
                        continue _fun18139
                    }
                case 504:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18140: for (var _fun18140_ip = 0;;) switch (_fun18140_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var3 = var4.asset;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun18140_ip = 89;
                        continue _fun18140
                    }
                case 23:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.asset;
                    var2 = var3.bind(var5)(var2);
                case 89:
                    var2 = var4.skuId;
                    if (!var2) {
                        _fun18140_ip = 204;
                        continue _fun18140
                    }
                case 98:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt64Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.skuId;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 204:
                    var2 = var4.expiresAt;
                    if (!var2) {
                        _fun18140_ip = 319;
                        continue _fun18140
                    }
                case 213:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt32Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.expiresAt;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 319:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18140_ip = 393;
                        continue _fun18140
                    }
                case 331:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18140_ip = 375;
                        continue _fun18140
                    }
                case 338:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 375:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 393:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var24 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot19 = var24;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: UserNameplate$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(5);
            var0 = {
                'no': 1,
                'name': 'asset',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'palette',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'sku_id',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt64Value;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'expires_at',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var6;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'label',
                'kind': 'scalar',
                'T': 9
            };
            var5[4] = var0;
            var0 = ['discord_protos.users.v1.UserNameplate'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18145: for (var _fun18145_ip = 0;;) switch (_fun18145_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'asset': '',
                        'palette': '',
                        'label': ''
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18145_ip = 122;
                        continue _fun18145
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18146: for (var _fun18146_ip = 0;;) switch (_fun18146_ip) {
                case 0:
                    var21 = arg0;
                    var20 = arg2;
                    var0 = arg3;
                    var19 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18146_ip = 27;
                        continue _fun18146
                    }
                case 18:
                    var1 = var19.create;
                    var0 = var1.bind(var19)();
                case 27:
                    var2 = var21.pos;
                    var1 = arg1;
                    var18 = var2 + var1;
                    var1 = var21.pos;
                    var1 = var1 < var18;
                    var17 = undefined;
                    var15 = 7;
                    var14 = 8;
                    var13 = 6;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18146_ip = 576;
                        continue _fun18146
                    }
                case 97:
                    var1 = var21.tag;
                    var22 = var1.bind(var21)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var17)(var22, var6);
                    var30 = var1[var4];
                    var29 = var1[var5];
                    if (!(var5 !== var30)) {
                        _fun18146_ip = 537;
                        continue _fun18146
                    }
                case 131:
                    if (!(var6 !== var30)) {
                        _fun18146_ip = 514;
                        continue _fun18146
                    }
                case 138:
                    if (!(var7 !== var30)) {
                        _fun18146_ip = 442;
                        continue _fun18146
                    }
                case 145:
                    if (!(var8 !== var30)) {
                        _fun18146_ip = 370;
                        continue _fun18146
                    }
                case 152:
                    if (!(var9 !== var30)) {
                        _fun18146_ip = 344;
                        continue _fun18146
                    }
                case 159:
                    var24 = var20.readUnknownField;
                    if (!(var10 !== var24)) {
                        _fun18146_ip = 264;
                        continue _fun18146
                    }
                case 169:
                    var1 = var21.skip;
                    var1 = var1.bind(var21)(var29);
                    var23 = var24;
                    var22 = var1;
                    if (!(var11 !== var24)) {
                        _fun18146_ip = 558;
                        continue _fun18146
                    }
                case 193:
                    var26 = var24;
                    if (!(var12 === var24)) {
                        _fun18146_ip = 229;
                        continue _fun18146
                    }
                case 200:
                    var27 = _closure1_slot0;
                    var25 = _closure1_slot1;
                    var25 = var25[var13];
                    var25 = var27.bind(var17)(var25);
                    var25 = var25.UnknownFieldHandler;
                    var26 = var25.onRead;
                case 229:
                    var35 = var19.typeName;
                    var36 = undefined;
                    var34 = var0;
                    var33 = var30;
                    var32 = var29;
                    var31 = var1;
                    var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                    var23 = var24;
                    var22 = var1;
                    _fun18146_ip = 558;
                    continue _fun18146;
                case 264:
                    var1 = global;
                    var24 = var1.globalThis;
                    var25 = var24.Error;
                    var31 = var19.typeName;
                    var1 = var1.HermesInternal;
                    var27 = var1.concat;
                    var36 = 'Unknown field ';
                    var34 = ' (wire type ';
                    var32 = ') for ';
                    var35 = var30;
                    var33 = var29;
                    var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                    var24 = var25.prototype;
                    var24 = Object.create(var24, {
                        constructor: {
                            value: var25
                        }
                    });
                    var36 = var24;
                    var1 = new var36[var25](var35, var34);
                    var1 = var1 instanceof Object ? var1 : var24;
                    throw var1;
                case 344:
                    var1 = var21.string;
                    var1 = var1.bind(var21)();
                    var0.label = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18146_ip = 558;
                    continue _fun18146;
                case 370:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var14];
                    var1 = var24.bind(var17)(var1);
                    var26 = var1.Timestamp;
                    var25 = var26.internalBinaryRead;
                    var1 = var21.uint32;
                    var34 = var1.bind(var21)();
                    var32 = var0.expiresAt;
                    var36 = var26;
                    var35 = var21;
                    var33 = var20;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.expiresAt = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18146_ip = 558;
                    continue _fun18146;
                case 442:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var24.bind(var17)(var1);
                    var26 = var1.UInt64Value;
                    var25 = var26.internalBinaryRead;
                    var1 = var21.uint32;
                    var34 = var1.bind(var21)();
                    var32 = var0.skuId;
                    var36 = var26;
                    var35 = var21;
                    var33 = var20;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.skuId = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18146_ip = 558;
                    continue _fun18146;
                case 514:
                    var1 = var21.string;
                    var1 = var1.bind(var21)();
                    var0.palette = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun18146_ip = 558;
                    continue _fun18146;
                case 537:
                    var1 = var21.string;
                    var1 = var1.bind(var21)();
                    var0.asset = var1;
                    var23 = var3;
                    var22 = var2;
                case 558:
                    var1 = var21.pos;
                    var3 = var23;
                    var2 = var22;
                    if (var1 < var18) {
                        _fun18146_ip = 97;
                        continue _fun18146
                    }
                case 576:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18147: for (var _fun18147_ip = 0;;) switch (_fun18147_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.asset;
                    var3 = '';
                    if (!(var3 !== var2)) {
                        _fun18147_ip = 89;
                        continue _fun18147
                    }
                case 23:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 1;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.asset;
                    var2 = var5.bind(var6)(var2);
                case 89:
                    var2 = var4.palette;
                    if (!(var3 !== var2)) {
                        _fun18147_ip = 165;
                        continue _fun18147
                    }
                case 99:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 2;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.palette;
                    var2 = var5.bind(var6)(var2);
                case 165:
                    var2 = var4.skuId;
                    if (!var2) {
                        _fun18147_ip = 280;
                        continue _fun18147
                    }
                case 174:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 7;
                    var2 = var11[var2];
                    var8 = undefined;
                    var2 = var10.bind(var8)(var2);
                    var7 = var2.UInt64Value;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.skuId;
                    var9 = var0.tag;
                    var2 = 6;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.WireType;
                    var8 = var2.LengthDelimited;
                    var2 = 3;
                    var8 = var9.bind(var0)(var2, var8);
                    var2 = var8.fork;
                    var2 = var2.bind(var8)();
                    var5 = var6.bind(var7)(var5, var2, var1);
                    var2 = var5.join;
                    var2 = var2.bind(var5)();
                case 280:
                    var2 = var4.expiresAt;
                    if (!var2) {
                        _fun18147_ip = 395;
                        continue _fun18147
                    }
                case 289:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 8;
                    var2 = var11[var2];
                    var8 = undefined;
                    var2 = var10.bind(var8)(var2);
                    var7 = var2.Timestamp;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.expiresAt;
                    var9 = var0.tag;
                    var2 = 6;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.WireType;
                    var8 = var2.LengthDelimited;
                    var2 = 4;
                    var8 = var9.bind(var0)(var2, var8);
                    var2 = var8.fork;
                    var2 = var2.bind(var8)();
                    var5 = var6.bind(var7)(var5, var2, var1);
                    var2 = var5.join;
                    var2 = var2.bind(var5)();
                case 395:
                    var2 = var4.label;
                    if (!(var3 !== var2)) {
                        _fun18147_ip = 469;
                        continue _fun18147
                    }
                case 404:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 5;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.label;
                    var2 = var3.bind(var5)(var2);
                case 469:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18147_ip = 543;
                        continue _fun18147
                    }
                case 481:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18147_ip = 525;
                        continue _fun18147
                    }
                case 488:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 525:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 543:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var23 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot20 = var23;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: DisplayNameStyles$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'font_id',
                'kind': 'enum'
            };
            var5 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot9;
                var0 = ['discord_protos.users.v1.DisplayNameFont'];
                var0[1] = var1;
                var1 = 'DISPLAY_NAME_FONT_';
                var0[2] = var1;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(3);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'effect_id',
                'kind': 'enum'
            };
            var6 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot10;
                var0 = ['discord_protos.users.v1.DisplayNameEffect'];
                var0[1] = var1;
                var1 = 'DISPLAY_NAME_EFFECT_';
                var0[2] = var1;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'colors',
                'kind': 'scalar',
                'repeat': 1,
                'T': 13
            };
            var5[2] = var0;
            var0 = ['discord_protos.users.v1.DisplayNameStyles'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18152: for (var _fun18152_ip = 0;;) switch (_fun18152_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'fontId': 0,
                        'effectId': 0
                    };
                    var1 = new Array(0);
                    var0.colors = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18152_ip = 126;
                        continue _fun18152
                    }
                case 96:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 126:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18153: for (var _fun18153_ip = 0;;) switch (_fun18153_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var16 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18153_ip = 27;
                        continue _fun18153
                    }
                case 18:
                    var1 = var16.create;
                    var0 = var1.bind(var16)();
                case 27:
                    var2 = var18.pos;
                    var1 = arg1;
                    var15 = var2 + var1;
                    var1 = var18.pos;
                    var1 = var1 < var15;
                    var14 = undefined;
                    var12 = 6;
                    var11 = true;
                    var10 = false;
                    var9 = 'throw';
                    var8 = 3;
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18153_ip = 552;
                        continue _fun18153
                    }
                case 87:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var14)(var19, var7);
                    var28 = var1[var5];
                    var22 = var1[var6];
                    if (!(var6 !== var28)) {
                        _fun18153_ip = 506;
                        continue _fun18153
                    }
                case 121:
                    if (!(var7 !== var28)) {
                        _fun18153_ip = 479;
                        continue _fun18153
                    }
                case 128:
                    if (!(var8 !== var28)) {
                        _fun18153_ip = 326;
                        continue _fun18153
                    }
                case 135:
                    var23 = var17.readUnknownField;
                    if (!(var9 !== var23)) {
                        _fun18153_ip = 246;
                        continue _fun18153
                    }
                case 145:
                    var1 = var18.skip;
                    var1 = var1.bind(var18)(var22);
                    var21 = var4;
                    var20 = var23;
                    var19 = var1;
                    if (!(var10 !== var23)) {
                        _fun18153_ip = 531;
                        continue _fun18153
                    }
                case 172:
                    var25 = var23;
                    if (!(var11 === var23)) {
                        _fun18153_ip = 208;
                        continue _fun18153
                    }
                case 179:
                    var26 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var12];
                    var24 = var26.bind(var14)(var24);
                    var24 = var24.UnknownFieldHandler;
                    var25 = var24.onRead;
                case 208:
                    var33 = var16.typeName;
                    var34 = undefined;
                    var32 = var0;
                    var31 = var28;
                    var30 = var22;
                    var29 = var1;
                    var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                    var21 = var4;
                    var20 = var23;
                    var19 = var1;
                    _fun18153_ip = 531;
                    continue _fun18153;
                case 246:
                    var1 = global;
                    var23 = var1.globalThis;
                    var24 = var23.Error;
                    var29 = var16.typeName;
                    var1 = var1.HermesInternal;
                    var26 = var1.concat;
                    var34 = 'Unknown field ';
                    var32 = ' (wire type ';
                    var30 = ') for ';
                    var33 = var28;
                    var31 = var22;
                    var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                    var23 = var24.prototype;
                    var23 = Object.create(var23, {
                        constructor: {
                            value: var24
                        }
                    });
                    var34 = var23;
                    var1 = new var34[var24](var33, var32);
                    var1 = var1 instanceof Object ? var1 : var23;
                    throw var1;
                case 326:
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var12];
                    var1 = var23.bind(var14)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var22 !== var1)) {
                        _fun18153_ip = 397;
                        continue _fun18153
                    }
                case 358:
                    var23 = var0.colors;
                    var22 = var23.push;
                    var1 = var18.uint32;
                    var1 = var1.bind(var18)();
                    var1 = var22.bind(var23)(var1);
                    var21 = var4;
                    var20 = var3;
                    var19 = var2;
                    _fun18153_ip = 531;
                    continue _fun18153;
                case 397:
                    var1 = var18.int32;
                    var22 = var1.bind(var18)();
                    var1 = var18.pos;
                    var22 = var22 + var1;
                    var1 = var18.pos;
                    var20 = var3;
                    var19 = var2;
                    var21 = var22;
                    if (!(var1 < var21)) {
                        _fun18153_ip = 531;
                        continue _fun18153
                    }
                case 434:
                    var24 = var0.colors;
                    var23 = var24.push;
                    var1 = var18.uint32;
                    var1 = var1.bind(var18)();
                    var1 = var23.bind(var24)(var1);
                    var1 = var18.pos;
                    var21 = var22;
                    var20 = var3;
                    var19 = var2;
                    if (var1 < var22) {
                        _fun18153_ip = 434;
                        continue _fun18153
                    }
                case 477:
                    _fun18153_ip = 531;
                    continue _fun18153;
                case 479:
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var0.effectId = var1;
                    var21 = var4;
                    var20 = var3;
                    var19 = var2;
                    _fun18153_ip = 531;
                    continue _fun18153;
                case 506:
                    var1 = var18.int32;
                    var1 = var1.bind(var18)();
                    var0.fontId = var1;
                    var21 = var4;
                    var20 = var3;
                    var19 = var2;
                case 531:
                    var1 = var18.pos;
                    var4 = var21;
                    var3 = var20;
                    var2 = var19;
                    if (var1 < var15) {
                        _fun18153_ip = 87;
                        continue _fun18153
                    }
                case 552:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18154: for (var _fun18154_ip = 0;;) switch (_fun18154_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.fontId;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun18154_ip = 85;
                        continue _fun18154
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.fontId;
                    var1 = var3.bind(var5)(var1);
                case 85:
                    var1 = var4.effectId;
                    if (!(var2 !== var1)) {
                        _fun18154_ip = 162;
                        continue _fun18154
                    }
                case 95:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.effectId;
                    var1 = var3.bind(var5)(var1);
                case 162:
                    var1 = var4.colors;
                    var1 = var1.length;
                    if (!var1) {
                        _fun18154_ip = 303;
                        continue _fun18154
                    }
                case 178:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 3;
                    var3 = var5.bind(var0)(var1, var3);
                    var1 = var3.fork;
                    var1 = var1.bind(var3)();
                    var1 = var4.colors;
                    var1 = var1.length;
                    var1 = var2 < var1;
                    var2 = 0;
                    if (!var1) {
                        _fun18154_ip = 294;
                        continue _fun18154
                    }
                case 257:
                    var3 = var0.uint32;
                    var1 = var4.colors;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.colors;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun18154_ip = 257;
                        continue _fun18154
                    }
                case 294:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 303:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18154_ip = 380;
                        continue _fun18154
                    }
                case 318:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18154_ip = 362;
                        continue _fun18154
                    }
                case 325:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 362:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 380:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var22 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot21 = var22;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: UserCollectibles$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'nameplate',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var0 = _closure1_slot20;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.UserCollectibles'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18158: for (var _fun18158_ip = 0;;) switch (_fun18158_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18158_ip = 110;
                        continue _fun18158
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18159: for (var _fun18159_ip = 0;;) switch (_fun18159_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18159_ip = 27;
                        continue _fun18159
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18159_ip = 370;
                        continue _fun18159
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun18159_ip = 301;
                        continue _fun18159
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun18159_ip = 221;
                        continue _fun18159
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun18159_ip = 352;
                        continue _fun18159
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun18159_ip = 186;
                        continue _fun18159
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun18159_ip = 352;
                    continue _fun18159;
                case 221:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 301:
                    var21 = _closure1_slot20;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.nameplate;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.nameplate = var1;
                    var18 = var3;
                    var17 = var2;
                case 352:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun18159_ip = 82;
                        continue _fun18159
                    }
                case 370:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18160: for (var _fun18160_ip = 0;;) switch (_fun18160_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.nameplate;
                    if (!var2) {
                        _fun18160_ip = 110;
                        continue _fun18160
                    }
                case 18:
                    var6 = _closure1_slot20;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.nameplate;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 110:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18160_ip = 184;
                        continue _fun18160
                    }
                case 122:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18160_ip = 166;
                        continue _fun18160
                    }
                case 129:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 166:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 184:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var21 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot22 = var21;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: UserPrimaryGuild$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'identity_guild_id',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt64Value;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(4);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'identity_enabled',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.BoolValue;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'tag',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'badge',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var6;
            var5[3] = var0;
            var0 = ['discord_protos.users.v1.UserPrimaryGuild'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18167: for (var _fun18167_ip = 0;;) switch (_fun18167_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18167_ip = 110;
                        continue _fun18167
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18168: for (var _fun18168_ip = 0;;) switch (_fun18168_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var17 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18168_ip = 27;
                        continue _fun18168
                    }
                case 18:
                    var1 = var17.create;
                    var0 = var1.bind(var17)();
                case 27:
                    var2 = var19.pos;
                    var1 = arg1;
                    var16 = var2 + var1;
                    var1 = var19.pos;
                    var1 = var1 < var16;
                    var15 = undefined;
                    var13 = 7;
                    var12 = 6;
                    var11 = true;
                    var10 = false;
                    var9 = 'throw';
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18168_ip = 640;
                        continue _fun18168
                    }
                case 91:
                    var1 = var19.tag;
                    var20 = var1.bind(var19)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var15)(var20, var6);
                    var28 = var1[var4];
                    var27 = var1[var5];
                    if (!(var5 !== var28)) {
                        _fun18168_ip = 552;
                        continue _fun18168
                    }
                case 125:
                    if (!(var6 !== var28)) {
                        _fun18168_ip = 480;
                        continue _fun18168
                    }
                case 132:
                    if (!(var7 !== var28)) {
                        _fun18168_ip = 406;
                        continue _fun18168
                    }
                case 139:
                    if (!(var8 !== var28)) {
                        _fun18168_ip = 331;
                        continue _fun18168
                    }
                case 146:
                    var22 = var18.readUnknownField;
                    if (!(var9 !== var22)) {
                        _fun18168_ip = 251;
                        continue _fun18168
                    }
                case 156:
                    var1 = var19.skip;
                    var1 = var1.bind(var19)(var27);
                    var21 = var22;
                    var20 = var1;
                    if (!(var10 !== var22)) {
                        _fun18168_ip = 622;
                        continue _fun18168
                    }
                case 180:
                    var24 = var22;
                    if (!(var11 === var22)) {
                        _fun18168_ip = 216;
                        continue _fun18168
                    }
                case 187:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var12];
                    var23 = var25.bind(var15)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 216:
                    var33 = var17.typeName;
                    var34 = undefined;
                    var32 = var0;
                    var31 = var28;
                    var30 = var27;
                    var29 = var1;
                    var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                    var21 = var22;
                    var20 = var1;
                    _fun18168_ip = 622;
                    continue _fun18168;
                case 251:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var29 = var17.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var34 = 'Unknown field ';
                    var32 = ' (wire type ';
                    var30 = ') for ';
                    var33 = var28;
                    var31 = var27;
                    var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var34 = var22;
                    var1 = new var34[var23](var33, var32);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 331:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var22.bind(var15)(var1);
                    var24 = var1.StringValue;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.badge;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.badge = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun18168_ip = 622;
                    continue _fun18168;
                case 406:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var22.bind(var15)(var1);
                    var24 = var1.StringValue;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.tag;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.tag = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun18168_ip = 622;
                    continue _fun18168;
                case 480:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var22.bind(var15)(var1);
                    var24 = var1.BoolValue;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.identityEnabled;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.identityEnabled = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun18168_ip = 622;
                    continue _fun18168;
                case 552:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var22.bind(var15)(var1);
                    var24 = var1.UInt64Value;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.identityGuildId;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.identityGuildId = var1;
                    var21 = var3;
                    var20 = var2;
                case 622:
                    var1 = var19.pos;
                    var3 = var21;
                    var2 = var20;
                    if (var1 < var16) {
                        _fun18168_ip = 91;
                        continue _fun18168
                    }
                case 640:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18169: for (var _fun18169_ip = 0;;) switch (_fun18169_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.identityGuildId;
                    if (!var2) {
                        _fun18169_ip = 124;
                        continue _fun18169
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt64Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.identityGuildId;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var2 = var4.identityEnabled;
                    if (!var2) {
                        _fun18169_ip = 239;
                        continue _fun18169
                    }
                case 133:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.BoolValue;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.identityEnabled;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 239:
                    var2 = var4.tag;
                    if (!var2) {
                        _fun18169_ip = 352;
                        continue _fun18169
                    }
                case 247:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.StringValue;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.tag;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 352:
                    var2 = var4.badge;
                    if (!var2) {
                        _fun18169_ip = 467;
                        continue _fun18169
                    }
                case 361:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.StringValue;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.badge;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 4;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 467:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18169_ip = 541;
                        continue _fun18169
                    }
                case 479:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18169_ip = 523;
                        continue _fun18169
                    }
                case 486:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 523:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 541:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var20 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot23 = var20;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: ScheduleRule$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(5);
            var0 = {
                'no': 1,
                'name': 'rule_id',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'label',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'start_time',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot18;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'end_time',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot18;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'days',
                'kind': 'enum',
                'repeat': 1
            };
            var6 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot8;
                var0 = ['discord_protos.users.v1.DayOfWeek'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var6;
            var5[4] = var0;
            var0 = ['discord_protos.users.v1.ScheduleRule'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18175: for (var _fun18175_ip = 0;;) switch (_fun18175_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'ruleId': '',
                        'label': ''
                    };
                    var1 = new Array(0);
                    var0.days = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18175_ip = 127;
                        continue _fun18175
                    }
                case 97:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 127:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18176: for (var _fun18176_ip = 0;;) switch (_fun18176_ip) {
                case 0:
                    var20 = arg0;
                    var19 = arg2;
                    var0 = arg3;
                    var18 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18176_ip = 27;
                        continue _fun18176
                    }
                case 18:
                    var1 = var18.create;
                    var0 = var1.bind(var18)();
                case 27:
                    var2 = var20.pos;
                    var1 = arg1;
                    var17 = var2 + var1;
                    var1 = var20.pos;
                    var1 = var1 < var17;
                    var16 = undefined;
                    var14 = 6;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 5;
                    var9 = 4;
                    var8 = 3;
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18176_ip = 690;
                        continue _fun18176
                    }
                case 93:
                    var1 = var20.tag;
                    var21 = var1.bind(var20)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var16)(var21, var7);
                    var30 = var1[var5];
                    var24 = var1[var6];
                    if (!(var6 !== var30)) {
                        _fun18176_ip = 645;
                        continue _fun18176
                    }
                case 127:
                    if (!(var7 !== var30)) {
                        _fun18176_ip = 619;
                        continue _fun18176
                    }
                case 134:
                    if (!(var8 !== var30)) {
                        _fun18176_ip = 563;
                        continue _fun18176
                    }
                case 141:
                    if (!(var9 !== var30)) {
                        _fun18176_ip = 507;
                        continue _fun18176
                    }
                case 148:
                    if (!(var10 !== var30)) {
                        _fun18176_ip = 346;
                        continue _fun18176
                    }
                case 155:
                    var25 = var19.readUnknownField;
                    if (!(var11 !== var25)) {
                        _fun18176_ip = 266;
                        continue _fun18176
                    }
                case 165:
                    var1 = var20.skip;
                    var1 = var1.bind(var20)(var24);
                    var23 = var4;
                    var22 = var25;
                    var21 = var1;
                    if (!(var12 !== var25)) {
                        _fun18176_ip = 669;
                        continue _fun18176
                    }
                case 192:
                    var27 = var25;
                    if (!(var13 === var25)) {
                        _fun18176_ip = 228;
                        continue _fun18176
                    }
                case 199:
                    var28 = _closure1_slot0;
                    var26 = _closure1_slot1;
                    var26 = var26[var14];
                    var26 = var28.bind(var16)(var26);
                    var26 = var26.UnknownFieldHandler;
                    var27 = var26.onRead;
                case 228:
                    var35 = var18.typeName;
                    var36 = undefined;
                    var34 = var0;
                    var33 = var30;
                    var32 = var24;
                    var31 = var1;
                    var26 = var36[var27](var35, var34, var33, var32, var31, var30);
                    var23 = var4;
                    var22 = var25;
                    var21 = var1;
                    _fun18176_ip = 669;
                    continue _fun18176;
                case 266:
                    var1 = global;
                    var25 = var1.globalThis;
                    var26 = var25.Error;
                    var31 = var18.typeName;
                    var1 = var1.HermesInternal;
                    var28 = var1.concat;
                    var36 = 'Unknown field ';
                    var34 = ' (wire type ';
                    var32 = ') for ';
                    var35 = var30;
                    var33 = var24;
                    var35 = var36[var28](var35, var34, var33, var32, var31, var30);
                    var25 = var26.prototype;
                    var25 = Object.create(var25, {
                        constructor: {
                            value: var26
                        }
                    });
                    var36 = var25;
                    var1 = new var36[var26](var35, var34);
                    var1 = var1 instanceof Object ? var1 : var25;
                    throw var1;
                case 346:
                    var25 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var14];
                    var1 = var25.bind(var16)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var24 !== var1)) {
                        _fun18176_ip = 418;
                        continue _fun18176
                    }
                case 378:
                    var25 = var0.days;
                    var24 = var25.push;
                    var1 = var20.int32;
                    var1 = var1.bind(var20)();
                    var1 = var24.bind(var25)(var1);
                    var23 = var4;
                    var22 = var3;
                    var21 = var2;
                    _fun18176_ip = 669;
                    continue _fun18176;
                case 418:
                    var1 = var20.int32;
                    var24 = var1.bind(var20)();
                    var1 = var20.pos;
                    var24 = var24 + var1;
                    var1 = var20.pos;
                    var22 = var3;
                    var21 = var2;
                    var23 = var24;
                    if (!(var1 < var23)) {
                        _fun18176_ip = 669;
                        continue _fun18176
                    }
                case 458:
                    var26 = var0.days;
                    var25 = var26.push;
                    var1 = var20.int32;
                    var1 = var1.bind(var20)();
                    var1 = var25.bind(var26)(var1);
                    var1 = var20.pos;
                    var23 = var24;
                    var22 = var3;
                    var21 = var2;
                    if (var1 < var24) {
                        _fun18176_ip = 458;
                        continue _fun18176
                    }
                case 502:
                    _fun18176_ip = 669;
                    continue _fun18176;
                case 507:
                    var26 = _closure1_slot18;
                    var25 = var26.internalBinaryRead;
                    var1 = var20.uint32;
                    var34 = var1.bind(var20)();
                    var32 = var0.endTime;
                    var36 = var26;
                    var35 = var20;
                    var33 = var19;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.endTime = var1;
                    var23 = var4;
                    var22 = var3;
                    var21 = var2;
                    _fun18176_ip = 669;
                    continue _fun18176;
                case 563:
                    var26 = _closure1_slot18;
                    var25 = var26.internalBinaryRead;
                    var1 = var20.uint32;
                    var34 = var1.bind(var20)();
                    var32 = var0.startTime;
                    var36 = var26;
                    var35 = var20;
                    var33 = var19;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.startTime = var1;
                    var23 = var4;
                    var22 = var3;
                    var21 = var2;
                    _fun18176_ip = 669;
                    continue _fun18176;
                case 619:
                    var1 = var20.string;
                    var1 = var1.bind(var20)();
                    var0.label = var1;
                    var23 = var4;
                    var22 = var3;
                    var21 = var2;
                    _fun18176_ip = 669;
                    continue _fun18176;
                case 645:
                    var1 = var20.string;
                    var1 = var1.bind(var20)();
                    var0.ruleId = var1;
                    var23 = var4;
                    var22 = var3;
                    var21 = var2;
                case 669:
                    var1 = var20.pos;
                    var4 = var23;
                    var3 = var22;
                    var2 = var21;
                    if (var1 < var17) {
                        _fun18176_ip = 93;
                        continue _fun18176
                    }
                case 690:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18177: for (var _fun18177_ip = 0;;) switch (_fun18177_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.ruleId;
                    var3 = '';
                    if (!(var3 !== var2)) {
                        _fun18177_ip = 89;
                        continue _fun18177
                    }
                case 23:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 1;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.ruleId;
                    var2 = var5.bind(var6)(var2);
                case 89:
                    var2 = var4.label;
                    if (!(var3 !== var2)) {
                        _fun18177_ip = 163;
                        continue _fun18177
                    }
                case 98:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 2;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.label;
                    var2 = var3.bind(var5)(var2);
                case 163:
                    var2 = var4.startTime;
                    if (!var2) {
                        _fun18177_ip = 264;
                        continue _fun18177
                    }
                case 172:
                    var6 = _closure1_slot18;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.startTime;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 264:
                    var2 = var4.endTime;
                    if (!var2) {
                        _fun18177_ip = 365;
                        continue _fun18177
                    }
                case 273:
                    var6 = _closure1_slot18;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.endTime;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 4;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 365:
                    var2 = var4.days;
                    var2 = var2.length;
                    if (!var2) {
                        _fun18177_ip = 510;
                        continue _fun18177
                    }
                case 382:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 5;
                    var3 = var5.bind(var0)(var2, var3);
                    var2 = var3.fork;
                    var2 = var2.bind(var3)();
                    var2 = var4.days;
                    var2 = var2.length;
                    var3 = 0;
                    var2 = var3 < var2;
                    if (!var2) {
                        _fun18177_ip = 501;
                        continue _fun18177
                    }
                case 462:
                    var5 = var0.int32;
                    var2 = var4.days;
                    var2 = var2[var3];
                    var2 = var5.bind(var0)(var2);
                    var3 = var3 + 1;
                    var2 = var4.days;
                    var2 = var2.length;
                    if (var3 < var2) {
                        _fun18177_ip = 462;
                        continue _fun18177
                    }
                case 501:
                    var2 = var0.join;
                    var2 = var2.bind(var0)();
                case 510:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18177_ip = 584;
                        continue _fun18177
                    }
                case 522:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18177_ip = 566;
                        continue _fun18177
                    }
                case 529:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 566:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 584:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var19 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot24 = var19;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: RestrictedSchedule$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'rules',
                'kind': 'message',
                'repeat': 1
            };
            var5 = function() { // Original name: T, environment: var5
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.RestrictedSchedule'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18181: for (var _fun18181_ip = 0;;) switch (_fun18181_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.rules = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18181_ip = 119;
                        continue _fun18181
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18182: for (var _fun18182_ip = 0;;) switch (_fun18182_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18182_ip = 27;
                        continue _fun18182
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18182_ip = 368;
                        continue _fun18182
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun18182_ip = 301;
                        continue _fun18182
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun18182_ip = 221;
                        continue _fun18182
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun18182_ip = 350;
                        continue _fun18182
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun18182_ip = 186;
                        continue _fun18182
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun18182_ip = 350;
                    continue _fun18182;
                case 221:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 301:
                    var20 = var0.rules;
                    var19 = var20.push;
                    var22 = _closure1_slot24;
                    var21 = var22.internalBinaryRead;
                    var1 = var16.uint32;
                    var1 = var1.bind(var16)();
                    var1 = var21.bind(var22)(var16, var1, var15);
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 350:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun18182_ip = 82;
                        continue _fun18182
                    }
                case 368:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18183: for (var _fun18183_ip = 0;;) switch (_fun18183_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.rules;
                    var1 = var1.length;
                    var8 = 0;
                    var7 = var8 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var7) {
                        _fun18183_ip = 143;
                        continue _fun18183
                    }
                case 40:
                    var11 = _closure1_slot24;
                    var10 = var11.internalBinaryWrite;
                    var7 = var4.rules;
                    var9 = var7[var8];
                    var12 = var0.tag;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var13.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var12 = var12.bind(var0)(var5, var7);
                    var7 = var12.fork;
                    var7 = var7.bind(var12)();
                    var9 = var10.bind(var11)(var9, var7, var2);
                    var7 = var9.join;
                    var7 = var7.bind(var9)();
                    var8 = var8 + 1;
                    var7 = var4.rules;
                    var7 = var7.length;
                    if (var8 < var7) {
                        _fun18183_ip = 40;
                        continue _fun18183
                    }
                case 143:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun18183_ip = 204;
                        continue _fun18183
                    }
                case 155:
                    if (!(var5 == var2)) {
                        _fun18183_ip = 188;
                        continue _fun18183
                    }
                case 159:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 188:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 204:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var18 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot25 = var18;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: CrossPlatformRestriction$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'restriction_expiry',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'application_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[1] = var0;
            var0 = ['discord_protos.users.v1.CrossPlatformRestriction'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18187: for (var _fun18187_ip = 0;;) switch (_fun18187_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '0';
                    var0.applicationId = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18187_ip = 120;
                        continue _fun18187
                    }
                case 90:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 120:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18188: for (var _fun18188_ip = 0;;) switch (_fun18188_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18188_ip = 27;
                        continue _fun18188
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18188_ip = 432;
                        continue _fun18188
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun18188_ip = 344;
                        continue _fun18188
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun18188_ip = 311;
                        continue _fun18188
                    }
                case 126:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18188_ip = 231;
                        continue _fun18188
                    }
                case 136:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18188_ip = 414;
                        continue _fun18188
                    }
                case 160:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18188_ip = 196;
                        continue _fun18188
                    }
                case 167:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 196:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18188_ip = 414;
                    continue _fun18188;
                case 231:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 311:
                    var1 = var17.fixed64;
                    var20 = var1.bind(var17)();
                    var1 = var20.toString;
                    var1 = var1.bind(var20)();
                    var0.applicationId = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun18188_ip = 414;
                    continue _fun18188;
                case 344:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.restrictionExpiry;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.restrictionExpiry = var1;
                    var19 = var3;
                    var18 = var2;
                case 414:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18188_ip = 85;
                        continue _fun18188
                    }
                case 432:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18189: for (var _fun18189_ip = 0;;) switch (_fun18189_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.restrictionExpiry;
                    if (!var2) {
                        _fun18189_ip = 124;
                        continue _fun18189
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.restrictionExpiry;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var4.applicationId;
                    var2 = '0';
                    if (!(var2 !== var3)) {
                        _fun18189_ip = 205;
                        continue _fun18189
                    }
                case 139:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Bit64;
                    var2 = 2;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.fixed64;
                    var2 = var4.applicationId;
                    var2 = var3.bind(var5)(var2);
                case 205:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18189_ip = 279;
                        continue _fun18189
                    }
                case 217:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18189_ip = 261;
                        continue _fun18189
                    }
                case 224:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 261:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 279:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var17 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot26 = var17;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: UserData$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'linked_users',
                'kind': 'map',
                'K': 6
            };
            var5 = {};
            var8 = 'message';
            var5.kind = var8;
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot27;
                return var0;
            };
            var5.T = var7;
            var0.V = var5;
            var5 = new Array(12);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'safety_feature_limits',
                'kind': 'map',
                'K': 13
            };
            var7 = {};
            var7.kind = var8;
            var9 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot29;
                return var0;
            };
            var7.T = var9;
            var0.V = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'safety_flags',
                'kind': 'map',
                'K': 13
            };
            var7 = {};
            var7.kind = var8;
            var8 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot30;
                return var0;
            };
            var7.T = var8;
            var0.V = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'quest',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot31;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'primary_guild',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot23;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'cross_platform_restriction',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot26;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 7,
                'name': 'collectibles',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot22;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 8,
                'name': 'safety_state',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot37;
                return var0;
            };
            var0.T = var7;
            var5[7] = var0;
            var0 = {
                'no': 9,
                'name': 'premium_state',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot38;
                return var0;
            };
            var0.T = var7;
            var5[8] = var0;
            var0 = {
                'no': 10,
                'name': 'display_name_styles',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot21;
                return var0;
            };
            var0.T = var7;
            var5[9] = var0;
            var0 = {
                'no': 11,
                'name': 'store_country',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot39;
                return var0;
            };
            var0.T = var7;
            var5[10] = var0;
            var0 = {
                'no': 12,
                'name': 'restricted_schedule',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot25;
                return var0;
            };
            var0.T = var6;
            var5[11] = var0;
            var0 = ['discord_protos.users.v1.UserData'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18204: for (var _fun18204_ip = 0;;) switch (_fun18204_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.linkedUsers = var1;
                    var1 = {};
                    var0.safetyFeatureLimits = var1;
                    var1 = {};
                    var0.safetyFlags = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18204_ip = 131;
                        continue _fun18204
                    }
                case 101:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 131:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18205: for (var _fun18205_ip = 0;;) switch (_fun18205_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun18205_ip = 27;
                        continue _fun18205
                    }
                case 18:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 27:
                    var3 = var18.pos;
                    var2 = arg1;
                    var16 = var3 + var2;
                    var2 = var18.pos;
                    var2 = var2 < var16;
                    var15 = undefined;
                    var13 = 6;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 2;
                    var8 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun18205_ip = 833;
                        continue _fun18205
                    }
                case 82:
                    var2 = var18.tag;
                    var6 = var2.bind(var18)();
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var15)(var6, var9);
                    var7 = var2[var8];
                    var6 = var2[var5];
                    SwitchImm(value_reg = 7, jump_table_address = 915, default_jump_address = 718, unsigned_min_value = 1, unsigned_max_value = 12) // Switch table: [691, 661, 631, 575, 519, 463, 407, 351, 295, 239, 183, 127];
                case 127:
                    var21 = _closure1_slot25;
                    var20 = var21.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.restrictedSchedule;
                    var30 = var21;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var20](var29, var28, var27, var26, var25);
                    var0.restrictedSchedule = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 183:
                    var23 = _closure1_slot39;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.storeCountry;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.storeCountry = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 239:
                    var23 = _closure1_slot21;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.displayNameStyles;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.displayNameStyles = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 295:
                    var23 = _closure1_slot38;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.premiumState;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.premiumState = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 351:
                    var23 = _closure1_slot37;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.safetyState;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.safetyState = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 407:
                    var23 = _closure1_slot22;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.collectibles;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.collectibles = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 463:
                    var23 = _closure1_slot26;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.crossPlatformRestriction;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.crossPlatformRestriction = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 519:
                    var23 = _closure1_slot23;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.primaryGuild;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.primaryGuild = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 575:
                    var23 = _closure1_slot31;
                    var22 = var23.internalBinaryRead;
                    var2 = var18.uint32;
                    var28 = var2.bind(var18)();
                    var26 = var0.quest;
                    var30 = var23;
                    var29 = var18;
                    var27 = var17;
                    var2 = var30[var22](var29, var28, var27, var26, var25);
                    var0.quest = var2;
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 631:
                    var21 = var1.binaryReadMap3;
                    var2 = var0.safetyFlags;
                    var2 = var21.bind(var1)(var2, var18, var17);
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 661:
                    var21 = var1.binaryReadMap2;
                    var2 = var0.safetyFeatureLimits;
                    var2 = var21.bind(var1)(var2, var18, var17);
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 691:
                    var21 = var1.binaryReadMap1;
                    var2 = var0.linkedUsers;
                    var2 = var21.bind(var1)(var2, var18, var17);
                    var20 = var4;
                    var19 = var3;
                    _fun18205_ip = 815;
                    continue _fun18205;
                case 718:
                    var21 = var17.readUnknownField;
                    if (!(var10 !== var21)) {
                        _fun18205_ip = 835;
                        continue _fun18205
                    }
                case 728:
                    var2 = var18.skip;
                    var2 = var2.bind(var18)(var6);
                    var20 = var21;
                    var19 = var2;
                    if (!(var11 !== var21)) {
                        _fun18205_ip = 815;
                        continue _fun18205
                    }
                case 749:
                    var23 = var21;
                    if (!(var12 === var21)) {
                        _fun18205_ip = 785;
                        continue _fun18205
                    }
                case 756:
                    var24 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var22 = var22[var13];
                    var22 = var24.bind(var15)(var22);
                    var22 = var22.UnknownFieldHandler;
                    var23 = var22.onRead;
                case 785:
                    var29 = var1.typeName;
                    var30 = undefined;
                    var28 = var0;
                    var27 = var7;
                    var26 = var6;
                    var25 = var2;
                    var22 = var30[var23](var29, var28, var27, var26, var25, var24);
                    var20 = var21;
                    var19 = var2;
                case 815:
                    var2 = var18.pos;
                    var4 = var20;
                    var3 = var19;
                    if (var2 < var16) {
                        _fun18205_ip = 82;
                        continue _fun18205
                    }
                case 833:
                    return var0;
                case 835:
                    var0 = global;
                    var2 = var0.globalThis;
                    var2 = var2.Error;
                    var25 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var30 = 'Unknown field ';
                    var28 = ' (wire type ';
                    var26 = ') for ';
                    var29 = var7;
                    var27 = var6;
                    var29 = var30[var4](var29, var28, var27, var26, var25, var24);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var30 = var1;
                    var0 = new var30[var2](var29, var28);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18206: for (var _fun18206_ip = 0;;) switch (_fun18206_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun18206_ip = 209;
                        continue _fun18206
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun18206_ip = 166;
                        continue _fun18206
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun18206_ip = 137;
                        continue _fun18206
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.users.v1.UserData.linked_users';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot27;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun18206_ip = 188;
                    continue _fun18206;
                case 166:
                    var2 = var12.fixed64;
                    var14 = var2.bind(var12)();
                    var2 = var14.toString;
                    var6 = var2.bind(var14)();
                    var13 = var4;
                case 188:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun18206_ip = 61;
                        continue _fun18206
                    }
                case 209:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '0';
                    if (!var6) {
                        _fun18206_ip = 227;
                        continue _fun18206
                    }
                case 224:
                    var2 = var5;
                case 227:
                    if (!(var4 == var3)) {
                        _fun18206_ip = 244;
                        continue _fun18206
                    }
                case 231:
                    var4 = _closure1_slot27;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 244:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'binaryReadMap2';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18207: for (var _fun18207_ip = 0;;) switch (_fun18207_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var4 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var3 = 0;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var2 = undefined;
                    if (!var4) {
                        _fun18207_ip = 200;
                        continue _fun18207
                    }
                case 61:
                    var4 = var12.tag;
                    var13 = var4.bind(var12)();
                    var4 = _closure1_slot2;
                    var13 = var4.bind(var0)(var13, var9);
                    var4 = var13[var3];
                    var13 = var13[var8];
                    if (!(var8 !== var4)) {
                        _fun18207_ip = 166;
                        continue _fun18207
                    }
                case 92:
                    if (!(var9 !== var4)) {
                        _fun18207_ip = 137;
                        continue _fun18207
                    }
                case 96:
                    var4 = global;
                    var4 = var4.globalThis;
                    var14 = var4.Error;
                    var4 = var14.prototype;
                    var13 = Object.create(var4, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits';
                    var18 = var13;
                    var4 = new var18[var14](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var13;
                    throw var4;
                case 137:
                    var14 = _closure1_slot29;
                    var13 = var14.internalBinaryRead;
                    var4 = var12.uint32;
                    var4 = var4.bind(var12)();
                    var13 = var13.bind(var14)(var12, var4, var11);
                    _fun18207_ip = 179;
                    continue _fun18207;
                case 166:
                    var4 = var12.uint32;
                    var7 = var4.bind(var12)();
                    var13 = var6;
                case 179:
                    var4 = var12.pos;
                    var6 = var13;
                    var5 = var7;
                    var2 = var6;
                    if (var4 < var10) {
                        _fun18207_ip = 61;
                        continue _fun18207
                    }
                case 200:
                    var4 = null;
                    var6 = var4 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun18207_ip = 214;
                        continue _fun18207
                    }
                case 211:
                    var3 = var5;
                case 214:
                    if (!(var4 == var2)) {
                        _fun18207_ip = 231;
                        continue _fun18207
                    }
                case 218:
                    var4 = _closure1_slot29;
                    var1 = var4.create;
                    var2 = var1.bind(var4)();
                case 231:
                    var1 = arg0;
                    var1[var3] = var2;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'binaryReadMap3';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18208: for (var _fun18208_ip = 0;;) switch (_fun18208_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var4 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var3 = 0;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var2 = undefined;
                    if (!var4) {
                        _fun18208_ip = 200;
                        continue _fun18208
                    }
                case 61:
                    var4 = var12.tag;
                    var13 = var4.bind(var12)();
                    var4 = _closure1_slot2;
                    var13 = var4.bind(var0)(var13, var9);
                    var4 = var13[var3];
                    var13 = var13[var8];
                    if (!(var8 !== var4)) {
                        _fun18208_ip = 166;
                        continue _fun18208
                    }
                case 92:
                    if (!(var9 !== var4)) {
                        _fun18208_ip = 137;
                        continue _fun18208
                    }
                case 96:
                    var4 = global;
                    var4 = var4.globalThis;
                    var14 = var4.Error;
                    var4 = var14.prototype;
                    var13 = Object.create(var4, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.users.v1.UserData.safety_flags';
                    var18 = var13;
                    var4 = new var18[var14](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var13;
                    throw var4;
                case 137:
                    var14 = _closure1_slot30;
                    var13 = var14.internalBinaryRead;
                    var4 = var12.uint32;
                    var4 = var4.bind(var12)();
                    var13 = var13.bind(var14)(var12, var4, var11);
                    _fun18208_ip = 179;
                    continue _fun18208;
                case 166:
                    var4 = var12.uint32;
                    var7 = var4.bind(var12)();
                    var13 = var6;
                case 179:
                    var4 = var12.pos;
                    var6 = var13;
                    var5 = var7;
                    var2 = var6;
                    if (var4 < var10) {
                        _fun18208_ip = 61;
                        continue _fun18208
                    }
                case 200:
                    var4 = null;
                    var6 = var4 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun18208_ip = 214;
                        continue _fun18208
                    }
                case 211:
                    var3 = var5;
                case 214:
                    if (!(var4 == var2)) {
                        _fun18208_ip = 231;
                        continue _fun18208
                    }
                case 218:
                    var4 = _closure1_slot30;
                    var1 = var4.create;
                    var2 = var1.bind(var4)();
                case 231:
                    var1 = arg0;
                    var1[var3] = var2;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18209: for (var _fun18209_ip = 0;;) switch (_fun18209_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var12 = global;
                    var5 = var12.Object;
                    var3 = var5.keys;
                    var1 = var4.linkedUsers;
                    var9 = var3.bind(var5)(var1);
                    var1 = var9.length;
                    var11 = 0;
                    var7 = var11 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    var10 = 2;
                    var8 = 0;
                    if (!var7) {
                        _fun18209_ip = 262;
                        continue _fun18209
                    }
                case 66:
                    var15 = var9[var8];
                    var16 = var0.tag;
                    var14 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var13 = var7[var6];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.WireType;
                    var13 = var13.LengthDelimited;
                    var16 = var16.bind(var0)(var5, var13);
                    var13 = var16.fork;
                    var17 = var13.bind(var16)();
                    var16 = var17.tag;
                    var13 = var7[var6];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.WireType;
                    var13 = var13.Bit64;
                    var16 = var16.bind(var17)(var5, var13);
                    var13 = var16.fixed64;
                    var13 = var13.bind(var16)(var15);
                    var13 = var0.tag;
                    var7 = var7[var6];
                    var7 = var14.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var13 = var13.bind(var0)(var10, var7);
                    var7 = var13.fork;
                    var7 = var7.bind(var13)();
                    var14 = _closure1_slot27;
                    var13 = var14.internalBinaryWrite;
                    var7 = var4.linkedUsers;
                    var7 = var7[var15];
                    var7 = var13.bind(var14)(var7, var0, var2);
                    var7 = var0.join;
                    var13 = var7.bind(var0)();
                    var7 = var13.join;
                    var7 = var7.bind(var13)();
                    var8 = var8 + 1;
                    var7 = var9.length;
                    if (var8 < var7) {
                        _fun18209_ip = 66;
                        continue _fun18209
                    }
                case 262:
                    var9 = var12.Object;
                    var8 = var9.keys;
                    var7 = var4.safetyFeatureLimits;
                    var9 = var8.bind(var9)(var7);
                    var7 = var9.length;
                    var7 = var11 < var7;
                    var8 = 0;
                    if (!var7) {
                        _fun18209_ip = 508;
                        continue _fun18209
                    }
                case 301:
                    var15 = var9[var8];
                    var16 = var0.tag;
                    var14 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var13 = var7[var6];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.WireType;
                    var13 = var13.LengthDelimited;
                    var16 = var16.bind(var0)(var10, var13);
                    var13 = var16.fork;
                    var17 = var13.bind(var16)();
                    var16 = var17.tag;
                    var13 = var7[var6];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.WireType;
                    var13 = var13.Varint;
                    var17 = var16.bind(var17)(var5, var13);
                    var16 = var17.uint32;
                    var13 = var12.parseInt;
                    var13 = var13.bind(var3)(var15);
                    var13 = var16.bind(var17)(var13);
                    var13 = var0.tag;
                    var7 = var7[var6];
                    var7 = var14.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var13 = var13.bind(var0)(var10, var7);
                    var7 = var13.fork;
                    var7 = var7.bind(var13)();
                    var14 = _closure1_slot29;
                    var13 = var14.internalBinaryWrite;
                    var7 = var4.safetyFeatureLimits;
                    var7 = var7[var15];
                    var7 = var13.bind(var14)(var7, var0, var2);
                    var7 = var0.join;
                    var13 = var7.bind(var0)();
                    var7 = var13.join;
                    var7 = var7.bind(var13)();
                    var8 = var8 + 1;
                    var7 = var9.length;
                    if (var8 < var7) {
                        _fun18209_ip = 301;
                        continue _fun18209
                    }
                case 508:
                    var9 = var12.Object;
                    var8 = var9.keys;
                    var7 = var4.safetyFlags;
                    var9 = var8.bind(var9)(var7);
                    var7 = var9.length;
                    var7 = var11 < var7;
                    var8 = 3;
                    var11 = 0;
                    if (!var7) {
                        _fun18209_ip = 757;
                        continue _fun18209
                    }
                case 550:
                    var15 = var9[var11];
                    var16 = var0.tag;
                    var14 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var13 = var7[var6];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.WireType;
                    var13 = var13.LengthDelimited;
                    var16 = var16.bind(var0)(var8, var13);
                    var13 = var16.fork;
                    var17 = var13.bind(var16)();
                    var16 = var17.tag;
                    var13 = var7[var6];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.WireType;
                    var13 = var13.Varint;
                    var17 = var16.bind(var17)(var5, var13);
                    var16 = var17.uint32;
                    var13 = var12.parseInt;
                    var13 = var13.bind(var3)(var15);
                    var13 = var16.bind(var17)(var13);
                    var13 = var0.tag;
                    var7 = var7[var6];
                    var7 = var14.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var13 = var13.bind(var0)(var10, var7);
                    var7 = var13.fork;
                    var7 = var7.bind(var13)();
                    var14 = _closure1_slot30;
                    var13 = var14.internalBinaryWrite;
                    var7 = var4.safetyFlags;
                    var7 = var7[var15];
                    var7 = var13.bind(var14)(var7, var0, var2);
                    var7 = var0.join;
                    var13 = var7.bind(var0)();
                    var7 = var13.join;
                    var7 = var7.bind(var13)();
                    var11 = var11 + 1;
                    var7 = var9.length;
                    if (var11 < var7) {
                        _fun18209_ip = 550;
                        continue _fun18209
                    }
                case 757:
                    var7 = var4.quest;
                    if (!var7) {
                        _fun18209_ip = 850;
                        continue _fun18209
                    }
                case 766:
                    var10 = _closure1_slot31;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.quest;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 4;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 850:
                    var7 = var4.primaryGuild;
                    if (!var7) {
                        _fun18209_ip = 943;
                        continue _fun18209
                    }
                case 859:
                    var10 = _closure1_slot23;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.primaryGuild;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 5;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 943:
                    var7 = var4.crossPlatformRestriction;
                    if (!var7) {
                        _fun18209_ip = 1033;
                        continue _fun18209
                    }
                case 952:
                    var10 = _closure1_slot26;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.crossPlatformRestriction;
                    var11 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var6, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1033:
                    var7 = var4.collectibles;
                    if (!var7) {
                        _fun18209_ip = 1126;
                        continue _fun18209
                    }
                case 1042:
                    var10 = _closure1_slot22;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.collectibles;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 7;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1126:
                    var7 = var4.safetyState;
                    if (!var7) {
                        _fun18209_ip = 1219;
                        continue _fun18209
                    }
                case 1135:
                    var10 = _closure1_slot37;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.safetyState;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 8;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1219:
                    var7 = var4.premiumState;
                    if (!var7) {
                        _fun18209_ip = 1312;
                        continue _fun18209
                    }
                case 1228:
                    var10 = _closure1_slot38;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.premiumState;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 9;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1312:
                    var7 = var4.displayNameStyles;
                    if (!var7) {
                        _fun18209_ip = 1405;
                        continue _fun18209
                    }
                case 1321:
                    var10 = _closure1_slot21;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.displayNameStyles;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 10;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1405:
                    var7 = var4.storeCountry;
                    if (!var7) {
                        _fun18209_ip = 1498;
                        continue _fun18209
                    }
                case 1414:
                    var10 = _closure1_slot39;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.storeCountry;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 11;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1498:
                    var7 = var4.restrictedSchedule;
                    if (!var7) {
                        _fun18209_ip = 1591;
                        continue _fun18209
                    }
                case 1507:
                    var10 = _closure1_slot25;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.restrictedSchedule;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 12;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 1591:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun18209_ip = 1652;
                        continue _fun18209
                    }
                case 1603:
                    if (!(var5 == var2)) {
                        _fun18209_ip = 1636;
                        continue _fun18209
                    }
                case 1607:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 1636:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 1652:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var16 = var3 instanceof Object ? var3 : var4;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: LinkedUser$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(6);
            var0 = {
                'no': 1,
                'name': 'user_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'link_type',
                'kind': 'enum'
            };
            var7 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot11;
                var0 = ['discord_protos.users.v1.UserLinkType'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'link_status',
                'kind': 'enum'
            };
            var7 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot12;
                var0 = ['discord_protos.users.v1.UserLinkStatus'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'requestor_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'created_at',
                'kind': 'message'
            };
            var7 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'updated_at',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var6;
            var5[5] = var0;
            var0 = ['discord_protos.users.v1.LinkedUser'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18216: for (var _fun18216_ip = 0;;) switch (_fun18216_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'userId': '0',
                        'linkType': 0,
                        'linkStatus': 0,
                        'requestorId': '0'
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18216_ip = 118;
                        continue _fun18216
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18217: for (var _fun18217_ip = 0;;) switch (_fun18217_ip) {
                case 0:
                    var20 = arg0;
                    var19 = arg2;
                    var0 = arg3;
                    var18 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18217_ip = 27;
                        continue _fun18217
                    }
                case 18:
                    var1 = var18.create;
                    var0 = var1.bind(var18)();
                case 27:
                    var2 = var20.pos;
                    var1 = arg1;
                    var17 = var2 + var1;
                    var1 = var20.pos;
                    var1 = var1 < var17;
                    var16 = undefined;
                    var14 = 8;
                    var13 = 6;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18217_ip = 625;
                        continue _fun18217
                    }
                case 94:
                    var1 = var20.tag;
                    var21 = var1.bind(var20)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var16)(var21, var6);
                    var29 = var1[var4];
                    var28 = var1[var5];
                    if (!(var5 !== var29)) {
                        _fun18217_ip = 576;
                        continue _fun18217
                    }
                case 128:
                    if (!(var6 !== var29)) {
                        _fun18217_ip = 552;
                        continue _fun18217
                    }
                case 135:
                    if (!(var7 !== var29)) {
                        _fun18217_ip = 528;
                        continue _fun18217
                    }
                case 142:
                    if (!(var8 !== var29)) {
                        _fun18217_ip = 495;
                        continue _fun18217
                    }
                case 149:
                    if (!(var9 !== var29)) {
                        _fun18217_ip = 423;
                        continue _fun18217
                    }
                case 156:
                    if (!(var13 !== var29)) {
                        _fun18217_ip = 348;
                        continue _fun18217
                    }
                case 163:
                    var23 = var19.readUnknownField;
                    if (!(var10 !== var23)) {
                        _fun18217_ip = 268;
                        continue _fun18217
                    }
                case 173:
                    var1 = var20.skip;
                    var1 = var1.bind(var20)(var28);
                    var22 = var23;
                    var21 = var1;
                    if (!(var11 !== var23)) {
                        _fun18217_ip = 607;
                        continue _fun18217
                    }
                case 197:
                    var25 = var23;
                    if (!(var12 === var23)) {
                        _fun18217_ip = 233;
                        continue _fun18217
                    }
                case 204:
                    var26 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var13];
                    var24 = var26.bind(var16)(var24);
                    var24 = var24.UnknownFieldHandler;
                    var25 = var24.onRead;
                case 233:
                    var34 = var18.typeName;
                    var35 = undefined;
                    var33 = var0;
                    var32 = var29;
                    var31 = var28;
                    var30 = var1;
                    var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                    var22 = var23;
                    var21 = var1;
                    _fun18217_ip = 607;
                    continue _fun18217;
                case 268:
                    var1 = global;
                    var23 = var1.globalThis;
                    var24 = var23.Error;
                    var30 = var18.typeName;
                    var1 = var1.HermesInternal;
                    var26 = var1.concat;
                    var35 = 'Unknown field ';
                    var33 = ' (wire type ';
                    var31 = ') for ';
                    var34 = var29;
                    var32 = var28;
                    var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                    var23 = var24.prototype;
                    var23 = Object.create(var23, {
                        constructor: {
                            value: var24
                        }
                    });
                    var35 = var23;
                    var1 = new var35[var24](var34, var33);
                    var1 = var1 instanceof Object ? var1 : var23;
                    throw var1;
                case 348:
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var14];
                    var1 = var23.bind(var16)(var1);
                    var25 = var1.Timestamp;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.updatedAt;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.updatedAt = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun18217_ip = 607;
                    continue _fun18217;
                case 423:
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var14];
                    var1 = var23.bind(var16)(var1);
                    var25 = var1.Timestamp;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.createdAt;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.createdAt = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun18217_ip = 607;
                    continue _fun18217;
                case 495:
                    var1 = var20.fixed64;
                    var23 = var1.bind(var20)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var0.requestorId = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun18217_ip = 607;
                    continue _fun18217;
                case 528:
                    var1 = var20.int32;
                    var1 = var1.bind(var20)();
                    var0.linkStatus = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun18217_ip = 607;
                    continue _fun18217;
                case 552:
                    var1 = var20.int32;
                    var1 = var1.bind(var20)();
                    var0.linkType = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun18217_ip = 607;
                    continue _fun18217;
                case 576:
                    var1 = var20.fixed64;
                    var23 = var1.bind(var20)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var0.userId = var1;
                    var22 = var3;
                    var21 = var2;
                case 607:
                    var1 = var20.pos;
                    var3 = var22;
                    var2 = var21;
                    if (var1 < var17) {
                        _fun18217_ip = 94;
                        continue _fun18217
                    }
                case 625:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18218: for (var _fun18218_ip = 0;;) switch (_fun18218_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.userId;
                    var3 = '0';
                    if (!(var3 !== var2)) {
                        _fun18218_ip = 90;
                        continue _fun18218
                    }
                case 24:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Bit64;
                    var2 = 1;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.fixed64;
                    var2 = var4.userId;
                    var2 = var5.bind(var6)(var2);
                case 90:
                    var2 = var4.linkType;
                    var5 = 0;
                    if (!(var5 !== var2)) {
                        _fun18218_ip = 169;
                        continue _fun18218
                    }
                case 102:
                    var7 = var0.tag;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var6 = var6[var2];
                    var2 = undefined;
                    var2 = var8.bind(var2)(var6);
                    var2 = var2.WireType;
                    var6 = var2.Varint;
                    var2 = 2;
                    var7 = var7.bind(var0)(var2, var6);
                    var6 = var7.int32;
                    var2 = var4.linkType;
                    var2 = var6.bind(var7)(var2);
                case 169:
                    var2 = var4.linkStatus;
                    if (!(var5 !== var2)) {
                        _fun18218_ip = 246;
                        continue _fun18218
                    }
                case 179:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Varint;
                    var2 = 3;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.int32;
                    var2 = var4.linkStatus;
                    var2 = var5.bind(var6)(var2);
                case 246:
                    var2 = var4.requestorId;
                    if (!(var3 !== var2)) {
                        _fun18218_ip = 323;
                        continue _fun18218
                    }
                case 256:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Bit64;
                    var2 = 4;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.fixed64;
                    var2 = var4.requestorId;
                    var2 = var3.bind(var5)(var2);
                case 323:
                    var2 = var4.createdAt;
                    if (!var2) {
                        _fun18218_ip = 438;
                        continue _fun18218
                    }
                case 332:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.createdAt;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 5;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 438:
                    var2 = var4.updatedAt;
                    if (!var2) {
                        _fun18218_ip = 550;
                        continue _fun18218
                    }
                case 447:
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = 8;
                    var3 = var2[var3];
                    var9 = undefined;
                    var3 = var10.bind(var9)(var3);
                    var6 = var3.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.updatedAt;
                    var8 = var0.tag;
                    var7 = 6;
                    var2 = var2[var7];
                    var2 = var10.bind(var9)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var7 = var8.bind(var0)(var7, var2);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 550:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18218_ip = 624;
                        continue _fun18218
                    }
                case 562:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18218_ip = 606;
                        continue _fun18218
                    }
                case 569:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 606:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 624:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var15 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot27 = var15;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: RateLimitData$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'limit_expiry',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.RateLimitData'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18222: for (var _fun18222_ip = 0;;) switch (_fun18222_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18222_ip = 110;
                        continue _fun18222
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18223: for (var _fun18223_ip = 0;;) switch (_fun18223_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18223_ip = 27;
                        continue _fun18223
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18223_ip = 392;
                        continue _fun18223
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18223_ip = 304;
                        continue _fun18223
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18223_ip = 224;
                        continue _fun18223
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18223_ip = 374;
                        continue _fun18223
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18223_ip = 189;
                        continue _fun18223
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18223_ip = 374;
                    continue _fun18223;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.limitExpiry;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.limitExpiry = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18223_ip = 85;
                        continue _fun18223
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18224: for (var _fun18224_ip = 0;;) switch (_fun18224_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.limitExpiry;
                    if (!var2) {
                        _fun18224_ip = 124;
                        continue _fun18224
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.limitExpiry;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18224_ip = 198;
                        continue _fun18224
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18224_ip = 180;
                        continue _fun18224
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var14 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot28 = var14;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: FeatureLimits$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'map',
                'kind': 'map',
                'K': 13
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot28;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.FeatureLimits'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18228: for (var _fun18228_ip = 0;;) switch (_fun18228_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.map = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18228_ip = 116;
                        continue _fun18228
                    }
                case 86:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 116:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18229: for (var _fun18229_ip = 0;;) switch (_fun18229_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18229_ip = 27;
                        continue _fun18229
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18229_ip = 340;
                        continue _fun18229
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun18229_ip = 298;
                        continue _fun18229
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun18229_ip = 218;
                        continue _fun18229
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun18229_ip = 322;
                        continue _fun18229
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun18229_ip = 186;
                        continue _fun18229
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun18229_ip = 322;
                    continue _fun18229;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.map;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 322:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun18229_ip = 82;
                        continue _fun18229
                    }
                case 340:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18230: for (var _fun18230_ip = 0;;) switch (_fun18230_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var4 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var3 = 0;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var2 = undefined;
                    if (!var4) {
                        _fun18230_ip = 200;
                        continue _fun18230
                    }
                case 61:
                    var4 = var12.tag;
                    var13 = var4.bind(var12)();
                    var4 = _closure1_slot2;
                    var13 = var4.bind(var0)(var13, var9);
                    var4 = var13[var3];
                    var13 = var13[var8];
                    if (!(var8 !== var4)) {
                        _fun18230_ip = 166;
                        continue _fun18230
                    }
                case 92:
                    if (!(var9 !== var4)) {
                        _fun18230_ip = 137;
                        continue _fun18230
                    }
                case 96:
                    var4 = global;
                    var4 = var4.globalThis;
                    var14 = var4.Error;
                    var4 = var14.prototype;
                    var13 = Object.create(var4, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.users.v1.FeatureLimits.map';
                    var18 = var13;
                    var4 = new var18[var14](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var13;
                    throw var4;
                case 137:
                    var14 = _closure1_slot28;
                    var13 = var14.internalBinaryRead;
                    var4 = var12.uint32;
                    var4 = var4.bind(var12)();
                    var13 = var13.bind(var14)(var12, var4, var11);
                    _fun18230_ip = 179;
                    continue _fun18230;
                case 166:
                    var4 = var12.uint32;
                    var7 = var4.bind(var12)();
                    var13 = var6;
                case 179:
                    var4 = var12.pos;
                    var6 = var13;
                    var5 = var7;
                    var2 = var6;
                    if (var4 < var10) {
                        _fun18230_ip = 61;
                        continue _fun18230
                    }
                case 200:
                    var4 = null;
                    var6 = var4 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun18230_ip = 214;
                        continue _fun18230
                    }
                case 211:
                    var3 = var5;
                case 214:
                    if (!(var4 == var2)) {
                        _fun18230_ip = 231;
                        continue _fun18230
                    }
                case 218:
                    var4 = _closure1_slot28;
                    var1 = var4.create;
                    var2 = var1.bind(var4)();
                case 231:
                    var1 = arg0;
                    var1[var3] = var2;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18231: for (var _fun18231_ip = 0;;) switch (_fun18231_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var11 = global;
                    var5 = var11.Object;
                    var3 = var5.keys;
                    var1 = var4.map;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun18231_ip = 269;
                        continue _fun18231
                    }
                case 63:
                    var14 = var10[var9];
                    var15 = var0.tag;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var12 = var7[var6];
                    var12 = var13.bind(var3)(var12);
                    var12 = var12.WireType;
                    var12 = var12.LengthDelimited;
                    var15 = var15.bind(var0)(var5, var12);
                    var12 = var15.fork;
                    var16 = var12.bind(var15)();
                    var15 = var16.tag;
                    var12 = var7[var6];
                    var12 = var13.bind(var3)(var12);
                    var12 = var12.WireType;
                    var12 = var12.Varint;
                    var16 = var15.bind(var16)(var5, var12);
                    var15 = var16.uint32;
                    var12 = var11.parseInt;
                    var12 = var12.bind(var3)(var14);
                    var12 = var15.bind(var16)(var12);
                    var12 = var0.tag;
                    var7 = var7[var6];
                    var7 = var13.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var12 = var12.bind(var0)(var8, var7);
                    var7 = var12.fork;
                    var7 = var7.bind(var12)();
                    var13 = _closure1_slot28;
                    var12 = var13.internalBinaryWrite;
                    var7 = var4.map;
                    var7 = var7[var14];
                    var7 = var12.bind(var13)(var7, var0, var2);
                    var7 = var0.join;
                    var12 = var7.bind(var0)();
                    var7 = var12.join;
                    var7 = var7.bind(var12)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun18231_ip = 63;
                        continue _fun18231
                    }
                case 269:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun18231_ip = 330;
                        continue _fun18231
                    }
                case 281:
                    if (!(var5 == var2)) {
                        _fun18231_ip = 314;
                        continue _fun18231
                    }
                case 285:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 314:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 330:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var13 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot29 = var13;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: SafetyFlag$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'flag_expiry',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.SafetyFlag'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18235: for (var _fun18235_ip = 0;;) switch (_fun18235_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18235_ip = 110;
                        continue _fun18235
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18236: for (var _fun18236_ip = 0;;) switch (_fun18236_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18236_ip = 27;
                        continue _fun18236
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18236_ip = 392;
                        continue _fun18236
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18236_ip = 304;
                        continue _fun18236
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18236_ip = 224;
                        continue _fun18236
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18236_ip = 374;
                        continue _fun18236
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18236_ip = 189;
                        continue _fun18236
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18236_ip = 374;
                    continue _fun18236;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.flagExpiry;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.flagExpiry = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18236_ip = 85;
                        continue _fun18236
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18237: for (var _fun18237_ip = 0;;) switch (_fun18237_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.flagExpiry;
                    if (!var2) {
                        _fun18237_ip = 124;
                        continue _fun18237
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.flagExpiry;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18237_ip = 198;
                        continue _fun18237
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18237_ip = 180;
                        continue _fun18237
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var12 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot30 = var12;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: GuildShardingConfig$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'shards',
                'kind': 'scalar',
                'repeat': 1,
                'T': 5
            };
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.GuildShardingConfig'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18240: for (var _fun18240_ip = 0;;) switch (_fun18240_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.shards = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18240_ip = 119;
                        continue _fun18240
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18241: for (var _fun18241_ip = 0;;) switch (_fun18241_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18241_ip = 27;
                        continue _fun18241
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18241_ip = 480;
                        continue _fun18241
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun18241_ip = 309;
                        continue _fun18241
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun18241_ip = 229;
                        continue _fun18241
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun18241_ip = 459;
                        continue _fun18241
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun18241_ip = 191;
                        continue _fun18241
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun18241_ip = 459;
                    continue _fun18241;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun18241_ip = 378;
                        continue _fun18241
                    }
                case 341:
                    var22 = var0.shards;
                    var21 = var22.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun18241_ip = 459;
                    continue _fun18241;
                case 378:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun18241_ip = 459;
                        continue _fun18241
                    }
                case 415:
                    var23 = var0.shards;
                    var22 = var23.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun18241_ip = 415;
                        continue _fun18241
                    }
                case 459:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18241_ip = 84;
                        continue _fun18241
                    }
                case 480:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18242: for (var _fun18242_ip = 0;;) switch (_fun18242_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.shards;
                    var1 = var1.length;
                    if (!var1) {
                        _fun18242_ip = 151;
                        continue _fun18242
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.shards;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun18242_ip = 142;
                        continue _fun18242
                    }
                case 103:
                    var3 = var0.int32;
                    var1 = var4.shards;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.shards;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun18242_ip = 103;
                        continue _fun18242
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18242_ip = 228;
                        continue _fun18242
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18242_ip = 210;
                        continue _fun18242
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var11 = var3 instanceof Object ? var3 : var4;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: QuestMetadata$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'quests_completed',
                'kind': 'scalar',
                'T': 13
            };
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.QuestMetadata'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18245: for (var _fun18245_ip = 0;;) switch (_fun18245_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.questsCompleted = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18245_ip = 117;
                        continue _fun18245
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18246: for (var _fun18246_ip = 0;;) switch (_fun18246_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18246_ip = 27;
                        continue _fun18246
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18246_ip = 338;
                        continue _fun18246
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun18246_ip = 298;
                        continue _fun18246
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun18246_ip = 218;
                        continue _fun18246
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun18246_ip = 320;
                        continue _fun18246
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun18246_ip = 186;
                        continue _fun18246
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun18246_ip = 320;
                    continue _fun18246;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.uint32;
                    var1 = var1.bind(var16)();
                    var0.questsCompleted = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun18246_ip = 82;
                        continue _fun18246
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18247: for (var _fun18247_ip = 0;;) switch (_fun18247_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.questsCompleted;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun18247_ip = 85;
                        continue _fun18247
                    }
                case 18:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.uint32;
                    var1 = var4.questsCompleted;
                    var1 = var2.bind(var3)(var1);
                case 85:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18247_ip = 162;
                        continue _fun18247
                    }
                case 100:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18247_ip = 144;
                        continue _fun18247
                    }
                case 107:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 144:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 162:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var10 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot31 = var10;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: NormalState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = ['discord_protos.users.v1.NormalState'];
            var5 = new Array(0);
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18250: for (var _fun18250_ip = 0;;) switch (_fun18250_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18250_ip = 110;
                        continue _fun18250
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18251: for (var _fun18251_ip = 0;;) switch (_fun18251_ip) {
                case 0:
                    var0 = arg3;
                    var2 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18251_ip = 21;
                        continue _fun18251
                    }
                case 12:
                    var1 = var2.create;
                    var0 = var1.bind(var2)();
                case 21:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18252: for (var _fun18252_ip = 0;;) switch (_fun18252_ip) {
                case 0:
                    var0 = arg1;
                    var1 = arg2;
                    var4 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var4)) {
                        _fun18252_ip = 83;
                        continue _fun18252
                    }
                case 18:
                    var1 = 1;
                    if (!(var1 == var4)) {
                        _fun18252_ip = 62;
                        continue _fun18252
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var4 = var1.onWrite;
                case 62:
                    var1 = this;
                    var3 = var1.typeName;
                    var2 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var2)(var3, var1, var0);
                case 83:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var9 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot32 = var9;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: RestrictedState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'restricted_until',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.RestrictedState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18256: for (var _fun18256_ip = 0;;) switch (_fun18256_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18256_ip = 110;
                        continue _fun18256
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18257: for (var _fun18257_ip = 0;;) switch (_fun18257_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18257_ip = 27;
                        continue _fun18257
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18257_ip = 392;
                        continue _fun18257
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18257_ip = 304;
                        continue _fun18257
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18257_ip = 224;
                        continue _fun18257
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18257_ip = 374;
                        continue _fun18257
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18257_ip = 189;
                        continue _fun18257
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18257_ip = 374;
                    continue _fun18257;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.restrictedUntil;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.restrictedUntil = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18257_ip = 85;
                        continue _fun18257
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18258: for (var _fun18258_ip = 0;;) switch (_fun18258_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.restrictedUntil;
                    if (!var2) {
                        _fun18258_ip = 124;
                        continue _fun18258
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.restrictedUntil;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18258_ip = 198;
                        continue _fun18258
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18258_ip = 180;
                        continue _fun18258
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var8 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot33 = var8;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: DeferredActionState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'action_deferred_until',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.DeferredActionState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18262: for (var _fun18262_ip = 0;;) switch (_fun18262_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18262_ip = 110;
                        continue _fun18262
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18263: for (var _fun18263_ip = 0;;) switch (_fun18263_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18263_ip = 27;
                        continue _fun18263
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18263_ip = 392;
                        continue _fun18263
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18263_ip = 304;
                        continue _fun18263
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18263_ip = 224;
                        continue _fun18263
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18263_ip = 374;
                        continue _fun18263
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18263_ip = 189;
                        continue _fun18263
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18263_ip = 374;
                    continue _fun18263;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.actionDeferredUntil;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.actionDeferredUntil = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18263_ip = 85;
                        continue _fun18263
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18264: for (var _fun18264_ip = 0;;) switch (_fun18264_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.actionDeferredUntil;
                    if (!var2) {
                        _fun18264_ip = 124;
                        continue _fun18264
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.actionDeferredUntil;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18264_ip = 198;
                        continue _fun18264
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18264_ip = 180;
                        continue _fun18264
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var7 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot34 = var7;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: TempBannedState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'banned_until',
                'kind': 'message'
            };
            var5 = function() { // Original name: T, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.users.v1.TempBannedState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18268: for (var _fun18268_ip = 0;;) switch (_fun18268_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18268_ip = 110;
                        continue _fun18268
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18269: for (var _fun18269_ip = 0;;) switch (_fun18269_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18269_ip = 27;
                        continue _fun18269
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18269_ip = 392;
                        continue _fun18269
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var5];
                    var25 = var1[var4];
                    if (!(var4 !== var26)) {
                        _fun18269_ip = 304;
                        continue _fun18269
                    }
                case 119:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18269_ip = 224;
                        continue _fun18269
                    }
                case 129:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18269_ip = 374;
                        continue _fun18269
                    }
                case 153:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18269_ip = 189;
                        continue _fun18269
                    }
                case 160:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 189:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18269_ip = 374;
                    continue _fun18269;
                case 224:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 304:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.bannedUntil;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.bannedUntil = var1;
                    var19 = var3;
                    var18 = var2;
                case 374:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18269_ip = 85;
                        continue _fun18269
                    }
                case 392:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18270: for (var _fun18270_ip = 0;;) switch (_fun18270_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.bannedUntil;
                    if (!var2) {
                        _fun18270_ip = 124;
                        continue _fun18270
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.bannedUntil;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18270_ip = 198;
                        continue _fun18270
                    }
                case 136:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18270_ip = 180;
                        continue _fun18270
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 180:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 198:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var6 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot35 = var6;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: BannedState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = ['discord_protos.users.v1.BannedState'];
            var5 = new Array(0);
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18273: for (var _fun18273_ip = 0;;) switch (_fun18273_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18273_ip = 110;
                        continue _fun18273
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18274: for (var _fun18274_ip = 0;;) switch (_fun18274_ip) {
                case 0:
                    var0 = arg3;
                    var2 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18274_ip = 21;
                        continue _fun18274
                    }
                case 12:
                    var1 = var2.create;
                    var0 = var1.bind(var2)();
                case 21:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18275: for (var _fun18275_ip = 0;;) switch (_fun18275_ip) {
                case 0:
                    var0 = arg1;
                    var1 = arg2;
                    var4 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var4)) {
                        _fun18275_ip = 83;
                        continue _fun18275
                    }
                case 18:
                    var1 = 1;
                    if (!(var1 == var4)) {
                        _fun18275_ip = 62;
                        continue _fun18275
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var4 = var1.onWrite;
                case 62:
                    var1 = this;
                    var3 = var1.typeName;
                    var2 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var2)(var3, var1, var0);
                case 83:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var5 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot36 = var5;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: SafetyState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 101,
                'name': 'normal',
                'kind': 'message',
                'oneof': 'state'
            };
            var5 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot32;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(8);
            var5[0] = var0;
            var0 = {
                'no': 102,
                'name': 'restricted',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot33;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 103,
                'name': 'deferred_action',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot34;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 104,
                'name': 'temp_banned',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot35;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 105,
                'name': 'banned',
                'kind': 'message',
                'oneof': 'state'
            };
            var7 = function() { // Original name: T, environment: var6
                var0 = _closure1_slot36;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 1,
                'name': 'reason',
                'kind': 'enum'
            };
            var7 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot13;
                var0 = ['discord_protos.users.v1.SafetyStateReason'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 2,
                'name': 'annotations',
                'kind': 'enum',
                'repeat': 1
            };
            var7 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot14;
                var0 = ['discord_protos.users.v1.SafetyAnnotations'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 3,
                'name': 'last_mutation_id',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt64Value;
                return var0;
            };
            var0.T = var6;
            var5[7] = var0;
            var0 = ['discord_protos.users.v1.SafetyState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18286: for (var _fun18286_ip = 0;;) switch (_fun18286_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var5 = undefined;
                    var1.oneofKind = var5;
                    var0.state = var1;
                    var1 = 0;
                    var0.reason = var1;
                    var1 = new Array(0);
                    var0.annotations = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18286_ip = 137;
                        continue _fun18286
                    }
                case 107:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 137:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18287: for (var _fun18287_ip = 0;;) switch (_fun18287_ip) {
                case 0:
                    var29 = arg0;
                    var28 = arg2;
                    var0 = arg3;
                    var27 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18287_ip = 27;
                        continue _fun18287
                    }
                case 18:
                    var1 = var27.create;
                    var0 = var1.bind(var27)();
                case 27:
                    var2 = var29.pos;
                    var1 = arg1;
                    var26 = var2 + var1;
                    var1 = var29.pos;
                    var1 = var1 < var26;
                    var25 = undefined;
                    var24 = 'normal';
                    var22 = 'restricted';
                    var21 = 'deferredAction';
                    var20 = 'tempBanned';
                    var19 = 'banned';
                    var18 = 6;
                    var17 = 7;
                    var16 = true;
                    var15 = false;
                    var14 = 'throw';
                    var13 = 3;
                    var12 = 2;
                    var11 = 1;
                    var10 = 105;
                    var9 = 104;
                    var8 = 103;
                    var7 = 102;
                    var6 = 101;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18287_ip = 1061;
                        continue _fun18287
                    }
                case 125:
                    var1 = var29.tag;
                    var30 = var1.bind(var29)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var25)(var30, var12);
                    var39 = var1[var5];
                    var33 = var1[var11];
                    if (!(var6 !== var39)) {
                        _fun18287_ip = 969;
                        continue _fun18287
                    }
                case 159:
                    if (!(var7 !== var39)) {
                        _fun18287_ip = 896;
                        continue _fun18287
                    }
                case 166:
                    if (!(var8 !== var39)) {
                        _fun18287_ip = 820;
                        continue _fun18287
                    }
                case 173:
                    if (!(var9 !== var39)) {
                        _fun18287_ip = 744;
                        continue _fun18287
                    }
                case 180:
                    if (!(var10 !== var39)) {
                        _fun18287_ip = 668;
                        continue _fun18287
                    }
                case 187:
                    if (!(var11 !== var39)) {
                        _fun18287_ip = 638;
                        continue _fun18287
                    }
                case 194:
                    if (!(var12 !== var39)) {
                        _fun18287_ip = 477;
                        continue _fun18287
                    }
                case 201:
                    if (!(var13 !== var39)) {
                        _fun18287_ip = 399;
                        continue _fun18287
                    }
                case 208:
                    var34 = var28.readUnknownField;
                    if (!(var14 !== var34)) {
                        _fun18287_ip = 319;
                        continue _fun18287
                    }
                case 218:
                    var1 = var29.skip;
                    var1 = var1.bind(var29)(var33);
                    var32 = var4;
                    var31 = var34;
                    var30 = var1;
                    if (!(var15 !== var34)) {
                        _fun18287_ip = 1040;
                        continue _fun18287
                    }
                case 245:
                    var36 = var34;
                    if (!(var16 === var34)) {
                        _fun18287_ip = 281;
                        continue _fun18287
                    }
                case 252:
                    var37 = _closure1_slot0;
                    var35 = _closure1_slot1;
                    var35 = var35[var18];
                    var35 = var37.bind(var25)(var35);
                    var35 = var35.UnknownFieldHandler;
                    var36 = var35.onRead;
                case 281:
                    var44 = var27.typeName;
                    var45 = undefined;
                    var43 = var0;
                    var42 = var39;
                    var41 = var33;
                    var40 = var1;
                    var35 = var45[var36](var44, var43, var42, var41, var40, var39);
                    var32 = var4;
                    var31 = var34;
                    var30 = var1;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 319:
                    var1 = global;
                    var34 = var1.globalThis;
                    var35 = var34.Error;
                    var40 = var27.typeName;
                    var1 = var1.HermesInternal;
                    var37 = var1.concat;
                    var45 = 'Unknown field ';
                    var43 = ' (wire type ';
                    var41 = ') for ';
                    var44 = var39;
                    var42 = var33;
                    var44 = var45[var37](var44, var43, var42, var41, var40, var39);
                    var34 = var35.prototype;
                    var34 = Object.create(var34, {
                        constructor: {
                            value: var35
                        }
                    });
                    var45 = var34;
                    var1 = new var45[var35](var44, var43);
                    var1 = var1 instanceof Object ? var1 : var34;
                    throw var1;
                case 399:
                    var34 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var17];
                    var1 = var34.bind(var25)(var1);
                    var36 = var1.UInt64Value;
                    var35 = var36.internalBinaryRead;
                    var1 = var29.uint32;
                    var43 = var1.bind(var29)();
                    var41 = var0.lastMutationId;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var1 = var45[var35](var44, var43, var42, var41, var40);
                    var0.lastMutationId = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 477:
                    var34 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var18];
                    var1 = var34.bind(var25)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var33 !== var1)) {
                        _fun18287_ip = 549;
                        continue _fun18287
                    }
                case 509:
                    var34 = var0.annotations;
                    var33 = var34.push;
                    var1 = var29.int32;
                    var1 = var1.bind(var29)();
                    var1 = var33.bind(var34)(var1);
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 549:
                    var1 = var29.int32;
                    var33 = var1.bind(var29)();
                    var1 = var29.pos;
                    var33 = var33 + var1;
                    var1 = var29.pos;
                    var31 = var3;
                    var30 = var2;
                    var32 = var33;
                    if (!(var1 < var32)) {
                        _fun18287_ip = 1040;
                        continue _fun18287
                    }
                case 589:
                    var35 = var0.annotations;
                    var34 = var35.push;
                    var1 = var29.int32;
                    var1 = var1.bind(var29)();
                    var1 = var34.bind(var35)(var1);
                    var1 = var29.pos;
                    var32 = var33;
                    var31 = var3;
                    var30 = var2;
                    if (var1 < var33) {
                        _fun18287_ip = 589;
                        continue _fun18287
                    }
                case 633:
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 638:
                    var1 = var29.int32;
                    var1 = var1.bind(var29)();
                    var0.reason = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 668:
                    var1 = {};
                    var1.oneofKind = var19;
                    var36 = _closure1_slot36;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.banned;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.banned = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 744:
                    var1 = {};
                    var1.oneofKind = var20;
                    var36 = _closure1_slot35;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.tempBanned;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.tempBanned = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 820:
                    var1 = {};
                    var1.oneofKind = var21;
                    var36 = _closure1_slot34;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.deferredAction;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.deferredAction = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 896:
                    var1 = {};
                    var1.oneofKind = var22;
                    var36 = _closure1_slot33;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.restricted;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.restricted = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                    _fun18287_ip = 1040;
                    continue _fun18287;
                case 969:
                    var1 = {};
                    var1.oneofKind = var24;
                    var36 = _closure1_slot32;
                    var35 = var36.internalBinaryRead;
                    var33 = var29.uint32;
                    var43 = var33.bind(var29)();
                    var33 = var0.state;
                    var41 = var33.normal;
                    var45 = var36;
                    var44 = var29;
                    var42 = var28;
                    var33 = var45[var35](var44, var43, var42, var41, var40);
                    var1.normal = var33;
                    var0.state = var1;
                    var32 = var4;
                    var31 = var3;
                    var30 = var2;
                case 1040:
                    var1 = var29.pos;
                    var4 = var32;
                    var3 = var31;
                    var2 = var30;
                    if (var1 < var26) {
                        _fun18287_ip = 125;
                        continue _fun18287
                    }
                case 1061:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18288: for (var _fun18288_ip = 0;;) switch (_fun18288_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'normal';
                    if (!(var2 === var3)) {
                        _fun18288_ip = 125;
                        continue _fun18288
                    }
                case 28:
                    var6 = _closure1_slot32;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.normal;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 101;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 125:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'restricted';
                    if (!(var2 === var3)) {
                        _fun18288_ip = 241;
                        continue _fun18288
                    }
                case 144:
                    var6 = _closure1_slot33;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.restricted;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 102;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 241:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'deferredAction';
                    if (!(var2 === var3)) {
                        _fun18288_ip = 357;
                        continue _fun18288
                    }
                case 260:
                    var6 = _closure1_slot34;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.deferredAction;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 103;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 357:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'tempBanned';
                    if (!(var2 === var3)) {
                        _fun18288_ip = 473;
                        continue _fun18288
                    }
                case 376:
                    var6 = _closure1_slot35;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.tempBanned;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 104;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 473:
                    var2 = var4.state;
                    var3 = var2.oneofKind;
                    var2 = 'banned';
                    if (!(var2 === var3)) {
                        _fun18288_ip = 589;
                        continue _fun18288
                    }
                case 492:
                    var6 = _closure1_slot36;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.state;
                    var3 = var3.banned;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 105;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 589:
                    var2 = var4.reason;
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun18288_ip = 668;
                        continue _fun18288
                    }
                case 601:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Varint;
                    var2 = 1;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.int32;
                    var2 = var4.reason;
                    var2 = var5.bind(var6)(var2);
                case 668:
                    var2 = var4.annotations;
                    var2 = var2.length;
                    if (!var2) {
                        _fun18288_ip = 813;
                        continue _fun18288
                    }
                case 685:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 2;
                    var5 = var6.bind(var0)(var2, var5);
                    var2 = var5.fork;
                    var2 = var2.bind(var5)();
                    var2 = var4.annotations;
                    var2 = var2.length;
                    var2 = var3 < var2;
                    var3 = 0;
                    if (!var2) {
                        _fun18288_ip = 804;
                        continue _fun18288
                    }
                case 765:
                    var5 = var0.int32;
                    var2 = var4.annotations;
                    var2 = var2[var3];
                    var2 = var5.bind(var0)(var2);
                    var3 = var3 + 1;
                    var2 = var4.annotations;
                    var2 = var2.length;
                    if (var3 < var2) {
                        _fun18288_ip = 765;
                        continue _fun18288
                    }
                case 804:
                    var2 = var0.join;
                    var2 = var2.bind(var0)();
                case 813:
                    var2 = var4.lastMutationId;
                    if (!var2) {
                        _fun18288_ip = 928;
                        continue _fun18288
                    }
                case 822:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt64Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.lastMutationId;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 928:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18288_ip = 1002;
                        continue _fun18288
                    }
                case 940:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18288_ip = 984;
                        continue _fun18288
                    }
                case 947:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 984:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 1002:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var49 = var4;
    var3 = new var49[var3](var48);
    var4 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot37 = var4;
    var3 = var43[var1];
    var3 = var42.bind(var0)(var3);
    var45 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: PremiumState$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var0 = {
                'no': 1,
                'name': 'premium_source',
                'kind': 'enum'
            };
            var5 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot15;
                var0 = ['discord_protos.users.v1.PremiumSource'];
                var0[1] = var1;
                var1 = 'PREMIUM_SOURCE_';
                var0[2] = var1;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(3);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'premium_subscription_type',
                'kind': 'enum'
            };
            var7 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot16;
                var0 = ['discord_protos.users.v1.PremiumSubscriptionType'];
                var0[1] = var1;
                var1 = 'PREMIUM_SUBSCRIPTION_TYPE_';
                var0[2] = var1;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'premium_subscription_group_role',
                'kind': 'enum'
            };
            var6 = function() { // Original name: T, environment: var6
                var1 = _closure1_slot17;
                var0 = ['discord_protos.users.v1.PremiumSubscriptionGroupRole'];
                var0[1] = var1;
                var1 = 'PREMIUM_SUBSCRIPTION_GROUP_ROLE_';
                var0[2] = var1;
                return var0;
            };
            var0.T = var6;
            var5[2] = var0;
            var0 = ['discord_protos.users.v1.PremiumState'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18294: for (var _fun18294_ip = 0;;) switch (_fun18294_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'premiumSource': 0,
                        'premiumSubscriptionType': 0,
                        'premiumSubscriptionGroupRole': 0
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18294_ip = 118;
                        continue _fun18294
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18295: for (var _fun18295_ip = 0;;) switch (_fun18295_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18295_ip = 27;
                        continue _fun18295
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18295_ip = 406;
                        continue _fun18295
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun18295_ip = 366;
                        continue _fun18295
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun18295_ip = 342;
                        continue _fun18295
                    }
                case 126:
                    if (!(var7 !== var26)) {
                        _fun18295_ip = 318;
                        continue _fun18295
                    }
                case 133:
                    var20 = var16.readUnknownField;
                    if (!(var8 !== var20)) {
                        _fun18295_ip = 238;
                        continue _fun18295
                    }
                case 143:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var9 !== var20)) {
                        _fun18295_ip = 388;
                        continue _fun18295
                    }
                case 167:
                    var22 = var20;
                    if (!(var10 === var20)) {
                        _fun18295_ip = 203;
                        continue _fun18295
                    }
                case 174:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var11];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 203:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18295_ip = 388;
                    continue _fun18295;
                case 238:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 318:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.premiumSubscriptionGroupRole = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun18295_ip = 388;
                    continue _fun18295;
                case 342:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.premiumSubscriptionType = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun18295_ip = 388;
                    continue _fun18295;
                case 366:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.premiumSource = var1;
                    var19 = var3;
                    var18 = var2;
                case 388:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18295_ip = 85;
                        continue _fun18295
                    }
                case 406:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18296: for (var _fun18296_ip = 0;;) switch (_fun18296_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.premiumSource;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun18296_ip = 85;
                        continue _fun18296
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.premiumSource;
                    var1 = var3.bind(var5)(var1);
                case 85:
                    var1 = var4.premiumSubscriptionType;
                    if (!(var2 !== var1)) {
                        _fun18296_ip = 162;
                        continue _fun18296
                    }
                case 95:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.premiumSubscriptionType;
                    var1 = var3.bind(var5)(var1);
                case 162:
                    var1 = var4.premiumSubscriptionGroupRole;
                    if (!(var2 !== var1)) {
                        _fun18296_ip = 239;
                        continue _fun18296
                    }
                case 172:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 3;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.premiumSubscriptionGroupRole;
                    var1 = var2.bind(var3)(var1);
                case 239:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18296_ip = 316;
                        continue _fun18296
                    }
                case 254:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18296_ip = 298;
                        continue _fun18296
                    }
                case 261:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 298:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 316:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var45);
    var45 = var3.prototype;
    var45 = Object.create(var45, {
        constructor: {
            value: var3
        }
    });
    var49 = var45;
    var3 = new var49[var3](var48);
    var3 = var3 instanceof Object ? var3 : var45;
    var _closure1_slot38 = var3;
    var1 = var43[var1];
    var1 = var42.bind(var0)(var1);
    var45 = var1.MessageType;
    var1 = function(arg0) { // Environment: var44
        var3 = function() { // Original name: StoreCountry$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot40;
            var5 = new Array(2);
            var0 = {
                'no': 1,
                'name': 'country',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'set_at',
                'kind': 'message'
            };
            var6 = function() { // Original name: T, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.users.v1.StoreCountry'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun18300: for (var _fun18300_ip = 0;;) switch (_fun18300_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '';
                    var0.country = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun18300_ip = 119;
                        continue _fun18300
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun18301: for (var _fun18301_ip = 0;;) switch (_fun18301_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18301_ip = 27;
                        continue _fun18301
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 8;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun18301_ip = 422;
                        continue _fun18301
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun18301_ip = 383;
                        continue _fun18301
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun18301_ip = 311;
                        continue _fun18301
                    }
                case 126:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun18301_ip = 231;
                        continue _fun18301
                    }
                case 136:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun18301_ip = 404;
                        continue _fun18301
                    }
                case 160:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun18301_ip = 196;
                        continue _fun18301
                    }
                case 167:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 196:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun18301_ip = 404;
                    continue _fun18301;
                case 231:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 311:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.setAt;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.setAt = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun18301_ip = 404;
                    continue _fun18301;
                case 383:
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var0.country = var1;
                    var19 = var3;
                    var18 = var2;
                case 404:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun18301_ip = 85;
                        continue _fun18301
                    }
                case 422:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun18302: for (var _fun18302_ip = 0;;) switch (_fun18302_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var3 = var4.country;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun18302_ip = 89;
                        continue _fun18302
                    }
                case 23:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.country;
                    var2 = var3.bind(var5)(var2);
                case 89:
                    var2 = var4.setAt;
                    if (!var2) {
                        _fun18302_ip = 204;
                        continue _fun18302
                    }
                case 98:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.setAt;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 204:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun18302_ip = 278;
                        continue _fun18302
                    }
                case 216:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun18302_ip = 260;
                        continue _fun18302
                    }
                case 223:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 260:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 278:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var45);
    var45 = var1.prototype;
    var45 = Object.create(var45, {
        constructor: {
            value: var1
        }
    });
    var49 = var45;
    var1 = new var49[var1](var48);
    var1 = var1 instanceof Object ? var1 : var45;
    var _closure1_slot39 = var1;
    var41 = var43[var41];
    var43 = var42.bind(var0)(var41);
    var42 = var43.fileFinishedImporting;
    var41 = '../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx';
    var41 = var42.bind(var43)(var41);
    var2.DayOfWeek = var40;
    var2.DisplayNameFont = var39;
    var2.DisplayNameEffect = var38;
    var2.UserLinkType = var37;
    var2.UserLinkStatus = var36;
    var2.RateLimitTier = var35;
    var2.FeatureLimitName = var34;
    var2.SafetyFlagType = var33;
    var2.SafetyStateReason = var32;
    var2.SafetyAnnotations = var31;
    var2.PremiumSource = var30;
    var2.PremiumSubscriptionType = var29;
    var2.PremiumSubscriptionGroupRole = var28;
    var2.TimeOfDay = var27;
    var2.User = var26;
    var2.MediumUser = var25;
    var2.UserAvatarDecoration = var24;
    var2.UserNameplate = var23;
    var2.DisplayNameStyles = var22;
    var2.UserCollectibles = var21;
    var2.UserPrimaryGuild = var20;
    var2.ScheduleRule = var19;
    var2.RestrictedSchedule = var18;
    var2.CrossPlatformRestriction = var17;
    var2.UserData = var16;
    var2.LinkedUser = var15;
    var2.RateLimitData = var14;
    var2.FeatureLimits = var13;
    var2.SafetyFlag = var12;
    var2.GuildShardingConfig = var11;
    var2.QuestMetadata = var10;
    var2.NormalState = var9;
    var2.RestrictedState = var8;
    var2.DeferredActionState = var7;
    var2.TempBannedState = var6;
    var2.BannedState = var5;
    var2.SafetyState = var4;
    var2.PremiumState = var3;
    var2.StoreCountry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1313, 1342, 1341, 2]);