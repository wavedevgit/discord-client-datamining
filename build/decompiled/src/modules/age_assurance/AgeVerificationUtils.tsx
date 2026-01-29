// modules/age_assurance/AgeVerificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var3 = global;
    var9 = var3.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var6 = var8[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.AgeGateSource;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.SafetyToastType;
    var _closure1_slot11 = var5;
    var9 = var3.Set;
    var6 = 10;
    var5 = var8[var6];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AgeVerificationModalEntryPoint;
    var10 = var5.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT;
    var5 = new Array(3);
    var5[0] = var10;
    var10 = var8[var6];
    var10 = var7.bind(var0)(var10);
    var10 = var10.AgeVerificationModalEntryPoint;
    var10 = var10.START_STAGE_PROMPT;
    var5[1] = var10;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.AgeVerificationModalEntryPoint;
    var6 = var6.STAGE_CHANNEL_RAISE_HAND;
    var5[2] = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var14 = var6;
    var13 = var5;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot12 = var5;
    var5 = var3.Set;
    var6 = var4.NSFW_SERVER;
    var3 = new Array(6);
    var3[0] = var6;
    var6 = var4.NSFW_SERVER_INVITE;
    var3[1] = var6;
    var6 = var4.NSFW_SERVER_INVITE_EMBED;
    var3[2] = var6;
    var6 = var4.LARGE_GUILD;
    var3[3] = var6;
    var6 = var4.JOIN_LARGE_GUILD_UNDERAGE;
    var3[4] = var6;
    var4 = var4.ACCESS_LARGE_GUILD_UNDERAGE;
    var3[5] = var4;
    var4 = var5.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var5
        }
    });
    var14 = var4;
    var13 = var3;
    var3 = new var14[var5](var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot13 = var3;
    var5 = {};
    var3 = 'ctas';
    var5.CTAS = var3;
    var3 = 'content_type';
    var5.CONTENT_TYPE = var3;
    var _closure1_slot14 = var5;
    var4 = {};
    var3 = 'retry';
    var4.RETRY = var3;
    var _closure1_slot15 = var4;
    var3 = {};
    var6 = 'verified_adult';
    var3.VERIFIED_ADULT = var6;
    var6 = 'verified_teen';
    var3.VERIFIED_TEEN = var6;
    var6 = 'error';
    var3.ERROR = var6;
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/age_assurance/AgeVerificationUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot13;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.ageGateSourceHasLightboxBackdrop = var6;
    var6 = function() { // Original name: shouldShowTiggerPawtect, environment: var1
        _fun38708: for (var _fun38708_ip = 0;;) switch (_fun38708_ip) {
            case 0:
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun38708_ip = 35;
                    continue _fun38708
                }
            case 29:
                var1 = var2.ageVerificationStatus;
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var2.shouldShowTiggerPawtect = var6;
    var6 = function() { // Original name: useShouldShowTiggerPawtect, environment: var1
        _fun38709: for (var _fun38709_ip = 0;;) switch (_fun38709_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun38709_ip = 72;
                    continue _fun38709
                }
            case 66:
                var1 = var2.ageVerificationStatus;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var2.useShouldShowTiggerPawtect = var6;
    var6 = function() { // Original name: isVerifiedTeen, environment: var1
        _fun38711: for (var _fun38711_ip = 0;;) switch (_fun38711_ip) {
            case 0:
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun38711_ip = 35;
                    continue _fun38711
                }
            case 29:
                var1 = var2.ageVerificationStatus;
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_TEEN;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isVerifiedTeen = var6;
    var6 = function() { // Original name: useIsVerifiedTeen, environment: var1
        _fun38712: for (var _fun38712_ip = 0;;) switch (_fun38712_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun38712_ip = 72;
                    continue _fun38712
                }
            case 66:
                var1 = var2.ageVerificationStatus;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_TEEN;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.useIsVerifiedTeen = var6;
    var6 = function() { // Original name: isVerifiedAdult, environment: var1
        _fun38714: for (var _fun38714_ip = 0;;) switch (_fun38714_ip) {
            case 0:
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun38714_ip = 35;
                    continue _fun38714
                }
            case 29:
                var1 = var2.ageVerificationStatus;
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isVerifiedAdult = var6;
    var6 = function() { // Original name: useIsVerifiedAdult, environment: var1
        _fun38715: for (var _fun38715_ip = 0;;) switch (_fun38715_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun38715_ip = 72;
                    continue _fun38715
                }
            case 66:
                var1 = var2.ageVerificationStatus;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.VERIFIED_ADULT;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.useIsVerifiedAdult = var6;
    var2.AgeVerificationSystemNotificationEmbedKeys = var5;
    var2.AgeVerificationSystemNotificationCtaTypes = var4;
    var2.AgeVerificationSystemNotificationContentType = var3;
    var3 = function(arg0, arg1) { // Original name: isAgeVerificationMessageWithRetryCta, environment: var1
        _fun38717: for (var _fun38717_ip = 0;;) switch (_fun38717_ip) {
            case 0:
                var4 = _closure1_slot7;
                var3 = var4.getMessage;
                var2 = arg0;
                var0 = arg1;
                var2 = var3.bind(var4)(var2, var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun38717_ip = 200;
                    continue _fun38717
                }
            case 34:
                var3 = var2.embeds;
                if (!(var0 != var3)) {
                    _fun38717_ip = 200;
                    continue _fun38717
                }
            case 47:
                var3 = var2.embeds;
                var4 = var3.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun38717_ip = 200;
                    continue _fun38717
                }
            case 67:
                var4 = var2.embeds;
                var4 = var4[var3];
                var4 = var4.fields;
                if (!(var0 != var4)) {
                    _fun38717_ip = 200;
                    continue _fun38717
                }
            case 87:
                var4 = var2.embeds;
                var4 = var4[var3];
                var5 = var4.type;
                var4 = _closure1_slot10;
                var4 = var4.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
                if (!(var5 === var4)) {
                    _fun38717_ip = 200;
                    continue _fun38717
                }
            case 116:
                var2 = var2.embeds;
                var2 = var2[var3];
                var4 = var2.fields;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.rawName;
                    var0 = _closure1_slot14;
                    var0 = var0.CTAS;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var0 == var2;
                var0 = undefined;
                if (var3) {
                    _fun38717_ip = 198;
                    continue _fun38717
                }
            case 158:
                var4 = var2.rawValue;
                var3 = var4.split;
                var2 = ',';
                var3 = var3.bind(var4)(var2);
                var2 = var3.includes;
                var1 = _closure1_slot15;
                var1 = var1.RETRY;
                var0 = var2.bind(var3)(var1);
            case 198:
                return var0;
            case 200:
                var0 = false;
                return var0;
        }
    };
    var2.isAgeVerificationMessageWithRetryCta = var3;
    var3 = function() { // Original name: isAgeVerified, environment: var1
        _fun38719: for (var _fun38719_ip = 0;;) switch (_fun38719_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = null;
                var0 = var2 == var3;
                var4 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun38719_ip = 35;
                    continue _fun38719
                }
            case 29:
                var6 = var3.ageVerificationStatus;
            case 35:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 11;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.UNVERIFIED;
                var0 = var6 !== var0;
                if (!var0) {
                    _fun38719_ip = 122;
                    continue _fun38719
                }
            case 74:
                var6 = var2 == var3;
                var2 = undefined;
                if (var6) {
                    _fun38719_ip = 89;
                    continue _fun38719
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
    var2.isAgeVerified = var3;
    var3 = function() { // Original name: useIsAgeVerified, environment: var1
        _fun38720: for (var _fun38720_ip = 0;;) switch (_fun38720_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 12;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var3.bind(var5)(var2, var0);
                var2 = null;
                var0 = var2 == var3;
                var6 = undefined;
                if (var0) {
                    _fun38720_ip = 72;
                    continue _fun38720
                }
            case 66:
                var6 = var3.ageVerificationStatus;
            case 72:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 11;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.UNVERIFIED;
                var0 = var6 !== var0;
                if (!var0) {
                    _fun38720_ip = 159;
                    continue _fun38720
                }
            case 111:
                var6 = var2 == var3;
                var2 = undefined;
                if (var6) {
                    _fun38720_ip = 126;
                    continue _fun38720
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
    var2.useIsAgeVerified = var3;
    var3 = function(arg0) { // Original name: useInitiateAgeVerification, environment: var1
        _fun38722: for (var _fun38722_ip = 0;;) switch (_fun38722_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.onComplete;
                var _closure2_slot0 = var9;
                var5 = var2.entryPoint;
                var _closure2_slot1 = var5;
                var12 = var2.isRetry;
                var1 = undefined;
                if (!(var12 === var1)) {
                    _fun38722_ip = 39;
                    continue _fun38722
                }
            case 37:
                var12 = false;
            case 39:
                var _closure2_slot2 = var12;
                var11 = var2.visibleContent;
                if (!(var11 === var1)) {
                    _fun38722_ip = 55;
                    continue _fun38722
                }
            case 53:
                var11 = null;
            case 55:
                var _closure2_slot3 = var11;
                var7 = var2.shouldShowExpressiveModal;
                if (!(var7 === var1)) {
                    _fun38722_ip = 71;
                    continue _fun38722
                }
            case 69:
                var7 = false;
            case 71:
                var _closure2_slot4 = var7;
                var6 = var2.classificationId;
                if (!(var6 === var1)) {
                    _fun38722_ip = 87;
                    continue _fun38722
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
                var3 = 12;
                var3 = var13[var3];
                var14 = var8.bind(var1)(var3);
                var13 = var14.useStateFromStores;
                var3 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot8;
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
                    _fun38722_ip = 226;
                    continue _fun38722
                }
            case 220:
                var3 = var13.ageVerificationStatus;
            case 226:
                var3 = var8.bind(var10)(var3);
                var13 = var3.current;
                _closure2_slot7 = var13;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 13;
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
                    _fun38724: for (var _fun38724_ip = 0;;) switch (_fun38724_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
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
                                _fun38724_ip = 69;
                                continue _fun38724
                            }
                        case 65:
                            var2 = _closure2_slot8;
                        case 69:
                            if (var2) {
                                _fun38724_ip = 124;
                                continue _fun38724
                            }
                        case 72:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
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
                            _fun38727: for (var _fun38727_ip = 0;;) switch (_fun38727_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun38727_ip = 354;
                                        continue _fun38727
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
                                    var1 = 14;
                                    var1 = var6[var1];
                                    var8 = var5.bind(var4)(var1);
                                    var5 = var8.dispatch;
                                    var1 = {};
                                    var9 = 'INITIATE_AGE_VERIFICATION';
                                    var1.type = var9;
                                    var1 = var5.bind(var8)(var1);
                                    var5 = _closure1_slot0;
                                    var1 = 16;
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
                                        _fun38727_ip = 122;
                                        continue _fun38727
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
                                        _fun38727_ip = 257;
                                        continue _fun38727
                                    }
                                case 142:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 17;
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
                                    _fun38727_ip = 325;
                                    continue _fun38727;
                                case 257: // try_end1
                                    var5 = _closure2_slot6;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 271: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 18;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var4)(var3);
                                    var3 = var5.showFailedToast;
                                    var1 = _closure1_slot11;
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
    var3 = function(arg0) { // Original name: useWatchAgeVerificationStatusChange, environment: var1
        _fun38729: for (var _fun38729_ip = 0;;) switch (_fun38729_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 12;
                var3 = var10[var6];
                var0 = undefined;
                var8 = var9.bind(var0)(var3);
                var5 = var8.useStateFromStores;
                var3 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    _fun38730: for (var _fun38730_ip = 0;;) switch (_fun38730_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun38730_ip = 33;
                                continue _fun38730
                            }
                        case 27:
                            var0 = var1.ageVerificationStatus;
                        case 33:
                            return var0;
                    }
                };
                var8 = var5.bind(var8)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 19;
                var3 = var10[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.bind(var0)(var8);
                var3 = var10[var6];
                var13 = var9.bind(var0)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var3;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot6;
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
                    var1 = _closure1_slot6;
                    var0 = var1.isAuthenticated;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var9.bind(var10)(var6, var3);
                var9 = null;
                var6 = var9 != var5;
                if (!var6) {
                    _fun38729_ip = 166;
                    continue _fun38729
                }
            case 162:
                var6 = var9 != var8;
            case 166:
                if (!var6) {
                    _fun38729_ip = 173;
                    continue _fun38729
                }
            case 169:
                var6 = var5 !== var8;
            case 173:
                var _closure2_slot1 = var6;
                var5 = !var4;
                if (!var5) {
                    _fun38729_ip = 186;
                    continue _fun38729
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
                    _fun38733: for (var _fun38733_ip = 0;;) switch (_fun38733_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun38733_ip = 14;
                                continue _fun38733
                            }
                        case 10:
                            var1 = _closure2_slot2;
                        case 14:
                            if (!var1) {
                                _fun38733_ip = 27;
                                continue _fun38733
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
    var3 = function(arg0) { // Original name: isFullscreenAgeVerificationEntryPoint, environment: var1
        _fun38734: for (var _fun38734_ip = 0;;) switch (_fun38734_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun38734_ip = 29;
                    continue _fun38734
                }
            case 12:
                var2 = _closure1_slot9;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.isFullscreenAgeVerificationEntryPoint = var3;
    var3 = function(arg0) { // Original name: getAgeVerificationGetStartedTitle, environment: var1
        _fun38735: for (var _fun38735_ip = 0;;) switch (_fun38735_ip) {
            case 0:
                var3 = _closure1_slot12;
                var2 = var3.has;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var0) {
                    _fun38735_ip = 157;
                    continue _fun38735
                }
            case 34:
                var0 = 21;
                var0 = var6[var0];
                var8 = undefined;
                var3 = var5.bind(var8)(var0);
                var2 = var3.getUpdatedAgeVerificationString;
                var0 = 20;
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
                _fun38735_ip = 208;
                continue _fun38735;
            case 157:
                var1 = 20;
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
    var1 = function(arg0, arg1) { // Original name: getAgeVerificationGetStartedSubtitle, environment: var1
        _fun38736: for (var _fun38736_ip = 0;;) switch (_fun38736_ip) {
            case 0:
                var7 = arg1;
                var0 = arguments[2];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun38736_ip = 14;
                    continue _fun38736
                }
            case 12:
                var0 = false;
            case 14:
                var4 = _closure1_slot12;
                var3 = var4.has;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun38736_ip = 380;
                    continue _fun38736
                }
            case 40:
                if (var0) {
                    _fun38736_ip = 254;
                    continue _fun38736
                }
            case 46:
                var0 = null;
                if (!(var0 == var7)) {
                    _fun38736_ip = 184;
                    continue _fun38736
                }
            case 55:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 21;
                var0 = var10[var0];
                var4 = var9.bind(var5)(var0);
                var3 = var4.getUpdatedAgeVerificationString;
                var0 = 20;
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
                _fun38736_ip = 249;
                continue _fun38736;
            case 184:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var6 = var2.intl;
                var4 = var6.format;
                var3 = _closure1_slot1;
                var2 = 22;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.RpMIT0;
                var2 = {};
                var2.handleOnHelpUrlHook = var7;
                var0 = var4.bind(var6)(var3, var2);
            case 249:
                _fun38736_ip = 378;
                continue _fun38736;
            case 254:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 21;
                var2 = var10[var2];
                var6 = var8.bind(var5)(var2);
                var4 = var6.getUpdatedAgeVerificationString;
                var7 = 20;
                var2 = var10[var7];
                var2 = var8.bind(var5)(var2);
                var12 = var2.intl;
                var11 = var12.string;
                var9 = _closure1_slot1;
                var2 = 22;
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
                _fun38736_ip = 437;
                continue _fun38736;
            case 380:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
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
    var2.getAgeVerificationGetStartedSubtitle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1216, 4207, 1613, 5891, 660, 1219, 5875, 4512, 1636, 566, 5898, 806, 5910, 6396, 5890, 5882, 5261, 1234, 4510, 2331, 2]);