// modules/age_assurance/AgeVerificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var4 = function() {
        _fun38929: for (var _fun38929_ip = 0;;) switch (_fun38929_ip) {
            case 0:
                var2 = _closure1_slot9;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = null;
                var0 = var2 == var3;
                var4 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun38929_ip = 35;
                    continue _fun38929
                }
            case 29:
                var6 = var3.ageVerificationStatus;
            case 35:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 13;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.UNVERIFIED;
                var0 = var6 !== var0;
                if (!var0) {
                    _fun38929_ip = 122;
                    continue _fun38929
                }
            case 74:
                var6 = var2 == var3;
                var2 = undefined;
                if (var6) {
                    _fun38929_ip = 89;
                    continue _fun38929
                }
            case 83:
                var2 = var3.ageVerificationStatus;
            case 89:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.AgeVerificationStatusUkAndAusOnly;
                var1 = var1.CLIENT_ONLY_PENDING;
                var0 = var2 !== var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var3 = function() {
        _fun38930: for (var _fun38930_ip = 0;;) switch (_fun38930_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 14;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var3.bind(var5)(var2, var0);
                var2 = null;
                var0 = var2 == var3;
                var6 = undefined;
                if (var0) {
                    _fun38930_ip = 72;
                    continue _fun38930
                }
            case 66:
                var6 = var3.ageVerificationStatus;
            case 72:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 13;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.UNVERIFIED;
                var0 = var6 !== var0;
                if (!var0) {
                    _fun38930_ip = 159;
                    continue _fun38930
                }
            case 111:
                var6 = var2 == var3;
                var2 = undefined;
                if (var6) {
                    _fun38930_ip = 126;
                    continue _fun38930
                }
            case 120:
                var2 = var3.ageVerificationStatus;
            case 126:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.AgeVerificationStatusUkAndAusOnly;
                var1 = var1.CLIENT_ONLY_PENDING;
                var0 = var2 !== var1;
            case 159:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var5 = global;
    var11 = var5.Object;
    var8 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var10[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var8 = var10[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var8);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var6 = var6.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var6 = var6.MessageEmbedTypes;
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var6 = var6.AgeGateSource;
    var7 = 11;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.SafetyToastType;
    var _closure1_slot13 = var7;
    var11 = var5.Set;
    var8 = 12;
    var7 = var10[var8];
    var7 = var9.bind(var0)(var7);
    var7 = var7.AgeVerificationModalEntryPoint;
    var12 = var7.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT;
    var7 = new Array(3);
    var7[0] = var12;
    var12 = var10[var8];
    var12 = var9.bind(var0)(var12);
    var12 = var12.AgeVerificationModalEntryPoint;
    var12 = var12.START_STAGE_PROMPT;
    var7[1] = var12;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.AgeVerificationModalEntryPoint;
    var8 = var8.STAGE_CHANNEL_RAISE_HAND;
    var7[2] = var8;
    var8 = var11.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var11
        }
    });
    var16 = var8;
    var15 = var7;
    var7 = new var16[var11](var15, var14);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot14 = var7;
    var7 = var5.Set;
    var8 = var6.NSFW_SERVER;
    var5 = new Array(6);
    var5[0] = var8;
    var8 = var6.NSFW_SERVER_INVITE;
    var5[1] = var8;
    var8 = var6.NSFW_SERVER_INVITE_EMBED;
    var5[2] = var8;
    var8 = var6.LARGE_GUILD;
    var5[3] = var8;
    var8 = var6.JOIN_LARGE_GUILD_UNDERAGE;
    var5[4] = var8;
    var6 = var6.ACCESS_LARGE_GUILD_UNDERAGE;
    var5[5] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var16 = var6;
    var15 = var5;
    var5 = new var16[var7](var15, var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot15 = var5;
    var7 = {};
    var5 = 'ctas';
    var7.CTAS = var5;
    var5 = 'content_type';
    var7.CONTENT_TYPE = var5;
    var _closure1_slot16 = var7;
    var6 = {};
    var5 = 'retry';
    var6.RETRY = var5;
    var _closure1_slot17 = var6;
    var5 = {};
    var8 = 'verified_adult';
    var5.VERIFIED_ADULT = var8;
    var8 = 'verified_teen';
    var5.VERIFIED_TEEN = var8;
    var8 = 'error';
    var5.ERROR = var8;
    var8 = 26;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/age_assurance/AgeVerificationUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg0) { // Environment: var1
        var2 = _closure1_slot15;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.ageGateSourceHasLightboxBackdrop = var8;
    var8 = function() {
        _fun38933: for (var _fun38933_ip = 0;;) switch (_fun38933_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun38933_ip = 35;
                    continue _fun38933
                }
            case 29:
                var1 = var2.ageVerificationStatus;
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var2.shouldShowTiggerPawtect = var8;
    var8 = function() {
        _fun38934: for (var _fun38934_ip = 0;;) switch (_fun38934_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun38934_ip = 72;
                    continue _fun38934
                }
            case 66:
                var1 = var2.ageVerificationStatus;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var2.useShouldShowTiggerPawtect = var8;
    var8 = function() {
        _fun38936: for (var _fun38936_ip = 0;;) switch (_fun38936_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun38936_ip = 35;
                    continue _fun38936
                }
            case 29:
                var1 = var2.ageVerificationStatus;
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_TEEN;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isVerifiedTeen = var8;
    var8 = function() {
        _fun38937: for (var _fun38937_ip = 0;;) switch (_fun38937_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun38937_ip = 72;
                    continue _fun38937
                }
            case 66:
                var1 = var2.ageVerificationStatus;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_TEEN;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.useIsVerifiedTeen = var8;
    var8 = function() {
        _fun38939: for (var _fun38939_ip = 0;;) switch (_fun38939_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun38939_ip = 35;
                    continue _fun38939
                }
            case 29:
                var1 = var2.ageVerificationStatus;
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isVerifiedAdult = var8;
    var8 = function() {
        _fun38940: for (var _fun38940_ip = 0;;) switch (_fun38940_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun38940_ip = 72;
                    continue _fun38940
                }
            case 66:
                var1 = var2.ageVerificationStatus;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.useIsVerifiedAdult = var8;
    var2.AgeVerificationSystemNotificationEmbedKeys = var7;
    var2.AgeVerificationSystemNotificationCtaTypes = var6;
    var2.AgeVerificationSystemNotificationContentType = var5;
    var5 = function arg0, arg1() {
        _fun38942: for (var _fun38942_ip = 0;;) switch (_fun38942_ip) {
            case 0:
                var4 = _closure1_slot8;
                var3 = var4.getMessage;
                var2 = arg0;
                var0 = arg1;
                var2 = var3.bind(var4)(var2, var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun38942_ip = 200;
                    continue _fun38942
                }
            case 34:
                var3 = var2.embeds;
                if (!(var0 != var3)) {
                    _fun38942_ip = 200;
                    continue _fun38942
                }
            case 47:
                var3 = var2.embeds;
                var4 = var3.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun38942_ip = 200;
                    continue _fun38942
                }
            case 67:
                var4 = var2.embeds;
                var4 = var4[var3];
                var4 = var4.fields;
                if (!(var0 != var4)) {
                    _fun38942_ip = 200;
                    continue _fun38942
                }
            case 87:
                var4 = var2.embeds;
                var4 = var4[var3];
                var5 = var4.type;
                var4 = _closure1_slot12;
                var4 = var4.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
                if (!(var5 === var4)) {
                    _fun38942_ip = 200;
                    continue _fun38942
                }
            case 116:
                var2 = var2.embeds;
                var2 = var2[var3];
                var4 = var2.fields;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.rawName;
                    var0 = _closure1_slot16;
                    var0 = var0.CTAS;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var0 == var2;
                var0 = undefined;
                if (var3) {
                    _fun38942_ip = 198;
                    continue _fun38942
                }
            case 158:
                var4 = var2.rawValue;
                var3 = var4.split;
                var2 = ',';
                var3 = var3.bind(var4)(var2);
                var2 = var3.includes;
                var1 = _closure1_slot17;
                var1 = var1.RETRY;
                var0 = var2.bind(var3)(var1);
            case 198:
                return var0;
            case 200:
                var0 = false;
                return var0;
        }
    };
    var2.isAgeVerificationMessageWithRetryCta = var5;
    var2.isAgeVerified = var4;
    var2.useIsAgeVerified = var3;
    var3 = function arg0() {
        _fun38944: for (var _fun38944_ip = 0;;) switch (_fun38944_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.onComplete;
                var _closure2_slot0 = var9;
                var5 = var2.entryPoint;
                var _closure2_slot1 = var5;
                var12 = var2.isRetry;
                var1 = undefined;
                if (!(var12 === var1)) {
                    _fun38944_ip = 39;
                    continue _fun38944
                }
            case 37:
                var12 = false;
            case 39:
                var _closure2_slot2 = var12;
                var11 = var2.visibleContent;
                if (!(var11 === var1)) {
                    _fun38944_ip = 55;
                    continue _fun38944
                }
            case 53:
                var11 = null;
            case 55:
                var _closure2_slot3 = var11;
                var7 = var2.shouldShowExpressiveModal;
                if (!(var7 === var1)) {
                    _fun38944_ip = 71;
                    continue _fun38944
                }
            case 69:
                var7 = false;
            case 71:
                var _closure2_slot4 = var7;
                var6 = var2.classificationId;
                if (!(var6 === var1)) {
                    _fun38944_ip = 87;
                    continue _fun38944
                }
            case 85:
                var6 = null;
            case 87:
                var _closure2_slot5 = var6;
                var _closure2_slot6 = var1;
                var _closure2_slot7 = var1;
                var _closure2_slot8 = var1;
                var _closure2_slot9 = var1;
                var10 = _closure1_slot5;
                var3 = var10.useState;
                var2 = false;
                var8 = var3.bind(var10)(var2);
                var3 = _closure1_slot4;
                var2 = 2;
                var8 = var3.bind(var1)(var8, var2);
                var2 = 0;
                var2 = var8[var2];
                var3 = 1;
                var3 = var8[var3];
                _closure2_slot6 = var3;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 14;
                var3 = var13[var3];
                var14 = var8.bind(var1)(var3);
                var13 = var14.useStateFromStores;
                var3 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var13.bind(var14)(var8, var3);
                var8 = var10.useRef;
                var3 = null;
                var14 = var3 == var13;
                var3 = undefined;
                if (var14) {
                    _fun38944_ip = 226;
                    continue _fun38944
                }
            case 220:
                var3 = var13.ageVerificationStatus;
            case 226:
                var3 = var8.bind(var10)(var3);
                var13 = var3.current;
                _closure2_slot7 = var13;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 15;
                var3 = var10[var3];
                var8 = var8.bind(var1)(var3);
                var3 = var8.useIsSuspendedUser;
                var3 = var3.bind(var8)();
                _closure2_slot8 = var3;
                var4 = _closure1_slot5;
                var10 = var4.useCallback;
                var8 = new Array(4);
                var8[0] = var13;
                var8[1] = var12;
                var8[2] = var11;
                var8[3] = var3;
                var3 = function() { // Environment: var0
                    _fun38946: for (var _fun38946_ip = 0;;) switch (_fun38946_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var3 = var5.dispatch;
                            var2 = {};
                            var4 = 'CLOSE_AGE_VERIFICATION_MODAL';
                            var2.type = var4;
                            var6 = _closure2_slot7;
                            var2.status = var6;
                            var2 = var3.bind(var5)(var2);
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun38946_ip = 69;
                                continue _fun38946
                            }
                        case 65:
                            var2 = _closure2_slot8;
                        case 69:
                            if (var2) {
                                _fun38946_ip = 124;
                                continue _fun38946
                            }
                        case 72:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.maybeOpenAgeVerificationUserFeedback;
                            var1 = {};
                            var5 = 'age_verification_intro_screen';
                            var1.location = var5;
                            var4 = _closure2_slot3;
                            var1.visibleContent = var4;
                            var1 = var2.bind(var3)(var1);
                        case 124:
                            return var0;
                    }
                };
                var8 = var10.bind(var4)(var3, var8);
                _closure2_slot9 = var8;
                var3 = var4.useCallback;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun38949: for (var _fun38949_ip = 0;;) switch (_fun38949_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun38949_ip = 354;
                                        continue _fun38949
                                    }
                                case 10:
                                    var7 = arg0;
                                    var3 = _closure2_slot6;
                                    var4 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                case 29: // try_start_0 // try_start_1
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 16;
                                    var1 = var6[var1];
                                    var8 = var5.bind(var4)(var1);
                                    var5 = var8.dispatch;
                                    var1 = {};
                                    var9 = 'INITIATE_AGE_VERIFICATION';
                                    var1.type = var9;
                                    var1 = var5.bind(var8)(var1);
                                    var5 = _closure1_slot0;
                                    var1 = 18;
                                    var1 = var6[var1];
                                    var6 = var5.bind(var4)(var1);
                                    var5 = var6.requestAgeVerification;
                                    var1 = {};
                                    var1.method = var7;
                                    var8 = _closure2_slot5;
                                    var7 = null;
                                    var8 = var7 != var8;
                                    var7 = undefined;
                                    if (!var8) {
                                        _fun38949_ip = 122;
                                        continue _fun38949
                                    }
                                case 118:
                                    var7 = _closure2_slot5;
                                case 122:
                                    var1.classificationId = var7;
                                    var1 = var5.bind(var6)(var1);
                                    SaveGenerator(address = 136);
                                case 134:
                                    return var1;
                                case 136:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun38949_ip = 257;
                                        continue _fun38949
                                    }
                                case 142:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 19;
                                    var3 = var6[var3];
                                    var6 = var5.bind(var4)(var3);
                                    var5 = var6.showAgeVerification;
                                    var3 = {};
                                    var7 = var1.verification_webview_url;
                                    var3.webviewUrl = var7;
                                    var7 = var1.verification_request_id;
                                    var3.verificationRequestId = var7;
                                    var7 = var1.verification_vendor_name;
                                    var3.verificationVendorName = var7;
                                    var7 = _closure2_slot0;
                                    var3.onComplete = var7;
                                    var7 = _closure2_slot9;
                                    var3.onClose = var7;
                                    var7 = _closure2_slot9;
                                    var3.onCancel = var7;
                                    var7 = _closure2_slot1;
                                    var3.entryPoint = var7;
                                    var7 = _closure2_slot4;
                                    var3.shouldShowExpressiveModal = var7;
                                    var3 = var5.bind(var6)(var3);
                                case 255: // try_end0
                                    _fun38949_ip = 325;
                                    continue _fun38949;
                                case 257: // try_end1
                                    var5 = _closure2_slot6;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 271: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 20;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var4)(var3);
                                    var3 = var5.showFailedToast;
                                    var1 = _closure1_slot13;
                                    var1 = var1.TIGGER_PAWTECT_ERROR;
                                    var1 = var3.bind(var5)(var1);
                                    var1 = _closure2_slot9;
                                    var1 = var1.bind(var4)();
                                case 325: // try_end2
                                    var3 = _closure2_slot6;
                                    var1 = false;
                                    var1 = var3.bind(var4)(var1);
                                    return var4;
                                case 339: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot6;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 354:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var0.bind(var1)();
                var0 = new Array(5);
                var0[0] = var9;
                var0[1] = var8;
                var0[2] = var7;
                var0[3] = var6;
                var0[4] = var5;
                var1 = var3.bind(var4)(var1, var0);
                var0 = {};
                var0.loading = var2;
                var0.initiateAgeVerification = var1;
                return var0;
        }
    };
    var2.useInitiateAgeVerification = var3;
    var3 = function arg0() {
        _fun38951: for (var _fun38951_ip = 0;;) switch (_fun38951_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 14;
                var3 = var10[var6];
                var0 = undefined;
                var8 = var9.bind(var0)(var3);
                var5 = var8.useStateFromStores;
                var3 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    _fun38952: for (var _fun38952_ip = 0;;) switch (_fun38952_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun38952_ip = 33;
                                continue _fun38952
                            }
                        case 27:
                            var0 = var1.ageVerificationStatus;
                        case 33:
                            return var0;
                    }
                };
                var8 = var5.bind(var8)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 21;
                var3 = var10[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.bind(var0)(var8);
                var3 = var10[var6];
                var13 = var9.bind(var0)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var3;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.getSuspendedUserToken;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var4 = var12.bind(var13)(var11, var4);
                var6 = var10[var6];
                var10 = var9.bind(var0)(var6);
                var9 = var10.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.isAuthenticated;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var9.bind(var10)(var6, var3);
                var9 = null;
                var6 = var9 != var5;
                if (!var6) {
                    _fun38951_ip = 166;
                    continue _fun38951
                }
            case 162:
                var6 = var9 != var8;
            case 166:
                if (!var6) {
                    _fun38951_ip = 173;
                    continue _fun38951
                }
            case 169:
                var6 = var5 !== var8;
            case 173:
                var _closure2_slot1 = var6;
                var5 = !var4;
                if (!var5) {
                    _fun38951_ip = 186;
                    continue _fun38951
                }
            case 183:
                var5 = !var3;
            case 186:
                var _closure2_slot2 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun38955: for (var _fun38955_ip = 0;;) switch (_fun38955_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun38955_ip = 14;
                                continue _fun38955
                            }
                        case 10:
                            var1 = _closure2_slot2;
                        case 14:
                            if (!var1) {
                                _fun38955_ip = 27;
                                continue _fun38955
                            }
                        case 17:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useWatchAgeVerificationStatusChange = var3;
    var3 = function arg0() {
        _fun38956: for (var _fun38956_ip = 0;;) switch (_fun38956_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun38956_ip = 29;
                    continue _fun38956
                }
            case 12:
                var2 = _closure1_slot11;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.isFullscreenAgeVerificationEntryPoint = var3;
    var3 = function arg0() {
        _fun38957: for (var _fun38957_ip = 0;;) switch (_fun38957_ip) {
            case 0:
                var3 = _closure1_slot14;
                var2 = var3.has;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var0) {
                    _fun38957_ip = 157;
                    continue _fun38957
                }
            case 34:
                var0 = 23;
                var0 = var6[var0];
                var8 = undefined;
                var3 = var5.bind(var8)(var0);
                var2 = var3.getUpdatedAgeVerificationString;
                var0 = 22;
                var1 = var6[var0];
                var1 = var5.bind(var8)(var1);
                var7 = var1.intl;
                var4 = var7.string;
                var1 = var6[var0];
                var1 = var5.bind(var8)(var1);
                var1 = var1.t;
                var1 = var1.JHNunj;
                var1 = var4.bind(var7)(var1);
                var4 = var6[var0];
                var4 = var5.bind(var8)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var0 = var6[var0];
                var0 = var5.bind(var8)(var0);
                var0 = var0.t;
                var0 = var0.xYXsr6;
                var0 = var4.bind(var7)(var0);
                var0 = var2.bind(var3)(var1, var0);
                _fun38957_ip = 208;
                continue _fun38957;
            case 157:
                var1 = 22;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.lSWVTM;
                var0 = var2.bind(var3)(var1);
            case 208:
                return var0;
        }
    };
    var2.getAgeVerificationGetStartedTitle = var3;
    var3 = function arg0, arg1() {
        _fun38958: for (var _fun38958_ip = 0;;) switch (_fun38958_ip) {
            case 0:
                var7 = arg1;
                var0 = arguments[2];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun38958_ip = 14;
                    continue _fun38958
                }
            case 12:
                var0 = false;
            case 14:
                var4 = _closure1_slot14;
                var3 = var4.has;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun38958_ip = 380;
                    continue _fun38958
                }
            case 40:
                if (var0) {
                    _fun38958_ip = 254;
                    continue _fun38958
                }
            case 46:
                var0 = null;
                if (!(var0 == var7)) {
                    _fun38958_ip = 184;
                    continue _fun38958
                }
            case 55:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 23;
                var0 = var10[var0];
                var4 = var9.bind(var5)(var0);
                var3 = var4.getUpdatedAgeVerificationString;
                var0 = 22;
                var2 = var10[var0];
                var2 = var9.bind(var5)(var2);
                var8 = var2.intl;
                var6 = var8.string;
                var2 = var10[var0];
                var2 = var9.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["+BLIGh"];
                var2 = var6.bind(var8)(var2);
                var6 = var10[var0];
                var6 = var9.bind(var5)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var0 = var10[var0];
                var0 = var9.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.HxS3oQ;
                var0 = var6.bind(var8)(var0);
                var0 = var3.bind(var4)(var2, var0);
                _fun38958_ip = 249;
                continue _fun38958;
            case 184:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 22;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var6 = var2.intl;
                var4 = var6.format;
                var3 = _closure1_slot1;
                var2 = 24;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.RpMIT0;
                var2 = {};
                var2.handleOnHelpUrlHook = var7;
                var0 = var4.bind(var6)(var3, var2);
            case 249:
                _fun38958_ip = 378;
                continue _fun38958;
            case 254:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 23;
                var2 = var10[var2];
                var6 = var8.bind(var5)(var2);
                var4 = var6.getUpdatedAgeVerificationString;
                var7 = 22;
                var2 = var10[var7];
                var2 = var8.bind(var5)(var2);
                var12 = var2.intl;
                var11 = var12.string;
                var9 = _closure1_slot1;
                var2 = 24;
                var3 = var10[var2];
                var3 = var9.bind(var5)(var3);
                var3 = var3["1/6wta"];
                var3 = var11.bind(var12)(var3);
                var7 = var10[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var10[var2];
                var2 = var9.bind(var5)(var2);
                var2 = var2.h7qzoa;
                var2 = var7.bind(var8)(var2);
                var0 = var4.bind(var6)(var3, var2);
            case 378:
                _fun38958_ip = 437;
                continue _fun38958;
            case 380:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 22;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["S/xS/w"];
                var0 = var2.bind(var3)(var1);
            case 437:
                return var0;
        }
    };
    var2.getAgeVerificationGetStartedSubtitle = var3;
    var3 = function() {
        var2 = _closure1_slot19;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 14;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot10;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot6;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun38960: for (var _fun38960_ip = 0;;) switch (_fun38960_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = !var1;
                    if (var1) {
                        _fun38960_ip = 85;
                        continue _fun38960
                    }
                case 13:
                    var4 = _closure1_slot6;
                    var3 = var4.isFeatureAgeGated;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 25;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.AgeGatedFeature;
                    var1 = var1.REACTIVE_CHECK;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun38960_ip = 82;
                        continue _fun38960
                    }
                case 68:
                    var3 = _closure1_slot10;
                    var2 = var3.shouldCallReactiveCheck;
                    var1 = var2.bind(var3)();
                case 82:
                    var0 = var1;
                case 85:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useShouldCallReactiveCheck = var3;
    var1 = function() {
        _fun38961: for (var _fun38961_ip = 0;;) switch (_fun38961_ip) {
            case 0:
                var0 = _closure1_slot18;
                var6 = undefined;
                var1 = var0.bind(var6)();
                var0 = !var1;
                if (var1) {
                    _fun38961_ip = 86;
                    continue _fun38961
                }
            case 19:
                var4 = _closure1_slot6;
                var3 = var4.isFeatureAgeGated;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 25;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.AgeGatedFeature;
                var1 = var1.REACTIVE_CHECK;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun38961_ip = 83;
                    continue _fun38961
                }
            case 69:
                var3 = _closure1_slot10;
                var2 = var3.shouldCallReactiveCheck;
                var1 = var2.bind(var3)();
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.shouldCallReactiveCheck = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 4249, 1216, 4251, 1621, 6504, 5984, 660, 1219, 5968, 4555, 1647, 566, 5991, 806, 6003, 6505, 5983, 5975, 5358, 1234, 4553, 2374, 4300, 2]);