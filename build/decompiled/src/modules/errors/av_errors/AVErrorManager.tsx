// modules/errors/av_errors/AVErrorManager.tsx
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
        _fun117728: for (var _fun117728_ip = 0;;) switch (_fun117728_ip) {
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
                _fun117728_ip = 76;
                continue _fun117728;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun117731: for (var _fun117731_ip = 0;;) switch (_fun117731_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun117731_ip = 46;
                    continue _fun117731
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun117731_ip = 55;
                    continue _fun117731
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun117731_ip = 345;
                    continue _fun117731
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun117731_ip = 323;
                    continue _fun117731
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun117731_ip = 283;
                    continue _fun117731
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun117731_ip = 270;
                    continue _fun117731
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
                    _fun117731_ip = 163;
                    continue _fun117731
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun117731_ip = 179;
                    continue _fun117731
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun117731_ip = 249;
                    continue _fun117731
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun117731_ip = 249;
                    continue _fun117731
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun117731_ip = 234;
                    continue _fun117731
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun117731_ip = 247;
                    continue _fun117731
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun117731_ip = 265;
                continue _fun117731;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun117731_ip = 283;
                continue _fun117731;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun117731_ip = 323;
                    continue _fun117731
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
                    _fun117731_ip = 330;
                    continue _fun117731
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun117732: for (var _fun117732_ip = 0;;) switch (_fun117732_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun117732_ip = 56;
                                continue _fun117732
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
                            _fun117732_ip = 67;
                            continue _fun117732;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun117733: for (var _fun117733_ip = 0;;) switch (_fun117733_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun117733_ip = 23;
                    continue _fun117733
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun117733_ip = 33;
                    continue _fun117733
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
                    _fun117733_ip = 70;
                    continue _fun117733
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun117733_ip = 55;
                    continue _fun117733
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun117734: for (var _fun117734_ip = 0;;) switch (_fun117734_ip) {
            case 0:
                var5 = arg1;
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var0 = new var8[var0](var7);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = _closure1_slot16;
                var4 = undefined;
                var1 = arg0;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun117734_ip = 103;
                    continue _fun117734
                }
            case 60:
                var6 = var2.value;
                var1 = var5.has;
                var1 = var1.bind(var5)(var6);
                if (var1) {
                    _fun117734_ip = 88;
                    continue _fun117734
                }
            case 78:
                var1 = var0.add;
                var1 = var1.bind(var0)(var6);
            case 88:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun117734_ip = 60;
                    continue _fun117734
                }
            case 103:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun117735: for (var _fun117735_ip = 0;;) switch (_fun117735_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var1 = var0.ErrorDefinitions;
                var0 = var2.type;
                var1 = var1[var0];
                var4 = var2.type;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun117735_ip = 68;
                    continue _fun117735
                }
            case 57:
                var0 = var1.makeErrorContextKey;
                var3 = var0.bind(var1)(var2);
            case 68:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ':';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = ['type'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'AVErrorManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot14 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun117737: for (var _fun117737_ip = 0;;) switch (_fun117737_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot8;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun117737_ip = 84;
                        continue _fun117737
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun117737_ip = 118;
                    continue _fun117737;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot8;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_SET_AUDIO_ENABLED = var2;
                    var2 = var0.updateActiveErrors;
                    var1.AUDIO_INPUT_DETECTED = var2;
                    var2 = var0.updateActiveErrors;
                    var1.AUDIO_SET_DISPLAY_SILENCE_WARNING = var2;
                    var2 = var0.updateActiveErrors;
                    var1.CERTIFIED_DEVICES_SET = var2;
                    var2 = var0.updateActiveErrors;
                    var1.AUDIO_SET_INPUT_DEVICE = var2;
                    var2 = var0.updateActiveErrors;
                    var1.AUDIO_SET_OUTPUT_DEVICE = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_DEVICES = var2;
                    var2 = var0.updateActiveErrors;
                    var1.RTC_CONNECTION_STATE = var2;
                    var2 = var0.updateActiveErrors;
                    var1.VOICE_STATE_UPDATES = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_SET_GO_LIVE_SOURCE = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_SOUNDSHARE_FAILED = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_NOISE_CANCELLATION_ERROR = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_ENGINE_VIDEO_STATE_CHANGED = var2;
                    var2 = var0.updateActiveErrors;
                    var1.NATIVE_SCREEN_SHARE_PICKER_UPDATE = var2;
                    var2 = var0.updateActiveErrors;
                    var1.NATIVE_SCREEN_SHARE_PICKER_ERROR = var2;
                    var2 = var0.updateActiveErrors;
                    var1.MEDIA_SESSION_JOINED = var2;
                    var2 = var0.updateActiveErrors;
                    var1.RTC_CONNECTION_UPDATE_ID = var2;
                    var2 = var0.updateActiveErrors;
                    var1.RTC_CONNECTION_VIDEO = var2;
                    var2 = var0.updateActiveErrors;
                    var1.RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS = var2;
                    var2 = var0.updateActiveErrors;
                    var1.VIDEO_STREAM_READY_TIMEOUT = var2;
                    var2 = var0.updateActiveErrors;
                    var1.CLEAR_VIDEO_STREAM_READY_TIMEOUT = var2;
                    var2 = var0.handleReportAVError;
                    var1.REPORT_AV_ERROR = var2;
                    var2 = var0.updateActiveErrors;
                    var1.STREAM_CLOSE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'updateActiveErrors';
        var4.key = var0;
        var0 = function() {
            _fun117738: for (var _fun117738_ip = 0;;) switch (_fun117738_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = var2.getVoiceChannelId;
                    var0 = var0.bind(var2)();
                    var10 = null;
                    var2 = var10 != var0;
                    var13 = null;
                    if (!var2) {
                        _fun117738_ip = 31;
                        continue _fun117738
                    }
                case 28:
                    var13 = var0;
                case 31:
                    var0 = var10 != var13;
                    var12 = null;
                    if (!var0) {
                        _fun117738_ip = 67;
                        continue _fun117738
                    }
                case 40:
                    var2 = _closure1_slot12;
                    var0 = var2.getVoiceStateForChannel;
                    var0 = var0.bind(var2)(var13);
                    var2 = var10 != var0;
                    var12 = null;
                    if (!var2) {
                        _fun117738_ip = 67;
                        continue _fun117738
                    }
                case 64:
                    var12 = var0;
                case 67:
                    var2 = _closure1_slot10;
                    var0 = var2.getAllActiveStreams;
                    var11 = var0.bind(var2)();
                    var9 = global;
                    var0 = var9.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var21 = var2;
                    var0 = new var21[var0](var20);
                    var4 = var0 instanceof Object ? var0 : var2;
                    var5 = var9.Object;
                    var3 = var5.values;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.ErrorDefinitions;
                    var8 = var3.bind(var5)(var2);
                    var2 = var8.length;
                    var3 = 0;
                    var2 = var3 < var2;
                    var7 = 0;
                    var6 = undefined;
                    var5 = undefined;
                    if (!var2) {
                        _fun117738_ip = 300;
                        continue _fun117738
                    }
                case 176:
                    var15 = var8[var7];
                    var14 = var15.getActiveErrors;
                    var2 = {};
                    var2.voiceChannelId = var13;
                    var2.voiceState = var12;
                    var2.activeStreams = var11;
                    var14 = var14.bind(var15)(var2);
                    if (!(var10 != var14)) {
                        _fun117738_ip = 288;
                        continue _fun117738
                    }
                case 212:
                    var2 = _closure1_slot16;
                    var15 = var2.bind(var0)(var14);
                    var16 = var15.bind(var0)();
                    var2 = var16.done;
                    var14 = var16;
                    var6 = var14;
                    var5 = var15;
                    if (var2) {
                        _fun117738_ip = 288;
                        continue _fun117738
                    }
                case 242:
                    var17 = var14.value;
                    var16 = var4.set;
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var0)(var17);
                    var2 = var16.bind(var4)(var2, var17);
                    var16 = var15.bind(var0)();
                    var2 = var16.done;
                    var14 = var16;
                    var6 = var14;
                    var5 = var15;
                    if (!var2) {
                        _fun117738_ip = 242;
                        continue _fun117738
                    }
                case 288:
                    var7 = var7 + 1;
                    var2 = var8.length;
                    if (var7 < var2) {
                        _fun117738_ip = 176;
                        continue _fun117738
                    }
                case 300:
                    var5 = _closure1_slot13;
                    var2 = var5.getActiveErrors;
                    var8 = var2.bind(var5)();
                    var2 = var9.Map;
                    var2 = var8 instanceof var2;
                    if (var2) {
                        _fun117738_ip = 402;
                        continue _fun117738
                    }
                case 327:
                    var6 = _closure1_slot14;
                    var5 = var6.error;
                    var2 = var9.Object;
                    var2 = var2.prototype;
                    var7 = var2.toString;
                    var2 = var7.call;
                    var12 = var2.bind(var7)(var8);
                    var2 = var9.HermesInternal;
                    var11 = var2.concat;
                    var7 = 'existingErrors is not a Map: ';
                    var2 = ' type: ';
                    var2 = var11.bind(var7)(var8, var2, var12);
                    var2 = var5.bind(var6)(var2);
                    _fun117738_ip = 813;
                    continue _fun117738;
                case 402:
                    var2 = var4.size;
                    if (!(var3 === var2)) {
                        _fun117738_ip = 423;
                        continue _fun117738
                    }
                case 411:
                    var2 = var8.size;
                    if (!(var3 !== var2)) {
                        _fun117738_ip = 813;
                        continue _fun117738
                    }
                case 423:
                    var5 = var9.Set;
                    var2 = var4.keys;
                    var20 = var2.bind(var4)();
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var21 = var3;
                    var2 = new var21[var5](var20, var19);
                    var6 = var2 instanceof Object ? var2 : var3;
                    var5 = var9.Set;
                    var2 = var8.keys;
                    var20 = var2.bind(var8)();
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var21 = var3;
                    var2 = new var21[var5](var20, var19);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var3 = var6.size;
                    var2 = var5.size;
                    if (!(var3 > var2)) {
                        _fun117738_ip = 603;
                        continue _fun117738
                    }
                case 507:
                    var3 = _closure1_slot16;
                    var2 = _closure1_slot18;
                    var2 = var2.bind(var0)(var6, var5);
                    var11 = var3.bind(var0)(var2);
                    var3 = var11.bind(var0)();
                    var2 = var3.done;
                    var7 = 12;
                    if (var2) {
                        _fun117738_ip = 603;
                        continue _fun117738
                    }
                case 541:
                    var12 = var3.value;
                    var2 = var4.get;
                    var13 = var2.bind(var4)(var12);
                    if (!(var10 != var13)) {
                        _fun117738_ip = 588;
                        continue _fun117738
                    }
                case 560:
                    var12 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var12 = var12.bind(var0)(var2);
                    var2 = var12.reportAVError;
                    var2 = var2.bind(var12)(var13);
                case 588:
                    var12 = var11.bind(var0)();
                    var2 = var12.done;
                    var3 = var12;
                    if (!var2) {
                        _fun117738_ip = 541;
                        continue _fun117738
                    }
                case 603:
                    var3 = var5.size;
                    var2 = var6.size;
                    if (!(var3 > var2)) {
                        _fun117738_ip = 766;
                        continue _fun117738
                    }
                case 620:
                    var3 = _closure1_slot16;
                    var2 = _closure1_slot18;
                    var2 = var2.bind(var0)(var5, var6);
                    var7 = var3.bind(var0)(var2);
                    var3 = var7.bind(var0)();
                    var2 = var3.done;
                    var6 = 'Error resolved: ';
                    var5 = ' ';
                    if (var2) {
                        _fun117738_ip = 766;
                        continue _fun117738
                    }
                case 663:
                    var11 = var3.value;
                    var2 = var8.get;
                    var12 = var2.bind(var8)(var11);
                    if (!(var10 != var12)) {
                        _fun117738_ip = 751;
                        continue _fun117738
                    }
                case 682:
                    var14 = var12.type;
                    var11 = _closure1_slot4;
                    var2 = _closure1_slot3;
                    var15 = var11.bind(var0)(var12, var2);
                    var12 = _closure1_slot14;
                    var11 = var12.info;
                    var13 = var9.JSON;
                    var2 = var13.stringify;
                    var13 = var2.bind(var13)(var15);
                    var2 = var9.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var6)(var14, var5, var13);
                    var2 = var11.bind(var12)(var2);
                case 751:
                    var11 = var7.bind(var0)();
                    var2 = var11.done;
                    var3 = var11;
                    if (!var2) {
                        _fun117738_ip = 663;
                        continue _fun117738
                    }
                case 766:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'ACTIVE_AV_ERRORS_CHANGED';
                    var1.type = var5;
                    var1.activeErrors = var4;
                    var1 = var2.bind(var3)(var1);
                case 813:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleReportAVError';
        var4.key = var6;
        var5 = function arg0() {
            var0 = arg0;
            var4 = var0.error;
            var3 = var0.context;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.sendAVErrorAnalyticsEvent;
            var1 = var1.bind(var2)(var4, var3);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/AVErrorManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 3716, 1670, 3523, 8031, 3, 15030, 8032, 806, 15050, 4300, 2]);