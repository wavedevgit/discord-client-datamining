// modules/voice_dares/stores/VoiceDaresLocalStateStore.tsx
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
        _fun50521: for (var _fun50521_ip = 0;;) switch (_fun50521_ip) {
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
                _fun50521_ip = 74;
                continue _fun50521;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun50524: for (var _fun50524_ip = 0;;) switch (_fun50524_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var0 = var1 == var3;
                if (var0) {
                    _fun50524_ip = 48;
                    continue _fun50524
                }
            case 12:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.encodeVoiceDareToFields;
                var1 = var0.bind(var2)(var3);
            case 48:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 8;
                var0 = var7[var4];
                var6 = undefined;
                var8 = var5.bind(var6)(var0);
                var0 = _closure1_slot9;
                var0 = var8.bind(var6)(var0, var3);
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = _closure1_slot10;
                var4 = var5.bind(var6)(var4, var1);
                var0 = !var0;
                if (var0) {
                    _fun50524_ip = 111;
                    continue _fun50524
                }
            case 108:
                var0 = !var4;
            case 111:
                if (!var0) {
                    _fun50524_ip = 124;
                    continue _fun50524
                }
            case 114:
                _closure1_slot9 = var3;
                _closure1_slot10 = var1;
                var0 = true;
            case 124:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var2 = _closure1_slot12;
        var1 = undefined;
        var0 = null;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        _fun50526: for (var _fun50526_ip = 0;;) switch (_fun50526_ip) {
            case 0:
                var6 = '';
                var4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var3 = global;
                var2 = 62;
                var1 = 8;
                var5 = 0;
            case 20:
                var7 = var4.charAt;
                var9 = var3.Math;
                var8 = var9.floor;
                var10 = var3.Math;
                var0 = var10.random;
                var0 = var0.bind(var10)();
                var0 = var2 * var0;
                var0 = var8.bind(var9)(var0);
                var0 = var7.bind(var4)(var0);
                var0 = var6 + var0;
                var5 = var5 + 1;
                var6 = var0;
                if (var5 < var1) {
                    _fun50526_ip = 20;
                    continue _fun50526
                }
            case 82:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1, arg2() {
        var4 = _closure1_slot16;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1, arg2() {
        var0 = {};
        var4 = arg0;
        var5 = var0;
        var1 = copyDataProperties(var5, var4);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.VoiceDareMessageKind;
        var2 = var1.STATE;
        var1 = 'messageKind';
        var0[var1] = var2;
        var2 = arg1;
        var1 = 'phase';
        var0[var1] = var2;
        var2 = arg2;
        var1 = 'startedAtMs';
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        var0 = {};
        var4 = arg0;
        var5 = var0;
        var1 = copyDataProperties(var5, var4);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.VoiceDareMessageKind;
        var2 = var1.COMMAND;
        var1 = 'messageKind';
        var0[var1] = var2;
        var2 = arg1;
        var1 = 'commandType';
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun50530: for (var _fun50530_ip = 0;;) switch (_fun50530_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.trim;
                var4 = var0.bind(var1)();
                var3 = var4.length;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 6;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.VOICE_DARE_MAX_PROMPT_LENGTH;
                var0 = var4;
                if (!(!(var3 <= var2))) {
                    _fun50530_ip = 92;
                    continue _fun50530
                }
            case 56:
                var3 = var4.slice;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var2 = var1.VOICE_DARE_MAX_PROMPT_LENGTH;
                var1 = 0;
                var0 = var3.bind(var4)(var1, var2);
            case 92:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun50531: for (var _fun50531_ip = 0;;) switch (_fun50531_ip) {
            case 0:
                var2 = arg0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 6;
                var3 = var0[var4];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.VoiceDareSpiciness;
                var3 = var3.MILD;
                if (!(var3 !== var2)) {
                    _fun50531_ip = 122;
                    continue _fun50531
                }
            case 44:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var4];
                var3 = var5.bind(var0)(var3);
                var3 = var3.VoiceDareSpiciness;
                var3 = var3.SPICY;
                if (!(var3 !== var2)) {
                    _fun50531_ip = 117;
                    continue _fun50531
                }
            case 77:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var3.bind(var0)(var1);
                var1 = var1.VoiceDareSpiciness;
                var1 = var1.UNHINGED;
                if (!(var1 !== var2)) {
                    _fun50531_ip = 112;
                    continue _fun50531
                }
            case 110:
                return var0;
            case 112:
                var0 = 2;
                return var0;
            case 117:
                var0 = 1;
                return var0;
            case 122:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getVoiceDaresExperimentConfig;
        var0 = 'VoiceDaresLocalStateStore';
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ActivityTypes;
    var _closure1_slot8 = var1;
    var1 = null;
    var _closure1_slot9 = var1;
    var _closure1_slot10 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun50534: for (var _fun50534_ip = 0;;) switch (_fun50534_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50534_ip = 69;
                        continue _fun50534
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50534_ip = 105;
                    continue _fun50534;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'getLocalVoiceDare';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFieldDistribution';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getVoiceDareCustomStatusActivity';
        var4.key = var6;
        var5 = function() {
            _fun50537: for (var _fun50537_ip = 0;;) switch (_fun50537_ip) {
                case 0:
                    var0 = _closure1_slot10;
                    var3 = null;
                    var1 = var3 == var0;
                    var0 = null;
                    if (var1) {
                        _fun50537_ip = 204;
                        continue _fun50537
                    }
                case 21:
                    var5 = _closure1_slot10;
                    var1 = var5.state;
                    var1 = var3 != var1;
                    var2 = '';
                    if (!var1) {
                        _fun50537_ip = 70;
                        continue _fun50537
                    }
                case 41:
                    var7 = var5.state;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = '\u2063';
                    var2 = var6.bind(var1)(var7);
                case 70:
                    var1 = {};
                    var4 = _closure1_slot8;
                    var4 = var4.CUSTOM_STATUS;
                    var1.type = var4;
                    var6 = var5.name;
                    var7 = var3 != var6;
                    var4 = 'Custom Status';
                    if (!var7) {
                        _fun50537_ip = 107;
                        continue _fun50537
                    }
                case 104:
                    var4 = var6;
                case 107:
                    var1.name = var4;
                    var1.state = var2;
                    var2 = var5.details;
                    if (!(var3 == var2)) {
                        _fun50537_ip = 129;
                        continue _fun50537
                    }
                case 125:
                    var2 = {};
                    _fun50537_ip = 145;
                    continue _fun50537;
                case 129:
                    var4 = {};
                    var6 = var5.details;
                    var4.details = var6;
                    var2 = var4;
                case 145:
                    var9 = var1;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var2 = var5.partyId;
                    if (!(var3 == var2)) {
                        _fun50537_ip = 169;
                        continue _fun50537
                    }
                case 165:
                    var2 = {};
                    _fun50537_ip = 191;
                    continue _fun50537;
                case 169:
                    var3 = {};
                    var4 = {};
                    var5 = var5.partyId;
                    var4.id = var5;
                    var3.party = var4;
                    var2 = var3;
                case 191:
                    var9 = var1;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var0 = var1;
                case 204:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VoiceDaresLocalStateStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun50538: for (var _fun50538_ip = 0;;) switch (_fun50538_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50538_ip = 26;
                    continue _fun50538
                }
            case 16:
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                _fun50538_ip = 56;
                continue _fun50538;
            case 26:
                var2 = _closure1_slot12;
                var1 = arg0;
                var4 = var1.voiceDare;
                var1 = function arg0() {
                    _fun50539: for (var _fun50539_ip = 0;;) switch (_fun50539_ip) {
                        case 0:
                            var4 = arg0;
                            var12 = var4.durationSec;
                            var0 = global;
                            var2 = var0.Number;
                            var1 = var2.isFinite;
                            var1 = var1.bind(var2)(var12);
                            if (var1) {
                                _fun50539_ip = 71;
                                continue _fun50539
                            }
                        case 34:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.VOICE_DARE_DEFAULT_DURATION_MIN;
                            var1 = 60;
                            var3 = var1 * var2;
                            _fun50539_ip = 176;
                            continue _fun50539;
                        case 71:
                            var7 = var0.Math;
                            var6 = var7.max;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var1 = 6;
                            var2 = var14[var1];
                            var11 = undefined;
                            var2 = var13.bind(var11)(var2);
                            var2 = var2.VOICE_DARE_MIN_DURATION_MIN;
                            var8 = 60;
                            var2 = var8 * var2;
                            var10 = var0.Math;
                            var9 = var10.min;
                            var1 = var14[var1];
                            var1 = var13.bind(var11)(var1);
                            var1 = var1.VOICE_DARE_MAX_DURATION_MIN;
                            var8 = var8 * var1;
                            var11 = var0.Math;
                            var1 = var11.floor;
                            var1 = var1.bind(var11)(var12);
                            var1 = var9.bind(var10)(var8, var1);
                            var3 = var6.bind(var7)(var2, var1);
                        case 176:
                            var12 = var4.failAfterHours;
                            var2 = var0.Number;
                            var1 = var2.isFinite;
                            var1 = var1.bind(var2)(var12);
                            if (var1) {
                                _fun50539_ip = 232;
                                continue _fun50539
                            }
                        case 202:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var6.bind(var1)(var2);
                            var2 = var1.VOICE_DARE_DEFAULT_FAIL_AFTER_HOURS;
                            _fun50539_ip = 326;
                            continue _fun50539;
                        case 232:
                            var7 = var0.Math;
                            var6 = var7.max;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var8 = 6;
                            var1 = var14[var8];
                            var11 = undefined;
                            var1 = var13.bind(var11)(var1);
                            var1 = var1.VOICE_DARE_MIN_FAIL_AFTER_HOURS;
                            var10 = var0.Math;
                            var9 = var10.min;
                            var8 = var14[var8];
                            var8 = var13.bind(var11)(var8);
                            var8 = var8.VOICE_DARE_MAX_FAIL_AFTER_HOURS;
                            var11 = var0.Math;
                            var0 = var11.floor;
                            var0 = var0.bind(var11)(var12);
                            var0 = var9.bind(var10)(var8, var0);
                            var2 = var6.bind(var7)(var1, var0);
                        case 326:
                            var1 = var4.spiciness;
                            var0 = function arg0() {
                                _fun50540: for (var _fun50540_ip = 0;;) switch (_fun50540_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 6;
                                        var0 = var4[var0];
                                        var4 = undefined;
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var0.VoiceDareSpiciness;
                                        var0 = var0.UNHINGED;
                                        var2 = _closure1_slot19;
                                        var3 = var2.bind(var4)(var1);
                                        var2 = var2.bind(var4)(var0);
                                        var3 = var3 - var2;
                                        var2 = 0;
                                        if (!(var3 <= var2)) {
                                            _fun50540_ip = 67;
                                            continue _fun50540
                                        }
                                    case 64:
                                        var0 = var1;
                                    case 67:
                                        return var0;
                                }
                            };
                            var6 = undefined;
                            var1 = var0.bind(var6)(var1);
                            var0 = {};
                            var7 = _closure1_slot14;
                            var7 = var7.bind(var6)();
                            var0.dareId = var7;
                            var7 = var4.guildId;
                            var0.guildId = var7;
                            var7 = var4.channelId;
                            var0.channelId = var7;
                            var7 = var4.senderId;
                            var0.senderId = var7;
                            var7 = var4.targetId;
                            var0.targetId = var7;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 6;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.VoiceDareMessageKind;
                            var7 = var7.OFFER;
                            var0.messageKind = var7;
                            var7 = var4.kind;
                            var0.kind = var7;
                            var5 = _closure1_slot18;
                            var4 = var4.prompt;
                            var4 = var5.bind(var6)(var4);
                            var0.prompt = var4;
                            var0.durationSec = var3;
                            var0.failAfterHours = var2;
                            var0.spiciness = var1;
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var4);
                var0 = var2.bind(var3)(var1);
            case 56:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_OFFERED = var8;
    var8 = function arg0() {
        _fun50541: for (var _fun50541_ip = 0;;) switch (_fun50541_ip) {
            case 0:
                var1 = _closure1_slot20;
                var2 = undefined;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun50541_ip = 26;
                    continue _fun50541
                }
            case 16:
                var1 = _closure1_slot13;
                var1 = var1.bind(var2)();
                return var1;
            case 26:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var5 = var1.bind(var3)();
                var1 = _closure1_slot12;
                var4 = _closure1_slot15;
                var3 = arg0;
                var3 = var3.voiceDare;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var0 = var6.bind(var2)(var0);
                var0 = var0.VoiceDarePhase;
                var0 = var0.RUNNING;
                var0 = var4.bind(var2)(var3, var0, var5);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_ACCEPT_OFFER = var8;
    var8 = function arg0() {
        _fun50542: for (var _fun50542_ip = 0;;) switch (_fun50542_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50542_ip = 26;
                    continue _fun50542
                }
            case 16:
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                _fun50542_ip = 86;
                continue _fun50542;
            case 26:
                var2 = _closure1_slot12;
                var5 = _closure1_slot15;
                var4 = arg0;
                var4 = var4.voiceDare;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.VoiceDarePhase;
                var1 = var1.CANCELLED;
                var1 = var5.bind(var3)(var4, var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_DECLINE_OFFER = var8;
    var8 = function arg0() {
        _fun50543: for (var _fun50543_ip = 0;;) switch (_fun50543_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50543_ip = 26;
                    continue _fun50543
                }
            case 16:
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                _fun50543_ip = 86;
                continue _fun50543;
            case 26:
                var2 = _closure1_slot12;
                var5 = _closure1_slot16;
                var4 = arg0;
                var4 = var4.voiceDare;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.VoiceDarePhase;
                var1 = var1.COMPLETED;
                var1 = var5.bind(var3)(var4, var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_COMPLETE = var8;
    var8 = function arg0() {
        _fun50544: for (var _fun50544_ip = 0;;) switch (_fun50544_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50544_ip = 26;
                    continue _fun50544
                }
            case 16:
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                _fun50544_ip = 86;
                continue _fun50544;
            case 26:
                var2 = _closure1_slot12;
                var5 = _closure1_slot16;
                var4 = arg0;
                var4 = var4.voiceDare;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.VoiceDarePhase;
                var1 = var1.FAILED;
                var1 = var5.bind(var3)(var4, var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_CHICKEN_OUT = var8;
    var8 = function arg0() {
        _fun50545: for (var _fun50545_ip = 0;;) switch (_fun50545_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50545_ip = 26;
                    continue _fun50545
                }
            case 16:
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                _fun50545_ip = 86;
                continue _fun50545;
            case 26:
                var2 = _closure1_slot12;
                var5 = _closure1_slot17;
                var4 = arg0;
                var4 = var4.voiceDare;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.VoiceDareCommandType;
                var1 = var1.COMPLETE_REQUESTED;
                var1 = var5.bind(var3)(var4, var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_REQUEST_COMPLETE = var8;
    var8 = function arg0() {
        _fun50546: for (var _fun50546_ip = 0;;) switch (_fun50546_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun50546_ip = 26;
                    continue _fun50546
                }
            case 16:
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                _fun50546_ip = 86;
                continue _fun50546;
            case 26:
                var2 = _closure1_slot12;
                var5 = _closure1_slot17;
                var4 = arg0;
                var4 = var4.voiceDare;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.VoiceDareCommandType;
                var1 = var1.CANCEL_REQUESTED;
                var1 = var5.bind(var3)(var4, var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_REQUEST_CANCEL = var8;
    var8 = function arg0() {
        _fun50547: for (var _fun50547_ip = 0;;) switch (_fun50547_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot9;
                var6 = null;
                var0 = var6 != var0;
                if (!var0) {
                    _fun50547_ip = 120;
                    continue _fun50547
                }
            case 19:
                var1 = _closure1_slot9;
                var2 = var1.messageKind;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var7.bind(var4)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.OFFER;
                var1 = var2 === var1;
                if (!var1) {
                    _fun50547_ip = 117;
                    continue _fun50547
                }
            case 70:
                var2 = var5.dareId;
                var2 = var6 == var2;
                if (var2) {
                    _fun50547_ip = 103;
                    continue _fun50547
                }
            case 83:
                var6 = _closure1_slot9;
                var6 = var6.dareId;
                var5 = var5.dareId;
                var2 = var6 === var5;
            case 103:
                if (!var2) {
                    _fun50547_ip = 114;
                    continue _fun50547
                }
            case 106:
                var3 = _closure1_slot13;
                var2 = var3.bind(var4)();
            case 114:
                var1 = var2;
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var1.VOICE_DARES_LOCAL_CANCEL_OFFER = var8;
    var8 = function() {
        var1 = _closure1_slot13;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var1.VOICE_DARES_LOCAL_CLEARED = var8;
    var3 = function() {
        var1 = _closure1_slot13;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_dares/stores/VoiceDaresLocalStateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 5671, 5672, 644, 5673, 566, 806, 2]);