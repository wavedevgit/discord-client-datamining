// modules/auth/native/RegistrationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun100241: for (var _fun100241_ip = 0;;) switch (_fun100241_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.step;
                var6 = var0.fromStep;
                var5 = var0.toStep;
                var11 = var0.actionType;
                var10 = var0.details;
                var3 = var0.overrideRegistrationOptions;
                var2 = _closure1_slot5;
                var0 = var2.getDisplayedInviteCode;
                var4 = var0.bind(var2)();
                var9 = null;
                if (!(var9 == var3)) {
                    _fun100241_ip = 82;
                    continue _fun100241
                }
            case 62:
                var2 = _closure1_slot7;
                var0 = var2.getState;
                var0 = var0.bind(var2)();
                var3 = var0.registrationOptions;
            case 82:
                var0 = var9 != var4;
                var8 = null;
                if (!var0) {
                    _fun100241_ip = 106;
                    continue _fun100241
                }
            case 91:
                var2 = _closure1_slot4;
                var0 = var2.getInvite;
                var8 = var0.bind(var2)(var4);
            case 106:
                var0 = var9 != var8;
                var7 = null;
                if (!var0) {
                    _fun100241_ip = 119;
                    continue _fun100241
                }
            case 115:
                var7 = 'invite';
            case 119:
                var4 = var9 == var3;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun100241_ip = 136;
                    continue _fun100241
                }
            case 130:
                var2 = var3.email;
            case 136:
                var2 = var9 != var2;
                var12 = 'email';
                if (var2) {
                    _fun100241_ip = 175;
                    continue _fun100241
                }
            case 147:
                var4 = var9 == var3;
                var2 = undefined;
                if (var4) {
                    _fun100241_ip = 162;
                    continue _fun100241
                }
            case 156:
                var2 = var3.phone;
            case 162:
                var2 = var9 != var2;
                var12 = null;
                if (!var2) {
                    _fun100241_ip = 175;
                    continue _fun100241
                }
            case 171:
                var12 = 'phone';
            case 175:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot10;
                var2 = var1.REGISTER_TRANSITION;
                var1 = {};
                var1.step = var13;
                var1.identity_type = var12;
                var1.action_type = var11;
                var1.action_details = var10;
                var1.registration_source = var7;
                var10 = var9 == var8;
                var7 = undefined;
                if (var10) {
                    _fun100241_ip = 257;
                    continue _fun100241
                }
            case 252:
                var7 = var8.code;
            case 257:
                var1.invite_code = var7;
                var10 = var9 == var8;
                var7 = undefined;
                if (var10) {
                    _fun100241_ip = 290;
                    continue _fun100241
                }
            case 271:
                var10 = var8.channel;
                var11 = var9 == var10;
                var7 = undefined;
                if (var11) {
                    _fun100241_ip = 290;
                    continue _fun100241
                }
            case 285:
                var7 = var10.id;
            case 290:
                var1.invite_channel_id = var7;
                var10 = var9 == var8;
                var7 = undefined;
                if (var10) {
                    _fun100241_ip = 323;
                    continue _fun100241
                }
            case 304:
                var10 = var8.channel;
                var11 = var9 == var10;
                var7 = undefined;
                if (var11) {
                    _fun100241_ip = 323;
                    continue _fun100241
                }
            case 318:
                var7 = var10.type;
            case 323:
                var1.invite_channel_type = var7;
                var10 = var9 == var8;
                var7 = undefined;
                if (var10) {
                    _fun100241_ip = 356;
                    continue _fun100241
                }
            case 337:
                var10 = var8.guild;
                var11 = var9 == var10;
                var7 = undefined;
                if (var11) {
                    _fun100241_ip = 356;
                    continue _fun100241
                }
            case 351:
                var7 = var10.id;
            case 356:
                var1.invite_guild_id = var7;
                var10 = var9 == var8;
                var7 = undefined;
                if (var10) {
                    _fun100241_ip = 390;
                    continue _fun100241
                }
            case 370:
                var8 = var8.inviter;
                var9 = var9 == var8;
                var7 = undefined;
                if (var9) {
                    _fun100241_ip = 390;
                    continue _fun100241
                }
            case 385:
                var7 = var8.id;
            case 390:
                var1.invite_inviter_id = var7;
                var1.from_step = var6;
                var1.to_step = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.clearRegistrationErrorMessage;
    var _closure1_slot6 = var7;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot8 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/RegistrationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun100242: for (var _fun100242_ip = 0;;) switch (_fun100242_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var5 = var0.isConsentRequired;
                var0 = var6.email;
                var7 = null;
                var0 = var7 != var0;
                if (var0) {
                    _fun100242_ip = 37;
                    continue _fun100242
                }
            case 27:
                var1 = var6.phoneToken;
                var0 = var7 != var1;
            case 37:
                if (!var0) {
                    _fun100242_ip = 124;
                    continue _fun100242
                }
            case 40:
                var1 = var6.username;
                var1 = var7 != var1;
                if (!var1) {
                    _fun100242_ip = 121;
                    continue _fun100242
                }
            case 52:
                var2 = var6.password;
                var2 = var7 != var2;
                if (!var2) {
                    _fun100242_ip = 118;
                    continue _fun100242
                }
            case 65:
                var3 = var6.birthday;
                var3 = var7 != var3;
                if (!var3) {
                    _fun100242_ip = 115;
                    continue _fun100242
                }
            case 78:
                var4 = var6.consent;
                var4 = var7 != var4;
                if (!var4) {
                    _fun100242_ip = 112;
                    continue _fun100242
                }
            case 91:
                var5 = !var5;
                if (var5) {
                    _fun100242_ip = 109;
                    continue _fun100242
                }
            case 97:
                var7 = var6.consent;
                var6 = true;
                var5 = var6 === var7;
            case 109:
                var4 = var5;
            case 112:
                var3 = var4;
            case 115:
                var2 = var3;
            case 118:
                var1 = var2;
            case 121:
                var0 = var1;
            case 124:
                return var0;
        }
    };
    var2.hasAllRegistrationFieldsCompleted = var4;
    var2.trackRegTransition = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun100244: for (var _fun100244_ip = 0;;) switch (_fun100244_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.step;
                    var8 = var0.toStep;
                    var2 = var0.actionType;
                    var7 = var0.details;
                    var4 = var0.overrideRegistrationOptions;
                    var0 = _closure1_slot9;
                    var0 = var0.VIEWED;
                    if (!(var2 === var0)) {
                        _fun100244_ip = 106;
                        continue _fun100244
                    }
                case 50:
                    var0 = _closure1_slot8;
                    var0 = var0.CAPTCHA;
                    if (!(var1 === var0)) {
                        _fun100244_ip = 106;
                        continue _fun100244
                    }
                case 64:
                    var6 = _closure1_slot12;
                    var5 = {};
                    var5.step = var1;
                    var0 = _closure2_slot0;
                    var0 = var0.current;
                    var5.fromStep = var0;
                    var5.actionType = var2;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    return var0;
                case 106:
                    var0 = _closure1_slot9;
                    var0 = var0.VIEWED;
                    if (!(var2 !== var0)) {
                        _fun100244_ip = 173;
                        continue _fun100244
                    }
                case 120:
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun100244_ip = 169;
                        continue _fun100244
                    }
                case 129:
                    var6 = _closure1_slot12;
                    var5 = {};
                    var5.step = var1;
                    var5.toStep = var8;
                    var5.actionType = var2;
                    var5.details = var7;
                    var5.overrideRegistrationOptions = var4;
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var0 = undefined;
                case 169:
                    var0 = undefined;
                    _fun100244_ip = 234;
                    continue _fun100244;
                case 173:
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun100244_ip = 219;
                        continue _fun100244
                    }
                case 179:
                    var4 = _closure1_slot12;
                    var3 = {};
                    var3.step = var1;
                    var5 = _closure2_slot0;
                    var5 = var5.current;
                    var3.fromStep = var5;
                    var3.actionType = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                case 219:
                    var2 = _closure2_slot0;
                    var2.current = var1;
                    var0 = undefined;
                case 234:
                    return var0;
            }
        };
        return var0;
    };
    var2.getTrackRegTransition = var3;
    var3 = function(arg0) { // Environment: var1
        var5 = arg0;
        var8 = _closure1_slot3;
        var7 = var8.useContext;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 8;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var2 = var2.TrackRegistrationContext;
        var2 = var7.bind(var8)(var2);
        var _closure2_slot0 = var2;
        var2 = var5.destinationStep;
        var _closure2_slot1 = var2;
        var2 = var5.onPress;
        var _closure2_slot2 = var2;
        var2 = _closure1_slot11;
        var0 = 9;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.HeaderBackButton;
        var0 = {};
        var10 = var0;
        var9 = var5;
        var5 = copyDataProperties(var10, var9);
        var5 = function() {
            _fun100246: for (var _fun100246_ip = 0;;) switch (_fun100246_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun100246_ip = 69;
                        continue _fun100246
                    }
                case 13:
                    var2 = _closure1_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot0;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var2.step = var5;
                    var4 = _closure1_slot9;
                    var4 = var4.VIEWED;
                    var2.actionType = var4;
                    var2 = var3.bind(var1)(var2);
                    var0 = _closure2_slot2;
                    var0 = var0.bind(var1)();
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = 'onPress';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.BackButtonWithTracking = var3;
    var1 = function(arg0) { // Environment: var1
        _fun100247: for (var _fun100247_ip = 0;;) switch (_fun100247_ip) {
            case 0:
                var3 = arg0;
                var0 = -1;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 302;
                    continue _fun100247
                }
            case 16:
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 271;
                    continue _fun100247
                }
            case 25:
                var0 = 40333;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 240;
                    continue _fun100247
                }
            case 38:
                var0 = 50022;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 209;
                    continue _fun100247
                }
            case 51:
                var0 = 70005;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 178;
                    continue _fun100247
                }
            case 61:
                var0 = 70003;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 147;
                    continue _fun100247
                }
            case 71:
                var0 = 70008;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 116;
                    continue _fun100247
                }
            case 81:
                var0 = 70011;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 116;
                    continue _fun100247
                }
            case 91:
                var0 = undefined;
                if (!(var0 !== var3)) {
                    _fun100247_ip = 108;
                    continue _fun100247
                }
            case 97:
                var0 = var3.toString;
                var0 = var0.bind(var3)();
                return var0;
            case 108:
                var0 = 'No error code';
                return var0;
            case 116:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Phone number already associated with an account';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 147:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Unable to send sms to phone number';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 178:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Phone number not mobile';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 209:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Phone number invalid';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 240:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Blocked by proxy';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 271:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Internal server error';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 302:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': Captcha was not completed';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var2.getCommonErrorDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3314, 8332, 13039, 13040, 660, 33, 795, 13037, 4704, 2]);