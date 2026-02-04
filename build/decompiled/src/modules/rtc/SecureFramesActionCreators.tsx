// modules/rtc/SecureFramesActionCreators.tsx
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
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun66903: for (var _fun66903_ip = 0;;) switch (_fun66903_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66903_ip = 413;
                            continue _fun66903
                        }
                    case 13:
                        var10 = var3;
                        var4 = arg1;
                        var1 = undefined;
                        var6 = undefined;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var7 = var7[var2];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'SECURE_FRAMES_SETTINGS_UPDATE';
                        var7.type = var11;
                        var7.persistentCodesEnabled = var10;
                        var7 = var8.bind(var9)(var7);
                        if (var3) {
                            _fun66903_ip = 100;
                            continue _fun66903
                        }
                    case 76:
                        var7 = var4;
                        var3 = null;
                        if (!(var3 != var7)) {
                            _fun66903_ip = 410;
                            continue _fun66903
                        }
                    case 88:
                        var3 = var4;
                        var3 = var3.bind(var1)();
                        _fun66903_ip = 410;
                        continue _fun66903;
                    case 100: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 7;
                        var3 = var8[var3];
                        var8 = var7.bind(var1)(var3);
                        var7 = var8.ensureCurrentUserPublicKey;
                        var3 = _closure1_slot7;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address = 139);
                    case 137:
                        return var3;
                    case 139:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun66903_ip = 163;
                            continue _fun66903
                        }
                    case 145:
                        var8 = var4;
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun66903_ip = 158;
                            continue _fun66903
                        }
                    case 154:
                        var4 = var4.bind(var1)();
                    case 158: // try_end0
                        _fun66903_ip = 410;
                        continue _fun66903;
                    case 163:
                        return var3;
                    case 166: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 8;
                        var3 = var7[var3];
                        var3 = var12.bind(var1)(var3);
                        var3 = var3.APIError;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var14 = var4;
                        var13 = var8;
                        var3 = new var14[var3](var13, var12);
                        var8 = var3 instanceof Object ? var3 : var4;
                        var3 = _closure1_slot1;
                        var2 = var7[var2];
                        var9 = var3.bind(var1)(var2);
                        var4 = var9.dispatch;
                        var2 = {
                            'type': 'SECURE_FRAMES_SETTINGS_UPDATE',
                            'persistentCodesEnabled': false
                        };
                        var2 = var4.bind(var9)(var2);
                        var2 = 9;
                        var2 = var7[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var10 = 10;
                        var9 = var7[var10];
                        var9 = var12.bind(var1)(var9);
                        var11 = var9.intl;
                        var9 = var11.string;
                        var7 = var7[var10];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.R0RpRX;
                        var7 = var9.bind(var11)(var7);
                        var2.title = var7;
                        var7 = var8.getAnyErrorMessage;
                        var8 = var7.bind(var8)();
                        var6 = var8;
                        var7 = null;
                        if (!(var7 == var8)) {
                            _fun66903_ip = 398;
                            continue _fun66903
                        }
                    case 344:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = var5[var10];
                        var7 = var9.bind(var1)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var5 = var5[var10];
                        var5 = var9.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.eAn6z2;
                        var5 = var7.bind(var8)(var5);
                        _fun66903_ip = 401;
                        continue _fun66903;
                    case 398:
                        var5 = var6;
                    case 401:
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                    case 410:
                        return var1;
                    case 413:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66906: for (var _fun66906_ip = 0;;) switch (_fun66906_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66906_ip = 477;
                            continue _fun66906
                        }
                    case 15:
                        var _closure4_slot0 = var7;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var4 = _closure1_slot6;
                        var3 = var4.getVoiceStateForUser;
                        var8 = _closure1_slot4;
                        var2 = var8.getId;
                        var2 = var2.bind(var8)();
                        var2 = var3.bind(var4)(var2);
                        var9 = _closure1_slot5;
                        var8 = var9.getChannel;
                        var3 = null;
                        var10 = var3 == var2;
                        var4 = undefined;
                        if (var10) {
                            _fun66906_ip = 86;
                            continue _fun66906
                        }
                    case 81:
                        var4 = var2.channelId;
                    case 86:
                        var4 = var8.bind(var9)(var4);
                        var9 = _closure1_slot4;
                        var8 = var9.getSessionId;
                        var9 = var8.bind(var9)();
                        var10 = var3 == var2;
                        var8 = undefined;
                        if (var10) {
                            _fun66906_ip = 120;
                            continue _fun66906
                        }
                    case 114:
                        var8 = var2.sessionId;
                    case 120:
                        var2 = null;
                        if (!(var9 === var8)) {
                            _fun66906_ip = 161;
                            continue _fun66906
                        }
                    case 126:
                        var8 = var3 != var4;
                        var2 = null;
                        if (!var8) {
                            _fun66906_ip = 161;
                            continue _fun66906
                        }
                    case 135:
                        var9 = var4.type;
                        var8 = _closure1_slot8;
                        var8 = var8.GUILD_STAGE_VOICE;
                        var2 = null;
                        if (!(var9 !== var8)) {
                            _fun66906_ip = 161;
                            continue _fun66906
                        }
                    case 156:
                        var2 = var4.id;
                    case 161:
                        _closure4_slot2 = var2;
                        if (!(var3 == var2)) {
                            _fun66906_ip = 194;
                            continue _fun66906
                        }
                    case 169:
                        var2 = _closure1_slot9;
                        var2 = var2.bind(var1)(var7);
                        SaveGenerator(address = 182);
                    case 180:
                        return var2;
                    case 182:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun66906_ip = 474;
                            continue _fun66906
                        }
                    case 191:
                        return var2;
                    case 194:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 11;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openSecureFramesUpdateConfirmation;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var11 = 10;
                        var10 = var8[var11];
                        var10 = var9.bind(var1)(var10);
                        var12 = var10.intl;
                        var10 = var12.string;
                        var8 = var8[var11];
                        var8 = var9.bind(var1)(var8);
                        var9 = var8.t;
                        if (var7) {
                            _fun66906_ip = 284;
                            continue _fun66906
                        }
                    case 269:
                        var8 = var9.q29xJz;
                        var8 = var10.bind(var12)(var8);
                        _fun66906_ip = 297;
                        continue _fun66906;
                    case 284:
                        var9 = var9.DRFN1B;
                        var8 = var10.bind(var12)(var9);
                    case 297:
                        var2.title = var8;
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var9 = var8[var11];
                        var9 = var12.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var8[var11];
                        var8 = var12.bind(var1)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun66906_ip = 360;
                            continue _fun66906
                        }
                    case 345:
                        var7 = var8.E66FQn;
                        var7 = var9.bind(var10)(var7);
                        _fun66906_ip = 373;
                        continue _fun66906;
                    case 360:
                        var8 = var8.y015ZY;
                        var7 = var9.bind(var10)(var8);
                    case 373:
                        var2.subtitle = var7;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = var7[var11];
                        var8 = var10.bind(var1)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var7[var11];
                        var7 = var10.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.aTuFYT;
                        var7 = var8.bind(var9)(var7);
                        var2.confirmText = var7;
                        var7 = _closure1_slot3;
                        var6 = function*() { // Environment: var5
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun66908: for (var _fun66908_ip = 0;;) switch (_fun66908_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun66908_ip = 54;
                                            continue _fun66908
                                        }
                                    case 7:
                                        var4 = _closure1_slot9;
                                        var3 = _closure4_slot0;
                                        var2 = undefined;
                                        var1 = function() { // Environment: var1
                                            var2 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var1 = 12;
                                            var4 = var3[var1];
                                            var0 = undefined;
                                            var5 = var2.bind(var0)(var4);
                                            var4 = var5.disconnect;
                                            var4 = var4.bind(var5)();
                                            var1 = var3[var1];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.selectVoiceChannel;
                                            var1 = _closure4_slot2;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var1 = var4.bind(var2)(var3, var1);
                                        SaveGenerator(address = 42);
                                    case 40:
                                        return var1;
                                    case 42:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun66908_ip = 51;
                                            continue _fun66908
                                        }
                                    case 48:
                                        return var2;
                                    case 51:
                                        return var1;
                                    case 54:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var6 = var7.bind(var1)(var6);
                        _closure4_slot1 = var6;
                        var5 = function() { // Environment: var5
                            var0 = undefined;
                            var3 = _closure4_slot1;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2.onConfirm = var5;
                        var2 = var3.bind(var4)(var2);
                    case 474:
                        return var1;
                    case 477:
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
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ChannelTypes;
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearUploadedKeyVersions = var6;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.updatePersistentCodesEnabled = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD';
        var1.type = var4;
        var4 = arg0;
        var1.keyVersion = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.addUploadedKeyVersion = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_VERIFIED_KEY_CREATE';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var4 = arg1;
        var1.key = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.createSecureFramesVerifiedKey = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_VERIFIED_KEY_DELETE';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var4 = arg1;
        var1.serializedKey = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.deleteSecureFramesVerifiedKey = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.deleteSecureFramesUserVerifiedKeys = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_TRANSIENT_KEY_CREATE';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var4 = arg1;
        var1.key = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.createSecureFramesTransientKey = var6;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SECURE_FRAMES_TRANSIENT_KEY_DELETE';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.deleteSecureFramesTransientKey = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/SecureFramesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 1372, 3521, 8266, 660, 806, 8265, 3350, 4003, 1234, 8268, 4231, 2]);