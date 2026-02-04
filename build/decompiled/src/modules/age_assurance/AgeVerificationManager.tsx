// modules/age_assurance/AgeVerificationManager.tsx
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
        _fun112602: for (var _fun112602_ip = 0;;) switch (_fun112602_ip) {
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
            case 72: // try_end0
                _fun112602_ip = 76;
                continue _fun112602;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var0 = var0.message;
        var2 = _closure1_slot9;
        var1 = var2.getMessage;
        var0 = var0.id;
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot17 = var0;
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
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.transformUser;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot13 = var7;
    var3 = var3.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyToastType;
    var3 = 11;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'AgeVerificationManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot15 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun112607: for (var _fun112607_ip = 0;;) switch (_fun112607_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun112607_ip = 86;
                        continue _fun112607
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun112607_ip = 120;
                    continue _fun112607;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = null;
                    var0._previousAgeVerificationStatus = var3;
                    var3 = function() { // Environment: var1
                        _fun112608: for (var _fun112608_ip = 0;;) switch (_fun112608_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = _closure1_slot11;
                                var0 = var1.getCurrentUser;
                                var4 = var0.bind(var1)();
                                var1 = null;
                                var5 = var1 == var4;
                                var0 = undefined;
                                var3 = undefined;
                                if (var5) {
                                    _fun112608_ip = 42;
                                    continue _fun112608
                                }
                            case 36:
                                var3 = var4.ageVerificationStatus;
                            case 42:
                                var4 = var1 != var3;
                                var1 = null;
                                if (!var4) {
                                    _fun112608_ip = 54;
                                    continue _fun112608
                                }
                            case 51:
                                var1 = var3;
                            case 54:
                                var2._previousAgeVerificationStatus = var1;
                                return var0;
                        }
                    };
                    var0.handlePostConnectionOpen = var3;
                    var1 = function(arg0) { // Environment: var1
                        _fun112609: for (var _fun112609_ip = 0;;) switch (_fun112609_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.user;
                                var0 = undefined;
                                var1 = undefined;
                                var6 = undefined;
                                var4 = undefined;
                                var _closure4_slot0 = var0;
                                var _closure4_slot1 = var0;
                                var2 = _closure1_slot12;
                                var2 = var2.bind(var0)(var5);
                                var2 = var2.ageVerificationStatus;
                                var5 = null;
                                var8 = var5 != var2;
                                var9 = null;
                                if (!var8) {
                                    _fun112609_ip = 58;
                                    continue _fun112609
                                }
                            case 55:
                                var9 = var2;
                            case 58:
                                var1 = var9;
                                var8 = _closure3_slot0;
                                var8 = var8._previousAgeVerificationStatus;
                                var9 = var8 !== var9;
                                if (!var9) {
                                    _fun112609_ip = 120;
                                    continue _fun112609
                                }
                            case 81:
                                var10 = var1;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var8 = 14;
                                var8 = var12[var8];
                                var8 = var11.bind(var0)(var8);
                                var8 = var8.AgeVerificationStatusUkAndAusOnly;
                                var8 = var8.VERIFIED_ADULT;
                                var9 = var10 === var8;
                            case 120:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var8 = 15;
                                var8 = var11[var8];
                                var11 = var10.bind(var0)(var8);
                                var10 = var11.getIsGidgetPawtectEnabled;
                                var8 = 'age-verification-manager';
                                var10 = var10.bind(var11)(var8);
                                var8 = var9;
                                if (!var9) {
                                    _fun112609_ip = 227;
                                    continue _fun112609
                                }
                            case 163:
                                var13 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var9 = 16;
                                var9 = var14[var9];
                                var12 = var13.bind(var0)(var9);
                                var11 = var12.isFeatureAgeGated;
                                var9 = 17;
                                var9 = var14[var9];
                                var9 = var13.bind(var0)(var9);
                                var9 = var9.AgeGatedFeature;
                                var9 = var9.AGE_GATED_SPACES;
                                var9 = var11.bind(var12)(var9);
                                if (var9) {
                                    _fun112609_ip = 224;
                                    continue _fun112609
                                }
                            case 221:
                                var9 = var10;
                            case 224:
                                var8 = var9;
                            case 227:
                                var6 = var8;
                            case 230: // try_start_0 // try_start_1
                                if (!var6) {
                                    _fun112609_ip = 478;
                                    continue _fun112609
                                }
                            case 236:
                                var8 = _closure1_slot10;
                                var6 = var8.getChannelId;
                                var6 = var6.bind(var8)();
                                var4 = var6;
                                _closure4_slot0 = var6;
                                var6 = false;
                                _closure4_slot1 = var6;
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var6 = 18;
                                var6 = var9[var6];
                                var9 = var8.bind(var0)(var6);
                                var8 = var9.forEach;
                                var6 = function(arg0) { // Environment: var7
                                    _fun112610: for (var _fun112610_ip = 0;;) switch (_fun112610_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.channelId;
                                            var3 = _closure1_slot8;
                                            var1 = var3.getChannel;
                                            var3 = var1.bind(var3)(var2);
                                            var1 = null;
                                            var1 = var1 != var3;
                                            if (!var1) {
                                                _fun112610_ip = 40;
                                                continue _fun112610
                                            }
                                        case 34:
                                            var1 = var3.nsfw;
                                        case 40:
                                            if (!var1) {
                                                _fun112610_ip = 93;
                                                continue _fun112610
                                            }
                                        case 43:
                                            var3 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 18;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var1 = var3.bind(var0)(var1);
                                            var0 = var1.clear;
                                            var0 = var0.bind(var1)(var2);
                                            var0 = _closure4_slot0;
                                            if (!(var2 === var0)) {
                                                _fun112610_ip = 93;
                                                continue _fun112610
                                            }
                                        case 87:
                                            var0 = true;
                                            _closure4_slot1 = var0;
                                        case 93:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var6 = var8.bind(var9)(var6);
                                var7 = _closure4_slot1;
                                var6 = var7;
                                if (!var7) {
                                    _fun112609_ip = 317;
                                    continue _fun112609
                                }
                            case 310:
                                var7 = var4;
                                var6 = var5 != var7;
                            case 317:
                                if (!var6) {
                                    _fun112609_ip = 478;
                                    continue _fun112609
                                }
                            case 323:
                                var7 = var4;
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var4 = 12;
                                var4 = var8[var4];
                                var8 = var6.bind(var0)(var4);
                                var6 = var8.fetchMessages;
                                var4 = {};
                                var4.channelId = var7;
                                var9 = _closure1_slot14;
                                var4.limit = var9;
                                var4 = var6.bind(var8)(var4);
                                var6 = _closure1_slot8;
                                var4 = var6.getChannel;
                                var6 = var4.bind(var6)(var7);
                                var4 = var5 == var6;
                                var7 = undefined;
                                if (var4) {
                                    _fun112609_ip = 399;
                                    continue _fun112609
                                }
                            case 394:
                                var7 = var6.type;
                            case 399:
                                var4 = _closure1_slot13;
                                var4 = var4.GUILD_FORUM;
                                var4 = var7 !== var4;
                                if (!var4) {
                                    _fun112609_ip = 444;
                                    continue _fun112609
                                }
                            case 416:
                                var5 = var5 == var6;
                                var7 = undefined;
                                if (var5) {
                                    _fun112609_ip = 430;
                                    continue _fun112609
                                }
                            case 425:
                                var7 = var6.type;
                            case 430:
                                var5 = _closure1_slot13;
                                var5 = var5.GUILD_MEDIA;
                                var4 = var7 !== var5;
                            case 444:
                                if (var4) {
                                    _fun112609_ip = 478;
                                    continue _fun112609
                                }
                            case 447:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 13;
                                var4 = var7[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.preloadForumThreads;
                                var4 = var4.bind(var5)(var6);
                            case 478: // try_end0
                                _fun112609_ip = 503;
                                continue _fun112609;
                            case 480: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var5 = _closure1_slot15;
                                var4 = var5.warn;
                                var3 = 'Error clearing cache and refetching messages';
                                var3 = var4.bind(var5)(var3, var6);
                            case 503: // try_end1
                                var4 = _closure3_slot0;
                                var3 = var1;
                                var4._previousAgeVerificationStatus = var3;
                                return var0;
                            case 518: // catch_target1
                                CatchBlockStart(arg_register = 0);
                                var2 = _closure3_slot0;
                                var2._previousAgeVerificationStatus = var1;
                                throw var0;
                        }
                    };
                    var0.handleCurrentUserUpdate = var1;
                    var1 = {};
                    var3 = var0.handlePostConnectionOpen;
                    var1.POST_CONNECTION_OPEN = var3;
                    var3 = var0.handleCurrentUserUpdate;
                    var1.CURRENT_USER_UPDATE = var3;
                    var2 = _closure1_slot17;
                    var1.MESSAGE_CREATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/AgeVerificationManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1372, 4249, 1670, 1621, 660, 5917, 3, 6526, 9778, 1645, 4275, 4276, 4300, 4250, 4299, 2]);